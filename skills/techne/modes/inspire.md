# Mode: inspire — references and moodboards from user input

Use for: "find me inspiration for...", users sharing a URL/screenshot/Pinterest/Are.na/same.energy/Awwwards link, building moodboards, extracting the style from a reference.

## Steps
1. **Parse the input:** a brief (words), references (URLs/images), or both. Write down what the user seems to like and what they want to avoid.
2. **Start with the library:** search `library/` (`python3 scripts/library.py search <terms>`) and the seed exemplars in `references/inspiration/gallery.md`; follow the method in `references/inspiration/inspiration-method.md`.
3. **Go wide outside it:** use `references/inspiration/source-registry.md` and pick the right sources for the medium (sites → Awwwards/Godly/Siteinspire; apps → Mobbin/Page Flows; type → Fonts In Use/foundries; mood → Are.na/Savee/Cosmos). Use WebSearch/WebFetch where the source is public, and the Are.na API via `scripts/arena.py`. For login-walled or bot-blocking sources (Pinterest, same.energy, Mobbin), ask the user for screenshots and analyse them visually.
4. **Extract the style DNA.** For live sites, measure it instead of guessing: `node scripts/style-dna.mjs <url>` returns fonts, type scale, palette, radii, spacing and motion. from each reference: type, color (sample hexes → OKLCH), grid/density, shape/depth, imagery, motion, tone of voice, and **the principle worth stealing**.
5. **Synthesize** a direction: common threads, tensions, and what *not* to take. Transform, don't copy: no cloning of layouts, illustrations or brand assets.
6. **Offer to save** strong new finds to the library (→ `modes/library.md`).

## Output
5–15 references (link + what to steal + tags) → a synthesized style DNA → starter tokens → optional Figma moodboard frame.
