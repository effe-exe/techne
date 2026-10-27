---
title: "A mathematical model of the finding of usability problems (INTERCHI '93)"
author: "Jakob Nielsen, Thomas K. Landauer"
year: 1993
domains: [process, research, data-driven]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# A Mathematical Model of the Finding of Usability Problems — Nielsen & Landauer

Use this when: deciding how many participants or heuristic evaluators a round needs; defending small iterative tests against a "we need 30 users" request (or challenging a "5 is always enough" claim); estimating how many problems an evaluation probably missed.

Basis note: the paper is free to read on the ACM Digital Library (bronze open access), but the site refused automated download in this pass and there is no author-hosted copy (copies on course sites were not used). These notes rest on Nielsen's own restatements of the model on nngroup.com: "Why You Only Need to Test with 5 Users" (2000), "How Many Test Users in a Usability Study?" (2012), "The Theory Behind Heuristic Evaluations" (which gives the parameter ranges from the paper), the Guerrilla HCI essay (which applies the fitted model to a real project), plus the paper's official abstract. Missing: the paper's Poisson derivation, the per-study table for all 11 studies, and its exact procedure for estimating N and λ from early sessions. Read with `usability-engineering-nielsen.md`.

## The big idea (3 sentences)
Across 11 studies, the number of distinct usability problems found as you add test users or heuristic evaluators follows a simple diminishing-returns curve, Found(n) = N(1 − (1 − λ)^n), where N is the total number of problems and λ the share one person reveals. Because each extra person mostly repeats what earlier ones showed, and each study has fixed costs, the benefit-to-cost ratio peaks at a small number (about 3–5 per round) even though many more people would eventually be "worth" their cost. The practical consequence is to spend a budget on several small rounds with redesigns in between rather than one large round.

## Core concepts
- **The discovery curve** — Found(n) = N(1 − (1 − λ)^n). λ is the probability that one user (or evaluator) hits an average problem; N is the problem pool for that design, user group and task set.
- **Typical λ for user testing ≈ 0.31** — averaged over the projects studied; with that value one user shows about a third of problems, five show about 85%, and roughly 15 are needed to approach all of them.
- **Heuristic evaluation λ** — in six case studies λ ranged 19–51% (mean 34%) and N ranged 16–50 (mean 33). A single evaluator found only about 35% of problems on average; aggregating 3–5 independent evaluators is the method's core.
- **Poisson process fit** — the official abstract states detection is well modelled as a Poisson process across the 11 studies, for both users and evaluators.
- **Early-data extrapolation** — results from the first sessions can estimate how many problems remain and how many more sessions a given coverage needs (abstract).
- **Cost-benefit optimum** — with fixed plus per-person costs and a value per problem found, the ratio peaks early. The paper's "medium" example: 16 evaluations would still pay for themselves, but the maximum ratio is at four. Nielsen's illustration: fixed $4,000, $600 per evaluator, $15,000 per problem → optimum 4 evaluators, benefits 62× costs.
- **Fitted example from practice** — in Nielsen's telephone-company evaluation, the core problems fit N = 40, λ = 0.26; adding about four more evaluators would have found roughly one more problem, while four real users in a test found four new ones. Different methods find different problems.
- **Per user group, not per product** — the formula assumes comparable users doing similar tasks. Distinct groups need their own samples (Nielsen: 3–4 each for two groups, 3 each for three or more).
- **Iterate instead of enlarging** — a 15-user budget is better spent as three 5-user rounds: the second round checks whether fixes worked, catches most of the remaining problems, and reaches deeper issues (IA, task flow) once surface problems are gone.

## Actionable heuristics for product design
- When planning a formative test for one user group, start with about 5 participants and schedule the next round after fixes, because about 85% of problems with typical visibility appear by then and further sessions mostly repeat.
- When the team has a fixed budget of N sessions, split it into rounds of ~5 with redesigns between, because each round both verifies fixes and exposes problems that were masked by surface issues.
- When the product serves clearly different groups (buyers vs sellers, doctors vs patients, novices vs experts), recruit 3–5 per group, because λ and N only apply within a homogeneous group.
- When the product is complex, the tasks are many, or the cost of a missed problem is high, assume λ is well below 0.31 and add users or rounds: at λ = 0.1, five users find only about 41% of problems (1 − 0.9^5).
- When a specific rare problem matters (accessibility, a payment edge case, a safety step), size the study for that problem's own probability, not the average λ, or test it directly with targeted tasks.
- When running heuristic evaluation, use 3–5 evaluators working independently and merge afterwards, because one reviewer finds about a third and evaluators find different problems.
- When findings from the first 2–3 sessions are mostly new, extend the round; when they are mostly repeats, stop and fix, because the shape of your own curve tells you λ for this study.
- When reporting a 5-user test, report problems and their severity, never rates or percentages, because the model concerns problem discovery, not estimation (see `quantifying-the-user-experience.md`).
- When both methods are available, mix a heuristic review and a small user test rather than adding more of either, because in Nielsen's data each found problems the other missed at comparable cost-benefit.
- When overhead per study is tiny (in-house participants, weekly cadence), go down to 2–3 users per round and iterate faster, because the optimum shifts lower as fixed costs fall.
- When overhead per study is high (hard-to-recruit specialists, travel, agencies), go up to about 8 per round, because fixed costs push the optimum higher.

## Quick reference: share of problems found, Found(n)/N = 1 − (1 − λ)^n
| λ (per-person discovery) | n = 1 | n = 3 | n = 5 | n = 10 | n = 15 |
|---|---|---|---|---|---|
| 0.10 (complex product, rare problems) | 10% | 27% | 41% | 65% | 79% |
| 0.20 | 20% | 49% | 67% | 89% | 96% |
| 0.31 (Nielsen & Landauer average) | 31% | 67% | 84% | 98% | ~100% |
| 0.50 (easy, common problems) | 50% | 88% | 97% | ~100% | ~100% |
Values computed from the formula; they are averages, and individual samples vary widely around them.

## Evidence & caveats
- **What holds:** the curve shape (diminishing returns) is mathematically robust whenever problems are found independently with a constant probability. The cost-benefit logic for iteration is sound.
- **The weak point is λ:** 0.31 is an average over early-1990s projects, mostly desktop and telephone systems with fixed tasks. Later work found much lower discovery on complex sites (Spool & Schroeder 2001: 5 users found ~35%) and large sample-to-sample variance: Faulkner (2003) resampled 60 users and found individual groups of 5 ranged from about 55% to near 100% coverage (abstract and `process/research-methods-selector.md` §5; Faulkner's full text could not be obtained legally in this pass).
- **Assumption problems:** the model treats all problems as equally detectable and users as interchangeable; in reality detectability varies widely, so the average hides a long tail of hard-to-find problems. Estimating λ from a small sample also tends to overestimate it (a known critique; Sauro & Lewis discuss adjusted estimates).
- **"Find 85%" is of the problems this task set can reveal**, not of all problems in the product. Tasks, prototype fidelity and facilitator skill bound N.
- **NN/g's 83-project chart** (more users did not yield appreciably more findings) is consultancy data with no controls and conflates scope with sample size.
- **Advocacy:** Nielsen's articles argue a position; the 5-user rule is a planning heuristic, not a law. His own exceptions: quantitative studies ≥ 20, card sorting ≥ 15 per group, eyetracking heatmaps 39.

## Disagreements with other references
- `process/research-methods-selector.md` §5 already summarises the debate and is the place to trust for sample sizing across methods; this file supplies the model's mechanics and parameter ranges.
- `quantifying-the-user-experience.md` (Sauro & Lewis) gives the statistics for summative sizing and for estimating discovery probability properly; trust it whenever a number will be reported.
- `krug-rocket-surgery-made-easy.md` argues 3 users a month; consistent with this model's optimum for very low-overhead teams (Nielsen: as few as 2 when overhead is tiny).
- `masters/taste.md` and `data-driven/experimentation-playbook.md` cite this paper correctly as [moderate/contested]; keep that label.

## Best quotes (< 25 words each, max 5)
- "The most striking truth of the curve is that zero users give zero insights." (Nielsen 2000)
- "Spend this budget on 3 studies with 5 users each!" (Nielsen 2000)
- "The answer is 5, except when it's not." (Nielsen 2012)

## Related
- `references/books/usability-engineering-nielsen.md`
- `references/books/quantifying-the-user-experience.md`, `references/books/krug-rocket-surgery-made-easy.md`
- `references/process/research-methods-selector.md` (§5 the 5-user debate, §8 card sorting)
- `references/process/heuristics-and-critique.md`
- `references/data-driven/experimentation-playbook.md` (low-traffic branch)

## Sources
- Official abstract via OpenAlex record for DOI 10.1145/169059.169166: https://api.openalex.org/works/doi:10.1145/169059.169166 (paper at https://dl.acm.org/doi/10.1145/169059.169166, free on ACM DL but not downloadable by script here)
- Nielsen, "Why You Only Need to Test with 5 Users" (2000): https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/
- Nielsen, "How Many Test Users in a Usability Study?" (2012): https://www.nngroup.com/articles/how-many-test-users/
- Nielsen, "The Theory Behind Heuristic Evaluations": https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/theory-heuristic-evaluations/
- Nielsen, "Guerrilla HCI" (1994): https://www.nngroup.com/articles/guerrilla-hci/
- NN/g, "How to Conduct a Heuristic Evaluation" (context): https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/
- Faulkner (2003) abstract via Europe PMC (context for the caveat only): https://europepmc.org/article/MED/14587545
