# THE STRIKE RIG — `scores/strike-rig.json`

*Built 2026-10-09 22:43 by `node tools/build_strike_rig.js` (PLAN.md 1.9 · 17.1 d). Regenerated at every build — do not edit.*

His strike takes (`bank/panel_snapshots.json`, the Strikes drawer), each in the **staccato** set at **f**, 12 s apart, each under a STRIKE WINDOW brick (`W`, the electronics' sixth object). Played from 0 with the engine up, the engine hears every note inside a window (the simulated ear), waits 500 ms of silence, and ANSWERS: the rhythm transformed, placed after the strike's last note, one banked sample a player, each onset at the strike's loudness. The catalogue: `bank/strike_responses.json`. What is heard when:

| at (s) | take | strike # | notes | long (ms) | rhythm | timing | the answer (ms from its first) | answers from (s) |
|---|---|---|---|---|---|---|---|---|
| 2.0 | strikes01 | 3 | 6 | 397 | **as played** | **a beat later** (+1.08 s) | 0 · 98 · 157 · 191 · 237 · 397 | 3.48 |
| 14.0 | strikes02 | 51 | 6 | 170 | **compressed** | **in a later window** (+10.11 s) | 0 · 22 · 27 · 48 · 53 · 61 | 24.28 |
| 26.0 | strikes03 | 49 | 7 | 136 | **retrograde** | **much later** (+7.83 s) | 0 · 33 · 34 · 35 · 71 · 112 · 136 | 33.97 |
| 38.0 | strikes04 | 42 | 7 | 156 | **thinned** | **call and response** (+0.34 s) | 0 · 12 · 32 · 45 · 126 | 38.49 |
| 50.0 | strikes05 | 59 | 7 | 281 | **inverted** | **right after** (+0.46 s) | 0 · 35 · 41 · 47 · 137 · 226 · 295 | 50.74 |
| 62.0 | strikes06 | 58 | 6 | 286 | **scrambled** | **a beat later** (+1.99 s) | 0 · 3 · 105 · 222 · 278 · 286 | 64.28 |
| 74.0 | strikes07 | 57 | 7 | 144 | **rotated** | **in a later window** (+11.31 s) | 0 · 12 · 14 · 52 · 76 · 119 · 144 | 85.45 |
| 86.0 | strikes08 | 55 | 7 | 97 | **thickened** | **much later** (+6.82 s) | 0 · 2 · 31 · 68 · 85 · 87 · 88 · 97 · 99 · 113 | 92.92 |
| 98.0 | strikes09 | 45 | 7 | 163 | **spread** | **call and response** (+0.31 s) | 0 · 45 · 50 · 291 · 324 · 376 · 385 | 98.47 |
| 110.0 | strikes10 | 41 | 7 | 190 | **as played** | **right after** (+0.62 s) | 0 · 89 · 116 · 145 · 161 · 174 · 190 | 110.81 |
| 122.0 | strikes11 | 36 | 5 | 169 | **compressed** | **a beat later** (+1.85 s) | 0 · 26 · 41 · 61 · 98 | 124.02 |
| 134.0 | strikes12 | 31 | 6 | 632 | **retrograde** | **in a later window** (+13.80 s) | 0 · 44 · 198 · 334 · 481 · 632 | 148.44 |
| 146.0 | strikes13 | 24 | 7 | 271 | **thinned** | **much later** (+12.45 s) | 0 · 93 · 211 · 271 | 158.72 |
| 158.0 | strikes14 | 25 | 7 | 127 | **inverted** | **call and response** (+0.35 s) | 0 · 41 · 92 · 98 · 143 · 169 · 221 | 158.47 |
| 170.0 | strikes15 | 21 | 6 | 154 | **scrambled** | **right after** (+0.72 s) | 0 · 25 · 31 · 105 · 112 · 154 | 170.88 |
| 182.0 | strikes16 | 49 | 7 | 165 | **rotated** | **a beat later** (+1.09 s) | 0 · 34 · 77 · 78 · 138 · 141 · 165 | 183.26 |
| 194.0 | strikes17 | 48 | 7 | 123 | **thickened** | **in a later window** (+14.27 s) | 0 · 7 · 9 · 11 · 29 · 71 · 106 · 120 · 123 | 208.39 |
| 206.0 | strikes18 | 46 | 7 | 184 | **spread** | **much later** (+9.48 s) | 0 · 109 · 218 · 226 · 228 · 302 · 313 | 215.66 |
| 218.0 | strikes19 | 41 | 7 | 190 | **as played** | **call and response** (+0.26 s) | 0 · 92 · 116 · 161 · 167 · 174 · 190 | 218.45 |
| 230.0 | strikes20 | 35 | 5 | 173 | **compressed** | **right after** (+0.64 s) | 0 · 39 · 39 · 42 · 70 | 230.81 |

The samples are rolled by the engine at each answer (a deck a player, none twice until all are used; the processed versions among them — their endings perc · expodec only, the short ones; the captures of category impulse only) — its window says which. The transformations: as played · retrograde · inverted · spread · compressed · scrambled · rotated · thinned · thickened. The timings: right after · a beat later · call and response · much later · in a later window. Each appears 2 … 3 and 4 … 4 times.

A number changed in the catalogue: the builder with `--replace`, then File ▾ → Reload in the page (the numbers travel in the bricks — no engine restart). A knob on ONE window: its panel (Rhythm · Timing · Seed · Gap · Level · Deal · Processed · Players · Samples).
