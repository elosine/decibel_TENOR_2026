# audition-stretch-grid — overlaps × rand on one held sound: the pair you will not vary

*Written by `node tools/build_stretch_grid.js --name audition-stretch-grid --input bcl-mp-1 --len 5000 --gap 1 --overlaps 4,8,17,40 --rand 0,0.2,0.5` — rendered from the tool, never edited by hand (RUNNING_LOG §240; PLAN 10.13).*

**What it is:** 12 bricks on ONE input, `bcl-mp-1` (1793 ms), 5 s each, 1 s apart. A grid of the two dials you will not vary in the music — **overlaps** (4 · 8 · 17 · 40) × **rand** (0 · 0.2 · 0.5) — everything else the reference: pace 1/30 · window 0.6 s · expodec · reading in order from 0 and looping · no pitch change · the stretch alone. The grain window, the grain size and the pace are yours to vary afterwards.

**To hear it:** F5 · File ▾ → Experiments → `audition-stretch-grid` · play from 0 (rendered from the tool; if a brick plays dry, a purple brick → **render all planned**). The score is 1:13 long.

**What to listen for:** overlaps — few and each grain is heard as a pulse, a flutter; from about 8 they merge; 40 is a dense chorus (the loudness is compensated). rand — 0 is a strict grid, a buzz or comb colour at the window rate; 0.2 breaks it; 0.5 smears the read point by half a window, a blur.

| brick | at | overlaps | rand | preset |
|---|---|---|---|---|
| **G1** | 0:01 (1 s) | 4 | 0 | `dg01` |
| **G2** | 0:07 (7 s) | 4 | 0.2 | `dg02` |
| **G3** | 0:13 (13 s) | 4 | 0.5 | `dg03` |
| **G4** | 0:19 (19 s) | 8 | 0 | `dg04` |
| **G5** | 0:25 (25 s) | 8 | 0.2 | `dg05` |
| **G6** | 0:31 (31 s) | 8 | 0.5 | `dg06` |
| **G7** | 0:37 (37 s) | 17 | 0 | `dg07` |
| **G8** | 0:43 (43 s) | 17 | 0.2 | `dg08` |
| **G9** | 0:49 (49 s) | 17 | 0.5 | `dg09` |
| **G10** | 0:55 (55 s) | 40 | 0 | `dg10` |
| **G11** | 1:01 (61 s) | 40 | 0.2 | `dg11` |
| **G12** | 1:07 (67 s) | 40 | 0.5 | `dg12` |

**To keep one:** say its brick — its overlaps and rand become the reference of the next file. Its sample is `bcl-mp-1~dg<NN>-tail` in the bank; the whole setting is the preset's row in `bank/presets.json`.
