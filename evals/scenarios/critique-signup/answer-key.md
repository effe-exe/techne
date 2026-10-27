# Answer key: critique-signup (designers must not read this)
Planted issues (score recall; each is about 1 point):
1. Fake urgency/scarcity timer ("Offer ends", "3 spots"): a dark pattern, and illegal if untrue.
2. Pre-checked "partner offers" consent: a GDPR/ePrivacy violation.
3. Legal text bundles marketing consent with the terms: forced consent.
4. Labels hidden (display:none), placeholder-only fields: an a11y failure and a memory burden.
5. Too many fields for signup: phone, company size, confirm email, last name. Each costs conversion.
6. Paste blocked on the password field: breaks password managers and fails WCAG 3.3.8.
7. Password rules too strict and shown in tiny low-contrast text.
8. Very low-contrast text: subtitle #aaa, hint #bbb, legal #ccc on white.
9. Primary and secondary buttons styled identically: no hierarchy.
10. Typography: Impact all-caps headline with tracking plus Georgia body, which looks incoherent and unprofessional.
11. Tiny text (10–11px).
12. No SSO/passkey option, and no value proposition or social proof grounded in truth (minor).
Good answer: ranks the ethics/legal items and the field count as top severity, gives exact fixes, proposes a test for the field reduction with metric and guardrail, and doesn't invent issues that aren't there.
