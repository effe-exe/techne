---
title: "Web Content Accessibility Guidelines (WCAG) 2.2"
author: "W3C Accessibility Guidelines Working Group (AG WG)"
year: 2023
domains: [accessibility, interaction, compliance, forms, visual]
evidence: "strong"
---

# Web Content Accessibility Guidelines (WCAG) 2.2 — W3C AG WG

Use this when: you need the exact wording, level and numeric threshold of a success criterion (contrast, target size, timeouts, reflow, flashing, authentication); you are writing a design spec, acceptance criteria or a procurement/legal requirement and must say "conforms to AA" precisely; a stakeholder argues an exception ("logos don't count", "the drag is essential", "the CAPTCHA is fine").

Source: https://www.w3.org/TR/WCAG22/ (W3C Recommendation, current version as fetched Oct 2026; WCAG 2.2 became a Recommendation in 2023). Read in full: Abstract, Introduction (layers of guidance, comparison with 2.1, numbering, later versions), all four principles with every guideline and success criterion (1.1.1–4.1.3, levels A/AA/AAA, notes and exceptions), section 5 Conformance (requirements, claims, partial conformance). Glossary: read the definitions that carry thresholds (contrast ratio, relative luminance, large scale text, general/red flash thresholds, cognitive function test, dragging movement, single pointer, status message, target). Skipped: privacy/security considerations detail, input-purposes list, acknowledgments, references. The separate "Understanding WCAG 2.2" and "Techniques" documents were not read.

## The big idea (3 sentences)
WCAG 2.2 turns accessibility into testable, technology-neutral statements grouped under four principles: content must be Perceivable, Operable, Understandable and Robust (POUR), with 13 guidelines and success criteria at levels A, AA and AAA. Conformance is binary per full page and per complete process: a page conforms at AA only if every A and AA criterion is met, including on each responsive variation, and a checkout conforms only if every step does. Version 2.2 adds nine criteria aimed mostly at focus visibility, pointer/motor access and cognitive load (consistent help, redundant entry, accessible authentication), and removes 4.1.1 Parsing as obsolete.

## Core concepts
- **Layers** — principles and guidelines are not testable; success criteria are; techniques (sufficient/advisory) and failures live in separate informative documents.
- **Levels** — A is the minimum, AA is the usual legal/policy target, AAA is explicitly not recommended as a site-wide policy because some content cannot meet it.
- **Full pages and complete processes** — you cannot exclude part of a page; every responsive variation must conform; one failing step fails the whole process.
- **Accessibility supported** — only uses of technology that actually work with assistive tech count; anything else needs an accessible equivalent.
- **Non-interference** — four criteria apply to everything on the page even if not "relied upon": 1.4.2 Audio Control, 2.1.2 No Keyboard Trap, 2.2.2 Pause/Stop/Hide, 2.3.1 Three Flashes.
- **Contrast ratio** — (L1 + 0.05) / (L2 + 0.05) using sRGB relative luminance, range 1:1 to 21:1. "Large scale" text means at least 18 pt, or 14 pt bold (about 24 px / 18.66 px).
- **Cognitive function test** — remembering, manipulating or transcribing information (passwords, typed characters, spelling, puzzles, calculations). Name, email and phone are not counted as tests.
- **Status message** — a change in content that is not a change of context and tells the user about success, results, waiting, progress or errors.
- **Target** — the region that accepts a pointer action; overlapping areas are excluded from the measurement unless they do the same thing.
- **New in 2.2** — 2.4.11 Focus Not Obscured (Min, AA), 2.4.12 (Enhanced, AAA), 2.4.13 Focus Appearance (AAA), 2.5.7 Dragging Movements (AA), 2.5.8 Target Size Minimum (AA), 3.2.6 Consistent Help (A), 3.3.7 Redundant Entry (A), 3.3.8 Accessible Authentication Minimum (AA), 3.3.9 Enhanced (AAA).

Key numbers in one place:

| Criterion | Level | Threshold |
|---|---|---|
| 1.4.3 Contrast (Minimum) | AA | text 4.5:1; large text 3:1; logos, inactive controls, decoration exempt |
| 1.4.6 Contrast (Enhanced) | AAA | 7:1; large text 4.5:1 |
| 1.4.11 Non-text Contrast | AA | 3:1 for component boundaries, states and meaningful graphics vs adjacent colors |
| 1.4.4 Resize Text | AA | 200% without loss of content or function |
| 1.4.10 Reflow | AA | no 2-D scrolling at 320 CSS px width (= 1280 px at 400%) or 256 px height for horizontal content |
| 1.4.12 Text Spacing | AA | survives line-height 1.5, paragraph spacing 2×, letter 0.12em, word 0.16em |
| 1.4.8 Visual Presentation | AAA | ≤ 80 characters per line (40 CJK), no justified text, line spacing 1.5 |
| 1.4.2 Audio Control | A | any autoplay audio > 3 s can be paused or volume-controlled |
| 1.4.7 Background Audio | AAA | background ≥ 20 dB below speech |
| 2.2.1 Timing Adjustable | A | turn off, or adjust to ≥ 10× default, or warn + ≥ 20 s to extend with a simple action, ≥ 10 extensions; 20-hour exception |
| 2.2.2 Pause, Stop, Hide | A | auto-moving content lasting > 5 s alongside other content |
| 2.2.6 Timeouts | AAA | warn about inactivity data loss unless data kept ≥ 20 hours |
| 2.3.1 Three Flashes | A | ≤ 3 flashes in any 1 s, or below general/red flash thresholds |
| 2.4.13 Focus Appearance | AAA | indicator area ≥ a 2 CSS px perimeter, 3:1 between focused and unfocused pixels |
| 2.5.5 Target Size (Enhanced) | AAA | 44 × 44 CSS px |
| 2.5.8 Target Size (Minimum) | AA | 24 × 24 CSS px, or spacing so 24 px circles don't intersect; inline, equivalent, UA and essential exceptions |
| 3.1.5 Reading Level | AAA | supplement anything above lower-secondary reading level |

## Actionable heuristics for product design
- When you write a definition of done for any UI, cite "WCAG 2.2 AA" and list the criteria the component touches, because conformance is per page and per process; one inaccessible step (e.g. the payment iframe) fails the whole checkout (5.2.3).
- When you check a design at multiple breakpoints, test each variation, because a responsive page conforms only if every automatically presented variation conforms (5.2.2 note 3).
- When setting text colors, hit 4.5:1 for body and 3:1 only for text that is ≥ 24 px regular or ≥ 18.66 px bold; don't use the large-text relief for 16–20 px labels, because the exemption is defined by delivered size, not by importance.
- When drawing input borders, toggle tracks, checkbox outlines, focus rings or chart lines, give them 3:1 against their neighbours (1.4.11), because a field whose border is 1.5:1 on white is invisible to many low-vision users even if its label passes.
- When styling disabled controls, you may go below contrast thresholds (inactive components are exempt), but then also explain why it is disabled elsewhere, because the exemption covers legibility law, not comprehension.
- When designing any layout, verify it at 320 CSS px wide with no horizontal scroll for text content (1.4.10), and keep only genuinely 2-D content (data tables, maps, editors, toolbars that must stay visible) scrollable in both axes.
- When building text containers, never fix their height; test by overriding to the 1.4.12 values (line-height 1.5, paragraph 2×, letter 0.12em, word 0.16em) so user stylesheets don't clip content.
- When a tooltip, popover or submenu opens on hover or focus, make it dismissible with Esc without moving the pointer, hoverable (the pointer can travel onto it) and persistent until the user leaves (1.4.13).
- When you add single-character keyboard shortcuts, provide a way to turn them off or remap them, or make them active only on focus (2.1.4), because speech-input users trigger them by accident.
- When a session or form has a time limit, prefer no limit; otherwise warn before expiry and offer at least 20 s and a single action to extend, at least 10 times (2.2.1). At AAA, keep unsaved data for 20 hours or warn up front (2.2.6).
- When anything moves, blinks, scrolls or auto-updates for more than 5 s next to other content (carousels, tickers, live counters), give a pause/stop/hide control (2.2.2); this applies even to decorative content because of non-interference.
- When you animate, keep flashes at ≤ 3 per second (2.3.1), and at AAA let users disable motion triggered by interaction (2.3.3); in practice, honor reduced-motion settings.
- When you use sticky headers, cookie banners, chat bubbles or bottom sheets, make sure a focused element is never entirely hidden behind them (2.4.11 AA); aim for not even partly hidden (2.4.12 AAA), e.g. with scroll-padding.
- When you restyle focus, aim for 2.4.13 (AAA): an indicator at least as large as a 2 px perimeter of the control with 3:1 change between focused and unfocused states; a 1 px faint tint ring fails.
- When an interaction needs dragging (sortable lists, sliders, kanban, map pan, crop handles), provide a single-pointer alternative without dragging such as buttons, a menu or tap-to-place (2.5.7).
- When an interaction uses multipoint or path gestures (pinch, two-finger swipe, draw a shape), provide a single-tap alternative (2.5.1), and trigger actions on the up-event so users can slide off to cancel (2.5.2).
- When sizing pointer targets, 24 × 24 CSS px is the AA floor and 44 × 44 the AAA target; small icon buttons can pass via spacing, but adjacent 16 px icons with 4 px gaps fail.
- When a visible label exists, make the accessible name contain the same text, ideally at the start (2.5.3), so voice users can say what they see.
- When a feature responds to shake or tilt, offer an on-screen control and a way to disable motion response (2.5.4).
- When navigation, help links or identical functions repeat across pages, keep them in the same relative order and with the same names (3.2.3, 3.2.4); put contact/help/chat in the same place on every page (3.2.6, Level A).
- When a control changes value (select, radio, toggle), don't navigate, submit or open new windows automatically unless you said so beforehand (3.2.2); focus alone must never change context (3.2.1).
- When validation finds an error, name the field and describe the error in text (3.3.1), suggest a fix when known (3.3.3), and for legal, financial or data-deleting submissions make them reversible, checked, or reviewable before final submit (3.3.4).
- When a multi-step flow asks for information the user already gave (shipping → billing, account → profile), auto-fill it or let them select it (3.3.7), except for security re-entry or expired data.
- When designing login, sign-up or password reset, never require memorizing or transcribing without an alternative (3.3.8): allow paste and password managers, offer passkeys, magic links or OAuth; object-recognition CAPTCHAs pass AA but not AAA (3.3.9).
- When you build custom widgets, expose name, role, state and value programmatically (4.1.2), and announce status messages ("Saved", "3 results") without moving focus (4.1.3).
- When writing a policy for a whole organisation, require AA and adopt chosen AAA criteria (contrast 7:1 for long reading, 44 px targets, focus appearance) per surface, because the spec itself advises against site-wide AAA mandates.
- When third-party or user content can't be controlled, either monitor and repair within two business days to keep a conformance claim, or publish a statement of partial conformance naming the parts.

## Evidence & caveats
- WCAG is a consensus standard, not an experimental finding. Its authority is procedural and legal (W3C Recommendation track; legal adoption is documented in interaction/accessibility.md, not in this spec), which is why the evidence label here is "strong" as a requirement, not as proof that each threshold is optimal.
- The normative text gives no rationale for its numbers; the reasoning lives in the separate "Understanding" documents, which were not read for these notes. Several values (24 px targets, 20 s, 20 hours, 10×, 3 flashes) read as negotiated floors. Treat them as minimums, not as optimal design values.
- The spec's contrast formula is plain relative luminance; interaction/accessibility.md records its known weaknesses in dark mode and mid-tones. WCAG 2.2 does not mention APCA, so 2.x contrast remains the conformance test.
- The introduction openly says criteria for cognitive, language and learning disabilities were hard to agree and are underrepresented; use the COGA guidance (books/coga-usable.md) to fill that gap.
- Passing WCAG does not mean usable: criteria test presence (a label exists, focus is visible), not quality (the label is clear). Real-user testing is still needed.
- Conformance is defined only for web pages (5.3). For native apps, map the intent of each criterion onto platform guidance rather than copying CSS-pixel values blindly.

## Disagreements with other references
- `references/interaction/accessibility.md` §8 says "warn ≥ 20 s before expiry"; the actual 2.2.1 "extend" option is a warning before expiry plus at least 20 s to extend with a simple action, repeatable at least 10 times, or the limit can be turned off or adjusted to ≥ 10×. Trust WCAG's wording.
- `references/interaction/accessibility.md` §4 describes a focus indicator as 2 px at 3:1 "against the adjacent colors"; 2.4.13 measures 3:1 between the focused and unfocused states of the same pixels and is AAA. At AA, focus must merely be visible (2.4.7) and state indicators need 3:1 under 1.4.11. Both are good practice; cite the right criterion.
- `references/interaction/microinteractions-and-motion.md` cites "WCAG 2.2.1 requires no auto-dismiss of anything critical" for toasts. 2.2.1 governs time limits set by content; auto-dismissing messages are better argued from 2.2.1 plus the APG Alert pattern (books/aria-apg.md) and 4.1.3. The rule is right, the citation is loose.
- SKILL.md's "44pt / 48dp / 24px (44 for touch) are floors" matches WCAG: 24 px is the AA floor, 44 px is AAA (2.5.5). WCAG itself doesn't distinguish touch from mouse.
- `references/visual/typography.md` measure guidance (45–75ch) is stricter than 1.4.8's AAA ceiling of 80 characters; they are compatible.

## Best quotes (< 25 words each, max 5)
- "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element." (1.4.1)
- "It is not recommended that Level AAA conformance be required as a general policy for entire sites" (5.2.1 note 2)
- "Conformance (and conformance level) is for full web page(s) only, and cannot be achieved if part of a web page is excluded." (5.2.2)

## Related
- references/interaction/accessibility.md (the operational checklist built on this spec)
- references/visual/color.md, references/visual/typography.md, references/interaction/microinteractions-and-motion.md
- references/books/aria-apg.md (how to build widgets that satisfy 2.1.1, 2.4.3, 4.1.2), references/books/coga-usable.md (cognitive gaps WCAG leaves), references/books/inclusive-components.md, references/books/microsoft-inclusive-design.md
- Not yet in the library: Understanding WCAG 2.2, WCAG2ICT, EN 301 549.
