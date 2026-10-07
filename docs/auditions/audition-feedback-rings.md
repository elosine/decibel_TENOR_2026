# audition-feedback-rings — the feedback with its strings as ringing partials, on your chord shapes

*Written by `node tools/build_feedback_rings.js --name audition-feedback-rings --n 6 --base 7 --gap 3 --cap 14000` — rendered from the tool, never edited by hand (RUNNING_LOG §201 · §203; DEC-40).*

**What it is:** 6 of your chord shapes, three bricks each. A string is no longer a comb (every harmonic of its pitch) but ONE RINGING PARTIAL — a resonant filter at its pitch. **a** the one loop, strings ringing 1.5 s: a partial in a loop takes off by itself, and the shared amp lets the strongest win — as a guitar's feedback picks one note. **b** the same loop, strings ringing 6 s: a deeper resonance, a slower fall after the loop is broken. **c** each string sings (its own amp): a chord of clipped partials. The other dials are the shelf's row 7 (bloom 3 s · hold 6 s · drive 4 · tone 1800 Hz). Bricks 3 s apart — the tails overlap.

**To hear it:** the engine RESTARTED (one started after 2026-10-07 — the switch is new code) · F5 · File ▾ → Experiments → `audition-feedback-rings` · play from 0 (the renders are in the bank when the plan was sent with render; else a purple brick → **render all planned**). The score is 1:07 long.

| brick | at | shape | way | strings | impulse | preset |
|---|---|---|---|---|---|---|
| **cs-001 one loop · ring 1.5** | 0:01 (1 s) | M7 [0,11] | ONE LOOP, the strings as partials ringing 1.5 s — the strongest wins | D2 C#3 | `bcl-impulse-1` | `fr001a` |
| **cs-001 one loop · ring 6** | 0:04 (4 s) | M7 [0,11] | ONE LOOP, the strings as partials ringing 6 s — a deeper resonance | D2 C#3 | `bcl-impulse-2` | `fr001b` |
| **cs-001 each sings · partials** | 0:07 (7 s) | M7 [0,11] | EACH STRING SINGS, as partials — a chord of clipped partials | D2 C#3 | `bcl-impulse-3` | `fr001c` |
| **cs-002 one loop · ring 1.5** | 0:10 (10 s) | m2 P5 [0,1,7] | ONE LOOP, the strings as partials ringing 1.5 s — the strongest wins | C4 C#4 G4 | `bcl-impulse-4` | `fr002a` |
| **cs-002 one loop · ring 6** | 0:13 (13 s) | m2 P5 [0,1,7] | ONE LOOP, the strings as partials ringing 6 s — a deeper resonance | C4 C#4 G4 | `bcl-impulse-5` | `fr002b` |
| **cs-002 each sings · partials** | 0:16 (16 s) | m2 P5 [0,1,7] | EACH STRING SINGS, as partials — a chord of clipped partials | C4 C#4 G4 | `bcl-impulse-6` | `fr002c` |
| **cs-003 one loop · ring 1.5** | 0:19 (19 s) | m2 M2 m3 M3 [0,1,2,3,4] | ONE LOOP, the strings as partials ringing 1.5 s — the strongest wins | F4 F#4 G4 Ab4 A4 | `bcl-impulse-7` | `fr003a` |
| **cs-003 one loop · ring 6** | 0:22 (22 s) | m2 M2 m3 M3 [0,1,2,3,4] | ONE LOOP, the strings as partials ringing 6 s — a deeper resonance | F4 F#4 G4 Ab4 A4 | `bcl-impulse-8` | `fr003b` |
| **cs-003 each sings · partials** | 0:25 (25 s) | m2 M2 m3 M3 [0,1,2,3,4] | EACH STRING SINGS, as partials — a chord of clipped partials | F4 F#4 G4 Ab4 A4 | `bcl-impulse-9` | `fr003c` |
| **cs-004 one loop · ring 1.5** | 0:28 (28 s) | m7 M7 [0,10,11] | ONE LOOP, the strings as partials ringing 1.5 s — the strongest wins | C5 Bb5 B5 | `bcl-impulse-10` | `fr004a` |
| **cs-004 one loop · ring 6** | 0:31 (31 s) | m7 M7 [0,10,11] | ONE LOOP, the strings as partials ringing 6 s — a deeper resonance | C5 Bb5 B5 | `bcl-impulse-11` | `fr004b` |
| **cs-004 each sings · partials** | 0:34 (34 s) | m7 M7 [0,10,11] | EACH STRING SINGS, as partials — a chord of clipped partials | C5 Bb5 B5 | `bcl-impulse-12` | `fr004c` |
| **cs-005 one loop · ring 1.5** | 0:37 (37 s) | m2 m3 P5 [0,1,3,7] | ONE LOOP, the strings as partials ringing 1.5 s — the strongest wins | G4 Ab4 Bb4 D5 | `bcl-impulse-13` | `fr005a` |
| **cs-005 one loop · ring 6** | 0:40 (40 s) | m2 m3 P5 [0,1,3,7] | ONE LOOP, the strings as partials ringing 6 s — a deeper resonance | G4 Ab4 Bb4 D5 | `bcl-impulse-14` | `fr005b` |
| **cs-005 each sings · partials** | 0:43 (43 s) | m2 m3 P5 [0,1,3,7] | EACH STRING SINGS, as partials — a chord of clipped partials | G4 Ab4 Bb4 D5 | `bcl-impulse-15` | `fr005c` |
| **cs-006 one loop · ring 1.5** | 0:46 (46 s) | P4 TT M7 [0,5,6,11] | ONE LOOP, the strings as partials ringing 1.5 s — the strongest wins | Ab4 C#5 D5 G5 | `bcl-impulse-16` | `fr006a` |
| **cs-006 one loop · ring 6** | 0:49 (49 s) | P4 TT M7 [0,5,6,11] | ONE LOOP, the strings as partials ringing 6 s — a deeper resonance | Ab4 C#5 D5 G5 | `bcl-impulse-17` | `fr006b` |
| **cs-006 each sings · partials** | 0:52 (52 s) | P4 TT M7 [0,5,6,11] | EACH STRING SINGS, as partials — a chord of clipped partials | Ab4 C#5 D5 G5 | `bcl-impulse-18` | `fr006c` |

**To keep one:** the sample it makes is `<impulse>~fr<NNN><a|b|c>-tail` in the bank; a return brick anywhere can ask for it — its panel → Processed as → the preset, envelope `tail`; or its row in `bank/presets.json` is copied onto the shelf at your word. On any process brick the switch is in the feedback row: **a string is** — a comb · one ringing partial; and **string ring**.
