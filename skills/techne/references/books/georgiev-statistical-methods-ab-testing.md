---
title: "Statistical Methods in Online A/B Testing"
author: "Georgi Z. Georgiev"
year: 2019
domains: [data-driven, experimentation, statistics, conversion]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# Statistical Methods in Online A/B Testing — Georgi Georgiev

Use this when: choosing one-sided vs two-sided tests; a change is cheap, reversible or has side benefits and you want to ship it unless it is clearly worse (non-inferiority); setting a significance threshold, sample size and duration by business risk instead of by the 95%/80% habit; adopting sequential (early-stopping) tests; reporting relative lift with correct intervals; someone compares the observed effect to the MDE or checks "observed power"; deciding how to run concurrent tests.

Source basis: the book is self-published (paperback and ebook only). These notes use the author's own free
material: the official 12-page PDF preview (full table of contents, motivation, audience), the author's book
site, and 14 long articles on his Analytics-Toolkit blog that cover the book's main chapters (one-sided tests,
non-inferiority, risk/reward and optimal thresholds, inherent cost of testing, AGILE sequential testing and its
business value, power and MDE, observed effect vs MDE, underpowered-test myths, confidence intervals for percent
change, concurrent tests, false positive risk, and two meta-analyses of 115 and 1,001 tests). Chapters on
continuous metrics, segmentation and multiple KPIs, external validity, holdouts, hazard ratios and Bayesian
methods were seen only as table-of-contents entries or passing mentions.

## The big idea (3 sentences)
A/B testing is a risk-management tool: its job is to balance the risk of shipping something worse against the
reward of shipping improvements, so the significance threshold, sample size, null hypothesis and monitoring plan
should be chosen from business costs and benefits, not from textbook defaults.
Most product questions are directional, so the right test is usually one-sided, and for cheap, reversible
changes the right question is often "is it not meaningfully worse?" (non-inferiority), not "is it better?".
Done properly, with pre-planned sequential monitoring, testing costs about a quarter less traffic than fixed
tests and still pays off because most ideas have tiny or negative effects.

## Core concepts
- **Testing as risk management** — significance limits post-launch losses; power limits missed gains; both cost
  exposure during the test. ROI = effect × impact / cost. Test duration, threshold, monitoring scheme, number of
  variants and null hypothesis are the levers.
- **Inherent cost of testing** — even with free implementation, testing reduces expected gains (delay plus missed
  small effects). In his example, risk fell ~99% at the price of ~8.5% of the gain for a large shop, but 27–42%
  of the gain for small shops.
- **One-sided tests** — use a one-sided test whenever you would act differently depending on the direction,
  which is almost always. A two-sided test answers "is there any difference", and using it to claim a direction
  is a "type III" (sign) error. Both are equally accurate; they answer different questions. A one-sided 95%
  interval equals one bound of a two-sided 90% interval.
- **Superiority vs non-inferiority** — superiority (H0: variant ≤ control) suits costly, hard-to-reverse,
  maintenance-heavy or contested changes. Non-inferiority (H0: variant ≤ control − margin) suits changes with
  side benefits (cheaper, simpler) and "easy decisions" (cheap, reversible, uncontroversial copy or layout tweaks).
  In his example the easy-decision design needed about 8% of the sample, a 12-fold speed-up.
- **Cascading losses** — several non-inferiority wins, each up to the margin worse, can add up (5 × −2% ≈ −10%);
  periodically test the latest winner against an older control.
- **Minimum effect of interest (MEI)** — he prefers MEI or "minimum reliably detectable effect" to MDE. The MDE is
  a property of the test design (a hypothetical true effect detected with the chosen power), not a threshold for
  the observed effect. Comparing observed lift to the MDE equals checking "observed power", which is meaningless.
- **Power is a function** — power is a curve over all possible true effects for a given sample size and
  threshold; "80% power" only means something at a named effect size. With 90% power at a 50% lift, a test has
  only ~46% power at 25%.
- **Percent lift needs its own intervals** — dividing an absolute-difference interval by the baseline gives
  overconfident intervals for relative lift; type I error inflation grows with effect size (about 1.7× at a true
  40% lift). Correct relative-lift designs need ~1–4% more sample.
- **Sequential testing (AGILE)** — group-sequential design with alpha- and beta-spending: planned interim looks,
  efficacy and futility boundaries, bias-adjusted estimates after stopping. Its value is ROI (less exposure to
  losers, earlier rollout of winners), not test velocity.
- **Peeking detection** — published tests with implausibly large planned MDEs (40%+ at 90% power) suggest
  unaccounted optional stopping; a nominal p of 0.025 after 5 peeks is roughly 0.08 in reality.
- **Meta-analysis of 115 public tests (GoodUI, 2018)** — ~70% looked underpowered; after pruning, mean and median
  lift just under 4%; significant winners averaged 6.8%. Sample likely biased toward success.
- **Meta-analysis of 1,001 tests (his platform, 2022)** — median duration 30 days (mean 35); 88% simple A/B;
  thresholds mostly 80–95%; median MDE 6% at 90% power; 33.5% significant positive; median lift of all tests
  0.08% (mean 2.08%); winners' median 7.5% (mean 15.9%); sequential tests stopped at ~64% of planned maximum
  and used ~74% of an equivalent fixed sample.
- **Concurrent tests** — running tests in isolated silos gives no speed benefit over running them one after
  another and can ship untested combinations; run them overlapping and check interactions by segmenting one
  test's results by the other test's arms.
- **False positive risk (FPR)** — he argues against using FPR (a Bayesian-style "probability a winner is false")
  for planning or reporting, saying it adds subjective priors and no test-specific information beyond the p-value.

## Actionable heuristics for product design
- When planning a test, write down the decision rule first: what you will ship if the result goes each way.
  If the actions differ by direction (they almost always do), use a one-sided test and report one-sided
  intervals, because a two-sided test does not license a directional claim.
- When the change is cheap, reversible and uncontroversial (copy, button text, layout tweaks, removing a costly
  feature like 360° photos or extra payment methods), design a non-inferiority test with an agreed margin
  (e.g. −1% to −2% relative), because the question is "can we ship without losing", and it needs far less traffic.
- When the change is expensive to build, maintain or reverse, or politically contested, use a superiority test,
  possibly with a positive margin, because the costly error is shipping something that is not better.
- When agreeing a non-inferiority margin, get stakeholder sign-off before data arrives, and schedule periodic
  "winner vs older control" checks to catch cascading small losses.
- When choosing the significance threshold, do not default to 95%: weigh exposure during the test, how long the
  change will live (often 1–2 years online), reversibility and traffic; low-traffic products may rationally use
  80–90% confidence, high-stakes ones higher. Record the reasoning in the test plan.
- When the team wants to watch results and stop early, use a pre-registered sequential design (group-sequential
  with efficacy and futility bounds, or an always-valid method) rather than peeking at a fixed-sample p-value,
  and report bias-adjusted estimates when stopping early.
- When reporting "+X% lift", compute the confidence interval and p-value for the relative difference, not by
  rescaling the absolute-difference interval, and size the test for relative lift.
- When someone says "the observed lift is below the MDE, so the test is unreliable" or asks for post-hoc power,
  explain that MDE and power are planning properties; judge the result by its p-value and interval only.
- When estimating what to expect from an experimentation programme, plan for most ideas to be near zero or
  negative (median lift ~0%, about a third significant winners among expert teams), so choose MEIs of a few
  percent, run tests 2–5 whole weeks, and value tests for the losses they prevent as well as the wins.
- When several tests run on the same funnel, overlap them rather than siloing traffic, avoid launching pairs
  with obvious strong interactions, and segment each test by the other's variant after the fact.
- When a claimed win comes from a test whose planned MDE was huge (30–40%+) for a small UI change, suspect
  optional stopping and discount it (see `references/books/type-s-type-m-errors.md`).

## Evidence & caveats
- The statistics are standard frequentist theory (one-sided tests, non-inferiority from clinical trials, group-
  sequential designs, delta-method intervals) and are well supported [strong as methods].
- His contrarian positions are debated: the "always one-sided" stance is a minority view among platforms and
  some statisticians; his rejection of false positive risk is explicitly disputed by Kohavi and Deng, whom he
  thanks while noting they disagree. Treat these as informed opinion [moderate].
- Conflict of interest: he sells the Analytics-Toolkit platform and AGILE method he recommends; the 1,001-test
  meta-analysis comes from his own users (likely more expert and more disciplined than average), and the 115-test
  analysis from a curated public set with likely publication bias.
- Risk/reward examples depend on assumed priors over effect sizes and assumed costs; the numbers are
  illustrations from his calculator, not general constants.
- Not read: the book chapters themselves; detail on continuous metrics, multiple KPIs, external validity,
  holdouts and Bayesian methods is not captured.

## Disagreements with other references
- `references/data-driven/statistics-cheatsheet.md` uses α = 0.05 two-sided as the default and formulas sized
  for two-sided tests. Georgiev would use one-sided α = 0.05 for directional decisions. Note the cheatsheet's
  two-sided 0.05 equals one-sided 0.025, so it is the more conservative choice; keep it where false positives
  are costly, and use Georgiev's one-sided or non-inferiority framing for cheap, reversible changes.
- `references/books/ab-testing-intuition-busters.md` (Kohavi, Deng, Vermeer) recommends reporting false positive
  risk and treating surprising wins sceptically. Georgiev argues FPR is subjective and uninformative per test.
  For techne, use FPR as a programme-level sanity check on win rates (as in the cheatsheet §3.4), not as a
  replacement for the p-value of a single test.
- `references/books/peeking-at-ab-tests.md` (always-valid mSPRT) and Georgiev's group-sequential AGILE solve the
  same peeking problem differently; both are valid if pre-planned. Group-sequential needs scheduled looks;
  always-valid allows continuous monitoring at some power cost.
- `references/books/trustworthy-online-controlled-experiments.md` reports industry win rates of roughly 10–33%;
  his 33.5% sits at the top of that range, consistent with an expert user base.

## Best quotes (< 25 words each, max 5)
- "One-tailed and two-tailed tests are equally accurate, but answer different questions."
- "I argue that A/B testing is by its essence a risk management tool."
- "Limiting our potential loss also limits our potential gains by the act of employing A/B testing."
- "Not running sequential tests results in unnecessarily high cost of testing."

## Related
- `references/data-driven/statistics-cheatsheet.md`, `references/data-driven/experimentation-playbook.md`
- `references/books/ab-testing-intuition-busters.md`, `references/books/peeking-at-ab-tests.md`,
  `references/books/trustworthy-online-controlled-experiments.md`, `references/books/type-s-type-m-errors.md`,
  `references/books/asa-p-values.md`, `references/books/how-not-to-run-ab-test.md`, `references/books/cuped.md`

## Sources
- Book site (author): https://www.abtestingstats.com/ ; official free preview PDF (TOC, motivation, audience):
  https://www.abtestingstats.com/SneakPreview19Sep2019.pdf ; second free PDF from the site:
  https://www.abtestingstats.com/Statistical-Methods-in-Online-A-B-Testing-pdf.pdf (front matter and TOC only)
- Author's blog articles (blog.analytics-toolkit.com), each read:
  - https://blog.analytics-toolkit.com/2017/one-tailed-two-tailed-tests-significance-ab-testing/
  - https://blog.analytics-toolkit.com/2017/case-non-inferiority-designs-ab-testing/
  - https://blog.analytics-toolkit.com/2017/risk-vs-reward-ab-tests-ab-testing-risk-management/
  - https://blog.analytics-toolkit.com/2017/efficient-ab-testing-agile-statistical-method/
  - https://blog.analytics-toolkit.com/2017/running-multiple-concurrent-ab-tests/
  - https://blog.analytics-toolkit.com/2018/inherent-costs-a-b-testing-limited-risk-gains/
  - https://blog.analytics-toolkit.com/2018/analysis-of-115-a-b-tests-average-lift-statistical-power/
  - https://blog.analytics-toolkit.com/2018/confidence-intervals-p-values-percent-change-relative-difference/
  - https://blog.analytics-toolkit.com/2020/underpowered-a-b-tests-confusions-myths-reality/
  - https://blog.analytics-toolkit.com/2022/statistical-power-mde-and-designing-statistical-tests/
  - https://blog.analytics-toolkit.com/2022/what-can-be-learned-from-1001-a-b-tests/
  - https://blog.analytics-toolkit.com/2023/false-positive-risk-in-a-b-testing/
  - https://blog.analytics-toolkit.com/2023/sequential-testing-is-about-improving-business-returns/
  - https://blog.analytics-toolkit.com/2024/what-if-the-observed-effect-is-smaller-than-the-mde/
- Local copies: books/free/georgiev-statistical-methods-ab-testing/ (git-ignored).
