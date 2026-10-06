# audition-petals — the petals of resonance: your original beside the cleaned path

*Written by `node tools/build_petals.js --name audition-petals --n 20 --seed 1` — rendered from the tool, never edited by hand (RUNNING_LOG §151; DEC-32; PLAN 10.3).*

**What it is:** 20 pairs. Each pair is ONE setting heard twice in a row on ONE impulse — first **orig** (your SynthDef as it is), then **clean** (the cleaned signal path). Pair 1 is your own set line from the foot of your file; pairs 2 … 20 are drawn from the ranges your file names.

**To hear it:** the engine restarted · F5 · File ▾ → Experiments → `audition-petals` · click any purple brick → **render all planned** (40 renders; wait for the engine's window to go quiet) · play from 0. The score is 9:09 long.

**What differs inside a pair** (everything else is the same):

- **the ring** — orig: all 26 partials sink together, at one time between the two ring numbers · clean: each partial has its own ring between them, so the chord thins out partial by partial.
- **the wobble** — orig: the 26 wobble speeds are the same in every render, all starting together · clean: drawn fresh at every render, each starting somewhere else.
- **the ending** — orig: your limiter and your fade (cut a third of a second after the longer ring number) · clean: it rings out until it is 60 dB under its peak.

| pair | orig at | clean at | impulse | fund Hz | first partial | spread | bank B + st | ring s | presets |
|---|---|---|---|---|---|---|---|---|---|
| **P01** *(your set line)* | 0:01 (1 s) | 0:17 (17.5 s) | `bcl-impulse-1` — bass clarinet | 35 | 5 | 1.33 | 8.1 | 7 … 15 | `pet01o` · `pet01c` |
| **P02** | 0:34 (34 s) | 0:45 (45.5 s) | `perc-impulse-2` — percussion | 82.5 | 2.89 | 0.37 | 3.31 | 7.5 … 10 | `pet02o` · `pet02c` |
| **P03** | 0:57 (57 s) | 1:11 (71.5 s) | `vc-impulse-3` — cello | 122.3 | 4.91 | 0.45 | 6.11 | 8.1 … 12.6 | `pet03o` · `pet03c` |
| **P04** | 1:26 (86 s) | 1:40 (100 s) | `bfl-impulse-5` — bass flute | 82 | 3.12 | 0.59 | 2.29 | 9.3 … 12.4 | `pet04o` · `pet04c` |
| **P05** | 1:54 (114 s) | 2:08 (128 s) | `va-impulse-6` — viola | 129.5 | 3.15 | 0.57 | 2.21 | 9.8 … 12.4 | `pet05o` · `pet05c` |
| **P06** | 2:22 (142 s) | 2:36 (156 s) | `bcl-impulse-2` — bass clarinet | 84.3 | 2.61 | 1.14 | 4.59 | 8 … 12.5 | `pet06o` · `pet06c` |
| **P07** | 2:50 (170 s) | 3:04 (184 s) | `perc-impulse-3` — percussion | 87.3 | 2.25 | 1.04 | 5.74 | 9.1 … 12.4 | `pet07o` · `pet07c` |
| **P08** | 3:18 (198 s) | 3:34 (214 s) | `vc-impulse-4` — cello | 139.7 | 3.01 | 1.14 | 3.1 | 9.2 … 14.1 | `pet08o` · `pet08c` |
| **P09** | 3:50 (230 s) | 4:03 (243.5 s) | `bfl-impulse-6` — bass flute | 105.8 | 4.51 | 0.68 | 5.77 | 8.8 … 11.9 | `pet09o` · `pet09c` |
| **P10** | 4:17 (257 s) | 4:29 (269 s) | `va-impulse-1` — viola | 127.5 | 4.22 | 0.49 | 3.2 | 7.6 … 10.4 | `pet10o` · `pet10c` |
| **P11** | 4:41 (281 s) | 4:53 (293 s) | `bcl-impulse-3` — bass clarinet | 66.6 | 4.17 | 0.67 | 7.17 | 7.2 … 10.1 | `pet11o` · `pet11c` |
| **P12** | 5:05 (305 s) | 5:18 (318.5 s) | `perc-impulse-4` — percussion | 92.2 | 4.64 | 0.83 | 6.36 | 9.8 … 12 | `pet12o` · `pet12c` |
| **P13** | 5:32 (332 s) | 5:43 (343.5 s) | `vc-impulse-5` — cello | 132.8 | 4.59 | 0.76 | 7.19 | 7 … 10 | `pet13o` · `pet13c` |
| **P14** | 5:55 (355 s) | 6:07 (367 s) | `bfl-impulse-1` — bass flute | 111.5 | 4.85 | 0.62 | 6.09 | 7.5 … 10.4 | `pet14o` · `pet14c` |
| **P15** | 6:19 (379 s) | 6:33 (393 s) | `va-impulse-2` — viola | 59 | 3.86 | 0.59 | 6.9 | 7.6 … 12.2 | `pet15o` · `pet15c` |
| **P16** | 6:47 (407 s) | 7:01 (421 s) | `bcl-impulse-4` — bass clarinet | 106.4 | 3.12 | 0.63 | 7.7 | 8.6 … 12.5 | `pet16o` · `pet16c` |
| **P17** | 7:15 (435 s) | 7:30 (450 s) | `perc-impulse-5` — percussion | 142.9 | 2.32 | 1.1 | 6.88 | 8.8 … 13.3 | `pet17o` · `pet17c` |
| **P18** | 7:45 (465 s) | 7:56 (476.5 s) | `vc-impulse-6` — cello | 140.8 | 2.37 | 1.31 | 6.57 | 7.7 … 9.6 | `pet18o` · `pet18c` |
| **P19** | 8:08 (488 s) | 8:24 (504 s) | `bfl-impulse-2` — bass flute | 146.4 | 2.22 | 0.59 | 5.95 | 9.5 … 14.1 | `pet19o` · `pet19c` |
| **P20** | 8:40 (520 s) | 8:54 (534.5 s) | `va-impulse-3` — viola | 48.6 | 2.65 | 1.21 | 6.7 | 8.9 … 12.9 | `pet20o` · `pet20c` |

**To keep one:** the sample it makes is `<impulse>~pet<NN>o-tail` / `…c-tail` in the bank; a return brick anywhere can ask for it — its panel → Processed as → the preset `P<NN> ORIGINAL` / `P<NN> CLEANED`, envelope `tail`. A brick's whole setting is its preset's row in `bank/presets.json`.
