# audition-petals-roll — the petals roll: your kept settings at random, the grit in your proportions

*Written by `node tools/build_petals_roll.js --name audition-petals-roll --n 40 --gap 6 --seed 1` — rendered from the tool, never edited by hand (RUNNING_LOG §208; DEC-42).*

**What it is:** your 26 kept filter-bank settings (`bank/petals_bank.json` — the numbers you named from `audition-petals-spectrum`) dealt at random, none twice until all have been used, with the grit after each rolled in your proportions: 65 % clean; when not, overdrive hard 0.55 · overdrive mild 0.15 · the one loop 0.2 · fuzz 0.1 (the bank's `effects` — yours to move). This deal: 27 clean · 7 overdrive hard · 1 mild · 2 one loop · 3 fuzz. A brick every 6 s, each on another captured impulse; 4:12 long. The algorithm is `roll()` in `tools/build_petals_roll.js`; another seed is another deal.

**To hear it:** F5 · File ▾ → Experiments → `audition-petals-roll` · play from 0. The brick's label: `<number> · #<setting> <fund> Hz · <grit>`.

| brick | at | setting # | fund Hz | after the petals | impulse | preset |
|---|---|---|---|---|---|---|
| **1** | 0:01 (1 s) | #11 | 42.3 | clean | `bcl-impulse-1` — bass clarinet | `pr01` |
| **2** | 0:07 (7 s) | #8 | 36.1 | clean | `bcl-impulse-2` — bass clarinet | `pr02` |
| **3** | 0:13 (13 s) | #6 | 32.4 | overdrive hard | `bcl-impulse-3` — bass clarinet | `pr03` |
| **4** | 0:19 (19 s) | #52 | 318.3 | overdrive hard | `bcl-impulse-4` — bass clarinet | `pr04` |
| **5** | 0:25 (25 s) | #28 | 98.1 | clean | `bcl-impulse-5` — bass clarinet | `pr05` |
| **6** | 0:31 (31 s) | #27 | 92.6 | clean | `bcl-impulse-6` — bass clarinet | `pr06` |
| **7** | 0:37 (37 s) | #7 | 34.9 | clean | `bcl-impulse-7` — bass clarinet | `pr07` |
| **8** | 0:43 (43 s) | #5 | 31.3 | clean | `bcl-impulse-8` — bass clarinet | `pr08` |
| **9** | 0:49 (49 s) | #16 | 54.5 | clean | `bcl-impulse-9` — bass clarinet | `pr09` |
| **10** | 0:55 (55 s) | #3 | 28.1 | fuzz | `bcl-impulse-10` — bass clarinet | `pr10` |
| **11** | 1:01 (61 s) | #32 | 117.8 | clean | `bcl-impulse-11` — bass clarinet | `pr11` |
| **12** | 1:07 (67 s) | #9 | 37.8 | clean | `bcl-impulse-12` — bass clarinet | `pr12` |
| **13** | 1:13 (73 s) | #1 | 26 | clean | `bcl-impulse-13` — bass clarinet | `pr13` |
| **14** | 1:19 (79 s) | #41 | 183.7 | clean | `bcl-impulse-14` — bass clarinet | `pr14` |
| **15** | 1:25 (85 s) | #15 | 51.9 | clean | `bcl-impulse-15` — bass clarinet | `pr15` |
| **16** | 1:31 (91 s) | #49 | 277.9 | overdrive hard | `bcl-impulse-16` — bass clarinet | `pr16` |
| **17** | 1:37 (97 s) | #2 | 27.1 | clean | `bcl-impulse-17` — bass clarinet | `pr17` |
| **18** | 1:43 (103 s) | #50 | 286.2 | clean | `bcl-impulse-18` — bass clarinet | `pr18` |
| **19** | 1:49 (109 s) | #25 | 83.4 | fuzz | `perc-impulse-19` — percussion | `pr19` |
| **20** | 1:55 (115 s) | #35 | 137.7 | clean | `perc-impulse-24` — percussion | `pr20` |
| **21** | 2:01 (121 s) | #43 | 202.4 | clean | `perc-impulse-1` — percussion | `pr21` |
| **22** | 2:07 (127 s) | #36 | 144.8 | clean | `perc-impulse-2` — percussion | `pr22` |
| **23** | 2:13 (133 s) | #21 | 69.4 | clean | `perc-impulse-3` — percussion | `pr23` |
| **24** | 2:19 (139 s) | #44 | 216.3 | overdrive hard | `perc-impulse-4` — percussion | `pr24` |
| **25** | 2:25 (145 s) | #42 | 196.2 | fuzz | `perc-impulse-5` — percussion | `pr25` |
| **26** | 2:31 (151 s) | #26 | 87.1 | → one loop | `perc-impulse-6` — percussion | `pr26` |
| **27** | 2:37 (157 s) | #42 | 196.2 | clean | `perc-impulse-7` — percussion | `pr27` |
| **28** | 2:43 (163 s) | #25 | 83.4 | overdrive mild | `perc-impulse-8` — percussion | `pr28` |
| **29** | 2:49 (169 s) | #21 | 69.4 | overdrive hard | `perc-impulse-9` — percussion | `pr29` |
| **30** | 2:55 (175 s) | #41 | 183.7 | → one loop | `perc-impulse-10` — percussion | `pr30` |
| **31** | 3:01 (181 s) | #1 | 26 | clean | `perc-impulse-11` — percussion | `pr31` |
| **32** | 3:07 (187 s) | #6 | 32.4 | clean | `perc-impulse-12` — percussion | `pr32` |
| **33** | 3:13 (193 s) | #50 | 286.2 | overdrive hard | `perc-impulse-13` — percussion | `pr33` |
| **34** | 3:19 (199 s) | #43 | 202.4 | clean | `perc-impulse-14` — percussion | `pr34` |
| **35** | 3:25 (205 s) | #52 | 318.3 | clean | `perc-impulse-15` — percussion | `pr35` |
| **36** | 3:31 (211 s) | #2 | 27.1 | overdrive hard | `perc-impulse-16` — percussion | `pr36` |
| **37** | 3:37 (217 s) | #32 | 117.8 | clean | `perc-impulse-17` — percussion | `pr37` |
| **38** | 3:43 (223 s) | #36 | 144.8 | clean | `perc-impulse-18` — percussion | `pr38` |
| **39** | 3:49 (229 s) | #44 | 216.3 | clean | `perc-impulse-21` — percussion | `pr39` |
| **40** | 3:55 (235 s) | #15 | 51.9 | clean | `perc-impulse-26` — percussion | `pr40` |

**To keep one:** its row in `bank/presets.json` (`pr<NN>`) onto the shelf at your word, or a return brick anywhere → Processed as → `<number> · …`, envelope `tail`.
