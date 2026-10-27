---
title: "Statistical Rules of Thumb (2nd ed.)"
author: "Gerald van Belle"
year: 2008
domains: [data-driven, statistics, research, experimentation, data-viz]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: low
---

# Statistical Rules of Thumb — Gerald van Belle

Use this when: you need a sample size in your head during a planning meeting (A/B test, usability benchmark, survey, diary study); a test or launch saw zero failures and someone claims the risk is zero; groups must be unequal (small treatment, big control; expensive vs cheap participants); you are framing a study question before choosing metrics; someone wants a pie chart or 3D bars in a dashboard.

Source basis: the book is in print (Wiley); the author's old site (vanbelle.org) no longer resolves. These notes
use two legal free sources: the publisher-supplied reading sample of the 2nd edition (front matter, the full
table of contents listing all rules by name, both prefaces, the start of chapter 1 with rule 1.1), and the
authors' own draft of the sample-size chapter (van Belle & Millard, "STRUTS", chapter 2, 1998), posted by the
University of Washington's NRCSE with permission to cite. The draft has the core rules of the published
chapter 2; the other chapters were seen only as rule titles, without their justifications.

## The big idea (3 sentences)
A small set of memorable, robust approximations covers most everyday statistical decisions, and each rule should
come with its justification (a model or experience), an illustration and its limits.
The anchor is Lehr's sample-size formula, n ≈ 16 / Δ² per group for a two-group comparison (Δ = difference in
standard-deviation units, two-sided α = 0.05, 80% power), from which many other rules follow.
Beyond formulas, the rules push good habits: start from the question, design before analysis, estimate with
intervals, distinguish randomised from observational evidence, and show data plainly.

## Core concepts
- **Four basic questions (rule 1.1)** — What is the question? Can it be measured? Where, when and how will you
  get the data? What do you think the data are telling you?
- **Lehr's equation (2.1)** — n per group = 16 / Δ², where Δ = (μ₁ − μ₂)/σ. Δ = 0.5 → 64 per group; a one-group
  comparison with a standard needs half. The 16 comes from 2 × (1.96 + 0.84)² ≈ 15.7.
- **Coefficient of variation version (2.2)** — when people think in percentages: n ≈ 8·CV² [1 + (1 − PC)²] / PC²,
  where PC is the proportional change and CV the coefficient of variation. A 20% change with 30% CV → about
  30 per group.
- **Confidence-interval width** — n = 16σ² / w² for a 95% interval of total width w (same multiplier, so one
  formula to remember); for a difference of two means the multiplier is 32.
- **Poisson counts** — n = 4 / (√θ₁ − √θ₂)² per group (e.g. means 30 vs 36 → about 15 units). Observing longer
  per unit cuts the needed units proportionally; background noise added to both groups raises n.
- **Binomial upper bound** — n ≈ 4 / (π₁ − π₂)² per group, a conservative bound reached at π = 0.5 (0.5 vs 0.7 →
  100 per group); fine for answers between about 10 and 100, use exact methods beyond.
- **Unequal groups (2.10)** — with only n₁ < n available in one group, the other needs k·n₁ with k = n / (2n₁ − n).
  Precision gains flatten fast: beyond about 4–5 times as many in the bigger group adds almost nothing
  (and the published book: no more than four or five controls per case, rule 6.5).
- **Unequal costs (2.11)** — allocate n₂/n₁ = √(c₁/c₂): sample sizes inversely proportional to the square root of
  cost per observation; similar costs → equal groups.
- **Rule of threes (2.12)** — zero events in n trials → a 95% upper bound on the rate is about 3/n.
- **Other rule titles (2nd-ed. contents, not read in full)** — use two-sided p-values; p-values for sample
  size, confidence intervals for results; at least twelve observations for a confidence interval; estimate ±
  two standard errors is remarkably robust; overlapping confidence intervals do not imply non-significance;
  do not formulate a study solely in terms of effect size; sample size calculations are determined by the
  analysis; large sample size does not guarantee validity; randomization puts systematic effects into the error
  term; address multiple comparisons before starting the study; do not dichotomize unless absolutely necessary;
  begin with absolute risk reduction, then relative risk; use text for a few numbers, tables for many, graphs
  for complex relationships; always graph the data; never use a pie chart; stacked bars are worse than bars;
  three-dimensional bars are misdirected artistry.

## Actionable heuristics for product design
- When someone asks "how many users do we need?", start with 16/Δ² per variant: express the change you care
  about in standard deviations of the metric (for a conversion rate p, σ = √(p(1−p))). A 2% → 2.2% conversion
  change (+10% relative) is Δ ≈ 0.002 / 0.14 ≈ 0.014 → about 78,000 per arm; at 5,000 eligible users a week
  that is months, so you know at once to move to a closer metric, a bolder change or another method. Cross-check with
  `references/data-driven/statistics-cheatsheet.md`, which uses the same formula.
- When stakeholders speak in percentages ("we want +10% on a metric that varies ±30%"), use the CV form, which
  needs only the proportional change and the coefficient of variation.
- When a beta, pilot or usability round shows zero failures, report the upper bound, not "0%": with 20
  participants and no failures the failure rate could still be up to ~15% (3/20); with 300 sessions and no
  crashes, up to ~1%.
- When planning a benchmark (task time, SUS, SEQ) that you want to report as an interval, size it for the
  interval width you need (n = 16σ²/w²) and remember the book's floor of about twelve observations for any
  confidence interval.
- When a holdout or control must be small (or treatment must be limited), use k = n/(2n₁ − n) to size the other
  arm, and do not bother going beyond about 4–5:1, because precision barely improves.
- When one group is much more expensive (moderated sessions vs unmoderated, paid panel vs in-product survey),
  allocate by the square-root-of-cost rule rather than splitting evenly.
- When two confidence intervals on a chart overlap, do not conclude "no difference"; test the difference
  directly, because overlap does not imply non-significance.
- When building dashboards or research readouts, use text for one or two numbers, tables for many, and charts
  for relationships; avoid pie charts, stacked bars and 3D bars (pair with `references/books/tufte-visual-display.md`).
- When framing any research or experiment, answer the four basic questions in the brief before choosing
  metrics or tools.

## Evidence & caveats
- The sample-size rules are mathematical approximations with stated assumptions (normality, equal variances,
  two-sided α = 0.05, 80% power) [strong within those assumptions]. They are rough for very small or very
  large n and for skewed metrics (revenue), where variance-based calculation or simulation is better.
- Online A/B tests often use one-sided tests or 90% power; adjust the multiplier (one-sided α = 0.05 with 80%
  power gives about 12.4 instead of 16). Georgiev argues for one-sided tests; van Belle's book has a rule
  "use two-sided p-values" (justification not read).
- The graph rules (no pie charts, bars waste ink) are expert opinion in the Tufte tradition, not experimental
  findings; perception research supports some (3D distortion, stacked-bar comparisons) more than others.
- The draft chapter (1998) predates the published editions; numbering and wording changed (e.g. the 2nd edition
  calls 2.1 "Lehr's equation"). Most of the book's 100+ rules were seen only as titles.

## Disagreements with other references
- `references/books/georgiev-statistical-methods-ab-testing.md` advises one-sided tests for directional
  decisions; van Belle's rule list says use two-sided p-values. For product A/B tests, follow the decision
  rule: one-sided when only one direction leads to shipping, but note two-sided 0.05 is the more conservative
  default kept in `references/data-driven/statistics-cheatsheet.md`.
- `references/books/ft-visual-vocabulary.md` includes part-to-whole charts such as pies and donuts for a few
  categories; van Belle says never. Use bars for comparisons; allow a simple pie only for 2–3 parts of one
  whole where the share itself is the message.
- `references/books/quantifying-the-user-experience.md` (Sauro & Lewis) gives small-sample methods for UX
  metrics; prefer it for task success and SUS, and use van Belle's rules as quick checks.

## Best quotes (< 25 words each, max 5)
- "The first question faced by a statistical consultant, and frequently the last, is, 'How many subjects (animals, units) do I need?'" (STRUTS draft)
- "You will not go far astray if you start with the basic sample size formula for two groups" (STRUTS draft)
- "Randomization puts systematic effects into the error term." (D. B. DeLury, quoted in the preface; also a rule title)
- "Three-Dimensional Bar Graphs Constitute Misdirected Artistry" (rule 9.8 title)

## Related
- `references/data-driven/statistics-cheatsheet.md`, `references/data-driven/experimentation-playbook.md`
- `references/books/georgiev-statistical-methods-ab-testing.md`, `references/books/quantifying-the-user-experience.md`,
  `references/books/nielsen-landauer-problem-discovery.md`, `references/books/tufte-visual-display.md`,
  `references/books/ft-visual-vocabulary.md`

## Sources
- Publisher-supplied reading sample of the 2nd edition (front matter, full contents, prefaces, start of chapter 1;
  read in full): https://content.e-bookshelf.de/media/reading/L-571780-02cc7b4b18.pdf
- van Belle, G. & Millard, S. P. (1998). *STRUTS: Statistical Rules of Thumb*, draft chapter 2 "Sample Size",
  posted by the authors at UW NRCSE ("you may cite this material freely"); read in full:
  https://sites.stat.washington.edu/NRCSE/research/struts/chapter2.pdf ; project page:
  https://sites.stat.washington.edu/NRCSE/research/eo-1.html
- Not reachable: the author's companion site http://www.vanbelle.org (cited in the prefaces).
- Local copies: books/free/van-belle-statistical-rules-of-thumb/ (git-ignored).
