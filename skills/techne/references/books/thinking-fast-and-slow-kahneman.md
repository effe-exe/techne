---
title: "Thinking, Fast and Slow"
author: "Daniel Kahneman"
year: 2011
domains: [psychology, data-driven]
evidence: "mixed"
basis: "author's free material, not the full book"
coverage: medium
---

# Thinking, Fast and Slow — Daniel Kahneman

Use this when: you need to predict how people will judge an option they see for a few seconds (a plan card, a price, a risk warning, a review score) rather than study it; you are choosing how to frame numbers, losses, defaults or comparisons on a screen; a stakeholder's (or your own) confident intuition about "what users want" needs a check; someone cites a famous "System 1" effect and you must decide whether it is safe to design around.

Basis: the book (FSG, 2011) was not read. These notes rest on Kahneman's own free material: his **Nobel Prize lecture, "Maps of Bounded Rationality" (2002)**, the long-form paper that the book popularises (read in full); his **Edge Master Class talk, "The Marvels and the Flaws of Intuitive Thinking" (2011)**, given the year the book came out, which presents System 1 and 2, associative coherence, "what you see is all there is", substitution and expert intuition (transcript read in full); his **2012 open letter on priming**; and his **2017 public comment** accepting that the book's priming chapter rested on underpowered studies. Coverage is medium: the theoretical core (two systems, accessibility, framing, prospect theory, heuristics as attribute substitution, peak-end and duration neglect, conditions for valid intuition) is covered from primary text. The book's chapters on the planning fallacy, the outside view, regression to the mean, the illusion of validity, the two selves and well-being are covered here only through the lecture's and talk's brief mentions.

## The big idea (3 sentences)
Most judgments and choices come from fast, automatic, associative processing ("System 1") whose impressions are only loosely checked by slow, effortful reasoning ("System 2"). What System 1 produces depends on what is most *accessible* in the moment, so the way a problem is described, what is salient, what changed, and what an average looks like drive decisions more than the logically relevant facts. Those shortcuts usually work, but they fail predictably, and you can forecast the failures from what is easy versus hard to see.

## Core concepts
- **Two modes, used as characters** — "System 1" is fast, parallel, automatic, effortless, associative and hard to control; "System 2" is slow, serial, effortful and rule-governed. Kahneman says plainly in the Edge talk that there are no literal systems in the brain; the two "characters" are a teaching device.
- **System 2 as a lax editor** — it endorses most of System 1's suggestions after a quick look. The bat-and-ball puzzle ($1.10) shows it: about half of Princeton students answered the intuitive 10 cents.
- **Accessibility** — the ease with which a thought comes to mind. Framing, prospect theory and heuristics are all explained by it. Accessible features drive the decision, and Kahneman notes there is no reason the most accessible features are the most relevant ones.
- **Natural assessments** — things computed automatically without intent: size, distance, similarity, causality, surprise, affect, mood, and fluency itself. Averages are natural; sums are not.
- **Framing and the invariance failure** — logically equivalent descriptions ("200 saved" vs "400 die"; 90% survival vs 10% mortality) produce different choices, even among experienced physicians. People passively adopt the formulation they are given. A finite mind cannot be invariant.
- **Prospect theory (reference dependence)** — outcomes are felt as gains and losses relative to a reference point, not as final states of wealth ("Bernoulli's error"). The value function is concave for gains, convex for losses, and kinked at the reference point: losses weigh about 2–2.5 times as much as equal gains. People typically refuse a 50/50 bet unless the win is about twice the loss.
- **The wealth frame** — the same gamble presented against total wealth ("you own W, or a 50% chance of W−100 / W+150") is judged closer to risk-neutral. Reframing the reference point changes risk attitude.
- **Attribute substitution** — when the target question is hard (probability, value), people answer an easier, related one (similarity, ease of recall, affect) without noticing. Tom W. and Linda: rankings by probability correlated .97–.99 with rankings by resemblance.
- **The affect heuristic** — an immediate liking/disliking is mapped onto many different scales (importance, donation size, risk, punitive damages).
- **Prototype heuristics: averages for sums** — "extensional" quantities (total value, probability, total pain, evidence from a sample) are judged by an average or prototype. This gives scope neglect (willingness to pay of about $80 to save 2,000, 20,000 or 200,000 birds) and violations of dominance (Hsee: 24 good dishes priced higher alone than the same 24 plus 16 more with some broken).
- **Peak-end and duration neglect** — retrospective evaluations of colonoscopies tracked the average of peak and final pain (r ≈ .67) and ignored duration (r ≈ .03). Adding a milder minute at the end improved patients' memories in a randomised trial. In the cold-water study most people chose to repeat the longer episode that ended less badly.
- **Separate vs joint evaluation** — alone, options are judged "by liking"; side by side, dominance and logic can become visible. Many biases appear in one mode and disappear in the other.
- **Corrective thoughts must be accessible** — System 2 overrides only when the relevant rule comes to mind in time. It is weakened by time pressure, concurrent load and (surprisingly) good mood, and helped by cues such as stating that something is a random sample. Corrections usually anchor on the intuition and under-adjust.
- **Frequencies beat percentages** — "how many of 100 people" sharply reduced conjunction errors compared with percentages (Edge talk; Kahneman and Cosmides agree the format helps).
- **WYSIATI and associative coherence** — System 1 builds the most coherent story from whatever is present and is insensitive to what is missing. Confidence reflects the coherence of the story, not the quality or quantity of evidence.
- **Valid intuition depends on the environment** (with Gary Klein) — trust an intuition only where the environment is regular enough and the person has had extensive practice with fast feedback. Subjective confidence is not a guide, because substituted answers feel just as certain as expert ones.

## Actionable heuristics for product design
- When users decide at a glance (plan cards, listings, settings), design for what is *accessible*, not for what is written somewhere. The attribute that is visually salient and already computed for them (a total, a comparison, a "per month" figure) will be the one they use.
- When a decision depends on a sum-like quantity (total cost over a year, total storage, total time, all fees), compute and show the total. People judge sets by their average and will not add things up; drip pricing and per-item framing exploit exactly this.
- When you add a low-value extra to a bundle (a cheap add-on, a "bonus" low-quality item), expect it can *lower* perceived value when the bundle is seen alone. Test bundles in the mode users will actually see them: separately or side by side.
- When you want people to notice that one option dominates another, put them side by side with aligned attributes. Joint evaluation makes dominance visible; separate pages hide it.
- When presenting risk, outcomes or statistics (health, security, finance, A/B readouts for stakeholders), use natural frequencies ("3 in 100 users") rather than percentages or conditional probabilities, and show the base rate next to the case-specific evidence.
- When choosing between equivalent frames ("95% success" vs "5% failure"; "save $10" vs "avoid a $10 fee"), treat the choice as a design decision with consequences, test both if it matters, and pick the frame you would defend if users saw both. Kahneman restricts "framing effect" to descriptions people consider equivalent on reflection. That is also a good ethics test: if users who saw both versions would feel tricked, don't use it.
- When a change removes something users have (a feature, a price lock, a grandfathered plan), budget for losses being felt about twice as strongly as an equal gain. Pair removals with real compensation and generous notice, rather than counting on the new benefit to balance it.
- When you want calmer, less loss-averse decisions (insurance, investing, upgrades), widen the frame: show the change against the user's total position or the yearly view, not as an isolated gain or loss. Use this to help users, never to hide a cost.
- When designing an experience people will remember and rate (onboarding, support chats, checkout, cancellation, a long task), fix the worst moment and design the ending deliberately; length matters less to the memory than peak and end. Don't use this to excuse a long, mediocre middle in daily-use tools (see Disagreements).
- When asking survey or rating questions, watch question order: a preceding narrow question (e.g. dates last month) can become the substitute answer for a broad one (life satisfaction). Ask the global question first, or randomise order.
- When a step needs System 2 (comparing plans, reviewing permissions, confirming a payment), remove competing load and time pressure, and put the decisive rule or fact in view at the moment of decision. People correct intuitions only when the relevant rule comes to mind in time.
- When you or a stakeholder feel sure about user behaviour, ask Kahneman and Klein's question: has this person had many repetitions with quick, clear feedback in this exact environment? If not, treat the confidence as a story, not evidence, and run the test. Product intuition about novel features rarely meets that bar.
- When a research synthesis or dashboard tells a neat, coherent story from a few interviews or one metric, ask explicitly "what would we need to see that we haven't?" (WYSIATI). A coherent story built from little evidence feels more convincing than it should.
- When evaluating designs with users, remember Kahneman's method point: within-subject comparisons tell people what you think matters. To measure first impressions or intuitive choices, show each person one version (between-subjects), as in a real A/B test.

## Evidence & caveats
- **Strong:** framing effects, loss aversion (direction robust; current meta-analytic estimates sit nearer 1.8–2 than 2–2.5, and it shrinks for small, routine stakes, see `references/psychology/behavior-persuasion-toolkit.md`), the conjunction fallacy in between-subject designs, scope insensitivity in willingness-to-pay surveys, peak-end and duration neglect (including a randomised clinical trial), the frequency-format advantage, and anchoring.
- **Fragile by Kahneman's own account:** neglect of *explicitly stated* base rates is fragile, and conjunction errors weaken in within-subject direct comparisons.
- **Failed or shrunk:** the book's priming chapter (ch. 4). In 2012 Kahneman warned social-priming researchers of a "train wreck"; in 2017 he publicly accepted that he had placed too much faith in underpowered studies and that behavioural priming effects cannot be as large or robust as the chapter suggested. A replicability analysis of the chapter's 12 cited articles found 100% significant results but a median observed power of 57% (Schimmack, Heene & Kesavan's blog, cited here for context only). Some examples in the Edge talk itself (head-nodding and persuasion, posture and disgust) belong to that literature: do not design around them. The "eyes" honesty-box poster study he praises has had mixed replications.
- **Ego depletion:** the book's account of System 2 as a limited resource draws on ego-depletion research (not read here). Large preregistered multi-lab replications found effects near zero. Don't justify short flows with "willpower runs out"; justify them with time, errors and drop-off data.
- **Opinion and framing, not data:** "System 1/System 2" is a metaphor Kahneman chose knowingly; many researchers prefer "Type 1/Type 2 processes", and the boundary between the two is not sharp. The proposed ordering of how often intuitions are endorsed, adjusted or blocked is "casual observation", by his words.
- Most classic studies used students and hypothetical choices. Effects in real products can be smaller, and they interact with familiarity, stakes and repeated experience. Treat each as a hypothesis to test, not a lift to bank.

## Disagreements with other references
- `references/psychology/cognition-emotion-experience-habit.md` already marks social priming and ego depletion as contested and cites Kahneman's 2017 acknowledgement; this file agrees and gives the primary source. Trust that file's evidence tags over the book's tone of certainty.
- `references/psychology/cognition-emotion-experience-habit.md` warns that peak-end does not mean "ignore the middle" for high-frequency utilities. Agree: peak-end describes retrospective ratings, while daily friction affects retention through repeated experience. Use peak-end for episodic experiences, and median friction for tools used every day.
- `references/books/choice-overload-meta-analysis.md` and `references/books/chernev-choice-overload-2015.md` show how famous behavioural findings shrink under meta-analysis. Apply the same caution to any single study the book makes vivid.
- Gigerenzer's "fast and frugal" heuristics (discussed in the Edge Q&A) treat heuristics as often accurate, ecologically rational tools; Kahneman treats them as substitution that produces biases. Both agree frequency formats help. For product work, use Kahneman to predict errors in unfamiliar, one-off judgments, and assume users' heuristics work well in familiar, feedback-rich tasks.
- `references/books/deceptive-patterns-brignull.md` and `references/psychology/behavior-ethics-dark-patterns.md` catalogue how these same biases (loss framing, anchoring, drip pricing, defaults) are exploited. The book explains the mechanism; those files set the ethical line techne enforces.

## Best quotes (< 25 words each, max 5)
- "Highly accessible impressions produced by System 1 control judgments and preferences, unless modified or overridden by the deliberate operations of System 2." (Nobel lecture)
- "Invariance cannot be achieved by a finite mind." (Nobel lecture)
- "Respondents who substitute one attribute for another are not confused about the question... they simply fail to notice that they are answering a different one." (Nobel lecture)
- "What the blog gets absolutely right is that I placed too much faith in underpowered studies." (2017 comment)

## Related
- `references/psychology/cognition-emotion-experience-habit.md` (dual process, peak-end), `references/psychology/behavior-persuasion-toolkit.md` (framing, anchoring, loss aversion with evidence tags), `references/psychology/behavior-pricing-and-choice.md`, `references/psychology/cognition-cheatsheet.md`
- `references/books/type-s-type-m-errors.md` and `references/books/asa-p-values.md` (why underpowered studies mislead, the lesson Kahneman says he failed to apply)
- `references/books/nudge-thaler-sunstein.md` (choice architecture built on these findings), `references/books/paying-not-to-go-to-the-gym.md`
- Books: Kahneman, Sibony & Sunstein, *Noise* (2021); Gilovich, Griffin & Kahneman (eds.), *Heuristics and Biases* (2002)

## Sources
- Kahneman, D. (2002). "Maps of Bounded Rationality: A Perspective on Intuitive Judgment and Choice", Nobel Prize lecture: https://www.nobelprize.org/uploads/2018/06/kahnemann-lecture.pdf (read in full; saved under books/free/thinking-fast-and-slow/)
- Kahneman, D. (2011). "The Marvels and the Flaws of Intuitive Thinking", Edge Master Class 2011, transcript: https://www.edge.org/conversation/daniel_kahneman-the-marvels-and-the-flaws-of-intuitive-thinking-edge-master-class-2011 (read in full)
- Kahneman, D. (2012). Open letter on priming research, hosted by *Nature*: https://www.nature.com/news/polopoly_fs/7.6716.1349271308!/suppinfoFile/Kahneman%20Letter.pdf
- Kahneman, D. (2017). Comment of 14 February 2017 on Schimmack, Heene & Kesavan, "Reconstruction of a Train Wreck": https://replicationindex.com/2017/02/02/reconstruction-of-a-train-wreck-how-priming-research-went-of-the-rails/comment-page-1/#comment-1454 (the blog post itself is a secondary analysis, cited only for context)
- Not obtained: the NYT Magazine book excerpt "Don't Blink! The Hazards of Confidence" (2011; blocked by paywall, not bypassed); the TED talk "The riddle of experience vs. memory" (2010; transcript not retrievable without JavaScript).
