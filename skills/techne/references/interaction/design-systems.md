# Design Systems: Tokens, Components, Governance, Theming

> **Use this when:** creating, auditing, extending or migrating a design system, token set, component library or theme, or adding one component the "right" way.
> **Also when:** naming tokens, defining component APIs and variants, syncing Figma variables with code (React/Next.js, SwiftUI), or planning multi-brand or dark-mode theming.
> **Skip when:** it's a one-off marketing page with no reuse. Use visual/ references instead, though still use existing tokens if there are any.

---

## 0. Point of view

1. **A design system is a product with users (designers and engineers), not a Figma file.** Measure its adoption, coverage and time saved the way you would measure any product (Nathan Curtis, EightShapes essays, 2015–2024; Brad Frost, *Atomic Design*, 2016) [moderate: practitioner consensus].
2. **Tokens before components, and components before pages.** If a decision lives only in a hard-coded hex value, it doesn't exist in the system.
3. **Codify what already works, and don't invent in the abstract.** Start from an inventory of the existing product (the "interface inventory", Brad Frost 2013). The best systems are harvested from shipped and validated UI, not drawn on a blank canvas.
4. **Data-driven systems:** a system change is a change to thousands of screens at once. Roll it out behind flags, compare key metrics before and after per surface, and treat the system's defaults as hypotheses that the data can overturn.
5. **Smallest API that covers 80% of uses.** Every prop is a promise to maintain it forever. Say no to one-off variants and offer composition instead.
6. **Accessibility is built into the components** (focus, roles, contrast-checked tokens, Dynamic Type), so every product that uses them inherits it.

---

## 1. Scale the work to the request

| Request | Do | Don't |
|---|---|---|
| "Change the button padding" | Find the token (`button.padding.inline.md`). Change it at the right tier (component vs semantic). Check every size variant, icon-only and full-width layouts, focus ring, and text at 200%. Write a changelog line. | Hard-code `padding: 13px` in one screen. |
| "Add a new component" | Check whether composition of existing parts solves it (≥ 3 real use cases?). Write the API spec, states and a11y contract. Design and build with tokens only. Document it, then release with a version number. | Ship a snowflake inside a feature team's folder. |
| "Create a theme / dark mode / new brand" | Add or override the **semantic tier** only. Check contrast for every pair. | Fork components. |
| "Build a full design system" | Follow the roadmap in §9. | Start with 60 components. |

---

## 2. Atomic Design (Brad Frost, 2013 blog / 2016 book) [moderate: a mental model, not a law]

- **Atoms** are the smallest units (label, input, icon, color/type tokens). **Molecules** are simple groups that do one job (a search field = label + input + button). **Organisms** are complex sections (header, product card grid). **Templates** are page-level structure with placeholder content. **Pages** are templates with real content, used to test the system against reality.
- **Use it for:** vocabulary, inventories, and thinking about composition.
- **Don't use it for:** folder structure dogma or naming in public APIs ("molecule" means nothing to product engineers). Most mature systems (Polaris, Primer, Carbon) organise by **function** (actions, forms, feedback, navigation, layout, overlays, data display).
- Frost's later point: the system should serve the product, and "pages" are where the system gets validated.
- Pattern-library requirement: **lineage** — what each pattern contains and where it is used — for QA and change impact. **Name by structure, not context or content** ("card", not "product card"; blur the content in naming exercises). → references/books/atomic-design.md

---

## 3. Design tokens

### 3.1 Concept
Tokens are named design decisions (color, spacing, type, radius, elevation, motion, opacity, z-index, breakpoints) stored in a platform-agnostic format and transformed into CSS variables, Swift, Kotlin and Figma variables. The concept was coined by **Jina Anne and Jon Levine at Salesforce (Lightning Design System, 2014)** [strong, well documented].

### 3.2 The three-tier architecture (industry standard) [moderate-strong consensus]
1. **Reference / primitive / global tokens:** raw values with no intent attached. `color.blue.600 = #1F5FD6`, `space.4 = 16px`. Product UI must never use these directly.
2. **Semantic / system / alias tokens:** intent. `color.bg.surface`, `color.text.primary`, `color.border.critical`, `color.action.primary.bg`, `space.inset.md`. **Themes swap at this tier.**
3. **Component tokens** (optional, use sparingly): `button.primary.bg.hover`, `card.radius`. Add them when a component needs to diverge, or to let brands tune components without touching semantics.

**When a value becomes a token (Curtis):** used once → keep it local (in the component's spec or style file); used **3+ times**, or shared by a predictable family (form-control borders) → promote it to a global token, replace and delete the local one. Don't globalise speculative decisions.

Material 3 uses ref → sys → comp (`md.ref.palette.primary40` → `md.sys.color.primary` → `md.comp.filled-button.container.color`) [strong as example].

### 3.3 W3C Design Tokens Community Group (DTCG) format
- The **Design Tokens Format Module 2025.10** was published as the **first stable version on 28 Oct 2025** as a W3C *Community Group* Final Report / Candidate Recommendation (not a W3C Standard, not on the Standards Track). A companion **Resolver Module 2025.10** handles contexts like light/dark and brands [strong: verified at w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/].
- File extension `.tokens` or `.tokens.json`. Media type `application/design-tokens+json`.
- Reserved keys are prefixed with `$`: `$value`, `$type`, `$description`, `$extensions` (vendor data, reverse-domain keys; tools **must preserve** unknown extensions), `$deprecated` (boolean, or a string naming the replacement: "Use {button.activeBorder}"). A `$type` set on a group is inherited by its children. `$root` gives a group a base token next to its variants (`color.accent.$root`). `$extends` lets a group inherit another by deep merge (local wins) — the spec's model for component variants (`button-primary` extends `button`).
- **Aliases** use curly-brace references: `"{color.blue.600}"`. JSON Pointer `$ref` support is **required** and reaches inside values (one color channel, a typography sub-value).
- Types: `color`, `dimension`, `fontFamily`, `fontWeight`, `duration`, `cubicBezier`, `number`, plus composites `strokeStyle`, `border`, `transition`, `shadow`, `gradient`, `typography`.
- Confirmed value shapes (2025.10) [strong — read from the spec]: `color` = `{colorSpace, components, alpha?, hex?}` (14 CSS Color 4 spaces; `hex` is a 6-digit fallback); `dimension` = `{value, unit}` with unit **only `px` or `rem`**; `duration` unit `ms` or `s`; `fontWeight` 1–1000 or exact lower-case aliases (`bold`, not `Bold`); `cubicBezier` x values in [0, 1]; in `typography`, `lineHeight` is a number and `letterSpacing` a dimension. → references/books/design-tokens-format-2025.md
- **Resolver Module:** *sets* (token sources merged in order, last wins) and *modifiers* (e.g. `theme: light | dark`) with ≥ 2 contexts and an optional `default`; `resolutionOrder` lists them; inputs are strings; aliases resolve only after merging. Outputs = product of context counts (theme 2 × contrast 2 × brand 3 = 12 builds to contrast-check). Keep modifiers **orthogonal** — if theme and brand both set the same token, array order silently decides.
- Color Module naming guidance (non-normative): avoid abbreviations (`background`, not `bg`) and use 100-step numeric scales (100–900). The `bg` examples in this file are a house shorthand — fine, but a deviation from that guideline.

```json
{
  "color": {
    "$type": "color",
    "blue": {
      "600": { "$value": { "colorSpace": "srgb", "components": [0.12, 0.37, 0.84], "hex": "#1f5fd6" } }
    },
    "action": {
      "primary": {
        "bg": { "$value": "{color.blue.600}", "$description": "Primary action background (buttons, links on surface)" }
      }
    }
  },
  "space": {
    "$type": "dimension",
    "inset": { "md": { "$value": { "value": 16, "unit": "px" } } }
  },
  "motion": {
    "duration": { "base": { "$type": "duration", "$value": { "value": 250, "unit": "ms" } } },
    "easing": { "standard": { "$type": "cubicBezier", "$value": [0.2, 0, 0, 1] } }
  }
}
```

### 3.4 Tooling pipeline
- **Source of truth:** a tokens repo (JSON/DTCG) or Figma Variables (collections + modes) synced to the repo. Pick **one** direction of truth. Two-way sync without an owner always drifts.
- **Transform:** Style Dictionary (Amazon, v4 supports DTCG), Tokens Studio for Figma, Terrazzo (formerly Cobalt UI) [moderate: tool landscape changes; verify].
- **Outputs:** CSS custom properties (`--color-action-primary-bg`), Tailwind theme (v4 uses CSS-first `@theme` variables), Swift (`Color` assets or a generated `enum`), Kotlin/Compose, Figma variables.
- **Figma Variables:** a collection per tier (Primitives, Semantic, Component). **Modes** for themes (light/dark, brand A/B, density). Scope variables (fill, stroke, gap, radius) so designers can't apply a spacing token as a color. Hide primitives from publishing so people select semantic tokens.

### 3.5 Naming conventions
Nathan Curtis's levels ("Naming Tokens in Design Systems", EightShapes, 2020) [moderate: widely adopted]: **namespace, object, base (category · concept · property), modifiers (variant · state · scale · mode)**. Curtis says there is **no prevailing level order** — namespaces tend to come first, modifiers last, mode at the very end; pick a house order and write it down. His principles: include only the levels needed; avoid homonyms (`type`, `text` → `font`); theme (brand) ≠ mode (light/dark), they are independent axes; resolve polyhierarchy by aliasing one token to another. → references/books/eightshapes-curtis-design-systems.md
- Example: `acme.button.color.bg.primary.hover` or `color.bg.action.primary.hover`.
- Rules:
  - Name by **purpose, not appearance** (`color.text.critical`, not `color.red`) in the semantic tier.
  - Use one ordering everywhere. Write it down and lint it.
  - **T-shirt scales** (`xs sm md lg xl`) for radius and type when designers think in steps (for space, Curtis by 2020 recommends proportional names — `1-x`, `2-x`, `half-x` — since "size ≠ space"). **Numeric scales** (`space.100 / 200 / 400` or `4, 8, 12, 16`) when you need room to insert values later. Use 100-based numbering so `150` can slot in.
  - State names should be standard: `default, hover, pressed/active, focus, selected, disabled, invalid/error`.
  - Avoid encoding platform-specific units in names.
- **Spacing scale:** a 4-pt base with 8-pt rhythm (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80) is a common convention (Material, Apple layouts, most web systems) [moderate: convention, not research], not the only one: Curtis argues linear 4-pt steps give "too many choices too close together" and uses a doubling progression from a base of 16 (2, 4, 8, 16, 32, 64). Name space by concept — inset, squish, stretch, stack, inline, grid — not "padding"/"margin".
- **Type scale:** a modular ratio (1.125–1.333) or a hand-tuned scale. Many production systems hand-tune because pure ratios produce unusable steps at extremes [moderate]. *Myth:* the golden ratio (1.618) is "optimal" for UI. There is no evidence for that, and it is too steep for product type scales [myth].

---

## 4. Component API design

### 4.1 Before building: the component spec (agent template)
```
Name:              (noun, matches the user's mental model, e.g. "Banner" not "AlertBoxV2")
Purpose / when to use / when NOT to use (point to the alternative component)
Anatomy:           numbered parts (container, icon, title, body, actions, dismiss)
Variants:          (visual intent) e.g. tone = neutral | info | success | warning | critical
Sizes:             sm | md | lg (only if ≥ 2 real use cases each)
States:            default, hover, pressed, focus-visible, selected, disabled, loading, error, empty, skeleton
Content rules:     max lines, truncation, i18n expansion (+30–40% for German/Finnish), RTL mirroring
Behaviour:         keyboard table (key → result, from the matching APG pattern), focus management, gesture, motion tokens used
                   (toggle buttons: label OR pressed state changes, never both — "Mute" + aria-pressed, or "Play"→"Pause" without it)
Accessibility:     role, name source, states announced, contrast pairs, min target
Tokens used:       list
Platform notes:    web / iOS / Android differences
Open questions:
```

### 4.2 API rules (React-oriented; similar for SwiftUI)
- **Props describe intent, not style:** `tone="critical"`, `emphasis="high"`, not `color="red"` or `bg="#f00"`.
- **Enums over booleans for mutually exclusive options.** `variant="primary|secondary|tertiary"`, not `isPrimary` plus `isSecondary`, which allows impossible combinations. Booleans are fine for independent toggles (`fullWidth`, `disabled`, `loading`).
- **Composition over configuration.** Prefer compound components (`<Dialog><Dialog.Title/><Dialog.Body/><Dialog.Actions/></Dialog>`) and slots to 30 props (`titleIcon`, `titleIconColor`, …). Radix popularised `asChild` (render your own element with the component's behaviour) [strong as a pattern].
- **Controlled and uncontrolled:** support `value` + `onValueChange` and `defaultValue` (Radix convention).
- **Pass-through:** spread native attributes (`...rest`) to the root, forward refs (React 19 passes `ref` as a prop), and accept `className` but don't document it as a styling API.
- **Consistent naming across the library:** the same prop means the same thing everywhere (`size`, `tone`, `disabled`, `onOpenChange`).
- **Escape hatches are explicit and rare:** if teams override a lot, the component's API is wrong. Read the overrides as research data.
- **SwiftUI:** prefer `ButtonStyle` / `LabelStyle` / custom `ViewModifier` + environment values (`.controlSize`, `.tint`) over new view types, which matches platform idioms. Expose design tokens as `extension Color { static let actionPrimary = … }` or a `Theme` in `@Environment`.

```tsx
type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  asChild?: boolean;
};
```

### 4.3 Variants and states in Figma
- Use **component properties**: variant (enum), boolean (show icon), instance swap (icon), text (label). Keep the variant matrix lean, because size × variant × state × icon can explode into hundreds of variants. Model interactive states as a variant property only where designers need to *show* them in specs.
- Use auto layout everywhere, with padding and gap bound to spacing variables and fills bound to semantic color variables.
- Name layers by anatomy (`container`, `label`, `icon-start`) to support Code Connect and dev mode.
- Use **Code Connect** to map Figma components to code components so dev mode shows real import snippets.

---

## 5. Theming: dark mode, multi-brand, density

- **Themes override only semantic tokens.** Primitives are a shared palette (or per-brand palettes), and components never change.
- **Dark mode is not inversion.** Use lighter surfaces for higher elevation instead of shadows (Material uses tonal elevation), and desaturate brand colors to avoid vibration on dark backgrounds. Every text/surface pair has to be re-checked for contrast. Allow a system-preference default plus a manual override.
- **Multi-brand:** use one component library, N brand token sets (primitives + semantic mapping), and optionally component-tier overrides (e.g. radius, font). The DTCG 2025.10 resolver module standardises contexts or modes. In Figma, use modes per brand and a library per brand only when the palettes truly diverge.
- **Density modes:** comfortable / compact for data-heavy products (Carbon and Atlassian offer them). Implement them through spacing and size tokens, never per-component flags.
- **CSS implementation:**
```css
:root { --color-bg-surface: #ffffff; --color-text-primary: #1a1a1a; }
:root[data-theme="dark"] { --color-bg-surface: #121212; --color-text-primary: rgb(255 255 255 / 0.87); }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --color-bg-surface: #121212; } }
[data-brand="b"] { --color-action-primary-bg: var(--palette-green-600); }
```
- **SwiftUI:** asset-catalog colors with Any/Dark appearances plus High Contrast variants, or `Color(light:dark:)` helpers. Read `colorScheme` and `colorSchemeContrast` from the environment.

---

## 6. Reference systems: what to study each for

| System | Owner | Study it for |
|---|---|---|
| **Material Design 3** (m3.material.io) | Google | Token tiers (ref/sys/comp), dynamic color (HCT), motion tokens and springs, adaptive layouts, very complete component specs |
| **Apple HIG** + SwiftUI | Apple | Platform behaviour, typography/Dynamic Type, materials (Liquid Glass), SF Symbols, the "use system components" philosophy |
| **Polaris** (polaris.shopify.com) | Shopify | Content and voice guidelines, merchant-centric patterns, a token-first rebuild, migration to web components (2024–25) [moderate: verify] |
| **Carbon** (carbondesignsystem.com) | IBM | Enterprise data-dense UI, a 2x grid, themes (White, G10, G90, G100), accessibility documentation, governance and contribution model |
| **Primer** (primer.style) | GitHub | Primitives/functional token naming, React + ViewComponents parity, accessibility-first component reviews |
| **Radix UI / Radix Themes** | WorkOS | Headless, APG-compliant primitives, `asChild` composition, 12-step color scales with defined use per step |
| **React Aria / Spectrum** | Adobe | The most rigorous a11y + i18n behaviour hooks, internationalised date/number handling |
| **Atlassian Design System** | Atlassian | Token migration at scale (codemods), the elevation and spacing token approach |
| **Fluent 2** | Microsoft | Cross-platform (web, Windows, iOS, Android) parity |
| **GOV.UK Design System** | UK Government | Evidence-based patterns backed by public research, plain language, forms ("one thing per page") [strong: research published openly] |
| **shadcn/ui** | Community | The "copy the code into your repo" distribution model, Radix + Tailwind. Ideal for designers vibe-coding Next.js prototypes |

Radix Colors' 12-step scale: steps 1–2 for app and subtle backgrounds, 3–5 for component backgrounds (normal, hover, active), 6–8 for borders, 9–10 for solid backgrounds, and 11–12 for low- and high-contrast text [strong as documented convention]. It works well as a ready-made semantic mapping model.

---

## 7. Documentation (what every component page needs)

1. A one-line purpose and a **when to use / when not to use** list, linking to alternatives. This is the most-read part, according to many teams [weak/anecdotal].
2. A live example with a playground (Storybook, or a docs site with live code).
3. An anatomy diagram, variants, states, sizes.
4. Do/Don't pairs with real product content, not lorem ipsum.
5. Content guidelines (labels, length, tone).
6. An accessibility section: keyboard map, screen reader behaviour, contrast notes.
7. A props table generated from code (TypeScript), plus a Figma link and Code Connect.
8. Status (alpha / beta / stable / deprecated) and a changelog.
- Tools: Storybook (with the a11y addon, interaction tests and Chromatic visual regression), Zeroheight, Supernova, or custom Next.js/MDX docs.

---

## 8. Governance and operating model

- **Team models** (Nathan Curtis, "Team Models for Scaling a Design System", 2015) [moderate]: **Solitary** (one product team's system, used by others ad hoc), **Centralized** (a dedicated team that builds for everyone, which risks becoming a bottleneck), and **Federated** (contributors from product teams plus a small core). Most large companies end up with a **hybrid**: a central core team plus federated contributions. A federated model still needs centrally dedicated staff to document and release decisions. The most credible way to win a skeptical platform: a respected member applies the system to their real product.
- **What counts as a contribution (Curtis 2020):** a tangible proposal, design, code, doc or asset — fix → small enhancement → large enhancement → new feature — made by someone outside the core team and released through the system. Participation (feedback, critiques) is not contribution. Run **two workflows**: fixes and small enhancements self-serve and fast (don't hold them for a sprint bundle); large ones through the full path below with a core-team partner.
- **Contribution flow (large):** proposal (problem + ≥ 2–3 use cases + data) → triage → design/API review → build (tokens only, a11y tests) → docs → release. Publish an SLA (e.g. a triage response within 1 week).
- **The "snowflake → pattern → system" ladder:** one-offs live in product code. When 3+ teams need something, it gets promoted to a shared pattern, and it becomes a system component once the API is stable. Prevents premature abstraction. For small patterns, Frost's softer bar works: promote a one-off when a second team asks for it.
- **Versioning:** semantic versioning for code packages. Breaking changes ship with codemods and a deprecation window (≥ 1–2 releases), and `$deprecated` in tokens. Figma library releases come with notes.
- **Visual breaking changes are major** (Curtis 2018): color changes to text or backgrounds that interact with adopter content (re-check contrast on adopters' real backgrounds), typography changes that cause wrapping or cropping in dense or translated UI, and spacing changes outside a component's boundary (removing form-control margins broke 38 forms). Changes contained in system-owned surfaces (primary button background, menu-item padding) are not.
- **Metrics to track (system as a product):**
  - Adoption: % of UI built with system components, measured by code scanning (e.g. react-scanner, Omlet) and Figma library analytics (insertions, detach rate).
  - Detach/override rate per component, a signal that the API doesn't fit.
  - Token coverage: % of color and spacing values in code that are tokens, not raw values (lint with stylelint and ESLint rules).
  - Accessibility defects attributable to components vs product code.
  - Time-to-ship for standard screens, and designer and engineer satisfaction (quarterly survey, NPS-style).
  - Visual regression incidents.
- **Measured ROI claims** exist (e.g. Figma's 2022 internal study claiming designers worked ~34% faster with a design system on a specific task) [weak: vendor study, single task]. Use them as directional only, and measure your own.

---

## 9. Roadmap: building a design system from scratch

1. **Audit (1–2 weeks):** run an interface inventory, screenshotting every button, input, color, type size and spacing value in production. Count the unique values (it's common to find dozens of greys and many button styles). This is your business case. Frost's protocol: a cross-disciplinary group, a 30–90 min timeboxed screenshot pass (one instance per unique pattern), 5–10 min presentations per category, merged into one document, then decide stay / go / merge. Category checklist includes the easily forgotten: messaging (alerts, errors, loaders, tooltips), third-party components, ads and animation (screen-record it).
2. **Principles (2–4 short statements)** that resolve real trade-offs (e.g. "Clarity over density, except in pro tools"). Avoid platitudes.
3. **Foundations as tokens:** color primitives + semantic roles (light/dark), type scale, spacing scale, radius, elevation, motion (durations and easings from microinteractions-and-motion.md), breakpoints, z-index. Validate contrast for every semantic pair.
4. **Core components (the first ~10–15, by usage frequency):** Button, Link, Icon, Text/Heading, Input, Select, Checkbox, Radio, Switch, Card/Surface, Dialog/Sheet, Toast, Tabs, List item, Avatar, Badge, Tooltip. Build them headless-first (Radix / React Aria) on the web and system styles on SwiftUI.
5. **Patterns:** forms, empty states, errors, loading, navigation shells, data tables, onboarding. Patterns are often worth more than components.
6. **Docs and distribution:** Figma library + npm package + Swift Package, plus a docs site.
7. **Pilot with one product team**, measure time and defects, iterate, then scale.
8. **Governance live:** contribution model, versioning, metrics dashboard.

---

## 10. Anti-patterns
- A design system that exists only in Figma (or only in code), so parity drifts within weeks.
- Primitive tokens used directly in product UI (`blue-600` on a button). Theming becomes impossible.
- Naming by appearance in the semantic tier (`color.lightGrey2`).
- Variant explosion: 400 button variants in Figma, many of them unused.
- Building components for hypothetical needs ("we might need a tertiary-ghost-inverse").
- No owner for tokens and no decision log, so endless debates.
- Treating the system as a style police instead of a service. Teams then route around it.
- Shipping system changes globally without measuring their impact on key product metrics.

## 11. When NOT to build a design system
- An early-stage product still searching for product-market fit. Use an existing system (shadcn/ui, Material, native SwiftUI) with a thin token layer, and invest later.
- A single small marketing site. A style guide plus tokens is enough.
- When nobody owns its maintenance. An unmaintained system is worse than none.
