---
title: "Causal Inference: The Mixtape (online 2nd edition)"
author: "Scott Cunningham"
year: 2021
domains: [data-driven, experimentation, causal-inference, analytics]
evidence: "strong"
---

# Causal Inference: The Mixtape — Scott Cunningham

Use this when: you cannot randomize (a pricing change by region, a launch to one market, an eligibility threshold, a policy or platform change) and still need a causal answer; someone presents a correlation from analytics ("users who use feature X retain 2× better") as proof; you are choosing which variables to "control for" or which users to segment by; you must read or brief a quasi-experiment (diff-in-diff, regression discontinuity, instrumental variables, synthetic control).

Source: https://mixtape.scunning.com/ (the author's free online edition; the site is a revised second edition of the 2021 Yale UP book). Read in full: ch. 1 Introduction, ch. 2 Which Causal Inference, ch. 3 DAGs, ch. 4 Potential Outcomes and Randomization (except the worked randomization-inference tables), and the Outro. Read selectively: ch. 5 Unconfoundedness (§5.1–5.3, §5.11), ch. 6 RDD (§6.1, §6.4, §6.7–6.8), ch. 7 IV (§7.1, parts of §7.4–7.5, §7.9), ch. 8 Panel Data (intro), ch. 9 Diff-in-Diff (§9.1–9.2, §9.5–9.6, part of §9.8), ch. 10 Complex Diff-in-Diff (§10.14 checklist), ch. 11 Synthetic Control (§11.1 intro, §11.6). Estimator mechanics, code and data exercises were skimmed or skipped.

## The big idea (3 sentences)
A causal effect is the difference between what happened and what would have happened without the intervention, and since the second never exists, every causal method is a way of filling in a missing counterfactual. Models do not remove bias; the treatment assignment mechanism does, so the first question is always why some units were treated and others not. Randomization balances everything (observed traits, unobserved traits, even treatment effects), and every quasi-experimental design is an attempt to find a real-world mechanism that mimics it, with assumptions you must state and stress-test.

## Core concepts
- **Potential outcomes** — each unit has Y¹ (treated) and Y⁰ (untreated); only one is ever observed ("the fundamental problem of causal inference"). ATE averages effects over everyone, ATT over the treated, ATU over the untreated; pick the one your decision needs before analysing.
- **SDO decomposition** — a naive treated-vs-untreated difference = ATE + selection bias (treated would have differed anyway) + heterogeneous-effect bias (treated benefit more or less). In the ventilator example the true ATE is +0.6 years while the naive difference is −0.4.
- **The Perfect Doctor** — any process that assigns treatment to those who will benefit (a good doctor, a targeting model, a user choosing a feature) creates biased data. Optimizing processes are the main source of bias in observational data.
- **Causation without correlation** — a skilled actor offsetting a force (sailor and rudder, central bank and recessions) can make a real effect invisible in correlations.
- **eBay brand-keyword ads** — observational ROI looked like ~1,600–4,000%; the randomized geo test found a precisely estimated near-zero effect, ROI −63% (CI −124% to −3%). Nearly all of the correlation was selection: people searching "eBay" were going to eBay anyway.
- **SUTVA** — one unit's treatment must not change another's outcome (no network effects, spillovers or equilibrium effects) and the treatment must be the same "dose" for all; scaling a program changes the treatment itself.
- **DAGs** — arrows are assumptions; backdoor paths through confounders must be blocked; **colliders** (variables caused by both treatment and outcome) must NOT be controlled for. Controlling for occupation in a simulated pay-discrimination model flipped the true −1 effect to +0.6.
- **Good and bad controls** — include confounders and pre-treatment predictors of the outcome (they also shrink standard errors); never include outcomes or anything measured after treatment.
- **Unconfoundedness** — controlling for covariates works only if, within covariate cells, treatment is as good as random; it is an assumption about people's choices and must be defended, with placebo tests in the pre-period.
- **Regression discontinuity** — treatment switches at a known cutoff of a running score; compare units just either side. Threats: people manipulating the score (check density for bunching, McCrary test), heaping (rounding), covariate jumps at the cutoff. Visual-first; estimates are local to the cutoff.
- **Instrumental variables** — a variable that shifts treatment but affects the outcome only through it; good instruments feel "strange" at first. Identifies the effect only for compliers (LATE), needs a strong first stage and monotonicity.
- **Difference-in-differences** — four averages, three subtractions; valid only if treated units would have trended like controls (parallel trends), which is untestable. Event studies show pre-trends, which is suggestive, neither necessary nor sufficient.
- **Falsification tests** — "same outcome, alternative group" and "same group, alternative outcome" (e.g. peer-effect models finding contagious height and acne) expose spurious designs.
- **Synthetic control** — builds a weighted combination of untreated units to impute the treated unit's counterfactual; suited to one or few treated aggregates (a city, a country).
- **Diff-in-diff checklist (10 steps)** — define target parameter; count units per cohort; plot rollout; pick controls; choose (un)conditional parallel trends; check covariate imbalance; plot cohort outcomes; pick estimator; check with falsifications, event studies, sensitivity; and "Don't Do Diff-in-Diff" if it fails.

## Actionable heuristics for product design
- When analytics shows "users who adopted feature X retain better", treat it as selection until proven otherwise, because users who choose a feature are the Perfect Doctor's patients: they would have differed anyway. Ask for a randomized test or holdout before crediting the feature.
- When measuring marketing, notifications or recommendations that are targeted at likely responders, insist on a randomized holdout, because targeting manufactures correlation (eBay's 1,600% ROI was really negative).
- When choosing segments or covariates for an experiment readout, use only attributes fixed before assignment (platform, country, tenure at assignment), never post-exposure behaviour ("users who opened the new menu"), because conditioning on a post-treatment variable can open a collider path and even flip the sign.
- When an analysis "controls for everything available", ask which variables are colliders or outcomes and drop them, because more controls can add bias, not remove it.
- When you cannot randomize and a launch hits some markets or cohorts before others, plan a diff-in-diff before launch: choose untreated comparison groups, collect several pre-periods, and plot event-study pre-trends, because you cannot fix the comparison group after the fact.
- When a diff-in-diff looks good, add a falsification: run the same model on a group or a metric the change cannot plausibly affect, because finding an "effect" there means the design is picking up something else.
- When a product rule uses a threshold (free shipping over $50, a loyalty tier at 1,000 points, an age gate, a score cutoff for showing an offer), consider a regression discontinuity around the cutoff, and first check that users are not bunching just over it, because bunching means they sorted themselves and breaks the comparison.
- When a test has non-compliance (users assigned to a new flow but many never reach it, or an encouragement like an email nudge), report the intent-to-treat effect as the headline, and treat the per-complier effect as local to those who responded, because compliers may differ from everyone else.
- When a feature has network effects (sharing, marketplaces, multiplayer, referral), expect user-level A/B tests to be biased by spillovers (SUTVA violation); randomize by cluster, market or time instead.
- When a pilot works at small scale, expect the effect to change when scaled, because the treatment itself changes (staff, supply, novelty), a hidden-variation SUTVA violation.
- When a single market or account is treated (a country launch, an enterprise customer), use synthetic control or a well-chosen comparison set, and state that inference rests on how well the pre-period was matched.
- When a quasi-experiment's assumptions don't survive the checks, stop and say "we don't know" rather than tuning the model, because without randomization the evidence standard should rise, not fall.
- When deciding which effect to estimate, ask "if I took this to the decision-maker, who would they apply it to?": everyone (ATE), only the kind of users who got it (ATT), or those not yet reached (ATU), because the right number depends on the rollout plan.
- When observational covariate adjustment is the only option, pick covariates before looking at outcomes and run a placebo test on the pre-period (an "effect" before the change existed means the adjustment is not credible), because unconfoundedness cannot be tested directly.
- When an "effect" in observational data seems too clean, list how a rational user would have sorted themselves into the treatment (the Perfect Doctor question) before believing it.
- When briefing stakeholders, present the four averages and three subtractions (or the RDD binned plot) before any regression table, because transparent arithmetic and pictures are what make quasi-experiments credible to non-specialists.

## Evidence & caveats
- Strong: the frameworks (Neyman–Rubin potential outcomes, Pearl's DAGs, LATE, modern diff-in-diff) are mainstream econometrics and statistics; the eBay, Giffen and HIV examples are published RCTs.
- It is a teaching book written from economics; examples are policy, labour and health, not product. Translating to product contexts (feature adoption, targeting, thresholds) is this note's inference.
- Strong opinions are flagged as the author's: the DAG material is presented as useful but contested by some (Imbens 2020 cited as a critical view); his ranking of RDD as among the most credible observational designs rests partly on evidence of less p-hacking (Brodeur et al. 2020).
- Quasi-experimental methods are fragile in small samples and with few treated units (standard errors too small; randomization inference suggested). Most product teams will lack the data density RDD needs.
- The online edition is a living text; section numbers may change. Several chapters (especially 10 and 11) are technical and only partly covered here.

## Disagreements with other references
- `references/data-driven/statistics-cheatsheet.md` §10 ranks diff-in-diff above "interrupted time series / regression discontinuity" and lumps RDD with time series. The Mixtape treats RDD (with a clean cutoff and no manipulation) as one of the most credible observational designs, and before/after time series as a different, weaker design. Trust the Mixtape: separate RDD from interrupted time series and do not rank diff-in-diff above a clean RDD.
- The same section says diff-in-diff "requires parallel pre-trends". The Mixtape is more precise: it requires parallel counterfactual trends after treatment, which cannot be tested; parallel pre-trends are only supportive evidence. Update wording.
- `references/data-driven/statistics-cheatsheet.md` §8.2 already says to segment only on pre-treatment attributes; the Mixtape supplies the reason (collider bias) and an example where the sign flips.
- `references/data-driven/experimentation-playbook.md` §6 lists quasi-experiments as a fallback for causal questions without a caveat on assumptions; the Mixtape would add falsification tests, a pre-specified target parameter (ATE vs ATT), and a willingness to abandon the design.
- `references/books/cuped.md` and the Mixtape's DAG chapter agree from different directions: adding a pre-treatment predictor of the outcome improves precision without bias, while a post-treatment covariate biases the estimate (CUPED's flipped-sign example is collider-style bias in an A/B test).
- `references/books/experiments-at-large-scale.md` argues observational evidence mostly fails; the Mixtape agrees on the danger but shows when well-designed quasi-experiments can still be credible.
- No conflict with SKILL.md's evidence hierarchy (experiments > observational); the Mixtape strengthens it with the eBay case.

## Best quotes (< 25 words each, max 5)
- "It is not the models that estimate the causal effects… It is rather the treatment assignment mechanism which does"
- "Without randomization, we face more uncertainty, so our standards for evidence should rise."
- "Optimizing processes, whether done automatically or by people, is the source of bias most of the time in our data sets."
- "Always fold a losing hand as soon as possible and move on to a different approach"

## Related
- `references/data-driven/statistics-cheatsheet.md` (§8 segments, §10 quasi-experiments)
- `references/data-driven/experimentation-playbook.md` (choosing a method; staged rollouts and holdbacks)
- `references/data-driven/decisions-from-data-examples.md`
- `references/books/experiments-at-large-scale.md` (why observational evidence fails)
- Angrist & Pischke, *Mostly Harmless Econometrics* (2009), cited throughout the Mixtape; Cinelli, Forney & Pearl (2022) for good and bad controls
