---
id: 2026-10-27-easings-net-easing-reference
title: "Easings.net — easing reference"
url: https://easings.net
found_via: "Motion-design canon (Easing Functions Cheat Sheet by Andrey Sitnik & Ivan Solovev; standard reference for Penner easings)"
kind: motion
tags: [platform:web,surface:docs,quality:motion,quality:clarity,style:plain,technique:visual-index,technique:small-multiples,technique:plain-language-explainer]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 3, clarity: 5, originality: 4, transferability: 5, evidence: 3, ethics: pass }
total: 20
---

## What to steal (principle, 1–3 bullets)
- Index a technical vocabulary as small multiples (one curve per card, name underneath) after a two-sentence real-world explanation (drawer slows as it opens, dropped object bounces).

## Why it works
- Opens with a physical analogy, not maths: 'When we open a drawer, we first move it quickly, and slow it down as it comes out. Drop something on the floor, and it will first accelerate downwards, and then bounce back up' — then 'This page helps you choose the right easing function.'
- A 6-column grid of white cards on #F8F8F8, each with one curve and its name (easeInSine … easeInOutBack, then elastic/bounce): In, Out, InOut are grouped in threes so the family pattern is visible at a glance.
- Curves use a two-colour gradient stroke (dark to green/blue) to show direction; hover transitions 0.2s with the actual easing curves applied in CSS (e.g. cubic-bezier(0.61,1,0.88,1) = easeOutSine).
- Open-source and translation call-out ('Help translate site to your language') in a single blue GitHub button.

## Where it applies / where it doesn't
- Applies: Any reference of parametric options (easing, colour ramps, chart types, type scales): show every option as a comparable thumbnail.
- Doesn't: Options that do not compress to a thumbnail (copy tone, layouts with content).

## Style DNA (optional, compact)
type: system-ui 16/32px · color: #F8F8F8 ground, white cards, #222 text, blue #095ABA links, dark→green/blue curve strokes · shape: square cards with soft shadow · motion: 0.2s hovers using the documented curves

## Notes / open questions
