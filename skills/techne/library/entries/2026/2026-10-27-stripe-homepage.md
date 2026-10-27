---
id: 2026-10-27-stripe-homepage
title: "Stripe — homepage"
url: https://stripe.com
found_via: "Design-community canon (most-cited fintech marketing site); techne seed gallery"
kind: website
tags: [domain:fintech,platform:web,surface:landing,quality:typography,quality:motion,webgl-gradient,two-tone-headline,live-data,hairline-grid,light]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 4, originality: 5, transferability: 4, evidence: 3, ethics: pass }
total: 21
---

## What to steal (principle, 1–3 bullets)
- Let one headline paragraph do two jobs: a dark first sentence states the promise, the same-size muted continuation explains scope — hierarchy by colour, not by size.

## Why it works
- Hero is one 48px sohne-var paragraph at weight 300, -0.96px (-2%) tracking, 1.15 line-height: the first sentence in near-black navy rgb(6,27,49), the continuation in slate rgb(80,97,122). The eye reads the promise, then the detail, with zero size jumps.
- Animated WebGL gradient ribbon (orange→magenta→violet) is confined to the right edge and bleeds behind the nav; the text column stays on pure white, so brand energy never costs contrast.
- A live ticking stat above the headline ("Global GDP running on Stripe: 1.7392404…%") is proof-as-microcopy — scale shown as a moving number, not a claim.
- Visible hairline vertical guides and a ruled logo strip expose the grid; motion is mostly 0.3s with cubic-bezier(0.25,1,0.5,1) (ease-out-quart), 0.8s for larger reveals.

## Where it applies / where it doesn't
- Applies: any complex B2B/infra product that must look both technical and premium; long pages that need a consistent rhythm.
- Doesn't: brands without the budget for bespoke WebGL; DNA found no prefers-reduced-motion rules on this page — copy the restraint, add the reduced-motion fallback yourself.

## Style DNA (optional, compact)
type: Söhne (sohne-var) only, 48/32/26/22/16/14 · color: white, navy rgb(6,27,49) text, slate secondary, indigo CTA, pale blue-grey surfaces rgb(229,237,245) · shape: 4–6px radii · motion: 0.3s ease-out-quart, WebGL hero

## Notes / open questions
- Page height ~15,000px, 190 links; media coverage 0.51.
