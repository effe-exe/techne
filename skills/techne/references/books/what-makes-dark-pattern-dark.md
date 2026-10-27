---
title: "What Makes a Dark Pattern... Dark? Design Attributes, Normative Considerations, and Measurement Methods"
author: "Arunesh Mathur, Jonathan Mayer, Mihir Kshirsagar"
year: 2021
domains: [ethics, law, research-methods]
evidence: "moderate"
---

# What Makes a Dark Pattern... Dark? — Mathur, Mayer & Kshirsagar

Use this when: a stakeholder says "that's not a dark pattern, it's just marketing" and you need a principled way to decide; you are designing a user study or A/B test to check whether a flow (consent, cancellation, upsell) manipulates users, and need to pick a baseline, metric and threshold; you want to sort a questionable pattern by *how* it works (changes the choices on offer versus distorts the information) instead of arguing over labels.

Source: https://arxiv.org/abs/2101.04843 (arXiv v1 of the CHI '21 paper, 27 pages). Read in full: literature review, attribute model, the four normative lenses, measurement methods and the Trick Questions case study (reference list skimmed).

## The big idea (3 sentences)
The dark-patterns literature has no single definition: 19 definitions in 20 papers plus law and regulator texts disagree on whether the design must be deceptive, intentional or harmful, and many listed patterns (nagging, forced action, confirmshaming) are perfectly honest. What unites them is that they all alter *choice architecture*, either by modifying the decision space (asymmetric, restrictive, disparate treatment, covert) or by manipulating the information flow (deceptive, information-hiding). Instead of hunting for one definition, researchers and designers should pick an explicit normative lens (individual welfare, collective welfare, regulatory objectives or autonomy) and measure against a neutral baseline with a stated threshold.

## Core concepts
- **Six attributes** (the five from `dark-patterns-at-scale.md` plus one):
  - *Asymmetric* — unequal burdens on the choices; the option that benefits the service is prominent and the user's option is buried.
  - *Restrictive* — removes options that should exist (marketing consent bundled with the terms; online sign-up but phone-only cancel).
  - *Disparate treatment* — disadvantages one group of users relative to another (pay-to-skip in games).
  - *Covert* — hides the influence mechanism (decoys, a "free" gift that inflates the apparent discount).
  - *Deceptive* — induces false beliefs (fake timers).
  - *Information hiding* — obscures or delays necessary information (hidden costs, hidden subscriptions).
- **Two themes** — modifying the decision space (the first four attributes) and manipulating the information flow (the last two).
- **Four normative lenses:**
  - *Individual welfare* — financial loss, privacy loss, cognitive burden (time and attention taxed until the user takes the easy option).
  - *Collective welfare* — competition (switching costs, tie-ins), price transparency, trust in the market (honest retailers pay when users learn to distrust all scarcity claims), unanticipated social consequences.
  - *Regulatory objectives* — does the design undermine a specific legal goal (GDPR consent, FTC deception or unfairness)? This lens is the easiest to turn into metrics, but its normative force is borrowed from the law it serves.
  - *Individual autonomy* — does it undermine decision-making itself, regardless of outcome? This lens is the broadest, which makes the line hardest to draw.
- **Measurement design** — a neutral baseline (specified by regulation, what users expect, a minimal variant that omits the suspect element, or a competitor's flow). A threshold (an absolute, difference or ratio, and the share of users misled). The affected population (including vulnerable sub-groups and third parties such as contacts who get friend-spam).
- **Thresholds cited** — the FTC's endorsement guides treat an undisclosed ad as a problem if it misleads "a significant minority". Luguri & Strahilevitz propose that if uptake is more than doubled versus a neutral design, the uptake is more likely than not attributable to the pattern.
- **Four facets of the 19 definitions** — characteristics of the UI ("tricks", "misleading", "coercive"), mechanism of effect on users (13 distinct ones, e.g. subvert intent, subvert preferences, undermine autonomy), role of the designer (intent, abuse of expertise), and benefit or harm. Nine definitions name no UI characteristic and ten have no benefit or harm element. Deception is *required* in some definitions and only *one alternative* in others.
- **Internal inconsistencies called out** — "trick"-based definitions don't fit confirmshaming or forced registration, which are transparent; "lack of consent" definitions don't fit grinding in games, which runs on continued consent; "deceptive functionality" doesn't fit nagging.
- **Neighbouring fields** — *nudge versus sludge* (Thaler and Sunstein later condemned "sludge": excessive friction that costs time or money, frustrates, stigmatises or blocks access); *manipulation* in philosophy (subverts decision-making and denies authorship, unlike persuasion or coercion; scholars split on whether it must be covert); *market manipulation* in law (Hanson & Kysar; Calo's "digital market manipulation" says platforms can learn and optimise exploitation per user).
- **Real examples used** — a HuffPost cookie banner where "OK" is one click and refusal is seven screens away; Savage X Fenty with online sign-up but phone-only cancellation; Instacart nagging delivery workers until they accepted lower-paid jobs; Microsoft's obstruction of uninstalling Internet Explorer (the antitrust case) as a competition harm; Virgin Active's double-checkbox opt-out as the Trick Questions case.
- **Why online is different from offline sharp dealing** — low cost, scale and sophistication, especially A/B testing and machine learning that can converge on manipulative designs without anyone intending it.

## Actionable heuristics for product design
- When debating whether something is a dark pattern, first name the attribute(s) (asymmetric, restrictive, disparate, covert, deceptive, info-hiding) and then the lens (whose welfare, which law, or autonomy). "It's honest, so it's fine" fails for asymmetric and restrictive patterns, which need no lie.
- When testing a consent, cancellation or upsell flow for manipulation, build a *neutral control*: the same flow with only the suspect element removed (e.g. unambiguous wording instead of a double negative). Compare (a) the choice rate, (b) the share of users whose choice matches their stated preference, and (c) comprehension. A variant that wins on (a) but loses on (b) or (c) is a dark pattern, not a win.
- When you need a decision rule, state it before the test. Default: if the variant more than doubles uptake versus the neutral control, or misleads a significant minority (take 10–20% as a working floor; the source names no number), treat it as manipulative and do not ship.
- When checking a consent screen for GDPR intent, run a comprehension check: show a screenshot and ask what each option does. If most users can't say, consent is not "informed" whatever the conversion rate. Also check whether users even *notice* that a choice exists (the autonomy check).
- When a design adds steps, prompts or waiting to the user's preferred path (cancel, decline, reject tracking), count it as a cognitive-burden harm even if the end state is reachable. Burden alone is a welfare loss, and nagging works by taxing attention.
- When a pattern seems harmless to each individual (friend invites, contact upload, referral spam), evaluate the collective lens: the cost lands on third parties who never saw the interface.
- When an optimisation system (multi-armed bandit, ML-generated copy) chooses among variants automatically, add guardrails for comprehension, complaints and refunds. Automated selection can converge on manipulative designs without intent.
- When a stakeholder argues "it's just like offline marketing", answer with the paper's three differences: near-zero cost, unlimited scale, and optimisation by A/B testing and machine learning that no salesperson could match. Then measure against a neutral baseline instead of debating the analogy.
- When segmenting results, check vulnerable groups separately (older users, low-income, less educated, children). A pattern can be benign on average and harmful for a sub-group.
- When choosing a research method per lens: for welfare, an experiment against the neutral design that measures money lost or the preference-match rate. For collective welfare, a trust survey before and after the task, or a market simulation. For regulatory objectives, a screenshot-comprehension survey against the legal test. For autonomy, measure whether users notice the options exist and whether they can exercise their preferred choice. Interviews and focus groups suit hard-to-reach sub-groups.
- When a flow bundles several suspect elements, test each one against its own baseline, or test the bundle as a whole and say so. Don't attribute the effect to the element you happen to dislike.
- When there is no obvious neutral design, use a competitor's flow for the same choice, or the space of near-identical variants. If your version is an outlier in uptake or preference-match against that space, that is evidence of a dark pattern.
- When a design raises switching costs (no export, cancel only by phone, tied products), assess it under competition as well as user welfare. Dominant products can make a captured choice look like a free one.
- When the honest version loses, report it as "the deceptive variant extracts X more, at a cost to user preference-match of Y". This reframes the result in the lenses leadership and regulators care about.

## Evidence & caveats
- This is a conceptual, normative and methods paper, not an empirical one. Its value is analytic clarity, and it has no new user data. The case study (Trick Questions) is a sketch of possible studies, as the authors say themselves.
- The literature review is solid but small (20 academic papers plus 4 legal or regulator documents, compiled Dec 2020). The prevalence figures it cites (Utz et al. >50% of 1,000 EU cookie banners; Di Geronimo et al. >95% of 200 apps; Nouwens et al. only 11.8% of UK CMPs pattern-free; Soe et al. 297/300 news consent notices) are secondary citations here.
- The authors acknowledge that each lens has weaknesses: welfare needs a baseline preference that is unstable, the regulatory lens is instrumental, autonomy sweeps too broadly and assumes idealised deliberation, and collective welfare needs a cost-benefit framework. They do not resolve which lens wins.
- The "more than doubled" threshold comes from Luguri & Strahilevitz, a legal-burden-of-proof argument. It is a proposal, not an empirically validated cutoff.
- The FTC section is useful context: deception is judged from the "reasonable consumer" perspective; unfairness requires substantial injury that is not reasonably avoidable and not outweighed by benefits. The authors note that the FTC had recently focused on "significant injuries" like financial loss, on an efficient-market assumption that competition punishes bad actors. They question that assumption, but they don't test it.
- The four lenses can disagree on the same design: the paper notes that the autonomy lens flags interference even when the outcome benefits the user, which the welfare lens would not. It offers no tie-breaker, so a team must choose and state its lens.
- The market-trust argument (users who learn to distrust scarcity claims also ignore honest deals) is plausible but supported here only by a single cited study on scarcity resistance. Treat it as a hypothesis.
- US-centric legal framing (FTC §5, DETOUR Act, CPRA). The EU material is lighter, and the DSA and Data Act came later.

## Disagreements with other references
- `psychology/behavior-ethics-dark-patterns.md` §1 lists the six attributes and four lenses correctly but attributes them to "Mathur, Kshirsagar & Mayer"; the paper's author order is Mathur, Mayer, Kshirsagar. More substantively, the ethics file's 8-test checklist is a designer heuristic, while this paper argues those judgments should be *measured* against a baseline with a pre-set threshold. Keep the checklist for speed, and use this paper's method when the call is contested or the stakes are high.
- This paper notes a live philosophical dispute: Susser et al. (`books/online-manipulation-susser.md`) say manipulation must be *covert*, while Wood and Noggle say it can be overt. Our ethics gate in SKILL.md ("works around reasoning") is closer to the broader view. Treat overt pressure (confirmshaming, nagging) as out of bounds anyway, on the welfare and symmetry grounds this paper gives, even if a strict covertness test would let it pass.
- `psychology/behavior-persuasion-toolkit.md` frames choice architecture as a toolkit of levers to pick from. This paper reminds us that the same levers become dark patterns once they impose unequal burdens or hide information. The toolkit's "weakest-pressure lever first" ordering is compatible, but each lever still needs the attribute check above.
- `books/deceptive-patterns-brignull.md` prefers a harm-outcome and legal-risk framing for practitioners, while this paper insists on measurement against a baseline. Use Brignull when persuading leadership, and this paper when you need evidence that would survive scrutiny.
- `data-driven/experimentation-playbook.md` says to measure value to the user and add guardrails. This paper gives the concrete measurement design (neutral control, preference-match rate, comprehension rate) that the playbook leaves implicit.

## Best quotes (< 25 words each, max 5)
- "The current academic discourse about dark patterns is built on a shaky foundation."
- "There is nothing inherently misleading about many of the dark patterns described in the literature."
- "Setting the threshold requires careful normative justification."

## Related
- `psychology/behavior-ethics-dark-patterns.md`, `psychology/behavior-law-consent-cancellation.md`, `data-driven/experimentation-playbook.md`, `process/research-methods-selector.md`
- `books/dark-patterns-at-scale.md`, `books/online-manipulation-susser.md`, `books/deceptive-patterns-brignull.md`
