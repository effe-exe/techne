# Behavior: Persuasion & Choice-Architecture Toolkit

Use this when: designing onboarding, activation, conversion, retention, notifications, habit loops, or any flow whose goal is to change what users do.
Use this when: someone cites a "psychology principle" (Cialdini, Fogg, Hooked, nudges, loss aversion, social proof) and you need to judge if it applies and how strongly.
Use this when: you must pick a legitimate lever AND pair it with the ethics test in `behavior-ethics-dark-patterns.md` (always load both).

---

## 0. Point of view (read first)

1. **Remove friction before you add pressure.** Most conversion problems are ability problems (confusing, slow, too many steps), not motivation problems. Fix ability first; it is cheaper, more durable and low-risk ethically — not automatically ethical: Fogg's own showcase, Facebook's re-engagement prompt chain, aimed at making use a daily habit "perhaps an obsession". Still run the ethics gate when the target is "more engagement".
2. **Persuasion is legitimate only when it helps people do what they would endorse on reflection.** Every lever in this file has a manipulative twin. The ethics test (section 6 here, full version in the ethics file) is not optional.
3. **Lab effect sizes shrink in the wild.** Academic nudge papers average roughly 8.7 pp effects; nudge-unit field trials at scale averaged ~1.4 pp (DellaVigna & Linos, *Econometrica*, 2022) [strong]. Expect small, real effects; test, don't assume.
4. **Truth is a design constraint.** Social proof must be real, scarcity must be real, urgency must be real. Fabricated versions are both unethical and, in the EU/US/UK, increasingly illegal.
5. **Optimize the long-run metric.** A lever that lifts day-1 conversion but raises refunds, churn, support tickets, chargebacks or regret is a net loss. Always pair a guardrail metric (see section 7).

---

## 1. Fogg Behavior Model (B = MAP) and Tiny Habits

Source: B.J. Fogg, "A Behavior Model for Persuasive Design," *Persuasive '09*, 2009 (originally B=MAT, "trigger"; renamed "prompt" later); *Tiny Habits*, 2019. Evidence: the model itself is **[weak]** as science — the paper presents no data or validation, and the figure has no units (Fogg calls it conceptual); the "fix ability before motivation" prescription is **[moderate]** because other evidence (friction and default studies) supports it. → references/books/fogg-behavior-model.md

**Model:** a behavior happens when Motivation, Ability and a Prompt converge at the same moment. Low motivation can be compensated by very high ability (very easy), and vice versa. No prompt, no behavior.

**Ability = simplicity, limited by the scarcest resource:** time, money, physical effort, mental effort (cognitive load), social deviance (does it feel weird?), non-routine (is it unfamiliar?). Diagnose which one is the bottleneck.

**Three prompt types:**
- *Facilitator* (high motivation, low ability) -> make it easier: "Import contacts in one tap."
- *Spark* (high ability, low motivation) -> give a reason: "Your 3 teammates already joined."
- *Signal* (high both) -> just remind: a badge, a timely push.
- The wrong type backfires: a spark or facilitator sent to someone already able and motivated reads as annoying or condescending. Fogg predicts mobile users tolerate signals and facilitators but resent sparks — ration sparks.

**Agent heuristics**
- When a funnel step underperforms, list the six ability factors and score each 1-5 before touching copy or incentives.
- Motivation is volatile; design for the low-motivation moment ("what does this need to work on a tired Tuesday?").
- Put the prompt where the ability is already high (after an action the user just completed). Fogg's Tiny Habits recipe: "After I [anchor], I will [tiny behavior]," then celebrate. In product terms: attach new behaviors to existing routines (e.g., "after you save a photo, tag one person").
- Celebrate immediately after the behavior (a micro-confirmation, haptic, satisfying state change). Fogg claims emotion wires habits [weak/anecdotal - mostly practitioner evidence].

**Habit-formation reality check:** Lally et al., *European Journal of Social Psychology*, 2010: median 66 days to reach automaticity, range 18-254 days, n=96 [moderate, small sample]. The "21 days to form a habit" claim is a **myth** (traceable to Maltz's 1960 self-help book, not research). Habits form through context-stable repetition, not willpower.

**Prevention rule** (for screen-time, spending and self-control features): to stop a behavior, remove one factor — mute or batch the prompts, add ability cost (extra confirm, cooling-off delay), or reduce motivation — as user-controlled settings. Fogg notes prevention is harder than causing a behavior.

**When NOT to apply:** high-stakes, deliberate decisions (finance, health, legal consent). There you want reflection, not automaticity. Don't build "habits" for things users should do rarely and thoughtfully.

---

## 2. Hooked model (Eyal) and its critiques

Source: Nir Eyal, *Hooked*, 2014. Loop: Trigger (external -> internal) -> Action -> Variable Reward (tribe, hunt, self) -> Investment (stored value that loads the next trigger). Evidence: [weak/anecdotal] as a model; built on case studies, not controlled studies. Variable-ratio reinforcement itself has strong animal-learning roots (Skinner; Ferster & Skinner 1957) [strong in animals; transfer to app engagement is plausible but under-tested].

**Useful parts:** the *Investment* step (users store data, content, reputation, preferences, which improves the product for them) is the most defensible idea: it ties retention to real accumulated value.

**Critiques the agent must know:**
- Variable rewards are the mechanism of slot machines; Natasha Dow Schüll, *Addiction by Design*, 2012, documents how machine design exploits "the zone." Infinite feeds, pull-to-refresh and loot boxes use the same mechanic.
- Eyal himself added the "Manipulation Matrix" (would you use it yourself? does it materially improve users' lives?) and later wrote *Indistractable* (2019) - an implicit acknowledgment of harm.
- Center for Humane Technology / Tristan Harris critiques of attention extraction; regulators now name "infinite scroll," "autoplay," and "streaks" as candidate addictive design (EU Parliament resolution on addictive design of online services, Dec 2023) [policy, not evidence].
- Engagement is not value. Time-in-app can rise while well-being and long-run retention fall.

**Agent rules for Hooked**
- Allowed: variable *content* that is genuinely useful (new messages, new relevant items) and investment that compounds user value.
- Forbidden: variable rewards engineered to prolong sessions beyond user intent; artificial loss mechanics (streaks that punish breaks heavily) aimed at minors; manufactured internal triggers via anxiety (FOMO pushes).
- Ethical streak design: offer freezes/grace days, let users set their own goals, celebrate return rather than shaming a broken streak, and allow turning streaks off.

---

## 3. Cialdini's 7 principles

Source: Robert Cialdini, *Influence* (1984; new and expanded ed. 2021); *Pre-Suasion* (2016) added **Unity**. Evidence on the principles overall: [strong] in social psychology, though individual classic studies vary in replicability (noted below).

| Principle | Mechanism | Legit product use | Manipulative twin (never) |
|---|---|---|---|
| Reciprocity | We repay what we receive | Genuinely useful free tier, free template, value before the ask | "Gift" that silently starts a paid trial |
| Commitment & consistency | We act consistent with prior small commitments | Let users set their own goal, then show progress against it | Foot-in-the-door chains that escalate to unwanted purchases |
| Social proof | We copy similar others under uncertainty | Real, recent, relevant counts and reviews; "people like you" | Fake "23 people viewing," fabricated reviews |
| Authority | We defer to credible experts | Real certifications, named expert reviewers, sources | Fake badges, "as seen on" with no basis |
| Liking | We say yes to those we like/similar | Warm tone, human support, personality | Fake personas, parasocial pressure |
| Scarcity | We value what is rare/expiring | Real stock levels, real deadlines (event dates, real price expiry) | Countdown timers that reset, fake low stock |
| Unity | We favor "us" (shared identity) | Community belonging, co-creation, "made with our users" | Tribal us-vs-them shaming |

**Evidence notes per principle**
- *Social proof, hotel towels:* Goldstein, Cialdini & Griskevicius, *J. Consumer Research*, 2008: descriptive norm message raised towel reuse ~35% -> ~44%; room-specific norm ~49% [moderate; later replications found smaller/inconsistent effects - e.g. Bohner & Schlüter 2014 failed to replicate in Germany] -> treat as [contested magnitude].
- *Commitment, foot-in-the-door:* Freedman & Fraser, 1966 [moderate; meta-analyses show small average effects, e.g. Burger 1999 review].
- *Scarcity, cookie jar:* Worchel, Lee & Adewole, 1975 (cookies rated more desirable when jar had 2 vs 10) [moderate, small sample].
- *Reciprocity, restaurant mints:* Strohmetz et al., 2002, tips rose with mints [moderate, small field study].
- Social proof backfires when it normalizes the bad behavior ("many people fail to complete their profile") - Cialdini, "Crafting normative messages," 2003 [moderate]. Frame the norm you want.

**Heuristics**
- Social proof works best under uncertainty and when the reference group is similar ("designers at teams your size"). Raw big numbers on a mature product add little.
- Show negative reviews too; a high-but-imperfect average is often trusted more than a perfect 5.0 (Spiegel Research Center / Northwestern, "How Online Reviews Influence Sales," 2017: purchase likelihood peaked around 4.0-4.7 stars, exact range unverified) [moderate, observational].
- Authority claims must be verifiable in one click.

---

## 4. Choice architecture (Thaler & Sunstein, *Nudge*, 2008; final ed. 2021)

A nudge alters behavior predictably without forbidding options or significantly changing incentives, and must be easy and cheap to avoid. **Meta-analytic status:** Mertens et al., *PNAS*, 2022, reported d ≈ 0.43 across 200+ studies; Maier et al., *PNAS* letter, 2022, showed that after correcting for publication bias there is little evidence of an average effect [contested]. Interpretation for agents: nudges are heterogeneous; **defaults and friction changes are robust; framing tweaks are fragile.** Always A/B test.

### 4.1 Defaults [strong]
- Organ donation opt-out vs opt-in: consent rates far higher in opt-out countries (Johnson & Goldstein, *Science*, 2003) [strong correlational; mechanism debated].
- 401(k) auto-enrollment raised participation from ~37% to ~86% among new hires (Madrian & Shea, *QJE*, 2001) [strong].
- Mechanisms: inertia/effort, implied endorsement ("they recommend this"), reference point.
- **Rule:** a default must be the option most users would choose if informed and unhurried, AND must be good for them. Pre-checking paid add-ons, marketing consent or data sharing is a dark pattern ("preselection") and illegal for consent under GDPR (CJEU *Planet49*, C-673/17, 2019).
- Smart defaults: inherit from context (locale, last choice, device), offer the most common safe setting, show the default visibly with an easy change.

### 4.2 Framing [moderate]
- Same info, different frame changes choices (Tversky & Kahneman, "Asian disease," *Science*, 1981) [strong in lab]. "95% fat-free" vs "5% fat."
- Attribute framing in UI copy: "Save 2 hours a week" > "Reduce wasted time." Prefer the frame that is accurate AND most understandable; never pick a frame to conceal a cost.

### 4.3 Anchoring [strong in lab, moderate in field]
- Arbitrary numbers bias estimates (Tversky & Kahneman, 1974; Ariely, Loewenstein & Prelec, 2003 "coherent arbitrariness" with SSN digits) [lab strong; some large replications weaker - Many Labs found anchoring among the more robust effects (Klein et al. 2014)].
- Product use: show the most complete plan first (left/top) so lower tiers are judged against it; show list price beside sale price ONLY if the list price was real (fake reference prices are illegal under EU Omnibus Directive price-reduction rule, Art. 6a Price Indication Directive - prior 30-day lowest price must be shown).

### 4.4 Loss aversion [strong but magnitude contested]
- Losses loom ~2x gains (Kahneman & Tversky, Prospect Theory, *Econometrica*, 1979). Meta-analysis Brown, Imai, Vieider et al., *J. Econ. Lit.*, 2024: mean λ ≈ 1.8-2.0 [strong]. Gal & Rucker, *J. Consumer Psychology*, 2018 argue loss aversion is overgeneralized for small stakes [contested].
- Legit use: "You'll lose access to 12 saved projects" when that is literally true at cancellation. Manipulative use: inflating losses, guilt copy ("No, I don't care about my family's safety" = confirmshaming).

### 4.5 Endowment effect [moderate-strong]
- Owners value items more (Kahneman, Knetsch & Thaler, *JPE*, 1990, mugs: WTA ~2x WTP). Some replications show it depends on framing/experience (Plott & Zeiler 2005) [contested magnitude].
- Product use: free trials with full access, personalization early ("your workspace"), letting users build something before sign-up. Ethical boundary: trial terms must be explicit before start and reminders sent before charging.

### 4.6 Status-quo bias [strong]
- Samuelson & Zeckhauser, *J. Risk & Uncertainty*, 1988. People stick with current options disproportionately.
- Implication for redesigns: existing users will rate a new UI worse initially even if better ("change aversion"; Google UX writing on change aversion, Sedley & Müller, 2013 [moderate, practitioner]). Plan for a 2-4 week novelty/change-aversion period in A/B tests, offer opt-in previews, explain what changed, avoid judging a redesign on week-1 metrics alone.

### 4.7 Commitment devices and goal-gradient
- **Goal-gradient:** effort accelerates as the goal nears. Kivetz, Urminsky & Zheng, *J. Marketing Research*, 2006: coffee-card customers bought more frequently as they approached the free coffee; also faster completion when card showed illusory progress (12 stamps with 2 pre-filled vs 10 with none) [strong].
- **Endowed progress:** Nunes & Drèze, *J. Consumer Research*, 2006, car-wash cards: 8 required stamps vs 10 with 2 free stamps - completion 19% vs 34% [moderate, single field study].
- Product use: progress bars for setup ("3 of 5 done"), with the first step already credited for something the user truly did (e.g., account created). Do not fake progress that isn't real; do not add steps just to show progress.
- After goal completion, motivation resets (post-reward resetting, Kivetz 2006) - offer the next meaningful goal, not an endless treadmill.
- **Commitment devices:** let users pre-commit (savings goals, study plans, "lock until"). Strong evidence in finance: Save More Tomorrow (Thaler & Benartzi, *JPE*, 2004) raised savings rates from 3.5% to 13.6% over 40 months [strong]. Always reversible.

### 4.8 Friction as a design tool
- Adding friction is legitimate when it protects users: confirm destructive actions, "are you sure you want to send to 4,000 people?", cooling-off prompts before sharing unread articles (Twitter 2020 prompt increased article opens before retweet ~40%, company-reported [weak]).
- Asymmetric friction (easy in, hard out) is the core of most dark patterns. Symmetry rule: leaving must be no harder than joining.

---

## 5. Present bias, hyperbolic discounting, mental accounting (pointers)

Detailed treatment in `behavior-pricing-and-choice.md`. Quick rules:
- Present bias (Laibson, *QJE*, 1997; O'Donoghue & Rabin, *AER*, 1999) [strong]: people overweight now. Bring benefits forward (instant value), push effort later only if honest. Never exploit it by hiding future costs (trial auto-renewals without reminders).
- Mental accounting (Thaler, *Marketing Science*, 1985; *J. Behavioral Decision Making*, 1999) [strong]: money is not fungible in people's heads; credits, budgets and "pennies a day" framing change perceived cost.

---

## 6. Lever selection procedure (agent workflow)

1. **Define the target behavior precisely** (who, what action, where, when). "Increase engagement" is not a behavior; "new users create their first project within 24h" is.
2. **Diagnose:** is the gap Motivation, Ability or Prompt? Use funnel data, session recordings, qualitative interviews. Default hypothesis: Ability.
3. **Pick the weakest-pressure lever that could work:** remove steps > better defaults > clarity/framing > timely prompt > social proof > commitment/goal progress > scarcity/urgency (only if real).
4. **Run the persuasion-vs-manipulation test** (full version in `behavior-ethics-dark-patterns.md`): transparency (would it still work if users knew?), reflective endorsement (would they thank you later?), reversibility, symmetry, truth, vulnerability (minors, distress, addiction-risk).
5. **Specify the experiment:** primary metric, guardrails, minimum detectable effect, duration covering novelty effects.
6. **Ship, measure, and check the guardrails** before declaring a win.

---

## 7. Guardrail metrics for persuasive changes

Always pair a conversion lift with at least two of:
- Refund rate, chargeback rate, cancellation within 7/30 days ("regret churn").
- Support contacts per 1k users about billing/"I didn't sign up."
- Uninstall / unsubscribe / notification-disable rates.
- Long-term retention (D30, D90) rather than D1.
- Satisfaction (CSAT/NPS) or task-success for the affected flow.
- Complaint/review sentiment mentioning "scam," "trick," "can't cancel."

If the variant wins the primary metric but loses a guardrail, it is not a win.

---

## 8. Myths and over-claims to flag

- "21 days to form a habit" - **myth** (Lally 2010: median 66, huge variance).
- "Loss aversion means always frame as loss" - **over-claim**; small stakes and familiar trade-offs show weak loss aversion (Gal & Rucker 2018), and loss frames can feel coercive.
- "Nudges are reliably big" - **contested**; field effects are small (DellaVigna & Linos 2022).
- "Ego depletion makes users quit late in flows" - **contested**; large preregistered replication found effect near zero (Hagger et al., *Perspectives on Psych. Science*, 2016). Long flows fail for ability/clarity reasons; design accordingly.
- "Priming with words/images changes behavior" (e.g., elderly-walking priming, Bargh 1996) - **failed replications** (Doyen et al. 2012). Don't rely on subtle priming.
- "Hooked loop = good product" - **over-claim**; engagement loops without user value inflate vanity metrics.

---

## 9. Worked examples

**A. Activation: only 38% of signups create a first project.**
Diagnosis via recordings: the empty state asks to choose among 14 templates (ability: mental effort). Lever: smart default (preselect the template matching signup role, one-click "start with this," "browse all" secondary), endowed progress checklist (account created ✓, 1 of 3). Ethics: transparent, reversible, helps the user's own goal. Guardrail: D7 retention, project deletion rate.

**B. Upgrade prompt.**
Bad: "Only 2 hours left! 87 people upgraded today" (timer resets, count invented). Good: trigger the upgrade prompt when the user hits a real limit while doing a valuable action ("You've used 3 of 3 exports this month. Pro gives unlimited exports - $8/mo, cancel anytime"), with "Not now" equally visible. Lever: prompt at high-ability moment + honest loss framing of a real limit.

**C. Re-engagement push.**
Bad: "You're missing out! Your friends are waiting" (vague FOMO). Good: "Ana commented on your design" (specific, real, user opted in). Rate-limit, respect quiet hours, provide per-category controls. Guardrail: notification-disable rate.
