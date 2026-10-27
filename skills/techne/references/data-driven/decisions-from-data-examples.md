# Design Decisions From Data — Worked Examples

> **Use this when:** you have data (an experiment result, a funnel, a cohort chart, research findings) and must turn it into a design decision or recommendation.
> **Use this when:** you need a model answer for how to reason, from tiny UI tweaks to full redesigns, including when the honest answer is "we don't know yet".
> **Use this when:** coaching a stakeholder on why a result should or shouldn't be trusted.

All numbers below are illustrative, built to demonstrate reasoning. Methods are from `experimentation-playbook.md`, `statistics-cheatsheet.md`, `metrics-frameworks.md`.

Output format the agent should use for any data-to-decision answer:
```
1. Decision (one line): Ship / Iterate / Kill / Need more evidence / Don't test — just do it
2. Evidence and how much to trust it ([strong]/[moderate]/[weak])
3. What could make this wrong (validity threats checked)
4. Next design move (concrete)
5. Learning to record (mechanism)
```

---

## Example 1 — Button padding / tap-target change (tiny change, big product)

**Situation**: Primary "Save" button on a mobile editor is 32 pt tall. Designer proposes 44 pt (Apple HIG minimum hit target 44×44 pt; Material recommends 48×48 dp).

**Reasoning**
- This is a **platform guideline and accessibility issue**, not primarily an optimisation question. Fitts's law (Fitts 1954) predicts that larger, closer targets are faster to hit, at a nominal ~4% error rate [strong]; that larger targets also reduce errors, especially for touch, is a separate empirical finding (e.g. Parhi, Karlson, Bederson 2006) [moderate]. → references/books/mackenzie-hci-empirical.md
- Decision rule: don't A/B test *whether* to meet minimum hit-target guidance. Ship it; monitor guardrails (mis-taps, save success, layout regressions at large Dynamic Type sizes).
- If the team insists on measuring: a cheap A/B with metric "save success without immediate undo / back" and a guardrail "accidental taps on adjacent control". Expected effect is small; with 2M weekly editors, MDE ≈ 1% relative is detectable within a week, so testing is feasible — but the result won't change the decision unless it shows harm (e.g., the bigger button pushed content below the fold).

**Decision**: Ship; instrument; do a post-launch before/after check on mis-tap rate as a sanity check, labelled [weak] evidence.
**Learning**: "Tap target compliance is a default, not an experiment."

---

## Example 2 — CTA label test with a surprising +28% result (Twyman's law)

**Data**: "Start free trial" → "Try it free" on paywall. Trial starts +28% (p < 0.001), n ≈ 40k per arm, 5 days.

**Checks**
1. SRM: 40,120 vs 38,950 → χ² ≈ 17.3 → p ≈ 0.00003. **SRM detected.**
2. Investigation finds two bugs: (a) the new label wrapped on small Android screens, pushing the "Restore purchases" link off-screen, so returning subscribers in treatment tapped the main CTA instead (inflating "trial starts" with people who already pay); (b) the treatment's exposure log fired only after layout, and a crash on one Android version dropped some treatment users before they were logged (the SRM).

**Decision**: Result invalid. Fix the layout and logging; re-run for 2 full weeks.
**Re-run**: +2.1% relative trial starts, CI [+0.4%, +3.8%]; trial→paid conversion at day 14 flat (CI [−1.5%, +1.9%]); refunds flat.
**Final decision**: Ship (small, real lift; guardrails fine).
**Learning**: Big surprises are usually bugs. Copy length affects layout; test copy at all target screen sizes and text scales.

---

## Example 3 — Onboarding redesign: novelty vs real effect

**Data**: New 3-screen onboarding (vs 5-screen). Primary: activation (complete first project in 24h). Exposed: new users only, 2 weeks, 90k per arm.
- Activation: +6.0% relative, CI [+3.5%, +8.5%].
- D7 retention: +1.0% relative, CI [−0.8%, +2.8%].
- Permission-grant rate: −4% relative (one benefit explanation screen was removed).

**Reasoning**
- New users have no prior habits, so change aversion doesn't apply; novelty is also limited (they've never seen the old one). The activation lift is credible.
- D7 flat but CI includes a meaningful +2.8% → underpowered on D7; not evidence of no effect.
- Permission-grant drop is a guardrail regression — matters if the permission powers core value (e.g. photo access in an editor).

**Decision**: Iterate. Ship the 3-screen flow with a **just-in-time permission explanation** at the moment the feature needs access (contextual rather than upfront), and run a follow-up test. Keep a 5% holdback for 6 weeks to measure D30 retention.
**Learning**: Shorter onboarding raised activation; upfront benefit explanation was doing real work for permissions — move it, don't delete it.

---

## Example 4 — Flat result + segment fishing

**Data**: Redesigned product-detail page. Overall purchase conversion: +0.3% relative, CI [−1.2%, +1.8%]. Analyst reports: "iPad users in Germany +14%, p = 0.03."

**Reasoning**
- The test reported 4 platforms × 12 countries = 48 segments. Expected false positives at α 0.05 ≈ 2.4. One "hit" is consistent with noise (statistics cheat-sheet §6).
- iPad Germany has ~1,900 users per arm → huge CI; effect size likely exaggerated (Type M).
- Overall CI is narrow-ish: rules out effects larger than ~±1.8%.

**Decision**: The redesign has no meaningful conversion effect. Ship only if it has other value (e.g., it's built on the new design system and reduces maintenance cost; accessibility improved). Do not build a Germany-iPad-specific variant.
**Learning to record**: "Visual refresh of PDP, holding content constant, does not move conversion; content/information changes are where the lever is." (Mechanism-level learning.)

---

## Example 5 — Simpson's paradox from a ramp

**Data**: Checkout redesign ramped at 10% for week 1 (holiday sale week, high conversion) and 50% for week 2 (normal week). Pooled analysis shows treatment conversion *lower* than control, although treatment wins in each week separately.

| | Control | Treatment |
|---|---|---|
| Week 1 (sale) | 13,500/180,000 = 7.5% | 1,600/20,000 = 8.0% |
| Week 2 (normal) | 4,000/100,000 = 4.0% | 4,200/100,000 = 4.2% |
| **Pooled** | 17,500/280,000 = **6.25%** | 5,800/120,000 = **4.83%** |

**Reasoning**: Treatment's traffic is concentrated in the low-conversion week. Pooling across periods with different allocations creates the paradox (Kohavi et al. 2020).
**Decision**: Analyse week 2 only (stable 50/50), or stratify by week. Treatment +5% relative in week 2 — check CI and guardrails, then decide. Fix the dashboard to never pool across allocation changes.

---

## Example 6 — Low-traffic B2B feature: don't A/B test

**Situation**: Admin console bulk-edit redesign; 1,800 weekly active admins. Goal: fewer errors and faster bulk edits.

**Power check**: Task completion ~70%, σ ≈ 0.46. With 900 per arm, MDE ≈ 4 × 0.46 / 30 ≈ 6 pp absolute (~9% relative) — and most admins use bulk edit monthly, so effective n is far lower. Not feasible.

**Plan instead**
1. Moderated usability benchmark: 8 admins, old vs new prototype, same 5 tasks, within-subject, counterbalanced order. Measure task success, time on task, errors, SEQ.
2. Unmoderated test with 30 participants for task time CIs.
3. Beta with opt-in toggle for 4 weeks: monitor support tickets about bulk edit, undo usage, switch-back rate.
4. Rollout to all with a post-launch time-series check (interrupted time series on bulk-edit error tickets).

**Decision**: Proceed with qualitative + benchmark evidence [moderate]; present to stakeholders as "strong qualitative evidence, causal impact not measurable at our scale".

---

## Example 7 — Big redesign of a mature consumer app's home screen

**Situation**: Home redesign (new navigation, new content cards, new visual language). 20M MAU. Leadership wants "one A/B test to prove it".

**Recommended staged plan**
1. **Decompose**: identify the 3 hypotheses bundled in the redesign: (a) bottom nav with 4 tabs instead of 5 improves discovery of the core feature; (b) personalised cards increase meaningful actions; (c) new visual language improves perceived quality.
2. **Test (a) and (b) separately** on the old visual language where feasible (each a clean A/B, 2–3 weeks).
3. **Qualitative** on (c): preference + comprehension tests, 5-second tests, brand perception surveys; it rarely moves behaviour measurably on its own.
4. **Bundle test**: full redesign vs control, 50/50 among a 20% slice, 4 weeks; analyse new users and existing users separately; plot effect by exposure day to see change-aversion recovery.
5. **Abort criteria (pre-registered)**: D7 retention among existing users down > 1% relative with CI excluding 0 after week 3; crash rate up > 0.1 pp; core-task completion down > 2%.
6. **Rollout** 20% → 50% → 95%, keep **5% holdback for one quarter** for D30/D90 retention and revenue.

**Hypothetical result**: Week 1 existing users −3% sessions; by week 4 −0.4% (CI [−1.1%, +0.3%]). New users +2.5% D7 retention (CI [+0.9%, +4.1%]).
**Decision**: Ship with holdback. Rationale: change aversion recovering in existing users; new users (the long-run population) clearly better. Add in-product "what's new" guidance for existing users to speed recovery.
**Learning**: Judge redesigns on new users + the recovery slope of existing users, not week 1.

---

## Example 8 — Notifications: short-term win, long-term loss

**Data**: Daily "You haven't edited today!" push. 2-week A/B: DAU +4%, sessions +6%. Push opt-out rate 3× control; uninstalls +0.6 pp.

**Reasoning**
- Classic short-term/long-term conflict (Hohnhold et al. 2015 pattern). Opt-outs remove the channel permanently; uninstalls are an irreversible loss.
- Guilt-based copy is a manipulative pattern (confirmshaming-adjacent).

**Decision**: Don't ship. Redesign: user-controlled reminder (opt-in, user picks time and frequency), copy that offers value ("Your 3 drafts are waiting — pick up where you left off"), frequency cap. Test with a **long-term holdout** (5% get no reminders for 8 weeks); primary metric D28 retention; guardrails: opt-out, uninstall, notification-settings visits.

---

## Example 9 — Painted door for a new feature (ethically)

**Question**: Do users want "export to presentation"?
**Design**: Add a menu item for 2% of users for 10 days. On tap: honest sheet — "We're exploring presentation export. Not available yet. Want us to let you know?" [Notify me] [No thanks].
**Data**: 1.8% of exposed users tapped; 38% of tappers chose Notify. Baseline: an existing comparable menu item ("export to PDF") gets 2.5% taps per user over 10 days.
**Interpretation**: Demand roughly 70% of PDF export's by click; meaningful but curiosity-inflated. Waitlist conversion strengthens it.
**Decision**: Proceed to a concierge MVP (manual conversion for 50 waitlist users) to learn what "presentation" means to them before building.
**Ethics check**: no payment, honest message, small exposure, not on a critical path, removed after test, waitlisted users notified either way.

---

## Example 10 — Metric up, product worse (Goodhart)

**Data**: Feed redesign increased "time spent" +8%. Session-level survey "Was this session worth your time?" (sampled) −5%. Hide/report actions +12%.
**Reasoning**: Time spent was rising because finding relevant items took longer (scroll depth up, meaningful actions per minute down).
**Decision**: Don't ship. Change the OEC to "meaningful actions per session" + session satisfaction guardrail. Redesign ranking/density accordingly.
**Learning**: For utility moments, efficiency is value; time spent is not a universal good.

---

## Example 11 — Funnel diagnosis before designing

**Data**: Sign-up funnel (mobile web): landing 100% → form start 42% → email entered 35% → password created 21% → verified 15%.
**Reasoning**
- Largest step loss: email → password (−40% relative). Session replays: password rules shown only after failure; 3 re-tries average.
- Verified step loss partly structural (email delay); check time-to-verify distribution: p50 4 min, p90 2 h.
**Design moves (each a separate test)**: (1) show password rules inline with live validation; or passwordless magic link; (2) let users into the product before verification with a soft reminder (if security policy allows).
**Primary metric**: verified sign-ups within 24h per landing visitor (end-to-end, not the step), guardrails: account takeover/fraud indicators, support tickets for login.

---

## Example 12 — "Users said they want dark mode"
**Data**: 400 feature requests mention dark mode; survey: 62% "would use".
**Reasoning**: Stated preference [weak] for behaviour, but dark mode is also a platform expectation and accessibility/comfort feature. No need to prove it with an A/B test on retention — it likely won't move it measurably.
**Decision**: Build it as part of design-system theming (tokens), ship; measure adoption (% users with dark mode active) as a descriptive metric, not a success test.

---

## Heuristics distilled from the examples
1. Guidelines, accessibility and correctness fixes: **ship, don't test** — monitor guardrails.
2. Surprising result → **SRM and logging first**.
3. Flat with narrow CI = learning; flat with wide CI = no information.
4. **Segment hits are hypotheses**, not results.
5. Never pool across **allocation changes**.
6. Low traffic → **qualitative benchmarks + staged rollout**, labelled honestly.
7. Redesigns → **decompose, abort criteria, new-vs-existing split, holdback**.
8. Short-term engagement vs long-term trust → **long-term holdout**, and refuse manipulative variants.
9. Fake doors only with **honesty and no money**.
10. When the metric and the user disagree, **fix the metric**.
