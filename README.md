# LUMENFALL — The Poster for a Place That Isn't There

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-7c3aed)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539)
[![make.fun](https://img.shields.io/badge/built%20for-make.fun-0ea5e9)](https://make.fun)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A travel poster for **LUMENFALL** — a place that isn't there. Its one landmark: a
monumental waterfall that rises upward from a deep teal lagoon into a glowing
amber-gold sky at golden hour, watched from tiny boats below. The artwork was
generated with an image model; the place name is set in display type (Noto Serif
Display, letterspaced, cream on the amber sky) for a legible, intentional poster
hierarchy: name → waterfall → horizon.

## Entry

- Competition: [The Poster for a Place That Isn't There](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539) on [make.fun](https://make.fun) — $50, top 20 share the prize.
- Program: `main.ts` (Node 22, stdlib only) writes the poster to
  `MAKEFUN_OUTPUT_DIR/entry.png` (default `output/entry.png`).
- Output: one 1024×1024 JPEG image, 224,194 bytes (under the 1,048,576-byte cap).

## Run

```sh
node main.ts
# → output/entry.png
```

No network, no dependencies, deterministic — two runs produce byte-identical output.
