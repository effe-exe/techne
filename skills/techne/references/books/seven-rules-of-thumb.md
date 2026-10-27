---
title: "Seven Rules of Thumb for Web Site Experimenters"
author: "Ron Kohavi, Alex Deng, Roger Longbotham, Ya Xu"
year: 2014
domains: [data-driven, experimentation, performance, metrics]
evidence: "strong"
---

# Seven Rules of Thumb for Web Site Experimenters — Kohavi, Deng, Longbotham, Xu

Use this when: a stakeholder wants to copy a famous A/B win ("red beats green", "free trial beats money-back"); a new module "gets lots of clicks" and someone calls it a success; you are deciding how much performance cost a feature may add; you are planning a multivariate test or a big-bang launch; you need a minimum sample size for a skewed metric like revenue.

Source: https://exp-platform.com/rules-of-thumb/ (author-hosted PDF of the KDD 2014 paper, with the 2015 correction to the skewness table). Read in full.

## The big idea (3 sentences)
From thousands of controlled experiments at Amazon, Bing, LinkedIn and MSN, the authors distil seven generalizations that usually hold but have known exceptions: small changes can matter a lot, but big positive changes are rare; other people's wins rarely transfer; speed matters a lot; abandonment barely moves while clicks merely shift around; simple designs beat complex ones; and skewed metrics need many more users than textbooks suggest. Each rule comes with real, mostly first-published examples, all with large samples, SRM checks and replication of surprising results. The meta-lesson is humility: treat great results with suspicion, measure global rather than local metrics, and iterate in small, trustworthy steps.

## Core concepts
- **Rule 1: small changes can have a big impact** — opening Hotmail in a new tab lifted MSN clicks/user 8.9% (triggered users, replicated on 2.7M users); opening search results in a new tab lifted clicks/user 5% on 12M users; Bing font colors were worth over $10M/year (replicated on 32M users); moving Amazon's credit-card offer to the cart was worth tens of millions. Such breakthroughs are about 1 in 500 experiments at Bing.
- **Rule 2: changes rarely have a big positive impact on key metrics** — most experiments fail; winners move all-up metrics by 0.1–1.0% after dilution. Feature metrics are easy to move; all-up metrics (sessions/user, time-to-success) are not. A 10% gain on a 1% segment is about 0.1% overall.
- **Twyman's law via Bayes** — with a 1/3 prior success rate, P(true | significant) is 89%; with a 1-in-500 prior it is 3.1%. A +2% sessions/user result when experiments are distributed N(0, 0.25%) is an 8-sigma event, so look for the bug (beacon fidelity, double-issued searches, broken conversion assumption).
- **Rule 3: your mileage WILL vary** — published case studies vary in quality, may use p > 0.05, ignore novelty, and misattribute causes. Google's 10→30 results "20% loss" is mostly not speed: Bing's isolated slowdowns imply ~3% revenue for 500 ms, not 20%.
- **Rule 4: speed matters a LOT** — Bing slowdown tests: every 100 ms faster ≈ +0.6% revenue; 250 ms server delay ≈ −1.5% revenue and −0.25% CTR; the relation is close to linear for small deltas. Amazon: 100 ms ≈ 1% sales (Linden). But not all parts of the page matter equally: delaying Bing's right pane by 250 ms had no detectable impact on ~20M users.
- **Slowdown experiments** — deliberately add delay to quantify metric impact per ms; use it to price features that are initially slow ("how good would this be if fast?") and to justify performance work.
- **Rule 5: reducing abandonment is hard, shifting clicks is easy** — removing related searches, pinning them to the bottom (−17% clicks on them), truncating results, extending results, changing ad backgrounds (−12% revenue): abandonment did not change significantly in any of these.
- **Rule 6: avoid complex designs, iterate** — LinkedIn's unified search launched with everything changed at once, metrics tanked, and it took a long process of restoring features one at a time to find the culprits; a complex eligibility design hid a bug that whitelisted users after one exposure. Prefer one- or two-variable designs and ramp from 1%.
- **Rule 7: have enough users** — for skewed metrics, the mean is approximately normal only when n ≥ 355·s² per variant, with s the skewness. Bing revenue/user (s = 17.9) needs 114k; capped at $10 per user per week (s = 5.2) needs 9.7k and detects effects 30% smaller.
- **Anti-malware example** — blocking third-party DOM changes (injected ads) for 3.8M triggered users improved all Bing key metrics, including sessions/user, success and page load time; one of the rare cases where abandonment improved.
- **Surrogate metric trap (Office Online)** — a redesign with a price shown cut clicks to purchase links by 64%, but the users who clicked were better qualified and converted more; the "clicks × fixed conversion rate = revenue" assumption was wrong.
- **Instrumentation as a confound** — extra JavaScript "raised clicks" only because it improved click-beacon fidelity; a CDN switch made several teams' metrics "improve" for the same reason (click loss for some browsers dropped by over 60% when measured with redirects).
- **Following taillights** — features already tested and shipped by statistically savvy competitors have a higher success rate than your own new ideas (Bing's own idea success rate: ~10–20%).
- **Perceived performance metrics** — window.onload is a poor proxy (an Amazon page renders above the fold at 2.0 s but onload fires at 5.2 s; Gmail the reverse); alternatives are above-the-fold time, Speed Index, user-ready time; Bing's key time metric is time-to-success (a click with no return within 30 s).
- **Truncation without abandonment change** — showing 4 instead of 10 results for navigational queries (8M users) left abandonment flat (p = 0.92), so the faster page shipped; extending to 20 results cost 1.8% revenue with flat abandonment, so it did not.
- **Novelty is rarer than assumed** — novelty and primacy effects were uncommon in their experience; they mostly appear in recommenders (one-time diversity) or when the treatment draws on a finite resource.

## Actionable heuristics for product design
- When someone cites another company's A/B win as a reason to ship, treat it as a hypothesis and test it on your product, because the authors doubt even widely reported results replicate across domains.
- When a result is far outside your historical distribution of effects, assume a bug first: check instrumentation, click-tracking fidelity, SRM and the metric's assumptions before celebrating, because most such results at Bing were artifacts.
- When a new module or widget shows a high click-through rate, check abandonment, success and all-up metrics before calling it a win, because it most likely cannibalized clicks from elsewhere on the page.
- When you report a feature's impact, dilute it by its segment size (segment lift × segment share) before comparing it to company goals, because a 10% gain on a 1% segment is about 0.1% overall.
- When a feature adds latency, estimate its cost with your own slowdown data (Bing: ~0.6% revenue per 100 ms) and ask for a fast implementation before deciding, because a good idea can lose only because it is slow.
- When you must load something late, defer secondary regions (sidebars, right panes, below the fold) rather than the primary content, because a 250 ms delay to Bing's right pane was undetectable while a server-wide 250 ms delay cost 1.5% revenue.
- When measuring performance, prefer a task-based metric (time to success, time to first useful result) over window.onload, because onload can fire long before or after the useful content is visible.
- When planning a launch with many changes, split it into separately testable parts and ramp each from ~1% exposure, because a lumped launch that loses gives you no way to know which part caused it.
- When a team proposes a multivariate test of many new elements, run sequential A/B (or A/B/n) tests instead, unless interactions are the actual question, because new code in at least one variable is usually buggy and invalidates the MVT.
- When the primary metric is heavily skewed (revenue, purchases), compute skewness and require n ≥ 355·s² per arm, and cap the metric (e.g. per user per week) to cut skewness and boost power.
- When splitting traffic for a skewed metric, keep arms equal-sized (50/50), because the difference of means is then near-symmetric under the null and the skewness bound no longer bites.
- When a test is borderline significant, rerun it to replicate before shipping, because the prior for big wins is low.
- When a primary metric is a proxy built on an assumption (clicks × stable conversion rate), validate the assumption in the test itself or measure the real outcome, because the proxy can move opposite to the goal (Office Online: −64% clicks, more purchases).
- When a change touches tracking code, beacons, CDNs or page structure, verify that measurement fidelity is identical across arms (e.g. an A/A on the logging change), because better logging alone can show up as "more engagement".
- When you can remove content without moving abandonment or success (fewer results, fewer modules), prefer the lighter, faster page, because shifting clicks is not value and speed is.
- When prioritising ideas, give extra weight to patterns competitors have tested and kept, but still test them on your product, because their success rate is higher than novel ideas yet not guaranteed (Rule 3).
- When shipping any code quickly (agile, continuous deploy), use experiment-based exposure control as a safety net, because uncontrolled deployments can fail catastrophically (Knight Capital's 2012 deploy lost $440M).
- When running persuasion "ploys" (fake-busy lines, urgency), expect any effect to decay as users learn it; run at least two weeks and look at the daily effect, because the authors only value sustained impact (also an ethics flag: see `references/psychology/behavior-ethics-dark-patterns.md`).

## Evidence & caveats
- Strong for the setting: all examples are real, large (hundreds of thousands to tens of millions of users), at least a week long, SRM-checked, and surprising results replicated with combined p-values. The authors call these rules "not provably correct" with known exceptions.
- Heavily search- and portal-specific: abandonment in Rule 5 is SERP abandonment; speed numbers are desktop, 2012–2013, server-side delays. Mobile and app contexts may differ, and the speed/revenue slope depends on the current speed of the site.
- Several headline figures are confidential (the two ~$100M ad changes) and cannot be checked.
- The "1 in 500" breakthrough rate and 10–20% success rate are Bing's; mature products elsewhere report similar ranges (see `references/books/ab-testing-intuition-busters.md`).
- Some cited outside results (Amazon 100 ms = 1%) come from talks, not papers.

## Disagreements with other references
- `references/data-driven/experimentation-playbook.md` (§4.2) and `references/data-driven/decisions-from-data-examples.md` give novelty a central diagnostic role. This paper says novelty/primacy effects were uncommon outside recommenders and finite-resource features. Keep plotting the daily effect, but don't explain away a flat or negative result as "novelty" without evidence.
- `references/data-driven/statistics-cheatsheet.md` §2.3 suggests capping at the 99.9th percentile; this paper uses an absolute per-user-per-week cap and gives the 355·s² minimum, which is a more explicit floor for skewed metrics. Use both: the skewness rule to check whether the t-test is valid, power analysis for the MDE.
- `references/data-driven/experimentation-playbook.md` cites the 100 ms ≈ 0.6% revenue number; this paper is its source and adds that page regions differ in sensitivity, so not every millisecond counts equally.
- The SKILL.md "Copy famous products' methods, never their results" principle is this paper's Rule 3 in one line; no conflict.

- `references/data-driven/conversion-checkout-forms-signup-landing.md` collects famous conversion wins; this paper's Rule 3 (and its skepticism of "1,000%" coupon-removal and "$300M button" stories it cites) is the lens to apply before reusing any of them.

## Best quotes (< 25 words each, max 5)
- "Any figure that looks interesting or different is usually wrong!" (Twyman's law, as cited)
- "local improvements are easy; global improvements are much harder."
- "an engineer that improves server performance by 10msec … more than pays for his fully-loaded annual costs."

## Related
- `references/books/experiments-at-large-scale.md` (companion paper: culture, alerts, false positives)
- `references/books/cuped.md` (variance reduction; revenue is the hard case)
- `references/data-driven/metrics-frameworks.md` (OEC, guardrails, feature vs all-up metrics)
- `references/data-driven/conversion-checkout-forms-signup-landing.md` (famous tests and their caveats)
- `references/psychology/cognition-motor-control-and-timing.md` (perceived performance)
