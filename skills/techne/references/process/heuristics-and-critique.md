# Heuristic Evaluation & Design Critique

> **Use this when:** reviewing or auditing a screen, flow, prototype, or live product; giving or receiving critique; prioritizing usability issues by severity; checking a design against ethical red lines.
> **Covers:** Nielsen's 10 heuristics with concrete checks, running a heuristic evaluation, severity ratings, critique frameworks (giving and receiving), dark-pattern veto, review output template.
> **Not a substitute for:** testing with real users. Heuristic review finds likely problems; users confirm them.

---

## 1. The point of view

- **Critique the design against its goal, not against your taste.** "Does this help [user] do [job] toward [metric]?" is the only question.
- **Severity over volume.** Ten cosmetic nits are worth less than one blocker. Always rank.
- **Specific, located, actionable.** "The CTA is weak" is useless. "The primary CTA (bottom, 'Continue') has the same visual weight as 'Skip'; 2 of 3 first-time users will likely skip. Make Skip a text button" is useful.
- **Ethics is a hard gate, not a heuristic.** A design that wins by deceiving users fails review regardless of metrics.

---

## 2. Nielsen's 10 usability heuristics (with checks)

Source: Jakob Nielsen, "Enhancing the explanatory power of usability heuristics", CHI 1994; derived from Nielsen & Molich, CHI 1990; text refreshed by NN/g in 2020 [strong as practice canon; based on factor analysis of 249 usability problems].

**H1. Visibility of system status.** Keep users informed with timely feedback.
- Every tap gets feedback within ~100 ms (pressed state); operations > ~1 s show progress; > ~10 s show percent/time and allow backgrounding (response-time limits: Miller, 1968; Card, Robertson & Mackinlay, 1991; Nielsen, *Usability Engineering*, 1993) [strong].
- Current location is visible (selected tab, breadcrumb, title).
- Saved / syncing / offline status visible where data loss is possible.

**H2. Match between system and the real world.** User's language and conventions.
- No internal jargon, IDs, or error codes as primary text.
- Icons follow platform conventions; unfamiliar icons have labels.
- Order matches the real-world task sequence.

**H3. User control and freedom.** Clear "emergency exits".
- Undo for destructive actions (prefer undo over confirm dialogs for reversible actions).
- Back/cancel always available; modals dismissible; multi-step flows save progress.
- Cancelling a subscription is as easy as starting one (required or strongly pushed by law in several markets: EU consumer rules, several US state auto-renewal laws; the FTC's 2024 federal "click-to-cancel" rule was vacated by a US appeals court in 2025, so verify current law per market) [regulatory; verify].

**H4. Consistency and standards.** Internal consistency (same thing, same name, same place) and external (platform HIG/Material, Jakob's Law).
- One primary action style; one term per concept; same gesture = same result.

**H5. Error prevention.** Better than good error messages.
- Constrain inputs (pickers, masks, sensible defaults), disable impossible options with explanation, confirm only high-cost irreversible actions.
- Distinguish **slips** (wrong action, right goal: e.g. adjacent tap targets) from **mistakes** (wrong goal from wrong mental model) (Norman, *The Design of Everyday Things*, rev. 2013) [strong]. Slips → spacing, undo. Mistakes → better signifiers and feedback.

**H6. Recognition rather than recall.** Make options, actions, and info visible.
- Recently used, autocomplete, inline hints; don't require remembering info from a previous screen.

**H7. Flexibility and efficiency of use.** Accelerators for experts that novices don't see.
- Shortcuts, gestures, bulk actions, saved filters, defaults learned from usage. Never gesture-only for critical actions.

**H8. Aesthetic and minimalist design.** Every extra element competes with relevant ones.
- Not "less stuff" for its own sake: remove what doesn't support the current task. Aesthetic-usability effect: attractive designs are *perceived* as easier (Kurosu & Kashimura, CHI 1995; Tractinsky, 1997) [moderate], which can mask problems in tests.

**H9. Help users recognize, diagnose, and recover from errors.**
- Error message = what happened + why (if useful) + how to fix, in plain language, next to the field, preserving the user's input. No blame, no codes as headline.

**H10. Help and documentation.**
- Contextual help at the point of need; searchable; task-oriented. Ideally unnecessary, but present for complex domains.

### Supplementary heuristics worth adding for modern products
- **Accessibility** (WCAG 2.2 AA as floor: contrast 4.5:1 body text, 3:1 large text and UI components; target size minimum 24×24 CSS px per WCAG 2.2 SC 2.5.8; platform guidance 44×44 pt iOS, 48×48 dp Android) [strong, standards].
- **Trust & transparency**: prices, renewals, data use visible before commitment.
- **Performance perception**: skeletons, optimistic UI, no layout shift.
- **Respect for attention**: notifications earned, not maximized.

---

## 3. Running a heuristic evaluation

Nielsen's data: a single evaluator finds ~35% of problems; 3–5 evaluators find ~60–75% (Nielsen, CHI 1992, "Finding usability problems through heuristic evaluation") [strong for the pattern; percentages vary by product]. As an agent, simulate multiple passes with different lenses (novice, expert, accessibility, mobile, error-prone user).

Procedure:
1. **Scope**: which flows, which platform, which user segment, which goal.
2. **Pass 1, free use**: go through the flow as the target user, noting the feel.
3. **Pass 2, heuristic by heuristic**: inspect each screen against H1–H10 plus supplementary.
4. **Pass 3, states**: run the states & edge-cases checklist.
5. **Log each issue**: location, heuristic(s) violated, description, evidence/screenshot, severity, recommendation.
6. **Merge and de-duplicate**; rate severity independently then reconcile.
7. **Prioritize**: severity × reach × effort.
8. **Report** top issues first, with a single summary of strengths (what to preserve).

### Severity scale (Nielsen)
| Rating | Meaning | Action |
|---|---|---|
| 0 | Not a usability problem | none |
| 1 | Cosmetic | fix if time |
| 2 | Minor | low priority |
| 3 | Major | high priority, fix before/soon after launch |
| 4 | Catastrophe | must fix before release |

Severity = combination of **frequency** (how many hit it), **impact** (how hard to overcome), **persistence** (once or every time), plus **market/business impact** (Nielsen, "Severity Ratings for Usability Problems", 1994) [practice canon].

Fast severity heuristic for the agent:
- Blocks task completion or causes data/money loss → **4**
- Causes errors or significant delay for many users → **3**
- Causes hesitation, workaround exists → **2**
- Visual inconsistency, no task impact → **1**

Prioritization matrix: plot severity vs effort; do high-severity/low-effort first; schedule high/high; batch low/low into a polish pass; question low-severity/high-effort.

### Issue log format (agent output)
```
#3 | Severity 3 | H9 Error recovery, H5 Error prevention
Where: Checkout > Payment > card number field
Problem: Invalid card shows "Error 402" in a toast that disappears after 3 s; field is cleared.
Evidence: heuristic; matches 14% drop at this step in funnel (if known)
Fix: Inline message under field: "This card number looks incomplete. Check the last 4 digits." Keep input; validate on blur, not on keystroke.
```

---

## 4. Design critique: how to give it

### 4.1 Frameworks
- **Discussing Design** (Adam Connor & Aaron Irizarry, 2015) [practitioner canon]: critique = analysis of a design against objectives. Structure each comment as:
  1. *What is the objective of this design?*
  2. *What elements relate to that objective?*
  3. *Are those elements effective at reaching the objective?*
  4. *Why or why not?*
  Distinguish critique from **reaction** (gut response) and **direction** (telling them what to do).
- **Liz Lerman's Critical Response Process** (1990s, dance/arts) [practice]: 1) statements of meaning (what stood out), 2) artist asks questions, 3) neutral questions from responders, 4) opinions *with permission*. Useful for early-stage, fragile work.
- **Pixar Braintrust** (Ed Catmull, *Creativity, Inc.*, 2014) [weak/anecdotal but influential]: candid notes from peers, no authority to mandate; the owner decides.
- **"I like / I wish / What if"** (d.school practice) for quick workshops.

### 4.2 Rules for giving critique
- Start by restating the goal and constraints. If you don't know them, ask before commenting.
- Separate levels: **strategy** (right problem?) → **structure** (flow, IA) → **interaction** → **visual** → **copy**. Critique from the top down; don't polish pixels on a broken flow. Adams's four layers ("The Dribbblisation of Design", Intercom 2013) give the same order — **outcome → system → interaction → visual** — and a review that starts at visuals is sent back to outcome. For L3–L4 work, ask for the *product architecture* (the objects in the system and their relationships, not IA pages) as the framing artefact. → references/books/dribbblisation-of-design.md
- Be specific about location and consequence for a named user.
- Phrase as observation + impact + question/option: "When I land here, my eye goes to the illustration before the price. For a price-sensitive user, that may delay the decision. Did you test price-first?"
- Ask "what did you consider and reject?" before suggesting it.
- Include what works and must be preserved; this protects good decisions from later churn.
- Tag each note: **blocker / should / could / nit**.
- Never: "I don't like it", "make it pop", "users won't get it" (without evidence), redesigning in the critique.

### 4.3 Rules for receiving critique
- Present with framing: goal, audience, constraints, stage (exploratory vs final), **what feedback you want** (and what you don't).
- Listen, don't defend; write everything down; ask clarifying questions ("What makes you feel that?", "Which user are you picturing?").
- Translate reactions into problems: "Make the logo bigger" → "What concern is behind that? Brand recognition? Trust?"
- You own the decision; thank, triage, and report back on what you did with notes.

### 4.4 Critique session format (30–45 min)
1. Presenter: context, goal, stage, ask (5 min).
2. Silent review / walkthrough (5–10 min).
3. Clarifying questions only (5 min).
4. Critique, top-down by level (15–20 min).
5. Presenter summarizes next steps (5 min).

---

## 5. Ethics gate: the dark-pattern veto

Taxonomies: Harry Brignull coined "dark patterns" (2010; *Deceptive Patterns*, 2023); Gray et al. (CHI 2018) classed them as nagging, obstruction, sneaking, interface interference, forced action; Mathur et al. (CSCW 2019) found dark patterns on ~11% of ~11K shopping sites crawled [strong]. Regulators increasingly prohibit them (EU Digital Services Act Art. 25, 2022; FTC report "Bringing Dark Patterns to Light", 2022) [regulatory].

Fail the review if any is present:
- **Confirmshaming** ("No thanks, I don't want to save money").
- **Roach motel / obstruction**: easy in, hard out (cancel, delete account, unsubscribe).
- **Sneaking**: pre-checked add-ons, hidden costs revealed at the last step, drip pricing.
- **Fake urgency/scarcity**: countdowns that reset, invented "3 people viewing".
- **Disguised ads** or misleading visual hierarchy (decline styled as a link, accept as a huge button, in consent flows).
- **Forced continuity**: free trial auto-converting without clear disclosure and reminder.
- **Nagging**: repeated prompts after a "no".
- **Privacy zuckering**: defaults that over-share; consent that isn't freely given.
- **Trick questions**: double negatives in opt-outs.

Ethical defaults: equal visual weight for accept/decline in consent; trial reminders before charge; one-screen cancel; clear total price early; honest social proof; friction added only where it *protects* the user (e.g. confirming a large transfer).

Test: *"Would this still work if the user fully understood what we're doing?"* If no, it's manipulation.

---

## 6. Review output template (agent default)

```
## Review: [screen/flow], for [user], goal [job/metric]
Level of review: strategy / structure / interaction / visual / copy
Overall: [1–2 sentence verdict with the single most important change]

### Keep (what works)
- ...

### Issues (ranked)
| # | Sev | Heuristic | Where | Problem | Fix |
|---|-----|-----------|-------|---------|-----|

### Ethics gate: pass / fail (reasons)
### States coverage: [missing states from checklist]
### Accessibility quick check: contrast, targets, labels, focus, dynamic type
### Suggested validation: [5-user test on tasks X,Y / A/B with metric Z]
```

---

## 7. Myths to flag in critique

- **"Users don't scroll."** They do; the fold still matters for attention (NN/g eyetracking: ~57% of viewing time above the fold, 2018, down from ~80% in 2010) [moderate], but strong content below the fold gets read. Give a reason to scroll; don't cram.
- **Golden ratio makes layouts better.** No empirical support for UI performance or preference beyond chance [contested/myth].
- **7±2 items per menu.** Misapplication of Miller (1956); menus rely on recognition.
- **"Three-click rule."** No evidence (Porter, UIE, 2003).
- **"Flat design is always cleaner."** Flat UIs without signifiers increase hesitation; NN/g eyetracking found weak signifiers required more fixations (Moran, NN/g, 2017) [moderate].
- **"Users read."** They scan; F-pattern and layer-cake patterns depend on layout (Pernice, NN/g, 2006/2017) [moderate].
- **"Red buttons convert better."** Color effects are context-dependent; contrast with surroundings matters, not hue per se [weak/anecdotal claims].

## When NOT to rely on heuristics
- Novel interaction paradigms (voice, spatial, AI agents) where conventions aren't settled: test with users.
- Domain-expert tools: an "inefficient" pattern may match expert workflows; observe experts first.
- When you have behavioral data that contradicts the heuristic: data wins, but find out why.
