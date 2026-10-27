---
id: 2026-10-27-excalidraw-whiteboard-app
title: "Excalidraw — whiteboard app"
url: https://excalidraw.com
found_via: "Open-source design-community canon (hand-drawn whiteboard); widely embedded (Notion, Obsidian plugins)"
kind: app
tags: [domain:productivity,platform:web,surface:empty-state,surface:editor,quality:clarity,quality:keyboard,quality:delight,style:hand-drawn,technique:annotated-empty-state,technique:shortcut-hints]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 5, originality: 5, transferability: 5, evidence: 3, ethics: pass }
total: 23
---

## What to steal (principle, 1–3 bullets)
- Annotate the empty canvas with the product's own visual language: hand-drawn arrows and handwritten labels point at the real controls, then disappear once you start.

## Why it works
- Empty state draws curved arrows in the app's sketchy style to the menu ('Export, preferences, languages, …'), the toolbar ('Pick a tool & Start drawing!') and help ('Shortcuts & help') — onboarding with zero modals.
- Every toolbar tool shows its single-letter shortcut in tiny subscript (R, D, O, A, L, P, T, N, E) and a hint line explains canvas panning ('hold Scroll wheel or Space while dragging') — keyboard learnability built into the chrome.
- Centered welcome block states a data-loss risk honestly: 'Your drawings are saved in your browser's storage. Browser storage can be cleared unexpectedly. Save your work to a file regularly…', followed by Open (Ctrl+O), Help (?), Live collaboration, Sign up.
- Single violet accent rgb(105,101,219) for the selected tool and Share; upsell ('Try Excalidraw+, 14-day free trial') sits as a quiet tinted pill, not a modal. Reduced-motion CSS present.

## Where it applies / where it doesn't
- Applies: Any canvas/editor/blank-slate tool; first-run states where users must find 3-4 controls.
- Doesn't: Dense enterprise UIs where hand-drawn annotation clashes with the brand; annotations must be removed once the user acts.

## Style DNA (optional, compact)
type: handwritten-style font for hints (observed), Assistant 24/14 for UI · color: white canvas, lavender tool surfaces rgb(236,236,244)/rgb(224,223,255), violet rgb(105,101,219) active/Share · shape: 8px toolbar and buttons · motion: 0.25s ease-in-out

## Notes / open questions
