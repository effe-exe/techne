---
title: "The Dribbblisation of Design"
author: "Paul Adams (Intercom)"
year: 2013
domains: [process, critique, inspiration, product-strategy, hiring]
evidence: "weak"
---

# The Dribbblisation of Design — Paul Adams

Use this when: a design review, portfolio or AI-generated concept is all polish and no problem; someone proposes "redesigning" a famous product from screenshots; you need to order work from outcome to visuals; you're judging design candidates or your own output and want to weigh thinking over pixels.

Source: https://www.intercom.com/blog/the-dribbblisation-of-design/ (Intercom blog, 18 Sep 2013). Read in full (~1,900 words), including the closing notes on the four-layer model's origin and the reply to critics. The four-layer diagram and the Facebook and Intercom product-architecture diagrams are images I couldn't view. Their content is described here only as far as the text states it.

## The big idea (3 sentences)
Adams, reviewing applicants at Facebook and Intercom, argues that a community rewarding shots ("Looks awesome!") pushes designers to design for their peers instead of for real problems inside a real business, producing look-alike, pixel-perfect work that ignores constraints. Product design should flow top-down through the company's mission, vision and product architecture (the objects in the system and their relationships), and then through four layers in order: outcome, system, interaction, and only last visual design. The valuable artefacts are therefore the sketches, tradeoffs, diagrams, job statements and prototypes with real data, not the final PNG.

## Core concepts
- **Designing for peers vs for problems.** It parallels award-chasing in advertising: work that looks great, doesn't work well, ignores business goals and the wider ecosystem, and converges on one style ("Blur your eyes and try and tell the difference").
- **The medium shapes the message.** A platform that foregrounds color palettes and static images makes those the things people optimise.
- **What good applicants send:** their thought process, sketches, diagrams, pros and cons, real problems, tradeoffs, and prototypes that move and use real data. **What weak applicants send:** flat PNGs and PDFs of wireframes with no problem, constraints or context.
- **Redesigns of other people's work are "folly".** Outsiders don't know the requirements, constraints or organisational politics behind a product's decisions.
- **Artist/stylist vs product designer.** Making beautiful things is an important skill, but product design means solving people's problems within a specific business's constraints.
- **Mission → vision → product architecture.** Product architecture isn't information architecture (pages and links) or a technical architecture. It is the building blocks: the objects in the system and their relationships. Facebook's was described as a directory of people and their interests, a directory of businesses, and a map of the relationships among them. Designers may have to help create the mission and the architecture if they are missing.
- **Four layers, top-down:** (1) outcome, (2) system/structure, (3) interaction, (4) visual design (grid, font, color, aesthetic). Working only in layer 4 "is art not design". The model adapts a six-layer model from the consultancy Flow, itself derived from Jesse James Garrett's diagram.

The four layers turned into a review checklist (the layer names are Adams's; the questions and artefacts are techne's application of them):

| Layer | Question to answer first | Artefact that answers it |
|---|---|---|
| 1. Outcome | What job and what change for the person and the business? | job statement, success metric |
| 2. System | Which objects and relationships does this touch? | product-architecture diagram, breadboard |
| 3. Interaction | How does the person move through it, including states? | flow, prototype with real data |
| 4. Visual | How does it look and feel? | tokens, comps, polish pass |

A design review that starts at layer 4 should be sent back to layer 1.

- **Systems over pages.** As software spreads into everything, designers will design systems; wireframe PDFs and Photoshop are "dying" deliverables. Define the problem and solution in terms of what happens between components, then prototype and code with real data.
- **Job framing.** Intercom frames every design problem with Christensen's Jobs: *When ___, I want to ___, so I can ___.* Example: "When an important new customer signs up, I want to be notified, so I can start a conversation with them." This lets the job be mapped to the mission and prioritised.
- **Pattern library.** Intercom was building one so that design happens more in library code than in Photoshop.
- **Visual design isn't separable.** Answering critics, Adams says you can't do the visual design of an interactive product without its interaction and system design: "This is not graphic design."

## Actionable heuristics for product design
- When starting any L1+ task, write the outcome (a job statement in *When / I want to / so I can* form) and the system objects involved *before* opening a visual tool, because layer 4 decisions are meaningless until layers 1–3 are settled.
- When a request arrives with a mockup or a reference shot, ask: which job does it serve, what objects and relationships does it touch, and what constraint does it ignore? Treat a missing answer as an open question, not a detail.
- When reviewing a design (your own, a candidate's or an AI's), ask for the reasoning artefacts (sketches, options considered, tradeoffs, the constraint that ruled out each alternative). Weight them above the final render.
- When evaluating a portfolio, prefer case studies with a stated problem, constraints, tradeoffs and moving prototypes with real data over polished static screens.
- When someone proposes redesigning a well-known product from the outside (a "what if X looked like this" concept), treat it as visual exploration, not evidence, because the business, technical and organisational constraints are invisible from outside.
- When using Dribbble/Behance-style references, extract visual vocabulary only. Re-test them with real content lengths, real data and real states before adopting anything (see `references/inspiration/source-registry.md`).
- When the product lacks a clear mission or product architecture, make drafting one (a one-page object/relationship diagram) part of the design work, because without it feature decisions can't be prioritised or kept coherent.
- When a design looks like everything else in its genre ("blur your eyes" test), check whether it is solving this product's job or copying the platform's trend.
- When prototyping, use real data and real motion as early as possible, because real data "inevitably shows things that were overlooked" (long names, empty states, odd distributions).
- When an AI tool generates a polished screen in seconds, run the same test you'd run on a Dribbble shot: name the job, the objects, the states and the constraints it ignores before polishing it, because instant polish is the 2013 problem at scale.
- When sharing work in progress with a team or stakeholders, show the whiteboard and the tradeoffs (what was considered and why it lost), not only the final render. Adams treats these discussions as the most important part of the process.
- When writing a case study or design rationale, structure it as problem → constraints → options → tradeoff → decision → evidence, so the reasoning can be checked and reused.
- When the visual style is being decided, check it against the four layers: does the style serve the outcome (e.g. density for a data tool, calm for a support inbox) or just the current trend?
- When building a design system, model it on the product architecture (objects and relationships), not just on visual components.

## Evidence & caveats
- This is an opinion essay from a senior practitioner, based on his experience reviewing applicants at Facebook and Intercom. There is no sample size or systematic comparison. [weak/expert opinion; widely cited]
- The "four layers in order" is a heuristic for priority, not a strict waterfall. Adams himself describes iterating and fine-tuning with real data; real work loops between layers.
- It risks underrating visual craft. Aesthetics affect perceived usability and trust, and visual exploration can reveal interaction ideas. Read it as "visuals last in priority", not "visuals don't matter".
- Dated: the tool claims (Quartz Composer, Keynote and After Effects as prototyping tools; Photoshop as "dying") are of their time, and "by 2020, if not before, all businesses will be web businesses" was a forecast. The core critique transfers directly to AI image and UI generators, which produce polished, homogeneous, context-free screens on demand.
- Adams notes he isn't attacking Dribbble the product but what its community rewards; he also says Dribbble could steer that community.

## Disagreements with other references
- `references/inspiration/source-registry.md` and `references/inspiration/inspiration-method.md` already cite this essay to rank shipped work above concept shots. Those files allow Dribbble for visual vocabulary, which Adams wouldn't object to. No conflict, though Adams is harsher.
- SKILL.md §2 ("Beauty raises perceived usability and trust but doesn't fix task failure") and `references/masters/taste.md` give aesthetics more standing than Adams's "art not design". Trust both: visual quality is a real lever on perception, but only after outcome, system and interaction are sound. Adams's ordering is the right default for product surfaces.
- `references/process/process-playbook.md` §2.2 attributes the job story ("When [situation], I want to [motivation], so I can [expected outcome]") to Alan Klement / Intercom, ~2013. This essay (Sept 2013) is an early public Intercom use and credits Clayton Christensen's Jobs framework. The attribution is consistent; cite both.
- `references/books/shape-up.md` (Singer) agrees that roughness is a feature at the start and that affordances come before pixels. Adams adds the mission/architecture layer above the problem, which Shape Up leaves to the shapers' judgement.

## Best quotes (< 25 words each, max 5)
- "Too many designers are designing to impress their peers rather than address real business problems."
- "The most important product design work is usually the ugliest"
- "Blur your eyes and try and tell the difference."
- "A product architecture is not an information architecture."
- "This is not graphic design."

## Related
- `references/inspiration/source-registry.md`, `references/inspiration/inspiration-method.md`, `references/masters/taste.md`, `references/process/process-playbook.md` (§2 framing, job stories), `references/process/heuristics-and-critique.md`, `references/interaction/design-systems.md`
- `references/books/shape-up.md`, `references/books/atomic-design.md`
- Paul Adams, "How to hire designers" (Intercom follow-up, not read here); Jesse James Garrett, *The Elements of User Experience* (the layered model it adapts).
