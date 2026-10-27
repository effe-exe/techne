# Mode: library — grow and maintain the reference library

Use for: "add this site/app to the library", "update the library with this week's Awwwards/Mobbin", periodic curation, pruning dead links, ingesting new books/PDFs.

Full procedure, entry template, curation rubric, dedup rules and cadences: `references/inspiration/library-update.md`. Seed exemplars: `references/inspiration/gallery.md`. Growing layer: `library/`.

## A. Add references (sites, apps, flows, type, motion)
1. Check it's not already known: `python3 scripts/library.py search <name or domain>` (the add command also rejects duplicate URLs and anything in `rejected.yaml`).
2. Visit the real product, not just the gallery thumbnail. For websites, measure it: `node scripts/style-dna.mjs <url> --screenshot library/.shots/<id>.png > library/dna/<id>.json`. Screenshots stay local and are git-ignored. Check mobile view, contrast, reduced motion, performance impression, dark patterns. Never describe a page you couldn't load. If a source blocks bots, ask the user for screenshots.
3. Score it with the rubric (craft, clarity, originality, transferability, evidence: 1–5 each; ethics pass/fail). Accept if ethics passes and the total is ≥ 17 with no criterion < 2. Use `--role technique` for craft-only wins and `--role anti-example` for ethics failures that teach a lesson.
4. Add it:
   `python3 scripts/library.py add --title "..." --url ... --kind website|app|flow|component|brand|type|motion|data-viz|design-system --found-via "Awwwards SOTD 2026-10-20" --tags a,b --steal "the principle" --score craft=5,clarity=4,originality=4,transferability=4,evidence=3`
   Then fill *Why it works* and *Where it applies* in the created file. Rejections: `python3 scripts/library.py reject --url ... --reason "..."`.
5. `python3 scripts/library.py check && python3 scripts/library.py index`, then add a line to `library/CHANGELOG.md`.

## B. Periodic updates (daily / weekly / monthly)
Weekly is the default: Awwwards SOTD, Godly, Siteinspire, Typewolf, Fonts In Use, Brand New, Codrops. Monthly/yearly: Apple Design Awards, Webby, Red Dot, new apps on Mobbin (needs the user's screenshots). Accept at most ~8 entries per run, with no more than 40% from one source. Scheduled-task prompts are in `templates/library-update-prompt.md` and in §8 of the update procedure. Commit to a `library/<date>` branch.

## C. Ingest books & PDFs
**Source policy (hard rule):** only legally free material: author or publisher copies, open access (arXiv, PubMed Central, SSRN), official free web editions, public domain, or files the user owns. Never use shadow libraries (Anna's Archive, LibGen, Z-Library, Sci-Hub). If a file's name or metadata shows it came from one, decline and suggest the legal route. For a paid book, distill the author's own free material instead (papers, talks, essays, free sample chapters) and label the notes `basis: author's free material, not the full book`.

1. Legal files go in `books/` at the repo root (git-ignored, never committed). Free web sources can be fetched straight into `books/free/<slug>/`.
2. `python3 scripts/ingest.py books/<file>.pdf` → text chunks in `books/.text/<name>/`.
3. Read the chunks in order. Distill them into `references/books/<slug>.md` using `templates/book-notes.md`: core concepts, actionable heuristics for product design, evidence quality, where the book disagrees with the existing references, and at most 5 quotes under 25 words. For long books, have one subagent per few chunks write partial notes, then merge them.
4. Run `python3 scripts/build_books_index.py` to update `references/books/INDEX.md`. If a book changes a principle, update the relevant domain file and cite it there. Run `python3 scripts/build_index.py`.
Never commit source files or long verbatim passages.
