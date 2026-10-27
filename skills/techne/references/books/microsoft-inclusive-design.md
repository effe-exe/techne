---
title: "Inclusive Design Toolkit (Inclusive 101, Activity Cards, In Pursuit of Inclusive AI)"
author: "Microsoft Design (Albert Shum, Kat Holmes, Kris Woolery, Margaret Price, Doug Kim, Elena Dvorkina et al.)"
year: 2016
domains: [accessibility, inclusive-design, research, process, ai]
evidence: "weak"
---

# Inclusive Design Toolkit — Microsoft Design

Use this when: you need a framing to get a team to look beyond "average users" and compliance (kick-off, workshop, research plan); you want a quick method to widen a persona into permanent, temporary and situational versions; you are scoping research participants or stress-testing a concept against contexts (one hand, glare, noise, fatigue); you are reviewing an AI feature for sources of bias.

Source: https://inclusive.microsoft.design/ (fetched Oct 2026). Read in full: the home page (principles), "Tools and guidance" index, "Inclusive 101" guidebook (the web version of the 2016 toolkit manual), "Inclusive activity cards" (all activities and the support-card descriptions), "In Pursuit of Inclusive AI" (five bias types and five insights), and the "Real-world examples" index (titles and blurbs only). Not available as text: the downloadable PDFs (links are script-generated), the pictorial contents of the support cards, the Physical Accessibility / Mental Health / Neurodiversity guides (only one-line blurbs on the index), and the films (YouTube videos, no transcripts read).

## The big idea (3 sentences)
Disability is not a personal attribute but a mismatch between a person and the design of their environment, so designers create exclusion when they design from their own abilities and biases. Inclusive design is therefore a method that seeks out exclusion and learns from people who adapt to it, while accessibility is the resulting attribute measured by standards. Designing for someone with a permanent limitation ("solve for one") usually produces solutions that extend to many more people with temporary or situational versions of the same limitation ("extend to many"), which the toolkit maps with the Persona Spectrum.

## Core concepts
- **Three principles** — Recognize exclusion; Learn from diversity; Solve for one, extend to many.
- **Disability as mismatch** — following the WHO's 2001 shift, disability happens at the points of interaction between a person and society; designers own those interaction points.
- **Permanent, temporary, situational** — the toolkit's examples: one arm / a wrist injury / a new parent holding an infant; a solution for someone who is blind can help a driver; people can't hear well in a loud crowd. Mobile technology multiplies situational impairments.
- **Persona Spectrum** — a tool that maps related limitations of one ability across permanent, temporary and situational cases to build empathy and show how far a solution scales.
- **Persona Network** — the 3–5 people a person relies on or interacts with daily; exclusion and support happen in that network, not in isolation.
- **Insight is in the adaptation** — people invent workarounds when designs fail them; studying those workarounds is the research goal, not simulating impairments.
- **Accessibility vs inclusive design** — accessibility is an attribute and a discipline; inclusive design is a method; the method doesn't by itself guarantee standards compliance.
- **Benefits claimed** — increased access, reduced friction, more emotional context, and a shift in team culture.
- **Activity cards** — exercises across five stages (Get oriented, Frame, Ideate, Iterate, Optimize), with support cards for physical context, social context, temporary/situational limits, role of technology, examples of mismatch, conditions and the Persona Spectrum.
Activity cards by stage (as read):

| Stage | Activities | Output |
|---|---|---|
| Get oriented | Computer Trust ("I'd trust a computer to…, but only a human to…", 5 min) | What drives trust and mistrust |
| Frame | Persona Spectrum, Persona Network, Interaction Diary, Human Analogy | Mismatches and motivations |
| Ideate | Mismatch to Solution I and II, Design a Microinteraction, Evaluate Technology's Role | First concepts, 3 chosen opportunities |
| Iterate | Low-Fidelity Prototype, Simulations | Tested micro-interactions |
| Optimize | Context and Capability Match, Situational Adaptation | Adaptations per context combination |

- **Five AI bias types** — dataset bias (training data doesn't represent users), associations bias (data multiplies cultural stereotypes), automation bias (automated decisions override human and cultural considerations), interaction bias (users deliberately poison a learning system), confirmation bias (over-simple personalization narrows what people see).

## Actionable heuristics for product design
- When starting a project, list who your current design excludes and why (the "mismatches"), before ideating, because exclusion appears whenever the team uses its own abilities as the baseline.
- When writing personas or research screeners, recruit at least one participant with a permanent limitation in the ability your product depends on most (seeing a screen, hearing audio, fine touch), interview them about what they like to do and where they hit friction, and then extend that to temporary and situational cases.
- When arguing for a feature that serves disabled users, build a Persona Spectrum for it, because the same solution often serves far larger temporary and situational groups. The toolkit's example: about 26,000 people a year in the US lose an upper limb, but over 20 million have a temporary or situational one-arm limitation.
- When building empathy, prefer time with people who live the experience over blindfolds and earplugs; the toolkit warns simulation alone is misleading because it can't reproduce emotional context or learned adaptations.
- When you do run "Simulations" (as the Iterate card suggests), use them only to find friction in your own sequence of steps under a temporary or situational limit, then fix and repeat with another limit; don't treat them as evidence of what disabled users experience.
- When a concept is near final, run "Context and capability match" or "Situational adaptation": pick one physical context, one social context and a time of day, list the limitations they create, and revise the design for that combination; repeat with other combinations.
- When designing a feature, map the people around the user (Persona Network: 3–5 key people) and the mismatches between them, because many products are used with, for or around others (carers, family, coworkers).
- When you need field insight cheaply, run an Interaction Diary: observe people in a real place for an extended time, note small verbal and non-verbal interactions with each other, objects and technology, and look for mismatches in how they move and react.
- When designing an AI or automated feature, start the team with the Computer Trust exercise, because the boundary between "I'd trust a computer" and "only a human" tells you where automation needs a human fallback.
- When ideating, turn each observed mismatch into a "How might we…" question, pick three, brainstorm 3–5 minutes per question with one idea per sticky note, then cluster.
- When refining an interaction, write the micro-interaction step by step (who triggers it, how the trigger works, how feedback starts, how the user interacts with it, what happens after), because inclusion failures hide in steps you skipped.
- When prototyping, make the low-fidelity prototype explain its own function without a facilitator, then test it with users watching for both delight and pain.
- When deciding how much technology a feature needs, name its role (assistant, teacher, and so on), interview people who do that job well, and check whether a simpler technology would achieve the same result.
- When an AI feature learns from data, test results with people who were not in the training sample and check that the sample covers your whole customer base, because dataset bias shows up as features that work only for a subgroup (the toolkit's example: camera tracking that failed for darker skin tones).
- When an AI feature makes associations (translation, captions, recommendations), audit outputs for stereotypes (e.g. gendered job titles), because training data multiplies cultural bias.
- When an AI system automates a decision or edit (beauty filters, ranking, triage), keep a human point of view in the loop and let people override it, because automation can impose goals that contradict users' own.
- When a system learns live from user input (chatbots), add safeguards against deliberate poisoning before launch.
- When personalizing, add moments of discovery and an easy way to change course, so recommendations don't trap people in echo chambers or keep suggesting what they already bought.
- When collecting data from under-represented users, build consent and privacy into each step of the journey rather than burying it in legal agreements, because people won't contribute data to systems they expect to be used against them.
- When framing AI bias for a team, present it as a spectrum of small everyday exclusions, not only headline scandals, because teams engage faster with the mundane cases.

## Evidence & caveats
- The toolkit is a design-practice framework from a company design team, built on "hundreds of hours of research" and expert advisers (Jutta Treviranus, Graham Pullin, Allen Sayegh), but it reports no studies, effect sizes or evaluations of the method's impact.
- The Persona Spectrum statistic (26,000 vs 20M+) aggregates several sources (US Census Bureau, Limbs for Life, Amputee Coalition, CDC and others) without showing the calculation; treat it as illustrative.
- The "solve for one, extend to many" examples (captions, high contrast, remote controls, audiobooks, email) are well-known curb-cut stories; they show that it can happen, not how often a solution designed for one group actually generalizes.
- The toolkit is internally tense about simulation: it warns against relying on blindfolds and earplugs yet includes a Simulations activity. Use the activity only as a friction-finding tool, never as a substitute for participants.
- It is explicitly not a process for meeting accessibility standards; pair it with WCAG (books/wcag-22.md) for compliance.
- The AI primer predates generative AI (it mentions GDPR adoption as a recent development) and doesn't cover hallucination, prompt injection or LLM evaluation; its five bias categories still work as a review checklist.
- The newer site promotes Microsoft products as examples (Copilot, Live Captions, Mesh avatars); treat those as marketing case studies, not evidence.

## Disagreements with other references
- `references/interaction/accessibility.md` §0 cites the persona spectrum as framing [moderate] and the WHO's ~1.3 billion figure. Both are consistent with the toolkit; keep the label at moderate-to-weak because the toolkit gives no measurement of reach.
- `references/process/research-methods-selector.md` and the techne evidence hierarchy rank behaviour at scale above small qualitative work. The toolkit is almost entirely qualitative (interviews, observation diaries, low-fi tests). Use it to generate hypotheses and recruit for diversity, then measure with the usual methods.
- `references/future/ai-ethics-gate.md` and `references/future/human-ai-trust-errors-uncertainty-oversight.md` cover AI oversight and errors in more depth; the toolkit's bias taxonomy adds dataset, association and interaction bias checks that are useful at the data and training stage.
- books/coga-usable.md and the toolkit agree on including people with disabilities throughout design; COGA adds concrete test protocols and consent practices for vulnerable participants that the toolkit lacks.

## Best quotes (< 25 words each, max 5)
- "Exclusion happens when we solve problems using our own biases." (Principles)
- "accessibility is an attribute, while inclusive design is a method." (Inclusive 101)
- "Designing with constraints in mind is simply designing well." (Inclusive 101)
- "Products with small moments of bias are not good products." (In Pursuit of Inclusive AI)

## Related
- references/interaction/accessibility.md, references/process/research-methods-selector.md, references/process/process-playbook.md, references/future/ai-ethics-gate.md, references/future/human-ai-trust-trust-and-reliance.md
- references/books/wcag-22.md, references/books/coga-usable.md, references/books/inclusive-components.md
- Kat Holmes, *Mismatch* (2018) and Graham Pullin, *Design Meets Disability* (2009) — not read.
