---
title: "Guidelines 03/2022 on Deceptive Design Patterns in Social Media Platform Interfaces: How to Recognise and Avoid Them (v2.0)"
author: "European Data Protection Board (EDPB)"
year: 2023
domains: [law, ethics, privacy, interaction]
evidence: "n/a"
---

# Guidelines 03/2022 on Deceptive Design Patterns in Social Media Platform Interfaces — EDPB

Use this when: designing or auditing any flow where personal data is asked for, consented to, controlled or erased (sign-up, permission and phone-number asks, privacy notice, consent toggles, privacy settings, data-subject-rights requests, account deletion and pausing, breach notices); you need the EU regulators' own vocabulary (6 categories, 16 types) to label a problem; you want regulator-endorsed best practices to propose instead of a rejected pattern. Written for social media, but the EDPB says the same patterns apply to cookie banners, shops, games and apps.

Source: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-032022-deceptive-design-patterns-social-media_en — the official PDF of Version 2.0, adopted 14 Feb 2023 after public consultation (74 pages). Read in full: executive summary, scope, principles, all five use cases with their 61 examples and best practices, Annex I (checklist) and Annex II (best practices). The illustrations are not in the text extraction, so I read only their captions and descriptions.

## The big idea (3 sentences)
Deceptive design patterns are interfaces and user journeys that push users into unintended, unwilling or harmful decisions about their personal data. Under the GDPR they are judged first against the overarching *fairness* principle (Art. 5(1)(a)), then transparency, data minimisation, purpose limitation, accountability, valid consent (Arts. 4(11) and 7), easy exercise of rights (Art. 12) and data protection by design and default (Art. 25). The EDPB maps the whole life cycle of an account (sign-up, staying informed, staying protected, exercising rights, leaving) to 16 named pattern types in 6 categories, each with GDPR articles and concrete best practices, so a design team can catch these before launch.

## Core concepts
- **6 categories / 16 types** (Annex I checklist):
  - *Overloading* — Continuous prompting (re-asking after a refusal; related to "nagging"), Privacy maze (too many layers or pages to reach info, a control or a right), Too many options.
  - *Skipping* — Deceptive snugness (the most data-invasive option is the default), Look over there (a distracting competing element; humour that hides the meaning).
  - *Stirring* — Emotional steering (highly positive or negative framing to steer data choices), Hidden in plain sight (visual style nudging toward the invasive option: faint, small or tucked-away links).
  - *Obstructing* — Dead end (missing or broken link to info or a control; a toggle that does nothing visible), Longer than necessary (more steps for the protective choice than for the invasive one), Misleading action (the action does something other than what it says).
  - *Fickle* — Lacking hierarchy, Decontextualising (a control on an unexpected page, e.g. delete-account under "Your data"), Inconsistent interface (across devices or within a screen sequence), Language discontinuity.
  - *Left in the dark* — Conflicting information (e.g. toggle colour contradicts toggle position), Ambiguous wording ("might be used to improve our services"; "special categories of data" in a breach notice).
- **Content-based versus interface-based patterns** — the wording and context versus the layout, navigation and interaction.
- **Default rule for emphasis** — options needn't look identical, but *if one is highlighted it must be the most data-protective one*.
- **Consent mirror** — withdrawal must be as easy as giving, through the same interface. One click to consent means roughly one click to withdraw. Refusing should need no action, or one as simple as accepting. Consent bundled with the terms, or tied to the service, is not freely given.
- **Erasure and pausing** — confirming a deletion is fine, but mandatory "why are you leaving?" questions, retention pop-ups, emotional loss copy and a pre-selected "pause instead" are not. Any grace period must be proportionate, and the user must be told what data is kept and for how long.
- **Data protection by design and default elements** (from EDPB Guidelines 4/2019, restated here) — autonomy, interaction, expectation, consumer choice (no unfair lock-in; data portability), power balance, no deception (information and options presented in an objective, neutral way), truthfulness.
- **Accountability through the interface** — the controller carries the burden of proving valid consent. The UI and user journey (screenshots, research results) count as evidence, and the research itself must comply with the GDPR.
- **Pausing an account** — users reasonably expect processing to drop to the strict minimum while paused. Consent given for active use does not cover processing during deactivation, and new purposes need new consent or fresh information.
- **Layered notices** — layering is encouraged for readability, but no maximum number of layers can be set in the abstract. More layers make discouragement more likely, so test with users. For exercising rights, the number of steps should be "as low as possible".
- **Vulnerable users** — children, the elderly, people with visual impairment or low digital literacy are less able to spot the steering. This raises the bar, especially for emotional steering at sign-up.

## Actionable heuristics for product design
- When the user has already declined a data request (phone number, contacts, personalised ads), do not ask again on each login or session. That is continuous prompting and makes later consent not freely given. Re-ask only on a material change, and make the refusal persist across devices.
- When asking for a phone number "for account security", offer the alternatives (email code, authenticator app). Use it only for that purpose, and do not funnel "get the app" through an SMS link when a QR code or store link works.
- When one option is visually emphasised in a privacy or consent choice, make it the most protective one. Otherwise give the options equal weight.
- When setting defaults for visibility or sharing (birthdate, posts, contact permissions, ad personalisation), default to the most restrictive sensible setting. If you deviate (e.g. a dating or job context), tell users the default, the less invasive options and where to change them. "Share with everyone" pre-selected is the canonical deceptive snugness.
- When a user chooses the protective path (skip, private profile, decline), do not add an "Are you sure?" that the opposite path does not get. Asymmetric confirmation is "longer than necessary" and a fairness breach.
- When writing data-related copy, cut motivational or imperative pressure ("Tell us about your amazing self! Come on right now!", "Hey, lone wolf, share your location!") and guilt or fear framing. Keep the tone neutral, especially toward the end of sign-up, when users are rushed.
- When using help icons ("?"), make them give help, not another prompt to share data.
- When designing a toggle, make position, colour and label agree, with an explicit on/off text label. A right-side toggle in red is conflicting information, and the consent gathered is not unambiguous.
- When a user flips a consent or setting, give immediate visible feedback and make sure the backend state matches. A control that appears to do nothing is a dead end.
- When placing a withdraw-consent link (e.g. in a "why am I seeing this ad?" panel), deep-link straight to the toggle, never to a generic explainer page or another site.
- When structuring a privacy notice, put a collapsible table of contents at the top, sticky navigation, back-to-top, plain-language definitions, examples, dated previous versions with the changes highlighted, and the DPO contact and supervisory-authority link in the rights section. A 70-page notice with no navigation and a key term defined in a footnote on p. 67 is the EDPB's own counter-example.
- When organising settings, put all data-protection controls in one data-protection directory (self-explanatory URL, e.g. /data-settings), group related settings together, avoid near-synonym tabs ("privacy", "data protection", "safety", "your preferences"), keep option order consistent (most to least restrictive every time) and keep the same locations and icons across desktop, app and mobile web.
- When data controls need a "Save" button, keep it visible next to the options, or save automatically with confirmation. Behaviour must be the same on every platform.
- When users exercise a right (access, rectification, erasure), give a dedicated form or in-product function reachable from the account menu and the privacy policy. Do not route them through Q&A pages (the EDPB's example takes 10 hops), ask "why?", or ask for confirmation of minor deletions.
- When building account deletion, label it "Delete account" (not "See you" or "Deactivate"), put it where users look (account or general settings, not "Your data" or "delete a function"), allow one confirmation, make any reason question optional and asked after the deletion, never pre-select "pause instead", and return users to the deletion flow after a data download.
- When a breach must be notified, name the data categories in plain words ("your health data"), name the affected groups (e.g. minors), give consequences and actions (a reset-password link), and don't bury them in irrelevant reassurance.
- When serving a country in its language, provide all data-protection text and flows in that language, and keep the user's chosen language on help and privacy pages.
- When humour or brand voice touches a data choice (a "cookie" pun banner with just an "Okay" button), keep the playful copy away from the decision itself. Put the plain meaning and a real "Reject" option first. Humour that obscures the meaning invalidates consent (Look over there).
- When listing third-party recipients or joint controllers, link directly to each one's policy and the relevant section. Use the term "personal data", not invented terms such as "creation data", and keep the terminology identical across your notice and partners' notices.
- When the platform is used across several apps (main app plus messenger), make data-protection information and controls directly reachable from every app, not only from the primary one or the web version.
- When offering a data download before deletion, treat it as a detour that must return the user to the deletion step, and confirm the deletion completed or tell them how to finish it.
- When onboarding new users, add a short data-protection step after the first meaningful action (e.g. after adding a first friend or posting), and give contextual, just-in-time explanations next to controls such as geolocation on a post.
- When offering bulk privacy toggles, group only settings with the same purpose, keep granular control available, and never slip an unrelated purpose into the bulk option.
- When proving compliance, keep screenshots of the user journey and user-research results (A/B tests, eye tracking, interviews). The EDPB names these as accountability evidence, so test comprehension, not just consent rate.

## Evidence & caveats
- This is regulatory guidance, not empirical research: "evidence" here means legal authority. It is the EDPB's interpretation of the GDPR, which binds national DPAs in practice but is not itself a court ruling. Breaches are assessed case by case.
- The scope is formally social media and GDPR-covered processing only. Overlaps with consumer law (UCPD), the DSA (whose Art. 25 excludes practices covered by the UCPD or GDPR) and the ePrivacy Directive are noted but not analysed.
- It gives no numeric thresholds on purpose ("no concrete number" for layers or steps). Read "as low as possible" plus symmetry with the invasive path as the test.
- The examples are hypothetical composites, though some echo real decisions (e.g. it cites the Irish DPC Instagram decision of 2022 on default-public settings).
- Its claims about vulnerable groups and urgency at the end of sign-up are reasonable but asserted, not tested, here.

## Disagreements with other references
- `psychology/behavior-law-consent-cancellation.md` §1.5 summarises these guidelines as a taxonomy for audits, which is accurate. Two refinements: the six category names are right, but there are 16 named types beneath them (use the types, e.g. "deceptive snugness", "longer than necessary", in critiques), and the "highlight only the protective option" rule is stricter than that file's consent-banner spec ("equal size, colour weight and placement"). For data-protection choices, equal weight is the floor, and emphasising the invasive option is a violation.
- `psychology/behavior-ethics-dark-patterns.md` §5.4 allows "at most one" save offer at cancellation. The EDPB is stricter for *account erasure*: it treats mandatory reason questions and solution pop-ups as unlawful hindrances (Art. 12(2)). Feedback may be asked only after the deletion and optionally. Apply the EDPB rule to deletion and data rights, and the ethics file's one-save-offer rule to paid-subscription cancellation.
- The ethics file's nagging cool-down ("≥30–90 days") is a heuristic. The EDPB sets no period but treats re-asking after a clear refusal as continuous prompting. In the EU, default to not re-asking unless something material changes.

## Best quotes (< 25 words each, max 5)
- "If controllers decide to highlight one option more than the other(s), the highlighted one needs to be the most restrictive regarding data processing."
- "Humour should not be used to misrepresent the potential risks and invalidate the actual information."
- "More information does not necessarily mean better information."

## Related
- `psychology/behavior-law-consent-cancellation.md`, `psychology/behavior-ethics-dark-patterns.md`, `interaction/accessibility.md` (contrast and legibility of privacy links), `process/states-and-edge-cases.md` (feedback and saved states)
- `books/deceptive-patterns-brignull.md`, `books/what-makes-dark-pattern-dark.md`
