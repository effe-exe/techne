---
title: "EightShapes essays on design systems (team models, tokens, naming, contribution, change)"
author: "Nathan Curtis (EightShapes)"
year: 2015-2024
domains: [design-systems, tokens, governance, naming, versioning, organisation]
evidence: "weak"
---

# EightShapes essays on design systems — Nathan Curtis

Use this when: choosing how to staff and govern a design system (solitary, centralized or federated); naming or re-architecting tokens (levels, order, modes, themes, when to promote a component token); defining what counts as a contribution and designing different workflows for small vs large ones; deciding whether a visual change is "breaking"; planning a new system generation with impatient adopters.

Source: EightShapes publication on Medium (https://medium.com/eightshapes-llc). Medium's article pages were blocked by a bot check, so I read the full article bodies from Medium's official RSS feeds (`medium.com/feed/eightshapes-llc` and its `/tagged/…` feeds). Read in full, nine essays: "Team Models for Scaling a Design System" (Oct 2015), "Roadmaps for Design Systems" (Oct 2015), "Tokens in Design Systems" (Jun 2016), "Space in Design Systems" (Sep 2016), "Visual Breaking Change in Design Systems" (Aug 2018), "Defining Design System Contributions" (Jan 2020), "Naming Tokens in Design Systems" (Oct 2020), "Reimagining a Token Taxonomy" (Nov 2022), and "Adopting Design System Generations" (Mar 2024). Embedded code gists and images didn't come through; captions and prose did. I did not read Curtis's other essays, which number in the dozens.

## The big idea (3 sentences)
A design system is a living product whose hardest problems are organisational: who decides (overlord, central team or federation), how contributions of very different sizes flow in, how change is versioned so adopters aren't broken, and how generational redesigns reach teams that won't wait. Tokens turn visual options into named, traceable decisions ("an option applied to a context"), and their names should be built from a controlled vocabulary of levels (namespace, object, category/concept/property, variant/state/scale/mode), adding only the levels needed to state intent. Throughout, Curtis argues for structure that grows from evidence: audit what exists, promote local decisions to global ones only once they recur (about three uses), and make conventions explicit even when the specific choice is a matter of taste.

## Core concepts
- **Team models (2015).** *Solitary*: one product team's library offered to others, which serves its owners first ("Overlords don't scale"). *Centralized*: a dedicated team serving many products, which is free of product bias but lacks product context, power, visibility and influence over tradeoffs. *Federated*: designers from key products decide together (Material Design's committee is the archetype); it broadens relevance and spreads evangelists, but has "lots of cooks", split loyalties and decisions lost in hallway or Slack talk. A federated team still needs a centrally dedicated staff to document and ship decisions.
- **Forming a federated team:** represent the platforms that matter (a respected Windows-app developer applying the new language to a real app converted the skeptics); spread expertise across disciplines (UX/IA, visual, interaction, content); mix doers with directors, who lend staff for short bursts; invest centrally in documentation; reward peripheral contributors with autonomy.
- **Roadmaps (2015).** A system team should be able to say "now, next, soon". Show new sections first, then new important parts, then important enhancements; leave out the long tail. A roadmap item that never moves reveals what the organisation doesn't value; remove it.
- **Tokens (2016).** Variables answer "what options do I have?", but not "what choice do I make?". A token is a decision propagated across platforms. Show options first, then decisions. Expand beyond color and type. Use scales. Curate the collection. Graduate component variables into tokens. Search for a specific decision (`$text-color-microcopy`) rather than a hex value to judge blast radius. Store tokens in JSON (YAML for authoring) and generate docs and design-tool assets from them.
- **Space (2016).** In five libraries' CSS, space properties were the most frequent group after color. Grid is a component that uses space, not the space system. Concepts: inset (all sides), squish inset (top/bottom reduced 50%, for buttons and table cells), stretch inset (taller, for text inputs), stack (vertical), inline (horizontal, wrapping), and grid. Avoid "padding"/"margin" in token names, because concepts are many-to-one with CSS properties and not cross-platform.
- **Visual breaking change (2018).** SemVer covers code APIs; visual style needs explicit criteria too. Breaking: text colors that sit on adopter backgrounds, backgrounds under adopter content (contrast can fail), type changes that make dense UI wrap or crop (bold tabs, letter-spacing), and changes to spacing outside a component's boundary (removing form-control margins broke 38 forms). Not breaking: tuning a fully system-owned surface (primary button background) or spacing fully contained inside a system-owned block (menu item padding).
- **Contributions (2020).** Participation (feedback, attending critiques) ≠ contribution. A contribution is a proposal, design, code, documentation or design asset for a new feature, enhancement or fix, made by someone outside the core team and released through the system. Scale: fix → small enhancement → large enhancement → new feature (catalog-wide changes stay with the core team). Fixes and small enhancements are frequent and cheap; large ones are rare, costly and multidisciplinary.
- **Naming levels (2020).** Base (category, concept, property), modifiers (variant, state, scale, mode), object (component group, component, nested element), namespace (system, theme, domain). Principles: avoid homonyms (`type`, `text`); keep classes homogeneous inside and heterogeneous between them; trade flexibility (`color-success`) against specificity (`color-background-success`); be consistent about explicit vs truncated defaults (`on-light`); theme ≠ mode (they're orthogonal); include only the levels needed; no prevailing order exists, but namespaces tend to come first, modifiers last (mode at the very end), and base levels in the middle; resolve polyhierarchy by aliasing one token to another (`ui-controls-color-text-error = color-feedback-error`).

Token name levels, with Curtis's examples (2020):

| Group | Levels | Example fragments |
|---|---|---|
| Namespace | system, theme, domain | `esds`, `aads-ocean`, `esds-consumer` |
| Object | component group, component, element | `forms`, `input`, `left-icon` |
| Base | category, concept, property | `color`, `feedback`/`action`, `background`/`text` |
| Modifier | variant, state, scale, mode | `primary`, `hover`, `2-x`/`100`, `on-dark` |

- **Scale types:** enumerated (heading 1–5), ordered (50…900), bounded (lightness 0–100), proportional (1-x, 2-x, half-x), and t-shirt. By 2020 Curtis recommends proportion, not t-shirts, for space ("size ≠ space").
- **Taxonomy redesign (2022).** Symptoms: gaps and hard-coded values, tokens too shallow for dark mode and themes, too general, misapplied (brand red used for errors), or not really tokens at all. Process: plan → map the token path through real code files → collect every as-is "token" from Figma, Style Dictionary, code and docs → inspect how they are applied (Figma's "selection colors") → log concepts → propose → workshop (silent review, dot vote, eliminate, agree) → spec → implement in Figma, code and docs, then announce. Most projects are ≥ 80% color.
- **Generations (2024).** Adopters ask "when can we start?" (eager), "by when must we be done?" (pragmatic), "do we have to?" (reluctant) and "what if we didn't use your system?" (individualist). Don't be "the dependency": deliver incrementally. Don't be "the blocker": take a head start on unstable inputs. Minimise "the wait". Kickstart migrations in adopters' own repos. Influence coordinated launches, but don't own them.

## Actionable heuristics for product design
- When choosing a team model, match it to your situation: solitary only if one product dominates; centralized when product teams lack design and front-end capacity; federated when strong designers sit on flagship products. In a federation, fund at least a small central staff whose job is documenting and releasing decisions, or the living style guide "seems quite dead" within months.
- When forming a federated group, include a credible person from the biggest-revenue platform and have them apply the system to their real product in the room, because real screens in real code convert skeptics faster than specs.
- When asked "what is the system team working on?", answer in now / next / soon terms and keep the roadmap to sections, key parts and major enhancements.
- When a value is used **once**, keep it local. When it recurs **3 or more times** (Curtis's rule of thumb, stated in both 2016 and 2020), promote it to a token. Park candidates at the top of the component's style file or spec, then promote them by adding the global token, replacing the local one, deleting the local one and applying it to sibling components.
- When a decision is shared by a predictable family (form controls' border), globalise it early. When it's speculative (tooltip, with popover "maybe later"), keep it local to avoid polluting the namespace and starting naming debates.
- When naming tokens, assemble them from levels in a written convention: namespace first (≤ 5 characters, or an acronym like `slds`), object if component-specific, then category/concept/property, then variant/state/scale, and mode last. Pick a convention and lint it even where the choice itself is taste.
- When the same value serves two purposes (error red in feedback and in form text), create two tokens with one aliasing the other, so either can change later without hitting the other.
- When a token name could be read two ways (`type`, `text`), choose a non-homonym (`font`) for the category.
- When supporting light/dark, add a mode level only to the subset of tokens that actually differ, and decide once whether defaults are explicit (`on-light`) or implied. Treat theme (brand) and mode (light/dark) as independent axes.
- When building a space system, pick a memorable base (16 is Curtis's default), use a nonlinear progression (2, 4, 8, 16, 32, 64) instead of linear 4-pt steps, and express intent with inset / squish / stretch / stack / inline concepts. Keep a few generic spacers for exceptions and coach people away from them in review.
- When adjusting density, change inset and stack tokens (e.g. +50% inset) rather than per-component overrides.
- When releasing a visual change, classify it before publishing. If it touches text or background colors that interact with adopter content, typography in dense or translated UI, or margins outside a component boundary, it's a major (breaking) release. Run contrast checks against the backgrounds adopters actually use, not just white.
- When stabilising typography, settle it before 1.0. Afterwards, add contained features (e.g. a Long Form Text component) rather than shifting base type.
- When designing a contribution model, write down the four-part definition (what, which size, from whom, released where). Make fixes and small enhancements self-serve and fast to release (don't hold a contributor's fix for a sprint bundle). Run large enhancements and new features through the full propose → design → code → doc → release path with a core-team partner. Give designers a non-git path for guideline edits.
- When re-architecting tokens, audit before proposing. Trace one token from the source file through every transformation layer into a component file per platform, because local re-mapping layers are where migrations break. Expect about 80% of the work to be color.
- When workshopping names, show visual examples plus repeated token structures with blanks (`color-{concept}-{the red one}-background`), have people dot-vote silently first, then eliminate and agree. Move the long tail to async polls once energy fades.
- When a system generation is coming, publish incremental delivery dates per subsystem, start from unstable upstream inputs instead of waiting, prioritise by adopter need, and offer a "kickstart" (a system expert opening the first migration PR in the adopter's repo).

## Evidence & caveats
- These are consulting essays based on Curtis's engagements (Sun.com, Morningstar, REI, Discovery Education, NetApp and others). They contain no controlled data; the only quantitative claims are small descriptive counts (space properties second only to color across five CSS libraries; "≥ 80% color" in taxonomy projects). [weak/practitioner, but influential and internally consistent]
- The "3 uses" rule is an explicit rule of thumb, not a measured threshold.
- Curtis revises himself: 2016 recommends t-shirt sizes for space; 2020 says to use proportional scales for space instead. Cite the later view.
- The 2015 essays predate DTCG, Figma variables and modern tooling (Sketch, InVision Craft and Stylus are mentioned). The organisational models still hold; the tooling advice is dated.
- Selection bias: Curtis is hired by large enterprises, so the advice assumes many products, many adopters and a funded core team. A three-person startup needs much less of it.

## Disagreements with other references
- `references/interaction/design-systems.md` §3.5 calls a linear 4-pt/8-pt scale (4, 8, 12, 16, 20, 24, 32, 40…) the de facto standard and suggests t-shirt scales for spacing. Curtis argues that linear steps give "too many choices too close together", prefers doubling from 16, and later rejects t-shirts for space. Both are conventions without user evidence. Prefer fewer, more distinct steps (closer to Curtis) for teams that misuse adjacent values, and the 4-pt grid where platform alignment (Material/iOS) matters more.
- `references/interaction/design-systems.md` §3.5 presents a fixed order ("namespace → object → base → modifiers"). Curtis says there is "no prevailing token level order" and offers only tendencies. Treat the order as a house convention to write down, not a standard.
- `references/interaction/design-systems.md` §8 gives a single contribution flow. Curtis argues that one catch-all flow is "ineffectively nonspecific": split it into fast, self-serve paths for fixes and small enhancements and a full, core-partnered path for large ones. That file's "3+ teams" promotion ladder agrees with Curtis's 3-uses rule.
- `references/interaction/design-systems.md` §8 covers SemVer for code but not visual change. Add Curtis's visual breaking-change criteria (color on adopter content, wrapping type, external spacing).
- `references/build/tokens-bridge.md` §0 says "semantic layer or nothing" (components consume semantic tokens only). Curtis allows component-scoped tokens recorded locally first, plus sparing generic spacers. Reconcile them: product UI consumes semantic or component tokens, never raw primitives; component tokens are a staging area, not a leak.
- `references/books/design-tokens-format-2025.md`: the DTCG Color Module discourages abbreviations and recommends 100-step numeric scales, which matches Curtis's ordered and bounded scales. DTCG's resolver "modifiers" correspond to Curtis's mode and theme levels, implemented as file contexts instead of name segments. With a resolver, you may not need `on-dark` in names at all.
- `references/books/atomic-design.md`: Frost names patterns by structure ("card", not "product card"). Curtis applies the same logic to tokens, keeping concepts heterogeneous and naming by purpose.

## Best quotes (< 25 words each, max 5)
- "Overlords don't scale."
- "Variables take the mystery out of obscure values. But they don't bridge the gap between naming and use."
- "When does a choice warrant becoming a token? A single use: nope, not enough. A second may lack conviction. But three?"
- "my Cap Score opinion … is weak about what the convention is yet strong that a convention exists."
- "I distinguish untraceable collaborative acts as participation, not contribution."

## Related
- `references/interaction/design-systems.md` (§3 tokens, §5 theming, §8 governance), `references/build/tokens-bridge.md`, `references/build/figma-craft-and-mcp.md`, `references/visual/layout-spacing-elevation.md`, `references/visual/color.md`, `references/process/redesign-and-scale.md` (migration), `references/future/ai-workflow-design-systems-and-agents-as-users.md`
- `references/books/design-tokens-format-2025.md`, `references/books/atomic-design.md`
- Curtis's other EightShapes series not read here: "Releasing Design Systems" (other parts), "Design Systems Generations" (parts 1, 2, 4, 5), component API and specs essays.
