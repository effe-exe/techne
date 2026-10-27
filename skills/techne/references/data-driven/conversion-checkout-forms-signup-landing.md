# Conversion: Checkout, Forms, Signup/Login, CTAs, Trust, Search, Landing Pages, App Store Pages

> **Use this when:** designing or auditing checkout, any form, signup/login, CTA and button copy, social proof/trust elements, search & navigation, landing pages, or app store product pages.
> **Also load when:** someone cites a famous A/B test ("Obama got $60M from a button") and you need the real numbers and caveats.
> **Skip when:** the work is a paywall/subscription screen (load `conversion-paywalls-pricing-subscriptions.md`) or onboarding/retention (load `conversion-onboarding-activation-retention.md`).

Evidence tags: **[strong]** · **[moderate]** · **[weak/anecdotal]** · **[contested]** · **[unverified]**.

---

## 0. Point of view

- **Remove before you add.** The most reliable conversion gains in forms and checkout come from deleting fields, steps, surprises, and doubts — not from adding persuasion.
- **Surprise is the enemy.** Unexpected costs, unexpected account requirements, unexpected errors. Show the full truth early.
- **Copy famous tests' *method*, never their *result*.** A winner in 2008 on a political campaign page tells you nothing about your button today.

---

## 1. Checkout (e-commerce)

### Baseline numbers — Baymard Institute
- Average documented cart abandonment ≈ **70.22%** (Baymard's list of 50 studies 2006–2025, range ~55–84%; Sept 2025 update) **[strong — aggregate of many studies, but definitions vary]**.
- Reasons for abandonment from Baymard's US survey (respondents could pick several; ~1,000+ US adults; check latest edition):
  - Extra costs too high (shipping, tax, fees) — top reason, ≈ **39%** on Baymard's own page (a secondary article reports 48% for a newer edition **[unverified]**).
  - Site wanted me to create an account — ≈ **18–19%** in most editions **[strong — Baymard survey]**; 24% in the 2022 survey (n = 4,384). Quote the edition year.
  - Too long/complicated checkout — ≈ **18%** (secondary reports up to 22%) **[moderate]**.
  - Didn't trust site with card details, couldn't see total upfront, slow delivery, returns policy, payment errors, too few payment methods — the rest of the list.
  - Note: a large share of "abandonment" is browsing/price comparison (people "just looking"), which design cannot and should not fix.
- The average checkout has **5.1 steps and 11.3 form fields** (Baymard 2024 benchmark; ~8 fields is achievable for most sites) **[moderate]**; fields, not steps, drive the burden. Baymard estimates large e-commerce sites could gain ~35% conversion from better checkout design **[weak — modelled estimate, not an experiment]**.

### Checkout rules (high-confidence, Baymard + broad practice)
1. **Show total cost early** — shipping/tax estimate on product or cart page. Surprise fees are the #1 reason. Hiding fees until checkout is also what makes drip pricing "work": in StubHub's field test users spent ~21% more and were 14.1% more likely to buy (Blake et al. 2021) — the reason regulators mandate all-in prices (see `psychology/behavior-pricing-and-choice.md` §3.5).
2. **Guest checkout, prominent** — first, button-styled, labelled "Guest". Offer account creation *after* purchase ("Save your details for next time — just add a password"). Allow guest checkout even when the email matches an existing account. Password rules: 6–8 characters minimum, no composition rules.
3. **Minimize fields:** single "Full name" when you don't need split names; hide "Address line 2" behind a link; derive city/state from ZIP/postcode where reliable; default billing = shipping (checkbox checked).
4. **Address autocomplete** and **payment wallets** (Apple Pay, Google Pay, PayPal, Shop Pay, local methods like iDEAL/Pix/UPI) reduce typing; offer them above the form.
5. **Correct mobile keyboards:** `inputmode="numeric"` for card/ZIP, `type="email"`, `type="tel"`; proper `autocomplete` attributes (`cc-number`, `postal-code`, `email`, `given-name`…) for browser autofill. **[strong — platform behaviour]**
6. **Visible security cues near the card field** (lock icon, short reassurance, recognized payment logos). Baymard reports perceived security is driven by visual cues around the card form, not technical security **[moderate]**.
7. **Never clear fields on error** — including card number, expiry and CVV (34% of sites clear card data; use two-stage validation to stay PCI-compliant). Card number auto-spaced 4-4-4-4 (AMEX 4-6-5) with a live Luhn check; expiry as MM / YY. Error messages name the failed sub-rule ("missing @"), not a generic "invalid" (98% of sites are generic).
8. **Order summary always visible** (collapsible on mobile) with editable quantities.
9. **Progress indicator** for multi-step checkouts; single-page vs multi-step is **[contested]** — what matters is total effort and clarity.
10. **Delivery DATE, not "3–5 business days"**, per shipping option, with the order cutoff as a countdown ("order in the next 43 min"). No "Apply/Save" buttons inside steps — auto-save; keep "Apply" for promo codes only. → references/books/baymard-checkout-ux.md
11. **Order bumps / pre-payment upsells:** keep optional steps off the critical path (W3C COGA "make short critical paths") — place upsells after payment or make them skippable without reading, and guardrail abandonment for older and cognitively impaired segments.
12. **Promo code field:** a prominent empty coupon field sends users off-site hunting for codes; collapse it behind "Have a promo code?" **[moderate — Baymard and practitioner consensus]**.

### Speed
- Deloitte/Google "Milliseconds Make Millions" (2020): 0.1s mobile speed improvement associated with ~8% retail conversion lift **[moderate — commissioned study, observational + modelled]**.
- "53% of mobile visits abandoned if load > 3s" (Google/SOASTA 2016) **[contested — methodology not public]**. "Amazon: 100ms = 1% sales" (Greg Linden, 2006 slides) **[weak/anecdotal, dated]**.
- Practical: target Core Web Vitals "good" thresholds (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, per Google's web.dev) **[strong — official thresholds]**.

---

## 2. Forms (any form)

### Evidence
- **Inline validation** — Wroblewski with Etre (2009), 22 participants, 6 form variants: vs submit-time validation, inline validation produced **+22% success rate, −22% errors, +31% satisfaction, −42% completion time, −47% eye fixations** (*A List Apart*, "Inline Validation in Web Forms") **[moderate — 22 participants, within-subject; "errors" = errors left at submit]**. Key nuance: validate easy fields (name, email, address) **on blur**; fields with strict rules (username availability, password rules) got **live validation with a short delay** in every variant, and that is where people want help sooner. Showing messages on focus ("before and while") was worst on every measure. **Show success on hard fields, persistently and in words** ("Username available"); a bare check on easy fields reads as "correct" vs "valid", and fading success messages were missed or caused worry. → references/books/wroblewski-inline-validation.md
- **Label placement** — top-aligned labels were fastest to complete in eye-tracking (Penzo, UXmatters, 2006) **[moderate]**; also best for mobile and localization. Placeholder-as-label hurts memory and accessibility (NN/g, "Placeholders in Form Fields Are Harmful", 2014) **[moderate-strong]**. Floating labels are untested by Baymard (2013 called them untested and warned about cramped error states); if used, test the error state **[weak]**.
- **Fewer fields** — the direction is robust; specific famous numbers are often unverifiable. E.g., "Expedia removed one field and made $12M" (Expedia's "Company" field story, widely retold from a 2010 conference talk) **[unverified — no primary source located]**. Imagescape "11 → 4 fields, +120% conversions" (HubSpot-cited) **[weak/anecdotal]**. Don't quote these as facts.
- **Single column** layouts are generally faster to scan than multi-column (CXL Institute study, 2016 **[weak/moderate]**; consistent with NN/g guidance). Exception: logically paired short fields (City + ZIP, Expiry + CVC).

### Form checklist
- [ ] Every field earns its place: who uses this data, and why now? Move "nice to know" fields after conversion.
- [ ] In checkouts and long forms, mark **both** (asterisk for required, "(optional)" for optional); with only optional fields marked, 32% of test users skipped a required field (Baymard) **[moderate]**. Short 2–3 field forms can mark optional only.
- [ ] Error messages: specific, adjacent to the field, say how to fix ("Enter a 5-digit ZIP code"), never blame.
- [ ] Don't use dropdowns for < ~5 options (use radio buttons/segmented control) or for things users type faster (country with autocomplete, birth year).
- [ ] Accept flexible formats (spaces in card numbers, phone formats); normalize server-side.
- [ ] Password: show/hide toggle; show rules upfront; allow paste and password managers (NIST SP 800-63B recommends allowing paste and dropping composition rules in favour of length + breached-password checks **[strong — standard]**).
- [ ] Touch targets ≥ 44×44 pt (Apple HIG) / 48×48 dp (Material) **[strong — platform guidance]**.
- [ ] Primary submit button labeled with the outcome ("Create account", "Pay $42.10"), not "Submit".
- [ ] Accessible: labels programmatically associated, errors announced (ARIA live regions), visible focus, WCAG 2.2 AA contrast.

---

## 3. CTAs and buttons

- **Specific verb + object** beats generic ("Start free trial", "Get my plan" vs "Submit", "Continue"). First-person ("Start *my* trial") has anecdotal wins (Unbounce/ContentVerve case, ~90% lift claimed) **[weak/anecdotal — single tests, often underpowered]**.
- **Button color has no universal winner.** HubSpot's red-vs-green test (2011, +21% for red) is a single-page anecdote **[weak/anecdotal]**. What matters: contrast with surroundings, visual hierarchy (one primary per view), consistency.
- **One primary action per screen.** Secondary actions as text/ghost buttons. Competing CTAs split attention.
- **Microcopy under CTA** reduces anxiety: "No credit card required", "Cancel anytime", "Takes 2 minutes" — only if true.
- **Placement:** above the fold is not mandatory; a CTA should appear where the user has enough information to act. Long-form pages for complex/expensive offers often benefit from repeated CTAs after key sections.
- **Fitts's law** (Fitts 1954, robust **[strong]**): bigger, closer targets are faster to hit — size and position primary CTAs accordingly (thumb zone on mobile; bottom-anchored primary buttons in mobile flows).
- **Hick–Hyman law** (Hick 1952; Hyman 1953 **[strong for simple choice reaction time]**): more choices → longer decision time; it does not mean "menus must have ≤ 7 items".

**Myth flag:** "7±2 items in a menu" misapplies Miller (1956), which concerned short-term memory span for unrelated items, not recognition-based menus where options are visible **[myth]**; Cowan (2001) revised working-memory capacity to ~4 chunks anyway.

---

## 4. Signup and login

### Patterns that tend to work
- **Social / platform sign-in** (Sign in with Apple, Google, Microsoft for B2B) reduces typing and password burden. Apple requires offering Sign in with Apple (or an equivalent privacy-focused option) when an iOS app offers third-party social login (App Review Guideline 4.8; check current wording) **[strong — policy]**.
- **Passkeys:** platform vendors (Google, Apple, FIDO Alliance) report faster sign-in and higher success rates than passwords **[moderate — vendor-reported; exact figures vary by source]**. Offer as the default for returning users on supported devices; keep a fallback.
- **Magic links / one-time codes:** good for low-frequency apps; bad when users switch devices or the email arrives slowly. Auto-fill OTP from SMS/email (iOS `textContentType = .oneTimeCode`; web `autocomplete="one-time-code"`) **[strong — platform feature]**.
- **Email-first identifier step** ("Enter your email" → system routes to login or signup) avoids users guessing whether they have an account.
- **Don't confuse signup and login screens visually** — wrong-door errors are common; show "Already have an account? Log in" clearly.
- **Defer profile completion** until after first value.

### Anti-patterns
- Password re-entry ("confirm password") fields — replace with show/hide toggle **[moderate — widely recommended; reduces errors]**.
- Forced username + email + phone at signup.
- CAPTCHAs on first try; prefer invisible risk-based checks.
- Pre-checked marketing consent: illegal under GDPR (consent must be opt-in; CJEU *Planet49*, 2019) **[strong — law]**.

---

## 5. Social proof and trust signals

### Evidence
- **Descriptive norms work, with caveats:** the hotel-towel study (Goldstein, Cialdini & Griskevicius, *JCR* 2008) found norm-based messages increased reuse vs environmental appeals (~44% vs ~35%) **[contested]** — later replications found smaller or null effects (e.g., Bohner & Schlüter 2014). Social proof is real (Cialdini, *Influence*, 1984 **[strong as general phenomenon]**) but specific copy effects are fragile.
- **Review volume and ratings:** Spiegel Research Center (Northwestern, 2017) reported purchase likelihood rose sharply with the first few reviews and that near-perfect 5.0 averages were trusted less than ~4.2–4.5 **[moderate]**.
- **Operational transparency** (showing the work being done, e.g., a live map of your driver) increases perceived value and satisfaction (Buell & Norton, *Management Science* 2011; Buell, Kim & Tsay 2017) **[moderate-strong]**.

### Rules
- Use **real, specific, attributable** proof: "Used by 3,200 design teams including X" with logos you have permission to show; testimonials with name/role/photo; rating + count.
- **Proximity:** place trust elements next to the moment of doubt (security cues by card field; return policy by "Add to bag"; "Cancel anytime" by trial CTA).
- **Live activity counters** ("12 people are looking at this") only if real and meaningful. The UK CMA secured commitments in 2019 from major hotel booking sites (including Booking.com and Expedia) to stop misleading pressure-selling and scarcity claims **[strong — regulator action]**. Fake scarcity/urgency is a dark pattern (Mathur et al. 2019).
- Badges and seals raise **perceived** security only: in Baymard's stated-preference survey a made-up seal beat most real SSL seals **[weak — survey, not behaviour]**. Never use seals or padlocks to imply protection you don't have.

---

## 6. Search and navigation

- **Search is a high-intent channel:** users who search are usually closer to conversion; investing in search quality often pays off more than visual changes (practitioner consensus; Baymard e-commerce search benchmarks **[moderate]**).
- **Must-haves:** autocomplete with query suggestions (not just product dumps), typo tolerance, synonyms ("sofa" = "couch"), searching by attributes/specs and by problem ("waterproof jacket for kids"), scoped search, persistent query in the field after search, "no results" recovery (see empty states).
- **Filters:** show applied filters as removable chips; show result count; don't reload/jump scroll on each filter tap on mobile; offer category-specific filters (Baymard finds many sites lack them **[moderate]**).
- **Navigation:** label categories in users' language (card sorting, tree testing — Optimal Workshop-style methods); avoid "mystery meat" icons without labels. Bottom tab bars on mobile: 3–5 destinations (platform guidance, Apple HIG/Material **[strong — guidance]**).
- **Hamburger menus** reduce discoverability of hidden items vs visible navigation (NN/g, 2016 quantitative study: hidden navigation used less and slower **[moderate]**).
- **Scrolling myth:** "users don't scroll" is false; NN/g eye-tracking (2018) found ~57% of viewing time above the fold and ~74% within the first two screenfuls — people scroll, but attention decays, so prioritize content order **[moderate-strong]**.
- **F-pattern** (Nielsen 2006) describes scanning of poorly structured text, not a layout to aim for **[moderate; often misapplied]**.
- **Carousels:** auto-rotating hero carousels get low engagement beyond the first slide (Runyon, Notre Dame data 2013, ~1% clicks **[weak/anecdotal]**; NN/g usability guidance **[moderate]**). Prefer a single strong hero.

---

## 7. Landing pages

Structure that reliably performs (practitioner consensus **[moderate]**; validate per product):
1. **Headline = outcome for a specific audience** ("Payroll for 10-person teams, done in 5 minutes").
2. **Subhead = how/for whom**; **primary CTA**; **visual of the product actually working** (screenshot/video), not abstract stock imagery.
3. **Proof** (logos, numbers, testimonials) high on the page.
4. **Benefits → how it works (3 steps) → objections/FAQ → pricing preview → repeat CTA.**
5. **Message match:** the ad/email/search query promise must match the headline. Mismatch is the most common landing page failure.
6. **One goal per page** for paid traffic; remove global navigation on dedicated campaign pages (commonly tested; effect sizes vary **[weak/anecdotal]**).

### Famous A/B tests — real numbers and caveats
| Test | What happened | Caveats |
|---|---|---|
| **Obama 2008 splash page** (Dan Siroker, Optimizely) | Tested 4 buttons × 6 media. Winner (family photo + "Learn More") signup 11.6% vs 8.26% control = **+40.6% relative**; est. ~2.88M extra emails; "$60M" extra donations is a downstream estimate **[moderate]** | Experiment ran in Dec 2007; videos lost to photos — counter-intuitive; "$60M" is modelled, not measured |
| **Bing ad title colors** (Kohavi et al.) | Slightly different blues/greens/black in ads; replicated on ~32M users; >$10M/yr revenue **[strong — published by experimenters]** | Effect tiny per user, huge at Bing scale; at small scale undetectable |
| **Bing longer ad titles** (Kohavi & Thomke, HBR 2017) | An idea shelved for months; when tested, +12% revenue (>$100M/yr in US) **[strong]** | Lesson is about testing low-priority ideas, not about long titles |
| **Google "41 shades of blue"** | Widely retold (Doug Bowman's 2009 resignation post mentioned testing 41 shades) **[weak/anecdotal]** | Often used to mock data-driven design; real lesson: test where intuition is cheap to verify, but don't outsource vision to tests |
| **Booking.com** | Runs 1,000+ concurrent experiments; most fail (Thomke, *Experimentation Works*, 2020; HBR 2020) **[moderate]** | Same company was subject of 2019 CMA action on pressure-selling — experimentation without ethics guardrails optimizes into dark patterns |

General lesson: most ideas don't win — Kohavi reports only about a third of tested ideas at Microsoft improved their target metric, and lower rates at Bing/Google **[strong]**. **Twyman's law:** any result that looks surprising or too good is probably a bug — check instrumentation and sample-ratio mismatch first (see `statistics-cheatsheet.md`).

---

## 8. App store product page optimization (ASO for designers)

**Platform facts [strong — official docs; verify current limits]:**
- Apple App Store: up to 10 screenshots per device size, up to 3 app preview videos (≤30s); search results show the first ~3 portrait screenshots (or first preview video); **Product Page Optimization** allows testing up to 3 treatments of icon/screenshots/previews against the original; **Custom Product Pages** let you match pages to ad campaigns.
- Google Play: **Store listing experiments** for icon, feature graphic, screenshots, short/long description; custom store listings by country/campaign.

**What tends to work [moderate — consistent vendor evidence; e.g., StoreMaven/AppTweak/SplitMetrics]:**
- **First 1–3 screenshots carry most of the decision** — many visitors never scroll the gallery or read the description (StoreMaven-attributed claim that ~70% decide without reading the full description **[unverified]**).
- Screenshot 1 = core value proposition in ≤ 5–7 words + the app's most compelling real screen. Caption the *benefit*, not the feature name.
- Show the product in use; localize captions and screenshots per market; reflect seasonal moments.
- Icon tests can move tap-through notably; keep it simple, recognizable at small sizes, distinct from competitors.
- Ratings volume and average strongly influence conversion; see ratings prompt rules in onboarding file.

**Ethical line:** screenshots must reflect the real app (App Review Guideline 2.3.3-style accuracy rules); no fake "#1" claims, no implying features that sit behind a paywall without saying so.

---

## 9. Audit checklist (use for any conversion surface)

1. **Clarity:** can a first-time user say what this is, what it costs, and what happens next in 5 seconds?
2. **Friction:** count fields, steps, taps, decisions. What can be removed, defaulted, or deferred?
3. **Anxiety:** where might the user doubt (security, commitment, cost, data)? Is reassurance placed there?
4. **Motivation:** is the benefit concrete and tied to the user's intent (message match)?
5. **Distraction:** is there exactly one primary action?
6. **Accessibility:** contrast, focus, labels, error announcements, target sizes.
7. **Honesty:** would this pass a screenshot in a regulator's report? If you'd be embarrassed, redesign.
8. **Measurement:** primary metric, guardrails, minimum detectable effect, sample size (see `experimentation-playbook.md`).
