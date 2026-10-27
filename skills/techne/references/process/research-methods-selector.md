# Research Methods Selector

> **Use this when:** deciding which research method answers a design question, planning sample sizes, writing interview/test scripts, or judging how much to trust a research finding.
> **Covers:** method landscape, selector table, interviews (The Mom Test), usability testing and the 5-user debate, surveys, diary studies, card sorting, tree testing, first-click, 5-second tests, concept tests, synthesis.
> **Pair with:** the data-driven/experimentation references for A/B testing and analytics; this file is about the qualitative and small-sample quantitative toolkit.

---

## 1. The point of view

- **Behavior beats opinion.** What people *do* is more reliable than what they *say* they do or will do. Stated intent to buy/use is a notoriously poor predictor of actual behavior [strong: intention–behavior gap, e.g. Sheeran, 2002 meta-analysis found intentions explain ~28% of behavior variance].
- **Qual tells you why, quant tells you how much.** Never use 5 users to estimate a percentage. Never use an A/B test to learn why.
- **Research is for decisions.** Every study starts with "the decision this will inform is ___" and "we'd decide differently if we learned ___". If neither can be filled in, don't run it.
- **Triangulate.** A finding seen in analytics, in tickets, and in sessions is real. A finding from one source is a hypothesis.

---

## 2. The landscape (Rohrer's framework)

Christian Rohrer's "When to Use Which User-Experience Research Methods" (NN/g, 2014; updated 2022) [practice canon] places methods on two axes:
- **Attitudinal ↔ Behavioral** (what people say vs what they do)
- **Qualitative ↔ Quantitative** (why/how-to-fix vs how-many/how-much)
- plus context: natural use, scripted use, decontextualized, or none.

```
                 BEHAVIORAL
                     |
  usability test     |   A/B test, analytics, clickstream
  field study        |   first-click (quant), tree test
  diary (behavioral) |   unmoderated benchmark
QUAL ----------------+---------------- QUANT
  interviews         |   surveys, desirability rating
  focus groups(*)    |   card sort (quant analysis)
  concept test       |   conjoint / max-diff
                     |
                 ATTITUDINAL
(*) focus groups: weak for UX; group dynamics distort individual behavior.
```

---

## 3. Selector: question → method

| You need to know... | Phase | Method | Typical n | Notes |
|---|---|---|---|---|
| What problems/jobs exist, how people work today | Discover | Contextual inquiry, interviews | 5–12 per segment | Past behavior, not hypotheticals |
| Why people switched to/from us | Discover | Switch (JTBD) interviews | 10–15 recent switchers | Within ~90 days of switch for recall |
| How behavior unfolds over days/weeks | Discover | Diary study | 10–20, 1–4 weeks | Expect dropout; incentivize per entry |
| How big a need is across the base | Define | Survey (importance/satisfaction) | ~400 for ±5% at 95% | Write from interview language |
| How users group our content | Define (IA) | Open card sort | 15–30 | Tullis & Wood (2004): ~15 gives r≈0.90 with large-sample result [moderate] |
| Whether our proposed IA works | Define (IA) | Tree test | 50+ per tree | Task success + directness + time |
| Which concept direction is more desirable | Develop | Concept test, preference + reasons | 5–8 qual / 100+ quant | Preference ≠ performance |
| Can people complete the task? What breaks? | Develop | Moderated usability test | 5 per round, iterate | Formative; find problems |
| Does the page communicate its purpose instantly? | Develop | 5-second test | 20–50 | Only for first impressions/clarity |
| Will users click the right place first? | Develop | First-click test | 30–50+ | Strong predictor of task success |
| How usable is it vs. baseline/competitor? | Deliver | Summative benchmark (SUS, task success, time) | 20–40+ per group | Needs confidence intervals |
| Does it change behavior at scale? | Deliver | A/B test, analytics | power-calculated | See data-driven references |
| What's going wrong in production? | Post-launch | Session recordings, support tickets, funnel analysis, intercept survey | n/a | Great for L1 opportunity finding |

---

## 4. Interviews (The Mom Test)

Rob Fitzpatrick, *The Mom Test* (2013) [practitioner canon]. Three rules (paraphrased):
1. Talk about **their life**, not your idea.
2. Ask about **specifics in the past**, not generics or opinions about the future.
3. **Talk less, listen more.**

Bad data types to catch and discard: **compliments** ("love it"), **fluff** (generics "I usually...", hypotheticals "I would...", future promises "I'd definitely use that"), **ideas/feature requests** (dig for the motivation behind them instead).

Question bank:
- "Tell me about the last time you [did the job]." → walk the timeline.
- "What was hardest about that?" / "Why was that hard?"
- "What did you do about it?" (if nothing, it's not a big problem) [moderate heuristic]
- "What have you tried? What did it cost you?"
- "What happened right before you decided to look for something?" (Moesta push)
- "What almost stopped you?" (anxiety/habit forces)
- "Who else is involved?"
- Ending: "Is there anything I should have asked?" / "Who else should I talk to?"

Never ask: "Would you use X?", "How much would you pay?" (as a direct question), "Do you like this design?" These generate stated preference with near-zero predictive value.

Sample size: interviews reach thematic saturation for a homogeneous group around 12, with most core themes appearing in the first 6 (Guest, Bunce & Johnson, *Field Methods*, 2006) [moderate; depends on homogeneity]. Plan 5–8 per distinct segment, add until new interviews stop producing new themes.

Bias controls: neutral wording; no leading ("don't you find X annoying?"); record verbatim; two people (one interviewing, one noting); separate observations from interpretations in notes.

---

## 5. Usability testing and the "5 users" debate

### 5.1 The claim and its math
Nielsen & Landauer (1993, INTERCHI) modeled problem discovery as `Found(n) = N(1 − (1 − L)^n)` where L is the probability one user hits a given problem. With their average **L ≈ 0.31**, 5 users find ~85% of problems [strong for the model; the L value is the weak point]. Nielsen's popular advice (2000, "Why You Only Need to Test with 5 Users"): run many small rounds, ~5 users each, rather than one big study.

### 5.2 The limits
- **Faulkner (2003, *Behavior Research Methods, Instruments & Computers*)**: resampled from 60 users. Average discovery at n=5 was ~85%, but individual samples of 5 found as little as **~55%**; at n=10 the minimum rose to ~80%, at n=20 to ~95% [strong].
- **Spool & Schroeder (CHI 2001)**: on complex e-commerce sites, 5 users found only ~35% of problems [moderate].
- **L varies hugely**: complex products, diverse users, and rare-but-severe problems have low L, so 5 users miss a lot. A problem affecting 10% of users has only a ~41% chance of appearing with 5 users (1 − 0.9^5).
- 5 users is **per distinct user group**; 3 segments → ~15 users.
- 5 users is for **formative** (finding problems), never for **summative** (measuring rates). Five-user success rates have enormous confidence intervals: 4/5 successes has a 95% adjusted-Wald CI of roughly 36%–98% (Sauro & Lewis, *Quantifying the User Experience*, 2nd ed., 2016) [strong].

### 5.3 Agent rule of thumb
- Simple flow, homogeneous users, iterative rounds → 5 per round, 2–3 rounds.
- Complex product / high-stakes (payments, health, safety) / diverse users → 8–12+ per segment, or more rounds.
- Need a number for stakeholders → summative test, 20–40+, report CIs.

### 5.4 Running a test
Script structure: intro (testing the design, not you; think aloud) → background questions (2–3) → 3–6 realistic **tasks** phrased as goals without UI words ("You want to send your sister €20" not "Click Send Money") → post-task ease rating (SEQ, 1–7, Sauro) → post-test SUS or UMUX-Lite → debrief.

Moderation rules: don't help; answer questions with questions ("What would you expect?"); note where they hesitate, backtrack, or misread; capture severity per issue; record quotes verbatim.

Metrics: task success (binary or graded), time on task (geometric mean for small n), errors, SEQ. **SUS** benchmark: average ~68 across products (Sauro, 2011, from ~500 studies) [strong]; it is not a percentage.

Moderated vs unmoderated: moderated for exploration and complex tasks; unmoderated for scale, speed, and simple tasks. Remote is fine for most digital products [moderate].

**Comparative tests (A vs B design):** prefer within-subjects with a balanced Latin square, and check for a group (order) effect to catch asymmetric skill transfer; switch to between-subjects when conditions interfere (two keyboard layouts, competing gesture schemes). Always report an accuracy measure next to speed — people trade one for the other (MacKenzie, *Human-Computer Interaction: An Empirical Research Perspective*) [strong as method]. → references/books/mackenzie-hci-empirical.md

**Testing with people with cognitive disabilities (W3C COGA 2021):** accessible consent with a comprehension check; allow breaks, quiet rooms and a companion — watch what help the companion gives, it is a design signal; simple mood scales; remind people they can stop and can't do anything wrong. Demonstrate, don't ask: interrupt them for a minute and see if they can resume; ask them to change a detail at the start of a completed form. → references/books/coga-usable.md

---

## 6. Surveys

Good for: sizing (how many have this problem), prioritizing (importance/satisfaction), tracking (NPS/CSAT/SUS over time), segmenting.
Bad for: discovering unknown problems, predicting behavior, evaluating designs users haven't used.

Rules:
- Write questions from interview language; run qual first.
- One concept per question; no double-barreled ("fast and easy").
- Balanced scales with labeled endpoints; 5 or 7 points fine.
- Ask about recent concrete behavior ("In the last 7 days, how many times...").
- Randomize option order; include "none / not applicable".
- Pilot with 5 people, watch them fill it in.
- Sample: ~385 responses for ±5% margin at 95% confidence for a large population (standard proportion formula, p=0.5) [strong, math]. **Non-response bias** usually matters more than sample size: who answers your survey is not your user base.
- **NPS caveat:** widely used, but its claimed superiority as a growth predictor (Reichheld, HBR, 2003) has been disputed (Keiningham et al., *Journal of Marketing*, 2007) [contested]. Use as a tracking signal, never as a design success metric.
- Do not ask "would you like feature X?" Everyone says yes to free features.

---

## 7. Diary studies

Use for: habits, multi-day journeys (travel, onboarding, learning), infrequent tasks, context of use.
Setup: 10–20 participants, 1–4 weeks, prompts triggered by event ("each time you...") or by time (daily); mixed media entries (photos, screenshots); kickoff and exit interviews. Expect 20–30% dropout [weak/anecdotal]; pay per entry plus completion bonus.

---

## 8. Card sorting

- **Open** (users create and name groups) → discover mental models and vocabulary.
- **Closed** (users sort into given categories) → validate category fit.
- **Hybrid** → given categories plus users can add.
- 30–60 cards; card labels must be understandable without the UI; avoid cards sharing words with category names (biases matching).
- n ≈ 15–30 for open sorts (Tullis & Wood, 2004) [moderate].
- Analysis: similarity matrix, dendrogram; read the *labels* users invent.
- Limit: card sorting says how users *group*, not how they *find*. Always follow with a tree test.

## 9. Tree testing (reverse card sort)

- Text-only hierarchy; give find-it tasks ("Where would you change your billing address?").
- Metrics: **success rate**, **directness** (got there without backtracking), **time**, first-click distribution per task.
- n ≥ 50 per tree for stable percentages [moderate, vendor guidance: Optimal Workshop].
- Test current tree vs proposed tree with the same tasks to get a baseline.
- Target: aim for ≥ 70–80% task success on key tasks before moving to visual design [weak/anecdotal threshold].

## 10. First-click testing

- Show a screen, give a task, record the first click.
- Bob Bailey and Cari Wolfson's work (reported via usability.gov ~2009) found that users who click the correct first item succeed ~87% of the time vs ~46% when the first click is wrong [moderate; widely cited, single research program].
- Use for: nav labels, homepage/landing layouts, icon comprehension.
- n ≈ 30–50+ for heatmap stability.

## 11. Five-second tests

- Show design 5 seconds, then ask: "What is this page/app for?", "What can you do here?", "What do you remember?", "Who is it for?"
- Use for: landing pages, value proposition clarity, visual hierarchy, brand impression.
- Supporting evidence: people form aesthetic judgments of web pages in ~50 ms, and these first impressions are fairly stable (Lindgaard et al., *Behaviour & Information Technology*, 2006) [moderate].
- Don't use for: task flows, dense tools, anything requiring reading.

## 12. Concept and preference testing

- Show 2–3 meaningfully different directions; ask people to use them on a task, *then* ask preference and why.
- Preference often diverges from performance (users can prefer the design they performed worse on) [moderate, e.g. Nielsen & Levy, CACM, 1994 found preference and performance correlated but imperfectly].
- Desirability: Microsoft Product Reaction Cards (Benedek & Miner, 2002): 118 adjectives, users pick 5 [moderate as practice].
- Fake-door / painted-door test: a real entry point to an unbuilt feature to measure demand. **Ethics:** tell users immediately it isn't available yet, offer to notify, never take payment, and keep exposure small.

## 13. Analytics-driven qual (for large products)

The fastest discovery loop in mature products:
1. Funnel/retention analytics spot **where** (step with abnormal drop-off).
2. Session recordings / heatmaps show **what** (rage clicks, dead clicks, backtracking).
3. Support tickets / app reviews give **user words**.
4. 5-user test confirms **why** and validates the fix.
5. A/B test measures **how much**.

## 14. Synthesis

- **Atomic research nuggets:** observation + evidence (quote/clip) + tags (segment, journey step).
- **Affinity mapping** bottom-up into themes; name themes as user needs, not features.
- **Separate observation → insight → recommendation.** Observation: "4/6 participants didn't find export." Insight: "Export lives where users don't look when they're done with a doc." Recommendation: "Surface export in the completion moment; test."
- Report counts with denominators ("4 of 6"), never percentages for small n.
- Every finding gets a **severity** (see heuristics file) and **confidence** (how many sources).
- Deliver: top 3–5 findings, each with evidence, severity, recommendation, owner. Long reports go unread.

## 15. Ethics & consent

Informed consent, right to stop, data minimization, recording consent, pay fairly for time, protect PII in clips, extra care with minors and vulnerable users. Never deceive participants beyond what's required for validity, and debrief if you did.

## Anti-patterns
- Asking users to design the solution ("What features do you want?").
- Using a 5-user test to claim "80% of users...".
- Running a survey before you know what to ask.
- Recruiting only power users / employees / friends.
- Validating instead of learning: designing the study so the favorite wins.
- Treating focus groups as usability research.
