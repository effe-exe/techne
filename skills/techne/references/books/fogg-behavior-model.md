---
title: "A Behavior Model for Persuasive Design"
author: "BJ Fogg"
year: 2009
domains: [psychology, behavior-design, persuasion, conversion]
evidence: "weak"
---

# A Behavior Model for Persuasive Design — BJ Fogg

Use this when: a funnel step, feature or habit isn't happening and you need to work out whether motivation, ability or the prompt is missing; you are choosing what kind of notification, nudge or call to action to send; a stakeholder wants to "add motivation" (incentives, urgency, gamification) to fix a step that is actually hard to do.

Source: author-linked PDF of the Persuasive '09 conference paper (7 pages; linked from Stanford Behavior Design Lab's resource page, https://behaviordesign.stanford.edu/resources/fogg-behavior-model), read in full. Also read the start URL https://behaviormodel.org/ and its Motivation, Ability, Prompts, References, About and Learn pages (2026 versions). The paper uses "trigger"; the site renamed it "prompt" in late 2017. Both terms mean the same thing below.

## The big idea (3 sentences)
A behavior happens only when three things meet at the same moment: enough motivation, enough ability, and a prompt. Motivation and ability trade off (a very easy behavior needs little motivation, and a very motivated person will push through difficulty), but both must be above zero, and without a prompt nothing happens even when both are high. Persuasive design therefore usually succeeds faster by making the behavior simpler and well-timed than by adding motivation, because people resist being motivated but like simplicity.

## Core concepts
- **B = MAP (paper: motivation, ability, trigger)** — all three must be present at once. "Persuasion" here means changing behavior, not attitudes.
- **The plane and the activation threshold** — motivation on the vertical axis, ability on the horizontal, no units. A curved activation threshold runs from top-left to bottom-right; above it, a prompt produces the behavior, below it, the prompt fails. The paper says plainly that the figure is conceptual, not measured.
- **Compensation** — high ability can rescue low motivation (a new car for $1), and very high motivation can rescue low ability (someone who can't do the math puzzle phones a neighbor to get a $10,000 reward). Most real users sit in the middle, where both can be moved.
- **Three core motivators, each with two sides:** pleasure/pain (immediate, little thinking), hope/fear (anticipation; fear is often of loss), social acceptance/rejection. Fogg does not rank them. He calls hope probably the most ethical and empowering of them.
- **Ability = simplicity, six links in a chain:** time, money, physical effort, brain cycles, social deviance (going against norms), non-routine. If any link breaks, the behavior is no longer simple. (The 2026 site's Ability page says "five factors"; the paper lists six.)
- **Scarcest resource** — simplicity depends on whatever the person is shortest of at the moment of the prompt (no time, no wallet with you). Each person has a different "simplicity profile", and it changes with context.
- **Three prompt types:** *spark* (prompt + motivator, for low motivation), *facilitator* (prompt that also says or makes it easy, for high motivation but low ability), *signal* (a plain reminder, for people already motivated and able). The wrong type backfires: a spark or facilitator sent to someone who only needed a signal feels annoying or condescending.
- **What a prompt needs to work:** the user notices it, links it to the target behavior, and gets it at a moment when they are motivated and able. Timing (kairos) is often the missing piece.
- **Poorly timed prompts** — prompts sent to low-motivation users become noise (spam, pop-ups, beeps); prompts sent to motivated users who can't act cause frustration.
- **Prevention** — to stop a behavior, remove one factor: reduce motivation, take away ability, or remove prompts. Fogg notes prevention is harder than causing a behavior.
- **Behavior chains (site)** — a tiny first behavior can lead naturally to harder ones (walk 10 minutes, then buy walking shoes). The site's worked example is Facebook's re-engagement email, which deep-links a lapsed user into "Find people you know".
- **Motivation wave (site, 2012 keynote)** — when motivation peaks, people will do hard things; when it falls, they only do easy ones.
- **Prompt-behavior coupling** — interactive technology lets people act the moment they are prompted (tap the email link), which is why prompts matter more than in print or TV, and why mobile and context-aware prompts will matter even more.

## Actionable heuristics for product design
- When a target behavior underperforms (the paper's example is 1 in 200 visitors signing up), check the three factors separately before redesigning: was there a prompt at the right moment, can the user do it right now, and do they want to. Fix them in the order prompt, ability, motivation, because the first two are cheaper and more durable.
- When users are motivated but not completing, increase ability by making the behavior smaller or giving a tool (1-click purchase, address-book import), not by adding tutorials, because Fogg's claim is that products that require learning new things routinely fail.
- When diagnosing ability, name the scarcest resource for this segment at the moment of the prompt: time (a 100-field form), money, physical effort, thinking, social awkwardness, or unfamiliarity. Fix that link first; improving the others won't help while it is broken.
- When the behavior requires going against a social norm (sharing health data, posting publicly, asking a colleague), treat that as a hard ability problem, not a motivation problem, and offer a private or default-normal path.
- When users are both motivated and able (returning power users, people who asked for a reminder), send a plain signal: a badge, a reminder at their chosen time. Don't add hype or how-to copy, because it reads as condescending.
- When users want the outcome but find it hard, use a facilitator: say why it's easy ("one tap", "takes 30 seconds") and make it true in the same message, as software-update prompts do.
- When motivation is low, a prompt alone becomes spam. Either pair it with an honest motivator (a real benefit, a real person waiting) or don't send it. Ration sparks most of all on mobile, where Fogg predicts users tolerate signals and facilitators but resent sparks.
- When you send a prompt by email or push, deep-link to the exact next action, not the home screen, because the behavior has to be doable the moment the prompt is noticed.
- When designing a multi-step flow, map it as a chain and ask for the smallest first step ("click here"), not the big goal ("connect with 20 friends"). Pack one request per prompt; Fogg calls cramming several asks into one prompt a common mistake.
- When motivation is predictably high (right after signup, purchase or a first success), that is the moment to ask for the harder setup step; at low-motivation moments, ask only for easy things (motivation wave).
- When choosing a motivator, prefer hope (what the user gains) over fear or pain. If you use loss or social rejection, run it through the ethics gate in `references/psychology/behavior-ethics-dark-patterns.md` first.
- When users ask for help stopping a behavior (screen time, spending, notifications), apply the prevention rule: remove the prompt (mute, batch), reduce ability (an extra confirm step, cooling-off delay), and design these as user-controlled settings.
- When you redesign a routine flow, remember that "non-routine" is one of the six ability links: a moved control lowers ability for every habitual user, even if the new design is simpler on paper.
- When you analyze a competitor's or a famous product's flow, parse it into motivation, ability and prompt (the paper's suggested use) to see which factor is doing the work, then copy the mechanism, not the surface.
- When a prompt depends on the user's routine rather than your message (opening the app at breakfast), protect the routine: keep the entry point and first action stable, because routine is itself one of the ability links.

Quick diagnosis grid (this note's summary of the paper):

| Situation | Missing factor | Prompt type to use | Main design move |
|---|---|---|---|
| Wants it, finds it hard | Ability | Facilitator | Shrink the step, remove the scarcest-resource cost |
| Could easily, doesn't care | Motivation | Spark (honest) or none | Real benefit, real social context; else don't prompt |
| Wants it, can do it, forgets | Prompt | Signal | Well-timed reminder at the point of action |
| Neither | Both | None | Rethink the target behavior or the audience |

- When a team argues about why a feature works, use the three factors as the shared vocabulary for the debate (the paper's own claimed benefit), then test the hypothesis it produces. The model generates hypotheses; it doesn't settle them.

## Evidence & caveats
- The paper contains no data, no experiment and no validation. It is a conceptual framework that Fogg says he is sharing early to get feedback. The curve, the threshold and the trade-off are illustrations, and the axes have no units.
- The claims that the model is universal (site) and that people are fundamentally lazy (paper) are assertions. The six simplicity factors and three motivator pairs are Fogg's own taxonomy; he says other models exist and he simply finds his own the most useful.
- It is widely cited (the site counts 1,900+ citing papers), but most citing work uses it as a design lens rather than testing it. The website is mainly a sales funnel for Fogg's paid training and book, so its claims of a proven system are marketing, not evidence.
- Ability-first is consistent with stronger evidence elsewhere (friction reduction, defaults), so the main prescription holds up better than the model's precise structure.
- Ethically dated: both the paper and the site hold up Facebook's prompt-driven re-engagement as the best practice ("No one uses Prompt better than Facebook"), and the site describes the goal of the chain as making Facebook a daily habit, perhaps an obsession. Treat that as a cautionary example of attention extraction, not a template.
- Many related models are listed on the site (Bandura, ELM, Fishbein & Ajzen, Prochaska, Self-Determination Theory). Fogg separates his model from attitude-change models; he does not compare their predictive power.

## Disagreements with other references
- `references/psychology/behavior-persuasion-toolkit.md` §1 matches the paper on prompt types and the six ability factors and rates it [moderate] as a design heuristic. Having read the paper, it is [weak] as science: there are no data at all. Keep [moderate] only for "fix ability before motivation", which other evidence supports.
- The toolkit lists "mental effort (cognitive load)" as a factor; the paper's term is "brain cycles". Same idea. Pair it with `references/psychology/cognition-memory-cognitive-load.md` when you need measurable versions.
- `SKILL.md` §2 says "Fix ability before adding motivation (Fogg B=MAP)… always ethical." Fogg agrees on ability first, but his own examples (Facebook's re-engagement chain) show that simplifying and well-timed prompts can also serve compulsive use. Ability work is low-risk, not automatically ethical: still run the ethics gate when the target behavior is "more engagement".
- `references/psychology/cognition-emotion-experience-habit.md` §8 treats Fogg and Hooked as practitioner frameworks with habit science (Wood, Lally) as the evidence base. Agree: use Fogg for diagnosis vocabulary and the habit literature for claims about how long change takes.

## Best quotes (< 25 words each, max 5)
- "Increasing motivation is not always the solution. Often increasing ability (making the behavior simpler) is the path for increasing behavior performance."
- "Simplicity is a function of a person's scarcest resource at the moment a behavior is triggered."
- "People often resist attempts at motivation, but we humans naturally love simplicity."
- "In my view, hope is probably the most ethical and empowering motivator in the FBM."

## Related
- `references/psychology/behavior-persuasion-toolkit.md` (§1 Fogg, §2 Hooked and critiques)
- `references/psychology/behavior-ethics-dark-patterns.md` (run before using fear, social rejection or engagement prompts)
- `references/data-driven/conversion-onboarding-activation-retention.md` (push permission, re-engagement, activation)
- `references/psychology/cognition-emotion-experience-habit.md` (§8 habit formation evidence)
- `references/books/james-principles.md` (habit chains, launching new habits)
- Fogg, *Tiny Habits* (2019): the book-length version the site points to; not read for this note.
