---
title: "Emotional Design: Why We Love (or Hate) Everyday Things"
author: "Donald A. Norman"
year: 2004
domains: [psychology, visual, interaction, ai]
evidence: "mixed"
basis: "author's free material, not the full book"
coverage: medium
---

# Emotional Design — Don Norman

Use this when: someone argues "it works, so the look doesn't matter" (or the reverse, "it's beautiful, ship it"); you need to judge how much polish a screen deserves given how stressed its users will be; you are reviewing a product on visceral, behavioral and reflective levels; you are designing a system that has to change its tone when things go wrong (alerts, incidents, failure states, AI agents that report their own health).

Basis: the book (Basic Books, 2004) was not read. Read in full: the author's own free drafts of three chapters, linked from his book page on jnd.org — the Prologue ("Three Teapots", draft of March 2003), Chapter 1 ("Attractive Things Work Better", draft of Feb/March 2003) and the Epilogue ("We Are All Designers"). Also read in full: his ACM *Interactions* article "Emotion & Design: Attractive Things Work Better" (2002), posted on jnd.org; the official TED transcript of his 2003 talk "3 ways good design makes you happy"; and Norman, Ortony & Russell, "Affect and machine design" (*IBM Systems Journal*, 2003), self-archived by Ortony. Covered well: the affect/cognition argument, the three levels, the stress/creativity design rule, personalization. Covered only through the TED talk: Chapter 3's level-by-level design guidance. Not covered: Chapter 2 (the meaning of things, product personality, brand), Chapter 4 (fun and games), Chapter 5 (people, places, things — trust, communication tech), Chapters 6–7 (emotional machines, robots), except where the IBM paper overlaps.

## The big idea (3 sentences)
Affect (fast, often subconscious judgment of good/bad, safe/dangerous) and cognition (interpreting the world) are intertwined information-processing systems, and affect changes the operating parameters of thought: negative affect narrows processing to depth-first focus, positive affect broadens it to breadth-first, creative problem solving. Therefore attractive, pleasant products can actually work better in relaxed contexts because users tolerate and route around minor problems, while products for stressful contexts need strict human-centered design because anxious users get tunnel vision. Every product is experienced on three interwoven levels (visceral appearance, behavioral use and control, reflective meaning and self-image), and good design balances them rather than trading usability for beauty or the reverse.

## Core concepts
- **Affect vs emotion** — affect is the general judgment system, conscious or not. Emotion is affect made conscious and attributed to a cause ("anger at Harry the car salesman"). Most of it happens before conscious thought.
- **Affect tunes cognition** — anxiety biases toward focused, depth-first, distraction-resistant processing (good for escaping danger, bad for finding alternatives). Positive affect biases toward broad, distractible, creative processing (Isen's small-gift and candle/string-problem studies).
- **"Attractive things work better"** — the mechanism is not that beauty changes the interface. It changes the user's state, which makes them more flexible and more forgiving. It came from Kurosu & Kashimura's (1995) and Tractinsky's (1997, 2000) ATM-layout studies, where attractive layouts were rated easier to use.
- **Three levels of processing** (with Ortony and Revelle) — *visceral*: pre-wired, fast pattern matching (heights, loud sounds, symmetry, bright saturated hue, smooth rounded shapes, smiling faces). *Behavioral*: subconscious skilled routine, where most work happens. *Reflective*: conscious, slow self-monitoring that cannot act directly but biases the levels below. The IBM paper calls them Reaction, Routine, Reflection.
- **Three kinds of design** — visceral design is about appearance. Behavioral design is "all about feeling in control": usability, understanding, feel, heft. Reflective design is about the story a product lets you tell and what it says about you (the Hummer's attention, the hybrid car's values, the expensive watch).
- **Levels can conflict** — the roller coaster pits visceral fear against reflective pride. The "coffeepot for masochists" is purely reflective. The Mini Cooper and the Graves Rooster teapot are loved despite behavioral flaws.
- **Context and mood pick the design** — Norman uses a fast, plain brewing ball in the morning and the charming teapots when relaxed. Which design is "best" depends on occasion and mood.
- **Visceral is universal, the other levels are cultural** — visceral reactions vary little across people. Behavioral and reflective reactions depend on experience, training and culture (teenagers reject what adults like).
- **Sound symbolism** — hard plosives read as hard/metallic, soft liquids as soft (Tolkien's "tinko" = metal, "losse" = snow). Names and sounds carry affect.
- **Personalization beats catalog customization** — choosing from a fixed set of colors and options rarely creates attachment. Attachment comes from ownership, use, wear and story. Software with too many preferences is a sign of excess complexity. Good customization combines simple pieces.
- **"We are all designers"** — people turn spaces into places by arranging and adapting. The designer's best move is to hand them the tools.
- **Affect for machines** (IBM paper) — systems should evaluate their own state, not only compute: report every failure upward, let "anxiety" rise when error tolerance drops (a degraded RAID), and switch to conservative behavior (more checkpoints, postpone critical jobs). Affect is a "weak method" that adds robustness when situations weren't anticipated.

## Actionable heuristics for product design
- Before deciding how much visual polish and playfulness a surface gets, classify the user's likely state there. Relaxed, optional contexts (browsing, creating, onboarding to a fun product) benefit from attractive, pleasant design. Stressful contexts (payment failure, security alert, medical, outage, deadline) get calm, plain, unambiguous UI, because anxious users narrow their focus and won't explore.
- In stressful flows, make the correct action the obvious one, with no alternatives to discover. Users under stress repeat the failed action harder (push the door that must be pulled). If a retry won't help, say so and show the alternative right where the retry button was.
- Design for the "try again harder" failure: when an action fails, don't just re-enable the same button. Change the state, explain what's different, and offer the next step.
- Use beauty to buy goodwill, never to cover task failure. Pleasant design raises tolerance for minor friction in low-stakes contexts. It does not rescue a broken core task (see the aesthetic-usability caveats below).
- Review every major screen on all three levels: Visceral (does it look right in the first glance: hierarchy, color, shape, sound?), Behavioral (does the user feel in control: feedback, fluency, responsiveness, feel?), Reflective (what does using it say about the user, and what story will they tell?). Note where levels conflict and decide on purpose which one wins.
- For reflective appeal, give users something worth telling: a clever mechanism that signals state (the tilting teapot tells the waiter it's finished), a meaningful default, a visible value (privacy, sustainability). Don't fake it with status bait.
- Build state-change into tone. A system with a calm normal mode should shift visibly (sound, color, motion stop) when something goes wrong, then return. Norman's control-room example: pleasant during monitoring, then alarms that focus attention, but not so loud they cause tunnel vision.
- Train for emergencies instead of relying on in-the-moment problem solving. If users must act correctly under stress (account recovery, data loss, safety features), rehearse it in onboarding or practice modes, and keep the stressful path short and memorized.
- Treat delight details (Google doodles, playful empty states) as subconscious mood-setters. They work best when subtle and when they don't slow the task. Keep them out of error and grief contexts.
- Prefer personalization through use over settings panels. Let the product accumulate the user's history (recent items, arrangement, their own content, saved layouts) rather than adding preference toggles. If a feature needs many preferences, simplify the feature.
- Let users adapt and arrange (move panels, pin, rename, compose small pieces). Attachment and "place-making" come from what users do, not from options you pre-pick.
- For AI agents and autonomous features, design an affect-like self-assessment: report degraded confidence or reliability ("I hit errors, so I'm checking more slowly"), become more conservative when error margins shrink, and surface failures to the human early instead of silently tolerating them.
- Choose names, sounds and typefaces with their affective connotations in mind (soft vs hard sounds, rounded vs sharp shapes), then check them with a quick preference test, since visceral reactions are fast and fairly universal.

## Evidence & caveats
- The book is an argued synthesis by a cognitive scientist, built from his theory work and others' experiments. It is not a set of tests of design interventions. The three-level model is a conceptual framework (Norman, Ortony & Revelle), useful as a review checklist but not a validated neural model. The neuroanatomy ("dopamine into the prefrontal lobes", the lizard-dog-human layering) is simplified and partly outdated.
- **Aesthetic-usability:** the Kurosu & Kashimura (1995) and Tractinsky (1997; Tractinsky, Katz & Ikar 2000) findings are real but concern perceived usability, often measured before or just after use. Later work (Hassenzahl & Monk 2010; Tuch et al. 2012) found the link weaker and indirect, and showed poor usability lowers perceived beauty after use. "Attractive things work better" is best read as "are perceived to work better and are forgiven more", not "perform better".
- **Positive affect and creativity:** Isen's mood-induction studies (small gifts, comedy clips, candle problem) are classic and were replicated in many versions. But mood-induction effects are usually small, and the field's replication record is uneven (Fredrickson's related "positivity ratio" was retracted in its mathematical form). Direction: moderate. Size: unknown for UI.
- **Prepared fears and the visceral lists:** Norman calls his lists "my best guess". Predispositions to fear snakes, spiders and heights have support, but the lists mix evidence with intuition.
- **Sound symbolism** (bouba/kiki style) is robust across languages. The Tolkien demo was a classroom exercise.
- The epilogue's "survey" was an informal call for examples from about 150 technologists. Treat it as anecdote.
- These are 2003 drafts. Norman warns they contain errors fixed in the book. The final text may differ in places.

## Disagreements with other references
- `references/psychology/cognition-emotion-experience-habit.md` §2–3 already uses the three levels and the aesthetic-usability effect, and correctly marks the effect [contested on direction and magnitude]. This file supplies Norman's mechanism (affect tunes cognition) and the stress-dependent rule. Trust the psychology file's evidence grading over Norman's confident framing.
- `references/books/design-of-everyday-things.md` is the "usable" Norman. Here he concedes the "usable but ugly" critique and puts usability "equal, but not superior" to beauty. No real conflict: both insist that beauty without usability is "façade design".
- `references/books/lindgaard-50ms-first-impression.md` and `references/books/tuch-visual-complexity-prototypicality.md` give the measured version of visceral judgment (fast, stable, prefers low complexity and prototypical layouts). Use them for concrete visual decisions. Norman's lists (bright, saturated, rounded) are looser and sometimes conflict with prototypicality in product UI.
- `references/books/microinteractions-saffer.md` and `references/interaction/microinteractions-and-motion.md` cover how to build delight. Norman explains why it works and where it backfires.
- `references/future/human-ai-trust-errors-uncertainty-oversight.md` covers communicating AI uncertainty. The IBM paper's "anxious machine" is an early, compatible version of the same idea.

## Best quotes (< 25 words each, max 5)
- "Attractive things work better." (Interactions, 2002)
- "Negative affect can make it harder to do even easy tasks: positive affect can make it easier to do difficult tasks." (Interactions, 2002)
- "True beauty in a product has to be more than skin deep, more than a façade." (Interactions, 2002)
- "Behavioral design is all about feeling in control." (TED, 2003)
- "Things do not become personal because we have selected some alternatives from a catalog of choices." (Epilogue draft)

## Related
- `references/psychology/cognition-emotion-experience-habit.md`, `references/psychology/cognition-perception-attention-reading.md`
- `references/books/design-of-everyday-things.md`, `references/books/lindgaard-50ms-first-impression.md`, `references/books/tuch-visual-complexity-prototypicality.md`, `references/books/microinteractions-saffer.md`
- `references/interaction/microinteractions-and-motion.md`, `references/future/human-ai-trust-errors-uncertainty-oversight.md`
- Books: Csikszentmihalyi & Rochberg-Halton, *The Meaning of Things* (1981); Damasio, *Descartes' Error* (1994); Brand, *How Buildings Learn* (1994)

## Sources
- Book page with links to the author's draft chapters: https://jnd.org/emotional-design-why-we-love-or-hate-everyday-things/
- Prologue draft, "Three Teapots": https://www.dropbox.com/s/3t6hi6l8a4bbtjr/CH00_Prolog.pdf?dl=0
- Chapter 1 draft, "Attractive Things Work Better": https://www.dropbox.com/s/9laed72khnbu99n/CH01.pdf?dl=0
- Epilogue draft, "We Are All Designers": https://www.dropbox.com/s/xhyiihizgafbfg6/CH-Epilog.pdf?dl=0
- Norman, D. A. (2002). Emotion & design: Attractive things work better. *Interactions*, 9(4), 36–42. https://jnd.org/emotion-design-attractive-things-work-better/
- Norman, D. (2003). "3 ways good design makes you happy", TED talk, official transcript: https://www.ted.com/talks/don_norman_3_ways_good_design_makes_you_happy/transcript
- Norman, D. A., Ortony, A., & Russell, D. M. (2003). Affect and machine design. *IBM Systems Journal*, 42(1), 38–44. https://users.cs.northwestern.edu/~ortony/Andrew_Ortony_files/2003%20-%20Machine%20Design.pdf
- Downloads saved under books/free/emotional-design-norman/
