---
title: "Inline Validation in Web Forms"
author: "Luke Wroblewski (study run by Etre; form built by Aramys Miranda)"
year: 2009
domains: [forms, interaction, conversion, usability-testing, microcopy]
evidence: "moderate"
---

# Inline Validation in Web Forms — Luke Wroblewski (A List Apart #291)

Use this when: designing validation timing and message placement for signup, checkout, settings or any form; choosing between on-blur, on-keystroke and on-submit validation; deciding whether to show success checkmarks; someone cites "inline validation increases conversions by 22%".

Source: https://alistapart.com/article/inline-validation-in-web-forms/ (2009). Read in full: the article, plus the methods reply in the comments by Simon from Etre (sample size, within-subject design, randomization, and the definition of "errors made"). Other reader comments skimmed. Videos and figures could not be viewed; their captions and descriptions were read.

## The big idea (3 sentences)
Forms that respond while people fill them in beat forms that only respond after submit, because people fix problems as they go instead of rereading the whole form and "pogosticking" between submit and errors. In a 22-person lab study of six versions of a registration form, the best inline version improved success, errors, satisfaction, completion time and eye fixations. But timing and placement decide whether inline validation helps: validate after the person finishes a field (or while typing, with a delay, for fields with strict rules), never before they've started, and keep success messages persistent and outside the field.

## Core concepts
- **Study design** — Etre (London) tested 22 "average" users aged 21–49 on six variants of a distraction-free registration form: a control validating only on submit, and five inline variants. Measures: success rate, errors, completion time, satisfaction, eye-tracking. Every participant saw all six variants in a counterbalanced order (within-subject).
- **Headline result (best inline variant vs control)** — success rate +22%, errors −22%, satisfaction +31%, completion time −42%, eye fixations −47%. "Errors" counted only errors left at submit, so errors caught and fixed inline were not counted.
- **Requirements shown up front** — per Etre's methods note, the username and password requirements were spelled out directly beneath those fields in every version, so the test isolated validation behavior, not missing instructions.
- **Pogosticking** — repeatedly submitting to discover what's wrong; worst for answers people can't know in advance (an available username).
- **Easy vs hard questions** — only 30–50% of participants noticed validation messages on easy fields (name, email, gender, country, postal code), but 80–100% did on hard fields (username, password with rules), where people were unsure and paused.
- **Green check ambiguity** — on easy fields, a checkmark confused people: valid format, or correct? ("valid name or my name correctly?") Some stopped to ask the moderator. Showing success only on some fields risks people "correcting" valid fields that lack a check.
- **Timing variants (tested on the easy top half)** — *after* (on blur, when moving to the next field), *while* (on key press, updating live), *before and while* (shown on focus, then updated live). Username and password used "while" with a short delay in all versions.
- **After was fastest** — 7–10 seconds faster than "while" and "before and while", because with live errors people typed one character, waited for the message to update, and repeated.
- **Before-and-while was worst** — longer times, more errors and lower satisfaction; people hated being flagged red before they'd typed anything.
- **Eye-tracking pattern** — gaze paths showed messages to the right of fields got attention in the hard half of the form and none in the easy half, partly because people hesitated on hard fields and looked around.
- **Placement variants** — success messages to the right of the field (persistent), success messages that faded after a delay, and messages inside the field. Error messages stayed until fixed in all versions.
- **Persistent beat fading** — fading success messages made people worry a field had become invalid, and were missed by "hunt and peck" typists looking at the keyboard. Persistent messages served both "check as I go" and "check at the end" users.
- **Inside-field messages gave no benefit** — placement was inconsistent (impossible inside drop-downs) and not closer to where people looked; messages closer to the input might do better.

Variants tested and outcomes (as reported; per-variant numbers weren't published):

| Variant | What it did | Outcome |
|---|---|---|
| Control | Errors only after "Create account" | Pogosticking; worst overall vs best inline version |
| After (on blur) | Message when leaving the field | Fastest: 7–10 s quicker than live variants on easy fields |
| While (on key press) | Live updates while typing | Slower: type-one-character-and-wait loops |
| Before and while | Message on focus, then live | Worst: more errors, lower satisfaction, longest times |
| Success messages fade | Check disappears after a delay | Missed by keyboard-watchers; worry that fields became invalid |
| Messages inside fields | Status shown in the input | No benefit; inconsistent (not possible in selects) |
| Persistent success to the right | Check stays next to the field | Best of the placement variants |

## Actionable heuristics for product design
- When a field has an answer people know (name, email, address), validate on blur (after they leave the field), not on each keystroke, because live errors on simple fields slowed completion by 7–10 s in this study.
- When a field has strict, unguessable rules (username availability, password requirements, promo codes), give live feedback while typing, with a short delay after typing pauses, because these are the fields where people look for confirmation (80–100% noticed messages).
- When a user focuses an empty field, show no error, and never show "too short" before they've typed, because premature errors had the worst times, errors and satisfaction.
- When an error is shown, keep it until the input is valid, then remove or turn it into success immediately (validate the fix live even if the first check was on blur).
- When showing success, do it only where it reassures (hard fields), make it persistent rather than fading, and label what it means ("Username available", "Password meets requirements") instead of a bare green check, because a check on a name reads as "correct" and confuses.
- When some fields show success and others don't, make sure the absence doesn't read as an error (e.g. no success marks at all on simple fields, consistently).
- When placing messages, put them adjacent to the input where the eye already is (directly below or right next to it), and in the same place for every field type, including selects.
- When the form contains a question people often get wrong at submit (availability, formatting), move the check inline to prevent pogosticking.
- When reporting impact, don't promise "+22% conversion": the 22% is lab task success with 22 people. Ship inline validation as a usability fix and measure form completion and error rates in production, with a guardrail on time to complete.
- When adapting the pattern to mobile or narrow layouts, put messages directly below the field rather than to the right (our adaptation; the study tested right-side placement on desktop and suggested that messages closer to the input might perform better).
- When a field is hard (passwords with rules), show the requirements before typing as neutral helper text, then turn each rule into live, persistent status as it's met, because that is the "help sooner" case with no premature errors.
- When validating server-side after inline checks (address not found, card declined), show the error at the field with the same pattern, and keep the user's input.

## Evidence & caveats
- Small lab sample (22) with every participant seeing all six forms; Etre called the metrics "indicative as opposed to definitive" and acknowledged possible familiarity bias, mitigated by counterbalancing [moderate].
- Only the best-performing inline variant is compared to the control in the headline numbers; per-variant numbers and raw counts weren't published.
- "Errors" excludes errors fixed inline, which flatters the inline versions on that metric by design.
- A registration form in a lab, 2009 desktop web, mostly "hunt and peck" typists; mobile keyboards, autofill and password managers have changed input behavior since [dated in context, mechanism still sound].
- Consistent with later practitioner research (Baymard, NN/g) and widely replicated in practice, which is why the direction is trusted more than the numbers.

## Disagreements with other references
- `references/interaction/microinteractions-and-motion.md`, `references/data-driven/conversion-checkout-forms-signup-landing.md` and `references/process/states-and-edge-cases.md` summarize this study as "validate on blur, not on every keystroke". That's right for simple fields, but the study used live ("while") validation with a delay for username and password and recommended it where people need help sooner. Add the exception for strict-rule fields (the motion file already allows password strength and character counters).
- The conversion file says "use positive confirmation sparingly"; the study found persistent success messages performed best among the placement variants and that the problem was ambiguity on easy fields. Better wording: show success on hard fields, persistently, with words.
- The conversion file presents the numbers as "+22% success rate"; keep the note that "errors" here means errors remaining at submit and that n = 22, within-subject.
- `references/interaction/accessibility.md` requires errors identified in text and programmatically associated (WCAG 3.3.1, 3.3.3); this 2009 study used color and icons (green check, red triangle) and didn't test assistive tech. Follow the accessibility file for implementation.

## Best quotes (< 25 words each, max 5)
- "Web forms aren't great conversationalists."
- "These negative reactions, longer completion times, and error rates illustrate that validating inputs prematurely can be harmful."
- "When I clicked in the First Name field, it immediately came up saying that [my first name] is too short." (participant)

## Related
- `references/data-driven/conversion-checkout-forms-signup-landing.md`, `references/interaction/microinteractions-and-motion.md`, `references/process/states-and-edge-cases.md`, `references/interaction/accessibility.md`, `references/books/wcag-22.md`
- `references/process/research-methods-selector.md` (what 20-person benchmarks can and can't tell you)
- Wroblewski, *Web Form Design* (2008); Baymard Institute form usability research
