# Tokens Bridge: Figma Variables ⇄ CSS Variables / Tailwind ⇄ SwiftUI

> **Use this when:** design decisions (color, type, spacing, radius, elevation, motion) must stay identical across Figma and code. Also use it for theming (light/dark, brands, density), for setting up a new token system, or for fixing drift between design and build.
> **Also load:** `figma-craft-and-mcp.md` (variables, modes, scoping), `web-prototyping.md` / `swiftui-prototyping.md` (where the tokens are consumed).
> **Skip when:** a one-off exploration will never be built or reused. Raw values are fine in a throwaway sketch, but say so.

---

## 0. Point of view

1. **Tokens are decisions, not values.** `color.text.danger` is a decision ("this is how we say something went wrong"). `#D92D20` is just today's answer. Name the decision.
2. **One source of truth, generated everywhere else.** Choose where tokens are authored (usually Figma variables for design-led teams, or a JSON repo for engineering-led ones) and *generate* the other formats. Hand-copying hex values between tools guarantees drift.
3. **Semantic layer or nothing.** Components must consume semantic tokens only. Dark mode, rebrands and accessibility fixes then become a token edit instead of a hunt through hundreds of screens.
4. **Small change, big reach: check the blast radius.** Changing `space.4` or `color.primary` touches every screen. Before editing a token, list where it is used (Figma: select a variable → find usages; code: grep) and screenshot the key screens before and after.

---

## 1. The three tiers

| Tier | Also called | Example | Who uses it | Has modes? |
|---|---|---|---|---|
| **Primitive** | global, base, core, reference | `blue.600 = #2563EB`, `space.4 = 16`, `radius.2 = 8` | Only other tokens | No |
| **Semantic** | alias, system, purpose | `color.bg.surface → neutral.0` (light) / `neutral.950` (dark); `color.action.primary → blue.600` | Components, layouts | **Yes** (theme, brand, density) |
| **Component** | specific | `button.primary.bg → color.action.primary` | One component | Rarely |

The tier model was popularised by Salesforce's Lightning Design System, where Jina Anne and Jon Levine coined "design tokens" around 2014. It has since been formalised by the W3C Design Tokens Community Group (DTCG) [moderate: industry consensus, not empirical research].

**Heuristics**
- Add a component tier only when a component must vary independently of the semantic layer (e.g. a brand that wants a different button color without changing every "primary" use). Otherwise it doubles maintenance for no gain.
- Semantic names describe **role + property + variant + state**: `color.text.secondary`, `color.border.input.focus`, `color.bg.danger.subtle`. Do not encode the value in the name (`color.blue-button` breaks the moment the brand turns green).
- Keep the semantic color set small. About 30–60 color roles covers most products [weak/practitioner]. Hundreds means component tokens are leaking into the semantic tier.
- Pair every background role with its foreground role (`bg.danger` + `text.on-danger`) and verify contrast **for each pair in each mode**: 4.5:1 for text, 3:1 for UI boundaries (WCAG 2.2 1.4.3 / 1.4.11) [strong].

---

## 2. Naming map across platforms

Use the same path everywhere and change only the separator and casing:

| Token path | Figma variable | CSS custom property | Tailwind utility (v4 `@theme`) | SwiftUI |
|---|---|---|---|---|
| color / bg / surface | `color/bg/surface` | `--color-bg-surface` | `bg-surface`* | `Color.bgSurface` |
| color / text / primary | `color/text/primary` | `--color-text-primary` | `text-text-primary`* | `Color.textPrimary` |
| space / 4 | `space/4` | `--space-4` | `p-4` (via `--spacing`) | `Space.s4` or `Space.m` |
| radius / md | `radius/md` | `--radius-md` | `rounded-md` | `Radius.m` |
| font / size / body | `font/size/body` | `--text-body` | `text-body` | `.body` text style |

*Tailwind derives utility names from the theme variable namespace (`--color-*` → `bg-*`, `text-*`, `border-*`). Choose names that read well as utilities (shadcn uses `--color-background`, `--color-foreground`, `--color-primary`, `--color-muted-foreground`, …). In Figma, set each variable's **code syntax** (Web/iOS fields) to the exact code name so Dev Mode and the MCP server output match.

---

## 3. Web: CSS variables + Tailwind v4 (shadcn convention)

Tailwind v4 is configured **in CSS**. A `tailwind.config.js` is optional or legacy. shadcn/ui puts semantic tokens on `:root` and `.dark`, then exposes them to Tailwind with `@theme inline`:

```css
/* src/app/globals.css */
@import "tailwindcss";

/* dark: variant follows a .dark class on <html> (toggle-able), not only the OS setting */
@custom-variant dark (&:is(.dark *));

/* ---------- Primitives (no modes) ---------- */
:root {
  --blue-600: oklch(0.546 0.215 262.9);
  --neutral-0: oklch(1 0 0);
  --neutral-950: oklch(0.145 0 0);
  --red-600: oklch(0.577 0.245 27.3);
}

/* ---------- Semantic: Light ---------- */
:root {
  --background: var(--neutral-0);
  --foreground: var(--neutral-950);
  --primary: var(--blue-600);
  --primary-foreground: var(--neutral-0);
  --destructive: var(--red-600);
  --radius: 0.625rem;            /* 10px */
}

/* ---------- Semantic: Dark ---------- */
.dark {
  --background: var(--neutral-950);
  --foreground: var(--neutral-0);
  --primary: oklch(0.707 0.165 254.6);   /* lighter blue keeps contrast on dark */
  --primary-foreground: var(--neutral-950);
}

/* ---------- Expose to Tailwind utilities ---------- */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-destructive: var(--destructive);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
}

/* Spacing: Tailwind v4 multiplies one base unit. p-4 = 4 × 0.25rem = 1rem = 16px */
@theme { --spacing: 0.25rem; }
```

Usage: `<div className="bg-background text-foreground rounded-lg p-4">`. No hex, no px.

**Tailwind v3 projects** (still common) define the same mapping in `tailwind.config.js`: `colors: { primary: "hsl(var(--primary))" }`. Check the installed version before editing anything.

**Other modes:** brands → `[data-brand="b"] { --primary: … }`; density → `[data-density="compact"] { --spacing: 0.2rem; }`; OS-only dark → `@media (prefers-color-scheme: dark) { :root { … } }`.

---

## 4. SwiftUI: tokens as types

Two good options for color. Use asset catalogs when designers maintain them in Xcode. Use generated code when tokens come from a pipeline.

**Option A: Asset catalog color sets.** Create `BgSurface` in `Assets.xcassets` with *Any* / *Dark* (and optionally *High Contrast*) appearances. Xcode 15+ generates symbols, so `Color(.bgSurface)` or `Color.bgSurface` works.

**Option B: generated Swift** (dynamic light/dark without assets):

```swift
// DesignSystem/Tokens.swift  — GENERATED from tokens.json, do not edit by hand
import SwiftUI

extension Color {
    static let bgSurface    = Color(light: .init(red: 1, green: 1, blue: 1),
                                    dark:  .init(red: 0.039, green: 0.039, blue: 0.039))
    static let textPrimary  = Color(light: .init(red: 0.039, green: 0.039, blue: 0.039),
                                    dark:  .init(red: 1, green: 1, blue: 1))
    static let actionPrimary = Color(light: .init(red: 0.145, green: 0.388, blue: 0.922),
                                     dark:  .init(red: 0.376, green: 0.647, blue: 0.980))
}

extension Color {
    /// Resolves per trait collection, so it follows Light/Dark automatically.
    init(light: Color, dark: Color) {
        self = Color(UIColor { $0.userInterfaceStyle == .dark ? UIColor(dark) : UIColor(light) })
    }
}

enum Space  { static let xs: CGFloat = 4, s: CGFloat = 8, m: CGFloat = 16, l: CGFloat = 24, xl: CGFloat = 32 }
enum Radius { static let s: CGFloat = 6, m: CGFloat = 10, l: CGFloat = 16 }
```

**Typography in SwiftUI:** map design text styles to **Dynamic Type text styles**, not fixed sizes, so accessibility scaling works:

```swift
extension Font {
    // Custom brand font that still scales with Dynamic Type
    static let displayL = Font.custom("Inter-Bold", size: 34, relativeTo: .largeTitle)
    static let bodyM    = Font.custom("Inter-Regular", size: 17, relativeTo: .body)
}
```
If the product uses the system font (SF Pro), map tokens directly to `.largeTitle`, `.title`, `.headline`, `.body`, `.callout`, `.footnote` and `.caption`. iOS's default `.body` is 17 pt at the default content size (Apple HIG) [strong].

---

## 5. Unit and value conversions (where drift hides)

| Property | Figma | CSS | SwiftUI | Rule |
|---|---|---|---|---|
| Length | px | `rem` = px / 16 (for type and spacing); px for hairlines | pt (1 Figma px = 1 pt at @1x frame sizes) | Design iOS frames at 1x point sizes (e.g. 393×852) |
| Line height | px or % | unitless ratio (`1.5`) preferred | `.lineSpacing(lineHeight − font.lineHeight)`; with text styles, rely on system defaults | Figma % is relative to font size (150% → 1.5) |
| Letter spacing | % or px | `em` (Figma 2% → `0.02em`) | `.tracking(size × percent / 100)` in points | Figma −1% at 32px → −0.32pt |
| Font weight | Regular/Medium/Semibold/Bold | 400/500/600/700 | `.regular/.medium/.semibold/.bold` | Check the font actually ships that weight |
| Shadow blur | blur radius | `box-shadow` blur ≈ Figma blur | `.shadow(radius:)` ≈ blur / 2 | [weak: visual approximation; compare screenshots] |
| Shadow spread | spread | `box-shadow` spread | not supported, so fake it with a larger blur or a background shape | |
| Opacity | 0–100% | 0–1 | 0–1 | |
| Color space | file profile: sRGB or Display P3 | `oklch()`/`color(display-p3 …)` for wide gamut; hex = sRGB | `Color(.sRGB, …)` / `Color(.displayP3, …)` | **Match the Figma file's color profile** or colors will shift |
| Duration/easing | ms + bezier or spring | `transition: 200ms cubic-bezier(…)`; Motion spring | `.spring(duration:bounce:)`, `.timingCurve(…)` | Store as tokens: `motion.duration.fast = 150ms`. Springs have no DTCG type — keep them in `$extensions` |

**DTCG constraint:** `letterSpacing` must be a `px`/`rem` dimension, so em/percent tracking (Figma %, CSS `em`) has to be computed at build time per font size, or stored in `$extensions`. → references/books/design-tokens-format-2025.md

**Myth check:** "1 px = 1 pt everywhere." This holds only when the iOS frame is drawn at point size. If a designer drew at @3x (1179 px wide), divide by 3. [strong: platform fact]

---

## 6. Interchange format and tooling

- **W3C DTCG format**: JSON with `$value`, `$type`, `$description`, and aliases as `"{color.blue.600}"`. The first stable version, 2025.10, was published 28 Oct 2025 (Community Group report, not a W3C Standard) [strong]. Under it, `color` is an **object** (`colorSpace`, `components`, optional `alpha`, `hex`), not a hex string. Tools are converging on it (Tokens Studio, Style Dictionary v4+, Figma variable import/export).

```json
{
  "color": {
    "blue": { "600": { "$type": "color",
                       "$value": { "colorSpace": "srgb", "components": [0.145, 0.388, 0.922], "hex": "#2563eb" } } },
    "action": {
      "primary": { "$type": "color", "$value": "{color.blue.600}",
                   "$description": "Primary buttons, links, selected states" }
    }
  },
  "space": { "4": { "$type": "dimension", "$value": { "value": 16, "unit": "px" } } }
}
```
(Pre-2025 drafts and many legacy pipelines write colors as `"#2563EB"` and dimensions as `"16px"` strings. Match whatever your pipeline expects, and convert when moving to 2025.10.)

- **Style Dictionary** (open source, originally from Amazon): transforms one token source into CSS, SCSS, JS, Swift, Kotlin and more. It is the default choice for the generation step.
- **Tokens Studio for Figma**: plugin that syncs tokens with Git (JSON) and can push them to Figma variables.
- **Figma variables**: native import/export of collections as JSON (recent versions). REST API endpoints for variables exist but are limited by plan (historically Enterprise) [moderate; verify current access].
- **Figma MCP** `get_variable_defs`: returns the variables and styles bound in a selection. This is the fastest way for an agent to learn which tokens a frame uses before writing code.

**Minimal generator (agent-ready, no dependencies)**: converts a flat semantic map with light/dark values into CSS and Swift. Use it for prototypes when no Style Dictionary pipeline exists.

```js
// scripts/tokens.mjs  — node scripts/tokens.mjs
import { writeFileSync } from "node:fs";

const tokens = { // semantic role: [light, dark]   (sRGB hex)
  "background":         ["#FFFFFF", "#0A0A0A"],
  "foreground":         ["#0A0A0A", "#FFFFFF"],
  "primary":            ["#2563EB", "#60A5FA"],
  "primary-foreground": ["#FFFFFF", "#0A0A0A"],
};

const css = (i) => Object.entries(tokens).map(([k, v]) => `  --${k}: ${v[i]};`).join("\n");
writeFileSync("src/app/tokens.css",
  `:root {\n${css(0)}\n}\n.dark {\n${css(1)}\n}\n@theme inline {\n` +
  Object.keys(tokens).map((k) => `  --color-${k}: var(--${k});`).join("\n") + "\n}\n");

const rgb = (hex) => [1, 3, 5].map((i) => (parseInt(hex.slice(i, i + 2), 16) / 255).toFixed(3));
const camel = (s) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase());
const swift = Object.entries(tokens).map(([k, [l, d]]) => {
  const [lr, lg, lb] = rgb(l), [dr, dg, db] = rgb(d);
  return `    static let ${camel(k)} = Color(light: .init(red: ${lr}, green: ${lg}, blue: ${lb}), dark: .init(red: ${dr}, green: ${dg}, blue: ${db}))`;
}).join("\n");
writeFileSync("Tokens.generated.swift",
  `// GENERATED — do not edit\nimport SwiftUI\n\nextension Color {\n${swift}\n}\n`);
```
Import `tokens.css` from `globals.css` after `@import "tailwindcss";`. Pair the Swift output with the `Color(light:dark:)` initializer from §4.

---

## 7. Agent workflow: syncing or fixing drift

1. **Inventory.** Figma: `get_variable_defs` on key frames, or list collections with `use_figma`. Code: grep for `--color-`, `@theme`, `Color(`, raw hex (`#[0-9a-fA-F]{3,8}`) and arbitrary Tailwind values (`-\[`).
2. **Diff.** Build a table: token | Figma value (per mode) | Web value | iOS value | status (match / drift / missing).
3. **Decide the source of truth** with the user. Do not guess which side is "right" when the two disagree.
4. **Fix at the semantic layer**, regenerate, and replace raw values in components with tokens.
5. **Verify.** Screenshots of the same screen in Figma, web and iOS, light and dark. Contrast check every fg/bg pair. Re-run the raw-value grep (target: zero in components).
6. **Report** the changes, the blast radius and any token that was added or removed (removals are breaking changes for other teams).

**Guardrails for code:** an ESLint rule or Stylelint `color-no-hex` in component folders; a CI grep that fails on new arbitrary Tailwind colors; Code Connect so handoff shows tokenised components.

---

## 8. Scale-of-task recipes

| Request | Action |
|---|---|
| "Button corners a bit rounder" | Change the semantic `radius` token (or the button's component token) once. Check every component that uses the same token. Update the Figma variable and code together. |
| "Add dark mode" | Make sure every component uses semantic tokens (fix raw values first). Add a Dark mode to the semantic collection. Define dark values (do not just invert: lower saturation, raise lightness for accents, avoid pure #000 under large text blocks if halation is a concern [weak/contested]). Contrast check all pairs. Wire `.dark` / asset appearances. |
| "Second brand" | Add a Brand mode or collection that remaps semantic → primitive. Components stay untouched. |
| "Compact density" | Add a Density mode for spacing and size tokens. Tailwind: `[data-density=compact] { --spacing: … }`. SwiftUI: inject a `Density` environment value. Keep touch targets ≥ 44pt on iOS and ≥ 24 CSS px on web even in compact mode. |
| "Full design system" | Primitives → semantic + modes → type scale → spacing/radius/elevation/motion → generate CSS + Swift → components consume only semantic tokens → docs → Code Connect. |

## 9. Anti-patterns
- Primitive tokens used directly in components (`bg-blue-600` in a button). Theming then breaks.
- Names tied to values (`gray-light-text`) or to pages (`checkout-green`).
- Dark mode made by inverting light colors. Shadows and elevation need rethinking: on dark UIs, elevation usually reads better through lighter surfaces than through shadows (Material Design dark theme guidance) [moderate].
- Different spacing scales in Figma (8-pt) and code (Tailwind default 4-px base) with no mapping documented.
- Token changes shipped in code but not in Figma, or the reverse. Always ship both in one change, with one changelog entry.

## Sources
- W3C Design Tokens Community Group, *Design Tokens Format Module* (drafts 2019–2025; stable version 2025). [moderate: specification]
- Salesforce Lightning Design System; J. Anne, talks on design tokens (2014–2019). [moderate, historical/practitioner]
- Tailwind CSS v4 docs ("Theme variables", "Dark mode") (2025). [strong for API facts]
- shadcn/ui docs, "Theming" (2024–2026). [strong for convention]
- Style Dictionary docs (Amazon, open source). Tokens Studio docs. [strong for tool facts]
- Apple, *Human Interface Guidelines* (Typography, Color, Dark Mode); Apple Developer docs on asset catalogs and Dynamic Type. [strong]
- Google, *Material Design*, "Dark theme" (2019–). [moderate]
- W3C, *WCAG 2.2* (2023). [strong]
