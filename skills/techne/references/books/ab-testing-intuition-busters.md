---
title: "A/B Testing Intuition Busters: Common Misunderstandings in Online Controlled Experiments"
author: "Ron Kohavi, Alex Deng, Lukas Vermeer"
year: 2022
domains: [data-driven, experimentation, statistics]
evidence: "strong"
---

# A/B Testing Intuition Busters — Kohavi, Deng, Vermeer

Use this when: someone shares a big "winning" A/B test (especially a case-study site, vendor
dashboard or agency deck) and you must judge whether to believe it; you are planning a test on low
traffic and are tempted to "just run it and see"; a stakeholder wants to explain away a flat result
with "we only had 30% power", or proposes a 90/10 split or a large shared control.

## The big idea (3 sentences)
Five ideas that feel intuitive and are pushed by A/B tool vendors, books and agencies are
statistically wrong: that p = 0.05 means a 5% chance the win is false; that a low-power test is fine
if it hits significance; that post-hoc ("observed") power tells you anything; that analysts may pick
the data treatment after seeing results; and that unequal variants (big control, small treatment)
are free. Each one inflates false wins or exaggerates effect sizes, and the authors (with tens of
thousands of experiments across Airbnb, Booking, Amazon, Microsoft) show the arithmetic. Their
remedy is aimed at platform design: make the wrong move hard by showing false positive risk,
blocking underpowered tests, hiding post-hoc power, standardising data processing and avoiding
unequal splits.

## Core concepts
- **p-value vs false positive risk (FPR)** — the p-value is P(data this extreme | no effect). What
  people want is P(no effect | significant), which needs a prior: the historical success rate of
  ideas. FPR = α·π / (α·π + (1−β)·(1−π)), with π = P(H0) and α = 0.025 because only one tail counts
  as a "win".
- **Historical success rates** — Microsoft ~33%, Kaushik's estimate ~20%, Bing ~15%, Booking/Google
  Ads/Netflix ~10%, Airbnb Search ~8%. At 80% power these give FPRs of ~6%, 11%, 15%, 22%, 26%.
- **Power and FPR together** — at 20% power, FPR rises to 20% (Microsoft), 33%, 42%, 53%, 59%
  (Airbnb search). Below roughly 20% power, more than half your "wins" at a 10%-success-rate company
  are false.
- **Sample size rule of thumb** — n per variant ≈ 16σ²/δ² for 80% power at α = 0.05; equivalently
  the detectable effect is ~2.8 standard errors.
- **Winner's curse / exaggeration** — significant results from low-power tests overstate the effect;
  below 50% power the overstatement becomes so large the estimate is useless (citing Gelman & Carlin
  2014; see `type-s-type-m-errors.md`).
- **Post-hoc power is just the p-value re-expressed** — power computed from the observed effect is a
  fixed function of p (p = 0.05 → 50%, p = 0.1 → 38%, p = 0.01 → 73%). It adds no information, and a
  non-significant result always gives low post-hoc power, so "we were underpowered" is circular.
- **Researcher degrees of freedom** — when to stop, which outliers or bots to drop, which segments
  to report. Each choice made after seeing data is a hidden multiple comparison ("garden of forking
  paths").
- **Unequal variants** — theory says a big shared control lowers variance; in practice it breaks
  triggering, increases cookie-churn contamination of small arms, gives the big arm a cache (LRU)
  advantage, and with skewed metrics makes the t-test miscalibrated on each tail.

## Actionable heuristics for product design
- When a reported lift is huge (the motivating case: +337% conversion, 82 vs 75 visitors, 3 vs 12
  conversions), invoke Twyman's law and do not cite it as evidence, because effects near this size
  have never been seen across tens of thousands of real tests and the pre-test power was ~3%.
- When you plan any A/B test, compute power from a pre-registered minimum effect of interest before
  launch, never from the observed effect afterward, because only pre-experiment power bounds what a
  null result rules out.
- When the traffic only allows roughly 80 users per arm and the baseline is 3.7%, do not A/B test at
  all: detecting even a 10% relative lift needs ~41,600 users per arm. Use qualitative methods, a
  bolder change, or a metric higher in the funnel instead.
- When a product has fewer than thousands of active users (ideally tens of thousands), treat A/B
  testing as unable to detect realistic effects, because power will be far below 80% and any
  significant result is likely false or inflated.
- When a result is significant but surprising, demand a lower p-value (0.01 or 0.005, the "new
  discoveries" threshold of Benjamin et al.) or a replication run before shipping on it, because
  surprise means a lower prior and so a higher FPR.
- When setting the decision threshold for a team, estimate your own historical success rate and plug
  it into the FPR formula. If FPR at p < 0.05 is above ~20%, tighten α, because fewer good ideas
  means more of your wins are false.
- When reporting a result, show an estimate of FPR or posterior probability next to the p-value.
  Never describe a 95% "confidence" as "95% chance the change caused this", because that sentence is
  the wrong conditional probability.
- When someone says a flat result was "only 30% powered, so the effect is real but we missed it",
  reject the argument, because post-hoc power is set by the p-value and a null result always looks
  underpowered.
- When a team turns on outlier removal, bot filters or segment cuts after seeing the scorecard,
  treat the result as exploratory, because this inflates false positives. Per-variant outlier
  trimming alone can push the false-positive rate to 43%.
- When you need outlier handling, define it in the experiment config before launch, apply it across
  all data (not per variant), and keep an audit trail (Booking.com practice).
- When a segment looks like it won, pre-register it as a new hypothesis and rerun, because in
  software a replication is cheap and post-hoc segments are forking paths.
- When the metric is revenue, counts or a rare conversion (heavily skewed), keep treatment and
  control equal-sized, because with a 10%/90% split the left-tail false-positive rate roughly
  doubled (≈5.4–5.8% vs 2.5% nominal) in their A/A simulations.
- When tempted by a large shared control for several treatments, skip it: for 2–4 treatments the
  variance saving is under 10%, while the practical risks (triggering, contamination, caching, skew)
  remain.
- When ramping (e.g. 2% treatment vs 98% control) and watching for harm, apply a correction for the
  inflated left-tail false-alarm rate, or compare against an equal-sized control slice.
- When peeking at live results, use sequential methods or fixed horizons. Stopping at the first
  significant reading (once standard advice from a major vendor) inflates Type I error.

## Evidence & caveats
- The arithmetic (Bayes' rule for FPR, the power formula, post-hoc power as a function of p) is
  textbook and uncontroversial. The skewness and unequal-split results come from the authors' own
  simulations, which are published for reproduction.
- The success-rate table mixes different accounting schemes and eras, as the authors say. Treat FPRs
  as ballpark figures, not constants for your product.
- The FPR formula assumes a simple mixture of "true null" and "effect of size δ". Real effects form
  a continuum, so FPR is a heuristic for calibration rather than an exact posterior.
- The examples of vendor and book errors (Optimizely, Adobe, GuessTheTest, Siroker & Koomen, Goward,
  King et al.) were real at the time; some vendors have since corrected their wording.
- The recommendations (show FPR, block underpowered tests, hide post-hoc power, standardise
  processing, avoid unequal splits) are expert judgement grounded in platform practice at Microsoft,
  Booking and Airbnb, not results of controlled trials.
- The "thousands to tens of thousands of users" guidance is a rough floor. The real requirement
  depends on baseline rate, variance and MDE (use `scripts/sample_size.py`).

## Disagreements with other references
- `references/data-driven/statistics-cheatsheet.md` §3.4 writes FPR with π as the probability that
  an idea *works*, while this paper uses π = P(H0). The numbers match (26% at 8%, 6% at 33%), but
  readers mixing the two will invert π. Keep one definition.
- The same cheatsheet's myth line says a 90/10 split costs ~2.8x the traffic. This paper adds a
  second, independent reason to avoid it: skewed metrics make the t-test miscalibrated on each tail,
  needing up to ~400x more users to match the convergence of an equal split. Trust this paper on
  unequal splits, and also apply it to ramp-phase "harm" checks in `experimentation-playbook.md`
  §ramp.
- `statistics-cheatsheet.md` §3.3 says underpowered wins overstate effects "by 2x or more". This
  paper (via Gelman & Carlin) shows the overstatement becomes unbounded below ~50% power. The
  cheatsheet understates it.
- The `SKILL.md` claim that 10–33% of experiments win matches this paper's table. The paper adds
  that at low power the share of *real* wins among those is much lower.
- No conflict with `experimentation-playbook.md` on Twyman's law or pre-registration. This paper
  supplies the quantitative reason for both.

## Best quotes (< 25 words each, max 5)
- "Experiments with Low Statistical Power are NOT Trustworthy" (section title)
- "Post-hoc Power Calculations are Noisy and Misleading" (section title)
- "Outlier removal must be blind to the hypothesis."
- "Surprising Results Require Strong Evidence—Lower P-Values" (section title)

## Related
- references/data-driven/statistics-cheatsheet.md (FPR, power, peeking, SRM)
- references/data-driven/experimentation-playbook.md (pre-registration, Twyman's law, ramps)
- references/books/type-s-type-m-errors.md (exaggeration ratio and sign errors)
- references/books/diagnosing-srm.md (why unequal variants and cookie mapping cause SRMs)
- Kohavi, Tang, Xu (2020) *Trustworthy Online Controlled Experiments*; Simmons, Nelson, Simonsohn
  (2011) "False-Positive Psychology"

Source: https://airbnb.tech/wp-content/uploads/sites/19/2025/10/ABTestingIntuitionBusters.pdf
(authors' version of the KDD '22 paper). I read the full text: sections 1–8, the appendix, and the
reference lists.
