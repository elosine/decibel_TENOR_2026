# audition-feedback-chords — the feedback on your chord shapes

*Written by `node tools/build_chord_feedback.js --name audition-feedback-chords --base 7 --gap 10 --cap 12000` — rendered from the tool, never edited by hand (RUNNING_LOG §151; DEC-32; PLAN 10.12).*

**What it is:** your 54 chord shapes (`bank/harmonies.json` — the two-pianos piece's), all of them, in the bank's order, one brick each. The feedback's six strings are tuned to the shape's notes as you voiced them; a shape with fewer than six notes leaves the other strings off; a shape with more than six takes its lowest six. Everything else is one setting: the shelf's row 7, *"this is slow bloom"* — bloom 3 s · hold 6 s · drive 4 · tone 1800 Hz. Each brick is excited by another impulse.

**Every string sings:** the feedback as first built only takes off where two strings share a harmonic (the open guitar's two E's); on these shapes it just rang down. So these presets use the feedback's second way, `the strings: each string sings` — every note of the shape blooms from what the impulse gave it, up to its own amp; the notes the impulse excites most arrive first.

**To hear it:** the engine restarted · F5 · File ▾ → Experiments → `audition-feedback-chords` · click any purple brick → **render all planned** (54 renders; wait for the engine's window to go quiet) · play from 0. A brick every 10 s; the score is 9:01 long.

| # | at | shape | its notes | the strings, Hz | impulse | preset |
|---|---|---|---|---|---|---|
| 1 | 0:01 (1 s) | **cs-001** M7 [0,11] | D2 C#3 | 73.42 · 138.59 | `bcl-impulse-1` — bass clarinet | `cs001` |
| 2 | 0:11 (11 s) | **cs-002** m2 P5 [0,1,7] | C4 C#4 G4 | 261.63 · 277.18 · 392 | `perc-impulse-2` — percussion | `cs002` |
| 3 | 0:21 (21 s) | **cs-003** m2 M2 m3 M3 [0,1,2,3,4] | F4 F#4 G4 Ab4 A4 | 349.23 · 369.99 · 392 · 415.3 · 440 | `vc-impulse-3` — cello | `cs003` |
| 4 | 0:31 (31 s) | **cs-004** m7 M7 [0,10,11] | C5 Bb5 B5 | 523.25 · 932.33 · 987.77 | `bfl-impulse-5` — bass flute | `cs004` |
| 5 | 0:41 (41 s) | **cs-005** m2 m3 P5 [0,1,3,7] | G4 Ab4 Bb4 D5 | 392 · 415.3 · 466.16 · 587.33 | `va-impulse-6` — viola | `cs005` |
| 6 | 0:51 (51 s) | **cs-006** P4 TT M7 [0,5,6,11] | Ab4 C#5 D5 G5 | 415.3 · 554.37 · 587.33 · 783.99 | `bcl-impulse-2` — bass clarinet | `cs006` |
| 7 | 1:01 (61 s) | **cs-007** m7 M7 P8 [0,10,11,12] | C4 Bb4 B4 C5 | 261.63 · 466.16 · 493.88 · 523.25 | `perc-impulse-3` — percussion | `cs007` |
| 8 | 1:11 (71 s) | **cs-008** M6+3oct [0,45] | F1 D5 | 43.65 · 587.33 | `vc-impulse-4` — cello | `cs008` |
| 9 | 1:21 (81 s) | **cs-009** M7+2oct [0,35] | B2 Bb5 | 123.47 · 932.33 | `bfl-impulse-6` — bass flute | `cs009` |
| 10 | 1:31 (91 s) | **cs-010** m3+2oct M3+2oct P4+2oct [0,27,28,29] | C4 Eb6 E6 F6 | 261.63 · 1244.51 · 1318.51 · 1396.91 | `va-impulse-1` — viola | `cs010` |
| 11 | 1:41 (101 s) | **cs-011** M2+3oct [0,38] | E1 F#4 | 41.2 · 369.99 | `bcl-impulse-3` — bass clarinet | `cs011` |
| 12 | 1:51 (111 s) | **cs-012** m2 M2 m3 M3 P4 TT [0,1,2,3,4,5,6] | F4 F#4 G4 Ab4 A4 Bb4 B4 — **the lowest six sound: F4 F#4 G4 Ab4 A4 Bb4** | 349.23 · 369.99 · 392 · 415.3 · 440 · 466.16 | `perc-impulse-4` — percussion | `cs012` |
| 13 | 2:01 (121 s) | **cs-013** m2+3oct M2+3oct m3+3oct M3+3oct P4+3oct [0,37,38,39,40,41] | B1 C5 C#5 D5 Eb5 E5 | 61.74 · 523.25 · 554.37 · 587.33 · 622.25 · 659.26 | `vc-impulse-5` — cello | `cs013` |
| 14 | 2:11 (131 s) | **cs-014** M6+3oct P4+4oct TT+4oct P5+4oct [0,45,53,54,55] | Ab1 F5 C#6 D6 Eb6 | 51.91 · 698.46 · 1108.73 · 1174.66 · 1244.51 | `bfl-impulse-1` — bass flute | `cs014` |
| 15 | 2:21 (141 s) | **cs-015** M3 P4 [0,4,5] | A3 C#4 D4 | 220 · 277.18 · 293.66 | `va-impulse-2` — viola | `cs015` |
| 16 | 2:31 (151 s) | **cs-016** m2 P4 [0,1,5] | Ab5 A5 C#6 | 830.61 · 880 · 1108.73 | `bcl-impulse-4` — bass clarinet | `cs016` |
| 17 | 2:41 (161 s) | **cs-017** m2 [0,1] | A3 Bb3 | 220 · 233.08 | `perc-impulse-5` — percussion | `cs017` |
| 18 | 2:51 (171 s) | **cs-018** m2 M2 [0,1,2] | B5 C6 C#6 | 987.77 · 1046.5 · 1108.73 | `vc-impulse-6` — cello | `cs018` |
| 19 | 3:01 (181 s) | **cs-019** m9 M9 [0,13,14] | G3 Ab4 A4 | 196 · 415.3 · 440 | `bfl-impulse-2` — bass flute | `cs019` |
| 20 | 3:11 (191 s) | **cs-020** m2 M7 [0,1,11] | F#5 G5 F6 | 739.99 · 783.99 · 1396.91 | `va-impulse-3` — viola | `cs020` |
| 21 | 3:21 (201 s) | **cs-021** M7 m9 [0,11,13] | G3 F#4 Ab4 | 196 · 369.99 · 415.3 | `bcl-impulse-5` — bass clarinet | `cs021` |
| 22 | 3:31 (211 s) | **cs-022** P8 m9 [0,12,13] | G3 G4 Ab4 | 196 · 392 · 415.3 | `perc-impulse-6` — percussion | `cs022` |
| 23 | 3:41 (221 s) | **cs-023** M7 P8 [0,11,12] | Eb3 D4 Eb4 | 155.56 · 293.66 · 311.13 | `vc-impulse-1` — cello | `cs023` |
| 24 | 3:51 (231 s) | **cs-024** M6 m7 [0,9,10] | Eb3 C4 C#4 | 155.56 · 261.63 · 277.18 | `bfl-impulse-3` — bass flute | `cs024` |
| 25 | 4:01 (241 s) | **cs-025** m6 M6 [0,8,9] | Eb3 B3 C4 | 155.56 · 246.94 · 261.63 | `va-impulse-4` — viola | `cs025` |
| 26 | 4:11 (251 s) | **cs-026** P5 m6 [0,7,8] | Eb3 Bb3 B3 | 155.56 · 233.08 · 246.94 | `bcl-impulse-6` — bass clarinet | `cs026` |
| 27 | 4:21 (261 s) | **cs-027** TT P5 [0,6,7] | Eb3 A3 Bb3 | 155.56 · 220 · 233.08 | `perc-impulse-1` — percussion | `cs027` |
| 28 | 4:31 (271 s) | **cs-028** m2 P8 [0,1,12] | Eb3 E3 Eb4 | 155.56 · 164.81 · 311.13 | `vc-impulse-2` — cello | `cs028` |
| 29 | 4:41 (281 s) | **cs-029** m2 m7 [0,1,10] | F3 F#3 Eb4 | 174.61 · 185 · 311.13 | `bfl-impulse-4` — bass flute | `cs029` |
| 30 | 4:51 (291 s) | **cs-030** m2 M6 [0,1,9] | F#3 G3 Eb4 | 185 · 196 · 311.13 | `va-impulse-5` — viola | `cs030` |
| 31 | 5:01 (301 s) | **cs-031** m2 m6 [0,1,8] | G3 Ab3 Eb4 | 196 · 207.65 · 311.13 | `bcl-impulse-1` — bass clarinet | `cs031` |
| 32 | 5:11 (311 s) | **cs-032** m2 TT [0,1,6] | A3 Bb3 Eb4 | 220 · 233.08 · 311.13 | `perc-impulse-2` — percussion | `cs032` |
| 33 | 5:21 (321 s) | **cs-033** m2 M3 [0,1,4] | B3 C4 Eb4 | 246.94 · 261.63 · 311.13 | `vc-impulse-3` — cello | `cs033` |
| 34 | 5:31 (331 s) | **cs-034** m2 m3 [0,1,3] | C4 C#4 Eb4 | 261.63 · 277.18 · 311.13 | `bfl-impulse-5` — bass flute | `cs034` |
| 35 | 5:41 (341 s) | **cs-035** P4 TT [0,5,6] | Eb3 Ab3 A3 | 155.56 · 207.65 · 220 | `va-impulse-6` — viola | `cs035` |
| 36 | 5:51 (351 s) | **cs-036** m3 M3 [0,3,4] | Eb3 F#3 G3 | 155.56 · 185 · 196 | `bcl-impulse-2` — bass clarinet | `cs036` |
| 37 | 6:01 (361 s) | **cs-037** M2 m3 [0,2,3] | Eb3 F3 F#3 | 155.56 · 174.61 · 185 | `perc-impulse-3` — percussion | `cs037` |
| 38 | 6:11 (371 s) | **cs-038** M6 m7 M7 [0,9,10,11] | E3 C#4 D4 Eb4 | 164.81 · 277.18 · 293.66 · 311.13 | `vc-impulse-4` — cello | `cs038` |
| 39 | 6:21 (381 s) | **cs-039** m6 M6 m7 [0,8,9,10] | E3 C4 C#4 D4 | 164.81 · 261.63 · 277.18 · 293.66 | `bfl-impulse-6` — bass flute | `cs039` |
| 40 | 6:31 (391 s) | **cs-040** P5 m6 M6 [0,7,8,9] | E3 B3 C4 C#4 | 164.81 · 246.94 · 261.63 · 277.18 | `va-impulse-1` — viola | `cs040` |
| 41 | 6:41 (401 s) | **cs-041** TT P5 m6 [0,6,7,8] | E3 Bb3 B3 C4 | 164.81 · 233.08 · 246.94 · 261.63 | `bcl-impulse-3` — bass clarinet | `cs041` |
| 42 | 6:51 (411 s) | **cs-042** P4 TT P5 [0,5,6,7] | E3 A3 Bb3 B3 | 164.81 · 220 · 233.08 · 246.94 | `perc-impulse-4` — percussion | `cs042` |
| 43 | 7:01 (421 s) | **cs-043** m2 M2 M7 [0,1,2,11] | E3 F3 F#3 Eb4 | 164.81 · 174.61 · 185 · 311.13 | `vc-impulse-5` — cello | `cs043` |
| 44 | 7:11 (431 s) | **cs-044** m2 M2 m7 [0,1,2,10] | F3 F#3 G3 Eb4 | 174.61 · 185 · 196 · 311.13 | `bfl-impulse-1` — bass flute | `cs044` |
| 45 | 7:21 (441 s) | **cs-045** m2 M2 M6 [0,1,2,9] | F#3 G3 Ab3 Eb4 | 185 · 196 · 207.65 · 311.13 | `va-impulse-2` — viola | `cs045` |
| 46 | 7:31 (451 s) | **cs-046** m2 M2 m6 [0,1,2,8] | G3 Ab3 A3 Eb4 | 196 · 207.65 · 220 · 311.13 | `bcl-impulse-4` — bass clarinet | `cs046` |
| 47 | 7:41 (461 s) | **cs-047** m2 M2 P5 [0,1,2,7] | Ab3 A3 Bb3 Eb4 | 207.65 · 220 · 233.08 · 311.13 | `perc-impulse-5` — percussion | `cs047` |
| 48 | 7:51 (471 s) | **cs-048** m2 M2 TT [0,1,2,6] | A3 Bb3 B3 Eb4 | 220 · 233.08 · 246.94 · 311.13 | `vc-impulse-6` — cello | `cs048` |
| 49 | 8:01 (481 s) | **cs-049** m2 M2 P4 [0,1,2,5] | Bb3 B3 C4 Eb4 | 233.08 · 246.94 · 261.63 · 311.13 | `bfl-impulse-2` — bass flute | `cs049` |
| 50 | 8:11 (491 s) | **cs-050** m2 M2 M3 [0,1,2,4] | B3 C4 C#4 Eb4 | 246.94 · 261.63 · 277.18 · 311.13 | `va-impulse-3` — viola | `cs050` |
| 51 | 8:21 (501 s) | **cs-051** m2 M2 m3 M3 P4 TT P5 [0,1,2,3,4,5,6,7] | A0 Bb0 B0 C1 C#1 D1 Eb1 E1 — **the lowest six sound: A0 Bb0 B0 C1 C#1 D1** | 27.5 · 29.14 · 30.87 · 32.7 · 34.65 · 36.71 | `bcl-impulse-5` — bass clarinet | `cs051` |
| 52 | 8:31 (511 s) | **cs-052** m2 M2 m3 [0,1,2,3] | F3 F#3 G3 Ab3 | 174.61 · 185 · 196 · 207.65 | `perc-impulse-6` — percussion | `cs052` |
| 53 | 8:41 (521 s) | **cs-053** m2 M2 m3 M3 P4 TT P5 m6 M6 m7 M7 P8 [0,1,2,3,4,5,6,7,8,9,10,11,12] | B1 C2 C#2 D2 Eb2 E2 F2 F#2 G2 Ab2 A2 Bb2 B2 — **the lowest six sound: B1 C2 C#2 D2 Eb2 E2** | 61.74 · 65.41 · 69.3 · 73.42 · 77.78 · 82.41 | `vc-impulse-1` — cello | `cs053` |
| 54 | 8:51 (531 s) | **cs-054** m2+3oct M2+3oct m3+3oct M3+3oct [0,37,38,39,40] | D2 Eb5 E5 F5 F#5 | 73.42 · 622.25 · 659.26 · 698.46 · 739.99 | `bfl-impulse-3` — bass flute | `cs054` |

**To keep one:** the sample it makes is `<impulse>~cs<NNN>-tail` in the bank; a return brick anywhere can ask for it — its panel → Processed as → the preset named by the shape, envelope `tail`. Another base setting: `--base <the shelf's row>`; the short cut the shelf's row 7 was heard with: `--cap 1700 --gap 3.5` (both with `--replace`).
