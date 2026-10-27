---
title: "Target Size Study for One-Handed Thumb Use on Small Touchscreen Devices"
author: "Pekka Parhi, Amy K. Karlson, Benjamin B. Bederson"
year: 2006
domains: [interaction, motor-control, mobile, accessibility, data-driven]
evidence: "moderate"
---

# Target Size Study for One-Handed Thumb Use on Small Touchscreen Devices — Parhi, Karlson & Bederson

Use this when: choosing minimum touch-target sizes for phone UI used one-handed; deciding whether a platform minimum (44 pt, 48 dp, 24 CSS px) is "big enough" for a primary or repeated action; sizing keypads, PIN pads, pickers and other rapid-tap widgets; deciding how screen position (corners, edges, thumb side) should change target size.

Source: https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/parhi-mobileHCI06.pdf (Microsoft Research publication archive; co-author Karlson's employer and the study's funder). Also linked by the University of Maryland HCIL as tech report HCIL-2006-11 (http://www.cs.umd.edu/hcil/trs/2006-11/2006-11.pdf). Legal basis: authors' institutional self-archiving under the ACM personal/classroom-use notice. Published in Proc. MobileHCI 2006, pp. 203–210, DOI 10.1145/1152215.1152260. Read in full (8 pages, including references).

## The big idea (3 sentences)
Recommendations for touch-target size existed for styluses and for index fingers on kiosks, but not for a thumb on a device held in the same hand, which constrains reach and occludes the target. In a two-phase lab study with 20 right-handed participants on a PDA, speed kept improving as targets grew, but error rates stopped improving at about 9.6 mm for single taps and 7.7 mm for key sequences. Combining errors, tap scatter and comfort ratings, the authors recommend at least 9.2 mm for single-target tasks and 9.6 mm for serial tasks such as numeric entry.

## Core concepts
- **Discrete vs serial tasks** — a discrete task is one tap on one target (a button, checkbox, menu item); a serial task is a rapid run of taps (PIN, number or text entry). Earlier kiosk work suggested people trade accuracy for speed when they expect many taps, so the two need separate sizes.
- **Design** — Phase 1: five square sizes (3.8, 5.8, 7.7, 9.6, 11.5 mm) in a 3×3 grid of screen regions, each target surrounded by distractor targets, 225 trials per person. Phase 2: a 4-digit code typed on a soft numeric keypad with keys of 5.8–13.4 mm and zero spacing, in four screen quadrants, 100 trials per person. Standing, right thumb only, lift-off selection (a tap counts where the thumb is released; dragging off cancels).
- **Error plateau** — in Phase 1 the two smallest sizes had far more errors than all others, 7.7 mm still had more errors than 11.5 mm, and 9.6 vs 11.5 mm did not differ. In Phase 2 only the 5.8 mm keypad was significantly worse than keys ≥ 9.6 mm; serial error rates were higher than discrete ones at every size.
- **Speed never plateaued** — every size step was significantly faster, including 9.6 → 11.5 mm. Bigger is always a bit faster; the question is where errors and comfort stop paying for the space.
- **Fitts's law, and where it breaks** — for single taps, time fell with index of difficulty as Fitts predicts. For the keypad, which scaled uniformly (so index of difficulty stayed constant), Fitts predicts equal speed, yet bigger keys were faster. The authors' hypothesis: when a key is smaller than the thumb, users slow down to adjust the thumb, so the effective target is smaller than its drawn size.
- **Tap scatter** — the box that would hold 95% of taps (2 standard deviations each way) for a 9.6 mm target was 9.1 × 8.9 mm at its widest region. Taps in the bottom row landed above target centre; taps in the right-hand column landed to the right of centre.
- **Screen position matters for comfort, not (statistically) for errors** — no significant location effect on errors in either phase, but comfort ratings differed: the centre was most comfortable and the left edge (for a right thumb) least (5.7 vs 3.7 on a 7-point scale). People said they would accept about 6.0 mm in the centre but wanted about 7.5–7.7 mm in three corners.
- **Self-reported minimums run small** — participants' "smallest comfortable" sizes (6–7.7 mm for single taps, 8.3–8.9 mm for keys) sat below the sizes where their measured errors levelled off. Stated comfort underestimated what performance needed.

## Actionable heuristics for product design
- When a primary or frequently used action must work one-handed on a phone, give it a hit area of at least ~9–10 mm (about 59–62 pt on a typical iPhone, ~58–60 dp on Android; 1 pt ≈ 0.156 mm, 1 dp ≈ 0.159 mm), because that is where thumb error rates stopped falling in this study; 44 pt / 48 dp (~7–7.6 mm by the unit definitions; Material's own docs round 48 dp to ~9 mm) are floors, not goals.
- When designing a keypad, PIN pad, OTP field, calculator or emoji grid, size keys at ≥ 9.6 mm and test error rate, not just speed, because serial tapping produced more errors than single taps at every size and the 5.8 mm keypad was clearly worse.
- When screen space forces small targets, keep them out of the corners and the thumb's far edge and cluster them toward the centre-bottom, because comfort was lowest at the edges and people wanted 25–30% larger targets there.
- When a target sits on the edge on the thumb's side (right edge for right-handers), extend its hit area to the bezel, because taps there drifted outward; mirror this for left-handed use or make both edges generous.
- When a target sits in the bottom row, extend the hit area upward rather than downward, because taps on bottom-row targets landed above their centre.
- When a visual design calls for small icons, keep the icon small but pad the invisible hit area to ~9 mm, and keep the 2-SD scatter box (~9 × 9 mm) clear of other targets, because the error you pay for is in the hit area, not the glyph.
- When you ask users what size feels fine, don't treat that as the spec, because participants' stated minimums were smaller than the sizes where their own errors bottomed out. Measure error and correction rate in a usability or log study.
- When a gesture or action is destructive and sits next to a frequent target, don't rely on precision to separate them: add space or confirmation, because neighbouring distractors were part of what made small targets fail here.
- When you need to recommend a size to stakeholders, report the trade-off honestly: bigger targets are always somewhat faster, but beyond ~9.6 mm errors stop improving, so further size buys speed only.
- When building for people with motor impairments, older users, use while walking, or gloves, go larger than 9.6 mm, because this sample was young, able-bodied and standing still, so these figures are a best case.

| Context | This paper | Platform / WCAG floor | Suggested default |
|---|---|---|---|
| Single tap, one thumb | ≥ 9.2 mm | 44 pt ≈ 7 mm; 48 dp ≈ 7.6–9 mm | ~9–10 mm hit area for primary actions |
| Serial taps (keypad) | ≥ 9.6 mm | none specific | ≥ 9.6 mm keys, test error rate |
| Edge / corner targets | comfort drops; hits drift outward | none specific | larger, hit area to the bezel |
| Dense desktop UI (mouse) | not studied | WCAG 2.5.8: 24 CSS px | 24–32 px with spacing |

Checklist for a one-handed mobile screen (this note's synthesis, not the paper's):
1. List each tappable element and classify it: primary, secondary, serial (keypad/grid), destructive.
2. Primary and serial: hit area ≥ ~9.6 mm (≈ 60 pt/dp). Secondary: platform floor (44 pt / 48 dp).
3. Edge on the thumb side: hit area runs to the bezel. Bottom row: pad upward.
4. Corners and the far edge: no small targets; move them or enlarge them.
5. Neighbours: no destructive target inside the ~9 × 9 mm scatter zone of a frequent one.
6. Verify with behaviour: mis-tap rate, undo/backspace rate, time per tap, by screen region and device size.
7. Re-test on the largest supported phone and with left-handed and walking participants.

To measure in production, log tap coordinates relative to target bounds (or near-miss taps on non-interactive areas next to a control) and corrections such as immediate back or undo; a rise after a size change is the signal this study measured in the lab.

## Evidence & caveats
- Small within-subjects lab study: 20 participants, 17 male, all right-handed, ages 19–42 (mean 25.7), recruited in a computer science department, most without touchscreen-handheld experience. Results are averages over people with thumb lengths of ~99–125 mm.
- Hardware was a 2005-era HP iPAQ with a resistive 240×320 screen (0.24 mm dot pitch, 8.9 cm diagonal) and lift-off selection. Modern capacitive phones register on touch-down with OS-level touch correction, and are much larger and held differently, so treat the millimetre values as approximate.
- Tasks were done standing and stationary. The authors flag walking and other grips as untested; walking is known to degrade accuracy.
- "No significant difference" between the largest sizes is not proof of equality; with n=20 a small error difference could be missed. Location effects on errors were not significant, but comfort and scatter suggested real differences.
- An implementation glitch randomised the first five participants' trials differently; the authors report and correct for it, which is a point in their favour.
- Exact error percentages appear only in figures; this note does not quote numeric error rates.
- Well cited and given a MobileHCI 10-year "historical paper" award; later studies (e.g. Hoober's field observations, cited in `references/psychology/cognition-motor-control-and-timing.md`) point the same way, with larger targets near edges. Rate the ~9–10 mm recommendation [moderate].

## Disagreements with other references
- `references/psychology/cognition-motor-control-and-timing.md` rates this paper [moderate-strong]. Having read it, [moderate] fits better: n=20, one demographic, one obsolete device, stationary. The direction (platform minimums are below thumb comfort) is solid; the exact millimetres are not.
- `references/interaction/platform-conventions.md` summarises errors as rising "sharply below ~7 mm". The paper's data are more graded: 3.8 and 5.8 mm were much worse, and 7.7 mm was still worse than 11.5 mm for single taps. Read it as "below ~9.6 mm, expect more errors; below ~6 mm, many more".
- The same file's agent rule defaults to 44 pt / 48 dp. That is right as a compliance floor; for one-handed primary actions and keypads, this paper argues for ~9–10 mm. Use the floor for secondary, dense UI and the larger size where errors are costly.
- Fitts's law (`references/visual/layout-spacing-elevation.md`, [strong]) predicts single-tap timing well here, but not keypad timing when targets are smaller than the thumb. For touch, treat effective width as smaller than the drawn width when the target is smaller than the finger.
- Hoober's thumb-zone work says the top corners are hardest; this paper found the left edge and bottom-right corner least comfortable on a small PDA. Device size drives which zone is worst; test on the actual device class.

## Best quotes (< 25 words each, max 5)
- "while speed generally improved as targets grew, there were no significant differences in error rate between target sizes ≥ 9.6 mm in discrete tasks"
- "we conclude that no key size smaller than 9.6 mm would be recommended for serial tapping tasks"
- "targets on the right side of the screen for right-handed users (and left for left-handed people) should extend all the way to the edge"

## Related
- `references/interaction/platform-conventions.md` (target-size table, Fitts's law agent rules)
- `references/interaction/accessibility.md` (WCAG 2.5.8 / 2.5.5 checks)
- `references/psychology/cognition-motor-control-and-timing.md` (touch research, thumb zone, rules of thumb)
- `references/visual/layout-spacing-elevation.md` (Fitts's law, thumb zones, spacing)
- `references/books/wwdc-fluid-interfaces.md` (touch interaction feel)
- Fitts 1954 (not distilled; paywalled at APA); MacKenzie 1992, "Fitts' law as a research and design tool in HCI"; Steven Hoober, *Designing Mobile Interfaces* and UXmatters touch columns; Josh Clark, *Designing for Touch*
