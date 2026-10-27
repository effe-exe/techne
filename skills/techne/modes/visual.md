# Mode: visual — UI visual design and art direction

Use for: designing screens from scratch, visual direction, "make it beautiful", restyling, landing pages, marketing sites, app UI.

## Steps
0. **Calibrate taste first:** run the taste-calibration procedure in `references/inspiration/taste-model.md`. Pull the 5–8 nearest exemplars (`python3 scripts/library.py search <category> <adjectives>`), read their measured style DNA in `library/dna/` (screenshots in `library/.shots/` exist only where the library was built locally; if they're missing, capture fresh ones with `node scripts/style-dna.mjs <url> --screenshot <file>` or ask the user), and decide which norms you follow and which *one* you break on purpose.
0b. **Brand signature (consumer-facing work):** define 1–3 ownable assets (display voice, colour world, brand object, motion, voice) and split the **brand layer** (loud) from the **tool layer** (quiet). See `references/inspiration/taste-model.md` §4b. Before delivering, run the logo-off test, and compare your key screen side by side with the category leader's real screen.
1. **Direction before pixels:** define the style DNA in 6 lines: personality (3 adjectives + 3 anti-adjectives), type, color, grid/density, shape/depth, motion. Base it on references (→ `modes/inspire.md`) when the user gives any.
2. **Type first:** choose faces deliberately (`references/visual/typography.md`, `references/visual/fonts-foundries-catalog.md`), set a modular scale, line lengths and line-heights.
3. **Color system:** build tonal ramps in OKLCH, semantic roles (bg/surface/text/border/accent/success/warning/danger), dark mode, and check contrast (WCAG 2.2 AA; APCA as a secondary check).
4. **Layout:** grid, a 4/8pt spacing scale, a hierarchy recipe (size → weight → color → space), and density appropriate to the task.
5. **Compose the screens.** One primary action per view. Make content real, not lorem ipsum.
6. **Polish pass:** run `references/visual/visual-polish-checklist.md` (optical alignment, consistent radii, icon weights matching type, tabular numbers, no orphans...).
7. **Critique your own output** with `modes/critique.md` before presenting it.

## Output
Style DNA + tokens + screens (in Figma or code) + a short rationale linking choices to goal and references.
