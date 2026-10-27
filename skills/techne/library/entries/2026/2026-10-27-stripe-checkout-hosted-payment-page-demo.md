---
id: 2026-10-27-stripe-checkout-hosted-payment-page-demo
title: "Stripe Checkout — hosted payment page demo"
url: https://checkout.stripe.dev/checkout
found_via: "Checkout canon (Stripe Checkout, the reference hosted payment page; Stripe's official interactive demo)"
kind: flow
tags: [domain:fintech,domain:commerce,platform:web,surface:checkout,quality:clarity,quality:trust,order-summary,express-pay-first,deferred-tax,promo-chip]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 5, originality: 4, transferability: 5, evidence: 3, ethics: pass }
total: 22
---

## What to steal (principle, 1–3 bullets)
- Lead the payment page with the total, then itemise how you got there (line items, promo chip with its effect, tax 'Enter address to calculate'), and put the one-tap wallet above the card form.

## Why it works
- Order summary hierarchy: merchant mark, product name small, then the amount large ("$28.80"), then line items, Subtotal $32.00, a grey promo chip "SAVE10" with "−$3.20 · 10% off", "Tax ⓘ — Enter address to calculate", and "Total due $28.80". Nothing is hidden, and the unknown (tax) is labelled as pending rather than omitted.
- Express wallet first: a full-width black Apple Pay button sits above an "OR" divider and the card form — the fastest path gets the top slot.
- The demo itself is a teaching UI: left panel of toggles (one-time vs recurring, promotion codes, calculate tax, shipping address, phone, terms of service, custom fields, button text "Pay") updates the live preview; desktop/mobile and country switchers below.
- System UI font (-apple-system), white surfaces, 10px radius inputs/cards, indigo rgb(103,93,255) accents, 0.15–0.4s transitions. A collapsible "Hide ⌃" toggles the summary for mobile-style compactness.

## Where it applies / where it doesn't
- Applies: any checkout, subscription sign-up or invoice payment; teams deciding which checkout fields to collect (the toggle panel is a checklist).
- Doesn't: demo only — real conversion depends on the merchant's configuration; adding every optional field erodes the clarity shown here.

## Style DNA (optional, compact)
type: system UI (-apple-system), amount ~28px semibold, 14–16 body · color: white, grey rgb(245,246,248) panels, ink rgb(53,58,68), indigo rgb(103,93,255), black wallet button · shape: 10px inputs/cards, 6px buttons · motion: 0.15–0.4s ease

## Notes / open questions
