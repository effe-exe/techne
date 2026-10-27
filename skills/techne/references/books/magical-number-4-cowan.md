---
title: "The magical number 4 in short-term memory: A reconsideration of mental storage capacity"
author: "Nelson Cowan"
year: 2001
domains: [psychology, cognition, interaction]
evidence: "strong"
---

# The magical number 4 in short-term memory — Nelson Cowan

Use this when: someone caps a menu, nav or form at "7 ± 2"; a flow makes users carry information from one screen to the next (codes, prices, plan details, names); you are chunking long strings (IBANs, OTPs, phone numbers, licence keys); you are deciding how many live things a user can watch at once (moving markers, counters, status dots, notifications); you design for novices vs experts, children, or distracted mobile users.

Source: https://memory.psych.missouri.edu/assets/doc/articles/2001/cowan-bbs-2001.pdf (author's lab site at the University of Missouri, self-archived copy of the Behavioral and Brain Sciences 24(1) issue, pp. 87–185). Legal basis: author self-archived PDF. Read in full: the target article (sections 1–5), the list of 39 peer commentaries (skimmed), and Cowan's response "Metatheory of storage capacity limits" (read in full).

## The big idea (3 sentences)
Miller's "seven plus or minus two" mixes the true storage limit with whatever chunking and rehearsal people add on top. When you use tasks that stop people from grouping items or rehearsing them, many different methods agree that adults hold about 4 chunks at once (group means 3–5, individuals roughly 2–6). Cowan places this limit in the focus of attention, a single central workspace that every deliberate recall must pass through. Other memory stores are limited by time and interference, not by a number of slots.

## Core concepts
- **Pure vs compound capacity** — a *pure* estimate counts chunks when chunking, rehearsal and long-term-memory support are blocked; a *compound* estimate (like a normal digit span of ~7) includes all those strategies. Seven is real as a compound number but says nothing about the underlying slots.
- **Chunk** — a set of concepts strongly associated with each other and only weakly with other chunks in use. "FBI CBS IBM IRS" is 12 letters but about 4 chunks for someone who knows the acronyms. How many items you can hold depends on how many chunks the user can form, not on how many characters there are.
- **Four ways the limit shows itself** — (1) information overload, such as brief arrays like Sperling's or ignored speech, where recall plateaus at about 4 whatever the array size; (2) blocking rehearsal and recoding, as with articulatory suppression, where 16 of 17 estimates fall between 3 and 5; (3) performance discontinuities, where subitizing is effortless up to about 4 items and then turns into slow counting, and multi-object tracking gets hard from 4–5 targets; (4) indirect signs, where people recall in bursts of about 3–4 and group digits into 3s and 4s.
- **Visual working memory counts objects, not features** — in Luck & Vogel's colour-square tasks, people kept 4 objects whether each object varied on 1 or 4 dimensions (size, orientation, colour, gap). The object is the chunk.
- **The focus of attention as the bottleneck** — Cowan's model nests memory in three layers: long-term memory, a temporarily activated part of it, and inside that the focus of attention. Only the focus is capacity-limited. The activated layer fades over time or is displaced by interference, so it is limited in a different way.
- **Scene coherence** — the roughly 4 items held together are experienced as one coherent scene. Unrelated items from different modalities, such as a light, a word, a picture and a tone, are hard to hold together or to recall in order.
- **Hierarchy beats the limit** — attention can move between levels. A memory expert who repeated 80+ digits (Ericsson's S.F.) still used groups of 3–4 digits and never more than 4 groups per supergroup. Expertise makes each chunk bigger but does not add slots.
- **Individual and developmental differences** — in the ignored-speech task, adults averaged about 3.5 digits, fourth graders about 3.0 and first graders about 2.3. Individual adults ranged from about 2 to almost 6.
- **Why 4 might be optimal** — models of hierarchical search find the most efficient group size is about 3.6 items per level (Dirlam), or 4 for exhaustive search (MacGregor). A small sample also makes moderate correlations easier to notice (Kareev). Cowan's own simulation in the response shows this last argument is inconclusive.
- **Capacity formula for change detection (from the response)** — k = (hit rate + correct-rejection rate − 1) × N. In visual arrays this gives about 3.5 items. This later became the standard "Cowan's K".
- **Running memory span** — when people do not know when a stream will end, they keep about the last 4 items, not 7, because they cannot group items until they know where each one sits in the list.
- **1, 2, 3, 4, many** — people judge how far back something appeared accurately for lags of 1–4. Beyond that they lump everything into "5–7 ago".
- **Key numbers by method** (from the paper's review; group means unless noted):

  | Method | Estimate |
  |---|---|
  | Whole report of brief letter arrays (Sperling 1960) | ~4 items |
  | Colour-square change detection (Luck & Vogel 1997) | near-perfect to 3, drop after 4 |
  | Ignored spoken digits, adults / 4th grade / 1st grade | 3.5 / 3.0 / 2.3 |
  | Spoken word lists with articulatory suppression (17 estimates) | 3–5, one outlier at 2.4 |
  | Running memory span (unknown list end) | 4.2 digits |
  | Subitizing (error-free enumeration) | 1–4 items |
  | Multi-object tracking | easy at 3, very hard at 5 of 10 |
  | Recency part of free recall (Watkins review) | 2.2–3.4 |
  | Individual adults, any method | ~2 to ~6 |

## Actionable heuristics for product design
- When a flow makes users carry new information across a screen change (a verification code, a price, an order number, which options they picked), keep it to 3 items at most. Better still, keep it visible on the next screen, because the average ceiling is about 4 and many people sit near 2–3.
- When someone proposes "max 7 items in the menu" from Miller, reject the rule. A visible menu is recognition, not recall, and 7 is a compound number that assumes rehearsal. Set menu length by scannability and grouping (see `cognition-memory-cognitive-load.md`).
- When showing long codes or numbers (IBAN, OTP, card, licence key, phone), group them in blocks of 3–4 characters, because people chunk in groups of about that size and hold about 4 groups at a time.
- When a value must be typed from another app or device (2FA codes, Wi-Fi keys), offer copy, autofill or a QR code rather than relying on memory. The user is switching tasks, and that pushes the code out of the focus of attention.
- When a user must compare options (pricing plans, product specs, flights), put the comparison on one screen and align the attributes. Comparing from memory is limited to about 4 chunks, and items held outside the focus fade or get confused.
- When a status needs to be read at a glance (step dots, unread dots, rating pips, avatars in a stack), use at most about 4 discrete marks and switch to a number beyond that. Up to 4 marks are taken in at once; beyond 4, people have to count.
- When users must track several moving or changing things at once (map pins, live tickers, multiplayer cursors, parallel uploads), keep the number that need active watching to about 3–4. Mark changes explicitly, because tracking accuracy drops from 4–5 targets.
- When the screen changes after a transition (a re-sort, a filter change, an async refresh), highlight what changed. People keep only a few key elements across an interruption and otherwise miss large changes.
- When designing a voice menu or any spoken list the user cannot see (IVR, voice assistants, audio guides), offer no more than 3–4 options per level and allow "repeat". Listeners who do not know when a list ends keep only about the last 4 items.
- When content is new to the audience (onboarding, a first-run tour, a novel domain), introduce at most 3–4 new concepts per step. Novices hold each new element as its own chunk, while experts carry the same material as fewer, larger chunks.
- When building expert tools (IDEs, trading, analytics), you can show more density than in a consumer app, because expertise enlarges chunks. Keep the information hierarchical, so that at any one level the user deals with about 4 groups.
- When structuring a long form or a settings page, use groups of 3–5 related fields under clear headings. Each group should be one coherent "scene" rather than a mix of unrelated questions, because coherent groups behave like single chunks.
- When the audience includes children or people under load (driving, caring for someone, stress, cognitive impairment), design for the low end: 2–3 items, everything visible, no carrying across steps. Capacity is lower in young children and varies by about 3× between adults.
- When asking users to recall from their own memory ("list the tools you use", "your interests"), give category prompts or recognition lists. Free recall comes out in bursts of about 3–4 items per category, so prompts help people retrieve the next burst.
- When an onboarding or notification sequence mixes modalities and unrelated events (sound, toast, modal, badge), do not expect users to remember the order. Show the state in one persistent place instead, because unrelated events do not form a coherent scene.
- When you write a test plan for a UI that depends on memory, measure with the person distracted or interrupted, not only in a quiet lab. The pure limit appears exactly when rehearsal is blocked, which is how real mobile use looks.

## Evidence & caveats
- Strong: the convergence across very different methods (visual arrays, ignored speech, suppressed serial recall, subitizing, object tracking, recall clustering) is the paper's core contribution, and it has held up. Cowan's later 2010 review and the wide use of the change-detection K measure kept 3–5 as the mainstream estimate for adult pure capacity.
- Critics in the commentaries (Avons et al., Schubert & Frensch, Beaman) said chunks are identified after the fact, so the argument risks circularity. Cowan agrees that chunks need to be measured directly and only partly answers the objection.
- Not every estimate fits. Free recall of proverbs (~2.0), Chinese radicals (2.7), repetition priming of pseudowords (~2), and some tracking studies come in below 3. Within the last 4 items, recall still favours the most recent (McKone), which is awkward for the idea of 4 equal slots.
- Rival views remain. A 1-chunk focus with a larger activated set (McElree & Dosher, Baars, Taatgen's ACT-R model). Unitary-memory accounts with no separate short-term store (Nairne & Neath). Separate visual and verbal limits (Scholl & Xu, Woodman et al.). Neo-Piagetian accounts that put the total near 7 once processing load is counted (Pascual-Leone, Morra). By Cowan's own count, about 15 of the 39 commentaries accepted the 4-chunk limit and about 7 strongly opposed it.
- The paper stays agnostic on *why* the limit exists. Neural-oscillation stories (40 Hz cycles nested in ~10 Hz cycles) are offered as speculation.
- Outside this text (my background, check before citing): later research debates fixed slots against a continuous resource that loses precision as more items are held (Luck & Vogel vs. Bays, Husain, Ma and colleagues). For design the practical message is the same either way: holding more items makes each one worse.
- The design implications are extrapolations. The studies used brief displays, blocked rehearsal and arbitrary symbols. Real interfaces let people rehearse, look back and lean on familiar chunks, so real-world limits are compound and often higher. Use 4 as a ceiling for what must be held unaided, not as a rule for how much can appear on screen.

## Disagreements with other references
- `references/psychology/cognition-memory-cognitive-load.md` §1 already states "4 ± 1" and debunks the 7 ± 2 menu rule, which matches this paper. This paper adds the two-tier view (pure ~4 vs compound ~7), the individual range of 2–6, and the point that visual memory counts objects rather than features. Trust this file for numbers and that one for UI practice.
- `references/masters/timeless-principles.md` lists 7 ± 2 for menus as a myth. That agrees with this paper, but do not swap in "max 4 menu items": visible menus are recognition, and Cowan's limit applies to what is held in mind, not to what is seen.
- `references/books/choice-overload-meta-analysis.md` and `chernev-choice-overload-2015.md` deal with how many options people prefer to choose from, which is a different mechanism (decision difficulty, not storage). Do not justify a cap on assortment size with Cowan.
- Hick–Hyman-style "fewer choices = faster" advice in other files concerns decision time. This paper concerns how many separate things can be held in focus at once. The two point the same way but should not be cited for each other.

## Best quotes (< 25 words each, max 5)
- "that number was meant more as a rough estimate and a rhetorical device than as a real capacity limit."
- "A single, central capacity limit averaging about four chunks is implicated along with other, noncapacity-limited sources."
- "that scene can have about four separate parts in awareness at any one moment."
- "expertise is likely to alter the way in which a limited capacity can be filled"
- "It is as if the capacity-limited processing system is capable of noting only 1, 2, 3, 4, and many."

## Related
- references/psychology/cognition-memory-cognitive-load.md (working memory numbers, chunking in UI)
- references/psychology/cognition-perception-attention-reading.md (attention, change blindness)
- references/masters/timeless-principles.md (7 ± 2 myth, recognition over recall)
- references/books/james-principles.md (James's primary vs secondary memory, the historical root of the distinction)
- references/books/ebbinghaus-memory.md (long-term forgetting, the other half of the memory story)
- Miller (1956), "The magical number seven, plus or minus two"; Cowan (2010), "The magical mystery four", Current Directions in Psychological Science; Luck & Vogel (1997), Nature
