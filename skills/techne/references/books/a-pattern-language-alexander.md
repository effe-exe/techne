---
title: "A Pattern Language: Towns, Buildings, Construction"
author: "Christopher Alexander, Sara Ishikawa, Murray Silverstein, with Max Jacobson, Ingrid Fiksdahl-King, Shlomo Angel"
year: 1977
domains: [masters, process, interaction]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: medium
---

# A Pattern Language — Christopher Alexander et al.

Use this when: you are structuring a design system or pattern library and want it to work as a *language* (patterns that call on each other across scales) rather than a pile of components; you are writing or reviewing pattern or component documentation (context, problem, forces, solution, links); you need an argument for designing in a sequence, deciding on site and growing piecemeal rather than drawing a full blueprint up front; a team copies "patterns" as templates without the problem and forces behind them.

Basis: the book (Oxford University Press, 1977, 1,141 pages per the publisher listing) was not read in full. These notes rest on legal free material from Alexander's own organisation, the Center for Environmental Structure, published at patternlanguage.com: **five complete patterns from the book**, offered there as free samples (37 HOUSE CLUSTER, 76 HOUSE FOR A SMALL FAMILY, 136 COUPLE'S REALM, 159 LIGHT ON TWO SIDES OF EVERY ROOM, 221 NATURAL DOORS AND WINDOWS); the **book's own "Summary of the Language"**, which lists all 253 patterns in sequence with the connecting sentences between groups; the site's descriptions of the book and of how patterns combine (*A Just So Story*); and Alexander's **1996 OOPSLA keynote** (official transcript), in which he explains what the pattern language was for, what it got wrong, and how software borrowed it. All were read in full. Coverage is medium for the *method*, which is the part product design uses: the pattern format, how patterns link, the sequence, the moral and generative aims, and the author's later critique. It is low for the 248 patterns not read in full, and the book's introduction, "Choosing a language for your project" and confidence ratings are not covered first-hand.

## The big idea (3 sentences)
Good places come from a shared "language" of patterns: each pattern names a recurring problem in a context, explains the forces behind it, and gives the core of a solution that can be built a million different ways. The patterns form a network from large to small (regions, then towns, then buildings, then rooms, then windows), and each one is completed by smaller patterns and helps complete larger ones, so people can design for themselves by walking through the language in sequence. The aim is not just function but places that are alive and humane, built piecemeal by the people who use them.

## Core concepts
- **A pattern** — a problem that recurs in an environment, plus the core of its solution, stated so it can be used again and again without ever being done the same way twice. The publisher calls the patterns "answers to design problems" (how high should a sill be?).
- **The pattern format** (as seen in the sample patterns):
  1. number and name;
  2. a context paragraph naming the larger patterns this one helps complete;
  3. a bold one-sentence problem;
  4. the discussion and evidence, with photos and diagrams;
  5. "Therefore:" and a bold solution stated as an instruction;
  6. a closing paragraph naming the smaller patterns that complete it.
- **A language, not a catalogue** — patterns are like words: stable units combined into endless "sentences". A house might use patterns about transitions, light, ceiling height and entrances. The links upward and downward are what make it a language.
- **Scale order** — 253 patterns in three parts: *Towns* (1–94, which "can never be designed or built in one fell swoop" and must grow piecemeal), *Buildings* (95–204, under the control of individuals or small groups), *Construction* (205–253). The summary is written as a sequence of instructions ("Within each region work toward…", "Around these centers, provide for…").
- **Patterns rest on observed human behaviour** — for example: 93% of neighbourhood visiting in a Levittown survey (Gans, 1967) fell within the cluster of adjacent houses (HOUSE CLUSTER); people gravitate to rooms lit from two sides and avoid one-sided rooms (LIGHT ON TWO SIDES), partly because glare hides the faces of the people you are talking to.
- **Ownership and process matter as much as form** — HOUSE CLUSTER works only if the cluster's households own and govern their common land. Form that conflicts with ownership "will not take hold".
- **Decide on site, at full scale** — NATURAL DOORS AND WINDOWS: don't fix window positions on paper. Stand in the rough frame, mock up openings with string and scraps, and size each one to its place. No standard windows.
- **Realms and gradients** — HOUSE FOR A SMALL FAMILY and COUPLE'S REALM divide a house into parent, child and common territories, each clearly someone's, joined by a short path. The house is a gradient of intimacy, not a set of rooms.
- **Sequence over blueprint** — the book and *The Timeless Way of Building* say the language should be used in order. A later explainer on the site argues that a full blueprint is "like tossing thirty coins at once"; deciding one thing at a time, in the right order, works better.
- **Alexander's own critique (1996)** — buildings made with the patterns were "okay, but not profound": individual features improved (daylight, entrances, alcoves) without coherent wholes. He concluded that the published language was too static and that its intended sequential use had "dropped out of sight". This led to *The Nature of Order*: the 15 properties, "centers", structure-preserving transformations, and generative sequences.
- **What software took and missed** — Alexander told programmers the pattern *format* is a "nice, neat" vehicle for sharing ideas, but that real pattern languages also have a moral component (does this make human life better?), aim at coherence of the whole, and are *generative* (following them produces coherent wholes). He tested languages by letting people use them to generate many designs and checking whether the results were coherent.

## Actionable heuristics for product design
- When documenting a component or pattern, use Alexander's structure: context (which larger patterns it serves), the problem in one sentence, the forces and evidence, "Therefore:" the core solution, and the smaller patterns that complete it. A component page with only props and screenshots is a catalogue entry, not a pattern.
- When building a design system, link patterns across scales: page or flow patterns call layout patterns, which call components, which call tokens. Navigation in the docs should follow those links, so a designer can walk from "checkout" down to "input" and back up.
- When naming a pattern, name the *situation or quality* ("Light on two sides", "Couple's realm"), not just the widget. Names that describe the human outcome help people judge when the pattern applies.
- When writing a solution, state its core, not one rendering ("each room gets daylight from two directions", not "two 1.2 m windows"), so teams can solve it a hundred ways in context.
- When designing a large product area, work through decisions in order from large to small. Settle the user's overall journey and territories (who owns which space, what is shared) before screens, and screens before details. Revisit the larger choice only when a smaller one proves it wrong.
- When fine placement matters (layout of a dense screen, spacing, the exact order of controls), decide it "on site": in a working prototype with real content at real size, not in a static spec. Mock it up and move things until they feel right, then record the result.
- When dividing an app or workspace among different users or modes (admin and member, personal and shared, focus and collaboration), give each a clearly owned realm plus a common area, with a short path between them. This is the house-realms pattern applied to software territory.
- When proposing a pattern, show your evidence the way the samples do: observations of real behaviour ("people choose X when they have a choice"), and invite readers to check it in their own environment. If you have only taste, say so.
- When a pattern library is producing screens that are fine in parts but incoherent as wholes (Alexander's own failure), stop adding patterns. Test the *language*: have several designers generate the same flow with it and check whether the results are coherent. Add sequencing guidance ("start here, then…") rather than more parts.
- When evaluating a pattern, ask Alexander's moral question alongside the usability one: does it make people's lives better, or only make the system more efficient? Patterns that serve the business by working against users (dark patterns) are failures by this standard even when they "work".
- When modernising an existing product, grow it piecemeal: each change should repair and strengthen the structure around it, not replace it wholesale. This matches techne's preference for incremental, testable change over big-bang redesigns.

## Evidence & caveats
- **Mostly informal evidence:** the authors present many patterns as hypotheses. LIGHT ON TWO SIDES says its experiments were "rather informal" observations over years and asks readers to check for themselves. Some patterns cite studies (Gans for HOUSE CLUSTER, Hopkinson for glare), but sample sizes and controls are not given. Treat individual patterns as well-observed hypotheses, not findings.
- **Alexander's 80–90% agreement claim** for his "which has more life?" comparisons (1996 keynote) is his own report and is not documented in this material. It belongs to *The Nature of Order* and has seen little independent replication.
- **Values built in:** several patterns encode 1970s assumptions about family life and gender roles ("the man and woman of the house" in COUPLE'S REALM, 27 MEN AND WOMEN). Use the structural insight (owned realms, intimacy gradients), not the social prescriptions.
- **Architecture is not software:** patterns about light, ownership of land and window placement carry over to software only by analogy. The *method* (format, linking, sequence, generativity, moral aim) transfers well. Specific patterns don't, and should not be quoted as UX evidence.
- **By the author's own account the approach underdelivered** in its original form (1996). The book is best read as the starting point of a method that Alexander himself revised.
- Influence is strongly documented: software design patterns (Gamma et al., 1994), the PLoP conferences and Ward Cunningham's wiki came out of it, as Coplien's introduction to the keynote records.

## Disagreements with other references
- `references/masters/master-lenses.md` (Christopher Alexander lens) summarises the same ideas plus *The Nature of Order*. This file is the primary-source basis for the "patterns as a language, structure-preserving change" verdicts there, and agrees with them.
- `references/books/atomic-design.md` builds design systems bottom-up (atoms to pages). Alexander's language runs top-down in use (large patterns first, completed by smaller ones) while being linked both ways. Use atomic design for building the parts and Alexander for documenting *when and why* to use them and in what order to decide.
- `references/books/designing-interfaces-tidwell.md` is a UI pattern language that explicitly follows Alexander. Tidwell supplies the actual interface patterns; this file supplies the method and its pitfalls.
- `references/books/refactoring-ui.md` and the data-driven files favour systematised constraints (spacing scales, standard components). NATURAL DOORS AND WINDOWS ("no standard windows") pulls the other way. Resolve it by tier: standardise the system layer, and allow fitted, context-specific adjustment where a screen's purpose demands it, decided in a working prototype.
- `references/masters/timeless-principles.md` sets Alexander's "add life" against Rams-style removal. This material supports that reading: Alexander's measure is coherence and life of the whole, not minimalism.

## Best quotes (< 25 words each, max 5)
- "People will not feel comfortable in their houses unless a group of houses forms a cluster" (37 HOUSE CLUSTER)
- "When they have a choice, people will always gravitate to those rooms which have light on two sides" (159)
- "On no account use standard doors or windows. Make each window a different size, according to its place." (221)
- "The buildings generated were okay, but not profound." (OOPSLA keynote, 1996, on buildings made with the patterns)
- "Patterns are easy to remember and set out as if-then propositions." (*A Just So Story*, patternlanguage.com)

## Related
- `references/masters/master-lenses.md` (Alexander lens), `references/masters/timeless-principles.md`
- `references/books/designing-interfaces-tidwell.md`, `references/books/atomic-design.md`, `references/books/eightshapes-curtis-design-systems.md`
- `references/interaction/design-systems.md`, `references/process/redesign-and-scale.md`
- Books: Alexander, *The Timeless Way of Building* (1979), *Notes on the Synthesis of Form* (1964), *The Nature of Order* (2002–2005); Gamma et al., *Design Patterns* (1994)

## Sources
- Sample patterns from *A Pattern Language*, published by the Center for Environmental Structure at patternlanguage.com: https://www.patternlanguage.com/apl/apl37/apl37.htm, https://www.patternlanguage.com/apl/apl76/apl76.htm, https://www.patternlanguage.com/apl/apl136/apl136.htm, https://www.patternlanguage.com/apl/apl159/apl159.htm, https://www.patternlanguage.com/apl/apl221/apl221.htm (all read in full; saved under books/free/a-pattern-language/)
- "Summary of the Pattern Language" (all 253 pattern names and connecting text): https://www.patternlanguage.com/apl/aplsummary.htm
- Book description: https://www.patternlanguage.com/bookstore/pattern-language.html; patterns index: https://www.patternlanguage.com/patterns/patterns.html; *A Just So Story*: https://www.patternlanguage.com/patterns/justsostory.html
- Alexander, C. (1996). "The Origins of Pattern Theory, the Future of the Theory, and the Generation of a Living World", OOPSLA keynote, with an introduction by Jim Coplien: https://www.patternlanguage.com/archive/ieee.html (read in full)
- Not used: the site's full hypertext of the book (members only); "A City is Not a Tree" (https://www.patternlanguage.com/archive/cityisnotatree.html; downloaded but not distilled, since it is a separate 1965 essay).
