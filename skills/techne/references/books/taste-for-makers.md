---
title: "Taste for Makers"
author: "Paul Graham"
year: 2002
domains: [masters, taste, craft, process, critique]
evidence: "weak"
---

# Taste for Makers — Paul Graham

Use this when: a stakeholder says "design is subjective, so let's just pick one" and you need an argument that some designs are better; you are critiquing work and want a short checklist of traits that recur across fields; you are deciding whether to throw away a first version, how much to copy from references, or whether to chase a "signature style".

Source: http://www.paulgraham.com/taste.html (author's site, essay dated February 2002; later collected in *Hackers & Painters*, 2004). Read in full (~4,300 words), including the opening epigraphs and the endnote on Sullivan.

## The big idea (3 sentences)
Taste is not merely personal preference: anyone who gets better at designing notices that their old taste was worse, so good and bad design exist and can be studied. Across math, engineering, painting, writing and architecture the same principles of good work keep recurring, and Graham lists fourteen of them (simple, timeless, solves the right problem, suggestive, slightly funny, hard, looks easy, symmetric, resembles nature, redesign, can copy, often strange, happens in chunks, often daring). Great work usually starts from noticing something ugly and refusing to tolerate it; the recipe is very exacting taste plus the skill to satisfy it.

## Core concepts
- **Taste can be wrong** — if taste were only preference, everyone's would already be perfect and nobody could improve at design. Improvement implies a better and worse.
- **Simple** — beauty from a few well-chosen structural elements, not a profusion of ornament. Ornament is bad only when it camouflages weak form. Being forced to be simple forces you to face the real problem; reaching for swooshes and pompous tone is evasion.
- **Timeless** — aim to make something nobody can surpass; anything that would also have appealed in 1500 likely appeals in 2500, because the future, like the past, won't care about today's fashions.
- **Solves the right problem** — the stove: dials in a row are a simple answer to the wrong question; arrange dials like the burners. Sans-serif body text optimized for "pure letterforms" when the real problem was telling letters apart. Problems can be reframed as well as solved.
- **Suggestive** — leaves room for the user: a building as a backdrop for the life people want, software as a few basic elements users combine "like Lego".
- **Slightly funny** — humor signals strength; it is hard to call something humorless good design. Graham flags this one as possibly not always true.
- **Hard** — difficult constraints (a tough site, a small budget) strip away flourishes. Good pain (a hard problem) vs bad pain (a fickle client, unreliable materials). Faces are hard to draw because viewers notice a 5° change in an eye but not in a branch.
- **Looks easy** — ease is an illusion produced by practice and many rewrites ("the eighth rewrite"); line drawings are the hardest medium because they need near-perfect placement.
- **Symmetry** — repetition and recursion (repetition in sub-elements). Danger: using repetition as a substitute for thought.
- **Resembles nature** — nature has had a long time to work on the problem; working from life gives the mind something to chew on.
- **Redesign** — expect to throw away early work; cultivate dissatisfaction; make mistakes easy to admit and fix; prefer media that make change cheap (oil over tempera, the sketch).
- **Can copy** — the arc goes unknowing imitation → conscious originality → wanting to be right more than original. Unknowing imitation means you are probably copying an imitator.
- **Often strange** — can't be cultivated directly; don't squash it. The only style worth having is the one you can't help.
- **Happens in chunks** — great work clusters in communities (Florence in 1450, Bauhaus, Skunk Works, Xerox PARC); talent alone isn't enough.
- **Often daring** — look where conventional wisdom and truth don't quite meet.
- **Seeing ugliness is easier than imagining beauty** — most great work comes from fixing something someone found ugly ("What a hack!"), which requires knowing the field well.

## Actionable heuristics for product design
- When a team defends a design with "taste is subjective", ask each person to compare their own work from 2–3 years ago to now; if they see it as worse, they accept a standard exists, and the conversation can move to which principle a design violates.
- When a screen relies on gradients, glows, illustrations or clever copy to look finished, strip them and check whether the bare layout and hierarchy still work, because ornament is a problem only when it hides weak form.
- When a control maps to physical or spatial things (burners, seats, rooms, layers, tracks), lay out the controls in the same arrangement as the things they control, because a row of identical controls makes users stop and work out the mapping every time.
- When choosing a typeface or a component for "purity" or trend, ask which problem it must solve in this context (legibility, glanceability, density) and choose for that, because a lot of bad design is "industrious, but misguided".
- When a problem looks intractable, try reframing it into an equivalent one that is easier (change the question, the unit, or the default) before polishing a solution to the hard version.
- When designing a tool or platform, offer a small set of composable primitives rather than a fixed sequence of prescribed steps, because good design lets people use it the way they want.
- When you can't decide between two directions, ask which would still look right in 5–10 years and which would also have made sense a generation ago; prefer the one that passes both, because fashion is time-bound and merit isn't.
- When a first version works but feels awkward, plan to redesign it rather than rationalize it ("maybe it's meant to look that way"), and budget for 5–6 attempts at the critical element, as with Leonardo's lines; the 911's rear and the Guggenheim spiral came from redesigning awkward first tries.
- When choosing tools for exploration, choose ones that make change cheap (code prototypes with hot reload, components, variables), because media that are easy to overpaint let you take on harder subjects.
- When using references, know where each idea came from and take it from the original, not a copy of a copy, because unknowing imitation is "almost a recipe for bad design".
- When a team member wants a distinctive "signature style", redirect the effort into getting the details right; style emerges from consistently good decisions, not from pursuing it.
- When repeating a pattern across a system (cards, lists, sections), check that each repetition is earned by the content, because repetition can stand in for thinking.
- When a design element is something users look at very closely (faces, avatars, typography at large sizes, numbers in a dashboard), spend disproportionate effort on it, because viewers detect small errors there that they'd never notice elsewhere.
- When building a design team, put talented people near each other and near the hard problems, with frequent critique, because great work clusters in communities.
- When you notice a "hack" that everyone tolerates (a confusing default, a workaround users have memorized), treat it as a lead for great work, provided you understand the domain well enough to know why it exists.

## Evidence & caveats
- An essay of opinion and analogy, not research. The 14 traits are Graham's synthesis from examples he admires; he presents several tentatively ("may not always be true", "it may just be my own stupidity").
- Examples are drawn heavily from Western fine art, mathematics and engineering, and from a small canon (Leonardo, Dürer, Porsche 911, SR-71, Lisp). Cultural range is narrow; see `references/masters/taste.md` (Bourdieu) on taste as group signaling.
- Some claims are contestable or dated: "a problem that can be solved by recursion is nearly always best solved that way" is a programmer's preference; the sans-serif legibility point reflects print-era debate, and on modern screens well-designed sans-serifs are standard for UI text (see `references/visual/typography.md`).
- "Florence effect" (great work comes in clusters) is a plausible historical observation, but the essay offers no data and ignores survivorship and documentation bias.
- Graham notes in an endnote that Sullivan actually wrote "form ever follows function"; this matches the attribution in `references/masters/master-lenses.md`.

## Disagreements with other references
- `references/masters/taste.md` defines taste as perception, discrimination, articulation and calibration, and insists taste be corrected by user data. Graham's essay has almost no role for users or evidence; calibration comes only from the maker's own growing dissatisfaction and from peers. Trust taste.md's calibration step: Graham's traits *propose*, data *decides* (techne's stance).
- Graham's "good design is suggestive" (give users Lego-like elements) can conflict with `references/masters/master-lenses.md` and Magic Ink (`references/books/magic-ink.md`), which push for software that answers questions with no interaction. Resolve by software type: composable primitives for manipulation tools; opinionated answers for information software.
- "Good design is often daring/strange" tensions with `references/masters/timeless-principles.md` (convention vs invention: be conventional outside the core value) and `references/inspiration/inspiration-method.md` (MAYA boundary). In commodity flows (checkout, sign-in, settings) convention wins; spend strangeness only in the core.
- "Good design can copy" agrees with `references/inspiration/inspiration-method.md` §8 (transform, don't copy) on principle-level borrowing; that file adds the legal and trade-dress limits Graham doesn't discuss.

## Best quotes (< 25 words each, max 5)
- "Saying that taste is just personal preference is a good way to prevent disputes. The trouble is, it's not true."
- "When you can't deliver ornament, you have to deliver substance."
- "A lot of bad design is industrious, but misguided."
- "The only style worth having is the one you can't help."
- "The recipe for great work is: very exacting taste, plus the ability to gratify it."

## Related
- `references/masters/taste.md` (taste model; Hume, Kant, Bourdieu, Kocienda)
- `references/masters/timeless-principles.md` (simplicity, timelessness, convention vs invention)
- `references/inspiration/inspiration-method.md` (copying and transformation rules)
- `references/books/everything-is-a-remix.md` if present (copy, transform, combine)
- Paul Graham, *Hackers & Painters* (2004)
