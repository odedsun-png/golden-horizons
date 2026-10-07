#!/usr/bin/env python3
"""Golden Horizons V4 article checker.

Deterministic, offline checks against the V4 format contract (see
qa/DAILY_ROUTINE.md). No network access.

Usage:
    python qa/check_article.py src/content/articles/<slug>.md [...]
    python qa/check_article.py --table FILE [FILE ...]   # one-line-per-file summary
    python qa/check_article.py --changed-since "26 hours ago"

Exit code 0 when every file passes, 1 otherwise. Default output is JSON.
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlparse

REPO_ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = REPO_ROOT / "src" / "content" / "articles"
APP_DIR = REPO_ROOT / "src" / "app"

FRONTMATTER_FIELDS = ["title", "category", "slug", "date", "image", "description", "featured"]

APPROVED_LABELS = {
    "🟢 SOLID OPTION",
    "🟢 STRONG FIT TO TEST",
    "🟡 WORTH TESTING — VERIFY COSTS",
    "🟡 WORTH TESTING — VERIFY RESIDENCY",
    "🟡 WORTH TESTING — VERIFY HEALTHCARE",
    "🟡 WORTH TESTING — VERIFY SAFETY",
    "🟠 HIGH-HURDLE — TEST FIRST",
    "🔴 POOR FIT FOR MOST RETIREES",
}

RELATED_GUIDES = [
    "/healthcare-abroad-for-american-retirees",
    "/retiring-abroad-checklist-for-americans",
    "/visa-rules-for-americans-retiring-abroad",
    "/taxes-for-americans-retiring-overseas",
]

ABOUT_PARAGRAPH = (
    "Golden Horizons helps Americans approaching retirement or already retired explore what their "
    "Social Security, pension income, and savings might make possible abroad. We focus on the decision "
    "that matters: what your money may make possible, whether you can legally stay, whether healthcare "
    "and ordinary daily life work for you, and what you should test before committing. Travel first. "
    "Test the reality. Then decide."
)

# Fixed tail sections, in order, after the headline-specific H2s.
TAIL_SECTIONS = [
    "Practical Comparison",
    "The Trade-Off",
    "The Golden Horizons 30-Day Test",
    "Frequently Asked Questions",
    "Check Today's Information Before You Decide",
    "Sources & Verification",
    "Related Golden Horizons Guides",
    "About Golden Horizons",
    "Final Verdict",
]

COST_LINES = [
    r"\*\*Estimated core monthly spend:\*\*\s*\$",
    r"\*\*Remaining buffer vs the \$[\d,]+ budget:\*\*",
    r"\*\*Income requirement:\*\*",
    r"\*\*How your money compares to the US:\*\*",
]
COST_TYPICAL_DAY = r"^\*\*A Typical Day in [^*]+\*\*\s*$"

BANNED_WORDS = [
    "nestled", "vibrant", "bustling", "thriving", "tapestry", "testament", "myriad", "plethora",
    "seamlessly", "game-changer", "holistic", "robust", "delve", "breathtaking", "paradise", "must-see",
]
BANNED_OPENERS = [r"^\s*Picture an?\b", r"^\s*Imagine\b"]
META_PHRASES = [
    "the memo", "this evidence", "this research", "is not established", "does not establish",
    "not documented",
]

BROKER_DOMAINS = [
    "placidway", "curemeridian", "bookimed", "medicaltourismco", "medicaltourismpackages",
    "health-tourism", "maphospitals", "medigo", "medicaldepartures", "medical-departures",
]

FOREIGN_CURRENCY = [
    (r"[€£¥₡₱₹₩]", "currency symbol"),
    (r"\b(?:Mex|MX|R|C|A|NZ|S|HK|NT|US)\$", "prefixed dollar sign"),
    (r"\b(?:EUR|MXN|GTQ|PAB|CRC|COP|PEN|THB|VND|MYR|PHP|GBP|CAD|AUD|BRL|ARS|CLP|UYU|DOP|HNL|NIO|BZD)\b",
     "ISO currency code"),
    (r"\bQ\s?\d", "quetzal amount"),
    (r"\bB/\.\s?\d", "balboa amount"),
    (r"\b\d[\d,.]*\s?(?:euros?|pesos?|quetzales|quetzals?|colones|soles|baht|dong|ringgit|reais|lempiras)\b",
     "foreign-currency word"),
    (r"\(~\s?\$", "(~$ conversion"),
    (r"~\s?\$", "~$ approximation"),
]

_CAP = r"[A-ZÁÉÍÓÚÑ][\w'’.-]+"
HOSPITAL_RE = re.compile(
    # "Hospital Chiriquí", "Clínica de la Mujer" ...
    r"\b(?:Hospital|Clínica|Clinica|Médica|Medica|Centro Médico|Medical Center)\s+"
    r"(?:(?:de|del|la|las|los|el|San|Santa)\s+)*" + _CAP + r"(?:\s+" + _CAP + r")*"
    # ... or "Mae Lewis Medical Center", "Russald Medical Center"
    r"|\b" + _CAP + r"(?:\s+" + _CAP + r")*\s+(?:Hospital|Medical Center|Clinic)\b"
)
GOV_DOMAIN_RE = re.compile(
    r"(?:\.gov$|\.gov\.|\.gob\.|\.gob$|\.gouv\.|\.gc\.ca$|europa\.eu$|\.gv\.at$|\.admin\.ch$|"
    r"\.govt\.nz$|\.go\.(?:th|jp|kr|id|cr)$|\.gub\.uy$|\.gc\.ca$|\.mil$)"
)
SAFETY_VISA_RE = re.compile(
    r"\b(?:travel advisory|Level [1-4]\b|visa|residen(?:cy|ce permit)|pensionado|D7)\b", re.I
)
MONTHS = ("January|February|March|April|May|June|July|August|September|October|November|December")
LINK_RE = re.compile(r"(?<!!)\[([^\]]+)\]\(([^)\s]+)\)")
IMAGE_RE = re.compile(r"^!\[[^\]]*\]\([^)]+\)\s*$")
DOLLAR_RE = re.compile(r"\$\d[\d,]*(?:\.\d+)?")
NUMBER_RE = re.compile(r"\d[\d,]*(?:\.\d+)?%?")


# ---------------------------------------------------------------- helpers

def domain_of(url: str) -> str:
    host = urlparse(url).netloc.lower()
    return host[4:] if host.startswith("www.") else host


def is_broker(domain: str) -> bool:
    flat = domain.replace(".", "")
    return any(b.replace("-", "") in flat.replace("-", "") for b in BROKER_DOMAINS)


def is_gov(domain: str) -> bool:
    return bool(GOV_DOMAIN_RE.search(domain))


def split_frontmatter(text: str):
    if not text.startswith("---\n"):
        return None, text
    end = text.find("\n---\n", 4)
    if end == -1:
        return None, text
    return text[4:end], text[end + 5:]


def parse_frontmatter(block: str):
    fields = []
    for line in block.splitlines():
        m = re.match(r"^([A-Za-z_][\w-]*):\s?(.*)$", line)
        if m:
            val = m.group(2).strip()
            if len(val) >= 2 and val[0] == val[-1] and val[0] in "\"'":
                val = val[1:-1]
            fields.append((m.group(1), val))
    return fields


def sections(body: str):
    """Return list of (h2 title, content) plus the preamble before the first H2."""
    parts = re.split(r"^## (.+?)\s*$", body, flags=re.M)
    preamble = parts[0]
    out = [(parts[i].strip(), parts[i + 1]) for i in range(1, len(parts), 2)]
    return preamble, out


def subsections(content: str):
    parts = re.split(r"^### (.+?)\s*$", content, flags=re.M)
    return [(parts[i].strip(), parts[i + 1]) for i in range(1, len(parts), 2)]


def sentences(text: str):
    text = re.sub(r"\s+", " ", text).strip()
    # Protect decimals, abbreviations like "U.S." and "Dr."
    protected = re.sub(r"(\d)\.(\d)", r"\1<DOT>\2", text)
    protected = re.sub(r"\b(U\.S|U\.K|Dr|Mr|Mrs|Ms|St|vs|e\.g|i\.e|etc|approx)\.", lambda m: m.group(0).replace(".", "<DOT>"), protected)
    chunks = [c for c in re.split(r"(?<=[.!?])\s+(?=[A-Z\"“(])", protected) if c.strip()]
    return [c.replace("<DOT>", ".") for c in chunks]


def known_slugs():
    slugs = {p.stem for p in ARTICLES_DIR.glob("*.md")} if ARTICLES_DIR.exists() else set()
    routes = {p.name for p in APP_DIR.iterdir() if p.is_dir()} if APP_DIR.exists() else set()
    return slugs, routes


# ---------------------------------------------------------------- checker

class Report:
    def __init__(self, path: str):
        self.path = path
        self.checks: dict[str, list[str]] = {}

    def add(self, check: str, issue: str | None = None):
        self.checks.setdefault(check, [])
        if issue:
            self.checks[check].append(issue)

    def as_dict(self, slug: str, category: str):
        checks = [{"check": k, "pass": not v, "issues": v} for k, v in self.checks.items()]
        return {
            "file": self.path,
            "slug": slug,
            "category": category,
            "pass": all(c["pass"] for c in checks),
            "failed": [c["check"] for c in checks if not c["pass"]],
            "checks": checks,
        }


def check_text(text: str, path: str = "<stdin>") -> dict:
    r = Report(path)
    text = text.replace("\r\n", "\n")

    # --- code fences
    r.add("no_code_fences")
    if "```" in text or "~~~" in text:
        r.add("no_code_fences", "code fence found")

    # --- frontmatter
    r.add("frontmatter")
    fm_block, body = split_frontmatter(text)
    fm = {}
    if fm_block is None:
        r.add("frontmatter", "missing or malformed frontmatter")
    else:
        fields = parse_frontmatter(fm_block)
        names = [k for k, _ in fields]
        fm = dict(fields)
        if names != FRONTMATTER_FIELDS:
            r.add("frontmatter", f"fields must be exactly {FRONTMATTER_FIELDS} in order; got {names}")
        for k in FRONTMATTER_FIELDS:
            if k in fm and k not in ("featured",) and not fm[k]:
                r.add("frontmatter", f"empty field: {k}")
        if fm.get("image", "").startswith("["):
            r.add("frontmatter", "image must be a single URL string, not an array")
    slug = fm.get("slug", Path(path).stem)
    category = fm.get("category", "")
    is_cost = category.strip().lower() == "cost"
    is_health = category.strip().lower() == "healthcare"

    r.add("description_length")
    desc = fm.get("description", "")
    if len(desc) > 160:
        r.add("description_length", f"description is {len(desc)} chars (max 160)")
    if fm_block is not None and slug != Path(path).stem and not path.startswith("<"):
        r.add("frontmatter", f"slug '{slug}' does not match filename '{Path(path).stem}'")

    # --- H1 + status line
    r.add("h1_and_status")
    h1s = re.findall(r"^# (.+)$", body, flags=re.M)
    if len(h1s) != 1:
        r.add("h1_and_status", f"expected exactly 1 H1, found {len(h1s)}")
    status_label = None
    m = re.search(r"^# .+\n+(.+)$", body, flags=re.M)
    sm = re.match(r"^\*\*Golden Horizons Status:\*\*\s*(.+?)\s*$", m.group(1)) if m else None
    if not sm:
        r.add("h1_and_status", "line after H1 must be '**Golden Horizons Status:** <label>'")
    else:
        status_label = sm.group(1)

    preamble, secs = sections(body)
    sec_titles = [t for t, _ in secs]
    sec = {t: c for t, c in secs}

    # --- verdict label
    r.add("approved_label")
    r.add("status_equals_verdict")
    verdict_label = None
    vm = re.search(r"\*\*Golden Horizons Verdict:\s*(.+?)\*\*", sec.get("Final Verdict", ""))
    if vm:
        verdict_label = vm.group(1).strip()
    else:
        r.add("status_equals_verdict", "Final Verdict missing '**Golden Horizons Verdict: <label>**' line")
    for name, lbl in (("Status", status_label), ("Verdict", verdict_label)):
        if lbl and lbl not in APPROVED_LABELS:
            r.add("approved_label", f"{name} label not approved: '{lbl}'")
    if status_label and verdict_label and status_label != verdict_label:
        r.add("status_equals_verdict", f"Status '{status_label}' != Verdict '{verdict_label}'")

    # --- short answer
    r.add("short_answer")
    sa = re.search(r"^> \*\*THE SHORT ANSWER:\*\*(.*(?:\n>.*)*)", preamble, flags=re.M)
    if not sa:
        r.add("short_answer", "missing '> **THE SHORT ANSWER:**' blockquote before first H2")
    else:
        sa_text = re.sub(r"^>\s?", "", sa.group(1), flags=re.M)
        n_sent = len(sentences(sa_text))
        n_nums = len(NUMBER_RE.findall(sa_text))
        if not 3 <= n_sent <= 5:
            r.add("short_answer", f"{n_sent} sentences (need 3-5)")
        if n_nums < 4:
            r.add("short_answer", f"{n_nums} numbers (need 4+)")
        if not re.search(r"\b(catch|but|however|trade-off|downside)\b", sa_text, re.I):
            r.add("short_answer", "no catch stated (expected 'The catch' / 'but' / 'however')")

    # --- section order
    r.add("section_order")
    if not sec_titles or sec_titles[0] != "Retirement Snapshot":
        r.add("section_order", "first H2 must be 'Retirement Snapshot'")
    missing = [t for t in TAIL_SECTIONS if t not in sec_titles]
    if missing:
        r.add("section_order", f"missing sections: {missing}")
    if "Practical Comparison" in sec_titles:
        pc = sec_titles.index("Practical Comparison")
        if pc < 2:
            r.add("section_order", "need at least 1 headline-specific H2 between Snapshot and Practical Comparison")
        tail = sec_titles[pc:]
        if tail != TAIL_SECTIONS:
            r.add("section_order", f"tail sections out of order or extra: {tail}")

    # --- practical comparison
    r.add("practical_comparison")
    cards = subsections(sec.get("Practical Comparison", ""))
    if not 3 <= len(cards) <= 5:
        r.add("practical_comparison", f"{len(cards)} ### cards (need 3-5)")
    for title, c in cards:
        for lbl in ("**What the evidence says:**", "**What to check next:**"):
            if lbl not in c:
                r.add("practical_comparison", f"card '{title}' missing {lbl}")

    # --- trade-off
    r.add("trade_off")
    to = sec.get("The Trade-Off", "")
    for lbl in ("**What you may gain:**", "**What you may give up:**"):
        if lbl not in to:
            r.add("trade_off", f"missing {lbl}")

    # --- body images
    r.add("body_images")
    imgs = [ln for ln in body.splitlines() if IMAGE_RE.match(ln.strip())]
    if len(imgs) != 2:
        r.add("body_images", f"{len(imgs)} body images (need exactly 2)")
    for heading in ("The Golden Horizons 30-Day Test", "Frequently Asked Questions"):
        hm = re.search(r"^## " + re.escape(heading) + r"\s*$", body, flags=re.M)
        if hm:
            before = [ln for ln in body[: hm.start()].splitlines() if ln.strip()]
            if not before or not IMAGE_RE.match(before[-1].strip()):
                r.add("body_images", f"no image immediately before '## {heading}'")

    # --- 30-day test
    r.add("thirty_day_test")
    steps = re.findall(r"^\s*(?:\d+\.|[-*])\s+\S", sec.get("The Golden Horizons 30-Day Test", ""), flags=re.M)
    if not 5 <= len(steps) <= 8:
        r.add("thirty_day_test", f"{len(steps)} actions (need about 6)")

    # --- FAQ
    r.add("faq")
    faqs = subsections(sec.get("Frequently Asked Questions", ""))
    if len(faqs) != 5:
        r.add("faq", f"{len(faqs)} questions (need exactly 5)")
    faq_domains = []
    for q, a in faqs:
        a = a.strip()
        if not re.search(r"\d", a):
            r.add("faq", f"answer to '{q}' has no number")
        em = re.search(r"\(\[([^\]]+)\]\((https?://[^)\s]+)\)\)\s*$", a)
        if not em:
            r.add("faq", f"answer to '{q}' must end with ([domain.com](https://full-url))")
            continue
        d = domain_of(em.group(2))
        faq_domains.append(d)
        if em.group(1).lower().removeprefix("www.") != d:
            r.add("faq", f"citation text '{em.group(1)}' != link domain '{d}'")
        if is_broker(d):
            r.add("broker_only_sources", f"FAQ '{q}' cites broker domain {d}")
    if len(set(faq_domains)) != len(faq_domains):
        r.add("faq", f"FAQ citation domains repeat: {faq_domains}")

    # --- sources
    r.add("sources")
    src = sec.get("Sources & Verification", "")
    src_links = [(t, u) for t, u in LINK_RE.findall(src) if u.startswith("http")]
    if not 3 <= len(src_links) <= 8:
        r.add("sources", f"{len(src_links)} source links (need 3-8)")
    if not re.search(rf"^Information checked: (?:{MONTHS}) \d{{1,2}}, \d{{4}}\s*$", src, flags=re.M):
        r.add("sources", "missing 'Information checked: <Month D, YYYY>' line")

    # --- broker-only prices
    r.add("broker_only_sources")
    src_lines = [ln for ln in src.splitlines() if LINK_RE.search(ln)]
    nonbroker_text = " ".join(ln for ln in src_lines
                              if not any(is_broker(domain_of(u)) for _, u in LINK_RE.findall(ln)))
    nonbroker_prices = set(DOLLAR_RE.findall(nonbroker_text))
    for ln in src_lines:
        for _, u in LINK_RE.findall(ln):
            if is_broker(domain_of(u)):
                only = [p for p in DOLLAR_RE.findall(ln) if p not in nonbroker_prices]
                if only:
                    r.add("broker_only_sources", f"price(s) {only} sourced only to broker {domain_of(u)}")
    if src_links and all(is_broker(domain_of(u)) for _, u in src_links):
        r.add("broker_only_sources", "every source is a broker")

    # --- source diversity + gov
    all_links = [u for _, u in LINK_RE.findall(body) if u.startswith("http")]
    domains = {domain_of(u) for u in all_links}
    r.add("source_diversity")
    if len(domains) < 5:
        r.add("source_diversity", f"{len(domains)} distinct source domains (need 5+): {sorted(domains)}")
    r.add("gov_source")
    if SAFETY_VISA_RE.search(body) and not any(is_gov(d) for d in domains):
        r.add("gov_source", "safety/visa claims but no .gov or official government link")

    # --- related guides + about
    r.add("related_guides")
    rel = [u for _, u in LINK_RE.findall(sec.get("Related Golden Horizons Guides", ""))]
    if rel != RELATED_GUIDES:
        r.add("related_guides", f"must be exactly {RELATED_GUIDES}; got {rel}")
    r.add("about_paragraph")
    about = re.sub(r"\s+", " ", sec.get("About Golden Horizons", "")).strip()
    if about != ABOUT_PARAGRAPH:
        r.add("about_paragraph", "About Golden Horizons paragraph is not the exact approved text")

    # --- USD only (Sources link titles are exempt; one issue per line)
    r.add("usd_only")
    fm_lines = text.count("\n") - body.count("\n")
    src_start = body.find("## Sources & Verification")
    src_end = body.find("## Related Golden Horizons Guides")
    hits: dict[int, list[str]] = {}
    for pat, label in FOREIGN_CURRENCY:
        for hit in re.finditer(pat, body):
            if src_start != -1 and src_start <= hit.start() < (src_end if src_end != -1 else len(body)):
                continue
            if re.search(r"https?://\S*$", body[max(0, hit.start() - 200): hit.start()]):
                continue
            ln = body[: hit.start()].count("\n") + 1 + fm_lines
            hits.setdefault(ln, [])
            if label not in hits[ln]:
                hits[ln].append(label)
    for ln, labels in sorted(hits.items()):
        line_text = text.splitlines()[ln - 1].strip()
        r.add("usd_only", f"line {ln}: {', '.join(labels)}: '{line_text[:90]}…'")

    # --- cost blocks
    r.add("cost_blocks")
    has_any_cost = [p for p in COST_LINES if re.search(p, body)] + (
        ["typical_day"] if re.search(COST_TYPICAL_DAY, body, flags=re.M) else [])
    if is_cost:
        for p in COST_LINES:
            if not re.search(p, body):
                r.add("cost_blocks", f"Cost article missing line matching {p}")
        tdm = re.search(COST_TYPICAL_DAY, body, flags=re.M)
        if not tdm:
            r.add("cost_blocks", "Cost article missing '**A Typical Day in <City>**'")
        else:
            nxt = re.search(r"^(?:##|\*\*[A-Z][^*]+:?\*\*\s*$)", body[tdm.end():], flags=re.M)
            block = body[tdm.end(): tdm.end() + (nxt.start() if nxt else 1200)]
            if len(DOLLAR_RE.findall(block)) < 3:
                r.add("cost_blocks", "'A Typical Day' block has fewer than 3 dollar prices")
    elif has_any_cost:
        r.add("cost_blocks", f"non-Cost article contains Cost-only blocks ({len(has_any_cost)} found)")

    # --- healthcare named facilities
    r.add("named_hospitals")
    if is_health:
        names = {h.group(0) for h in HOSPITAL_RE.finditer(body)}
        if len(names) < 2:
            r.add("named_hospitals", f"Healthcare article names {len(names)} hospital/clinic(s) (need 2+): {sorted(names)}")

    # --- voice
    r.add("banned_words")
    prose = LINK_RE.sub(lambda m: m.group(1), body)
    prose = re.sub(r"https?://\S+", "", prose)
    for w in BANNED_WORDS:
        for hit in re.finditer(r"\b" + re.escape(w) + r"\b", prose, re.I):
            r.add("banned_words", f"'{hit.group(0)}'")
    for pat in BANNED_OPENERS:
        for hit in re.finditer(pat, prose, flags=re.M | re.I):
            r.add("banned_words", f"banned opener: '{prose[hit.start():hit.start() + 40].strip()}…'")
    r.add("research_meta_language")
    for ph in META_PHRASES:
        if re.search(r"\b" + re.escape(ph) + r"\b", prose, re.I):
            r.add("research_meta_language", f"'{ph}'")
    stray = re.sub(r"\*\*What the evidence says:\*\*", "", prose)
    n_ev = len(re.findall(r"\bevidence\b", stray, re.I))
    if n_ev:
        r.add("research_meta_language", f"'evidence' used {n_ev}x outside the card label")

    # --- repeated dollar figures before FAQ
    r.add("dollar_repetition")
    faq_pos = body.find("## Frequently Asked Questions")
    pre = body[: faq_pos if faq_pos != -1 else len(body)]
    # The headline budget is exempt where it is structural: the H1 and the buffer label.
    pre = re.sub(r"^# .*$", "", pre, flags=re.M)
    pre = re.sub(r"\*\*Remaining buffer vs the \$[\d,]+ budget:\*\*", "", pre)
    counts: dict[str, int] = {}
    for d in DOLLAR_RE.findall(pre):
        counts[d] = counts.get(d, 0) + 1
    for d, n in sorted(counts.items(), key=lambda x: -x[1]):
        if n > 4:
            r.add("dollar_repetition", f"{d} appears {n}x before the FAQ (max 4)")

    # --- internal links
    r.add("internal_links")
    slugs, routes = known_slugs()
    for _, u in LINK_RE.findall(body):
        if not u.startswith("/"):
            continue
        p = u.split("#")[0].split("?")[0].rstrip("/")
        if p in RELATED_GUIDES:
            continue
        parts = [x for x in p.split("/") if x]
        ok = (len(parts) == 2 and parts[0] == "articles" and parts[1] in slugs) or \
             (len(parts) == 1 and (parts[0] in slugs or parts[0] in routes))
        if not ok:
            r.add("internal_links", f"broken or unapproved internal link: {u}")

    return r.as_dict(slug, category)


def check_file(path: str) -> dict:
    return check_text(Path(path).read_text(encoding="utf-8"), path)


def changed_since(since: str) -> list[str]:
    out = subprocess.run(
        ["git", "-C", str(REPO_ROOT), "log", "--since", since, "--name-only", "--diff-filter=AM",
         "--format=", "origin/main", "--", "src/content/articles/*.md"],
        capture_output=True, text=True, check=True).stdout
    files = sorted({ln.strip() for ln in out.splitlines() if ln.strip()})
    return [str(REPO_ROOT / f) for f in files if (REPO_ROOT / f).exists()]


def main(argv=None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except AttributeError:
        pass
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("files", nargs="*")
    ap.add_argument("--table", action="store_true", help="print a compact table instead of JSON")
    ap.add_argument("--changed-since", help="check articles added/changed on origin/main since this git date")
    args = ap.parse_args(argv)

    files = list(args.files)
    if args.changed_since:
        files += changed_since(args.changed_since)
    if not files:
        ap.error("no files given")

    results = [check_file(f) for f in files]
    if args.table:
        print(f"{'file':60} {'result':6}  failed checks")
        for res in results:
            print(f"{Path(res['file']).name[:60]:60} {'PASS' if res['pass'] else 'FAIL':6}  {', '.join(res['failed']) or '-'}")
    else:
        print(json.dumps(results if len(results) > 1 else results[0], ensure_ascii=False, indent=2))
    return 0 if all(r["pass"] for r in results) else 1


if __name__ == "__main__":
    sys.exit(main())
