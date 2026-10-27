---
id: 2026-10-27-toss-homepage
title: "Toss — homepage"
url: https://toss.im
found_via: "Korean fintech design canon (Toss design team, Toss Product Sans, Simplicity conference)"
kind: website
tags: [domain:fintech,platform:web,surface:landing,quality:typography,quality:motion,non-western,scroll-storytelling,section-progress-ticks,rounded-hero-video,custom-typeface]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 4, originality: 4, transferability: 3, evidence: 3, ethics: pass }
total: 18
---

## What to steal (principle, 1–3 bullets)
- For a super-app with dozens of services, tell one story per screen with a single short sentence and a scroll-position indicator, rather than a feature grid.

## Why it works
- First viewport: a near-full-bleed video inside a 40px-radius card (16px inset) with one 80px Toss Product Sans 700 line along the bottom — "금융부터 일상까지 마침내 토스 하나로" (from finance to everyday life, finally all in Toss), the phrases spaced as three beats.
- A vertical stack of tick marks at the left edge shows section progress on a very long (~51,000px) scroll-driven page with only 16 links — narrative, not navigation.
- Minimal chrome: centred five-item Korean nav, a single soft-grey "앱 다운로드" (app download) pill; text colour rgb(51,56,64) rather than black; body 16px at line-height 1.6, -0.32px tracking on buttons.
- Caveat: DNA found no prefers-reduced-motion rules on a WebGL/scroll-animated page — copy the pacing, not that omission.

## Where it applies / where it doesn't
- Applies: consumer brand pages for apps whose features are many but whose promise is one; launch/story pages.
- Doesn't: pages people come to for a specific task or price; 51k px of scroll is hostile to scanners.

## Style DNA (optional, compact)
type: Toss Product Sans 700 80/40, 16 body lh 1.6 · color: white, slate ink rgb(51,56,64), Toss blue logo, white-on-video headline · shape: 40px hero card, 12px pills · motion: 0.2–0.4s ease, scroll-triggered sequences, WebGL present

## Notes / open questions
