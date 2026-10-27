---
id: 2026-10-27-bruno-simon-driveable-3d-portfolio
title: "Bruno Simon — driveable 3D portfolio"
url: https://bruno-simon.com
found_via: "Awwwards SOTD/SOTM 2019 (original version); creative-developer canon; three.js community"
kind: website
tags: [platform:web,surface:portfolio,quality:delight,quality:motion,quality:keyboard,style:playful,style:3d,technique:game-as-interface,technique:webgpu,technique:input-maps]
role: technique
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 3, originality: 5, transferability: 3, evidence: 4, ethics: pass }
total: 20
---

## What to steal (principle, 1–3 bullets)
- If the interface is a game, ship the escape hatches: control maps for every input, an 'I'm stuck' respawn, a quality toggle and mute. Recovery is part of the play.

## Why it works
- The capture showed the loader: a glowing white arc over an isometric grid of blue × markers on an indigo-to-purple gradient, so the world's visual language starts before the world loads.
- The DOM documents controls for four input types: mouse, keyboard (WASD/arrows, SHIFT boost, SPACE jump, M map, R respawn), touch (one finger drives, two fingers move the camera) and gamepad (full button map).
- Recovery and comfort options sit in the menu: 'I'm stuck! Teleports you to the closest respawn', Reset, Quality (low), a Renderer choice (WebGPU) and an Audio toggle.
- Social layer: visitor 'whispers' (max 30 chars, 30 shown), achievements and a daily circuit leaderboard. 'Behind the scene' credits three.js/TSL, Rapier, Howler.js and links the MIT source and Blender files.

## Where it applies / where it doesn't
- Applies: Playful brand experiences, developer portfolios, onboarding games; the control-map and 'I'm stuck' pattern transfers to any 3D, map or canvas UI.
- Doesn't: Recruiter-speed browsing or accessibility-first contexts: the information sits inside a driving game with no flat alternative observed on first load.

## Style DNA (optional, compact)
type: Nunito UI, Amatic SC accents · color: indigo→purple gradient ground, electric-blue grid markers, white glow · motion: WebGL/WebGPU world, physics (Rapier), audio (Howler), no reduced-motion CSS

## Notes / open questions
