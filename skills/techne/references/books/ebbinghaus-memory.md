---
title: "Memory: A Contribution to Experimental Psychology"
author: "Hermann Ebbinghaus"
year: 1885
domains: [psychology, memory, learning, research-methods]
evidence: "moderate"
---

# Memory: A Contribution to Experimental Psychology — Hermann Ebbinghaus

Use this when: designing onboarding, tutorials, learning products or any feature whose value depends on users remembering something later; deciding how often to re-surface information, tips or reviews; reordering a flow or menu that people have already learned; someone quotes "the forgetting curve" and you need the actual numbers and what they measure.

Source: https://psychclassics.yorku.ca/Ebbinghaus/index.htm (Ruger & Bussenius 1913 English translation). Read in full: preface and chapters I–IX. The numeric tables on that site are images; I viewed the key retention table (ch. VII) directly and took the other numbers from the text.

## The big idea (3 sentences)
Memory can be measured by "savings": how much less time or how many fewer repetitions it takes to relearn something than it took to learn it, which reveals traces that are still there even when nothing can be recalled or recognized. Using this measure on himself with thousands of nonsense syllables, Ebbinghaus found lawful patterns: forgetting is very fast at first and then very slow, the work of learning rises steeply with list length, each repetition adds a roughly constant amount of retention up to a point, and repetitions spread over days beat the same number massed together. He also showed that learning a sequence links each item not only to the next one but, more weakly, to later and even earlier items.

## Core concepts
- **Savings method** — relearn to the same criterion (first error-free recitation) and compare. "Forgotten" material that can't be recalled still shows large savings.
- **Nonsense syllables** — about 2,300 consonant-vowel-consonant syllables, chosen to avoid uncontrolled meaning and interest. He found them less homogeneous than hoped; some lists were much harder than others.
- **Strict procedure** — whole-list reading at 150 beats per minute (0.4 s per syllable), lists grouped into 3- or 4-syllable measures with a light accent, 15 s pause between lists, same time of day, no mnemonic tricks.
- **Span and list length** — he could recite about 7 syllables after one reading (8 only sometimes; 6 never failed). Repetitions needed for longer lists rose steeply: 12 syllables ≈ 16.6 readings, 16 ≈ 30, 24 ≈ 44, 36 ≈ 55. Five times his one-reading span took over 50 repetitions and about 15 minutes of concentrated effort.
- **Meaning** — stanzas of Byron's *Don Juan* (~80 syllables each) took under 9 readings each; he estimated 70–80 for a nonsense list of that length. Meaning, rhythm, rhyme and a known language cut the work to about a tenth.
- **Repetitions vs retention** — with 8 to 64 readings of 16-syllable lists, savings 24 hours later grew almost in proportion to the readings: each reading saved about 12.7 s for six lists (≈ 2.1 s per list, a scant third of the reading's own duration). Roughly, three extra readings today save one reading tomorrow.
- **Diminishing returns of overlearning** — the proportion breaks down at high repetition. Twelve-syllable lists repeated four times as often as needed still required about 35% of the original work to relearn after 24 hours; an average of 410 repetitions saved only about a sixth of that effort.
- **The forgetting curve (savings after learning 13-syllable lists to two error-free recitations, 163 double tests, 1879–80):**

  | Interval | Savings (work still "retained") | Work forgotten |
  |---|---|---|
  | ~20 minutes (0.33 h) | 58.2% | 41.8% |
  | 1 hour | 44.2% | 55.8% |
  | ~9 hours (8.8 h) | 35.8% | 64.2% |
  | 1 day | 33.7% | 66.3% |
  | 2 days | 27.8% | 72.2% |
  | 6 days | 25.4% | 74.6% |
  | 31 days | 21.1% | 78.9% |

  He fitted b = 100k / ((log t)^c + k) with k = 1.84, c = 1.25 (t in minutes) and called it shorthand for one person's results, not a law. Control tests from other periods agreed (56% after 18 minutes; 33.4% after 24 hours).
- **Longer lists are retained better** — after 24 hours the saving was about one third for 12-syllable lists and six tenths for 36-syllable lists; harder-won learning lasts longer, but not in proportion to the extra effort.
- **Repeated daily relearning** — the work needed drops each day (nine 12-syllable lists: 158, 109, 75, 56, 37, 31 repetitions over six days); the daily savings shrink roughly geometrically. The poem was recited without any reading on day five.
- **Spacing** — 38 repetitions per list spread over three days gave the same next-day result as 68 massed repetitions the day before. He concluded that distributing repetitions over time is "decidedly more advantageous" than massing them.
- **Remote and backward associations** — after learning a list, derived lists made of items that had been 1, 2, 3 or 7 places apart were learned with savings that fell with distance (combined data: roughly a third of the adjacent-link strength for skip-1, a quarter for skip-2, and still about a tenth across 7 intervening items). Merely reusing the same syllables in random order gave almost no saving. Reverse-order lists were also learned faster, but backward links were weaker than forward ones.
- **Memory without recognition** — lists read 8 or 16 times felt unfamiliar the next day, yet savings followed the same straight line as lists read 53–64 times that he clearly recognized.
- **Attention oscillation** — within a session, a quick list tended to be followed by a slow one; fatigue effects were weaker than this rhythm.
- **Experimenter expectancy** — he worried that his own hypotheses would bias his effort. He re-ran the association test blind (shuffled sheets, results not totalled until the end): the pattern held but every saving was smaller (e.g. 110 vs 152 s), which he took as evidence of mild expectancy bias.

## Actionable heuristics for product design
- When users learn something in onboarding (a gesture, a rule, where a setting lives), assume more than half of the learning effort is gone within an hour and about two thirds by the next day. Put the cue back at the point of use (inline hints, empty-state reminders) instead of relying on a one-time tour.
- When a user returns after weeks away, don't restart them as a beginner: savings stay at about a fifth to a quarter even after a month. Offer a short refresher or "what's changed" layer, then get out of the way.
- When you need users to retain something (learning apps, security habits, a new workflow), space the exposures over days rather than packing them into one session. Ebbinghaus got the same effect from ~56% of the repetitions when they were spread over three days.
- When designing review schedules, front-load early reviews and then stretch the intervals, because forgetting is steepest in the first hours and then flattens; reviews at hour 1 and day 1 protect more than the same reviews at day 20 and day 21.
- When a tutorial adds "practice it five more times", expect quickly diminishing returns once the user can do it once correctly. Beyond about double the minimum, extra repetitions in the same session add little; a second short session the next day adds more.
- When you must make people remember strings (codes, IDs, recovery words, product names), make them meaningful, rhythmic or familiar. Meaningful verse took about a tenth of the work of nonsense of the same length.
- When a list is longer than about 7 short items to hold in mind at once (his one-reading span; see the 4-chunk caveat below), expect the cost to grow much faster than the length. Show items instead of asking users to remember them, and group long codes into chunks of 3–4, as he did with accented measures.
- When reordering a menu, a sequence of steps, or a keyboard flow that users already know, expect a real relearning cost: learned sequences carry links to later and earlier items, not just neighbors. Change order only when the gain is large, and never reverse a well-known sequence casually.
- When a user doesn't remember having seen something, don't conclude the exposure did nothing; savings can exist without recognition. Measure learning by speed and errors on the second attempt, not by asking "do you remember this?".
- When running studies with time-based or effort-based measures, control time of day and session fatigue, and blind the person scoring the result. Ebbinghaus's blinded rerun showed smaller effects than his unblinded one.
- When summarizing a noisy learning metric, use the average of groups of trials, and check its spread. He judged his averages trustworthy only after checking that grouped results scattered symmetrically.

## Evidence & caveats
- n = 1: every number comes from Ebbinghaus testing himself, at fixed times of day, over two periods (1879–80 and 1883–84). He says repeatedly that absolute values are individual and only relations may generalize.
- The general shape of the forgetting curve has replicated (including a modern single-subject replication, Murre & Dros 2015), and so have the spacing effect and the meaning advantage, all now well established in learning research. The exact percentages are his, under his conditions.
- "Savings" is not "percent you can recall". Popular graphs that say "you forget 70% in 24 hours" turn a relearning-time measure into a recall measure. Recall would look worse; recognition would look better.
- Material was nonsense syllables learned by rote with no mnemonics. Real product knowledge is meaningful and used in context, which changes the curve. He shows how much meaning matters but tested it only on poetry.
- He himself flags weak points: the 9-hour vs 24-hour values look inconsistent, the 64-repetition condition was learned while tired, and the reverse-association results came from only 10 and 4 tests.
- The "7 syllables" span is his trained span with rhythmic grouping, not a universal capacity.

## Disagreements with other references
- `references/psychology/cognition-emotion-experience-habit.md` (serial position effect) cites "Ebbinghaus 1885" for primacy and recency in list recall. The 1885 book doesn't report a serial-position curve for items within a list. Its position findings are about which *list* in a session was learned fastest. Cite Murdock 1962 and Glanzer & Cunitz 1966 (already listed there) instead.
- `references/psychology/cognition-cheatsheet.md` and `cognition-memory-cognitive-load.md` say working memory holds ~4 chunks, not 7±2. Ebbinghaus's 7 is an immediate-span figure for rehearsed, rhythmically grouped syllables, which fits the chunking explanation. No real conflict, but don't cite Ebbinghaus as support for "7 items".
- `SKILL.md` §2 says "the interface remembers": Ebbinghaus's curve is the quantitative reason. Two thirds of learning effort is gone in a day, so prefill, carry forward and show rather than ask.
- `references/process/redesign-and-scale.md` and the habit file warn that redesigns break learned behavior; the remote-association results add that even reordering steps or menu items is costly, not only moving them.

## Best quotes (< 25 words each, max 5)
- "After 24 hours about one third was always remembered; after 6 days about one fourth."
- "A suitable distribution of them over a space of time is decidedly more advantageous than the massing of them at a single time."
- "Of course this statement and the formula upon which it rests have here no other value than that of a shorthand statement."

## Related
- `references/psychology/cognition-memory-cognitive-load.md` (recognition over recall, chunking)
- `references/psychology/cognition-emotion-experience-habit.md` (serial position, habit)
- `references/data-driven/conversion-onboarding-activation-retention.md` (first-run, re-engagement)
- `references/process/research-methods-selector.md` (blinding, measurement choice)
- `references/books/james-principles.md` (ch. XVI summarizes these experiments; active recall, cramming)
- `references/books/aristotle-memory.md` (association and recollection, the older theory Ebbinghaus tested)
