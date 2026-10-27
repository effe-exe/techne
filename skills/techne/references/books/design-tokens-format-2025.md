---
title: "Design Tokens Format Module 2025.10 (with the Color and Resolver Modules)"
author: "W3C Design Tokens Community Group (eds. Louis Chenais, Kathleen McMahon, Drew Powers, Matthew Ström-Awn, Donna Vitan; authors incl. Daniel Banks, Mike Kamminga, James Nash, Kevin Powell)"
year: 2025
domains: [design-systems, tokens, build, theming, interoperability]
evidence: "moderate"
---

# Design Tokens Format Module 2025.10 — W3C Design Tokens Community Group

Use this when: writing or reviewing a `tokens.json` file, a Style Dictionary/Terrazzo pipeline or a Figma-variables export; deciding how to encode color (OKLCH, P3), dimensions, type, motion and shadows so tools agree; modelling light/dark, high-contrast, brand or density variants without duplicating files; deprecating or renaming tokens without breaking adopters.

Source: https://www.designtokens.org/TR/2025.10/ (the DTCG's official report index, "Final Community Group Report, 28 October 2025"). Read in full: the Format Module (https://www.designtokens.org/TR/2025.10/format/, all sections 1–9 and the issue list) and the Resolver Module (…/resolver/, sections 1–8; several JSON examples did not render in my text conversion, but the prose and tables did). Color Module (…/color/): read sections 1–7 (format, all 14 color spaces, gamut mapping, interpolation, naming guidance) and skipped the per-space example JSON.

## The big idea (3 sentences)
A design token is a named design decision, and the DTCG format is a vendor-neutral JSON file format so that design tools, translation tools and documentation tools can exchange those decisions without bespoke glue code. Every token has a `$value` and an unambiguous `$type` (declared or inherited, never guessed), can alias other tokens, and lives in arbitrary groups that carry no meaning. The companion Resolver Module adds the missing piece for real products: one document that lists token sets and "modifiers" (theme, size, accessibility mode) and deterministically resolves any combination of inputs into one flat token set.

## Core concepts
- **Status.** Published by the DTCG as a Candidate Recommendation / Final Community Group Report on 28 Oct 2025 and declared stable. It is *not* a W3C Standard or on the Standards Track. Media type `application/design-tokens+json` (tools must also accept `application/json`); file extensions `.tokens` or `.tokens.json`; resolver documents `.resolver.json`.
- **Token vs group.** Any object with `$value` is a token; any object without it is a group. An object with both `$value` and children is an error. Groups are for organisation only, and tools SHOULD NOT infer type or purpose from them.
- **Reserved syntax.** All spec properties start with `$` (`$value`, `$type`, `$description`, `$extensions`, `$deprecated`, `$extends`, `$root`, `$ref`). Names must not start with `$` or contain `{`, `}` or `.`. Names are case-sensitive, but names that differ only by case collide when exported (e.g. two `$font-size` Sass variables), so tools may warn.
- **Type resolution.** In order: the token's own `$type` → the type of the token it references → the nearest parent group's `$type`. If none applies, the token is invalid. Tools MUST NOT guess type from the value.
- **Aliases.** `"{group.token}"` references a whole token's value. Chains are allowed, cycles are errors. Tools SHOULD keep references and resolve them only when a value is needed, so changing the base updates every alias. JSON Pointer (`{"$ref": "#/colors/blue/$value/components/0"}`) is required support and reaches *inside* values (one color channel, a dimension's unit, a typography sub-value).
- **`$root`** gives a group a base token alongside variants (`color.accent.$root`, `color.accent.light`). `{color.accent}` is invalid because it points at a group.
- **`$extends`** lets a group inherit another group's tokens with deep-merge overrides (local wins at the same path; whole token replaced, not merged property by property). It is the spec's model for component variants such as `button-primary` extending `button`.
- **`$deprecated`**: `true`, `false` (to un-deprecate inside a deprecated group), or a string explaining the reason, which may name a replacement alias such as "Please use {button.activeBorder} instead".
- **`$extensions`**: vendor data under reverse-domain keys. Tools MUST preserve extension data they don't understand, and it should be non-essential metadata.
- **Primitive types.** `color` (Color Module); `dimension` = `{value, unit}` with unit **only `px` or `rem`** (px maps to pt/dp; 1rem ≈ 16sp on Android; unit required even for 0); `fontFamily` (string or fallback array); `fontWeight` (number 1–1000 or exact lower-case aliases: thin/hairline 100 … normal/regular/book 400, medium 500, semi-bold 600, bold 700 … black/heavy 900, extra-black 950); `duration` = `{value, unit}` in `ms` or `s`; `cubicBezier` = `[P1x, P1y, P2x, P2y]` with x in [0, 1] and y unbounded; `number` (e.g. unitless line height).
- **Composite types.** `strokeStyle` (CSS keyword or `{dashArray, lineCap}`), `border` (color, width, style), `transition` (duration, delay, timingFunction), `shadow` (color, offsetX, offsetY, blur, spread, optional `inset`; may be an array for layered shadows), `gradient` (array of `{color, position}` stops, positions clamped to [0, 1]; no linear/radial distinction), `typography` (fontFamily, fontSize, fontWeight, letterSpacing as a dimension, lineHeight as a number multiplier). Sub-values can be literals or references of the right type.

Value shapes at a glance (Format Module §8–9):

| `$type` | `$value` shape | Constraint worth remembering |
|---|---|---|
| `color` | `{colorSpace, components, alpha?, hex?}` | 14 color spaces; `none` allowed in components |
| `dimension` | `{value, unit}` | unit `px` or `rem` only |
| `duration` | `{value, unit}` | unit `ms` or `s` |
| `fontWeight` | number or alias string | 1–1000; aliases are exact and lower-case |
| `cubicBezier` | `[x1, y1, x2, y2]` | x in [0, 1], y unbounded |
| `number` | JSON number | use it for line height and gradient stop positions |
| `shadow` | object or array of objects | `inset` optional; arrays don't flatten |
| `typography` | 5 sub-values | lineHeight is a number, letterSpacing a dimension |

- **Color Module.** `$value` = `{colorSpace, components, alpha?, hex?}`. Supported spaces: srgb, srgb-linear, hsl, hwb, lab, lch, oklab, oklch, display-p3, a98-rgb, prophoto-rgb, rec2020, xyz-d65, xyz-d50, following CSS Color 4. The `none` keyword marks a missing component (e.g. no hue on white), which changes interpolation. `hex` is an optional 6-digit fallback (alpha stays separate). Gamut mapping and interpolation are left to tools, and authors are told to validate the output.
- **Color naming guidance (non-normative).** Three categories: base, alias, component. Numeric scales in steps of 100 (100–900, with 500 as the base), not 1, 2, 3, so steps can be inserted; finer steps (e.g. 25s) are allowed at the light end of neutrals; bounded scales that use a value such as HSL lightness are another option. Alias names lead with category + property (`color.background.*`); avoid abbreviations ("background", not "bg"). Component tokens start with the component name and live near the component code.
- **Resolver Module.** *Sets* are lists of token sources merged in order (last wins). *Modifiers* have named *contexts* (e.g. `theme: light | dark`), should have ≥ 2 contexts (exactly 1 SHOULD error, 0 MUST error), may declare a `default`, and may reference sets but never other modifiers. `resolutionOrder` lists sets and modifiers. The tool validates the inputs (string values only; unknown modifier, invalid context or missing non-default modifier are errors), merges in order, and only then resolves aliases. The number of possible outputs is the product of context counts (2 × 2 = 4; 4 × 3 × 2 = 24).
- **Orthogonality.** Modifiers should touch disjoint tokens (theme sets colors, size sets dimensions). If theme and brand both set `color.button`, array order silently decides the result. Needing many override sets after the modifiers is described as a "smell".

## Actionable heuristics for product design
- When starting a token file, set `$type` on top-level groups (`color`, `space`, `font`, `motion`) and let tokens inherit, because a token without a determinable type is invalid and tools are forbidden from guessing.
- When naming tokens, use only letters, digits, hyphens and spaces in names; never `.`, `{`, `}` or a leading `$`, and never two names that differ only in case, because exports to Sass/CSS/Swift will collide.
- When expressing spacing, radius or type size, use `px` or `rem` only. Put em-based letter-spacing, percentages, viewport units and `pt` in your translation layer, because the format has no other dimension units. Use `rem` for anything that should follow the user's text-size preference, and `px` for hairlines and fixed geometry.
- When defining line height, store it as a `number` multiplier (1.5), not a dimension, because the typography composite expects a unitless number.
- When defining font weights, use numbers (or the exact lower-case aliases). "Bold" with a capital B, or 1001, must be rejected.
- When defining color, store it in the space you design in (OKLCH or display-p3 for wide-gamut palettes, which matches techne's "palettes in OKLCH" rule) and add a 6-digit `hex` fallback for sRGB-only tools. Check the gamut-mapped output, because the spec leaves mapping to each tool.
- When a value is an alias, write `"{color.blue.600}"` and keep it unresolved in source, so a primitive change propagates to every semantic token. Use `$ref` JSON Pointer only when you truly need one channel or sub-value (e.g. reuse a base hue while varying lightness).
- When a component variant mostly matches its base (secondary or large button), model it with `$extends` and override only what differs, instead of copying the group.
- When retiring a token, set `$deprecated` to a sentence naming the replacement alias ("Use {color.text.subtle} instead") for at least one release before deleting it, because tools can turn that into IDE warnings and doc links.
- When a tool needs private metadata (Figma variable IDs, scopes, code syntax), put it under `$extensions` with a reverse-domain key (`com.figma.*`), and check that your pipeline round-trips unknown extensions as the spec requires.
- When you need motion beyond a duration and a Bézier (springs, keyframes, reduced-motion alternatives), there is no standard type. Store spring parameters under `$extensions` and use a resolver modifier (e.g. `motion: default | reduced`) for reduced-motion values.
- When you need light/dark, high contrast, brands or density, write one resolver: foundation sets first, then one modifier per independent dimension (theme, contrast, brand, density). Keep modifiers orthogonal, give each a `default`, and budget for the permutation count (theme 2 × contrast 2 × brand 3 = 12 builds to contrast-check and screenshot).
- When a gradient token is needed, store the stops in the token and the geometry (angle, linear vs radial) in code or `$extensions`, because the type has no geometry.
- When reviewing a token file, run this checklist: every token has a resolvable type; no cycles; no group used as an alias target; units only px/rem/ms/s; weights within 1–1000; Bézier x within [0, 1]; deprecated tokens name their replacements.

## Evidence & caveats
- This is a consensus interchange specification, not research. It tells you how to *write down* decisions so tools agree. It says nothing about which colors, spacings or names work better for users. [authoritative as a format; n/a as UX evidence]
- Stability is claimed, but many composite types still carry open "is this fit for purpose?" issues (font family #53, stroke style #98, border #99, shadow #100, gradient #101, typography/line height #102, transition #103). Expect future revisions in exactly those areas.
- Tool support lags the spec. Many pipelines still use the older string forms (`"16px"`, `"#2563EB"`); check what your translator accepts before converting a whole repo.
- The spec contains small errors. In the Color Module's HSL example, "Hot pink" `#ff00ff` is given hue 330, but `#ff00ff` is hue 300. Validate examples rather than copying them.
- Several normative statements are hedged (SHOULD), e.g. case-insensitive resolver inputs. Two conforming tools can still differ at the edges.

## Disagreements with other references
- `references/interaction/design-systems.md` §3.3 says to "confirm exact field names against the spec". Confirmed: color `{colorSpace, components, alpha, hex}`, dimension/duration `{value, unit}`, units limited to px/rem and ms/s. That file's §3.2 and examples use abbreviated names (`color.bg.surface`), which the Color Module's naming guidance explicitly discourages ("background", not "bg"). This is guidance, not a validity rule; prefer the unabbreviated form for new systems and keep existing names in a live system rather than churning them.
- `references/build/tokens-bridge.md` §5 recommends `em` letter-spacing for web (Figma 2% → 0.02em). DTCG typography `letterSpacing` must be a px/rem dimension, so store the em/percent intent in `$extensions` or compute it at build time. Trust the bridge for the CSS output and the spec for the source file.
- `references/build/tokens-bridge.md` §6 shows `"$value": "#2563EB"` for colors and notes that older drafts used string dimensions. Under 2025.10 the string color form is not valid; use the object form in new files.
- `references/interaction/design-systems.md` §3.2 says "themes swap at the semantic tier". The resolver agrees in practice (modifiers override sets) but is tier-agnostic: it will just as happily let a modifier override primitives or component tokens. Keep the semantic-tier rule as house policy.
- techne's motion rule ("gestures use interruptible springs", SKILL.md §2) has no DTCG type. Springs live in `$extensions` or code until the spec adds them.

## Best quotes (< 25 words each, max 5)
- "Design tokens are a methodology for expressing design decisions in a platform-agnostic way so that they can be shared across different disciplines, tools, and technologies."
- "Tools MUST NOT attempt to guess the type of a token by inspecting the contents of its value."
- "Groups are arbitrary and tools SHOULD NOT use them to infer the type or purpose of design tokens."
- "Making modifiers orthogonal as much as possible reduces cognitive load and reduces user error." (Resolver Module)

## Related
- `references/interaction/design-systems.md` (tiers, governance), `references/build/tokens-bridge.md` (Figma ⇄ CSS/Tailwind ⇄ SwiftUI mapping), `references/build/figma-craft-and-mcp.md` (variables and modes), `references/visual/color.md` (OKLCH palettes, contrast pairs), `references/interaction/microinteractions-and-motion.md` (durations and easings to tokenise)
- `references/books/eightshapes-curtis-design-systems.md` (naming levels and taxonomy process), `references/books/atomic-design.md`
- CSS Color Module Level 4; JSON Schema 2020-12 (`$ref` semantics); RFC 6901 JSON Pointer.
