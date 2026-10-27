---
id: 2026-10-27-lusion-studio-portfolio
title: "Lusion — studio portfolio"
url: https://lusion.co
found_via: "Awwwards Sites of the Year listing (Lusion v3, 2023 badge); WebGL studio canon"
kind: website
tags: [platform:web,surface:portfolio,quality:motion,quality:delight,style:light,style:3d,technique:webgl-scene,technique:contained-spectacle,technique:custom-easing]
role: technique
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 3, originality: 5, transferability: 3, evidence: 4, ethics: pass }
total: 20
---

## What to steal (principle, 1–3 bullets)
- Contain the spectacle: put the live WebGL scene inside a rounded card framed by calm, plain-type chrome, so the 3D reads as the work rather than as the interface.

## Why it works
- First screen is just a 'LUSION' wordmark (Aeonik, the only family on the page) above a 15px-radius card containing a live WebGL scene of glossy black, white and cobalt (#0016EC) 3D connector pieces: the chrome stays out of the way of the render.
- Page ground is a pale lavender-grey (rgb 240,241,250), so the dark card reads as a screen within the page rather than a full-bleed takeover.
- Small type scale (h1 36/400, h2 21.6, buttons 14) and pill buttons (87.5px radius, rgb 43,46,58), so the UI never competes with the render.
- Motion uses a custom cubic-bezier(0.35,0,0,1) at 0.4s. WebGL is present but there is no prefers-reduced-motion CSS.

## Where it applies / where it doesn't
- Applies: Studio portfolios, product launches whose hero is a 3D or real-time object, and any page where one showpiece has to coexist with navigation.
- Doesn't: Content-first sites, and low-end devices or bandwidth (the card is a GPU scene); without reduced-motion handling it is not accessibility-safe as is.

## Style DNA (optional, compact)
type: Aeonik only, h1 36/400, h2 21.6, 14 UI · color: #F0F1FA ground, #000 text, cobalt #0016EC accent in scene · shape: 15px cards, pill 87.5px buttons · motion: 0.3–0.4s cubic-bezier(0.35,0,0,1), WebGL, no reduced-motion CSS

## Notes / open questions
