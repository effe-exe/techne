---
id: 2026-10-27-flighty-live-flight-tracker-app
title: "Flighty — live flight tracker app"
url: https://flighty.com
found_via: "Apple Design Awards 2023 — Interaction (winner), developer.apple.com/design/awards/2023; App Store App of the Year finalist 2023 (per site)"
kind: app
tags: [platform:ios,domain:travel,surface:landing,surface:dashboard,quality:clarity,quality:trust,live-activity,notification-as-ui,predictive-status,system-font,apple-design-award]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 5, originality: 5, transferability: 5, evidence: 3, ethics: pass }
total: 23
---

## What to steal (principle, 1–3 bullets)
- Design the notification stream as the product: show each flight state as a plain-language event ('Mom landed in New York 6:32am (22m early)') so the user understands the timeline without opening the app.

## Why it works
- Hero is a phone (map with great-circle routes, 'My Flights' list) ringed by notification cards that are the actual copy the app sends: 'Mom landed in New York 6:32am (22m early) and ☀ 88°', 'AUS ✈ JFK • Delayed 45m', 'Gate changed — Changed to ORD Terminal 2 • Gate 7'. Cards farther from the phone fade to ~20% opacity, reading as a timeline.
- A black pill segmented control at the fold (Preflight / At the airport / After landing / Download, active segment in yellow) structures the story by trip phase rather than by feature.
- Headline 'Get the truth when you travel' in system-ui 700 at 65px, -1px tracking, black on white; body in rgba(0,0,0,0.55); proof row (ADA Winner 2023, App of the Year Finalist 2023) sits directly under the subhead.
- Cards use layered 6-step hairline shadows at 0.02 alpha and 16px radius (35 instances), giving iOS-like depth without heavy drop shadows. DNA: WebGL on, no prefers-reduced-motion CSS found.

## Where it applies / where it doesn't
- Applies: any status product (deliveries, builds, payments, medical results) where the user's real question is 'what changed and what happens next'.
- Doesn't: products where predictions are unreliable — 'delay predicted' copy without good data erodes trust faster than silence.

## Style DNA (optional, compact)
type: system-ui (SF) 65/56/32/15, -1px display tracking · color: white bg, black text with 0.5–0.8 alpha greys, yellow active pill on black · shape: 16px cards, 999px pills, 6-layer 0.02-alpha shadows · motion: WebGL map; no reduced-motion CSS

## Notes / open questions
Banner at capture promoted 'NEW! Flighty Airports'. In-app Live Activity not inspected directly; described from site imagery.
