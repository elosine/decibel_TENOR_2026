# beating-section — the beating section, seed 79

*Written by `node tools/build_beating_section.js --seed 1 --replace` — rendered from the tool, never edited by hand (PLAN.md § 1.8; DEC-58 … 58c; RUNNING_LOG §255 … §260).*

**What it is:** 180 s. The players hold long tones against sines and bend until the pair beats. It begins with `sine-demo` as it is (0 … 40 s — your word: "I'll keep that as the start"); from there each player plays PHRASES on the take `take-01-sine-demo`: a phrase 15 … 40 s, then a rest 3 … 12 s. Inside a phrase the player re-breathes (or re-bows) by the breath model — bass flute ≤ 8 s, 0.75 s between · bass clarinet ≤ 12 s, 0.75 s between · crotales ≤ 8 s, 0.6 s between · viola ≤ 12 s · cello ≤ 15 s. Over each phrase lies ONE sine brick, written `mf` (the cello's `ff`) — and every brick is a WINDOW: the sine is silent until its player sounds, comes in with them, follows their rise and fall, holds through a breath and goes when they stop. The crotales hold their pitch and their SINE glides, again at each bowing. A bend past the sampler's ±1 st is RE-KEYED (the string quartet's rule: the key moves, the bend re-based, a 5 ms overlap at the seam) — "re-keyed ×n" below. The start's cello notes went through the GO again here (`start.redo`): Vc D2 · holds 75.7 c over · beats 3.3 → 3.3 /s | Vc D2 · holds the pitch for 19 %, then drifts 637.3 c over (in) · beats 0 → 32.7 /s · RE-KEYED ×4 (the sampler ±1.012 st; keys +1 +3 +5 +7) | Vc D2 · starts 515.6 c over and finds the pitch at 64 % · beats 25.5 → 0 /s · RE-KEYED ×3 (the sampler ±1.012 st; keys +5 +3 +1).

**The test — the crescendo phrases:** viola P2 at 1:09 … 1:44 (69.5 … 104.2 s), p → f · bass flute P4 at 2:18 … 2:40 (138.3 … 160.1 s), p → f. The player's notes rise across the whole phrase; the sine under them should rise with them (the tracker moves it by at most ±8 dB — `bank/elec_route.json` `sine.track.capDb`).

**To play it:** the engine restarted after 2026-10-08 (it has the tracker) · F5 · File ▾ → Experiments → `beating-section` · play from 0 with the engine up. The engine's window says each entry: `sine · … ENTERED — the sine comes in with it`.

**The phrases:**

| # | player | from → to | notes (s each) | how they beat |
|---|---|---|---|---|
| P1 | bass flute | 0:41 → 0:59 (18.44 s) | 6.5 5.5 4.9 | toUnison · through · toUnison |
| P1 | viola | 0:44 → 1:00 (16.09 s) | 7.7 8.4 | toUnison · toUnison |
| P1 | crotales | 0:46 → 1:03 (17.07 s) | 7.2 4.3 4.4 | the sine: from 0 → -2.2 c, each bowing |
| P1 | cello | 0:49 → 1:28 (39.32 s) | 8.1 15.0 11.4 4.8 | fromUnison (548.6 c, re-keyed ×3) · waver (133.3 c, re-keyed ×3) · hold · waver (103.6 c, re-keyed ×3) |
| P1 | bass clarinet | 0:49 → 1:13 (24.53 s) | 6.2 10.4 6.4 | waver · toUnison · fromUnison |
| P2 | bass flute | 1:03 → 1:26 (23.09 s) | 6.9 6.2 3.6 4.1 | toUnison · waver · fromUnison · hold |
| P2 | crotales | 1:09 → 1:36 (27 s) | 3.9 5.3 6.5 4.0 5.0 | the sine: around 9.4 → 0 c, each bowing |
| P2 cresc | viola | 1:09 → 1:44 (34.75 s) | 8.1 9.9 6.8 10.0 | through · fromUnison · hold · toUnison |
| P2 | bass clarinet | 1:20 → 1:53 (33.08 s) | 5.6 8.5 5.6 11.2 | toUnison · hold · waver · fromUnison |
| P3 | bass flute | 1:33 → 2:09 (36 s) | 7.3 5.8 5.5 4.3 6.9 2.6 | toUnison · through · hold · fromUnison · toUnison · toUnison |
| P2 | cello | 1:38 → 2:10 (31.6 s) | 12.2 14.2 5.2 | waver (158.1 c, re-keyed ×3) · toUnison (516.6 c, re-keyed ×3) · waver (166 c, re-keyed ×3) |
| P3 | crotales | 1:45 → 2:25 (39.72 s) | 6.9 4.6 4.5 6.0 5.9 4.1 4.1 | the sine: from 0 → 5.6 c, each bowing |
| P3 | viola | 1:48 → 2:05 (16.91 s) | 8.9 8.0 | toUnison · toUnison |
| P3 | bass clarinet | 2:04 → 2:20 (16.96 s) | 9.8 6.4 | toUnison · toUnison |
| P4 | viola | 2:15 → 2:44 (28.67 s) | 9.3 7.7 11.6 | through · toUnison · fromUnison |
| P4 cresc | bass flute | 2:18 → 2:40 (21.85 s) | 5.7 6.3 5.0 2.6 | waver · hold · fromUnison · hold |
| P3 | cello | 2:22 → 2:45 (23.4 s) | 9.3 14.1 | fromUnison (639 c, re-keyed ×4) · toUnison (625 c, re-keyed ×4) |
| P4 | bass clarinet | 2:26 → 2:44 (18.4 s) | 6.3 11.3 | toUnison · through |
| P4 | crotales | 2:29 → 2:53 (24.08 s) | 5.5 3.3 3.2 4.5 5.2 | the sine: from 0 → 10.7 c, each bowing |
| P5 | bass flute | 2:49 → 3:00 (10.44 s) | 6.8 2.9 | hold · through |
| P5 | bass clarinet | 2:51 → 3:00 (8.67 s) | 8.7 | toUnison |

**The density** (the most players sounding in each 5 s, from 40 s): `1555455455444554543445554232` — up to 5, mean 3.49 (the rule: ≥ 5 once, mean ≤ 3.5).

**To change it:** a number in `bank/beating_section.json`, then `node tools/build_beating_section.js --seed 1 --replace`, then File ▾ → Reload. Another seed: `--seed N`. The balance of the sines against the players is the one mark `level` (or `sineLevel`, the sines alone; a player's own `sineLevel` on its row, that player's sines alone). How far a pair beats: `bank/sine_behaviours.json` — a bending player's `cents`, a gliding sine's `beatHz` (beats a second, by the pitch). Your takes by range: select the notes of a range → `take ▾` → `∿ sines`, or `node tools/sine_go.js --score beating-section --from 40 --to 75 --take <name>` — a phrase's brick is re-pitched, not replaced.
