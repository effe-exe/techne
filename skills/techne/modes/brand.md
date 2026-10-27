# Mode: brand — create a brand from scratch (or rebrand)

Use for: naming, brand ideas, visual identity for a new product, a rebrand, "make it unmistakable", making a product that has to stand next to a category leader.

Load: `references/inspiration/taste-model.md` (§4b brand signature, §4 category signatures, §6 calibration), `references/visual/typography.md`, `references/visual/fonts-foundries-catalog.md`, `references/visual/color.md`, `references/masters/master-lenses.md`.

## Steps
1. **Position before pixels.** Who is it for, what job, what the category looks like today, and which leader it must stand next to. Write the brand idea in one sentence a stranger would remember, e.g. "every transfer is a handed-over parcel with a tag".
2. **Study the category, then leave it.** Pull 8–15 exemplars from the taste library (`python3 scripts/library.py search <category>`) and measure the leader (`node scripts/style-dna.mjs <url>`, or use the user's screenshot). List the category clichés you'll avoid.
3. **Name (if needed).** 3–5 candidates that are short, sayable and ownable. Check for obvious collisions (web search, domain, App Store), then recommend one.
4. **Signature assets (1–3, ownable):**
   - display voice: a free/open-licence face or a licensable one, the size contrast, the tagline cadence
   - colour world: in OKLCH, with contrast checked
   - brand object: the product's subject turned into a motif
   - motion signature: one easing or choreography
   - voice: three attributes, three things it never says

   For each asset, say where it's **loud** (brand layer) and where it's **quiet** (tool layer).
5. **Tokens.** Turn the brand into primitive → semantic → component tokens, with brand-layer and tool-layer roles sharing one system (→ `modes/system.md`).
6. **Prove it on real surfaces:** the home/marketing page with the product's core tool inside it, one key product screen, an email or notification, and the app icon/favicon. Make them in code or Figma (→ `modes/prototype.md` / `modes/figma.md`).
7. **Checks before delivering:**
   - **logo-off test:** with the name and logo removed, would you still know whose product it is?
   - **stand next to the leader:** put your page beside the leader's real screen. Is it as distinctive, without borrowing its assets?
   - **signature crafted hardest:** stress-test at 390px, at 1440px, in dark mode and with long strings
   - **first viewport earns the action**
   - **anti-cloning cues:** a distinctive brand is easier for phishers to fake
   - **accessibility:** WCAG 2.2 AA in both themes

## Output
`brand.md` with the idea, name, signature assets (loud/quiet map), voice and token summary, plus the surfaces as screenshots at 390 and 1440. Then list the decisions, assumptions and what is unverified.
