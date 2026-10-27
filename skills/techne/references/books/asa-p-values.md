---
title: "The ASA Statement on p-Values: Context, Process, and Purpose"
author: "Ronald L. Wasserstein, Nicole A. Lazar (for the American Statistical Association)"
year: 2016
domains: [data-driven, statistics, experimentation]
evidence: "strong"
---

# The ASA Statement on p-Values — Wasserstein & Lazar (ASA)

Use this when: someone says "it's significant, so it works" or "p = 0.06, so it failed"; you are writing the decision rule or readout format for an experiment; a stakeholder reads a p-value as "the probability we're wrong"; a team reports only the experiments that crossed p < 0.05.

Source: https://www.tandfonline.com/doi/full/10.1080/00031305.2016.1154108 (The American Statistician 70(2)). **Coverage is partial:** the publisher page sits behind a bot challenge that could not be passed, so the full statement (including its context and process sections and the elaboration paragraph under each principle) was NOT read. What was read in full is the ASA's own official release of the statement (amstat.org, 7 March 2016, "American Statistical Association Releases Statement on Statistical Significance and P-Values"), which reproduces the six principles word for word, the list of alternative approaches, and comments from the ASA executive director and president. Nothing below goes beyond that release; anything else is marked as this note's application.

## The big idea (3 sentences)
The ASA's board issued, for the first time, a formal position on p-values because misuse had become widespread: p < 0.05 had turned into a gatekeeper for publication and decisions, producing p-hacking, data dredging and a "file drawer" of unpublished non-significant work. The statement reduces correct use to six principles: a p-value measures how incompatible the data are with a specified model, not the probability that a hypothesis is true, not the size or importance of an effect, and not on its own a good measure of evidence. Decisions should rest on full, transparent reporting and on estimation, context and reasoning, not on whether one number crosses a threshold.

## Core concepts
- **The six principles (as worded in the ASA release):**
  1. P-values can indicate how incompatible the data are with a specified statistical model.
  2. P-values do not measure the probability that the studied hypothesis is true, or the probability that the data were produced by random chance alone.
  3. Scientific conclusions and business or policy decisions should not be based only on whether a p-value passes a specific threshold.
  4. Proper inference requires full reporting and transparency.
  5. A p-value, or statistical significance, does not measure the size of an effect or the importance of a result.
  6. By itself, a p-value does not provide a good measure of evidence regarding a model or hypothesis.
- **The specified model matters** — the p-value is computed against a model that includes all its assumptions (randomization, independence, the analysis plan); principle 1 implies a small p-value can signal a broken assumption, not only a real effect (this note's reading of the wording).
- **File-drawer effect and p-hacking** — named in the release as consequences of using p < 0.05 as a gate: significant results get published (or shipped and celebrated), the rest disappear, and analysts search for small p-values.
- **Good statistical practice** — study design and conduct, numerical and graphical summaries, understanding the phenomenon, interpreting results in context, complete reporting.
- **Alternatives and supplements** — estimation over testing (confidence, credibility or prediction intervals), Bayesian methods, likelihood ratios or Bayes factors, decision-theoretic modelling, false discovery rates.
- **Why now** — the release ties the statement to the reproducibility debate and to the growth of large, complex datasets, which widen the room for poorly chosen techniques and mistaken interpretation; product analytics is exactly that setting.
- **Inference is hard** — the executive director stresses that the issues are difficult because inference itself is difficult; the statement asks for a more nuanced way to interpret and communicate results, not for a new single number to replace p.
- **Not new, but official** — the ASA president stressed these points had been argued for decades; the novelty is the profession's collective endorsement, aimed at a "post p < 0.05 era". More than a dozen discussion papers were published alongside.

## Actionable heuristics for product design
(These apply the six principles to product experiments; the application is this note's, the principles are the ASA's.)
- When writing an experiment readout, lead with the effect size and its confidence interval in business units ("+0.3 pp signups, 95% CI +0.1 to +0.5"), then the p-value, because principle 5 says significance tells you nothing about how big or important the change is.
- When someone says "p = 0.03, so there's a 97% chance the variant is better", correct it, because principle 2 says a p-value is not the probability the hypothesis is true; point to the false-positive-risk calculation in `references/books/ab-testing-intuition-busters.md`.
- When a decision rule is "ship if p < 0.05", extend it to include a practical-significance threshold, guardrails and cost, because principle 3 says decisions should not rest only on crossing a threshold.
- When p lands just above or below 0.05, treat 0.04 and 0.06 as similar evidence and decide on the interval, prior, cost and reversibility, not the side of the line.
- When a result is surprising and significant, check the assumptions behind the model first (SRM, logging, peeking, triggering), because principle 1 means a tiny p-value flags incompatibility with the whole model, and a broken pipeline is one way to be incompatible.
- When the team reports results, report every test run on the question, all pre-registered metrics and all variants, including flat ones, because principle 4 requires full reporting; a "wins only" deck is the file drawer.
- When many metrics or segments are examined, use false discovery rate control or pre-declared primary metrics, because the ASA lists FDR among the recommended supplements and selective reporting violates principle 4.
- When a stakeholder asks "is it significant?", answer with three things: the estimated effect, the range compatible with the data, and whether that range clears the practical threshold agreed before the test, because a yes/no answer is exactly the threshold-only reasoning principle 3 rejects.
- When teaching the team, define the p-value once in plain words: "if the change did nothing and our setup is sound, how often would we see a gap this big?", because principles 1 and 2 hinge on the "if nothing and setup sound" part.
- When an analysis was chosen after seeing the data (which metric, which segment, when to stop), label it exploratory in the readout, because the release names p-hacking and data dredging as the core misuse and principle 4 requires disclosing how many analyses were run.
- When a team keeps a dashboard of "significant wins", add the count of all tests run and the share that won, because a list of winners alone hides how many chances produced them (principle 4).
- When a guardrail metric shows p = 0.2, don't call it "no harm"; check whether the interval includes a harm you would care about, because the absence of significance is not evidence of safety (principle 6).
- When a test shows a "significant" lift too small to matter on a huge sample, say so plainly and don't ship on significance alone, because principle 5 cuts both ways: big samples make trivial effects significant.
- When choosing between reporting styles, prefer intervals or posterior estimates over bare p-values for stakeholder decks, because estimation is the first alternative the ASA lists.
- When a flat result arrives, do not read "not significant" as "no effect"; report what the interval rules out, because principle 6 says the p-value alone is not a measure of evidence.

## Evidence & caveats
- Strong as a consensus statement of the professional body; it is guidance, not new empirical evidence.
- Partial coverage: the elaboration paragraphs, the context and process sections and the more than a dozen accompanying discussion papers were not read, so this note cannot report where commentators disagreed with the board.
- The release frames the problem partly as an incentive problem (publication gatekeeping); in product teams the equivalent incentive is the pressure to report wins, so the same failure modes (selective reporting, dredging for p < 0.05) apply.
- The executive director's goal was a broad discussion across the scientific community, so later ASA documents and editorials may go further than this 2016 statement; they were not reviewed here.
- The principles are about scientific research broadly; principle 3 explicitly names "business or policy decisions", so it applies directly to ship/no-ship calls.
- The board-level wording is deliberately cautious ("can indicate", "by itself"); it does not say p-values are useless, and it does not ban thresholds as pre-agreed decision rules.
- The statement says what p-values are not, more than what to do instead; the alternatives list is short and non-prescriptive. Product teams still need a pre-agreed decision rule (see the playbook).

## Disagreements with other references
- `references/data-driven/statistics-cheatsheet.md` §1 paraphrases the statement as three "is NOT" bullets (not P(hypothesis true), not P(fluke), not effect size). That matches principles 2 and 5; it omits principles 3, 4 and 6 (no threshold-only decisions, full reporting, not a standalone measure of evidence). Consider adding them.
- `references/data-driven/experimentation-playbook.md` uses p < 0.05 inside a ship/iterate/kill table. That is compatible with the ASA only because the table also requires a practical threshold and clean guardrails; keep both conditions together.
- `references/books/how-not-to-run-ab-test.md` shows a concrete case of principle 1: peeking breaks the "specified model" (a fixed sample size), so the reported p-value is no longer what it claims to be.
- `references/books/experiments-at-large-scale.md` adds a practical version of principle 4 at scale: report one final scorecard per experiment and demand stricter thresholds for slices and repeated iterations.
- No conflict with SKILL.md ("Report effect sizes with confidence intervals").

## Best quotes (< 25 words each, max 5)
- "The p-value was never intended to be a substitute for scientific reasoning" (Wasserstein, ASA release)
- "Scientific conclusions and business or policy decisions should not be based only on whether a p-value passes a specific threshold."
- "A p-value, or statistical significance, does not measure the size of an effect or the importance of a result."

## Related
- `references/data-driven/statistics-cheatsheet.md` (§1 p-values, §3 reading results, §6 multiple comparisons)
- `references/books/ab-testing-intuition-busters.md` (false positive risk vs p-value)
- `references/books/type-s-type-m-errors.md` (why significant small-sample effects are exaggerated)
- `references/books/how-not-to-run-ab-test.md` (assumption broken by peeking)
- `references/books/experiments-at-large-scale.md` (false positives at scale, replication)
- `references/data-driven/experimentation-playbook.md` (decision table: practical threshold plus guardrails)
- `references/data-driven/decisions-from-data-examples.md` (worked readouts that put intervals first)
