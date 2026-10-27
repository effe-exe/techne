---
title: "Human-Computer Interaction: An Empirical Research Perspective — author's free papers and materials"
author: "I. Scott MacKenzie (with R. William Soukoreff and others)"
year: 1992–2024 (book 2013, 2nd ed. 2024; papers 1992, 2001, 2002, 2003, 2018)
domains: [interaction, motor-control, input, text-entry, research-methods, data-driven]
evidence: "strong"
---

# HCI: An Empirical Research Perspective (free materials) — I. Scott MacKenzie

Use this when: predicting or comparing how fast people can point or tap (target size and distance, menu and button placement, input technique choice); designing or judging a keyboard, keypad, autocomplete or other text-entry method; measuring entry speed and error rates in a prototype or in product analytics; planning a small controlled usability experiment (within vs between subjects, counterbalancing, how to report results).

Source: https://www.yorku.ca/mack/ (author's site). The book itself is commercial and was **not** read; only its table of contents (2nd ed., https://www.yorku.ca/mack/HCIbook2e/toc_2e.pdf) was read for structure. Read in full: "Fitts' Law" (chapter 17 in the Wiley Handbook of HCI, 2018, hhci2018.pdf); "Fitts' Law as a Research and Design Tool in HCI" (HCI journal, 1992, HTML version); MacKenzie & Soukoreff, "Text Entry for Mobile Computing: Models and Methods, Theory and Practice" (HCI journal, 2002); Soukoreff & MacKenzie, "Metrics for Text Entry Research" (CHI 2003); MacKenzie & Soukoreff, "Phrase Sets for Evaluating Text Entry Techniques" (CHI 2003); MacKenzie, Kauppinen & Silfverberg, "Accuracy Measures for Evaluating Computer Pointing Devices" (CHI 2001); research notes on text entry speed, independent variables in Fitts' law experiments, within- vs between-subjects designs, reporting an F-statistic, and ISO testing of pointing devices. The book's chapters 5 (experiment design), 6 (hypothesis testing) and 7 (modelling) correspond most closely to these materials; chapters 1–4 and 8 are known only by their titles.

## The big idea (3 sentences)
Human pointing and typing can be measured and modeled precisely enough to inform design, but only if speed and accuracy are always considered together. Fitts' law turns target distance and size into an index of difficulty in bits, and its throughput (bits/s) combines speed and accuracy into one number that is comparable across devices when the ISO 9241-9/411 procedure is followed. The same discipline applies to text entry and to experiments in general: control what you can, measure what people actually did rather than what they were asked to do, report effect sizes before statistics, and don't trust a "faster" claim that ignores errors or learning.

## Core concepts
- **Fitts' law (Shannon form)** — MT = a + b · log2(A/W + 1). ID (bits) rises by about 1 bit when distance doubles or width halves. The Shannon form fits better than Fitts' 1954 log2(2A/W) or Welford's form, and it can't go negative. Negative IDs (and negative intercepts) seen in published studies signal a misapplied model.
- **Predicting vs measuring** — the regression equation predicts time. Throughput TP = IDe / MT measures performance. MacKenzie argues throughput is the real core of Fitts' law; "improved" models without a term in bits are different models.
- **Effective width and amplitude** — the model assumes about 4% misses. We = 4.133 × SD of selection points along the task axis, and Ae = the distance actually moved. Using them credits people for what they did and makes speed/accuracy trade-offs comparable. Throughput is computed per sequence of trials per participant (about 20–25 trials), then averaged; it can't be computed from a single trial.
- **ISO 9241-9 (now 9241-411)** — standard 1D and 2D (targets on a ring) serial tasks, a baseline device (usually a mouse), throughput as the metric, plus comfort questionnaires. Typical throughputs: mouse ~3.7–4.9 bits/s; finger touch on a phone 6.85 bits/s (1D 7.43, 2D 6.27); trackball ~3.0; touchpad ~2.9; joystick ~1.8; lip input ~1.
- **Limits of the law** — it covers rapid aimed moves under spatial constraints. When people slow down for accuracy, or the task is time-constrained (drawing, tracking, moving targets), other models fit better (linear speed–accuracy trade-off, the Meyer et al. stochastic optimized-submovement model). Low-ID moves (<~3 bits, <~200 ms) are mostly ballistic. Some studies find shrinking width hurts more than adding distance.
- **Sources of variation** — across six 1975–1988 device studies, mouse IP differed by 4× between labs (10.4 vs 2.6 bits/s), and intercepts ranged from −880 to 1030 ms. Causes include task (discrete tasks give IPs about 2–3 bits/s higher than serial tasks), selection method (button, dwell, other hand), a narrow ID range, error handling and learning. Rankings and ratios within a study replicate better than absolute values.
- **Path accuracy measures** — target re-entry (TRE), task-axis crossing, movement and orthogonal direction changes, movement variability, error and offset. In one study TRE plus movement offset explained ~61% of the variance in throughput, and TRE separated a trackball from a touchpad that had the same throughput.
- **Text entry speed** — wpm = (characters − 1) / seconds × 60 / 5. A "word" is 5 keystrokes including spaces. The first character starts the clock, so it isn't counted.
- **Text entry errors** — keystrokes fall into Correct, Incorrect-Not-Fixed (INF), Incorrect-Fixed (IF) and Fixes (F). Total error rate = (INF + IF) / (C + INF + IF), which splits into corrected and not-corrected error rates. KSPC (keystrokes per character; Qwerty ≈1.0, multitap ≈2.03) depends on the device, so it can't be compared across methods. Also measured: correction efficiency, participant conscientiousness, wasted bandwidth.
- **Focus of attention (FOA)** — how many places the eyes must watch (source text, keys, display). Touch typing on a physical keyboard needs 1; a soft keyboard needs at least 2; correcting adds 1 more.
- **Fitts digram model** — predicts expert speed on a layout by combining Fitts' law with letter-pair frequencies (Hick–Hyman reaction time added for novices). In 2002 it ranked layouts from Qwerty 30 wpm to Metropolis II 43 wpm (predicted). It is sensitive to the Fitts slope, and observed OPTI speeds exceeded its predictions.
- **Evaluation stances** — text-copy tasks with short memorable phrases (a published set of 500, mean 28.6 characters) beat free composition for internal validity. Measure walk-up as well as expert performance. Use within-subjects designs with balanced Latin squares unless the conditions interfere (e.g. different keyboard layouts), and test for a group effect to catch asymmetric skill transfer.

## Actionable heuristics for product design
- When deciding whether a size or placement change matters, compute ID with the Shannon form and convert it to time at a realistic throughput. At ~5–7 bits/s, each extra bit costs roughly 150–200 ms per selection (this note's arithmetic from the throughput figures above, not MacKenzie's). The log curve means enlarging small, far targets pays far more than enlarging large, near ones.
- When a target is wide but short (text links, list rows, words), measure W along the approach direction or use the smaller of width and height. Otherwise you will overrate how easy a vertical approach is (Card et al.'s text-selection data gave negative IDs for exactly this reason).
- When choosing between input techniques (tap vs swipe, dwell vs click, gaze vs touch, a new widget), run a short ISO-style 2D tapping test with a baseline condition and compare throughput rather than time or errors alone. People trade speed for accuracy, and one-sided numbers can make either technique look better.
- When a technique relies on dwell to select (gaze, hover, accessibility switches), expect it to be slower than an explicit press (in one eye-tracker study IP was 9.3 vs 13.7 bits/s for a hardware button). Offer an explicit confirm action where users make frequent selections.
- When a menu or control depends on the pointer following a path (cascading menus, hover reveal, drag targets), design for path wobble (tolerant hit corridors, delays before switching submenus), because path measures such as target re-entry and offset vary widely between devices even when endpoint accuracy looks the same.
- When citing a pointing-time constant (e.g. the keystroke-level model's 1.1 s), treat it as an order of magnitude. Prediction equations taken from papers differed 4× between labs, and MacKenzie warns that embedding them in design tools is premature.
- When shipping a novel keyboard, gesture alphabet or input layout to consumers, plan for the walk-up experience to be worse than the familiar baseline. Optimized OPTI started at 17 wpm vs Qwerty's 28 and only overtook it after ~4 h of practice, reaching 44 vs 40 wpm after ~8 h. FITALY walk-up was 8 wpm. Default to familiar layouts and make novel ones optional, because most consumers never invest the practice.
- When designing autocomplete or predictive text, train and evaluate on real interaction logs, not text corpora. In keystroke logs, Backspace was the second most common key (~7% of keystrokes), and Shift, Space, cursor keys and punctuation outnumbered several letters. Corpora leave out editing and modes, so models built from them overestimate the gains.
- When predicting the benefit of word disambiguation (T9-style, swipe, autocorrect), treat model predictions as an upper bound (T9 was predicted at 41–46 wpm assuming expert, error-free, in-dictionary input). The cost of watching the suggestions (an extra FOA) and of correcting wrong guesses isn't in the model.
- When users must transcribe something (OTP codes, gift card numbers, IBANs), put the source next to or right above the input and reduce how often eyes must move between them. Interleaving source and output kept FOA at 1, and leaving the source visible led to more corrections and fewer uncorrected errors, at a small speed cost (25.3 vs 27.1 wpm).
- When instrumenting a text field or editor in product analytics, log keystrokes, including Backspace and edits, not just the final value, so you can compute total, corrected and uncorrected error rates and KSPC. The final text alone hides the errors users fixed.
- When reporting text-entry speed, use (n − 1) characters from the first to the last keystroke, call the variable "entry speed" with "wpm" as the unit, and give an error rate next to it every time.
- When handwriting or speech recognition is the input, remember that humans hand-print at ~15 wpm (handwriting 15–25 wpm; touch typing 40–60+), so even perfect recognition caps speed. Users in one study would accept only about 3% recognition errors, and novices saw far worse accuracy than experts.
- When running a comparative usability test, prefer within-subjects designs (fewer participants, less variance). Counterbalance with a balanced Latin square (use a multiple of the number of conditions; even counts can be fully balanced) and check for a group effect. Switch to between-subjects when the conditions compete for the same motor habits (two keyboard layouts) or transfer looks asymmetric.
- When stakeholders want proof from a test, lead with means and the difference between conditions (e.g. "7.5% longer"), put the test statistic in parentheses, and include an accuracy measure next to every speed measure. Don't accept "users found it 3× faster" anecdotes without a controlled comparison.

Reference numbers from these materials (lab conditions; for orientation, not targets):

| Quantity | Value | Source in this note |
|---|---|---|
| Mouse throughput (ISO 2D task) | ~3.7–4.9 bits/s | 2018 chapter; 2001 study (4.9) |
| Finger touch on phone (ISO 1D / 2D) | 7.43 / 6.27 bits/s | 2018 chapter, n = 16 |
| Trackball / touchpad / joystick | 3.0 / 2.9 / 1.8 bits/s | 2001 study, n = 12 |
| Touch typing / hunt-and-peck / handwriting | 40–60+ / 20–40 / 15–25 wpm | 2002 review |
| Soft Qwerty, walk-up vs practiced (stylus) | ~20 wpm vs ~40 wpm after 8 h | 2002 review |
| KSPC, Qwerty vs phone multitap | ~1.0 vs ~2.03 | 2003 metrics paper |

## Evidence & caveats
- **Fitts' law is among the most replicated models in experimental psychology** (correlations usually above .9; it holds for fingers, wrist, arm, foot, head, eyes, underwater, children, older adults and monkeys). The Shannon formulation, effective width and ISO throughput are standard in HCI. [strong]
- **Absolute numbers are fragile.** MacKenzie's own survey shows a 4× spread for the same device between labs. Phone touch at 6.85 bits/s vs mouse at 3.7–4.9 is a cross-study comparison; he notes a direct comparison isn't possible. The touch study had 16 young right-handed participants, seated, with the phone on a desk, and IDs only 1.1–3.2 bits (wider ranges gave too many errors with fingers).
- **Dated text-entry survey (2002):** the device landscape (Palm, Graffiti, multitap, T9, soft keyboards for styluses) is pre-smartphone, and model predictions for layouts like OPTI or Metropolis were never fully validated in long studies. The methods (wpm definition, phrase sets, error taxonomy, FOA, novice vs expert) are still standard. The speed numbers are not current benchmarks.
- **Small single studies:** the accuracy-measures study had 12 participants, four devices and one ID (3.8 bits). The error-metrics demo had 12 participants on a 2003 mini-Qwerty device. The authors themselves say the relative weight of the path measures may differ for other devices and tasks.
- **Opinion vs data:** dismissing speech as perennially niche (2002) and calling consumer walk-up usability paramount are the authors' judgments. The first now looks outdated given modern dictation. The second still holds.
- The book (2013/2024) wasn't read; nothing here should be cited as "from the book" beyond its chapter structure.

## Disagreements with other references
- `references/data-driven/decisions-from-data-examples.md` says larger targets "reduce errors per Fitts's law". Strictly, Fitts' law predicts movement time at a nominal ~4% error rate, and the model doesn't predict error reduction. That bigger targets reduce errors is a separate empirical finding (see `references/books/parhi-thumb-target-size.md`). Cite it that way.
- `references/psychology/cognition-motor-control-and-timing.md` presents the keystroke-level model's pointing constant (~1.1 s) and Fitts parameters as usable defaults. MacKenzie shows that published equations vary 4× between studies and that 1.1 s came from one 1978 text-selection study. Use it as a rough estimate, and measure throughput on your own device and task when the decision matters.
- The same file implies doubling distance and halving width have equal effects. Under the Shannon form they are equal only at large A/W. MacKenzie also cites evidence (Sheridan 1979, and others) that shrinking width hurts more than adding distance, though this isn't unanimous (ballistic moves under ~3 bits can show the reverse). Keep "small targets are disproportionately costly" as a [moderate] add-on.
- `references/books/parhi-thumb-target-size.md` reports Fitts' law failing for a uniformly scaled keypad (bigger keys were faster at the same ID). MacKenzie's 2018 chapter makes the same point: touch suffers from the fat-finger problem and limits the usable ID range. The two agree. For finger input, treat a minimum physical size as a separate constraint from Fitts' time prediction.
- `references/books/quantifying-the-user-experience.md` (between-subjects needs about 4× the participants) agrees with MacKenzie's preference for within-subjects designs. MacKenzie adds the exception for interference and asymmetric skill transfer, which that note doesn't cover.

## Best quotes (< 25 words each, max 5)
- "Participants receive credit for what they actually did, not for what they were asked to do." (Fitts' Law, 2018)
- "Fitts' law remains an analogy waiting for a theory." (Fitts' law as a research and design tool, 1992)
- "extracting a Fitts' law prediction equation out of a research article and embedding it in a design tool may be premature" (1992)
- "Users, perhaps unrealistically, expect to achieve text input rates within these ranges on mobile devices." (Text entry for mobile computing, 2002)
- "Statistical tests play a supporting role." (How to Report an F-Statistic)

## Related
- references/psychology/cognition-motor-control-and-timing.md — Fitts, steering, KLM and touch-target numbers in practice
- references/books/parhi-thumb-target-size.md — thumb target sizes; where Fitts breaks for touch
- references/books/baymard-checkout-ux.md — applied typing aids (numeric keyboards, masks, card spacing)
- references/books/quantifying-the-user-experience.md, references/process/research-methods-selector.md — sample sizes and test design
- references/data-driven/statistics-cheatsheet.md — reporting effects and intervals
