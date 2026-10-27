#!/usr/bin/env python3
"""Rebuild references/books/INDEX.md from each note's frontmatter (title, author, domains, evidence, basis, coverage).

  build_books_index.py
"""
import pathlib, re, sys

BOOKS = pathlib.Path(__file__).resolve().parent.parent / "references" / "books"


def meta(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---", text, re.S)
    out = {}
    if m:
        for line in m.group(1).splitlines():
            kv = re.match(r"^([a-z_]+):\s*(.*?)\s*(#.*)?$", line)
            if kv:
                out[kv.group(1)] = kv.group(2).strip().strip('"').strip("'")
    if not out.get("title"):
        h = re.search(r"^# (.+)$", text, re.M)
        out["title"] = h.group(1) if h else path.stem
    return out


def main():
    if len(sys.argv) > 1:
        print(__doc__)
        sys.exit(0)
    rows = []
    for p in sorted(BOOKS.glob("*.md")):
        if p.name == "INDEX.md":
            continue
        m = meta(p)
        basis = m.get("basis", "full text") or "full text"
        kind = "full text" if basis.lower().startswith("full") else "author's free material"
        rows.append((m.get("title", p.stem), m.get("author", ""), m.get("domains", "").strip("[]"),
                     m.get("evidence", ""), kind, m.get("coverage", "") if kind != "full text" else "", p.name))
    full = sum(1 for r in rows if r[4] == "full text")
    out = ["# Book & source notes index", "",
           f"{len(rows)} notes: {full} from full legal free texts, {len(rows) - full} from the author's own free material (papers, talks, essays, sample chapters).",
           "Regenerate with `python3 scripts/build_books_index.py`. The full source list is `SOURCES.md` at the repo root.", "",
           "| Notes | Author | Domains | Evidence | Basis | Coverage |", "|---|---|---|---|---|---|"]
    for t, a, d, e, k, c, f in sorted(rows, key=lambda r: r[0].lower()):
        out.append(f"| [{t.replace('|', '/')}]({f}) | {a.replace('|', '/')} | {d} | {e} | {k} | {c} |")
    (BOOKS / "INDEX.md").write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"indexed {len(rows)} notes ({full} full text)")


if __name__ == "__main__":
    main()
