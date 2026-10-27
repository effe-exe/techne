---
title: "Peeking at A/B Tests (read via the full-length companion: Always Valid Inference: Continuous Monitoring of A/B Tests)"
author: "Ramesh Johari, Leo Pekelis, David Walsh (KDD version adds Pete Koomen)"
year: 2017
domains: [data-driven, experimentation, statistics]
evidence: "strong"
---

# Peeking at A/B Tests / Always Valid Inference — Johari, Pekelis, Walsh (with Koomen)

Use this when: a team wants to watch a live dashboard and stop a test "as soon as it's significant"; you are choosing between fixed-horizon, group-sequential and always-valid (mSPRT) analysis on a platform; you are designing an experimentation dashboard or report that shows live p-values or "chance to beat baseline"; many metrics or variants are tested at once and you need FDR or FWER control that still holds when people stop early.

Source: https://arxiv.org/abs/1512.04922 (v3, 16 Jul 2019, arXiv preprint by the authors). Legal basis: arXiv preprint posted by the authors. This is the full-length journal version of the method behind the KDD 2017 paper "Peeking at A/B Tests: Why It Matters, and What to Do About It" (Johari, Koomen, Pekelis, Walsh, DOI 10.1145/3097983.3097992). The KDD paper itself is closed access at ACM, and I found no legal free copy of it. Read in full, including the appendices. Platform details that only appear in the KDD version (the "reset policy" for seasonality, more on Figure 5) are known here only from the authors' summary.

## The big idea (3 sentences)
P-values and confidence intervals are only valid if the sample size is fixed in advance. Real users watch dashboards and stop when results look good, which can make false positives several times more likely than the nominal α. The authors keep the same simple interface (a p-value you compare to your own α, and a confidence interval) but compute it from a mixture sequential probability ratio test (mSPRT). That makes it "always valid": Type I error stays at or below α however often you look and whenever you stop. The method was deployed in Optimizely's stats engine from January 2015. On 10,000 real experiments it usually reached a decision sooner than a fixed-horizon test with matched 80% power.

## Core concepts
- **Why peeking breaks inference** — the user's stopping decision depends on the data, but the p-value is computed as if the sample size had been fixed. With ~10,000 samples, Type I error can easily become five times larger. An A/A test on a "chance to beat baseline" dashboard crosses 95% if you watch it long enough.
- **Always valid p-value** — a p-value process such that for *any* stopping time T (any data-dependent rule), P(p_T ≤ s) ≤ s under the null. Always valid confidence intervals are defined the same way: they cover the true value at whatever moment you stop.
- **Duality with sequential tests** — every sequential test that never gives up (a "test of power one") corresponds to a monotone always-valid p-value. Stopping the first time p ≤ α is exactly that sequential test. The p-value only ever goes down, so a significant result never "un-happens".
- **mSPRT** — compute the likelihood ratio of "some effect" against "no effect", averaged over a mixing distribution H of plausible effect sizes, and reject when it exceeds 1/α. The threshold 1/α bounds Type I error by a standard martingale argument.
- **User model (M, α)** — each user has a tolerance α and a maximum patience M (sample size). They stop at the first crossing or at M, whichever comes first. A bigger M means you care more about detecting small effects.
- **Three kinds of user** — *aggressive* users (M much bigger than log(1/α)) get near-100% power at a tiny fraction of M. *Conservative* users (M much smaller than log(1/α)) cannot detect anything whatever method they use. In the *Goldilocks* zone (M of the order of log(1/α)) the mSPRT is first-order efficient: no feasible rule beats it on run-time without losing power somewhere.
- **Tuning the mixture** — the best H roughly matches the prior spread of true effect sizes, adjusted for truncation at M. Getting it within one order of magnitude costs under 5% power and under 10% run-time. Two orders of magnitude off costs about 20% power and about 40% run-time. "In the ballpark" is enough, but platforms should calibrate it from past experiments.
- **Against fixed horizon** — in simulations and on 10,000 Optimizely experiments from early 2015 (split by customer tier, where higher tiers sought smaller effects), the mSPRT's stopping sample size was usually below that of a fixed-horizon test with 80% average power. To beat it with a fixed horizon, the experimenter would need to know the true effect to within 50% relative error, which is rarely possible.
- **Against other sequential tests** — compared with Robbins (1970) and a law-of-the-iterated-logarithm boundary (Kaufmann et al. 2014), the tuned mSPRT had the best average power and run-time in the finite-sample regimes that matter in practice. LIL intervals shrink faster only for users willing to wait for power near 1.
- **Two-stream (A vs B) deployment** — for normally distributed metrics the test treats the shared mean as a nuisance parameter and controls Type I error exactly. For conversion (binary) metrics it relies on a CLT approximation. That is approximate, and it is *not* controlled if α is moderate and the test stops very early.
- **Multiple testing commutes with always validity** — Bonferroni and Benjamini–Hochberg under general dependence (BH-G) applied to always-valid p-values at any stopping time still control FWER and FDR. The common BH-I procedure controls FDR only for some stopping rules. "Stop when x discoveries" is fine. "Stop the first time any experiment in a chosen subset is significant" can break FDR. The platform shows q-values and FCR-corrected intervals.
- **Choosing a stopping approach** (this note's synthesis of the paper with `statistics-cheatsheet.md`):

  | Situation | Use | Why |
  |---|---|---|
  | Team will commit to one read at a planned n | Fixed horizon | Most power at that n; simplest |
  | A few planned interim looks (e.g. weekly) | Group-sequential (O'Brien–Fleming) | Little power lost, schedule known |
  | People will look whenever they like, patience varies | Always-valid (mSPRT) | Valid under any stopping rule |
  | Many metrics or variants watched live | Always-valid + BH-G / Bonferroni q-values | Error control commutes with stopping |
  | Only the best arm matters, no effect interval needed | Pure-exploration bandit | Different goal; no inference on losers |

- **Bandits vs testing** — the authors keep hypothesis testing because teams want an interval on the effect size even for losing variants, both for deployment cost decisions and to decide what to try next. A bandit alone gives no such interval.

## Actionable heuristics for product design
- When stakeholders will look at results daily (they always will), use a platform with always-valid or group-sequential inference, or tell them plainly that interim p-values must not end the test. Optional stopping on a fixed-horizon p-value can multiply false wins about five times.
- When you design an experiment dashboard, show always-valid p-values and intervals, or show nothing significance-like until the planned horizon. Do not show a naive live "chance to beat baseline": that is the interface that caused the problem in the first place.
- When you choose α for a sequential test, remember that the mSPRT only works well if the run you can afford is long relative to log(1/α). For low-traffic surfaces, choose a bolder change or a higher-traffic step before you tighten α (see `experimentation-playbook.md` on bold changes).
- When you configure the mixing distribution or "expected effect" setting, base it on the spread of past effects on similar surfaces, for example the distribution of past lifts after shrinkage. Within 10× is fine, but a default that is 100× off wastes about 40% of run-time.
- When the primary metric is a conversion rate and α is loose (like 0.1) with early stopping, add a minimum sample or minimum duration (at least one full week). The binary-data version is only approximately valid early on, and weekly patterns break the independence assumption.
- When traffic changes with the time of day or week (most consumer products), do not let an always-valid test stop on day 1–2 even if it crosses. Seasonality makes visitors who arrive at similar times correlated, which the method assumes away.
- When you report a winner from a sequential test, report the always-valid interval, not a naive fixed-horizon interval recomputed at the stopping time. The naive one is too narrow and its point estimate is biased upward for early stops (the winner's curse; see `type-s-type-m-errors.md`).
- When many metrics or variants are tested together, apply BH (or Bonferroni for must-not-regress guardrails) to the always-valid p-values and display q-values. Decide the stopping rule in advance, and avoid rules like "stop when any of these three metrics wins", which break FDR.
- When a team asks for a bandit to "find the winner fast", ask whether they will need an effect-size interval for the losers or for deployment cost. If they will, run a sequential test. If they only need the best arm and the rewards during the test do not matter, a pure-exploration bandit can be fine.
- When explaining the method to designers or PMs, describe the user interface, not the maths: "you may look whenever you like, the p-value only goes down, and you can stop when it is under your α, or at your planned maximum if it never gets there." Behaviour, not formulas, is what changes.
- When planning capacity, also set a maximum duration M. Without one, a test with no effect runs forever, because the mSPRT never accepts the null. The maximum turns "no result by M" into the decision "the effect is smaller than we care about".
- When an organisation is mature and seeks small lifts (big companies, Optimizely's top tier), expect smaller savings from early stopping than for teams testing bold changes. The gain is largest when true effects are large relative to the planned horizon.

## Evidence & caveats
- Strong: the Type I error guarantee for normal data is exact and rests on classic sequential analysis (Wald, Robbins, Siegmund, Lai). The efficiency results are asymptotic (α → 0) but are backed by simulations over a broad grid (α from 1e−4 to 0.1, effect-size spreads equivalent to 10% to 1000% relative lifts on a 1% baseline, M up to 10⁷).
- Real-world evidence comes from one vendor, and the authors worked for or advised Optimizely, so it is not independent. The 10,000-experiment comparison measures run-time under a fitted prior, not downstream business decisions.
- Approximations: the binary version uses a CLT approximation and is not valid at moderate α with very early stopping. The independence assumption fails under seasonality. Heavy-tailed metrics such as revenue are not covered.
- A sequential test costs something: if you would have waited for the full fixed horizon anyway, an always-valid boundary is wider at that point than a fixed-horizon test, so you lose some power at a given n. The authors show this cost is outweighed when early stopping is realistic, but it is not zero.
- Point estimates after an early stop are biased upward. The paper addresses coverage, not unbiased estimation, so treat early winners' effect sizes with suspicion.
- Since 2019, related always-valid methods (confidence sequences from Howard, Ramdas et al., and group-sequential designs) have become common in commercial platforms. The mSPRT is one good option, not the only one.

## Disagreements with other references
- `references/data-driven/statistics-cheatsheet.md` §5 lists mSPRT and O'Brien–Fleming group-sequential designs as equal fixes. This paper argues that the mSPRT suits *unknown, varied* user patience better, while group-sequential designs suit a few planned looks. Choose group-sequential when the team can commit to its look schedule, and mSPRT when it cannot.
- `references/books/how-not-to-run-ab-test.md` (Evan Miller) says "fix n and don't peek" (or don't even show significance). This paper says you can peek freely if the p-value is built for it. The two agree on the diagnosis; Miller's rule is the low-tech fallback when the platform lacks sequential stats.
- `references/books/experiments-at-large-scale.md` and `ab-testing-intuition-busters.md` push for at least week-long tests, replication and skepticism of surprising wins (Twyman's law). They complement this paper: always-valid stats control false positives under peeking, but they do not cover novelty effects, weekly cycles or broken logging, so keep a minimum duration and trust checks.
- `references/books/asa-p-values.md` warns against reading meaning into thresholds. Always-valid p-values still carry all the ASA caveats. They fix only the "specified model" assumption that peeking violates.

## Best quotes (< 25 words each, max 5)
- "these inferences are wholly unreliable if users endogenously choose samples sizes by continuously monitoring their tests."
- "Even with 10,000 samples (a sample size which is quite common in online A/B testing), Type I error can easily increase fivefold."
- "Continuous monitoring does not inflate Type I error."
- "the mSPRT is seen to outperform any fixed-horizon test that the experimenter might select herself"
- "the assumption of independence can fail due to seasonal effects, which induces correlations between visitors who arrive at similar times"

## Related
- references/data-driven/statistics-cheatsheet.md (§5 peeking table, §6 multiple comparisons)
- references/data-driven/experimentation-playbook.md (pre-registration, decision rules)
- references/books/how-not-to-run-ab-test.md (the problem, low-tech fix)
- references/books/type-s-type-m-errors.md (exaggerated effects in early or underpowered wins)
- references/books/asa-p-values.md, references/books/experiments-at-large-scale.md, references/books/ab-testing-intuition-busters.md
- Wald (1945) sequential tests; Robbins (1970) mixture tests; Howard et al. (2021) confidence sequences; Benjamini & Hochberg (1995) FDR
