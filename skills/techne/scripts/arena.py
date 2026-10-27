#!/usr/bin/env python3
"""Minimal Are.na public API client (no auth needed for public content).

  arena.py search "brutalist typography" [--per 20]
  arena.py channel <channel-slug> [--per 50]
Prints title | image/source URL | block URL. API docs: https://dev.are.na
"""
import argparse, json, urllib.parse, urllib.request

API = "https://api.are.na/v2"


def get(path, **params):
    url = f"{API}{path}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"User-Agent": "design-skill/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def show(blocks):
    for b in blocks:
        img = (b.get("image") or {}).get("display", {}).get("url", "")
        src = (b.get("source") or {}).get("url", "")
        print(f"{b.get('title') or b.get('generated_title') or '-'} | {img or src} | https://www.are.na/block/{b.get('id')}")


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("search"); s.add_argument("q"); s.add_argument("--per", type=int, default=20)
    c = sub.add_parser("channel"); c.add_argument("slug"); c.add_argument("--per", type=int, default=50)
    a = ap.parse_args()
    try:
        run(a)
    except OSError as e:  # URLError/HTTPError subclass OSError
        raise SystemExit(f"Are.na unreachable ({e}). Check network access, or ask the user for links/screenshots.")


def run(a):
    if a.cmd == "search":
        show(get("/search/blocks", q=a.q, per=a.per).get("blocks", []))
    else:
        show(get(f"/channels/{a.slug}/contents", per=a.per).get("contents", []))


if __name__ == "__main__":
    main()
