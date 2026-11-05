#!/usr/bin/env python3
"""Read-only view of the GHWEBPAGE sheet for the daily QA routine.

- Lists up to N rows where D = Manual (oldest = lowest row number first).
- For rows where D = Needs Review and J in (200, 201), fetches the live article
  and proposes the D/F/K/L cell edits when it is live and shows the right title.
- Flags anomalies (slug/topic mismatch, duplicate slugs).

It NEVER writes to the sheet. Proposed edits are printed for the report.

Usage: python qa/sheet_status.py [--manual-limit 2] [--json] [--csv export.csv]
"""
from __future__ import annotations

import argparse
import csv
import datetime as dt
import html
import io
import json
import re
import sys
import urllib.request
from collections import Counter

SHEET_ID = "1R0wkUL23EKRkA6PpmQqjJ4T1y-uY_mQQzHNrF8helL4"
CSV_URL = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:csv&sheet=GHWEBPAGE"
SITE = "https://golden-horizons.org/articles/"
UA = {"User-Agent": "GoldenHorizonsQA/1.0"}
# Column letters -> 0-based index
A, B, C, D, E, F, G, H, I, J, K, L = range(12)


def fetch(url: str, timeout: int = 30) -> tuple[int, str]:
    req = urllib.request.Request(url, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.status, resp.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:  # network error
        return 0, str(e)


def norm(s: str) -> str:
    s = html.unescape(s).lower().replace("’", "'")
    return re.sub(r"[^a-z0-9$]+", " ", s).strip()


def page_title(page: str) -> str:
    m = re.search(r"<h1[^>]*>(.*?)</h1>", page, re.S | re.I) or re.search(r"<title>(.*?)</title>", page, re.S | re.I)
    return re.sub(r"<[^>]+>", "", m.group(1)).strip() if m else ""


def main(argv=None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except AttributeError:
        pass
    ap = argparse.ArgumentParser()
    ap.add_argument("--manual-limit", type=int, default=2)
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--csv", help="read the GHWEBPAGE tab from a local CSV export instead of fetching it")
    args = ap.parse_args(argv)

    if args.csv:
        with open(args.csv, encoding="utf-8") as fh:
            body = fh.read()
    else:
        code, body = fetch(CSV_URL)
        if code != 200:
            print(json.dumps({"error": f"sheet fetch failed: HTTP {code}; export the tab to CSV and pass --csv"}))
            return 2
    rows = list(csv.reader(io.StringIO(body)))
    data = [(i, r + [""] * (21 - len(r))) for i, r in enumerate(rows[1:], start=2)]
    today = dt.date.today().isoformat()

    out = {"date": today, "status_counts": Counter(r[D] for _, r in data), "manual": [],
           "stuck": [], "anomalies": []}

    for i, r in data:
        if r[D].strip() == "Manual" and len(out["manual"]) < args.manual_limit:
            out["manual"].append({"row": i, "topic": r[B], "category": r[C], "slug": r[E],
                                  "images": [x for x in (r[G], r[H], r[I]) if x]})

    slug_counts = Counter(r[E] for _, r in data if r[E])
    for slug, n in slug_counts.items():
        if n > 1:
            rws = [i for i, r in data if r[E] == slug]
            out["anomalies"].append(f"slug '{slug}' appears in rows {rws}")

    for i, r in data:
        if r[D].strip() != "Needs Review" or r[J].strip() not in ("200", "201"):
            continue
        slug, url = r[E].strip(), SITE + r[E].strip()
        code, page = fetch(url)
        title = page_title(page) if code == 200 else ""
        # Title check: at least 70% of the topic's words appear in the live H1/title.
        topic_words = [w for w in norm(r[B]).split() if len(w) > 2]
        hit = sum(1 for w in topic_words if w in norm(title))
        matches = bool(topic_words) and hit / len(topic_words) >= 0.7
        item = {"row": i, "slug": slug, "topic": r[B], "http": code, "live_title": title, "title_matches": matches}
        # A Published row with empty column A is newsletter-eligible, so never unstick
        # a row whose slug already exists on another row (would double-send).
        dupes = [j for j, o in data if j != i and o[E].strip() == slug]
        if dupes:
            item["reason_not_unstuck"] = f"slug also on rows {dupes}; unsticking could double-send the newsletter"
        elif code == 200 and matches:
            item["proposed_edits"] = {f"D{i}": "Published", f"F{i}": url, f"K{i}": today,
                                      f"L{i}": f"Auto-verified live {today}"}
        else:
            item["reason_not_unstuck"] = ("not live" if code != 200 else
                                          "live page title does not match column B topic (slug/topic mismatch?)")
        out["stuck"].append(item)

    if args.json:
        print(json.dumps(out, ensure_ascii=False, indent=2))
    else:
        print(f"Sheet {today}: {dict(out['status_counts'])}")
        print(f"Manual rows to write ({len(out['manual'])}):")
        for m in out["manual"]:
            print(f"  row {m['row']}: {m['slug']} [{m['category']}] {m['topic']} images={len(m['images'])}")
        print(f"Needs Review + J=200/201 ({len(out['stuck'])}):")
        for s in out["stuck"]:
            what = s.get("proposed_edits") or s.get("reason_not_unstuck")
            print(f"  row {s['row']}: {s['slug']} HTTP {s['http']} -> {what}")
        for a in out["anomalies"]:
            print(f"  ANOMALY: {a}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
