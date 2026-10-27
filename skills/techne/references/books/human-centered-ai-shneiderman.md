---
title: "Human-Centered AI"
author: "Ben Shneiderman"
year: 2022
domains: [future, ai, interaction, ethics, governance]
evidence: "mixed"
basis: "author's free material, not the full book"
coverage: medium
---

# Human-Centered AI — Ben Shneiderman

Use this when: you are deciding how much an AI feature or agent should do on its own versus what the user steers; a team frames a feature as "the AI teammate/assistant/agent" and you want to test whether a tool, appliance or control-panel framing would serve users better; you need a checklist of the engineering, management and oversight practices that make an AI product reliable, safe and trustworthy rather than only "ethical on paper".

Basis: the book (Oxford University Press, 2022) was not read. These notes come from Shneiderman's own free material: the arXiv preprint of his IJHCI 2020 paper, which he labels an "extract from forthcoming book by the same title" (read in full); his essay "Human-Centered AI" in *Issues in Science and Technology* (Winter 2021, read in full); the book excerpt "Teammates and Tele-bots" (Chapter 14) that OUP licensed to Engadget (read in full); his one-page list of 15 governance recommendations hosted on the UMD HCIL site; and the book's official project page with the table of contents and introduction. The book's four Parts are: the two-dimensional framework (Part 2), design metaphors (Part 3), governance (Part 4). Parts 2 and 4 are well covered here; Part 3 is covered by one chapter and the essay; Part 1 and the case-study chapters are not.

## The big idea (3 sentences)
The usual "levels of automation" scale (Sheridan–Verplank, SAE driving levels) wrongly assumes that every gain in automation costs human control; Shneiderman splits control and automation into two independent axes and argues the target for most consequential systems is high automation and high human control at once. Designers should build AI as supertools, tele-operated devices, control centers and active appliances that amplify people, rather than as human-like teammates or autonomous agents, because computers are not responsible agents and have different strengths (sensors, data, displays, effectors). Reliability, safety and trustworthiness come from three nested layers: sound team engineering practices, an organization's safety culture, and independent industry-level oversight.

## Core concepts
- **Two-dimensional HCAI framework** — x-axis computer automation, y-axis human control. Four regions:
  - *upper right*: the reliable, safe and trustworthy (RST) goal for complex, poorly understood, high-variation tasks;
  - *lower right*: full computer control, justified only where action must be faster than humans can react (airbags, anti-lock brakes, pacemakers), and so needing extreme testing;
  - *upper left*: human mastery, where the point is the doing (piano, baking, cycling), so automation should coach, not replace;
  - *lower left*: simple devices (clocks, mousetraps).
- **Two danger zones** — *excessive automation* (the 737 MAX MCAS system existed without pilot training or a clear override; Tesla's "Autopilot" name implies more than the system does) and *excessive human control* (letting people make deadly slips that an interlock would have blocked).
- **Interlocks and guards** — software constraints that block dangerous inputs (reverse thrust only on the ground, oven door locked above 600°F, patient pain pumps with lockout periods and dose caps). Shneiderman treats "human error" as a design failure. He also warns that over-eager interlocks annoy people (cars that lock doors too often).
- **Prometheus Principles** (his name for direct-manipulation rules applied to automation):
  - consistent interfaces so people can form, express and revise intent;
  - continuous visual display of the objects and actions of interest;
  - rapid, incremental, reversible actions;
  - informative feedback for every action;
  - progress indicators for status;
  - completion reports that confirm the result.
- **Canonical good examples** — thermostat, elevator, phone camera (auto exposure and focus, but the user frames, picks the moment, can tap to refocus), dishwasher (set intent, let sensors run, can interrupt).
- **Supertools, tele-bots, control centers, active appliances** — Shneiderman's preferred design metaphors, set against intelligent agents, teammates, autonomous systems and social robots. Bloomberg Terminal, Mars rover control rooms and the da Vinci surgical robot are his exemplars.
- **"Nass's fallacy"** — the fact that people respond socially to human-like computers does not show that human-like designs perform best. Nobody tested the non-social alternatives.
- **Computers are not responsible** — legally or morally. Responsibility stays with operators and the organizations that build the systems. That is why he prefers the term "remotely piloted vehicle" to "autonomous vehicle".
- **"Humans in the group; computers in the loop"** — his reversal of "human in the loop", which in his view treats human control as a grudging extra.
- **Reliable / safe / trustworthy as three layers:**
  - *team (reliable)*: audit trails, software engineering workflows, verification and validation, bias testing, explainable UIs;
  - *organization (safety culture)*: leadership commitment, safety-oriented hiring and training, reporting of failures and near misses, internal review boards, alignment with industry standards;
  - *industry (trustworthy)*: government regulation, external audits, insurance, NGOs and civil society, professional bodies.
- **Flight data recorder for every robot** — log AI activity so failures and near misses can be analyzed afterwards, as civil aviation does.
- **Prevent the need for explanations** — rather than bolting explanations onto an opaque decision, give users visual control panels that show their progress through the process, so the decision is legible as it happens.
- **Empiricism over rationalism** — he frames AI-vs-HCAI as Aristotle versus da Vinci: algorithmic elegance versus observing real users in messy contexts; ML "repeats the past, including its mistakes" (Google Flu Trends).

## Actionable heuristics for product design
- When scoping an AI feature, place it on both axes separately: how much the system does, and how much the user can see, steer and override. If a proposal raises automation while lowering control, ask what design would raise both. "Choose a point on one slider" is the framing he rejects.
- When the task is complex, high-variation or high-stakes (money, health, legal, publishing on someone's behalf), aim for the upper right: let the AI do the heavy lifting, but keep intent-setting, preview and override with the user, because responsibility and context sit with the user.
- When the action must happen faster than a person can react, full automation is legitimate. Then pay for it in testing, monitoring at scale and failure logging, not in UI.
- When the activity is valued for its own sake (writing for pleasure, learning, craft, play), default to the upper left: coach, review and suggest, and don't do it for them, because mastery and self-efficacy are the point.
- For every AI action, apply the Prometheus checklist: show the current state, let users state intent in a consistent way, make the step small and reversible, acknowledge it at once, show progress, and report completion. Phone-camera autofocus with tap-to-override is the pattern to copy.
- When users can cause serious harm with a slip, add an interlock or range check (a lockout, a cap, a precondition) rather than a warning they will click past. Keep interlocks narrow, because over-broad ones become nuisances that get disabled.
- When naming or marketing an AI capability, never let the name promise more autonomy than the system has ("Autopilot"). Over-claiming lowers vigilance exactly where it is needed.
- When tempted to give an assistant a persona, emotions or a "teammate" frame, first prototype the non-anthropomorphic alternative: a dashboard, a direct-manipulation tool, an information-dense display. Users may do better with it. Use the persona only if it wins in testing.
- When a system "explains" its decisions, first ask whether a visible process (status panel, intermediate results, editable parameters) could make the explanation unnecessary.
- Log every consequential AI action with enough context to replay it (inputs, model version, output, user response). Review failures and near misses as a routine practice and feed them back into design.
- For recommender and feed products, give users real control of filters and what they are shown. Shneiderman argues that if platforms won't, regulation should.
- When a team argues that oversight will slow it down, use his auto and drug safety argument: well-designed requirements created markets and innovation. Plan oversight (audits, incident database entries, review boards) into the roadmap, not after the launch.
- Design for de-skilling and vigilance decay: if users rarely intervene, they lose the ability to intervene. Add periodic manual moments, practice modes or clear handover prompts in systems that may fail.

## Evidence & caveats
- This is a framework and position book, not an empirical one. The two-dimensional chart is conceptual, has no units, and Shneiderman himself lists objective measures of control and automation as future research. Placements on it are judgment calls.
- The evidence offered is mostly illustrative cases (737 MAX, Tesla crash per NTSB, Google Flu Trends, Patriot missile friendly-fire, elevators, cameras), which are vivid but selected to fit the argument.
- The claim that high automation plus high control "increases human performance" rests on decades of HCI work on direct manipulation and on human factors literature (Bainbridge's ironies of automation, Parasuraman et al.). It is a reasonable synthesis, but the paper doesn't test it directly.
- Critics in human-automation research (Johnson, Bradshaw, Klein et al., coactive design) argue that teaming and interdependence are useful models. Shneiderman rejects the teammate metaphor outright, which is a strong opinion. Today's LLM agents act on open-ended goals, which puts pressure on his "supertool" framing; it is still a useful corrective, but not settled.
- Much of the free material dates from 2020–2021, before LLM chat assistants were mainstream. The 2025 edition may revise this. Not checked.
- His governance list is a catalogue of practices borrowed from aviation, medicine and finance, without evidence that each works for AI specifically.
- The Engadget excerpt quotes Nass and Groom ("robots fail as teammates"); I have not checked the original study.

## Disagreements with other references
- `references/future/human-ai-trust-errors-uncertainty-oversight.md` already summarizes the two-axis framework next to Parasuraman–Sheridan–Wickens stages and Horvitz's mixed-initiative principles. Use Parasuraman's stages to decide *where* in the pipeline to automate, Horvitz to decide *when* the system should act on inferred intent, and Shneiderman for the overall goal (raise both axes) and the governance layer.
- `references/future/ai-patterns-agent-delegation-ux.md` treats delegation to agents as a contract with an "autonomy dial" per action class. That dial is the one-dimensional framing Shneiderman criticizes. In practice they fit together: keep the dial per action, but for each level also ask how visible and steerable the work is (his second axis). The agent file is more current for LLM agents. Trust it on agent patterns and Shneiderman on first principles.
- The agent file assumes an agent can be a "collaborator". Shneiderman says computers are never teammates. Treat this as a framing dispute. The practical overlap (predictable, controllable, responsible humans) matters more than the label.
- `references/books/magic-ink.md` (Bret Victor) agrees on information-rich displays over interaction-heavy flows, which supports Shneiderman's "control center" and "prevent the need for explanations".

## Best quotes (< 25 words each, max 5)
- "Humans in the group; computers in the loop." (*Issues*, 2021)
- "Computers with machine learning repeat the past, including its mistakes." (*Issues*, 2021)
- "Imperceptible AI is not ethical AI." (quoting IBM's AI guidelines, IJHCI preprint)
- "Computers are not people and people are not computers." (book excerpt, Ch. 14)

## Related
- `references/future/human-ai-trust-errors-uncertainty-oversight.md`, `references/future/human-ai-trust-trust-and-reliance.md`
- `references/future/ai-patterns-agent-delegation-ux.md`, `references/future/ai-patterns-interaction-pattern-library.md`
- `references/future/ai-ethics-gate.md`, `references/future/ai-ethics-law-and-wellbeing.md` (governance layer)
- `references/books/magic-ink.md`; `references/psychology/cognition-motor-control-and-timing.md` (direct manipulation)
- Books: Shneiderman et al., *Designing the User Interface*; Mindell, *Our Robots, Ourselves*; Bainbridge, "Ironies of Automation" (1983)

## Sources
- Shneiderman, B. (2020). Human-Centered Artificial Intelligence: Reliable, Safe & Trustworthy. arXiv:2002.04087 (preprint of IJHCI 36(6), 495–504). https://arxiv.org/abs/2002.04087 (read in full; saved to books/free/human-centered-ai/)
- Shneiderman, B. (2021). Human-Centered AI. *Issues in Science and Technology* 37(2), 56–61. https://issues.org/human-centered-ai/ (read in full)
- Book excerpt, Ch. 14 "Teammates and Tele-bots", published with OUP permission: https://www.engadget.com/hitting-the-books-human-centered-ai-ben-shneiderman-oxford-university-press-043004090.html
- Shneiderman, B. (2020). Governance Structures for Human-Centered AI (15 recommendations, one page). https://hcil.umd.edu/wp-content/uploads/2020/10/governance_structures_for_human.pdf
- Official book and project page (TOC, introduction, video and paper list): https://hcil.umd.edu/human-centered-ai/
- Context only (secondary): TechTalks interview quoted at https://thenextweb.com/news/we-need-human-centered-ai
- Not read (paywalled): ACM TiiS 10(4) 2020 "Bridging the Gap Between Ethics and Practice", https://dl.acm.org/doi/10.1145/3419764; IEEE TTS 2020 "Design Lessons from AI's Two Grand Goals".
