---
title: "Form Design Patterns"
author: "Adam Silver"
year: 2018
domains: [interaction, accessibility, data-driven]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# Form Design Patterns — Adam Silver

Use this when: designing or reviewing any form (sign-up, login, checkout, booking, filters, uploads, long applications); choosing between placeholder, float or top labels, between radios, select and autocomplete, or between one page and many; deciding when and how to validate and word errors; someone proposes a disabled submit button, multi-column layout, input masks or split inputs.

Basis: the book (Smashing Media, 2018, 384 pages) was not read. It is for sale as a DRM-free ebook, but the user doesn't buy books. Read in full: Chapter 1, "A Registration Form", published free by Smashing Magazine as an official excerpt (labels, hints, placeholders, float labels, the question protocol, passwordless sign-in and passphrases, field styling, progressive enhancement, password reveal, buttons, validation, error messages); the book's official chapter-by-chapter description; and the author's blog posts that restate or extend the book: "Form design: from zero to hero all in one blog post" (2019, the whole method in checklist form), "When to use the number input" (2019, marked as an excerpt from Chapter 2), "The problem with live validation" (2017), "The problem with disabled buttons" (2023), "Don't mark required fields with an asterisk" (2023), "Multiple inputs versus one input" (2020), "Don't be afraid of a long list of radio buttons" (2024), "Are there exceptions to the 'avoid multi-column forms' rule?" (2025) and "End with one thing per page" (2025). Covered well: the foundations shared by every chapter. Covered thinly, as checklist items only: the checkout, flight-booking (custom ARIA components, date pickers, autocomplete), login, inbox, search, filter, upload, expense ("add another") and long-form chapters, and the book's JavaScript component code.

## The big idea (3 sentences)
Nobody wants to fill in your form, they want its outcome, so good form design is "boring": ask only what you need, use plain native elements and conventions, and make every field obvious, accessible and forgiving, rather than novel space-saving tricks like placeholders, float labels or multi-column layouts. Inclusive design and progressive enhancement are the method: design for visual, auditory, motor and cognitive needs, build on HTML that works when CSS or JavaScript fail, and enhance only when it adds value. Errors are a last resort: reduce them with fewer, clearer questions and hints, validate on submit, and present problems with a title prefix, an error summary linking to each field and clear inline messages.

## Core concepts
- **Question protocol** — justify every field: why you're asking, whether you need it now, whether there is a better way. For registration you probably don't need first and last name, which halves the form "without resorting to novel and problematic patterns".
- **Labels always** — every input gets a visible `<label>` tied by `for`/`id`. Labels help sighted users, screen readers and motor-impaired users (bigger click target).
- **Hints above the input, inside the label** — so they stay visible, are announced, and enlarge the hit area. `aria-describedby` works but is a second choice ("the first rule of ARIA is not to use ARIA").
- **Against placeholders and float labels** — they disappear on typing, get mistaken for values, have low contrast, get cut off, aren't always announced, leave no room for a hint, and float labels don't even save space.
- **Field styling** — labels above fields (Penzo's eyetracking: one fixation for both), boxed inputs (a bottom border alone looks like a separator), label closest to its own field, text at least 16 px, targets at least 44 px, width hinting at expected length, strong visible focus styles, sentence case.
- **Right input types** — `type=email` for the keyboard. `type=number` only for true quantities you'd increment (no leading zeros, no slashes or letters, not huge): card numbers, expiry dates and codes are numerals, so use text with `inputmode` or `pattern`. Use autocomplete attributes, and turn off autocorrect and capitalization for emails and passwords.
- **Password field** — "Choose password", not "Password" (avoids confusion with login). A show/hide button (toggle via `aria-pressed`) instead of a confirm-password field. Consider passwordless email links or passphrases, but only after research, since unfamiliar patterns worry users.
- **Buttons are not links** — buttons do things, links go places. Materially honest styling, no pointer cursor on buttons, verbs for labels, submit button left-aligned under the last field.
- **Validation on submit** — not as users type or on blur. Live validation interrupts too early or too late, makes the page judder, can't handle groups (checkboxes, dates), implies false correctness, triggers on password-manager blur and floods screen readers. A ticked checklist of password rules (above the field) is an acceptable variant.
- **Error presentation** — prefix the document title ("(2 errors) Register…"), focus an error summary at the top ("There's a problem") whose links jump to each field, show the message above the field inside the label with an icon plus red, set `aria-invalid`, and clear and redraw on resubmit. The same look whether errors come from client or server.
- **Error copy** — concise, consistent, specific ("needs an 'at' symbol", not "invalid"), human, no jargon ("invalid", "mandatory"), plain rather than witty, active voice, no "Please", no blame, worded to work in both summary and inline.
- **Forgive trivial mistakes** — trim spaces, accept spaces and dashes in numbers ("one line of code" vs an error message), avoid `maxlength` hard stops.
- **Never disable the submit button** — no feedback, feels broken, low contrast, unfocusable, easy to miss when it enables.
- **Mark optional, not required** — users assume fields are required, so asterisks are noise. Add "(optional)" to the few optional ones, and better, remove optional fields or reveal them conditionally.
- **Choice controls** — radios beat select boxes (some users try to type, can't zoom, no hints, the list is merely hidden). Long radio lists are fine because the options are on screen and Miller's 7±2 doesn't apply. Use an accessible autocomplete instead of `datalist`. Avoid splitting one value into multiple inputs (sort codes, card numbers): it breaks paste and auto-advancing focus misfires. Dates: three text boxes unless users need a calendar's context.
- **One thing per page** — start with one question per page and merge only if research demands it. Silver now says "end with one thing per page". Add a check-your-answers page with change links per row, back links top-left, then a confirmation page and email.
- **Single column** — multi-column forms are slower and error-prone, and teams use them mainly to fill whitespace.
- **Progressive enhancement** — HTML first, CSS second, JavaScript only to add value, with feature detection. The basic experience is often the best and fastest one.

## Actionable heuristics for product design
- Before designing a form, write the question protocol: for each field, why it's needed, who uses it, and what happens if it's dropped or deferred. Delete or defer anything you can't justify. This beats any visual trick for shortening forms.
- Use visible labels above every field, with hints inside the label beneath it. Never use placeholders as labels or hints, and don't use float labels.
- Box text inputs, make them at least 44 px tall with 16 px text, size their width to the expected answer, and give them a strong custom focus ring.
- Put fields in one column, one per row. For multi-step services, default to one question per page with a check-your-answers summary before submit.
- Validate when the user submits. On error: update the page title with the error count, show and focus a summary at the top with links to each field, and show each message above its field with an icon and `aria-invalid`. Keep the same pattern for server-side errors.
- Write errors that say exactly what to do, in words that work both in the summary and next to the field ("Enter your email address", "Your email address needs an @"). Never "invalid" or "Please enter a valid…".
- Keep the submit button always enabled, labeled with a verb ("Register", "Pay £24.99"), left-aligned under the last field.
- Forgive formatting: strip spaces and dashes, accept common variants, and don't hard-stop with `maxlength`. Show a character count and an error instead.
- Mark only optional fields with "(optional)". Better: move optional questions out of the critical path or reveal them conditionally.
- Use radios for choices up to and beyond seven options. Reserve select boxes for long, well-known lists (country) and consider an accessible autocomplete for very long ones.
- Use one input per value. Use `type=number` only for real quantities, and `inputmode="numeric"` text inputs for codes, cards and dates.
- Replace "confirm password" with a show/hide toggle. Label the field "Create password" with rules listed above it, ticked off as they're met if you want live feedback.
- Build forms from native HTML first and confirm they work without JavaScript before adding enhancements (autocomplete, uploads, add-another).
- Treat a confirmation page and email as part of the form, and a good place for the brand's personality, which should stay out of labels and errors.

## Evidence & caveats
- Most guidance comes from the author's practitioner experience (GOV.UK-style services, Tesco, BBC, the Department for Work and Pensions, hundreds of usability sessions he observed), and from established public-sector design systems. It's not controlled research. Treat his "rules" as strong expert opinion consistent with accessibility standards.
- Some claims rest on cited studies: Penzo's 2006 eyetracking for top labels (small study), NN/g and others on placeholders, one cited test where custom error messages lifted conversion 0.5% (anecdotal case). Absolute claims like "research has shown one thing per page doesn't work exactly once" are personal tallies, not published data.
- His position against live validation conflicts with Wroblewski's 2009 Etre study (see below). Both may be right for different forms: Silver argues mostly from accessibility, multi-input fields and long government forms.
- "Never disable buttons" and "avoid select boxes" are well argued for accessibility, but platform conventions (iOS sheets, native pickers) and specialized expert tools may justify exceptions. Test them.
- The book's code (jQuery, IE11 support) is dated. The principles are not, and his newer posts keep them current.

## Disagreements with other references
- `references/books/wroblewski-inline-validation.md`: the Etre study (22 users) found validating after a field is completed improved success by 22% and cut completion time 42% vs submit-only. Silver argues live validation causes interruptions, judder and screen-reader noise and that good questions and hints make errors rare. Reconcile: validate on submit by default. For fields whose rules users can't know in advance (username availability, password rules) give live, positive guidance such as a checklist, never errors before users finish. Test with assistive technology.
- `references/data-driven/conversion-checkout-forms-signup-landing.md` cites Baymard: in checkouts marking only optional fields led 32% of users to skip a required field, so mark both. Silver says mark optional only. Trust Baymard for long e-commerce checkouts. Silver's rule fits short forms and one-question-per-page flows where the issue rarely arises.
- `references/books/web-form-design-wroblewski.md` allows several label alignments (left-aligned for unfamiliar data) and "mark the minority". Silver is stricter: top labels and optional marking always. Both agree on avoiding labels inside inputs and avoiding optional fields.
- `references/books/baymard-checkout-ux.md` and the checkout file accept paired short fields (City + ZIP, Expiry + CVC) as an exception to single column. Silver allows almost no exceptions. Either is defensible. Never pair unrelated fields.
- `references/interaction/accessibility.md` and `references/books/wcag-22.md` agree on labels, focus visibility, error identification and target size. Silver's patterns are a practical way to meet WCAG 3.3.1–3.3.3 and 2.4.7.

## Best quotes (< 25 words each, max 5)
- "Nobody wants to sign up to your service — they just want to access whatever it is you offer." (Ch. 1 excerpt)
- "Quirky and minimalist interfaces don't make users feel awesome — obvious, inclusive, and robust interfaces do." (Ch. 1 excerpt)
- "So often, the basic experience is the best and most performant one." (Ch. 1 excerpt)
- "Error messages are not an opportunity to promote your brand's humorous tone of voice." (Ch. 1 excerpt)
- "Boring design is not always popular with designers. But it's usually great for users." (blog, 2024)

## Related
- `references/books/web-form-design-wroblewski.md`, `references/books/wroblewski-inline-validation.md`, `references/books/baymard-checkout-ux.md`
- `references/data-driven/conversion-checkout-forms-signup-landing.md`, `references/psychology/cognition-memory-cognitive-load.md`
- `references/interaction/accessibility.md`, `references/books/wcag-22.md`, `references/books/inclusive-components.md`, `references/books/aria-apg.md`
- GOV.UK Design System (question pages, error summary, check answers patterns); Caroline Jarrett, *Forms that Work*

## Sources
- Smashing Magazine, "Form Design Patterns Book Excerpt: A Registration Form" (Oct 2018), official excerpt of Chapter 1: https://www.smashingmagazine.com/2018/10/form-design-patterns-excerpt-a-registration-form/
- Smashing Magazine, book release page with chapter descriptions: https://www.smashingmagazine.com/2018/10/form-design-patterns-release/
- Silver, "Form design: from zero to hero all in one blog post" (2019): https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/
- Silver, "Form design: when to use the number input" (2019, excerpt from Ch. 2): https://adamsilver.io/blog/form-design-when-to-use-the-number-input/
- Silver, "The problem with live validation and what to do instead" (2017): https://adamsilver.io/blog/the-problem-with-live-validation-and-what-to-do-instead/
- Silver, "The problem with disabled buttons and what to do instead" (2023): https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/
- Silver, "Don't mark required fields with an asterisk" (2023): https://adamsilver.io/blog/how-to-highlight-required-and-optional-form-fields/
- Silver, "Form design: multiple inputs versus one input" (2020): https://adamsilver.io/blog/form-design-multiple-inputs-versus-one-input/
- Silver, "Don't be afraid of a long list of radio buttons" (2024): https://adamsilver.io/blog/dont-be-afraid-of-a-long-list-of-radio-buttons/
- Silver, "Are there exceptions to the 'avoid multi-column forms' rule?" (2025): https://adamsilver.io/blog/are-there-exceptions-to-the-avoid-multi-column-forms-rule/
- Silver, "End with one thing per page" (2025): https://adamsilver.io/blog/end-with-one-thing-per-page/
- Downloads saved under books/free/form-design-patterns/
