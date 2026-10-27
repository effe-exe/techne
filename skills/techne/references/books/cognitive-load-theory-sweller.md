---
title: "Cognitive Load Theory"
author: "John Sweller, Paul Ayres, Slava Kalyuga"
year: 2011
domains: [psychology, interaction]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# Cognitive Load Theory — Sweller, Ayres & Kalyuga

Use this when: you are designing onboarding, tutorials, help, empty states, AI explanations or any surface where people must *learn* something new; deciding when to show guidance and when to fade it for experienced users; choosing between video, text, diagrams and voice for instructions; a screen asks users to combine information from several places; you need a defensible way to measure "this is too much".

Basis: the monograph (Springer, 2011) was not read; it is not open access. These notes rest on the lead author's open-access review **"Cognitive Architecture and Instructional Design: 20 Years Later"** (Sweller, van Merriënboer & Paas, *Educational Psychology Review* 31, 2019, CC BY; obtained from the University of Wollongong's institutional repository), which summarises the theory as it stood after the book, including the effects the book catalogues (read in full apart from the reference list). Ayres's and Kalyuga's own contributions (split attention, expertise reversal) appear there through their papers. Coverage is medium: the cognitive architecture, the load types, all the major effects, measurement and open questions are covered from primary text, but not the book's chapter-level evidence, worked materials or its distinctive sections (e.g. on cognitive load in collaborative and technology settings as of 2011). Compare with techne's existing summary in `references/psychology/cognition-memory-cognitive-load.md`, which this file deepens rather than replaces.

## The big idea (3 sentences)
All new information must pass through a working memory that holds only a few elements for a few seconds, but once knowledge is organised in long-term memory, those limits effectively disappear. Design should therefore present novel material so it doesn't overload working memory (remove load caused by presentation, and sequence the complexity that is inherent), so people can build lasting knowledge structures. What helps depends on expertise: support that frees a novice's working memory becomes redundant, even harmful, for someone who already has the knowledge.

## Core concepts
- **Architecture as five principles** —
  - *information store* (long-term memory is large);
  - *borrowing and reorganising* (most knowledge comes from other people);
  - *randomness as genesis* (with no knowledge to borrow, people generate and test, which is costly);
  - *narrow limits of change* (working memory is tightly limited for novel information);
  - *environmental organising and linking* (stored knowledge, cued by the environment, guides action without those limits).
- **Element interactivity** — complexity is how many elements must be processed *together*. It depends on both the material and the person: "characteristics" is one element for a fluent reader and many interacting squiggles for a beginner.
- **Intrinsic load** — set by element interactivity for this learner. It changes only by changing what must be learned or the learner's expertise.
- **Extraneous load** — imposed by how information is presented and what the learner is asked to do. It can be changed by design, and most effects target it.
- **Germane load, revised** — no longer a separate load type that adds to the total. It is the share of working-memory resources that goes to intrinsic content rather than to extraneous processing. The 2019 measurement section keeps only intrinsic and extraneous as basic categories.
- **Biologically primary vs secondary knowledge** (after Geary) — primary skills (speaking, face recognition, generic problem solving, imitating movement) are acquired without instruction and are hard to teach. Secondary, domain-specific knowledge (reading, algebra, *your app*) needs explicit instruction and effort.
- **Classic effects (by 1998)** —
  - *goal-free* (open goals avoid costly means-ends search);
  - *worked example* (study a solution rather than solve);
  - *completion problem* (finish a partial solution);
  - *split attention* (integrate sources that only make sense together, in space and in time);
  - *redundancy* (drop self-sufficient duplicate sources: a diagram alone beat diagram plus the same text);
  - *modality* (spoken text with a visual can expand capacity);
  - *variability* (varied practice helps transfer when total load is low).
- **Newer effects (1998–2018)** —
  - *self-explanation* (prompts to explain a worked example);
  - *imagination* (mentally rehearsing helps, but only once learners know enough to imagine it);
  - *isolated elements* (teach elements separately, then their interactions);
  - *collective working memory* (groups help on high-load tasks; on low-load tasks coordination costs win);
  - *human movement* (animation beats statics for motor skills, because imitating is a primary skill).
- **Compound effects (limits on the others)** —
  - *element interactivity* (effects vanish or reverse with simple material);
  - *expertise reversal* (novice aids shrink, vanish, then reverse with expertise);
  - *guidance fading* (move from examples to completion tasks to independent practice);
  - *transient information* (speech, video and animation vanish, so learners must hold them in mind; short narrated segments help, long ones hurt, and self-pacing and segmentation help);
  - *self-management* (people can be taught to fix split-attention material themselves).
- **4C/ID** (van Merriënboer) — for longer programmes: whole real-life learning tasks ordered simple to complex; support that fades within each complexity level; *supportive information* (high interactivity, "the theory") given before or apart from the task; *procedural information* (how-to steps and feedback) given just in time, during the task; and part-task practice to automate key routines.
- **Measuring load** — the single-item 9-point mental-effort rating (Paas, 1992) is sensitive and simple but can't separate load types; a 10-item questionnaire (Leppink) distinguishes intrinsic from extraneous load; secondary tasks and physiological measures (EEG, pupil dilation) are research-grade. A single rating at the end of a session reads higher than the average of per-task ratings.
- **Open questions (2019)** — working-memory *depletion* after sustained effort (proposed as an explanation of the spacing effect, which would mean capacity isn't fixed); links to self-regulated learning (learners use invalid cues, such as reading ease as a sign of understanding); stress, emotion and uncertainty as load; and gestures and tracing as cognitive offloading.

## Actionable heuristics for product design
- When a screen makes users combine two sources that only make sense together (chart and legend, form field and help on another page, step 3 needing a value from step 1), physically integrate them: label lines directly, put help next to the field, carry values forward. Split attention also happens across *time*, so don't explain in step 1 what's needed in step 4.
- When the same information appears twice in self-sufficient forms (icon plus label plus tooltip plus paragraph, a diagram plus a text restating it, captions that read out the visible UI), remove the duplicate for the audience that doesn't need it. Redundancy costs effort; it isn't "extra help".
- When onboarding novices to a complex task (setting up a workspace, a first query, a first automation), start from a worked example (sample project, prefilled template, demo data), then a completion task (partly filled, user finishes), then a blank start. Fade the scaffolding as competence shows: guidance fading.
- When users become proficient, retire the novice aids (coach marks, verbose labels, step-by-step wizards) or make them optional. Offer shortcuts, density and expert paths. Detect expertise from behaviour rather than asking, because the same aid that helped can now slow people down (expertise reversal).
- When teaching through video, animation or voice (tutorial videos, voice assistants, AI read-outs), keep segments short, let users pause, scrub and replay, and pair speech with visuals rather than reading text aloud. For long or detailed instructions, prefer persistent text and images people can revisit (transient information effect).
- When something is genuinely complex (pricing configurations, permissions, data models), don't hide it: sequence it. Introduce the elements one at a time, then show how they interact (isolated elements), and order tasks simple to complex.
- When users need conceptual understanding ("how sharing works") and procedural steps ("click Share, choose role"), separate them as 4C/ID does. Offer the concept before or outside the task (overview, docs, an explainer), and give the procedural step just in time, inline, at the moment of action.
- When assessing whether a flow is too demanding, measure it: ask a single mental-effort rating after each task (not just once at the end), and track behavioural signs of overload (backtracks, help opens, corrections, drop-off). Compare designs on effort *and* success.
- When users must learn a motor or gesture-based interaction (trackpad gestures, drawing tools, AR), show a person or hand doing it in motion. Imitation of movement is a primary skill and lightly loaded.
- When people say a tutorial was "easy" or "clear", don't take that as evidence they learned. Fluency is an invalid cue. Check with a later task or a "can you explain it?" prompt.
- When designing collaborative features for hard tasks (shared analysis, pair debugging), expect collaboration to help on high-load work, and to cost more than it saves on simple work (coordination overhead).

## Evidence & caveats
- **Strengths:** most effects come from randomised controlled experiments replicated across labs, ages and subjects, with meta-analyses for some (e.g. modality). Split attention, redundancy, worked examples and expertise reversal are among the best-supported principles in instructional design.
- **Transfer to UI is indirect:** the experiments are about *learning* (mostly maths, science and technical material, with students), not task performance in software. The translation to interface design is reasonable but rarely tested head-to-head. Treat UI applications as well-founded hypotheses and A/B test where it matters.
- **Theory critiques:** the germane-load concept was revised because it couldn't be measured independently and made the theory hard to falsify. The authors also note that many early experiments inferred load from learning outcomes rather than measuring it. Load measures remain mostly self-report.
- **Contested claims:** that generic skills (problem solving, self-regulation) can't be taught rests on the far-transfer literature (Sala & Gobet, 2017) and is disputed by some education researchers. The evolutionary framing (primary vs secondary) is a theoretical lens, not a tested mechanism. The broader "explicit instruction beats minimal guidance" stance is a long-running debate in education.
- **Depletion caution:** the 2019 review floats working-memory depletion and acknowledges conflicting ego-depletion meta-analyses. Ego depletion has failed large preregistered replications (`references/psychology/cognition-cheatsheet.md`), so don't justify design decisions with "users run out of willpower". Spacing effects themselves are robust.
- The 2011 book is now older than the 2019 review. Where they differ (germane load, capacity being fixed), prefer the 2019 formulation used here.

## Disagreements with other references
- `references/psychology/cognition-memory-cognitive-load.md` lists three load types with germane as a separate category, citing a later folding of germane into intrinsic as a "contested taxonomy". The authors' own 2019 position is that germane load redistributes resources rather than adding load, leaving intrinsic and extraneous as the basic types. Use the 2019 version; the practical advice is unchanged.
- `references/books/magical-number-4-cowan.md` sets working-memory capacity at about 4 chunks. CLT agrees on narrow limits but stresses that the limits apply only to *novel* information: experts' chunks from long-term memory bypass them. Design for the knowledge level of the actual user, not a universal number.
- `references/books/web-form-design-wroblewski.md` recommends help visible next to fields, and `references/books/designing-with-the-mind-in-mind-johnson.md` warns against verbose UIs. These agree with split attention and redundancy, and CLT explains when each applies (novice vs expert).
- `references/books/thinking-fast-and-slow-kahneman.md`: System 2 effort and CLT working memory describe overlapping limits. Kahneman's "lazy controller" leans on ego depletion; CLT's depletion line is tentative. Neither is a basis for design claims on its own.

## Best quotes (< 25 words each, max 5)
- "Once information is stored in long-term memory, the capacity and duration limits of working memory disappear transforming our ability to function." (abstract)
- "Intrinsic cognitive load only can be changed by changing what needs to be learned or changing the expertise of the learner." (2019)
- "So, let us not try to predict the future but create it by continuing to do good research." (2019, conclusion)

## Related
- `references/psychology/cognition-memory-cognitive-load.md`, `references/psychology/cognition-cheatsheet.md`, `references/books/magical-number-4-cowan.md`
- `references/books/ebbinghaus-memory.md` (spacing, forgetting), `references/data-driven/conversion-onboarding-activation-retention.md`
- `references/process/states-and-edge-cases.md` (empty states and first-run), `references/future/ai-patterns-interaction-pattern-library.md` (explanations in AI features)
- Books: van Merriënboer & Kirschner, *Ten Steps to Complex Learning*; Mayer, *Multimedia Learning*; Clark, Nguyen & Sweller, *Efficiency in Learning*

## Sources
- Sweller, J., van Merriënboer, J. J. G. & Paas, F. (2019). "Cognitive Architecture and Instructional Design: 20 Years Later", *Educational Psychology Review* 31, 261–292, DOI https://doi.org/10.1007/s10648-019-09465-5, CC BY 4.0. Copy from the University of Wollongong institutional repository (Research Online, via its figshare platform): https://figshare.com/articles/journal_contribution/Cognitive_Architecture_and_Instructional_Design_20_Years_Later/27738291 (file https://ndownloader.figshare.com/files/50496330; record https://ro.uow.edu.au/sspapers/4554; read in full; saved under books/free/cognitive-load-theory/)
- Open-access status checked via OpenAlex: https://api.openalex.org/works/doi:10.1007/s10648-019-09465-5
- Not obtained: the Springer PDF link served a bot-check page (not bypassed); Sweller (2020), "Cognitive load theory and educational technology" (*ETR&D*; closed access).
