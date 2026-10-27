---
title: "Online Manipulation: Hidden Influences in a Digital World"
author: "Daniel Susser, Beate Roessler, Helen Nissenbaum"
year: 2019
domains: [ethics, philosophy, psychology, personalization]
evidence: "n/a"
---

# Online Manipulation: Hidden Influences in a Digital World — Susser, Roessler & Nissenbaum

Use this when: deciding whether a persuasive, personalised or nudging feature is manipulation or legitimate persuasion; reviewing personalisation, targeting, recommendation, notification timing or AI-driven copy that adapts to the individual user; writing the "transparency" part of an ethics review (what must be disclosed for an influence not to count as hidden); designing for workers, gig drivers or other users whose livelihoods depend on the platform.

Source: https://georgetownlawtechreview.org/online-manipulation-hidden-influences-in-a-digital-world/GLTR-01-2020/ — the publisher's PDF, 4 Geo. L. Tech. Rev. 1 (2019), 45 pages (the SSRN start URL, abstract 3306006, blocked automated download; this is the published version of the same paper). Read in full, including the footnotes.

## The big idea (3 sentences)
Manipulation is *hidden influence*: covertly subverting someone's decision-making by exploiting their cognitive, emotional or other vulnerabilities, so that they cannot recognise their choice as fully their own. That sets it apart from persuasion (an open appeal to reasons or incentives) and from coercion (openly removing acceptable options), and it means manipulation need not involve any lie. Digital technology makes manipulation unusually easy and powerful, because surveillance reveals each person's vulnerabilities, platforms are dynamic choice architectures that can be personalised to exploit them, and the technology itself recedes from view, so the core harm is to autonomy, individual and democratic, not only to wallets.

## Core concepts
- **Influence** (neutral umbrella) splits into:
  - *persuasion* — a forthright appeal to the person's conscious decision-making; it changes how they understand their options (arguments) or the options themselves (resistible incentives);
  - *coercion* — irresistible incentives, or the removal of every acceptable alternative; blunt and known to the target;
  - *manipulation* — covertly "taking hold of the controls". You feel *used* when coerced and *played* when manipulated.
- **Three features of manipulative practices** — (1) *hidden* (the only necessary condition), (2) *exploits vulnerabilities* (the means), (3) *targeted* (it makes things worse: the more personalised, the more worrying). The analysis is about *practices* a reasonable person should expect to manipulate, because whether a given person was manipulated (a "success concept") is often unknowable.
- **Hidden, defined** — it is not enough that users don't know every psychological mechanism. An influence is hidden when it breaks people's usually reliable assumptions about why the choice environment is the way it is (the authors' example: tobacco warnings secretly paid for by the alcohol lobby).
- **Deception is a tool, not the definition** — true information framed to exploit a bias (anchors, availability, social comparison) can still manipulate. Nearly all deception is manipulation, but not all manipulation is deception.
- **Nudges** — a nudge is manipulative only if it is hidden *and* exploits a vulnerability. Most Thaler–Sunstein nudges are transparent and correct biases rather than exploit them, and they are not targeted. Hypernudging (Yeung), meaning data-driven, individually adaptive nudges, is the dangerous form.
- **Overt pressure is not manipulation on this account** — guilt trips and temptations you're aware of are coercion or "bad reasons". This is contested by Noggle, Barnhill and Wood.
- **Three reasons online is worse** — surveillance (vulnerabilities are cheap to detect, including "disclosure ratcheting" and A/B-tested "means-based targeting", Calo); platforms (choice architectures that adapt per person at the optimal moment: "create suckers rather than wait for one to be born"); mediation (technology is like eyeglasses, looked through rather than at).
- **Vulnerability types** — ontological (shared by all humans) versus contingent: structural (group position, poverty, being heavily surveilled) and individual (history, habits, tech-savviness). Online manipulation targets *individual* vulnerabilities.
- **Autonomy** — relational and socially situated, not idealised rational choice. It requires *competency* (the ability to deliberate) and *authenticity* (the ability to endorse one's reasons). Hidden influence undermines both, even when the outcome happens to match what the person would have chosen anyway.
- **Two levers of influence** — change the options (the decision space) or change how options are understood (the internal process). Persuasion and coercion can use either openly. Manipulators often change the *situation* precisely to interfere with the *process*, so the person/situation split breaks down online.
- **Why Noggle's "deviation from ideal beliefs, desires and emotions" isn't enough** — friends openly tempting you with a martini do not manipulate you (you are coerced or moved by bad reasons). Friends covertly seeding articles that make you skip the drink *do* manipulate you, even though the outcome is better for you. Hiddenness, not the direction of the outcome, is what matters.
- **Case verdicts** — Facebook targeting teens' emotional states: manipulative "beyond any doubt" if it was done (hidden, targeted, exploitative). Cambridge Analytica: manipulative practice, effect unknown. Uber heat maps that conflate predicted and real-time demand: manipulative. Uber auto-queuing and "don't stop now" notifications: pressure, but not hidden or targeted, so not manipulation on this account, though they would become so if timed to a driver's personal financial desperation.
- **Kantian framing** — manipulation treats people as mere means, things with a price rather than dignity. Waldron's worry about self-respect applies more strongly when the goal is profit rather than paternalism.
- **Regulatory implication** — notice-and-consent (US privacy self-management) cannot handle influence users can't see. Burden and accountability should shift to the few powerful actors who control the tools.
- **Context matters** — society tolerates more influence on consumer choices than on political or workplace choices, so the bar rises with the stakes for autonomy.

## Actionable heuristics for product design
- When reviewing any persuasive element, ask three questions in order. Is the influence hidden (would users be surprised to learn why the screen looks this way)? Does it work by exploiting a bias or emotional state rather than giving reasons? Is it targeted at this individual's weak spots? A yes to the first plus either of the others means redesign.
- When personalising *what* is shown (content, offers), that can be fine. When personalising *how hard to push* based on an inferred susceptibility (mood, fatigue, financial stress, "susceptible to scarcity"), treat it as manipulative by design and don't build it.
- When an influence would only work if users didn't know about it, it fails. Test it by adding an honest, visible explanation ("We're showing annual first because most teams save 20% with it"). If the lift disappears with the explanation, the lift came from hiddenness.
- When disclosure is used as the fix, disclose the *reason and the targeting*, not just the fact ("Recommended because you watched X"; "Ad shown because you are 25–34 in Milan"). The authors' test is whether users' everyday assumptions about why they see this still hold.
- When timing prompts, never time them to moments of detected weakness (late-night sessions, a streak about to break, payday, emotional posts). Facebook's reported targeting of teens who felt "worthless" or "insecure" is the paradigm case.
- When designing for workers or suppliers (drivers, couriers, sellers, creators), don't use goal-gradient nudges tied to arbitrary targets ("$10 away from $330!"), heat maps that blend predicted demand into real-time demand, or default auto-queuing without an easy, persistent off switch. Earnings prompts indexed to a person's bills coming due would cross into manipulation.
- When a design is overt pressure (a guilt-trip decline, nagging), don't use this paper to defend it as "not manipulation". It still fails the welfare and symmetry tests in `psychology/behavior-ethics-dark-patterns.md`. This framework covers only one of the ways influence goes wrong.
- When running experiments that optimise persuasion per user segment, document what vulnerability each winning variant may be exploiting. Calo's "means-based targeting" is exactly A/B testing pointed at weak spots.
- When the domain is political, civic, health or employment, raise the bar: no microtargeted persuasion on inferred psychological traits, and strong transparency on why each message was shown.
- When collecting data that could reveal vulnerabilities (emotional state, finances, health, addiction signals), restrict its use for persuasion: no use in ad targeting, offer timing or price framing. Collecting it creates the means for manipulation even if no one intends it today.
- When an interface uses true information to steer (e.g. reminding users of a salient but unimportant fact, or what friends did), check that the purpose is the one users would assume. True framing used for a concealed purpose still counts as manipulation here.
- When a feature is "seamless" and recedes from view (auto-play, auto-queue, pre-filled defaults, background data use), give users periodic, visible moments of choice and an easy way to inspect what is happening. Invisibility is exactly what makes influence hidden.
- When intent is uncertain (a team optimised a metric and did not design to manipulate), don't treat that as a pass. The authors require intent for the concept, but EU law looks at effect. Act on the effect.
- When native ads or sponsored items sit in a feed, label them visibly. Native advertising is the paper's clearest example of a manipulative online practice, because it deliberately blends information and advertising.

## Evidence & caveats
- This is philosophy and legal theory: a conceptual definition and a normative argument, not empirical findings. It has no effect sizes. The cases (Facebook teen targeting, Uber driver nudges, Cambridge Analytica) are drawn from journalism, and the authors concede the CA effects are unproven and Facebook denies the targeting.
- Its central claim, that hiddenness is necessary for manipulation, is contested in the literature it reviews (Noggle, Barnhill, Gorin, Wood), and it disagrees with Sunstein, who treats hiddenness as typical but not defining.
- "Hidden" is fuzzy at the edges (how much about the mechanism must users know?). The authors answer with "usually reliable assumptions", which is workable but still a judgement call.
- Requiring *intent* for manipulation differs from EU law (the DSA covers "purpose or effect") and from the UCPD's no-intent standard. For compliance, don't rely on lack of intent.
- The objections section is candid. It is hard to show that any single person was manipulated, so the authors judge *practices* by concealment, exploitation and targeting. The counterfactual (would the user have acted the same anyway?) is set aside because the harm is to the decision process. Structural influences such as gender stereotyping are excluded as a different problem.
- Some empirical claims inside the cases are thin: psychographic microtargeting (Matz et al.) is cited as effective, but its real-world size is debated, and the paper itself declines to claim Cambridge Analytica changed outcomes.
- The paper gives no operational test for "targeted". In product terms, read it as "varies by inferred individual traits or states, not just context".
- Written in 2019, before generative AI. The hypernudging concerns apply even more strongly to LLM-driven persuasion now.

## Disagreements with other references
- SKILL.md §3 and `psychology/behavior-ethics-dark-patterns.md` §0 define manipulation as working "around" reasoning, and the ethics file's eight tests include transparency, symmetry, vulnerability and family tests. Susser et al. would narrow "manipulation" to *hidden* influence and call overt guilt or pressure coercion or bad reasons. Keep our broader gate: it is stricter, and on overt pressure the welfare and autonomy lenses in `books/what-makes-dark-pattern-dark.md` back it. Use Susser's *targeting* criterion as an additional red flag the ethics file under-weights.
- `psychology/behavior-ethics-dark-patterns.md` §1 cites this paper as defining manipulation as hidden influence "steering people toward ends they did not choose". The paper explicitly says manipulation can occur even when the target ends up where they would have chosen anyway (the second martini example). The harm is to the process, not only the outcome. Correct that gloss.
- `psychology/behavior-persuasion-toolkit.md` endorses defaults and social proof as levers when real. Susser et al. agree that transparent, untargeted nudges that correct biases are not manipulative, but flag social nudges whose purpose is concealed (the Minnesota "90% pay their taxes" letter, depending on presentation) as possibly manipulative. Pair true social proof with its honest purpose.

- `books/deceptive-patterns-brignull.md` treats nagging, confirmshaming and forced action as manipulative patterns. On Susser's account they are coercive pressure or bad reasons, not manipulation, because they are overt. The disagreement is about labels, not verdicts: all three references reject them. In critiques, call them "pressure" or "obstruction" rather than "manipulation" when precision matters, for instance with legal.
- `data-driven/conversion-onboarding-activation-retention.md` allows variable rewards for content discovery. Susser's lens adds a condition: such loops become manipulative when they are personalised to a user's measured compulsions and that personalisation is not disclosed.

## Best quotes (< 25 words each, max 5)
- "At its core, manipulation is hidden influence—the covert subversion of another person's decision-making power."
- "When a person is coerced that person feels used, when a person is manipulated that person feels played."
- "Manipulation, therefore, need not involve outright deception; the truth can also be used to control our decision-making."
- "Firms will increasingly be in the position to create suckers, rather than waiting for one to be born." (Calo, quoted)

## Related
- `psychology/behavior-ethics-dark-patterns.md`, `psychology/behavior-persuasion-toolkit.md`, `psychology/behavior-law-consent-cancellation.md` (EU AI Act Art. 5 on manipulative AI), `data-driven/experimentation-playbook.md`
- `books/what-makes-dark-pattern-dark.md`, `books/deceptive-patterns-brignull.md` (persuasion profiling / hypernudging chapter)
