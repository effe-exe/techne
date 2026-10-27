---
id: 2026-10-27-clerk-marketing-homepage
title: "Clerk — marketing homepage"
url: https://clerk.com
found_via: "Seed gallery #53; frequently cited devtools marketing; inspected live"
kind: website
tags: [domain:devtools,platform:web,surface:landing,surface:onboarding,quality:clarity,style:light,technique:product-as-hero,technique:tabbed-demo,technique:copy-prompt]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 5, originality: 4, transferability: 4, evidence: 3, ethics: pass }
total: 21
---

## What to steal (principle, 1–3 bullets)
- When you sell UI components, the hero is the component itself, live and focused, with neighbouring states blurred behind it to imply the full flow.

## Why it works
- H1 'Everything you need for authentication' at 56/700, -1.96px tracking (-3.5%), on rgb(247,247,248); sub-line in grey rgb(94,95,110).
- Below, a 4-tab switcher (User Authentication / Multi-tenancy / Enterprise / Agent) frames the actual 'Create your account' component in sharp focus, with profile and sign-in variants defocused on either side.
- 'Last used' badge on the email field and Google/GitHub buttons show real product detail; a 'Copy prompt' pill with IDE/agent icons targets AI-assisted setup.
- Floating rounded nav bar with hairline border; generous 128px section padding (4×); motion 0.15–0.5s with cubic-bezier(0.33,1,0.68,1).

## Where it applies / where it doesn't
- Applies: component vendors, SDKs, embeddable widgets; any product whose UI ships inside the customer's app.
- Doesn't: backend-only products with nothing visual to show; no prefers-reduced-motion CSS was detected.

## Style DNA (optional, compact)
type: geometric sans 56/700 at -3.5%, 13–18 UI, Söhne Mono accents · color: rgb(247,247,248) bg, rgb(19,19,22) ink, violet dot accent · shape: 6–8px controls, floating pill nav · motion: 0.15–0.5s ease-out, WebGL present

## Notes / open questions
DNA: library/dna/2026-10-27-clerk-marketing-homepage.json (1440x900, one load).
