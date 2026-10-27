# Accessibility: WCAG 2.2 AA, Assistive Tech, Cognitive Inclusion

> **Use this when:** designing, reviewing or coding any UI. Accessibility is a default quality bar, not a separate phase.
> **Also when:** someone asks for contrast checks, focus order, screen reader labels, Dynamic Type, reduced motion, or a compliance or audit checklist.
> **Skip when:** never skip it entirely. For a tiny visual tweak, run only the §2 quick check.

---

## 0. Point of view

1. **Accessibility is a usability and growth topic, not charity or compliance theatre.** The WHO estimates ~1.3 billion people (about 16% of the population) live with a significant disability (WHO, *Global Report on Health Equity for Persons with Disabilities*, 2022) [strong]. Situational and temporary impairments (bright sun, one hand busy, a broken arm, being older) make the real audience far larger, which is Microsoft's "persona spectrum" (*Inclusive Design Toolkit*, 2016) [moderate as framing]. Its example: ~26,000 US upper-limb losses a year vs >20 million people with a temporary or situational one-arm limitation (aggregated sources, calculation not shown — illustrative). The toolkit itself warns that impairment simulation (blindfolds, earplugs) is misleading as an empathy method; spend time with people who live it. → references/books/microsoft-inclusive-design.md
2. **The baseline is non-negotiable: WCAG 2.2 Level AA.** It is the legal reference for the EU (European Accessibility Act, enforced from **28 June 2025**, via EN 301 549), US public sector (ADA Title II rule of 2024, which cites WCAG 2.1 AA), and much case law [strong].
3. **Most of the web fails.** The WebAIM Million found ~95% of the top 1M home pages had detectable WCAG failures, and low-contrast text was the most common at ~80% of pages (WebAIM Million, 2024 and 2025 reports) [strong: large automated sample, though automated tools catch only a fraction of issues].
4. **Automated tools catch roughly 30–40% of issues** (estimates vary: UK GDS audit 2017 found ~30%; Deque claims ~57% by issue volume) [moderate/contested]. Manual keyboard and screen reader passes are required.
5. **Native elements first, ARIA last.** The "first rule of ARIA" says to use a native HTML element or a platform control when one exists (W3C, *Using ARIA*). The WebAIM Million also found that pages using ARIA had *more* detectable errors on average [moderate: correlation].
6. In data-driven teams, **add accessibility guardrail metrics** to experiments. A variant that wins on conversion but regresses contrast, focus or screen reader flow is not a win. It is an exclusion that your sample under-represents.

---

## 1. WCAG 2.2 AA: the checklist an agent should run

WCAG 2.2 became a W3C Recommendation on 5 Oct 2023. It adds 9 criteria to 2.1 and removes 4.1.1 Parsing. The structure is POUR: Perceivable, Operable, Understandable, Robust. A = minimum, AA = target. **New in 2.2** is marked ★.

**Conformance scope:** per *full page*, including every responsive variation, and per *complete process* — one non-conforming checkout step (e.g. a payment iframe) fails the whole process. Non-interference: 1.4.2, 2.1.2, 2.2.2 and 2.3.1 apply to all content, even parts not relied upon. W3C advises against site-wide AAA mandates. → references/books/wcag-22.md

### Perceivable
- [ ] **1.1.1 Non-text content (A):** meaningful images have text alternatives, and decorative ones have `alt=""` or are hidden from AT. Icon-only buttons have an accessible name.
- [ ] **1.2.x Media (A/AA):** captions for prerecorded video (A) and live video (AA), audio description or a transcript.
- [ ] **1.3.1 Info & relationships (A):** structure is conveyed in code. That means real headings (h1–h6 in order), lists, tables with headers, labels programmatically tied to inputs, and grouped radios (fieldset/legend).
- [ ] **1.3.2 Meaningful sequence (A)** and **1.3.4 Orientation (AA):** don't lock portrait/landscape unless it is essential.
- [ ] **1.3.5 Identify input purpose (AA):** `autocomplete` attributes on user-data fields.
- [ ] **1.4.1 Use of color (A):** color is never the only cue (errors, links in text, chart series, status).
- [ ] **1.4.2 Audio control (A):** autoplay audio > 3 s can be paused or its volume controlled.
- [ ] **1.4.3 Contrast (AA):** text **4.5:1**, large text (≥ 24 px regular or ≥ 18.66 px / 14pt bold) **3:1**. Logos and disabled controls are exempt.
- [ ] **1.4.4 Resize text (AA):** works at 200% zoom without loss.
- [ ] **1.4.10 Reflow (AA):** no 2-D scrolling at **320 CSS px** width (= 1280 px at 400% zoom), or at 256 CSS px height for horizontally scrolling content, except data tables, maps and editors.
- [ ] **1.4.11 Non-text contrast (AA):** UI component boundaries, states, focus indicators and meaningful graphics have **3:1** against adjacent colors.
- [ ] **1.4.12 Text spacing (AA):** survives line-height 1.5, paragraph spacing 2×, letter-spacing 0.12em, word-spacing 0.16em without clipping. Avoid fixed-height text containers.
- [ ] **1.4.13 Content on hover or focus (AA):** tooltips are dismissible (Esc), hoverable (the pointer can move onto them), and persistent.

### Operable
- [ ] **2.1.1 Keyboard (A)** and **2.1.2 No keyboard trap (A):** everything works with Tab, Shift+Tab, Enter, Space, arrows and Esc.
- [ ] **2.1.4 Character key shortcuts (A):** single-key shortcuts can be turned off or remapped.
- [ ] **2.2.1 Timing adjustable (A)** and **2.2.2 Pause, stop, hide (A):** carousels, auto-advancing content, and anything moving for more than 5 s.
- [ ] **2.3.1 Three flashes (A).**
- [ ] **2.4.1 Bypass blocks (A):** a skip link or landmarks. **2.4.2 Page titled (A).** **2.4.3 Focus order (A)** is logical. **2.4.4 Link purpose (A)**: no bare "click here". **2.4.6 Headings & labels (AA)** are descriptive. **2.4.7 Focus visible (AA).**
- [ ] ★ **2.4.11 Focus not obscured (minimum) (AA):** a focused element isn't entirely hidden by sticky headers, cookie banners or chat bubbles.
- [ ] **2.5.1 Pointer gestures (A):** multipoint or path gestures have a single-pointer alternative.
- [ ] **2.5.2 Pointer cancellation (A):** activate on up-event, and allow an abort by moving away.
- [ ] **2.5.3 Label in name (A):** the visible label text is contained in the accessible name, so voice-control users can say what they see.
- [ ] **2.5.4 Motion actuation (A):** shake or tilt features have UI alternatives and can be disabled.
- [ ] ★ **2.5.7 Dragging movements (AA):** every drag (reorder, slider, map pan, kanban) has a single-pointer alternative (buttons, a menu, tap-to-move).
- [ ] ★ **2.5.8 Target size (minimum) (AA):** 24×24 CSS px, or spacing such that 24 px circles centred on undersized targets don't intersect; exceptions: an equivalent control elsewhere, inline (in-sentence) targets, user-agent controls, essential presentation.

### Understandable
- [ ] **3.1.1 Language of page (A)** (`lang`) and **3.1.2 Language of parts (AA).**
- [ ] **3.2.1 On focus / 3.2.2 On input (A):** no unexpected context change (no auto-submit on select change without warning).
- [ ] **3.2.3 Consistent navigation / 3.2.4 Consistent identification (AA).**
- [ ] ★ **3.2.6 Consistent help (A):** help mechanisms (contact, chat, FAQ) appear in the same relative place across pages.
- [ ] **3.3.1 Error identification (A)**, **3.3.2 Labels or instructions (A)**, **3.3.3 Error suggestion (AA)**, **3.3.4 Error prevention for legal and financial data (AA):** make submissions reversible, checked or confirmed.
- [ ] ★ **3.3.7 Redundant entry (A):** don't make users re-type information from earlier in the process (auto-populate, or let them select it).
- [ ] ★ **3.3.8 Accessible authentication (minimum) (AA):** no cognitive function tests (memorising, transcribing, puzzles) unless an alternative exists. **Allow paste and password managers.** Passkeys, magic links and OAuth are compliant; a password field is met by "a mechanism to assist" (password managers, paste). Object-recognition and personal-content (e.g. "pick your photo") tests are allowed at AA; AAA 3.3.9 drops both exceptions.

### Robust
- [ ] **4.1.2 Name, role, value (A):** custom components expose correct role, state (`aria-expanded`, `aria-checked`, `aria-selected`) and name.
- [ ] **4.1.3 Status messages (AA):** toasts, "3 results found" and form-saved messages are announced via `role="status"` / `aria-live="polite"` (use `role="alert"` for urgent ones) without moving focus.

AAA criteria worth adopting selectively: 2.4.13 Focus Appearance (★), 2.5.5 44px targets, 1.4.6 contrast 7:1 for long-form reading, 2.3.3 Animation from interactions.

---

## 2. 60-second quick check (any change, even a padding tweak)

1. Does contrast still pass (text 4.5:1, UI 3:1)? Check every state: default, hover, pressed, disabled-looking, focus, error, dark mode.
2. Is the hit area still ≥ 24 px (web), 44pt (iOS) or 48dp (Android)?
3. Is there still a visible focus indicator, and is the tab order unchanged?
4. Does the accessible name still match the visible label?
5. Does it survive 200% text size (Dynamic Type AX3+, Android 200% font scale) without truncation?
6. Is any new meaning carried by color, motion, or hover only?

---

## 3. Color and contrast details

- WCAG 2.x contrast uses relative luminance: (L1 + 0.05) / (L2 + 0.05). It is known to be inaccurate for dark mode and for some mid-tones (it overstates contrast of dark-on-dark and understates light text on saturated colors).
- **APCA** (Advanced Perceptual Contrast Algorithm, Andrew Somers) was proposed for WCAG 3. It is perceptually better, but **not a conformance requirement** and it's still under development [contested]. Practical rule: pass WCAG 2.x 4.5:1 for compliance, and use APCA Lc values (Lc ≥ 75 body, ≥ 60 large/medium text, ≥ 45 large headlines, ≥ 30 non-text) as a design sanity check, especially in dark mode.
- Dark mode: avoid pure #000 with pure #FFF body text at large sizes (halation for users with astigmatism) [weak/anecdotal]. Typical surfaces are #121212 (Material baseline) with ~87% white for high-emphasis text. Re-check every token pair in both themes.
- Support **Increase Contrast** (iOS `colorSchemeContrast`, CSS `prefers-contrast: more`) and **forced colors / Windows High Contrast** (`@media (forced-colors: active)`: use system colors and don't rely on background images or box-shadows for borders).
- About 8% of men and 0.5% of women of Northern European descent have red–green color vision deficiency (Birch, 2012; classic estimates) [strong]. Pair status colors with icons and text. For charts, use CVD-safe palettes and direct labels.

---

## 4. Focus and keyboard

- **Visible focus:** at least a 2 px outline with ≥ 3:1 contrast against the adjacent colors, offset 2 px, following the element's shape (this skill's default). What WCAG requires: at AA only 2.4.7 (visible) plus 1.4.11 (3:1 for state indicators vs adjacent colors); AAA 2.4.13 measures an indicator area ≥ a 2 CSS px perimeter with 3:1 between the *focused and unfocused states of the same pixels*. Use `:focus-visible` so mouse users don't see rings on click. Never write `outline: none` without a replacement.
- A good universal pattern is a two-tone ring that works on light and dark: `outline: 2px solid var(--focus); outline-offset: 2px; box-shadow: 0 0 0 4px var(--focus-halo);`.
- **Focus order = visual order = DOM order.** Avoid positive `tabindex`. Use `tabindex="-1"` only for programmatic focus targets (headings after route change, error summaries).
- **Route changes in SPAs (Next.js, React):** move focus to the new page's `<h1>` or a wrapper, and announce the title. Next.js App Router includes a route announcer, but test it [moderate].
- **Initial focus on page load:** don't set it, unless the page has one primary, immediately used, frequently visited function (search, login).
- **Dialogs:** move focus into the dialog on open — the first field by default; a static heading or first paragraph (`tabindex="-1"`) for long or structured content; the least destructive button for irreversible steps. Trap Tab inside, close on Esc, return focus to the trigger on close, make the background `inert`, and always show a visible close/cancel button.
- **Composite widgets (tabs, menus, listboxes, grids):** one tab stop and arrow keys inside (roving tabindex), following the **WAI-ARIA Authoring Practices Guide (APG)** patterns. Prefer headless libraries that implement APG: Radix UI, React Aria (Adobe), Headless UI, Ariakit. Tabs auto-activate on arrow focus only if panels display without latency (else Enter/Space). Keep discoverable disabled items (menu items, tabs, toolbar Copy/Paste) focusable with `aria-disabled`. Thresholds (conventions, not tested): `toolbar` role only for 3+ controls; Home/End for lists > 5 options; type-ahead for lists > 7 options or trees > 7 root nodes. → references/books/aria-apg.md
- Keyboard shortcuts: document them, avoid single-key shortcuts without modifiers (2.1.4), and never override screen reader keys.

---

## 5. Screen readers

| Platform | Reader | Notes |
|---|---|---|
| iOS / macOS | VoiceOver | Rotor navigation by headings, links and form controls. Swipe to move, double-tap to activate. |
| Android | TalkBack | Similar gestures. Test with "explore by touch". |
| Windows | NVDA (free), JAWS, Narrator | NVDA and JAWS are each roughly 40% as primary desktop readers (WebAIM Screen Reader User Survey #10, 2024) [moderate: self-selected survey]. |

Survey patterns (WebAIM Screen Reader Survey #10, 2024) [moderate]: most respondents navigate primarily by **headings**, and mobile users overwhelmingly use iOS VoiceOver (~70%).

**Designer deliverables for screen readers (annotate in Figma):**
- Accessible names for icon buttons ("Close", "Add to cart, Blue Sneakers"), images (alt text or decorative), and links out of context.
- Heading levels and landmark regions (banner, nav, main, complementary, contentinfo): about seven or fewer, all content inside one, repeated landmarks uniquely labelled ("Site", "Product" — not "Site Navigation"; the role is announced).
- **Naming rules (APG):** purpose not form ("Close", not "X"); distinguishing word first ("Delete John Doe"); 1–3 words; never include the role word ("button"); unique per role. Prefer visible text or a native label over `aria-label` — machine-translation services skipped `aria-label` (Pickering, *Inclusive Components*), so for localized products use visible text, visually hidden text or `aria-labelledby`, and translate any `aria-label`.
- Reading or focus order for non-linear layouts (cards, dashboards).
- State announcements: what is announced when something loads, errors or succeeds.
- Grouping: should a card be one element ("Paris, 3 nights, €420") or several? On iOS use `.accessibilityElement(children: .combine)`. On the web, make one link per card and keep secondary actions separate.
- Tools: Figma plugins (e.g. Stark, A11y Annotation Kit by Indeed/others, Include by eBay) [moderate: verify the current plugin landscape].

**Code reminders**
```html
<button aria-label="Close dialog"><svg aria-hidden="true">…</svg></button>
<div role="status" aria-live="polite">3 results</div>
<label for="email">Email</label><input id="email" type="email" autocomplete="email" aria-describedby="email-err">
<p id="email-err">Enter an email like name@example.com</p>
```
```swift
Image(systemName: "heart.fill").accessibilityLabel("Saved")
Button(action: share) { Image(systemName: "square.and.arrow.up") }.accessibilityLabel("Share")
VStack { … }.accessibilityElement(children: .combine)
Text(title).accessibilityAddTraits(.isHeader)
```

---

## 6. Text scaling: Dynamic Type and font scale

- **iOS Dynamic Type:** 7 standard sizes (xSmall–xxxLarge, default "Large" = body 17pt) plus 5 accessibility sizes (AX1–AX5, body ~28 → ~53pt) [strong]. Use text styles or `UIFontMetrics` / `@ScaledMetric` for custom fonts and for spacing that should scale.
- **Android:** text in **sp**. Font scale goes up to 200% (Android 14+) with non-linear scaling, so large text grows less than small text [strong].
- **Web:** `rem` for type, root `font-size: 100%`. Never set `maximum-scale=1` / `user-scalable=no`.
- **Layout rules at large text sizes:**
  - Horizontal rows become vertical stacks at accessibility sizes (SwiftUI `ViewThatFits`, or `dynamicTypeSize.isAccessibilitySize` → switch HStack to VStack).
  - Text wraps rather than truncating. Allow multi-line labels in buttons and lists, and never fix heights.
  - Icons can scale a little (`@ScaledMetric`) but not as much as text.
  - Tab bar labels: iOS shows a large-content viewer on long press for bar items (`.accessibilityShowsLargeContentViewer`).
- Test at minimum: the default size, the largest standard size, AX3, and AX5 on key flows.

---

## 7. Motion, flashing, vestibular

See microinteractions-and-motion.md §11. In short: honour reduce-motion everywhere and crossfade instead of moving, provide pause controls for auto-play, keep flashes ≤ 3 per second, and avoid parallax and scroll-jacking.

---

## 8. Cognitive and learning accessibility

Sources: W3C COGA Task Force, *Making Content Usable for People with Cognitive and Learning Disabilities* (W3C Working Group Note, 2021) [strong as consensus guidance]. Plain language: ISO 24495-1:2023 [strong as a standard].

Design objectives (paraphrased from COGA):
1. **Help users understand what things are and how to use them:** familiar patterns, clear and consistent labels, icons paired with text.
2. **Help users find what they need:** clear headings, one primary action per screen, visible search.
3. **Use clear and understandable content:** plain language, short sentences, literal words (no idioms), numbers as digits. Aim for roughly a lower-secondary reading level for consumer flows [moderate].
4. **Help users avoid mistakes and correct them:** forgiving input formats (accept "+39 333…" and "333…"), undo, clear error recovery, confirmation for consequential actions.
5. **Help users focus:** minimise distractions, no auto-playing media, and don't interrupt with pop-ups mid-task.
6. **Ensure processes don't rely on memory:** show information instead of requiring recall, offer passkeys or magic links instead of complex passwords, and keep progress visible in multi-step flows.
7. **Provide help and support:** consistent help location (3.2.6), human contact options.
8. **Support adaptation and personalisation:** respect user settings, and allow simplification.
9. **Test with real users, including people with cognitive disabilities.**

**Numeric rules of thumb (COGA) [moderate — consensus guidance, untested thresholds]:** ≤ 5 main choices per screen; the ~1,500 most common words; split paragraphs > 50 words; plain summary for content > 300 words (headings suffice below); media chapters ≤ 6 min; a simplified mode with 3–6 functions; search unless every page is within two clicks of home.
**Patterns:** state all fees and typical values at the start of a transaction; keep optional steps (upsells, add-ons) off the critical path; say up front how long a task takes and what to have ready; reachable human help on every page (phone menus: reserve "0"/"help" for a human, say the option before the digit); never lose data on Back; disable paste or extensions only on the specific field that requires it; keep labels visible — many cognitive AT tools ignore ARIA and `title`. → references/books/coga-usable.md

**Timeouts (2.2.1, A):** the user can turn the limit off, *or* adjust it to ≥ 10× the default, *or* is warned before expiry and given ≥ 20 s to extend with a simple action, at least 10 times (exceptions: real-time, essential, > 20 hours). AAA 2.2.6: keep unsaved data ≥ 20 h or warn up front. Preserve data across re-authentication.
**Dark patterns are cognitive accessibility failures.** Confirmshaming, trick questions (double negatives), fake urgency timers and roach-motel cancellation hit people with cognitive disabilities hardest. They are also increasingly illegal: EU Digital Services Act Art. 25 (2022), the US FTC "click-to-cancel" negative option rule (2024, vacated by a US court in 2025 [moderate: verify status]), and the EU AI Act and GDPR consent rules. The skill refuses to design them.

---

## 9. Testing protocol (minimum viable, per release)

1. **Automated:** axe DevTools / Lighthouse / WAVE on key pages, `eslint-plugin-jsx-a11y` in React code, Xcode Accessibility Inspector, Android Accessibility Scanner. Add axe to CI with Playwright (`@axe-core/playwright`).
2. **Keyboard-only pass:** complete the key flows using Tab, Enter, Space, arrows and Esc. Check visible focus and no traps.
3. **Screen reader pass:** VoiceOver iOS plus one desktop reader (NVDA + Firefox/Chrome, or VoiceOver + Safari).
4. **Zoom and text:** 200% and 400% browser zoom, then Dynamic Type AX5 and Android 200%.
5. **Settings:** reduce motion, increase contrast, dark mode, forced colors (Windows), RTL (for localisation).
6. **Real users:** include participants with disabilities in usability research at least for major redesigns (recruit via Fable, Access Works, or local organisations) [moderate].

---

## 10. Myths and anti-patterns

- **Myth:** "Accessibility overlays or widgets make a site compliant." Overlays don't fix the underlying code and have drawn lawsuits and criticism from the disability community (Overlay Fact Sheet, 2021, signed by 700+ practitioners). In 2025 the US FTC fined one overlay vendor (accessiBe) $1M over its claims [strong for criticism; verify the FTC detail].
- **Myth:** "Accessible design is ugly or boring." Constraints are on contrast, structure and semantics, not on aesthetics.
- **Myth:** "Blind users don't use our app." You can't see AT users in analytics by default, and the absence of data is not data.
- Anti-patterns: placeholder-only labels; `div` buttons; disabled buttons with low contrast and no explanation; icon-only navigation without labels; toast-only error messages that disappear; CAPTCHAs without alternatives; "Read more" links ×10 on a page; modals that don't trap or return focus; blocking paste in password and OTP fields; ARIA `menu` roles on site navigation (use lists of links); a `<select>` that navigates on change (fails 3.2.2); tooltips via the `title` attribute; `aria-describedby` on toggletips (announce via a live region); auto-advancing carousels even with a pause button — vestibular harm happens before the pause is found; use a user-driven horizontal scroller (Pickering, *Inclusive Components*). → references/books/inclusive-components.md

## 11. When to go beyond AA
- Long-form reading, health, finance or government flows: target 7:1 body text and 44px targets, and do plain-language editing.
- Older-audience products: larger defaults (body ≥ 18px), more spacing, fewer gestures.
- When you can't meet a criterion (rarely), document the exception, provide an alternative, and put the fix on the roadmap.
