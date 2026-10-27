# Mode: tweak — small, precise changes

Use for: one-property or one-component changes — padding, spacing, a color, a label, an icon, a state, a radius, alignment. Also "make this feel better" on a single element.

## Steps
1. **Locate the system first.** Before inventing a value, find the existing token/scale (Figma variables, CSS vars, Tailwind config, SwiftUI constants). A tweak that breaks the system is not a tweak, it is debt.
2. **State the problem in one line** (e.g. "CTA reads as secondary because its contrast with the card is 1.9:1").
3. **Propose the change on-scale** (e.g. `padding 12 → 16` on the 4/8pt scale; color from the existing tonal ramp). Give exact values.
4. **Check ripple effects:** other instances of the component, all states (default/hover/pressed/focus/disabled/loading), dark mode, dynamic type / long strings / RTL, touch target ≥ 44pt / 48dp.
5. **Say whether it should ship directly or be tested.** If the element sits on a key funnel step with enough traffic, recommend an A/B test (→ `modes/experiment.md`), with the primary metric.
6. **Apply it** where the work lives (Figma via `modes/figma.md`, code via `modes/prototype.md`), or output a precise spec.

## Load when needed
`references/visual/layout-spacing-elevation.md` · `references/visual/visual-polish-checklist.md` · `references/interaction/platform-conventions.md` · `references/interaction/accessibility.md`. Pick the one or two the tweak touches.

## Output
- Before → after values (exact), why (one sentence, tied to a principle or data), ripple checks done, ship-or-test call.
- Respect the requested length exactly (if the brief says "one-line reason", write one line). Keep it short. A tweak answer that is longer than 15 lines is usually wrong.
