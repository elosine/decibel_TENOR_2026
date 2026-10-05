# PROJECT JOURNAL — decibel_TENOR_2026 (the Decibel piece)

> One file. Seven sections. Everything important lives here.
> §2 is read at every session start — keep it ~40 lines; trim old sessions to one line each.
> The lab journal (`RUNNING_LOG.md`) is the raw trail underneath; this is the curated state.

---

## §1 Quick-Start

- **The piece:** for the Decibel ensemble — bass flute · bass clarinet · viola · cello · percussion · electronics, NOT
  FINAL (D2) · written for the TENOR conference's call (the AI has not read it) · the title: see the names below
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

### RUNNING ORDER — THE BRIEF OF 2026-10-04 (his dictation, Fable; the order his, the breakouts the AI's — RUNNING_LOG §2) — THE START FINISHED, THEN THE OPENING COMPOSED, THE ELECTRONICS BUILT AS THE MUSIC REACHES THEM

**APPROVED by him 2026-10-04 (RUNNING_LOG §5): *"yes, the order is good — let's rejoin the port"*.** **HOW THIS LIST WORKS:** one step at a time — ► marks the active step, ☑ marks done; update the marks the moment a step wraps, not
later. At every wrap the AI states: what finished · what's next · where we are in the order. The AI proposes reorganizations when
useful; changes land only on his approval. A post-clear model reads this block and announces the position before doing anything.

**What this is:** his brief for the piece and for the day, as to-dos in order — two halves. **I. THE START:** the protocol's
containers 3 → 7, as far as they go (8 the deliverables is not here). **II. THE ELECTRONICS AND THE OPENING:** section 1 composed,
each electronics object built the moment the music needs it; the AI sorts where its code goes (CLAUDE.md § THE SORTING) — he never
decides that. Sections 2 · 3 are notes (DEC-2 · DEC-3) and the PLANNER's outline only. "Done when" is a step's gate; the time it
takes is his (D5).

**I. THE START**

1. ☑ **Container 3 — the engine copied forward from piece #6** *(DONE 2026-10-04 — RUNNING_LOG §6 … §16)* (Opus; in a NEW chat opened in this folder). ASK FIRST, one at a
   time: (a) the protocol's 3.8 — seven small fixes made in piece #6 BEFORE the copy (`#6` journal §2, item (a), has them as
   instructions) — ☑ ANSWERED 2026-10-04, *"b"*: made HERE, in one commit after 3.2 and before 3.3; piece #6 untouched
   (RUNNING_LOG §6; a line in PROTOCOL_DEVIATIONS) · (b) piece #6's files newer on disk than in git, all his (its journal §2's list) — the copy takes the piece's files
   from GIT, or he says which go across — ☑ ANSWERED 2026-10-04, *"a"*: NONE go across; the copy is from git, every library starts
   empty here (RUNNING_LOG §7). Then 3.0 the survey → 3.1 the copy byte-exact, committed as such → 3.2 proven whole, every
   battery run and classified ONCE (NITS) → 3.3 THE RE-PALETTE: the lanes **bass flute · bass clarinet · viola · cello · percussion**
   — the percussionist on one lane or two (a non-pitched staff and a pitched one, as piece #6: his call at container 4; a lane can be
   added or re-spaced later, RUNNING_LOG §3) · NO LANE FOR THE ELECTRONICS (his word 2026-10-04, D8 — the AI's addition reversed:
   every electronic sound derives from a player's own input and is drawn on THAT player's staff, with a sign of origin) →
   3.4 recipes and skeletons → 3.5 the app running on **5500 / 5000** (`.claude/launch.json`: `score` · `sandbox` · `score-5501`
   the throwaway · a `lgmf-5400` entry only if he wants piece #6's server beside it) → the names of §1 confirmed against the code and
   `docs/NAMING.md` §1 written → `docs/VERIFICATION_RECIPE.md` re-pointed. **Done when:** the composer score opens on the Decibel
   lanes, every check green or classified, pushed.
2. ☑ **Container 4 — the instruments** *(DONE 2026-10-04 — RUNNING_LOG §18 … §43; the how-to pages §44)* (**4.1 ☑ · 4.2 ☑ 2026-10-04 (RUNNING_LOG §19): nine `DEC` ports made by the AI; the rack built as text, three tracks cloned and sounding.** **4.0 THE TALK — ANSWERED 2026-10-04 (RUNNING_LOG §18; Ricotti is a KONTAKT library, §19): Xsample for the bass flute (NEW) · bass clarinet · viola · cello; Spitfire Ricotti Mallets the pitched lane, four instruments on ONE lane (DEC-5); the unpitched percussion OPEN — he gathers; the rack built BY THE AI, three Xsample tracks cloned from pieces #5 · #6's racks, his loads the two new libraries.** *The brief was:* 4.0 a SHORT TALK first, Fable — which library for each; the candidates from the lineage, to
   look at, not decided: the Xsample bass clarinet (piece #3's deep map) · the Xsample strings for viola and cello (piece #1; piece
   #6's cello recipe) · the bass flute — Xsample or IRCAM SI2, whichever has it · the percussion — Spitfire ARO (pieces #2 · #6),
   WHICH instruments his). Then 4.1 the ports `DEC…` from a standard name set → 4.2 the tracks by the bridge → 4.3 his loads → 4.4
   the state as text → 4.5 the recipes → **4.6 THE FIRST SOUND** → 4.7 the record. **Done when:** every instrument sounds from the
   composer score.
3. ☑ **Container 5 — the calibration** *(DONE 2026-10-04 for a composing demo — §40 … §43: sixteen faders, four curves; his ear and the QC battery remain)* (piece #6's 1b method: 5.1 the reference in the rack · 5.2 the pre-flight — clipping, the
   round robins · 5.3 the card · 5.4 the trims · 5.5 the remap and the fader curves · 5.6 verified through the app and his ear · 5.7
   the QC battery). **Done when:** the tutti and the per-part levels measured and recorded, the law applied.
4. ► **Container 6 — the notation set-up** *(the registry, the gates, save → IR, the exporters DONE 2026-10-04 — §45; OPEN: his three calls — the pitch form, the percussion staff's line order, the short names — and the app-written test page at his first material)* (6.0 the ensemble registry: the clefs by register, the bass clarinet's transposition, the
   percussion staff type · NO electronics staff (D8) — the electronics' signs are DRAWN KINDS on the players' staves, each by a
   device sheet when notating comes (DEC-4; the engine plan's part 7) · 6.3 the batteries · 6.4 save → IR proved on a save of
   the Decibel lanes · 6.5 the exporters run once). **Done when:** a Decibel save extracts to a valid IR and lays out on the page.
5. **Container 7 — the composing tools, at need** *(one item done 2026-10-04: the Texture panel's click is this rack's — §45; the rest waits for the music)* (7.0 the law read · 7.1 the data checklist · the first tool the moment the music
   asks — for step 7 the Rec lane and the bricks' moving between lanes, which exist). No tool adapted ahead of need.

**II. THE ELECTRONICS AND THE OPENING** *(the engine plan's parts in brackets — `live-electronics-system/docs/PLAN.md`)*

6. ► ACTIVE (the talk begun 2026-10-04, Fable) **The seams and the sound path — the AI's, before the first object** [parts 2 · 3 · 4]: ONE READ of the sandbox
   `live-electronics-engine` — what it is built on decides the sound seam (a folder `SynthDef_petalsOfResonance` under GitHub says
   SuperCollider; the read says) · WHERE the engine's code sits here — `electronics/` (D7) — and how the composer app loads it (a
   script tag; a static route in `score/server.js`) · THE MESSAGE from the score to the sound: the stack already sends MIDI from the
   browser over loopMIDI — a dedicated `DECElec` port is the first candidate, OSC through the score server the other · THE SOUND PATH
   IN THE SIMULATION: the "live instrument" is the sampled instrument's audio in Reaper — a window of it RECORDED to a file (the bank) ·
   a banked file PLAYED at a time · a window's audio FED to an effect · the playback route (new Reaper tracks or items) · the
   mastering chain from the sandbox. Put to him only what is his. **Done when:** `docs/SEAMS.md` in the engine says each seam; one
   message from the composer score reaches the sound process and is seen there.
   **THE TOP LINE — APPROVED by him 2026-10-04 (*"Order is good"*; RUNNING_LOG §47 · §48). The sound process = SuperCollider real-time,
   fed by Reaper over ReaRoute; SC's master IS the output live; in simulation Reaper is only the players and one FLAT return track
   (the loudspeaker). The pedals of resonance and the recent engine's processing = phase 2, not here.** Sub-steps, one at a time:
   **6.1** the audio route Reaper → SC → Reaper — a sampled note heard passing through SC untouched · **6.2** the message route — one
   brick's onset seen in SC with its data (OSC through the score server — DECIDED 2026-10-04, D10; §57 · §58) · **6.3** the opening brick + SC's capture — a window of N
   seconds on one player lands as a file in the piece's bank · **6.3b** the crop — the recording trimmed to the attack itself,
   reliably, before it is named (his word 2026-10-04, DEC-8; the reorganization approved, *"a"*) · **6.4** the sample index — one file, a row per sample (id · name ·
   player · time · length · category · file), written by the capture, read by the score · **6.5** the playback brick — a few seconds
   later SC's buffer player returns the sample through Reaper · **6.6** the demo end to end from the composer score, and the record
   (`SEAMS.md` in the engine · the engine's log · this log · `git subtree push`).
   **► 6.1 LAID OUT AND WRITTEN 2026-10-04 (his word *"a, write it"*; PLAN.md 1.1 has the sub-steps (a) … (f); the engine's plan 4.1
   the generic form). NEXT: ITS BUILD — Opus, after a clear.** In one line: ReaRoute checked → SC's boot file in `electronics/sc/` →
   a send from the bass clarinet track + the flat `ELEC RETURN` track, through the bridge → a pass-through patch → verified on his
   Chrome, the latency measured → the log and the first `SEAMS.md` lines.
   **► 6.1 BUILT 2026-10-04 AS FAR AS THE MACHINE ALLOWS (Opus, RUNNING_LOG §51) — TWO HAND STEPS OF HIS, THEN THREE COMMANDS.** Found:
   ReaRoute is NOT installed · his Reaper is on WASAPI. Built and proven without them: the engine seated at `electronics/` (a git
   subtree — D7) · the SuperCollider code and its self-test (`node tools/elec.js selftest`: all pass) · this rack's route job and
   tool (`node tools/elec.js probe` says what is missing; `route` refuses and changes nothing; the note reaches the bass
   clarinet's track at −26.24 dB). NOT PROVEN: the crossing. **HIS:** (1) close Reaper, run Reaper's installer again (same version),
   tick "ReaRoute ASIO driver", start Reaper · (2) Preferences → Audio → Device → Audio system ASIO, ASIO driver UMC ASIO Driver.
   **THEN:** `node tools/elec.js probe` (must say nothing is missing) → `route` → he saves the rack → `check` → `latency`;
   `start_electronics.bat` starts the engine for him after that.
   **☑ 6.1 DONE 2026-10-04 (Opus, RUNNING_LOG §54) — THE CROSSING PROVEN.** His two steps done (Reaper 7.82 · ASIO · ReaRoute). The route
   is in the rack: the bass clarinet's send to ReaRoute 1 and the flat track `ELEC RETURN` (17; `REC` is 18) — **UNSAVED, his CTRL+S.**
   One note to `DECBassClar`: heard by the engine −42.6 dB · sent −42.6 · back −42.63 — unity; **the round trip 23.22 ms = two of
   Reaper's blocks of 512.** Learned: Reaper lists ReaRoute's channels at hardware index 512 … 527 · the track's own meter reads BEFORE
   the fader — the master is the reference. NOT CLAIMED: his ear. **► NEXT: 6.2, the message route — a talk (Fable).**
   **AFTER HIS FIRST LISTEN (RUNNING_LOG §55):** he heard no return. The AI's probe had killed his engine (the runner swept every server
   on the port) — FIXED: the runner sweeps only its own, refuses to boot beside a live engine, and `probe` / `meters` leave a live
   engine alone. A straight pass-through is 23 ms behind and is not heard as a second sound, so `start` now returns each note ONE SECOND
   later (`bank/elec_route.json` `listenEchoSeconds`) — a listening aid until the playback brick (6.5). Proven by the meters with the
   engine up (ELEC RETURN −42.62 dB); HIS EAR STILL OPEN.
   **☑ HEARD BY HIM 2026-10-04 — *"I hear it now, let's go on to 6.2"* (RUNNING_LOG §56). 6.1 IS CLOSED. ► 6.2 THE MESSAGE ROUTE IS NEXT.**
   **► 6.2 LAID OUT AND WRITTEN 2026-10-04 (Fable; his words *"a, lay it out"* · *"a, write it"* — RUNNING_LOG §57 · §58 · §59): OSC through the
   score server, concert and simulation on ONE road (D10 — the correspondence rule, his); the loopMIDI trigger rejected; PLAN.md 1.1 has
   (a) … (f), the engine's plan 4.2 the generic form; 6.3b THE CROP added after the capture (DEC-8). NEXT: ITS BUILD — Opus, after a clear.**
   **► 6.2 BUILT 2026-10-04 (Opus, his word *"build here no clear"* — RUNNING_LOG §60): PROVEN TO THE EDGE OF WEB MIDI.** The engine hears
   on UDP 57211; the composer page's own playback reached it — `onset · bcl · lane 1 · brick wc-2 · at 5.0 s · due in 99.0 ms`; hello
   through the score server 0.71 ms; a real note paired with its message. NOT MEASURED: the score's lead over its own sound — HIS CHROME,
   two hand steps (restart the score server · `start_electronics.bat`). **► NEXT: 6.3 + 6.3b, the opening brick, the capture and the crop — a talk (Fable).**
   **☑ 6.2 DONE 2026-10-04 (RUNNING_LOG §61) — THE LEAD MEASURED ON HIS CHROME: the message leaves 92.8 ms ahead of the note, the note's
   sound reaches the engine 114.2 ms after the message.** His word: *"Let's just try to avoid unnecessary testing … What's next? Let's move
   on."* **► 6.3 · 6.3b · 6.4 · 6.5 PROPOSED AS ONE BUILD — the first object end to end (§61); his go awaited.**
   **► 6.3 … 6.6 LAID OUT AND WRITTEN 2026-10-04 (Fable; his word *"a, write it"* — RUNNING_LOG §62): both bricks are ZONES WITH A NEW
   MODEL (`elecOpen` · `elecPlay`), the capture from the message to the window's end, the crop in the engine by a rule his ear tunes,
   the index in the piece's bank with the engine's schema, the playback scheduled on the engine's clock; PLAN.md 1.1 has every sub-step,
   the engine's plan 4.3 … 4.4 the generic form. NEXT: THE BUILD — Opus (a checkpoint and a clear recommended; his call).**
7. **The rhythm layer — his composing** (DEC-1): he plays a series of notes into the composer score (the Rec lane); the rhythms
   kept, the pitches not; the bricks moved to the instruments' lanes. No build expected; a fault → `docs/SWEEP_LIST.md`.
8. **THE MIC OPENING — the first electronics object** [part 11's first member · part 5 the first sound, re-read by his brief: a
   note CAPTURED and RETURNED; the filter comes at step 10]: a brick on an instrument's lane becomes a WINDOW — its time · its
   length · its instrument · a CATEGORY (the Braxton-like type: "short", "accented long tone" … — a field on the brick that reaches
   the IR; the glyph is the notation's, later — part 7; PERFORMANCE_NOTES #1) · in the simulation he picks the instrument and the
   articulation; it sounds as played · THE BANK: the window's audio recorded and stored under a NAME — a shape or a colour (LG-342 ·
   LG-345); the store in this repo (the samples are the piece's), the mechanism in `electronics/`. **Done when:** one opening placed,
   one note heard, one file in the bank, named; played back on demand.
9. **THE RETURN — the sample comes back** [part 11's second member; the algorithm the engine's]: a second rhythm series; at each
   onset the player's banked sample is placed NEARBY — directly before or after — by an algorithm (its dials: before · after · both ·
   the offset range · which of the player's samples · a seed) · the iterations: two versions of themselves, three … · the returned
   sample named in the score by its shape or colour (LG-342; the notation later — PERFORMANCE_NOTES #2). **Done when:** a series
   plays with each player's first sample beside the live note, and he has placed the second series himself.
10. **THE PROCESSING — the first effects** [part 6; part 2's port of the basic machinery as far as this needs]: the pedals of
    resonance — a resonant filter bank with much feedback: a window opens an instant, excites it, a long sustained chord sounds (his
    spelling to confirm: "petals" in the folder's name, "pedals" in his words) · a SERIES of these developed for the piece · a freeze ·
    a set per language type — trills and multiphonics recorded as samples first, each with its effects. **Done when:** one window
    excites the filter bank and the chord is heard from the composer score; the series grows by need.
11. **The record, as the work happens** (not a step he sees): this RUNNING_LOG · the engine's RUNNING_LOG for what is the engine's ·
    the sketch pad · PERFORMANCE_NOTES a row per glyph · the sweep list · `git subtree push` at every wrap (D7).

**Behind this order, not in it:** section 2 (DEC-2: the after-effects rendered in the background from section 1's bank · pitch
extracted or pushed) · section 3 (DEC-3: a responder object; the machine's part unwritten in the players' score) · container 8 the
deliverables · the planning repo's lines (at his word only).

### SESSION 1 — THE START IS DONE BUT FOR HIS EAR (2026-10-04, Fable · Opus; one long chat) — containers 3 · 4 · 5 done, 6 set up, 7 one item; ► NEXT: running order step 6, the electronics' seams

*(This block was rewritten at the checkpoint. How each thing was made, tried and rejected is RUNNING_LOG §6 … §45 — go there by a
question, not by habit.)*

- **THE RACK — `reaper/decibel_rack.rpp`, HIS, committed.** Built by the AI as text and through the bridge (§19 … §22). 17 tracks:
  Bass Flute XS · Bass Clarinet XS · Bongos ARO · Shime Daiko ARO · Bass Drum Alt ARO · Wood Blocks ARO · China Cymbal ARO · Spring Coil
  ARO · Suspended Cymbals ARO · Toms ARO · Crotales RM · Glockenspiel RM · Xylophone RM · Marimba RM · Viola XS · Cello XS · REC.
  A track is added or re-cloned THROUGH THE BRIDGE, never by rebuilding the file (`tools/build_rack.js` refuses).
- **THE PORTS — nine, made by the AI** (loopMIDI's registry key; §19): `DECBassFlute` · `DECBassClar` · `DECPerc` (eight instruments,
  channels 1 … 8) · `DECCrotales` · `DECGlock` · `DECXylo` · `DECMarimba` · `DECViola` · `DECCello`. Enabled in Reaper by him.
- **THE LIBRARIES:** Xsample (Kontakt) for the bass flute (new; factory instrument, ordinary #15), the bass clarinet and viola
  (cloned from piece #5's rack ON DISK), the cello (cloned from piece #6's) · Spitfire RICOTTI MALLETS — a KONTAKT library — one
  Kontakt per instrument, one slot per patch on its own channel (`bank/ricotti_catalog.json`, 39 patches, his ranges) · Spitfire
  Abbey Road for the percussion, his TENTATIVE list (DEC-6): bongos · shime daiko · bass drum alt · wood blocks · China cymbal ·
  spring coil · suspended cymbals (bright) · toms (high).
- **THE RECIPES — every lane** (`sandbox/instruments.js`; §25 · §34): bass flute 32 presets · bass clarinet 34 · percussion 8
  instruments (`bank/perc_selection.json` → `tools/apply_perc.js`) · MALLETS 39 patches (`tools/apply_ricotti.js`; the lane's
  internal key is still `bowed_vibraphone`, its track id `vibraphone` — kept on purpose) · viola · cello. A struck lane carries
  `curveTechniques: []`. **ALL 16 SOUND FROM THE COMPOSER SCORE in his Chrome** (`scores/decibel-first-sound.json`; §36).
- **THE LOUDNESS — done for a composing demo** (§40 … §43): the instrument card (`bank/instrument_card.json`, 16 instruments), the
  chain proven against piece #6 within 0.4 dB, **sixteen faders** (`bank/trims.json` → `apply_trims.lua`; each voice at piece
  #6's −31.84 dB), **four dynamics curves** (`bank/velocity_remap.json`: bass flute · bass clarinet · viola · cello). ROUND ROBIN
  SKIPPED at his word (§39). `make_tracks.lua` resets its faders to 0 dB — run `apply_trims.lua` after it.
- **THE NOTATION — set up** (§45): `notation/registry/ensemble.json` is the six parts (BFl +12 · BCl +14 · the eight-line unpitched
  staff · Mal · Va alto · Vc bass); 233 technique keys (`tools/register_techniques.js` after ANY new recipe key — the extractor
  throws on an unregistered one); the first page `notation/ir/decibel-first-sound.ir.json`, valid, drawn, exported.
- **THE TOOLS MADE TODAY** (each with its header): `tools/build_rack.js` · `note_to_port.ps1` · `key_sweep.js` ·
  `ricotti_loaders.js` · `apply_ricotti.js` · `build_first_sound.js` · `card_schedule.js` (re-made) · `remap_merge.js` ·
  `register_techniques.js` · `reaper/bridge/jobs/sound_check_vkb.lua` · `reaper/kontakt/load_*.lua` · `reset_bass_flute.lua`.
  The how-to pages: `composition-system/protocol/howto/` (rack · kontakt · spitfire-aro · measuring).
- **THE CHECKS, green:** `palette_check` 151 · `roster_check` 310 voices (32 by-key pending, at his word) · `test_written_pitch`
  (this ensemble's ten cases) · `test_snapshots` · `spectrum_check` · `accel_calc_check` · the three under `score/tools/` ·
  `ir_validate` on the first page. **Red by design, in NITS:** `check_rules` 31 / 32 (needs a page with a sequence) ·
  `dyn_table_check` one assertion (names piece #6's bassoon).
- **HIS WORDS ON HOW TO PUT THINGS TO HIM, said today (§27 · §28):** *"I'm finding the responses a bit too much text"* — a BARE
  LIST, one short statement per item, in order, no table, no detail; the how AFTER, one sentence each; the one decision last.

### OPEN AT SESSION END *(mid-session checkpoint #4, 2026-10-04, Opus — his `/checkpoint` with the first object laid out and written, before its build)*

- **The task and its state:** the running order's step 6, the electronics' plumbing — **6.1 the audio route ☑ · 6.2 the message route ☑**
  (RUNNING_LOG §51 … §61; D10 the correspondence rule). THE PLUMBING IS DONE; THE OBJECTS ARE NOT BUILT. **POSITION: step 6 of 11 is
  active; inside it 6.1 ☑ · 6.2 ☑ · 6.3 … 6.6 LAID OUT AND WRITTEN (§62) · ► THEIR BUILD next, as ONE — the first object end to end.** (1 ☑ · 2 ☑ · 3 ☑ · 4 set up, three calls of his open · 5 at need.)
- **What exists, for a session that has never seen this chat:**
  - **The engine is SuperCollider, real-time, and lives HERE in `electronics/`** — a git subtree of `live-electronics-system` (D7),
    WHOLE: its code `electronics/sc/` · `electronics/tools/sc.js` and its docs `electronics/docs/`. **Edit the engine's docs THERE;**
    the clone at `C:\Users\jwloy\GitHub\live-electronics-system` is a mirror. At every wrap, after the piece's push:
    `git subtree push --prefix=electronics engine main` then `git -C ../live-electronics-system pull --ff-only`.
  - **The wire:** the composer score → MIDI → the player's track in Reaper → a hardware send (mono, post-fader, unity) → ReaRoute →
    the engine (its server on UDP 57210) → its master → ReaRoute → the flat track `ELEC RETURN` (17; `REC` is 18) → what he hears.
    One player so far: `bcl` = Bass Clarinet XS on ReaRoute 1 (`bank/elec_route.json`). Unity through the engine; the round trip
    23.22 ms = two of Reaper's blocks of 512.
  - **The messages (6.2):** the composer page → `POST /api/elec` on the score server → OSC over UDP → the engine's LANGUAGE on
    **UDP 57211** (the server stays 57210). A message is `/le/<kind>` + NAME, VALUE pairs; `/le/hello` is answered. The page's code is
    the engine's (`electronics/score/le_msg.js`, served at `/electronics/`); the address and the test switch are in
    `bank/elec_route.json` (`message`: host · port · `testOnsets`). THE TEST HOOK: while `testOnsets` is true, a note the page plays
    on the bass clarinet's port also sends `/le/onset` — it goes at 6.3. The same road in concert (D10).
  - **He starts the engine with `start_electronics.bat`** (= `node tools/elec.js start`). It returns each note ONE SECOND later —
    a LISTENING AID (`listenEchoSeconds` in `bank/elec_route.json`) that goes when the playback brick exists (6.5).
  - **The machine:** Reaper 7.82 on ASIO (UMC ASIO Driver) with ReaRoute. **ASIO is the studio setting; over Chrome Remote Desktop he
    switches Reaper to WASAPI and the electronics are silent** — a remote route is *"maybe"*, not designed (§53).
- **The latest deliverable:** the message route — `electronics/sc/` (the ear · the onset probe · the session shows an onset and times
  the sound against it) · `electronics/tools/osc.js` · `relay.js` · `electronics/score/le_msg.js` · `score/server.js` (three lines) ·
  `composer.html` (one tag, one hook) · `tools/elec.js` (`ping` · `message`). The numbers: `probes/elec_message.json` (hello 0.71 ms; the
  page's own playback shown by the engine as `onset · bcl · lane 1 · brick wc-2 · at 5.0 s · due in 99.0 ms`).
- **► THE NEXT CONCRETE STEP — after `/clear` + `/postclear`, on OPUS: play back, STOP and ask. Then THE BUILD OF THE FIRST OBJECT,
  exactly as `docs/PLAN.md` 1.1 lays it out — 6.3 (a) → (f), 6.3b, 6.4, 6.5, 6.6 in order, each proven before the next.**
  **FIRST, ONE PLAIN SENTENCE TO HIM — a MUST, not a test:** his engine window is open (it was at this checkpoint: sclang and scsynth, his),
  and every engine run of the build (`selftest`, a bounded session) REFUSES beside it — ask him to close that window before the engine's
  half; never kill it. At the END, two more musts, said the same way: he starts the engine again (`start_electronics.bat` — his window runs
  the code it started with), and restarts the score server ONLY IF `score/server.js` or `electronics/tools/relay.js` changed.
  **The shape:** both bricks are zones with a new `midiModel` (`elecOpen` · `elecPlay`) made by `createZone`; the mixin
  `electronics/score/le_objects.js` adds the label, a panel section, the gesture and the tick's message; the engine's side in
  `electronics/sc/` (the capture, the crop, the index, `leSample`); the bank folder from a new `bank` block in `bank/elec_route.json` via
  `LE_BANK`. The placing is the AI's; he is told in ONE line what went where. **HIS WORD (§61): no check that needs his hands unless he
  asks — the listen at the end is OFFERED in one line. Hand steps, when they are his: all at once, each explicit (which window, the
  full path, the keys, what he should see).**
- **FOR THE BUILD — found this session, not to be derived again** (the dying session's notes; hints, not decisions, unless PLAN.md says so):
  - **In the composer** (`score/public/composer.html`, by name): `Composer` is a `const`, not on `window` · a zone is made by
    `createZone({ layer, startTime, endTime, zoneFunction: 'midiPreview', midiModel, color, opacity, zoneHeight, yOffset, performanceNotes })`
    — two callers make one over a selection (the trill's and the beating's): copy their shape · `renderZone`'s label is ONE chained
    expression on `zone.midiModel` · the zones' playback is `tickZoneMidiPlayback`; the notes' is `tickCurvePlayback`, whose
    `LOOKAHEAD_S = 0.1` and `perfAt(sec)` are the pattern for sending AHEAD (6.2's hook sits there, right after the note-on) · the bass
    clarinet is layer 1, its port `DECBassClar`; `scores/decibel-first-sound.json` has its one note `wc-2`, 5 … 7 s, key 50.
  - **The engine** (`electronics/sc/`): `~le.hear(kind, { |le, data, time, addr| })` is all a new message kind needs; `le_msg.js`'s
    `LE.send(kind, data)` all the page needs — only strings, numbers and booleans cross (the relay drops the rest) · an OSC string arrives
    in sclang as a SYMBOL · `~le.json` writes a FLAT event (numbers, strings, arrays of those) — an index row fits; a file of rows needs a
    small extension · the Event trap: a key must not share a name with a method (`boot.scd`'s header) · `\quiet` mode has no hardware:
    a capture can be tested there by putting a test tone on the player's bus, as `selftest.scd` E does · a parse error in a `.scd` prints
    NO `LE_` line — the runner only times out (exit 4): `node electronics/tools/sc.js run <file> --verbose` shows it.
  - **The piece's tool:** `tools/elec.js start` appends EVERY `LE_RESULT` line that has a `msg` field to `probes/elec_message_log.jsonl`
    — a new result kind (a capture's row) lands there too unless that filter is narrowed.
  - **The numbers:** a message is at the engine 114.2 ms before the sound it announces (sent 92.8 ms ahead; 21.4 ms from a note's own start
    to its sound at the engine) · hello through the server 0.7 … 0.8 ms · the route's round trip 23.22 ms.
  - **The machine** (`docs/HOW_WE_WORK.md` § MACHINE LESSONS; `docs/VERIFICATION_RECIPE.md`, its last AND SINCE): a Bash command over
    8 KB fails · a doubled backslash through the shell arrives as one — a file with backslashes is written by the Write tool · the
    throwaway page's non-GET stub must let `/api/elec` through · the pane has no Web MIDI: a note there makes no sound.
- **`Resume reads:`** this §2 · `docs/PLAN.md` 1.1 — the block 6.3 … 6.6 (THE PLAN OF THE BUILD) · RUNNING_LOG §62 (the design and its
  reasons) · `electronics/docs/SEAMS.md` · `electronics/sc/session.scd` · `electronics/score/le_msg.js` · `bank/elec_route.json` · the HEADERS
  of `electronics/sc/boot.scd` and `electronics/tools/sc.js`. Nothing else: DEC-7 · DEC-8 and §51 … §61 only by a question; the composer
  by a grep for the four names above, never by reading.
- **⚠ WHILE HIS ENGINE WINDOW IS OPEN** (IT IS, at checkpoint #4 — sclang and scsynth, his): only `node tools/elec.js probe`, `meters` and `ping` — they leave it
  alone. `check` · `latency` · `selftest` · `message` boot a server and refuse. Never kill a SuperCollider process the session did not start
  (§55: a probe once took his engine down).
- **Pending him:** what he heard of the rack · the three notation calls (the pitch form · the percussion staff's line order · the short
  names) · the electronics in remote sessions — *"maybe"*, not today · the ensemble's final instrumentation (the call's; his to check) ·
  whether "my improvisation with live electronics" is the improviser piece (§17) · "pedals" or "petals" of resonance (phase 2) · the
  planning repo's lines, at his word only · the porting protocol's hole (§37; `docs/PROTOCOL_DEVIATIONS.md`) — noted, not acted on.
- **Deliberately uncommitted:** nothing — `git status --short` is empty at checkpoint #4. (`probes/elec_message_log.jsonl` is committed: his engine window appends to it at every
  paired note while `testOnsets` is true.) Outside git, by design: `reaper/Media/*.wav` ·
  `reaper/kontakt/out/`. The engine's repo is in step (subtree push at this wrap; the mirror pulled). Pieces #4 · #5 · #6 and the sandbox
  were READ, never written.
- **Left running:** his Reaper on the rack · his score server on 5500, RESTARTED by him 2026-10-04 — it has the message route · HIS
  engine window (`start_electronics.bat` — sclang and scsynth, his: only `probe` · `meters` · `ping` beside it) · loopMIDI. Nothing of the AI's.

### THE SESSIONS BEFORE THIS ONE — one line each; the lab journal has them whole

- **S0 · 2026-10-03/04 (Fable, then Opus — in piece #6's repo and chat)** — the protocol drafted and the home made · the
  pre-conversation: three electronics pieces, one shared engine, a normal port for all three · this piece's profile, repo
  and names asked and answered · the kit built. `#6 §786 … §818`; RUNNING_LOG §1 here.

**NEXT STEPS · MODEL · CLEAR** *(the running thread — THE RHYTHM, CLAUDE.md. Keep current.)*

| # | Step | Model | Clear first? |
|---|---|---|---|
| **►** | **THE BUILD OF THE FIRST OBJECT END TO END — 6.3 · 6.3b · 6.4 · 6.5 · 6.6 as ONE**, exactly as PLAN.md 1.1 lays it out (LAID OUT AND WRITTEN 2026-10-04, §62). First: one plain sentence asking him to close his engine window | **Opus** | **DONE — checkpoint #4; `/clear`, then `/postclear`** |
| — | 6.6 the demo's record → step 7, his rhythm layer | Fable (each talk) · Opus (the builds) | — |
| — | **HIS, when he offers them:** what he heard · the pitch form · the percussion staff's line order · the short names (one edit of `notation/registry/ensemble.json` each) | — | — |

**Open questions:** Q1 — the ensemble: the call has not announced the final instrumentation (his to check; D2) · Q2 — the title ·
Q3 — section 3's electronics (the stacks): in the parts, or only in the conductor's and the presentation score? (*"I'm not sure"*,
DEC-4) · Q4 — the percussion: ANSWERED for now — the pitched lane = Ricotti Mallets, four instruments on one lane (DEC-5); the unpitched = his TENTATIVE eight (DEC-6) · Q5 — the three notation calls of container 6 (the pitch form · the percussion staff's line order · the short names). · **Q6 — ANSWERED 2026-10-04: OSC through the score server, concert and simulation alike (D10); the loopMIDI trigger rejected — no concert counterpart (§57 · §58)** · **Q7 — "pedals" or "petals" of resonance: the folder spells one, his dictation the other; at phase 2.**

**Blockers:** none.

**Standing warnings for this repo:** never bind **5400 / 4900** (piece #6's) or **5300 / 4800** (piece #5's) · piece #6 holds
uncommitted files that are his — never stage, move or edit anything there · this repo is PUBLIC — nothing personal lands
here · he keeps his own time: no schedule keeping, no route framed around a date (D5).

**Checks this piece owns:** `node tools/palette_check.js` (**151** — the tracks, the recipes, the ports, every per-instrument table, the
lane CSS; after any change to `TRACKS`, `sandbox/instruments.js` or a table) · `node tools/roster_check.js` (**310** voices) · `node
tools/model_bank.js --validate` · `node tools/unsaved_check.js` (before a commit of scores). THE SHIELD (`tools/layout_shield.js`)
before and after any layout change — it needs pages (container 6). The engine's batteries: `tools/port/` (RUNNING_LOG §16).

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

24. ‹…›

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

---

## §5 Playbooks

*(Mode-specific procedures and gotchas. The last piece's §5 holds the engine's playbooks; bring one
across when its system lands here and is first used.)*

---

## §6 Done

- 2026-10-04 — **0 · container 2** the repo and its kit: the profile, the repo, the names, the method docs carried, the
  record docs from the skeletons (RUNNING_LOG §1; `#6 §816 … §818`).
- 2026-10-04 — **0 · container 3** the engine copied forward: 369 files byte-exact from piece #6 @ `0d70fda`, proven whole, the
  small fixes, six Decibel lanes on 5500 / 5000, provisional recipes, verified in the running app (RUNNING_LOG §6 … §16; D9).

---

## §7 Human Notes

*(The composer's own to-dos and reminders. Reviewed at session end.)*

- **THE PAPER (2026-10-04):** *"I'll need to create a paper directly after finishing the piece or during it somehow, same deadline. So
  let's keep good journal notes. Like lab notes along the way."* — a standing reminder for this piece; CLAUDE.md carries it.
- **THE PAPER, CORRECTED (2026-10-04, RUNNING_LOG §17):** *"a correction for the tenor call. I'll write one paper talking about both
  the decibel piece and my um, improvisation with live electronics."* — ONE paper, two subjects. The record of the electronics is
  kept so it reads for both: the machinery in the engine's lab journal, this piece's use of it here.
