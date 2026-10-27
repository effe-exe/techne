---
id: 2026-10-27-material-design-3-design-system-site
title: "Material Design 3 — design system site"
url: https://m3.material.io
found_via: "Seed gallery #79; Google's open-source design system; inspected live"
kind: design-system
tags: [domain:devtools,platform:web,platform:android,surface:docs,quality:accessibility,quality:delight,style:expressive,style:soft-shapes,technique:dynamic-color,technique:navigation-rail,technique:shape-morph]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 4, originality: 4, transferability: 5, evidence: 4, ethics: pass }
total: 22
---

## What to steal (principle, 1–3 bullets)
- Show the system's expressiveness, not just its rules: hero mosaic of wildly different app screens all built from the same tokens.

## Why it works
- Navigation rail (Home, Get started, Develop, Foundations, Styles, Components, Blog) with pill-shaped active indicator — the site uses the M3 component it documents.
- Hero: 'Material Design' Google Sans 96/475 inside a 24px-radius lavender card, violet pill CTA rgb(100,66,214) 'Get started'; right side a collage of phone UIs (music player 'Serafina', chat, alarm, fashion).
- Rail bottom holds a pause-motion button and dark-mode toggle — motion control is surfaced as a first-class UI control.
- Radii range 4→48px (shape scale); standard easing cubic-bezier(0.2,0,0,1) at 200–300ms; tonal surfaces rgb(248,241,246) / rgb(220,218,245).

## Where it applies / where it doesn't
- Applies: any multi-brand or themeable product; showing token systems.
- Doesn't: brands that want restraint; Material's expressive shapes become a recognisable Google signature.

## Style DNA (optional, compact)
type: Google Sans 96/57 display at 475, Google Sans Text 16 body · color: tonal lavender/pink surfaces from a seed, violet primary rgb(100,66,214) · shape: 4–48px shape scale, pill CTAs · motion: 0.2–0.3s cubic-bezier(0.2,0,0,1), pause-motion control

## Notes / open questions
DNA: library/dna/2026-10-27-material-design-3-design-system-site.json (1440x900, one load).
