---
title: "Online Controlled Experiments at Large Scale"
author: "Ron Kohavi, Alex Deng, Brian Frasca, Toby Walker, Ya Xu, Nils Pohlmann"
year: 2013
domains: [data-driven, experimentation, process, culture]
evidence: "strong"
---

# Online Controlled Experiments at Large Scale — Kohavi, Deng, Frasca, Walker, Xu, Pohlmann

Use this when: making the case for experimentation to a team that trusts the HiPPO; deciding whether a refactor, platform migration or bug fix needs an A/B test; designing guardrail alerts and auto-abort rules; a team keeps iterating variants until one "wins"; someone dismisses a slowdown or "negative" experiment as unethical; choosing between many small tests and a big bet.

Source: https://exp-platform.com/large-scale/ (author-hosted PDF of the KDD 2013 paper, 9 pages). Read in full.

## The big idea (3 sentences)
Bing ran 200+ concurrent experiments on ~100M monthly users, with 90% of users in about 15 experiments at once, and the paper shares what it took to make that trustworthy across culture, engineering and statistics. The cultural core is three tenets (the org has an agreed OEC, experiments can be run and trusted, and people are poor at judging ideas), plus the willingness to test everything including re-implementations and deliberately negative changes. The statistical core is that at scale false positives are inevitable, so you raise thresholds for many treatments, iterations and slices, use sequential boundaries for alerts, check for interactions, and replicate before believing.

## Core concepts
- **OEC** — an agreed overall evaluation criterion measurable in ~2 weeks that predicts long-term value. Profit and market share are poor short-term OECs (raising prices or degrading search can lift them short term); sessions per user is better.
- **We are poor at assessing ideas** — about one third of ideas tested at Microsoft improved their target metric; Google ~10% led to changes; Netflix considers ~90% of what it tries wrong; Quicken's tester guessed right ~33% of the time.
- **Observational evidence fails** — cited reviews: claims from observational medical studies mostly fail in RCTs; ~90% of large randomized experiments replicated vs ~20% of non-randomized studies (Ioannidis, via Manzi).
- **Four stages of experimentation maturity** — hubris (HiPPO), measurement and control, Semmelweis reflex (rejecting inconvenient evidence), fundamental understanding.
- **Ideas funnel and value of information** — cheap, low-fidelity methods (pitches, mockups, usability tests) filter many ideas at the top; experiments evaluate the few at the bottom. If an experiment is cheap to run, other evaluation methods rarely make sense except for qualitative "why".
- **Test everything** — Amazon's new order pipeline failed its A/B test (−2% revenue) five times before shipping; re-implementations are rarely as good as believed. Bundle small fixes into packages and test the package.
- **Negative experiments** — short, deliberate degradations (e.g. two-week slowdowns) teach causal relationships; "do no long-term harm" over "do no harm". Bing: 100 ms slowdown ≈ −0.6% revenue.
- **41 shades of blue vs big bets** — cheap testing invites trivial questions; keep a portfolio of incremental and bold ideas, and accept that a jump to a new area may first score below the local maximum.
- **Interactions** — rarer than feared, and more often bugs than true statistical interactions; prevent with constraints (no user in two ad-layout tests), detect with pairwise monitoring and empirical-Bayes FDR control.
- **Cost of experimentation** — the 10% holdout saw 25–30 ms slower page loads, ~20 ms from cache fragmentation; worth quantifying.
- **Site-links example** — adding advertiser site links to Bing ads raised revenue but hurt engagement and page load time (more vertical space); after offsetting by showing fewer mainline ads, it was still worth tens of millions per year with neutral user impact. Monetization wins must be priced against user metrics.
- **Scale numbers** — 200+ concurrent experiments, 90% of eligible users each in 15+ concurrent experiments, ~30 billion possible variants of Bing, ~4 TB processed for a 2-week, 20%-of-users scorecard; a 1% revenue change ≈ $10M+/year in the US.
- **Architecture** — "number lines" (like Google's layers) guarantee a user is in at most one flight per line; assignment by hashing an anonymous user id; everything driven by configuration; self-service tools (Control Tower) so any engineer can run tests with central guidance.
- **Multivariate tests** — the paper prefers concurrent, orthogonal one-factor experiments (equivalent to a full factorial) and runs small MVTs only when interactions are suspected or detected.
- **Etsy disagreement** — Etsy reported a 200 ms delay "did not matter"; the authors think the test lacked power and suggest larger delays or more traffic until an effect is detectable.
- **Alerting** — alert only on deltas that are both significant and large enough to matter; O'Brien–Fleming boundaries across 7 daily checkpoints (day-1 cutoff 5×10⁻⁸, final 0.040); severity tiers from email to auto-shutdown.
- **False positives from iteration** — k iterations of a do-nothing feature give a 1 − 0.975^k chance of a "positive" significant result; five treatments → 12%; six iterations of five-treatment tests → over 50%.

## Actionable heuristics for product design
- When a team has not agreed on what success means, define the OEC before running tests, choosing metrics that predict long-term value (repeat visits, task success) over short-term revenue or volume, because short-term "theatrics" can move revenue while hurting retention.
- When you are confident an idea will win, test it anyway, because about two thirds or more of ideas fail even when experts are sure (Microsoft ~1/3 success, Google ~10%).
- When a team ships a rewrite, migration or new platform that "does the same thing", run it as an A/B test with "no significant degradation" as the bar, because new code usually handles edge cases worse (Amazon's pipeline needed five iterations).
- When dozens of small fixes ship daily, bundle them into release packages and A/B test each package, because a 1% revenue bug is easy to detect in an experiment and nearly invisible in time series.
- When a stakeholder objects to a deliberate slowdown or degraded variant, run it short (≈2 weeks) and small, because knowing the causal cost of latency or removal improves the product long term.
- When monitoring a live experiment for harm, alert only on effects that are significant and practically meaningful, with stricter thresholds early (O'Brien–Fleming), and auto-abort only the most severe, because naive alerting floods teams with false alarms.
- When a team has iterated on a feature through many variants, require a final confirmation run with higher power before shipping, and demand lower p-values for projects with many treatments or iterations, because repeated tries manufacture false wins.
- When slicing a scorecard by segment, require much stronger evidence (e.g. p < 1e-4) for unplanned slices, because hundreds of metrics × segments guarantee chance hits.
- When choosing the experiment length, make the final scorecard a whole number of weeks (usually two), because weekday/weekend behaviour differs.
- When cheap testing tempts the team toward many micro-variants (41 shades of blue), reserve part of the roadmap for bold, coherent redesigns, and test them with patience for a lower first result, because hill-climbing only finds local maxima.
- When small user bases are the concern, still experiment: with thousands of active users you can detect large effects, which is what startups should be looking for anyway (10× sensitivity costs 100× users).
- When running several experiments on the same surface, prevent conflicts with explicit constraints, and treat any detected interaction as a likely bug to investigate.
- When a monetization change wins on revenue but costs engagement or speed, look for an offsetting design (e.g. fewer ads elsewhere) and retest, because the site-links feature only became a clean win after the offset.
- When a test of a "harmless" delay or removal comes back flat, ask whether it had the power to see a plausible effect before concluding it does not matter, because a null from an underpowered test is not evidence of no effect (the Etsy example).
- When an organization is at the "hubris" or "Semmelweis reflex" stage, start with low-cost, visible tests on decisions the HiPPO already cares about, because the paper's maturity model says acceptance comes after something first goes visibly wrong with intuition (this note's application).
- When evaluating early ideas, use cheap methods (pitches, mockups, usability tests) to cut the list, and save controlled experiments for the narrowed set, because experiments require shippable implementations.
- When asked for a long-term read, keep a holdout group with no experiments (Bing used 10%) to measure the cumulative effect and cost of the whole program.

## Evidence & caveats
- Strong practitioner evidence from one of the largest experimentation systems of its time; numbers are specific to Bing 2012–2013 (search, ads, desktop-heavy).
- The idea-success rates are a mix of internal data and quotes from blogs, books and talks of varying rigor; the direction is consistent across sources, the exact rates are not.
- The "90% vs 20% replication" figure is a secondhand summary of Ioannidis via Manzi on 49 highly cited studies, a small sample, as the authors note.
- The ethics argument for negative experiments is the authors' view. Product teams should still apply informed-consent norms, avoid harming vulnerable users, and keep degradations reversible and brief.
- Engineering details (number lines, cache fragmentation) are architecture-specific and dated; the principles (isolation, alerting, holdouts) are not.

## Disagreements with other references
- `references/data-driven/experimentation-playbook.md` suggests holdbacks of 1–5% for weeks or months after launch; Bing held out 10% from all experimentation as a program-level control. Both serve different purposes: per-feature long-term holdback vs whole-program cost measurement.
- The paper's view that controlled experiments make other evaluation methods unnecessary when they are cheap is stronger than `references/process/research-methods-selector.md` and the playbook's §6 triangulation; the paper itself keeps qualitative methods for "why", so the conflict is about emphasis. For designers: when an A/B test is cheap, run it, and still use qual to explain it.
- SKILL.md's "evolve big products by default" aligns with the funnel and portfolio arguments here, though the paper explicitly defends occasional big leaps that may first lose.
- No conflict with `references/data-driven/statistics-cheatsheet.md` on sequential testing; this paper supplies a concrete O'Brien–Fleming example for alerting.

- `references/books/seven-rules-of-thumb.md` (same authors, a year later) restates the speed and Twyman's-law lessons with more examples; read the two together.

## Best quotes (< 25 words each, max 5)
- "getting numbers is easy; getting numbers you can trust is hard"
- "Hippocrates' 'Do no harm' should really be 'Do no long-term harm.'"
- "you don't get to the moon by climbing higher and higher trees."

## Related
- `references/books/seven-rules-of-thumb.md` (companion paper; rules derived from the same program)
- `references/books/cuped.md` (sensitivity as a way to scale the number of experiments)
- `references/books/how-not-to-run-ab-test.md` (why repeated looks need sequential boundaries)
- `references/data-driven/metrics-frameworks.md` (OEC and guardrails)
- `references/process/redesign-and-scale.md` (big bets vs incremental change)
