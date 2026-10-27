---
title: "Creative Selection: Inside Apple's Design Process During the Golden Age of Steve Jobs"
author: "Ken Kocienda"
year: 2018
domains: [masters, process, prototyping, taste]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Creative Selection — Ken Kocienda

Use this when: a team is debating a feature in documents, specs or whiteboard sketches and needs to build something it can try; you are setting up a design review rhythm and want feedback to lead to decisions; you need to convince people that "intuitive" new interaction (like typing on glass) is earned through many iterations, not one brilliant idea.

Basis: the book (St. Martin's Press, 2018) was not read for these notes. They rest on Kocienda's own words in legally free sources: the **publisher-authorized excerpt** on the iPhone "keyboard derby" demos to Phil Schiller and Tony Fadell (9to5Mac, "reprinted by permission of St. Martin's Press", read in full); two **edited interview transcripts** from Wharton (Knowledge at Wharton and the Mack Institute's *Mastering Innovation*, 2018); and the episode outline of his Cult of Mac podcast interview (no transcript, context only). The book is a narrative memoir. The free material covers its central method (demo → feedback → decision → iteration), the seven elements by name and the keyboard and autocorrect story, but not the chapters on Safari/WebKit, the iPad, the full "seven elements" essays or the many detailed demo scenes. Coverage is low. Note: `references/masters/master-lenses.md` and `references/masters/taste.md` already carry short Kocienda summaries written from other material. This file is the citable, legally sourced basis for them.

## The big idea (3 sentences)
Apple's software in the Jobs era came from "creative selection": someone builds a concrete demo early, shows it to colleagues and then to decision-makers, keeps the strong parts and drops the weak ones, and repeats, so that humble starting points evolve, almost Darwinian-style, into shippable products. The process works because demos are concrete enough to judge as real users would, feedback is direct, and someone is accountable for deciding quickly, often by trusting the person closest to the work. Kocienda names seven elements underneath it — inspiration, collaboration, craft, diligence, decisiveness, taste and empathy — and notes what is missing from the list: politics and bureaucracy.

## Core concepts
- **Creative selection** — a long chain of demos, decisions and feedback that takes "not-very-promising ideas" to shippable products. Variation (many demos) plus selection (direct, decisive feedback).
- **Demos over documents** — build something people can try in the hallway ("give this a look, tell me what you think"), not design documents or whiteboard sketches. A rough first version is a starting point, not a failure.
- **Live on the product** — teams used early, mid and late builds as if they were the real product, imitating what customers would experience.
- **The demo pyramid** — work moves from peers to managers to executives (Scott Forstall), with Jobs as the final editor. Each level gives feedback and filters what moves up.
- **Executives as stand-in customers** — in the excerpt, Schiller's two-minute rejection of the multi-letter-key keyboard mattered because he reacted like a prospect seeing it fresh: confused, not convinced. Fadell barely tried it. Indifference from people who aren't attached to the work is valuable data.
- **A win is an audition, not a finished show** — winning the internal derby only earned the next round. Kocienda then rethought every decision behind his winning design.
- **The real constraint, made physical** — he pinned a paper cutout of about 2 × 1.3 inches next to his desk: all the screen space the keyboard would have.
- **The keyboard derby** — in late 2005 Forstall paused other iPhone software work so that every engineer could try keyboard concepts (letter ribbons, multi-letter keys; per the Cult of Mac episode outline, even piano and Morse-code ideas). Touch targets needed to be about 44 px for a finger.
- **Final keyboard design** — a plain QWERTY layout, which kept users' expectations from desktop keyboards, combined with invisible, dynamically resized touch targets and dictionary-based autocorrect. Autocorrect matched the "constellation" of taps against the ideal tap patterns of dictionary words, and (per the Cult of Mac episode outline) weighted by word frequency (Zipf's law) against likely mistaps on neighboring keys.
- **Product judgment inside the algorithm** — whether autocorrect should ever suggest profanity or slurs was a values call made in code (the infamous "duck").
- **Decisiveness and trust** — in a keyboard demo with two layouts (the book's opening scene), Jobs asked Kocienda which of two options to use and went with his answer ("bigger keys"). Kocienda's lesson is that the top decision-maker trusted the person who knew the work best.
- **Focus** — his one word for Jobs: focus on great products, at the cost of social niceties. Feedback was blunt but aimed at improving the product.
- **Empathy** — picturing people who don't care about the gadget and just want the result, like texting "just landed" at the baggage claim. The technology should "melt away".
- **Small empowered teams inside a big company** — run like a startup, with authority to make a difference, and no politics in the seven elements.

## Actionable heuristics for product design
- When a discussion stalls on abstractions, stop and build the cheapest version people can try (a clickable prototype, a coded spike, a fake-data demo). Judge the demo, not the description of it.
- Make demos realistic in the dimension that matters: real device, real size, real input method. For anything touch- or motion-based, test on hardware, not a desktop mockup, because Kocienda's whole keyboard problem only showed up under a finger on glass.
- Make the binding constraint visible to the team (the real viewport size, the latency budget, the character limit). A physical or on-screen cutout keeps decisions honest.
- Show demos to people with no attachment to them (a PM from another team, an executive, a five-second-test participant). Quick indifference or confusion is a signal to keep iterating, not to defend the design.
- Treat winning an internal design review as permission for the next iteration. Afterwards, list every assumption behind the winning design and ask which still holds.
- Run a "derby" when a core interaction is unsolved and the product depends on it: pause less critical work, have several people prototype different concepts in parallel, compare them hands-on and pick one to refine.
- For novel interactions, borrow the familiar surface (QWERTY layout, standard gestures) and put the novelty behind it (predictive targets, smart correction). That way the new thing feels intuitive on first use.
- For a review, bring two or three concrete options and be ready to recommend one. Decision-makers move faster, and trust grows, when the person closest to the work states a clear preference.
- Give feedback on the work, directly and specifically. Don't copy Jobs-era harshness, which Kocienda describes as intimidating and which depended on a unique founder's authority (see caveats).
- When an algorithm makes product decisions (autocorrect, ranking, recommendations), write down the values it encodes (what it will never suggest, which errors it prefers) and review them as design decisions.
- Use the team's own product every day in its unfinished state, and log the friction you notice as design input.

## Evidence & caveats
- This is a memoir: one engineer's recollections of Apple from 2001 to 2016, told as stories. It shows that the process existed and how it felt from inside, not that demo-driven iteration beats other methods. Survivorship bias is strong: we hear about the iPhone, not the demos that led nowhere.
- Apple's process relied on a rare decision-maker ("ultimate editor") and great secrecy, and its feedback came mostly from internal taste-holders, not users. Kocienda himself says Jobs is irreplaceable. Teams without such a person need user evidence (testing, experiments) to do the selecting.
- The keyboard details (44 px targets, dynamic hit regions, Zipf frequencies) are first-hand engineering accounts, consistent with later platform guidance (Apple HIG's 44 pt minimum), but the excerpt reports no performance data.
- The harsh-feedback culture is described, not endorsed as a general recipe. Psychological safety research suggests blunt, intimidating critique suppresses input in most teams. Keep the directness and drop the intimidation.
- The seven elements are a retrospective framing. Kocienda notes they weren't posted on walls or used as a method.

## Disagreements with other references
- `references/masters/master-lenses.md` (Kocienda lens) says creative selection is variation plus selection and that A/B tests are the scaled version. This file agrees. In addition, the free sources show that Apple's selection came from internal demos and executive judgment, not live user data. Use demos for low-traffic, high-novelty interactions and experiments (`references/data-driven/experimentation-playbook.md`) when there is traffic and a measurable outcome.
- `references/books/continuous-discovery-habits-torres.md` asks teams to ground choices in weekly customer interviews and assumption tests. Kocienda's Apple had almost no external user input before launch. They differ on where the "selection pressure" comes from. For most teams Torres's external evidence is the safer default, and Kocienda's in-house demos are the faster loop within it.
- `references/books/articulating-design-decisions-greever.md` deals with convincing stakeholders. Kocienda's demos persuade by letting people try the work, which beats verbal argument whenever a demo can be built.
- `references/books/wwdc-fluid-interfaces.md` and `references/books/apple-hig.md` contain the later, codified form of the touch craft Kocienda describes being invented.

## Best quotes (< 25 words each, max 5)
- "Creative selection refers to this Darwinian process: You start with something and, hopefully, the end point is going to be a great product." (Knowledge at Wharton, 2018)
- "If I had one word to describe my experiences with Steve, it would be focus." (Mack Institute, 2018)
- "As if it were a successful audition rather than a sold-out performance." (book excerpt, on his derby-winning keyboard)
- "You will notice that there is not politics. That is not in there." (Knowledge at Wharton, on the seven elements)

## Related
- `references/masters/master-lenses.md` (Kocienda, Jobs-era Apple lenses), `references/masters/taste.md`, `references/masters/timeless-principles.md`
- `references/books/wwdc-fluid-interfaces.md`, `references/books/apple-hig.md`, `references/books/parhi-thumb-target-size.md` (touch target evidence)
- `references/build/web-prototyping.md`, `references/build/swiftui-prototyping.md` (building demos fast)
- `references/process/process-playbook.md`

## Sources
- Book excerpt (keyboard derby demos), reprinted by permission of St. Martin's Press: https://9to5mac.com/2018/08/08/excerpt-iphone-software-keyboard-design/
- Knowledge at Wharton, "What an Insider Reveals About Apple's Design Process" (2018, edited transcript): https://knowledge.wharton.upenn.edu/podcast/knowledge-at-wharton-podcast/what-an-insider-reveals-about-apples-design-process/
- Wharton Mack Institute, *Mastering Innovation*, "Creative Selection" (2018, transcript excerpt): https://mackinstitute.wharton.upenn.edu/2018/creative-selection-ken-kocienda/
- Context only (episode outline, not a transcript): Cult of Mac, "The Apple design process of demos, decisions and feedback with Ken Kocienda" (2018): https://www.cultofmac.com/news/the-apple-design-process-of-demos-decisions-feedback-ken-kocienda
- Author's site (no book material at time of reading): https://kocienda.com/
- Not reachable: Kocienda's Creative Review article on demoing to Steve Jobs (https://www.creativereview.co.uk/author/ken-kocienda/)
- Downloads saved under books/free/creative-selection/
