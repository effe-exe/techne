# Experiment Statistics Cheat-Sheet for Designers

> **Use this when:** you need a sample size, MDE, test duration, or must judge whether a result is trustworthy.
> **Use this when:** reading p-values, confidence intervals, segment results, or someone says "it's significant".
> **Use this when:** checking SRM, peeking, multiple comparisons, variance reduction (CUPED), or Simpson's paradox.

No calculus required. Formulas are approximate but good enough for planning; use the experimentation platform's calculator for final numbers.

---

## 1. Vocabulary in one table

| Term | Plain meaning | Typical value |
|---|---|---|
| Control (A) / Treatment (B) | Current vs new experience | — |
| Randomization unit | What gets assigned to an arm (user, device, session, team) | user |
| Alpha (α) | Accepted false-positive rate when there is no real effect | 0.05 (two-sided) |
| Power (1 − β) | Probability of detecting a real effect of size MDE | 0.80 |
| MDE | Minimum detectable effect: the smallest true effect you can reliably detect | e.g. 2–5% relative |
| p-value | If there were truly no effect, how often you'd see a difference this big or bigger | — |
| Confidence interval (CI) | Range of effect sizes compatible with the data | 95% |
| Absolute vs relative lift | 5.0% → 5.5% is +0.5 pp absolute, +10% relative | always report both |
| Variance (σ²) | How noisy the metric is; for a rate p, σ² = p(1 − p) | — |

**What a p-value is NOT** (ASA statement, Wasserstein & Lazar 2016, *The American Statistician*) [strong]:
- not the probability that the hypothesis is true;
- not the probability the result is a fluke;
- not a measure of effect size or importance;
- not, by itself, a good measure of evidence (principle 6).
p = 0.04 and p = 0.06 are nearly the same evidence. Report the CI and effect size; use the threshold only as a pre-agreed decision rule. ASA principles 3–4: don't decide on the threshold alone (add practical size, guardrails, cost), and report every test, metric and variant run on the question, flat ones included. → references/books/asa-p-values.md

---

## 2. Sample size and MDE

### 2.1 The rule of thumb (memorise this)
For α = 0.05 two-sided and 80% power, per variant:

```
n ≈ 16 · σ² / δ²
```
δ = absolute difference you want to detect; σ² = metric variance. (Derived from n = 2(z₀.₉₇₅ + z₀.₈)² σ²/δ² = 2·(1.96+0.84)²·σ²/δ² ≈ 15.7·σ²/δ²; van Belle 2008, *Statistical Rules of Thumb*; used in Kohavi et al. 2020.) [strong]

For a conversion rate p: σ² = p(1 − p).

### 2.2 Worked example — conversion
Baseline sign-up conversion p = 5%. You want to detect a 5% relative lift (5.00% → 5.25%), so δ = 0.0025.
- σ² = 0.05 × 0.95 = 0.0475
- n ≈ 16 × 0.0475 / 0.0025² = 0.76 / 0.00000625 ≈ **121,600 users per variant** (exact formula ≈ 119,300).
- Two arms → ~243k users. If 30k eligible users/week reach this screen → **~8 weeks**. Too long.
- Options: (a) accept MDE 10% relative → n ≈ 30,400 per arm → ~2 weeks; (b) move the metric closer to the change (step conversion instead of final purchase) which raises p and the effect size; (c) variance reduction (§4); (d) larger, bolder change; (e) don't A/B test — use other methods.

**Key intuition: halving the MDE quadruples the sample size.** Low baselines (1% conversion) need enormous samples.

**Assumed effect:** take δ from external evidence (past effects on this metric, meta-analyses), not one study's headline or the test's own estimate, and compute over a range of plausible effects (Gelman & Carlin 2014) [strong].

### 2.3 Worked example — continuous metric (revenue per user)
Mean revenue/user $2.00, standard deviation $10 (revenue is heavily skewed). Detect +1% relative (δ = $0.02):
- n ≈ 16 × 100 / 0.0004 = **4,000,000 per variant**.
- Revenue and time-spent metrics are noisy. Mitigations: cap/winsorize outliers (e.g. at 99.9th percentile, or an absolute cap per user per week), use a less noisy proxy (purchase conversion) as primary with revenue as secondary/guardrail. CUPED barely helps revenue (<5% variance cut at Bing; Deng et al. 2013).
- **Minimum n for skewed metrics:** n ≥ 355·s² per variant (s = skewness, if |s| > 1). Bing revenue/user s = 17.9 → 114k; capped at $10/user/week, s = 5.2 → 9.7k, detecting effects 30% smaller (Kohavi et al. 2014, "Seven Rules of Thumb") [strong]. Keep skewed-metric arms 50/50. → references/books/seven-rules-of-thumb.md

### 2.4 Inverting: what MDE can I detect with my traffic?
```
δ ≈ 4 · σ / √n      (per-variant n, α=0.05, power 0.8)
```
Example: 20,000 users per arm, p = 10% → σ = 0.3 → δ ≈ 4 × 0.3 / 141 ≈ 0.0085 → **8.5% relative MDE**. If your design change plausibly moves the metric by 1–2%, this test cannot see it. Say so before running.

### 2.5 Duration rules
- Minimum 1 full week (weekday/weekend behaviour differs); prefer 2 for novelty diagnosis. [strong]
- Cumulative users grow sub-linearly over time (returning users don't add new units), so doubling duration does NOT double n. Check the platform's user-accrual curve.
- Don't extend a flat test hoping it becomes significant (that's peeking by another name) unless pre-planned.

---

## 3. Reading a result

### 3.1 Standard error and CI for a difference in proportions
```
SE = √( p₁(1−p₁)/n₁ + p₂(1−p₂)/n₂ )
95% CI = (p₂ − p₁) ± 1.96 · SE
```
Example: control 5,000/100,000 = 5.00%; treatment 5,300/100,000 = 5.30%.
SE = √(0.0475/100000 + 0.0502/100000) ≈ 0.000988. Difference = 0.0030. CI = 0.0030 ± 0.0019 → [+0.11 pp, +0.49 pp] → relative ≈ [+2.2%, +9.8%]. Significant, and the plausible range is what you report to stakeholders: "between +2% and +10%, best estimate +6%".

### 3.2 Practical vs statistical significance
- Statistically significant = probably not zero. Practically significant = big enough to matter.
- Pre-define the practical threshold (the smallest lift worth its cost). With huge samples, trivial effects become "significant"; with small samples, important effects look "not significant".
- **A flat result with a narrow CI is a finding ("no effect larger than X"). A flat result with a wide CI is no finding.**

### 3.3 Winner's curse and Type M errors
Underpowered tests that happen to reach significance overstate the effect (Gelman & Carlin 2014) [strong]. Exaggeration by power: ~1.1x at 80%, ~1.4x at 50%, ~2.5x at 17%, ~3.7x at 10%, worse below (paper's examples: 8–77x); under ~10% power wrong-sign (Type S) risk is material. → references/books/type-s-type-m-errors.md Airbnb reported systematic overestimation in their winning experiments and corrected for it (Lee & Shen 2018, "Winner's Curse: Bias Estimation for Total Effects of Features in Online Controlled Experiments", KDD) [moderate]. Practical rule: **discount reported lifts from low-power tests**, and don't sum the lifts of 20 winning tests and expect that total — it won't materialise.

### 3.4 False positive risk given a low base rate
With prior probability π that ideas **work** (note: Kohavi, Deng, Vermeer 2022 define π = P(H0), the complement — same numbers, don't invert), α (one direction, 0.025) and power 0.8:
```
FPR = α·(1−π) / (α·(1−π) + power·π)
```
- π = 8%: FPR = 0.025·0.92 / (0.025·0.92 + 0.8·0.08) = 0.023/0.087 ≈ **26%**
- π = 33%: FPR ≈ 0.0168/(0.0168+0.264) ≈ **6%**
This matches figures discussed by Kohavi, Deng, Vermeer (2022). [strong — arithmetic] At **20% power** FPR rises to ~20/33/42/53/59% for success rates of 33/20/15/10/8%. → references/books/ab-testing-intuition-busters.md
Consequences: for surprising or high-stakes wins on mature products, **replicate** or use a stricter threshold (e.g. p < 0.01).

---

## 4. Variance reduction (more sensitivity, same traffic)

### 4.1 CUPED
Controlled-experiment Using Pre-Experiment Data (Deng, Xu, Kohavi, Walker 2013, WSDM) [strong]. Adjust each user's metric by their pre-experiment value of the same (or correlated) metric:
```
Y_adj = Y − θ · (X − mean(X)),   θ = cov(X,Y) / var(X)
Variance reduced by factor (1 − ρ²), ρ = correlation(X, Y)
```
- ρ = 0.7 → variance × 0.51 → **needs ~half the sample** for the same MDE.
- Bing reported ~50% variance reduction on key metrics with a **1–2 week pre-period** (Deng et al. 2013).
- Best covariate: the **same metric pre-period**. **Never a covariate measured after exposure** — Bing's in-experiment distinct-queries covariate flipped a known positive effect to confidently negative.
- Works poorly for new users (no pre-period data); covariates fixed at first exposure (entry day) still gave ~9–10%. → references/books/cuped.md
- Designers don't compute it; they should **ask whether the platform applies it** and plan sample size accordingly.

### 4.2 Other tactics
- **Triggered analysis**: analyse only users who actually reached the changed surface. Diluting with unexposed users can multiply required sample several-fold. [strong]
- **Cap outliers** for revenue/time metrics.
- **Choose a more sensitive metric** closer to the change (click-through on the module vs overall revenue), keeping top-line as guardrail.
- **Paired / within-subject designs** in usability tests; **interleaving** for rankings.
- **Ratio metrics** (clicks per session) need delta-method variance — trust the platform, not a naïve spreadsheet (Deng, Knoblich, Lu 2018, KDD) [moderate].

---

## 5. Peeking and sequential testing

Checking a fixed-horizon test repeatedly and stopping at the first p < 0.05 inflates false positives dramatically. Classic results on repeated significance testing (Armitage, McPherson, Rowe 1969, JRSS-A) [strong]: approximate overall false-positive rate with α = 0.05 per look:

| Looks | ~False positive rate |
|---|---|
| 1 | 5% |
| 2 | ~8% |
| 5 | ~14% |
| 10 | ~19% |
| 20 | ~25% |
| unlimited | → 100% eventually |

(Values approximate; order-of-magnitude is what matters.) Checking after every observation (150-obs cap) gives **26.1%**. For planned peeks, the nominal threshold keeping 5% actual is 2.9% (1 peek), 2.2% (2), 1.8% (3), 1.4% (5), 1.0% (10) (Miller 2010) [moderate]. Peeking is harmless only if it never changes when the test stops. → references/books/how-not-to-run-ab-test.md

Fixes:
- **Fixed horizon**: decide n upfront, look only at the end (monitoring guardrails for harm is fine).
- **Sequential methods** designed for continuous monitoring: always-valid p-values / mSPRT (Johari, Pekelis, Walsh 2017, "Peeking at A/B Tests", KDD) used by several commercial platforms [strong]; group-sequential designs with O'Brien–Fleming boundaries (few planned interim looks) [strong]. Bing's guardrail alerts: 7 daily O'Brien–Fleming checkpoints (day-1 cutoff 5×10⁻⁸, final 0.040), firing only on deltas both significant and large, tiered from email to auto-shutdown (Kohavi et al. 2013) [moderate].
- Bayesian dashboards are not immune: stopping when "probability to beat control > 95%" also inflates error under optional stopping if priors are vague. [contested in details, but caution warranted]
- Popular primer: Evan Miller (2010), "How Not To Run an A/B Test" [moderate, widely cited blog].

---

## 6. Multiple comparisons

P(at least one false positive) = 1 − (1 − α)^k.
- k = 5 metrics → 23%; k = 20 → 64%; k = 100 (20 metrics × 5 segments) → 99%.
- **Iterations count:** k do-nothing treatments give P(positive significant) = 1 − 0.975^k — 5 → 12%; six iterations of five-treatment tests → >50%. Use lower thresholds and a final higher-powered replication. → references/books/experiments-at-large-scale.md
- **Analysis choices count:** per-variant outlier trimming alone can push false positives to 43% (cited in Kohavi et al. 2022). Pre-specify outlier/bot rules and apply them across all data.

Fixes, in order of usefulness for designers:
1. **One pre-declared primary metric** (or an OEC); others are secondary/diagnostic.
2. Treat unplanned segment/metric findings as **new hypotheses**, re-test them; require p < 1e-4 before even taking an unplanned slice seriously.
3. Corrections when many hypotheses truly matter: Bonferroni (α/k; conservative), Benjamini–Hochberg false discovery rate control (Benjamini & Hochberg 1995, JRSS-B) [strong].
4. Use a lower threshold for secondary metrics (e.g. p < 0.01) — Kohavi et al. 2020 suggest tiered thresholds by metric importance [moderate].
5. A/B/n tests: compare each arm vs control; correct for number of arms.

---

## 7. Sample Ratio Mismatch (SRM)

If you configured 50/50 and got a noticeably different split, **the experiment is broken**; don't interpret the metrics.

Check with chi-square goodness-of-fit:
```
χ² = Σ (observed − expected)² / expected     (1 degree of freedom for 2 arms)
```
Example: control 50,000, treatment 48,800 (expected 49,400 each).
χ² = 600²/49,400 + 600²/49,400 ≈ 14.6 → p ≈ 0.00013 → **SRM**. A 1.2% imbalance looks harmless, yet it invalidates the test.
- Flag threshold: p < 0.001 (or 0.0005) on high-volume platforms; the authors' SRM Checker uses p < 0.01 [moderate].
- Common causes (Fabijan et al. 2019 taxonomy): redirects losing users in one arm, treatment crashing before the exposure log, bot filtering reacting to variant behaviour, trigger conditions that depend on the treatment, caching, users switching arms. Also: telemetry in one arm only, variant speed changing who gets logged, client batching, self-assign links, correlated hash seeds, HyperLogLog counts. Free tool: Lukas Vermeer's SRM checker (lukasvermeer.nl/srm) [verified existence].
- **Prevent:** redirect both arms; log a "first signal" exposure before other code; fix bot status at first exposure; trigger on an event before the change. **Diagnose:** triggered vs all-users scorecard → segment → day-1 pattern → perf/engagement direction → recurrence across tests → A/A → severity → downstream stage → cross-pipeline. Extreme-value bounds can salvage a result but usually include zero. → references/books/diagnosing-srm.md
- Check SRM **per segment** too (platform, browser) — it localises the bug.

---

## 8. Segments and Simpson's paradox

### 8.1 Simpson's paradox — numeric example
| | Control | Treatment |
|---|---|---|
| Desktop | 4,000/80,000 = **5.0%** | 1,100/20,000 = **5.5%** |
| Mobile | 400/20,000 = **2.0%** | 1,760/80,000 = **2.2%** |
| **Total** | 4,400/100,000 = **4.4%** | 2,860/100,000 = **2.86%** |

Treatment wins in every segment but loses overall, because the mix differs (treatment got mostly low-converting mobile users). In a properly randomized test this mix shouldn't differ — so a Simpson pattern is itself an **SRM-style red flag**. In practice it arises when: ramp percentages change over time while conversion rates differ by day (Kohavi et al. 2020); comparing pre/post periods with different traffic mixes; or pooling across countries with different allocations. Classic real case: UC Berkeley 1973 admissions (Bickel, Hammel, O'Connell 1975, *Science*). [strong]

Rule: **never combine data from periods with different allocation percentages** without stratifying; analyse the stable-allocation period.

### 8.2 Segment pitfalls
- Segments defined by post-treatment behaviour (e.g. "users who opened the new menu") are **not randomized** — comparisons are biased. Segment only on pre-treatment attributes (platform, country, tenure at assignment). Why: **collider bias** — conditioning on a variable caused by treatment and outcome flipped a true −1 effect to +0.6 in Cunningham's simulation. Never control for outcomes or post-treatment variables; pre-treatment predictors add precision (CUPED) [strong]. → references/books/causal-inference-mixtape.md
- Small segments have wide CIs; "opposite effect in segment X" is usually noise unless pre-declared and large.
- Heterogeneous effects are real but rarely flip sign; Kohavi et al. 2020 note that most "interesting" segment differences turn out to be bugs or noise [moderate]. A segment that's genuinely different (e.g. a browser where the variant renders badly) usually indicates a bug.
- **Mix shift** in metrics over time (more new users from a campaign) can move averages without any change in behaviour.

---

## 9. Ratio, rate and mean pitfalls
- **Denominator changes**: "click-through rate up" could mean fewer impressions. Always look at numerator and denominator separately.
- **Per-user vs per-session**: randomize by user, compute per-user metrics; per-session metrics weight heavy users more and violate independence (use delta method).
- **Survivorship**: "average session length went up" because the treatment drove away short-session users. Check counts.
- **Medians/percentiles** for skewed metrics (latency, time-on-task) — report p50/p90.
- **Novelty in rates**: plot daily.

---

## 10. Quasi-experiments when you can't randomize
Roughly ranked by credibility (all weaker than an RCT; the ranking depends on how well each design's assumptions hold) [moderate]:
1. **Regression discontinuity**: compare units just either side of a known cutoff (eligibility threshold). Among the most credible observational designs if the cutoff is sharp, there's no bunching (McCrary test) and covariates balance; local to the cutoff.
2. **Difference-in-differences**: treated vs untreated region, before vs after; requires **parallel counterfactual trends after treatment (untestable)** — pre-trends are supporting evidence only. Falsify: same outcome on an unaffected group; same group on an unaffected outcome.
3. **Synthetic control**: weighted combination of untreated units as counterfactual (Abadie et al. 2010).
4. **Interrupted time series / before-after**: weakest — seasonality, campaigns, and mix shifts confound it. Use only with explicit caveats. → references/books/causal-inference-mixtape.md
Reference: Angrist & Pischke (2009), *Mostly Harmless Econometrics*; Cunningham (2021), *Causal Inference: The Mixtape* (free online).

---

## 11. Myths to correct
- **"95% significance means 95% chance B is better."** False (§1, §3.4).
- **"We need 100 conversions per arm and we're done."** Folk rule; the needed number depends on baseline and MDE. [myth]
- **"A/B testing tools' 'chance to beat original' after 2 days is reliable."** Peeking + novelty. [myth]
- **"If it's not significant, there's no effect."** Absence of evidence ≠ evidence of absence unless the CI is narrow.
- **"Bigger lift on a small sample is more impressive."** It's more likely exaggerated (Type M).
- **"The flat test was only 30% powered, so the effect is real but we missed it."** Post-hoc power is the p-value re-expressed (p = 0.05 → 50%, 0.1 → 38%). Never display it; pre-register the minimum effect of interest. [strong]
- **"Run tests at 90/10 to reduce risk; same power."** Unequal splits reduce power for the same total traffic (a 90/10 split needs ~2.8x the total users of 50/50 for the same sensitivity). Use 50/50 after ramp. [strong — arithmetic: variance ∝ 1/n₁ + 1/n₂] Also, for skewed metrics a 10/90 split roughly doubled left-tail Type I error (≈5.4–5.8% vs 2.5%) in A/A simulations and needs up to ~400x more users to converge; a big shared control for 2–4 treatments saves <10% variance (Kohavi et al. 2022) [strong].
- **"41 shades of blue proves Google is tasteless/obsessive."** It's often cited, details are anecdotal; the transferable lesson is that small visual changes can have measurable effects at scale. [weak/anecdotal]

---

## Quick calculator recipes (paste into any code cell)
```python
from statistics import NormalDist as N
def n_per_arm(p, rel_mde, alpha=0.05, power=0.8):
    d = p * rel_mde; z = N().inv_cdf(1-alpha/2) + N().inv_cdf(power)
    return 2 * z**2 * p*(1-p) / d**2
def srm_p(n_a, n_b, ratio=0.5):
    tot = n_a + n_b; ea, eb = tot*ratio, tot*(1-ratio)
    chi = (n_a-ea)**2/ea + (n_b-eb)**2/eb
    return 2*(1-N().cdf(chi**0.5))   # 1 dof
print(round(n_per_arm(0.05, 0.05)))   # ~119k
print(srm_p(50000, 48800))            # ~0.00013 -> SRM
```

## Key sources
- Kohavi, Tang, Xu (2020). *Trustworthy Online Controlled Experiments*. Cambridge UP.
- van Belle, G. (2008). *Statistical Rules of Thumb*, 2nd ed. Wiley.
- Deng, A., Xu, Y., Kohavi, R., Walker, T. (2013). Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data. WSDM '13.
- Johari, R., Koomen, P., Pekelis, L., Walsh, D. (2017). Peeking at A/B Tests. KDD '17.
- Armitage, P., McPherson, C., Rowe, B. (1969). Repeated significance tests on accumulating data. JRSS-A.
- Benjamini, Y., Hochberg, Y. (1995). Controlling the False Discovery Rate. JRSS-B.
- Wasserstein, R., Lazar, N. (2016). The ASA Statement on p-Values. The American Statistician.
- Gelman, A., Carlin, J. (2014). Type S and Type M errors. Perspectives on Psychological Science.
- Lee, M., Shen, M. (2018). Winner's Curse. KDD '18.
- Fabijan, A. et al. (2019). Diagnosing Sample Ratio Mismatch. KDD '19.
- Bickel, P., Hammel, E., O'Connell, J. (1975). Sex Bias in Graduate Admissions. Science.
- Georgiev, G. (2019). *Statistical Methods in Online A/B Testing*. (practitioner book)
