---
id: 2026-10-27-earth-nullschool-global-wind-map
title: "earth.nullschool — global wind map"
url: https://earth.nullschool.net
found_via: "Dataviz canon (Cameron Beccario's 'earth' visualisation, widely cited since 2013 as a reference for flow-field rendering)"
kind: data-viz
tags: [platform:web,surface:data-viz,quality:motion,quality:delight,style:dark,style:minimal,technique:particle-flow-overlay,technique:hidden-ui,technique:globe-projection]
role: technique
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 3, originality: 5, transferability: 3, evidence: 3, ethics: pass }
total: 19
---

## What to steal (principle, 1–3 bullets)
- Let the data be the entire interface: a rotatable globe of animated flow lines on black with a single 'earth ≡' menu, revealing controls only on request.

## Why it works
- The fold is just an orthographic globe on #000005: thousands of short animated wind streaklines over a blue-to-green-to-red speed field, with thin white coastlines and a faint graticule.
- The only chrome is a grey #979797 'earth ≡' menu bottom-left (M PLUS 1, 18px) and a small 'get the app! ×' prompt bottom-right; everything else (layers, projections, overlays) lives behind the menu.
- Weakness: no legend, location or timestamp visible by default, so a first-time viewer can enjoy but not read it (hence role: technique). No reduced-motion CSS detected.

## Where it applies / where it doesn't
- Applies: Ambient or exploratory data displays, hero visuals for climate/science stories, screensaver-like dashboards.
- Doesn't: Analytical tools where users need scales, values and time on screen.

## Style DNA (optional, compact)
type: M PLUS 1 13/18px, grey #979797 · color: near-black #000005, blue→green→red speed ramp, white coastlines · shape: sphere, 8px menu radius · motion: continuous particle animation, WebGL

## Notes / open questions
