---
id: 2026-10-27-dennis-snellenberg-portfolio
title: "Dennis Snellenberg — portfolio"
url: https://dennissnellenberg.com
found_via: "Awwwards-featured freelance portfolio; widely referenced in creative-dev tutorials"
kind: website
tags: [platform:web,surface:portfolio,quality:motion,quality:typography,style:minimal,style:dark,technique:multilingual-preloader,technique:curved-reveal,technique:magnetic-buttons]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 4, originality: 4, transferability: 4, evidence: 3, ethics: pass }
total: 20
---

## What to steal (principle, 1–3 bullets)
- Make the preloader say something: cycling 'Hello' in nine languages turns load time into a greeting and a signal of who the site is for.

## Why it works
- The preloader cycles greetings (DOM: Hello, Bonjour, स्वागत हे, Ciao, Olá, おい, Hallå, Guten tag, Hallo), shown as '• Hallo' in white on #1C1D20, then lifts away with a curved (convex) bottom edge instead of a straight wipe.
- Custom 'Dennis Sans' throughout (62 nodes): h1 216/450, h2 54, body 17.3. The single blue accent (#455CE9) is reserved for interactive circles; 27 elements use 50% radius (round magnetic-style buttons).
- Positioning copy is direct: 'Helping brands to stand out in the digital era… No nonsense, always on the cutting edge', with a Work list naming clients (TWICE, The Damai, FABRIC™) and roles.
- In-out easing cubic-bezier(0.7,0,0.3,1) at 0.25–0.8s. The viewport sets maximum-scale=1; no reduced-motion CSS.

## Where it applies / where it doesn't
- Applies: Personal portfolios, international brands, and any site with an unavoidable load moment.
- Doesn't: Not a model for zoom handling (maximum-scale=1); copy the preloader idea, not the viewport meta.

## Style DNA (optional, compact)
type: Dennis Sans 216/54/33/17.3 · color: #1C1D20 ground, white, blue accent #455CE9 · shape: circles (50%), 36.7px pills · motion: 0.25–0.8s cubic-bezier(0.7,0,0.3,1), curved panel reveal, no reduced-motion CSS

## Notes / open questions
