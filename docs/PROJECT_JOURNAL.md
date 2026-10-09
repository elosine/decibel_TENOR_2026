# PROJECT JOURNAL — decibel_TENOR_2026 (the Decibel piece)

> One file. Seven sections. Everything important lives here.
> §2 is read at every session start — keep it ~40 lines; trim old sessions to one line each.
> The lab journal (`RUNNING_LOG.md`) is the raw trail underneath; this is the curated state.

---

## §1 Quick-Start

- **The piece:** for the Decibel ensemble — bass flute · bass clarinet · viola · cello · percussion · electronics, NOT
  FINAL (D2) · written for the TENOR conference's call (the AI has not read it) · **the title: _Approaching_, TENTATIVE** (2026-10-09, DEC-87); the file names below unchanged
- **Lineage:** composition #7. Follows #6 `septet_LGMF_2026` (_Recombination_).
- **The profile** (the protocol's 2.1, v1): copy-forward from piece #6 · both layers · the animated scrolling score (D1)
- **The stack:** HERE and this piece's (container 3 done, 2026-10-04): piece #6's engine copied byte-exact (`c90b768`), proven
  whole, turned to six lanes on 5500 / 5000. Nothing sounds yet (4 · 5); nothing notates this ensemble yet (6).
- **The live electronics:** the shared engine `live-electronics-system`, taken as a git submodule at the engine plan's
  parts 5 · 8 (D4)
- **Libraries:** not chosen — container 4
- **Phases:** 0 setup (the protocol) → 1 compose → 2 notate → 3 performance score → 4 submission
- **The sketch pad** `docs/COMPOSITION_NOTES.md` opens with the five notes he made for this piece while finishing piece #6
  (LG-340 … LG-343 · LG-345, carried at his word 2026-10-04); this piece's own notes are `DEC-N` (D6) — DEC-1 … DEC-3 are his
  three sections. The planning talk behind the piece stays in piece #6's sketch pad: LG-334 (the slate) · LG-348 … LG-351.
- **Reference repos** (read-only): #6 the source of the port · #5 · #4 · #2 · #1 · #3 — consult per named question only.
  What the pieces share: `composition-system/INDEX.md`.

### The names (the protocol's 2.3 — fixed 2026-10-04)

*They take effect when the code arrives (container 3) and move to `docs/NAMING.md` §1 with it. "The AI's" = by the
lineage's pattern (piece #6: `lgmf` · `piece-lgmf` · `septet-lgmf-2026` · `lgmf_rack`), his to reverse.*

| Name | Value | Whose |
|---|---|---|
| the repo and the folder | `decibel_TENOR_2026` — `C:\Users\jwloy\GitHub\decibel_TENOR_2026` · `github.com/elosine/decibel_TENOR_2026` | his (D3) |
| the working title | none yet (his word 2026-10-04) | his |
| the session default (the day-one stub score) | `decibel` | the AI's |
| the piece chain | `piece-decibel` (a save named `piece-…` is the piece); the main notation file `piece-decibel.ir.json` | the AI's |
| the package name | `decibel-tenor-2026` | the AI's |
| the Reaper project guard | `decibel_rack` | the AI's |
| the two ports | the composer score **5500** · the sandbox **5000** | the lineage's rule |
| the loopMIDI prefix | `DEC` — `DECBassFlute` · `DECBassClar` · `DECViola` · `DECCello` · `DECPerc` the shape, named at container 4 (his word 2026-10-04, "a") | his (D6) |
| the sketch pad's note prefix | `DEC-N` (D6); a carried note keeps its `LG-N` | his |

### Where the record of the last start lives

- **Piece #6's start** (the last port, 2026-09-17, before there was a protocol): `septet_LGMF_2026/docs/RUNNING_LOG.md`
  §1–§36 · its PLAN § 0 · `docs/plans/PORT_FROM_TEMPUS.md`. It ran no protocol version and kept no deviations register.
- **This start's own beginning is in piece #6's lab journal:** `#6 §786 … §799` the protocol drafted · `§800 … §804` the
  home made · `§805 … §815` the pre-conversation for the three electronics pieces and the engine's plan · `§816 … §818`
  this piece's 2.1 … 2.5, asked, answered and built from that repo's chat. From there: this repo's RUNNING_LOG §1.
- **The harvest handed to this piece:** `septet_LGMF_2026/docs/HARVEST.md` (56 items; 35 "take now", by container).

---

## §2 Resume Here

**FIRST — HIS STANDING RULE (2026-09-11):** after `/clear` + `/postclear`:
play back, then **STOP and ask**. No edits, no builds, no tool calls beyond the resume
reads. Start only on his word. *(At `/session-start`: orient, agree the agenda, then work.)*

### WHERE THE PIECE STANDS — the end of session 2 (2026-10-09, RUNNING_LOG §289)

*(§2 was rewritten lean at this session end. Session 1's WHAT EXISTS block, the running order in full and all twenty-two checkpoint
blocks of session 2 are kept VERBATIM in `docs/PROJECT_JOURNAL_ARCHIVE.md` — go there by a question, not by habit. The map of every
tool and app is CLAUDE.md § Apps; how each thing was made is `docs/RUNNING_LOG.md`.)*

- **THE PIECE IS ASSEMBLED END TO END — `scores/piece-3BodyRedo.json`** (HIS; in git since 2026-10-09, §291, as saved at 07:44) — **0 → 668.1 s,
  11 min 8 s, five sections:** the opening 0 → 36.9 (six groups of impulses, every return processed) · **the three body problem
  39.0 → 123.3** (shortened 2026-10-09: a NEW TAKE on the same form, UNHEARD) · section 2, the trills and the live petal hits, from
  125.4 · **the drones 210.6 → 414.8** (their end cut by him; a long fade on each track's last drone) · **the beating section
  423.3 → 668.1** (thirty-five pairs in four chords, built by hand from his rules).
- **His piece files, by state:** `piece-sec03-a1` (before the drones' cut) · `piece-sec03-a2` (the cut, the long fades) ·
  `piece-sec04-01a` (+ the beating section at 445 s; the three body at its approved 110 s) · **`piece-3BodyRedo` — the piece now**.
  The beating section alone: `sec04-a-beating`. The built sections the AI's tools make: `three-body` · `drone-section` (tracked).
- **WAITING ON HIS EAR:** the three body problem's new take (39 → 125 s) · the beating section inside the piece · the long fades
  (390 → 415 s) · the bowed crotales' dynamic now that it is wired (SWEEP_LIST #15).
- **PARKED AT HIS WORD — never raised unless he asks:** VOLUME (*"I don't want to mess with volume … the back and forth is very
  troublesome"*, DEC-66) · the audition list (the level's note `docs/LEVEL_NOTE.md` · the feedback on his chords · the drone
  audition files · the throws) · the tracker (built, in the engine — every sine brick of the hand-built section has Follow off).
- **HIS ORDER FOR WHAT COMES NEXT (said at checkpoint #19):** THE NOTATION, then the live-electronics discussion (`docs/NITS.md`: the
  gain structure of the whole piece · a METHOD for the sine's gain in the beating section, his note DEC-64 · the tracker in a hall ·
  the drones live · a mixer for the sound check).

### RUNNING ORDER — THE BRIEF OF 2026-10-04, one line a step (the full text: the archive)

**HOW THIS LIST WORKS:** one step at a time — ► marks the active step, ☑ done; at every wrap the AI states what finished, what is
next, where we are; reorganizations only on his approval.

- **I. THE START** — 1 ☑ the engine copied forward (container 3) · 2 ☑ the instruments (container 4) · 3 ☑ the calibration, for a
  composing demo (container 5) · 4 ◐ the notation SET UP (container 6) — **OPEN, HIS: three calls — the pitch form · the percussion
  staff's line order · the short names** (one edit of `notation/registry/ensemble.json` each) · 5 the composing tools, at need.
- **II. THE ELECTRONICS AND THE MUSIC** — 6 ☑ the seams and the first object · 7 ☑ the rhythm layer (his) · 8 ☑ the mic opening ·
  9 ☑ the return, four behaviours · 10 ☑ the processing (the chain, the processed return, the petals, the petals LIVE) · 11 ◐ the
  level — BUILT, his ear PARKED · 12 ☑ the sine tones · 13 the record, as the work happens (standing) · 14 ☑ THE THREE BODY PROBLEM —
  in the piece, shortened · 15 ☑ THE DRONES — in the piece, the end cut · **16 ☑ THE BEATING SECTION** — 16.1 the tracker built
  (unused by the section as it stands) · 16.2 the generated section SET ASIDE (*"this isn't working. Let's start over"*, DEC-60) ·
  16.3 the balance PARKED with volume · 16.4 his takes — done his way, by hand · 16.5 ☑ in the piece.
- **► 17 THE STRIKES SECTION (section 5) — OPENED 2026-10-09, PLAN.md § 1.9:** 17.1 ☑ the rig BUILT (done but for his ear) · ► 17.2 the
  catalogue decided — from his ear on the rig · 17.3 the section simulated · 17.4 into the piece · 17.5 the concert side (deferred) · 17.6 the record.
- **► POSITION: STEP 17 — 17.1 BUILT; NEXT HIS EAR ON `strike-rig`, then 17.2, a talk.**

### 17.1 THE RIG IS BUILT (2026-10-09, Fable, at his *"go and build as much as possible independently"* — RUNNING_LOG §297)

- **What exists:** the STRIKE WINDOW brick (`W`; `electronics/score/le_strike.js`) · the engine's answer (`electronics/sc/strike.scd`) ·
  the catalogue `bank/strike_responses.json` (HIS data from now) · the rig `scores/strike-rig.json` (his twenty takes, staccato, `f`,
  12 s apart, a window each; every transformation on 2 … 3 strikes, every timing on 4) · the sheet `docs/STRIKE_RIG.md` (what is heard
  when) · `node tools/build_strike_rig.js` · `node tools/strike_check.js` · `electronics/sc/strike_test.scd`. PLAN.md 17.1's AS BUILT line.
- **HIS PART — the engine restarted (its window closed · `start_electronics.bat`; his engine predates `strike.scd`) · F5 · `strike-rig`
  from 0 with the engine up.** Each strike is answered by the electronics: the engine's window says `strike · W3 · 6 onsets heard … →`
  and what it played. Then: keep · drop · a knob — a number in `bank/strike_responses.json` → `node tools/build_strike_rig.js --replace`
  → File ▾ → Reload; one window's own knobs in its panel.
- **Not claimed:** a living engine has never run `strike.scd`; nothing heard; the page not opened by the AI.

### LAST SESSION — S2 · 2026-10-05 … 2026-10-09 (Claude Code — Fable for the talks and layouts, Opus for the builds and wraps; twenty-two checkpoints, one `/session-end`)

- **The piece was composed and assembled, five sections, 11:08** — the opening and its processed returns · the three body problem
  (his performance algorithm from piece #2, re-designed from the physics) · his trills and petal hits · the drones (his `icy`) · the
  beating section (pairs of a held note and a sine).
- **The engine grew with the music** (`electronics/`, pushed to its own repo at each wrap): the processing chain and the plan · the
  level and the bus · the sine · the computer players · the petals live · the tracker.
- **The composing changed hands twice in method:** from builders that roll a whole section (three body · drones) to HIS dictation
  pair by pair (`tools/beat_pair.js`) with rules he states as he hears (`bank/beat_shapes.json`) — and takes of the Strikes drawer
  for the pitches.
- **His words that bind every session, said or said again in S2:** a bare list, plain words, one decision · no testing beyond the one
  proof (D13) · a fault → his screen first · **look in the earlier pieces before proposing a way round a limit** (§3 · 27) · volume
  parked · he keeps his own time (D5).
- **Not done, not claimed:** his ear on the piece as it now stands · the notation · the paper (the record for it: RUNNING_LOG §1 … §289 ·
  `docs/COMPOSITION_NOTES.md` DEC-1 … DEC-80).
- *S1 · 2026-10-04 — the start finished (containers 3 · 4 · 5, 6 set up), the electronics' plumbing laid, the first object end to end.*

### THE NOTATION OPENED — 2026-10-09 (Fable; RUNNING_LOG §299 … §301; DEC-87 · DEC-88; PLAN.md § 2)

- **The title: *Approaching*, tentative** (DEC-87). The strikes (step 17) stand where checkpoint #1 left them — his ear on `strike-rig` when he is at the desk.
- **BUILT 2026-10-09 (Opus, RUNNING_LOG §302), DONE BUT FOR HIS EYE — PLAN.md 2.1 THE LOOK:** (a) the percussionist ONE lane, the eight-line
  staff out — FIVE equal lanes (BFl · BCl · Perc · Va · Vc; "six" was the AI's slip) · (b) the lanes white with a thin grey line between them
  (his "a") · (c) the staff a 0.25 s snippet at the start, then back for the beating section's whole pages (416 s → the end), the clef only
  with the staff, no other range (his "all defaults"). Seen in the running app by the AI; `check_rules` 31 of 32 (the old red).
- **The two pages for his eye** (the notation app on his 5500, the page picker): **Approaching — the opening (0 … 37 s)** ·
  **Approaching — the beating section (423 … 460 s)**. The notes on them are the stack's DEFAULT signs (GC strike units, heads with a brick,
  white heads with a duration line) — not this piece's design; the electronics bricks are not drawn (no rows).
- **His levers, a number each** (PLAN 2.1's AS BUILT line): the line's thickness and colour · the snippet's length · the staff's range.
- **2.2 THE COLOUR PALETTE — OPEN (DEC-89; RUNNING_LOG §303 · §304):** an official palette for ALL the pieces. His 23 `clr` colours found
  (`bank/palette/clr.json`); LeWitt's six hues and a black read from seven museum photographs (`tools/palette/lewitt_read.py`; the
  photographs gitignored in `bank/palette/photos/`, their addresses in `bank/palette/lewitt_sources.json`); the working page
  **http://localhost:5500/palette/index.html**. NOTHING IS NAMED OR CHOSEN: the palette is his. **§305:** Loopy Doopy (880) read too —
  the orange is a red-orange, about #E04424, his `brightOrange` inside its range; the reading is given two ways (white-wall photographs ·
  all photographs, evened); THE PAINT IS LASCAUX ARTIST (the maker's own page), its six shade names NOT PUBLISHED. **§306:** the readings matched
  against the maker's chart — the yellow named (113 Cadmium yellow medium, firm), the red and the green narrowed to three each, the
  orange a red-orange and not the chart's oranges, the blue and the purple on no chart shade (the page's section 3). Open: his eye on
  the page · then the palette as data in `composition-system`, at his word.
- **THE SOL COLOURS NAMED (§307, DEC-90):** `bank/palette/sol.json` — `SOL_red` #D11520 · `SOL_orange` #E04424 · `SOL_yellow` #F7C40A ·
  `SOL_green` #219D4C · `SOL_blue` #186DBF · `SOL_purple` #5F4296 · `SOL_black` #151415; the AI's picks from the reading, his to move.
- **2.3 THE LANGUAGE — OPEN (DEC-90; RUNNING_LOG §307):** the piece's material is a variation of Braxton's Language Music — a BADGE (the
  format of piece #1's flocking badge: 36 px rounded square, #2d3748), a SYMBOL and a COLOUR for each of HIS SIX TYPES: ► short attacks ·
  trills · accented long tones · multiphonics · the acoustic beats (a name wanted) · scattered strikes — ONE AT A TIME. The working page
  **http://localhost:5500/language/index.html** (`bank/language/language.json` → `node tools/language/build_page.js`): five candidate
  signs for the short attacks, each in eight colours. Open: his choice of sign and colour · the beats' name (Lucier: "beats" ·
  "audible beats" · "interference patterns").
- **HELD at his word:** 2.4 the mic opening. **PARKED:** 2.5 the sine's sheet (drafted from the lineage, §301 — "will be different").

### NEXT UP

His eye on the palette page (2.2) and on the two score pages (2.1 as built); then, in his order and at his word, 2.3 the language · 2.4 the
mic opening — each a talk, then a device sheet. Do not present the parked list.

### CHECKPOINT #1 OF SESSION 3 *(2026-10-09, Fable — mid-session checkpoint; written for a session that has never seen this chat)*

**His word at the checkpoint:** *"I'll listen and give feedback when I get back to desktop, just take note on workflow to finishing section
that I can call on when I am ready to resume"* — so: NOTHING IS IN HAND until he is at the desk and has heard the rig. Then the
workflow below, step by step, on his word.

- **The task and its state:** section 5, THE STRIKES — PLAN.md § 1.9, running order step 17. **17.1 THE RIG IS BUILT** (RUNNING_LOG
  §297; the engine's §63) — done but for his ear; NO ENGINE HAS RUN `electronics/sc/strike.scd` (his engine predates it).
- **The latest deliverable:** `scores/strike-rig.json` (tracked — the builder's) + `docs/STRIKE_RIG.md` (what is heard when) · the
  catalogue `bank/strike_responses.json` (HIS numbers from the first one he changes) · the brick `W` · the tools
  `tools/build_strike_rig.js` · `tools/strike_check.js` · `tools/strike_take.js`.
- **THE NEXT CONCRETE STEP — HIS, at the desk:** close the engine's window · `start_electronics.bat` · F5 in the composer page ·
  open `strike-rig` · play from 0 with the engine up. The engine's window says each answer (`strike · W3 · 6 onsets heard … →`).
  **Then the AI asks, in ONE line, what he heard.** A fault = his screen first (the engine's window), never "restart it".
- **Resume reads:** `docs/STRIKE_RIG.md` (the table of what he heard when — to read his feedback against it). Nothing else beyond §2;
  the build's record is RUNNING_LOG §297 and goes there by a question only.

**THE WORKFLOW TO FINISHING SECTION 5 — his note to call on (the running order's 17.2 … 17.6; PLAN.md § 1.9):**

1. **His ear on the rig** (above). His feedback per window: keep · drop · a knob. Knobs: a number in `bank/strike_responses.json` →
   `node tools/build_strike_rig.js --replace` → File ▾ → Reload (no engine restart); one window's own knobs in its panel (Rhythm ·
   Timing · Seed · Gap · Level · Deal · Processed · Players · Samples). A second rig on other takes or another seed: `--seed N` ·
   `--takes …` · `--every N`.
2. **17.2 THE CATALOGUE DECIDED — a talk (Fable):** what he keeps, drops, renames; his own transformations and timings added; the
   file his. The AI writes the item's sub-steps as the talk goes (the planning method), then builds the knobs on Opus if any.
3. **17.3 THE SECTION SIMULATED — a talk, then a build:** the come-backs — the field `answerOf` is already on the brick and in the
   engine (an earlier strike's rhythm at a later window's time); to decide: the rule for WHICH earlier strike comes back and WHEN
   ("density or something", his; once or more than once; a loud one returning after a soft one); the windows notated or free (what
   "GCs" are — his word, unresolved); the section rolled from a seed (a builder on the pattern of `build_strike_rig.js`: his takes or
   new strikes, the windows, the come-backs), `--replace` · a check · a sheet; heard; re-rolled.
4. **17.4 INTO THE PIECE:** `node tools/insert_section.js --from <section> --into piece-3BodyRedo --at <s>` — where it sits his;
   then `tools/shift_after.js` if something must move.
5. **17.5 THE CONCERT SIDE — later, with the live-electronics discussion (`docs/NITS.md`):** the attack detector on the pooled
   microphones (the probe hears a rise out of silence only) · the recording module (each player records their impulses before the
   concert; the hundred the backup).
6. **17.6 THE RECORD:** PERFORMANCE_NOTES — a row for the window (strike here, once, freely or as written; the electronics answers after
   you; it may bring an earlier strike back) · the device sheet when the notation comes.

**Decisions pending him:** what he heard · "GCs" · 17.3's come-back rule.

**DELIBERATELY UNCOMMITTED — one, his:** `scores/sec05-strikes-a.json` (his section 5 experiment of the morning: `strikes01`, staccato,
`f`; untracked, his to commit).

### OPEN AT SESSION END *(S2, 2026-10-09, Opus — written for a session that has never seen this chat)*

- **The three body problem in `piece-3BodyRedo` is a NEW TAKE** (seed 165, the ranges scaled — `bank/three_body.json`; 84.3 s, 177
  notes). The take he approved (*"that is good"*, 110 s) is inside `piece-sec04-01a` and the files before it, and is
  `scores/three-body.json` one commit back. If he prefers the old: `piece-sec04-01a` is that piece.
- **A change to a built section in the piece:** rebuild the section's own score, then
  `node tools/insert_section.js --from <section> --into piece-3BodyRedo --at <its tag> --replace` — the tags now: `three-body@39` ·
  `drone-section@209.307` · `sec04-a-beating@419.307`. A change of LENGTH before something: `node tools/shift_after.js`.
  A change he makes by hand in the piece stays in the piece and is lost by a `--replace` of that section.
- **The beating section's levers:** `node tools/beat_pair.js` (its header lists the modes: `--roll` with `--pitches` or `--take … --n` ·
  `--relevel` · `--regap` · `--droplast` · `--droptake` · `--dropat` · the dictated form); the rules `bank/beat_shapes.json`. Three
  pairs of the chord `beating03` remain (viola G#4 · clarinet F#2 · flute D#3) — flagged to him, unanswered. The bass flute's first
  three pitches (E5 · F5 · E5) were the AI's stand-in — he said nothing against them.
- **THE PAGE:** it shows its WORKING COPY — after a tool writes a score, File ▾ → Reload; it reads `bank/presets.json` and its own
  scripts only at F5. The tools that write his scores take the NEWER of the save and the working copy as their base.
- **HIS ENGINE** was the one of 2026-10-08 20:44:34 at the wrap and has everything built (nothing in `electronics/` changed after the
  tracker). After a restart of the machine: Reaper first, then `start_electronics.bat`; the engine's start says if its clock is wrong.
- **The rack:** he raised the crotales' fader by hand (§274) — `bank/trims.json` no longer holds it; the gain pass's.
- **Five working copies hold edits their files do not** (`node tools/unsaved_check.js`): `audition-100-s1` · `audition-30` ·
  `curve_practice` · `workshop-bfl-slap` (old, of 2026-10-06 … 07) and `sec04-beating-a` (never saved — the first name of the
  beating score). His to Save or Reload; none is the piece.
- **`docs/SWEEP_LIST.md`:** #15 fixed, his ear open; the earlier open rows as they stand there.
- **CLAUDE.md's "State of the piece" has grown very long** (it is loaded in every session). Offered to him at this wrap: a rewrite of
  it to a page, the history left to the logs. Not done without his word.

**NEXT STEPS · MODEL · CLEAR** *(the running thread — THE RHYTHM, CLAUDE.md. Keep current.)*

| # | Step | Model | Clear first? |
|---|---|---|---|
| ☑ | PLAN.md 2.1 THE LOOK — built 2026-10-09 (§302): five lanes · the lane line · the staff only where it plays · the clef with it | Opus | — |
| **►** | **HIS EYE on the two pages (the opening · the beating section); a number moved if he says so; then 2.2 the colour palette · 2.3 the language · 2.4 the mic opening, in his order (each a talk, then a device sheet)** | **Fable** (the talks, the sheets) · Opus (a number, a build from a sheet) | a clear before the first talk is cheap: the docs carry everything |
| — | his ear on `strike-rig` (the engine restarted · F5 · from 0) — at the desk, his time; then 17.2 (journal §2's checkpoint #1 block) | Fable (the talk) · Opus (a fault, a knob) | — |
| — | his ear on `piece-3BodyRedo` (the three body's new take, 39 → 125 s; the whole piece) — at his word | Fable | — |
| — | THE NOTATION — container 6's three calls (his), then a DEVICE SHEET per sign (`docs/PLANNING_METHOD.md` § THE DEVICE SHEET; `docs/PERFORMANCE_NOTES.md`, a row per glyph): the mic opening · the return · the petals · the drones' duration line · the sine's window · the three body's containers | Fable (the design) · Opus (the builds) | clear between sheets |
| — | THE LIVE-ELECTRONICS DISCUSSION — after the notation, his order (`docs/NITS.md`, its blocks) | Fable | clear |
| — | THE PAPER — his; the record is the two logs | — | — |
| — | The parked list — only at his ask, the bare list first | Fable (the talk) · Opus (a knob) | — |

**Open questions:** Q1 — the ensemble: the call has not announced the final instrumentation (his to check; D2) · Q2 — the title: *Approaching*, TENTATIVE since 2026-10-09 (DEC-87; the cover takes it at 8.6) ·
Q3 — section 3's electronics (the stacks): in the parts, or only in the conductor's and the presentation score? (*"I'm not sure"*,
DEC-4) · Q5 — the three notation calls of container 6 · **Q8 — a wind's bend in the beating section:** the recipe gives a wind one
semitone (the bass clarinet at F2 tops at 5 beats a second) and the simulation bends UP where a wind lips DOWN — for the notation
and the performance notes, his · **Q9 — the bowed crotales:** re-bowed every ~6 s under a sine that sounds through the gaps — as he
wants it, or the sine breathing with the bow (the tracker)? · *(answered: Q4 the percussion · Q6 OSC through the score server · Q7
"petals")*

**Blockers:** none.

**SINCE THE SESSION END (2026-10-09, RUNNING_LOG §290 · §291; DEC-81):** his 60 marimba strikes (`scores/strikes.json`, his) are in
the strike bank — `bank/scattered_strikes.json`, by `node tools/strike_db.js --score strikes`; the Strikes drawer reads it live
(its `↻ db`). Not seen in the running page by the AI.
**THEN (RUNNING_LOG §292; DEC-82): SECTION 5 BEGUN AS AN EXPERIMENT — `scores/sec05-strikes-a.json`** (his, untracked, made at his
word): his take `strikes01` at 2.0 s, in the STACCATO set, written `f` — by the new `node tools/strike_take.js` (the drawer's own
code, run without the page; CLAUDE.md § Apps, HIS STRIKES). He has twenty takes `strikes01 … strikes20`; 01 … 14 were saved in the
ordinario set — the tool presses staccato at the insert, his takes are untouched. **Read as ONE take (his "Strikes 1"); the other
nineteen at his word.** Not opened in the page by the AI.

**DELIBERATELY UNCOMMITTED — NONE since 2026-10-09 (RUNNING_LOG §291), at his word *"can you commit and push"*:** the thirteen that
were his and unstaged are IN GIT as he had saved them — `scores/strikes.json` · `scores/piece-3BodyRedo.json` (THE PIECE) ·
`scores/piece-sec04-01a.json` · `scores/piece-sec03-a2.json` · `scores/piece-sec03-a1.json` · `scores/piece-sec02-a1.json` ·
`scores/sec04-a-beating.json` · `scores/drone-start-mics.json` · `scores/curve_practice.json` ·
`scores/temp01new_cello_bass_flute_perc_25.72.json` · `bank/panel_snapshots.json` (his takes) · `bank/samples/index.json` ·
`reaper/decibel_rack.rpp`. **The rule is unchanged: a file he saves AFTER this is his again — dirty at a resume is his live work, and
it is committed at his word, never swept in.** Untracked since: `scores/sec05-strikes-a.json` (his section 5 experiment, §292). The five working copies of `unsaved_check.js` stand as they were (gitignored; his to
Save or Reload).

**Standing warnings for this repo:** never bind **5400 / 4900** (piece #6's) or **5300 / 4800** (piece #5's) · piece #6 holds
uncommitted files that are his — never stage, move or edit anything there · this repo is PUBLIC — nothing personal lands
here · he keeps his own time: no schedule keeping, no route framed around a date (D5).

**Checks this piece owns:** `node tools/palette_check.js` (**151**) · `node tools/roster_check.js` (**310** voices) · `node
tools/model_bank.js --validate` · `node tools/unsaved_check.js` (before a commit of scores) · `node tools/three_body_check.js` ·
`node tools/drone_check.js` · `node tools/beating_check.js` · `node tools/sine_check.js` — each after a change to what it names
(CLAUDE.md's list). THE SHIELD (`tools/layout_shield.js`) before and after any layout change.

---

## §3 Principles

*(Lessons never to repeat. Numbered, append-only. **1–23 are inherited** — one line each here; the full text,
dates and lab-journal sections are in `septet_2026/docs/PROJECT_JOURNAL.md` §3 (1–18) and
`septet_LGMF_2026/docs/PROJECT_JOURNAL.md` §3 (19–23). Most bite only once the code is here.
Verified in this repo only when they bite.)*

1. Check Reaper input monitoring before blaming the instrument (#3 P1).
2. When a working reference exists, diff the files; don't iterate guesses (#3 P2).
3. The IR schema is a gate on the file — a new overlay kind enters the schema in the same
   commit or the page is rejected and deleted. Snapshot first (#4).
4. Never `git add -A` — stage explicit paths (#4 D30).
5. Only delete IDs you created in the same breath (#4).
6. MIDI thru must never listen to the loopMIDI output ports (#4).
7. Schedule playback with a ~150 ms lead (#4).
8. Object ids are per save — never delete or replace by id alone (#5).
9. Verify against the composer's running server; never hold his port, never save from the
   AI's pane; a hidden pane never fires `requestAnimationFrame` (#5).
10. When downstream meters freeze at identical values, dump mute / solo / routing first (#5).
11. Learn a plugin's vocabulary by diffing the GUI's change, not by guessing from strings (#5).
12. Measure the layer that reaches the INSTRUMENT, not the layer you built. Print the MIDI (#5).
13. Never queue what cannot be un-queued; Chrome does not implement `MIDIOutput.clear()` (#5).
14. Where a note is started by one piece of routing, it is stopped by the same one (#5).
15. Write the assertion after the number, never before it (#5).
16. Build on a `zz-ai-` copy from the FIRST command, not the second (#5).
17. The notehead's left edge is the moment; the go line marks displacement (#5 D49).
18. A checker that tests one half of a rule is worse than no checker. When a rule names two
    classes, the gate tests both or says in writing which it does not (#5).
19. A copy-forward carries the standing RULES whole, not only the code — check the new CLAUDE.md
    against the source's, heading by heading (#6).
20. Prove the copy whole BEFORE changing it — commit the byte-exact copy, run everything against it,
    then patch; after that every red has one possible cause (#6).
21a. The file, the app's intent and the rack's layout are each necessary; only the RECORDING of the
    rack is the proof. When he says it sounds wrong and the text says it is right, record the rack (#6).
21b. `cmp` proves a file was copied; it cannot prove the LIST was right. Run what you copied (#6).
    *(Piece #6's journal numbers both of these 21; the numbers after them are kept as they stand there.)*
22. A rule that names a part by ID must be checked against the parts that EXIST — when a palette
    changes, grep the registries for the old instrument names, not just the code (#6).
23. When a measurement and an assertion disagree, find out which is wrong before editing either (#6).

*This piece's own:*

24. **An engine is a server WITH its owner.** When a parent can die and leave its child (sclang → a `cmd` wrapper → scsynth), "is it
    up?" is a question about the OWNER, not about a process name on a port — and a sweep that compares the wrong generation is a
    silent no-op. Look the chain up before believing either answer (RUNNING_LOG §64).
25. **Say what the thing IS, in concert terms, before its plumbing.** After a day of ports, routes and a `.bat` he had to ask:
    *"Is this just the simulation engine?"* The first sentence about any electronics object is what it does on stage; then how it
    is simulated (D10); the ports last (RUNNING_LOG §64).
26. **A tool run as a CHECK can write.** `notate_section.js` put its page in `notation/ir/` and the picker whatever `--out` said.
    After any check, `git status` before the next step (RUNNING_LOG §64).
27. **LINEAGE FIRST. A wall in an inherited mechanism has usually been crossed in an earlier piece** — read how the pieces before
    did it (their docs, then this repo's own copy of the machinery) BEFORE proposing a way round. The cello's bend seemed capped at
    a semitone; the AI offered four workarounds over two turns; the string quartet's re-key (piece #1) was already in this repo,
    unused by one tool. His words: *"I'm not sure why you're not looking in the other repos … don't reinvent the wheel."* Asked "how
    did we do it": a short list of what will be checked, then the report (RUNNING_LOG §263).
28. **A sound stage is proven on the PIECE'S OWN NUMBERS, by one real render MEASURED** — not by its stage's test on small numbers.
    Fifty-four chords were dead under a passing test; a loop never broke at the piece's gain; a partial died under a filter the
    test never reached (RUNNING_LOG §153 · §204 · §205).
29. **An audition is handed over RENDERED.** A variant that has not been rendered is invisible in the page and plays the raw
    sound: three auditions sat unrendered and he judged the dry impulses (RUNNING_LOG §200 · §210 · §212).
30. **A record that holds an ID or an ABSOLUTE TIME travels with its object.** A copy remaps the references inside `properties`; a
    move carries the kept times; before a block is moved, every number in the time range is listed by its field name
    (`tools/insert_section.js` · `tools/shift_after.js`; RUNNING_LOG §286 · §288).
31. **A fix that makes a thing obey its written value changes how it sounds — say the audible consequence BEFORE he hears it, in the
    first lines.** The bowed crotales began to follow their dynamic; he met it as *"a sudden drop in volume"* and reached for the
    rack (RUNNING_LOG §273 · §274).
32. **The absence of a trace is not a finding.** No `-work.json` was read as "he has not opened the score" — he had heard it
    (RUNNING_LOG §264). A file that is not there says nothing about what he did.
33. **Where several players listen to each other, a section cannot be edited one player at a time.** Shorter containers = the
    ranges scaled and the simulation run again on the same seed (the form kept, the notes played anew) — said to him before the
    work as the one catch (RUNNING_LOG §287).

---

## §4 Decisions

*(Append-only: ID, date, decision, why, what was rejected.)*

- **D1 · 2026-10-04 — THE PROFILE: a normal port.** Copy-forward from piece #6 · both layers (the instrument and the
  score) · the animated scrolling score. His words: *"yes … But yes, normal port"*, after *"we'll just go with a normal
  port for all three"* (`#6` LG-348). Rejected for this piece: the "significantly different type of score" (`#6` LG-339)
  — *"that might be something else"*. *(`#6 §816`; RUNNING_LOG §1)*
- **D2 · 2026-10-03 — THE ENSEMBLE, NOT FINAL: built around the full Decibel ensemble as announced** — bass flute · bass
  clarinet · viola · cello · percussion · electronics. If the call scales it back, the re-orchestration is his. *(`#6`
  LG-334 · LG-348)*
- **D3 · 2026-10-04 — THE REPO: `decibel_TENOR_2026` · PUBLIC · PUSH AFTER EVERY COMMIT.** His *"all a"* to the three
  questions of the protocol's 2.2, never inherited. The name by the pattern of `septet_LGMF_2026` — who it is for, the
  occasion, the year — so it holds if the ensemble changes; `for_decibel` was the other candidate. *(`#6 §817 · §818`)*
- **D4 · 2026-10-03 — THE LIVE ELECTRONICS COME FROM THE SHARED ENGINE,** `live-electronics-system`: a module set with
  named seams, additive, its files living once on disk inside every piece (a git submodule); built in the first piece
  where he hears it, landing in the engine as built. Taken at the engine plan's parts 5 · 8, not at set-up. Rejected:
  inside the first piece and copy-forwarded · a copy back by hand · a Windows junction · the whole stack moved into one
  shared repo. *(`#6 §806 … §808`; LG-349 · LG-350)*
- **D5 · 2026-10-03 — HE KEEPS HIS OWN TIME.** *"I don't need AI to do any schedule keeping for me or deadline watching …
  I'll worry about the order in which things are meant to be done in."* The AI gives the parts, the dependencies and what
  is efficient; never a route framed around a date. *(`#6 §806`)*
- **D6 · 2026-10-04 — THE PREFIX `DEC`:** the loopMIDI ports (`DECBassFlute` …, named at container 4) and the sketch pad's notes
  (`DEC-N`); a carried note keeps its `LG-N`. His *"a"* to `DEC` · `DB` (reads as double bass) · his own. The title: *"none yet"*.
  The notes carried into the sketch pad: the five musical ideas (*"a"*: LG-340 … LG-343 · LG-345). *(RUNNING_LOG §2)*
- **D7 · 2026-10-04 — HOW THE ENGINE SITS IN THIS PIECE: a git SUBTREE at `electronics/`, not a submodule — the AI's call at his
  word.** His word: the separate repo must not become *"an extra administrative burden"*; *"I would like AI to sort that out"*; open
  to rethinking the decision. The call: the engine's code lives in this repo's `electronics/` as ORDINARY FILES — nothing for him or
  a cold session to do beyond a normal commit, a clone whole — and the AI pushes that folder to `live-electronics-system` at every
  wrap (`git subtree push`; a wrap missed costs nothing — the next carries everything); the other pieces take it by `git subtree`.
  It keeps `#6 §806`'s decision (one engine, its own repo, built in the first piece) and replaces its one precision (`#6 §807`, "the
  files live once on disk" — a submodule): a submodule needs two commits per change and a pointer kept in step by every cold
  session, which is exactly the burden he named. Rejected: the submodule as planned · everything here and a split later (the
  engine's repo would hold no code for weeks; the subtree gives it the history as it happens). Proven at the first push (the engine
  plan's part 8). *(RUNNING_LOG §2; the engine's RUNNING_LOG §4)* **PROVEN 2026-10-04 (RUNNING_LOG §51 · §52): seated by `git subtree
  add` (no squash), pushed as a fast-forward `467dc7e..3ce152c`. Learned: the engine arrives WHOLE — its docs live at
  `electronics/docs/` and are edited HERE; the stand-alone clone is a mirror.**
- **D8 · 2026-10-04 — THE STAFF SYSTEM: NO ELECTRONICS LANE, NO ELECTRONICS STAFF — THE SIGN OF ORIGIN.** His words (DEC-4): *"I don't
  think there needs to be an electronics lane. We can just incorporate the electronics per instrument lane because they'll always be
  based in some way or shape or form on the performer's own input … we just need to get the graphic symbols that say this is
  electronic process sound of this particular instrument's input."* Every electronic sound is drawn on the staff of the player whose
  input it comes from, with a sign that says so; three drawn kinds by device sheet when notating comes — a sign before the note with
  its GC (section 1) · a stack across the staves read as an electronic chord (section 3) · a held chord of freezes as a duration-line
  kind (section 2). Five players confirmed; the percussion's instruments and its one lane or two his, at container 4. Rejected: the
  AI's electronics lane (running order step 1, 6.2). *(RUNNING_LOG §3)*
- **D9 · 2026-10-04 — THE LANES: SIX — THE PERCUSSIONIST ON TWO** (his *"b"* to "one lane or two", asked at the re-palette). In score
  order: **bass flute · bass clarinet · percussion (unpitched) · the pitched percussion lane · viola · cello**; META = 6, the curve
  windows 7 / 8 / 9 over the last three lanes. **Two calls of the AI's inside it, his to reverse:** the PITCHED lane is piece #6's
  VIBRAPHONE lane carried whole (`vibraphone` / `bowed_vibraphone` — its recipe, its second seat, its marks) as the stand-in until
  the instruments talk (4.0) says WHICH pitched instrument; a rename before the first real save costs nothing · the ORDER is the
  lineage's score order, winds · percussion · strings (#5's D10). Rejected: one lane now and a second later (he answered b).
  *(RUNNING_LOG §13)*
- **D10 · 2026-10-04 — THE CORRESPONDENCE RULE: every electronics object is said TWICE — as the engine does it in concert, and as
  the stack simulates it — and the two must correspond.** His words (DEC-8): *"we're going to need to talk in terms of the actual
  performance engine and then how we simulate it. And if those are separate things, so that's fine, but let's make sure there's
  correspondence at least."* Confirmed as a standing decision 2026-10-04 (*"a"*). What it binds: a layout, a SEAMS row and a log
  entry name BOTH halves; where they differ, the difference is ONE named thing (the audio route: the input device · the message
  route: the engine's address). The concert's shape as he has it: the score in browsers on iPads, the engine on a separate laptop
  (SuperCollider; a standalone later; a coordinating performance module later, not now). Rejected: any simulation-only road — the
  first casualty is §56's `DECElec` loopMIDI trigger, which has no concert counterpart. *(RUNNING_LOG §57 · §58)*
- **D11 · 2026-10-04 — THE ENGINE RETURNS ONLY WHAT IT MAKES.** No player's own sound goes to the engine's master by itself: the
  player is already heard in the room (in the simulation, in the rack), and a straight copy two DAW blocks behind is a comb on the
  live sound — in concert, the dry microphone in the PA. A pass-through remains as a ROUTE CHECK alone (`LE_PASS` · `LE_ECHO`).
  **The AI's call at the build, his to reverse** — the plan had retired only the one-second listening aid. Rejected: leaving the
  straight pass-through behind it. *(RUNNING_LOG §64; the engine's §14)*
- **D12 · 2026-10-04 — THE ELECTRONICS' BRICKS ARE ZONES WITH A MODEL OF THEIR OWN** (`elecOpen` the mic opening · `elecPlay` the
  return; `zoneFunction: 'elec'`; the data in `zone.elec`), keys `M` and `R`, the machinery the engine's with a tick of its own.
  Why: the composer tests an object's TYPE by name in some 250 places and has no registry; a zone already draws, selects, moves,
  resizes, saves and has a panel. **THE BANK with it:** the capture runs from the message to the window's end and the engine crops
  to the attack by a rule his ear tunes; a name taken twice — the latest take wins; the cropped samples are COMMITTED, the raw
  recordings are not; a return plays at UNITY on the engine's clock. **The AI's design at his *"a, write it"* (§62), seven places
  moved at the build (§64), his to reverse.** Rejected: a new object type · the crop in Node · a capture scheduled to the brick's
  exact start · the message inside the MIDI tick (a tablet in concert has no MIDI). *(RUNNING_LOG §62 · §64)*
- **D13 · 2026-10-04 — HIS WORD ON TESTING: a build is proven ONCE and stops.** *"no more testing unless absolutely necessary. I'll
  test and troubleshoot when I'm writing, when I'm composing."* With §61's (*"Let's just try to avoid unnecessary testing"* — no
  check that needs his hands unless he asks) it covers the AI's own runs too: no second proof of one claim; a check worth making is
  OFFERED in one line. Faults are found in the composing → `docs/SWEEP_LIST.md`. Not relaxed: a confidence CLAIM must have been
  verified — unverified is unclaimed. *(RUNNING_LOG §61 · §65; CLAUDE.md § THE RHYTHM)*

---

- **D14 · 2026-10-05 — THE LIVE ELECTRONICS IS ITS OWN PERFORMER** (his framework, DEC-9c; RUNNING_LOG §77). The bank's samples are
  its material; its BEHAVIOURS (the anticipation-reaction now; others and the processing later) bring them back in any player's
  lane, processed or not; a lane is only where a return is SHOWN. In the engine: a bank + behaviours; in the page: a brick that
  names a behaviour and its sample. Built as the music asks.
- **D15 · 2026-10-05 — THE RETURN IS ROLLED LIVE, BY THE ENGINE; THE COMPOSER SCORE STAYS STILL** (his correction, DEC-9b; §76).
  The engine decides the stance and the offset at every performance; the page's brick says only "around here" and sends its
  message early enough for a "before"; the simulation runs the same dice (D10). The dials' VALUES are the piece's
  (`bank/elec_route.json` `return.ar`, lettered A … F so he can name one by ear); the algorithm is the engine's. D: no leanings.
- **D16 · 2026-10-05 — THE PLAN'S RENDERS ARE NOT COMMITTED** (his word "b" at checkpoint #8; RUNNING_LOG §148 · §149). A variant of the
  processed return (`bank/samples/<sample>~<key>-<env>.wav`) is a RENDER — re-made from `bank/presets.json` at every pass and every
  "render all planned", with fresh draws — and is gitignored; it stays on his disk and is never deleted. COMMITTED, as before: the
  captured samples, the workshop stages (`<root>~<n>.wav`), the index. Why: one evening of throws made 632 of them, 95 MB, and a
  push is never taken back. What is kept of a deal is its CASTING (the shelf's `deals`, the frozen score), not its take.
- **D17 · 2026-10-06 — THE LEVEL: TWO STAGES WITH A MODE EACH; THE DEFAULTS `as played` · `normalized`; THE BUS IN SUPERCOLLIDER** (his letters "A" · "a" · "yes, the order is good"; RUNNING_LOG §154 … §159; DEC-33; PLAN.md § 1.4). Level is two things — the DRIVE into an effect and the DYNAMIC out to the audience — and each has a mode, which is where player agency lives: `as played` (the capture's measured loudness leads) · `written` (a mark on the players' own 4 dB ladder overrides) · `relative` (as played ± steps, a floor / ceiling); the drive also `normalized` (one excitation, the effect always speaks) · `boost`. An unmarked return comes out `as played`; an unmarked processed variant is driven `normalized`; a mark overrides anywhere. The mastering bus is the engine's, in SuperCollider — nothing added to the install, a few dozen UGens; the VSTPlugin extension a possible upgrade in the same slot. Reaper as the bus rejected (absent in concert; D10, one road); Web Audio rejected for the audio path (Chrome in the chain); a separate DSP host rejected as the default (a second app and inter-app routing on an unknown machine). What is generic — the measure, the ladder's machinery, the brick's field and message, the envelope, the drive, the bus, the input chain — is the engine's; the numbers and the marks are the piece's.
- **D18 · 2026-10-06 — THE COMPOSING BANK IS NOT COMMITTED** (his word at the postclear, RUNNING_LOG §193: *"can we keep a bank of samples just uncommitted here in the repo?"*). Every sample under `bank/samples/` stays on his disk from here on — the batch of DEC-37 and whatever he captures while composing (`.gitignore` `bank/samples/*.wav`); the index IS committed, the record of what the bank held. **AMENDED the same day (RUNNING_LOG §196):** the 60 samples that were tracked are UNTRACKED too (`git rm --cached` — on his disk still, in the history still; D16's way for the renders) — his composing re-captures them (three changed under a pass within the hour) and a tracked sample would show as modified at every wrap. The AI's call, his to reverse with `git add -f`. The concert's bank is the recording session's (PERFORMANCE_NOTES row 12), a decision of its own then. Why: the repo is public and a push is never taken back; the composing bank grows by the hundred.
- **D19 · 2026-10-06 — THE THREE BODY PROBLEM: ONE ORBIT A PLAYER, ROLLED BY HEXAGRAMS; THE ELECTRONICS THREE MORE PLAYERS WHO LISTEN** (DEC-36 … 36e; RUNNING_LOG §183 … §198; PLAN.md § 1.6; `docs/THREE_BODY.md`). His performance algorithm from piece #2 re-designed from the physics: four states in his sentences, the change its own container, a close pass always with company (his "b"); the computer players decide sound by sound from what they hear — the engine's onset probe in concert, the page's told onsets in simulation (D10). Heard: *"that is good"* at 110 s. Rejected: fixed, composed entries for the electronics (no listening); a single shared orbit.
- **D20 · 2026-10-07 — A PETALS RETURN AT ITS OWN MIC OPENING IS MADE LIVE** (DEC-46; RUNNING_LOG §230 … §238; PLAN.md 10.14). The engine renders a processed return offline ~3 s after its capture — right for a return placed later (section 1, kept), wrong AT the opening: there the player's microphone goes through his resonators in real time, the level by the gains of the same variant's latest render. Rejected: a faster offline render (never fast enough at the opening); the hit played raw on the first pass.
- **D21 · 2026-10-08 — THE SINE BRICK IS THE SINE'S SCORE AND THE PERFORMER'S WINDOW; NO PITCH TRACKING** (DEC-58 … 58c; RUNNING_LOG §255 … §260; PLAN.md § 1.8). The sine holds its written pitch; a gate in a band at that pitch lets it in with the player, it follows their change since entry, holds through a breath, leaves with them — no calibration. BUILT (the tracker); **not used by the section as it stands** (every brick's Follow is off, D22) — a later word of his. Rejected: a pitch follower; a fixed level only (kept as `follow` 0).
- **D22 · 2026-10-08 … 09 — THE BEATING SECTION IS BUILT BY HAND, PAIR BY PAIR, FROM RULES HE STATES AS HE HEARS** (DEC-59 … 78; RUNNING_LOG §262 … §286). A PAIR = a player's held note and a STATIC sine at the same pitch, the note bent (on the crotales the sine glides) so the pair beats along a SHAPE said in BEATS A SECOND — a difference in Hz, turned into cents at each note's own pitch (the same 8 … 50 cents was 0.3 … 2 beats a second on the cello's D2 and 3 … 18 on a D#5). Three shapes; the pace never faster than 1 Hz per 2.5 s; holds ≥ 2.5 s; the peak 3 … 10; a descent never to the unison; the length the SUM of the parts; the pitches his by hand and from his takes (`bank/beat_shapes.json`; `tools/beat_pair.js`). Rejected at his word (*"this isn't working. Let's start over"*): the builder's rolled section of breathed phrases with seeded bends (`beating-section`, kept, set aside). Volume parked by him; the levels in the score are his ear's on the rack.
- **D23 · 2026-10-08 — A BEND PAST THE SAMPLER'S RANGE IS RE-KEYED — THE LINEAGE'S RULE** (DEC-59b; RUNNING_LOG §263; piece #1's convention, #4's D26, #5 §150). The key moves, the bend is re-based, a 5 ms overlap hides the seam; a bend that fits one neighbouring key is ONE note on that key (D → D# with the wheel full-flat). Built into the sine GO and `beat_pair.js`; the draw is capped by the PLAYER's reach (`playerBendSt`), never by the sampler's. Rejected, each offered by the AI before it looked: the sine moving instead of the cello · a harmonic of the note · a pitch shifter after the sampler · Kontakt's own range.
- **D24 · 2026-10-08 — A PATCH WHOSE DYNAMIC IS THE MOD WHEEL GETS A FLAG OF ITS OWN** (SWEEP_LIST #15; RUNNING_LOG §273): `cc1: "vel"` on the Ricotti bowed crotales — the page sends CC1 at the note's own velocity; `loud` stays `vel`. Rejected: `loud: 'mw'` with the wheel sent for every plain note on a wheel-loud voice — the general cure, which would have changed nine notes of his piece and everything that reads `loud`; filed for the gain pass (NITS).
- **D25 · 2026-10-09 — A SECTION WHERE PLAYERS LISTEN TO EACH OTHER IS SHORTENED BY RE-SIMULATION ON THE SAME SEED** (DEC-79 · 80; RUNNING_LOG §287 · §288): the three body problem 110 → 84.3 s by scaling three ranges — a container's length is its hexagram read across its range, so the form is the same and every container his percentage shorter; the notes played again by the same rules; the rest of the piece moved up as one block (`tools/shift_after.js`). Rejected: cutting each player's containers and sliding their notes (eight clocks: the answers no longer land beside what they answered; the close pass scrambled) · an even squeeze of the whole section (every rhythm a quarter faster).

## §5 Playbooks

*(Mode-specific procedures and gotchas. The last piece's §5 holds the engine's playbooks; bring one
across when its system lands here and is first used.)*

- **THE ELECTRONICS — the routine** *(first used 2026-10-04; the detail is `electronics/docs/SEAMS.md` and CLAUDE.md § Apps)*
  - **A player gets a microphone:** a row in `bank/elec_route.json` `players` (name · track · engineIn · port) → `node tools/elec.js
    route` → HIS CTRL+S in Reaper → the engine started again.
  - **The crop cuts wrong:** a number in `bank/elec_route.json` `bank.crop` → the engine started again → play through the opening.
  - **A new message kind:** the engine `~le.hear(kind, { |le, data| … })` · the page `LE.send(kind, data)` — strings, numbers and
    booleans only; an OSC string arrives in sclang as a SYMBOL.
  - **A new object:** a zone with a model of its own in `electronics/score/le_objects.js`; a new TYPE is the last resort (D12).
  - **Gotchas:** an engine run refuses beside his window — ask him to close it, never end a live engine · a `.scd` parse error
    prints nothing and times out: `node electronics/tools/sc.js run <file> --verbose` · an Event key must not share a name with a
    method (`boot.scd`'s header) · a doubled backslash through the Bash tool arrives as one — a file with backslashes is written by
    the Write tool · the bricks are verified by `docs/VERIFICATION_RECIPE.md`'s last AND SINCE, and only when a claim needs it (D13).
- **THE PIECE'S ASSEMBLY AND A HAND-BUILT SECTION — the routine** *(first used 2026-10-08 … 09; every tool's header is its manual)*
  - **A pair into the beating section:** `node tools/beat_pair.js --score sec04-a-beating --roll --pitches … | --take <name> --n 2
    [--lane …]`; one said outright: `--pitch … --from … --to …`. Its other modes change what is there: `--relevel` · `--regap` ·
    `--droplast` · `--droptake <chord>` · `--dropat <s>`. The rules: `bank/beat_shapes.json`.
  - **A section into the piece:** `node tools/insert_section.js --from <section> --into <piece> --at <s>` (`--replace` swaps the
    section's current state in at its tag). **Everything from a time on, moved:** `node tools/shift_after.js --score … --from … --by …`.
    **A long fade on a track's last drone:** `node tools/drone_fade.js --score … [--render]`.
  - **He names a time read off the page:** it is "about" — find the object that begins nearest it, SAY which one, then act.
  - **Before a cut or a move in his piece:** list what lies there lane by lane (a look, read-only), check nothing straddles the
    cut, keep a copy of the file outside the repo, then write under the name he said.
  - **Gotchas:** the page shows its WORKING COPY — after a tool writes, File ▾ → Reload; it reads `bank/presets.json` and its scripts
    only at F5 · the tools take the NEWER of the save and the working copy as their base (his unsaved edits kept) · a pitch on the
    crotales' lane is the SOUNDING one (the key + two octaves) · a section's copies are told by `properties.section`, a pair's chord
    by `properties.beat.take` · his "p" in the page is velocity 37, not the calibrated ladder's (NITS, the gain pass).

---

## §6 Done

- 2026-10-04 — **0 · container 2** the repo and its kit: the profile, the repo, the names, the method docs carried, the
  record docs from the skeletons (RUNNING_LOG §1; `#6 §816 … §818`).
- 2026-10-04 — **0 · container 3** the engine copied forward: 369 files byte-exact from piece #6 @ `0d70fda`, proven whole, the
  small fixes, six Decibel lanes on 5500 / 5000, provisional recipes, verified in the running app (RUNNING_LOG §6 … §16; D9).
- 2026-10-04 — **0 · container 4** the instruments: nine ports, the rack of sixteen, every lane's recipe, the first sound from the
  composer score (RUNNING_LOG §18 … §43).
- 2026-10-04 — **0 · container 5** the calibration, for a composing demo: sixteen faders, four dynamics curves (§40 … §43).
- 2026-10-04 — **0 · container 6** SET UP: the registry for six parts, the technique keys, a save extracted, drawn, exported (§45).
- 2026-10-04 — **1.1** the electronics' plumbing and THE FIRST OBJECT: the audio route, the message route, the mic opening, the crop,
  the bank's index, the return, the demo — done but for his ear (RUNNING_LOG §47 … §64; D10 · D11 · D12).
- 2026-10-05 — **running order 7 · 8 · 9** the rhythm layer (his), the mic opening in the music, the return with four behaviours —
  six groups of impulses, the opening 0 … 37 s (RUNNING_LOG §70 … §98; D14 · D15).
- 2026-10-05 … 07 — **running order 10** the processing: the chain offline, the process brick, the presets and the PROCESSED RETURN
  dealt through the opening, his `icy` and his petals of resonance in the engine, the petals LIVE (RUNNING_LOG §100 … §238; D16 · D20).
- 2026-10-06 — **running order 11 · 12** the level and the bus (built; his ear parked) · the sine tones (RUNNING_LOG §154 … §181; D17).
- 2026-10-06 — **running order 14** THE THREE BODY PROBLEM, heard (*"that is good"*) and in the piece (RUNNING_LOG §183 … §199; D19).
- 2026-10-07 … 08 — **section 2** composed by him to its end: thirty trills, thirty-four live petal hits (RUNNING_LOG §213 … §239).
- 2026-10-08 — **running order 15** THE DRONES, heard (*"Okay, good"*) and in the piece (RUNNING_LOG §240 … §254).
- 2026-10-08 … 09 — **running order 16** THE BEATING SECTION: the tracker built; the section built by hand from his rules, thirty-five
  pairs in four chords, in the piece (RUNNING_LOG §255 … §286; D21 · D22 · D23).
- 2026-10-09 — **THE PIECE ASSEMBLED END TO END** — `piece-3BodyRedo`, five sections, 11 min 8 s; the drones' end cut, the three
  body problem shortened (RUNNING_LOG §283 … §288; D25).

---

## §7 Human Notes

*(The composer's own to-dos and reminders. Reviewed at session end.)*

- **THE PAPER (2026-10-04):** *"I'll need to create a paper directly after finishing the piece or during it somehow, same deadline. So
  let's keep good journal notes. Like lab notes along the way."* — a standing reminder for this piece; CLAUDE.md carries it.
- **THE PAPER, CORRECTED (2026-10-04, RUNNING_LOG §17):** *"a correction for the tenor call. I'll write one paper talking about both
  the decibel piece and my um, improvisation with live electronics."* — ONE paper, two subjects. The record of the electronics is
  kept so it reads for both: the machinery in the engine's lab journal, this piece's use of it here.
- *(Reviewed at the end of session 2, 2026-10-09 — his word at `/session-end`: "nothing to add from me". Nothing added, nothing
  marked complete.)*
