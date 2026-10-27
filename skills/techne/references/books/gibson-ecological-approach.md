---
title: "The Ecological Approach to Visual Perception"
author: "James J. Gibson"
year: 1979
domains: [psychology, perception, affordances, interaction, spatial-ui, motion]
evidence: "mixed"
basis: "author's free material, not the full book"
coverage: medium
---

# The Ecological Approach to Visual Perception — James J. Gibson

Use this when: someone says "affordance" in a critique and you need to know what Gibson actually meant; designing spatial, AR/VR, 3D, map or canvas interfaces where layout, occlusion and motion carry meaning; designing transitions that must show where things went (hidden vs gone); deciding how much meaning should be visible in the structure of a screen instead of explained in text.

Basis: the 1979 book is in print and not legally free. These notes rest on Gibson's own seminar papers, "The Purple Perils", which the International Society for Ecological Psychology hosts online (copyright Eleanor J. Gibson; released for scholarly use and cited as unpublished manuscripts). Read: "A Preliminary Description and Classification of Affordances" (1971), "More on Affordances" (1971), "Terms Used in Ecological Optics" (1970), "Memo on the Visual Perception of Tangible and Intangible Things" (1970), "Invariants in the Changing Optic Array" (1971), "On the Nature of Pictorial Representation" (1972), "Overt and Covert Attention" (1974), "The Perceiving of the Hidden: A Tentative Set of Theorems" (1974), "What is it to Perceive?" (1976) and "A Note on Substances, Surfaces, Places, Objects, Events" (1979), which summarises the book's ontology. These are drafts of the book's chapters on affordances, ecological optics, occlusion, pictures and attention. The book's final wording, its figures, and its chapters on locomotion and visual kinesthesis (optic flow) are covered only via the 1971 invariants list.

## The big idea (3 sentences)
Animals don't perceive abstract space or meaningless sensations to be interpreted later; they perceive the environment directly: substances, surfaces, places, objects and events, and above all what these *afford* them, the actions and dangers they offer. That information is already in the structure of ambient light, especially in what stays invariant as the observer moves (occluding edges, texture flow, accretion and deletion), so perception is active exploration that picks up invariants, not a picture assembled in the head. An affordance "points both ways", to the environment's physical properties and to the animal's abilities, so meaning and value are real relations an observer can see, not mental add-ons.

## Core concepts
- **Affordance** — what a thing furnishes an animal, for good or ill: stand-on-able, sit-on-able, graspable, climbable, conceals, cuts, burns. Properties of the environment *relative to* an animal: neither purely subjective nor plain physics.
- **Affordances are relative to the actor** — the same layout affords different things to different animals, according to what each can do. A gap is jumpable depending on its width and the jumper.
- **Negative affordances** — injury as well as benefit: the cliff edge affords falling, deep water drowning, a looming object collision. Seeing them at a distance is vision's great value: they can be avoided if perceived.
- **Some affordances aren't specified in light** — a coming rock-fall, lightning, sunburn or radiation are not visible, or not without training. Food and poison can look alike.
- **Meaning is seen, not added** — to see that a surface is level and solid is already to see it is walk-on-able. Gibson rejects the "enrichment" view in which raw sensations come first and meaning is attached later.
- **Ecological ontology** — substances, surfaces (interfaces between substance and medium), places (nested semi-enclosures), objects (detached or attached closed surfaces), events (reversible or irreversible changes). They nest and can't be neatly counted or put into sets.
- **Ambient optic array and invariants** — light at a point of observation is structured. What specifies the world is what stays invariant under change (as you move or things turn), not the frozen form at one instant. A frozen array is a limiting, more ambiguous case.
- **Specific invariants** (1971 list) — persisting texture means solid surface; texture deleted or accreted at one side of a contour means an occluding edge; a closed contour whose inside persists while outside is wiped means a detached object (the reverse means a hole or window); symmetrical expansion means something on a collision course; the centre of outflow is where you are heading.
- **Hidden vs gone** — the law of reversible occlusion: a surface that goes out of sight through movement can come back by the opposite movement; a surface that goes out of *existence* cannot. Observers perceive the continuation of the hidden behind occluding edges, which is why we can point to things out of sight.
- **Attention is exploration** — overt attention is orienting, exploring and adjusting the eyes and body to pick up information, a circular sensorimotor process. What catches the eye is an invariant that specifies something important, not raw intensity or colour. Lab methods that freeze the eye make perception look passive.
- **Pictures** — a picture doesn't work by resemblance or point-to-point projection. It provides partial, selected optical information (the invariants for edges, corners, distance), and there is always information specifying the picture surface itself. A caricature can specify a person better than a photo.
- **Displays** — artifacts presenting a delimited, often frozen, optic array: much of classic perception research studied these, not the real environment.
- **Rigidity is the deepest norm** (1974) — the key invariant of the permanent environment is that it is solid and resists deformation, more basic than straightness, right angles or Gestalt "good form". Rigidity is what lets the layout persist while things change.
- **"Margin of safety"** — behaviour with fire, edges and traffic is continuously controlled by seeing the limit, not by discrete stimulus–response.

## Actionable heuristics for product design
- When a critique says "this button has no affordance", restate it in Gibson's terms: on screens the action usually exists (anything can be clicked); what's missing is *information that specifies it*. Fix the visible structure (container, edge, depth, label, cursor, convention), then test whether first-time users find it. See `references/books/design-of-everyday-things.md` for Norman's signifier vocabulary.
- When an action is dangerous or irreversible (delete, publish, send money, revoke access), make the "cliff edge" visible before the user reaches it, through placement, distinct styling, and the consequence stated where the action is, because negative affordances are useful only if perceived at a distance. Don't rely on a confirmation dialog alone.
- When a risk can't be seen in the interface (a background sync that will overwrite, an AI action with side effects, data shared with third parties), surface it on purpose, because Gibson notes that some dangers aren't specified in light; on screens nearly every consequence is invisible unless designed in.
- When elements leave the screen, make it clear whether they are *hidden* (scrolled, collapsed, in a drawer, behind a tab) or *gone* (deleted, archived, sent). Animate hidden things with reversible motion (slide under an edge, collapse into the parent) and make deletion look different (fade or dissolve, plus undo), because perceivers rely on reversible occlusion to know they can get something back.
- When designing transitions between views, keep the shared object continuous and let content enter or leave from an occluding edge (a sheet sliding over, a card expanding from its place), because accretion and deletion at an edge specify layering and "behind", the same invariants that tell us one surface hides another. Avoid cross-fades for spatial navigation.
- When designing for scroll, canvas, map or 3D, give the user persistent texture or structure to move against (a grid, content density, a minimap, edges that occlude) so motion specifies direction and position. Featureless pans and zooms are the "frozen, textureless" limiting case and disorient.
- When something is heading toward the user (incoming notification, approaching deadline, an expanding modal), remember that symmetrical expansion reads as approach and impact. Reserve looming motion for genuinely urgent events; use gentler entry for routine ones.
- When building AR/VR or spatial interfaces, design affordances scaled to the body (reach, eye height, hand size, step size), because affordances are relative to the actor. Test with people of different sizes and abilities; an affordance for one body isn't one for another (see `references/books/microsoft-inclusive-design.md`).
- When users explore an interface (hovering, peeking, scrolling to check), support it with cheap, reversible looks (hover previews, peek, back that restores state), because perception is active exploration; designs that punish looking (state loss, irreversible taps) make people perceive less.
- When showing images, diagrams or icons, design for the distinctive features (the invariants) rather than photographic resemblance, because a selective drawing or caricature can specify a thing better than a photo. Simplified icons work when they keep the edges and relationships that identify the object.
- When content moves, keep the frame (navigation bars, the page, the canvas) rigid and stable, and let only what is changing deform or move, because a rigid, persisting layout is what lets people perceive change against it. Wobbling, elastic or shifting containers (layout shift, bouncy chrome) destroy that reference (see CLS in `references/books/web-vitals.md`).
- When a control looks like a real surface (a skeuomorphic toggle, a 3D card), its implied physics must match what it does, because seeing "tangible" structure sets expectations of how it behaves when touched.
- When writing UI copy to explain what an element does, first try to make its structure say it, because Gibson's core claim is that meaning can be perceived directly from layout. Text then confirms what structure suggests (techne's "labels and signifiers stay" rule still applies).

## Evidence & caveats
- Strong: the claims that perception uses dynamic information (optic flow, accretion/deletion at occluding edges, looming/time-to-contact) are backed by decades of experiments, some cited in the 1971 list (Gibson et al. 1955, 1959, 1969; Schiff 1965). Motion-defined depth and looming are textbook findings.
- Contested: "direct perception" (no internal representation or inference) is a philosophical stance that mainstream cognitive science and neuroscience largely reject or soften; predictive-processing views treat perception as inference. Use the design-relevant parts (information is in structure and change) without needing to settle that debate.
- Affordance as a concept is widely accepted, but its definition has been argued over since (Turvey, Chemero, Norman). Gibson's notes themselves call the hypothesis "promising, radical, but not yet elaborated".
- Gibson studied the natural, terrestrial environment; screens are "displays" in his own terms, delimited and often frozen arrays. Transferring his findings to UI is analogy plus later HCI evidence, not Gibson's own claim.
- The Purple Perils are drafts never meant for publication; the book's wording and emphasis may differ.

## Disagreements with other references
- `references/books/design-of-everyday-things.md`: Norman borrowed "affordance" in 1988, later conceded he meant "perceived affordance" and introduced "signifier" (2013). Gibson's affordance exists whether or not perceived; he would call Norman's signifiers "information that specifies an affordance". Use Norman's vocabulary in product critique, Gibson's when the question is what the environment (or a spatial UI) really permits.
- `references/interaction/microinteractions-and-motion.md` defines affordance vs signifier correctly; this file adds motion rules grounded in occlusion and looming. No conflict.
- `references/books/wagemans-gestalt-century.md` and `references/books/wertheimer-gestalt-laws.md` treat grouping by static form; Gibson argues that form in a frozen picture is the ambiguous limiting case and invariants under motion carry more. Both apply to screens: static Gestalt rules for layout, Gibsonian invariants for transitions and spatial navigation.
- `references/books/ware-information-visualization.md` uses a processing-pipeline model of vision (features, patterns, objects), the very view Gibson rejected. For visualization design Ware's model is more operational; trust Ware for chart encoding and Gibson for motion, depth and spatial layout.

## Best quotes (< 25 words each, max 5)
- "The affordances of things are what they furnish, for good or ill, that is, what they afford the observer." (1971)
- "The affordance points both ways." (1971)
- "To perceive that a surface is level and solid is also to perceive that it is walk-on-able." (1971)
- "The act of attention is primarily an act of orienting, exploring, adjusting, and optimizing, not a process of filtering." (1974)
- "What catches the attention is what catches the eye." (1974)

## Related
- `references/books/design-of-everyday-things.md` (signifiers vs affordances)
- `references/interaction/microinteractions-and-motion.md`, `references/books/wwdc-fluid-interfaces.md` (continuous, interruptible motion)
- `references/psychology/cognition-perception-attention-reading.md`
- `references/books/wagemans-gestalt-century.md`, `references/books/ware-information-visualization.md`
- Other: Gibson, *The Senses Considered as Perceptual Systems* (1966); Reed & Jones (eds.), *Reasons for Realism* (1982); E. S. Reed, *James J. Gibson and the Psychology of Perception* (1988).

## Sources
All are J. J. Gibson, unpublished manuscripts ("Purple Perils"), ed. Pittenger, Reed, Kim & Best, © 1997 Eleanor J. Gibson, hosted by the International Society for Ecological Psychology (mirror of commons.trincoll.edu/purpleperils):
- Collection index and introduction: https://archive.ecological-psychology.com/purpleperils/ ; https://commons.trincoll.edu/purpleperils/
- A Preliminary Description and Classification of Affordances (Feb 1971): https://archive.ecological-psychology.com/purpleperils/a-preliminary-description-and-classification-of-affordances/
- More on Affordances (Mar 1971): https://archive.ecological-psychology.com/purpleperils/more-on-affordances/
- Terms Used in Ecological Optics (Jun 1970): https://archive.ecological-psychology.com/purpleperils/terms-used-in-ecological-optics/
- Memo on the Visual Perception of Tangible and Intangible Things (Sep 1970): https://archive.ecological-psychology.com/purpleperils/memo-on-the-visual-perception-of-tangible-and-intangible-things/
- Invariants in the Changing Optic Array (Jun 1971): https://archive.ecological-psychology.com/purpleperils/invariants-in-the-changing-optic-array-and-what-they-specify-for-an-observer-in-an-environment/
- On the Nature of Pictorial Representation (Oct 1972): https://archive.ecological-psychology.com/purpleperils/on-the-nature-of-pictorial-representation/
- Overt and Covert Attention (Jan 1974): https://archive.ecological-psychology.com/purpleperils/overt-and-covert-attention/
- The Perceiving of the Hidden: A Tentative Set of Theorems (May 1974): https://archive.ecological-psychology.com/purpleperils/the-perceiving-of-the-hidden-a-tentative-set-of-theorems/
- What is it to Perceive? (Apr 1976): https://archive.ecological-psychology.com/purpleperils/what-is-it-to-perceive/
- A Note on Substances, Surfaces, Places, Objects, Events (Jun 1979): https://archive.ecological-psychology.com/purpleperils/a-note-on-substances-surfaces-places-objects-events/
- Also read: Note on the Norms of Surface Layout (Dec 1974); The Problem of Information Pickup (May 1975), same site.
