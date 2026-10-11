# APPROVED 2026-10-10 — _Approaching_ (title tentative), Draft 01: the film of the presentation score

**Composer, 2026-10-10, on the render `V-MAIN`:** *"good, archive and tag"*

The animated presentation score of the Decibel piece (_Approaching_, Draft 01) — the wide shot alone, with the live electronics in the sound.
PLAN § 2.14 (and § 2.8 for the audio), RUNNING_LOG §419 … §426.

## The file

**`V-MAIN.mp4`** — 1920 × 1080 · 30 fps · h264 crf 16 + AAC 256 k · **788.700 s** (the 4 s lead-in + 784.7) · 43 958 064 bytes.
`cmp`-verified byte-identical to `notation/video/renders/Approaching-Draft01-V-MAIN.mp4` at archive time.
sha256 `66f3aed79dfa06a11430810b2515ca0f1da335268a76289b61e0ca5b52315a2e`.
**Not in git** (`notation/video/**/*.mp4` is ignored) — this README is; the video lives on this machine. Back it up.

## What made it

| | |
|---|---|
| score | `scores/piece-Draft01d.json` (his, untracked) as it stood 2026-10-10 22:30 local — six sections, 0 … 778.7 s → MAIN `notation/ir/approaching.ir.json` at `31f5ace` (755 events, 66 screen pages; cut 21:22, before the evening's level and key fixes — none of which is drawn: a strike has no pitch on the page, the opening's and the beating section's own notes are silent there) |
| audio | `notation/audio/piece-Draft01d.wav` — **a TAKE, not a render**: the piece played once on the composer page with the live electronics and recorded (take 02 of `piece-Draft01d`, 2026-10-10 22:34; RENDER.md § 0.1, RUNNING_LOG §423): 784.732 s · 686 of 686 notes aligned (±0.45 ms) · −1.0 dBTP · −19.7 LUFS · LRA 12.1 (one plain gain, −1.9 dB) · sha256 `e6e85c2990796ce8cb84df38f4660c36eb0c54255898cfeea5cc90e640a6e94b`. Each take is another roll of the electronics. |
| frame | five lanes (BFl · BCl · Perc · Va · Vc), the electronics' layer drawn (this is the presentation score) · 66 tiled pages of 12 s · music x 112 → 1880 of 1920 |
| the opening | the 4 s lead-in on the first page, no title card (piece #6's way) — the sound delayed by 4 s of real silence |
| the ending | the last page held, the cursor on the final bar line (783 s), while the take's tail rings to 784.7 |
| close-ups | **none** — his word, DEC-194: *"lets have the video without any zooms"*. (A first render with nine close-ups exists, `renders/Approaching-Draft01-V-CUT-seed7.mp4`; the groups and the cut list stay in the repo, unused.) |
| fonts | Crimson Pro Light · Light Italic (the repo's) + `C:/Windows/Fonts/seguisym.ttf` as the fallback for ♭ ♯ ♮ (machine-dependent, piece #6's §699) |

**Command:** `node tools/export_video.js --ir approaching --view video --fps 30 --t1 784.7 --audio notation/audio/piece-Draft01d.wav --out <out>.mp4` (~7 min).

## Measured, not asserted

- video and audio streams both start at 0.000; 788.700 s.
- the sync: the opening silence ends at 1.5353 s in the WAV and 5.5353 s in the film — the 4.000 s lead-in.
- the film's rasterizer against this piece's signs: before the first render, a frame from each of the six sections drawn the film's way and looked at (20 · 38.5 · 60 · 150 · 300 · 450 · 700 · 782 s) — the badges, the mic openings, the gradient wedges, the state signs, the grey panes and purple bricks, the trill curves, the conductor's arcs, the staff and the sine boxes, the final bar line: all drawn (RUNNING_LOG §424).
- the audio was READ as well as heard: every track's meter watched through the take (`tools/vet/peak_watch_take.lua`) — the nineteen notes found silent by their keys in the take before were moved, and sound in this one but for a faint spring coil at 702.7 s (RUNNING_LOG §421 … §423).
- **his eye and ear: "good".**

## What stands open beside it (not faults of the film)

- his ear on three levels in the take: the bowed China cymbals (+4 dB at the fader) · the bass clarinet's low beating pairs at mf · the spring coil at 702.7 s.
- the title is tentative; the file names say `Approaching`.
