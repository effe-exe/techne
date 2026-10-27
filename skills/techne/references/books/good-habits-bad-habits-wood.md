---
title: "Good Habits, Bad Habits: The Science of Making Positive Changes That Stick"
author: "Wendy Wood"
year: 2019
domains: [psychology, behavior-design, retention, ethics]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: high
---

# Good Habits, Bad Habits — Wendy Wood

Use this when: you want a behavior (logging, saving, practicing, returning) to persist after the onboarding push or incentive ends; you are planning a redesign or migration that will break users' existing routines; someone proposes reminders, streaks, rewards or "more motivation" to fix retention; you want to help users break an unwanted habit (doomscrolling, overspending) without relying on willpower.

Basis: the trade book (Farrar, Straus & Giroux, 2019) was not read. It popularizes Wood's research program, and these notes rest on her own papers, hosted on her USC lab site. Read in full: Wood & Rünger 2016, "Psychology of Habit" (*Annual Review of Psychology*), and Wood & Neal 2016, "Healthy through habit" (*Behavioral Science & Policy*). Read in part (abstract, key results, discussion): Wood, Quinn & Kashy 2002 (diary studies, the ~43% figure); Wood, Tam & Witt 2005 (habit discontinuity after a university transfer); Verplanken & Wood 2006 (interventions to break and create consumer habits); Carden & Wood 2018 (habit formation and change); Wood, Mazar & Neal 2021 (habits and goals are separate but interacting systems); Mazar & Wood 2022 (people overlook habits when explaining their behavior); Mazar, Tomaino, Carmon & Wood 2021 (friction, cues and incentives for sustainability). Coverage of the science is high. Missing are the book's narrative examples, its personal advice chapters and any framings unique to the book.

## The big idea (3 sentences)
Much of daily behavior (about 43% of actions in diary studies) is habitual: repeated in stable contexts with little thought, because repetition with reward builds context–response associations in memory that fire automatically when the cue appears, largely independent of current goals or how much we value the outcome. That is why information, persuasion and changed intentions produce short spikes followed by relapse ("triangular relapse"): the old cues are still there and still trigger the old response, while new behaviors fade when the push or the predictable incentive stops. Lasting change therefore comes from designing context, not from willpower: repeat the new behavior in a stable context with the right rewards, reduce friction for the desired act, add friction to and remove cues for the unwanted one, and use life transitions when old cues are gone.

## Core concepts
- **Habit = learned context–response association** — a recurring cue (place, time, preceding action, people) activates the response in mind. Two defining features: it is triggered by context, and it is insensitive to short-term changes in goals or reward value (moviegoers with strong popcorn habits ate stale popcorn in the cinema but not in a meeting room).
- **Habits are the default; deliberation intervenes** — a "default-interventionist" dual-process view. Time pressure, distraction, stress, fatigue and low cognitive control tip behavior toward habit, good or bad.
- **Intentions predict rare actions, habits predict frequent ones** — meta-analysis (Ouellette & Wood 1998, 64 studies): intentions predicted occasional acts (flu shots) better than repeatable ones (seat belts). Webb & Sheeran 2006: changed intentions changed sporadic behaviors but not habit-prone ones.
- **Three components of habit formation** — (1) frequent repetition, (2) stable context cues, (3) rewards that are specific to the action. Interval or uncertain schedules support habit formation in animal research, while predictable payments tend to drive behavior only while they last.
- **Time to automaticity** — Lally et al. 2010: 18 to 254 days of daily repetition in the same context. Kaushal & Rhodes 2015: about six weeks of four gym visits a week. There's no "21 days".
- **Planning blocks habit formation** — choosing deliberately each time keeps behavior goal-directed, so making a decision each time keeps it from becoming automatic. Electronic reminders increased repetition but impeded automaticity in one study (Stawarz et al. 2015), and passive reminders lose power over time.
- **Habit discontinuity** — moving, changing jobs or schools removes old cues and opens a window to act on new intentions. Transfer students' exercise, TV and newspaper habits survived only if the specific cues survived. A free transit pass shifted car commuters only if they had moved home or job in the last three months.
- **Breaking habits** — cue disruption; environmental reengineering (add friction to the unwanted behavior, remove friction from the wanted one); vigilant monitoring ("don't do it", watching for slips), which works by boosting control, not by weakening the habit. Old habit traces stay in memory and reactivate under old cues, which is why relapse happens.
- **Self-control is mostly good habits** — people high in trait self-control resist temptation less often. They have habits that avoid temptations altogether.
- **People misattribute habits** — people with strong habits feel more certain their behavior is intended. In Mazar & Wood 2022 (N = 809 online, plus N = 112 in an ecological momentary assessment study), habit strength matched or beat inner states (mood, intentions) in predicting behavior, yet people explained behavior by inner states, even when paid for accuracy.
- **Habits feel good** — fluency and familiarity produce positive feelings, and switching costs make existing products preferred (consumers stick with old software rather than relearn after updates).
- **Habit slips** — when an intended action and a habit share context, the habit fires, especially under distraction (for example, clicking phishing emails out of habit).
- **Repetition builds acceptance** — in the sustainability paper, initially unpopular policies became accepted once people had repeated the behavior.

## Actionable heuristics for product design
- Decide first whether the target behavior should be a habit at all. Habits suit frequent, repeatable, stable-context actions (daily logging, weekly review, saving). For rare decisions (tax filing, travel booking) design for good deliberate choices, not routines.
- Anchor the new behavior to a stable cue that already exists in the user's day: a time, a location, or the end of an existing routine ("after you close the day's last meeting", "after brushing teeth"). Let users pick it, and show it back to them. Make the in-app action identical each time (same entry point, same steps), because consistency is what turns a cue into a trigger.
- Remove friction from the desired action (one tap from the cue, defaults pre-filled, no decisions required). Each forced choice brings deliberation back and slows automaticity.
- Make the reward specific to the action and immediate (visible progress, the useful output, a small surprise of real value), not a general badge or a temporal landmark. Don't make the habit depend on predictable payments: when they stop, behavior usually stops (the triangular relapse in Volpp, Charness & Gneezy and others).
- Treat reminders as scaffolding. Use them to get early repetitions, and taper them as the context cue takes over. Measure automaticity (performance without a prompt, e.g. share of sessions not started by a notification), not just activity while reminders run.
- Expect formation to take weeks to months. Plan onboarding and success metrics around 6–10 weeks of repetition, not a 7-day trial. Don't let one missed day reset everything (see `references/psychology/cognition-emotion-experience-habit.md` on streak freezes).
- When helping users break a habit, change the context, not the message: remove or hide the cue (no badge counts, no feed on launch), add real friction (an extra confirmation, a delay, a logged-out default), and make the alternative the frictionless default. Offer "don't do it" monitoring tools (usage limits, slip logs) as support, not as the main lever.
- Plan any redesign or migration as habit discontinuity. Existing users' cue–response chains will break: expect a short dip, keep the top actions where they were, and give clear new cues. Don't read early metrics from habituated users as a verdict (compare new-user cohorts).
- Use natural transitions as moments to help users form better habits: new device setup, plan change, new team or job, moving, the start of a school year. Offer the better routine then, when old cues are weakest.
- Don't trust users' explanations of their repeated behavior. Surveys asking "why do you open the app?" will over-report reasons and under-report habit. Measure context regularity (same time, same entry point) from behavioral data instead.
- Respect switching costs. Users stay with familiar flows because they feel fluent, so a "better" redesign must beat the felt ease of the old one. Offer a transition path and keep muscle-memory shortcuts.
- Don't use variable-reward schedules to make people compulsively check (feeds, loot, "pull to refresh" slot machines). Wood's own slot-machine example shows how strong they are. In techne they are allowed only for behaviors the user has chosen and benefits from (see the ethics files).

## Evidence & caveats
- **Core well supported:** context-cued habits, goal and outcome insensitivity, intentions predicting rare rather than frequent behavior, habit discontinuity, and the long, variable time to automaticity rest on animal learning, neuroscience, meta-analyses and field studies. Many key studies are correlational or self-report. Self-reported habit indices measure felt automaticity and may not reflect cue-triggered habit.
- **Ego depletion:** Wood & Rünger cite Vohs et al. 2005 ("when willpower was reduced by a taxing decision task, people fell back on habits"). The ego-depletion effect largely failed in large preregistered replications (Hagger et al. 2016). The broader claim that habits take over under load or distraction is better supported by dual-task and stress studies. Don't cite "willpower depletion" as a mechanism.
- **Wansink:** both papers cite Brian Wansink's eating-environment studies (Wansink & Payne 2012 buffet behaviors; Sobal & Wansink 2007). Many of Wansink's papers were retracted for data problems. Don't use those examples. Friction and accessibility effects on food choice are supported by other work (e.g. Hollands et al. reviews on proximity and availability).
- **Uncertain rewards:** the claim that "random-interval rewards build habits best" comes mainly from animal schedules. Wood & Neal note few health interventions have tested it in humans. It is moderately supported in theory and weak in applied human evidence, and it raises ethical issues.
- **The 43%** comes from two diary studies of mostly students (and a community sample with 47%). Treat it as an order of magnitude.
- **Mazar & Wood 2022** is preregistered with open data, a strong design. Its two studies concern helping and coffee drinking, so it generalizes to apps only by analogy.
- The trade book's anecdotes and advice weren't checked here. The papers are the safer citation.

## Disagreements with other references
- `references/books/fogg-behavior-model.md` and the Fogg/Hooked sections of `references/psychology/behavior-persuasion-toolkit.md` put the prompt (trigger) at the center. Wood's evidence is that external prompts help repetition but can impede automaticity, and that durable habits run on context cues without prompts. Trust Wood for long-term habit claims and Fogg for diagnosing why a one-off behavior isn't happening.
- `references/psychology/cognition-emotion-experience-habit.md` §8 already summarizes Wood, Lally and habit discontinuity consistently with this file, and lists ego depletion among debunked effects. This file adds the friction, cue-disruption and vigilant-monitoring toolkit and the misattribution finding.
- `references/psychology/behavior-ethics-dark-patterns.md` and `references/future/ai-ethics-law-and-wellbeing.md` restrict engineered compulsion. Wood's slot-machine and email examples describe the mechanism neutrally. techne's ethics gate decides when it may be used.
- `references/books/paying-not-to-go-to-the-gym.md` (DellaVigna & Malmendier) fits Wood's account: people overestimate future attendance because intentions don't predict repeated behavior.

## Best quotes (< 25 words each, max 5)
- "Habits form best when rewards are powerful enough to motivate behavior but are uncertain in the sense that they do not always occur." (Wood & Neal 2016)
- "Difficulties in changing established behavior patterns do not reflect people's continuing desire to perform the old behavior or a failure of willpower." (Wood & Rünger 2016)
- "Habit strength outperformed or matched inner states in predicting behavior, but participants' explanations of their behavior emphasized inner states." (Mazar & Wood 2022)

## Related
- `references/psychology/cognition-emotion-experience-habit.md` (§8 habit formation, streaks, redesign dips), `references/psychology/behavior-persuasion-toolkit.md`
- `references/books/fogg-behavior-model.md`, `references/books/paying-not-to-go-to-the-gym.md`, `references/books/james-principles.md` (James on habit)
- `references/data-driven/conversion-onboarding-activation-retention.md`, `references/process/redesign-and-scale.md`
- `references/psychology/behavior-ethics-dark-patterns.md`
- Books: Lally et al. 2010 (*European Journal of Social Psychology*); Verplanken (ed.), *The Psychology of Habit* (2018)

## Sources
- Wood, W., & Rünger, D. (2016). Psychology of habit. *Annual Review of Psychology*, 67, 289–314. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/wood.runger.2016.pdf
- Wood, W., & Neal, D. T. (2016). Healthy through habit. *Behavioral Science & Policy*, 2(1), 71–83. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Wood.Neal_.2016.pdf
- Wood, W., Quinn, J. M., & Kashy, D. A. (2002). Habits in everyday life. *JPSP*, 83, 1281–1297. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Wood.Quinn_.Kashy_.2002_Habits_in_everyday_life.pdf
- Wood, W., Tam, L., & Witt, M. G. (2005). Changing circumstances, disrupting habits. *JPSP*, 88, 918–933. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Wood.Tam_.GuerreroWitt.2005_Changing_circumstances_disrupting_habits.pdf
- Verplanken, B., & Wood, W. (2006). Interventions to break and create consumer habits. *Journal of Public Policy & Marketing*. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Verplanken.Wood_.2006_changing_and_breaking_consumer_habits.pdf
- Carden, L., & Wood, W. (2018). Habit formation and change. *Current Opinion in Behavioral Sciences*, 20, 117–122. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Carden.Wood_.2018.pdf
- Wood, W., Mazar, A., & Neal, D. T. (2021). Habits and goals in human behavior: Separate but interacting systems. *Perspectives on Psychological Science*. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Wood.Mazar_.Neal_.2021.pdf
- Mazar, A., & Wood, W. (2022). Illusory feelings, elusive habits. *Psychological Science*, 33(4), 563–578. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2024/03/mazar-wood-2022-illusory-feelings-elusive-habits-people-overlook-habits-in-explanations-of-behavior-1.pdf
- Mazar, A., Tomaino, G., Carmon, Z., & Wood, W. (2021). Habits to save our habitat. *Behavioral Science & Policy*. https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2024/01/mazar.tomaino.carmen.wood_.2021.pdf
- Author's lab and book page: https://dornsife.usc.edu/wendy-wood/ and https://dornsife.usc.edu/wendy-wood/good-habits-bad-habits/
- Downloads saved under books/free/good-habits-bad-habits/
