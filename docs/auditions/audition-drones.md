# audition-drones — the nine held sounds stretched into drones: grain window × grain size × pace

*Written by `node tools/build_drone_auditions.js --a audition-stretch-dials --b audition-drones --input bcl-mp-1 --len 20000 --gap 2` — rendered from the tool, never edited by hand (RUNNING_LOG §171; DEC-34 · 34b; PLAN 10.13).*

**What it is:** 72 drones, 8 on each of the nine held sounds, each 20 s. An assortment of the three things you vary: the **grain window** (Warp1's Hann and your ten: Hann (built in) ×7, expodec ×7, 3-stage linear ×7, gauss ×7, Hamming ×6, Blackman ×7, Blackman-Harris ×7, hanning ×6, tri ×6, quasi-gauss ×6, rexpodec ×6), the **grain size** (0.15 s ×24, 0.5 s ×24, 1.2 s ×24) and the **pace** of the read head (1/4 ×18, 1/10 ×18, 1/30 ×18, 1/100 ×18). Each input's eight are distinct and run fast to slow. Everything else is the reference: 17 overlaps · rand 0.2 · reading in order from 0 and looping · no pitch change.

**To hear it:** the engine restarted (the loop is new code) · F5 · File ▾ → Experiments → `audition-drones` · click any purple brick → **render all planned** (72 renders of 20 s, two at a time — a few minutes; wait for the engine's window to go quiet) · play from 0, or from an input's first brick. The score is 26:25 long.

**The inputs, in order:** **1.** `bfl-mp-1` — bass flute · multiphonic (MW, held) (5638 ms) at 0:01 · **2.** `bcl-mp-1` — bass clarinet · multiphonic (MW, held) (1793 ms) at 2:57 · **3.** `perc-china-bow-1` — China cymbal · bowed (long continuous bowing) (5218 ms) at 5:53 · **4.** `perc-susp-bow-1` — suspended cymbal (bright) · bowed (long continuous bowing) (5625 ms) at 8:49 · **5.** `perc-crot-bow-1` — crotales · bowed (5381 ms) at 11:45 · **6.** `va-op-1` — viola · bow overpressure (MW, held) · G3 (4451 ms) at 14:41 · **7.** `va-sp-1` — viola · sul ponticello (MW, held) · C4 (5737 ms) at 17:37 · **8.** `vc-op-1` — cello · bow overpressure (MW, held) · G2 (2591 ms) at 20:33 · **9.** `vc-sp-1` — cello · sul ponticello (MW, held) · C3 (5874 ms) at 23:29

| brick | at | input | pace | grain size | grain env | preset |
|---|---|---|---|---|---|---|
| **B1** | 0:01 (1 s) | `bfl-mp-1` — bass flute | 1/4 | 0.15 s | Hann (built in) | `dr01` |
| **B2** | 0:23 (23 s) | `bfl-mp-1` — bass flute | 1/4 | 0.5 s | expodec | `dr02` |
| **B3** | 0:45 (45 s) | `bfl-mp-1` — bass flute | 1/10 | 0.5 s | 3-stage linear | `dr03` |
| **B4** | 1:07 (67 s) | `bfl-mp-1` — bass flute | 1/10 | 1.2 s | gauss | `dr04` |
| **B5** | 1:29 (89 s) | `bfl-mp-1` — bass flute | 1/30 | 0.15 s | Hamming | `dr05` |
| **B6** | 1:51 (111 s) | `bfl-mp-1` — bass flute | 1/30 | 1.2 s | Blackman | `dr06` |
| **B7** | 2:13 (133 s) | `bfl-mp-1` — bass flute | 1/100 | 0.15 s | Blackman-Harris | `dr07` |
| **B8** | 2:35 (155 s) | `bfl-mp-1` — bass flute | 1/100 | 0.5 s | hanning | `dr08` |
| **B9** | 2:57 (177 s) | `bcl-mp-1` — bass clarinet | 1/4 | 0.15 s | tri | `dr09` |
| **B10** | 3:19 (199 s) | `bcl-mp-1` — bass clarinet | 1/4 | 0.5 s | Blackman-Harris | `dr10` |
| **B11** | 3:41 (221 s) | `bcl-mp-1` — bass clarinet | 1/10 | 0.5 s | Hann (built in) | `dr11` |
| **B12** | 4:03 (243 s) | `bcl-mp-1` — bass clarinet | 1/10 | 1.2 s | expodec | `dr12` |
| **B13** | 4:25 (265 s) | `bcl-mp-1` — bass clarinet | 1/30 | 0.5 s | quasi-gauss | `dr13` |
| **B14** | 4:47 (287 s) | `bcl-mp-1` — bass clarinet | 1/30 | 1.2 s | 3-stage linear | `dr14` |
| **B15** | 5:09 (309 s) | `bcl-mp-1` — bass clarinet | 1/100 | 0.15 s | Blackman | `dr15` |
| **B16** | 5:31 (331 s) | `bcl-mp-1` — bass clarinet | 1/100 | 1.2 s | rexpodec | `dr16` |
| **B17** | 5:53 (353 s) | `perc-china-bow-1` — percussion | 1/4 | 0.15 s | rexpodec | `dr17` |
| **B18** | 6:15 (375 s) | `perc-china-bow-1` — percussion | 1/4 | 1.2 s | gauss | `dr18` |
| **B19** | 6:37 (397 s) | `perc-china-bow-1` — percussion | 1/10 | 0.15 s | Hamming | `dr19` |
| **B20** | 6:59 (419 s) | `perc-china-bow-1` — percussion | 1/10 | 0.5 s | tri | `dr20` |
| **B21** | 7:21 (441 s) | `perc-china-bow-1` — percussion | 1/30 | 0.5 s | hanning | `dr21` |
| **B22** | 7:43 (463 s) | `perc-china-bow-1` — percussion | 1/30 | 1.2 s | Hann (built in) | `dr22` |
| **B23** | 8:05 (485 s) | `perc-china-bow-1` — percussion | 1/100 | 0.15 s | 3-stage linear | `dr23` |
| **B24** | 8:27 (507 s) | `perc-china-bow-1` — percussion | 1/100 | 1.2 s | quasi-gauss | `dr24` |
| **B25** | 8:49 (529 s) | `perc-susp-bow-1` — percussion | 1/4 | 0.15 s | quasi-gauss | `dr25` |
| **B26** | 9:11 (551 s) | `perc-susp-bow-1` — percussion | 1/4 | 1.2 s | expodec | `dr26` |
| **B27** | 9:33 (573 s) | `perc-susp-bow-1` — percussion | 1/10 | 0.15 s | gauss | `dr27` |
| **B28** | 9:55 (595 s) | `perc-susp-bow-1` — percussion | 1/10 | 0.5 s | rexpodec | `dr28` |
| **B29** | 10:17 (617 s) | `perc-susp-bow-1` — percussion | 1/30 | 0.15 s | Blackman | `dr29` |
| **B30** | 10:39 (639 s) | `perc-susp-bow-1` — percussion | 1/30 | 0.5 s | Hamming | `dr30` |
| **B31** | 11:01 (661 s) | `perc-susp-bow-1` — percussion | 1/100 | 0.5 s | Blackman-Harris | `dr31` |
| **B32** | 11:23 (683 s) | `perc-susp-bow-1` — percussion | 1/100 | 1.2 s | hanning | `dr32` |
| **B33** | 11:45 (705 s) | `perc-crot-bow-1` — percussion | 1/4 | 0.5 s | tri | `dr33` |
| **B34** | 12:07 (727 s) | `perc-crot-bow-1` — percussion | 1/4 | 1.2 s | Blackman-Harris | `dr34` |
| **B35** | 12:29 (749 s) | `perc-crot-bow-1` — percussion | 1/10 | 0.15 s | expodec | `dr35` |
| **B36** | 12:51 (771 s) | `perc-crot-bow-1` — percussion | 1/10 | 1.2 s | Hann (built in) | `dr36` |
| **B37** | 13:13 (793 s) | `perc-crot-bow-1` — percussion | 1/30 | 0.15 s | 3-stage linear | `dr37` |
| **B38** | 13:35 (815 s) | `perc-crot-bow-1` — percussion | 1/30 | 0.5 s | gauss | `dr38` |
| **B39** | 13:57 (837 s) | `perc-crot-bow-1` — percussion | 1/100 | 0.5 s | Blackman | `dr39` |
| **B40** | 14:19 (859 s) | `perc-crot-bow-1` — percussion | 1/100 | 1.2 s | Hamming | `dr40` |
| **B41** | 14:41 (881 s) | `va-op-1` — viola | 1/4 | 0.5 s | rexpodec | `dr41` |
| **B42** | 15:03 (903 s) | `va-op-1` — viola | 1/4 | 1.2 s | Blackman | `dr42` |
| **B43** | 15:25 (925 s) | `va-op-1` — viola | 1/10 | 0.15 s | Blackman-Harris | `dr43` |
| **B44** | 15:47 (947 s) | `va-op-1` — viola | 1/10 | 1.2 s | tri | `dr44` |
| **B45** | 16:09 (969 s) | `va-op-1` — viola | 1/30 | 0.15 s | Hann (built in) | `dr45` |
| **B46** | 16:31 (991 s) | `va-op-1` — viola | 1/30 | 1.2 s | hanning | `dr46` |
| **B47** | 16:53 (1013 s) | `va-op-1` — viola | 1/100 | 0.15 s | quasi-gauss | `dr47` |
| **B48** | 17:15 (1035 s) | `va-op-1` — viola | 1/100 | 0.5 s | 3-stage linear | `dr48` |
| **B49** | 17:37 (1057 s) | `va-sp-1` — viola | 1/4 | 0.15 s | expodec | `dr49` |
| **B50** | 17:59 (1079 s) | `va-sp-1` — viola | 1/4 | 0.5 s | quasi-gauss | `dr50` |
| **B51** | 18:21 (1101 s) | `va-sp-1` — viola | 1/10 | 0.5 s | gauss | `dr51` |
| **B52** | 18:43 (1123 s) | `va-sp-1` — viola | 1/10 | 1.2 s | rexpodec | `dr52` |
| **B53** | 19:05 (1145 s) | `va-sp-1` — viola | 1/30 | 0.15 s | tri | `dr53` |
| **B54** | 19:27 (1167 s) | `va-sp-1` — viola | 1/30 | 1.2 s | Hamming | `dr54` |
| **B55** | 19:49 (1189 s) | `va-sp-1` — viola | 1/100 | 0.15 s | hanning | `dr55` |
| **B56** | 20:11 (1211 s) | `va-sp-1` — viola | 1/100 | 0.5 s | Hann (built in) | `dr56` |
| **B57** | 20:33 (1233 s) | `vc-op-1` — cello | 1/4 | 0.15 s | Blackman-Harris | `dr57` |
| **B58** | 20:55 (1255 s) | `vc-op-1` — cello | 1/4 | 0.5 s | hanning | `dr58` |
| **B59** | 21:17 (1277 s) | `vc-op-1` — cello | 1/10 | 0.5 s | expodec | `dr59` |
| **B60** | 21:39 (1299 s) | `vc-op-1` — cello | 1/10 | 1.2 s | quasi-gauss | `dr60` |
| **B61** | 22:01 (1321 s) | `vc-op-1` — cello | 1/30 | 0.5 s | 3-stage linear | `dr61` |
| **B62** | 22:23 (1343 s) | `vc-op-1` — cello | 1/30 | 1.2 s | gauss | `dr62` |
| **B63** | 22:45 (1365 s) | `vc-op-1` — cello | 1/100 | 0.15 s | Hamming | `dr63` |
| **B64** | 23:07 (1387 s) | `vc-op-1` — cello | 1/100 | 1.2 s | Blackman | `dr64` |
| **B65** | 23:29 (1409 s) | `vc-sp-1` — cello | 1/4 | 0.15 s | Blackman | `dr65` |
| **B66** | 23:51 (1431 s) | `vc-sp-1` — cello | 1/4 | 1.2 s | rexpodec | `dr66` |
| **B67** | 24:13 (1453 s) | `vc-sp-1` — cello | 1/10 | 0.15 s | tri | `dr67` |
| **B68** | 24:35 (1475 s) | `vc-sp-1` — cello | 1/10 | 0.5 s | Blackman-Harris | `dr68` |
| **B69** | 24:57 (1497 s) | `vc-sp-1` — cello | 1/30 | 0.5 s | Hann (built in) | `dr69` |
| **B70** | 25:19 (1519 s) | `vc-sp-1` — cello | 1/30 | 1.2 s | expodec | `dr70` |
| **B71** | 25:41 (1541 s) | `vc-sp-1` — cello | 1/100 | 0.15 s | gauss | `dr71` |
| **B72** | 26:03 (1563 s) | `vc-sp-1` — cello | 1/100 | 1.2 s | 3-stage linear | `dr72` |

**To keep one:** its sample is `<input>~dr<NN>-tail` in the bank; any return brick can ask for it — its panel → Processed as → the preset `B<N> …`, envelope `tail`. A pace, a size or a window you like on one input goes onto another input by hand in the panel (the icy effect's dials), or as a row of the next file.
