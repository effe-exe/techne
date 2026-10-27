---
title: "Microinteractions: Designing with Details"
author: "Dan Saffer"
year: 2013
domains: [interaction, feedback, details, states]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Microinteractions: Designing with Details — Dan Saffer

Use this when: you are designing or reviewing one small, self-contained product moment (a toggle, login, rating, mute switch, error message, setting, alarm, password entry) and want a checklist that goes beyond "add an animation"; you need to argue for time to polish a detail; you are deciding what a feature should do the second, tenth and thousandth time someone uses it.

Basis: the book was not read; O'Reilly's preview pages were not reachable from this environment. These notes rest on Saffer's own summary article at his then-employer Smart Design ("Microinteractions: Why Details Matter"), his Designers & Books interview (2014), and Don Norman's foreword to the book, which Norman posts on jnd.org. They give the four-part model, the six design principles and the reasoning, but not the book's chapter-level detail (trigger design rules, rule-writing methods, feedback channels, loop types), which `references/interaction/microinteractions-and-motion.md` §1 already summarizes from the book.

## The big idea (3 sentences)
Products are judged as much by their details as by their features: features attract people, but the small moments that do one job (muting, logging in, rating, setting a status) are what make a product feel cared for or careless. Each such microinteraction has the same anatomy: a trigger starts it, invisible rules govern it, feedback makes the rules understandable, and loops and modes shape it over time. Designing these deliberately, with a short list of principles (don't start from zero, bring the data forward, prevent errors, use what's already there, speak human, plan long loops), turns forgettable or irritating moments into pleasant ones and, occasionally, into a brand's signature.

## Core concepts
- **Microinteraction** — a contained product moment that does one small task; it lives around and inside features in apps, websites and appliances; mostly noticed when it fails or surprises.
- **Features vs details** — features draw people in; details keep them. Details carry emotion; they are the "feel" in "look and feel".
- **Signature moment** — a microinteraction elevated into part of the brand (Saffer's examples: Facebook's Like, Microsoft's Start button, Google's "I'm Feeling Lucky").
- **Trigger** — what starts it: manual (a click, a switch) or system (conditions met, e.g. a message arrives and the phone vibrates).
- **Rules** — the sequence and limits of what can happen; invisible to the user, like the rules of a game.
- **Feedback** — the only way users learn the rules; the absence of feedback also communicates.
- **Loops and modes** — loops set how long it runs, whether it repeats and how it changes over time; modes should be used only for a critical but infrequent action that would otherwise interrupt the flow (his example: choosing a city in a weather widget).
- **Six principles** — (1) don't start from zero: use what you know about user, platform, context; (2) bring the data forward: show useful information in the trigger itself; (3) prevent human error: disallow or auto-fix actions that would break it; (4) use the overlooked: carry feedback in existing elements (cursor, scrollbar, button state) instead of adding new UI; (5) speak human: plain language, jargon only if users use it; (6) long loops: design for the 2nd, 10th, 1,000th use.
- **Naming creates legitimacy** — calling something a "microinteraction" gets teams time to polish it that "the login widget" would not.
- **Microinteractions as critique criteria** — Saffer proposes judging products by questions like: can you log in, does it start from zero, does it bring the data forward, does it speak human?
- **Polish as strategy** — his Mailbox example: an app whose features were commodities stood out through polished microinteractions (even the signup flow), as an alternative to a bare MVP.
- **Norman's foreword: fold the next step into the message** — an error message that states the problem should also contain the fix, ideally as an action button; observation (watching people, watching yourself) is the first step to finding these moments, and fixing them often means crossing team boundaries.

## Actionable heuristics for product design
- When you spec any feature, list its microinteractions separately (setup, first use, settings, error, empty, repeated use) and give each a trigger, rules, feedback and loop, because these moments are where products are judged and they are usually designed last or by default.
- When designing a manual trigger, put live state or data in it (the Kindle's "time left in chapter", an unread count, a toggle that shows ON/OFF), because bringing the data forward answers the question before the user has to act.
- When a user arrives at a setting, form or widget, prefill what you already know (location, last value, platform, account details), because starting from zero wastes effort and signals the product doesn't remember them (see `references/books/magic-ink.md`).
- When an input can fail validation (password rules, dates, file names, phone numbers), state the constraints before input and auto-correct or accept common formats, because preventing the error beats reporting it.
- When an error message is unavoidable, include the remedy in the message itself, with an action button where possible, and keep the user's input, because a message that only names the problem leaves people stuck (Norman's Aperture story).
- When you need to give feedback, first try to use an element that already exists (the button's own state, the cursor, the scroll position, the item that was touched) before adding a toast, banner or modal, because new UI adds noise.
- When the product talks to users (labels, errors, confirmations), use their words and drop system jargon unless your users speak it, because "speak human" is one of the most common failures Saffer lists.
- When a microinteraction is used repeatedly, decide what changes over time (shorter confirmations, remembered choices, dropping tips after the first use), because a long loop that adapts makes the tenth use feel better than the first.
- When you are tempted to add a mode (edit mode, a special state), check whether it is critical and infrequent; otherwise design it modeless, because modes interrupt flow and cause mode errors (see `references/books/design-of-everyday-things.md`).
- When an annoying system behavior happens at a bad moment (a low-battery chirp at night, an alert during a meeting), redesign the system trigger's timing and channel, as Nest Protect did with its night-time green glow, because a well-timed system trigger can turn a hated moment into a reassuring one.
- When fighting for polish time on a roadmap, name the specific microinteractions and their failure costs (support tickets, drop-offs, reviews), because a named, bounded detail gets scheduled; "polish" does not.
- When reviewing a competitor or your own product, run Saffer's critic questions (can I log in easily, does it start from zero, does it bring data forward, does it speak human), because they expose experience quality beyond "does it work".
- When a system trigger fires without the user acting (a notification, auto-save, a sync), give it a quiet, consistent feedback form the user can learn to read at a glance, because system triggers are where users most often wonder what just happened.
- When you write the rules of a microinteraction, list what the user can and cannot do in each state and what the system does on failure, before drawing screens, because invisible rules are only discoverable through feedback and gaps show up as confusing states.
- When one microinteraction becomes beloved (a like, a pull-to-refresh, a send sound), protect it in the design system as a signature moment and keep it consistent, because it now carries brand meaning.

## Evidence & caveats
- A practitioner framework built from examples, not an empirical theory. Saffer offers no studies showing that polished microinteractions raise retention or loyalty; that claim is his opinion. The Mailbox example is survivor-biased.
- The four-part anatomy is a useful checklist, and it overlaps with older ideas: Norman's feedback, constraints and modes (DOET), Raskin's warnings about modes, and state-machine thinking from engineering.
- "Delight" through details can turn into gratuitous animation; the existing techne rules (motion must communicate; fast beats pretty on frequent actions) in `references/interaction/microinteractions-and-motion.md` §0 constrain this.
- The free sources date from 2013–2014 (mobile, Kindle, Nest, Mailbox examples). The principles have aged well; some examples have not.
- Coverage is low: chapter-level guidance (trigger visibility rules, rule-writing with "the user can/cannot" lists, feedback channels and timing, loop types, prototyping and testing microinteractions) is not in these sources.

## Disagreements with other references
- `references/interaction/microinteractions-and-motion.md` §1 already gives the trigger/rules/feedback/loops table from the book; it treats modes as "avoid", while Saffer allows modes for critical but infrequent actions. Both agree modes need an obvious signifier and exit; follow Saffer's narrow exception only when the alternative clutters the main flow.
- `references/books/magic-ink.md` (Victor) pushes inference much further than "don't start from zero"; both agree on predicted defaults. Where they differ on predictability, follow the adaptive-UI caution cited in magic-ink's notes.
- Saffer's "polish instead of MVP" advice conflicts with lean validation advice in `references/process/process-playbook.md` and `references/books/mom-test.md`. Reconcile: validate the problem first with cheap methods; once the core loop is proven, polish the microinteractions on the critical path (signup, first value, the most frequent action).

## Best quotes (< 25 words each, max 5)
- "Features are what draw people to your product; details are what keep them there." (Saffer, Smart Design)
- "Details are a delivery system for emotions." (Saffer, Smart Design)
- "Naming the category gives it power. Silly, but true." (Saffer, Designers & Books interview)
- "Hurrah for the small, which is where we spend most of our lives." (Norman, foreword)

## Related
- `references/interaction/microinteractions-and-motion.md` (model table, motion values, feedback timing)
- `references/process/states-and-edge-cases.md` (empty, error and loading states)
- `references/books/design-of-everyday-things.md` (feedback, modes, errors), `references/books/magic-ink.md` (context instead of interaction)
- `references/books/wwdc-fluid-interfaces.md`
- Saffer, *Designing Gestural Interfaces* (2008); Raskin, *The Humane Interface* (2000).

## Sources
- Dan Saffer, "Microinteractions: Why Details Matter" (Smart Design ideas page): https://smartdesignworldwide.com/ideas/microinteractions-details-matter/ (fetched via https://smartdesignworldwide.com/?p=713)
- "Microinteractions: A Conversation with Dan Saffer of Smart Design" (Designers & Books, 2014): https://designersandbooks.com/blog/microinteractions-conversation-dan-saffer-smart-design
- Don Norman, "Microinteractions: My Foreword" (jnd.org, foreword to the book): https://jnd.org/microinteractions-my-foreword/
- Saved under `books/free/microinteractions-saffer/`. Not reachable or not read: O'Reilly preview pages (blocked), an interview at dtelepathy.com (host unreachable), Smart Design's Smart Salon panel videos (no transcripts).
