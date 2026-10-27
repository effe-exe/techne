---
title: "Card Sorting: Designing Usable Categories"
author: "Donna Spencer"
year: 2009
domains: [process, research, information-architecture]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: low
---

# Card Sorting — Donna Spencer

Use this when: you are about to build or restructure navigation, a settings tree, a help centre or a product catalogue; you need to decide between an open and a closed sort, how many cards and people to use, and what to do with messy results; you want a cheap way to test a proposed hierarchy before any UI exists.

Basis note: the book is not free, and Rosenfeld Media's pages blocked automated access. These notes rest on Spencer's own earlier free articles that the book grew out of, written under her previous name Donna Maurer: "Card Sorting: A Definitive Guide" (Boxes and Arrows, 2004, co-written with Todd Warfel), "Card-Based Classification Evaluation" (Boxes and Arrows, 2003), and "Four Modes of Seeking Information and How to Design for Them" (Boxes and Arrows, 2006). All read in full. Nielsen's article on card-sort sample size is used for one number, labelled. Missing: the book's chapters on online tools, detailed analysis (similarity matrices, dendrograms, her spreadsheet), case studies, and writing up and applying results. So coverage is low, and the analysis advice here is thinner than the book's.

## The big idea (3 sentences)
Card sorting asks representative users to group labelled cards of content or functions, exposing how they expect things to be organised and what they call them. It is a cheap, generative input to an information structure, not an evaluation and not a finished taxonomy: it must be combined with knowledge of users' tasks and then tested. The value lies as much in why people group things (their talk, disagreements and invented labels) as in the counts.

## Core concepts
- **Open sort** — no given categories; participants create and name groups. Use to discover mental models and vocabulary for a new or reworked structure.
- **Closed sort** — participants place cards into given top-level groups. Use when adding content to an existing structure or checking an open-sort result.
- **Formative, not evaluative** — a sort will not tell you what is wrong with the current site; it is one input next to needs research, task analysis and usability testing.
- **Content-centric risk** — sorting ignores tasks, so a structure that groups sensibly can still fail when people try to find things. Participants may also sort by surface features (document type) instead of meaning or use.
- **Where it works** — best for homogeneous content that participants understand (catalogues, service lists, directories); hard for heterogeneous sets (intranets, government sites) and specialist content.
- **Card selection** — draw items from content inventory, business processes and expected future content; keep one consistent level of granularity; make the set representative and similar enough to group; label short but clear, with an optional description on the back; number every card.
- **Size** — about 30–100 cards works; under 30 rarely yields structure, over 100 tires people (larger sets work when content is very familiar). Add blank cards.
- **Participants** — individuals: about 7–10; groups of three: about five groups (15 people), the authors' preferred format because groups discuss aloud and handle more cards; patterns tend to emerge within five groups. Sample each distinct user group.
- **Session** — shuffle cards, explain that you want groups that make sense to them (not the current site, not navigation design), let them name groups, create sub-groups, rename cards, add missing items and make an "outlier" pile; observe, take notes, keep everyone contributing, question a "miscellaneous" pile without leading.
- **Post-sort tasks** — ask where a specific item would be found with only top-level piles visible; ask which items deserve home-page links; walk through a real task to validate.
- **Analysis** — part pattern-finding, part judgement: lay out piles or use a spreadsheet; look for high- and low-agreement cards; disagreement is data (unclear content, items that belong in two places, need for cross-links, group differences). Explore more than one organising model before committing.
- **Card-based classification evaluation** — a paper "tree test": number the proposed hierarchy, write each level on cards, give participants scenario cards, show one level at a time and record where they would look first (two choices maximum per level). About 10–15 minute sessions, 10–15 scenarios, ~20 people; clusters of answers show labels that work, scatter shows ambiguity.
- **Four modes of seeking** — known-item (can name it: search, A–Z, quick links), exploratory (vague need: browse, related links, never a dead end), don't-know-what-you-need (short answer first, then depth), re-finding (history, favourites, saved items). A structure from card sorting mainly serves browsing; plan for the other modes too.

## Actionable heuristics for product design
- When building or reorganising navigation, run an open sort before drawing any sitemap, because users' groupings and labels routinely differ from the org chart and the team's terms.
- When adding a new feature to an existing structure, run a closed sort against the current top level, because the question is "where does this fit", not "what structure should exist".
- When choosing cards, take them from a real content inventory, keep granularity consistent and include near-future content, because mixed levels confuse participants and a structure built only for today breaks on the next release.
- When sizing a sort, aim for 30–100 cards and either 7–10 individuals, 5 groups of three, or, for online quantitative sorts, at least ~15 per user group (Nielsen; techne's selector says 15–30), because fewer people give unstable similarity patterns.
- When a group sort is possible, prefer it for discovery, because talk between participants reveals reasons, which are worth more than the pile counts.
- When results disagree, do not average them away: treat low-agreement items as candidates for clearer labels, cross-links or two homes, and check whether different user groups sort differently.
- When the hierarchy is drafted, test it with find-it scenarios (paper classification evaluation or an online tree test) before visual design, because people often build groupings in a sort that they cannot use to find things.
- When writing labels, harvest the names participants gave groups and the renamed cards, because their words beat internal jargon for findability.
- When a structure must serve known-item seekers too, add search, an A–Z or quick links alongside the hierarchy, because browsing structure alone fails people who know exactly what they want.
- When stakeholders distrust the method, have them do the same sort and compare with users, because seeing the overlap (and gaps) builds buy-in faster than a report.
- When participants pile cards into "miscellaneous", ask whether they are happy with it before ending, because a large misc pile usually hides unclear labels or a missing category.
- When writing a find-it test of the draft hierarchy, only allow two tries per level and record first choices separately, because first clicks predict real findability and endless hunting hides the problem.
- When iterating on a hierarchy with paper cards, change labels and groupings between sessions and keep testing, because changes on paper are far cheaper than after the navigation ships.

## Minimal process (synthesis of the articles)
1. User research and content inventory first; decide what content belongs at all.
2. Choose cards (30–100, one granularity), participants per user group, open vs closed.
3. Run sessions; capture comments, renames, new cards and outliers.
4. Analyse patterns and disagreements; draft one or more structures.
5. Test the draft with find-it scenarios (paper classification evaluation or online tree test); iterate.
6. Report back to the team and participants.

## Evidence & caveats
- Most guidance here is practitioner experience (opinion grounded in many projects), not experimental evidence: card and participant counts are rules of thumb.
- The one quantitative anchor comes from others: Tullis & Wood (2004), as reported by Nielsen, found ~15 sorters give a 0.90 correlation with a 168-person result (0.75 at 5, 0.95 at 30). That applies to similarity scores from individual sorts, not to group sorts.
- The 2004 guide predates mainstream online card-sort and tree-test tools; the book (2009) adds them, but those chapters are not covered here.
- Group sorts trade independence for richness: dominant participants can steer results, so they suit discovery but not quantitative similarity analysis.
- Card sorting measures grouping, not findability or task success; it can mislead if used as the only IA evidence.

## Disagreements with other references
- `process/research-methods-selector.md` §8 suggests 30–60 cards and n ≈ 15–30; Spencer accepts up to ~100 cards and smaller individual samples (7–10) for qualitative sorts. Use techne's numbers when you will compute similarity matrices; Spencer's when the sort is exploratory and moderated.
- `information-architecture-rosenfeld-morville-arango.md` treats card sorting as one of several IA research tools; consistent with Spencer's "one input, not a silver bullet".
- `process/research-methods-selector.md` §9 (tree testing, n ≥ 50) is the modern quantitative version of Spencer's paper classification evaluation; use the online tree test when you need success rates, her paper method when you need speed and conversation.

## Best quotes (< 25 words each, max 5)
- Card sorting is "a great, reliable, inexpensive method for finding patterns in how users would expect to find content or functionality." (2004)
- "Analyzing card sort data is part science, part magic." (2004)

## Related
- `references/process/research-methods-selector.md` (§8 card sorting, §9 tree testing)
- `references/books/information-architecture-rosenfeld-morville-arango.md`
- `references/process/process-playbook.md` (organise by user mental model)
- `references/books/usability-engineering-nielsen.md` (sample sizes per method)

## Sources
- Donna Maurer (Spencer) & Todd Warfel, "Card Sorting: A Definitive Guide", Boxes and Arrows, 2004: https://boxesandarrows.com/card-sorting-a-definitive-guide/
- Donna Maurer (Spencer), "Card-Based Classification Evaluation", Boxes and Arrows, 2003: https://boxesandarrows.com/card-based-classification-evaluation/
- Donna Spencer, "Four Modes of Seeking Information and How to Design for Them", Boxes and Arrows, 2006: https://boxesandarrows.com/four-modes-of-seeking-information-and-how-to-design-for-them/
- Author page listing these articles: https://boxesandarrows.com/author/donnamaurer/
- Nielsen, "Card Sorting: How Many Users to Test" (context for sample size, reporting Tullis & Wood): https://www.nngroup.com/articles/card-sorting-how-many-users-to-test/
- Book page (blocked to automated access, for reference): https://rosenfeldmedia.com/books/card-sorting/
