# Mode: experiment — data-driven design decisions (highest-priority mode)

Use for: designing an A/B test, writing hypotheses, choosing metrics, sizing a test, reading results, deciding what to ship based on data, deciding *whether* to test at all.

Load first: `references/data-driven/experimentation-playbook.md` and `references/data-driven/statistics-cheatsheet.md`. Add `metrics-frameworks.md` when choosing metrics and `decisions-from-data-examples.md` when reading results.

## A. Before the test
1. **Problem from evidence:** what data says there is a problem (funnel step drop, cohort retention, qualitative signal)? No evidence → recommend discovery first (`modes/research.md`).
2. **Hypothesis** — use this template:
   `Because we saw <evidence>, we believe that <change> for <segment> will cause <behavior change>, which we'll measure with <primary metric>. We'll know it worked if <metric> moves by ≥ <MDE> within <duration>, without hurting <guardrails>.`
3. **Metrics:** 1 primary (closest measurable proxy of user value tied to the business), 2–4 guardrails (e.g. refunds, cancellations, crash rate, latency, support tickets, long-term retention), plus diagnostic metrics.
4. **Sizing:** compute the sample size per arm from baseline rate, MDE, α=0.05, power=0.8 (use `scripts/sample_size.py`). If the duration is > ~4–6 weeks, change the plan: test bigger changes, test higher up the funnel, use a proxy metric, or don't A/B test.
5. **Variants:** prefer one strong variant with a clear mechanism over many weak ones. Each variant should express the hypothesis, not a random tweak.
6. **Risks:** novelty/primacy effects, SRM, interaction with other tests, seasonality, ethics (no deceptive variants, ever).

## B. Reading results
- Check **SRM** first, then guardrails, then the primary metric. Report effect size with its confidence interval, not just p.
- Twyman's law: a surprisingly big win is probably a bug. Investigate it before you celebrate.
- Segments: look at pre-registered ones only, and treat the others as hypotheses for the next test.
- Decide: ship / iterate / kill, and write the learning in one sentence ("Users don't lack motivation at step 3, they lack information").

## C. When not to A/B test
For low traffic, big redesigns, brand or strategic bets, or ethical concerns, use qualitative research, staged rollout with holdback, painted-door (ethically disclosed), before/after with a control cohort, or expert review grounded in the evidence library.

## Output
Test brief (hypothesis, variants with design specs, metrics, sample size/duration, risks, decision rule) or a results readout (verdict, numbers, learning, next test). Be opinionated about whether the test is worth running.
