---
title: "Baymard Institute — Cart & Checkout UX Research (free articles)"
author: "Baymard Institute (Christian Holst, Jamie Holst, Edward Scott, Lars Söderlund, Iva Olah, Sonia Sousa, Kathryn Reeves, Carl MacDonald)"
year: 2010–2026 (ongoing; most articles cited here 2017–2026)
domains: [data-driven, conversion, forms, checkout, mobile, trust, e-commerce]
evidence: "moderate"
---

# Cart & Checkout UX Research (free articles) — Baymard Institute

Use this when: designing or auditing any checkout, sign-up, address, or payment form; deciding which fields to cut, hide, autofill or validate; writing error messages, field labels and helper text; arguing for checkout work with stakeholders; checking a "best practice" claim about forms against Baymard's own published numbers.

Source: https://baymard.com/blog and https://baymard.com/research-articles/* (the free articles; the 700+ paid "Premium" guidelines were not read). Read in full: 47 articles. Cart & checkout core: Checkout UX 2025 (10 pitfalls), 5 ways to minimize form fields (2024), 50 cart abandonment statistics (2026 page), why customers abandon (2011), guest checkout prominence, delayed account creation, password requirements, one-page checkouts, accordion checkouts, "Apply" buttons, billing = shipping, Address Line 2, automatic address lookup, ZIP autodetection, address validator, phone-field explanation, seemingly unnecessary info, delivery date vs shipping speed, shipping cost on product pages, payment method selection, card number spacing, expiry date format, preserving card data on error, perceived security (2016/2025 update), site seals (2013), visually reinforced card fields, order confirmation page, back-button expectations. Forms: inline validation, adaptive error messages, validations vs warnings, required + optional marking, multi-column forms, labels above fields, inline labels, input masks, touch keyboards, drop-downs, field width, inline help, avoiding repeat errors, 6 mobile checkout considerations. Guides: checkout UX guide, payment UX, reduce cart abandonment, form design, input fields. Plus the research methodology page. Six URLs redirected to index pages and were not read (captchas, linear checkout, declined cards, form field descriptions, error-fields-only, confirm-email).

## The big idea (3 sentences)
Most checkout abandonment that is not "just browsing" comes from friction a team can remove: surprise costs, forced accounts, too many visible fields, bad error recovery, missing payment options and weak trust cues. Baymard pairs moderated think-aloud testing (4,400+ participant/site sessions over 25 rounds) with manual benchmarking of ~330 top US/EU sites against 700+ guidelines, so each article gives both "what broke for users in the lab" and "what share of big sites still do it". The recurring lesson is that perceived effort and uncertainty matter more than the literal number of steps, so the job is to remove fields, decisions and doubt, and to make recovery from inevitable errors fast.

## Core concepts
- **UX-fixable vs not fixable abandonment** — documented cart abandonment averages 70.22% (mean of 50 third-party studies, 2006–2025, range ~55–84%). In Baymard's US survey, 42% of shoppers abandoned because they were "just browsing". Among the rest the reasons are: extra costs 40%, delivery too slow 20%, didn't trust site with card 19%, forced account 18%, too long/complicated 17%, errors/crashes 17%, returns policy 13%, couldn't see total upfront 12%, card declined 10%, not enough payment methods 9% (respondents could pick several; the editions differ by a point or two).
- **Form fields, not steps** — the average checkout is 5.1 steps and has barely changed since 2012. The average number of form fields fell from 12.7 (2019) and 11.8 (2021) to 11.3 (2024); Baymard says most sites need about 8 fields (12–14 form elements including selectors). Baymard's benchmark shows UX performance falling as field count rises; step count matters only past about 8 steps.
- **Perceived security ≠ technical security** — users judge security by gut feel. The card section looks "safer" when it is visually set apart (border, background, padlock, seal nearby). Well-known brands need fewer cues. Layout bugs on the payment step make users suspect phishing or a hack.
- **Validation vs warning** — a validator blocks; a warning flags a likely mistake and lets the user continue. Use validators only where the rule can never reject valid input (empty required field, expired card). Use warnings for anything fuzzy (unusual email, a short street name).
- **Adaptive error messages** — the back end already knows which sub-rule failed ("missing @", "ZIP too short"), so the message should say so. 98% of benchmarked sites show generic messages.
- **Perceived page = back-button target** — if a view changes about 70% of the screen, or feels like a new page (overlay, filter state, accordion step), users expect Back to return to it. 59% of sites break this in at least one of four common cases.
- **Severity × frequency** — each guideline is rated interruption / disruptive / harmful and few / several / most / nearly all users. Small fixes add up: "Address Line 2" is "one of those 10–20 smaller improvements" that take a checkout from good to great.

## Actionable heuristics for product design
**Costs and delivery**
- When a product's shipping cost could change the purchase decision, show an estimate on the product page (IP-geo, last-used address, or a range) with its assumption stated ("for California"), because 64% of test users looked for shipping cost there and 43% of sites don't show it.
- When showing totals, put every fee, tax and shipping in the cart and never introduce a new cost or condition on review or payment, because extra costs are the #1 non-browsing abandonment reason (≈39–40%) and late surprises erode trust.
- When listing shipping options, show a delivery date or date range ("Arrives Tue 4 Apr") instead of "3–5 business days", and show the order cutoff as a countdown ("order in the next 43 min"). Users mis-compute business days, time zones and processing time; 41–48% of sites don't show dates and 83% don't use countdowns. Treat the date as a promise: pad it enough to keep it, and keep ranges under about 5–7 days.
- When the business offers pickup or local delivery, list every fulfillment option inside the shipping selector, because users who change their mind at that step otherwise have to go back to the cart (52% of sites fail this).

**Accounts**
- When a user reaches account selection, make "Guest checkout" the first, button-styled, explicitly labeled option. Use the word "Guest", not "Continue with email". 62% (2025) or 47% (2023) of sites fail this, and 24% of US shoppers (2022 survey, n = 4,384) had abandoned because of forced account creation.
- When you want accounts, offer creation on the confirmation page as a single password field (the details are already entered) with 3–5 concrete benefits, and say at the guest step that this will be offered. 42% of sites interrupt guests earlier, and a second mid-checkout prompt reads as "pushy" or even deceptive.
- When an email matches an existing account, still allow guest checkout, because forgotten passwords plus slow reset emails caused ≈18.75% abandonment among existing-account users in testing.
- When setting password rules for an ordinary shop, require only 6–8 characters minimum, no composition rules, and no low max length. Put security in throttling, CAPTCHA, optional 2FA and re-entering card details for new addresses, because 82% of sites over-constrain passwords and the cost shows up at the next sign-in.

**Fields**
- When designing the default form, cut it to about 8 fields: one "Full name" field (42% of participants typed their full name into "First name"), "Address Line 2" behind a link (30% stalled on it), coupon behind a link, and billing = shipping as a pre-ticked checkbox with the billing fields hidden. Exceptions: gift and B2B sites where most orders use different addresses.
- When collecting an address, offer full automatic address lookup ranked by proximity to the user's IP and tolerant of typos, while keeping the normal fields visible for manual fallback (69% fell back to manual entry when suggestions failed). Add an address validator (shown as an overlay) as a backstop, because 9% of manually typed addresses in one round contained errors.
- When lookup isn't possible, autodetect city and state from the ZIP the moment its last digit is typed (not on blur). Place city and state below the ZIP field and keep them editable, because a missing override was the sole cause of one client's negative A/B result.
- When a field is optional or uncommon, hide it behind a link or remove it. Don't use radio buttons or drop-downs for optional input, because optional fields still draw attention and slowed steps by 5–30%.
- When marking fields in a checkout or long form, mark both: asterisk on required fields and "(optional)" next to the label on optional ones. With only optional fields marked, 32% of users skipped a required field. Marking only required fields did no better. Page-level "All fields required" notes are missed. Only 14% of desktop sites and 6% of mobile sites mark both.
- When you need phone, date of birth or gender, explain why inline next to the field ("Only used if there's a problem with delivery"), make it optional, or drop it. 14% of shoppers would never give a phone number and 27% are reluctant to give a date of birth, and some users enter fake numbers. For age checks, ask only for the birth year.
- When a choice has fewer than ~5 options, use radio buttons or buttons. For more than ~10 options users can type, use an autocomplete (country) or a text field. Drop-downs are acceptable only for long lists users can't type or that need structured answers. 55% of users opened an optional drop-down just to see what was inside.
- When laying out forms, use one column. Only put 2–3 inputs on a line when they form one entity (city/ZIP, expiry/CVC), because multi-column layouts lead users to skip or misread fields (16% of sites do this).
- When labeling, put labels above fields with full-width inputs on mobile. Never use placeholder-only labels, and make each label make sense on its own ("Billing phone", not "Phone" under a heading), because on a phone the keyboard covers about half the screen and the heading scrolls out of view.
- When sizing inputs, match width to the expected input (CVV ~4 characters, ZIP short, email ~25+), because a field of the wrong length makes users doubt they understood the label.

**Typing aids (mobile especially)**
- When a field is numeric (card, ZIP, phone, CVV), invoke the numeric keyboard on every numeric field. Turn off autocorrect for names, addresses and email, and auto-capitalization for email. On a 2015 iPhone the numeric keypad's keys were about 5× larger, and when only some numeric fields got it, users wondered whether the others expected letters.
- When an input has a fixed format (phone, date, card), accept any spacing or punctuation and normalize it, or use a localized input mask with visible empty placeholders. 89% of users ignored formatting examples. Enable masks only in markets whose format you have verified.
- When taking card numbers, auto-format with spaces as the user types (4-4-4-4; AMEX 4-6-5), allow typed spaces, don't cap the length at 16, detect card type from the first digits, run Luhn validation live, and format expiry as MM / YY like the physical card (72% of sites don't). Label the security code "Security code" with a tooltip showing where it is; 38% of users stopped at that field.

**Errors and recovery**
- When validating inline, check on blur or once the input reaches its expected length, never while the user is still typing for the first time. Clear the error on the keystroke that fixes it, and show positive confirmation (a checkmark) for valid fields. 31% of sites have no inline validation.
- When an error is shown, make it specific to the failed sub-rule (start with the 4–7 messages for card, name, CVV, password, phone and email that fire most and lead to the most abandonment). Scroll to the field, or to a summary if there are several errors. For sign-in, give specific messages only when rate limits and attempt caps are in place.
- When any submission fails, keep every entry, including card number, expiry and CVV. Use two-stage validation (non-sensitive fields on the front end first), field-by-field Luhn checks, or a separate payment step to stay PCI-compliant. 34% of sites clear card data, and in testing this alone caused abandonment.
- When a step requires "Apply" or "Save" before "Continue", remove it and auto-save, because users skip the extra button or mistake it for the primary one. Restyling it doesn't help. Keep "Apply" only for promo and gift codes, and highlight the price change it causes.
- When using overlays, accordions, filters or AJAX steps, push a history entry (history.pushState) for every view users will see as a page, so Back closes the overlay or returns to the previous step instead of dumping them in the cart.

**Payment, trust and flow**
- When offering payment, preselect the dominant method (cards in the US) with its fields open. Add at least one wallet or local method (11% abandoned for a missing method; 6% for a declined card, where a wallet can serve as fallback). Change the main button to "Continue to PayPal/Klarna" when that method is chosen, and never redirect users without an explicit choice.
- When the payment form appears, set the card fields apart (border or background plus 1–2 seals or a padlock inside that area). Remove ads, cross-sells and newsletter prompts from checkout; offer them on the confirmation page instead (the checkout guide calls this an "enclosed" checkout).
- When users review an accordion checkout, collapse finished steps into readable summaries rather than bare headers, and keep a running order summary visible, because users double-check and otherwise reopen each step.
- When pitching the work, quantify only the UX-caused share. For example: of 35,000 monthly abandoners, assume ~20% are fixable and recover 10% of those (700 orders/month), then multiply by AOV. Sequence quick wins as guest checkout and early totals first, then error handling and autofill. Retargeting and discount pop-ups don't fix UX-caused abandonment.

## Evidence & caveats
- **Method strength:** large, repeated qualitative think-aloud testing (Baymard cites 4,400+ participant/site sessions and 2,700+ checkout issues distilled into 134 checkout guidelines) plus manual expert benchmarking, plus US surveys (~1,000–4,400 adults). This is strong for finding what breaks and for prevalence across top sites. It is weak for effect sizes: Baymard itself says the lab work is not meant to estimate exact proportions. Its own binomial argument (20 participants find 95% of issues affecting ≥14% of users) concerns discovery, not lift.
- **The "35.26% conversion gain" and "$260B recoverable" figures are modelled estimates**, not experiments. Lab percentages ("42% typed full name into First Name", "32% missed a required field") come from specific test rounds and sites, often small subsamples. Treat them as direction plus rough magnitude.
- **Benchmark percentages move between editions** (guest prominence 47% → 62% failing; adaptive errors 94% vs 98%). Quote the year. Survey reasons vary by edition (18–24% for forced accounts).
- **Dated pieces:** the 2010–2015 articles (site seals with Norton/McAfee/TRUSTe, mobile keyboards on iPhone 4S/6S, landscape-label advice, "floating labels untested") predate today's OS-level autofill, passkeys, Apple Pay ubiquity and modern browsers. Their logic still holds, but check their specifics.
- **Opinion and marketing:** the 2026 "guides" (checkout UX guide, payment UX, reduce abandonment) are content-marketing summaries by a content manager with product plugs. They restate the research and add uncited figures. The ROI example uses illustrative numbers.
- **Trust seals:** the seal studies are stated-preference surveys ("which badge gives you the best sense of trust"), and a made-up seal beat most real SSL seals. Seals raise perceived security, not actual security, and Baymard itself recommends A/B testing them. Under techne's ethics gate, don't use seals or padlocks to imply protections you don't have.
- **Ethics flags:** the confirmation-page cross-sell tip suggests time-limited add-on discounts ("in the next 5 minutes…"). This is acceptable only if the window and discount are real. A cutoff countdown is fine because it shows a true shipping deadline. Baymard explicitly calls repeated mid-checkout account prompts potentially deceptive.
- Conflict of interest: Baymard sells audits and research to the companies it benchmarks, and discloses this in the seal study.

## Disagreements with other references
- `references/data-driven/conversion-checkout-forms-signup-landing.md` says to mark optional fields "rather than asterisking required ones (when most are required)". Baymard's testing says mark both in checkouts and long forms, and found that marking only optional fields led 32% of users to skip a required field. Trust Baymard for long and checkout forms. Short 2–3 field forms can use the lighter convention.
- The same file calls floating labels "an acceptable compromise". Baymard (2013) called them untested and warned about cramped error states. Neither has strong data. Prefer labels above the field, and if you use floating labels, test the error state.
- The same file lists Baymard's "~5.1 steps / ~11.3 form elements" as [unverified] and the abandonment average as 70.19% over ~49 studies. Baymard's own 2024 article confirms 5.1 steps and 11.3 form *fields*. The current list is 70.22% across 50 studies. Upgrade those tags.
- The same file says single-page vs multi-step is [contested]. Baymard agrees the format matters less than total fields and clarity (its 2011 one-page piece argues an equal-fields two-page version would likely tie). Keep the [contested] tag for the format question.
- `references/psychology/cognition-motor-control-and-timing.md` and `references/books/parhi-thumb-target-size.md` give target-size numbers. Baymard adds no size numbers, but it supports the same mechanism: bigger keys on purpose-built keyboards meant fewer typos.

## Best quotes (< 25 words each, max 5)
- "if a user fails to see the “Guest Checkout” option, it’s as bad as if it wasn’t offered at all" (Make Guest Checkout Prominent, 2023)
- "Inline labels are a prime example of false simplicity." (Mobile Form Usability: Never Use Inline Labels, 2013)
- "The checkout is not a merchandising surface." (Payment UX guide, 2026)
- "If your checkout is broken, a discount pop-up won’t fix it; it just makes the broken experience cheaper." (Reduce Cart Abandonment, 2026)

## Related
- references/data-driven/conversion-checkout-forms-signup-landing.md — main checkout/forms playbook; this note supplies the primary-source numbers
- references/data-driven/conversion-paywalls-pricing-subscriptions.md — the subscription equivalent of the payment step
- references/process/states-and-edge-cases.md — error, empty and recovery states ("never lose user work")
- references/interaction/accessibility.md — WCAG 3.3.x error identification and suggestion; labels tied to inputs
- references/psychology/behavior-ethics-dark-patterns.md — trust seals, urgency and nagging account prompts
- references/books/parhi-thumb-target-size.md, references/books/mackenzie-hci-empirical.md — the motor-control basis for keyboards and targets
