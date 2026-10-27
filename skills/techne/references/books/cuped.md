---
title: "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data (CUPED)"
author: "Alex Deng, Ya Xu, Ron Kohavi, Toby Walker"
year: 2013
domains: [data-driven, experimentation, statistics]
evidence: "strong"
---

# Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data (CUPED) — Deng, Xu, Kohavi, Walker

Use this when: a test you want to run needs more traffic or time than you have; you are choosing a primary metric and want to know which ones variance reduction will actually help; someone proposes "adjusting" a result with a covariate measured during the experiment; you are planning a test on new users or on revenue and assuming CUPED will rescue the sample size.

Source: https://exp-platform.com/cuped/ (author-hosted PDF, WSDM 2013 camera-ready, 10 pages). Read in full, including both appendices.

## The big idea (3 sentences)
Most of the noise in a per-user metric comes from users being different from each other (heavy vs light users), not from the treatment, so if you know how each user behaved before the experiment you can subtract that predictable part and compare only what is left. Because randomization makes the pre-period identical in expectation across arms, this adjustment keeps the estimate unbiased while shrinking its variance by a factor of (1 − ρ²), where ρ is the correlation between the pre-period and in-experiment values. At Bing this cut variance by about half on key engagement metrics, which is the same as doubling traffic or halving test duration.

## Core concepts
- **Sensitivity scales with the square of the effect** — detecting a 0.5% change needs roughly 100× the users needed for a 5% change (10,000 users → 1,000,000). Even sites with billions of queries run short of power, because real effects are small, results are needed fast, and many features trigger for few users.
- **Control variates (the CUPED estimator)** — adjusted metric = Y − θ(X − mean X), with θ = cov(X, Y)/var(X), the same θ for both arms (estimated on the pooled data). The adjusted delta is still unbiased; its variance is var(delta)·(1 − ρ²).
- **Stratification is the categorical special case** — post-stratifying on a pre-experiment category (e.g. browser used before the test) removes between-strata variance; the paper proves control variates with indicator covariates give the identical estimate, so control variates generalize stratification.
- **Best covariate = the same metric in the pre-period** — across many candidate covariates, the metric itself measured before the test reduced variance most. Adding a second covariate (first day the user appeared) gained only 2–3 percentage points more.
- **Covariates must be unaffected by treatment** — anything fixed before the user is first exposed (pre-period behaviour, entry day, data center) is valid. Anything measured after exposure can absorb part of the real effect and bias the answer.
- **Coverage vs correlation trade-off** — longer pre-periods raise both correlation and the share of experiment users who have pre-period data; longer experiments raise correlation for cumulative metrics but lower coverage, because late-arriving users are often new or have churned cookies.
- **Missing pre-period data** — add an indicator "seen in pre-period" and set missing covariate values to any constant; this effectively stratifies users into returning vs new and still helps.
- **Non-user metrics** — page-level ratios like CTR need the delta method combined with CUPED (Appendix B); covariates can themselves be page-level.
- **Why it is not a linear model** — classic ANCOVA assumes the outcome is linear in treatment and covariates with equal residual variance; CUPED only needs the covariate to be independent of treatment, so it is valid even if the linear fit is poor (a poor fit just reduces less variance).
- **Planning arithmetic** (this note's, from the (1 − ρ²) formula) — the share of variance left after adjustment:

  | Pre/in-experiment correlation ρ | Variance left | Users needed vs unadjusted |
  |---|---|---|
  | 0.3 | 91% | ~0.9× |
  | 0.5 | 75% | ~0.75× |
  | 0.7 | 51% | ~0.5× |
  | 0.9 | 19% | ~0.2× |

- **Motivating case** — MSN Real Estate tested six "Find a home" widget designs; the winner raised transfer-fee revenue by almost 10%. The paper's point: on large sites, fractions of a percent are worth millions, so sensitivity is money.
- **Empirical setup** — factors were studied on a 3-week A/A test (treatment identical to control, so the true effect is zero), which lets you see variance reduction without a real effect confusing it.

## Actionable heuristics for product design
- When the platform offers CUPED (or "variance reduction", "regression adjustment"), plan the sample size with variance × (1 − ρ²), because a pre-period correlation of 0.7 halves the users or days you need; ask the data team for ρ on your metric rather than assuming it.
- When choosing a primary metric for a test on returning users, prefer one whose value is stable per user over time (queries, sessions, clicks, visits per user), because those correlate strongly with their own pre-period and get ~45–52% variance reduction at Bing.
- When the primary metric is revenue per user, do not count on CUPED: at Bing it reduced revenue variance by less than 5% because a user's revenue in one period barely predicts the next. Cap the metric or use a conversion proxy instead (see `seven-rules-of-thumb.md` on capping).
- When the test targets brand-new users (onboarding, signup, first-run), expect little or no gain, because they have no pre-period history; use covariates fixed at first exposure (entry day, platform, acquisition channel) instead, which gave ~9–10% reduction for entry day alone.
- When configuring the pre-period window, use 1–2 weeks, because too short a window misses users (low coverage) and too long a window weakens the correlation with current behaviour; 2 weeks gave ~50% reduction across a wide range of experiment lengths.
- When a feature has a low trigger rate (e.g. only recipe searches), build covariates from anything known before the user triggers the feature, because triggered analyses have small effective samples and benefit most.
- When anyone proposes adjusting with a variable measured during the experiment (e.g. in-experiment distinct queries to adjust queries), refuse, because the paper shows it flipped a known positive effect into a confidently negative one with narrow CIs.
- When an experiment was borderline significant, CUPED can show significance from day 1 (Bing's 250 ms slowdown test), so apply it to every test by default rather than as a rescue after a flat result, which would be a forking path.
- When traffic is the bottleneck for running more tests in parallel, use the variance saved to run tests on half the users rather than shortening them below one week, because weekly cycles still apply.
- When the analysis unit differs from the randomization unit (CTR = clicks/pages, but users are randomized), make sure the platform combines CUPED with the delta method, because a naive per-page variance is wrong with or without CUPED.
- When the platform cannot run CUPED, post-stratify on a pre-experiment category that strongly predicts the metric (e.g. heavy vs light users last month), because it is mathematically the same idea with a categorical covariate.
- When you report a CUPED-adjusted result, report the adjusted delta and CI as the primary number and keep the unadjusted one in the appendix, because both are unbiased and the adjusted one is simply more precise; a large gap between them is a sign to check the covariate.
- When designing a feature whose success metric is a heavy-user metric (power-user tools, search, feeds), expect experiments to be much more sensitive with CUPED than a new-user funnel test, and size your MDE accordingly.

## Evidence & caveats
- Strong: the method is standard theory (control variates, ANCOVA) and the unbiasedness argument is simple. Bing reported 45%, 52% and 49% variance reductions on three live experiments with one week of pre-period and one week of experiment; the slowdown test was confirmed by a much larger rerun (p = 2e-13).
- The ~50% figure is Bing-specific and metric-specific: it comes from search engagement metrics where heavy and light users differ massively. Products with flatter usage distributions, many new users, or monetization metrics will see less. Treat 50% as an upper-range planning number, not a default.
- Assumes randomization by user (cookie) and cookies that persist; cookie churn reduces coverage.
- The paper does not discuss interaction with sequential testing or heavy-tailed metrics beyond revenue; later work (regression adjustment, CUPAC with ML predictions) extends it.
- Dated details: the "Bing traffic" and comScore numbers are 2012; the core method has not aged.
- The authors list open problems they had not solved: picking covariates automatically per metric and per experiment type, and using covariates at assignment time (stratified randomization) rather than only after the fact.
- The variance-reduction curves (pre-period length, experiment length) are from one A/A test on one metric family; the direction of the trade-off is general, the exact numbers are not.

## Disagreements with other references
- `references/data-driven/statistics-cheatsheet.md` §2.3 lists "use CUPED" as a fix for noisy revenue per user. The paper's own data says CUPED did almost nothing for revenue (<5%). Trust the paper: for revenue, capping and proxies are the main levers.
- The cheatsheet §4.1 says "Bing reported roughly 50% variance reduction on some key metrics" and "works poorly for new users"; both match the paper. It omits the pre-period length guidance (1–2 weeks) and the hard rule against in-experiment covariates; this note adds both.
- `references/books/ab-testing-intuition-busters.md` warns against choosing data treatments after seeing results; applying CUPED only when a test looks flat is exactly such a choice. Decide it in the experiment config.

- `references/data-driven/experimentation-playbook.md` advises bolder changes or other methods when a plausible effect can't be detected in ~4 weeks; CUPED should be checked first, since it can halve that duration for returning-user metrics before you give up on an A/B test.
- `references/books/experiments-at-large-scale.md` names sensitivity as the untapped lever for scaling experimentation and cites this paper as Bing's first step; no conflict.

## Best quotes (< 25 words each, max 5)
- "Never use covariates that could be affected by the treatment, as this could bias the results."
- "Using the metric measured in the pre-period as the covariate typically provides the best variance reduction."
- "Using a pre-experiment period of 1-2 weeks works well for variance reduction."

## Related
- `references/data-driven/statistics-cheatsheet.md` (§2 sample size, §4 variance reduction)
- `references/data-driven/experimentation-playbook.md` (pre-registration, triggered analysis)
- `references/books/seven-rules-of-thumb.md` (capping skewed metrics, minimum sample sizes)
- `references/books/experiments-at-large-scale.md` (why sensitivity matters for running many tests)
- Kohavi, Tang, Xu (2020), *Trustworthy Online Controlled Experiments*, ch. 22 (variance estimation)
