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
- **The length: under three minutes is better — judged from the simulation and its sound** (*his word*). The end cap absorbs the difference: every player's last container, FAR APART, runs to the section's end.
- **The AI's proposal for the ranges (nothing rolled yet; his to move after the simulation):**
  - far apart (the first) — 20 … 35 s (the calm must be long enough to be heard as calm)
  - a change — 5 … 12 s (the one into the break shorter, 4 … 8 s: the fling is quick)
  - approaching — 20 … 35 s
  - close pass — 10 … 20 s (short: it is the moment)
  - break-and-rejoin — a silence of 4 … 8 s, then 8 … 16 s of rejoining
  - far apart (the last) — to the end
  - the sum of the eight rolled containers: 81 … 158 s, so a section under three minutes with its end cap.
  - a roll = one hexagram (1 … 64) per container, seeded, mapped across its range; another seed, another section.
- **The end cap is free:** the section ends with every player in FAR APART.
- **Open, for step 2's talk:** whether the roll is constrained so that a close pass always finds company (another player passing or approaching at the same time), or left free — a player passing alone follows a type of sound, or the electronics.

---

## 4. The electronics — three players on the same orbit *(to design; the language here when it is)*

His word: *"let's design an algorithm for the electronics to follow. Let's consider them just three players, drawing on the available impulses plus effects — so they'll be processed impulses."*

- Three computer players, each in one of the four states, on their own rolled containers.
- Their sounds: the bank's impulses and their variants (`bank/presets.json`).
- What each state means for a computer player — its listening, its pace, its pull, its bet, its break — is laid out in **`PLAN.md` 14.4** (2026-10-06, his "b … write out the plan"): THE EAR is the engine's onset probe in concert and the page's `/le/onset` in simulation — one stream (D10); THE PERFORMER (`electronics/sc/performer.scd`) runs a container from one message, `/le/performer`; far = its own pace · change = the next rule taking over by a rising coin · approaching = a target's onset + a beat (300 … 900 ms) · close pass = after (60 … 150 ms) or a BET before the predicted onset (40 … 120 ms; a miss beyond 250 ms is an air shot), never within 25 ms · break-and-rejoin = silence, then entry when the cluster's density falls. The sounds a PALETTE per computer player (two players' impulses and their variants). The machinery is the engine's; the numbers and the palettes are this piece's, in `bank/three_body.json` `electronics` (THE SORTING). This section is filled from what is built.

---

## 5. The simulation in the composer score *(to design)*

- The five players simulated on their lanes, each on their rolled containers, each state a behaviour; the electronics' three players live from the engine.
- Laid out in **`PLAN.md` 14.5** (2026-10-06): the five simulated TOGETHER by a discrete-event run under the same four rules (`score/public/three_body_sim.js`, pure), each onset a NOTE on the player's lane in one of the player's impulse techniques, its role written on it; the three computer players live from the engine, hearing the notes as `/le/onset`; the section a BUILDER's score — `node tools/build_three_body.js --seed N` → `scores/three-body.json`, another seed another section; no page button yet. The containers (14.2) are rolled by a seeded hexagram per container, a close pass always with company (his "b"). This section is filled from what is built.

---

## 6. The record

RUNNING_LOG §183 (the reading of piece #2 · the three-player finding · the physics) · §184 (the metaphor extended · Wolff · the dictionary) · §185 (the four states decided · the form · the top line). For the paper: the players' instruction and its reasoning are this piece's; the electronics' algorithm, once built, is the engine's as well.
