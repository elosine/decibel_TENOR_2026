# APPROVED 2026-10-11 — _Approaching_, Draft 01: the print score

**Composer, 2026-10-11, on the proofs and the whole file:** *"Okay, that's good. We can keep that score, that print score."*

The print score of _Approaching_ (Draft 01; the title tentative) — the cover, two sheets of performance instructions, 77 pages of
music. PLAN § `2.16` (steps 1 … 7), RUNNING_LOG §475 … §481.

## The file

**`Approaching-score-JYang.pdf`** — **80 pages** (cover + 2 + 77) · A3 landscape (1189.92 × 840.96 pt, inside DIN A3) ·
1 650 140 bytes (1.57 MB). `cmp`-verified byte-identical to `print/score/Approaching-score-JYang.pdf` at archive time.
sha256 `8b42cf2b3fb65a0975098a6e33053450855210188e0c1e98ffa1c99f523883fb`.
**Not in git** (`print/score/**/*.pdf` is ignored) — this README and `cover.json` are; the PDF lives on this machine. Back it up.

## What made it

| | |
|---|---|
| the page | MAIN `notation/ir/approaching.ir.json` at `31f5ace` — 755 events, window 0 … 784 s, sha256 `967c12c14c23992e…` — **the filmed page**: identical to the file at the tag `Approaching-Draft01-film_1.0` (`git diff` empty). The IR was NOT rebuilt |
| the save behind it | `scores/piece-Draft01d.json` (his; in git at `9326517`). The save is NEWER than the page, and meant: it took the take's fixes (keys that sound, levels) after the page was cut, and none of them is drawn (RUNNING_LOG §423) |
| the sheet | A3 landscape, the house format, at his word ("a yes") · margin 12.7 mm · music 394 × 258 mm · a lane 50.1 mm · the staff 7.55 mm where it shows |
| the density | 10.32 s of music per page — the film's own (kept: "that's good") → 77 pages for 784 s |
| the frame | five lanes: BFl · BCl · Perc · Va · Vc (the percussionist's two parts in one lane) — 6 systems, 5 names, 2 brackets; Elec1 · Elec2 · Elec3 in the gutter on the three-body pages |
| what is on it | the presentation score: the players' signs AND the electronics' layer, as the film ("b yes") — the pane without its grain (a filter prints as a picture) |
| page 1 | opens at 0:00, placed by its objects; no 4 s lead-in on paper |
| the cover | `cover.json` (a copy is beside this file): **Approaching** / *for bass flute, bass clarinet, percussion,* / *viola, cello and electronics* (two rows) / **Justin Yang** — `print/cover/make_cover.ps1`, title 86.5 pt, face EngraversGothic BT (a system font — machine-dependent) |
| the instructions | `docs/notation_instructions/index.html` as it stood at 15:06 on 2026-10-11 — two sheets, the break measured before *Live Electronics* (columns 929 · 814 and 806 · 674 of 980) · the demo link `https://youtu.be/EMYu62G8KiM` kept as a PDF annotation |
| the ending | **one final bar line** at 783 s, through every lane — the notation's own (`rules.json` `objects.finalBar`; thin · gap · thick, ink, opaque); the lanes end at it |
| paper's own rules | a mic opening shorter than 20 staff spaces is never cut · a trill's curve that comes over a cut is restated by its badge (15) · a bouncing-ball arc is never cut · a badge goes over a page with what it announces · two badges hand-placed for the film's page turns stand before their opening |

**Command:** `bash print/score/build.sh` (≈ 5 min; no `--rebuild-ir`) — the two checks before, `node tools/export_print.js --ir approaching
--cover on --instructions on --out print/score/Approaching-score-JYang.pdf`, the three checks after.

## Measured, not asserted — the five gates, all green on this file

- **frame** (`check_print_frame --at 20,80,150,300,560,720`): the print frame is the video frame at 6 moments — 6/6 systems, the 5 names,
  2 brackets; the census identical in every system (265 · 101 · 252 · 87 · 108 · 990 elements).
- **front** (`check_print_front`): the cover's title 488 pt drawn / 487.2 measured, 4 lines, the widest 1076 of 1190 pt, drift 1.8 %; the
  instructions' columns fit; nothing clipped.
- **pdf** (`check_print_pdf`): 80 pages · the sheet inside DIN A3 · 3 font programs embedded + 4 as outlines, 0 not embedded · 0 raster
  images · 1 link.
- **pages** (`check_print_pages`): 77 music pages (4 … 80), the full frame, a ruler and a folio on every one; the final bar line exactly
  once, on page 80.
- **edges** (`check_print_edges`): 77 pages · 864 point items each owned once · 734 long items · 62 pages full, 14 pushed (142 objects moved
  whole), 0 forced · 6 pages end more than 0.5 s early, at most 1.14 s (11 % of the width) · no timed ink in the gutter, none past a
  system's end · 144 GC arcs = 144 impact dots = 144 owned strikes · 49 curve paths, none from a neighbouring page.

**The film untouched by the print's changes:** the screen's own pages, the whole piece, drawn with the libraries before and after —
the same sha256 (RUNNING_LOG §477).

## Known and left, said to him

- A sine's purple box that comes over a page turn shows no note head on the new page (his "that's good" on the proofs that showed it).
- The time ruler runs the last second past the final bar line (to the page's end, 784 s).
- The instructions are his page as it stood at the render; a later edit of the page means a new render.
- The parts are not made (PLAN 2.16, outside the item).
