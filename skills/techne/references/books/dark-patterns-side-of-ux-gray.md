---
title: "The Dark (Patterns) Side of UX Design"
author: "Colin M. Gray, Yubo Kou, Bryan Battles, Joseph Hoggatt, Austin L. Toombs"
year: 2018
domains: [ethics, psychology, process]
evidence: "moderate"
---

# The Dark (Patterns) Side of UX Design — Gray, Kou, Battles, Hoggatt & Toombs (CHI 2018)

Use this when: you need a short, strategy-level vocabulary (nagging, obstruction, sneaking, interface interference, forced action) to name what is wrong with a flow in a critique or ethics review; a stakeholder argues "it tested well, so it's fine"; you are deciding whether a persuasive technique has crossed into manipulation.

Source: https://par.nsf.gov/servlets/purl/10057203 (NSF Public Access Repository accepted manuscript; the work was NSF-funded, grant #1657310; official record DOI 10.1145/3173574.3174108). Read in full.

## The big idea (3 sentences)
Practitioners coined "dark patterns" (Brignull, 2010) to name interfaces built to trick users, but Brignull's list mixes contexts, strategies and outcomes, so the authors collected 118 practitioner-shared examples and re-coded them by the designer's *strategy*. Five strategies cover the corpus: nagging, obstruction, sneaking, interface interference and forced action, each nesting several of Brignull's original types. Because many of these strategies are Fogg's persuasive strategies turned against the user, the paper argues that no checklist can settle the question; the remedy is designer character, responsibility and ethics education.

## Core concepts
- **Dark pattern (working definition)** — designers use knowledge of human behavior and users' desires to implement deceptive functionality that is not in the user's best interest; user value is replaced by shareholder value.
- **Anti-pattern vs dark pattern** — practitioners separate bad design from lack of skill (anti-pattern) from bad design by intent (dark pattern), often via Hanlon's razor. The paper uses intent as a lens but does not require it to be proven.
- **Corpus** — 118 artifacts gathered over two months by two researchers (one UX, one computer science): 45 from social media (including a bot collecting #darkpatterns tweets), 40 from practitioner blogs, 19 from news, 10 from the authors' own use, 4 from darkpatterns.org. Coded first with Brignull's 11 types, then by open coding (constant comparative method).
- **Nagging** — a minor, repeated redirection of expected functionality: pop-ups, interruptions, prompts with no permanent "no". Examples: Instagram's notification modal with only "Not Now" and "OK"; Google location consent where "Don't show again" is a tiny checkbox; Uber nudging drivers toward an arbitrary daily earnings goal (exploiting income targeting).
- **Obstruction** — making a task harder than it needs to be to dissuade it. Includes Brignull's *Roach Motel* (easy in, hard out; Stamps.com phone-only cancellation in business hours, hidden in the FAQ), *Price Comparison Prevention* (uncopyable product info), and a new subtype, *Intermediate Currency* (real money converted to virtual credit to blur the real cost). Also iOS 6 ad tracking on by default, buried and confusingly worded.
- **Sneaking** — hiding, disguising or delaying information relevant to the user so they act in a way they would object to if they knew. Includes *Forced Continuity*, *Hidden Costs* (a 99¢ banner that is really a four-week trial), *Sneak into Basket*, *Bait and Switch* (a red X that does something other than close; a "buy moves" button placed where "new game" usually is, exploiting muscle memory). Sneaking was the most common type in practitioner talk.
- **Interface interference** — manipulation of the UI that privileges some actions over others, confusing users or hiding options. Three subtypes:
  - *Hidden information*: relevant options disguised as irrelevant (an opt-out of data selling inside small print during bank sign-up).
  - *Preselection*: the default is what the business wants, often against the user's interest.
  - *Aesthetic manipulation*: form used to mislead about hierarchy, content type or urgency. Its children are *toying with emotion* (a countdown that silently resets; confirmshaming copy like a decline link that mocks the user), *false hierarchy* (a "custom install" option greyed so it looks disabled), *disguised ads* and *trick questions* (opt-out checkboxes, double negatives).
- **Forced action** — the user must do something unrelated to get or keep functionality: Windows 10 blocking shutdown without updating; agreeing to data transfer in order to unsubscribe. Subtypes: *Social Pyramid* (recruit friends to unlock features, includes Friend Spam), *Privacy Zuckering*, and *Gamification* in the grinding sense (levels tuned so the non-paying player must grind or pay).
- **Two gulfs** — dark patterns attack both Norman's gulf of execution (what can I do here?) and gulf of evaluation (what will happen?). Interference and obstruction leave users "flying blind"; nagging and forced action show only the options the business wants; sneaking removes the choice entirely.
- **The usability paradox** — some dark patterns test well on usability (forced action and nagging are easy to complete) and on shareholder metrics, at the cost of user choice. Evaluation criteria decide what looks "good".
- **Persuasion turned** — tunneling and reduction resemble forced action and obstruction; tailoring and suggestion can become interface interference; conditioning can become sneaking or nagging. The same strategy can serve or exploit.
- **Design character and the guarantor of design** — after Nelson and Stolterman: the designer is answerable for outcomes, including what happens when a design meant for one audience reaches a broader or vulnerable one. The authors explicitly say their categories are not an ethical checklist.

## Actionable heuristics for product design
- When critiquing a flow, label each problem with one of the five strategies before naming the specific pattern, because strategy-level labels make it easy to see that a "small" prompt and a cancellation maze are the same kind of move (nagging, obstruction).
- When a permission or upsell prompt offers only "Not now" and "OK", add a refusal that sticks, because a prompt with no permanent "no" is nagging by definition.
- When cancellation, opt-out or account deletion needs more steps, channels (phone) or hours than sign-up, make the exit path symmetric with the entry path, because asymmetry is obstruction (Roach Motel).
- When you introduce credits, coins or tokens, always show the real-money equivalent at the moment of spending, because a virtual currency used to blur cost is obstruction (intermediate currency).
- When a price, trial term, renewal or added item could change the user's decision, show it at the first point the offer appears, not at the last step, because late disclosure is sneaking.
- When you reuse a screen position for a new action, never put a paid or destructive action where users have learned to find a free or safe one, because exploiting muscle memory is bait and switch.
- When designing defaults, preselect only what a typical user would choose for themselves, and never preselect data sharing or marketing consent, because preselection works by borrowing the user's trust that defaults are in their interest.
- When two choices are parallel (express/custom, accept/reject), give them parallel visual weight and never style an available option as disabled, because false hierarchy makes an option seem unavailable.
- When writing decline copy, keep it neutral ("No thanks"), because shaming copy is toying with emotion.
- When a timer or scarcity message appears, it must be true and must not reset, because a fake countdown is aesthetic manipulation and, in many places, illegal.
- When a feature requires an unrelated action (recruit friends, share contacts, accept data sale, install an update now), decouple it or offer an equal alternative, because coupling is forced action.
- When a design "tests well", ask by whose criteria: add a user-value metric (task completed as the user intended, refunds, complaints, opt-out success) next to conversion, because the paper shows dark patterns can pass both usability and business tests.
- When a pattern was designed in good faith but users keep misreading it in a harmful way, treat it as dark once you know, because the paper puts responsibility on the designer after awareness of harm, not only on intent.
- When the team debates whether a tactic is "just persuasion", map it to Fogg's strategies and ask whether the user would endorse the outcome if they saw the mechanism, because the paper shows persuasive and dark strategies are the same tools aimed differently.

## Evidence & caveats
- Moderate as a taxonomy, weak as evidence of effect: this is a qualitative content analysis of a convenience sample of 118 examples that practitioners chose to share online. It shows what practitioners *call* dark; it does not measure prevalence or harm. For prevalence see `references/books/dark-patterns-at-scale.md`.
- Coding was done by the research team; no inter-rater reliability is reported, and the hierarchy was built by the authors' interpretation.
- Categories overlap: the Salesforce unsubscribe example appears under both sneaking and forced action, and hidden information also appears inside obstruction examples. Treat the five strategies as lenses, not exclusive bins.
- Several examples are dated (iOS 6, Windows 10 update behavior, FarmVille) and some were fixed later, as the paper itself notes for iOS ad tracking.
- The paper is influential: its five strategies were the base for later taxonomies (Mathur et al. 2019; Gray et al. 2024 ontology; Brignull's later strategy list builds on it). It is a starting point, not the final word.
- Its ethical argument (designer character over codes) is a normative position, not a finding; it explicitly declines to offer a checklist, so our checklists add rules the paper did not.

## Disagreements with other references
- `references/psychology/behavior-ethics-dark-patterns.md` already lists the five strategies (line ~25) and turns them into a 16-row catalog with ethical alternatives. This paper is the source of that taxonomy; the catalog is more practical. Use the catalog for fixes, this note for naming and arguing.
- `references/books/what-makes-dark-pattern-dark.md` (Mathur et al. 2021) criticizes "deceptive functionality" definitions like this paper's because nagging and forced action are transparent, not deceptive. Trust Mathur on definitions: judge by effect on the choice architecture and user welfare, not by whether a trick is hidden.
- `references/books/online-manipulation-susser.md` requires manipulation to be covert; Gray et al. include overt tactics (nagging, confirmshaming). Our ethics gate follows the broader view.
- `references/books/deceptive-patterns-brignull.md` folds friend spam and privacy zuckering into forced action, as this paper did, and adds strategies (exploiting perception, addiction). Use Brignull's current 18-type names when citing to regulators.
- `references/books/fogg-behavior-model.md` treats persuasive strategies as design tools; this paper is the warning label: the same strategies are already used against users.

## Best quotes (< 25 words each, max 5)
- "user value is supplanted in favor of shareholder value."
- "some instances of dark patterns test well from a usability perspective (e.g., forced action, nagging), but do so at the expense of user choice."
- "We do not propose the use of our dark patterns strategies as an ethical checklist"

## Related
- `references/psychology/behavior-ethics-dark-patterns.md` (catalog and ethical alternatives)
- `references/books/dark-patterns-at-scale.md` (prevalence at scale, built on these categories)
- `references/books/what-makes-dark-pattern-dark.md` (definitions and normative lenses)
- `references/books/deceptive-patterns-brignull.md`, `references/books/edpb-deceptive-design-patterns.md`
- `references/books/fogg-behavior-model.md`, `references/books/online-manipulation-susser.md`
- Later work not read here: Gray et al. 2024, "An Ontology of Dark Patterns Knowledge" (CHI).
