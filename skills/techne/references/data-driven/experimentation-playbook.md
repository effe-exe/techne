# Experimentation Playbook for Product Designers

> **Use this when:** a design change should be validated with data, or you must decide HOW to validate it (A/B test, staged rollout, painted door, usability test, quasi-experiment).
> **Use this when:** writing a hypothesis, planning an experiment, reading results, or deciding ship / iterate / kill.
> **Use this when:** de-risking a big redesign or a new product on top of an existing user base.

Companion files: `statistics-cheatsheet.md` (formulas, power, SRM, peeking), `metrics-frameworks.md` (OEC, HEART, North Star, funnels, retention), `decisions-from-data-examples.md` (worked cases).

---

## 0. Point of view (the stance this skill takes)

1. **Most ideas fail. Plan for it.** Across mature products, the large majority of well-designed experiments do not improve the metric they target. Your taste is a hypothesis generator, not a verdict. [strong]
2. **Controlled experiments are the gold standard for causality; everything else is triangulation.** Dashboards show *what*, research shows *why*, experiments show *whether the change caused it*. [strong]
3. **Trust before speed.** A fast wrong answer is worse than a slow right one, because it gets shipped, celebrated and copied. Run the trust checks (SRM, A/A, guardrails) every time. [strong]
4. **Measure value to the user, not extraction from the user.** If a metric can be increased by making the product worse for people (hiding cancel, nagging, confirmshaming), it is the wrong metric or needs a guardrail. Dark patterns win short-term tests and lose long-term trust. [moderate]
5. **Small changes on big products, big bets with staged evidence.** Iterate on mature surfaces with tight A/B tests; for redesigns, combine qualitative research, staged rollout, and holdbacks — not a single "big A/B test" that will be underpowered and confounded.
6. **Write it down before you look.** Hypothesis, primary metric, guardrails, sample size and decision rule are fixed before launch. Post-hoc stories are cheap.

---

## 1. Base rates: why humility is a design skill

| Source | Reported success rate | Strength |
|---|---|---|
| Microsoft (Kohavi, Crook, Longbotham 2009, "Online Experimentation at Microsoft") | ~1/3 positive, ~1/3 flat, ~1/3 negative on experiments designed to improve a key metric | [strong] |
| Bing / Google (Kohavi, Tang, Xu 2020, *Trustworthy Online Controlled Experiments*, ch.1) | roughly 10–20% positive at these mature, heavily optimised products | [moderate] |
| Range across companies (Kohavi, Deng, Vermeer 2022, "A/B Testing Intuition Busters", KDD) | reported roughly 8%–33%, Airbnb search ~8% cited | [moderate] |
| Booking.com (Thomke 2020, *Experimentation Works*) | ~10% of tests produce a positive result (as reported by the company) | [moderate] |

Implications for the agent:
- **Expect ~1 in 5 to 1 in 10 of your well-reasoned changes to win** on a mature product. Higher win rates usually mean either an immature product (lots of low-hanging fruit) or bad statistics (peeking, p-hacking, too many metrics).
- Low base rate means a single p < 0.05 is weaker evidence than it feels. With an 8–10% prior success rate, ~22–26% of "significant" wins are false positives at alpha 0.05 and 80% power (Kohavi, Deng, Vermeer 2022; see the stats cheat-sheet for the computation). [strong — it's arithmetic]
- Surprising, large wins should trigger *more* scrutiny, not celebration — **Twyman's law**: "any figure that looks interesting or different is usually wrong" (attributed to Tony Twyman; popularised by Kohavi et al. 2020). [strong as heuristic]
- Small changes can matter enormously: Bing's change of ad-title layout (moving a line of text) lifted revenue ~12%, worth >$100M/year, after sitting in the backlog for months (Kohavi & Thomke 2017, HBR "The Surprising Power of Online Experiments"). [moderate — single case, well documented]

---

## 2. The lifecycle (follow in order)

```
Problem -> Evidence review -> Hypothesis -> Method choice -> Design variants
 -> Pre-registration (metrics, power, decision rule) -> Build + instrument
 -> A/A / instrumentation QA -> Ramp -> Run to planned duration
 -> Trust checks -> Analyse -> Decide -> Document & share learning
```

### 2.1 Problem framing
- State the user problem and the business problem separately. If you can only state the business one ("increase upgrades"), go back to research.
- Pull: funnel drop-offs, cohort retention, session recordings, support tickets, survey verbatims, prior experiment archive. **Prior experiments are the most under-used asset** — check whether this was tried before.
- Size the opportunity: *reach x expected effect x value per unit*. A 10% lift on a step 2% of users see is smaller than a 1% lift on the home screen.

### 2.2 Hypothesis template (designers: use this verbatim)

```
Because we observed [evidence: quant + qual, with sources],
we believe that [change] for [audience/segment]
will cause [user behaviour change]
which we will measure by [primary metric] moving by at least [MDE] in [direction],
without harming [guardrail metrics] beyond [threshold].
We will run for [N days/weeks, >= 1-2 full weekly cycles] with [n per variant].
If true we will [ship / iterate / scale]; if false we will [learn X / try Y].
Mechanism we are testing: [the WHY — e.g. "reduce perceived effort", "improve information scent"].
```

Good vs bad:
- Bad: "New onboarding will improve engagement." (no evidence, no metric, no threshold, no mechanism)
- Good: "Because 41% of new users abandon at the permissions step and 6/8 interviewees said they didn't know why we needed contacts, we believe explaining the benefit before the OS prompt for new iOS users will raise contact-permission grant rate by >= 5% relative, measured as grants / users reaching step, without lowering D7 retention or increasing onboarding time by > 10 s. 2 weeks, ~60k users per arm."

Why the **mechanism** line matters: a test that wins without a mechanism teaches nothing transferable; a test that loses but disconfirms a mechanism is a valuable learning.

### 2.3 Method choice — decision tree

```
Is the change reversible and the surface high-traffic (>= tens of thousands of users per arm in <= 4 weeks)?
 ├─ Yes → Is the question "does it move behaviour?" → A/B (or A/B/n) test.
 │        Are users interacting with each other (social, marketplace, collaboration)?
 │          └─ Yes → cluster / geo / switchback randomization (see 4.4).
 └─ No  → Is it a big redesign or new product?
          ├─ Yes → qualitative research + prototype usability tests + staged rollout with holdback (section 5).
          └─ Low traffic → usability testing (5–8 users per round finds most severe issues; Nielsen & Landauer 1993 [moderate]),
                          unmoderated tests, surveys (SUS/SEQ), before/after with caution, Bayesian or larger MDE.
Is the question "would anyone want this?" → painted door / fake door (with ethics rules, 5.3) or concierge test.
Is the question "why are they doing this?" → interviews, diary studies, session replay — not an A/B test.
Is it a ranking/relevance change? → interleaving can be 10–100x more sensitive than A/B for preference (Chapelle et al. 2012, ACM TOIS) [moderate].
```

**When NOT to A/B test**
- Too little traffic to detect a plausible effect within ~4–6 weeks (compute it: stats cheat-sheet). Before declaring it infeasible, check whether CUPED applies — returning-user metrics can need ~half the users or duration (Deng et al. 2013; → references/books/cuped.md). Kohavi's rule of thumb: you need at least thousands, ideally tens of thousands+ of users per variant; under that, focus on qualitative methods and larger bets. [moderate]
- The decision won't change based on the result (legal/accessibility requirements, bug fixes, brand mandates). Ship it; monitor guardrails.
- Clearly unethical variants (deceptive copy, hidden fees). Never test them "to see".
- One-off, non-repeating moments (a launch event) where there's no time to learn.
- Changes whose value only appears over months (pricing perception, trust) — use long-term holdouts, not a 2-week test.
- Accessibility fixes: do not A/B test whether to be accessible. Test *how* to implement, if at all.

### 2.4 Designing variants
- **One mechanism per variant.** If you change copy, layout and colour at once and it wins, you can ship but you can't learn. Acceptable on purpose for "big swing" tests; say so explicitly.
- **A/B/n**: use when you have 2–4 genuinely different mechanisms; each extra arm costs sample size and adds multiple-comparison risk.
- **Make the variant good.** A sloppy variant tests your craft, not your idea. Polish matters — loading speed, copy, states (empty, error, loading).
- **Performance is a confound.** Slower variants lose: at Bing, +100 ms latency cost ~0.6% revenue (Kohavi et al. 2014, "Seven Rules of Thumb for Website Experimenters", KDD) [strong at that scale]. Make sure the treatment isn't slower for reasons unrelated to the design. Regions differ: a 250 ms server delay cost ~1.5% revenue and 0.25% CTR, while delaying Bing's late-loading right pane by 250 ms was undetectable on ~20M users — defer secondary regions, and prefer task-based time metrics (time-to-success) over window.onload. → references/books/seven-rules-of-thumb.md
- **Re-implementations need a test too.** Rewrites, migrations and refactors that "do the same thing" ship behind a no-significant-degradation A/B bar (Amazon's new order pipeline failed at −2% revenue and took five iterations). Bundle small daily fixes into packages and test each package (Kohavi et al. 2009) [moderate]. → references/books/experiments-at-large-scale.md
- Design every state of the variant (first run, returning user, empty, error, offline, dark mode, accessibility sizes).

### 2.5 Pre-registration checklist (fill before launch)
- [ ] Hypothesis (template above)
- [ ] Randomization unit (user, device, session, cluster) and why
- [ ] Targeting / trigger condition: who is analysed (only users who *could see* the change — "triggered analysis")
- [ ] Primary metric (1), secondary metrics (<= 5), guardrails (performance, crash, retention, revenue, support contacts, unsubscribes)
- [ ] MDE and sample size; planned duration (whole weeks; >= 7 days, often 14)
- [ ] Decision rule (see 2.8) including what you do on "flat"
- [ ] Segments you will look at (pre-declared, few: platform, new vs returning, country tier)
- [ ] Known risks: novelty, cannibalisation, network effects, seasonality, concurrent campaigns

### 2.6 Running
- **A/A test** the setup when the platform/metric is new: ~5% of A/A tests should show p < 0.05 on any metric; many more means a broken pipeline. [strong]
- **Ramp**: 1% → 5% → 25% → 50%. Early ramps catch crashes and egregious guardrail drops; don't make the ship decision on ramp data. Harm checks of a small treatment against a 98% control inflate left-tail false alarms (skewed metrics) — correct for it or compare against an equal-sized control slice (Kohavi, Deng, Vermeer 2022).
- **Do not peek-and-stop** unless using a sequential method (stats cheat-sheet §5).
- Watch guardrails daily; stop early only for harm (crash spikes, revenue collapse, support flood).
- **Dashboards** should show progress toward the planned n and the currently detectable effect δ = (t_α/2 + t_β)·σ·√(2/n) — not live significance or "chance to beat original"; what people see is what they stop on (Miller 2010). → references/books/how-not-to-run-ab-test.md

### 2.7 Trust checks before reading any result
1. **SRM check** (sample ratio mismatch): actual split vs configured split, chi-square, flag at p < 0.001. If SRM — the result is invalid; find the cause (redirect loss, bot filtering, crash before logging, trigger bugs). Found in roughly 6% of experiments at Microsoft (Fabijan et al. 2019, KDD, "Diagnosing Sample Ratio Mismatch") [strong — primary figure; the cause taxonomy is moderate]. The authors' SRM Checker flags at p < 0.01; p < 0.001 suits high-volume platforms. → references/books/diagnosing-srm.md
2. Invariant metrics that the change shouldn't affect (e.g., page loads before the change point) are equal.
3. Logging works in both arms (event counts per user similar where they should be).
4. Duration covers full weekly cycles; no major outage/holiday contaminating one period.
5. Effect over time: plot daily treatment effect. A decaying curve suggests novelty; a rising curve suggests learning/primacy (4.2).

### 2.8 Decision rule (pre-agreed)

| Primary metric | Guardrails | Decision |
|---|---|---|
| Stat. sig. positive AND above practical threshold | all OK | **Ship** (consider replication if surprising or large) |
| Stat. sig. positive but below practical threshold | OK | Ship only if cost/complexity ~0; otherwise iterate |
| Flat (CI includes 0, CI narrow) | OK | It's a real "no effect" — ship only for non-metric reasons (simplicity, tech debt, brand); record the learning |
| Flat (CI wide) | OK | Underpowered — no conclusion; don't say "no effect" |
| Positive | a guardrail significantly negative | **Don't ship** as-is; understand the trade-off, find a variant that avoids it; escalate trade-off decision explicitly |
| Negative | — | Kill; extract learning on the mechanism |

Practical significance: define the smallest effect worth the cost of shipping and maintaining (e.g. "+0.5% relative on conversion"). A tiny significant effect on a huge product can be worth it; on a small product it rarely is.

### 2.9 Documenting
Every experiment, including losers, goes into a searchable archive: hypothesis, screenshots of all arms, metric results with CIs, segments, decision, **learning about the mechanism**. Institutional memory of failures is what makes the next redesign smarter. Booking.com and Microsoft both treat the archive as a core asset (Thomke 2020). [moderate]

---

## 3. Small iterative changes vs big bets

| | Iterative optimisation | Big-bet redesign / new product |
|---|---|---|
| Goal | Climb the current hill (local maximum) | Find a higher hill |
| Evidence | A/B tests, funnels | Research, prototypes, staged rollout, holdbacks, long-term metrics |
| Risk | Low per change; risk of incremental tunnel vision | High; risk of a large regression nobody can attribute |
| Typical effect | 0.1–5% relative per win | Can be large in either direction |
| Failure mode | Optimising toward a dark-pattern local max | "We redesigned, numbers dropped, we don't know why" |

Heuristics:
- **Portfolio**: on a mature product, most effort into iterative tests, with a deliberate share for exploratory big swings. Exact ratios are company-specific; no reliable universal number. [unverified for any specific ratio]
- **Local maxima are real**: hill-climbing with A/B tests cannot discover a fundamentally better design that first requires users to relearn. Use qualitative insight and vision to jump, then use data to land.
- **Decompose redesigns** where possible: ship the redesign's components as separate tests (navigation, then content density, then visual language). Bundled redesigns are faster but lose attribution.
- When you must bundle, **test the bundle against control** and accept that you'll learn "the package works or not", then use follow-up tests to optimise inside the new design.

---

## 4. Known threats to validity (and what to do)

### 4.1 Twyman's law
Large unexpected wins are usually bugs: logging double-counts, a variant that breaks a competing CTA, a bot spike. Before announcing: re-check SRM, logging parity, segment breakdown, and ideally replicate. [strong]

### 4.2 Novelty and primacy (change aversion)
- **Novelty**: users click new things because they're new; effect decays over days/weeks.
- **Primacy / change aversion**: experienced users perform worse at first on a changed UI, then recover or improve.
- Diagnose: plot the effect by day and by *user exposure age* (day 1 of exposure vs day 7 for the same users). Compare new users (no prior habits) vs existing users.
- **Don't default to "novelty".** Kohavi et al. (2014) found novelty/primacy effects uncommon, mostly in recommenders (one-time diversity) or features drawing on a finite resource [moderate]. Keep the daily plot, but don't explain away a flat or negative result as novelty without that evidence. → references/books/seven-rules-of-thumb.md
- **Quality-driven user learning** is a different effect: users slowly learn how good a surface is and adjust. Google's ad-load work (Hohnhold, O'Brien, Tang 2015, "Focusing on the Long-term", KDD) [strong] measured it with post-period (A/A-sandwiched), lagged-start and cookie–cookie-day designs (a holdback appears only in a staggered 10%/week rollout). For a mobile ad-load increase the estimated long-term revenue effect was essentially **zero** (likely negative): the short-term win was fully offset; Google then cut mobile ad load by 50%, net-positive long term. Numbers (Google search only): ~60-day half-life on desktop (β ≈ 0.012/day), so a 90-day test captures ~65%; per-page features reach half their learning in 14–21 days; short tests underestimate by Q ≈ 2–3 on desktop, ≈ 1 on mobile. → references/books/focusing-on-the-long-term.md

### 4.3 Long-term effects
- Short tests measure short-term behaviour. Use **long-term holdouts** (e.g. 1–5% of users kept on old experience for a quarter) for changes to notifications, ads, pricing, recommendation aggressiveness, and big redesigns.
- Distinguish a per-feature holdback (1–5%) from a **program-level holdout** with no experiments at all, which measures the cumulative value and cost of the whole program (Bing held out 10%; experimentation itself cost ~25–30 ms of page load, ~20 ms of it from cache fragmentation) [moderate]. → references/books/experiments-at-large-scale.md
- Use **proxy/leading metrics** validated to predict long-term outcomes (e.g. early retention signals) — but validate the proxy, don't assume it.

### 4.4 Interference / network effects
When treatment users affect control users (messaging, sharing, marketplaces, shared inventory, auctions), the standard A/B estimate is biased — often overstated in marketplaces (treatment steals supply from control). [strong]
- Social products: cluster randomization by graph community / ego network (Saveski et al. 2017, KDD, LinkedIn; Gui et al. 2015, WWW) [moderate].
- Marketplaces: geo or time-based **switchback** randomization.
- Collaboration tools: randomize by workspace/team, not user.
- When assigned users don't all take the treatment (non-compliance), report the intent-to-treat (ITT) effect.

### 4.4b Targeted / self-selected treatments
Never read the effect of something targeted at likely responders (ads, notifications, recommendations) from observational data. eBay's brand-keyword search ads showed ~1,600–4,000% ROI observationally; a randomized geo test gave ROI −63% (CI −124% to −3%) — people searching "eBay" were coming anyway (Blake, Nosko, Tadelis 2015, via Cunningham 2021) [strong]. Insist on a randomized holdout. → references/books/causal-inference-mixtape.md

### 4.5 Multiple testing and fishing
Twenty metrics x five segments = 100 chances for a false positive. Pre-declare one primary metric; treat other findings as hypotheses for the next test. See stats cheat-sheet §6. [strong]

### 4.6 Concurrent experiments
Interaction effects between overlapping tests are rarer than people fear at large companies (Kohavi et al. 2020 report interactions are uncommon in practice) [moderate], but check when two tests touch the same surface; use mutually exclusive layers for direct conflicts.

### 4.7 Seasonality and external events
Run whole weeks; avoid results driven by a holiday or a marketing campaign that hit one arm differently (e.g. campaign landing pages only routed to control).

---

## 5. De-risking redesigns and new products

### 5.1 The staged evidence ladder
1. **Generative research**: interviews, diary studies, analytics of current behaviour → problem definition.
2. **Concept tests**: low-fi prototypes with 5–8 users per round; iterate 2–3 rounds.
3. **Benchmark usability**: same tasks on old vs new design; task success, time on task, SEQ, SUS (Sauro & Lewis 2016, *Quantifying the User Experience*) [strong methods].
4. **Painted door / fake door** for demand (5.3).
5. **Dogfood / beta opt-in**: biased sample (enthusiasts), good for bugs not effects.
6. **Staged rollout as experiment**: 1% → 5% → 20% → 50% randomized vs control, measuring guardrails at each stage.
7. **Holdback**: after launch to 95–99%, keep 1–5% on old experience for weeks/months to measure long-term impact and protect against delayed harm.
8. **Opt-out tracking**: if users can switch back, the switch-back rate is a powerful metric (but self-selected).

### 5.2 Redesign-specific rules
- Expect **change aversion** in existing users; judge on new users and on the recovery curve of existing users, not on week 1.
- Keep **muscle-memory anchors** (primary nav location, key action placement) unless the research says they're the problem.
- Pre-define the "abort criteria" (e.g., D7 retention down > 1% relative with CI excluding 0) before ramping.
- Migrate power users deliberately; they generate disproportionate revenue and feedback.
- Track **task-level metrics** (completion of the 5–10 core jobs) not just top-line metrics; top-line moves slowly and hides trade-offs.

### 5.3 Painted-door / fake-door tests — ethics rules
A painted door shows an entry point (button, menu item, pricing tier) for something not built yet and measures clicks/intent.
Rules (this skill's position):
- **Never charge money or collect payment details** for something that doesn't exist.
- **Tell users immediately and honestly** on click: "We're exploring this — not available yet. Want to be notified?" No fake loading, no pretend errors.
- **Limit exposure** (small %, short duration) and never on critical paths where a dead end harms a task (checkout, account recovery, accessibility settings).
- Don't fake-door features that imply safety, health, legal or financial outcomes.
- Interpret carefully: a click is curiosity, not commitment. Strengthen with a second step (email signup, waitlist) and compare against a known feature's baseline click rate.
- Consider "concierge" or "Wizard of Oz" tests (humans deliver the feature manually) as a more honest high-fidelity alternative.

### 5.4 Experiment ethics in general
- Experiments that manipulate emotional state or well-being without consent drew wide criticism (Facebook emotional contagion study, Kramer, Guillory, Hancock 2014, PNAS, and the journal's subsequent Editorial Expression of Concern). [strong as precedent]
- Apply the **"would I be comfortable explaining this variant to the users in it?"** test. If no, don't run it.
- Principles from the Belmont Report (1979): respect for persons, beneficence, justice — usable checks for product experiments: minimise harm, don't concentrate risk on vulnerable groups, be able to justify.
- Price tests: avoid showing different prices for the same product to otherwise similar users without a legitimate basis (regulatory and trust risk; varies by jurisdiction). Prefer testing *presentation* of the same price.
- Don't run variants that remove accessibility features, hide cancellation, or add fake urgency/scarcity.
- **Manipulation test design** for consent, cancellation and upsell flows: compare the variant with a *neutral control* that removes only the suspect element, and measure (a) choice rate, (b) the share of users whose choice matches their stated preference, (c) comprehension (can they say what each option does?). Pre-register the threshold — e.g. Luguri & Strahilevitz's proposal that more than doubled uptake vs neutral means the pattern is likely responsible, or the FTC's "misleads a significant minority". A variant that wins on (a) but loses on (b) or (c) is a dark pattern, not a win (Mathur, Mayer & Kshirsagar 2021) [moderate]. → references/books/what-makes-dark-pattern-dark.md

---

## 6. Qual + quant triangulation

| Question | Best method | Supporting method |
|---|---|---|
| What is happening, how much? | Analytics, funnels, cohorts | Logs, session replay sampling |
| Why is it happening? | Interviews, usability tests, open-ended surveys | Session replay, support tickets |
| Did my change cause it? | Controlled experiment | Quasi-experiment (diff-in-diff, interrupted time series) |
| Would people want it? | Painted door, waitlist, concierge | Interviews (weak predictor of behaviour) |
| How usable is it? | Usability test with task metrics | Heuristic evaluation |

Rules:
- **Quant without qual** produces wins you can't explain and can't generalise.
- **Qual without quant** produces confident stories about 6 people. Use qual to generate hypotheses and explain results, quant to size and confirm.
- What people *say* they do diverges from what they do; weight observed behaviour over stated preference for behavioural questions. [strong]
- When qual and quant disagree, that's a signal: often a segment difference, a measurement problem, or a mechanism you haven't understood. Investigate, don't pick the convenient one.

---

## 7. Anti-patterns (the agent should call these out)
- "Let's run it until it's significant." → Peeking. Fix duration up front or use sequential tests.
- "It's not significant overall but it's significant for Android users in Brazil." → Fishing. Treat as a new hypothesis; re-test.
- "Conversion is up 30%!" on 200 users → Underpowered and likely exaggerated (winner's curse; Gelman & Carlin 2014 "Type M errors") [strong].
- "The redesign lost, so the old design is better forever." → Maybe change aversion; check new users and time trend.
- "We'll A/B test the redesign for a week to see if users like it." → Wrong method for "like"; and one week is novelty-dominated.
- "Engagement went up" when the change added friction loops (more taps to do the same task). → Metric isn't measuring value; use task success / time-to-value.
- "Users said in the survey they'd pay." → Stated intent; validate with behaviour.
- "We'll test the dark pattern and see if it hurts." → No. Short tests miss long-term trust erosion; it's also wrong.
- Copying a competitor's tested result. → Their context, users and metrics differ; it's a hypothesis, not evidence.
- Shipping because a VP likes it while the test is flat-with-narrow-CI. → Fine if done openly for non-metric reasons; not fine if reported as "data-driven".

---

## 8. Quick prompts the agent can run on any design proposal
1. What evidence motivates this? (quant + qual, with sources)
2. What is the mechanism?
3. What single metric would move if it works, and by how much at minimum?
4. What could get worse? (guardrails)
5. Can we detect that effect with our traffic in <= 4 weeks? If not, what method instead?
6. Who might be harmed or manipulated?
7. What will we do if it's flat?
8. What would make us distrust a positive result?

## Key sources
- Kohavi, R., Tang, D., Xu, Y. (2020). *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing*. Cambridge University Press.
- Kohavi, R., Crook, T., Longbotham, R. (2009). Online Experimentation at Microsoft. ThinkWeek / KDD workshop.
- Kohavi, R., Deng, A., Vermeer, L. (2022). A/B Testing Intuition Busters. KDD '22.
- Kohavi, R., Deng, A., Longbotham, R., Xu, Y. (2014). Seven Rules of Thumb for Website Experimenters. KDD '14.
- Kohavi, R., Thomke, S. (2017). The Surprising Power of Online Experiments. Harvard Business Review.
- Thomke, S. (2020). *Experimentation Works*. Harvard Business Review Press.
- Hohnhold, H., O'Brien, D., Tang, D. (2015). Focusing on the Long-term. KDD '15.
- Fabijan, A., et al. (2019). Diagnosing Sample Ratio Mismatch in Online Controlled Experiments. KDD '19.
- Gelman, A., Carlin, J. (2014). Beyond Power Calculations: Assessing Type S and Type M Errors. Perspectives on Psychological Science.
- Chapelle, O., Joachims, T., Radlinski, F., Yue, Y. (2012). Large-scale validation and analysis of interleaved search evaluation. ACM TOIS.
- Saveski, M., et al. (2017). Detecting Network Effects: Randomizing Over Randomized Experiments. KDD '17.
- Nielsen, J., Landauer, T. (1993). A mathematical model of the finding of usability problems. INTERCHI '93.
- Sauro, J., Lewis, J. (2016). *Quantifying the User Experience*, 2nd ed. Morgan Kaufmann.
- Kramer, A., Guillory, J., Hancock, J. (2014). Experimental evidence of massive-scale emotional contagion through social networks. PNAS.
