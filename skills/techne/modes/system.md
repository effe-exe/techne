# Mode: system — design systems and tokens

Use for: creating, auditing, or extending a design system; tokens; component libraries; theming; consistency audits on big products.

## Steps
1. **Audit what exists** (Figma file via `get_variable_defs`/`search_design_system`, or the codebase). Inventory colors, type, spacing, radii, shadows and components, and find duplicates/near-duplicates and hardcoded values.
2. **Token architecture:** primitive → semantic → component tiers, named by role, not value (`color.text.secondary`, not `gray-500`). Use the W3C DTCG JSON format as the source of truth.
3. **Modes:** light/dark, brand themes, density. Map them to Figma variable modes, CSS custom properties and SwiftUI (see `references/build/tokens-bridge.md`).
4. **Components:** the API (props/variants), every state, anatomy, a11y requirements, do/don't, and content guidelines. Build on proven primitives (Radix/shadcn on web, native controls on iOS).
5. **Governance:** contribution process, versioning, deprecation, adoption metrics (coverage %, detached instances).
6. **Ship it** to Figma (→ `modes/figma.md`; the Figma `figma-generate-library` skill if available) and/or code (→ `modes/prototype.md`).

## Load
`references/interaction/design-systems.md`, `references/build/tokens-bridge.md`, `references/interaction/accessibility.md`. For visual foundations, `references/visual/color.md` and `references/visual/typography.md`.

## Output
Audit findings → token JSON → component specs → Figma/code implementation → governance notes. Scale the answer to the ask: one component, or the whole system.
