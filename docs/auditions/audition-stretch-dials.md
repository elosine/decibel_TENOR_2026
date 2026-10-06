# audition-stretch-dials — icy's other dials, one at a time, on one held sound

*Written by `node tools/build_drone_auditions.js --a audition-stretch-dials --b audition-drones --input bcl-mp-1 --len 20000 --gap 2` — rendered from the tool, never edited by hand (RUNNING_LOG §171; DEC-34 · 34b; PLAN 10.13).*

**What it is:** 11 bricks on ONE input, `bcl-mp-1` — bass clarinet · multiphonic (MW, held) (1793 ms). Brick A1 is the reference — your *icy live* of 2015 (pace 1/30 · window 0.6 s · 17 overlaps · rand 0.2 · expodec), reading the source in order from 0 and looping. Every other brick changes ONE dial from it. The grain window, the grain size and the pace — the three you vary yourself — are the same in every brick but the last.

**To hear it:** the engine restarted (the loop is new code) · F5 · File ▾ → Experiments → `audition-stretch-dials` · click any purple brick → **render all planned** (11 renders of 20 … 30 s; wait for the engine's window to go quiet) · play from 0. The score is 4:13 long.

**What to listen for:**

- **overlaps** (A2 … A5) — how many grains sound at once. Few (2 · 4) and each grain's envelope is heard as a pulse, a flutter; from about 8 they merge; 40 is a dense chorus. The loudness is compensated — what changes is the texture.
- **rand** (A6 … A10) — how far each grain is cut from the read point, as a fraction of the window. 0 is a strict grid: a buzz or comb colour at the window rate; 0.1 … 0.3 breaks it; 0.6 … 1 smears the head's place by a whole window — a blur, a chorusing.
- **the seam** (A11) — the reference at pace ½ for 30 s: a 1793 ms source laps every 3.6 s, so the loop's join — the end of the sound meeting its beginning — is heard many times. If it is heard as a bump, the source's crop and fades for a loop are the next item (10.13 f).

| brick | at | what changes | pace | window | overlaps | rand | grain env | length | preset |
|---|---|---|---|---|---|---|---|---|---|
| **A1** | 0:01 (1 s) | THE REFERENCE — his icy live (2015), looping from 0 | 1/30 | 0.6 s | 17 | 0.2 | expodec | 20 s | `da01` |
| **A2** | 0:23 (23 s) | overlaps 2 (the reference has 17) | 1/30 | 0.6 s | 2 | 0.2 | expodec | 20 s | `da02` |
| **A3** | 0:45 (45 s) | overlaps 4 (the reference has 17) | 1/30 | 0.6 s | 4 | 0.2 | expodec | 20 s | `da03` |
| **A4** | 1:07 (67 s) | overlaps 8 (the reference has 17) | 1/30 | 0.6 s | 8 | 0.2 | expodec | 20 s | `da04` |
| **A5** | 1:29 (89 s) | overlaps 40 (the reference has 17) | 1/30 | 0.6 s | 40 | 0.2 | expodec | 20 s | `da05` |
| **A6** | 1:51 (111 s) | rand 0 (the reference has 0.2) | 1/30 | 0.6 s | 17 | 0 | expodec | 20 s | `da06` |
| **A7** | 2:13 (133 s) | rand 0.1 (the reference has 0.2) | 1/30 | 0.6 s | 17 | 0.1 | expodec | 20 s | `da07` |
| **A8** | 2:35 (155 s) | rand 0.3 (the reference has 0.2) | 1/30 | 0.6 s | 17 | 0.3 | expodec | 20 s | `da08` |
| **A9** | 2:57 (177 s) | rand 0.6 (the reference has 0.2) | 1/30 | 0.6 s | 17 | 0.6 | expodec | 20 s | `da09` |
| **A10** | 3:19 (199 s) | rand 1 (the reference has 0.2) | 1/30 | 0.6 s | 17 | 1 | expodec | 20 s | `da10` |
| **A11** | 3:41 (221 s) | THE SEAM — the reference at pace ½ for 30 s: the loop joins at about 10 and 20 s | 1/2 | 0.6 s | 17 | 0.2 | expodec | 30 s | `da11` |

**To keep one:** its sample is `bcl-mp-1~da<NN>-tail` in the bank; any return brick can ask for it — its panel → Processed as → the preset `A<N> …`, envelope `tail`. The whole setting is the preset's row in `bank/presets.json`.
