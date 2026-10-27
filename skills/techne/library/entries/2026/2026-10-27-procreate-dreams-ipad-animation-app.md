---
id: 2026-10-27-procreate-dreams-ipad-animation-app
title: "Procreate Dreams — iPad animation app"
url: https://procreate.com/dreams
found_via: "Apple Design Awards 2024 — Innovation (winner) and Interaction finalist, developer.apple.com/design/awards/2024"
kind: app
tags: [platform:ios,domain:media,surface:editor,surface:landing,quality:motion,quality:delight,timeline-ui,performance-recording,touch-first,apple-design-award]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 4, originality: 5, transferability: 4, evidence: 3, ethics: pass }
total: 21
---

## What to steal (principle, 1–3 bullets)
- Let users perform instead of keyframe: record a gesture in real time as the default, with precise keyframes available as a secondary mode.

## Why it works
- Hero shows the actual editor: full-bleed collage canvas, timecode '00:00:10.001', a track timeline with thumbnails and a pink 'Edit Flipbook' track, and a three-way mode switch Compose / Perform / Keyframe at the bottom — the interaction model is the hero.
- 'Edit. Animate. Create.' in system-ui 600 at 70px under a small caps grey eyebrow 'PROCREATE DREAMS'; the accent is a hot pink rgb(247,35,91) used only for the active track/state.
- Timeline chrome is dark rgb(38,38,38) on rgb(10,10,10) so artwork carries all the colour; 64px and 42px radii on panels.
- DNA: 0.3s ease-in-out transitions, cubic-bezier(0.4,0,0.2,1), reduced-motion CSS present.

## Where it applies / where it doesn't
- Applies: any time-based editor (video, audio automation, presentation builds, game tools) where recording a performance is faster than authoring frames.
- Doesn't: precision engineering timelines (e.g. CNC, data pipelines) where performance capture introduces noise.

## Style DNA (optional, compact)
type: system-ui 70/600, 18 body · color: rgb(10,10,10) bg, rgb(38,38,38) panels, single pink accent rgb(247,35,91) · shape: 64px/42px panels, 100px pills · motion: 0.3s ease-in-out, cubic-bezier(0.4,0,0.2,1); reduced-motion CSS

## Notes / open questions
Related: 2026-10-27-procreate-ipad-illustration-app.
