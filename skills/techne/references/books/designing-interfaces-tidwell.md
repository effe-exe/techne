---
title: "Designing Interfaces: Patterns for Effective Interaction Design (3rd ed.)"
author: "Jenifer Tidwell, Charles Brewer, Aynne Valencia"
year: 2020
domains: [interaction, visual, process, information-architecture]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Designing Interfaces (3rd ed.) — Jenifer Tidwell, Charles Brewer, Aynne Valencia

Use this when: you need a named, reusable pattern for a common screen problem (navigation, list browsing, forms, multi-step tasks, dashboards) and want its context and trade-offs rather than inventing from scratch; you are critiquing a layout and want shared vocabulary for its parts (posture, working surfaces, overview/detail); you are choosing a visual style direction (flat, skeuomorphic, illustrated, minimal, adaptive) for a product.

Basis: the 3rd edition (O'Reilly, 2019/2020) was not read. These notes rest on three legal sources: (1) Tidwell's own **Common Ground: A Pattern Language for Human-Computer Interface Design** (1999, still hosted on her MIT page). It is the direct ancestor of the book, about 45 written patterns, read in full. (2) The **3rd edition's full table of contents**, from the authorized Polish edition's official sample (Helion, published by permission of O'Reilly). (3) That sample's **Chapter 5, "Visual Style and Aesthetics"**, read in full in the authorized Polish translation. The 3rd edition's specific advice in chapters 1–4 and 6–12 (mobile, lists, actions, complex data, forms, UI systems/atomic design, beyond mobile) is known here only by pattern name. Coverage is low. Treat anything about those chapters as "the book has a pattern called X", not as its content.

## The big idea (3 sentences)
Good interfaces reuse proven solutions, so a designer should learn a vocabulary of patterns: each says what the solution is, when to use it, why it works and how to build it, with examples. A pattern is not a widget or a style-guide rule. It describes the invariant qualities of every good solution to a recurring problem in a given context, which is why many survive changes in platform (Tidwell's 1999 test was whether a pattern holds across paper, hardware, games and GUIs). Patterns don't replace research and iteration. They make the first guesses better, so that testing with users refines a design instead of rescuing it.

## Core concepts
- **Pattern anatomy** — 1999: context, problem, forces, solution, resulting context. 3rd ed.: What / Use when / Why / How / Examples. The "forces" (competing pressures) are the most useful part, because they say when the pattern stops being right.
- **Pattern language, not catalogue** — patterns are meant to combine. Most work at several scales (a Form can be the whole app or one panel), and choosing one primary pattern implies a "sublanguage" of supporting ones.
- **Two jobs of every interface** (1999) — shape the user's *understanding* of content by unfolding it at the right pace, and help the user *accomplish a task* so smoothly that the tool fades from awareness ("flow").
- **Primary shapes of content and action** (1999) — Narrative, High-density Information Display, Status Display; Form, Control Panel, WYSIWYG Editor, Composed Command (command line or speech), Social Space. Recognizing the genre sets user expectations ("what do I do first?").
- **Posture** (borrowed from Alan Cooper) — *Sovereign* (all-day tool: use the space, put tools at the edges, don't over-explain), *Helper* (occasional use: verbose labels, only the commonest actions, brighter and bigger is fine), *Background* (ambient: small, muted, no motion).
- **Working surfaces** — central, tiled (nothing hidden, good for monitoring), stacked (tabs; never reorder the labels), piled (overlapping windows).
- **Conceptual-model fidelity** — users build a mental model from what they see. When the interface mirrors a sound underlying model, behavior becomes predictable and errors become understandable.
- **3rd ed. structure (from the TOC):**
  - Ch. 1 "Designing for People": the cognition and behavior patterns Safe Exploration, Instant Gratification, Satisficing, Changes in Midstream, Deferred Choices, Incremental Construction, Habituation, Microbreaks, Spatial Memory, Prospective Memory, Streamlined Repetition, Keyboard Only, and Social Proof/Collaboration;
  - Ch. 2: IA, with screen types Overview / Focus / Make / Do and organizing schemes (alphabetical, number, time, location, hierarchy, category/facet);
  - Ch. 3: navigation models (hub and spoke, fully connected, multilevel, step by step, pyramid, flat);
  - Ch. 4: layout (visual hierarchy, four Gestalt principles, visual flow, Center Stage, Grid of Equals, Titled Sections);
  - Ch. 5: visual style;
  - Ch. 6: mobile (Vertical Stack, Bottom Navigation, Infinite List, Generous Borders, Loading Indicators);
  - Ch. 7: lists (Two-Panel Selector, Thumbnail Grid, Carousel, Pagination, Jump to Item);
  - Ch. 8: actions (Prominent "Done" Button, Smart Menu Items, Preview, Cancelability, Multilevel Undo, Command History, Macros);
  - Ch. 9: complex data;
  - Ch. 10: forms and controls;
  - Ch. 11: UI systems and atomic design;
  - Ch. 12: beyond mobile.
- **Visual style (Ch. 5)** — aesthetics are part of function. The chapter opens with the Stanford Web Credibility finding that a site's look was users' top credibility cue. Principles covered: visual hierarchy (clarity, actionability, affordance, composition, consistency, alignment), color, typography, readability, evoking a feeling (spaciousness/crowding, angles/curves, texture/rhythm), imagery, and repeated motifs as the source of unity. Styles reviewed: skeuomorphic, illustrated, flat, minimalist, adaptive/parametric.

## Actionable heuristics for product design
- Before designing a screen, name its primary shape (form, control panel, editor, status display, browse/overview, focus, make, do). Then use that genre's conventions, because users bring expectations from it. Break them only on purpose.
- Pick the posture from real usage frequency. For all-day tools, pack density, put tools at the edges and spend nothing on explanation. For occasional-use flows (settings, onboarding, a yearly tax step), use plain verbose labels and show only the commonest actions, because nobody reads a manual for something they use twice a year.
- For a large set of items, use Overview Beside Detail (list + detail, two-panel selector): keep both visible and update the detail as soon as the selection changes, so users never have to switch context.
- On a status or monitoring display, never rearrange items unless the user does. Make the alarm level match the real importance: calm by default, loud only when it matters.
- Always offer Go Back One Step and Go Back to a Safe Place (back, undo, home, escape hatch), because safe exploration is how people learn an interface. Multilevel undo is better than confirmation dialogs.
- When a confirmation is unavoidable (Reality Check), describe the specific side effects ("This deletes 14 files shared with 3 people"), not a restatement of the action.
- Use Good Defaults that are visible and obviously editable. Ask only what the task needs now (Deferred Choices), so registration doesn't block the first success.
- For choices: from a small set, show every option and make single vs multiple choice unmistakable, with "Other/None" when users may know better than you. From a large set, show the current value, keep the options one gesture away, order them by how people search, and allow typing to jump.
- Structure free-text fields (dividers, formats, forgiving parsing) to show the expected input, but test that the structure doesn't reject real-world values.
- For progress, show the proportion done when it is knowable, otherwise a liveness indicator. A clear end state tells the user they can relax.
- Disable an irrelevant control in place (greyed out) when users should know it exists. Hide it when they shouldn't. Pair a disabled state with a reason when users will wonder why.
- Use color for section identity or status only together with a second cue (shape, text). The stop sign is the authors' example of color + shape + word.
- For visual tone, decide deliberately. Lots of white space reads calm, open or premium. Density reads busy or urgent, unless the elements still have room to breathe. Right angles read calm and diagonals dynamic. One saturated accent among muted colors directs attention.
- For long-session enterprise tools and stressful control contexts, mute saturation, contrast and texture and strip anything decorative, because the authors say cognition beats aesthetics there.
- Support OS high-contrast and large-text settings. The authors call this a moral obligation, and in many markets it is also a legal one.
- Use icons in a single consistent style with text labels. Prefer conventional icons over invented ones so users don't have to learn new meanings.
- Get unity from repetition: one body typeface, the same heading treatment everywhere, a recurring angle or curve. Users assume that things that look alike behave alike, so never style unlike things the same way.

## Evidence & caveats
- Pattern books are distilled practitioner experience, not experiments. Tidwell said in 1999 that the language had "not been used enough to generalize from successful examples". Most patterns are well-tested conventions, but the book doesn't prove each one with data.
- The 1999 material is old (VCRs, Windows 95, frames). Its value is the problem/forces/solution reasoning, not its examples. I have assumed that the 3rd edition modernizes the examples and the mobile, list, form and design-system content, but I couldn't read those chapters.
- Some Ch. 5 typography advice is out of date relative to techne's own files. It suggests ~12 pt body and minimum ~10 pt, and says serif text renders poorly on screens. `references/visual/typography.md` recommends 16px web body and treats serif vs sans on modern screens as mostly a non-effect. Trust the typography file.
- Ch. 5 gives color-vision deficiency as 10% of men and 1% of women, higher than the commonly cited ~8% / ~0.5% for Northern European populations (`references/visual/color.md`). The design consequence (never rely on color alone) is the same.
- The emotional associations of styles (calm vs dynamic, formal vs informal) are expert opinion, plausible but not quantified in the excerpt.
- The Stanford Web Credibility result (2002) is real but correlational and old. Use it to argue that polish affects trust, not as an effect size.

## Disagreements with other references
- `references/interaction/platform-conventions.md` (Jakob's Law, platform HIGs) is the stronger authority on platform-specific choices such as tab bars, sheets and touch targets. Use Tidwell's patterns for the platform-neutral structure and the platform guides for the details.
- `references/visual/typography.md` and `references/visual/color.md` win on concrete type sizes, contrast ratios and CVD figures (see caveats).
- `references/books/wertheimer-gestalt-laws.md` and `references/books/wagemans-gestalt-century.md` give the primary research behind the "four Gestalt principles" of Ch. 4.
- Common Ground's "Helper Posture: don't be afraid of verbosity" can seem to clash with "omit needless words" advice in UX copy guidance. It doesn't really: verbosity here means explicit labels instead of icons or jargon, not padded sentences.

## Best quotes (< 25 words each, max 5)
- "Never underestimate the power of beauty." (epigraph of Ch. 5, translated back from the Polish edition, so wording may differ)
- "If a pattern is invariant across such different forms as paper, hardware, video games, and desktop GUIs, there must be truth in it." (Common Ground, 1999)
- "User contact and iteration are the keystones of good design." (Common Ground, 1999)

## Related
- `references/process/heuristics-and-critique.md`, `references/process/states-and-edge-cases.md`
- `references/interaction/platform-conventions.md`, `references/interaction/design-systems.md`, `references/interaction/microinteractions-and-motion.md`
- `references/visual/layout-spacing-elevation.md`, `references/visual/typography.md`, `references/visual/color.md`
- `references/books/magic-ink.md` (information software over interaction), `references/books/apple-hig.md`, `references/books/wertheimer-gestalt-laws.md`
- Books: Christopher Alexander, *A Pattern Language*; Alan Cooper, *About Face* (postures)

## Sources
- Tidwell, J. (1999). Common Ground: A Pattern Language for Human-Computer Interface Design. https://www.mit.edu/~jtidwell/common_ground.html (one-file version: https://www.mit.edu/~jtidwell/common_ground_onefile.html; preface: https://www.mit.edu/~jtidwell/ui_patterns_essay.html), read in full; saved to books/free/designing-interfaces/
- Official sample (TOC + Chapter 5 excerpt, pp. 239–269) of the authorized Polish 3rd edition *Projektowanie interfejsów. Sprawdzone wzorce projektowe. Wydanie III* (Helion, 2020, "published and sold by permission of O'Reilly Media"): https://pdf.helion.pl/proji3/proji3.pdf ; listing page: https://helion.pl/ksiazki/projektowanie-interfejsow-sprawdzone-wzorce-projektowe-wydanie-iii-jenifer-tidwell-charles-brewer-aynne-valencia-br,proji3.htm
- English 3rd edition TOC (publisher-licensed retailer listing): https://helion.pl/ksiazki/designing-interfaces-patterns-for-effective-interaction-design-3rd-edition-jenifer-tidwell-charles-brewer-aynne-valencia,e_1eqx.htm
- Not reachable from this environment: designinginterfaces.com (Tidwell's pattern site for the 1st/2nd editions) and oreilly.com's book page.
