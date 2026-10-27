---
title: "How Not To Run an A/B Test"
author: "Evan Miller"
year: 2010
domains: [data-driven, experimentation, statistics]
evidence: "strong"
---

# How Not To Run an A/B Test — Evan Miller

Use this when: someone wants to "run it until it's significant" or stop early because the dashboard shows 95% "chance to beat original"; you are setting a stopping rule; you are designing an experiment dashboard or report that shows live significance; you need a quick sample size before launch.

Source: https://www.evanmiller.org/how-not-to-run-an-ab-test.html (author's site, April 2010, with a May 2013 update). Read in full.

## The big idea (3 sentences)
A significance level is only valid if the sample size was fixed before the test began; if you check repeatedly and stop the moment the result looks significant, you turn chance fluctuations into "wins" far more often than the nominal 5%. Peeking alone does no harm; what breaks the statistics is acting on the peek by stopping early. The fix is to commit to a sample size in advance (n ≈ 16σ²/δ²) or to use a design built for interim looks (sequential or Bayesian).

## Core concepts
- **What the dashboard number means** — "95% chance of beating original" is really the complement of a significance level: how often a difference this large would appear by chance if A and B were the same. It assumes a fixed sample size.
- **Repeated significance testing error** — when you stop at the first significant look, every chance excursion past the threshold gets locked in as a result, while later regression back to null is never observed. False positives only go up, never down.
- **Size of the problem** — with a 50% baseline, a do-nothing change, a check after every observation and a 150-observation cap, the real false-positive rate is 26.1%, more than five times the nominal 5%.
- **Nominal vs actual significance under peeking** — to keep an actual 5% false-positive rate you need nominal thresholds of 2.9% for 1 peek, 2.2% for 2, 1.8% for 3, 1.4% for 5, and 1.0% for 10 peeks.
- **Fixed-horizon sample size** — n ≈ 16·σ²/δ² per group (δ = minimum effect worth detecting, σ² = variance; for a conversion rate σ² = p(1 − p)). Committing to it "completely mitigates" the peeking problem.
- **Report detectable effect, not live significance** — during a running test, show the minimum detectable effect δ = (t_α/2 + t_β)·σ·√(2/n) for the current n, not a p-value.
- **The four-scenario argument** — with looks at 200 and 500 observations, a fixed horizon counts only the final result; a "stop when significant" rule also counts every run that was significant at 200 but would have regressed by 500, so the share of significant outcomes rises even though A = B.
- **Direction of the error** — repeated testing makes insignificant results look significant, never the reverse; so peeking biases toward false wins, which is the costly error for a product team shipping changes.
- **Worked sample size (this note's arithmetic)** — baseline conversion 10% (σ² = 0.09), smallest effect worth acting on +1 pp (δ = 0.01): n ≈ 16 × 0.09 / 0.0001 = 14,400 users per arm. Halving δ to +0.5 pp quadruples n to ~57,600.
- **Two audiences, two rules** — for people running experiments: fix the sample size and wait. For people writing A/B software: do not show significance (and perhaps not even the running estimate) until the test ends, and show the detectable effect instead.
- **Peeking vs stopping** — looking at the numbers is fine in itself; the error enters only when the look changes when the test ends. The hard part is human, which is why the author's blunt advice is simply not to peek.
- **The update (2013)** — the author added an interactive sample size calculator that takes effect size, power and significance and returns n, putting the fixed-horizon rule into practice.
- **Proper alternatives** — sequential designs set checkpoints in advance with corrected thresholds (from clinical trials: Pocock); Bayesian designs (as the author argued in 2010) allow stopping at any time.

## Actionable heuristics for product design
- When planning a test, write down the minimum effect worth acting on, compute n ≈ 16·p(1 − p)/δ² per arm (or use a calculator), and commit to it before launch, because only a fixed horizon makes the reported significance true.
- When a stakeholder wants to stop early because the result "is already significant", say no unless the test uses a pre-planned sequential design, because stopping on a significant look can multiply the real false-positive rate by up to five.
- When you must look at results mid-test (for bugs or harm), look, but do not let the significance figure decide whether to stop; decide stopping only on pre-agreed guardrail breaches, because peeking without acting on it is harmless.
- When you know you will peek a set number of times and lack a sequential tool, tighten the per-look threshold (about 1% nominal for 10 looks to keep 5% actual), because each look is another chance for a false win.
- When designing an experiment dashboard, show sample progress and the currently detectable effect instead of a live "chance to beat" or p-value, and consider hiding the running effect estimate, because what users see is what they will stop on.
- When a test tool offers "auto-stop when significant", turn it off or replace it with a sequential method, because automated stopping on significance is the worst case for false positives.
- When a test reaches its planned n and is not significant, do not extend it to "give it a chance", because extending is just another form of stopping when you like the result.
- When a runaway hit appears and the business wants it live now, use the sequential checkpoints you defined up front (or ramp to a holdout design) rather than stopping ad hoc, because medicine solved this exact tension with pre-planned interim analyses.
- When choosing a test tool, check whether its headline "probability to beat" assumes a fixed horizon; if it does, treat any early read as a progress indicator only.
- When reviewing someone else's win, ask how the stopping point was chosen; "we stopped when it hit 95%" means the reported significance cannot be trusted.
- When you write the experiment brief, record the planned n, the planned end date and the stopping rule next to the hypothesis, because a stopping rule written after launch is not a rule.
- When building internal experiment tooling, do not report significance until the test is over and never use significance to decide whether to continue; show progress toward the planned n instead.
- When a variance estimate is unknown for a continuous metric, estimate σ² from a recent period of the same metric before launch rather than guessing, because the sample size scales directly with it.
- When the planned n is unreachable in a reasonable time, change the plan (bigger change, higher-funnel metric, other method) rather than shortening and peeking, because underpowered peeking yields false and exaggerated wins.

## Evidence & caveats
- Strong: the core result is classic (Armitage, McPherson, Rowe 1969, cited) and has been confirmed repeatedly; modern platforms (always-valid p-values, group-sequential boundaries) were built in response to exactly this problem.
- The 26.1% figure is a worst case (test after every single observation, small n); with daily checks on large tests the inflation is smaller but still real. The peek table is the author's computation; it is not derived in the article.
- Dated: "all the A/B testing packages out there ignore it" was true in 2010; many tools now offer sequential testing. The claim that Bayesian designs allow stopping at any time with "perfectly valid inferences" is contested: Bayesian posteriors are coherent under optional stopping, but frequentist error rates (false-win rates) still inflate with vague priors. The author's own later pieces (e.g. on sequential testing) refine this.
- The 16σ²/δ² rule assumes α = 0.05 two-sided and 80% power; it is an approximation, slightly conservative (exact constant ≈ 15.7).
- Short blog post, no data from real experiments.
- Its further-reading list is the classical clinical-trials and design literature: Armitage et al. 1969 (repeated significance tests), List, Sadoff & Wagner (NBER 2010) and Wheeler 1974 (sample-size rules of thumb), Pocock 1977 and 1982 (group sequential designs), Berry 2004 (Bayesian trials). The advice is borrowed from medicine, not invented for the web.
- Widely circulated (translated into Russian, Spanish and Uzbek on the page itself) and cited in this library's cheatsheet as the popular primer; it is a good link to send a stakeholder.
- The worked 26.1% number and peek table are simulations the post does not show; treat them as order-of-magnitude illustrations, consistent with Armitage et al.
- It does not cover the opposite failure, stopping a losing test early for harm, which is legitimate as a pre-agreed guardrail rule (see the playbook and the large-scale paper's alerting tiers).
- The article treats only one metric and two arms; with many metrics or variants the multiple-comparisons problem stacks on top of peeking (see `references/books/experiments-at-large-scale.md`).

## Disagreements with other references
- `references/data-driven/statistics-cheatsheet.md` §5 gives a peeking table in terms of false-positive rates (e.g. 10 looks ≈ 19%); Miller gives the equivalent in nominal thresholds (10 looks needs ~1%). They are consistent views of the same problem; use the cheatsheet to show the damage and Miller's table to set a corrected threshold.
- The cheatsheet already warns that Bayesian dashboards are not immune to optional stopping; that is more careful than Miller's 2010 endorsement of Bayesian designs. Trust the cheatsheet on that point.
- `references/books/experiments-at-large-scale.md` shows the professional version of Miller's "sequential experiment design": O'Brien–Fleming thresholds across 7 daily checkpoints (5×10⁻⁸ on day 1, 0.040 at the end).
- `references/books/asa-p-values.md` principle 1 (a p-value measures incompatibility with a specified model) explains why peeking breaks it: optional stopping changes the model the p-value was computed under.
- `references/books/ab-testing-intuition-busters.md` adds that stopping rules are one of several researcher degrees of freedom; fix outlier handling and segments in advance too.
- No conflict with SKILL.md ("No peeking without sequential methods").

## Best quotes (< 25 words each, max 5)
- "the best way to avoid repeated significance testing errors is to not test significance repeatedly."
- "'Peeking' at the data is OK as long as you can restrain yourself from stopping an experiment before it has run its course."
- "Committing to a sample size completely mitigates the problem described here."

## Related
- `references/data-driven/statistics-cheatsheet.md` (§2 sample size, §5 peeking and sequential testing)
- `references/data-driven/experimentation-playbook.md` (pre-registration, decision rules)
- `references/books/ab-testing-intuition-busters.md` (forking paths and low power)
- `references/books/type-s-type-m-errors.md` (why early-stopped wins are exaggerated)
- `scripts/sample_size.py`
- The author's later posts linked from the page (not read for this note): "Simple Sequential A/B Testing", "The Low Base Rate Problem", and his interactive sample size calculator.
