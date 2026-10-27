#!/usr/bin/env bash
# Zip the skill folder for upload to claude.ai / the Claude desktop app (Settings → Capabilities → Skills).
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p dist
rm -f dist/techne.zip
(cd skills && zip -rq ../dist/techne.zip techne -x '*/__pycache__/*' '*.pyc')
echo "dist/techne.zip ($(du -h dist/techne.zip | cut -f1))"
