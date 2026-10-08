# drone-section — the drone section, seed 1

*Written by `node tools/build_drone_section.js --score drone-section --from drone-start-mics --seed 1 --replace` — rendered from the tool, never edited by hand (PLAN.md § 1.7; DEC-48 … DEC-54; RUNNING_LOG §249).*

**What it is:** 270 s. Each player records a multiphonic 3 times — the first HIS (the note you played in `drone-start-mics`, kept as it is), the others at rolled times 25 … 45 s apart, every opening before 120 s, a note of the multiphonic as long as its window (the DURATION LINE in the part); a microphone opens over each for 6 … 9 s. Every recording becomes a string of DRONES on its lane with your `icy` — read in order from a start drawn inside the recording's longest sounding region, looping, no pitch change — each 10 … 40 s with a fade of 1 … 2 s (one in five up to 6 s), then a rest of 0 … 20 s; the first 30 s after its window ends (the render), the string going on until the player's next recording is rendered; after the first drone of a player's last recording, each further drone takes any of the player's recordings (a round robin, none twice before all); the last drone of each part runs to the end and fades out 11 s. Every dial its own exhaustive round robin: the window (Hann · 3-stage linear · expodec) · the pace (1/30 … 1/47.5 · 1/47.5 … 1/65 · 1/65 … 1/82.5 · 1/82.5 … 1/100) · the overlaps (12 … 17 · 17 … 22 · 22 … 27 · 27 … 33) · the grain size, steady in a band of the window's set or a shape over the drone. Written `f`. The seed is kept because the density reaches 5 parts and averages 3.11 (the rule: ≥ 5 once, mean ≤ 3.5).

**To play it:** the engine restarted after 2026-10-08 (the regions, the shaped row, the buffer as long as the source) · F5 · File ▾ → Experiments → `drone-section` · play from 0 with the engine up — the recordings land (the window: `regions ·` lines), the drones render after each (`process ·` lines with `the start … of the longest region`); then play from 0 again: the drones. A drone asked for before its render plays NOTHING (said in the window), never the recording.

**The recordings** (opening start · window · the note):

| player | 1 | 2 | 3 |
|---|---|---|---|
| bass flute | 0:01 (1.3 s) · 7.64 s · HIS | 0:40 (40.7 s) · 7.36 s · key 49 C#3 | 1:10 (70.7 s) · 6.46 s · key 53 F3 |
| bass clarinet | 0:07 (7.1 s) · 6.57 s · HIS | 0:32 (32.9 s) · 7.28 s · key 38 D2 | 1:02 (62.0 s) · 7.97 s · key 34 Bb1 |
| percussion | 0:27 (27.2 s) · 7.47 s · HIS | 0:53 (53.5 s) · 7.18 s · key 57 A3 | 1:33 (93.9 s) · 6.86 s · key 57 A3 |
| viola | 0:20 (20.4 s) · 8.18 s · HIS | 0:56 (56.9 s) · 6.38 s · key 73 C#5 | 1:29 (90.0 s) · 6.91 s · key 55 G3 |
| cello | 0:13 (13.7 s) · 8.91 s · HIS | 0:44 (44.3 s) · 7.84 s · key 52 E3 | 1:14 (74.2 s) · 6.46 s · key 56 Ab3 |

**The drones:**

| # | recording | from → to | window | pace | overlaps | grain size | fades | start |
|---|---|---|---|---|---|---|---|---|
| D1 | `bfl-drone-1` | 0:38 → 1:09 (30.32 s) | 3-stage linear | 1/68 | 15 | glass 1.19 s | 1.83 / 1.93 s | 0.66 of the region |
| D2 | `bcl-drone-1` | 0:43 → 1:09 (25.95 s) | expodec | 1/62 | 18 | falling 0.35 → 1.44 s | 1.08 / 1.81 s | 0.89 of the region |
| D3 | `vc-drone-1` | 0:52 → 1:06 (14.31 s) | Hann | 1/35 | 31 | rising 0.1 → 0.94 s | 4.62 / 1.07 s | 0.51 of the region |
| D4 | `va-drone-1` | 0:58 → 1:33 (34.73 s) | 3-stage linear | 1/83 | 27 | tone 0.46 s | 1.95 / 1.87 s | 0.72 of the region |
| D5 | `perc-drone-1` | 1:04 → 1:17 (12.82 s) | expodec | 1/98 | 32 | arch 0.49 → 1.74 s | 1.22 / 2.39 s | 0.23 of the region |
| D6 | `perc-drone-1` | 1:25 → 1:30 (5.57 s) | Hann | 1/81 | 17 | falling 0.1 → 1.26 s | 1.2 / 1.26 s | 0.24 of the region |
| D7 | `bcl-drone-2` | 1:10 → 1:39 (29.8 s) | expodec | 1/61 | 26 | rising 0.32 → 1.37 s | 1.31 / 1.34 s | 0.63 of the region |
| D8 | `bfl-drone-2` | 1:18 → 1:29 (10.9 s) | 3-stage linear | 1/45 | 20 | arch 0.08 → 1.23 s | 1.33 / 1.43 s | 0.6 of the region |
| D9 | `bfl-drone-2` | 1:29 → 1:47 (17.91 s) | Hann | 1/52 | 25 | breath 0.07 s | 1.54 / 4.27 s | 0.55 of the region |
| D10 | `vc-drone-2` | 1:22 → 1:34 (12.16 s) | 3-stage linear | 1/84 | 22 | rough 0.3 s | 1.53 / 1.38 s | 0.01 of the region |
| D11 | `perc-drone-2` | 1:30 → 1:44 (13.37 s) | Hann | 1/39 | 14 | rising 0.09 → 1.45 s | 1.39 / 4.43 s | 0.04 of the region |
| D12 | `perc-drone-2` | 1:47 → 2:10 (23.38 s) | expodec | 1/66 | 29 | rattle 0.54 s | 1.24 / 1.07 s | 0.64 of the region |
| D13 | `va-drone-2` | 1:33 → 2:06 (33.57 s) | 3-stage linear | 1/42 | 29 | arch 0.05 → 1.41 s | 2.09 / 1.87 s | 0.55 of the region |
| D14 | `bcl-drone-3` | 1:39 → 2:15 (35.83 s) | Hann | 1/66 | 24 | glass 1.74 s | 1.5 / 1.77 s | 0.1 of the region |
| D15 | `bcl-drone-3` ← `bcl-drone-2` | 2:19 → 2:50 (31.07 s) | expodec | 1/58 | 14 | falling 0.48 → 1.55 s | 1.91 / 5.4 s | 0.94 of the region |
| D16 | `bcl-drone-3` | 3:03 → 3:14 (11.39 s) | 3-stage linear | 1/99 | 18 | rising 0.09 → 1.38 s | 1.6 / 1.59 s | 0 of the region |
| D17 | `bcl-drone-3` ← `bcl-drone-1` | 3:27 → 3:38 (10.98 s) | expodec | 1/37 | 16 | falling 0.51 → 1.39 s | 1.79 / 1.59 s | 0.16 of the region |
| D18 (last) | `bcl-drone-3` ← `bcl-drone-1` | 3:56 → 4:30 (33.62 s) | Hann | 1/94 | 19 | arch 0.06 → 1.71 s | 1.95 / 11 s | 0.12 of the region |
| D19 | `bfl-drone-3` | 1:47 → 2:06 (19.57 s) | 3-stage linear | 1/59 | 28 | rough 0.24 s | 1.31 / 1.94 s | 0.79 of the region |
| D20 | `bfl-drone-3` ← `bfl-drone-1` | 2:20 → 2:44 (24.11 s) | expodec | 1/81 | 24 | tremolo 1.15 s | 2.41 / 1.41 s | 0.2 of the region |
| D21 | `bfl-drone-3` ← `bfl-drone-2` | 2:56 → 3:25 (28.6 s) | Hann | 1/79 | 32 | falling 0.08 → 1.95 s | 1.59 / 1.45 s | 0.65 of the region |
| D22 | `bfl-drone-3` | 3:35 → 4:00 (24.53 s) | expodec | 1/48 | 15 | arch 0.4 → 1.65 s | 1.04 / 1.4 s | 0.23 of the region |
| D23 (last) | `bfl-drone-3` | 4:03 → 4:30 (26.91 s) | 3-stage linear | 1/94 | 25 | breath 0.06 s | 1.31 / 11 s | 0.78 of the region |
| D24 | `vc-drone-3` | 1:50 → 2:06 (16.15 s) | Hann | 1/37 | 20 | tone 0.56 s | 1.59 / 5.92 s | 0.4 of the region |
| D25 | `vc-drone-3` ← `vc-drone-2` | 2:14 → 2:26 (12.04 s) | expodec | 1/79 | 19 | rising 0.31 → 1.41 s | 1.61 / 1.65 s | 0.35 of the region |
| D26 | `vc-drone-3` ← `vc-drone-1` | 2:43 → 3:19 (35.81 s) | Hann | 1/86 | 15 | falling 0.09 → 1.73 s | 1.39 / 1.06 s | 0.82 of the region |
| D27 | `vc-drone-3` | 3:21 → 3:57 (36.29 s) | 3-stage linear | 1/45 | 25 | breath 0.09 s | 1.55 / 1.35 s | 0.85 of the region |
| D28 (last) | `vc-drone-3` | 4:01 → 4:30 (28.31 s) | 3-stage linear | 1/53 | 31 | tone 0.48 s | 3.66 / 11 s | 0.34 of the region |
| D29 | `va-drone-3` | 2:06 → 2:37 (30.97 s) | expodec | 1/43 | 12 | arch 0.4 → 1.43 s | 1.1 / 1.39 s | 0.17 of the region |
| D30 | `va-drone-3` | 2:48 → 3:00 (11.61 s) | Hann | 1/90 | 29 | rising 0.1 → 1.07 s | 1.07 / 1.33 s | 0.55 of the region |
| D31 | `va-drone-3` ← `va-drone-2` | 3:19 → 3:53 (34.06 s) | expodec | 1/61 | 26 | pulse 1.88 s | 3.55 / 1.64 s | 0.83 of the region |
| D32 (last) | `va-drone-3` ← `va-drone-1` | 4:02 → 4:30 (27.52 s) | Hann | 1/78 | 17 | arch 0.07 → 1.81 s | 1.22 / 11 s | 0.63 of the region |
| D33 | `perc-drone-3` | 2:10 → 2:20 (10.17 s) | 3-stage linear | 1/51 | 29 | rising 0.05 → 1.55 s | 4.56 / 1.58 s | 0.68 of the region |
| D34 | `perc-drone-3` ← `perc-drone-1` | 2:38 → 3:15 (37.66 s) | 3-stage linear | 1/77 | 21 | falling 0.07 → 1.29 s | 3.26 / 1.05 s | 0.13 of the region |
| D35 | `perc-drone-3` ← `perc-drone-2` | 3:31 → 3:44 (12.71 s) | Hann | 1/85 | 12 | glass 1.03 s | 1.56 / 1.36 s | 0.41 of the region |
| D36 | `perc-drone-3` | 3:55 → 4:09 (14.14 s) | expodec | 1/30 | 25 | rising 0.47 → 1.4 s | 1.95 / 1.34 s | 0.89 of the region |
| D37 (last) | `perc-drone-3` ← `perc-drone-2` | 4:10 → 4:30 (19.46 s) | Hann | 1/78 | 25 | rough 0.25 s | 1.06 / 11 s | 0.42 of the region |

**The density** (the most parts sounding in each 5 s): `000000012234453345544455553454334444444333454334555555`

**To change it:** a number in `bank/drone_section.json`, then `node tools/build_drone_section.js --score drone-section --from drone-start-mics --seed 1 --replace`, then File ▾ → Reload. Another seed: `--seed N`. The free multiphonics between the recordings are yours, in post (DEC-53).
