# audition-petals-grit — the petals with grit: your set line stacked with the chain's later stages

*Written by `node tools/build_petals_grit.js --name audition-petals-grit --impulse bcl-impulse-1` — rendered from the tool, never edited by hand (RUNNING_LOG §201 · §202; DEC-40).*

**What it is:** seven bricks, ALL on `bcl-impulse-1`, your petals set line every time (fund 35 Hz · first partial 5 · spread 1.33 · bank B +8.1 st · ring 7 … 15 s). G0 is the petals alone; each of the others is the same ring sent on through ONE later stage of the chain, in the same render — the chain stacks when two mixes are on. Nothing new in the engine.

**To hear it:** F5 · File ▾ → Experiments → `audition-petals-grit` · play from 0 (the renders are in the bank when the plan was sent with render; else a purple brick → **render all planned**). The score is 2:00 long.

| brick | at | after the petals | preset |
|---|---|---|---|
| **G0 reference** | 0:01 (1 s) | nothing: the petals as heard in audition-petals pair 1 | `pg01` |
| **G1 overdrive mild** | 0:18 (18 s) | overdrive · drive 4 · tone 3000 Hz | `pg02` |
| **G2 overdrive hard** | 0:35 (35 s) | overdrive · drive 20 · tone 2500 Hz | `pg03` |
| **G3 fuzz** | 0:52 (52 s) | fuzz · gain 30 · bias 0.2 · tone 3000 Hz | `pg04` |
| **G4 fuzz + cab** | 1:09 (69 s) | fuzz · gain 30 · bias 0.2 · tone 4000 Hz → cabinet · low 80 · presence +3 · high 5000 | `pg05` |
| **G5 → one loop** | 1:26 (86 s) | feedback · one loop · no strings (the "found" row) · bloom 1 s · hold 6 s · drive 6 · tone 2500 · path 12 ms · climb 0.3 · wobble 0.4 | `pg06` |
| **G6 → greyhole** | 1:43 (103 s) | greyhole · time 0.4 s · damp 0.2 · size 1 · diffusion 0.7 · feedback 0.7 · mod 0.1 at 2 Hz · mix 0.7 | `pg07` |

**To keep one:** the sample it makes is `bcl-impulse-1~pg<NN>-tail` in the bank; a return brick anywhere can ask for it — its panel → Processed as → the preset `G<n> …`, envelope `tail`; or its row in `bank/presets.json` is copied onto the shelf at your word. A stack is a preset whose args turn on more than one mix — any brick's JSON box can do the same by hand.
