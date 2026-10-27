---
title: "Making Content Usable for People with Cognitive and Learning Disabilities"
author: "W3C Cognitive and Learning Disabilities Accessibility Task Force (COGA), eds. Lisa Seeman-Horwitz, Rachael Bradley Montgomery, Steve Lee, Ruoxi Ran"
year: 2021
domains: [accessibility, cognition, ux-copy, forms, research, ethics]
evidence: "moderate"
---

# Making Content Usable for People with Cognitive and Learning Disabilities — W3C COGA Task Force

Use this when: you design flows where people must remember, read, calculate, log in, fill forms or recover from mistakes (onboarding, checkout, banking, health, government, support); you need concrete numbers for "keep it simple" (choices per screen, paragraph length, summary length, media chunk length); you are planning usability tests that include people with cognitive and learning disabilities, older adults or stressed users; you want accessibility arguments against dark patterns, hidden fees, forced upsells and memory-heavy authentication.

Source: https://www.w3.org/TR/coga-usable/ (W3C Working Group Note, 2021; fetched Oct 2026). Read in full: Summary (8 objectives), section 2 Introduction (how to use, background, building the user into development, language use), section 4 Design Guide — every pattern's User Need, What to Do, How it Helps and More Details for all 8 objectives (about 60 patterns), section 5 Usability Testing, Focus Groups and Feedback (all), Appendix B (policy and business considerations). Skimmed: section 3 User Stories (titles and needs), section 6 Personas (two read fully: Alison and Tal; others by title), Appendix A mappings. Skipped: each pattern's "Use/Avoid" examples and "Getting Started" boxes, change log, acknowledgments.

## The big idea (3 sentences)
Many barriers for people with cognitive and learning disabilities are not in WCAG because they were hard to make testable, so this Note supplies eight design objectives, user needs, patterns, personas and test questions that go beyond conformance. The core move is to stop relying on the user's memory, reading speed, numeracy, attention and ability to learn new conventions: the interface should be familiar, predictable, short, literal, forgiving and supported by human help. These needs are permanent and severe for some users but are shared by anyone tired, stressed, distracted, ageing or working in a second language, so meeting them improves the product for everyone.

## Core concepts
- **Eight objectives** — (1) help users understand what things are and how to use them; (2) help users find what they need; (3) use clear and understandable content; (4) help users avoid mistakes and correct them; (5) help users focus; (6) ensure processes don't rely on memory; (7) provide help and support; (8) support adaptation and personalization.
- **Hidden and varied disabilities** — memory, attention, executive function, language, literacy, numeracy (dyscalculia), processing speed; often undiagnosed, often age-related, and one person may be strong in some functions and impaired in others.
- **Impaired working memory** — some users can hold only one to three (elsewhere "one to four") items; anything that asks users to carry information across steps is a barrier.
- **Cognitive fatigue** — each unfamiliar page, error or extra step depletes capacity; after a few failures users abandon and blame themselves.
- **Familiarity over novelty** — users may be unable to learn new design patterns, icons or terms, so convention is an accessibility requirement, not a taste choice.
- **Critical path** — the minimum steps to complete a task; optional steps must not sit on it.
- **Personalization** — let users simplify, change symbols, spacing and presentation, roll back to a familiar version, and use their own add-ons (text-to-speech, password managers, simplifiers).
- **Testable patterns** — each pattern has "use" and "avoid" examples that can serve as test cases; real-user testing is the final check.

## Actionable heuristics for product design
- When designing any page, give it a clear title or heading stating its purpose and show where the user is (breadcrumbs, highlighted current tab), because a distracted user needs to re-orient without re-reading.
- When choosing layout and controls, put things where people expect them (search top right, home link top left, contact in top navigation, sitemap in footer, submit at the bottom of the form in a left-to-right site), make links look like links (underlined) and buttons look like buttons, and make non-controls not look clickable.
- When releasing a redesign, offer a way back to the previous familiar interface, because some users cannot relearn.
- When a control affects only part of the page, place it inside or next to the region it affects, separate regions with clear borders or space, and avoid nested or adjacent scroll areas.
- When adding icons, use familiar ones, one meaning per icon, next to text (to the left in left-to-right languages); don't let icons stand alone.
- When planning a home or landing page, call out the key tasks at the top with visual weight and in the main navigation, because a user who can't spot "Buy tickets" among reviews leaves.
- When designing navigation, make submenu presence visible (not hidden behind a tiny glyph or a hover-from-one-side trick) and choose category names users guess right the first time; provide search with autocomplete, spell correction and grouped results on any site where pages are more than two clicks from home.
- When placing safety, health or critical information, keep it visible without scrolling or hovering and mark it (e.g. a warning symbol), because slow readers stop before the end.
- When writing, use the most common words (the guide points to about 1,500 common words), present tense and active voice, no double negatives or nested clauses, literal language (explain metaphors, sarcasm and idioms), one point per sentence, one topic per paragraph, and split any paragraph over 50 words.
- When a list has three or more items or steps, use bullets or numbers; include every step, even "obvious" ones; give complex instructions as an if/then table.
- When content exceeds about 300 words, add a short, plain summary (lower-secondary reading level) with key words emphasized; under 300 words the headings can act as the summary.
- When publishing video or audio, split it into labeled chapters of about 6 minutes or less, each with its own link.
- When formatting numbers, phone numbers or dates, use the locale's separators and units, avoid Roman numerals, keep phone numbers selectable as one string, and add words for numeric concepts (very cold … very hot) when math isn't the point.
- When placing text over images or patterns, use a solid background behind blocks of text, and remove or lower background noise behind speech.
- When building a form, ask only for what you need, mark required fields, accept many input formats (phone with or without hyphens, dates with or without leading zeros), split long numbers into chunks, prefer inputs where only valid values are possible, auto-correct only when the correction is reliable, and otherwise suggest ("Did you mean 01/02 or 02/01?").
- When showing instructions for a field, put them before or next to it, not only in the error message; keep labels visible, next to the control, in common words, and don't rely on ARIA or `title` for labels because many cognitive assistive tools don't read them.
- When the user goes back (browser back, breadcrumb, edit link), never lose what they entered, and let them return to where they were in one action after fixing something.
- When money is involved, state all charges and typical values at the start of the task, show a full order summary before final submission, and explain in plain language how and until when a transaction can be cancelled.
- When a session must time out, avoid it if you can, autosave work, and tell users up front how long they have and whether data will be lost; ask for sensitive data (card numbers) last so the timeout window is short.
- When each step completes, confirm it visibly and programmatically (checkmarks on steps, "Your message was sent"), because silence makes users unsure whether anything happened.
- When users might be interrupted (pop-ups, ads, notifications, autoplay, social pings), let them pause, postpone or turn those interruptions off, except emergencies.
- When designing a purchase or sign-up, keep the critical path minimal and move optional steps (add-ons, upsells, surveys) off it, because the guide's example user with dementia abandons a phone purchase when accessory offers appear before payment.
- When designing a screen, aim for five or fewer main choices, move unrelated links to the footer or behind a clearly named "More", and keep one or two meaningful images.
- When a task has several steps, say before it starts how long it takes, what the user needs to have ready (card, address, ID) and what the steps are; then show progress and make clear when it is finished.
- When designing login, registration and recovery, provide a path that needs no memorized strings, transcription, calculation, puzzles or precise gestures (passkeys/WebAuthn, trusted-device login, biometrics, OAuth, email magic link), offer a single-step option and one that needs few words, and don't force frequent password changes, which push people into unsafe workarounds with caregivers.
- When users need human help, make it reachable from every page and step in as few steps as possible (a two-field form, an email address or a phone number that reaches a person); in phone menus reserve "0" or "help" for a human, say the option before the digit ("for billing … press 1"), and don't read ads.
- When offering choices, state benefits, risks and differences from what was asked (a different destination city, a refurbished item), because users who read slowly won't find it in the fine print.
- When something time-sensitive is booked, offer "add to calendar" or a reminder at the end of the task, only on request, with user-chosen timing.
- When providing a feedback channel, make it available at any point, simple, in several modes (chat, phone, form, email), not hidden behind chatbots or phone menus, and actually act on what arrives.
- When the product has many features, offer a simplified mode (the guide suggests a simple application has 3–6 functions) with an easy way back to full mode, and support user presentation preferences (font, size, spacing, contrast) and autocomplete.
- When security requires disabling extensions or paste, disable them only on the specific field, because otherwise you break the user's assistive tools.
- When running usability tests, recruit people with a range of cognitive disabilities (older adults with forgetfulness, early dementia, dyslexia, dyscalculia, AD(H)D, intellectual disability, brain injury); friends and relatives are a valid low-budget start.
- When testing with this group, use accessible consent forms and check understanding, allow breaks, quiet rooms and a companion (watch what help they give, since it may reveal design faults), measure success, errors and relative time, use simple mood scales, and remind people they can stop and cannot do anything wrong.
- When testing each objective, ask users to demonstrate, not just answer: interrupt them for a minute and see if they can resume; ask them to change a detail at the start of a finished form; ask whether they could do it tired or stressed.

## Evidence & caveats
- This is a W3C Working Group Note (29 April 2021): consensus guidance from a task force, built on its own user research, issue papers and gap analysis, but with few controlled experiments cited inline. It is explicitly supplemental, not required for WCAG conformance, not intended to become a Recommendation, and its status section calls it a work in progress.
- Numbers such as 5 choices, 50-word paragraphs, 300-word summaries, 6-minute media segments, 1,500 common words and 3–6 functions are practical rules of thumb, not experimentally derived thresholds.
- The Note is internally inconsistent on working memory: it says average people hold about 7 items and impaired users one to three or one to four. The "7 items" figure reflects the old Miller estimate; see the disagreement below.
- Business claims in Appendix B (seniors complete only 55.3% of online tasks; the 55+ market controls 75% of US wealth; a "7.1 trillion-dollar" senior market) are cited without sources in the text and should not be quoted as fact without checking.
- Some recommended technologies (personalization semantics, `easylang`, simplification attributes) were immature at publication and remain poorly supported; treat those patterns as aspirations unless you build the feature yourself.
- Safety examples (e.g. a "mode" label on a heating unit linked to hypothermia; lower life expectancy partly linked to inaccessible services) are illustrative anecdotes.

## Disagreements with other references
- `references/psychology/cognition-memory-cognitive-load.md` and books/magical-number-4-cowan.md put typical working memory at about 4 chunks and debunk "7±2" as a design rule; COGA repeats "on average people can remember 7 letters or items". Trust Cowan for the general population; COGA's design conclusion (don't rely on memory; impaired users may hold 1–3) stands either way.
- `references/interaction/accessibility.md` §8 already paraphrases the eight objectives; this note adds the numeric rules of thumb, the fee-disclosure, critical-path, human-help and testing guidance that section lacks.
- `references/data-driven/conversion-checkout-forms-signup-landing.md` and conversion playbooks that test order bumps or upsells before payment conflict with COGA's "make short critical paths". If you test an upsell, place it after the critical step or make it skippable without reading, and add an abandonment-by-segment guardrail.
- `references/interaction/microinteractions-and-motion.md` (enabled submit buttons that explain) aligns with COGA's "instructions before the field, not only in errors" and its rejection of silent failure; Pickering's disabled-until-valid button (books/inclusive-components.md) is weaker for this audience.
- COGA asks for visible labels and warns that cognitive AT doesn't read ARIA labels; books/inclusive-components.md accepts hidden labels for input-plus-button pairs. For audiences with cognitive needs, keep labels visible.
- COGA treats hidden fees, forced optional steps and confusing wording as accessibility failures, which reinforces `references/psychology/behavior-ethics-dark-patterns.md` with an accessibility argument in addition to the legal and ethical ones.

## Best quotes (< 25 words each, max 5)
- "Ask the user only for what you need!" (Summary, objective 4)
- "Do not disable add-ons and extensions!" (Summary, objective 8)
- "Users should guess correctly, the first time, where to find sub menu items." (4.3.2)
- "It is vital for people with cognitive and learning disabilities that development teams do not rely solely on automated accessibility testing." (5.1)

## Related
- references/interaction/accessibility.md §8, references/psychology/cognition-memory-cognitive-load.md, references/psychology/behavior-ethics-dark-patterns.md, references/process/research-methods-selector.md, references/process/states-and-edge-cases.md
- references/books/wcag-22.md (its cognitive criteria 3.2.6, 3.3.7, 3.3.8 cover a small part of these patterns), references/books/magical-number-4-cowan.md, references/books/microsoft-inclusive-design.md
