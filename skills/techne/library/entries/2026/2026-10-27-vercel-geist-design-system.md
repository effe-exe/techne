---
id: 2026-10-27-vercel-geist-design-system
title: "Vercel Geist — design system"
url: https://vercel.com/geist/introduction
found_via: "Public Vercel design system; Geist typeface open-sourced 2023 and widely adopted; inspected live"
kind: design-system
tags: [domain:devtools,platform:web,surface:docs,quality:typography,quality:clarity,style:monochrome,style:grid-lines,technique:bento-index,technique:theme-toggle,technique:command-search]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 4, originality: 4, transferability: 5, evidence: 3, ethics: pass }
total: 21
---

## What to steal (principle, 1–3 bullets)
- Make the system's index page a visual table of contents: each foundation (icons, colors, components, grid, type) is a tile showing a live sample of itself.

## Why it works
- Index is a 2-column grid of hairline-bordered cells: Brand Assets, Icons (24 glyphs), Components (real input, toggle, copy field), Colors (8 vertical pill swatches), Grid, Typeface — every tile previews its content.
- GeistSans 40/600 at -2.4px tracking for the H1; UI at 14/16; text greys rgb(23,23,23) / rgb(77,77,77) / rgb(143,143,143) form a 3-step hierarchy.
- Left nav groups Foundations / Brands (Vercel, Next.js, Turbo, v0, AI SDK) / Components — multi-brand under one system; header has Ctrl K search and a system/light/dark toggle.
- Single blue accent rgb(0,98,209) reserved for interactive state; radii 4–6px.

## Where it applies / where it doesn't
- Applies: any design-system or docs home; portfolios of components; settings index pages.
- Doesn't: systems with hundreds of components where a tile index won't scale beyond the foundations layer.

## Style DNA (optional, compact)
type: GeistSans 40/600 -6%, 14/16 UI, Geist Mono · color: white/rgb(250,250,250), 3 greys, blue rgb(0,98,209) accent, 8-hue swatch set · shape: 4–6px radii, 1px grid lines · motion: 0.15–0.2s, reduced-motion honored

## Notes / open questions
DNA: library/dna/2026-10-27-vercel-geist-design-system.json (1440x900, one load).
