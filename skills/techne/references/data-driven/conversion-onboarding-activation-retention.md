# Conversion: Onboarding, Activation, Retention Mechanics

> **Use this when:** designing or critiquing first-run experiences, signup-to-value flows, permission requests, push/email re-engagement, streaks/habit loops, rating prompts, or empty states.
> **Also load when:** a metric like D1/D7/D30 retention, activation rate, or notification opt-in is the target of a change or experiment.
> **Skip when:** the task is pure visual polish with no behavioural goal (use visual/craft references instead).

Evidence tags: **[strong]** replicated / large-sample · **[moderate]** credible single source or vendor data with large N · **[weak/anecdotal]** case study, talk, self-reported · **[contested]** conflicting evidence · **[unverified]** widely repeated, primary source not confirmed.

Sibling files: `experimentation-playbook.md` and `statistics-cheatsheet.md` (how to test), `conversion-paywalls-pricing-subscriptions.md`, `conversion-checkout-forms-signup-landing.md`, `conversion-product-teardowns.md`.

---

## 0. The point of view (read first)

1. **Retention is the product's truth; conversion is a promise.** Any onboarding or paywall "win" that lowers D30 retention, raises refunds, or raises cancellations is a loss that has not been booked yet. Always pair a conversion metric with a downstream guardrail (D7/D30 retention, refund rate, uninstall rate, support tickets, unsubscribe rate).
2. **Time-to-value beats everything.** The fastest lever on activation is shortening the path from install/landing to the first moment where the user *gets* the core value (the "aha"). Every screen before that moment must justify itself.
3. **Ask for things in exchange for value, at the moment the value is obvious.** Permissions, signups, ratings, payments: context first, request second.
4. **Habit mechanics are allowed only when the habit serves the user's own stated goal.** A streak for language practice the user chose: fine. A streak engineered to keep someone scrolling a feed they want to use less: not fine.

---

## 1. Activation and the "aha moment"

**Definition for agents:** activation = the earliest measurable behaviour that is strongly predictive of long-term retention. Find it with data (cohort users by whether they performed action X within N days; compare retention curves), then design onboarding to drive that behaviour.

Famous published heuristics (all **[weak/anecdotal]**, all correlational, reported in talks and growth blogs, not peer-reviewed):
- Facebook: "7 friends in 10 days" (attributed to Chamath Palihapitiya's growth team).
- Slack: teams that exchanged ~2,000 messages tended to stick (Stewart Butterfield, interviews ~2015).
- Twitter: following ~30 accounts associated with retention.

**How to use them:** as a *method* (find a threshold behaviour, then make it easy), never as numbers to copy. Correlational thresholds often encode "already-motivated users do more stuff". Validate causality with an experiment that pushes some users over the threshold (see Calm example below).

**Worked example of causal validation — Calm reminders [moderate, vendor case study]:** Calm (via an Amplitude case study, 2016) saw users who set a daily reminder retained ~3x better, but <1% found the setting. That was correlation. They then prompted users to set a reminder after their first session; ~40% did, and prompted users showed a similar retention boost to organic setters — evidence the relationship was at least partly causal. Lesson: surface the retention-driving action at the moment of peak motivation (just after first value), and test whether the correlation survives intervention.

### Time-to-value checklist
- [ ] Count taps/screens/seconds from first open to first value. Write the number down; it is your baseline.
- [ ] Can the user experience the core value *before* creating an account? (Deferred signup / "try first".) TikTok, Duolingo (lesson before signup), and many games do this.
- [ ] Is every onboarding question used to change what the user sees next? If not, delete it.
- [ ] Is the first session completable in under ~2–3 minutes? (heuristic, not a law)
- [ ] Does the first session end with a natural "next time" hook (reminder, saved progress, scheduled content)?

---

## 2. Onboarding patterns

### 2.1 Tutorial carousels / feature tours
- **Evidence:** NN/g (Joyce, "Mobile-App Onboarding: An Analysis of Components and Techniques", 2020) argues that deck-of-cards tutorials are often skipped and quickly forgotten; recommends skipping them unless the app's interaction is genuinely novel. **[moderate]** (expert usability research, qualitative).
- **Use when:** truly novel gestures or a mental model users cannot infer.
- **Avoid when:** the UI follows platform conventions; it delays value.
- **Better:** contextual tips at the point of need ("progressive onboarding" / "pull revelations"), coach marks shown once on first encounter, sample data/templates.

### 2.2 Progressive onboarding
- Teach one feature at the moment the user needs it. Delay advanced setup (profile completion, integrations) until after first value.
- Reveal complexity in layers; "progressive disclosure" is a long-standing usability principle (Nielsen, 2006) **[moderate]**.
- Failure mode: hiding key features so deeply that power users never find them. Provide a discoverable path (settings, help, command menu).

### 2.3 Personalization questions ("quiz onboarding")
- **Pattern:** 3–20+ questions about goals, level, schedule, before a tailored plan and (often) a paywall. Heavily used in health, fitness, language, and meditation apps (Noom, Headspace, Duolingo, Calm, BetterMe).
- **Why it can work (mechanisms):** (a) genuinely better first content, (b) commitment/consistency — stating a goal raises follow-through (implementation intentions: Gollwitzer & Sheeran meta-analysis 2006, d≈0.65 **[strong]** for goal attainment, in general behaviour, not specifically apps), (c) effort justification / IKEA effect (Norton, Mochon & Ariely 2012 **[moderate]**), (d) the "labor illusion" — visible work makes results feel more valuable (Buell & Norton 2011 **[moderate]**).
- **Evidence for apps:** practitioner reports (RevenueCat, Adapty, Superwall podcasts/blogs) frequently say long quiz flows *increase* paywall conversion in health/fitness categories. **[weak/anecdotal]** — mostly self-reported, survivor-biased.
- **Decision heuristic:** keep a question only if (1) the answer changes the product experience, or (2) a test shows it raises a *downstream* metric (retention or paid conversion *and* refund-neutral).
- **Ethical line:** fake "analyzing your answers…" loaders that do nothing beyond theatre, invented "87% of people like you succeeded", or questions used to manufacture anxiety (body-shaming copy) are manipulative. A brief loader that *actually* builds a plan is fine; a fabricated statistic is not.
- **Failure modes:** drop-off at each screen (instrument every step); users lie or tap randomly to get through, making personalization worse than defaults; quiz leads to a hard paywall that feels like a bait-and-switch ("I answered 20 questions to learn it costs $X") — expect refunds and 1-star reviews.

### 2.4 Signup timing (deferred vs upfront)
- Deferred account creation usually lowers early friction; the trade-off is identity/attribution and cross-device sync. Prefer: let users try → prompt to save progress ("Create a profile to keep your streak") once they have something to lose. **[moderate]** (widely reported by practitioners; Duolingo publicly describes lesson-before-signup).
- B2B/SaaS: email-first signups with SSO ("Continue with Google/Microsoft") are standard; collect company size/role *after* value or make optional.
- See `conversion-checkout-forms-signup-landing.md` §4 for login mechanics.

### 2.5 Sample content, templates, and pre-filled states
- Templates (Notion, Figma community, Canva) collapse time-to-value by giving a "finished" starting point. Empty canvases intimidate novices.
- Pre-populated demo data is good for analytics/dashboards products; label it clearly as sample and make it one-click to clear.

---

## 3. Permission priming (push, location, camera, contacts, tracking)

**Platform facts [strong — platform docs]:**
- iOS shows the system push prompt once; if denied, the user must go to Settings. Same for most iOS permissions. App Tracking Transparency (ATT, iOS 14.5+, 2021) likewise allows one system prompt.
- Android 13+ (API 33) requires a runtime permission for notifications (`POST_NOTIFICATIONS`); previously it was default-on.
- Apple allows a custom pre-permission screen but the system prompt must not be misrepresented; buttons on a priming screen must not mimic the system dialog. (Check current App Review Guidelines, section 5.1.1, before shipping.)

**Benchmarks:** iOS push opt-in rates vary hugely by category — OneSignal's 2024 benchmarks report roughly 20% (games) to ~50% (utilities) on iOS **[moderate, vendor, large N]**; Android historically much higher because of default-on behaviour.

**Priming evidence:** vendor claims range from +10–15% to "2–3x" lift in opt-in **[weak/anecdotal]**; the best-known case is Cluster's 2014 blog post on "pre-permission" dialogs (claimed near-total opt-in among users who tapped their soft ask — survivorship, not a real rate) **[weak/anecdotal]**. Mechanism is plausible and consistent across sources: users accept requests that have a visible, immediate benefit.

### Rules
1. **Never ask on first launch with no context.** Ask when the feature is being used: location when the user taps "Find near me"; camera when they tap "Scan"; push when they set a reminder or follow something.
2. **Soft-ask pattern:** explain the benefit in one line in your own UI → user taps "Turn on" → system prompt. If they tap "Not now", don't burn the system prompt; ask again at a later meaningful moment.
3. **Benefit copy must be specific and true:** "Get a reminder at 8:00 for your daily lesson" beats "Enable notifications for the best experience".
4. **Degrade gracefully:** the app must remain useful if permission is denied; show how to enable later from Settings.
5. **Measure:** opt-in rate *and* notification-disable rate *and* uninstall rate over 30 days. A pushy priming flow can raise opt-in and raise disables.

**Ethical line:** guilt-tripping decline buttons ("No, I don't want to learn"; "confirmshaming", named in Brignull's dark-patterns taxonomy, 2010) and fake system-styled dialogs are out.

---

## 4. Notifications and re-engagement

### Principles
- **Every notification must pass the "would the user thank me?" test.** Transactional (order shipped, payment received, someone replied) > user-scheduled (reminder they set) > personalized recommendation > generic marketing.
- **Frequency caps and quiet hours by default.** Notification fatigue leads users to disable at the OS level — a permanent loss of the channel.
- **Timing:** sending at the time a user habitually engages tends to work better. Duolingo's widely-cited practice of reminding ~23.5 hours after the last lesson (secondary write-up, Econsultancy) **[weak/anecdotal]**. Duolingo also published a peer-reviewed bandit approach for choosing notification content: Yancey & Settles, "A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications", KDD 2020 **[moderate]** (reported modest but meaningful DAU gains at scale; check paper for exact figures).
- **Correlation trap:** vendor stats like "opted-in users are 4x more engaged" (Airship) are correlational — engaged users opt in. Do not use them to forecast lift. **[weak as causal claim]**

### Copy & design checklist
- [ ] First 40–60 characters carry the message (lock screen truncation).
- [ ] Specific, personal, actionable ("Your 3-day streak ends at midnight" vs "We miss you!").
- [ ] Deep-link to the exact screen, not the home screen.
- [ ] Channel/category controls in-app (users can mute marketing but keep transactional).
- [ ] Holdout group in every notification program (e.g., 5–10% receive none) to measure true incremental effect.

### Re-engagement emails
- Win-back sequences: remind of value already created (saved items, progress), not just discounts. Discount-led win-backs train users to churn for coupons.
- Unsubscribe must be one click (legally required in many jurisdictions; Gmail/Yahoo bulk-sender requirements 2024 require one-click unsubscribe for bulk senders **[strong — policy]**).

**Ethical line:** fake urgency ("Your account will be deleted!" when it won't), fake social pings ("Someone viewed your profile" when no one did), and notifications impersonating personal messages.

---

## 5. Streaks and habit mechanics

### What's public about Duolingo
- Duolingo publicly states streaks are among its most important retention levers; a Lenny's Newsletter "Behind the product" episode (Jackson Shuttleworth, Group PM retention) referenced 600+ streak experiments **[moderate — self-reported by company]**.
- Duolingo's blog ("How Duolingo's streak builds habit") reported that letting learners equip up to two Streak Freezes increased daily active learners by about +0.38% **[moderate — company-reported A/B]**. Note how *small* the number is: at hundreds of millions of users it matters; on a small app it is undetectable.
- Older tests via a secondary write-up (Econsultancy): showing streak count more prominently ~+3% DAU, ~+1% D14 retention **[weak — secondary]**.
- Busuu reportedly saw ~15% more sessions after adding streaks (Business of Apps) **[weak/anecdotal]**.

### Design rules for streaks
1. **Make the unit of work small** (one lesson, one minute). Streaks fail when the daily bar is too high.
2. **Forgiveness mechanics** (freezes, repairs, weekend amulets) reduce rage-quitting after a broken streak. Loss aversion (Kahneman & Tversky 1979 **[strong]**, though magnitude debated: Gal & Rucker 2018 **[contested]**) cuts both ways — a broken 200-day streak can end the relationship.
3. **Celebrate milestones, not just continuity** (7, 30, 100, 365 days).
4. **Streak must measure the behaviour that creates user value** (learning, practice), not mere app opens.
5. **Show progress beyond the streak** (skills learned, minutes meditated) so identity isn't hostage to a counter.

**When NOT to use streaks:** products where daily use is not the user's goal (banking, travel, tax), products for vulnerable users (gambling, compulsive-use risk), social feeds where the KPI is time spent. A "streak" for checking a banking app is noise.

**Ethical line:** selling streak repairs with escalating anxiety copy, or monetizing loss aversion aggressively (pay-to-save-streak timers) moves into manipulation. Offer freezes as earned rewards first.

### Other habit mechanics (brief)
- **Variable rewards** (Eyal, *Hooked*, 2014; grounded in operant conditioning, Skinner) **[moderate as mechanism; weak as design prescription]** — powerful and the most abused. Use for *content discovery* (new recommendations), not for slot-machine loops.
- **Leagues/leaderboards** — work for competitive users, demotivate low performers; segment cohorts by similar activity levels.
- **Goal gradient effect** (Kivetz, Urminsky & Zheng 2006, coffee-card field study **[moderate-strong]**): people speed up near a goal; pre-filled progress ("2 of 10 stamps already") increases completion. Ethical when the progress is real.

---

## 6. Ratings and review prompts

**Platform facts [strong — platform docs]:**
- iOS `SKStoreReviewController`/`requestReview`: system may show the prompt at most 3 times in a 365-day period per user; Apple decides whether to display. Apple's guidelines require using the system API for in-app review requests (check current guideline wording).
- Google Play In-App Review API has a time-bound quota; the API may not show the dialog; do not tie UI flows to whether it appears.

**What works:**
- Trigger after a success moment (completed a task, finished a workout, got a payout) — not on launch, not mid-task, not after an error.
- Require meaningful usage (e.g., ≥ N sessions, ≥ 1 core action completed) before eligibility.

**Ethical and legal line [strong — enforcement]:**
- **Review gating** (asking "Do you love us?" then sending only happy users to the store, unhappy ones to a feedback form) violates Google Play policy and risks FTC action; the FTC's 2022 Fashion Nova settlement ($4.2M) concerned suppressing negative reviews, and the FTC's 2024 rule on fake reviews and testimonials bans fake reviews and review suppression **[strong]**. A neutral "Send feedback" entry point available to everyone, separate from the review request, is fine.
- Never incentivize ratings (Apple and Google forbid it).

---

## 7. Empty states

Empty states are onboarding moments in disguise. Types:
1. **First use** (nothing created yet) — explain value in one line, give a primary action, offer a template or sample.
2. **User cleared** (inbox zero, all tasks done) — celebrate; suggest a next action lightly.
3. **No results** (search/filter) — say why, show how to broaden (remove filter chips, spelling suggestions, popular items).
4. **Error / offline** — say what happened, what still works, how to retry.

Checklist:
- [ ] One clear primary action (not three).
- [ ] Copy explains *what will appear here* and *why it's useful*.
- [ ] Illustration is optional; never let it push the action below the fold on mobile.
- [ ] Zero-result search pages always offer an exit (Baymard's e-commerce search research consistently flags dead-end "no results" pages as a major abandonment cause **[moderate]**).

---

## 8. Retention measurement quick reference

- **Curves, not points:** plot cohort retention curves. A curve that flattens (asymptote > 0) means you have a retained core; a curve trending to zero means no product-market fit for that cohort — onboarding tweaks won't fix that.
- **Sean Ellis "very disappointed" test:** ≥40% of surveyed active users saying they'd be "very disappointed" without the product is a commonly used PMF heuristic **[weak/anecdotal threshold]**.
- **HEART framework** (Rodden, Hutchinson & Fu, Google, CHI 2010) — Happiness, Engagement, Adoption, Retention, Task success; map Goals → Signals → Metrics **[moderate, widely adopted]**.
- **Novelty effects:** onboarding and gamification changes often show inflated early lifts that decay; run long enough to see D14/D30 (see `experimentation-playbook.md`).
- **Small effects are normal:** at large companies, typical winning changes move key metrics by fractions of a percent (Duolingo +0.38% example; Kohavi, Tang & Xu, *Trustworthy Online Controlled Experiments*, 2020, report most ideas fail to improve the target metric **[strong]**). Be suspicious of +30% claims.

---

## 9. Anti-patterns (reject on sight)

| Anti-pattern | Why it fails / harms | Replace with |
|---|---|---|
| Permission prompts on first launch | Low opt-in, burns one-shot system prompt | Contextual soft-ask |
| 5-screen feature carousel before value | Skipped, forgotten, delays aha | Progressive tips, try-first |
| Forced signup before any value | Abandonment | Deferred signup ("save your progress") |
| Fake loaders / fake stats in quiz | Deceptive; legal risk; trust erosion | Real personalization, honest copy |
| Confirmshaming decline buttons | Dark pattern (Brignull) | Neutral "Not now" |
| "We miss you" spam pushes | OS-level disable, uninstall | Value-specific, capped, user-scheduled |
| Review gating | Policy/legal violation | Neutral prompt after success |
| Streaks on non-habitual products | Noise, annoyance | Progress/milestones only where meaningful |

## 10. When NOT to optimize onboarding

- When retention curves go to zero regardless of onboarding variant — the problem is the core value, not the funnel.
- When the user base is tiny (< few thousand weekly new users): you cannot detect small effects; use qualitative research (5–8 user sessions) and judgment.
- When the "improvement" works by hiding information the user needs to make an informed choice (price, data use, commitment).
