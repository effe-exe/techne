---
title: "Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing"
author: "Ron Kohavi, Diane Tang, Ya Xu"
year: 2020
domains: [data-driven]
evidence: "strong"
basis: "author's free material, not the full book"
coverage: medium
---

# Trustworthy Online Controlled Experiments — Kohavi, Tang & Xu

Use this when: a team is setting up experimentation (or arguing whether to) and needs the case, the vocabulary and the prerequisites; you must choose an OEC (overall evaluation criterion) and guardrails for a product area; a result looks too good, or a dashboard shows an effect "trending" in the first days; you are deciding whether to test a redesign or a strategy bet, and how long to run it.

Basis: the book (Cambridge University Press, 2020) was not read in full. These notes rest on legal free material by the authors: **the full Preface and Chapter 1, "Introduction and Motivation"**, plus the full table of contents, which the authors publish as an official sample on the book's companion site (read in full); **"Five Puzzling Outcomes Explained"** (Kohavi, Deng, Frasca, Longbotham, Walker & Xu, KDD 2012), whose material the book's chapters on trustworthiness, A/A tests and long-term effects build on (read in full); and **"Top Challenges from the first Practical Online Controlled Experiments Summit"** (Gupta, Kohavi, Tang, Xu et al., 2019), chaired by the three authors in the year they finished the book (read in full). The companion site's FAQ, history and "refuted observational studies" pages were also checked. Coverage is medium: the motivation, terminology, tenets, OEC thinking and several trust pitfalls are covered from primary text, and techne already has notes on the papers behind other chapters (see Related). The book's Chapter 2 worked example, the metric-taxonomy and ethics chapters, client-side experiments, instrumentation, ramping, triggering and variance chapters are known only by title here.

## The big idea (3 sentences)
We are bad at judging the value of our own ideas: in mature products only about 10–33% of tested ideas move the metric they were built to move, so changes should be decided by randomised controlled experiments rather than by the highest-paid person's opinion. An experiment is only as good as its OEC, which must be measurable within weeks yet causally tied to long-term value (often lifetime value), with guardrails for what must never get worse. Getting numbers is easy; getting numbers you can trust is hard, so a mature practice invests as much in validity checks (A/A tests, sample-ratio checks, instrumentation audits, skepticism of surprising results) as in running tests.

## Core concepts
- **OEC (Overall Evaluation Criterion)** — the pre-agreed quantitative measure of an experiment's objective, ideally a single (possibly weighted) metric. It must be measurable in the experiment's duration, sensitive, hard to game, and believed to causally drive long-term goals.
- **Parameter, variant, randomisation unit** — the controllable factor, the experiences compared (Control is a variant too), and the unit (usually the user) hashed persistently and independently into variants.
- **Hierarchy of evidence** — meta-analyses of randomised experiments, then randomised experiments, then natural or non-randomised experiments, then observational studies, then anecdotes and expert opinion (the HiPPO). Example: Office 365 users who saw more errors churned less, because heavy usage caused both.
- **Four ingredients for useful experiments** — units that don't interfere with each other; enough units (thousands at least); agreed, measurable key metrics; changes that are easy to make.
- **Three tenets** — the organisation wants data-driven decisions and has formalised an OEC; it invests in infrastructure and trust checks; it accepts that it is poor at assessing the value of ideas.
- **Inch by inch** — real gains come from many small improvements of 0.1–2%. Bing's relevance team targets about 2% a year, credited only through replication ("certification") experiments.
- **Big surprises are rare but real** — the Bing ad-title change (+12% revenue, sat in a backlog for six months), Amazon's credit-card offer moved to the cart with the savings maths shown, cart recommendations that a senior vice-president had forbidden, and speed (10 ms of improvement paying for an engineer).
- **Strategy and experiments** — experiments hill-climb within a strategy, and the OEC encodes the strategy. A portfolio should be mostly near-term optimisation plus a few radical jumps. Most big jumps, such as full redesigns, fail, and Bing's two-year social-search bet ($25M+) was dropped after experiments showed no value.
- **Guardrails** — metrics the organisation refuses to degrade (crashes, latency, the "passenger safety" of the cruise-ship analogy). They express the strategic choice of what not to do.
- **Twyman's law** — any figure that looks interesting or different is usually wrong. "Too good to be true" alerts usually mean bugs, such as double-logged revenue.
- **Five puzzling outcomes (2012)**:
  1. A bug that degraded Bing's results *raised* queries per user (+10%) and revenue per user (+30%), so neither is a valid OEC alone. Decompose the goal: sessions per user should rise, while queries per session should fall, subject to task success.
  2. Click-tracking beacons get lost when the browser navigates away, so a change that adds delay or keeps the page open can look like "more clicks" through better logging alone.
  3. Early cumulative effects appear to "trend" because of regression to the mean in small early samples. Feature owners read primacy into it; the example shown was an A/A test.
  4. For metrics like sessions per user, running longer barely narrows the confidence interval, because the coefficient of variation grows. Power comes from more users per day, not more days.
  5. Re-used user buckets carry effects from earlier experiments for weeks, or months after a bad bug. Re-randomise per experiment.
- **Summit challenges (2019)** — estimating long-term effects (holdouts, proxies, user-learning models, surrogates), finding a good OEC (HEART for success, PULSE as guardrails), heterogeneous effects by segment (correlational, with heavy multiple-testing risk), building culture (from hubris to humility), network and marketplace interference, and interactions between concurrent experiments (rarely decision-changing in practice).

## Actionable heuristics for product design
- When a team debates which design is better and the change is cheap to build, run the experiment instead of the debate. Expect most ideas to be flat or negative, and plan for it: if roughly two-thirds of your work will not ship, design processes for cheap iteration, not polished big reveals.
- When defining success for a design change, write the OEC before building. Pick something users would agree means "better" (sessions per user, task success, time to success, retention), never a metric a worse experience can inflate (queries, clicks, time on page, revenue alone). Ask: "would a broken version of this feature raise this metric?" If yes, it is not the OEC.
- When choosing metrics for a flow, decompose the long-term goal into factors and sign each one. Some should rise (return visits), and some should fall as long as the task still succeeds (queries or steps per task).
- When adding any monetisation or prompt (ads, upsells, interstitials), pair the revenue metric with user-experience guardrails (sessions per user, success rate, latency, unsubscribes), and only ship if revenue rises without them dropping. This is how Bing judged the ad-title win.
- When a new feature shows a big lift in clicks, check instrumentation before celebrating: Did logging change? Do non-IE (non-reference) browsers alone show the lift? Did a delay, new tab or in-page update make beacons more reliable? Check that downstream totals (e.g. total searches, purchases) moved too.
- When a stakeholder wants to extend a losing test because "the curve is trending up", show them the confidence cone: early days are noisy and regress to the mean, and significant negatives usually get *more* negative. Fail fast and move on. Run at least one full week for day-of-week effects, and longer only when you have a specific reason to suspect novelty or learning.
- When you need more power on a count metric (sessions, visits), get more users into the test (wider triggering, larger allocation, variance reduction), not more days.
- When placing an offer, show it where intent is highest and do the maths for the user (Amazon's cart-page credit-card offer showing the savings on the cart total). Context and timing beat prominence.
- When a redesign is planned, prefer iterating towards it through a sequence of tested steps. Big-bang redesigns suffer primacy and change aversion and often fail to reach parity on key metrics. If you must test a radical change, run it longer and look at new users separately (they have no old habits to unlearn).
- When a test produces a surprising, very large win, apply Twyman's law: replicate it, check sample ratios and logging, and look for bugs before telling anyone. Credit results through a replication run, not the first readout.
- When working from analytics alone ("users of feature X churn half as much"), treat the claim as a hypothesis. Usage drives both. Test by randomising exposure or discoverability of X.
- When segment results differ (iOS vs Android, market A vs B), treat them as leads for investigation or bug hunting, not causes. Correct for the many comparisons you made before acting.
- When features interact socially (feeds, messaging, marketplaces), don't trust a plain user-level split. Consider two-sided or cluster randomisation, and talk to the data team before reading results.

## Evidence & caveats
- The base rates of idea success (about a third at Microsoft, 10–20% in well-optimised domains, 10% at Google in 2009 per Manzi, about 30% for Slack monetisation tests) are company self-reports. The definitions of "success" differ, but the direction is consistent across many organisations.
- The headline wins (Bing +12%, Amazon +3% from search-based recommendations, 41 shades of blue) are real experiments at huge scale, and the authors stress they are rare outliers. Small products with few users cannot detect 0.1–2% effects; they should start by looking for big effects, as the book says (see `references/books/ab-testing-intuition-busters.md` on low-power "wins").
- "Speed matters" numbers are specific to Bing and Amazon at their scale. The direction (faster is better, measurably) has replicated across companies; the dollar figures do not transfer.
- The 2012 paper's browser specifics (IE kept beacons alive; Safari lost over 50%) are dated. The lesson (logging reliability can differ by variant) is not; modern `sendBeacon` APIs reduce but do not remove it.
- This is practitioner knowledge from very large platforms, peer-reviewed at KDD and widely adopted. The methodology is mainstream statistics; the organisational claims (culture, tenets) are experienced opinion.
- The book's Chapter 9 on ethics was not read here. Note that "data-driven" can justify manipulative wins; techne's ethics gate still applies.

## Disagreements with other references
- `references/data-driven/experimentation-playbook.md` (section on effect over time) says a rising daily-effect curve "suggests learning/primacy". The 2012 paper found early trends are usually statistical artifacts and could not find one experiment where a significant effect reversed sign through primacy or novelty. Trust the paper: only call it primacy after the effect has stabilised over two or more weeks, or when new users show a different effect from returning users.
- `references/data-driven/metrics-frameworks.md` lists the OEC as a single pre-agreed metric or weighted combination. That matches the book; the summit paper adds that most teams in practice still weigh several key metrics case by case, which invites bias. Prefer written weights or a written rule.
- `references/books/focusing-on-the-long-term.md` (Hohnhold, O'Brien & Tang) gives the detailed method for user-learning effects that the summit paper summarises. Use it when a change could teach users to ignore something.
- `references/books/heart-framework.md` supplies the user-centred metric categories that the summit paper recommends as OEC components, with PULSE as guardrails. The two fit together.

## Best quotes (< 25 words each, max 5)
- "Getting numbers is easy; getting numbers you can trust is hard." (Preface)
- "One accurate measurement is worth more than a thousand expert opinions" (Grace Hopper, the chapter's epigraph)
- "Any figure that looks interesting or different is usually wrong" (Twyman's law, Preface)
- "The difference between theory and practice is greater in practice than in theory." (2012 paper)

## Related
- techne notes on papers behind other chapters: `references/books/experiments-at-large-scale.md` (culture, ingredients, guardrails), `references/books/seven-rules-of-thumb.md` (speed, small changes, sample sizes), `references/books/ab-testing-intuition-busters.md` (low power, false positives), `references/books/diagnosing-srm.md` (Ch. 21), `references/books/cuped.md` (Ch. 18 variance reduction), `references/books/focusing-on-the-long-term.md` (Ch. 23)
- `references/data-driven/experimentation-playbook.md`, `references/data-driven/metrics-frameworks.md`, `references/data-driven/statistics-cheatsheet.md`
- `references/books/causal-inference-mixtape.md` (when you cannot randomise; the book's Ch. 11)
- `references/books/peeking-at-ab-tests.md`, `references/books/how-not-to-run-ab-test.md` (stopping rules)

## Sources
- Kohavi, Tang & Xu (2020). Preface, Contents and Chapter 1, "Introduction and Motivation", official free sample from the companion site: https://experimentguide.com/wp-content/uploads/TrustworthyOnlineControlledExperiments_PracticalGuideToABTesting_Chapter1.pdf (linked from https://experimentguide.com/ as https://bit.ly/ExPGuideChapter1; read in full; saved under books/free/trustworthy-online-controlled-experiments/)
- Kohavi, Deng, Frasca, Longbotham, Walker & Xu (2012). "Trustworthy Online Controlled Experiments: Five Puzzling Outcomes Explained", KDD 2012, author-hosted: https://exp-platform.com/Documents/puzzlingOutcomesInControlledExperiments.pdf (read in full)
- Gupta, Kohavi, Tang, Xu et al. (2019). "Top Challenges from the first Practical Online Controlled Experiments Summit", SIGKDD Explorations 21(1), author-hosted: https://exp-platform.com/Documents/2019-FirstPracticalOnlineControlledExperimentsSummit_SIGKDDExplorations.pdf (read in full)
- Companion site pages: https://experimentguide.com/faq/, https://experimentguide.com/history/, https://experimentguide.com/refuted_observational_studies/, https://experimentguide.com/about/
- Not obtained: the 2009 survey "Controlled experiments on the web: survey and practical guide" (author host ai.stanford.edu reset the connection); the refuted-studies and history documents behind the site's password-protected links.
