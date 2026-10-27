# Growing the Inspiration Library

> **Use this when:** the user asks to add references to the library ("add today's Awwwards SOTD", "add this app", "update the gallery with ADA 2026 winners").
> **Use this when:** setting up or running a scheduled (daily / weekly / monthly / yearly) library refresh, or pruning stale or dead entries.
> **Use this when:** you need the entry template, dedup rules, curation rubric or folder layout for the library.

---

## 0. Principles

1. **Curate, don't hoard.** A library of 300 annotated entries beats 5,000 bookmarks. Every entry must have a *transferable principle* ("what to steal"). An entry with no principle is a bookmark: reject it.
2. **Quality gate before quantity.** Target accept rate when scanning a feed: ~10–30%. If you are accepting everything, the bar is too low.
3. **Ethics gate is non-negotiable.** Entries that rely on deceptive patterns are only accepted as `role: anti-example`.
4. **Attribution always.** Record the original product/studio/author and the source where you found it. No unattributed images.
5. **Respect sources.** Fetch only public pages, at human pace, a handful per run. No bulk scraping, no login bypass, follow robots/ToS. If blocked, ask the user for screenshots or links.
6. **Never invent.** If a page could not be loaded, do not describe it. Log it as `status: pending-user-input`.

---

## 1. Folder layout

```
library/
  index.yaml                 # one line per entry: id, title, url, tags, added, status
  entries/
    2026/
      2026-10-26-linear-changelog.md
      2026-10-26-awwwards-sotd-<slug>.md
  collections/               # thematic groupings referencing entry ids
    honest-paywalls.md
    keyboard-first.md
  rejected.yaml              # url + reason (prevents re-reviewing the same thing)
  dead-links.yaml            # entries whose URL died, with archive link if any
  CHANGELOG.md               # what each run added/removed
```

The seed `gallery.md` stays as the hand-curated core. `library/` is the growing layer. When a library entry proves itself (cited in ≥ 3 tasks or reaches score ≥ 22, see §4), promote a one-line version into `gallery.md`.

---

## 2. Entry template

```markdown
---
id: 2026-10-26-flighty-live-activity          # date-added + slug, unique
title: Flighty — flight status Live Activity
url: https://flighty.com/                       # canonical, no tracking params
original_creator: Flighty (product team)
found_via: Apple Design Awards 2023 (Interaction)   # source + specific list/date
source_url: https://developer.apple.com/design/awards/
kind: app | website | flow | component | brand | type | motion | data-viz | design-system
platform: [ios]
domain: [travel]
surface: [dashboard, notification]
qualities: [clarity, motion]
role: exemplar | anti-example | technique
shipped: true                                    # false = concept/spec work
added: 2026-10-26
seen_on: 2026-10-26                              # last date the live product was verified
status: active | pending-user-input | dead | superseded
score: { craft: 5, clarity: 5, originality: 4, transferability: 5, evidence: 3, ethics: pass }
total: 22
assets: []                                       # local screenshot paths, if user provided
license_notes: "screenshots for internal reference only"
---

## What to steal (principle, 1–3 bullets)
- Anticipate the next state: tell the user what will happen before it happens.

## Why it works
Short reasoning; cite evidence if any (with strength tag). E.g. "Award jury selection — [weak] as performance evidence."

## Where it applies / where it doesn't
- Applies: any status-tracking product (deliveries, builds, payments).
- Doesn't: products where predictions are unreliable (false precision erodes trust).

## Style DNA (optional, compact)
type: SF Pro, tabular figures · color: dark surfaces, semantic status colours · motion: subtle progress, Live Activity updates

## Notes / open questions
```

Keep each entry 15–40 lines. Long essays belong in a collection page.

---

## 3. Dedup rules

Run before writing any entry:

1. **Normalise URL:** lowercase host; strip `www.`, trailing `/`, `utm_*`, `ref`, `fbclid`, `gclid`, fragment; prefer `https`. Use the product's root or the specific screen URL consistently by `kind` (site → root; flow/component → deepest stable URL).
2. **Exact match** normalised URL against `index.yaml` and `rejected.yaml` → skip (or update `seen_on`).
3. **Same product, new angle:** same domain but different `surface` (e.g. Linear pricing vs Linear onboarding) → allowed as a separate entry; link them with `related: [ids]`.
4. **Same product, same surface, newer version** (a redesign) → create new entry, set old to `status: superseded`, add `superseded_by`. Redesigns are valuable for before/after study.
5. **Mirrors & aggregators:** if the same site appears on Awwwards, Godly and Land-book, keep one entry; append all sources to `found_via` (multiple independent curators = mild signal of quality).
6. **Visual near-duplicates (optional, if screenshots exist):** compare perceptual hashes (e.g. `imagehash` pHash, Hamming distance ≤ 8 on 64-bit hash as "likely duplicate" — heuristic threshold, tune locally).

---

## 4. Curation rubric (score each 1–5; ethics pass/fail)

| Criterion | 1 | 3 | 5 |
|---|---|---|---|
| **Craft** | generic template feel | solid, consistent | exceptional detail in type, spacing, motion, states |
| **Clarity / usability** | confusing, pretty | understandable | effortless; obvious next step; handles edge states |
| **Originality** | trend copy | fresh twist on a convention | new pattern others will adopt |
| **Transferability** | only works for this brand | some reuse | principle applies across domains |
| **Evidence** | none | expert/award recognition | public data, research, or reported experiment (strength-tagged) |
| **Ethics** | — | — | **pass/fail**: no deceptive patterns, accessible basics (contrast, text scaling, focus), honest pricing |

- **Accept** if ethics = pass and total ≥ 17/25 with no criterion < 2.
- **Accept as technique** if originality or craft = 5 even if transferability is low (tag `role: technique`).
- **Accept as anti-example** if ethics = fail and it teaches a clear lesson (tag `role: anti-example`).
- **Reject** otherwise; add to `rejected.yaml` with a one-line reason.
- **Diversity check per run:** no more than 40% of a run's accepted entries from one category or one source; deliberately add non-Western, accessibility-led, and non-trend entries (e.g. Taobao won ADA 2025 Interaction — "great" is not one aesthetic).

Award-site bias reminder: Awwwards/Godly over-index on agency portfolios, WebGL and scroll-jacking. Many SOTD winners fail basic usability (scroll hijacking, low contrast, no reduced-motion). Score them honestly; often `role: technique`.

---

## 5. Cadence and sources

| Cadence | Sources | Expected adds | Notes |
|---|---|---|---|
| **Daily (optional, light)** | Awwwards SOTD, Sidebar.io top 5 links, Godly new | 0–2 | Only if the user wants a feed; otherwise batch weekly. Awwwards has no official RSS (as of 2026) — fetch the SOTD listing page; if blocked, skip and note. |
| **Weekly (recommended)** | Awwwards SOTD of the week (7 items), Godly, Siteinspire, Land-book, Lapa Ninja new, Mobbin "new apps" (user-assisted; login), Refero new (MCP if connected), Typewolf SOTD, Fonts In Use recent, Brand New recent reviews, It's Nice That digital, Codrops new demos, Rive/LottieFiles featured | 3–8 | Core cadence. |
| **Monthly** | Awwwards SOTM; app store editorial ("Apps We Love"), product changelogs of exemplars (Linear, Vercel, Figma, Stripe), Are.na channels you follow (API), Growth.design new case studies, Baymard new articles | 3–6 + updates of `seen_on` | Also run link-rot check (§7). |
| **Yearly** | Apple Design Awards (June, WWDC), Webby (spring), Awwwards SOTY, Red Dot / iF / D&AD, App Store & Google Play year-end awards, Information is Beautiful Awards (verify status) | 10–25 | Add finalists too; they are often as instructive as winners. |
| **On demand** | Anything the user names ("add this app", "add what Duolingo did to their paywall") | 1 | Run the same template and rubric. |

---

## 6. Run procedure (agent checklist)

1. **Load state:** read `library/index.yaml`, `rejected.yaml`, last `CHANGELOG.md` entry (to know the last run date).
2. **Collect candidates** from the cadence's sources, only items newer than the last run. Cap: ~20 candidates per weekly run.
3. **Fetch politely:** one request per page, no parallel hammering; on 403/429/JS-empty → mark source `blocked` for this run and move on. List blocked sources in the summary with a request for the user ("Mobbin needs your login — please share the 5 newest apps you find relevant").
4. **Dedup** (§3).
5. **Inspect** each candidate: visit the real product/site (not only the gallery thumbnail) when possible. Check: mobile view, contrast, reduced-motion behaviour, load performance impression, presence of dark patterns.
6. **Score** (§4). Write the entry (§2) for accepted items; append rejections.
7. **Tag** strictly from the vocabulary in `gallery.md`. New tags require adding them to the vocabulary list in the same run.
8. **Update** `index.yaml`, relevant `collections/*.md`, and `CHANGELOG.md`:
   ```
   ## 2026-10-26 (weekly)
   + 5 added: [ids] · ~ 2 superseded · ✗ 11 rejected · ⚠ blocked: mobbin (login), godly (JS)
   Notable: <one-line insight about a trend or pattern seen this week>
   ```
9. **Report** to the user in ≤ 10 lines: added items with their "steal" line, a trend observation, and blocked sources needing help.

---

## 7. Maintenance: link rot and staleness

- **Monthly:** HEAD/GET each `active` URL (polite pace). On 404/410/domain parked → `status: dead`, add an archive link if available (web.archive.org) to `dead-links.yaml`. Keep the principle text — the lesson outlives the URL.
- **Staleness:** if `seen_on` > 12 months for a product entry, re-verify before citing; products redesign often.
- **Trend decay:** entries tagged with a trend (e.g. `trend:glassmorphism`, `trend:bento`) get reviewed yearly; keep as historical if still instructive.
- **Pruning:** if a collection exceeds ~30 entries, keep the 15 best by score and archive the rest to keep retrieval sharp.

Optional helper (run from a separate scripts folder; pass the library path as an argument):

```bash
#!/usr/bin/env bash
# check-links.sh <path-to-index.yaml>  — prints url and HTTP status, 1 req/sec
grep -oE 'https?://[^ "]+' "$1" | sort -u | while read -r u; do
  code=$(curl -s -o /dev/null -m 15 -L -w '%{http_code}' "$u")
  echo "$code $u"; sleep 1
done
```

---

## 8. Scheduled task prompt templates

Use the host's scheduling feature (e.g. a scheduled task / cron-like trigger in Claude Code, or `/loop` for in-session recurrence). Fresh-session tasks need a **standalone** prompt. Weekly is the recommended default; choose a jittered minute (not :00).

**Weekly refresh (fresh session, standalone):**
```
You are maintaining a design inspiration library at <REPO>/skills/techne/library/.
Follow <REPO>/skills/techne/references/inspiration/library-update.md exactly (§6 run procedure).
Cadence: weekly. Sources: Awwwards Sites of the Day since the last CHANGELOG date,
Godly new, Siteinspire new, Typewolf site of the day, Fonts In Use recent, Brand New recent,
Codrops new demos. If the Refero MCP is connected, query "new screens" for paywall,
onboarding, dashboard, settings.
Rules: public pages only, polite pace, no bulk scraping; if a source blocks you, list it
as blocked — do not guess its content. Score every candidate with the rubric (§4); ethics
fail → anti-example or reject. Max 8 accepted entries. Dedup against index.yaml and
rejected.yaml. Update index.yaml, collections, CHANGELOG.md. Commit on a branch named
library/weekly-<date> and open a PR summarising additions, one trend insight, and blocked
sources that need the user's help (e.g. Mobbin requires login).
```

**Yearly awards import (one-shot, early June after WWDC + December):**
```
Import this year's Apple Design Award winners AND finalists (all six categories, apps
first, games only if they have transferable UI lessons) into <REPO>/skills/techne/library/ using
library-update.md. Verify each winner on Apple's official page or Apple Newsroom before
writing it. Also add Awwwards Site of the Year winners (December run). One entry per
product, "what to steal" mandatory. Report a 5-bullet summary of design themes this year.
```

**On-demand add (in-session):**
```
Add <URL or product name> to the inspiration library. Visit it (or ask me for screenshots
if blocked), score it, write the entry, dedup, and tell me the 'what to steal' line.
```

**Monthly maintenance:**
```
Run library maintenance per library-update.md §7: link check, mark dead entries with
archive links, flag entries with seen_on older than 12 months, prune collections over 30.
Report counts and any exemplar that was redesigned (create superseding entries).
```

---

## 9. Quality signals over time (lightweight metrics for the library itself)

Track in `CHANGELOG.md` monthly:
- **Accept rate** per source (sources with < 5% accept rate for 3 months → drop or move to monthly).
- **Citation count** per entry (how often an entry was used in a design task) → promotion to `gallery.md`.
- **Coverage gaps** by tag (e.g. zero `domain:government` or `quality:accessibility` added this quarter → targeted search next run).
- **Dead-link rate** (> 10% of active entries → shorten verification cycle).

---

## 10. Anti-patterns

- Auto-adding every SOTD without scoring (turns the library into a trend log).
- Storing images scraped from logged-in services or redistributing them publicly.
- Copying gallery blurbs verbatim instead of writing your own principle.
- Treating "added by three galleries" as proof of usability.
- Letting tags drift (`fintech`, `finance`, `banking` all used) — enforce the vocabulary.
- Running daily when nobody reads it — weekly with a short digest is usually better.
