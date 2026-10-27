---
title: "Web Form Design: Filling in the Blanks"
author: "Luke Wroblewski"
year: 2008
domains: [interaction, data-driven]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# Web Form Design: Filling in the Blanks — Luke Wroblewski

Use this when: you are laying out a sign-up, checkout, login, settings or data-entry form (label position, required/optional marking, field length, grouping, actions, help, errors, success); a team wants to add a "Cancel"/"Reset" button, a confirm-email field or extra optional questions; you must decide between one long page, several pages or "gradual engagement" (no sign-up form at all).

Basis: the book (Rosenfeld Media, 2008) was not read. These notes rest on Wroblewski's own free material from the period around the book, all published on lukew.com: his **"Best Practices for Form Design" deck (2008)**, the book's design principles and best-practice summaries presented by the author; his **"Web Form Design" deck from An Event Apart (2009)**, organised as "7 best practices" with the Etre test data; his **"Sign Up Forms Must Die" (2010)**, **"Mobile Input" (2012)** and **"Mobile Checkout" (2012)** decks, which carry the advice into mobile; and four articles the author tags as book material ("wfbook"): *Web Application Form Design* (2005), *Primary & Secondary Actions in Web Forms* (2007, Etre eye-tracking study), *Labels Within Inputs* (2008) and *Email Entry in Web Forms* (2009). All were read in full; slide decks carry headings and bullet points but not the spoken explanation. Coverage is medium: the book's main best practices (layout, labels, required fields, field lengths, grouping, actions, help, path to completion, progressive disclosure, dependent inputs, inline validation, errors, progress, success) are covered as the author summarised them. Its full chapter text, examples, case studies and expert "perspectives" sidebars are not. Inline validation has its own techne file (see Related).

## The big idea (3 sentences)
Forms are how people "talk" to a business online (buying, joining, contributing), and nobody wants to fill them in, so the goal of every form is completion with the least pain. Each decision (label position, which questions to ask, how actions, help and errors look) should be chosen for the specific context ("it depends") and checked against data: usability tests, eye tracking, completion and error rates. Three principles run through it: minimise the pain, illuminate a clear path to completion, and keep communication (help, errors, success) consistent, in one voice, despite many stakeholders.

## Core concepts
- **Why forms matter** — commerce (enable purchasing / maximise sales), access (enable participation / grow membership) and engagement (enable input / gather content).
- **Design principles** — minimise the pain (smart defaults, inline validation, forgiving inputs); consider context (familiar vs foreign data, frequent vs rare use); communicate consistently (errors, help, success in a single voice).
- **Patterns as "if your goals are… try…"** — best practices are conditional on goals and constraints, drawn from usability testing, field tests, support logs, a survey of web conventions, analytics and eye tracking.
- **Label alignment** —
  - *top-aligned* for familiar data and the fastest completion (label and field read in one fixation; best for localisation, complex inputs and mobile);
  - *right-aligned* when vertical space is tight (clear label–field association, but a ragged left edge makes labels hard to scan);
  - *left-aligned* for unfamiliar or advanced data, where scanning the labels matters more than speed.
- **Labels within inputs** — they save space, but the label must vanish on focus and then the question is gone. That makes them unsuitable for medium or long forms, where people can't recheck their answers. They must look clearly unlike an answer.
- **Required vs optional** — mark whichever is the minority: optional fields when most are required, required fields when most are optional, nothing when all are required. Text beats symbols, though an asterisk often works for required fields. Better still, avoid optional fields.
- **Field length as an affordance** — sized to the expected answer where possible; otherwise one consistent length. Random lengths add noise.
- **Minimal grouping** — use the fewest visual elements (rules, background colours) needed to show real relationships. Every extra line or box is something the eye must process (Tufte: differences that make a difference).
- **Primary vs secondary actions** — Submit/Save/Continue complete the form; Cancel/Reset/Back undo it. Avoid secondary actions; if needed, make them visually weaker, and align the primary action with the input column.
- **Help and tips** — use for unfamiliar data, "why do you need this?", recommended formats and optional requests. Visible and next to the field is best. When there is a lot, expose help dynamically (automatic inline on focus, user-activated inline, or a consistent help section).
- **Path to completion** — remove unnecessary questions, accept flexible input (any phone format), use smart defaults, give a clear scan line and visual pacing, show scope and progress, and allow saving on long forms. If people need to look something up, say so on a start page before they begin.
- **Form organisation** — for every question: keep, cut, postpone or explain. Speak with one voice across UX, sales, engineering, marketing and legal, and make it read like a conversation. Use one page for a few short topics, multiple pages for many questions loosely related by topic, and one long page for many questions about a single topic.
- **Progressive disclosure and dependent inputs** — show advanced options when needed, preferably on user request and consistently. Keep the triggering choice visibly tied to the inputs it reveals; avoid "jumping" layouts.
- **Feedback** — inline validation for error-prone inputs; errors stated clearly at the top, with actionable remedies and the field marked ("double" the visual language); progress shown and Submit disabled after a click; success confirmed in the context of the submitted data.
- **Gradual engagement** — "sign up forms must die": let people use the service first and make account creation an outcome, via existing identities (web services, address books), communication channels (email, SMS posting) or lightweight first interactions. Geni's version reached 5 million profiles in 5 months.
- **Mobile (2012 decks)** — single column and top-aligned labels; correct input types (tel, email, number) to get the right keyboard; input masks that show the format up front rather than revealing it gradually; collapse fields (full name, ZIP-to-city lookup, a combined card field); hide irrelevant controls; smart defaults (pre-filled forms took roughly a quarter of the time in a cited study); take advantage of device capabilities (location, camera, contacts).

## Actionable heuristics for product design
- When a form asks for familiar data (name, address, payment), use top-aligned labels in a single column with bold or high-contrast labels. On mobile this is the default. Consider left-aligned labels only for long, unfamiliar, expert data entry on desktop, where scanning labels matters more than speed.
- When tempted to put labels inside fields to save space, don't, unless the form is two or three fields (search, login). Even then, keep a real `<label>` for assistive tech and make the label visually distinct from an answer. Prefer a label that stays visible (above the field, or one that floats up on focus).
- When most fields are required, mark only the optional ones with the word "(optional)". If you find yourself with many optional fields, cut them: Wroblewski cites a single optional "Company" field under Name whose removal was reported to be worth $12M a year in profit.
- When reviewing a form with stakeholders, run every question through keep / cut / postpone / explain. Each question should have an owner who can say why it is needed now. Postpone anything not needed to deliver the immediate goal.
- When a form has Cancel, Reset or Back, first try deleting them (Reset almost never helps anyone). If one must stay, make it visually weaker (a link or a grey button) and place the primary action first, left-aligned under the fields. In the Etre test, the layout with Cancel placed where people expected Submit caused six mis-clicks among 23 people.
- When a field invites doubt ("why do you need my phone number?", "what's a CVV?"), answer it next to the field, briefly. Use on-focus help when doubts are common and user-activated help for complex or repeated forms.
- When you accept structured data (phone, card, dates), accept any reasonable format and normalise it yourself. If you use a mask, show the format before typing starts, not progressively.
- When there is a risk of typos in critical data (email), don't make people type it twice (they paste, copying the error). Use a large field, `type=email`, and echo the address back in context ("We'll send your receipt to…").
- When a form is long, show scope and progress, allow saving, and choose page structure by content (one page for a few topics; several pages for many loosely related questions). If information must be looked up (tax ID, policy number), warn people before they start.
- When options depend on an earlier choice, reveal them directly under or inside the chosen option and keep the trigger visible. Don't move content so far that people lose the connection.
- When an error occurs, say so at the top in plain language, mark each responsible field the same way, say how to fix it, and never clear or change what the user already typed.
- When the user submits, show that it is working, block double submission, then confirm success where the data now lives (the updated page or record), not on a dead-end "Thank you" page.
- When designing sign-up, ask whether people can get value before creating an account (guest checkout, try-before-sign-up, single sign-on, magic links). Create the account as an outcome of use, and make sure auto-created accounts can be re-accessed.
- When building for touch, pick input types that bring up the right keyboard, keep people "on the keys" (fewer control switches), merge fields where possible, and use device capabilities (location, autofill, camera for cards) instead of typing.

## Evidence & caveats
- **Evidence base:** a mix of the author's practitioner experience (Yahoo!, eBay), conventions surveys and small lab studies. The label-alignment data comes from one small eye-tracking study (Penzo, 2006). The actions study had 23 participants and six variants run within-subjects. Treat specific percentages and times as directional.
- The inline-validation numbers (22% more completions, 42% faster, and so on) come from a 2009 Etre study with a small sample (see `references/books/wroblewski-inline-validation.md` for the full method and limits).
- The $12M optional-field anecdote and the Geni growth figures are reported cases from cited third-party sources, not controlled experiments.
- **Dated advice:** desktop-era tabindex tips (modern practice is to keep DOM order logical and avoid positive tabindex); right-aligned labels (rare on today's responsive and mobile forms); "show passwords by default" (2012 deck), which is now usually a show/hide toggle that starts masked except in low-risk contexts; and 2010-era SMS/email-posting sign-ups. The underlying principles (remove work, reduce errors, keep a clear path) still hold.
- Much is expert opinion framed as best practice, with an explicit "it depends". Wroblewski himself says layouts should be verified with testing or completion and error data.

## Disagreements with other references
- `references/data-driven/conversion-checkout-forms-signup-landing.md` agrees on top-aligned labels, marking optional fields, guest checkout and replacing confirm fields with show/hide toggles. It adds newer standards (NIST password guidance, passkeys, WCAG 2.2, Baymard data). Where advice differs (for example password masking), trust that file and the current standards over the 2008–2012 decks.
- `references/books/wroblewski-inline-validation.md` covers *when* and *how* to validate in detail (on blur for open fields, persistent messages). This file covers everything around validation; don't duplicate it.
- `references/process/states-and-edge-cases.md` covers error and empty states in general. Wroblewski's specific rules (top message plus doubled field marking, never alter user input) are a form-specific application of it.
- `references/books/designing-interfaces-tidwell.md` contains form patterns (forgiving format, input hints, good defaults) that overlap almost one-to-one. Use Tidwell for the pattern names and Wroblewski for the evidence and conditions.

## Best quotes (< 25 words each, max 5)
- "Primary goal for every form is completion" (2008 and 2009 decks)
- "Sign up forms must die" (2009–2010 decks)
- "Any visual element that is not helping your layout ends up hurting it." (*Web Application Form Design*, 2005)
- "Make sure you really need each secondary action on a form and don't add them indiscriminately." (*Primary & Secondary Actions*, 2007)

## Related
- `references/books/wroblewski-inline-validation.md`, `references/data-driven/conversion-checkout-forms-signup-landing.md`, `references/process/states-and-edge-cases.md`
- `references/interaction/accessibility.md`, `references/books/wcag-22.md` (labels, error identification, redundant entry)
- `references/books/designing-interfaces-tidwell.md`, `references/psychology/cognition-memory-cognitive-load.md` (why labels must stay visible)
- `references/books/nudge-thaler-sunstein.md` (smart defaults, sludge in long forms)
- Books: Jarrett & Gaffney, *Forms That Work* (2008); Wroblewski, *Mobile First* (2011)

## Sources
- Wroblewski, L. (2008). "Best Practices for Form Design" (slides): https://static.lukew.com/webforms_lukew.pdf (read in full; saved under books/free/web-form-design/)
- Wroblewski, L. (2009). "Web Form Design" (An Event Apart, slides, "7 best practices"): https://static.lukew.com/EventApart_WebForms_120809.pdf
- Wroblewski, L. (2010). "Sign Up Forms Must Die" (slides): https://static.lukew.com/SignUpForms_10052010.pdf
- Wroblewski, L. (2012). "Mobile Input" (slides): https://static.lukew.com/MobileInput04092012.pdf; "Mobile Checkout" (slides): https://static.lukew.com/mobilecheckout.pdf
- Wroblewski, L. (2005). "Web Application Form Design": https://www.lukew.com/resources/articles/web_forms.html
- Wroblewski, L. (2007). "Primary & Secondary Actions in Web Forms": https://www.lukew.com/resources/articles/psactions.asp
- Wroblewski, L. (2008). "Web Form Design: Labels Within Inputs": https://www.lukew.com/ff/687/web-form-design-labels-within-inputs
- Wroblewski, L. (2009). "Email Entry in Web Forms": https://www.lukew.com/ff/entry.asp?941
- Book page and presentation index: https://www.lukew.com/resources/web_form_design.asp, https://www.lukew.com/presos/
- Not used: a free EPUB stream reportedly offered on Rosenfeld Media's "Rosenverse" (https://rosenverse.rosenfeldmedia.com/books/web-form-design); it appears to need a sign-in and was not checked.
