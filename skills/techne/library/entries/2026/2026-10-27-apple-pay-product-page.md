---
id: 2026-10-27-apple-pay-product-page
title: "Apple Pay — product page"
url: https://www.apple.com/apple-pay/
found_via: "Apple product-page canon; Apple Pay as the reference wallet payment experience"
kind: website
tags: [domain:fintech,domain:commerce,platform:web,surface:landing,surface:checkout,quality:motion,quality:accessibility,completion-state-hero,pause-control,concentric-rings,light]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 5, originality: 4, transferability: 4, evidence: 3, ethics: pass }
total: 21
---

## What to steal (principle, 1–3 bullets)
- Make the success state the hero: the 'Done ✓' confirmation inside expanding colour rings shows the outcome of the action you are selling — and a visible pause button gives motion control.

## Why it works
- Headline "Your cards. Secured on iPhone." in SF Pro Display ~64–80px weight 600 (tracking -0.576px at 64), single blue pill CTA "Add a card to Apple Wallet" (980px radius) — the page asks for the one setup action that unlocks the product.
- Hero animation: an iPhone showing a debit card and a blue "Done ✓" confirmation, framed by concentric rounded rings in mint rgb(91,255,165) → cyan rgb(0,204,255) → blue rgb(0,121,255) that read as a tap/ripple. The completed state, not the process, is the image.
- A circular pause button sits top-right of the hero animation; DNA found prefers-reduced-motion rules. Motion 0.24–0.32s cubic-bezier(0.4,0,0.6,1).
- Sticky sub-banner with the Wallet icon repeats the action ("Add a card to Apple Wallet.").

## Where it applies / where it doesn't
- Applies: any payment, security or setup feature where the reassuring end state ("Done", "Paid", "Verified") is the selling point; any animated hero (copy the pause control).
- Doesn't: success-state heroes overpromise if the real flow has friction (verification, bank approvals) — show those steps honestly further down.

## Style DNA (optional, compact)
type: SF Pro Display 600 (80/64/48), SF Pro Text 12–21 · color: #f5f5f7 page, ink rgb(29,29,31), grey rgb(110,110,115), link blue rgb(0,102,204), mint/cyan/blue ring accents · shape: 28–36px tiles, 980px pills · motion: 0.24–0.32s cubic-bezier(0.4,0,0.6,1), pausable hero

## Notes / open questions
