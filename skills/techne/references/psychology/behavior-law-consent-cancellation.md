# Behavior: Law & Platform Rules for Persuasive Design (Consent, Subscriptions, Dark Patterns)

Use this when: designing or reviewing cookie/consent banners, permission asks, signup/checkout, subscriptions, free trials, cancellation, account deletion, pricing displays, reviews, or anything for minors.
Use this when: a stakeholder asks "is this legal?" or "competitors do it" - use this to frame risk, then involve real counsel.
Use this when: shipping to the EU/EEA, UK, US (federal + California), or India; or submitting to the App Store / Google Play.

> **Not legal advice.** The agent is a designer, not a lawyer. Use this to design to the spirit of the rules and to flag when legal review is needed. Law in this area moves fast; facts below were checked as of Oct 2026 where marked, otherwise "verify current status."

---

## 0. Design principle that satisfies almost every regime

**Clear, symmetric, truthful, reversible.**
- Clear: material terms (price, period, renewal, data use) before commitment, in plain language, in the main flow.
- Symmetric: rejecting/cancelling is as easy as accepting/subscribing - same channel, comparable steps, comparable prominence.
- Truthful: no false urgency, scarcity, reviews or reference prices.
- Reversible: consent withdrawable, subscriptions cancellable, data deletable, purchases refundable where law requires.

If a design meets these four, it is very unlikely to be the subject of any enforcement listed below.

---

## 1. European Union

### 1.1 Digital Services Act (Regulation (EU) 2022/2065), Article 25 - "online interface design and organisation" [law]
- Providers of **online platforms** must not design, organise or operate interfaces in a way that deceives or manipulates users or otherwise materially distorts or impairs their ability to make free and informed decisions.
- Art. 25(3) lets the Commission issue guidance, explicitly naming: giving more prominence to certain choices when asking for a decision; repeatedly requesting a choice already made, especially via pop-ups; making termination of a service more difficult than subscribing.
- Scope caveat: Art. 25 does **not** apply to practices covered by the UCPD or GDPR (those laws apply instead). In practice: platforms (marketplaces, social, app stores, etc.) are covered; ordinary e-commerce is policed mainly under the UCPD.
- Applies to all platforms since 17 Feb 2024. Max fines up to 6% of worldwide annual turnover.
- Related DSA duties: Art. 28 (high level of privacy, safety and security for minors; no profiling-based ads to minors); Art. 26 (ad transparency labels); Art. 38 (very large platforms must offer a recommender option not based on profiling).

### 1.2 Unfair Commercial Practices Directive (2005/29/EC) [law]
- General ban on misleading and aggressive practices; Annex I "blacklist" bans outright, e.g., falsely stating a product is available only for a very limited time to elicit an immediate decision (fake urgency), and (since Omnibus 2019/2161) fake reviews and undisclosed paid rankings.
- Commission Guidance on the UCPD (Dec 2021) explicitly addresses dark patterns, personalization and data-driven practices.
- The 2024 Digital Fairness Fitness Check found dark patterns, subscription traps and addictive design inadequately addressed; a **Digital Fairness Act** proposal has been expected to add specific rules (e.g., subscription cancellation, dark patterns, addictive design, personalization). Status as of Oct 2026: still proposal/pre-proposal stage per public sources found - **verify current status**.

### 1.3 Consumer Rights Directive (2011/83/EU) [law]
- Art. 8(2): the final order button must be labeled unambiguously, e.g., "order with obligation to pay."
- Art. 22: consent to **any extra payment** must be express; pre-ticked boxes do not count.
- **Withdrawal function (new Art. 11a, inserted by Directive (EU) 2023/2673), applies from 19 June 2026:** for distance contracts concluded via an online interface where a withdrawal right exists, the trader must provide an easy, clearly labeled withdrawal function (e.g., "withdraw from contract here"), available throughout the withdrawal period, with confirmation of receipt. Contracts without a withdrawal right are out of scope. [law - implementation details vary by Member State; verify]
- Germany additionally requires a **cancellation button** ("Kündigungsbutton," §312k BGB, since 1 July 2022) for online-concluded consumer subscriptions: a visible "cancel contracts here" button leading to a simple form and a confirmation.

### 1.4 Price Indication Directive Art. 6a (via Omnibus) [law]
- Any announced price reduction must show the **prior price = lowest price in the preceding 30 days.** Fake "was" prices are unlawful.

### 1.5 GDPR + ePrivacy - consent design [law + regulator guidance]
Key rules:
- Consent must be **freely given, specific, informed, unambiguous** affirmative action (GDPR Art. 4(11)); pre-ticked boxes invalid (CJEU *Planet49*, C-673/17, 2019).
- Withdrawal must be **as easy as giving** consent (Art. 7(3)).
- Data protection by design and by default (Art. 25 GDPR): most privacy-protective settings by default.
- Cookies/trackers not strictly necessary require prior consent (ePrivacy Directive Art. 5(3)).
- Enforcement precedent: CNIL (France), Dec 2021 decisions (announced Jan 2022): Google fined €150M and Facebook €60M because refusing cookies took more clicks than accepting [strong precedent].
- EDPB Cookie Banner Taskforce report (Jan 2023): national regulators broadly agree that a missing reject option on the first layer, pre-ticked boxes, deceptive link-styled "reject," and misleading "legitimate interest" toggles are problematic.
- EDPB Guidelines 03/2022 on deceptive design patterns in social media interfaces (v2 adopted Feb 2023; the EDPB says they apply equally to banners, shops, games and apps): 6 categories, 16 named types - use the type names in critiques. **Overloading**: continuous prompting, privacy maze, too many options. **Skipping**: deceptive snugness, look over there. **Stirring**: emotional steering, hidden in plain sight. **Obstructing**: dead end, longer than necessary, misleading action. **Fickle**: lacking hierarchy, decontextualising, inconsistent interface, language discontinuity. **Left in the dark**: conflicting information, ambiguous wording. → references/books/edpb-deceptive-design-patterns.md
- EDPB Guidelines 05/2020 on consent: cookie walls generally do not produce freely given consent; EDPB Opinion 08/2024 on "consent or pay" models for large online platforms: a binary "consent or pay" will in most cases not satisfy valid consent; offer a free, less-tracking alternative [regulator opinion].

**Consent banner spec (agent default for EU/UK):**
1. First layer: short purpose summary + **"Accept all" and "Reject all" with equal size, color weight, and placement level**, plus "Manage preferences." Equal weight is the floor: per the EDPB, if any data-protection option is visually highlighted, it must be the **most protective** one.
2. No pre-ticked non-essential purposes; "legitimate interest" not used to sneak tracking.
3. Banner doesn't block reading of the policy; no fake "X" that equals accept.
4. Persistent, easy-to-find way to change choices (footer link / settings), reachable in ≤ 2 clicks.
5. Respect the choice: no re-asking on every visit. Re-ask when the purposes materially change (EDPB 03/2022 treats repeated prompting as a deceptive pattern). Where a regulator sets a minimum memory period for a refusal (CNIL recommends at least ~6 months), treat it as a floor, not a re-prompt schedule [regulator guidance, verify].
6. Copy at reading-level a teenager can follow; name third-party categories.
7. Accessible: focus trap correct, keyboard operable, screen-reader labels, contrast compliant.

### 1.6 EU AI Act (Regulation (EU) 2024/1689) Art. 5(1)(a)-(b) [law]
- Prohibits AI systems that deploy subliminal, purposefully manipulative or deceptive techniques, or exploit vulnerabilities (age, disability, social/economic situation), materially distorting behavior in a way that causes or is likely to cause significant harm. Applies since 2 Feb 2025. Relevant for AI-driven personalization, chat assistants and dynamic persuasion.

---

## 2. United Kingdom

- UK GDPR + PECR mirror EU consent rules; ICO and CMA joint paper "Harmful design in digital markets," Aug 2023.
- **Digital Markets, Competition and Consumers Act 2024**: CMA can directly enforce consumer law with fines up to 10% of global turnover (in force April 2025). Adds banned practices including fake reviews. A **subscription contracts regime** (clear pre-contract info, reminders, easy exit, cooling-off) was legislated with commencement expected from 2026 - **verify commencement date**.

---

## 3. United States

### 3.1 Federal
- **FTC Act §5** (unfair or deceptive acts) + **ROSCA** (Restore Online Shoppers' Confidence Act, 2010): online negative-option (auto-renew) sales must clearly disclose material terms before billing info, obtain express informed consent, and provide a **simple** cancellation mechanism. This is enforceable now regardless of the rule below.
- **"Click-to-cancel" (amended Negative Option Rule):** finalized Oct 2024, required cancellation as easy as signup and limited save attempts; **vacated in full by the 8th Circuit on 8 July 2025** (procedural grounds). As of 2026 reports, the FTC opened a new negative-option rulemaking; whether it revives the 2024 text is unconfirmed - **verify** [checked Oct 2026 via secondary sources].
- **Enforcement examples:**
  - *FTC v. Amazon* (Prime enrollment/cancellation "Iliad" flow): settled 25 Sept 2025 for **$2.5B** ($1B civil penalty + $1.5B refunds); order requires clear consent and cancellation as easy as signup [strong precedent].
  - *FTC v. Epic Games* (Fortnite), Dec 2022: $245M for dark patterns causing unwanted purchases (plus $275M COPPA penalty) [strong precedent].
- **FTC Consumer Reviews and Testimonials Rule** (effective Oct 2024): bans fake reviews, buying positive reviews, review suppression, fake social-media indicators.
- **FTC Rule on Unfair or Deceptive Fees** (effective 12 May 2025): all-in pricing for live-event tickets and short-term lodging.
- FTC staff report "Bringing Dark Patterns to Light" (Sept 2022) - useful taxonomy and enforcement signal.
- *Arena v. Intuit* (N.D. Cal. 2020): arbitration terms riding on a primary button, in the faintest font on the page, were found insufficiently noticeable; Intuit's own data showed under 0.55% of users clicked the terms link. The Ninth Circuit later reversed it, but the design lesson stands: legal text tied to a primary button gets body-copy size and contrast (via Brignull 2023) [moderate].
- COPPA (children under 13): amended rule finalized 2025 (separate consent for third-party disclosure; data retention limits) - verify compliance dates.

### 3.2 States (selected)
- **California Automatic Renewal Law** (Bus. & Prof. Code §17600 ff.), amended by AB 2863, effective 1 July 2025: express affirmative consent to auto-renew terms, online cancellation available via the same medium ("click to cancel"), limits on save offers (must allow immediate cancellation), annual reminders, notice before price changes [law - verify details].
- **California CCPA/CPRA:** agreement obtained through dark patterns is not consent (Cal. Civ. Code §1798.140(h)); regulations require symmetry in choice and plain language. Colorado and Connecticut privacy laws contain similar dark-pattern consent language.
- Several states have age-appropriate design / social-media minors laws; many are in litigation - check current status per state.

---

## 4. India

- **Guidelines for Prevention and Regulation of Dark Patterns, 2023** (Central Consumer Protection Authority, Nov 2023): lists 13 specified dark patterns (false urgency, basket sneaking, confirm shaming, forced action, subscription trap, interface interference, bait and switch, drip pricing, disguised advertisement, nagging, trick question, SaaS billing, rogue malware) [law].

---

## 5. App store rules (practical enforcement that bites first)

- **Apple App Review Guidelines §3.1.2** (subscriptions): clearly describe what users get for the price; trials/intro offers must clearly state duration and what happens after; no misleading paywalls ("bait-and-switch"); apps that trick users into purchases may be removed. Apple's guidance has repeatedly targeted paywalls where the billed amount is less prominent than a weekly/daily equivalent [practitioner reports - verify current text].
- **Google Play Payments / Subscriptions policy:** clear offer terms (trial length, price after, frequency), easy cancellation info, no deceptive or manipulative subscription UI.
- Both stores surface system-level subscription management; the in-app "Manage subscription" should deep-link there.
- **Apple HIG permission and notification rules (enforced in App Review) [strong - platform rule]:** a pre-permission screen may have exactly one button labelled like "Continue" (not "Allow"), no way to skip the system prompt, and no incentives or fake alerts before the tracking (ATT) prompt - these cause rejection. Marketing notifications need explicit opt-in, an in-app off switch, and must never use the Time Sensitive level (reserved for things happening now or within an hour). → references/books/apple-hig.md

---

## 6. Subscription lifecycle - compliant-by-design template

| Stage | Must-have (cross-regime) | Nice-to-have that also retains |
|---|---|---|
| Offer | Price, billing period, renewal, trial length, post-trial price, how to cancel - visible before payment | Plain-language "What you'll pay and when" summary |
| Consent | Separate affirmative action for auto-renew; no preselected add-ons | Toggle "Remind me before trial ends" (default on) |
| Confirmation | Receipt with terms + cancel link | Onboarding to value in first session |
| Reminders | Before trial converts; before annual renewal (CA requires notice for some; good practice everywhere 3-7 days prior) | Usage summary ("You exported 42 files this year") |
| Price change | Advance notice + right to cancel | Grandfather period |
| Cancellation | Same medium, ≤ signup effort, immediate effect/confirmation | One relevant save offer (pause/downgrade), skippable |
| After | Access until period end; data export; deletion on request | Easy win-back without dark patterns |

---

## 7. Minors and vulnerable users (heightened duty)

- DSA Art. 28 + Commission guidelines on protection of minors (2025): privacy-by-default accounts, no profiling ads, limits on engagement-maximizing features (verify guideline specifics).
- UK ICO **Age Appropriate Design Code** (Children's Code, in force Sept 2021): 15 standards incl. high-privacy defaults, no nudge techniques that lead children to weaken privacy, geolocation off by default.
- Design defaults for under-18 audiences: no loot boxes or obscured odds, no streak-loss pressure, autoplay off, notifications quiet at night, no dark-pattern purchase flows (parental gates for purchases).

---

## 8. When to escalate to legal/privacy counsel

- Any new consent mechanism, consent-or-pay model, or data-sharing default.
- Any change to subscription signup, trial conversion, renewal or cancellation.
- Pricing displays with discounts, reference prices, fees, or dynamic/personalized pricing.
- Features for minors or in health/finance contexts.
- AI-driven persuasion or personalization of prices/offers.
- Any request where a stakeholder says "competitors do it" about a pattern listed in `behavior-ethics-dark-patterns.md`.

---

## 9. Sources (primary where possible)

- Regulation (EU) 2022/2065 (DSA), Art. 25, 26, 28, 38 - EUR-Lex.
- Directive 2005/29/EC (UCPD) + Commission Guidance C/2021/9320.
- Directive 2011/83/EU (CRD) as amended by Directive (EU) 2019/2161 and (EU) 2023/2673 (Art. 11a).
- GDPR (Regulation (EU) 2016/679) Art. 4(11), 7, 25; ePrivacy 2002/58/EC Art. 5(3); CJEU C-673/17 *Planet49* (2019).
- EDPB Guidelines 05/2020 (consent), 03/2022 (deceptive design patterns), Cookie Banner Taskforce report (2023), Opinion 08/2024.
- CNIL deliberations SAN-2021-023 / SAN-2021-024 (Google, Facebook), Dec 2021.
- Regulation (EU) 2024/1689 (AI Act), Art. 5.
- UK DMCC Act 2024; ICO Age Appropriate Design Code; CMA/ICO "Harmful design in digital markets" (2023).
- FTC: ROSCA (15 U.S.C. §8401 ff.); Negative Option Rule (2024) and 8th Cir. vacatur (July 2025); FTC v. Amazon settlement (Sept 2025); FTC v. Epic Games (Dec 2022); "Bringing Dark Patterns to Light" (2022); Reviews & Testimonials Rule (2024); Fees Rule (2025).
- California Bus. & Prof. Code §17600 ff. (AB 2863); Cal. Civ. Code §1798.140(h).
- India CCPA, Guidelines for Prevention and Regulation of Dark Patterns, 2023.
- Apple App Review Guidelines §3.1.2; Google Play subscriptions policy.
