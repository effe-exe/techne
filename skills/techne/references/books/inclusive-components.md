---
title: "Inclusive Components"
author: "Heydon Pickering"
year: 2019
domains: [accessibility, interaction, design-systems, build, ux-copy]
evidence: "moderate"
---

# Inclusive Components — Heydon Pickering

Use this when: you are designing or specifying a common component (toggle, todo/managed list, menu or menu button, tooltip, theme switch, tabs, collapsible sections, carousel, notifications/toasts, data table, card) and want the inclusive version plus the reasoning; you need to argue for a simpler pattern than the one requested (table of contents instead of tabs, labels instead of tooltips, a user-driven slider instead of an auto-carousel); you are reviewing focus management, live regions or labels in a prototype.

Source: https://inclusive-components.design/ (the free blog version of the book, 2017–2019). Read in full: About the project and all 11 component articles: Toggle Buttons, A Todo List, Menus & Menu Buttons, Tooltips & Toggletips, A Theme Switcher, Tabbed Interfaces, Collapsible Sections, A Content Slider, Notifications, Data Tables, Cards. Code blocks were read where they carried the design decision; framework boilerplate (React/Vue set-up) was skimmed. The paid book edition ("updated and improved") was not read.

## The big idea (3 sentences)
Most component failures come from picking the wrong element or the wrong pattern and then patching it with ARIA, so start from semantic HTML that already works, then enhance with CSS and JavaScript only where it improves the experience. Inclusion is about giving different people an equivalent experience, not the same one: what a sighted mouse user sees should have a matching, not identical, signal for keyboard, screen reader, voice-control, touch, zoom and high-contrast users. Often the most inclusive move is to do less: no auto-rotation, no tooltip when a label fits, no tabs when a table of contents works, no extra tab stops.

## Core concepts
- **Form follows function in code** — style states from the semantic attributes that create them (`[aria-pressed="true"]`, `[aria-expanded]`, `:checked`), so visual state and announced state can't drift apart.
- **Label, role, state** — every control should announce what it is called, what kind of thing it is and its current state; screen reader users hear "Notify by email, toggle button, pressed".
- **Never change label and state together** — either the label switches (Play → Pause) or the state switches (Mute pressed/not pressed), never both.
- **Belonging, not importance** — heading levels express nesting ("which section does this belong to"), not visual prominence.
- **Live regions** — `role="status"` / `aria-live="polite"` announce changes without moving focus; polite waits until the user settles, `alert` interrupts.
- **Don't put the tool in the hand if there's nothing to do** — focus only goes to things that can be operated; informational messages are announced, not focused.
- **Material honesty** — don't make one thing look like another (a TOC styled as tabs, nav links styled as an app menu), because the look promises behaviour.
- **Toggletip vs tooltip** — a tooltip labels or describes a control on hover and focus; a toggletip is a button whose only job is to reveal a message on click, announced through a live region.
- **Content tolerance** — components must survive long titles, short titles, odd image ratios and missing parts.
- **Multimodal by default** — browsers already support mouse, keyboard and touch for native elements; custom JS is where multimodality breaks.
- **Progressive enhancement** — a baseline that works without (or with broken) JavaScript, enhanced after feature detection; don't show controls for features the browser can't run.

## Actionable heuristics for product design
- When you need an on/off setting, use a checkbox if users won't think it submits data, otherwise a `<button>` with `aria-pressed` or `role="switch"`; never a link, because links navigate and buttons act.
- When a toggle shows "on/off" text, give it a unique name via `aria-labelledby` pointing at the setting's text, so voice users can say "Notify by SMS" and screen readers don't hear a list of identical "on off" buttons.
- When a play/pause icon flips, change the visible label (Play ↔ Pause) rather than keeping "Play" with a pressed state, because voice-control users say what they see.
- When showing on/off with green/red, add text, shape or an icon, because color alone fails 1.4.1.
- When styling focus, use a style that doesn't move layout (box-shadow or outline that follows rounded corners); never remove the outline without a replacement.
- When a section has its own job (a todo list, a settings group), give it a real heading at the level of its nesting, because screen reader users navigate by headings (JAWS/NVDA keys 1–6 and H).
- When a field's only label is a placeholder, add a visible label above or left of it; placeholders vanish on focus and with autocomplete. Exception: a single input with a descriptive button ("Add", "Search") can use a hidden label, but not with a generic "Submit".
- When placeholder text is shown, raise its contrast above browser defaults and differentiate it (e.g. italics), because faint grey placeholders fail 4.5:1.
- When the user adds or deletes an item without moving focus, announce it through a polite live region ("Adopt an owl added"), hide that message visually if the item visibly appears, and keep it in the DOM before you write to it.
- When a focused element is deleted, move focus on purpose: to the first remaining item, or to the list's heading (tabindex -1) if the list is now empty, then announce the result.
- When an icon-only delete or close button is unavoidable, name it with the item ("Delete Learn Haskell"), and add a confirmation only if the deletion is critical.
- When designing an empty state, write it for a new user: say what the thing is and where to start (Pickering's example points down to the input).
- When building site navigation, use lists of links, not ARIA menus; reveal sub-links on hover/focus only as a convenience and give each top-level page its own table of contents, because touch users can't hover and ARIA menus are for app commands.
- When a hamburger button reveals navigation, make it a `<button>` with `aria-expanded`, put it inside the `<nav>`, and make the first link next in tab order after it (don't rely on `aria-controls`, which only JAWS supported when written).
- When a real app menu is needed (choose a difficulty, a zoom level), implement full menu-button semantics and keys (Enter/Space/↓ opens, arrows move, Esc closes and returns focus); show the current choice with a check mark (`menuitemradio`) and focus it on open.
- When considering a `<select>` that navigates on change, don't, because an unexpected context change on input fails 3.2.2.
- When tempted by a tooltip, first try a permanent text label next to the icon; "there's no space" usually means space wasn't planned. Reserve tooltips for dense toolbars.
- When you do use a tooltip, decide whether it is the control's name (`aria-labelledby`) or extra description (`aria-describedby`), show it on focus as well as hover, and never rely on `title`.
- When a toggletip ("i" button) reveals help, open it on click, announce it via a live region, close it on Escape or click outside, and never put links or buttons inside it.
- When offering a dark mode, prefer an efficient theme over a second stylesheet, persist the choice, put the switch in banner or footer (not main) and in the same place on every page; use `currentColor` in SVG icons so they follow high-contrast themes.
- When proposing tabs, ask whether a table of contents with same-page links would do; if you build tabs, give them real tab semantics and keys (arrows between tabs, Tab into the panel), and don't style site navigation as tabs.
- When tabs don't fit a narrow screen, stack them in one column rather than converting them into an accordion, because the two patterns behave differently; for many or unknown numbers of sections, use an accordion everywhere.
- When building single-page app navigation, use links, move focus to the new view's heading or labelled region, and update `<title>` to "View name – App name".
- When making a collapsible section, put a `<button>` inside the heading (not `role="button"` on the heading), put `aria-expanded` on the button, show a plus/minus that reflects what pressing will do, and offer separate "Expand all" and "Collapse all" buttons rather than one toggle.
- When a collapsed section is linked by URL hash, open it on load, focus its button, and update the hash as users open sections so URLs stay shareable.
- When asked for a carousel, build a user-driven horizontal scroller that never moves on its own; pausing an auto-carousel is not enough for people with vestibular disorders, because the motion has already happened before they find the pause button.
- When a horizontal scroller needs keyboard access, make it focusable (tabindex 0) with a role, a name and a visible focus style, and spell out how to use it with input-specific hints ("scroll", "arrow keys", "swipe"); detect touch by a touchstart event, not by screen size.
- When slides contain links, remove off-screen slides' links from the tab order once JS works, so keyboard users don't tab through 20 hidden items; lazy-load slides after the first, since most users never see them.
- When something is only distinguished by style (error vs info message), add a text prefix ("Error:", "Info:") or hidden text, because shape, color and position alone are not accessible.
- When a stream of notifications exists (chat, presence, reactions), announce only what is relevant to the current task, silence live regions in hidden tabs, and let users turn notification types off in settings; don't announce every carousel slide or minor change.
- When notifications auto-disappear, make sure every one refers to something that is also discoverable in the interface (presence list, award history); otherwise keep it.
- When a settings page exists, use descriptive group names (not "General" or "Advanced") and headings inside legends, with standard form controls.
- When presenting tabular data, use `<th>` with scope, a `<caption>` (it can contain a heading), and let the table scroll horizontally in a focusable, labelled container that is focusable only when it overflows, with a "scroll to see more" hint; at one-column widths, switch to headings and definition lists.
- When adding sortable columns, put a button in each header ("sort by X"), expose `aria-sort`, and only include sorting when the data volume warrants it.
- When designing a card list, mark it up as a list with headings, make the heading the primary link (unique, descriptive text instead of many "Read more" links), make the whole card clickable with a stretched pseudo-element or a click proxy, and keep secondary links few with enlarged hit areas.
- When a card has an image that matters, put it after the heading in source order (and reposition visually), so heading navigation doesn't skip it; decorative images get `alt=""`.

## Evidence & caveats
- This is expert practice from a leading accessibility practitioner, with manual tests in specific screen readers (NVDA, JAWS, VoiceOver, ChromeVox) at the time of writing. There are no user studies with samples; treat it as strong craft guidance, not evidence of effect sizes.
- Assistive-tech behaviour notes are dated (2017–2019): e.g. `aria-controls` "only works in JAWS", ChromeVox not supporting `role="switch"`, IE/Edge SVG focus quirks, Safari lacking IntersectionObserver. Re-test before relying on them.
- The only quantitative claim, from shouldiuseacarousel.com (about 1% of visitors clicked a carousel feature, 89% of those on the first slide), is a single-site anecdote.
- Some advice is a personal stance: no dismiss buttons on notifications, disabling an invalid submit button, "Writing less damned code". Others in the field disagree (see below).
- The theme switcher's `filter: invert()` dark mode is a performance hack; it ignores contrast tuning and brand color, and modern products should use color tokens and `prefers-color-scheme`.
- The blog is the free predecessor of the book; the book revised content and demos, so details may differ.

## Disagreements with other references
- `references/interaction/microinteractions-and-motion.md` and `references/process/states-and-edge-cases.md` say disabled submit buttons hide the reason and prefer an enabled button that validates on press. Pickering's todo list disables "Add" until input is valid, plus `aria-invalid`. For a one-field inline adder his approach is fine; for forms with several fields, trust the enabled-and-explain rule (it is supported by the COGA guidance too).
- `references/interaction/platform-conventions.md` gives snackbars an "Undo" action and 4–10 s; the APG Alert pattern (books/aria-apg.md) says alerts should not disappear automatically. Pickering removes dismiss buttons and lets notifications vanish, but only for information that is duplicated elsewhere. Combine: no auto-dismiss for errors or actionable messages; auto-dismiss is acceptable only for redundant confirmations.
- `references/interaction/accessibility.md` uses `aria-label` for icon buttons. Pickering prefers `aria-labelledby` or visually hidden text because machine translation skipped `aria-label` at the time; APG says the same for visible text. For localized products, follow Pickering.
- `references/data-driven/conversion-checkout-forms-signup-landing.md` already advises against hero carousels on engagement grounds; Pickering adds the accessibility argument (vestibular harm, focus order) and a constructive alternative (user-driven slider). They agree.
- `references/visual/visual-polish-checklist.md` notes hamburgers reduce discoverability; Pickering agrees and argues for in-page tables of content over hidden dropdown structures.

## Best quotes (< 25 words each, max 5)
- "Supporting screen reader software is supporting screen reader software, not blind people." (Toggle Buttons)
- "Never change label and state at the same time." (Toggle Buttons)
- "If there is nothing to be done with the tool, you don't put the tool in the person's hand." (Notifications)
- "Inclusive design mantra: If in doubt, spell it out." (A Content Slider)
- "Never sacrifice usability in the pursuit of JavaScript-free solutions. It's vanity." (Menus & Menu Buttons)

## Related
- references/interaction/accessibility.md, references/interaction/design-systems.md, references/interaction/platform-conventions.md, references/process/states-and-edge-cases.md
- references/books/aria-apg.md (normative-leaning keyboard models for the same components), references/books/wcag-22.md, references/books/coga-usable.md
- Heydon Pickering, *Inclusive Design Patterns* (2016) — not read.
