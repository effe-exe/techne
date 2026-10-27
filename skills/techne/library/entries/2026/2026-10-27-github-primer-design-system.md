---
id: 2026-10-27-github-primer-design-system
title: "GitHub Primer — design system"
url: https://primer.style
found_via: "Seed gallery #47; GitHub's public design system; inspected live"
kind: design-system
tags: [domain:devtools,platform:web,surface:docs,quality:accessibility,quality:density,style:light,technique:two-track-system,technique:redline-illustration,technique:theme-toggle]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 4, originality: 4, transferability: 5, evidence: 4, ethics: pass }
total: 22
---

## What to steal (principle, 1–3 bullets)
- Split a system by audience — Product UI for building the app, Brand toolkit for marketing — and show each with its own visual language on the landing page.

## Why it works
- Landing is two big 24px-radius cards: 'Build UI at GitHub with Primer Product UI' (redline spec drawing: width 480px / max 320px, a Divider callout, a Success toast) and 'Create for GitHub using the Brand toolkit' (Mona mascot evolving from line art to 3D).
- Two-tone headings: grey rgb(88,99,91) lead-in + black emphasis ('with Primer Product UI') in Mona Sans 34/500.
- Top nav promotes Accessibility to the same level as Product UI, Brand UI and Octicons; theme toggle and 'Give feedback' button.
- Mona Sans VF throughout (56/440 H1 — a variable weight); custom easing cubic-bezier(0.65,0,0.35,1); reduced-motion honored. Evidence: Primer publishes accessibility guidance used across GitHub.

## Where it applies / where it doesn't
- Applies: companies with both product and marketing design needs; large systems needing a clear front door.
- Doesn't: small systems — two tracks double maintenance.

## Style DNA (optional, compact)
type: Mona Sans VF 56/440, 34/500, 16 body · color: white/rgb(246,248,250), black + grey ink, blue rgb(0,85,213) links · shape: 6px buttons, 24px cards · motion: 0.08–0.4s, reduced-motion honored

## Notes / open questions
DNA: library/dna/2026-10-27-github-primer-design-system.json (1440x900, one load).
