# Metrics and Measurement Frameworks for Product Design

> **Use this when:** choosing what to measure for a feature, redesign, experiment, or design system; defining success criteria in a brief.
> **Use this when:** applying HEART, North Star, AARRR, OEC, input/output metrics, guardrails; building funnels, cohorts, retention curves.
> **Use this when:** a metric looks good but the product feels worse (Goodhart), or stakeholders disagree on "success".

---

## 1. Principles for picking metrics (opinionated)

1. **Start from the user outcome, then find the behaviour that signals it, then the number.** (Goals → Signals → Metrics; Rodden, Hutchinson, Fu 2010) [strong as practice]
2. **Every primary metric needs at least one guardrail that catches the cheap way to game it.** Engagement up? Guardrail: task completion time, uninstalls, unsubscribe, complaints.
3. **Prefer metrics the design can plausibly move within the test window.** "Annual revenue" for a button change is too far away; "checkout step completion" is near.
4. **Prefer per-user metrics** over per-session or per-pageview metrics for experiments (randomization unit = analysis unit).
5. **Value metrics over vanity metrics.** Time spent is only good if the time is valuable; for utility products (tools, banking) less time on task is better.
6. **Goodhart's law**: when a measure becomes a target, it ceases to be a good measure (Goodhart 1975; phrasing by Strathern 1997). [strong as a pattern] Rotate scrutiny: periodically check that the metric still correlates with user-reported value and retention.
7. **Short-term metrics must be validated against long-term outcomes** (retention, LTV, satisfaction) before becoming optimisation targets (Hohnhold et al. 2015). [strong]
8. **Don't measure what you won't act on.** Each metric in a plan should map to a decision.

---

## 2. Metric taxonomy for experiments (Kohavi, Tang, Xu 2020, ch.6–7) [strong]

| Type | Role | Examples |
|---|---|---|
| **Goal / success metrics** | What the org ultimately cares about; slow-moving | Revenue, retained users, subscriptions |
| **Driver / surrogate metrics** | Faster, more sensitive, believed to cause goal metrics | Activation rate, D7 retention, successful searches per user |
| **OEC** (Overall Evaluation Criterion) | The pre-agreed metric (or weighted combo) that decides ship/no-ship | e.g. sessions per user + success rate, minus a latency penalty |
| **Guardrail — organisational** | Must not get worse | Page latency, crash rate, revenue, unsubscribe rate, support tickets |
| **Guardrail — trust** | Validate the experiment itself | SRM, logging counts, invariant metrics |
| **Diagnostic / debug metrics** | Explain movements | Clicks per module, scroll depth, errors per step |

### OEC rules
- The OEC should be **measurable in the short term, sensitive, and causally predictive of long-term value**.
- Avoid OECs that reward short-term extraction. Classic example: Bing search — "queries per user" could be increased by making results *worse* (users search more to find answers). The better OEC used sessions per user and success indicators, not raw queries (Kohavi et al. 2020) [strong].
- Combine conflicting metrics only with explicit weights agreed beforehand; otherwise report them separately and decide openly.
- **Worked long-term OEC** (Google ads): long-term revenue ≈ short-term Δrevenue + Q × predicted learned-engagement change, where Q corrects for short tests underestimating learning (Q ≈ 2–3 desktop). The quality model needed both a pre-click relevance and a post-click (landing-page) quality term — a relevant-looking element that leads somewhere bad still trains users away (Hohnhold et al. 2015) [strong for Google search; coefficients don't transfer]. → references/books/focusing-on-the-long-term.md
- **Clicks shift; abandonment rarely moves.** A new module's CTR is not evidence of value — measure all-up success/abandonment, and dilute segment lifts by segment share (10% on a 1% segment ≈ 0.1% overall) (Kohavi et al. 2014, Rule 5) [strong]. → references/books/seven-rules-of-thumb.md

---

## 3. Google HEART (Rodden, Hutchinson, Fu 2010, CHI) [moderate — practitioner framework, unvalidated; widely adopted]

The source is a 4-page CHI note on experience across 20+ Google products, with no validity testing; the authors call for that research. HEART was proposed as the user-centred contrast to **PULSE** (Page views, Uptime, Latency, Seven-day actives, Earnings) — health metrics that rarely tell you whether a design change helped. → references/books/heart-framework.md

| Dimension | Question | Example signals | Example metrics |
|---|---|---|---|
| **Happiness** | Do users feel good about it? | Survey ratings, reviews | Satisfaction (CSAT), SUS, UMUX-Lite, perceived ease (SEQ) |
| **Engagement** | Do they use it in depth/frequency? | Actions per visit, frequency | Days active per week, actions per user, DAU/MAU |
| **Adoption** | Do new users / users of a new feature start? | First use | % of users who use feature X in first 7 days |
| **Retention** | Do they come back? | Return visits | D1/D7/D30 retention, churn rate, renewal rate |
| **Task success** | Can they do what they came for, efficiently? | Completion, errors | Completion rate, time on task, error rate |

How to apply:
- Pick 1–3 dimensions relevant to the change, not all five (this skill's cap; the paper asks for an explicit include/exclude decision per category). A settings page redesign → Task success + Happiness. A new feature → Adoption + Retention of that feature.
- For each: **Goal** (in words) → **Signal** (behaviour/attitude) → **Metric** (number with definition and window).
- Signal rules from the paper: signals must be **sensitive and specific** (move only when the goal does); when success is hard to see, **measure failure** (abandonment, undo, erase); **normalise per user** rather than reporting raw totals.
- Concrete engagement metric: % of active users active on ≥ 5 of the last 7 days — predictive of later retention in Gmail.
- HEART can be applied per feature, not just per product.

Worked mini-example — photo editor "auto-enhance" button:
- Adoption: % of editing sessions where auto-enhance used ≥ once (new users, first 7 days).
- Task success: % of sessions ending in export after auto-enhance; median time-to-export.
- Happiness: in-app 1-question rating after export (sampled 5%), compared vs control.
- Guardrail: undo rate after auto-enhance (high undo = it's not doing what users want).

---

## 4. North Star framework [moderate — practitioner framework]

Origins: popularised by Sean Ellis (growth hacking) and Amplitude's *North Star Playbook* (Amplitude, ~2019).
- **North Star Metric (NSM)**: one metric that best captures the value users get, which also leads to sustainable business results.
- Criteria: expresses customer value, represents strategy, is a leading indicator of revenue, is measurable and actionable, is understandable.
- **Input metrics** (3–5) are the levers teams can move that drive the NSM (breadth, depth, frequency, efficiency).

Examples (illustrative, not company-confirmed):
- Music streaming: time spent listening by active listeners (value = listening).
- Marketplace: nights booked / successful transactions.
- Productivity tool: weekly active teams completing a core workflow.
- Language learning: learners completing ≥ N lessons per week.

Pitfalls:
- An NSM that's pure revenue tends to justify extraction; one that's pure engagement can justify addictive patterns. Pair with health/guardrails (support contacts, refund rate, self-reported wellbeing, unsubscribe).
- Teams can't experiment directly on the NSM if it's slow; they experiment on input metrics.

### Input vs output metrics
- **Output metrics** (revenue, MAU) are results; **controllable input metrics** (selection, page speed, onboarding completion, search success) are what teams can directly influence. Amazon's practice of focusing weekly reviews on controllable inputs is described in Bryar & Carr (2021), *Working Backwards* [moderate].
- Designers almost always work on **inputs**. Write success criteria as inputs, and state the believed link to outputs.

### Leading vs lagging
- **Lagging**: retention at 90 days, LTV, annual churn — truth, but slow.
- **Leading**: activation within first session, setup completion, D1 return — fast, but must be validated as predictive.
- Validate leading metrics: show that users who hit the leading metric retain better, AND ideally that experiments moving the leading metric also moved the lagging one. Correlation alone (e.g. "users who add 7 friends in 10 days retain" — a widely retold Facebook anecdote [weak/anecdotal]) is not causal; it may just identify already-engaged users.

---

## 5. AARRR — Pirate metrics (Dave McClure 2007, "Startup Metrics for Pirates") [moderate]

| Stage | Question | Design levers | Example metric |
|---|---|---|---|
| Acquisition | Do people arrive? | Landing pages, store listing, SEO | Visit → sign-up start rate |
| Activation | Do they have a great first experience ("aha")? | Onboarding, empty states, defaults | % reaching activation event in first session/day |
| Retention | Do they come back? | Habit loops (healthy), notifications, content | D1/D7/D30, weekly active |
| Referral | Do they tell others? | Sharing flows, invite UX | Invites per active user, K-factor |
| Revenue | Do they pay? | Paywall, pricing page, checkout | Trial start, trial→paid, ARPU |

Notes:
- Order matters for diagnosis: fix activation and retention before pouring money into acquisition ("leaky bucket"). [moderate]
- Some variants add Awareness (AAARRR). Use as a map of the journey, not a scorecard.

---

## 6. Attitudinal / UX measurement instruments
| Instrument | What | Notes |
|---|---|---|
| **SUS** (Brooke 1996) | 10-item usability score 0–100 | Average ~68 across studies (Sauro & Lewis 2016) [strong]; needs ~10+ respondents for stable comparison |
| **UMUX-Lite** (Lewis et al. 2013) | 2 items, correlates with SUS | Good for in-product sampling |
| **SEQ** (Single Ease Question) | 1–7 ease after a task | Cheap; use per task |
| **CSAT** | Satisfaction 1–5 | Context-dependent; watch response bias |
| **NPS** (Reichheld 2003, HBR) | Likelihood to recommend 0–10 | Widely used; claim that it's the single best growth predictor is **[contested]** (Keiningham et al. 2007, Journal of Marketing). Don't use as an experiment metric (insensitive, low response) |
| **PMF survey** (Sean Ellis) | "How would you feel if you could no longer use X?" ≥ 40% "very disappointed" | Heuristic threshold [weak/anecdotal] |

Rule: attitudinal metrics explain and complement behavioural ones; they rarely work as primary A/B metrics due to low response rates and selection bias.

---

## 7. Funnels

### 7.1 Building one
1. Define the **goal event** and the **ordered steps** that lead to it (e.g. view product → add to cart → start checkout → payment → confirm).
2. Choose **unit** (user) and **conversion window** (same session? 7 days?). State it — results change dramatically with the window.
3. Strict order vs any order; whether steps can repeat.
4. Report **step conversion** (step n+1 / step n) and **cumulative conversion** (step n / step 1).
5. Segment by pre-existing attributes (platform, acquisition channel, new vs returning).

### 7.2 Reading it
- The biggest absolute drop is not automatically the best opportunity; weigh **drop size × fixability × value of the users dropping**.
- Some drop-off is healthy (people browsing; people realising the product isn't for them). Don't trap users to "fix" a funnel.
- Verify with qual: session replays and usability tests at the leaky step reveal *why*.
- Instrumentation bugs often masquerade as funnel drops (a step that fires inconsistently on one platform). Check event counts by platform/version first.
- **Time-to-convert distribution** is often more informative than rate: a long tail suggests confusion or hesitation.

### 7.3 Funnel anti-patterns
- Adding steps to "collect more data" then wondering why conversion fell. Each extra required field/step costs some completions; quantify with a test, don't assume (Baymard Institute's checkout research documents form-length impact, e.g. average checkout has more fields than needed [moderate]).
- Optimising one step by pushing the drop to the next (e.g. removing price from the cart page → more checkout starts, more abandonment at payment). Always look at the end-to-end goal.

---

## 8. Cohorts and retention

### 8.1 Cohort analysis
Group users by **when they started** (or by acquisition channel, or by first-use version) and track a metric over age (days/weeks since start). A cohort table (rows = start week, columns = week N) separates **product changes** from **mix changes** — the overall active-user curve can rise while every cohort retains worse (growth masking decay).

### 8.2 Retention definitions (state which one!)
| Definition | Meaning | Use |
|---|---|---|
| **N-day (classic)** | Active exactly on day N | Daily-use apps |
| **Unbounded / rolling** | Active on day N or any later day | Infrequent-use apps |
| **Bracket** | Active within window (e.g. days 7–13) | Weekly-use products |
| **Revenue/subscription retention** | Still paying at period N | Subscriptions |

Choose the window to match natural use frequency: a tax app shouldn't be judged on D7; a messaging app should.

### 8.3 Reading retention curves
- **Shape matters more than any single point.** Healthy products show a curve that drops then **flattens** (a stable core of users who found value). A curve trending toward zero signals no durable product–market fit for that cohort. [moderate — widely used practitioner heuristic]
- Improving **activation** shifts the curve up early; improving **ongoing value** flattens it higher. A "smile" (curve rising later) indicates re-activation/network effects.
- Compare curves of cohorts before/after a change, but beware seasonality and acquisition-mix changes (a new marketing channel brings different users).
- For experiments, measure retention **by randomized arm**, not by before/after cohorts.

### 8.4 Engagement ratios
- **DAU/MAU** ("stickiness"): fraction of monthly users active on a given day. Only meaningful for products meant to be used daily. [moderate]
- **L7/L28** histograms (days active in last 7/28): reveal power-user distribution better than an average.

---

## 9. Metric definition template
```
Name:            Checkout completion rate
Definition:      users with ≥1 'order_confirmed' / users with ≥1 'checkout_started', same user, within 24h
Unit:            user (randomization unit)
Window:          experiment duration; 24h conversion window
Direction:       higher is better
Type:            primary / driver
Guardrails:      refund rate (7d), support contacts per order, p75 checkout latency
Known traps:     duplicate 'order_confirmed' on page refresh (dedupe by order_id); bots
Expected noise:  baseline 62%, weekly std dev of the rate ±1.1 pp
Owner/source:    events table X, dashboard Y
```

---

## 10. Ethical metric design
- **Pair every engagement metric with a wellbeing or control guardrail**: notification disable rate, uninstalls, "time well spent" survey item, unsubscribe, complaint rate.
- **Don't count trapped behaviour as success**: failed cancellation attempts, repeated tapping, back-button loops, accidental purchases (refund requests within 24h).
- **Measure regret proxies**: refunds, undo, immediate exits after a prompt, "Don't show again" clicks.
- Separate **opt-in quality**: a permission/consent obtained via pressure may raise grant rate and lower trust; measure later revocation.
- Regulatory reality: dark patterns in consent and cancellation are increasingly regulated (e.g. EU Digital Services Act Art. 25 on deceptive interface design; US FTC 2022 report "Bringing Dark Patterns to Light") [strong — documents exist]. Mathur et al. (2019, CSCW) found dark patterns on ~11% of ~11k shopping sites crawled [moderate].

---

## 11. Choosing metrics by design task (quick map)

| Design task | Primary candidates | Guardrails |
|---|---|---|
| Button/CTA tweak (padding, label, colour) | Click-through of that CTA among exposed users; downstream completion | Mis-taps (immediate back), downstream conversion, accessibility contrast compliance |
| Onboarding | Activation event rate; time-to-value | D7 retention, permission revocations, skip rate |
| Navigation redesign | Task success for top tasks; search reliance; feature discovery | Retention, support tickets, time-on-task for core jobs |
| Paywall / pricing page | Trial start or purchase conversion | Refunds, cancellations within N days, complaint rate, store rating |
| Notifications | Retention (long-term holdout), opens leading to meaningful action | Disable/opt-out rate, uninstalls |
| Search | Successful searches (click + no quick return), zero-result rate | Latency, queries per success (lower is better) |
| Design system rollout | Consistency (component adoption %), dev velocity, a11y defects | Product metric parity (no regression), performance budget |
| Content density / feed | Meaningful actions per session | Session satisfaction survey, return rate, hide/report rate |

---

## Key sources
- Rodden, K., Hutchinson, H., Fu, X. (2010). Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications. CHI '10.
- Kohavi, R., Tang, D., Xu, Y. (2020). *Trustworthy Online Controlled Experiments*, ch.6–7 (metrics, OEC).
- McClure, D. (2007). Startup Metrics for Pirates: AARRR! (talk/slides).
- Amplitude (c. 2019). *The North Star Playbook*.
- Bryar, C., Carr, B. (2021). *Working Backwards*. St. Martin's Press.
- Goodhart, C. (1975). Problems of Monetary Management; Strathern, M. (1997). "Improving ratings": audit in the British University system.
- Hohnhold, H., O'Brien, D., Tang, D. (2015). Focusing on the Long-term. KDD '15.
- Sauro, J., Lewis, J. (2016). *Quantifying the User Experience*, 2nd ed.
- Brooke, J. (1996). SUS: A quick and dirty usability scale.
- Reichheld, F. (2003). The One Number You Need to Grow. HBR; Keiningham, T. et al. (2007). A Longitudinal Examination of Net Promoter and Firm Revenue Growth. Journal of Marketing.
- Mathur, A. et al. (2019). Dark Patterns at Scale. CSCW.
- Croll, A., Yoskovitz, B. (2013). *Lean Analytics*. O'Reilly.
