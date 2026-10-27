---
title: "Quantifying the User Experience: Practical Statistics for User Research (2nd ed.)"
author: "Jeff Sauro, James R. Lewis"
year: 2016
domains: [data-driven, research, statistics, usability-metrics]
evidence: "strong"
basis: "author's free material, not the full book"
coverage: medium
---

# Quantifying the User Experience (2nd ed.) — Jeff Sauro & James R. Lewis

Use this when: you need to report a completion rate, task time or questionnaire score from a usability test with 5–30 people and want an honest range instead of a bare number; you are planning how many participants a benchmark or design comparison needs; a stakeholder says "five users can't tell us anything" or "you need 30 for statistics"; you are choosing between SUS, UMUX-Lite and SEQ, or arguing about rating-scale formats.

Basis: the book itself was not read. These notes come from the authors' own MeasuringU articles (Sauro alone or Sauro & Lewis), which explain the same methods the book teaches and cite its chapters, plus the publisher-facing book page with the table of contents. The chapters covered best are 3 (confidence intervals), 5 (comparing designs), 6–7 (sample sizes), 8 (questionnaires) and parts of 9 (controversies). Chapter 10 (correlation, regression, ANOVA) is not covered.

## The big idea (3 sentences)
User research almost always measures a small sample, so every completion rate, time or score is an estimate that needs a confidence interval, and the right interval depends on the data type (binary, task time, or rating scale). Small samples are not "unscientific": methods built for small n (the t-distribution, the adjusted-Wald interval, log-transformed times) give accurate answers, they just can only detect large effects. Standardized questionnaires (SUS, SEQ, UMUX-Lite) and published benchmarks turn raw numbers into something you can compare and act on.

## Core concepts
- **Three data types, three methods** — binary data (pass/fail) uses the adjusted-Wald interval; rating scales use the t-interval; task times are log-transformed, given a t-interval, then back-transformed.
- **Adjusted-Wald** — for 95% confidence, roughly add two successes and two failures, then compute the ordinary Wald interval. Sauro & Lewis (HFES 2005) showed the plain Wald interval badly undercovers at small n (a nominal 95% interval at n=15 behaved more like 72%).
- **Point estimates at 0% or 100%** — with tiny samples, report a backed-off best estimate (Laplace: (x+1)/(n+2)) alongside the interval; 5/5 does not mean everyone will succeed.
- **Geometric mean for task times** — times are right-skewed. Below about 25 participants the sample median overestimates the middle time (by up to ~10%) and varies more; the geometric mean had 13% less error and 23% less bias in their simulations on 61 tasks.
- **Confidence intervals as the main reporting unit** — width depends on confidence level, variability and sample size; halving the margin of error needs roughly four times the sample.
- **Overlap rule of thumb** — non-overlapping 95% intervals mean a significant difference; intervals can overlap by up to ~25% and still differ, so run the test when they partly overlap.
- **Statistical vs practical significance** — a p-value says a difference is unlikely to be chance, not that it matters; huge samples make trivial differences significant; the interval around the difference shows the plausible size of the gain.
- **Comparison tests for small samples** — two-sample t-test for continuous data; N−1 two-proportion test for binary data (Fisher exact when expected counts are below 1).
- **Problem discovery (formative) vs measurement (summative)** — the "five users" figure only concerns discovery: five users give about an 85% chance of seeing a problem that affects 31% of users at least once. A 10% problem needs about 18 users; a 1% problem about 189.
- **Sample size for comparisons** — needs standard deviation, smallest difference worth detecting, confidence, power (usually 80%), tails, and within- vs between-subjects design. Between-subjects needs about four times the total n of within-subjects for the same sensitivity.
- **SUS** — 10 items, scored 0–100; the average across ~500 studies is 68 (50th percentile); 80.3+ is roughly the top 10% ("A"); below about 51 is the bottom 15%. Scores are not percentages. Items 4 and 10 form a learnability subscale. It is not diagnostic.
- **SUS facts that surprise people** — repeat or experienced users rate the same product about 11% higher; SUS correlates only modestly with task performance in the same test (r ≈ .24); alternating positive/negative wording caused miscoding (11% of researchers) and respondent mistakes, and an all-positive version showed no extra bias.
- **SEQ** — one 7-point question after each task ("Overall, how difficult or easy was the task to complete?"); historical average about 5.5; correlates about .5 with completion and time; about 14% of users who fail a task still rate it very easy.
- **UMUX-Lite / UX-Lite** — two items (capabilities meet my requirements; easy to use) mirroring the Technology Acceptance Model; correlates about .83 with SUS and can be converted to a SUS-equivalent score; typical UX-Lite SD about 19.
- **Benchmarks** — average task completion is about 78% across ~1,200 tasks (top quartile above 92%, bottom below 49%), inflated because tested products are mostly released software and observed users try harder.
- **Format controversies are small** — in their 2020 summary of eight studies (left-side bias, agreement vs item-specific wording, "very" vs "extremely", grids, emoji faces, sliders, stars, negative numbers), every format effect was 1.5% or less and none was statistically significant.
- **"n ≥ 30" is a myth when applied rigidly** — it comes from where t converges on z and where the central limit theorem usually kicks in; for SUS and SEQ means the sampling distribution is near-normal by n ≈ 10.

## Actionable heuristics for product design
- When you report a completion rate from a small test, report the adjusted-Wald 95% interval next to it (e.g. 9/10 → roughly 57–100%), because the bare percentage implies a precision you don't have and executives will round it into a promise.
- When all participants succeed or all fail, report a Laplace-style best estimate and the one-sided interval instead of "100%", because perfect small-sample scores are almost never the population truth.
- When you need to show a task is good enough (e.g. at least 70% complete it), plan at least 8 participants and require all 8 to succeed; for a 90% bar plan about 30, because only then does the lower bound of the interval clear the target.
- When you report task time from fewer than ~25 people, report the geometric mean (average the logs, back-transform) as "average time", because the median and arithmetic mean are both biased by the long right tail.
- When you use a five-user round, frame its goal as finding the frequent problems, then fix and test again with another five; never quote a rate or compare designs from it, because five users only reliably surface problems affecting about a third of users.
- When a problem might be rare but severe (payments, accessibility, data loss), size the study for that frequency (10% → about 18 users for an 85% chance of seeing it once), or use other methods (analytics, logs, support tickets), because small rounds will miss it.
- When stakeholders insist on 30 participants, compute the sample from the decision instead: smallest difference that would change the design, expected SD, confidence and power, because 30 is almost never the right number and is often wasteful or too small.
- When comparing two designs on ratings, prefer within-subjects with counterbalanced order if the tasks allow it, because between-subjects needs roughly four times as many people to detect the same difference.
- When you need a single post-test usability score, use SUS (or UMUX-Lite where survey length matters) and compare it against the 68 average or a percentile table, not against 100, because raw SUS is not a percentage.
- When you collect SUS, double-check scoring of the reversed even items or use the all-positive version, because mis-scoring is common and produces plausible-looking wrong numbers.
- When you need to know which task hurts, add the SEQ after every task and ask "why?" whenever someone answers below 5, because SUS and other post-test questionnaires are not diagnostic.
- When a user fails but rates the task easy, record both and don't discard the rating, because attitude and performance overlap only partly (r ≈ .5) and the mismatch itself tells you the user didn't notice the failure (a feedback problem).
- When testing returning users against new ones, segment SUS by experience, because familiarity alone can lift scores by about 11% and mask a weak first-run experience.
- When stakeholders fight about scale format (stars vs numbers, sliders, emoji, 5 vs 7 points), stop debating and pick one consistent format, because measured effects are tiny; do not mix formats within one study, since order effects appeared when stars followed numbers.
- When an A/B result is "significant", read the confidence interval around the difference and compare its lower bound with the minimum lift that justifies shipping, because significance alone says nothing about whether the gain is worth it.
- When an A/B test runs on millions of users, judge practical effect size first, because almost any difference becomes significant at that scale.
- When small studies do reach significance, take them seriously, because with small samples only large differences can reach significance; but check them for Type M exaggeration (see `references/books/type-s-type-m-errors.md`).
- When eyeballing charts of two intervals that partly overlap, run the actual test before declaring "no difference", because overlap of up to ~25% can still be significant.

## Evidence & caveats
- Most claims are well-grounded statistics (t-distribution, Agresti–Coull adjusted-Wald, binomial problem discovery) plus the authors' own peer-reviewed simulations (HFES 2005, JUS 2006, CHI 2010/2011) on real usability datasets. Strong for the methods; the benchmarks are their proprietary databases.
- Benchmarks (SUS 68, completion 78%, SEQ ~5.5) come from MeasuringU's collections of mostly commercial software and websites, gathered in moderated or unmoderated tests. They are reference points, not laws; your domain may differ, and MeasuringU revises them (the SEQ average was updated in 2019).
- The "five users" debate is unresolved in practice because real problem frequencies vary widely; the binomial math is uncontroversial. Treat 31% as a historical average for early designs; released products are often below 10%.
- MeasuringU sells calculators, questionnaires (SUPR-Q) and a research platform; the articles promote these. The statistics stand on their own, but notice the commercial context.
- Several articles are 10–15 years old; the latest (2026) ones on n ≥ 30 and UX-Lite sample sizes match the older advice.
- Not covered by the free material: the book's worked examples, its full sample-size tables, the regression/ANOVA chapter, and its full "six enduring controversies" chapter (one- vs two-tailed tests, averaging ordinal ratings, multiple comparisons, combining metrics), so don't cite the book's exact position on those from these notes.

## Disagreements with other references
- `references/process/research-methods-selector.md` §5 cites Spool & Schroeder (5 users found ~35% of problems on complex sites) to warn against five-user rounds. Sauro & Lewis agree: five users only catch frequent problems. Both say to iterate and size by problem frequency. No real conflict.
- `references/data-driven/metrics-frameworks.md` says SUS "needs ~10+ respondents for stable comparison". Sauro shows SUS can be reported with five (the mean is within about 6 points of the true score half the time) as long as the wide interval is shown. Use five for direction, 10+ for comparisons, and the sample-size formula for decisions.
- `references/data-driven/experimentation-playbook.md` and `references/data-driven/statistics-cheatsheet.md` cover large-sample online A/B testing (peeking, SRM, CUPED). Sauro & Lewis focus on small-sample lab and survey statistics. Use this book for usability tests and surveys and the playbook for traffic experiments; both agree that a confidence interval on the difference beats a lone p-value (see also `references/books/asa-p-values.md`).
- Sauro's "you can use the overlap of intervals as a quick check" is a heuristic; for online experiments with many metrics, follow the playbook's pre-registration and multiple-comparison rules instead.

## Best quotes (< 25 words each, max 5)
- "With small sample sizes you can show that an interface is unusable, but it's harder to show it's usable." (Sauro, "10 Things to Know About Confidence Intervals")
- "Statistical significance does not mean practical significance." (Sauro, "What Does Statistically Significant Mean?")
- "The t-distribution was designed precisely to handle small samples correctly." (Lewis & Sauro, 2026)
- "SUS scores were not meant to be diagnostic." (Sauro, "10 Things to Know About the SUS")

## Related
- `references/process/research-methods-selector.md` (5-user debate, method selection)
- `references/data-driven/metrics-frameworks.md` (SUS, UMUX-Lite, SEQ in HEART)
- `references/data-driven/statistics-cheatsheet.md`, `references/data-driven/experimentation-playbook.md`
- `references/books/type-s-type-m-errors.md`, `references/books/asa-p-values.md`, `references/books/heart-framework.md`
- Sauro & Lewis, *Benchmarking the User Experience*; Lewis & Sauro, *Surveying the User Experience*; Brooke (1996) SUS.

## Sources
- Book page and table of contents (MeasuringU): https://measuringu.com/book/quantifying-the-user-experience-practical-statistics-for-user-research/
- Sauro, "10 Things to Know About the System Usability Scale" (2013): https://measuringu.com/10-things-sus/
- Sauro, "Measuring Usability with the System Usability Scale" (2011): https://measuringu.com/sus/
- Sauro, "Average Task Times in Usability Tests: What to Report?" (2010): https://measuringu.com/average-times/
- Sauro, "10 Things to Know About Confidence Intervals" (2012): https://measuringu.com/ci-10things/
- Sauro, "How to Compute a Confidence Interval in 5 Easy Steps" (2014): https://measuringu.com/ci-five-steps/
- Sauro, "10 Things To Know About Completion Rates" (2011): https://measuringu.com/completion-rate/
- Sauro, "What Is A Good Task-Completion Rate?" (2011): https://measuringu.com/task-completion/
- Lewis & Sauro, "Do Statistics Really Require 30 Participants?" (2026): https://measuringu.com/do-statistics-really-require-30-participants/
- Sauro, "Why You Only Need to Test with Five Users (Explained)" (2010): https://measuringu.com/five-users/
- Lewis & Sauro, "Sample Sizes for Comparing UX-Lite Scores" (2026): https://measuringu.com/sample-sizes/
- Sauro, "10 Things To Know About the Single Ease Question" (2012): https://measuringu.com/seq10/
- Sauro, "Best Practices for Using Statistics on Small Sample Sizes" (2013): https://measuringu.com/small-n/
- Sauro, "What Does Statistically Significant Mean?" (2014): https://measuringu.com/statistically-significant/
- Sauro, "Measuring Usability: From the SUS to the UMUX-Lite" (2017): https://measuringu.com/umux-lite/
- Sauro, "Confidence Interval Calculator for a Completion Rate" (method notes, references to HFES 2005 and JUS 2006 papers): https://measuringu.com/wald/
- Sauro & Lewis, "Rating Scale Best Practices: 8 Topics Examined" (2020): https://measuringu.com/rating-scale-best-practices/
- Saved under `books/free/quantifying-ux/`. Not read: the peer-reviewed PDFs linked from these articles (e.g. Sauro & Dumas CHI 2009, Sauro & Lewis CHI 2011).
