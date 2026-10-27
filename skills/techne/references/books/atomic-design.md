---
title: "Atomic Design"
author: "Brad Frost"
year: 2016
domains: [design-systems, process, components, governance, web]
evidence: "weak"
---

# Atomic Design — Brad Frost

Use this when: starting or rescuing a design system or pattern library and you need a vocabulary for "parts vs whole"; selling a system to stakeholders (interface inventory, time-and-money framing); planning a component workflow that gets real content and edge cases into the system early; setting up governance, deprecation and communication so the library doesn't rot after launch.

Source: https://atomicdesign.bradfrost.com/ (the author's free online edition of the 2016 book). Read in full: Foreword (Josh Clark & Dan Mall) and all five chapters (1 Designing Systems, 2 Atomic Design Methodology, 3 Tools of the Trade, 4 The Atomic Workflow, 5 Maintaining Design Systems), ~37,000 words. Images were not viewable; their captions were read. The "Resources" and "Thanks" pages were skipped.

## The big idea (3 sentences)
Interfaces should be built as systems of reusable components rather than as collections of pages, because the number of devices and contexts makes page-by-page design and static comps unworkable. Atomic design is a mental model with five stages (atoms, molecules, organisms, templates, pages) that lets a team move constantly between the part and the whole, and its last two stages exist to test the components against real content structure and real content. A pattern library only survives if the organisation treats the design system as a funded, governed, visible product that the live product is built from, not as a side deliverable.

## Core concepts
- **The page is the wrong unit of scope.** Effort depends on the components and functionality on a page, not the page count: a "30,000-page" site may be three content types and two layouts.
- **Five stages.** *Atoms*: elements that stop being functional if split further (label, input, button), plus base styles. *Molecules*: simple groups that do one job (label + input + button = search form); they follow the single-responsibility principle. *Organisms*: distinct sections built from molecules or repeated molecules (header, product grid). *Templates*: components placed in a layout, showing content *structure* (image sizes, character limits), not final content. *Pages*: templates with real representative content, plus their variations; this is where the system is tested.
- **Not a sequence.** The stages run concurrently; designing buttons in isolation and hoping they add up is explicitly rejected.
- **Content structure before content.** Following Mark Boulton: you can design without the final content, but not without knowing what the content is made of.
- **Variations live at the page stage.** One cart item vs ten, a first-time user without the activity panel, a 40- vs 340-character headline, admin vs non-admin. These feed back into the molecules and organisms.
- **Names are local.** The chemistry labels carry hierarchy, but GE renamed the stages (Principles, Basics, Components, Templates, Features, Applications) and that is fine; the taxonomy only has to help the team communicate.
- **Style guide family.** Brand identity, design language, voice and tone, writing, code style guides and pattern libraries all inform each other; the pattern library is the hub.
- **Frameworks vs your own system.** Bootstrap-style frameworks give speed but produce look-alike sites, unused bloat, someone else's naming and, eventually, fighting the framework. Make "tiny Bootstraps for every client" (Dave Rupert).
- **Qualities of a good pattern library tool:** descriptions and annotations, code view, viewing across the whole width range (not three device widths), state and variant display, real dynamic data, and *lineage* (what a pattern contains and where it is used).
- **Interface inventory.** A cross-disciplinary, timeboxed screenshot audit of every unique pattern, one instance each, grouped by category, presented to the group, merged into one document and used to decide what stays, goes or merges.
- **Workflow.** Parallel, cross-disciplinary work instead of waterfall; low-fi direction first (content/display pattern lists, the 20-second gut test, style tiles, element collages), then a few comps, then "deciding in the browser". Front-end developers act as "prep chefs" from day one.
- **Maintenance checklist (ch. 5):** make it official, adaptable, maintainable, cross-disciplinary, approachable, visible, bigger, context-agnostic, contextual, and lasting.
- **Makers and users.** Makers create and govern the system; users apply it in products. Both must talk constantly. A system lets less senior users ship accessible, performant UI because the best practices are built in.

How each stage is used in practice (our summary of ch. 2–3):

| Stage | Contains | What it proves | Check before moving on |
|---|---|---|---|
| Atoms | base elements, base styles | the raw palette exists | every state of each atom (hover, focus, disabled, error) |
| Molecules | small single-purpose groups | parts work together | one job per molecule; it's portable |
| Organisms | page sections | components in context | repeated-molecule cases (grids, lists) |
| Templates | layout + content skeleton | content structure fits | image ratios, character limits |
| Pages | real content + variations | the system survives reality | extremes, first-run, admin, empty |

- **The "holy grail".** The pattern library and production consume the same component code, so a change shows up in both (Lonely Planet's Rizzo; Phase2's shared Twig templates). Sharing CSS/JS via versioned files is easy; sharing markup is the hard part.

## Actionable heuristics for product design
- When someone asks "how long will the homepage take?", re-scope by components and states, not pages, because effort scales with distinct patterns and their variations.
- When starting or auditing a system, run an interface inventory with every discipline in the room (UX, visual, front-end, back-end, content, PM, QA, business). Timebox the screenshot pass to **30–90 minutes**, capture one instance per unique pattern, then give each category owner **5–10 minutes** to present. Shared pain and shared names are the real outputs.
- Use the inventory categories as a checklist: global elements, navigation, image types, icons, forms, buttons (including disabled, loading and link-styled), headings, blocks, lists, interactive components, media, third-party components, ads, messaging (alerts, errors, loaders, tooltips), colors, and animation (screen-record it). Include the unloved areas (support, FAQ, 404, legal), because users experience the brand as one thing.
- When selling the system to budget holders, translate the benefits into time and money (faster feature delivery, fewer meetings, cheaper accessibility and QA testing, lower legal risk), and show the inventory ("37 button styles") rather than describing it.
- When designing a component, test it at the page stage with real representative content and extremes (no avatar, 87 cart items, 14 product options, a 400-character title, 7 levels of nested comments, admin vs regular user) before calling it done, because best-case placeholder data hides the failures. Pair with `references/process/states-and-edge-cases.md`.
- When documenting templates, record content structure explicitly: image aspect ratios, character limits per text slot, optional vs required parts.
- When naming a pattern, name it by structure, not page or content: "card", not "product card"; "carousel", not "homepage carousel". Blur the content in the naming exercise so people name the shape.
- When a fix is found at the product level (e.g. a test shows a custom dropdown underperforms the native one), ask whether it applies everywhere and change it in the system, so improvements propagate instead of becoming one-offs.
- When someone requests a new pattern, treat it as a one-off until a **second team** asks for the same thing, because adding every whim bloats the library.
- When deprecating a pattern, flag it in the code and docs ahead of removal and name the replacement (Salesforce's Sass Deprecate approach), so adopters aren't broken.
- Before launch, answer the governance questions in writing: what happens when a pattern doesn't fit, how requests and bugs are handled, who approves changes, who updates docs, who makes the changes, how changes reach live apps, and how people hear about them.
- Communicate change in four forms: changelog, roadmap, success stories, tips. Automate notices (e.g. pull requests post to the design channel), and support users through pairing, workshops, office hours, an issue tracker, and system training in employee onboarding.
- When setting visual direction, don't jump to many full comps. Run the 20-second gut test (20–30 relevant sites, 20 seconds each, scored 1–10, then discuss the top 5, bottom 5 and most contested), then style tiles, then element collages, then one comp for the key template. If feedback on a comp is "move this, add a border", the direction is settled and the rest is decided in the browser.
- When a tool shows only "mobile / tablet / desktop", test across the whole width range (Frost's ish. tool randomises widths), because breakage lives between the presets.
- Make documentation part of the living system (descriptions and annotations next to the live pattern), not a PDF that gets thrown away at handoff.
- Make the style guide attractive, public where possible, and written for every discipline, because visibility creates accountability and helps recruiting.

## Evidence & caveats
- The whole book is practitioner experience from agency projects (TechCrunch, Entertainment Weekly, Time Inc., Pittsburgh Food Bank) plus quotes from peers. There are no controlled comparisons or metrics. Claims that systems are "faster" and give users "more conversions" are asserted, not measured. [weak/anecdotal]
- The five-level taxonomy is a communication device. Frost himself says the names are optional and the stages are not steps. In practice teams argue about "is this a molecule or an organism?", and that argument has no answer; don't spend time on it.
- The chapter 4 advice to "ask forgiveness, not permission" includes hiding the system work from change-averse stakeholders until launch. Treat that as a political tactic, not a norm. Under techne's honesty stance, prefer making the cost visible and small (make a thing, show it's useful, make it official, which is Frost's own chapter 5 sequence).
- Dated parts: Photoshop/Sketch-era tooling, Pattern Lab and Mustache specifics, "container queries will let us" (now shipped in browsers), Bootstrap star counts, the 25-years-of-web framing. The organisational and naming advice ages well; the tooling advice doesn't.
- The book was written before design tokens became standard. It covers colors as atoms but has no token tiers. For token architecture, use the Curtis and DTCG notes.

## Disagreements with other references
- `references/interaction/design-systems.md` §2 calls Atomic Design "a mental model, not a law", which matches the book. That file says Frost's first point is to "codify what already works": the book does support that through the interface inventory, but it also advocates building the system *during* a redesign from new explorations. Both are valid: harvest when a product exists, co-create when the product is new.
- `references/interaction/design-systems.md` §8 asks for "proposal (problem + ≥ 2–3 use cases + data)" and promotes a one-off when "3+ teams need something". Frost's bar is softer: a one-off becomes a pattern when a second team wants it. Use the stricter bar for large components and Frost's for small ones (Curtis, `eightshapes-curtis-design-systems.md`, makes the same small-vs-large split).
- `references/process/process-playbook.md` §5 (cheapest fidelity first) agrees with Frost's low-fi → style tile → element collage → comp → browser ladder. Frost adds a step the playbook lacks: the 20-second gut test for surfacing stakeholder taste early.
- `references/process/redesign-and-scale.md` (default to evolution, harvest old knowledge) agrees with Frost's attack on "set it and forget it" redesigns every 3–8 years and on users falling down Spool's "magic escalator of acquired knowledge". Frost has no measurement plan; use the redesign file's rollout and holdback rules for that.

## Best quotes (< 25 words each, max 5)
- "a mental model to help us think of our user interfaces as both a cohesive whole and a collection of parts at the same time."
- "You don't need to be a designer to recognize that having 37 unique button styles probably isn't a good idea."
- "Let's change the phrase 'designing in the browser' to 'deciding in the browser.'" (Dan Mall, quoted)
- "The biggest existential threat to any system is neglect." (Alex Schleifer, Airbnb, quoted)
- "We're not designing pages, we're designing systems of components." (Stephen Hay, quoted)

## Related
- `references/interaction/design-systems.md`, `references/build/tokens-bridge.md`, `references/process/states-and-edge-cases.md`, `references/process/redesign-and-scale.md`, `references/process/process-playbook.md`
- `references/books/eightshapes-curtis-design-systems.md` (team models, contributions, token naming), `references/books/design-tokens-format-2025.md` (the token file standard Frost predates)
- Nathan Curtis, "Design systems are products" line quoted in ch. 5; Samantha Warren, style tiles; Dan Mall, element collages; Mark Boulton on content structure.
