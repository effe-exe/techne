---
id: 2026-10-27-henry-heffernan-retro-computer-portfolio
title: "Henry Heffernan — retro computer portfolio"
url: https://henryheffernan.com
found_via: "Design-community favourite (2022 three.js portfolio, widely shared)"
kind: website
tags: [platform:web,surface:portfolio,quality:delight,style:retro,style:3d,technique:boot-screen,technique:user-initiated-start,technique:webgl-scene]
role: technique
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 3, originality: 5, transferability: 3, evidence: 3, ethics: pass }
total: 18
---

## What to steal (principle, 1–3 bullets)
- Open with a one-line boot prompt and a single START button: a heavy 3D load becomes a deliberate, user-started moment, and the browser gets the gesture it needs before audio can play.

## Why it works
- The first screen is a terminal-style dialog: a white 6px-bordered box on pure black reading 'Henry Heffernan Portfolio Showcase 2022 / Click start to begin _' with a blinking cursor, and a bordered 'START' button.
- Everything is monospace 16px (18 nodes) and there are no links before START. The portfolio itself (WebGL) only renders after the click; the HTML has no text fallback.
- Observation is limited to the boot screen; the 3D scene after START was not captured.

## Where it applies / where it doesn't
- Applies: Experiences that need an audio or fullscreen gesture, games, and heavy demos where an explicit start beats a silent spinner.
- Doesn't: Recruiter-speed browsing; no reduced-motion CSS and no text fallback.

## Style DNA (optional, compact)
type: system monospace 16 · color: #000 ground, white, dark teal rgb(29,46,47) surface · shape: square 6px borders · motion: 0.2s ease-in-out, WebGL after START

## Notes / open questions
