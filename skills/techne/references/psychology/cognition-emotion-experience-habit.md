# Emotion, Judgment, Memory of Experience, Flow and Habit

Use this when: designing how a product FEELS and is remembered (aesthetics, delight, onboarding, endings,
progress, streaks, retention, habit loops), or when redesigning something people use habitually.
Skip when: you need raw perception, load, or motor numbers (other cognition-* files). Ethics lens is mandatory here.

Evidence tags: [strong] [moderate] [weak/anecdotal] [contested]. Myths flagged MYTH.

---

## 0. Point of view

- People don't evaluate products as averages; they remember peaks, endings, friction moments, and how the
  product made them feel about themselves. Design those moments deliberately.
- Beauty is not decoration: it changes perceived usability and trust. But beauty never compensates for broken
  tasks in the long run — measured usability and retention will expose it.
- Habit is the strongest retention force and the most abusable. Our line: build habits around value the user
  would endorse on reflection (System 2 approval of System 1 behavior). If a loop works only because users can't
  stop, it's a dark pattern.
- Many popular "psychology hacks" come from a field with a replication crisis. Prefer effects with [strong]
  evidence and ALWAYS validate with your own experiment.

---

## 1. Dual-process thinking (System 1 / System 2)

- System 1: fast, automatic, associative, effortless. System 2: slow, deliberate, effortful, capacity-limited
  [strong as a descriptive framework; Kahneman 2011, Thinking, Fast and Slow; Evans & Stanovich 2013,
  Perspectives on Psychological Science — note: the "two systems" are a useful metaphor, the underlying
  architecture is debated (contested)].
- Most UI interaction runs on System 1: recognition, habit, pattern-matching to conventions. System 2 kicks in
  for novel, high-stakes, or surprising situations.
- Caution: several famous findings popularized alongside this framework have failed replication — e.g. many
  social priming effects and ego depletion (multi-lab RRR: Hagger et al. 2016, effect near zero) [contested →
  don't design around them]. Kahneman himself acknowledged the priming chapter relied on weak studies (2017).

Design rules:
- Routine, low-stakes, reversible actions → optimize for System 1: convention, defaults, one tap, no reading.
- High-stakes, irreversible, money/privacy/health actions → deliberately engage System 2: plain summary, explicit
  confirmation stating consequences ("Delete 1,204 photos permanently?"), cooling-off/undo where possible.
- Ethical asymmetry: never exploit System 1 to get consent or money the user's System 2 would refuse (pre-checked
  upsells, confirmshaming, disguised ads). Use System 1 support to help users do what they came to do.
- Cognitive Reflection Test (Frederick 2005) shows even educated people default to intuitive wrong answers
  [strong] — assume users will NOT read the fine print, so the fine print must not hide anything consequential.

---

## 2. Emotion and affect

Frameworks:
- Norman's three levels (Norman 2004, Emotional Design) [framework, not empirical law — moderate as heuristic]:
  - Visceral: immediate, pre-conscious reaction to look, sound, feel (first 50 ms impressions).
  - Behavioral: pleasure and effectiveness of use — control, feedback, fluency.
  - Reflective: meaning, self-image, story, memory ("what using this says about me").
  Use it as a review checklist: does the design work at all three levels, and do they conflict?
- Core affect: emotions can be mapped on valence (pleasant–unpleasant) × arousal (calm–activated)
  [strong as a measurement model; Russell 1980 circumplex]. Measure with Self-Assessment Manikin (Bradley & Lang
  1994) or simple valence/arousal scales.
- Theory of constructed emotion: emotions are constructed by the brain from interoception, context, and learned
  concepts, rather than hardwired universal "basic emotions" [contested; Barrett 2017, How Emotions Are Made;
  vs. basic emotion theory, Ekman 1992]. Design consequence (either theory): context and framing shape what
  people feel; the same animation can read as delight or as annoyance depending on the user's state (e.g.
  confetti after a payment that failed elsewhere).
- Positive affect broadens attention and creative problem solving; negative affect narrows attention
  [moderate; Isen et al. 1987 candle problem; Fredrickson 2001 broaden-and-build]. Norman 2002: "attractive
  things work better" because relaxed users are more tolerant and flexible. Stressful contexts (errors,
  payments, health) need calm, very clear, narrow-focus UI — no clever copy.

Practical rules:
- Match tone to the user's likely emotional state at that moment (map it in the journey). Delight in errors,
  outages, cancellations, or bereavement contexts reads as tone-deaf.
- Micro-delight (animation, playful copy) belongs on success states and rare moments; repeated delight becomes
  noise and slows experts (habituation [strong]).
- Error states: say what happened, why, and how to fix it, without blame. Keep users' work.

---

## 3. Aesthetic-usability effect

- Users rate attractive interfaces as easier to use. Kurosu & Kashimura 1995 (ATM layouts, Japan, CHI) found
  apparent usability correlated more strongly with aesthetics than with inherent usability; Tractinsky 1997
  replicated in Israel (even stronger) [moderate].
- Tractinsky, Katz & Ikar 2000: post-use perceived usability correlated with pre-use aesthetics, not with
  actual manipulated usability [moderate].
- But: Hassenzahl & Monk 2010 argued the beauty→usability link is indirect (via overall "goodness") and weaker
  than claimed; Tuch, Roth, Hornbæk, Opwis & Bargas-Avila 2012 found the reverse direction — poor usability
  lowered post-use beauty ratings [contested on direction and magnitude].

Agent stance:
- Beauty buys goodwill and first-impression trust (visceral), and raises tolerance for minor friction.
- It does NOT fix task failure; with repeated use, usability problems erode both perceived beauty and retention.
- Self-reported satisfaction in tests is biased by aesthetics: ALWAYS pair it with behavioral metrics (success
  rate, time, errors) — users may praise a beautiful prototype they couldn't complete tasks in.
- Credibility: visual design quality strongly influences perceived credibility of websites [moderate; Fogg et
  al. 2003, Stanford web credibility study, ~2,600 participants, "design look" was the most mentioned factor].

---

## 4. Processing fluency and familiarity

- Things that are easier to perceive and process are judged as more true, more liked, more trustworthy, and
  more familiar [strong; Reber, Schwarz & Winkielman 2004 review; Alter & Oppenheimer 2009 review].
- Mere exposure: repeated exposure increases liking [strong; Zajonc 1968; Bornstein 1989 meta-analysis] — this
  is why conventions and consistent brand elements feel "right".
- Disfluency transfers to the task: instructions in a hard-to-read font made an exercise routine seem harder and
  less likely to be adopted [moderate; Song & Schwarz 2008].
- Fluency works on legible type, high contrast, simple wording, prototypical layouts, familiar patterns, and
  clean rhythm (consistent spacing).
- Ethical warning: fluency raises perceived truth ("illusory truth effect", Hasher, Goldstein & Toppino 1977;
  Fazio et al. 2015) [strong]. Make true and important things fluent (prices, terms, risks). Never use fluency
  asymmetrically to make the company-favorable option easy to read and the user-favorable option hard.
- Change aversion: redesigns lose familiarity fluency; users often rate a new design worse initially, regardless
  of objective quality, then recover [moderate; Sedley & Müller 2013, CHI case study "Minimizing change
  aversion for the Google Drive launch"]. → Measure redesigns over weeks, not days; separate novelty/aversion
  effects (see section 8).

---

## 5. Memory of experiences: peak-end, duration neglect, serial position

Peak-end rule:
- Retrospective evaluations of experiences are dominated by the most intense moment (peak) and the end, with
  duration largely neglected [strong in lab/clinical; Kahneman, Fredrickson, Schreiber & Redelmeier 1993 cold-
  water study; Redelmeier & Kahneman 1996 colonoscopy; Redelmeier, Katz & Kahneman 2003 randomized trial of
  682 patients — extending the procedure with a milder ending improved recall and return rates].
- Transfer to digital products is plausible but less directly tested [moderate]. Use it to prioritize:
  - Identify the worst moment in a journey (often an error, a wait, a paywall surprise) — fixing the negative
    peak usually matters more than adding a positive one.
  - Design the ending: confirmation screens, order complete, cancel flow, end of session, end of a workout or
    lesson. A clean, warm, informative ending shapes the memory and word-of-mouth.
- Ethics: a nice ending must not be used to whitewash a bad experience (e.g. hiding fees then confetti).
  And cancellation flows ARE endings — a hostile cancel flow is the user's last memory of you.

Serial position effect:
- In lists, the first items (primacy) and last items (recency) are recalled best [strong; Murdock 1962;
  Glanzer & Cunitz 1966]. (Don't cite Ebbinghaus 1885 here: it reports no within-list serial-position curve.)
- In visual choice lists, earlier options get chosen more often when people satisfice [moderate; Krosnick &
  Alwin 1987 survey response order effects]. Search/result position effects are huge in click-through
  [strong].
- UI rules: put the most important nav items at start and end of a tab bar/menu; put key info first and the
  call-to-action last in a sequence; in surveys/research, randomize option order to avoid bias. Don't exploit
  order to push the company-favorable option in consent or plan choices.

---

## 6. Zeigarnik, goal-gradient, endowed progress

- Zeigarnik effect (1927): better memory for interrupted than completed tasks. Replication record is poor;
  a meta-analysis found no general memory advantage for unfinished tasks, but a reliable tendency to RESUME
  interrupted tasks (the Ovsiankina effect) [contested for Zeigarnik / moderate for Ovsiankina; Ghibellini &
  Meier 2023/2024 meta-analysis, Humanities & Social Sciences Communications]. → Don't claim "incomplete
  profiles are remembered"; DO make resumption easy (save state, "Continue where you left off").
- Goal-gradient: effort accelerates as people approach a goal [moderate-strong; Hull 1932; Kivetz, Urminsky &
  Zheng 2006 — coffee card customers bought faster as they approached the free coffee].
- Endowed progress: giving people artificial initial progress increases completion [moderate; Nunes & Drèze
  2006 car-wash loyalty cards — 8-stamp card vs 10-stamp card with 2 pre-filled: ~19% vs ~34% completion].
- UI uses (honest): progress bars in multi-step flows, profile completeness that reflects real value, checklists
  in onboarding with the first item already done because the user truly did it (e.g. "Account created ✓").
- Anti-pattern: fake progress, perpetual "almost there" bars, or completion meters that pressure users into
  sharing data they don't need to share.

---

## 7. Flow

- Flow: deep absorption when challenge matches skill, goals are clear, and feedback is immediate
  [moderate-strong; Csikszentmihalyi 1990, Flow; measured via experience sampling]. Too hard → anxiety; too easy
  → boredom.
- Product conditions for flow: clear goal per screen, immediate feedback (≤ 100 ms for direct manipulation, see
  motor file), no interruptions, controls that disappear (habitual, consistent), challenge that scales (games,
  learning, creative tools — dynamic difficulty, Chen 2007 "Flow in games").
- Protect flow: no modal interruptions mid-task (rating prompts, upsells, tooltips). Ask for ratings at natural
  completion points after success (also aligns with peak-end).
- Ethics: "flow" in infinite feeds is often engineered compulsion, not skill-challenge balance. Provide natural
  stopping points (end-of-feed markers, session summaries, "You're all caught up" — e.g. Instagram added this in
  2018).

---

## 8. Habit formation

Science:
- A large share of daily behavior is habitual — repeated in stable contexts with little deliberation (~43% of
  daily actions in diary studies) [moderate-strong; Wood, Quinn & Kashy 2002; Wood & Neal 2007; Wood 2019, Good
  Habits, Bad Habits].
- Habits are context-cue → response associations built by repetition with reward; once formed, they run even when
  the reward is devalued [strong in animal and human lab work; Wood & Rünger 2016 Annual Review of Psychology].
- Time to automaticity: median ~66 days, range 18–254 days, in a study of 96 people adopting a daily health
  behavior; missing a single day did not materially derail the process [moderate; Lally, van Jaarsveld, Potts
  & Wardle 2010, European Journal of Social Psychology; small sample, high attrition]. A later systematic
  review (Singh et al. 2024, Healthcare) found medians around 2 months with very wide ranges (days to ~1 year)
  [moderate]. MYTH: "21 days to form a habit" (traces to Maltz 1960 anecdote about self-image adjustment).
- Habit discontinuity: context changes (moving, new job — or a REDESIGN) break habits and open a window where
  behavior is re-decided deliberately [moderate; Verplanken & Wood 2006; Verplanken & Roy 2016].

Design implications:
- For users: anchor the product behavior to an existing stable cue (time, place, preceding routine), make the
  action tiny and consistent, give immediate meaningful feedback, and keep the interface STABLE so the cue-
  response mapping holds.
- Streaks: motivating for some, but streak loss can cause abandonment; allow streak freezes/repair and avoid
  guilt messaging [weak/anecdotal to moderate; app-industry reports; the "what-the-hell effect" after breaking a
  goal — Polivy & Herman 1985/Cochran & Tesser 1996 — moderate]. Lally found missing one day is fine — design
  for forgiveness. (James/Bain's "never suffer an exception" maxim is opinion that Lally's data contradict; don't
  cite it for all-or-nothing streaks.)
- Variable rewards (slot-machine schedules, Skinner) produce persistent, extinction-resistant behavior [strong
  in operant conditioning] — and are the core of compulsive designs. Use only where the variable element is
  genuine content value, never for loot-box style monetization or engagement for its own sake.
- Fogg Behavior Model (B = Motivation × Ability × Prompt, Fogg 2009) and Hooked (Eyal 2014) are practitioner
  frameworks [weak as empirical evidence; useful vocabulary]. Prefer Wood/Lally science for claims.

Redesign implications (critical for big products):
- A redesign breaks habits for every active user at once → expect a temporary dip in efficiency metrics and
  satisfaction (change aversion) even if the new design is better.
- Mitigate: keep high-frequency actions in the same place and gesture; ship gradually (staged rollout, opt-in
  preview, then opt-out); explain what moved; provide search; keep old shortcuts working.
- Measure correctly: run long enough to see past novelty and change-aversion effects (often multiple weeks);
  compare new-user cohorts (no old habit) vs existing users; watch long-term holdouts [moderate; Kohavi, Tang &
  Xu 2020, Trustworthy Online Controlled Experiments, on novelty/primacy effects].
- Use the discontinuity window ethically: a redesign is a moment when users reconsider — good time to surface
  genuinely better workflows, bad time to sneak in new monetization.
- Action slips (James 1890, ch. IV; later Norman/Reason "capture errors"): when two flows share opening steps,
  the more habitual chain completes itself. Make destructive or divergent flows (archive vs delete, send vs
  schedule) diverge early and visibly [strong as phenomenon]. → references/books/james-principles.md

---

## 9. Worked examples

Example A — Subscription cancel flow.
- Peak-end: it's the final memory. Design: 2 steps max, clear confirmation of what happens and when, offer pause
  as an honest option, no confirmshaming, end with a respectful confirmation + how to come back. Metrics:
  cancellation completion time, support contacts, win-back rate, app store sentiment.

Example B — Onboarding checklist for a productivity app.
- Endowed progress: pre-check "Account created" (true), 4 more meaningful steps, each yields visible value.
  Goal-gradient: show remaining count. Ovsiankina: resume card on home until done or dismissed. Metric:
  activation (week-1 retained users who completed core action), not checklist completion alone.

Example C — Major nav redesign of an app used daily.
- Habit discontinuity + change aversion: staged rollout, preserve positions of top 3 actions by usage, in-
  context "moved here" hints for 1-2 weeks, A/B with long holdout. Expect dip; decide on 4-8 week metrics, and
  separate new vs existing users.

Example D — Fitness app streaks causing churn after a missed day.
- Lally (missing a day doesn't break habit formation) + what-the-hell effect: add streak freeze, reframe to
  "X of last 7 days", celebrate return. Metric: 30-day retention post-miss.

---

## 10. Anti-patterns (ethics red lines)

- Confirmshaming ("No thanks, I don't like saving money").
- Fake progress/fake loading to build anticipation or legitimacy.
- Engineered compulsion: infinite scroll without stopping cues, variable rewards for engagement metrics,
  streak guilt-tripping, notification bombardment.
- Using beauty/fluency to make the company-favored option attractive and the user-favored option obscure.
- Delightful endings that mask hidden fees or bad outcomes.
- Citing debunked effects (ego depletion, disfluency-helps-learning, 21-day habits, social priming) as rationale.

## 11. When NOT to apply

- Peak-end does not mean "ignore the middle": in high-frequency utilities, average friction compounds daily
  and dominates retention.
- Delight and personality can be wrong for critical/regulated contexts (health, finance errors, emergencies).
- Habit-building is wrong for products whose value is occasional (tax filing, travel booking): optimize for
  findability and trust instead of frequency.
