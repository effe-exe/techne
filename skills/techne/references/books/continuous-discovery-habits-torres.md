---
title: "Continuous Discovery Habits"
author: "Teresa Torres"
year: 2021
domains: [process, research, data-driven]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: high
---

# Continuous Discovery Habits — Teresa Torres

Use this when: a team keeps building features from a roadmap or the latest customer complaint and can't say which customer need each one serves; you need a lightweight weekly research rhythm instead of occasional big studies; you are choosing between solution ideas and want a cheap way to compare them before building.

Basis: the book (Product Talk, 2021) was not read. Torres publishes the book's framework herself, in depth and for free, on producttalk.org, and these notes come from her own long-form guides there, all read in full: Opportunity Solution Trees (2023), Customer Interviews, Assumption Testing, Shifting from Outputs to Outcomes, Interview Snapshot, Product Trio (video transcript), the glossary definition of continuous discovery, the book launch post, and the written script of her 2017 Mind the Product talk "Critical Thinking for Product Teams", where the opportunity solution tree was introduced. They reference the book's chapters directly (for example the four opportunity-assessment factors in "Chapter 6"). Coverage of the core framework is high. What's missing is the book's step-by-step exercises, its chapter on recruiting automation in detail, its footnoted research and its worked examples.

## The big idea (3 sentences)
The team that builds the product (a product trio: product manager, designer, engineer) should be in touch with customers at least weekly, running small research activities in pursuit of a clear outcome, rather than relying on occasional projects or second-hand reports. Their thinking should be made visible in an **opportunity solution tree**: a product outcome at the root, then customer needs, pain points and desires heard in story-based interviews, then several solutions for one target opportunity, then tests of the riskiest assumptions behind those solutions. Good product decisions are compare-and-contrast decisions ("which of these looks best?") rather than whether-or-not decisions ("is this idea good?"), so the habit is to consider multiple opportunities and multiple solutions and to test assumptions, not whole ideas.

## Core concepts
- **Continuous discovery** (her definition) — weekly touchpoints with customers by the team building the product, small research activities, in pursuit of a desired outcome. Three requirements: the builders talk to customers directly, activities are bite-sized, and the focus is outcomes.
- **Outputs vs outcomes** — an output is what you build (integrations). An outcome is its impact (customers use them, are satisfied, retain longer). A team is done when the work has the expected impact, not when it ships.
- **Three kinds of metrics:**
  - *business outcome*: lagging and financial, derived from the revenue formula (customers × spend × duration);
  - *product outcome*: a customer behavior or sentiment in the product that leads the business outcome;
  - *traction metric*: adoption of one feature, too narrow and easily gamed.
  Put a product outcome at the root of the tree.
- **Outcome setting is a negotiation** — the leader brings business context, the trio brings customer and technical knowledge and how far they think they can move the metric. Ideally one outcome per team, kept for two to three quarters or more. When several teams share a metric, split it by segment (tenure) or journey step (onboarding, activation, retention). For new areas, use a *learning outcome* ("learn the opportunity space") before a performance outcome.
- **Opportunity** — an unmet need, pain point or desire, phrased as a customer would say it ("I don't know what to eat tonight"). Test: if there's only one way to address it, it's a solution in disguise ("I want to go out to eat"). It's called an opportunity because desires count too (ice cream, Disneyland), not only problems.
- **Opportunities come from interviews, not brainstorms** — made-up opportunities bring in your own biases. Sales notes, tickets and analytics lack context, so use them as leads for what to explore in the next interview.
- **Story-based interviewing** — "Tell me about the last time you…", then dig out the specific past story. Questions about general or typical behavior bring out aspirational self-reports ("I work out four times a week").
- **Interview snapshot** — a one-page summary per interview, made right after it (book 45 minutes: about 25 for the interview, 20 for the snapshot). It holds name, photo, quick facts, one memorable quote, an experience map of the story, opportunities and other insights. Share snapshots with stakeholders asynchronously, use them to size opportunities, and revisit them when the target or outcome changes.
- **Mapping the opportunity space** — start after 3–4 interviews (enough not to overreact to one story) and revise every 3–4 interviews after that. Build an experience map from the stories, use its key moments as top-level opportunities, then nest specific opportunities under them (parent/child, siblings). The structure should settle at the top and grow deeper over time.
- **Choose a target opportunity early** — work from a "crummy first draft" of the tree. Compare siblings level by level against four factors: opportunity sizing (how many customers, how often), market factors, company factors (mission and strategy) and customer factors (importance and satisfaction with current solutions). Leave effort out at this stage: any opportunity can have easy and hard solutions.
- **Many ideas for one opportunity** — brainstorming across the whole tree produces only first ideas. Generate many ideas for the target opportunity, narrow them to about three (dot voting is fine), and compare those three.
- **Assumption tests, not experiments** — break each idea into the assumptions that must be true for it to work. Five categories: desirability, viability, feasibility, usability, ethical. Find them through story maps, by "walking the lines" of the tree, from the ideal customer profile, with a data audit and a pre-mortem. Phrase each as something that must be true and make it specific.
- **Riskiest assumptions** — important to the idea's success but backed by little evidence (assumption mapping, from David Bland). Four test types: prototype test (simulate a moment), one-question survey, data mining, research spike (engineering).
- **Decide across sets of tests** — define success criteria before running a test, compare results across solutions rather than judging one number alone, and expect most tests to fail. Then ask "what did we learn about customers?"
- **Product trio** — PM, designer and engineer interview together, map together, choose together and test together, instead of handing work off. Marty Cagan's "missionary not mercenary" teams.
- **Show your work** — keep stakeholders up to date with the tree and snapshots at the level of detail each needs. Don't sell conclusions.

## Actionable heuristics for product design
- When asked to "add feature X", first ask which opportunity it serves and which outcome that opportunity drives. If you can't place it on a tree, find the need before designing. Treat the request as a lead to explore in interviews.
- Write the team's outcome as a product outcome with a direction and a target ("% of first-time users reaching the aha moment in session 1: 22% → 25%"). Reject traction metrics such as "more searches" as discovery goals, because more searches often signal failure to find.
- Run at least one customer interview a week, and start with "Tell me about the last time you…". Keep the participant in one specific story. When they generalize ("I usually…"), steer back: "Think about last Tuesday — what happened first?"
- Automate recruiting so each week starts with an interview already booked: an in-product intercept, customer-facing teams referring people, or a customer panel. Ask for 20 minutes, state the benefit to them and say what will happen. A product-related perk usually beats cash.
- Make an interview snapshot within an hour of every interview. Pull opportunities from the story's friction points (what went wrong, what they wished). Share snapshots in a channel stakeholders already read.
- Phrase every opportunity in the customer's words and check it isn't a solution in disguise. Ask "why do you want that?" to move up a level.
- Once you have 3–4 interviews, draft the tree, choose one small target opportunity and move on. Most learning happens during solution and assumption testing, not in perfecting the map.
- For a target opportunity, generate at least three distinct solutions before falling for one, especially when the solution is risky, the opportunity is a differentiator or innovation is needed. Narrow them by group vote, then test each one's riskiest assumption.
- For each candidate, write a story map of how a user would get value, then list the assumptions at each step across all five categories. Include ethical assumptions such as data use or harm to non-users.
- Before running any assumption test, write the success line ("≥ 30% of the 50 unmoderated testers find the share option without prompting"). Compare results across the three solutions rather than asking whether one number is "good enough".
- Pick the cheapest test that fits the assumption: a one-question survey for past behavior ("When did you last share an article?"), data mining in existing analytics or tickets, an unmoderated prototype test for desirability and usability, an engineering spike for feasibility. If you can't run anything today, do a one-hour test (pull analytics, read tickets) and repeat daily.
- When a test fails, change the idea around the failed assumption before dropping it. When all tests fail, question the target opportunity.
- Keep a simple log of assumption tests: the assumption, audience, method, success criteria, result and the decision taken. Review it periodically for broader patterns.
- Keep A/B tests for measuring the impact of what you built once there's enough traffic (see `references/data-driven/experimentation-playbook.md`). Use assumption tests to decide what to build.
- Weigh risk to decide when to stop discovering: how much risk the solution carries, how much the organization can bear, and how much time is left. New teams misjudge risk, so do a little more discovery than feels necessary.
- Share discovery with stakeholders at the right level of detail for each: the whole tree for those close to the work, the top-level opportunities plus the current target for executives. Show the evidence, not a polished conclusion.

## Evidence & caveats
- This is a practitioner framework from a product coach, built from coaching hundreds of teams. Its success cases (Grailed's "20% lift in LTV", trivago, BBC Maestro) are self-reported stories on her own site, with no controls. I found no independent evaluation showing that teams using the opportunity solution tree get better outcomes.
- Some components rest on sound research: past-behavior questions over hypothetical or typical ones fit well-known self-report and recall biases; comparing alternatives over judging one option alone matches decision-making research; generating more ideas tends to produce better ones. Torres cites but doesn't reproduce this literature in the articles. The book's footnotes are said to hold it.
- Her claim that "research shows groups are better than individuals at evaluating ideas" (for dot voting) is contested. Group judgment suffers from conformity and anchoring, so vote independently before discussing.
- "Mapping after 3–4 interviews" and "interview weekly" are heuristics for keeping cadence, not sample-size rules. For estimating how common something is, interviews don't replace a survey or analytics (see `references/process/research-methods-selector.md`, saturation around 6–12 per segment).
- Assumption tests with small samples and unmoderated prototypes give directional evidence only. Treat "passes" as reduced risk, not proof, and still measure real impact after launch.
- The articles are recent (2023–2026) and some promote paid courses and a partner AI tool (Vistaly). The core framework is unchanged by that, but treat tool recommendations as commercial.

## Disagreements with other references
- `references/process/process-playbook.md` §2.3 already shows the opportunity solution tree. It is consistent with this file, which adds the outcome taxonomy, the opportunity-vs-solution test, the timing rules and the five assumption types. Use this file for detail and the playbook for the summary.
- `references/process/research-methods-selector.md` (Mom Test) agrees on past behavior over hypotheticals. Fitzpatrick targets early validation and sales-style conversations, while Torres separates interviews from usability tests, sales and support calls.
- `references/data-driven/experimentation-playbook.md` and `references/books/ab-testing-intuition-busters.md` set a much higher bar for trusting an effect (power, sample ratio mismatch checks, Twyman's law). The two don't conflict: assumption tests choose what to build, controlled experiments measure what shipped. Don't report assumption-test numbers as effect sizes.
- `references/data-driven/metrics-frameworks.md` (HEART, North Star): Torres's product outcome is a leading behavioral metric, as in HEART's goals-signals-metrics. Her warning against traction metrics matches the advice there against vanity and feature-usage metrics.

## Best quotes (< 25 words each, max 5)
- "Opportunities include needs, pain points, and desires." (Opportunity Solution Trees guide)
- "We don't want to build our products based on what people aspire to do." (Customer Interviews guide)
- "Assumption tests are used in discovery when trying to decide between ideas. Experiments are used to measure the impact of what we built." (Assumption Testing guide)
- "Product visions tell us where we are headed. Opportunity solution trees help us get there." (Opportunity Solution Trees guide)

## Related
- `references/process/process-playbook.md` (§2 discovery frameworks, OST diagram), `references/process/research-methods-selector.md`
- `references/data-driven/experimentation-playbook.md`, `references/data-driven/metrics-frameworks.md`, `references/books/heart-framework.md`
- `references/books/articulating-design-decisions-greever.md` (stakeholder buy-in; Torres's "show your work" is the evidence-led counterpart)
- Books: David Bland & Alex Osterwalder, *Testing Business Ideas* (assumption mapping); Rob Fitzpatrick, *The Mom Test*; Marty Cagan, *Inspired*

## Sources
- Torres, T. "Opportunity Solution Trees: Visualize Your Discovery to Stay Aligned and Drive Outcomes" (2023): https://www.producttalk.org/opportunity-solution-trees/
- Torres, T. "Customer Interviews: How to Recruit, What to Ask, and How to Synthesize What You Learn": https://www.producttalk.org/customer-interviews/
- Torres, T. "Assumption Testing: Everything You Need to Know to Get Started": https://www.producttalk.org/assumption-testing/
- Torres, T. "Shifting from Outputs to Outcomes: Why It Matters and How to Get Started": https://www.producttalk.org/shifting-from-outputs-to-outcomes/
- Torres, T. "The Interview Snapshot": https://www.producttalk.org/interview-snapshot/
- Torres, T. "Product Trio" (video transcript): https://www.producttalk.org/product-trio/
- Torres, T. "Critical Thinking for Product Teams" (Mind the Product London 2017, written script): https://www.producttalk.org/compare-and-contrast-decisions/
- Product Talk glossary, "Continuous Discovery": https://www.producttalk.org/glossary-discovery-continuous-discovery/
- Book launch post: https://www.producttalk.org/continuous-discovery-habits/
- Downloads saved under books/free/continuous-discovery-habits/
