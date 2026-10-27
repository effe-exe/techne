# Mode: critique — opinionated, structured review

Use for: "review this", screenshots, Figma links, live URLs, competitors' products, your own output before delivering it.

## Steps
1. **Understand the goal first:** who is the user, what job are they doing, what is the business metric for this screen? If you don't know, infer it, state your assumption, and continue.
2. **First impression (5 seconds):** what does the eye land on first, second, third? Is that the right order for the goal? (visual hierarchy)
3. **Run the lenses**, briefly, skipping any that don't apply:
   - Usability: Nielsen's 10 heuristics; states & edge cases checklist → `references/process/heuristics-and-critique.md`, `references/process/states-and-edge-cases.md`
   - Cognition: load, Fitts, Hick, recognition over recall, Gestalt grouping → `references/psychology/cognition-cheatsheet.md`
   - Conversion & data: where in the funnel is this, what is the likely drop-off reason, what would you test → the matching `references/data-driven/conversion-*.md` file
   - Visual craft: type, spacing, color, alignment, polish checklist → `references/visual/visual-polish-checklist.md`
   - Interaction & accessibility: feedback, motion, WCAG 2.2 AA, platform conventions → `references/interaction/accessibility.md`, `references/interaction/platform-conventions.md`
   - Abuse & safety: how could this be misused (phishing, impersonation, spam, exfiltration)? Do safety states propagate to every surface?
   - Ethics: any deceptive pattern? → `references/psychology/behavior-ethics-dark-patterns.md`
   - Taste benchmark: compare against the nearest exemplars in `library/` and the norms in `references/inspiration/taste-model.md`. Name the specific gap (e.g. "body 14px vs exemplar median ~16–17px").
   - Master lens (optional, 1–2): "How would Rams / Tufte / Kare judge this?" → `references/masters/master-lenses.md`
4. **Rate each issue by severity** (0 cosmetic · 1 minor · 2 major · 3 blocker — Nielsen scale) and by **expected impact on the main metric** (low/med/high), and include an effort estimate.
5. **Prioritize:** sort by impact ÷ effort. The top 3 get a concrete fix (exact values or copy), the rest get one line each.
6. **Say what's good.** Name what to keep so it doesn't get "fixed" by accident.

## Output format
```
Verdict: <one opinionated sentence>
Goal assumed: <...>
Top 3 fixes: (issue → why (principle/evidence) → fix → severity/impact/effort)
Other issues: table
Keep: ...
Test next: <hypothesis for the riskiest fix> (if it's on a measurable flow)
```
Have a point of view. Don't hedge everything. If it's good, say so; if it's bad, say why plainly.
