#!/usr/bin/env python3
"""Extract text from a PDF/EPUB/TXT in books/ into books/.text/<name>.txt and split into ~8k-word chunks
so an agent can read and distill it into references/books/<slug>.md (see templates/book-notes.md).

  ingest.py books/thinking-fast-and-slow.pdf
Requires `pdftotext` (poppler) for PDFs; falls back to pypdf if installed.
"""
import pathlib, shutil, subprocess, sys, zipfile, re, html


def pdf_text(p):
    if shutil.which("pdftotext"):
        return subprocess.run(["pdftotext", "-layout", str(p), "-"], capture_output=True, text=True, check=True).stdout
    from pypdf import PdfReader  # type: ignore
    return "\n".join(page.extract_text() or "" for page in PdfReader(str(p)).pages)


def epub_text(p):
    out = []
    with zipfile.ZipFile(p) as z:
        for n in sorted(z.namelist()):
            if n.endswith((".xhtml", ".html", ".htm")):
                out.append(html.unescape(re.sub(r"<[^>]+>", " ", z.read(n).decode("utf-8", "ignore"))))
    return "\n".join(out)


def main():
    if len(sys.argv) != 2 or sys.argv[1] in ("-h", "--help"):
        print(__doc__)
        sys.exit(0 if len(sys.argv) == 2 else 2)
    src = pathlib.Path(sys.argv[1])
    ext = src.suffix.lower()
    text = pdf_text(src) if ext == ".pdf" else epub_text(src) if ext == ".epub" else src.read_text(errors="ignore")
    outdir = src.parent / ".text" / src.stem
    outdir.mkdir(parents=True, exist_ok=True)
    words = text.split()
    size = 8000
    for i in range(0, len(words), size):
        (outdir / f"chunk-{i // size + 1:03d}.txt").write_text(" ".join(words[i:i + size]), encoding="utf-8")
    print(f"{len(words):,} words -> {outdir} ({(len(words) + size - 1) // size} chunks)")


if __name__ == "__main__":
    main()
