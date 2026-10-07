# THE THREE BODY PROBLEM — a section: its language, its form, its electronics, its simulation

*(Opened 2026-10-06 — DEC-36 · 36b · 36c in `COMPOSITION_NOTES.md`; the reasoning in `RUNNING_LOG.md` §183 … §185. HIS words are quoted; the AI's wording is marked as such. He refines the language later — THIS FILE is where the language lives; the plan item is `PLAN.md` when written. The original is piece #2's three-body texture — his journal entry #2 of 2026-03-28 and Decision #25 of 2026-04-01.)*

---

## 0. What this is — in one paragraph

A section of the piece in which every player moves round ONE ORBIT — **far apart → approaching → close pass → break-and-rejoin → far apart** — each on their own clock, whom they are pulled toward changing as they go. The metaphor is the three-body problem: bodies far apart move calmly and predictably; as they approach, each one's motion bends toward the others; at a close pass the outcome is unpredictable, and a body is flung out — to return later. The electronics are three more players on the same orbit, their sounds the players' captured impulses and their processed versions. The section is simulated in the composer score before anyone plays it.

---

## 1. The metaphor — for the performance notes (short; the AI's wording, his to cut)

- Two bodies pulling on each other make a clock: one orbit, repeated for ever, known in advance.
- Add a third and no formula exists. Each body answers to a combination that is answering back.
- A hair's difference at the start grows until the future is unreadable. Nothing is random; nothing is predictable.
- The chaos lives in the close passes. Between them the motion is calm.
- After a pass a body is often thrown out — a wide loop, or gone for good — and the two left lock tighter.
- *The law is deterministic; the players are the hair's difference.*

---

## 2. The performers' language — the four states (his dictation of 2026-10-06, DEC-36c, set as instruction)

Each player is always in ONE of these. The score shows which (§ 3).

### FAR APART
> Keep your own pace. Play and ignore the other activity — play as if you were playing solo.

### APPROACHING
> Choose a player, or a type of sound. When you hear it: wait a beat, then play.
> Repeat — listen · hear · play. (Or: listen · hear · respond.)

### CLOSE PASS *(he also calls it "near")*
> Choose a player, or several players in a cluster. Try to play just before or just after their onsets —
> as close to them as you can, without playing at the same time.

### BREAK AND REJOIN *(repel + rejoin, combined at his word)*
> Break. Then, after a silence, try to join the texture just after a cluster has broken up.

→ then FAR APART again.

*(The AI's note, marked: "a beat" in APPROACHING is the player's own — no tempo is given. "A type of sound" lets a player be pulled by a sound rather than a person — a bowed metal, a slap — which includes the electronics' voices. The CLOSE PASS is piece #2's instruction with the guess made honest: before OR after, the player's choice each time, unison forbidden.)*

---

## 3. The form — a series per player, symbols, time containers, the end cap

- **Each player runs through the series ONCE** — far apart · approaching · close pass · break-and-rejoin · far apart — *his word 2026-10-06: "1 orbit per player, longer containers"*.
- **THE CHANGE IS ITS OWN TIME CONTAINER** — *his word: "b — change can be its own time container"* (Cage's soft edge, made a state of its own). So a player's series is NINE containers: **far · change · approaching · change · close pass · change · break-and-rejoin · change · far**. Inside a change the player moves from the one state to the next in their own time — begins to listen; tightens; is flung; loosens.
- **A symbol on the score says where each player is** — *his word: "#3 can be rough for now, we will refine the graphics for the notation score"*. So for now: the container ITSELF, drawn on the lane with its name, is the symbol; the drawn kind and its device sheet come with the notation (`PLANNING_METHOD.md` § THE DEVICE SHEET). *(Candidates, the AI's, for then: ○ far apart · → approaching · ● close pass · ‖ break-and-rejoin · a gradient or a bracket for a change.)*
- **The durations are TIME CONTAINERS, rolled by chance for each player and each container — his word: "like Cage, roll some I Ching time containers".**
  *(What Cage did, the AI's note: in* Music of Changes *(1951) sounds, durations and dynamics came from charts of 64 cells, read by I Ching hexagrams — six coin tosses each. In the late Number Pieces (1987–92) he used TIME BRACKETS: every event has a window in which it may start and a window in which it may end, the player free inside them; the brackets themselves were drawn by chance, by a program that tossed the coins. His "change container" is that window, made explicit.)*
- **The length: under three minutes is better — judged from the simulation and its sound** (*his word*). **AS BUILT (2026-10-06, RUNNING_LOG §188):** the length is not a number of its own — the section ends `endCapS` (20 s) after the LAST player has come back to far apart; every player's last container runs to that end. Seed 1: 2:31. *(A fixed 170 s made the last far apart twice the first.)* **SINCE DEC-37 (2026-10-06, his ear on seed 1 — RUNNING_LOG §193):** the cap 10 s, the first far apart 10 … 18 s, the approaching 16 … 28 s, and A FIT TO 110 s (`fitS` in `bank/three_body.json`, or `--fit N`): from the seed asked on, the kept roll whose length lands nearest it — seed 1 → seed 165, 1:50.
- **A hexagram, as built:** six lines, three coins each (heads 3, tails 2); the two trigrams looked up in the book's KING WEN table → its number 1 … 64, read across the container's range. A container's label carries it: `approaching → va — 25.5 s · ䷗ 24`.
- **The AI's proposal for the ranges (nothing rolled yet; his to move after the simulation):**
  - far apart (the first) — 10 … 18 s since 2026-10-06 (20 … 35 until then; DEC-37: "shorten the far apart sections by a fair bit") — the calm must still be heard as calm
  - a change — 5 … 12 s (the one into the break shorter, 4 … 8 s: the fling is quick)
  - approaching — 16 … 28 s since 2026-10-06 (20 … 35 until then; DEC-37: "the initial approaching section might be a tiny bit long too")
  - close pass — 10 … 20 s (short: it is the moment)
  - break-and-rejoin — a silence of 4 … 8 s, then 8 … 16 s of rejoining
  - far apart (the last) — to the end
  - the sum of the eight rolled containers: 67 … 134 s since 2026-10-06 (81 … 158 until then), so a section near 110 s with its end cap — the fit picks the seed that lands there.
  - a roll = one hexagram (1 … 64) per container, seeded, mapped across its range; another seed, another section.
- **The end cap is free:** the section ends with every player in FAR APART.
- **A close pass always finds company — his "b" (2026-10-06):** a roll is kept only if every player's close pass overlaps another's close pass or approaching by three seconds; otherwise the next seed. *(It costs almost nothing: 199 of 200 seeds keep it at once — everybody runs the same series from the start, so the close passes fall together.)*
- **THE FORM THAT COMES OUT IS AN ARCH** *(the AI's observation, from the simulation — RUNNING_LOG §190)*: all far apart · all listening · all passing · all flung · all far apart, staggered by the rolls. At seed 1 the five's notes per ten seconds: 13 14 12 16 19 22 30 45 42 15 12 10 13 12 13.
- **WHO LISTENS TO WHOM is drawn with the roll** *(the AI's; his words: "choose a player or a type of sound" · "a player, or several players in a cluster")*: each listener's target is drawn among the others, weighted by how much each sounds while the listening lasts; half the close passes take the CLUSTER — whoever plays. A container's label names it (`→ va` · `→ cluster`). In performance the choice is the player's; the drawn one is the simulation's stand-in.

---

## 4. The electronics — three players on the same orbit *(BUILT 2026-10-06 — RUNNING_LOG §189 · §190; the engine's §49 · §50; unheard)*

His word: *"let's design an algorithm for the electronics to follow. Let's consider them just three players, drawing on the available impulses plus effects — so they'll be processed impulses."*

**Who they are** *(the AI's grouping, his to change — `bank/three_body.json` `computer`)*:
- **e1 — the winds' samples** (bass flute + bass clarinet) — drawn at the bottom of the bass clarinet's lane
- **e2 — the percussion's samples** — at the bottom of the mallets' lane
- **e3 — the strings' samples** (viola + cello) — at the bottom of the cello's lane
- each holds a PALETTE of 18 processed impulses already rendered in the bank, dealt round robin; each plays at `mf` on the players' ladder.

**What each state means for a computer player — the same rules as the simulated players (§ 5); the numbers `bank/three_body.json` `rules`:**

| the state | what it does | the numbers |
|---|---|---|
| **far apart** | its own pace — a CLOCK. It hears nothing. | a gap drawn once, 2.5 … 6 s, kept within ± 8 % |
| **approaching** | on its target's onset it waits a beat, then one sound | the beat 300 … 900 ms · never within 400 ms of its own last |
| **close pass** | just AFTER an onset — or a BET: the target's next onset predicted from its last two, the sound just BEFORE the prediction | after 60 … 150 ms · the bet 40 … 120 ms before · half and half · never within 25 ms of another's sound |
| **break and rejoin** | silence; then it enters just after a cluster has broken up, and keeps its own pace | a cluster = 3 sounds of 2 players inside 1.5 s · broken = nothing for 450 ms · in within 40 … 220 ms · with no cluster: at the last third |
| **a change** | each decision a coin weighted by the place in the container — the state before at its start, the state after at its end | — |

**Three things the rules needed to be playable at all** *(found in the building; RUNNING_LOG §189)*:
- **an answer stops.** Two close-passing players who answer each other answer for ever. So an answer to an answer (to an answer) is not answered: a seed gives a flurry, then quiet.
- **an unprompted sound.** Listeners who only answer fall silent together. A listener with nothing to answer for a while (approaching 2.5 … 6 s · close pass 0.9 … 2.4 s) plays one sound on their own — "choose a player or a type of sound": who hears nothing chooses again.
- **a cluster, defined** — the table's numbers.

**THE BET IS THE METAPHOR.** A computer player cannot see a player breathe; a prediction from what it has heard is all the anticipation it has — and the simulated five are given no more. A far-apart player is a clock: the bet HITS. A close-passing player is not: the bet MISSES — an air shot, alone in the gap, which the others then answer. *Predictability decays as the bodies approach* — by the rule, not by decoration. The engine's window says each bet's outcome.

**How they hear — said twice, as every electronics object is (D10):**
- **in the simulation (`ear: sim`):** the page tells the engine each simulated note as it is about to sound (`/le/onset … sim 1`).
- **in concert (`ear: mic`):** the engine listens to each player's microphone (the onset probe). *In the simulation that microphone is the rack's send, so the concert's road can be heard at home — NOT YET: the probe reports a rise out of silence and will miss an attack over a ringing sound; an attack detector comes before a rehearsal (the engine's NITS).*
- They also hear EACH OTHER: the engine tells them of each other's sounds as it plays them.

**In the score:** a PERFORMER brick a container (`◍ e1 · close pass → perc · 20.0 s`) — the engine's fifth object (`electronics/score/le_performer.js`). Its panel: Player · State · Listens to · Silence · Dynamic · Hears · the palette. One message at the brick's start; from there the ENGINE decides, sound by sound, and its window says why (`e1 · close pass · just after perc (+112 ms) · bcl-impulse-1~icy2-tail`).

---

## 5. The simulation in the composer score *(BUILT 2026-10-06 — RUNNING_LOG §190 · §191; unheard)*

- **The section is a builder's score:** `node tools/build_three_body.js --seed N [--replace]` → `scores/three-body.json`. Another seed is another section; the same seed, the same section.
- **The five players' containers** are labelled zones at the top of their lanes — the ROUGH SYMBOL: the state's name, whom it listens to, its length, its hexagram; a colour a state (grey far apart · pale a change · blue approaching · red close pass · purple break and rejoin).
- **The five are simulated TOGETHER** (`score/public/three_body_sim.js`): the same four rules; what one plays the others hear. Each onset is a NOTE — 150 ms, at `f`, **one of that player's own impulse sounds from the opening** (the techniques and keys of `piece-sec01-a`'s tagged notes). A note's colour is its state's; its performance note says why it is there (`close pass · just after vc`).
- **What comes out at seed 1:** 2:31 · 289 notes · the arch of § 3. **Since DEC-37 (2026-10-06):** 1:50 at seed 165 — the fit to 110 s from seed 1 — · 201 notes · the five's attacks from THE IMPULSE BANK (`scores/impulse-bank.json`: 68 impulses, a wider pitch variety, `bank/impulse_bank.json`), the computer players' sounds from its processed versions once his pass has made them · one ten-second window near 70 s with no note at all — every player's break silence at once, the fling.
- **What the simulation is NOT:** the five do not hear the computer players (their notes are written before the engine plays); they do not see each other (a real player will anticipate by sight — the simulation's bets are blind); a "type of sound" as a target is not modelled (a target is a player, or the cluster).
- **To hear it:** the engine restarted (`start_electronics.bat`) · F5 · File ▾ → Experiments → `three-body` · play from 0.
- **To move a number:** `bank/three_body.json` → `node tools/build_three_body.js --seed N --replace` → File ▾ → Reload. No engine restart: the rules and the palettes travel in the bricks.
- **The check:** `node tools/three_body_check.js` (the coins, the roll, the score, the notes, the bricks under a stub window).

---

## 6. The record

RUNNING_LOG §183 (the reading of piece #2 · the three-player finding · the physics) · §184 (the metaphor extended · Wolff · the dictionary) · §185 (the four states decided · the form · the top line) · §186 · §187 (the form settled · the plan) · §188 (the roller) · §189 (the computer players' rules) · §190 (the simulation · the brick) · §191 (the section · the proofs). For the paper: the players' instruction and its reasoning are this piece's; the electronics' algorithm, once built, is the engine's as well.
