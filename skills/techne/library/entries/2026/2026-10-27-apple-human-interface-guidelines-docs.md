---
id: 2026-10-27-apple-human-interface-guidelines-docs
title: "Apple Human Interface Guidelines — docs"
url: https://developer.apple.com/design/human-interface-guidelines
found_via: "Seed gallery #80; Apple's platform design guidance; inspected live"
kind: design-system
tags: [domain:devtools,platform:ios,platform:mac,platform:web,surface:docs,quality:clarity,quality:accessibility,style:light,technique:icon-tile-index,technique:color-coded-sections]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 5, originality: 3, transferability: 5, evidence: 4, ethics: pass }
total: 22
---

## What to steal (principle, 1–3 bullets)
- Color-code documentation sections and index them with big iconographic tiles so the reader learns the map (fundamentals, foundations, patterns) before the details.

## Why it works
- Two-level header: global Developer bar then a local 'Design' bar (Overview, What's New, Get Started, Guidelines, Resources); left rail is a Filter field plus six collapsible groups (Getting started, Foundations, Patterns, Components, Inputs, Technologies).
- Each section uses its own gradient family: green tiles for Design fundamentals (Design principles, Designing for iPhone Duo, Designing for iOS), yellow for Foundations (Accessibility, App icons, Color) — color is navigation.
- SF Pro Display 48/700 H1 at -0.3% tracking, SF Pro Text 17 body; text rgb(29,29,31), links rgb(0,102,204) underlined; 18px tile radius; no shadows at all.
- Reduced-motion honored; transitions 0.15–0.32s.

## Where it applies / where it doesn't
- Applies: any large reference corpus; settings or help centers with many categories.
- Doesn't: small docs where tile indexes add a click before content.

## Style DNA (optional, compact)
type: SF Pro Display 48/32/700, SF Pro Text 17/14 · color: white/rgb(245,245,247), rgb(29,29,31) ink, rgb(0,102,204) links, section gradients (green, yellow) · shape: 10–18px tiles, no shadows · motion: 0.15–0.32s, reduced-motion honored

## Notes / open questions
DNA: library/dna/2026-10-27-apple-human-interface-guidelines-docs.json (1440x900, one load).
