---
title: "Expressive Design Systems"
author: "Yesenia Perez-Cruz"
year: 2019
domains: [interaction, visual, process]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Expressive Design Systems — Yesenia Perez-Cruz

Use this when: a team says the design system makes everything look generic; product teams ask to deviate or fork components and you need a principled yes/no; one system has to serve several brands, audiences (standard vs premium) or environments (desk, point-of-sale, warehouse); you are auditing a component library for bloated "do-everything" components.

Basis: the book (A Book Apart, 2019, 126 pages) was not read. A Book Apart no longer sells it. Read in full: the official excerpt of Chapter 4, "Making Room for Variation", published by A List Apart (and reposted on the author's site). It covers the three kinds of divergence and the three contexts for variation (brand, audience, environment) but seems to stop before the rest of the chapter. Also read in full: the author's later essays on her site, "Beyond the Plateau of Sameness" (Nov 2025; Accelerators, Differentiators, Diluters) and "The next wave of design systems will be AI-driven" (2023; scenario-driven components, levers and dials), and her own project write-ups of Vox Media's Unison system and Shopify's Polaris. Not covered: Chapter 1 (purpose and principles), Chapter 2 (process), Chapter 3 (communicating your brand), Chapter 5 (managing design systems) and the rest of Chapter 4. The 2023 and 2025 essays extend the book's ideas with six more years of experience, so some ideas here may postdate or revise the book.

## The big idea (3 sentences)
A design system should do more than standardize components: it should give a product (or a family of brands) cohesion while leaving deliberate room for expression, so that things that are conceptually different look different and memorable moments stand out. Divergence is either unintentional (people can't find the existing solution), intentional but unnecessary (people want to escape constraints) or intentional and meaningful (it solves a user problem no pattern solves). Only the last should be supported, and it is justified by three contexts: brand, audience and environment. Sameness is not caused by "constraints on creativity" but by system architecture: bloated one-size-fits-all components ("Diluters") flatten products, while lean primitives ("Accelerators") plus opinionated domain components ("Differentiators") keep both speed and distinction.

## Core concepts
- **Variation** — a deviation from established patterns, at any level: component (a card without a photo), design language (a brand tuned for another audience), even principles (a functionally different product).
- **Three kinds of divergence** — *unintentional* (fix with findable docs and usage guidance), *intentional but unnecessary* (fix with a clear way to push back and contribute), *intentional and meaningful* (the goal of an expressive system).
- **Three contexts that justify variation** — *Brand*: several brands share a core but express their voice (Vox Media's eight editorial brands). *Audience*: different users need different attitudes (Airbnb Plus vs standard listings). *Environment*: lighting, distance, noise, attention and device change what works (Shopify POS at arm's length under bright light).
- **Purely visual variation vs strategic variation** — Vox's per-brand newsletter modules (skewed backgrounds, background images, CSS overrides) varied only visually for a module with identical user goals, so they were unified. The Verge's art-directable masthead tied directly to brand strategy and later spread to other Chorus sites (Chicago Sun-Times, The McElroy Family).
- **Levers and dials** — keep recognizable core elements (typeface, iconography, photography, components) and vary named levers such as density, weight, scale and size contrast. Airbnb Plus uses larger type, more vertical space, a lighter weight and a quieter palette to feel premium. Paula Scher's Public Theater identity varies by season while keeping one visual language.
- **Variation feeds the system** — the POS team's needs (contrast under bright light, larger type and targets, "eyes-closed" mastery) were shared with the Warehouse team and led to a Polaris dark mode. Product teams' variations are inputs, not violations.
- **Scenario-driven components** (her 2018 talk, recapped in 2023) — specific components (Game card, Venue card, Product card) show the information users need better than a generic "Scorecard". Downside she found later: slightly different scenarios lead to forks that no longer get system updates.
- **Plateau of sameness** (2025) — everything works but nothing is memorable, because components became one-size-fits-all and designers start from what exists instead of user intent. Conceptual integrity has three tiers: *data fidelity* (the UI reflects what distinguishes the data), *aesthetic integrity* (form fits the task and input method) and *selective excellence* (calm baselines, expressive peaks where it matters).
- **Accelerators / Differentiators / Diluters** — *Accelerators*: low-level, single-responsibility, few props, composable via children/slots, no layout or business assumptions, stable API (Popover, Table.Cell). *Differentiators*: opinionated domain compositions (ProductList, CollectionPicker) whose API evolves with strategy. *Diluters*: opinionated but unfocused, prop-heavy, hard to extend, bundling many behaviors (Shopify's Combobox, a TextField handling email, currency and password strength).
- **Leverage** — Polaris coverage went from 40% to 89% after a shift to composition over configuration, layout primitives, CSS-variable tokens, lint rules and migration dashboards. A new design language then reached about 89% of the admin in 10 weeks.

## Actionable heuristics for product design
- When someone asks to deviate from the system, classify the request first. If they didn't find the existing pattern, improve docs and search. If they just prefer their own take, route it through contribution and review. Support it only if it solves a specific user problem no pattern solves.
- Approve variation only when you can name its context: brand (voice/content needs), audience (different expectations or price tier) or environment (light, distance, attention, device). "We want it to look distinct" is not a context.
- Unify modules whose user goal is the same across brands or products (newsletter sign-up, footer, settings). Spend expression on the places that carry brand or content (homepage mastheads, hero features, the core creative tool).
- Define your core (typeface, icon set, photography style, key components) and a small set of named levers (density, type weight, scale contrast, color intensity, motion). Document a few preset positions (e.g. "functional" vs "premium") so teams flex within the system instead of overriding it.
- Design for "selective excellence": keep settings, profile and admin screens calm and standard (often system defaults) and invest polish, motion and custom layouts in the two or three moments that define the product.
- Make conceptually different things look different. If a rich object (a collection with image, handle and rules) and a simple string (a tag) render identically because they share a component, the system is hiding information users need to choose.
- Build the library in two layers: unopinionated, accessible primitives that handle interaction (keyboard, focus, ARIA, filtering) and expose slots, plus domain components composed from them. Don't add props to a base component to cover every case.
- Name primitives by their role in the composition (PopoverTrigger), not their look (TextField). Role names document intent for people and AI coding tools.
- Audit for Diluters quarterly: prop count growth, override count (`!important`, deep selectors, detach rate), usage frequency, plus qualitative complaints ("it takes three hours to customize every time"). Flag components meeting three or more Diluter traits. Prioritize by usage × debt, then by which ones block new Differentiators.
- Pitch Diluter refactors as acceleration, not maintenance: show the "velocity tax" per use and pair with one feature team to rebuild their domain component on the new primitives.
- Treat environment needs from product teams (POS, kiosk, in-car, warehouse, outdoor) as system features. If one team needs higher contrast, bigger targets or a dark scheme, check who else does before building a one-off.
- When designing with AI tooling, put the system's rationale and scenario-level recipes ("a type scale for dense data", "a modal asking users to acknowledge an action") where work happens, not in a separate docs site.

## Evidence & caveats
- This is practitioner experience from Vox Media and Shopify, argued through case studies. There is no controlled evidence that "expressive" systems outperform uniform ones on any user or business metric. Treat it as expert opinion, graded weak to moderate.
- Results she reports (8 brands and 300+ sites on one platform, 50% faster loads, 60–70% smaller pages, Polaris coverage 40% → 89%, a redesign in 10 weeks) are self-reported project outcomes in portfolio write-ups, without methods. They show the architecture enabled speed, not that users preferred the result.
- She is candid about trade-offs: Vox sites "lost some of their unique character" and some Shopify teams called Polaris a "burden". The architecture fix (Accelerators/Differentiators) is her later answer and post-dates the book.
- The Airbnb Plus and Public Theater examples are interpretive readings of other companies' design choices, not insider data.
- The book itself was not read. Its chapters on principles, process, brand communication and governance may contain guidance that differs from or adds to these notes.

## Disagreements with other references
- `references/interaction/design-systems.md` tells you to theme via the semantic token tier and not fork components. That is consistent: Perez-Cruz's levers are tokens and composition, not forks. Her guidance adds when variation is legitimate and how to tell good divergence from bad. Use the design-systems file for mechanics and this one for the governance call.
- `references/books/kholmatova-design-systems.md` (whose author wrote this book's foreword) covers purpose, principles and functional vs perceptual patterns, and its discussion of strict vs loose systems overlaps. No conflict; Perez-Cruz focuses on multi-brand expression.
- `references/books/atomic-design.md` builds bottom-up from atoms. Perez-Cruz warns that component-first thinking produces sameness and argues for starting from user scenarios and intent. Use atomic design to structure the library, but choose and shape components from scenarios.
- `references/books/eightshapes-curtis-design-systems.md` stresses adoption and consistency metrics. She agrees on measuring (coverage, detach and override rates) but warns that high coverage alone can hide a plateau of sameness.
- `references/books/dribbblisation-of-design.md` and `references/masters/taste.md` raise the broader sameness critique. Her architectural explanation is a concrete, actionable version of it.

## Best quotes (< 25 words each, max 5)
- "Intentional, meaningful divergence is the goal of an expressive design system." (Making Room for Variation)
- "Every variation we add makes our design system more complicated." (Making Room for Variation)
- "Sameness isn't a creativity problem. It's an architectural one." (Beyond the Plateau of Sameness, 2025)
- "Create memorable peaks rather than uniform plateaus." (Beyond the Plateau of Sameness, 2025)

## Related
- `references/interaction/design-systems.md`, `references/build/tokens-bridge.md`, `references/books/design-tokens-format-2025.md`
- `references/books/kholmatova-design-systems.md`, `references/books/atomic-design.md`, `references/books/eightshapes-curtis-design-systems.md`
- `references/masters/taste.md`, `references/books/dribbblisation-of-design.md`
- Shopify Polaris and Vox Media Chorus as real-world case studies

## Sources
- A List Apart, "Making Room for Variation" (official excerpt of Chapter 4, 2019): https://alistapart.com/article/making-room-for-variation/
- Same excerpt on the author's site, "Making space for variation" (Dec 19, 2019): https://www.yeseniaperezcruz.com/blog/making-space-for-variation
- Perez-Cruz, "Beyond the Plateau of Sameness" (Nov 5, 2025): https://www.yeseniaperezcruz.com/blog/beyond-the-plateau-of-sameness
- Perez-Cruz, "The next wave of design systems will be AI-driven" (Mar 18, 2023, from her Substack): https://www.yeseniaperezcruz.com/blog/design-systems-ai
- Author's project write-ups: https://www.yeseniaperezcruz.com/projects/vox-media and https://www.yeseniaperezcruz.com/projects/polaris
- Book page (out of print with publisher): https://abookapart.com/products/expressive-design-systems
- Context only (secondary, not used as basis): Jeremy Keith's notes on her 2018 talk "Scenario-Driven Design Systems", https://adactio.com/journal/13666
- Downloads saved under books/free/expressive-design-systems/
