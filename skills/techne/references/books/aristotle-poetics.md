---
title: "Poetics"
author: "Aristotle (trans. S. H. Butcher)"
year: -335
domains: [masters, narrative, flow, copy, onboarding, critique]
evidence: "weak"
---

# Poetics — Aristotle

Use this when: you are shaping a multi-step experience that should feel like one coherent arc (onboarding, a first session, checkout, a product demo, a case study, a launch video); you are deciding what to cut from a flow or a story; you are writing UI copy or brand voice and need the line between "clear" and "flat"; you are judging whether a flashy visual effect is carrying the experience or covering for a weak structure.

Source: http://classics.mit.edu/Aristotle/poetics.html (Internet Classics Archive, S. H. Butcher translation; plain-text file `poetics.mb.txt`). Read in full: all 26 parts, including the grammar chapters (XX–XXI) and the critical-problems chapter (XXV). The treatise is incomplete (the promised discussion of comedy is lost) and some passages are corrupt in the manuscript tradition.

## The big idea (3 sentences)
All the arts are forms of imitation (mimesis), and people take pleasure in imitation because recognizing and inferring ("that is he") is a form of learning. Tragedy, the form Aristotle analyzes most closely, succeeds mainly through its plot, the arrangement of incidents into one complete action with a beginning, a middle and an end, where each event follows from the previous one by probability or necessity, and reversals and recognitions arise from that structure rather than from chance or spectacle. Character, thought, diction, song and spectacle matter in descending order; style should be clear without being commonplace, and every element must earn its place in the whole.

## Core concepts
- **Six parts, ranked** — plot (the "soul"), character, thought, diction, song, spectacle. Spectacle is the least artistic and depends more on the stage machinist than on the poet. The power should survive a plain reading.
- **Plot over character** — action comes first and character serves it. A string of well-written speeches without a constructed plot produces the effect less well than a rough play that has one. Novices master diction and portraiture before they can build a plot.
- **A whole: beginning, middle, end** — a beginning needs nothing before it; an end follows from what came before and needs nothing after; a middle follows something and leads to something. A plot must not begin or end at random.
- **Magnitude and order** — beauty needs both. Too small and it is perceived in an instant; too large and the whole can't be taken in. The right length is one that can be "embraced by the memory", long enough to allow a change of fortune.
- **Unity of action, not of hero** — one character's many adventures are not one action. Homer left out episodes with no necessary link. Test: if removing or moving a part makes no visible difference, it is not an organic part.
- **Episodic plots are the worst** — episodes that follow one another without probable or necessary sequence; good poets fall into this when stretching a piece to please performers.
- **Universal over particular** — poetry shows what a kind of person would probably do, which makes it "more philosophical" than history, which records what one person did.
- **Surprise that follows from cause** — fear and pity are strongest when events surprise us and yet follow as cause and effect; even coincidence works best when it looks designed. Propter hoc, not post hoc.
- **Reversal (peripeteia) and recognition (anagnorisis)** — reversal: the action turns into its opposite (the messenger brings cheer and causes ruin). Recognition: a change from ignorance to knowledge. Best when they coincide and arise from the incidents themselves.
- **Ranking of recognitions** — worst: by signs and tokens (scars, necklaces) or announced by the author's fiat; middle: by memory or by reasoning; best: arising naturally from the events.
- **Complication and unraveling** — everything up to the turning point, then everything after it. Many poets tie the knot well and unravel it badly; both must be mastered.
- **No deus ex machina** — the resolution must come out of the plot itself, not from an external device. Irrational elements should be kept outside the action.
- **Probable impossibilities over improbable possibilities** — what convinces is internal plausibility, not literal possibility.
- **Character: good, appropriate, true to life, consistent** — even an inconsistent character must be "consistently inconsistent".
- **Visualize the scene** — the poet should put the scene before his eyes as a spectator would, to catch inconsistencies (a play failed because the author never pictured an entrance).
- **Outline first, then episodes** — sketch the general plan (Aristotle reduces the *Odyssey* to five sentences), then fill in episodes and check each is relevant.
- **Diction: clear without being mean** — current words give clarity but can be flat; rare words and metaphor lift style, but a style made only of them becomes riddle (all metaphor) or jargon (all strange words). Command of metaphor, "an eye for resemblances", matters most.
- **Elaborate style only in the pauses** — over-brilliant diction obscures character and thought; save flourish for moments with no action.
- **Concentration beats dilution** — tragedy is superior to epic partly because a concentrated effect pleases more than one spread over a long time; sameness of incident produces satiety.
- **Judge by the art's own end** — critics should ask whether an "error" serves the work's purpose, and consider who says it, to whom, when and why, before condemning it.

## Actionable heuristics for product design
- When designing onboarding or a first session, write its plot as one sentence with a single action ("a new user connects their bank and sees this month's spending") and cut any step that doesn't serve that action, because unity of action means every part must change the whole if removed.
- When a flow is a sequence of feature tours or tips with no dependency between them, treat it as an episodic plot and rebuild it so each step produces something the next step uses (data entered → result shown → next decision), because episodes without probable sequence are what Aristotle ranks worst.
- When auditing a flow, apply the removal test: delete or reorder each step in a prototype; if users don't notice and outcomes don't change, the step is not an organic part, so remove it.
- When sizing a flow, keep the whole arc short enough that a user can hold the beginning and the end in mind at once (show progress, name the goal up front), because beauty and comprehension need a magnitude that can be "embraced by the memory".
- When planning the "aha" moment, make the recognition come from the user's own action and data (their first report, their own photo enhanced), not from a token like a confetti animation or a badge, because recognition by signs is the least artistic kind and recognition arising from the incidents is the best.
- When the experience's value depends on a turn (before/after, problem/solution), place a clear turning point in the middle and design the unraveling as carefully as the setup, because many makers "tie the knot well" and then end weakly; pair with the peak-end findings in `references/psychology/cognition-emotion-experience-habit.md`.
- When a flow ends, design the end state explicitly: what was done, what happens next, and nothing that demands a further step, because an end "has nothing following it"; a flow that simply stops leaves the arc incomplete.
- When a problem is solved by an external rescue (a support chat popping up, a modal that resets state, a "something went wrong, start over"), redesign so recovery comes from within the flow (inline correction, saved progress), because a deus ex machina resolution signals a broken structure.
- When you are tempted to carry an experience with motion, 3D, video or illustration, first check that the flow works as a plain wireframe or as a text walkthrough, because the effect should be felt "even apart from representation"; spectacle is least connected to the craft.
- When demo data, sample content or marketing scenarios are needed, choose cases that are typical and plausible for the target user rather than exotic but technically possible ones, because probable impossibilities convince better than improbable possibilities and poetry aims at the universal.
- When writing personas, scenarios or case studies, describe what a kind of person would probably do in a situation (the universal) and keep the incidental facts (one interviewee's quirks) for evidence, not for the design target.
- When writing UI copy, default to current, plain words and allow one distinctive word or metaphor per surface at most, because all-plain is "mean", all-metaphor is a riddle and all-unusual is jargon; check labels and buttons stay literal.
- When adding brand voice flourishes, put them in pauses (empty states, success screens, loading moments) and keep them out of task-critical copy (errors, forms, payment), because over-brilliant diction obscures the action.
- When building a product persona or AI assistant voice, check four properties: its intent is good, the tone fits the role, it behaves like a believable agent, and it is consistent across surfaces, because Aristotle's character rules (good, appropriate, true to life, consistent) map directly onto voice guidelines.
- When storyboarding a flow, literally walk through it as the user (or run it in a prototype at real size) before handing off, because the poet who did not visualize the scene shipped an inconsistency the audience caught at once.
- When starting a new flow, write a five-sentence outline of the whole journey before designing any screen, then fill in screens and check each against the outline, as Aristotle does with the *Iphigenia* and the *Odyssey*.
- When stretching a product launch, video or tutorial to hit a length target, cut instead, because concentrated effect pleases more than diluted effect and padding is how good makers end up episodic.
- When critiquing someone's work, ask what it was trying to achieve and for whom before listing faults, and separate errors of craft (it fails its own aim) from accidental errors (a wrong technical detail), because Aristotle ranks the former as more serious.

## Evidence & caveats
- This is a philosophical treatise on Greek drama and epic, not research on interfaces. Every product translation above is our analogy; treat it as a lens, not evidence.
- Some ideas line up with later empirical work: pleasure in recognition and inference resembles findings on processing fluency and the "aha" effect; concentration over dilution and the importance of endings rhyme with peak-end and duration-neglect research (Kahneman and others; see `references/psychology/cognition-emotion-experience-habit.md`). That convergence is suggestive, not confirmation of Aristotle.
- "Catharsis" appears once ("through pity and fear effecting the proper purgation of these emotions") and its meaning is contested by scholars. Don't build design arguments on it.
- Several claims are of their time: the ranking of women and slaves in Part XV, the preference for unhappy endings, the claim that tragedy should involve only a few noble families. Ignore these.
- The text is incomplete and partly corrupt; the Butcher translation (1895) uses older English. Quotes here follow that translation.
- Narrative framing can be overused: most utility tasks (forms, settings, tax filing) should have no reversals or suspense.

## Disagreements with other references
- `references/masters/master-lenses.md` (Aristotle, Poetics) says "catharsis resolves tension" and lists catharsis as a core model alongside reversal and recognition. The text gives catharsis one contested clause; the structural tools are unity, complication/unraveling, reversal and recognition. Prefer "complication and unraveling" when talking about tension and resolution in a flow.
- `references/masters/master-lenses.md` equates recognition with the product "aha" moment. That fits, with one refinement from the text: recognition through tokens (badges, celebratory animations) is the weakest kind, so an "aha" manufactured by UI decoration is worse than one the user reaches through their own data.
- Plot-first ranking supports techne's "design is how it works; start from the job, then pixels" (`SKILL.md` §2 Craft) and conflicts with treating visual polish as the lead deliverable, as in Dribbble-style work criticized under Vitruvius in `references/masters/master-lenses.md`. Aristotle and Vitruvius disagree in emphasis: Vitruvius makes delight co-equal with firmness and use; Aristotle ranks spectacle last. For functional surfaces follow Aristotle; for brand moments, Vitruvius' balance.
- `references/books/magic-ink.md` (Victor) argues information software should minimize interaction and narrative steps entirely. Use Poetics for experiences that are inherently sequential (first-run, learning, purchase), Magic Ink for views whose job is to answer a question at a glance.
- On diction, the Poetics' "clear without being mean" is looser than plain-language guidance in `modes/copy.md` and `references/interaction/accessibility.md`. For task-critical text, plain language wins; reserve Aristotle's "infusion" of unusual words for brand and marketing surfaces.

## Best quotes (< 25 words each, max 5)
- "The plot, then, is the first principle, and, as it were, the soul of a tragedy."
- "Of all plots and actions the episodic are the worst."
- "For a thing whose presence or absence makes no visible difference, is not an organic part of the whole."
- "The perfection of style is to be clear without being mean."
- "The poet should prefer probable impossibilities to improbable possibilities."

## Related
- `references/masters/master-lenses.md` (Aristotle Poetics and Rhetoric lenses; Vitruvius)
- `references/masters/timeless-principles.md` (unity of purpose; one strong idea)
- `references/psychology/cognition-emotion-experience-habit.md` (peak-end, endings)
- `references/process/states-and-edge-cases.md` (completion and error recovery states)
- `references/books/aristotle-rhetoric.md` (the companion treatise on persuasion, to which Poetics defers on "thought")
- `references/books/aristotle-memory.md`
