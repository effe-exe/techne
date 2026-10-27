---
title: "Inclusive Design Patterns: Coding Accessibility into Web Design"
author: "Heydon Pickering"
year: 2016
domains: [accessibility, interaction, build]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: low
---

# Inclusive Design Patterns — Heydon Pickering

Use this when: you are setting up page-level structure for a new web product (document, landmarks, headings, navigation); designing reading-heavy pages, a product listing, a filter widget or a registration form and want the inclusive version; a team plans to "add accessibility later" or reach for ARIA before checking what HTML already provides.

Basis: the book (Smashing Media, 2016) was not read; the eBook is free only to paying Smashing members, and the Scribd copy is unauthorised, so it was not used. These notes come from Pickering's own free material, read in full: the publisher's announcement with the official chapter-by-chapter synopsis; the author's errata page for the book (which shows code from the registration-form, navigation and menu-button chapters); the **Inclusive Design Principles** he co-wrote with Henny Swan, Ian Pouncey and Léonie Watson in 2016 (inclusivedesignprinciples.info; the .org domain now hosts spam and was ignored); and his Smashing Magazine articles on the same topics: "The Perfect Paragraph" (2011), "The Importance of Sections" (2013), "The WAI-Forward" and "It's Alive" (2014–15 excerpts from his earlier eBook *Apps For All*, on ARIA and live regions) and "Reimagining Single-Page Applications With Progressive Enhancement" (2015). His later book has its own notes in `references/books/inclusive-components.md`; this file does not repeat the component material there. Covered: the philosophy, the document and section structure, paragraph typography, ARIA's role, live regions, progressive enhancement and form details shown in the errata. Not covered: the book's actual chapter text and examples for navigation, the menu button, the product list, the filter widget, inclusive prototyping and test-driven markup, beyond their published synopses.

## The big idea (3 sentences)
Most inaccessible interfaces don't come from a lack of care but from doing things the hard way. Developers rebuild with divs and scripts what HTML already provides accessibly, then patch it with ARIA. So inclusive design starts by knowing the medium: use semantic HTML and standard browser behaviour first, keep document structure honest (sections, landmarks, headings by belonging), and progressively enhance with CSS and JavaScript without breaking what already works. Built that way, a pattern serves different users, devices, settings and assistive technologies by default. As the principles put it, the aim is a comparable experience for everyone, not merely technical compliance.

## Core concepts
- **Know the medium, write less code** — the introduction compares three designers building one button. The one who knows HTML produces the simplest, most inclusive result. Simpler is usually more inclusive.
- **Accessibility is retained, not added** — quoting Scott Jehl, accessibility is where you start, and every enhancement risks losing it.
- **The document first** — every pattern lives in a document, so the document must be configured to support inclusion before any component is built: language, title, viewport that allows zoom, landmarks, and skip links (synopsis).
- **Structure must be computable, not just visual** — a bordered div looks like a sidebar but is just more flow content to a screen reader or parser. Sectioning elements (`article`, `aside`, `nav`, `section`) and landmarks create real boundaries. Headings mark where things start but not where they end, so belonging should come from sections, with headings labelling them.
- **The paragraph as the core pattern** — readable defaults: about 16px or more base size, relative units, unitless line-height around 1.5, a measure of about 45–75 characters, real italic and bold fonts rather than faux styles, careful justification (only with hyphenation), and contrast and focus styles. The book extends this to low vision, dyslexia, Irlen syndrome and low literacy (synopsis).
- **ARIA as remedy or enhancement** — ARIA either repairs semantics lost through poor markup (better: use the native element) or communicates relationships HTML can't express (aria-expanded, aria-controls, aria-pressed). Roles, properties and states are like a character sheet: what it is, what it can do, what state it is in.
- **Live regions for feedback** — visual messages are silent to screen reader users. Use polite or status for "tell me when I'm done" and assertive or alert for "drop everything". Announce what changed without moving focus.
- **Progressive enhancement** — let HTML and the browser do the work first (links to fragments, `:target`, the back button, focus going to fragments), then enhance. A single-page app can route with hashes and CSS before any JavaScript, so it still works when scripts fail.
- **Forms (from the errata)** — a fieldset with a legend; every input with a visible, programmatically associated `<label>`; placeholders only as examples, never as labels; and a "show password" toggle so people can check what they typed.
- **Menu button** — a button that reveals content must expose its state (expanded or collapsed) and work with different settings, devices and assistive technologies. The errata fixes a bug where the menu needed two clicks to open, a reminder to test state logic.
- **Inclusive prototyping** — go straight from paper to HTML so the prototype is built from real semantics, not from images you later have to retrofit.
- **Lists and images** — alt text written for the purpose of the image in its context. Image weight is an inclusion issue too, for people on expensive or slow data (synopsis).
- **Filter widgets and choice** — let users decide how content is arranged (sort, filter, list or grid), and design visuals that tolerate content that changes or varies (synopsis).
- **Test-driven markup** — write tests (including CSS-based "diagnostic" selectors that flag missing attributes, as in his live-region example) to prescribe accessible output before building.
- **Inclusive Design Principles** (co-authored) — provide a comparable experience, consider the situation, be consistent, give control, offer choice, prioritise content, add value.

## Actionable heuristics for product design
- Before designing components, write a page-level checklist: `lang` set, a unique and descriptive `<title>`, zoom never disabled, one `main` landmark, `nav` for navigation, a skip link to main, and headings that form a logical outline. Hand it to engineering as part of the template spec.
- Specify structure in design files, not only looks. Label each region as main, nav, aside, header or footer, and mark heading levels by what each section belongs to, not by visual size. If a box is visually separate (sidebar, related content), it must also be structurally separate.
- Use native elements in specs: `button` for actions, `a` for navigation, `input type="checkbox"` for on/off, `select` or radios for choices. Only design a custom widget when no native control fits, and then specify role, name, state and keyboard behaviour (`references/books/aria-apg.md`).
- Set body text from Pickering's defaults and then test with real content: at least 16px, line-height about 1.5, a measure around 45–75 characters (cap it with `max-width` in `ch`), real italic and bold font files, left-aligned rather than justified unless hyphenation is on. Check contrast and visible focus states. Cross-check with `references/visual/typography.md` and `references/books/practical-typography.md`.
- In forms, always use visible labels outside the field, keep placeholders for examples only, group related fields with a legend, add "show password" instead of a "confirm password" field, and make errors specific and tied to their field. Avoid labels that disappear on typing (`references/books/web-form-design-wroblewski.md`).
- For every status change (saved, offline, item added, results updated), specify how it is announced: a polite status region for confirmations and an alert only for urgent problems such as losing connection. Keep focus where the user is unless they must act.
- Give users control over moving or self-updating content: offer "load more" instead of infinite scroll, or a way to turn it off; make animations and auto-play easy to stop; respect reduced-motion and zoom settings.
- Offer choice for complex tasks: more than one way to do key actions (swipe to delete plus an edit mode), list or grid views for long collections, and data tables available to everyone as an alternative to charts, not as a hidden screen-reader-only link.
- Prioritise in source order as well as visually. Put the core task and content first in the DOM and focus order (compose before folders, the article before related links), and put the key word first in link and button labels so they scan well, both visually and when read aloud.
- Prototype in HTML early for interactive flows, even roughly, so keyboard and screen reader behaviour can be checked from the first round. Image-only prototypes hide accessibility problems until they are expensive.
- Build regressions into CI: automated checks for missing labels, alt text, landmark structure and ARIA pairs (role with live-region politeness), plus manual keyboard and screen-reader passes for each new pattern (`references/interaction/accessibility.md`).

## Evidence & caveats
- This is an expert practitioner's guide based on standards (HTML, WAI-ARIA, WCAG) and testing with assistive technology, not on user studies. Its core advice (native semantics first, visible labels, structure assistive technology can compute, live regions) matches W3C guidance and is robust. See `references/books/wcag-22.md` and `references/books/aria-apg.md` for the normative versions.
- Some 2016-era technical details have dated. The HTML5 outline algorithm that "The Importance of Sections" relies on was never implemented by browsers or screen readers and has been removed from the HTML spec; heading levels still define the outline in practice. Use sectioning elements for landmarks, but always set explicit heading levels. Hash-based single-page app routing has largely given way to the History API and server rendering, but the progressive-enhancement principle holds.
- Typography numbers (16px, 1.5, 45–75 characters) are long-standing conventions with partial empirical support (print-size research suggests reading speed plateaus above a critical size; see `references/books/legge-bigelow-print-size.md`). Treat them as defaults, not optima.
- The Inclusive Design Principles are a values framework without measurable criteria. Use them to frame decisions and WCAG to verify.
- Because the book's chapter text wasn't read, the pattern-specific advice here for navigation, the menu button, product lists and filters comes from the synopsis and related articles, not from the full chapters. Coverage is low.

## Disagreements with other references
- `references/books/inclusive-components.md` (his 2019 follow-up) supersedes this book for component behaviour (menus, tabs, toggles, notifications) and in places changes earlier advice. For example, it argues against ARIA application menus for site navigation, which suits the 2016 enthusiasm for ARIA widgets in *Apps For All* less well. Prefer the later book where they differ.
- `references/books/microsoft-inclusive-design.md` frames inclusion as "solve for one, extend to many" with permanent, temporary and situational disability. The co-authored principles say the same ("consider situation"). Pickering adds the engineering discipline. No conflict.
- `references/books/refactoring-ui.md` favours visual hierarchy through size and weight. Pickering insists heading levels follow structure, not size. Do both: choose the heading level by structure, then style it for the visual hierarchy.
- `references/data-driven/conversion-checkout-forms-signup-landing.md` may suggest removing fields or labels to reduce friction. Never remove visible labels or show-password options for minimalism; remove fields instead.

## Best quotes (< 25 words each, max 5)
- "Accessibility is not something we add to a website, but something we start with and risk losing with each enhancement." (Scott Jehl, quoted by Pickering in "The WAI-Forward")
- "Progressive enhancement does not just mean 'adding JavaScript'." ("Reimagining Single-Page Applications", 2015)
- "The perfect paragraph is unassuming to the point of near invisibility." ("The Perfect Paragraph", 2011)

## Related
- `references/books/inclusive-components.md`, `references/books/aria-apg.md`, `references/books/wcag-22.md`, `references/books/coga-usable.md`, `references/books/microsoft-inclusive-design.md`
- `references/interaction/accessibility.md`, `references/visual/typography.md`, `references/books/web-form-design-wroblewski.md`
- Books: Pickering, *Apps For All* (2014); Pickering, *Inclusive Components* (2019)

## Sources
- https://www.smashingmagazine.com/2016/10/inclusive-design-patterns/ (publisher announcement with official chapter synopses)
- https://www.smashingmagazine.com/ebooks/inclusive-design-patterns-ebook/ (publisher page; eBook free only to members, not used)
- https://www.smashingmagazine.com/2016/09/errata-inclusive-design-patterns-book/ (author's errata, with code from the book)
- https://inclusivedesignprinciples.info/ (Inclusive Design Principles, co-authored by Pickering, 2016)
- https://www.smashingmagazine.com/2011/11/the-perfect-paragraph/
- https://www.smashingmagazine.com/2013/01/the-importance-of-sections/
- https://www.smashingmagazine.com/2014/07/the-wai-forward/ (excerpt from *Apps For All*)
- https://www.smashingmagazine.com/2015/04/its-alive-apps-that-feed-back-accessibly/ (excerpt from *Apps For All*)
- https://www.smashingmagazine.com/2015/12/reimagining-single-page-applications-progressive-enhancement/
