# audition-petals-loop — the loop around the petals: your set line with an amp behind it

*Written by `node tools/build_petals_loop.js --name audition-petals-loop --impulse bcl-impulse-1 --gap 3` — rendered from the tool, never edited by hand (RUNNING_LOG §201 · §203; DEC-40).*

**What it is:** eight bricks, ALL on `bcl-impulse-1`, your petals set line every time (fund 35 Hz · first partial 5 · spread 1.33 · bank B +8.1 st · ring 7 … 15 s), with THE LOOP: the bank's sound goes through an amp (a soft clip) and back into the bank — a guitar's feedback with your 26 partials as the string. **Bloom** is how long the loop takes to lift the ring 60 dB; **drive** is the amp's clipping (the ceiling the bloom meets, and the grit); **hold** is how long the loop is held from the start — then it is broken and the bank rings down on its own. L0 has no loop. The bricks are 3 s apart, so the tails overlap.

**To hear it:** the engine RESTARTED (it must be one started after 2026-10-07 — the loop is new code) · F5 · File ▾ → Experiments → `audition-petals-loop` · play from 0 (the renders are in the bank when the plan was sent with render; else a purple brick → **render all planned**). The score is 0:43 long.

| brick | at | bloom s | drive | hold s | preset |
|---|---|---|---|---|---|
| **L0 reference** | 0:01 (1 s) | — | 6 | — | `pl01` |
| **L1 bloom 4 · drive 6** | 0:04 (4 s) | 4 | 6 | 8 | `pl02` |
| **L2 bloom 2 · drive 6** | 0:07 (7 s) | 2 | 6 | 8 | `pl03` |
| **L3 bloom 1 · drive 6** | 0:10 (10 s) | 1 | 6 | 8 | `pl04` |
| **L4 bloom 2 · drive 15** | 0:13 (13 s) | 2 | 15 | 8 | `pl05` |
| **L5 bloom 2 · drive 30** | 0:16 (16 s) | 2 | 30 | 8 | `pl06` |
| **L6 long hold 15 s** | 0:19 (19 s) | 2 | 10 | 15 | `pl07` |
| **L7 fast · hard · short** | 0:22 (22 s) | 0.5 | 20 | 5 | `pl08` |

**To keep one:** the sample it makes is `bcl-impulse-1~pl<NN>-tail` in the bank; a return brick anywhere can ask for it — its panel → Processed as → the preset `L<n> …`, envelope `tail`; or its row in `bank/presets.json` is copied onto the shelf at your word. On any process brick the three dials are in the `petalsOrig` row: loop: bloom · loop: amp drive · loop: hold.
