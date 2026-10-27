---
title: "Don't Make Me Think, Revisited: A Common Sense Approach to Web (and Mobile) Usability"
author: "Steve Krug"
year: 2014
domains: [process, interaction, psychology]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# Don't Make Me Think, Revisited — Steve Krug

Use this when: a screen, label or navigation choice makes people stop and wonder what something is or what will happen; you are arguing about "how many clicks" or about what "users like"; you want to start cheap, regular usability testing with no research budget.

Basis: the book (New Riders, 3rd edition, 2014) was not read in full. These notes come from what Krug and his publisher post for free on sensible.com: the official sample chapter (Chapter 4, "Animal, Vegetable, or Mineral?"), the full table of contents, the introduction to the free Instructor's Guide, the book page, his test script, observer instructions and facilitator phrases (reprinted from *Rocket Surgery Made Easy*, which he describes as an expanded version of DMMT Chapter 9), the free opening chapter of *Rocket Surgery Made Easy*, a blog post, and a long 2020 Built In interview where he sums up the book's lessons. All were read in full. Coverage of the book's main argument and of its testing chapter is good. Chapters 3 (billboard design / scanning), 5 (omit needless words), 6 (navigation, the "trunk test"), 7 (home page), 10 (mobile), 11 (goodwill reservoir) and 12 (accessibility) are known here only from the table of contents and the interview, so their detailed checklists are not reproduced.

## The big idea (3 sentences)
People using a site or app are on shakier ground than its makers think: they go faster, pay less attention, know less about the subject and get distracted more easily, so they "muddle through" rather than reading and choosing carefully. Each page and each choice should be self-evident, and should never make users think about what something is, what it is for or what will happen if they click it; the thinking should go into the content, not the interface. Because makers can't see their own work as a newcomer does, the only reliable check is to watch a few real people try to use it, early and often, and fix the worst problems first.

## Core concepts
- **Krug's First Law ("Don't make me think")** — remove the questions an interface makes people ask ("Is this clickable?", "Which one is me?"). In the interview he narrows it: don't make people think about things they shouldn't need to think about. Thinking about the content is fine.
- **Muddling through** — users scan, satisfice (take the first reasonable option) and get by without understanding how things work (Chapter 2 title). Design for that behaviour, not for careful reading.
- **Krug's Second Law: clicks don't matter, effort does** — a click costs little if it is "mindless and unambiguous". His rule of thumb is that three easy clicks equal one click that needs thought. Number-of-click rules ("everything within 3 clicks") measure the wrong thing.
- **Scent of information** — clear, specific links tell users they're getting closer to what they want (from Pirolli and Card's information foraging research). Vague labels lose the scent.
- **Mindless choices** — "animal, vegetable or mineral" works because the categories need no thought. A first-level split like "home / home office / small business" makes people unsure which one they are, and after they choose they then have to check whether they chose right.
- **Progressive disclosure of hard choices** — show one simple first choice (sign in or see subscription options), then only the questions relevant to that path. Don't show every account type at once.
- **Guidance when a choice can't be easy** — help should be brief (the least that helps), timely (right where the decision happens) and unavoidable (placed where people will notice it). His example is London's "LOOK RIGHT" painted on the kerb.
- **The "it depends" answer and religious debates** — Chapter 8 argues that team arguments about what users like are mostly a waste of time, because "the average user" doesn't exist. Testing settles them.
- **Do-it-yourself usability testing** — small, informal and qualitative. Its purpose is to find and fix problems, not to prove anything statistically. Krug recommends about three users once a month, with as many team members watching as possible, and a debrief that same day to choose what to fix.
- **Fix the worst problems first, and don't wait for a redesign** — teams often leave known, costly problems in place for a year while they plan a big redesign. Triage and fix now.
- **Usability as courtesy; accessibility as the right thing** (Chapters 11–12, from the ToC and interview) — every friction point uses up goodwill. Accessibility should be done because it improves people's lives, not because of inflated statistics.

## Actionable heuristics for product design
- When reviewing any screen, look at each element and ask whether a first-time user would have to stop and wonder what it is, whether it's clickable, or what will happen. Each "yes" is a defect to fix with a clearer label, a stronger affordance or a convention, not by adding explanation.
- When someone proposes a "max N clicks" rule, replace it with "no ambiguous clicks". Measure first-click success and how confident users are at each step, not the depth of the path. Fewer clicks matter only for paths people repeat a lot or pages that load slowly.
- When a top-level split forces users to classify themselves (persona-based navigation such as "Business / Personal / Enterprise"), test whether people can choose without hesitating. If not, split by task or by product instead, or ask one easy question first.
- When a form or flow has to ask something hard (plan type, tax status, account type), give help that is brief, sits right beside the field, and can't be missed. Avoid help hidden behind a far-away link or an FAQ page.
- Write link and button labels so they say where they lead or what they do ("Compare plans", "Download invoice PDF"). Ambiguous verbs such as "Share" without an object, or "Learn more", weaken the information scent.
- Don't put everything in front of the user. Too much noise is one of the confusions he names most. Make what people are most likely looking for prominent, and push the rest down.
- Run a test every month with three participants, using his script: an introduction ("we're testing the site, not you"), a few background questions, a home page tour ("what is this, whose is it, what can you do here?" without clicking), then tasks done without site search while the participant thinks aloud, then probing questions.
- Recruit loosely and grade on a curve. Anyone who isn't on the team will reveal most serious problems. Add one person from outside the target audience in each round, because they find different problems.
- Facilitate neutrally. Use phrases like "What are you thinking?", "Is that what you expected?" and "What would you do if I weren't here?" Never explain the interface. Answer questions only at the end.
- Ask each observer to write down the three most serious problems after every session. In the debrief, combine the lists and commit to fixing the most serious ones before the next round, preferring the smallest change that fixes each one.
- When stakeholders call your usability test a "focus group", explain the difference: focus groups have people talk about things, while usability tests watch people try to use them. Then invite them to watch one session, which is what convinces people.
- When testing reveals a big, known flaw, fix it now with a small change rather than putting it into a future redesign.
- For remote and unmoderated testing, the same rules apply: tasks plus thinking aloud. Unmoderated tools trade away probing for speed and a bigger recruiting pool.

## Evidence & caveats
- This is a practitioner's book built on consulting experience, not on research. Its core claims match well-replicated findings: people scan rather than read (eye-tracking work, see `references/books/nngroup-scrolling-attention.md`), they satisfice, and information scent comes from Pirolli and Card's research. The "three mindless clicks = one hard click" ratio is Krug's own heuristic, not a measured constant.
- On test size he relies on Nielsen and Landauer's "about five users" finding and cuts it to three for practical reasons. Five-user samples find many problems only when problems are common and tasks are similar. They miss rarer problems and can't estimate how often a problem happens. Krug himself says this method isn't suitable for safety-critical systems and isn't quantitative. For rates or benchmarks, use the sample-size guidance in `references/books/quantifying-the-user-experience.md`.
- "Recruit loosely" works for finding obvious problems. It doesn't work for domain-heavy products (clinical, financial, developer tools), where outsiders struggle for the wrong reasons. Recruit more carefully there.
- By his own account, he has found almost no cases of amateur testing making a product worse. That is an anecdote, not data.
- "Don't make me think" isn't a rule against all effort. Learning tools, games and deliberate friction (confirming a destructive action) need thought on purpose. He accepts this in the interview.
- Mobile- and accessibility-specific advice comes from the 2014 edition and is now thin compared with `references/books/wcag-22.md` and current platform guidelines. A 4th edition was announced as coming on sensible.com.

## Disagreements with other references
- `references/process/heuristics-and-critique.md` (Nielsen heuristics, severity ratings) is more systematic. Krug's "fix the top three, today" works for small teams. Use severity ratings when the backlog is large or several teams compete for fixes.
- `references/process/research-methods-selector.md` recommends 5–8+ participants per segment for qualitative studies. Krug's three is a minimum frequency, not a full study size. Use three monthly for iteration and larger samples before a launch decision.
- `references/data-driven/experimentation-playbook.md`: Krug's testing says why something fails, and an A/B test says how much it changes behaviour. They work together. Don't take a usability observation as proof of a conversion effect.
- `references/books/design-of-everyday-things.md` (Norman) explains the mechanism (affordances, signifiers, gulfs of execution and evaluation) behind Krug's "self-evident" pages. Use Norman for the reasons, Krug for the quick checks.

## Best quotes (< 25 words each, max 5)
- "It doesn't matter how many times I have to click, as long as each click is a mindless, unambiguous choice." (Krug's Second Law, Chapter 4)
- "Don't Make Me Think really means don't make me think about things I don't need to think about." (Built In interview, 2020)
- "Recruit loosely and grade on a curve." (Rocket Surgery Made Easy, maxim)
- Help should be "Brief… Timely… Unavoidable." (Chapter 4)

## Related
- `references/process/heuristics-and-critique.md`, `references/process/research-methods-selector.md`, `references/process/states-and-edge-cases.md`
- `references/books/design-of-everyday-things.md`, `references/books/nngroup-scrolling-attention.md`, `references/books/quantifying-the-user-experience.md`, `references/books/web-form-design-wroblewski.md` (forms), `references/books/wcag-22.md`
- `references/psychology/cognition-memory-cognitive-load.md` (why ambiguity costs working memory)
- Books: Krug, *Rocket Surgery Made Easy* (2010); Caroline Jarrett, *Forms that Work*; Ginny Redish, *Letting Go of the Words*

## Sources
- Book page: https://sensible.com/dont-make-me-think/
- Official sample chapter (Ch. 4): https://sensible.com/downloads/DMMT-Revisited-sample-chapter.pdf
- Table of contents: https://sensible.com/downloads/DMMT-Revisited-TableOfContents.pdf
- Instructor's Guide introduction: https://sensible.com/downloads/DMMT%20Instructors%20Guide%20-%20intro.pdf
- Teaching page: https://sensible.com/are-you-teaching-a-course/
- Downloads page (test scripts, forms): https://sensible.com/download-files/
- Usability test script (web): https://sensible.com/downloads/test-script-web.pdf
- "Things a therapist would say": https://sensible.com/downloads/things-a-therapist-would-say.pdf
- Instructions for observers: https://sensible.com/downloads/instructions-for-observers.pdf
- Rocket Surgery Made Easy, free opening chapter: https://sensible.com/downloads/rsme-samplechapter.pdf (book page https://sensible.com/rocket-surgery-made-easy/)
- Krug blog, "You say 'potato,' I say 'focus group'": https://sensible.com/you-say-potato-i-say-focus-group/
- Interview: "Steve Krug on simplicity in UX", Built In (2020): https://builtin.com/design-ux/simplicity-ux-steve-krug-interview
- Downloads saved under books/free/krug-dont-make-me-think/
