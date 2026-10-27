---
title: "ARIA Authoring Practices Guide (APG)"
author: "W3C WAI, ARIA Authoring Practices Task Force"
year: 2024
domains: [accessibility, interaction, design-systems, keyboard, build]
evidence: "moderate"
---

# ARIA Authoring Practices Guide (APG) — W3C WAI

Use this when: you are specifying or building a custom widget (tabs, menu button, combobox, dialog, listbox, tree, grid, carousel, slider, toolbar, switch, accordion) and need its expected keyboard model and roles/states; you are writing a design-system component spec and want the "keyboard and focus" section; you must decide between similar patterns (disclosure vs menu, table vs grid, switch vs checkbox vs toggle button, combobox vs listbox) or name things for screen readers.

Source: https://www.w3.org/WAI/ARIA/apg/ (fetched Oct 2026). Read in full: home page, About → Introduction, ARIA Basics, Read Me First; Practices → Developing a Keyboard Interface, Providing Accessible Names and Descriptions (all prose; the 80-role naming table skimmed), Landmark Regions, Hiding Semantics with the Presentation Role. Patterns: read the About, Keyboard Interaction and (for most) the Roles/States/Properties sections of all 30 patterns: accordion, alert, alertdialog, breadcrumb, button, carousel, checkbox, combobox, dialog (modal), disclosure, feed, grid, landmarks, link, listbox, menu/menubar, menu button, meter, radio group, slider, multi-thumb slider, spinbutton, switch, table, tabs, toolbar, tooltip, tree view, treegrid, window splitter. Not read: the individual example implementation pages and their code, Structural Roles, Grid and Table Properties and Range Properties practices (skimmed headings only), coverage/quality and AT support tables.

## The big idea (3 sentences)
Native HTML elements come with keyboard behaviour and semantics for free; when you build anything custom, ARIA only declares what the thing is, and you must also build the behaviour users of that role expect. The APG is the shared catalog of those expectations, borrowed from desktop operating systems: Tab moves between components, arrow keys move inside composite widgets, Enter/Space activate, Escape closes and returns focus. It is informative, not normative, and not a design system, but its keyboard conventions are so established that the task force advises treating most of them as requirements.

## Core concepts
- **No ARIA is better than bad ARIA** — ARIA is like CSS for assistive technology: wrong ARIA misrepresents the interface and can make it worse than no ARIA at all.
- **A role is a promise** — `role="button"` promises Space/Enter activation, focusability and so on; ARIA adds no behaviour or styling itself.
- **Cloak vs belt** — some ARIA overrides native meaning (`role="menuitem"` on a link hides that it is a link; `aria-label` replaces content), some adds to it (`aria-pressed` on a button).
- **Composite widget** — a component with several focusable parts (radio group, tabs, menu, listbox, tree, grid, toolbar) that occupies one tab stop; arrow keys move inside.
- **Roving tabindex vs aria-activedescendant** — two ways to manage focus inside composites: move a single `tabindex="0"` among items and call `focus()`, or keep DOM focus on the container and point to the active child. Roving tabindex gets automatic scroll-into-view.
- **Focus vs selection** — focus is the single point where keys act; selection is a state that can be on many items. They must look different.
- **Selection follows focus** — fine when the result is instant (preloaded tab panels); harmful when each move triggers a network fetch or page load.
- **Disabled but focusable** — `aria-disabled="true"` keeps an item discoverable (menu items, tabs, listbox options, toolbar Copy/Paste); HTML `disabled` removes it when its presence can be inferred.
- **Accessible name vs description** — the name is 1–3 words that identify the element and are announced with its role; the description is optional, longer, read last.
- **Naming precedence** — `aria-labelledby` beats `aria-label` beats native label/content; fallbacks (`title`, `placeholder`) yield poor names.
- **Landmarks** — banner, navigation, main, complementary, contentinfo, search, form, region; all content should sit in one, with about seven or fewer per page.
- **Modal dialog** — inert background, contained tab sequence, Escape closes, focus returns to the invoker.

Pattern chooser distilled from the pages:

| If you need | Use | Not |
|---|---|---|
| Show/hide one block | Disclosure (button + `aria-expanded`) | Menu |
| Stack of show/hide sections | Accordion (heading wrapping a button) | Tabs on small screens |
| Layered panels, one visible | Tabs (arrow keys between tabs) | Site navigation |
| App commands in a popup | Menu button + menu | Site navigation links |
| Pick one from a long list with typing | Combobox (editable or select-only) | Custom select from divs |
| Static data | Table (every widget its own tab stop) | Grid |
| Interactive cells or many links | Grid (one tab stop, arrows) | Table with 200 tab stops |
| Binary on/off with "on/off" wording | Switch | Toggle button with changing label |
| Group of 3+ controls | Toolbar (one tab stop) | Toolbar for 2 buttons |

## Actionable heuristics for product design
- When a native element exists (button, a, input, select, details, dialog, table, label, fieldset), use it before any ARIA role, because roles carry no behaviour and every custom widget is a promise you then have to keep.
- When you specify any custom component, include a keyboard table in the spec (key → result) taken from the matching APG pattern, because that is what screen reader and keyboard users will try first.
- When a component contains several focusable items (tabs, radio group, toolbar, menu, listbox, tree, grid), give it one tab stop and use arrow keys inside, because Tab-through-everything forces keyboard users to press Tab once per item to escape.
- When focus enters a composite, land on the selected item if there is one (radio, tabs, listbox, tree), on the last-focused item for grids, and on the first item for menubars and toolbars.
- When designing tabs, auto-activate on arrow focus only if panels are already loaded and appear without noticeable latency; otherwise require Enter/Space, because each arrow press would otherwise trigger a slow load.
- When a horizontal tab list has focus, leave Up/Down for page scrolling; when a tab panel has no focusable content, make the panel itself focusable so Tab reaches it.
- When building a carousel that can auto-rotate, put a stop/start control first in its tab order, stop rotation whenever keyboard focus enters or the mouse hovers, and never restart it unless the user asks; label that control by its action ("Stop slide rotation").
- When a carousel has slide pickers, prefer a single tablist over one button per slide, because grouped picker buttons each add a tab stop and are "the least friendly" for keyboard users.
- When opening a modal dialog, move focus inside: to the first field by default; to a static heading or first paragraph (tabindex -1) if the content is long or structured; to the least destructive button if the action is hard to undo; to "OK/Continue" if that is the common path.
- When closing a dialog, return focus to the element that opened it, unless that element is gone or the next logical step is elsewhere (e.g. the first cell of rows just added).
- When designing any dialog, include a visible close or cancel button in its tab sequence, and mark it modal (`aria-modal`) only if it really blocks the background for everyone.
- When you need to interrupt and require a response (confirm delete, unsaved changes), use an alert dialog; when you just inform, use an alert that doesn't take focus and doesn't disappear on its own.
- When a page loads, don't auto-focus a field unless the page has one primary function nearly everyone uses immediately and users visit it often (a search page, a login page).
- When an element is removed (deleted list item, closed dialog), move focus deliberately to the next item or the invoker, because browsers otherwise drop focus to the page body.
- When a disabled control must remain discoverable (menu items, Copy/Paste in a toolbar, tabs), use `aria-disabled` so it stays focusable; when its existence is obvious from neighbours (Previous on page 1), remove it from focus.
- When naming controls, describe purpose not form ("Close", not "X"; "Product" nav, not "Left"), put the distinguishing word first ("Delete John Doe"), use 1–3 words, never include the role word ("button", "navigation"), and make names unique per role.
- When a visible label exists, use it as the accessible name (label element, `aria-labelledby`) rather than `aria-label`, because visible text gets updated and translated with the UI; if you must use `aria-label`, make sure it is translated.
- When a "Read more" link repeats, name it with `aria-labelledby` pointing to itself plus the card heading ("Read more… 7 ways to save the bees").
- When a set of radio buttons or related fields has a question, wrap them in fieldset/legend so screen reader users hear the question with the answers.
- When a list has more than 5 options, support Home/End; with more than 7 options (or 7 root nodes in a tree), add type-ahead.
- When multi-select is needed in a list or tree, prefer the model where Space toggles and plain arrows move focus without losing selection, and add explicit "Select all / Unselect all" buttons.
- When a toolbar would contain fewer than 3 controls, don't use the toolbar role; when it contains a control that needs the same arrow keys (a textbox in a horizontal toolbar), put only one such control and make it last.
- When a table mixes data with many links or buttons, consider a grid so the page doesn't have hundreds of tab stops; in a grid, either a cell holds one widget that gets focus, or it holds text and the cell gets focus.
- When a toggle button's state changes, keep its label constant ("Mute", pressed/not pressed); if the label must change ("Play" → "Pause"), drop `aria-pressed`, because label and state changing together contradict each other.
- When a button opens a dialog, end its label with an ellipsis ("Save as…"); when choosing between switch, checkbox and toggle button, pick the one whose wording (on/off, checked, pressed) matches the visual design.
- When designing landmarks, put all content in one, label repeated landmarks uniquely (two nav regions: "Site" and "Product"), keep to about seven, and don't wrap modal content in a landmark.
- When implementing infinite scroll, use the feed pattern (articles with position/size, `aria-busy` during loads) and document its keys (Page Up/Down between articles), because there is no established convention to rely on.
- When choosing keyboard shortcuts, make every target reachable by normal navigation first, use few shortcuts, prefer mnemonics, and avoid modifier+Tab/Enter/Space/Esc, Caps Lock, Insert, Scroll Lock and Ctrl+Option (macOS) combinations, which belong to the OS and screen readers.

## Evidence & caveats
- The APG is consensus guidance from the ARIA working group, aligned with the ARIA spec, not user research; it says so itself. Its keyboard models are borrowed from Windows/macOS/GNOME conventions, and the guide admits macOS-specific guidance is incomplete.
- It is explicitly not a design system and its examples are not production code; they intentionally don't work around browser and assistive-technology bugs, so testing with real AT combinations is still required.
- Mobile and touch support are largely not covered; sliders may not work with touch screen readers, and some ARIA features are unsupported in mobile browsers.
- Several sections were unfinished when read (parts of the keyboard practice, tooltip and window-splitter examples "to be written"/tracked issues), so absence of guidance is not a recommendation.
- Rules of thumb such as "seven or fewer landmarks", type-ahead above seven options and Home/End above five are practical conventions, not tested thresholds.

## Disagreements with other references
- `references/interaction/accessibility.md` §5 code reminders use `aria-label="Close dialog"`. APG accepts this but ranks visible text and native labels first (Rule 2 and 3) and warns `aria-label` must be translated; Pickering (books/inclusive-components.md) adds that machine translation services skip it. Prefer visible or visually hidden text when the product is localized.
- APG says alerts should not disappear automatically; Pickering argues non-actionable notifications can disappear if the information is discoverable elsewhere, and `references/interaction/platform-conventions.md` gives snackbars 4–10 s. Reconcile: auto-dismiss only for redundant, non-critical confirmations; never for errors or anything with an action unless it stays reachable.
- `references/interaction/accessibility.md` §4 already recommends APG patterns and headless libraries; the APG adds the caveat that deviating patterns must still follow ARIA's normative rules and mimic OS conventions.
- `references/interaction/microinteractions-and-motion.md` recommends enabled submit buttons that validate on press; APG's disabled-control guidance (keep discoverable items focusable with `aria-disabled`) supports that direction over silently removing them.
- Pickering recommends single-column stacking instead of turning tabs into accordions on mobile; APG treats tabs and accordions as distinct patterns, consistent with him.

## Best quotes (< 25 words each, max 5)
- "No ARIA is better than Bad ARIA" (Read Me First)
- "A role is a promise" (Read Me First)
- "Do NOT include a WAI-ARIA role name in the accessible name." (Names and Descriptions)

## Related
- references/interaction/accessibility.md, references/interaction/design-systems.md, references/interaction/platform-conventions.md, references/build/web-prototyping.md
- references/books/wcag-22.md (2.1.1, 2.4.3, 2.4.7, 4.1.2, 4.1.3 are what these patterns satisfy), references/books/inclusive-components.md (opinionated, plain-language versions of the same components)
