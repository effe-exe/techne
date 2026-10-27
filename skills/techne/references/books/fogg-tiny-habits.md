---
title: "Tiny Habits: The Small Changes That Change Everything"
author: "BJ Fogg"
year: 2019
domains: [psychology, behavior-design, onboarding, retention]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: medium
---

# Tiny Habits — BJ Fogg

Use this when: designing onboarding or a feature meant to become a routine (logging, saving, practicing, journaling, reviewing); choosing the first action to ask of a new user; deciding where in an existing routine a new behavior should attach; writing in-product "celebration" or success feedback; helping users build a habit they themselves chose, with no dark patterns.

Basis note: the book (Houghton Mifflin Harcourt, 2019/2020) is not free. These notes use Fogg's own free material: his TEDxFremont talk "Forget big change, start with a tiny habit" (2012) and TEDxMaui talk "Tiny surprises for happiness and health" (both read via their published subtitle transcripts), a long NPR Life Kit interview about the book (2020, transcript and edited Q&A), his sites tinyhabits.com (method, free 5-day program, resources including the "Swarm of Behaviors" worksheet), behaviormodel.org (Motivation, Ability, Prompts pages) and bjfogg.com. The Fogg Behavior Model paper itself is distilled separately in `fogg-behavior-model.md`; this file is about the habit method. Book-only tools (detailed exercises, the full Behavior Design steps, troubleshooting, untangling bad habits, group change) are not covered.

## The big idea (3 sentences)
Lasting change is a design problem, not a motivation or willpower problem: motivation fluctuates, so a habit must be so small that it happens even on a bad day. The method has three parts: shrink the behavior until it is tiny, attach it right after an existing routine (the "anchor") so the routine is the prompt, and immediately create a positive feeling ("celebration"), because Fogg holds that emotions, not repetition counts, wire in habits. Tiny habits then grow naturally and change how people see themselves, which spreads to bigger behaviors.

## Core concepts
- **B = MAP, applied to habits** — behavior happens when motivation, ability and a prompt meet at the same moment (see `fogg-behavior-model.md`). Tiny Habits sets ability very high and motivation requirements very low, then solves the prompt with an anchor.
- **Three paths to long-term change** (NPR) — an epiphany (cannot be designed), changing the environment (reliable but hard, especially the social one), or tiny incremental habits (reliable, designable).
- **Motivation wave** — when motivation is high people will do hard things; when it drops they only do easy things. Plan the habit for the trough, and use peaks for one-time hard actions (behaviormodel.org).
- **Ability as simplicity; three ways to raise it** — train people (hard path, avoid), give a tool or resource, or scale the behavior back (Fogg's preferred route). Simplicity depends on the scarcest resource at that moment: time, money, physical effort, mental effort, routine (behaviormodel.org; its page lists five factors).
- **Tiny behavior** — the smallest version that still points at the goal: floss one tooth, two push-ups, read one paragraph, three calming breaths, tidy one item. Doing more is "extra credit", not the new bar.
- **Anchor and recipe** — "After I [existing routine], I will [tiny behavior]." The anchor should happen as often as you want the new behavior. Fogg's discovery was "after": existing behaviors are better prompts than notes or alarms.
- **Celebration** — right after doing it, produce a genuine feeling of success (a fist pump and "Awesome!", a phrase, a song in your head). Fogg's claims: "emotions create habits"; repetition correlates with habit strength but does not cause it; "21/30/66 days" is a myth.
- **Design for behaviors, not outcomes** — "lose weight" or "reduce stress" are outcomes; list many specific behaviors that lead there (the *Swarm of Behaviors* worksheet: an aspiration in the middle, candidate behaviors around it), then pick ones you can and want to do.
- **Pick behaviors you want, not ones you think you should** — for early practice; "should" behaviors come later, once the skill is built.
- **Revise, don't blame** — if a habit doesn't stick, move it to a different anchor or shrink it, like moving a chair to another spot in a room. It is "a design challenge, not a motivation challenge" (TEDxMaui).
- **Behavior change is a skill** — the more habits you create, the better you get; practise in the right way, playfully and without perfectionism (he blames William James's "never suffer an exception" for all-or-nothing thinking).
- **Growth and identity** — tiny habits grow on their own ("plant a tiny seed in the right spot") and shift identity ("I'm the kind of person who reads"), which spreads to related behaviors.
- **Behavior chains** (behaviormodel.org) — prompt a simple first behavior and let it open the door to harder ones (walk 10 minutes, then buy walking shoes). Fogg's showcase example is a Facebook re-engagement email; that same skill is what drives compulsive products.
- **Program data** (TEDxMaui) — Fogg reports a quarter-million habit data points from his free program; among 10,861 participants, 27% chose the "It's going to be a great day" morning habit, which in a sample of the last 1,000 graduates was the habit that became most automatic, about three times the automaticity of a bedtime gratitude habit that 30% chose.

## Actionable heuristics for product design
- When designing the first action of onboarding, make it the tiny version of the core behavior (log one item, save one dollar, write one sentence, practise one minute), not a setup tour, because low-motivation days decide whether the behavior survives.
- When asking for a recurring behavior, attach it to something users already do in or around the product (after opening the app for X, after finishing a lesson, after a payment lands, after the morning alarm) and phrase the suggestion as a recipe: "After you ..., do ...".
- When users opt in to reminders, let them choose the anchor moment, and taper reminders as the routine takes over, because durable habits run on context, not notifications (see Wood).
- When a user completes the tiny behavior, give immediate, sincere, proportionate success feedback in the moment, not a delayed badge or a weekly digest, because the feeling right after the act is the mechanism Fogg relies on.
- When a user does more than the minimum, record it as extra credit without raising tomorrow's bar automatically; let users raise goals themselves.
- When a user misses a day, avoid "streak broken" shame; offer the tiny version again and let them pick a new anchor, because Fogg's method treats failure as a fit problem and all-or-nothing framing ends habits.
- When defining success metrics, measure the behavior (did the tiny action happen after the anchor?) and its automaticity (sessions not started by a notification) rather than only outcomes, which lag and have many causes.
- When stakeholders want "more motivation" (incentives, urgency, gamified pressure) to fix retention, first make the behavior smaller and better anchored; spend motivation peaks on one-time hard steps (setup, import, purchase).
- When choosing which habits to suggest, offer defaults that are easy, fit an obvious moment, and feel good (Fogg's "great day" habit beat a popular gratitude habit on automaticity), and let users swap in their own.
- When building behavior chains, use them only for behaviors the user chose and benefits from; Fogg's Facebook example shows the same technique driving engagement for the company's goal (see `references/psychology/behavior-ethics-dark-patterns.md`).

## Evidence & caveats
- The method rests on Fogg's coaching and his free online program's self-reported data, not on published controlled trials; we found no randomised trial of Tiny Habits by Fogg. The program data have obvious selection, survivorship and self-report problems, and "most automatic" was judged from participants' own reports.
- "Emotions create habits" and "repetition doesn't cause habits" go against the main habit literature: Lally et al. (2010) and Wood & Neal find that repetition in a stable context, with action-specific reward, builds automaticity over weeks to months (`good-habits-bad-habits-wood.md`). Fogg is right that "21 days" is a myth, but his alternative is a claim, not a finding. Treat celebration as a plausible, cheap reinforcer, not a proven cause.
- Starting small, implementation intentions ("after X, I will Y"; Gollwitzer's if–then planning, which Fogg does not cite in these sources) and habit stacking on stable cues have independent research support. The anchor idea is the best-supported part of the method.
- The Fogg Behavior Model is a conceptual diagram without units (see `fogg-behavior-model.md`); Tiny Habits inherits that.
- Self-help claims ("change everything", "the puzzle is solved") are marketing; Fogg's own talk calls the claim controversial.
- Fogg's Persuasive Technology work and students shaped engagement-driven products; the techniques are neutral and must pass techne's ethics gate.

## Disagreements with other references
- `good-habits-bad-habits-wood.md`: Wood says repetition plus stable context builds habits and that reminders can impede automaticity; Fogg says emotion is the key and existing routines are the prompt. They agree on context cues and on dropping willpower. Trust Wood on the mechanism and timelines; use Fogg's recipe format as a practical way to create stable cues.
- `hooked-eyal.md` builds habits around triggers and variable rewards for the product's engagement; Tiny Habits targets behaviors the person wants, with immediate self-generated positive emotion. Prefer Fogg's framing when the habit serves the user, and apply the ethics files to both.
- `references/psychology/cognition-emotion-experience-habit.md` warns against streak shame and lists debunked effects (e.g. ego depletion); Fogg's anti-perfectionism agrees. His "willpower is not a reliable strategy" is compatible with the failed ego-depletion replications, but he does not rest on that literature.
- `references/data-driven/conversion-onboarding-activation-retention.md` measures activation and retention; use Tiny Habits to design the first repeated behavior, and those metrics to check whether it actually repeats.

## Best quotes (< 25 words each, max 5)
- "Plant a tiny seed in the right spot, and it will grow without coaxing." (TEDxFremont, 2012)
- "emotions create habits" (TEDxMaui; NPR 2020)
- "It's a design challenge, not a motivation challenge." (TEDxMaui)
- "Lower your expectations" (NPR Life Kit, 2020, quoting the book)
- "Behavior happens when Motivation, Ability, and a Prompt come together at the same time." (behaviormodel.org)

## Related
- `references/books/fogg-behavior-model.md`, `references/books/good-habits-bad-habits-wood.md`, `references/books/hooked-eyal.md`, `references/books/james-principles.md` (William James on habit)
- `references/psychology/cognition-emotion-experience-habit.md`, `references/psychology/behavior-persuasion-toolkit.md`, `references/psychology/behavior-ethics-dark-patterns.md`
- `references/data-driven/conversion-onboarding-activation-retention.md`
- Lally et al. (2010), "How are habits formed"; Gollwitzer (1999), implementation intentions; Clear, *Atomic Habits* (2018)

## Sources
- Fogg, B.J. (2012). "Forget big change, start with a tiny habit", TEDxFremont: https://www.youtube.com/watch?v=AdKUJxjn-R8 (English subtitles via TED's Amara team: https://amara.org/api/videos/WYTq4nrpmbhu/languages/en/subtitles/?format=txt)
- Fogg, B.J. "Tiny surprises for happiness and health", TEDxMaui (subtitles): https://amara.org/en/videos/MRoh1kHO5QjK/info/tiny-surprises-for-happiness-and-health-bj-fogg-tedxmaui/
- Godoy, M. (2020). "How to start a new habit: think small", NPR Life Kit (interview with Fogg): https://www.npr.org/2020/02/25/809256398/tiny-habits-are-the-key-to-behavioral-change ; transcript: https://www.npr.org/transcripts/809256398
- Tiny Habits official site: https://tinyhabits.com/ ; free 5-day program: https://tinyhabits.com/join/ ; resources: https://tinyhabits.com/resources/ ; Swarm of Behaviors worksheet: https://tinyhabits.com/wp-content/uploads/2022/01/TinyHabits-SwarmofBs-final.pdf
- Fogg Behavior Model site: https://behaviormodel.org/ (Motivation https://behaviormodel.org/motivation/, Ability https://behaviormodel.org/ability/, Prompts https://behaviormodel.org/prompts/)
- Author site: https://www.bjfogg.com/
