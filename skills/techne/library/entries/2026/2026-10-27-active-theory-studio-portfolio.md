---
id: 2026-10-27-active-theory-studio-portfolio
title: "Active Theory — studio portfolio"
url: https://activetheory.net
found_via: "FWA / Awwwards studio canon (long award history); task brief"
kind: website
tags: [platform:web,surface:portfolio,quality:motion,quality:accessibility,style:dark,style:3d,technique:webgl-scene,technique:browser-gate]
role: anti-example
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 1, originality: 4, transferability: 4, evidence: 3, ethics: fail }
total: 16
---

## What to steal (principle, 1–3 bullets)
- Never gate content on browser capability: ship a readable HTML layer (work list, contact) under the WebGL experience, and never disable pinch-zoom.

## Why it works
- In a headless Chromium at 1440x900 the site showed an art-directed 3D fallback (a chrome 'a' ring and particles on deep navy) with the line 'YOUR BROWSER IS NOT SUPPORTED' set in a small pixel/mono face, and no work, links or contact (DNA: 1 text node, 0 links).
- The HTML ships only 'Please enable javascript' as the noscript content, so there is no readable layer for crawlers, assistive tech or unsupported browsers.
- The viewport meta sets maximum-scale=1.0, user-scalable=no, which disables pinch-zoom and fails the text-scaling basic in the ethics gate.
- The craft of the fallback scene shows the studio's rendering skill; it makes the lesson clearer, because the polish went to the error state instead of to access.

## Where it applies / where it doesn't
- Applies: Lesson for any WebGL or immersive build: progressive enhancement, a semantic HTML baseline and zoom left enabled.
- Doesn't: Not a critique of the studio's client work; the anti-pattern is specific to the gate and the viewport settings.

## Style DNA (optional, compact)
type: nbarchitekt 18/700 for the single message · color: #000 ground, white text, iridescent chrome scene · motion: WebGL scene even on the fallback screen; no reduced-motion CSS; viewport user-scalable=no

## Notes / open questions
The gate may be specific to headless or automation browsers. Re-verify in desktop Safari, Chrome and Firefox before citing it as a hard gate for real users.
