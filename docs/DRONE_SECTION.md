# drone-section — the drone section, seed 1

*Written by `node tools/build_drone_section.js --score drone-section --from drone-start-mics --seed 1 --replace` — rendered from the tool, never edited by hand (PLAN.md § 1.7; DEC-48 … DEC-54; RUNNING_LOG §249).*

**What it is:** 165 s. Each player records a multiphonic 4 times — the first HIS (the note you played in `drone-start-mics`, kept as it is), the others at rolled times 25 … 45 s apart, a note of the multiphonic as long as its window (the DURATION LINE in the part); a microphone opens over each for 6 … 9 s. Every recording becomes a string of DRONES on its lane with your `icy` — read in order from a start drawn inside the recording's longest sounding region, looping, no pitch change — each 10 … 40 s with a fade of 1 … 2 s (one in five up to 6 s), then a rest of 0 … 20 s; the first 20 s after its opening starts. Every dial its own exhaustive round robin: the window (Hann · 3-stage linear · expodec) · the pace (1/30 … 1/47.5 · 1/47.5 … 1/65 · 1/65 … 1/82.5 · 1/82.5 … 1/100) · the overlaps (12 … 17 · 17 … 22 · 22 … 27 · 27 … 33) · the grain size, steady in a band of the window's set or a shape over the drone. Written `mp`. The seed is kept because the density reaches 5 parts and averages 3.1 (the rule: ≥ 5 once, mean ≤ 3.5).

**To play it:** the engine restarted after 2026-10-08 (the regions, the shaped row, the buffer as long as the source) · F5 · File ▾ → Experiments → `drone-section` · play from 0 with the engine up — the recordings land (the window: `regions ·` lines), the drones render after each (`process ·` lines with `the start … of the longest region`); then play from 0 again: the drones. A drone asked for before its render plays NOTHING (said in the window), never the recording.

**The recordings** (opening start · window · the note):

| player | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| bass flute | 0:01 (1.3 s) · 6.97 s · HIS | 0:34 (34.6 s) · 6.75 s · key 49 C#3 | 1:00 (60.6 s) · 7.87 s · key 54 F#3 | 1:42 (102.9 s) · 6.72 s · key 56 Ab3 |
| bass clarinet | 0:07 (7.1 s) · 8.4 s · HIS | 0:37 (38.0 s) · 6.62 s · key 34 Bb1 | 1:22 (82.8 s) · 6.72 s · key 46 Bb2 | 2:02 (123.0 s) · 6.46 s · key 38 D2 |
| percussion | 0:27 (27.2 s) · 7.18 s · HIS | 1:07 (67.5 s) · 6.86 s · key 57 A3 | 1:36 (96.4 s) · 6.13 s · key 57 A3 | 2:09 (129.9 s) · 7.77 s · key 57 A3 |
| viola | 0:20 (20.4 s) · 8.97 s · HIS | 0:51 (51.4 s) · 8.03 s · key 55 G3 | 1:17 (77.2 s) · 8.61 s · key 50 D3 | 1:52 (112.4 s) · 8.81 s · key 59 B3 |
| cello | 0:13 (13.7 s) · 8.91 s · HIS | 0:44 (44.3 s) · 7.84 s · key 52 E3 | 1:14 (74.2 s) · 6.46 s · key 56 Ab3 | 1:49 (109.0 s) · 6.2 s · key 38 D2 |

**The drones:**

| # | recording | from → to | window | pace | overlaps | grain size | fades | start |
|---|---|---|---|---|---|---|---|---|
| D1 | `bfl-drone-1` | 0:21 → 0:52 (31.13 s) | expodec | 1/79 | 32 | rising 0.39 → 1.31 s | 1.98 / 2.65 s | 0.65 of the region |
| D2 | `bcl-drone-1` | 0:27 → 0:46 (19.74 s) | Hann | 1/84 | 14 | arch 0.1 → 1.58 s | 1.12 / 1.14 s | 0.12 of the region |
| D3 | `vc-drone-1` | 0:33 → 0:59 (25.7 s) | 3-stage linear | 1/30 | 18 | falling 0.05 → 1.98 s | 1.21 / 1.87 s | 0.33 of the region |
| D4 | `va-drone-1` | 0:40 → 1:11 (31.05 s) | Hann | 1/61 | 23 | rough 0.22 s | 2.38 / 1.25 s | 0.29 of the region |
| D5 | `perc-drone-1` | 0:47 → 1:06 (19.37 s) | 3-stage linear | 1/52 | 33 | tone 0.78 s | 1.91 / 1.86 s | 0.16 of the region |
| D6 | `perc-drone-1` | 1:13 → 1:25 (12.3 s) | expodec | 1/35 | 26 | falling 0.37 → 1.63 s | 1.15 / 5.28 s | 0.76 of the region |
| D7 | `bfl-drone-2` | 0:54 → 1:06 (11.52 s) | expodec | 1/88 | 14 | rattle 0.41 s | 1.21 / 1.63 s | 0.35 of the region |
| D8 | `bcl-drone-2` | 0:57 → 1:08 (10.41 s) | Hann | 1/79 | 18 | arch 0.1 → 1.13 s | 1.92 / 1.07 s | 0.64 of the region |
| D9 | `bcl-drone-2` | 1:14 → 1:40 (26.37 s) | 3-stage linear | 1/79 | 23 | glass 0.9 s | 1.93 / 1.07 s | 1 of the region |
| D10 | `vc-drone-2` | 1:04 → 1:14 (10.44 s) | Hann | 1/57 | 29 | rising 0.1 → 0.96 s | 5.44 / 1.11 s | 0.28 of the region |
| D11 | `va-drone-2` | 1:11 → 1:37 (25.79 s) | expodec | 1/94 | 20 | tremolo 1.01 s | 2.95 / 1.16 s | 0.65 of the region |
| D12 | `bfl-drone-3` | 1:20 → 1:49 (29.34 s) | 3-stage linear | 1/30 | 16 | rising 0.11 → 0.83 s | 1.67 / 1.96 s | 0.82 of the region |
| D13 | `perc-drone-2` | 1:27 → 1:54 (26.94 s) | Hann | 1/60 | 18 | falling 0.11 → 1.74 s | 1.37 / 1.01 s | 0.1 of the region |
| D14 | `vc-drone-3` | 1:34 → 2:05 (31.07 s) | expodec | 1/47 | 24 | arch 0.57 → 1.88 s | 1.03 / 1.8 s | 0.63 of the region |
| D15 | `va-drone-3` | 1:37 → 2:05 (27.96 s) | 3-stage linear | 1/85 | 17 | breath 0.1 s | 3.74 / 1.21 s | 0.05 of the region |
| D16 | `bcl-drone-3` | 1:42 → 2:10 (27.74 s) | expodec | 1/76 | 30 | falling 0.59 → 1.34 s | 1.01 / 1.49 s | 0.65 of the region |
| D17 | `perc-drone-3` | 1:56 → 2:24 (27.67 s) | 3-stage linear | 1/43 | 13 | rough 0.29 s | 1.58 / 3.62 s | 0.51 of the region |
| D18 | `bfl-drone-4` | 2:02 → 2:25 (22.89 s) | Hann | 1/96 | 26 | arch 0.07 → 1.18 s | 1.11 / 1.01 s | 0.75 of the region |
| D19 | `bfl-drone-4` | 2:26 → 2:43 (17.04 s) | 3-stage linear | 1/55 | 20 | rising 0.06 → 1.57 s | 1.05 / 3.22 s | 0.79 of the region |
| D20 | `vc-drone-4` | 2:09 → 2:33 (24.12 s) | Hann | 1/81 | 30 | glass 1.89 s | 1.1 / 1.41 s | 1 of the region |
| D21 | `va-drone-4` | 2:12 → 2:28 (15.93 s) | expodec | 1/79 | 24 | rising 0.47 → 1.63 s | 1.37 / 5.65 s | 0.37 of the region |
| D22 | `bcl-drone-4` | 2:22 → 2:45 (22.01 s) | 3-stage linear | 1/86 | 30 | tone 0.32 s | 1.52 / 1.48 s | 0.56 of the region |
| D23 | `perc-drone-4` | 2:29 → 2:45 (15.09 s) | expodec | 1/58 | 17 | pulse 1.51 s | 1.23 / 1.63 s | 0.17 of the region |

**The density** (the most parts sounding in each 5 s): `000012334445554344555544544454433`

**To change it:** a number in `bank/drone_section.json`, then `node tools/build_drone_section.js --score drone-section --from drone-start-mics --seed 1 --replace`, then File ▾ → Reload. Another seed: `--seed N`. The free multiphonics between the recordings are yours, in post (DEC-53).
