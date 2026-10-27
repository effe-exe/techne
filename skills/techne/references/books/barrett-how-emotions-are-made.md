---
title: "How Emotions Are Made: The Secret Life of the Brain"
author: "Lisa Feldman Barrett"
year: 2017
domains: [psychology, emotion, affective-ux, ai, research]
evidence: "mixed"
basis: "author's free material, not the full book"
coverage: medium
---

# How Emotions Are Made — Lisa Feldman Barrett

Use this when: someone proposes "emotion detection" from faces, voice or webcam (emotion analytics, AI tutors, sales coaching, driver monitoring, interview scoring); you are designing emotional or "delight" moments and need to know what actually shapes feelings; you choose emotion measures for research (valence/arousal vs six basic emotions); you are designing emoji, avatars, characters or expressive AI agents; you need a counterweight to "universal facial expressions" claims.

Source basis: the book is in print with no free edition. These notes use Barrett's own free material: her
open-access theory paper "The theory of constructed emotion" (SCAN 2017, read in full), the author's accepted
version of the 2019 *Psychological Science in the Public Interest* review she led on facial expressions
(read: executive summary, introduction, summaries, recommendations, tables 8–9, key meta-analysis results),
and the book's official companion site (glossary, endnotes PDF, selected extended notes). The book's stories,
chapters on social reality, emotional granularity training, law and health were seen only via notes.

## The big idea (3 sentences)
Emotions are not triggered reactions with a fixed "fingerprint" in face, body or brain; the brain constructs
each instance by predicting what bodily sensations mean, using concepts learned from past experience and culture.
The constant ingredient is affect (valence and arousal, tied to the brain's regulation of the body's energy
budget), while emotion categories such as anger or fear are populations of highly variable instances.
So you cannot read a specific emotion from a face or signal alone; context and the perceiver's concepts do much
of the work.

## Core concepts
- **Classical view (what she argues against)** — each emotion has a biological essence: a dedicated circuit,
  facial expression or bodily pattern that is universal and triggered by events.
- **Degeneracy and population thinking** — many different neural patterns can produce instances of the same
  category, and one network serves many categories; an emotion category is a population, and its "typical"
  pattern is a statistical summary that may not appear in any single instance.
- **Allostasis / body budget** — the brain's core job is to anticipate and meet the body's energy needs.
  Interoception (sensing the body) is experienced as affect: pleasant–unpleasant (valence) and calm–activated
  (arousal), present in every waking moment, not only in "emotional" ones.
- **Prediction, not reaction** — the brain continuously predicts incoming sensations from past experience and
  corrects with prediction error; perception, action and emotion are built this way. Meaning comes from the
  prediction, not from a stimulus that is then evaluated.
- **Concepts and categorisation** — an instance of emotion is what happens when the brain uses an emotion
  concept to make sense of bodily sensations in a situation. Concepts are goal-based: "happiness" at a party and
  after a workout are different constructions.
- **Emotional granularity** — people differ in how finely they construct emotions (e.g. "annoyed" vs
  "frustrated" vs "uneasy" instead of just "bad"). The companion site notes it is also called emotion
  differentiation or emodiversity.
- **Affective realism** — your bodily state colours what you perceive in the world (you see a neutral face as
  hostile when you feel bad).
- **Mental inference fallacy** — treating a behaviour or movement (widened eyes, freezing) as proof of a mental
  state.
- **Facial expressions review (PSPI 2019, five authors)** — across adults in many cultures, infants and
  congenitally blind people, the stereotyped faces (scowl = anger, smile = happiness, etc.) occur above chance
  but weakly. In an expanded meta-analysis (47 studies, 3,599 people) they appeared about 15–25% of the time
  during the matching emotion. Specificity is lacking: the same face signals different states, and each emotion
  shows many faces. The strongest support comes from choice-from-array tasks in Western samples, which do
  not generalise.
- **Stereotype vs prototype** — the classic expression set is a Western stereotype (a belief taken as more
  general than it is), not the most frequent real instance.

## Actionable heuristics for product design
- When a feature claims to detect emotions from facial movement (webcam, video calls, kiosks, cars), describe and
  design it as detecting facial movements, not feelings. Do not make consequential decisions (hiring, grading,
  fraud, safety, pricing) on it, because the 2019 review found expressions neither reliable nor specific enough,
  and tech that "reads emotion" detects movements only.
- When you must infer user state, use context and many signals over time (task, history, what just happened,
  self-report), and let people correct the system ("Did I get that right?"), because meaning depends on context
  and the perceiver's concepts.
- When measuring emotional response in research, measure affect first: valence and arousal scales
  (e.g. Self-Assessment Manikin), then open-ended labels in the user's own words. Avoid forced choice among six
  emotion words, because choice-from-array tasks inflate agreement and create the effect they claim to measure.
- When designing "delight" moments, celebrations or empathetic copy, design for the user's likely state in that
  context, not for a universal emotion, because the same animation or message is constructed differently by
  someone tired, rushed or anxious; suppress celebrations after errors or bad news.
- When designing expressive agents, avatars, emoji or characters, treat facial configurations as a learned
  visual language, not a universal one: label them, pair them with words, test across cultures, and give users
  text alternatives (also an accessibility need).
- When an AI assistant mirrors or names the user's feelings, do it tentatively and in the user's own vocabulary
  ("sounds frustrating?"), offer finer-grained words rather than a single label, and never assert a feeling
  as fact.
- When choosing words for mood logging, journaling or wellbeing features, offer a rich, specific vocabulary
  (granularity) and valence/arousal axes rather than five emoji faces, because finer emotion concepts are
  linked in her work to better regulation [moderate; see caveats].
- When a stakeholder cites "people decide emotionally, then rationalise" or the "lizard brain", replace the
  triune-brain story with the prediction view: feelings are the brain's summary of body state plus meaning,
  so reduce uncertainty and physical effort (load, waiting, surprise) to make experiences feel better.
- When reading research or vendor claims about emotion, apply her checklist: was it posed stereotypes or real
  movements, is specificity reported (not just above-chance reliability), was context measured, and does
  "accuracy" really mean agreement.

## Evidence & caveats
- The facial-expression conclusion is the strongest part: a systematic, multi-author review (including Ralph
  Adolphs, who works in a different tradition) in a high-standard journal [strong]. Its specific numbers come
  from meta-analyses with heterogeneous methods.
- The theory of constructed emotion is a broad, contested framework [mixed]. Basic-emotion theorists (Ekman,
  Keltner, Cowen and others) dispute it, and several of its neural claims are stated in the SCAN paper as
  hypotheses, not findings. Predictive-processing accounts of the brain are influential but not settled.
- Barrett states what she is not claiming: emotions are not illusions, not all neurons do everything, and
  automaticity exists. Avoid strawmanning her as "emotions aren't real".
- Benefits of emotional granularity come mostly from correlational studies; causal evidence that training
  granularity helps is thinner. Treat granularity-based design as a reasonable hypothesis.
- Not read: the book's full chapters; the notes rely on the author's papers, which are more technical and more
  hedged than a popular book.

## Disagreements with other references
- `references/psychology/cognition-emotion-experience-habit.md` already labels constructed emotion as
  contested vs Ekman's basic emotions, and recommends valence × arousal measurement; this file supports that
  and adds the stronger, better-evidenced claim that faces do not reliably reveal specific emotions.
- `references/books/emotional-design-norman.md` uses "visceral" reactions as a level of design; Barrett would
  say visceral responses are affect plus prediction, not hardwired emotions. Norman's levels remain useful as
  a review checklist.
- `references/books/lindgaard-50ms-first-impression.md` (fast aesthetic judgements) is compatible: fast affective
  appraisal exists; what is not supported is decoding discrete emotions from faces.
- Any reference that recommends emotion AI or facial coding as UX measurement should defer to this file.

## Best quotes (< 25 words each, max 5)
- "Emotions are constructions of the world, not reactions to it." (SCAN 2017)
- "A stereotype is not a prototype." (PSPI 2019)
- "A more accurate description, however, is that their technology detects facial movements, not emotional expressions." (PSPI 2019)
- "Affect occurs in every moment (whether you're aware of it or not) because interoception occurs in every moment." (companion site, affect vs emotion note)

## Related
- `references/psychology/cognition-emotion-experience-habit.md`, `references/psychology/cognition-cheatsheet.md`
- `references/books/emotional-design-norman.md`, `references/books/lindgaard-50ms-first-impression.md`,
  `references/books/human-centered-ai-shneiderman.md`
- `references/books/thinking-fast-and-slow-kahneman.md` (dual-system stories that Barrett's view complicates)

## Sources
- Barrett, L. F. (2017). "The theory of constructed emotion: an active inference account of interoception and
  categorization." *Social Cognitive and Affective Neuroscience* 12(1), 1–23 (open access, CC BY-NC). Read in
  full: https://pmc.ncbi.nlm.nih.gov/articles/PMC5390700/
- Barrett, L. F., Adolphs, R., Marsella, S., Martinez, A. M. & Pollak, S. D. (2019). "Emotional expressions
  reconsidered: challenges to inferring emotion from human facial movements." *Psychological Science in the
  Public Interest* 20(1), 1–68. Author's accepted version: https://eprints.gla.ac.uk/178385/ (sections listed above read)
- Book companion site by the author: https://how-emotions-are-made.com/notes/Home ; glossary:
  https://how-emotions-are-made.com/notes/Glossary ; end matter and endnotes PDF:
  https://how-emotions-are-made.com/notes/End_matter ; extended notes read:
  https://how-emotions-are-made.com/notes/Emotional_granularity , https://heam.info/analytics-1 ,
  https://heam.info/affect-1
- Not used: PMC6640856 (blocked by a browser check).
- Local copies: books/free/barrett-how-emotions-are-made/ (git-ignored).
