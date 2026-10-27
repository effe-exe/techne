---
title: "Experimentation Works: The Surprising Power of Business Experiments"
author: "Stefan H. Thomke"
year: 2020
domains: [data-driven, process]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# Experimentation Works — Stefan Thomke

Use this when: a team runs some A/B tests but leadership still decides by opinion; you need a pre-launch checklist that asks whether an experiment is worth running and whether anyone will act on it; you are making the case for (or designing) an experimentation program, its culture and the leader's role in it; someone argues experiments only produce tiny tweaks and can't inform big bets.

Basis: the book (HBR Press, 2020) was not read. These notes rest on Thomke's own words in free sources. Read in full: his written answers in an interview with Braden Kelley, which reproduce the book's seven-question experiment checklist and its culture section nearly verbatim (2020, republished from InnovationManagement.se); the full transcript of his Brainfluence podcast interview with Roger Dooley (2020); the HBS Working Knowledge preview of the book (Blanding, 2019, quoting Thomke and reproducing two of the book's figures). Read as host summaries of interviews (paraphrase, not verbatim): Adrian Swinscoe's interview highlights (CustomerThink) and the Product Mastery Now episode summary. Only the opening paragraphs of his HBR article "Building a Culture of Experimentation" (2020) were free. The full HBR text and the Kohavi–Thomke HBR article (2017) were paywalled, and the only free copies found were unauthorized, so they were not used. Covered well: the seven questions, the five cultural traits, the three leadership roles, the five maturity stages, the failure/mistake distinction, exploratory vs optimization experiments. Not covered: the case chapters in depth (Booking.com, Microsoft/Bing, IBM, brick-and-mortar retailers such as Kohl's and Walmart, the shipping company), the chapter on the ethics of experimentation and any statistical guidance in the book.

## The big idea (3 sentences)
Under uncertainty, experience, intuition and big data mislead managers most of the time (even expert online teams find that roughly 8 or 9 of 10 ideas don't improve their metric), and only controlled experiments establish cause and effect, so experiments should sit between research and launch for every decision that can be tested. Tools are now cheap. The hard part is culture: curiosity, data over opinion, democratized testing, ethics and a new leadership model, built up over five stages from awareness to an organization where testing is as ordinary as "running the numbers". Small validated changes compound into large business impact, while exploratory experiments keep room for bold moves.

## Core concepts
- **Experience + data + experiments** — not experiments instead of intuition. Hypotheses come from qualitative research, data mining, customer insight or gut feel. Experimenting companies do everything other companies do, plus a test step before committing ("put nature to the question", after Francis Bacon).
- **Anatomy of an experiment** — separate a presumed cause (independent variable) from an observed effect (dependent variable), hold everything else constant, and randomize (and blind where possible) so the remaining causes are spread evenly across groups. Restaurant example: running both menus at once with random assignment beats "old menu this month, new menu next month".
- **Seven questions for a good experiment** — (1) Is there a testable hypothesis, rooted in observation, focused on a management action, measurable and falsifiable? (2) Have stakeholders committed in advance to abide by the results? (3) Is it doable: sample size for the expected effect, locations and duration? (4) Are results reliable: bias controls, matched control group, blinding, reproducibility? (5) Do we understand cause and effect, or only correlation? (6) Have we gotten the most value, e.g. a targeted rollout only to segments where payback is highest, implementing only the high-ROI components? (7) Are experiments actually driving decisions, with transparency when they don't?
- **Failure vs mistake** — a failure answers a question someone asked, so it produces learning. A mistake adds no learning (botching routine execution). Encourage failures, minimize mistakes. "Fail more" without this distinction is useless advice.
- **High "failure" base rate** — about one in ten online experiments improves the target metric (Bing 80–90% null or negative, Booking similar; Microsoft overall about a third positive). Wins are the exception, so volume and learning from nulls matter.
- **Five cultural traits** — cultivate curiosity (value surprises, don't over-reward only "winning" tests or people will avoid risky ideas); data trumps opinion (results prevail against the HiPPO, the highest-paid person's opinion); democratize testing (anyone can launch without red tape: at Booking about 75% of core employees, with experiments broadcast company-wide, checked against an experiment database, and any employee able to stop any test); be ethically sensitive; embrace a new leadership model.
- **Three leadership roles** — set a grand challenge that breaks down into testable hypotheses and KPIs; build systems (instrumentation, pipelines, data scientists, integrated tooling); be a role model who submits their own ideas (even a new logo) to tests and says "I don't know".
- **Maturity stages A–E** — Awareness, Belief (rigorous framework in small groups), Commitment (experiments required for some decisions), Diffusion (company-wide programs and standards), Embeddedness (democratized, routine).
- **Exploratory vs optimization experiments** — optimization tests (A/B, precise causal answers on single touchpoints) vs exploratory tests that change many variables to learn direction for strategic bets, then get refined by optimization tests. The "A/B tests only make you think small" critique confuses one kind of experiment with experimentation.
- **Process vs project** — continuous testing has no start or end. Organizations run in "project mode" (redesign, launch, move on) struggle to adopt it.
- **Transparency** — when a decision overrides evidence (Netflix's Grace and Frankie promo kept Jane Fonda despite tests favoring Lily Tomlin alone, for contract reasons), the experiment makes the trade-off explicit.
- **Cautionary tale** — Ron Johnson's untested J.C. Penney overhaul (no coupons, no clearance racks, Apple-style stores) and the "situational arrogance" of transferring past success without testing.

## Actionable heuristics for product design
- Before building a test, run the seven questions as a gate. If you can't name the decision that each outcome will trigger, or stakeholders haven't agreed to follow the result, don't run it yet. Write the decision rule into the test brief.
- Write hypotheses as "insight → hypothesis → expected metric change", like the Booking example (research suggested checkout confusion; showing the check-out date next to the children's age field should add clarity; key metric improves). That makes nulls interpretable and feeds the next hypothesis.
- Plan for roughly one winner in ten. Size the roadmap and the team's expectations for many cheap tests, and report learnings from nulls and negatives, not only wins. Don't judge designers by win rate, or they will test only safe ideas.
- Treat redesigns as a process, not a project. Instead of a big-bang redesign, ship evolving changes behind experiments. When a big change is necessary, test it as a whole first (exploratory), then optimize its parts (see `references/process/redesign-and-scale.md`).
- Use exploratory experiments for strategic questions: radically simpler home pages, new business models, new flows. Accept that you lose precise attribution, and follow up with optimization tests on the promising direction.
- Let anyone propose and launch tests on a shared platform, with guardrails: a searchable log of past experiments (check it before testing), company-wide announcement of new tests, and a kill switch anyone can use when a test harms users.
- Keep a written override record. When you ship against the evidence (brand, legal, contract, ethics, strategy), state the reason in the decision log, so nobody pretends the data supported it.
- Leaders: frame a grand challenge (e.g. "cut time-to-first-value in half") that teams break into testable hypotheses with KPIs, so tests add up to a strategy rather than random tweaks.
- After a win, check heterogeneity: roll out only to segments where it pays, and keep only the components that drove the effect.
- Not everything can be tested (acquisitions, one-shot launches, low-traffic products). For those, use the hypothesis discipline anyway and look for cheaper proxies: prototypes, simulations, smoke tests.
- Treat ethics as a precondition: never run experiments that harm or deceive users, even if the platform makes it trivially easy (see `references/future/ai-ethics-gate.md` and the dark-pattern files).

## Evidence & caveats
- The book is management research: case studies, interviews and the author's framework, built on solid causal-inference basics. The checklist and culture advice are expert opinion, not tested interventions. There is no evidence here that following the five stages causes better performance.
- The claim that experiment-heavy firms "significantly outperformed the S&P 500" is a correlation among survivors (Amazon, Booking, Google, Microsoft, Netflix). Many other things differ. Don't use it as proof that experimentation causes returns. The HBS-linked study Koning, Hasan & Chatterji on A/B testing and startup performance is better evidence, though still observational.
- The base rates (8–9 in 10 fail at Bing and Booking, about 1/3 positive at Microsoft) come from Kohavi and colleagues and are well documented. They vary a lot by product maturity. Teams in new products often see higher win rates.
- Thomke tells the "$100M Bing ad headline" story as a triumph of democratized testing. Kohavi, the source of that story, also stresses that surprising wins should be replicated first (Twyman's law). Celebrate big wins only after a rerun.
- "Data trumps opinion" can slide into metric myopia. Short-term metrics in A/B tests can reward manipulative designs. Thomke's own ethics trait and override transparency are the counterweight. Use long-term and guardrail metrics.
- The J.C. Penney story is a single retrospective case (hindsight bias). It illustrates the point but doesn't prove that testing would have saved the company.
- Some interview sources here are host paraphrases (CustomerThink, Product Mastery Now). The Kelley Q&A and Dooley transcript are Thomke's own words.

## Disagreements with other references
- `references/books/trustworthy-online-controlled-experiments.md` (Kohavi, Tang & Xu) is the statistical and engineering companion. Trust it for SRM, power, peeking, variance reduction and metric design. Thomke's book adds culture and leadership, not methods. Thomke and Kohavi co-wrote the HBR 2017 article. No conflict, different layers.
- `references/books/ab-testing-intuition-busters.md` warns that many celebrated surprising results are false positives. Thomke's culture of volume and celebration needs that discipline added, or a "democratized" program will ship noise.
- `references/data-driven/experimentation-playbook.md` already lists the Microsoft 1/3–1/3–1/3 base rate and Twyman's law. Thomke's seven questions slot in as the pre-test gate there.
- `references/books/shape-up.md` and `references/books/continuous-discovery-habits-torres.md` emphasize discovery and appetite-bounded bets over constant A/B testing. Thomke's exploratory experiments bridge them. For low-traffic products, Torres's assumption tests are the practical form of his advice.
- `references/books/creative-selection-kocienda.md` describes Apple's demo-driven taste process with few controlled tests, the opposite cultural pole. Treat Thomke's position as the default where traffic allows, and Kocienda's for early, low-traffic or highly novel work.

## Best quotes (< 25 words each, max 5)
- "For every online experiment that succeeds, nearly 10 don't." (Kelley interview, 2020)
- "Nothing stalls innovation faster than a so-called HiPPO—highest-paid person's opinion." (Kelley interview, 2020)
- "How willing are you to be confronted every day by how wrong you are?" (Thomke quoting Booking.com leadership, HBS Working Knowledge, 2019)
- "If something is very novel, there is little data around it to use." (HBS Working Knowledge, 2019)

## Related
- `references/books/trustworthy-online-controlled-experiments.md`, `references/books/ab-testing-intuition-busters.md`, `references/books/experiments-at-large-scale.md`, `references/books/how-not-to-run-ab-test.md`
- `references/data-driven/experimentation-playbook.md`, `references/data-driven/statistics-cheatsheet.md`, `references/data-driven/metrics-frameworks.md`
- `references/process/process-playbook.md`, `references/books/continuous-discovery-habits-torres.md`
- Books: Thomke, *Experimentation Matters* (2003); Thomke, *The Scientific Mindset* (HBR Press, 2026, per his HBR author bio)

## Sources
- Braden Kelley, "The Surprising Power of Business Experiments: Interview with Stefan H. Thomke" (2020): https://bradenkelley.com/?p=41971
- Roger Dooley, Brainfluence podcast, "Stefan Thomke: Experimentation" (2020), full transcript: https://www.rogerdooley.com/stefan-thomke-experimentation/
- Michael Blanding, "Creating the Experimentation Organization", HBS Working Knowledge (Dec 4, 2019): https://www.library.hbs.edu/working-knowledge/creating-the-experimentation-organization
- Adrian Swinscoe, interview highlights, CustomerThink (2020; host's summary): https://customerthink.com/experimentation-is-what-makes-microsoft-google-netflix-and-booking-com-so-successful-interview-with-harvard-business-school-professor-stefan-thomke/
- Chad McAllister, Product Mastery Now, TEI 281 episode summary (host's summary): https://productmasterynow.com/blog/tei-281-the-right-way-to-use-experiments-to-create-better-products-more-quickly-with-stefan-thomke/
- Thomke, S. (2020). "Building a Culture of Experimentation", *HBR*, March–April (only the free opening was read): https://hbr.org/2020/03/building-a-culture-of-experimentation
- Kohavi, R. & Thomke, S. (2017). "The Surprising Power of Online Experiments", *HBR* (author's listing page; the article itself was not read): https://exp-platform.com/hbr-the-surprising-power-of-online-experiments/
- Downloads saved under books/free/experimentation-works-thomke/
