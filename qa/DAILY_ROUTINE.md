# Golden Horizons Daily Article QA Routine

Runs weekdays at **05:52 America/New_York** as a Claude Code cloud routine,
before the 07:20 ET newsletter (Make scenario 6367241). Hard stop: report sent
by **07:00 ET** with whatever is done.

Tools in this folder (excluded from the site build: Next.js only compiles
`src/`, and there are no `.ts/.tsx` files here):

| File | What it does |
|---|---|
| `check_article.py` | Offline V4 contract checker. JSON by default, `--table` for a summary, `--changed-since "26 hours ago"` to pick files from `origin/main`. Exit 1 on any FAIL. |
| `sheet_status.py` | Read-only sheet view: Manual queue, stuck `Needs Review` rows with live-page verification and *proposed* cell edits, duplicate-slug anomalies. Never writes. |
| `score_rubric.md` | 0–100 rubric, verdicts, mandatory fact checks. |

## Guardrails (never violate)

1. Never push or merge to `main`. Every change is a branch + PR that Oded approves.
2. Never insert, delete, reorder or rename sheet columns; never bulk-overwrite the
   sheet. **The routine currently has no sheet write access, so it only reports
   proposed edits to cells D/F/K/L** (Oded applies them).
3. Never run, activate, deactivate or edit Make scenarios. Never send or schedule
   newsletters. Never touch beehiiv or Brevo.
4. Never change an article's `slug` or image URLs (frontmatter `image` and the 2 body images).
5. Never print, log or commit secrets or tokens.
6. Never invent facts. Every price, threshold, rule, advisory level and statistic
   comes from a source fetched **today**. Unverifiable → narrow the claim or remove it.

## Steps

### 0. Time gate
If the current America/New_York hour is not 05, stop immediately and do nothing
(the routine fires at 09:52 and 10:52 UTC so one of them lands at 05:52 ET
across daylight-saving changes).

### 1. Collect
```
git fetch origin
python qa/check_article.py --table --changed-since "26 hours ago"
```
(If `qa/` is not yet on `main`, run from branch `qa/daily-checker`.)
Skip any slug that already has an open PR whose branch starts `qa/fix-<slug>-`.

### 2. Per article: check, fact-check, score
1. Checker result (JSON).
2. Mandatory fact checks from `score_rubric.md`: State Department advisory
   (country level + date + state/province level for each named city — note
   `travel.state.gov` blocks automated fetches; use the official JSON feed
   `https://cadataapi.state.gov/api/TravelAdvisories` for level and date, and a
   search for state/province levels it truncates), Medicare
   2026 deductibles for any procedure comparison, visa income thresholds, neutral
   U.S. prices, local prices with source + date.
3. Score with the rubric → PUBLISH / MINOR-FIX / MAJOR-REWRITE / FACT-RISK-HOLD.

### 3. Fix (MINOR-FIX, MAJOR-REWRITE, FACT-RISK-HOLD)
1. Research: several searches, fetch each source you cite.
2. Rewrite to the V4 contract. Keep slug, title intent, `image`, both body image URLs.
   Prefer the smallest edit that fixes the issues for MINOR-FIX.
3. Re-run `check_article.py` until it passes. Diff frontmatter against `main`:
   `slug` and `image` must be identical.
4. Branch `qa/fix-<slug>-<YYYYMMDD>` from `origin/main`, commit only that file, push, open a PR.
   PR body:
   - Score before → after, verdict
   - Issue list (checker + fact checks)
   - Sources used (full URLs, fetched today)
   - **Newsletter impact:** "In today's 07:20 send" if the sheet row is
     `Published` with column A empty (it will go out unfixed unless Oded merges
     and Netlify finishes deploying, ~12–14 min, before 07:20), otherwise "Not in today's send".

### 4. Manual queue
`python qa/sheet_status.py` lists up to 2 rows with D = `Manual` (lowest row first).
For each: write the article from scratch to V4 using column E as the slug and G/H/I
as images (if missing, leave the fields empty and say so in the PR). Branch
`qa/new-<slug>-<YYYYMMDD>`, one PR each. Report the proposed L-cell text
"Draft PR opened <date> <PR link>"; do not change D.

### 5. Stuck rows
`sheet_status.py` checks rows with D = `Needs Review` and J = 200/201: if
`https://golden-horizons.org/articles/<slug>` returns 200 and its H1 matches
column B, it proposes D=`Published`, F=URL, K=today, L=`Auto-verified live <date>`.
It refuses when the slug also appears on another row (unsticking could double-send
the newsletter) or the live title doesn't match the topic. Put every proposal and
refusal in the report.

### 6. Report
Gmail connector → **odedsun@gmail.com** (if Gmail is unavailable, open a GitHub
issue titled `QA report <date>` instead).

- Subject: `GH QA <date>: X passed, Y fixes ready, Z new drafts`
- Body (under 200 words + table):
  - Table: article | score | verdict | top issue | PR link
  - Sheet edits for Oded to apply (cell → value), including unstuck rows
  - Anything needing Oded's decision (fact-risk holds, anomalies, today's-send risk)
  - Anything pending if the 07:00 ET budget ran out
