# Golden Horizons Editorial Rubric (0–100)

Score every article after `qa/check_article.py` has run. A checker FAIL caps
**Structure** at 4/10 and **SEO/AEO** at 9/15 until fixed.

| Area | Points | Full marks when |
|---|---|---|
| **Fact-Trust** | 30 | Every price, threshold, rule, advisory level and statistic traces to a source fetched today. Mandatory fact checks below all pass. No broker-only prices. Small samples (Numbeo/Expatistan with few entries) are labeled. |
| **Click & Help** | 20 | Title states a concrete number or outcome a 60–75 reader wants (8). Short answer gives 4+ numbers and the catch in 3–5 sentences (6). Practical value: the 30-Day Test and "What to check next" lines are specific actions with names, prices or phone-able questions (6). |
| **Voice** | 15 | "You", short paragraphs, number first, plain words. No banned words, no hype, no "Picture a…/Imagine…", no research-meta language. |
| **SEO/AEO** | 15 | Description ≤160 chars with the main number; FAQ questions match real search phrasing, each answered in the first sentence with a number and a distinct-domain citation; H2s contain the city/topic. |
| **Structure** | 10 | `check_article.py` passes (V4 contract). |
| **Retiree relevance** | 10 | Answers the 65+ questions: Medicare/Medigap comparison where relevant, visa income bar, healthcare access at age, safety for older travelers. |

## Verdicts

| Verdict | Rule |
|---|---|
| **PUBLISH** | 85 or above, checker passes, no fact risk |
| **MINOR-FIX** | 75–84 |
| **MAJOR-REWRITE** | below 75 |
| **FACT-RISK-HOLD** | any unverified or false *material* fact, regardless of score |

A material fact is any figure or rule the reader could act on: prices, visa
income thresholds, advisory levels, Medicare costs, insurance eligibility ages.

## Mandatory fact checks (every article)

1. **State Department advisory.** Fetch `travel.state.gov` for the country.
   Record the country level and the advisory date, **and the state/province
   level for every city named** (e.g. Mexico is Level 2 but Baja California is
   Level 3). Mismatch with the article = FACT-RISK-HOLD.
2. **Medicare.** Any surgery or procedure comparison must state what Original
   Medicare and Medigap cost the reader at home this year (Part A and Part B
   deductibles from `medicare.gov`). For readers 65+, home may be cheaper than
   abroad, and the article must say so.
3. **Visa income thresholds** from an official government source, or a current
   reputable source with its date.
4. **U.S. comparison prices** from neutral sources only: FAIR Health,
   Healthcare Bluebook, Medicare/CMS, BLS, peer-reviewed studies, or major news
   citing them. Never from brokers.
5. **Local prices** from Numbeo or Expatistan city pages (note the date) or
   first-party sites (hospital, insurer, transit authority). Flag small samples.

## Score sheet template

```
Article: <slug>
Checker: PASS | FAIL (<failed checks>)
Fact-Trust   /30  — <notes, each failed fact check>
Click & Help /20  —
Voice        /15  —
SEO/AEO      /15  —
Structure    /10  —
Retiree      /10  —
TOTAL        /100 → VERDICT
Fact checks: advisory <country L#, date; province L#> | Medicare <ok/n.a./missing> | visa <ok/n.a.> | US prices <ok/n.a.> | local prices <source, date>
```
