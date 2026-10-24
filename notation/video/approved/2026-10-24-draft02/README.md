# APPROVED 2026-10-24 — _Approaching_ (title tentative), Draft 02: the film of the presentation score

**Composer, 2026-10-24, on the render `V-MAIN`:** *"video good"*

The animated presentation score of _Approaching_, Draft 02 — THE CUT UNDER TEN MINUTES for the TENOR 2027 submission (running
order step 3b; RUNNING_LOG §493 … §496). The wide shot alone, with the live electronics in the sound.

## The file

**`V-MAIN.mp4`** — 1920 × 1080 · 30 fps · h264 + AAC · **571.825 s** (the 4 s lead-in + 567.825) · 33 326 028 bytes.
`cmp`-verified byte-identical to `notation/video/renders/Approaching-Draft02-V-MAIN.mp4` at archive time.
sha256 `d7d8376df7f27e0900816cfbd7d7dd2dbbd566213d641cfd97e1fb8c667ff51f`.
**Not in git** (`notation/video/**/*.mp4` is ignored) — this README is. The copy for the submission (its metadata cleared, the same
picture and sound) IS in git: `submission/tenor-2027/review/Approaching-film.mp4`.

## What made it

| | |
|---|---|
| score | `scores/piece-Draft02-Final.json` (committed, `ab9f601`) — six sections, 0 … 561.8 s → `notation/ir/approaching-d02.ir.json` (727 events, 48 screen pages; approved by him, "notation scores approved") |
| audio | `notation/audio/piece-Draft02-Final.wav` — **a TAKE**: take 01 of `piece-Draft02-Final`, 2026-10-24 11:26 (RUNNING_LOG §496): 567.825 s · 661 of 661 notes aligned (±0.45 ms) · −1.0 dBTP · −19.8 LUFS · LRA 11.4 · sha256 `f8ad09e8d48c28433d837698c856a48592c7beb3bc105661995772eb46dbe2bd`. The read's 13 quiet notes left as in Draft 01 (his "a"). |
| frame | five lanes, the electronics' layer drawn · 48 tiled pages of 12 s · no close-ups (Draft 01's DEC-194) · no title card |
| the ending | the last page held while the take's tail rings to 567.8 s; the final bar line at 566.1 s |

**Command (5 min):** `node tools/export_video.js --ir approaching-d02 --view video --fps 30 --t1 567.825 --audio notation/audio/piece-Draft02-Final.wav --out <out>.mp4`

**Tag:** `Approaching-Draft02-film_1.0`.
