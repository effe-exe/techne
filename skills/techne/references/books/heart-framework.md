---
title: "Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications"
author: "Kerry Rodden, Hilary Hutchinson, Xin Fu"
year: 2010
domains: [data-driven, metrics, research]
evidence: "moderate"
---

# Measuring the User Experience on a Large Scale (HEART) — Rodden, Hutchinson, Fu (Google)

Use this when: a team must choose user-centred success metrics for a product, feature or redesign
(for a dashboard, an experiment's primary metric, or a brief); stakeholders disagree on what
"success" means; the only metrics on the table are business or ops counts (page views, 7-day
actives, revenue, latency) that cannot tell a better experience from a confusing one.

## The big idea (3 sentences)
The usual large-scale metrics, which the authors call PULSE (Page views, Uptime, Latency, Seven-day
actives, Earnings), matter but are low-level or indirect signals of user experience and are often
ambiguous. HEART (Happiness, Engagement, Adoption, Retention, Task success) is a set of *categories*
that prompts teams to define user-centred metrics, both attitudinal and behavioural, at product or
feature level. Picking the right number takes a simple Goals → Signals → Metrics process, because no
metric helps unless it is tied explicitly to a goal.

## Core concepts
- **PULSE** — Page views, Uptime, Latency, Seven-day active users, Earnings. These are health
  metrics, related to UX but blunt. Page views can rise because users are lost. Short-term revenue
  can rise while the experience worsens. 7-day actives can grow even with 100% weekly turnover.
- **Happiness** — attitudinal: satisfaction, visual appeal, likelihood to recommend, perceived ease.
  Best tracked with the same well-designed in-product survey over time.
- **Engagement** — frequency, intensity or depth of use, reported *per user* rather than as totals
  (totals grow with the user base).
- **Adoption** — new users (or new users of a feature) in a period. You can define "adopted" as
  completing a key task, not just visiting.
- **Retention** — the share of a period's users still active in a later period. The window (week,
  month, 90 days) depends on the product. Adoption and Retention matter most for new products,
  features and redesigns, and stabilise for mature ones.
- **Task success** — effectiveness (completion), efficiency (time) and error rate, measured at scale
  through remote benchmark studies or by comparing log paths with an optimal path.
- **Goals → Signals → Metrics** — state the goal in UX terms first, then the behaviours or attitudes
  that would show success or failure, then the normalised numbers to track.
- **Explicit inclusion and exclusion** — you need not use all five categories, but you should
  consciously decide which to drop (e.g. Engagement may not make sense for enterprise tools people
  must use).

## Actionable heuristics for product design
- When defining success for any feature or redesign, write the goal first, then signals, then
  metrics, and don't let "can we even measure that?" block the goal step, because worrying about
  measurement too early shrinks the goal to what is already logged.
- When team members disagree on goals, run the Goals step as a workshop. It surfaces the
  disagreement and gets buy-in for the chosen metrics before launch.
- When choosing signals, pick ones that are sensitive *and specific* (they move only when the
  experience gets better or worse), because generic counts move for unrelated reasons such as
  traffic spikes or seasonality.
- When success is hard to observe, measure failure instead: abandonment, undo or erase events,
  repeated attempts, rage or frustration signals.
- When reporting engagement or usage, normalise (per user, ratios, percentages), because raw counts
  rise with user growth and hide whether each person uses the product more.
- When the only "UX metric" is 7-day actives, split it into Adoption (new) and Retention
  (returning), because a surge can be new curious users or existing users panic-checking. Google
  Finance during the 2008 crash could not act on the surge until it made this split.
- When you need a habit-strength engagement metric, consider "share of active users active on ≥ N of
  the last 7 days". Gmail used ≥ 5 of 7 days and found it strongly predictive of later retention,
  making it a leading indicator.
- When a redesign launches and satisfaction dips, keep tracking the same survey metric weekly before
  reverting. The iGoogle redesign's satisfaction (7-point scale) dropped and then recovered, a sign
  of change aversion, which gave the team confidence to keep it.
- When simplifying an interface (e.g. merging two search boxes into one), A/B test with an error or
  task-success metric to confirm users adapt. Google Maps removed the dual "what/where" box after
  error rates showed users coped with the single box.
- When a key flow has an optimal path (multi-step sign-up), measure how closely users follow it as a
  Task-success metric from logs.
- When the product is enterprise or mandated-use, drop product-level Engagement and lean on
  Happiness and Task success. Engagement can still be meaningful at feature level.
- When building logs-based metrics, filter out automated traffic, verify that the key actions are
  actually logged (client-side interactions often aren't by default), and add the standard metrics
  of sibling products if you need cross-product comparison.
- When presenting metrics, triangulate them with usability and field studies, and don't use them as
  a substitute for early formative research, because they mostly evaluate launched products.

## Evidence & caveats
- This is a 4-page CHI 2010 note describing practitioner experience across 20+ Google products over
  about a year. It is not a validation study. No metric was tested for validity or reliability, and
  the authors explicitly call for research into which metrics best reflect UX quality.
- The examples (iGoogle, Gmail, Google Finance, Google Maps) are anecdotes without effect sizes or
  confidence intervals. The Gmail "5+ of 7 days predicts retention" claim has no numbers given.
- Its staying power comes from adoption, not proof: HEART became a de facto industry vocabulary.
  Treat it as a well-tested *checklist and process*, not an empirically validated measurement model.
- The framework is dated in tooling (AJAX/Flash logging, Omniture), but the conceptual points
  (normalise, separate new from returning, tie metrics to goals, measure failure) have aged well.
- The authors are clear that a short-term revenue rise can mask a worsening experience, a point
  later quantified by `focusing-on-the-long-term.md`.

## Disagreements with other references
- `references/data-driven/metrics-frameworks.md` §3 labels HEART "[strong — widely adopted]". Based
  on the source, the *evidence* is moderate (practitioner experience, no validation). "Widely
  adopted" is true, but adoption is not evidence. Prefer "moderate, widely adopted".
- The same section's example metrics (SUS, UMUX-Lite, DAU/MAU, D1/D7/D30) are reasonable additions
  but are not in the paper. The paper's own examples are a weekly 7-point satisfaction survey,
  visits per user per week, % of users active ≥ 5 of 7 days, accounts created in 7 days, and % of
  7-day actives still active 3 months later. Note DAU/MAU is a ratio of actives and does not satisfy
  the paper's "per-user, not total" engagement advice unless it is read as "average active days per
  user".
- `metrics-frameworks.md` says "pick 1–3 dimensions". The paper never caps the number. It asks for
  an *explicit* decision to include or exclude each category. Both are compatible, but the paper's
  version is a forcing function, not a limit.
- Consistent with `references/process/research-methods-selector.md` and the `SKILL.md` evidence
  hierarchy: the paper insists metrics complement, never replace, qualitative research.

## Best quotes (< 25 words each, max 5)
- "metrics should not stand alone. They should be triangulated with findings from other sources"
- "Sometimes failure is easier to identify than success"
- "Raw counts will go up as your user base grows, and need to be normalized"
- "No matter how user-centered a metric is, it is unlikely to be useful in practice unless it
  explicitly relates to a goal"

## Related
- references/data-driven/metrics-frameworks.md (HEART table, OEC, guardrails)
- references/data-driven/conversion-onboarding-activation-retention.md (adoption and retention
  mechanics)
- references/process/redesign-and-scale.md (change aversion after redesigns)
- references/books/focusing-on-the-long-term.md (why short-term revenue is a poor UX proxy)
- Tullis & Albert, *Measuring the User Experience*; Akers et al. (2009) undo/erase events as
  usability indicators

Source:
https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/
→ official PDF
https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36299.pdf (CHI 2010
authors' version). I read the full text, all 4 pages including references.
