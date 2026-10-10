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

**► SINCE 2026-10-10 (RUNNING_LOG §365, DEC-137): THE PIECE IS `scores/piece-Draft01.json` (HIS, untracked) — SIX SECTIONS, 0 → 778.73 s, 12 min 59 s:** the five below (to 668.1 s) and SECTION 5, THE STRIKES, 676.9 → 778.7 s — inserted from his `scores/sec05-finalDraft.json` by `node tools/insert_section.js --from sec05-finalDraft --into piece-Draft01 --at 673.966` (the first strike at 677.000 s; a change later: the same command with `--replace`). What is said of `piece-3BodyRedo` below is the piece BEFORE the strikes.

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
- **► 17 THE STRIKES SECTION (section 5) — OPENED 2026-10-09, PLAN.md § 1.9:** 17.1 ☑ the rig BUILT and HEARD · 17.2 ☑ the
  catalogue — answered: whole, each answer rolled (DEC-120) · ► 17.3 SECTION 5B — a … c BUILT (the windows · the form · the cascade), ► d his ear · 17.4 ☑ IN THE PIECE (`piece-Draft01`, the first strike at 677 s — §365) · 17.5 the concert side (deferred) · 17.6 the record (the performance notes' row 18 written).
- **► POSITION: STEP 17 — 17.1 BUILT and HEARD (DEC-115, §339) · 17.2 ANSWERED (DEC-120, §343: the catalogue whole, rolled) · ► 17.3 SECTION 5B — 17.3a … 17.3c BUILT 2026-10-10 (Opus, RUNNING_LOG §346; the engine's §65; PLAN.md 17.3's AS BUILT line), done but for his ear: 50 windows laid in `scores/sec05b.json` (HIS, untracked) by `node tools/strike_windows.js --score sec05b` from `bank/strike_section.json` (his letters, his numbers) — 22 notated · 28 open (each ×2 its strike) · the form 26.8 · 24.8 · 22.4 · 19.0 s, answered 1 · 2 · 3 · 1 times · the cascade on the brick (`elec.chain`) and in the engine (`strikeCascade`) · the sheet `docs/STRIKE_SECTION.md`. **RESTRUCTURED THE SAME MORNING at his word (DEC-121, §347 … §349): the form INVERTED — ×1 · ×2 · ×3 · ×4 rising (16.2 · 19.0 · 21.1 · 22.7 s), a coda ×2 · ×1 (9.1 · 4.9 s), the bare four; the timings weighted by his ear on the rig (the late ones one in ten); the replies PROCESSED ONLY (`samples.raw` false — the engine's new switch); his strikes all STACCATO (`tools/strike_art.js`); 122 answers.** Proven once each side (`strike_test.scd` · `strike_check.js`); NO ENGINE HAS RUN IT, the page not opened, nothing heard. **THEN HIS `sec05c` (DEC-124, §352): thirteen strikes more, 67; the percussionist's strikes varied by `tools/strike_perc.js` (half to the struck instruments, a pitched mallet note in one strike in three — `bank/strike_section.json` `perc`), the new ones staccato and under windows (63, the new ones OPEN); the form the same in seconds. **THEN THE FORM BY HIS COUNTS, AND HIS EAR (DEC-127 · DEC-128, §355 A · §356): he HEARD it — four answers a strike is too dense; the form is 1 · 2 · 3 · 2 · 1 answers on 11 · 20 · 25 · 6 · 1 strikes (`bank/strike_section.json` `stretches.strikes`), 139 answers, laid into `sec05d` and `sec05e`. THE SCORE TO HEAR IS `sec05f` — his save of 5E with the re-orchestration, its answers RE-ROLLED at seed 2 (DEC-131, §359: `strike_windows.js --score sec05f --seed 2 --replace`; another roll = another seed, then Reload). THEN `sec05g` (DEC-133, §361): THIRTEEN MORE strikes into the percussive voices at random (`strike_orch.js --score sec05g --more 13`) — 47 percussive, 20 pitched. THEN `sec05h` (DEC-135, §363): A THIRD ORCHESTRATION — flutter tongue (winds) and gettato (strings) on TWENTY of the percussive strikes, each first back on its pitched key (`strike_orch.js --score sec05h --set flutterGettato`; `bank/strike_section.json` `orch.sets`) — 20 staccato · 27 slap and Bartok · 20 flutter and gettato; the answers roll (seed 2) kept. THE SCORE TO HEAR IS `sec05h`.** **AND RE-ORCHESTRATED (DEC-129, §357): `tools/strike_orch.js` — 34 strikes on slap tongue (winds) and Bartok pizzicato (strings), 17 of the rest on the pitches of his takes `strikePitches1 … 10`, 16 untouched; then the windows laid AGAIN, because his Save of 10:08 had written the page's un-reloaded copy (the old six-stretch form) over §356's lay. HE MUST File ▾ → Reload `sec05e` BEFORE ANY SAVE — said to him.** ► NEXT: 17.3d HIS PASS — the engine's window closed · `start_electronics.bat` · F5 in the composer page · `sec05e` → File ▾ → Reload · play from 0 (his engine HAS the cascade — he heard it); then ASK, in one line, what he heard. A fault = his screen first (the engine's window says each answer: `strike · W32 · answer 2 of 3 · …`). A re-roll: `--seed N --replace` → Reload, no restart. A letter moved: `bank/strike_section.json` `sequence`, the tool `--replace`. OPEN, his: the three letters left over (O O O — the bare strikes 51 … 53 open?) · the two late timings in a cascade (the lever: `roll.timings`) · where 5B sits in the piece (17.4: `insert_section.js --from sec05b --into piece-sec05-a --at <s>`).**

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
  signs for the short attacks, each in eight colours. **CHOSEN (§308, DEC-91): short attacks = the marcato, three, scattered,
  `SOL_red` · the fifth type is AUDIBLE BEATS.** **(§309, DEC-92): trills = the notation font's `tr` with its wavy line, in the format's blue.**
  **(§310, DEC-93): accented long tones = Braxton's own wedge into a line, in white.** **(§311 · §312, DEC-94): multiphonics = the chord of three open
  noteheads in a rectangle, `SOL_yellow`.** FOUR BADGES CHOSEN; four colours taken (the format's blue · white · SOL_yellow · SOL_red).
  ► AUDIBLE BEATS in hand: seven candidates on the page, the waves real, two tones white and the added wave in the colour (a the
  diagram stacked · b overlaid · c the added wave alone · d the bumps · e the bumps with the two tones · f two lines closing ·
  g two ripples crossing). **(§313 · §314, DEC-95) A CORRECTION: SHORT ATTACKS = BRAXTON'S THREE OPEN TRIANGLES in `SOL_red`** — his
  "c" of DEC-91 (the scattered marcato) was not what he meant; read every earlier line by this one. For the beats, five more
  candidates from the picture he sent: h the wave as in his picture · i THE BOW TIE · j straight-edged · k with its wave · l two
  pinches. **(§315 · §316, DEC-96): audible beats = the outline of the wave in his picture, thin and white, the added
  wave inside it in `SOL_orange`.** FIVE BADGES CHOSEN: short attacks (Braxton's triangles, SOL_red) · trills (`tr` + wavy line, the
  format's blue) · accented long tones (Braxton's wedge and line, white) · multiphonics (the boxed chord, SOL_yellow) · audible beats
  (the wave in its outline, SOL_orange). ► SCATTERED STRIKES in hand, THE LAST: seven candidates on the page (a the dive straight down ·
  b the flock diving · c his own strike in time · d conductor curves landing · e a burst · f marcatos scattered · g a chord pulled
  apart). Open: his sign and colour · where the accented long tones are in the piece (the petal hits?). What is left after the badges:
  PLAN.md 2.3's last paragraph.
- **(§317 · §318, DEC-97) THE SIX BADGES ARE CHOSEN** — scattered strikes = the flock diving, take j, `SOL_green`. The set is PLAN.md
  2.3's last "SINCE" paragraph and the table at the top of the language page. Open on it: where the accented long tones are in the piece.
- **2.4 THE MIC OPENING — OPEN (DEC-97; RUNNING_LOG §318):** to be drawn AS THE COMPOSER SCORE DRAWS IT (a rounded rectangle at the
  lane's top, a see-through fill, an outline in the same colour, the sign ◉) in a HIGHLIGHTER YELLOW. Five yellows × three recipes at
  the notation's own scale: **http://localhost:5500/signs/index.html** (`bank/signs/mic_opening.json` → `node tools/signs/build_page.js`).
  **CHOSEN (§319, DEC-98): plain yellow #FFFF00, exactly as the composer score.** Open: the sample's name after the ◉ or not · then a
  device sheet (the extractor's first electronics kind).
- **2.6 THE LANE'S VERTICAL MAP — OPEN, phase 1 (DEC-98; RUNNING_LOG §319; PLAN.md 2.6):** his rules — a standard gap under the
  dividing line and above the next · badges at the top · a band for the mics · the trill's curve and the GC the whole lane · a LINE WEDGE
  for the three body problem (to discuss) · the beating pitches on the staff. The AI's list of what else needs room: the RETURNS (do the
  players see them? Q3) · dynamics · words · duration lines off the staff · the strike window · the computer players · the beating pair's
  extras · the staff. **(§320, DEC-99) HIS ANSWERS: the ensemble does NOT see the returns (Q3 closed) · NO dynamics · NO words (the
  badges and the performance notes) · the drone's line and the strike window ARE the mic brick · no clashes raised yet.** THE LIST TO
  PLACE, seven: the standard gap · the badges (top) · the mics (one band) · the GC (whole lane) · the trill's curve (whole lane) · the
  three body's line wedge (a band, to discuss) · the staff where it shows. ► NEXT: his word on the list, then heights and order drawn.
- **2.7 THE CONDUCTOR'S / PRESENTATION VIEW — OPEN (DEC-99; RUNNING_LOG §320; PLAN.md 2.7):** a generic hint of the electronics, SECTION
  BY SECTION. ► Section 1 drawn five ways on the piece's own events: **http://localhost:5500/signs/conductor.html**
  (`bank/signs/conductor.json` → `node tools/signs/build_conductor.js`): a echo triangles · b a pale bar · c echo arcs · d a lane of its
  own · e nothing. **HELD (DEC-100): his own idea — the flocking badge + a duration line or line wedge, marked as electronics by an
  "italics equivalent".**
- **(§321, DEC-100) THE BADGES ARE SECTIONAL — HIS SCHEME:** a badge announces a section once, before its first mic opening · the
  three body problem carries two (its own + the short attacks'; smaller or side by side — open) · section 2: trills + accented long
  tones; a trill = its curve with `tr` in its upper left corner; **an accented long tone = an arc with a mic opening over its impact,
  the mic at its own height (= the petal hits)** · sines: perhaps a pitch header and a full-lane swatch · strikes: the badge, and a mic
  opening to say when. A badge per instance: only the three body's STATES (the AI's answer). Left to place vertically: the sectional
  badges (lane or GUTTER) · the mic band · the accented long tone's mic · the line wedge · the gap. **HIS METHOD HERE: DISCUSS FIRST —
  NOTHING DRAWN UNTIL HE ASKS.**
- **THE ORGANISED NOTES: `docs/NOTATION_SCHEME.md`** (§323, DEC-102 — his ask; READ IT FIRST for the notation's scheme: what holds
  everywhere · the signs · section by section · the lane's map · what is open, in order). Since it: the drones' openings each carry
  their badge · THE OPENING HAS NO BADGE ON ITS OPENINGS AND NO ARCS · **THE MIC AT ONE HEIGHT, ALWAYS** · the three body's badge large,
  the short attacks' small · the wedge changes colour and thickness per state (a sign per state: to discuss). ► IN HAND: THE MIC'S
  HEIGHT — top, middle or bottom (the AI recommends the middle, the badge to its left) — then the rest SECTION BY SECTION, his order.
- **(§324, DEC-103) THE MIC AT THE TOP, FOR NOW — SECTION 1's LAYOUT IS DRAWN:** http://localhost:5500/signs/layout.html (`bank/signs/layout.json` → `node tools/signs/build_layout.js`: the notation's own page with the section's notes dropped, the mic openings from the save and the announcing badge added — a working drawing, not yet the engine's). The conductor's hint AFTER the layout; a PIE DIAL on each of the drones' openings (the stack has one: `motivePie`). *(superseded the same day, below.)*
- **(§325, DEC-104) THE NOTATION SCORE ITSELF DRAWS THE MIC OPENING AND THE BADGE — SECTION 1 IS LAID OUT THERE** (his word: 'no lets actually start laying out the notation in the presentation/notation score'). See it: http://localhost:5500/notation/app/notation.html → `ir` *Approaching — the opening (0 … 37 s)* → `view` video. The road: the cutter's `--mics` · `--silent t0-t1` · `--announce type:t0:t1[:start]` · `--micBadge type:t0:t1` → the overlays `micOpening` · `badge` → the lane's MIC ROW. THE LOOK IS ROWS: `notation/registry/rules.json` `objects.micOpening` (`place` laneTop · laneMiddle · laneBottom — ONE WORD moves the mic's row; `gapSs`) · `objects.badge` · the table `language` (his six badges, written from the bank by `node tools/language/to_rules.js`). A change to a row is seen at a reload of the app; a change to the flags needs the cut again (the command is in RUNNING_LOG §325). Proven in the running app, four pages; `check_rules` 31 of 32 (§45's red), the shield green. NOT rendered: the film, the print. ► IN HAND NOW: his eye on section 1 in the notation score — the mic's row · the announcing badge before each lane's first mic (drawn) or at the section's start; then the three body problem (its wedge · a sign per state · its badge).
- **PARKED:** 2.5 the sine's sheet (drafted from the lineage, §301 — "will be different").

### NEXT UP

**► 2026-10-10 15:14 (Opus, RUNNING_LOG §392; DEC-160): THE GC's SHAPE IS PIECE #2's — its one preset (50 · 80 · 120 · 55 · 1.1: a 0.6 s fall, a 0.5 s rebound to 80 %), read from that piece's performance score, in `container.json` `engraving.render.gc.preset` AND `animated.gc.preset`; still magenta. A reload shows it. ► NEXT: his eye; the tutti's five (their GCs 0.55 s after their trills, where the notes are) still his to say; then the rest of section 2 at his word.**

**► 2026-10-10 15:02 (Opus, RUNNING_LOG §391; DEC-159): THE GCs — each of section 2's 34 hits draws a GC in its own lane, its impact at the note's time: for 29 that is the millisecond another player's trill ends (his example holds: the bass clarinet's impact where the bass flute's trill ends); the last five (the tutti, 197.907 s) stand 0.55 s after their trills, as composed. NOTHING ELSE on the page, at his word: the mic openings are off. The page `approaching-trills` is now 125 … 209 s, seven pages (the cutter's new `--gcOnly`; the command is in CLAUDE.md § Apps). ► NEXT: HIS EYE (a reload of the notation app); his word on the tutti's five (their GCs where the notes are · or the notes moved onto the trills' end, a change of the score); then the rest of section 2 at his word.**

**► 2026-10-10 14:57 (Opus, RUNNING_LOG §390; DEC-158): HIS EYE ON THE TRILLS — "double the tr size and have the curves start at 0": the `tr` is 21.6 × 19.8 px (`rules.json` `objects.techSymbol.sizeTrill` 1.14) and the curves begin on the lane's bottom edge (`container.json` `devices.byEnv.trill.curveFloor` 0 — no drawn floor here). Two rows; his reload of the notation app shows them. ► NEXT: his eye; then section 2's talk (the accented long tone's arc meeting its mic · the two announcing badges · the electronics' ring).**

**► 2026-10-10 14:50 (Opus, RUNNING_LOG §389; DEC-157; PLAN 2.9): BACK TO THE NOTATION — THE TRILLS. Section 2's page is cut: `approaching-trills` (125 … 211 s, eight pages) — 34 trills drawn as piece #5's trill with NO PITCH: the go line, `tr` in the curve's upper left corner, the level curve (D42's look; the smoothing = 100 samples a second + the drawn floor at a tenth); the other notes silent; the 35 mic openings. Cut from `piece-Draft01c`, so the take plays under it. The device: `container.json` `devices.byEnv.trill`. Three faults of the copy-forward met and fixed on the way (the curve windows' layers · a drawn lane curve taken for a note · `--silent` swallowing trills). Shield green · rules 31 of 32 · screen edges PASS. ► NEXT: HIS EYE — http://localhost:5500/notation/app/notation.html → `ir` *Approaching — the trills (125 … 210 s)* → `view` video. His to say: the `tr`'s size (piece #5's, about 11 × 10 px — `rules.json` `objects.techSymbol.sizeTrill`, a reload) and place. Then section 2's talk, his method (discuss first): the accented long tone's arc meeting its mic · the two announcing badges side by side · the electronics' ring (the petals). The re-cut command is in CLAUDE.md § Apps and RUNNING_LOG §389.**

**► 2026-10-10 14:37 (Opus, RUNNING_LOG §388): THE FIRST FULL TAKE IS MADE — `notation/audio/piece-Draft01c.wav`: the whole piece with the live electronics, take 02 (673 of 673 notes met; drift −9.65 ms over the piece, left and shared; mixed as heard, one gain of −1.4 dB → −1.0 dBTP · −19.2 LUFS · LRA 11.6; 13:04.7). ► NEXT: HIS EAR on http://localhost:5500/notation/audio/piece-Draft01c.wav. Then his word. Standing facts: the WAV is the playback of the save at the take — a score saved again means a new take (from here: `node tools/take.js start --score <the piece>` → his ▶ from 0 to the end → `stop` → `mix`; a line in `docs/RENDER.md` § 0.1) · the film (PLAN 2.8 step 5) waits on the whole piece's notation pages, cut from the score the WAV is named for (the pages so far name `piece-3BodyRedo`) · the takes are ~1.1 GB each in `notation/audio/takes/`, gitignored, his to clear. After it: the handover's A · 2 … 4 (his ear) · his next word on the notation of the electronics (Fable).**

**► 2026-10-10 14:18 (Opus, RUNNING_LOG §387): THE DRY RUN PASSED — take 01 of `piece-Draft01c`, 0 … 37 s, the tool's first run in Reaper: the copy recorded beside his living engine; 30 of 30 notes met (±0.34 ms); drift 3.4 ppm, left; the electronics in their stem where the engine's rule puts them; the mix −1.0 dBTP · −19.1 LUFS → `notation/audio/piece-Draft01c-dry.wav`. ► NEXT: HIS EAR on http://localhost:5500/notation/audio/piece-Draft01c-dry.wav; then THE FULL TAKE at his word — a full pass first (the returns then play this state's captures), then from here `node tools/take.js start --score <the piece>` → his ▶ from 0 to the end (13 min; Reaper left on the take's tab) → `node tools/take.js stop` → `node tools/take.js mix` (`--up --maxUp 6` only at his word) → a line in `docs/RENDER.md` § 0.1. Not exercised yet: a real drift's resampling · thirteen minutes. For the film: the notation pages name `piece-3BodyRedo` (`source.score`) — the pages are re-cut from the piece in hand when the notation is whole.**

**► 2026-10-10 14:12 (Opus, RUNNING_LOG §386; DEC-156 — his "go build"): THE TAKE IS BUILT, PLAN 2.8 steps 1 … 3 — `tools/take.js` (start · stop · align · mix · list) · `tools/lib/gain_step.js` (the gain step, one copy; `render_reaper.js` calls it) · `docs/RENDER.md` § 0 (the rules, the register). AS BUILT: `ELEC RETURN` recorded as its OUTPUT like `REC` · the alignment by time alone · the drift resampled past 16 ms, else shared between the ends. Checked without Reaper (the Lua parsed through the bridge; align and mix on a made-up take). **NOTHING OF start · stop HAS RUN IN REAPER — THE DRY RUN IS ITS FIRST RUN; the unknown: the copy's tab opening with his engine attached over ReaRoute.** ► NEXT, AT HIS "ready" (at the desk · the engine up · the composer page on `piece-Draft01c`, File ▾ → Reload done): from here `node tools/take.js start --score piece-Draft01c --to 37` → HIS ▶ from 0, to ~45 s, then stop the page → from here `node tools/take.js stop` (it aligns; read its lines: the notes met, the drift, both stems' first sound and loudness) → `node tools/take.js mix --out piece-Draft01c-dry` → his ear: http://localhost:5500/notation/audio/piece-Draft01c-dry.wav. Then the full take at his word (the same without `--to`; `mix --up --maxUp 6` was piece #6's level call — his to say). A fault = his screen first (Reaper · the engine's window); if a start fails midway and a `_take` tab stays open in Reaper, close that tab and delete `notation/audio/takes/current.json`. Uncommitted by design: the takes (gitignored).**

**► 2026-10-10 13:27 (Fable, RUNNING_LOG §385; DEC-155): THE RENDER'S PLAN IS WRITTEN WHOLE — PLAN.md § 2.8, at his word ("a" to the shape · "good to write whole plan"): `tools/take.js start | stop | align | mix | list` — a copy of the rack records the players' sum (`REC`), the engine (`ELEC RETURN`) and the instrument tracks' MIDI on one timeline; `align` the offset and the drift from the recorded MIDI against the score; `mix` REC's fader undone, the stems summed, the existing gain step (lifted into `tools/lib/gain_step.js`) → `notation/audio/<score>.wav`; the one proof a dry run on the opening; the video unchanged (it waits on the whole piece's notation pages). NOTHING BUILT. ► NEXT: THE BUILD, steps 1 → 4 as one, ON OPUS AFTER A CLEAR — PLAN.md § 2.8 is the instruction, cold-readable; his hands at the dry run only (▶ from 0 on the page when the tool says). After it: his ear on the handover's A · 2 … 4 · his next word on the notation of the electronics.**

**► 2026-10-10 13:20 (Fable, RUNNING_LOG §384; DEC-153 · DEC-154): THE THIRD RECORDING LEFT (A · 5 closed). A NEW PLAN ITEM IN HAND — THE AUDIO RENDER OF THE PRESENTATION VIDEO WITH THE LIVE ELECTRONICS: the planning method entered; phase 1 put to him (one real-time pass recorded in Reaper as two stems — the players' sum on `REC`, the engine on `ELEC RETURN` — aligned, mixed, through the existing gain step, named for the notation page; the video unchanged). Open to him: one take or section by section · the players from the live pass or from the offline render. What exists is in §384. The notation talk after it.**

**► 2026-10-10 12:46 … 12:59 (Fable, RUNNING_LOG §382 · §383; DEC-152): HIS WORD AT THE POSTCLEAR — THE CLARINET FIRST. A · 1 DONE: the remedy applied and IT HOLDS at his pass (SWEEP_LIST #18 closed, remedied not diagnosed). A · 5 MEASURED: the third recording is short by its KEY — put to him, a · b (A · 5). The rest of A waits on his ear; the notation talk on his next word.**

**► CHECKPOINT #5 OF SESSION 3, just below (2026-10-10 12:40, RUNNING_LOG §380) — THE HANDOVER block and the checkpoint lines that close it — IS THE COLD-START BLOCK: read it first. Everything else in this NEXT UP section, checkpoint #4 included, is the trail that led to it.**

**► THE HANDOVER — WHAT IS OUTSTANDING (2026-10-10 12:35, Opus; RUNNING_LOG §369 … §378; DEC-140 … DEC-149) — written for the checkpoint he asked for and for Fable after the clear. THIS BLOCK IS THE COLD START; the "SINCE CHECKPOINT #4" bullets under it are its trail.**

*THE PIECE IN HAND: `scores/piece-Draft01c.json` (his, untracked) — 12:59, six sections. His engine: started 12:30:41, it has every fix of today.*

**A · PROBLEMS OPEN, in the order to take them**
1. **THE BASS CLARINET'S FIRST DRONE RECORDING (216.4 s) — DONE, IT HOLDS (2026-10-10 12:46 … 12:59, Fable, RUNNING_LOG §382 · §383; DEC-152).** The note `wc-731` shaped as the builder's (`velAbs` 100, the builder's curve) in `piece-Draft01c`; his pass: `bcl-drone-1` 5,990 of 6,570 ms, a swell held to the note's end, read ff; the drone from it (`zn-743`, dn02) rendered from the new capture. **SWEEP_LIST #18 CLOSED — remedied, NOT diagnosed** (the velocity and the channel moved together; not pursued, §380's rule).
2. **THE LAST PETAL HIT (198 s) — CURED BY THE BANK'S RECORD, HIS EAR UNSAID.** Two rounds (§369 · §377): renders ran under it in the one gap over 6 s. On the engine of 12:30 his full pass captured all five at the hit (12:32:33) and no render ran. ASK what he heard; if it missed: his screen first.
3. **THE TRILLS' VOICE (the page, §369) — unsaid.** A trill played from its own start should be in the ordinary voice now (his F5 was needed).
4. **THE OPENING IN 1c — UNHEARD AS IT STANDS:** rolled pitches (seed 1, 20 of 30 notes) · distortions 25 → 10 · every return WRITTEN ff (fff at DEC-147, then his "1st section go to ff", DEC-151, §381). The first pass after the roll still returns the earlier takes: twice.
5. **The bass clarinet's THIRD drone recording (key 34 = Bb0, 271 s) — MEASURED (§383): SHORT BY ITS KEY; LEFT AS IT IS at his word (DEC-153, §384).** Its note is the builder's own construction and the sound dies 2.3 s into a 7.9 s note (3,285 of 7,970 ms, read fff, half again as loud as the others): on key 34 the multiphonic SAMPLE is short, as key 46's is (1.5 s, §369); 38 holds 7 s; 39 unmeasured. PUT TO HIM: a · leave it (its seven drones stretch a loud 3.3 s sample) · b · `bank/drone_section.json` `sources.bcl.keys` [34, 38, 39, 46] → the keys that last (38; 39 once measured) — his data, then `build_drone_section.js --replace` · `insert_section.js … --at 235 --replace` · his Reload · a pass. ALSO: `raw/zn-752.wav` on disk is a silent 5.49 s window from a playhead started inside the window (12:55:04), refused by the room rule — the row of 12:54:41 and the crop are the capture; a raw's stamp is read against the row's.

**B · HIS LETTERS, UNANSWERED (each one line; ask only when its subject comes up)**
- the diode's length: a · leave it (~400 ms, the impulse's own) · b · a short ring-out stacked after it (~850 ms)
- the opening re-dealt under the one-card rule (about 3 distortions of 75; it has 10 now): only if he asks
- the bass flute moves 2 notes of 6 in a pitch roll — a sweep of its four unmapped articulations would widen it (it SOUNDS, minutes): at his word
- a preset edited from the card: a build, at his word

**C · THE NOTATION — WHERE HE LEFT IT**
- THE THREE BODY PROBLEM's electronics: each computer player has a HEAD in the gutter — a small bracket and Elec1 · Elec2 · Elec3 (built, §370; title case at his word, §379; **his eye unsaid**). He was told the three are FAMILIES (winds · percussion · strings samples).
- **He said he would give "what's next on the notation of the electronics"** — that is the next talk (Fable). His standing order after it: section 2 of the notation (the arc of an accented long tone meeting its mic) → the drones → the beating section → the strikes. `docs/NOTATION_SCHEME.md` first.

**D · THE TOOLS OF TODAY (each a line; CLAUDE.md's last state blocks have the commands)**
- `tools/impulse_pitches.js` + `bank/impulse_pitches.json` — the opening's impulses on other pitches (`--seed N` another variation · `--off` his own pitches)
- `tools/thin_effects.js` — fewer plays of named effects, the rest dealt again (`--off` puts back)
- `tools/return_level.js` — a stretch's return bricks at one written level (`--played` takes it off)
- `bank/presets.json` `groups.distortion` — the distortions ONE card of every deal (a seed no longer gives its old deal)
- the card: a preset's settings shown whole · the page: a trill's preset always lands · the engine: a live petals queues no render

**E · HOW HIS FILES STAND**
- `piece-Draft01c` = 1b + the opening's returns at a written level — ff now (fff for twenty minutes). 1b = `piece-Draft01` + the drone key, the pitch roll, the fifteen swaps. `audition-sec01-fx-updates` = his audition copy (74 bricks fff, his own changes) — HIS WORKING FILE, never touched without his word.
- **Every tool write is undone by its tool** (`--off` · `--played`; the drone key's `keyWas` is on its opening). The "before" copies are in this session's scratchpad only — NOT durable.
- After a tool writes a score he has open: File ▾ → Reload BEFORE any Save; "did my save survive" is read from the file, brick by brick (§372).

**CHECKPOINT #5 OF SESSION 3 — the lines that close the handover** *(2026-10-10 12:40, Opus — mid-session checkpoint; the stretch §369 … §378 was Opus's but for §377, Fable's; written for a session that has never seen this chat)*

- **The task and its state:** his ear is going through the piece and each thing he hears becomes a fix or a roll the same hour — the opening's sound (the FX audition, the pitch roll, fewer distortions, the level), three faults of the playback, and the notation of the three body problem's electronics beside it. Everything asked is built and committed; block A is what is still open.
- **The latest deliverables:** `scores/piece-Draft01c.json` (his — the piece) · `tools/impulse_pitches.js` · `tools/thin_effects.js` · `tools/return_level.js` · `bank/impulse_pitches.json` · `bank/presets.json` (`groups`, the diodes at mix 1) · the page's zone tick and the card's settings line · the engine's `liveHasRef` · the notation's ELEC heads (`notation/lib/render.js`, `rules.json` `objects.elecBracket`).
- **THE NEXT CONCRETE STEP:** after the playback, ask him ONE line and nothing more — **"The clarinet's drone note first, or your next word on the notation of the electronics?"** Then, on his word:
  - **the clarinet (A · 1) — the remedy, exactly:** in `scores/piece-Draft01c.json` (no working copy of the page on disk, or one that does not differ; a copy first; the file is compact JSON — write it back compact), the object `wc-731`: delete `sonifyMode` and `recVel`, set `velAbs` 100, `nodes` to two points `{ pos 0 | 1, y 5.714285714285714, smooth 0.25 }`, `segments` to `[{ model: 'bezier', slope: 0 }]` — the sounding fields of `wc-739`, the note that holds; leave its id, lane, times, key 38, technique, properties. Then his File ▾ → Reload and a pass from ~214 s. READ THE RESULT YOURSELF, no hands: the bank's row `bcl-drone-1` (`lengthMs` against the window's 6570) and `node tools/vet/wav_env.js bank/samples/raw/zn-730.wav 200` — a held multiphonic swells for two seconds and stays. If it still falls at 0.6 s the cause is the channel, not the note: his screen and his word before anything else.
  - **the notation:** `docs/NOTATION_SCHEME.md` first (§ 3 · 2 and § 5's table); his method stands — discuss first, nothing drawn until he asks, then built in the notation app; a look is a row of `rules.json`, a placement a flag of the cutter.
  - **a fault he reports:** the bank's own stamps and the raw recordings are read BEFORE a cause is named (two of today's first cures were wrong by one number each — §369 against §377 · §378).
- **Resume reads:** nothing beyond §2. *At his word for the notation:* `docs/NOTATION_SCHEME.md`.
- **Decisions pending him:** the clarinet remedy's go · what he heard at the last hit on the engine of 12:30 · the trills · the opening in 1c (twice) · his eye on the ELEC heads · the diode's length (a · b) · and block B's standing offers.
- **Not done, so not claimed:** nothing built today has been HEARD or SEEN by him as far as he has said, but the audition's levels (his own finding) · the page fix and the card line were never opened in a running page by the AI (the MIDI road is his Chrome's) · the ELEC heads were seen on page 2 only · the film and the print are not rendered for any page.
- **What this block does not know:** whether the page he has open is on `piece-Draft01c` as written at 12:23 (he saved it then; the level was in it) · whether he pressed F5 since the page fixes (the trills' fix and the card line need it).
- **Model:** he resumes on FABLE (his word) — right for the notation talk. The clarinet remedy is a five-line edit either model can make; a build from a decided look is Opus's.
- **Deliberately uncommitted — nineteen, all his or the engine's, none staged:**
  - `scores/piece-Draft01c.json` — untracked: THE PIECE IN HAND. His to commit.
  - `scores/piece-Draft01b.json` · `scores/piece-Draft01.json` — untracked: the two states before it (1b = before the written level; `piece-Draft01` = before today's changes).
  - `scores/audition-sec01-fx-updates.json` — untracked: his audition copy, his working file.
  - `scores/sec05-finalDraft.json` · `scores/sec05a.json` … `scores/sec05h.json` (eight) · `scores/sec05-strikes-a.json` · `scores/piece-sec05-a.json` — untracked: the strikes' versions of this morning, as at checkpoint #4.
  - `scores/piece-3BodyRedo.json` · `scores/strike-rig.json` — modified: his saves, as at checkpoint #4.
  - `bank/panel_snapshots.json` — modified: his takes.
  - `bank/samples/index.json` — modified: the engine's own writes (today's captures and renders).
  - *(gitignored: the five old working copies of `node tools/unsaved_check.js` — unchanged, none the piece.)*
- **The engine's repo is in step:** `git subtree push` after §377 (`a11b387`, the mirror pulled); nothing in `electronics/` changed since.

**► SINCE CHECKPOINT #4 (2026-10-10, Opus; RUNNING_LOG §369 … §371; DEC-140 … DEC-142) — the trail of the block above:**
- **THE PIECE IN HAND IS `scores/piece-Draft01b.json`** (his copy of `piece-Draft01`; untracked, his).
- **Three faults of the playback, fixed, NOT HEARD:** the trills' voice (the page: `composer.html`'s zone tick — his F5) · the last petal hit under a burst of renders (the engine: a live petals with its level in hand queues no render — HIS ENGINE RESTART is its first run; a reading from the bank's stamps, the engine's window not seen) · the bass clarinet's first drone recording at 216.4 s (the score: its note key 46 → 38). **His steps: the composer page F5 → `piece-Draft01b` → File ▾ → Reload BEFORE any Save · the engine's window closed, `start_electronics.bat`.**
- **If the last hit still misses after the restart:** his SCREEN first — the engine's window at the hit says `live · … the microphone open …` for each of the five and whether a `plan · … to render` line stands before it.
- **The bass clarinet's drones, open, his:** the first and the second recording are the same multiphonic now (key 38); key 39 (D#1) is the alternative, unmeasured on this preset · the third recording's key 34 was not measured.
- **The three body problem's electronics, in the notation:** each computer player has a HEAD in the gutter of every page — a small bracket as tall as its window and ELEC1 · ELEC2 · ELEC3 (`rules.json` `objects.elecBracket` · `electronics.players`; no re-cut). His eye: the notation app → reload → *Approaching — the three body problem, with the electronics*.
- **The FX audition:** his copy is `scores/audition-sec01-fx-updates.json` (untracked, his); all 74 bricks written fff at his word. He goes through them one by one. The opening's own 25 return bricks are still "as played" — the same change there only at his word.
- **Scratch copies taken before the two score writes** are in the session's scratchpad, not in the repo: his files as they stood are also what the logs say (one key; 74 dynamics).
- **THEN (RUNNING_LOG §372 · §373; DEC-143 · 144):** the diode ring presets at mix 1, the audition's eight diode versions rendered again · a preset's settings shown whole in the return brick's card (his F5) · **THE OPENING'S IMPULSES ROLLED ONTO OTHER PITCHES, seed 1, in `piece-Draft01b`** — `node tools/impulse_pitches.js --score piece-Draft01b --seed N` for another variation, `--off` for the pitches he played; the keys a roll may give are `bank/impulse_pitches.json` (his data, evidence only).
- **Open, his letters:** the diode's length — a · leave it · b · a short ring-out stacked after it (to ~850 ms) · the bass flute moves only two notes of six in a roll (four articulations unmapped): a sweep of those presets would widen it — it SOUNDS through his rack, two minutes a preset, at his word only · editing a preset from the card: a build, at his word.
- **THEN (RUNNING_LOG §374; DEC-145): the opening's distortion plays 25 → 10** (fuzz · diode · octave · crush), the fifteen dealt among the other effects — `node tools/thin_effects.js --score piece-Draft01b --effects fuzz,diode,octave,crush --keep 10 --seed N [--render]`; `--off` puts every play back. The fifteen new versions are in the bank.
- **THEN (RUNNING_LOG §375; DEC-146): the distortions are ONE CARD of every deal to come** (`bank/presets.json` `groups.distortion`) — 28 cards, ~3 distortion plays in 75. Nothing re-dealt. A kept deal comes back by its frozen score now, not by its seed.
- **AT 12:10 (read from the machine):** his engine still the one of 09:32 — THE RESTART IS STILL HIS, for the last-hit fix only · `piece-Draft01b` holds every tool write, unsaved-over · the main score's opening returns are "as played"; the fff is in the audition copy only.
- **THEN (RUNNING_LOG §376; DEC-147): THE PIECE IN HAND IS `scores/piece-Draft01c.json`** (his, untracked — 1b plus this) — the opening's 25 return bricks WRITTEN fff (`node tools/return_level.js --score <name> --mark fff --from 0 --to 37`; `--played` undoes).
- **THEN (RUNNING_LOG §377; DEC-148): the last hit, second round** — on his restarted engine five renders still ran under it (the bank's stamps); the drive condition of §369 dropped; `petals_live_test` PASS. **ONE MORE RESTART IS HIS — the third today**; then the section from its start. If it still misses: his screen (the engine's window at the hit).
- **His steps for the opening:** `piece-Draft01c` → File ▾ → Reload BEFORE any Save → play 0 … 37 s TWICE (the first pass still returns the earlier takes).

**► CHECKPOINT #3 OF SESSION 3, just below, IS THE COLD-START BLOCK (2026-10-09, RUNNING_LOG §339). What follows in this NEXT UP paragraph is the trail that led to it — read the block first.**

**► SINCE CHECKPOINT #3 (2026-10-09, Opus; RUNNING_LOG §340; DEC-117) — SECTION 1: A BADGE BEFORE EVERY MIC OPENING, AT THE ORIGINAL SIZE.** His word: *"for the first section, we're going to need the badge before every mic opening … go back to the original size"*. Built: `rules.json` `objects.badge.sizeSs` 4.557 (36 px; the gap 12 px untouched) · both pages of section 1 re-cut with `--micBadge shortAttacks:0:37` in place of `--announce shortAttacks:0:37` — **the checkpoint's cut command below is superseded in that one flag** (the two commands whole: RUNNING_LOG §340). 30 openings, 30 badges; the mic's row 8 … 44 px. Seen in the app, page 1. ► NEXT: his eye on it (the notation app → F5 → `ir` *Approaching — the opening* → `view` video); the checkpoint's three choices stand unanswered.

**► THEN (RUNNING_LOG §341; DEC-118) — HE IS INSERTING HIS STRIKE TAKES INTO THE SCORE BY HAND, in the page.** For it: the Strikes drawer's box **`then + [ ] s`** beside `Insert @ playhead` (`score/public/strike_drawer.js` `#skThen`) — a number in it moves the playhead past each inserted strike, so the next one lands after it and the drawer stays open; empty = as before. Live at his F5; NOT tried in the page by the AI. A fault there = his screen first.

**► AND IN THE NOTATION (2026-10-10, Opus; RUNNING_LOG §350; DEC-122):** the mic opening back to its first height — `rules.json` `objects.micOpening.heightFrac` 0.2, 41.9 px; the badge then 36 px. **His "c" (§351, DEC-123): the badge up to the mic's height — `objects.badge.sizeSs` 5.3, both 41.9 px from the row's top edge, read in the running app.** One size in two rows: change both together. The flocking badge on the presentation page stays 36 px. A reload of the notation app shows it; no re-cut.

**► THE THREE BODY PROBLEM'S PAGE IS BUILT (2026-10-10, Opus; RUNNING_LOG §353 … §355; DEC-125 · DEC-126):** the notation app → `ir` *Approaching — the three body problem (39 … 123 s)* → `view` video. On every lane: the three body badge (piece #2's own, 54 px) and the short attacks' badge (42 px) before 39 s, then ONE continuous line wedge to 123.3 s — far apart blue thin · approaching yellow growing · close pass red thick · break and rejoin purple hairline; a change ramps and blends. The look is rows (`rules.json` `objects.stateWedge` · `objects.methodBadge` · `methods.badges.threeBody.colour`) — a reload; the cut: `node tools/notate_section.js --score piece-3BodyRedo --w0 37 --w1 125 --id approaching-threebody --label "Approaching — the three body problem (39 … 123 s)" --silent 37-125 --wedges --announce threeBody+shortAttacks:39:123.3:lead`. **KEPT — 'What you've done looks good. Let's keep that' (DEC-130).** ► NEXT: HIS LETTERS on the two sets of proposals of RUNNING_LOG §358 — the change of state: a · nothing more · b · a small picture-sign of the state where its ramp begins (the AI's lean) · c · a number · d · a thin line — the electronics: a · a grey window a container with a small badge · b · ONE grey window a computer player with its own small state wedge (the AI's lean) · c · nothing. **HIS LETTERS: '1b; 2b' (DEC-132) — BOTH BUILT (RUNNING_LOG §360):** the STATE SIGNS on the players' page (a small picture of three bodies in the state's colour, 27 px, at the lane's top where the ramp into the state begins; `rules.json` `stateSigns` · `objects.stateSign`) and THE COMPUTER PLAYERS on a new presentation page `approaching-threebody-elec` (one grey window each along the bottom of the bass clarinet's, the percussionist's and the cello's lanes, its own small wedge inside, the short attacks' badge before it; the cutter's `--elecPlayers shortAttacks`). The two cuts whole: §360. **HIS EYE ON THE SIGNS (DEC-134, §362): the drawings will CHANGE (he is looking at the earlier dot candidates again — http://localhost:5500/language/index.html, short attacks e · scattered strikes d, reopened to look only) and THE SIGN’S PLACE IS DECIDED BUT NOT BUILT, at his word: its bottom a vertical gap above the HIGHEST POINT of the line wedge, size 27 px kept — BUILD BOTH TOGETHER WHEN HE NAMES THE DRAWING, never before.** **THE STATE SIGNS DECIDED AND BUILT (DEC-137, §365): ground i — the state's own colour at 15 % · the bigger dots · 34 px · bottom 8 px above the highest point of the line wedge (`rules.json` `objects.stateSign`; the drawings by `node tools/signs/state_signs_to_rules.js`). ► NEXT ON THE NOTATION: his eye on the two three body pages; then, his order — section 2 (the arc of an accented long tone meeting its mic) → the drones → the beating section → the strikes.** *(before it:)* **THEN (DEC-136, §364): the drawings KEPT with the dots 50 % bigger; the GROUND is the open choice — http://localhost:5500/signs/state_signs.html (`bank/signs/state_signs.json` → `node tools/signs/build_state_signs.js`), eleven grounds a … k. ► NEXT: HIS LETTER for the ground → then build in the notation, together: the bigger dots (the bank file’s signs into `rules.json` `stateSigns`), the ground, the place above the wedge’s highest point (ask: the whole wedge’s, or where the sign stands).** *(before it:)* his word on the drawing; his eye on both pages (the picker: *the three body problem* · *the three body problem, with the electronics*); the four sign drawings, the wedge's colours and thicknesses and the signs' size are the AI's first — each a row. Then, his order: section 2 (the arc of an accented long tone meeting its mic) → the drones → the beating section → the strikes.

**► (the trail) CHECKPOINT #2 OF SESSION 3, further below, was the cold-start block until it.** **SINCE IT (§328, DEC-105): HE HAS SEEN SECTION 1 AND GAVE FIVE NUMBERS, all built and seen in the app** — the badge 54 px, 12 px before its mic opening · the mic opening 29 px tall, at 28 % (the outline 56 %), its circles centred · the mic's ROW as tall as the badge, both centred in it under the standard gap. The announcing badge is KEPT before each lane's first mic opening (the block's a · b · c is answered: a). **(§329, DEC-106 — corrected the same hour: the mic opening hangs from the row's TOP, `objects.micOpening.align` edge, its height lost at the bottom; its outline back at 70 %, its fill at 21 % — then, §330 · §331 DEC-107 · DEC-108, HIS NUMBERS: the outline 100 %, the fill 18 %; §332 DEC-109: the yellow drawn OVER the two circles (`sign.layer` under). A RESIZE KEEPS THE EDGE HE GAVE; a property changes on the part he named, no wider.)** So the block's next step is now: his eye on those numbers, then THE THREE BODY PROBLEM's signs, a talk. His eye on section 1 in the notation score and his letter on the announcing badge; then, in his order and at his word, the three body problem's signs — a talk, then built in the score. *(Before it, done: the palette's names, the six badges, the
mic opening.)* Do not present the parked list.

**SINCE IT (2026-10-09, Fable; RUNNING_LOG §333 … §335; DEC-110 · DEC-111): THE PRESENTATION VIEW OPENED AND SECTION 1 OF IT BUILT** — his ask: a graphic representation of the live electronics, as graphic scores have; five families put to him; his word *"a, purple at the bottom, flocking badge but smaller"*; built here at his *"go, build it here"*: the page **`approaching-opening-elec`** (*Approaching — the opening, with the electronics*) in the notation app — the players' page plus the electronics' layer: a purple brick at each lane's BOTTOM over each stretch the returns fall in (its length the region, its height the number of sounds, one → five) and piece #1's flocking badge, small and purple, once a lane before the first brick. The rows: `rules.json` `objects.elecReturn` · `objects.elecBadge` · `colours.elecPurple` · the table `electronics`; the cutter's `--elec` · `--elecBadge`. Seen in the running app (§335); the players' page untouched (the shield). ► NEXT: his eye on it (the picker's third page, view video); then the three body problem's signs, a talk — and the presentation view's sections 2 … 6 each at its section's turn (NOTATION_SCHEME § 5's table).

**THEN (the same day; RUNNING_LOG §336 · §337; DEC-112 · DEC-113):** (1) THE PRESENTATION VIEW'S SECOND ROUND — the flocking badge's birds back in the quartet's light blue (the ground #2d3748 checked on every badge), a flocking badge before EVERY return brick, and THE ELECTRONICS' WINDOW: a plain see-through slate-grey rectangle with a subtle grain — since DEC-114 (§338) LOCAL, one round each brick and its badge (`rules.json` `objects.elecWindow` · `colours.elecWindow`; the cutter's `--elecBadge …:each` · `--elecWindow t0:t1[:lane]`); seen in the running app. (2) THE STRIKES' REPLIES ON SHORT ENDINGS — his "a": perc + expodec; the catalogue's `samples.envs` · `samples.categories` (impulse), the engine's deck filtered (`strikePool`, the engine's §64 — an SC identity gotcha caught by the test), `node tools/deal_strike_variants.js --render` → 266 short versions rendered on his living engine (199 on disk at the wrap), the rig rebuilt. **HIS STEPS: the renders finished (the engine's window quiet) → the engine RESTARTED (the filter is new code) → F5 → `strike-rig` from 0.** NOT heard. ► NEXT: his eye on the window page; his ear on the rig.

### CHECKPOINT #4 OF SESSION 3 *(2026-10-10, Opus — mid-session checkpoint; the stretch §340 … §367, Fable for the talks and Opus for the builds; written for a session that has never seen this chat)*

- **The task and its state — three threads, each waiting on HIS word:**
  **(A) THE STRIKES (running order step 17) — IN THE PIECE.** Section 5 was composed by him by hand (67 strike takes), dictated strike by strike (notated · open), and built in a morning of versions `sec05a … sec05h` → **`scores/sec05-finalDraft.json`**: 63 strike windows (22 notated · 41 open, an open one twice its strike), the electronics answering 1 · 2 · 3 · 2 · 1 times on his counts of 11 · 20 · 25 · 6 · 1 strikes (a CASCADE: each further answer changes the rhythm of the answer before it; the four-answer stretch taken out as "too dense"), the answers rolled at seed 2 from weights of his ear, the replies processed versions only, the last four strikes bare; three orchestrations of the strikes (20 staccato · 27 slap tongue and Bartók pizzicato · 20 flutter tongue and gettato) and the percussionist's notes varied. **THE PIECE IS `scores/piece-Draft01.json`** (his, untracked): six sections, 0 → 778.73 s, 12:59; section 5 at 676.9 → 778.7 s, its first strike at 677.000 (checked in the file at this checkpoint: 1173 objects, 441 of the section). Left of step 17: 17.5 the concert side (deferred to the live-electronics discussion).
  **(B) THE NOTATION — two sections laid out in the notation score.** THE OPENING (`approaching-opening` · `approaching-opening-elec`): a short attacks' badge before EVERY mic opening, the badge and the mic opening both 42 px. THE THREE BODY PROBLEM (`approaching-threebody` · `approaching-threebody-elec`): announced by the three body badge (piece #2's own, 30 % larger) and the short attacks' badge; ONE continuous line wedge a player, coloured and thickened by state; a STATE SIGN where each ramp begins (three-body pictures, bigger dots, on the state's own colour at 22 %, 34 px, its bottom 8 px above the wedge's highest point); on the presentation page one grey window a computer player with its own small wedge. He said "looks good. Let's keep that" of the wedge and badges; **his eye on the signs as finally built (the 22 % ground, the place) is not yet said.**
  **(C) THE FX AUDITION — THE THING IN HAND.** At his ask, `scores/audition-sec01-fx.json`: one plain return brick for each of the 74 processed versions the opening plays, the players in turn, 3 s apart; the sheet `docs/auditions/audition-sec01-fx.md` (each preset's effect and dials). **He has not said what he heard** — he asked for it "to inspect all of the FX versions" of the first section.
- **The latest deliverables:** `tools/build_fx_audition.js` · `scores/audition-sec01-fx.json` · `docs/auditions/audition-sec01-fx.md` · `scores/piece-Draft01.json` with section 5 (his) · the notation pages above · the tools of the strikes (`tools/strike_windows.js` · `strike_orch.js` · `strike_perc.js` · `strike_art.js` · `strike_check.js`; his numbers `bank/strike_section.json`; the sheet `docs/STRIKE_SECTION.md`) · `tools/language/port_three_body.js` · `tools/signs/build_state_signs.js` · `state_signs_to_rules.js`.
- **THE NEXT CONCRETE STEP:** ask him, in ONE line, what he found in `audition-sec01-fx` — and nothing more. Then act on his word:
  - **a version he wants changed in the opening** — the sheet says which return of the section plays it. One brick: in `piece-Draft01`, the return brick's panel, "Processed as" (he can do it; or a tool edit of that brick's `elec.variants`). A preset's dials: `bank/presets.json`, then F5 — heard at the next pass (a version is rendered anew at every pass of the piece). A whole new casting: `tools/deal_variants.js` — the exact command of each kept deal is in `bank/candidates.json` `deals` (the score is on seed 15's); it WRITES the score: tell him first. After any of these, the audition again: `node tools/build_fx_audition.js --replace` (it reads `piece-Draft01`).
  - **his eye on the three body pages** — a look is a row of `notation/registry/rules.json` (`objects.stateSign` { sizeSs · gapSs · place aboveWedge | micRow · ground { colour, opacity } } · `objects.stateWedge.states` · `objects.methodBadge.scale`), then `node tools/gen_engraving_rules.js` · `node tools/check_rules.js` (31 of 32 is green here) and a reload — no re-cut. The sign a gap above the wedge WHERE IT STANDS (not one height a lane) was offered him as the alternative: unanswered; it is a build (the sign must know the wedge's thickness at its time).
  - **the next section of the notation, his order: SECTION 2 (125 … 210 s) — a TALK first** (`docs/NOTATION_SCHEME.md` § 3: a trill = its curve with `tr` in the upper left corner; an accented long tone = a conductor's arc with a mic opening over its impact; open: how the arc meets the mic, now at the lane's top). Nothing drawn until he asks; then built in the notation app. After it: the drones → the beating section → the strikes (17.6: notated → GCs · open → a mic opening the window's length).
- **Resume reads:** nothing beyond §2. *At his word for the notation:* `docs/NOTATION_SCHEME.md`. *If he names versions of the audition:* `docs/auditions/audition-sec01-fx.md`.
- **Decisions pending him:** what he heard in the FX audition · his eye on the state signs (22 % · the place: one height, or following the wedge) · his ear on `piece-Draft01` with section 5 (and on the three body's new take, the beating section — from before) · the four bare strikes' words for the notation (his three letters past the end read O O O — unconfirmed) · the two late timings in a cascade (kept at one answer in ten) · a new roll every performance (his, deferred) · the earlier dot candidates he asked to see again (`bank/language/language.json` still has `reopen` on two types: take the two lines out when he is done looking).
- **Not done, so not claimed:** the film and the print are not rendered for any page · sections 2 … 6 have no notation · of the notation's pages the AI looked at one to three each · nothing of section 5 was HEARD by anyone but him (his word on it: the four-answer stretch "too dense"; nothing since) · `audition-sec01-fx` not opened in the page.
- **What this block does not know:** whether his engine was restarted AFTER §349 (the processed-only switch) — it has the cascade (he heard it); if section 5's answers sound raw impulses, that restart is the cure, and his screen (the engine's window) comes first · what he has done in the page since 11:06.
- **Four habits this stretch paid for** (all in CLAUDE.md): after a tool writes a score he has open — File ▾ → Reload BEFORE any Save (a Save from an un-reloaded page put an old form back, §357) · a tool that writes a score is run ONCE per shell line, a copy taken first (§352) · a command over ~8 KB, or any text with a backslash, goes through a file made with the Write tool (three failures) · in the AI's hidden pane the notation app redraws only at LOAD (`localStorage` `notation-ui`, then reload).
- **Model:** this stretch — Fable for the talks, Opus for the builds, switched by him. By THE RHYTHM: the section 2 notation talk is Fable's; a number, a re-cut, a re-roll, a build from a decided look are Opus's.
- **Deliberately uncommitted — sixteen, all his or the engine's, none staged:**
  - `scores/piece-Draft01.json` — untracked: THE PIECE, with section 5. His to commit.
  - `scores/sec05-finalDraft.json` — untracked: section 5 as inserted.
  - `scores/sec05a.json` … `scores/sec05h.json` (eight) · `scores/sec05-strikes-a.json` · `scores/piece-sec05-a.json` — untracked: his versions of the morning and his copies; each a state the logs name (§342 … §363).
  - `scores/piece-3BodyRedo.json` — modified: his save of the piece before the strikes.
  - `scores/strike-rig.json` — modified: his save of the rig in the page (it dropped `metadata.rig`; the check reads the windows' tags since §346).
  - `bank/panel_snapshots.json` — modified: his takes (`strikePitches1 … 10` among them — `tools/strike_orch.js` reads them).
  - `bank/samples/index.json` — modified: the engine's own writes.
  - *(gitignored: the five old working copies of `node tools/unsaved_check.js` — unchanged, none the piece.)*
- **The engine's repo is in step:** nothing in `electronics/` changed since §349 (`git subtree push` done then — `2b97717`, the mirror pulled).

### CHECKPOINT #3 OF SESSION 3 *(2026-10-09, the wrap on Opus; the stretch §333 … §339 was Fable's — mid-session checkpoint; written for a session that has never seen this chat)*

- **The task and its state:** two threads, both his, both at a point where the next word is his.
  **(A) THE NOTATION — the presentation view (PLAN.md 2.7):** SECTION 1 IS BUILT in the notation score — the page **`approaching-opening-elec`** (*Approaching — the opening, with the electronics*): the players' page plus, at each lane's bottom, for each of the 25 returns a small see-through slate-grey WINDOW holding piece #1's flocking badge (the quartet's colours) and a PURPLE brick whose length is the region the engine rolls inside and whose height is the number of sounds (one → five). Four rounds of his words, all built and seen by the AI in the app (DEC-110 … DEC-114). **HE HAS NOT SAID WHAT HE SAW of the last round** (the window made local). The players' page `approaching-opening` is untouched.
  **(B) THE STRIKES (PLAN.md 1.9, running order step 17):** **17.1 THE RIG IS HEARD — *"those strikes are good, those envelopes are good"* (DEC-115).** The replies with effects draw only the two short endings (perc · expodec) from impulse captures (the catalogue's `samples.envs` · `samples.categories`; the engine's deck filter); 266 short versions are in the bank. ► 17.2 is next: a talk.
- **The latest deliverables:** the page `notation/ir/approaching-opening-elec.ir.json`, cut by
  `node tools/notate_section.js --score piece-3BodyRedo --w0 0 --w1 37 --id approaching-opening-elec --label "Approaching — the opening, with the electronics (0 … 37 s)" --mics --silent 0-37 --announce shortAttacks:0:37 --elec --elecBadge flocking:0:37:each --elecWindow 0:37`
  · the rows `notation/registry/rules.json` `objects.elecReturn` · `objects.elecBadge` · `objects.elecWindow` · `colours.elecPurple` · `colours.elecWindow` · the table `electronics` · `tools/deal_strike_variants.js` · `bank/strike_responses.json` `samples` · `scores/strike-rig.json` + `docs/STRIKE_RIG.md`.
- **THE NEXT CONCRETE STEP:** ask him, in ONE line, which he wants — and nothing more: **his eye on the presentation page** (the notation app on his 5500 → F5 → `ir`: the third page → `view` video) · or **the page that looks cropped** (DEC-116 — ask WHICH page and WHICH view; if it is neither the zoom view nor the opening's last page, ask for a SCREENSHOT before measuring anything) · or **the strikes** (17.2). Then act on his word:
  - a change to a LOOK of the electronics = one word of a row (`objects.elecWindow`: `fillOpacity` 0.1 · `strokeOpacity` 0.55 · `padSs` 0.5 · `grain.opacity` 0.06, 0 = none · `colours.elecWindow` #708090; `objects.elecReturn`: `place` · `perSoundFrac` 0.028 · `capSounds` 5; `objects.elecBadge` `sizeSs` 4.557 · `gapSs` 1.52; `electronics.badges.flocking.colour`), then `node tools/gen_engraving_rules.js` · `node tools/check_rules.js` (31 of 32 is green here) and a reload of the app — no re-cut;
  - a change to WHERE a badge or a window stands = the cut again with other flags (`--elecBadge type:t0:t1` once a lane · `:start` · `:each`; `--elecWindow t0:t1` round each brick · `:lane` one band a lane);
  - **the next section of the notation, in his order: THE THREE BODY PROBLEM — a TALK first** (checkpoint #2's block, below, has what is to settle and the lineage to read first); its presentation view is decided with it (the three computer players);
  - **17.2 THE STRIKES' CATALOGUE — a TALK:** which of the nine transformations and five timings he keeps, drops, renames; his own added (`bank/strike_responses.json` is his); then 17.3 (the come-backs, the section simulated) — checkpoint #1's workflow, below, is his note to call on.
- **Resume reads:** nothing beyond §2. *At his word for the notation:* `docs/NOTATION_SCHEME.md`. *At his word for the strikes:* PLAN.md § 1.9.
- **Decisions pending him:** what he sees on the presentation page · which page and view look cropped · the three notation numbers that are the AI's first (the brick's height a sound · the badge's 36 px · the window's grey and grain) · whether "each line of electronics" was rightly read as each return brick (built so; he has not objected) · 17.2 · where section 5 sits in the piece. **Still waiting from before, never raised unless he asks:** his eye on the palette page · his ear on `piece-3BodyRedo` · the parked list.
- **Not done, so not claimed:** the film and the print are not rendered for either page · sections 2 … 6 have no presentation view and no players' layout · the cropped page was not seen on his screen · the engine's filter was proven by its test and by his ear ("those envelopes are good"), not by a line read in his engine's window.
- **What this block does not know:** whether his engine is still the one he restarted for the rig (it has the filter if so) · what he has done in `piece-sec05-a` since 18:25.
- **Model:** the stretch ran on Fable, talks and builds alike, at his word ("go, build it here"). By THE RHYTHM: the three body talk and 17.2 are Fable's; a number, a re-cut, a build from a decided sheet are Opus's. He chooses.
- **Deliberately uncommitted — four, all his or the engine's, none staged:**
  - `scores/piece-sec05-a.json` — untracked: HIS copy of the piece, saved 18:25 (732 objects, 668.1 s, no strike in it) — as it reads, where section 5 goes. His to commit.
  - `scores/sec05-strikes-a.json` — untracked since §292: his section 5 experiment of the morning.
  - `scores/piece-3BodyRedo.json` — modified: his save of THE PIECE after the commit of §291. His live work; committed at his word.
  - `bank/samples/index.json` — modified: the engine's own write — the 266 short versions' rows of §337 and whatever his passes banked. The WAVs of those versions are renders (gitignored, D16). Committed at his word with his scores, as before.
  - *(gitignored, as they stood at the session end: the five working copies of `node tools/unsaved_check.js` — unchanged, none the piece.)*
- **The engine's repo is in step:** `git subtree push --prefix=electronics engine main` done after §337 (`770b73d`), the mirror pulled; nothing in `electronics/` changed since.

### CHECKPOINT #2 OF SESSION 3 *(2026-10-09, Opus — mid-session checkpoint; written for a session that has never seen this chat; RUNNING_LOG §326)*

- **The task and its state:** THE NOTATION (PLAN.md § 2) — the players' page, laid out IN THE NOTATION SCORE, section by section, at his
  eye. DONE: 2.1 the look (five white lanes, the staff only where it plays) · 2.2 the SOL colours named · 2.3 the six badges chosen ·
  2.4 the mic opening chosen AND BUILT in the notation engine, with the badge (§325) · **SECTION 1, THE OPENING, IS LAID OUT IN THE
  NOTATION SCORE** — not yet seen by him. The sections after it are NOT laid out: their signs are not decided.
- **HIS METHOD FOR THIS WORK (three rules, each learned the hard way today):** (1) a section's signs are DISCUSSED FIRST — nothing drawn
  until he asks to see · (2) once he asks, what is decided is BUILT IN THE NOTATION APP ITSELF, never on a side page (DEC-104; a side
  page is only for choosing among candidate signs) · (3) a place said "for now" is made ONE WORD OF A ROW, so moving it is a reload.
- **The latest deliverable:** the page `approaching-opening` — http://localhost:5500/notation/app/notation.html → the menu `ir`:
  *Approaching — the opening (0 … 37 s)* → the menu `view`: video → RIGHT ARROW for pages 2 … 4. On it: 30 mic openings (yellow
  bricks) at the TOP of their lanes · the notes silent (no arc, no head, no brick) · the short attacks' badge before each lane's first
  opening. It was cut by:
  `node tools/notate_section.js --score piece-3BodyRedo --w0 0 --w1 37 --id approaching-opening --label "Approaching — the opening (0 … 37 s)" --mics --silent 0-37 --announce shortAttacks:0:37`
- **THE NEXT CONCRETE STEP:** ask him, in ONE line, what he saw on section 1 in the notation score, and his letter on the announcing
  badge — **a** as drawn (before each lane's first mic opening) · **b** all five in a column where the section begins (the same cut with
  `--announce shortAttacks:0:37:start`) · **c** none in the opening (the same cut without `--announce`). A change he asks of the mic's row =
  ONE WORD: `notation/registry/rules.json` `objects.micOpening.place` (`laneTop` · `laneMiddle` · `laneBottom`), then a reload of the app —
  no re-cut. A size = `gapSs` there, or `objects.badge` `sizeSs` · `gapSs`. After any row change: `node tools/gen_engraving_rules.js`
  · `node tools/check_rules.js` (31 of 32 is green here — the one red is §45's).
- **THEN, at his word, the next section in HIS order — THE THREE BODY PROBLEM (39 … 123.3 s): a TALK first.** To settle, from
  `docs/NOTATION_SCHEME.md` § 3: its LINE WEDGE (he wants its colour and thickness to change with the player's state) · a simple sign
  per state (an abbreviation? a number?) · its own badge, large, with the short attacks' small beside it · where they sit in the lane
  (no mics in that section). **LINEAGE FIRST, before proposing a look:** the stack already has an animated line wedge
  (`rules.json` `objects.lineWedge`, `anim:lineWedge` — marked "#4 D48 (disabled)") and piece #2 has a three body badge (three discs on
  orbits, no square); the five players' containers are plain zones in the save (`zoneFunction: 'tb'`, `properties.tb` — `docs/THREE_BODY.md`).
  After it: section 2 (the arc of an accented long tone meeting its mic at the lane's top) → the drones (a badge and a PIE DIAL on each
  opening — the stack's `motivePie`; the cutter's `--micBadge multiphonics:t0:t1` is built) → the beating section → the strikes.
- **Resume reads:** `docs/NOTATION_SCHEME.md` — the scheme as it stands, decided and open, by section; the next step is a talk about it.
  Nothing else. The device sheet and the build are RUNNING_LOG §325; they are read at a question, not by habit.
- **Decisions pending him:** the announcing badge, a · b · c · whether the top works for the mic · the gap's size (7.9 px, the AI's
  first number) · pitch and percussion instrument as the player's choice (the AI's reading, unconfirmed) · THE CONDUCTOR'S VIEW —
  HELD by him until after the layout (his idea for section 1: the flocking badge and a duration line or line wedge, marked as the
  electronics' by "an italics equivalent"). **Still waiting from before, never raised unless he asks:** his ear on `strike-rig`
  (checkpoint #1, below) · his eye on the palette page · the parked list.
- **Not done, so not claimed:** the film and the print were not rendered since the build (they draw from the same renderer) · page 4
  of the opening shows a bar at 37 s — the end of that CUT, not of the piece · §324's working page (`/signs/layout.html`) is superseded
  for section 1 and left standing.
- **Model:** this stretch ran on Opus at his word (talks and builds alike, no clear). By THE RHYTHM: the three body TALK is Fable's; a
  build from what the talk decides is Opus's. He chooses.
- **Deliberately uncommitted:** `scores/sec05-strikes-a.json` — HIS experiment score (untracked since §292), never staged without his word.
  Nothing else: the tree is clean.

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
| ☑ | 2.2 the SOL colours named (§307) · 2.3 the six badges chosen (§318) · 2.4 the mic opening chosen (§319) and BUILT in the notation engine with the badge (§325) · SECTION 1 laid out in the notation score (`approaching-opening`) | Opus | — |
| ☑ | section 1's numbers (DEC-105 … 109) · PLAN 2.7 THE PRESENTATION VIEW opened and SECTION 1 OF IT BUILT — the window, the flocking badge, the purple brick (§333 … §338, DEC-110 … 114) · the strikes' replies on the two short endings, HEARD AND GOOD (§337 · §339, DEC-113 · 115) | Fable (at his word, talks and builds) | — |
| **►** | **THE TAKE (the audio with the live electronics) — BUILT, PROVEN, THE FIRST FULL TAKE MADE (§386 … §388): `notation/audio/piece-Draft01c.wav`; NEXT: his ear on it; a new take whenever the score is saved again. After it: his ear on the handover's A · 2 … 4 · his next word on the notation of the electronics (the notation talk reads `docs/NOTATION_SCHEME.md`)** | **Fable** (his word; the talk) · Opus (a build from a decided look) | cleared at this checkpoint |
| ☑ | the FX audition and what followed it (§367 … §378): the audition's bricks fff · the diodes at mix 1 · the card's settings line · the opening on rolled pitches, 10 distortions, written fff (`piece-Draft01c`) · the distortions one card of a deal · the trills' preset · the last petal hit (two rounds) · the ELEC heads | Opus (§377 Fable) | — |
| — | **(the row before, kept:) ASK, in one line, what he found in `audition-sec01-fx` (the opening's 74 processed versions) — then act on his word (checkpoint #4 of session 3). Open beside it: his eye on the three body pages · his ear on `piece-Draft01` · SECTION 2 of the notation, a talk** | **Fable** (the talks) · Opus (a number, a re-cut, a re-roll, a build from a decided look) | a clear before a talk is cheap: the docs carry everything |
| ☑ | SECTION 5 composed, built and IN THE PIECE (`piece-Draft01`, 12:59) · the three body problem's notation (the wedge, the badges, the state signs, the computer players) · the opening's badge before every mic opening (§340 … §367) | Fable (talks) · Opus (builds) | — |
| — | **(the row before, kept:) ASK, in one line, what he wants: his eye on the presentation page · the page that looks cropped (which page, which view — DEC-116) · the strikes (17.2). Then, in his order: THE THREE BODY PROBLEM's signs — a talk, then built in the score (its presentation view with it); section 2 · the drones · the beating section · the strikes after it** | **Fable** (the talks) · Opus (a number, a re-cut, a build from a decided sheet) | a clear before a talk is cheap: the docs carry everything |
| — | 17.2 THE STRIKES' CATALOGUE decided — a talk (the rig is heard: "those strikes are good"); then 17.3 the come-backs and the section simulated; his copy of the piece for it: `piece-sec05-a` (journal §2's checkpoint #1 workflow) | Fable (the talk) · Opus (the build) | — |
| — | his ear on `piece-3BodyRedo` (the three body's new take, 39 → 125 s; the whole piece) — at his word | Fable | — |
| — | THE NOTATION — container 6's three calls (his), then a DEVICE SHEET per sign (`docs/PLANNING_METHOD.md` § THE DEVICE SHEET; `docs/PERFORMANCE_NOTES.md`, a row per glyph): the mic opening · the return · the petals · the drones' duration line · the sine's window · the three body's containers | Fable (the design) · Opus (the builds) | clear between sheets |
| — | THE LIVE-ELECTRONICS DISCUSSION — after the notation, his order (`docs/NITS.md`, its blocks) | Fable | clear |
| — | THE PAPER — his; the record is the two logs | — | — |
| — | The parked list — only at his ask, the bare list first | Fable (the talk) · Opus (a knob) | — |

**Open questions:** Q1 — the ensemble: the call has not announced the final instrumentation (his to check; D2) · Q2 — the title: *Approaching*, TENTATIVE since 2026-10-09 (DEC-87; the cover takes it at 8.6) ·
Q3 — CLOSED 2026-10-09 (DEC-99: the players do not see what the electronics play back; a hint only in the conductor's / presentation view, PLAN.md 2.7, held) — it asked: section 3's electronics (the stacks): in the parts, or only in the conductor's and the presentation score? (*"I'm not sure"*,
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
