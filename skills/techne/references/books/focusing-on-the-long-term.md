---
title: "Focusing on the Long-term: It's Good for Users and Business"
author: "Henning Hohnhold, Deirdre O'Brien, Diane Tang"
year: 2015
domains: [data-driven, experimentation, metrics, ethics]
evidence: "strong"
---

# Focusing on the Long-term — Hohnhold, O'Brien, Tang (Google)

Use this when: a change wins on short-term revenue or clicks but might teach users to ignore or
avoid part of the product (ads, promos, upsells, notifications, interstitials); you need to argue
that "less but better" (fewer ads, fewer prompts) can be revenue-neutral or positive; you are
designing an OEC or holdout to capture user learning that a 2-week test cannot see.

## The big idea (3 sentences)
Short-term A/B effects can mislead because users *learn*: they slowly change how willing they are to
engage with something, based on the quality of what they saw before (Thorndike's law of effect).
Google built experiment designs that measure this learning by comparing two cohorts while both
receive the same treatment. Using them, it found that ad quality, not ad quantity, drives "ads
blindness" and that it takes months to develop. It then fit models that predict long-term learning
from short-term quality metrics. This let it adopt an OEC of short-term revenue plus a learning
correction, which justified cutting the mobile search ad load by 50% with neutral-to-positive
long-term revenue and large user-experience gains.

## Core concepts
- **Short-term vs long-term vs learned impact** — short-term is the difference during the test.
  Long-term is the effect if the change shipped forever. The learned impact is the part caused by
  users changing their behaviour over time.
- **Revenue decomposition** — revenue = users × tasks/user × queries/task × ads/query × clicks/ad ×
  cost/click. Raising ads/query lifts revenue now, but if users learn to click less (or search less,
  or leave), later terms fall and can wipe out the gain.
- **Post-Period (PP) method** — put the treatment period between two A/A periods. Afterwards both
  cohorts get the control, so any remaining difference is learned behaviour. Caveats: unlearning
  starts at once, cookie churn dilutes the effect, and nothing is measured until the treatment ends.
- **Lagged-start cohort** — a second cohort switched onto the treatment later. Comparing it with the
  long-exposed cohort, both now on the treatment, gives an interim learning reading without stopping
  the test.
- **Cookie–Cookie-Day (CCD) method** — run a normal cookie experiment alongside a "cookie-day"
  experiment that re-randomises every day, so nobody gets consistent enough exposure to learn. The
  daily gap between the two is a running learning curve. It costs infrastructure and needs a large
  traffic pool.
- **Learning rate** — the half-life of ads learning was ~60 days on desktop (β ≈ 0.012/day). A
  90-day study captures ~65% of the eventual effect. Learning is faster on mobile. For features
  shown on every results page, about half the learning happens in 14–21 days.
- **Underestimation factor Q** — experiments understate learning because exposure is lower and
  inconsistent (multiple devices, cookie clearing). Google uses Q ≈ 2–3 for desktop and ≈ 1 for
  mobile.
- **Macro-model** — learned CTR change ≈ k1·Δ(ad relevance) + k2·Δ(landing-page quality). Both terms
  are needed: an ad that looks relevant but leads to a bad landing page still trains users away. The
  fit on 170 observations from over 100 long-term studies gave R² ≈ 0.91, cross-validated across
  groups of similar experiments.
- **Long-term OEC** — long-term RPM ≈ short-term ΔRPM + Q × predicted learned CTR change, computable
  from short-term metrics alone.

## Actionable heuristics for product design
- When a change adds more of something users can learn to ignore (ads, promos, badges, nudges,
  prompts, emails), do not ship on short-term lift alone. Test whether quality falls as quantity
  rises, because user learning tracks average quality and builds over months.
- When raising "load" (number of promos, upsell slots, notifications), expect clicks per item to
  drop even in the short term, and expect the long-term drop to be larger. On Google mobile, a
  short-term revenue-positive ad-load increase was ~0 long-term even under the generous assumption Q
  = 1.
- When a change could cause user learning, run it for months, not weeks: ~90 days captures about
  two-thirds of a 60-day-half-life effect. For high-frequency surfaces, 3–6 weeks may capture about
  half.
- When you need a learning estimate without waiting, run the treatment cohort plus a re-randomised
  daily (cookie-day) cohort and track their gap over time. If no gap appears after ~2 months, a
  longer run rarely finds one.
- When measuring learning after a test ends, take the reading early in the post-period (unlearning
  starts at once), restrict to users who existed before the test (cookie churn dilutes it), and
  check that "should-be-identical" serving metrics match across cohorts.
- When building a quality proxy for any monetised element, include *post-click* experience (landing
  page, destination quality) as well as pre-click relevance or CTR, because a bad experience after
  the click is what users remember and punish.
- When defining an OEC for a product that monetises attention, combine immediate revenue with a
  learned-behaviour correction (revenue + Q × predicted learning). Scale experiment-measured
  learning up by 1.5–3x on platforms where users are inconsistently exposed (multi-device,
  logged-out).
- When arguing for removing clutter or ads, cite this case: cutting mobile ad load by 50% produced
  dramatic user-experience gains and an estimated net-positive long-term revenue change, verified by
  a staggered rollout against a holdback.
- When rolling out a quality change, stagger it in weekly cohorts (e.g. 10% per week) against a
  holdback. Each cohort's curve should rise after launch if users are re-learning positively (ads
  "sightedness").
- When you run a pre-period A/A before any experiment, use it as standard hygiene, because cohort
  imbalance found before treatment would otherwise contaminate the result.
- When the change is a UI change rather than a ranking or parameter change, do not assume the
  learning model transfers. Google had no validated predictors for UI changes and fell back to
  direct long-term measurement.

## Evidence & caveats
- Strong: hundreds of long-term randomised experiments over ~8 years at very large scale, with
  methods that hold up under replication (PP and CCD gave similar results) and a predictive model
  validated on new studies.
- Domain-specific: all numbers (60-day half-life, Q = 2–3, k coefficients) are for Google search
  ads. The authors expect the principle (quality drives engagement and learning) to generalise, but
  the constants will not.
- The models cover non-UI changes only. UI-driven learning remained unsolved in this paper.
- They saw no significant learned effect on users or tasks per user for Google search, which they
  attribute to an existing quality focus. They note other sites with heavier, lower-quality ad loads
  did show effects on query volume.
- Advertiser value is outside the OEC and was checked separately.
- The authors are Google employees describing Google's own decisions, which is a self-report. The
  randomised design is still far stronger than the qualitative banner-blindness studies that
  preceded it.
- The paper is a footnoted counterpoint to Kohavi et al.'s claim that novelty or primacy effects
  rarely reverse an outcome's direction. Here learning made a short-term revenue win roughly neutral
  long-term.

## Disagreements with other references
- `references/data-driven/experimentation-playbook.md` §4.2 says the short-term ad revenue was
  "partly offset" and that Google used "long-term holdouts and post-period analysis". Per the paper,
  for the mobile ad-load increase the long-term revenue estimate was essentially **zero** (fully
  offset, likely negative), and the core methods were post-period, lagged-start and
  cookie–cookie-day designs. A holdback appears only in the staggered rollout. Prefer this paper's
  wording.
- The playbook groups this under "novelty and primacy (change aversion)". This paper studies a
  different phenomenon: users learning from the *quality* of repeated exposures over months, not
  reacting to *newness*. Keep them separate. Change aversion fades. Quality-driven blindness
  compounds.
- `references/data-driven/metrics-frameworks.md` rule 7 cites this paper for validating short-term
  metrics against long-term outcomes. That is consistent, and the paper shows how: fit short-term
  quality metrics to measured long-term learning.
- The playbook suggests long-term holdouts of 1–5% "for a quarter". This paper supports roughly 90
  days for ad-like learning but warns that low-frequency features learn more slowly, so a quarter
  may be too short.

## Best quotes (< 25 words each, max 5)
- "user satisfaction is paramount: ads blindness and sightedness are driven by the quality of
  previously viewed or clicked ads"
- "increasing the ad load may increase short-term revenue but decrease long-term revenue since
  decreased user satisfaction causes ads blindness."
- "User learning takes a long time."
- "quality drives user interaction"

## Related
- references/data-driven/metrics-frameworks.md (OEC, guardrails, Goodhart)
- references/data-driven/experimentation-playbook.md (long-term holdouts, novelty and primacy)
- references/psychology/behavior-ethics-dark-patterns.md (short-term extraction vs long-term trust)
- references/books/heart-framework.md (PULSE vs user-centred metrics; revenue can mask a worsening
  experience)
- Kohavi et al. (2012) "Trustworthy Online Controlled Experiments: Five Puzzling Outcomes
  Explained"; Tang et al. (2010) "Overlapping Experiment Infrastructure"

Source: https://research.google/pubs/focusing-on-the-long-term-its-good-for-users-and-business/ →
PDF at https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43887.pdf
(KDD '15). I read the full text, sections 1–6. The figures were read from captions only.
