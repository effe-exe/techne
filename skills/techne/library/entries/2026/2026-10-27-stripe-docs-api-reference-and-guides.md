---
id: 2026-10-27-stripe-docs-api-reference-and-guides
title: "Stripe Docs — API reference and guides"
url: https://docs.stripe.com
found_via: "Design-community canon for developer docs (seed gallery #2); inspected live"
kind: website
tags: [domain:devtools,domain:fintech,platform:web,surface:docs,quality:clarity,quality:trust,style:light,technique:live-code-sample,technique:personalised-docs,technique:command-search]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 5, originality: 4, transferability: 5, evidence: 3, ethics: pass }
total: 22
---

## What to steal (principle, 1–3 bullets)
- Make docs a working surface: personalise samples with the reader's own state (test keys, test cards) and put a runnable request/response right on the landing page.

## Why it works
- Landing pairs a 32/700 'Documentation' title with three task-phrased link columns (Payments / Revenue / Developers) — the IA is written as verbs ('Accept payments online', 'Sell subscriptions'), not product names.
- A floating card says 'Sign in or create an account to load your test API keys' beside a test-card '4242 4242 4242 4242' with copy icon — the docs anticipate the reader's next need.
- 'Try it out' section: left list of tasks (Start a payment, Create a customer…) drives a dark rgb(42,47,69) terminal panel showing the real CLI call and JSON response.
- System font stack (-apple-system) at 14/16 base, Menlo for code, single indigo rgb(84,105,212) for every link and the primary CTA; 4/8px radii, 100–240ms transitions on cubic-bezier(0,0,0.4,1).

## Where it applies / where it doesn't
- Applies: any API or configuration-heavy product where the reader must go from reading to doing; onboarding docs for B2B tools.
- Doesn't: content-only docs with no account context; personalisation needs auth plumbing and careful handling of secrets.

## Style DNA (optional, compact)
type: system UI stack 32/21/16/14, Menlo code · color: white + rgb(244,247,250) bands, indigo rgb(84,105,212) links/CTA, slate text rgb(80,97,122) · shape: 4/8px radii, 1px hairline shadows · motion: 0.1–0.24s ease-out

## Notes / open questions
DNA: library/dna/2026-10-27-stripe-docs-api-reference-and-guides.json (1440x900, one load).
