---
title: "Design Systems: A practical guide to creating design languages for digital products"
author: "Alla Kholmatova"
year: 2017
domains: [interaction, visual, process]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Design Systems — Alla Kholmatova

Use this when: you are writing or rewriting design principles that nobody uses; a pattern library or style guide is drifting out of date or is ignored by designers; you need to explain to a team that a design system is a shared language (purpose, principles, patterns, practices), not just a component kit.

Basis: the book (Smashing Media, 2017) was not read in full. The publisher offers its DRM-free eBook for sale. These notes come from the official free sample, Chapter 2 "Design Principles", published by Smashing (read in full); Smashing's book pages with the author-approved chapter summaries and table of contents; and Kholmatova's own description of why FutureLearn's first style guide failed, quoted at length by Brad Frost from her FutureLearn pattern-library write-up (the original page is gone). Her *A List Apart* article "The Language of Modular Design" (2015), which covers the book's naming and shared-language ideas, was unreachable during this session (rate-limited) and was not used. Coverage is low. The principles chapter is covered fully. Functional patterns, perceptual patterns, shared language, system parameters (strict vs loose, modular vs integrated, centralized vs distributed), the interface inventory exercises and the pattern-library chapter are known only from their one-paragraph summaries.

## The big idea (3 sentences)
A design system is the set of connected patterns and shared practices that a team uses to serve a product's purpose, and some systems produce coherent experiences while others produce patchwork, become bloated or are ignored. What makes the difference is less the tooling than the foundations: a clear product purpose and ethos, a few genuine, actionable principles, patterns defined by function first and by perception (style) second, and a shared language that everyone uses to name and discuss those patterns. Principles and patterns shape each other over time, so the system has to be practised daily (in critiques, naming and documentation) rather than published once.

## Core concepts
- **Design system** — patterns (repeatable, reusable parts of the interface, from buttons and fields to iconography, color and type styles) plus shared practices (how a team creates, captures, shares and uses them, through principles and pattern libraries). Together they form the language of the product's interface.
- **Purpose and ethos first** — all decisions should trace back to what the product is for. TED: "spread the talks as far and as wide as possible" leads to performance, accessibility and "timeless, not cutting edge".
- **Design principles** — shared criteria for what good design means for this team and product, plus advice on how to achieve it.
- **Four qualities of effective principles:**
  - *authentic and genuine*: not generic words like "Simple. Useful. Enjoyable.", which every product claims;
  - *practical and actionable*: "No needless parts" can be checked, "Make it simple" can't;
  - *have a point of view*: they rank values and admit trade-offs, like Salesforce Lightning's ordered "Clarity, Efficiency, Consistency, Beauty" or Medium's "Direction over Choice";
  - *relatable and memorable*: three to five, used daily (Airbnb's four, Spotify's TUNE acronym).
- **One set of values, different intensities** — Atlassian uses the same values across marketing, product and support, but tunes them by context (bold in marketing, practical in support).
- **Defining principles** — start with the purpose. Ask team members individually for five principles, each with a real interface example, and compare themes. Write for colleagues, not brand manuals. Test the principles in critiques and evolve them.
- **From principles to patterns** — principles act as grammar for choosing and executing patterns. Medium's minimal editor embodies "Direction over Choice". TED's hero accommodates long titles because the message comes first. Atlassian's optimistic UI in Jira embodies "optimistic". Patterns, in turn, refine principles.
- **Functional vs perceptual patterns** (from chapter summaries) — functional patterns are the tangible building blocks shaped by user behaviors and the product's purpose, and should be defined early. Perceptual patterns are styles (tone of voice, typography, color, iconography, spacing, animation) that express the brand and make the experience feel cohesive.
- **Shared language** (from summary and the FutureLearn account) — a group can only create cohesively if it names patterns consistently. FutureLearn's first style guide failed partly because designers weren't involved, so terminology differed, design rationale wasn't documented, there was little live code and it soon drifted from production.
- **Process** (from summaries) — get organizational support and plan; systemize functional patterns starting from the product's purpose; do an inventory of styles to define perceptual patterns; set up a simple, multidisciplinary pattern library.

## Actionable heuristics for product design
- Rewrite every vague principle as a practical one you can test against a screen: "Make it clear" becomes "Only one number-one priority per screen"; "Make it simple" becomes "No needless parts: if you can't say what an element is for, remove it"; "Make it useful" becomes "Start with needs". If a principle never rejects a design, it isn't doing any work.
- Keep three to five principles and rank them or state their trade-offs ("X over Y"), so they settle real arguments. Pair each with one or two live examples from your own interface.
- Run the "ask five things" exercise. Each team member independently writes the five most important things a newcomer must know about designing this product, each with an example. Cluster the answers, and use disagreements as agenda items.
- Test recall: if people can't name the principles without looking, they aren't being used. Put them into critique templates and design QA ("Is this in TUNE?") (see `references/books/connor-irizarry-discussing-design.md`).
- Keep one set of brand values across marketing, product and support, but set the intensity per context. Support and task flows turn expressiveness down.
- Before adding a component to the library, define its function (what behavior it supports, in what context) before its look. Name it by that function ("feature-promo", "course-progress"), not by its appearance ("blue-box").
- Involve designers and developers together in building the library. Document why and when to use each pattern, not just how it looks. Back it with live code so it can't drift from production.
- Trace each new pattern back to a principle and the product purpose. If it can't be traced, question whether it belongs in the system or is a one-off.
- Write principles for colleagues, not for a brand manual. If a sentence would only make sense on a careers page, cut it.
- When a principle conflicts with an easy implementation, follow the principle visibly. TED built image compression before launching an image-heavy home page because performance outranked visual richness. That's what makes principles credible inside a team.
- Expect principles to change. Review them when the product's purpose shifts or when critiques keep exposing gaps, and record why each change was made.
- Treat "simple, useful, delightful" as the minimum, not the system. Ask what *this* product means by each word and write that down instead.
- When techne proposes a design system for a user, start with the purpose statement and three to five ranked principles with examples, then the functional patterns, then the perceptual layer (tokens). Don't start with a component list.
- Audit styles (an interface inventory of colors, type, spacing and motion) before defining perceptual patterns, and merge near-duplicates into a small set of tokens (`references/build/tokens-bridge.md`, `references/books/design-tokens-format-2025.md`).

## Evidence & caveats
- This is a practitioner book based on the author's experience and on interviews with Airbnb, Atlassian, TED, Eurostar and Sipgate. There's no quantitative evidence that these practices improve outcomes. The case quotes are self-reported by those teams.
- "Three to five principles" is justified with Cowan's working-memory limit of about four (`references/books/magical-number-4-cowan.md`). That's a loose analogy: Cowan measured items held in mind briefly, not how many team guidelines people can remember. The practical point (few, and used often) still stands.
- The book is from 2017 and predates the spread of design tokens as a standard, Figma variables and AI-assisted component generation. Its tooling advice is dated. The principles and language material isn't.
- Coverage is low. The chapters on system parameters and pattern libraries probably contain trade-offs and governance advice not reflected here. See `references/books/eightshapes-curtis-design-systems.md` for governance.

## Disagreements with other references
- `references/books/atomic-design.md` (Frost) organizes patterns by size and composition (atoms → pages). Kholmatova organizes them by role (functional vs perceptual) and by shared purpose and language. FutureLearn used atomic design at first. Use atomic levels for building and Kholmatova's purpose-first naming for deciding what a pattern is and when to use it.
- `references/books/eightshapes-curtis-design-systems.md` and `references/interaction/design-systems.md` focus on tokens, components, versioning and governance at scale. This file covers the earlier, cultural layer. They're compatible. Kholmatova's audience is small and medium teams.
- `references/books/head-designing-interface-animation.md` applies the same principle test to motion ("a strong motion principle has an easy opposite"). That is a direct application of Kholmatova's "have a point of view" rule.
- Generic lists such as Rams's ten principles (`references/masters/master-lenses.md`) are what Kholmatova calls "a given". Use them as baseline quality, not as your product's principles.

## Best quotes (< 25 words each, max 5)
- "Good design principles define qualities that can be interpreted in different ways, and ground them in the context of a specific product." (Chapter 2)
- "Every design element, from the largest to the smallest, must have a purpose." (FutureLearn principle "No needless parts", quoted in Chapter 2)
- "Nobody wants a bold support page." (Kevin Coffey, Atlassian, quoted in Chapter 2)
- "You can view design principles as grammar rules for creating patterns and combining them in ways that make intrinsic sense." (Chapter 2)

## Related
- `references/interaction/design-systems.md`, `references/build/tokens-bridge.md`, `modes/system.md`
- `references/books/atomic-design.md`, `references/books/eightshapes-curtis-design-systems.md`, `references/books/design-tokens-format-2025.md`, `references/books/inclusive-components.md`
- `references/books/connor-irizarry-discussing-design.md` (principles as the basis for critique)
- Books: Brad Frost, *Atomic Design*; Nathan Curtis, EightShapes essays

## Sources
- Official free sample, Chapter 2 "Design Principles" (Smashing Media): https://smashingmagazine.com/provide/design-systems-chapter-2.pdf
- Book page with chapter summaries: https://www.smashingmagazine.com/printed-books/design-systems/
- Launch page ("Meet Design Systems"): https://www.smashingmagazine.com/design-systems-book/
- Kholmatova's FutureLearn pattern-library account, quoted at length by Brad Frost: https://bradfrost.com/links/post/future-learn-pattern-library/ (original: https://www.futurelearn.com/pattern-library, no longer available)
- Not reachable this session (rate-limited): Kholmatova, "The Language of Modular Design," A List Apart, 2015: https://alistapart.com/article/the-language-of-modular-design/
- Note: the full eBook PDF behind Smashing's member-only download link was deliberately not used (paid/member content). It was deleted unread.
- Downloads saved under books/free/kholmatova-design-systems/
