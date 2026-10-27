# Taste: What It Is, How to Build It, How to Express It

> Use this when: judging quality between options that all "work", giving a design an opinionated point of view, or explaining why something feels mediocre.
> Use this when: helping a designer develop taste, building an inspiration/reference practice, or reconciling taste with experiment results.
> Skip when: the decision is already settled by valid data on the exact question; then report the data and note any taste concerns as follow-up hypotheses.

---

## 1. What taste is (working definition for an agent)

**Taste = calibrated judgment about quality, formed by deep exposure to excellent work, articulated as reasons, and tested against reality.**

Four parts, each necessary:
1. **Exposure** — a large, high-quality reference set (Jobs: expose yourself to the best things humans have done, *Triumph of the Nerds*, 1996).
2. **Discrimination** — the ability to perceive small differences (Hume's "delicacy").
3. **Articulation** — being able to say *why*, in terms others can check.
4. **Calibration** — feedback from users, data and peers that corrects the judgment over time.

Taste without articulation is preference. Taste without calibration is dogma. Data without taste is a local maximum.

### Historical foundations (short)
- **Hume, "Of the Standard of Taste" (1757).** Taste varies, but a standard exists in the joint verdict of true judges, who have: delicacy of perception, practice, the habit of comparison, freedom from prejudice, and good sense. [philosophical; still the best checklist for a critic] Agent translation: notice details, review a lot, always compare against references, set aside personal/brand bias, reason about purpose.
- **Kant, *Critique of Judgment* (1790).** Judgments of beauty claim universal agreement while being based in feeling, not concepts; distinguishes the beautiful from the merely agreeable (personal liking). Agent translation: separate "I like it" from "this works for the people it is for".
- **Bourdieu, *Distinction* (1979).** Taste also signals social class and group membership. [strong sociological influence] Agent translation: be suspicious when "good taste" means "looks like what designers in our bubble like". Your users' context defines appropriateness.
- **Kocienda, *Creative Selection* (2018).** Defines taste as a refined sense of judgment and the ability to find balance that produces a pleasing, integrated whole. Lists taste as one of seven elements alongside inspiration, collaboration, craft, diligence, decisiveness and empathy.
- **Paul Graham, "Taste for Makers" (2002, essay, paulgraham.com).** Argues taste can be good or bad, not just personal — the short answer to "design is subjective": makers who improve see their own past taste as worse, which implies a better and worse (ask a team to compare their work from 2–3 years ago). Which design is better in a given product is still settled by calibration (§4.5), not by the argument. He also lists traits of good design: simple, timeless, solves the right problem, suggestive, slightly funny, hard, looks easy, uses symmetry, resembles nature, redesign, can copy, often strange, happens in chunks, daring.
- **Ira Glass, "the gap" (interview, ~2009).** Beginners' taste outruns their skill; the only cure is volume of work. [anecdotal but widely useful]

---

## 2. What separates great from good

Good design meets requirements. Great design does that, and is *integrated, intentional and inevitable*. Concretely:

| Dimension | Good | Great |
|---|---|---|
| Concept | Solves the stated problem | Reframes the problem; one strong idea (Rand, Bass) |
| Coherence | Consistent components | Every decision traces to one point of view; nothing feels like a different author |
| Hierarchy | Primary action identifiable | The eye lands exactly where intended in under a second, then follows a path |
| Restraint | No obvious clutter | Conspicuously absent features; the confidence to leave space (Hara) |
| Detail | Happy path polished | All states polished; invisible details (hit areas, interruptible motion, focus) right (Freiberg) |
| Typography | Readable | Rhythm: consistent scale, line length ~45–75 characters (Bringhurst, *The Elements of Typographic Style*, 1992), tuned tracking for display sizes |
| Motion | Present | Purposeful, fast, physical, interruptible; disappears on frequent actions (Kowalski) |
| Copy | Clear | Clear, human, specific; microcopy carries personality without slowing the task |
| Speed | Acceptable | Feels instant; perceived performance designed (optimistic UI, skeletons) (Linear) |
| Ethics | Not illegal | Would hold up if the user saw the internal decision doc (Rams #6) |
| Surprise | None | One small, earned moment of wit or delight (Rand, Kare) |
| Time | Looks current | Will still look right in five years (Rams #7, Vignelli) |

**The "inevitability" test:** if a reviewer asks "why is it like this?", a great design has an answer for every element, and the answers agree with each other.

---

## 3. Signals of mediocre taste (spot them fast)

- **Decoration without reason:** gradients, glows, glassmorphism, shadows that encode nothing.
- **Trend stacking:** bento grid + 3D blob + gradient text + noise texture on one page.
- **Too many voices:** 3+ typefaces, 10+ font sizes, multiple icon families, inconsistent corner radii.
- **Timid hierarchy:** everything medium weight, medium size, medium gray. Nothing is the most important thing.
- **Even spacing everywhere:** no grouping by proximity (Gestalt), so relationships are unreadable.
- **Low-contrast gray text** for "elegance" that fails WCAG 4.5:1.
- **Uncanny symmetry:** centered everything, including long body text.
- **Happy-path only:** gorgeous filled state, no empty/error/loading.
- **Copy as afterthought:** lorem-ish headlines, "Submit", "Error occurred".
- **Motion as decoration:** slow (500ms+) eased-in-out transitions on every tap.
- **Imitation without understanding:** copying Linear's or Stripe's look without their speed, opinion or detail.
- **AI-generic sameness:** default component library, purple-blue gradient, centered hero, emoji icons, three feature cards. If it could be any product, it has no taste.

---

## 4. How to develop taste (practice protocol)

These methods draw on deliberate practice (Ericsson, Krampe & Tesch-Römer 1993) [moderate: the magnitude of practice effects is contested — Macnamara, Hambrick & Oswald 2014 meta-analysis found practice explained a minority of variance in performance], and on long craft traditions of copying masters.

### 4.1 Build a reference library with intent
- Collect *specific moves*, not whole sites: "how Things handles drag-to-insert", "how Stripe writes error messages", "how Apple Weather transitions between conditions".
- Tag each reference with: the problem it solves, the move, why it works (named principle), and where it would fail.
- Span eras and media: Swiss posters, Braun products, Japanese packaging, film titles, signage (e.g. Kinneir & Calvert's British road signs, 1960s), data graphics (Minard's 1869 Napoleon map, which Tufte called possibly the best statistical graphic), games, physical instruments. Taste formed only on Dribbble produces Dribbble.
- Weekly refresh: pull a few new references from curated galleries (award sites, app galleries, platform design awards like Apple Design Awards) and *also* one historical piece. Prune references that no longer hold up.

### 4.2 Copywork (the master-copy method)
- Recreate a great screen pixel-for-pixel in Figma or code. Painters copied masters for centuries; Benjamin Franklin taught himself prose by rewriting essays from *The Spectator* from memory and comparing (*Autobiography*). [anecdotal, but the method is sound]
- While copying, measure: spacing scale, type scale ratios, line-heights, color steps, radii, animation durations. Write down the system you infer.
- Then modify one variable at a time and observe what breaks. This teaches *why*, not just *what*.

### 4.3 Comparative judgment, not absolute
- Humans judge better comparing two things than rating one in isolation (Thurstone's law of comparative judgment, 1927; used today in adaptive comparative judgment for assessment) [moderate].
- Always produce at least 2–3 variants and compare side by side, at real size, on a real device, with real content.
- Squint test / blur test: blur the screen; the hierarchy that remains is the real hierarchy.
- Distance test: view at 25% scale; does the composition still hold?
- Grayscale test: remove color; does hierarchy survive?
- Time test: look again after a break; first impressions of your own work are biased by effort (IKEA effect — Norton, Mochon & Ariely 2012) [moderate].

### 4.4 Build vocabulary
You cannot articulate what you cannot name. Learn the terms: hierarchy, rhythm, proximity, alignment, contrast, figure/ground, negative space, optical alignment (e.g. play icons and circles need visual, not mathematical, centering), x-height, tracking, leading, measure, easing, overshoot, affordance, signifier, information scent, progressive disclosure.

### 4.5 Seek calibration
- Show work to people with demonstrably great taste and ask for the single biggest problem.
- Watch real users use it (5 users finds many usability problems in a round — Nielsen & Landauer 1993; [contested] as a universal number, depends on problem frequency and user diversity).
- Compare your predictions to experiment outcomes. Keep a log: "I predicted B wins because X; result: …". Over time this measures and improves your taste. Given that most ideas do not move metrics (Kohavi, Tang & Xu 2020) [strong], a designer who is right 50% of the time about direction is doing well.

### 4.6 Volume and finishing
- Make many things and finish them. Taste grows from closing the gap Glass described.
- Constraint drills: design the same screen with one typeface and one weight; with only black and one accent color; in a 4-column grid; with no icons. Constraints reveal what matters (Eames, Teenage Engineering).

---

## 5. How an agent expresses taste (point of view, not mush)

The skill requires a strong, opinionated point of view. Rules:

1. **Lead with a recommendation.** "Use variant B." Then why. Then the alternatives. (Rand presented one answer; keep alternatives as evidence of diligence, not as abdication.)
2. **Give reasons that can be checked.** Not "it feels cleaner" but "B uses one primary action, groups related fields by 8px vs 24px gaps, and moves the price above the fold where the decision is made."
3. **Name the lens or principle.** "Per Norman's gulf of evaluation, the save state is invisible." Naming makes critique teachable and arguable.
4. **Separate taste claims from evidence claims.** Mark which statements are judgment and which are backed by data or research. Never dress a preference as a finding.
5. **State confidence and the cheapest way to resolve it.** "Moderate confidence. A 2-week A/B test on checkout start rate would settle it; if traffic is low, a 5-user preference + task test."
6. **Disagree with the brief when warranted.** If the request is a dark pattern or likely to harm the metric it targets, say so plainly and propose a better route.
7. **Strong opinions, weakly held** (Paul Saffo, 2008). Commit fully, update quickly when evidence arrives, and say what evidence would change your mind.
8. **Avoid both extremes:** no "it depends" without a default; no dogma that ignores context.

### Critique template
```
Verdict: [ship / iterate / rethink] — one sentence.
Biggest issue: [the one thing that most limits quality] — principle/lens, evidence.
Next 3 changes: [concrete, ordered by impact/effort].
What's working: [keep these; be specific].
Taste vs evidence: [which claims are judgment; how to test the important ones].
```

---

## 6. Taste and data: the operating model

Taste and data are not rivals; they do different jobs.

| Job | Taste | Data |
|---|---|---|
| Generate options | Primary | Opportunity sizing (funnels, drop-offs, research) |
| Kill bad options cheaply | Primary (critique, principles) | Usability tests |
| Choose between good options on high traffic | Secondary | Primary (controlled experiments) |
| Avoid local maxima | Primary (vision, redesign) | Long-term holdouts, guardrail metrics |
| Decide what is ethical | Primary (values) | Guardrails (complaints, refunds, churn, trust surveys) |
| Brand coherence | Primary | Long-run brand/retention measures |

**Failure mode of data-only:** Google's "41 shades of blue" experiment is the classic story; Doug Bowman cited the data-for-every-decision culture when he left Google in 2009 (blog post "Goodbye, Google") [anecdotal, primary source]. Many tiny optimizations can produce an incoherent whole. Also: an experiment can only pick among the options you had the taste to propose.

**Failure mode of taste-only:** confident redesigns that tank retention (many publicly reported cases of major redesign rollbacks) and the Browser Company's acknowledgment that Arc's novelty limited mainstream adoption [moderate].

**Operating rule:** on big products, small changes go through experiments; big redesigns are composed with taste and *every* accumulated learning (past tests, research, principles), then rolled out with holdouts and guardrails, and given time to pass change aversion before judging.

---

## 7. Quick taste checklist (run on any output)

- [ ] Is there one clear idea, and could you state it in a sentence?
- [ ] Does the eye land on the right thing first (blur test)?
- [ ] Is the type scale ≤7 sizes, spacing from one scale, one icon family?
- [ ] Is there conspicuous restraint — something you chose not to add?
- [ ] Are all states designed, with the same care as the hero state?
- [ ] Is the motion fast, purposeful, and absent from frequent actions?
- [ ] Is the copy specific and human?
- [ ] Does it feel like *this* product and no other (not generic)?
- [ ] Is it honest — would it survive the user reading the decision doc?
- [ ] Will it look right in five years?
- [ ] Have you stated your recommendation, confidence, and how to test it?
