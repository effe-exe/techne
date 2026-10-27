---
title: "Beyond Power Calculations: Assessing Type S (Sign) and Type M (Magnitude) Errors"
author: "Andrew Gelman, John Carlin"
year: 2014
domains: [data-driven, statistics, experimentation, research]
evidence: "strong"
---

# Beyond Power Calculations (Type S and Type M errors) — Gelman & Carlin

Use this when: a small or noisy study (an A/B test on low traffic, a usability benchmark with few
participants, a survey slice, a published "psychology says X" effect) reports a significant and
impressive effect and you must decide how much to believe its size and even its direction; you are
sizing a study and need a realistic effect-size assumption rather than a hopeful one.

## The big idea (3 sentences)
Classic power analysis asks only "will I reach p < 0.05?". The better question is "in studies of
this size, how often will a significant estimate have the wrong sign (Type S), and by how much will
it overstate the true effect (Type M, the exaggeration ratio)?". The answer depends on a *plausible
true effect size taken from outside the study* (prior literature, related experiments, domain
knowledge), never on the study's own estimate. When power is low, significance acts as a filter that
keeps only lucky overestimates. Below ~50% power the significant estimates are badly inflated, and
below ~10% they are nearly as likely to point the wrong way as the right way.

## Core concepts
- **Design analysis** — hypothesise a true effect D from external information, take the study's
  standard error s, and imagine replications. Compute three numbers: power, the Type S rate, and the
  exaggeration ratio. It can be done before *or after* the data are in.
- **Type S (sign) error** — the probability that a significant estimate has the opposite sign to the
  true effect.
- **Type M (magnitude) error / exaggeration ratio** — the expected |estimate| / |true effect| among
  significant results.
- **Relation to power** (normal, unbiased estimates) — 80% power when D ≈ 2.8 s (exaggeration ≈
  1.12, Type S negligible). 50% power at D = 2 s. 17% at D = 1 s. 10% at D = 0.65 s. Using the
  paper's retrodesign() logic, the exaggeration ratio is ≈ 1.4 at 50% power, ≈ 2.5 at 17% and ≈ 3.7
  at 10%, rising steeply below that.
- **Why external effect sizes** — the study's own estimate is inflated precisely when significant.
  Published estimates are inflated by publication bias. The "minimum effect worth detecting" is
  often larger than anything plausible. All three make power look better than it is (the "sample
  size samba").
- **Retrospective design analysis is legitimate when** it uses an external D and focuses on sign and
  magnitude. That is unlike the usual post-hoc power from the observed effect, which the authors
  agree is useless.
- **Two worked examples** — the "beautiful parents have more daughters" finding (8-point difference,
  p = .015, SE ≈ 3.3 points): with a realistic true effect of 0.1–1 point, a significant result has
  a 19–46% chance of the wrong sign and is inflated 8–77x. The menstrual-cycle voting study (17
  points, SE 8.1): with a plausible 2-point effect, power 0.06, Type S 24%, exaggeration ≈ 9.7.

## Actionable heuristics for product design
- When an underpowered test (or a small usability study) comes back significant with a big lift,
  divide your belief in the effect size by the exaggeration ratio for its power: at ~50% power
  expect ~1.4x inflation, at ~17% ~2.5x, at ~10% ~3.7x or worse. Do not forecast revenue from the
  raw lift.
- When power for any plausible effect is below ~10%, do not run the study to decide: a "win" is
  close to a coin flip on direction. Change the design instead (bolder change, more sensitive
  metric, more traffic, within-subject design).
- When sizing an experiment, take the assumed effect from *external* evidence: the distribution of
  past effects on this metric in your own experiment history, effects of similar changes, or
  published meta-analyses. Don't use a single prior study's headline number or a hoped-for MDE.
- When you lack good priors, run the design analysis over a *range* of plausible effects (e.g. 0.5%,
  1%, 2% relative) and report the conclusion conditional on that range, because the range itself
  tells the reader how much the result can mean.
- When the plausible effect is tiny compared with the noise (e.g. a 0.1-point change in a proportion
  near 50%), recognise the sample needed: SE must be ≤ half the effect, which means ~1 million total
  participants for a 0.1-point difference. Most surveys and small panels cannot see effects under ~1
  percentage point.
- When reading a "significant" result, ask "what would happen in replications of a study this
  size?", not "was p < 0.05?", because a 95% CI that excludes zero can still have a ~40% chance of
  being on the wrong side of zero.
- When someone cites a psychology or behavioural-economics effect to justify a design (priming,
  anchoring, ego depletion, etc.), check whether the original studies were small, between-subjects
  and noisy. If so, assume the true effect is much smaller than reported, and possibly zero.
- When a dataset is already collected and small, either run a preregistered replication or publish
  the design calculation next to the result to show its limits. Don't treat the significant estimate
  as the finding.
- When you are tempted to use the observed effect to "check" your power after the fact, don't: that
  analysis just repeats the p-value. Only an externally sourced effect size makes a retrospective
  design analysis informative.
- When summing the lifts of many winning tests to claim cumulative impact, shrink each lift first,
  because significance filtering inflated every one of them.

## Evidence & caveats
- The maths is standard sampling theory, and the paper includes runnable R code (retrodesign). The
  conclusions follow directly once you accept an assumed true effect. The exaggeration figures above
  for 10–50% power come from running that formula, not from the paper's text.
- The weak point, which the authors acknowledge, is choosing D: any design analysis is only as good
  as the external effect-size assumption. They argue that even a rough guess beats none.
- The examples are from social science and biology, where small-n between-subjects designs dominate.
  Large online experiments usually have high power for their MDE, but low-traffic products, segment
  cuts, rare-event metrics and qualitative-scale studies fall straight back into the low-power
  regime.
- It is complementary to, but distinct from, false-positive-risk or positive-predictive-value
  calculations (Button et al. 2013; Kohavi et al. 2022). Those ask "is the effect real?". This asks
  "is the sign right and the size believable?".
- The authors frame this within classical statistics on purpose. A full Bayesian analysis would
  answer the same questions more directly (their note 4).

## Disagreements with other references
- `references/data-driven/statistics-cheatsheet.md` §3.3 says underpowered significant tests
  overstate effects "sometimes by 2x or more" (citing this paper). The paper's own examples show
  8x–77x, and the curve becomes unbounded as power approaches 5%. The cheatsheet's wording is too
  mild. Suggest "≈1.4x at 50% power, ≈2.5x at 17%, and far more below".
- `references/books/ab-testing-intuition-busters.md` reproduces this paper's figures and agrees
  fully. It adds the false-positive-risk view. Use both: FPR for "is it real?", and Type S/M for
  "how big, and which way?".
- `references/process/research-methods-selector.md` (usability sample sizes) and quick "5 users"
  style guidance are about *finding problems*, which is fine at low n. This paper warns against
  using small-n studies to *estimate effect sizes* (e.g. "task time improved 35%"). Trust this paper
  for any quantitative claim from small samples.
- `references/psychology/cognition-cheatsheet.md` and the behaviour files that cite classic lab
  effects should be read with this lens: published magnitudes from small studies are likely
  inflated.

## Best quotes (< 25 words each, max 5)
- "a significant result is often surprisingly likely to be in the wrong direction and to greatly
  overestimate an effect."
- "using a published point estimate is not enough."
- "What might be expected to happen in studies of this size?"
- "statistically significant results in a noisy setting are highly likely to be in the wrong
  direction and invariably overestimate"

## Related
- references/data-driven/statistics-cheatsheet.md (power, MDE, winner's curse)
- references/books/ab-testing-intuition-busters.md (FPR, post-hoc power)
- references/data-driven/decisions-from-data-examples.md (how to discount a reported lift)
- references/process/research-methods-selector.md (what small-n research can and can't tell you)
- Button et al. (2013) "Power failure"; Hoenig & Heisey (2001) "The Abuse of Power"; Lee & Shen
  (2018) winner's curse in A/B tests

Source: http://www.stat.columbia.edu/~gelman/research/published/retropower_final.pdf (the host was
unreachable; I fetched the same author-hosted file from
https://sites.stat.columbia.edu/gelman/research/published/retropower_final.pdf). This is the
*Perspectives on Psychological Science* 9(6) 2014 version. I read the full text, the appendix code
and the notes.
