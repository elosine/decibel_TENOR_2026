# PLAN — decibel_TENOR_2026

> **Rules:** IDs are stable — never renumber, only append. Status: `todo` / `doing` /
> `done` / `deferred` / `dropped`. Position = order. Every item keeps a one-line ***why***.
>
> **How an item gets its sub-steps:** `docs/PLANNING_METHOD.md` — with the composer, one
> step at a time: the goal, then the sub-steps, then written here at once. An item he has
> not yet discussed carries one line: *to be laid out when we discuss it.*
>
> **Two standing rules, carried from piece #6** (this piece takes THE SCORE layer, the animated scrolling score): every
> item that draws a NEW notated class names its EDGE CLASS · a NEW notation begins with a DEVICE SHEET
> (`docs/PLANNING_METHOD.md`).
>
> **The live electronics are planned in the ENGINE's plan,** `live-electronics-system/docs/PLAN.md` (twelve parts): what
> is generic machinery is laid out and built there; what is this piece's USE of it is an item here.

## The piece in one line

For the Decibel ensemble — bass flute · bass clarinet · viola · cello · percussion · electronics, not final (D2) — with live
electronics from the shared engine (D4 · D7) · for the TENOR conference's call · an animated scrolling score · three sections (his
brief, DEC-1 … DEC-3): THE OPENING — mic openings that bank what the players play, their samples returned beside them, then the
processing · THE MIDDLE — the after-effects alone, sustained · THE LAST — a hocket of strikes, the machine answering unseen.

## The profile (the protocol's 2.1)

- the kind of start: **copy-forward** — from piece #6, `septet_LGMF_2026` (D1)
- the layers taken: **both** — the instrument and the score
- the score type(s): **the animated scrolling score**
- the protocol version run: **v1** — its first run

## The timeline that binds everything

| | |
|---|---|
| 2026-10-04 | project opened, kit installed (2) |
| November 14 — his word (`#6` LG-334) | the call's due date. Recorded, not managed: he keeps his own time (D5) |

---

## 0. Setup — the new-piece protocol, for this piece's profile — `doing`

> **This section IS the protocol** (`composition-system/protocol/NEW_PIECE_PROTOCOL.md`), not a copy of it.
> Its containers and step IDs are used as they stand (2.1 … 8.x) — read the steps there.
> Here only: which containers the profile takes · each one's status · where its record is.
> A step done differently from the protocol gets ONE line in `docs/PROTOCOL_DEVIATIONS.md`, at that moment (10.2).

| Container | Taken? | Status | Record |
|---|---|---|---|
| 2 The repo and its kit | yes — every piece | `done` 2026-10-04 | RUNNING_LOG §1 · `#6 §816 … §818` |
| 3 The engine copied forward | yes — from piece #6 | `done` 2026-10-04 — the copy 369 / 369 · proven whole · the small fixes here · six lanes (D9) on 5500 / 5000 · provisional recipes · verified in the running app | RUNNING_LOG §6 … §16 · § 0.3 below |
| 4 The instruments | yes | `done` 2026-10-04 — the rack built by the AI (nine ports, three tracks cloned, sixteen sounding), the recipes for every lane, the first sound from the composer score, the how-to pages (RUNNING_LOG §18 … §44) | |
| 5 The calibration | yes | `done` 2026-10-04 for a composing demo — the card (16 instruments), the chain proven against piece #6 within 0.4 dB, sixteen faders, four dynamics curves; round robin skipped at his word. Open: his ear · the QC battery (5.7) | RUNNING_LOG §29 · §40 … §43 |
| 7 The composing tools made the piece's | yes — one at a time, at compositional need | `at need` — one item done 2026-10-04 (the Texture panel's click); 7.0 the law read and 7.1 the data checklist at the first tool he reaches for | RUNNING_LOG §45 |
| 6 The notation set-up — the animated scrolling score | yes | `► set up` 2026-10-04 — 6.0 the registry (six parts) · the technique keys (233) · 6.3 the gates · 6.4 save → IR valid and drawn · 6.5 the exporters run. Open: his three calls (pitch form · the percussion staff's line order · short names) · the app-written test page at his first material · 6.6 · 6.8 · the shield | RUNNING_LOG §45 |
| 8 The deliverables pipeline — the animated scrolling score | yes | `todo` | |

*Outside this table:* container 1 (the harvest) is run in the LAST piece's repo · 9 (the collation) is the home's
index, read at every session start · 10 (the upkeep) closes this section — 10.0 at the end of the start, 10.1 at the piece's close.

**The engine, in this piece's start (D4 · D7).** The live electronics are NOT a container of the protocol. The engine's code is BUILT
HERE, in `electronics/` — ordinary files of this repo, a git SUBTREE kept in step with `live-electronics-system` by the AI at every wrap
(D7); the other pieces take it the same way (the engine plan's part 8, written at its first use). Its first objects come with the
music — journal §2's RUNNING ORDER, steps 6 … 10: the seams and the sound path · the mic opening · the return · the processing. That
needs container 3 done here (the composer score must exist). Not at set-up.

### 0.3 Container 3 — this run's survey, copy list and leave list (3.0, 2026-10-04 — RUNNING_LOG §8)

**The source:** piece #6 `septet_LGMF_2026` @ **`0d70fda`** — 573 tracked files, 64.7 MB. Every file is taken from that commit;
none from its working tree (his "a", RUNNING_LOG §7). **Copy: 369 files, 9.7 MB. Leave: 204 files, 55.0 MB.**

**The steps of this run** (the protocol's, with the two answers of §6 · §7): 3.0 the survey ☑ → 3.1 the copy, byte-exact → 3.2 proven
whole → **3.8 the seven small fixes, HERE** (one commit) → 3.3 the re-palette → 3.4 recipes and skeletons → 3.5 the running app → 3.6 the record.

**THE COPY LIST (369)**

| What | Files | Rule |
|---|---|---|
| `score/` — the composer app | 72 | all, less the two dead viewers (H-8) |
| `tools/` | 139 | all, less the eight batteries red in the source too and their four fixtures (H-7) |
| `notation/` — the engine | 50 | `lib/` · `registry/` · `schema/` · `app/` · `glyph_sources/` · `GLYPH_EXTENSION_CONTRACT.md` · `audio/.gitignore` |
| `probes/` | 33 | the senders `*.ps1` · the analyzers and self-tests `*.py` · `cc7_map.json` |
| `reaper/` | 26 | `bridge/` whole · `kontakt/*.lua` |
| `bank/` — models, presets, libraries | 17 | `morph_models` · `morph_params` · `morph_pitches` · `morph_recipes` · `shape_presets` · `texture_models` · `texture_params` · `pulse_palette` · `blast_taxonomy` · `cluster_bank` · `harmonies` · `ostinato_timing_db_2p2p` · `trill_timing_db` · `panel_snapshots` · `sequences` · `aro_percussion_catalog` · `passages/README.md` |
| `docs/` — the tool docs | 19 | `BEATING_TOOL` · `CRESCENDO` · `CURVE_LOOK` · `DYNAMICS_LAW` · `ENGRAVING_RULES` · `GLYPH_SIZING` · `NAMING` · `NOTATION_IDENTITY` · `NOTATION_STANDARDS` · `NOTATION_WORKFLOW` · `PANEL_CAPTURES` · `RACK_SETTINGS` · `REAPER_CONTROL` · `RENDER` · `SAMPLER_QUIRKS` · `SEQUENCE_TOOL` · `STRIKES_TOOL` · `TRILLS_TOOL` · `TRILL_NOTATION_SPEC` — byte-exact now, a provenance line each at 3.6 (never on `ENGRAVING_RULES`, it is generated) |
| `docs/instrument_map.json` | 1 | the app fetches it on every load — see the differences below |
| `sandbox/` | 4 | all |
| `print/` | 4 | `score/build.sh` · `cover/make_cover.ps1` · `cover/cover.json` · `formats.json` |
| the root | 3 | `package.json` · `package-lock.json` · `start_score_server.bat` |
| `.claude/launch.json` | 1 | inert until 3.3 — the server runs by environment (`PORT=…`); 5400 / 4900 are never bound |

**THE LEAVE LIST (204)**

| What | Files | Why |
|---|---|---|
| `scores/` · `midi/` · `bank/actuals/` | 17 · 30 · 33 | piece #6's material |
| `notation/ir/` · `notation/research/` · `notation/video/` | 7 · 11 · 3 | its pages, its research pages, its film's cut lists (the `ir/README.md` is rewritten at container 6) |
| `reaper/LGMF_rack.rpp` · `reaper/place_piece-…_midi.lua` · `bank/aro_states/` | 2 · 9 | its rack, and the rack as text (container 4) |
| the measurement and calibration banks | 14 | `balance` · `balance_brass` · `bend_ranges` · `instrument_card` · `sample_lengths` · `technique_ranges` · `velocity_remap` · `trims` · `verify_1b5` · `reference` · `reference_chords` · `perc_rack` · `perc_selection` · `scattered_strikes` — STAGED at 3.2, skeletoned at 3.4 |
| `probes/` schedules and run outputs | 20 | generated from piece #6's recipe |
| `print/cover/cover-a3-landscape.svg` · `print/score/approved/` | 3 | its printed cover, its approved print |
| `docs/` — its records · the kit's docs · the instructions page | 14 · 6 · 14 | this repo has its own records and the kit; the instructions page comes at container 8 (H-31) |
| the root · `.claude/commands/` | 5 · 2 | this repo's own (the kit) |
| the eight batteries red in the source too · their four fixtures | 8 · 4 | H-7: `test_coords` · `cresc_check` · `test_extract_played` · `ir_extract_golden` · `test_notate_block` · `test_playability` · `test_midiplayer` · `test_sonify_core` · `fixtures/cloud02d-collapse` · `cloud02i-preamend` · `coords_snapshot` · `extract_played_snapshot` (nothing else reads them — checked) |
| `score/public/clusterview.html` · `chordview.html` | 2 | H-8: dead viewers (named in comments only — checked) |

**Where this run's lists differ from the template (the protocol's 3.7):**

- **`docs/instrument_map.json` STAYS on the copy list — the harvest's H-8 was wrong by one.** `composer.html` l. 647 fetches it on every load;
  without it the page logs an error and the registry's ready-callbacks never fire. Taking it out is a code change → NITS, not the copy.
- New in the source since the last port: `bank/aro_percussion_catalog.json` (copied — what the library holds, not a measurement) ·
  `bank/aro_states/` · `instrument_card` · `trims` · `reference*` · `perc_rack` · `perc_selection` · `verify_1b5` (left) ·
  `print/formats.json` · `print/cover/cover.json` (copied, H-31) · `tools/once/` (copied) · `notation/research/` · `notation/video/` · `midi/` (left).
- `bank/perc_selection.json` is READ by `palette_check` (its § 6) — staged at 3.2, a skeleton at 3.4.
- The tool docs come byte-exact at 3.1 (the last port brought them at its last step); `check_rules` holds `ENGRAVING_RULES.md`.
- Three files on the copy list are modified in the source's working tree and his — `bank/morph_models.json` · `panel_snapshots.json` ·
  `sequences.json`: taken from the commit; emptied to valid skeletons at 3.4 (his "a": every library starts empty here).

**THE COUPLING — what the re-palette (3.3) must turn** *(file and line at `0d70fda`; the full line list — 910 lines — is regenerated by one `git grep` at 3.3)*

- **THE LANE COUNT CHANGES — unlike the last port.** Piece #6 has EIGHT lanes (`META_LAYER` 8, the curve windows 9 / 10 / 11, eight
  `nth-child` rules of 12.5 %). This piece has FIVE, or six if the percussionist takes two (Q4). So `META_LAYER`, `META_LAYERS` ·
  `META_NAMES` · `META_COLORS`, `CURVE_LAYERS`, the lane CSS and its heights, `layoutVersion` 8 and the ensemble registry's
  `metaLayer` / `curveLayers` all move. The precedent is piece #5's port from #4 (ten lanes → seven; `septet_2026` RUNNING_LOG §9).
- **Kind A — the palette proper.** `score/public/composer.html`: l. 6 the title · l. 120–130 the lane CSS · l. 412–447 the lane
  `<div>`s · l. 481–488 the track `<select>` (STALE in the source — seven options, the vibraphone never added) · l. 358 · 1488 · 1489 ·
  3232 · 3272 · 3438 the session default `lgmf` · l. 1423–1437 `TRACKS` · l. 1443–1450 the META and curve layers · l. 2509
  `layoutVersion: 7`, its migrations l. 2537–2569 and the DIFFERENT ENSEMBLE warn · l. 9897 the abbreviation map. `sandbox/instruments.js`
  (rebuilt at 3.4). `notation/registry/ensemble.json` (container 6's 6.0). The ports: `score/server.js` · `sandbox/serve.js` ·
  `start_score_server.bat` · `.claude/launch.json` (with its `tempus-5300` entry) · `tools/capture_composer_midi.js` · `tools/export_midi.js`.
  The Reaper guard `lgmf_rack`: `tools/reaper_job.js` · `render_reaper.js` · `export_midi.js`. `package.json`. The `LG…` port names:
  the recipes, the bridge's jobs, `tools/apply_perc.js`.
- **Kind B — the per-instrument tables in the tools.** In `palette_check` already: `strike_drawer.js` l. 81 `STRIKE_DEFAULT` · l. 86–92
  `ART_SETS` · l. 75 `OPEN_STRINGS` · `cresc_card.js` l. 27 · `beating_panel.js` l. 56 · `strike_chords_ui.js` l. 25 · `fill_ui.js` l. 29 ·
  `trill_engine.js` l. 15 · `beating_calc.js` l. 25 `ORDER` · l. 287–301 `CEILINGS`. **Grown in piece #6, NOT in `palette_check`:**
  `strike_drawer.js` l. 42 `EXTRA_SEATS` · l. 67 `SPAN` · `texture_panel.js` l. 55 `ART_DEFAULT` · l. 58 `PERC` / `VIB` · `texture_row.js`
  l. 49 · `vibes_pitch.js` l. 330 · `rhythm_seq_ui.js` l. 151 `VIB_TECH` · l. 1308 `pairOf` · l. 1324 · `morph_panel.js` l. 1504
  `STILL_INST` · `texture_dyn.js` l. 156 · `chord_run.js` l. 55 the alias table · `composer.html` l. 9897 · `piano_cues.js` l. 26 (still
  piece #5's keys). The calibration's builders name instruments too (`build_reference_chords` · `compute_trims` · `balance_schedule` ·
  `build_remap_card` · the `card*` schedules · `apply_perc` · three analyzers in `probes/`) — re-keyed at container 5, classified at 3.3.
- **Kind C — the roles.** THE PIANO, 25 tests of `instKey === 'piano'` in ten modules (`strike_drawer` · `strike_chords_ui` · `chord_run` ·
  `cresc_panel` · `morph_panel` · `strike_sounds` · `swell_ui` · `cue_picker` · `harm_source` · `spectrum`, and `composer.html` l. 4805):
  quiet in piece #6, quiet here. **Two roles GREW in piece #6:** THE PERCUSSION (7 tests — `rhythm_seq_ui` · `strike_drawer` l. 559) —
  LIVE here, this piece has a percussionist · THE BOWED VIBRAPHONE with its SECOND SEAT (4 tests · `STILL_INST` · `EXTRA_SEATS` ·
  `vibes_pitch.js` · `seats_ui.js` · `notation/lib/vib_marks.js`) — live only if the percussionist's second lane is a vibraphone (Q4).
- **For container 6, found here:** `notation/registry/rules.json` l. 145 — a staff-visibility rule that names part 4 and piece #6's
  seconds (Principle 22: a rule that names a part by ID is checked against the parts that exist).

---

## 1. Compose — `doing`

### 1.1 The electronics' plumbing — the running order's step 6, the first object simulated end to end — `done but for his ear` 2026-10-04 (6.1 … 6.6 built and proven, RUNNING_LOG §51 … §64; laid out §47 · §48 · §49)

***Why:*** the first mic opening cannot be built until the score can speak to a sound process and that process has a home; and he
must hear it *"through the actual pipeline"* — the simulation and the concert differing in the input device only.

**What is decided (his word 2026-10-04):** the sound process is **SuperCollider, real-time**, fed by the Reaper rack over ReaRoute ·
SC's master bus IS the output, live; in the simulation Reaper is only the players and ONE FLAT RETURN TRACK, the loudspeaker · the
pedals of resonance and the recent engine's processing are PHASE 2, not here. The generic machinery is the engine's — its plan part
4.1 (`live-electronics-system/docs/PLAN.md`), built HERE in `electronics/` (D7). **The sub-steps keep the running order's labels
6.1 … 6.6** (journal §2) so the journal and this plan say the same thing.

- **6.1 The audio route — Reaper → SuperCollider → Reaper — `done` 2026-10-04 (RUNNING_LOG §54): THE CROSSING PROVEN — the note is
  heard by the engine and comes back at unity (in −42.6 · out −42.6 · back −42.63 dB); the round trip 23.22 ms = two of Reaper's
  blocks of 512. (a) … (f) ☑. HEARD BY HIM 2026-10-04 (*"I hear it now"*, RUNNING_LOG §56) — the return one second behind, a listening aid (§55).**
  *(As it stood before his two hand steps:)* `doing`: BUILT 2026-10-04 (RUNNING_LOG §51), THE CROSSING UNPROVEN —
  ReaRoute is not on his machine and his Reaper is on WASAPI (his two hand steps).** (a) ☐ HIS · (b) ☑ `electronics/sc/boot.scd` ·
  (c) ☐ written, parse-checked, refuses without ReaRoute — not run: `node tools/elec.js route` · (d) ☑ `electronics/sc/synths.scd` ·
  (e) ☐ the engine's half ☑ (its self-test) and the rack's half ☑ (the note reaches the track, −26.24 dB); the crossing and the
  latency ☐: `node tools/elec.js check` · `latency` · (f) ☑ the record; `electronics/docs/SEAMS.md` the audio half. *As laid out:* *Result when done:* one note from the composer
  score is heard twice in Reaper — direct from its instrument track, and again after passing through SC untouched, on the flat
  return track; the round-trip latency measured and written down. **Sub-steps:**
  - (a) **ReaRoute present?** An option of Reaper's installer (the ReaRoute ASIO driver). Absent → HE re-runs the installer with the
    box ticked, one minute; the fallback a virtual cable. Checked first, claimed only when seen.
  - (b) **SC's boot file** in `electronics/sc/`: device ReaRoute ASIO, the sample rate Reaper's, 16 in / 16 out; the sandbox's boot
    convention ported (`live-electronics-engine/docs/audio-workflow.md` — how sclang is found on this machine), nothing more.
  - (c) **Two rack changes, THROUGH THE BRIDGE** (never by rebuilding): a send from the bass clarinet track to ReaRoute out 1 · a new
    track `ELEC RETURN` — input ReaRoute 1/2, monitoring on, 0 dB, NO effects. He re-saves the rack. (`make_tracks.lua` resets
    faders — `apply_trims.lua` after it.)
  - (d) **The pass-through patch** in SC: `SoundIn` → `Out`, plus the sandbox's mastering chain if it ports in one piece (its
    `process-chain.scd` — read at the build); otherwise a bare limiter now, the chain at phase 2.
  - (e) **Verified in the running app, on his Chrome:** a note from the composer score → SC's input meter moves → the return track
    meters → both heard. The latency each way measured (the number into the log).
  - (f) **The record:** RUNNING_LOG; the engine's `docs/SEAMS.md` — the sound-path row's first lines: one send and one flat return
    track per piece; `git subtree push` once `electronics/` exists.
  - *His part:* (a) if ReaRoute is missing · the re-save in (c). Nothing else.
- **6.2 The message route — the composer score → the engine, OSC through the score server — `done` 2026-10-04 (RUNNING_LOG §60 · §61): BUILT, PROVEN, AND THE LEAD MEASURED ON HIS CHROME —
  the message leaves 92.8 ms ahead of the note; the note's sound reaches the engine 114.2 ms after the message.
  (a) ☑ the ear on UDP 57211 + the onset probe (`electronics/sc/`) · (b) ☑ `electronics/tools/osc.js` · (c) ☑ `electronics/tools/relay.js`;
  `score/server.js` three lines; `bank/elec_route.json` `message` · (d) ☑ `electronics/score/le_msg.js`; `composer.html` one tag, one hook ·
  (e) the engine's half ☑ · the page's own playback seen by the engine ☑ (`onset · bcl · lane 1 · brick wc-2 · at 5.0 s · due in 99.0 ms`;
  hello 0.71 ms) · a real note paired with its message ☑ · **THE SCORE'S LEAD OVER ITS OWN SOUND ☑ — his Chrome, 2026-10-04: 114.2 ms (`probes/elec_message_log.jsonl`)** · (f) ☑ the record. (LAID OUT AND WRITTEN 2026-10-04,
  his word *"a, write it"* — RUNNING_LOG §57 · §58 · §59; D10).** *Result when done:* with the engine up, a note
  played from the composer score on the bass clarinet lane is seen in his engine window as ONE line — which lane, which brick, when —
  BEFORE its sound arrives there; the lead measured and written down. *The road, both halves (D10):* CONCERT — an iPad's browser → the
  laptop's score server → OSC over UDP → SuperCollider's language; the human plays · SIMULATION — his Chrome → the score server on 5500
  → OSC → SuperCollider, all on this machine; the MIDI to Reaper is the simulated player. The one difference: the engine's address in
  `bank/elec_route.json`. *Decided here:* OSC through the score server; the `DECElec` loopMIDI trigger REJECTED (no concert
  counterpart); a WebSocket REJECTED (a dependency — `package.json`: the stack is dependency-free Node "and stays that way"); a shared
  clock NOT NEEDED (the crop, 6.3b, finds the attack — the message need only be early). **Sub-steps:**
  - (a) **The engine's ear** — `electronics/sc/`: the language port pinned (57211; the server keeps 57210) and ONE `OSCdef` for
    `/le/…`: `/le/hello` (a handshake) · `/le/onset` (lane · brick id · the score time · the browser's send time). Each message printed
    as an `LE_INFO` line — his engine window shows it — and stamped with SC's clock. Generic: the engine's.
  - (b) **The OSC encoder** — `electronics/tools/osc.js`: the message format in dependency-free Node (about forty lines); node's
    `dgram` sends it. The engine's.
  - (c) **The server's relay** — `score/server.js`: ONE route `POST /api/elec` (JSON in → OSC out, to the address in
    `bank/elec_route.json`) and ONE static route serving `electronics/score/` to the browser. The piece's two hook lines, listed in
    `SEAMS.md`. A POST, not a WebSocket: about a millisecond on localhost, enough for openings, which are sparse; the WebSocket when the
    performance module comes.
  - (d) **The score's voice** — `electronics/score/le_msg.js`, the first mixin of the composer-score seam: `LE.send(kind, data)` → the
    POST. ONE `<script>` tag in `composer.html`; ONE hook line where the playback emits a note (lane · brick · time), behind a test
    toggle (the bass clarinet lane only) until 6.3's opening brick takes it over. The mixin the engine's; the tag and the hook the
    piece's.
  - (e) **Verified in the running app, on his Chrome:** the engine up (`start`), a note on the bass clarinet lane → the line in his
    engine window. THE MEASURE: the message's lead over the note's own sound, which SC already hears through 6.1 — an onset detector
    on that input, the gap in ms → `probes/`. `node tools/elec.js ping` added: one message, no server boot, safe beside his engine.
    (The throwaway server 5501, `docs/VERIFICATION_RECIPE.md`, if his 5500 is up.)
  - (f) **The record:** RUNNING_LOG · the engine's log · `electronics/docs/SEAMS.md` the message half and the first rows of its last
    table (composer.html: one tag, one hook · server.js: one require, one route, one static route) · `TAKE.md` · the engine plan 4.2 ·
    `git subtree push`.
  - *His part:* nothing.
- **6.3 · 6.3b · 6.4 · 6.5 ARE BUILT AS ONE — THE FIRST OBJECT END TO END — BUILT AND PROVEN 2026-10-04 (RUNNING_LOG §64; where the build left what is written below, §64 lists it)** (his word 2026-10-04, *"a, write it"* — RUNNING_LOG §61 · §62;
  DEC-7 · DEC-8). The order below is the build's order, each step proven before the next; the labels are kept. **THE SHAPE, decided here
  (the AI's, his to reverse):** both bricks are ZONES WITH A NEW MODEL (`type: 'zone'`, `midiModel: 'elecOpen'` · `'elecPlay'`), not a new
  object type — the composer tests an object's TYPE by name in some 250 places and has no registry, while a zone already draws on a lane,
  selects, moves, resizes, saves and has a panel, and its MODEL is tested in a few places only (trill 22 · beating 10 · the rest 2 … 4); the
  extractor reads trill zones alone, so a save with these in it still extracts. The machinery for the models is the ENGINE's
  (`electronics/score/le_objects.js` — label · panel section · gesture · tick); the hook lines in `composer.html` are the piece's, listed in
  `SEAMS.md`. The engine's side (`electronics/sc/`): the capture, the crop, the index writer, the sample player — all generic. The bank's
  FOLDER and the engine's ADDRESS come from `bank/elec_route.json` at the engine's start, never from a message.
- **6.3 The opening brick + the capture — `done` 2026-10-04 (BUILT, RUNNING_LOG §64: the key is M; the brick a zone `elecOpen` with `zoneFunction: 'elec'`; the message from the mixin's own tick; `lengthMs` and `lane` in it; an opening the playhead starts inside still opens. Laid out §62).** *Result when done:* a brick he
  places on a player's lane IS the mic opening — its place when the mic opens, its length the window, a name on it; when the score plays
  through it the engine records that player for the window, and a raw file lands in the piece's bank. **Sub-steps:**
  - (a) **The brick:** a zone, `midiModel: 'elecOpen'`, with `elec: { name, category: 'attack', player }`; `startTime` · `endTime` the
    window — **500 ms the default** (his figure, DEC-8); its own colour; the label the name.
  - (b) **The gesture:** a note selected, ONE KEY → an opening over it, starting **100 ms before the note** (the window opens before the
    notated moment and runs long — the crop finds the attack; §57); nothing selected → an empty opening at the playhead on the chosen lane.
    The key found free at the build (the piece's key map; `palette_check`). The name assigned: the player's short name and a letter in
    order of time — `bcl-A`, `bcl-B` … — his to rename in the panel (attack A · B · C, DEC-8).
  - (c) **The panel:** the zone panel gains a section for the model — name (editable) · category · window in ms · the player (read from
    the lane).
  - (d) **The message:** in `tickZoneMidiPlayback`, a zone of this model sends ONE message at its start, ahead by the look-ahead like a
    note: `/le/open  player · id · name · category · t · length · dueMs` (`LE.open(zone)` in `le_msg.js`).
  - (e) **The capture, in the engine:** on `/le/open`, record the player's bus from NOW until the window's end (`dueMs/1000 + length`
    seconds — early is right); the raw recording written as `<bank>/raw/<id>.wav`. The bank's folder: `LE_BANK` at the engine's start,
    from a new `bank` block in `bank/elec_route.json` (`elec.js start` passes it). The engine says `open · bcl · bcl-A · 500 ms`, then
    `captured · bcl-A · raw · peak −N dB`.
  - (f) **Verified, the AI's run:** the throwaway page plays through an opening; the engine's two lines; the raw file exists with the window's
    length. (The note under it is a stub in the pane — the REAL sound into the capture is proven with 6.5's listen, his, offered.)
  - *His part:* the window's length and the names, only if he wants others than the defaults.
- **6.3b The crop — `done` 2026-10-04 (BUILT, RUNNING_LOG §64: on the self-test 0.16 ms from a known attack; on a real bass clarinet note 2476 ms kept of 4000, the attack 575 ms in. HIS EAR on the numbers: open. Laid out §62).** *Result when done:* the raw recording is trimmed to the
  attack itself, reliably, and saved under its name. **Sub-steps:**
  - (a) **The rule, in the engine** (sclang, on the recording's samples): THE ATTACK = the first point where the level rises above −30 dB
    below the recording's peak AND above −50 dBFS (silence is not an attack), stepped back 5 ms of pre-roll · THE END = where the level
    falls below −45 dB below the peak and stays there 50 ms, or the window's end · 2 ms fade in, 10 ms fade out. Each a default of the
    engine's, overridable from the route table's `bank.crop` — **his ear tunes them.**
  - (b) **The file:** `<bank>/<name>.wav`, mono, the engine's sample rate; the raw kept beside it in `raw/` for a re-crop. `raw/` gitignored;
    the cropped samples COMMITTED — the samples are the piece's (DEC-1).
  - (c) The engine says `cropped · bcl-A · 143 ms of 500 · peak −18 dB`. A window with no attack in it is REPORTED, not saved:
    `nothing to crop · bcl-A`.
  - (d) **Verified on the self-test** (no hardware): a synthetic attack at a known place in a buffer is cropped to within 2 ms of it. Then
    on a real capture from (e) above.
  - *His part:* the thresholds, if a crop cuts wrong — by ear.
- **6.4 The sample index — `done` 2026-10-04 (BUILT, RUNNING_LOG §64: `bank/samples/index.json`, committed empty; two more fields, `windowMs` · `attackMs`. Laid out §62).** *Result when done:* one file the piece owns lists
  every sample taken; the score reads it; a sample is found by name. **Sub-steps:**
  - (a) `bank/samples/index.json` — a row per sample: `id · name · player · lane · category · scoreTime · lengthMs · peakDb · file · raw ·
    openingId · captured`. The schema the engine's (its `docs/`); the file the piece's.
  - (b) Written by the engine after each crop (read, add the row, write). A name taken twice replaces its row and its file — the latest take
    wins, and the log line says so.
  - (c) Read by the page — `fetch('/bank/samples/index.json')`: the server serves `/bank/` already, no new route.
  - (d) Verified: the row appears after a capture; the page lists it.
  - *His part:* nothing.
- **6.5 The playback brick — `done` 2026-10-04 (BUILT, RUNNING_LOG §64: the key is R; the return at unity — −41.2 dB captured, −41.22 dB back; BOTH retirements made, and the engine returns nothing of the dry note. HIS EAR: offered. Laid out §62).** *Result when done:* a second brick, placed on a
  lane, names a sample; when the score plays through it the engine plays the sample back through the return, where the brick is. **Sub-steps:**
  - (a) **The brick:** a zone, `midiModel: 'elecPlay'`, `elec: { name }`; its length = the sample's (read from the index); its lane the
    player's whose sound it is (D8 — drawn on that player's staff with a sign of origin), or another's at his placing.
  - (b) **The gesture:** one key at the playhead → a playback brick; its panel's picker lists the index's samples (name · player · length).
  - (c) **The message:** `/le/play  name · id · t · dueMs` at the brick's start, ahead by the look-ahead; **the engine schedules the sample
    on ITS clock `dueMs` later** — it lands on the brick, compensated by the lead, with no shared clock.
  - (d) **The engine:** the index's samples loaded into buffers at `start`, and each new one at its `captured`; `leSample` plays a buffer to
    the master at UNITY — the sample is as loud as the note was (the sends are post-fader, `SEAMS.md`).
  - (e) **Two things retired:** the listening aid — `listenEchoSeconds` → 0 (the `leEcho` synth stays for a route check) · the test hook of
    6.2 — `testOnsets` false and the hook line removed: the opening brick is the message now.
  - (f) **Verified, the AI's run:** a cropped sample played at a placed brick — ELEC RETURN's meter moves at the brick's time, the engine's
    line says which sample. **HIS EAR, offered:** a note, an opening over it, a playback brick some seconds later; he hears the note, then
    the sample.
  - *His part:* his ear, when he wants it.
- **6.6 The demo end to end, and the record — `done but for his ear` 2026-10-04 (RUNNING_LOG §64: `scores/decibel-first-object.json` by `tools/build_first_object.js`; the record written in both repos; the checks green. OPEN: his ear, and his word that this is DEC-7's first object. Laid out §62).** *Result when done:* one score
  he can open — a bass clarinet note, an opening over it, a playback brick three seconds later — played with the engine up, the note
  sounds and the sample comes back; and the record is whole. **Sub-steps:**
  - (a) the demo score `scores/decibel-first-object.json`, built by a tool as `build_first_sound.js` was — his to play.
  - (b) the record: RUNNING_LOG · the engine's log · `SEAMS.md` (the composer-score seam's hook lines, the `bank` block, the kinds `open` ·
    `play` · `captured`) · `TAKE.md` · the engine plan 4.3 … 4.4 and part 11 marked · `git subtree push`.
  - (c) the checks: the engine's self-test with the crop case · `palette_check` after a key is added · the extractor run on the demo score
    (zones of other models are skipped; if it throws, one filter, and a NITS line otherwise) · `node tools/unsaved_check.js`.
  - *His part:* his ear, and his word that this is the first object he meant (DEC-7).

### 1.2 The impulses, the live architecture, the crop — the running order's step 8 opened — `doing` 2026-10-05 (RUNNING_LOG §71)

*His design, built on Fable in one sitting at his word ("let's just build here"). Each item is one line; how it was made and measured is §71.*

- **8.1 Impulse 1 — `done` 2026-10-05 (§71):** `tools/impulse.js` + `bank/impulses.json` (his dictation, a row per impulse): the next five notes of
  his recorded rhythm → five players, their techniques, a pitch in the middle of each range, a MIC OPENING over each named `<player>-impulse-<N>`,
  category `impulse` — the sample's and the buffer's identity. In `scores/piece-sec01-a.json`. Impulse 2 = the next five, one command.
- **8.2 The microphones — `done` (§71; SAVED by him 2026-10-05, the rack committed at checkpoint #1):** four rows in `bank/elec_route.json` (bfl · perc = the shime daiko's track · va · vc), the
  sends in the rack through the bridge — his CTRL+S. The percussion's other seven tracks get a send as the music uses them (NITS).
- **8.3 The modes — `done, proven hardware-free` (§71):** one word in the route table — `compose` · `compose-locked` · `rehearsal` · `concert` —
  names which bank fills the buffers at start, where captures go, whether an opening records (`LE_SOURCE` · `LE_RECORD`; `bankOn`).
  The backup bank `bank/backup/` (the players' rehearsal recordings, same names); the concert's live captures `bank/live/<date>/`.
  THE SAFETY NET: a capture without an attack keeps the buffer's loaded take and says so — its analysis to be made foolproof before the
  concert (NITS, his word). **His choice:** in concert the buffers start FULL from the backup.
- **8.4 The crop tested — `done, one kind open` (§71):** `node tools/elec.js croptest` (`bank/crop_test.json` · `electronics/tools/crop_report.js`):
  one of each kind through the rack on a scratch bank, drawn on http://localhost:5500/crop_test/report.html. Six of seven cropped; the impulses
  keep 0.7 … 1.0 s (the room — his ear sets `endDb`); the flute's slap awaits his Reaper restart (ReaRoute wedged by a killed engine — now the
  tools leave gracefully, `/le/leave`).
- **8.5 The first five captured — `doing`: HIS FIVE STEPS DONE 2026-10-05 — FOUR OF FIVE captured (bcl · perc · va · vc; RUNNING_LOG §72); the bass flute's is NOT in the index — a window of zeros, then a short one, then a sample file written with no row (SWEEP_LIST #3, open, not diagnosed; RUNNING_LOG §73). As written:** CTRL+S in Reaper · restart Reaper · `start_electronics.bat` · Reload the score · play from 0.
  Done when the five samples are in `bank/samples/` with their rows and he has heard one returned (`R`).

### 1.3 The processing — the running order's step 10, opened by DEC-16: THE WORKSHOP — `doing`: 10.1 BUILT 2026-10-05, done but for his ear (RUNNING_LOG §103; laid out §100 · §101; DEC-16 · 16b · 16c)

*Why: each banked sample is transformed through the piece — a chain of processes, every stage kept ("I am sitting in a room"); the workshop is where a chain is composed by ear, one brick per stage. THE SORTING: the stages, the render and the brick's machinery are the ENGINE's (part 6 by way of part 2's port from the sandbox); the workshop score, the effect at each stage, the dials and the rendered samples are THIS PIECE's.*

- **AS BUILT — 2026-10-05, Opus, here, on his "build here go" (RUNNING_LOG §103; the engine's §26). Where the block below disagrees, THIS LINE WINS:** the render is OFFLINE (NRT), not real time — no `RecordBuf`, no level poll: the language trims the head, ends the sample and sets its level · the key is **`E`** (`P` is taken) · the brick and the catalogue are ONE file, `electronics/score/le_process.js`, a mixin on `LEObjects` (no `le_effects.js`) · eighteen effects: `space` out, `tape` in · a render's peak is matched to its source's (`match`) · `*` and a pattern's "every sample" leave processed samples out · the score's stages are 7 s apart · the proofs: `electronics/sc/process_test.scd`, and the page module under a stub window. **HIS, to hear it:** F5 · close the engine's window, `start_electronics.bat` · open `workshop-bfl-slap` · select stage 1 → Render → ▶ hear it · stage 2 …
- **10.1 THE WORKSHOP — the chain ported, the END stage, the PROCESS brick, the catalogue, the first score — `done but for his ear` 2026-10-05 (§103). THE BUILD BLOCK, as it was written — read it through the AS BUILT line above:**
  - **(a) THE ENGINE — `electronics/sc/process.scd`, NEW, loaded by `boot.scd` after `synths.scd`:** the sandbox's `\processChain` (`live-electronics-engine/synths/process-chain.scd`) ported WHOLE as `\leProcess` — the same stages, argument names and order; its PlayBuf of the source buffer kept; its own duration envelope REPLACED by the END stage; its output summed to mono onto a private bus, recorded by `RecordBuf` into a render buffer. sc3-plugins are installed (user Extensions: SC3plugins · Sediment), so the DEIND stages run; a missing UGen = that stage's mix pinned at 0 and one line at start.
  - **THE END STAGE — two modes, the message field `end`:** `shape` — an envelope AFTER the effect: `atkMs` · `durMs` (the sample's whole length) · `relMs` · `curve` (−4 = percussive); the render ends at durMs · `tail` — the synth runs past the source's end; the language polls the output (`Amplitude.kr` → `SendReply` `/le/procLevel`, 20 Hz) and ends the render when it has sat under `floorDb` (−60) for 100 ms, or at `capMs` (8000). Then `gainDb` (0).
  - **`/le/process`** — a handler beside `/le/open` · `/le/play` in `bank.scd`, its conventions (`safeName` on every name · every `var` before the first statement · Strings compared by content · `indexRows` a List): `id` · `source` (a banked name; its loaded buffer, else the file) · `out` (the derived name) · `effect` (a word, for the row and the label) · `args` (`k:v,k:v` — the synth's own argument names; the PAGE decides them) · `end` · `floorDb` · `capMs` · `atkMs` · `durMs` · `relMs` · `curve` · `gainDb`. It allocates the render buffer (source seconds + cap), starts `\leProcess`, records; at the end reads the buffer back, trims trailing silence under the floor (tail), writes `bank/samples/<out>.wav`, REPLACES any row of that name with `{ name, player (the source's), kind: 'processed', parent, effect, args, end, lengthMs, peakDb, when }`, writes the index, loads the sample into the buffers (as `captureDone` does — a brick plays it at once), says ONE `LE_RESULT` line (`processed · <out> · <ms> ms · <dB>`). A failure: `LE_ERROR` with the reason, no row.
  - **THE PROOF, once, headless:** `electronics/sc/process_test.scd` on `roll_test.scd`'s pattern (`LE_MODE=quiet`): a 300 ms sine burst written as a scratch sample, rendered through comb in `shape` (durMs 600) and through reverb in `tail`; assert two files, two rows, lengths within 50 ms. Exit 0 = pass. His engine untouched (he restarts it for the code).
  - **LEFT TO THE BUILD — the AI's call, each said in one line in the log (RUNNING_LOG §102):** `space` (width · swirl) means nothing in a MONO bank — the recommendation: OUT of the catalogue, seventeen effects, until a stereo sample is wanted · `freeze` needs a MOMENT — a dial `freezeAtMs` (default: the source's peak + 30 ms), else it holds the first frame · this block was written from a GREP of `bank.scd`'s and `le_objects.js`'s names, not a read of their bodies — journal §2's checkpoint #4 names what it assumes; confirm at the resume reads.
  - **(b) THE PAGE — `electronics/score/le_objects.js`:** `MODELS.elecProcess = { kind: 'process', sign: '⟳', color: '#EF6C00', yOffset: 2, title: 'Process — a stage of the chain' }`; `elec: { source, out, effect, args: {}, end, floorDb, capMs, atkMs, durMs, relMs, curve, gainDb, rendered: { lengthMs, peakDb, when } | null }`. **The key `P`** (confirm it is free in `composer.html`'s keydown; else the next free letter, said in the log): at the playhead on the active lane; `source` = the nearest `elecProcess` (its `out`) or `elecPlay` (its `name`) brick BEFORE it on the lane, else the index's first; `out` = the root name + `~` + the next free number across the index and the score (`bfl-impulse-1~1`, `~2` …); as long as its source until rendered. **The panel section** (the `elecPlay` pattern in `panel()`): Source ▾ (the index) · Effect ▾ (the catalogue) · the effect's DIALS (number inputs → `elec.args[key]`) · End ▾ `shape` (atk · dur · rel · curve) | `tail` (floor dB · cap s) · Gain dB · a `<textarea>` of the whole `elec` as JSON + Apply (the AI's hands) · **Render** · a status line (`rendered · 612 ms · −18.3 dB` | `not rendered`). Render → `/le/process` with every field; then `loadIndex()` every 500 ms until a row `out` newer than the click (30 s cap) → `elec.rendered`, `zone.endTime = start + lengthMs / 1000`, redraw; a timeout says so. `decorate`: `⟳ P<n> · <effect> ← <source>`. **Playback (`fire`):** a RENDERED brick sends exactly a plain `elecPlay`'s message (`/le/play`, name = `out`) — no engine change for playback; unrendered, nothing, and the label says so.
  - **`electronics/score/le_effects.js`, NEW — THE CATALOGUE,** served at `/electronics/` like `le_msg.js`; ONE more `<script>` line in `composer.html` (SEAMS.md row 1 — say it there): an array `{ key, label, args: { what makes this stage ALONE — its mix at 1, every other mix 0 }, dials: [{ key, label, min, max, step, default, unit }] }` for the 18 stages named in RUNNING_LOG §100 (resonator bank · complex resonator · drive · ring mod · diode ring mod · frequency shift · comb · filter · freeze · smear · spectral gate · diffusion · string resonator · greyhole · jpverb · reverb · space · noise bed), three to six dials each, the defaults the sandbox's, `mix` always among them. Two stages at once = his JSON, or a second brick.
  - **(c) THE SCORE — `tools/build_workshop.js` → `scores/workshop-bfl-slap.json`** (a NEW file, announced to him in §101 — never a save of his; the pattern of `tools/build_first_object.js`): the bass flute lane; at 2 s a plain `R` on `bfl-impulse-1`; then four `P` bricks 6 s apart carrying the first scheme as settings, UNRENDERED — he renders each from its card, in order, with the engine up: 1 comb (combTime 0.012 · combFb 0.85 · shape 600 ms) · 2 greyhole, small (ghSize 0.5 · ghTime 0.1 · ghFb 0.8 · tail) · 3 freeze + smear (freeze 1 · smear 0.6 · shape 1500 ms) · 4 jpverb (tail). The cloud waits for 10.2.
  - **(d) THE RECORD:** RUNNING_LOG §103 (what · where · the one proof · NOT heard, D13) · the engine's RUNNING_LOG (the port: what came from the sandbox, what changed) · SEAMS.md row 1 · `electronics/docs/PLAN.md` parts 2 and 6, one line each · this item → `done but for his ear` · journal §2 + PLANNER's NOW · `git subtree push --prefix=electronics engine main`, then `git -C C:/Users/jwloy/GitHub/live-electronics-system pull --ff-only`. Check how `notation/` treats `elecPlay` and treat `elecProcess` the same (an unknown midiModel must not throw).
  - **HIS, after:** F5 · close the engine's window, `start_electronics.bat` · open `workshop-bfl-slap` · P1 → Render → listen · P2 … One proof by the AI, then stop (D13).
  - **Done when:** the four stages render from their cards in order, each a banked sample its brick plays, and he has heard the chain.
- **10.2 The granular voices — `doing` (the first voice, the GRANULAR FREEZE `cloud`, built 2026-10-05 on his "b" — RUNNING_LOG §120; the engine's §36: long overlapping asynchronous grains from one moment of the chain's signal, held; a preset `cloud` of class `time`; NOT heard. THE SECOND, `icy` — HIS OWN FREEZE of 2015 … 2016 ported from `github.com/elosine/freeze` (§122; the engine's §37): Warp1, a crawling read point, 0.6 … 0.8 s windows, 17 … 40 grains, his ten grain windows in the engine; four presets on the row, a preset `icy` of class `time`; NOT heard — his to compare):** the sandbox's `\roadsCloudBuf` (the cloud — density · grain · scrub · transpose · jitter: the stretch) and `\grainArticulate` (five articulations) as effects of their own in `process.scd` and the catalogue; the scheme's stage 4. *To be laid out at 10.1's end.*
- **10.3 THE PETALS OF RESONANCE — his `SynthDef_petalsOfResonance` in the engine, the ORIGINAL beside a CLEANED signal path, heard in pairs — `built 2026-10-06`, done but for his ear (RUNNING_LOG §151; the engine's §40); laid out the same day (RUNNING_LOG §150; DEC-32; Q7 ANSWERED: "petals", the flower — his word 2026-10-06). AS BUILT, where it differs from the block below:** NO envelope `ring` — a preset's own `capMs` (16000) already wins under `tail`, so a variant is `<sample>~pet07o-tail` · pair 1 is HIS OWN set line (fund 35 · first partial 5 · offset 8.1 · spread 1.33 · ring 7 … 15), pairs 2 … 20 drawn, seed 1 · the impulses taken with a stride of 7 (20 different ones) · the cleaned path draws with plain `Rand`s (an offline render is seeded by the clock — measured) · **HIS RING TIMES ARE NOT 26 RINGS: `rrand(ringL1, ringL2)` on two controls is redrawn at every control block (measured), so the original's bank sinks as ONE at about the mean; the cleaned path gives each partial its own ring — the audible difference inside a pair** · the tool sends no plan unless `--render` · forty renders take well under a minute (two 5 s renders side by side: 1.1 s). **Result when done:** two rows in the catalogue — **`petalsOrig`**, his SynthDef as it is (26 resonators of one partial each in two banks over one fundamental, bank B shifted by semitones, each partial wobbling ±½ semitone; the shuffle, −40 dB, the limiter, the fade after the ring; its random draws at compile time, as his) with the ONE line changed that it needs to run here (the microphone → the chain's signal), and **`petals`**, the same sound by the cleaned path (one resonator of 26 partials; no shuffle, no limiter, no fade — the engine's ending does that; the wobble rates and ring times drawn PER RENDER, as his 2025 note intended). The dials shared: fund · first partial · spread · bank offset (semitones) · ring lo · ring hi · input length · mix. A score **`audition-petals`**: TWENTY PAIRS, original · cleaned, each pair ONE setting drawn seeded from the ranges written in his file (fund 35–150 · first partial 2–5 · offset 2–8 · spread 0.33–1.33; ring 7–15 s), both members of a pair on the SAME impulse, the pairs rotating through the bank's captured impulses; every brick labelled (`P07 orig` · `P07 clean`), the whole setting in the brick's panel row and in a sheet **`docs/auditions/audition-petals.md`** (brick · impulse · the setting). He plays it through with the engine up (or presses render all planned) and samples what he likes.
  - the two stages in `electronics/sc/process.scd` and two rows in `electronics/score/le_process.js` `EFFECTS` — the engine's (an effect is generic); `process_test.scd` gains a case each: THE ONE PROOF.
  - an envelope **`ring`** in `bank/presets.json` `envelopes` — no cut: to −60 dB under the peak, or a cap of 16 s (the `tail` envelope cuts at 950–1350 ms past the source — it would kill a 15 s ring).
  - the forty presets `pet01o` · `pet01c` … in `bank/presets.json`, each marked **`deal: false`** — OUT OF THE DEALING: `deal_variants.js`'s pool, the pattern brick's `fxPool` and `gen_presets.js`'s replace each KEEP a `deal: false` row (one filter each; the piece's tools). The page reads ONE presets file (`opts.presetsUrl`) — a second file was the alternative, and more machinery.
  - **`tools/build_petals.js`** — draws the twenty settings (seeded), writes the presets (its own keys only; run again = the same keys replaced), builds the score as a NEW file on the audition builder's frame (one brick after another, none overlapping: a gap of the cap + 1 s), writes the sheet, sends the plan with render 1.
  - the record: RUNNING_LOG · the engine's log · `git subtree push`. SEAMS unchanged — no line of the stack.
  - **HIS, after:** the engine restarted (the stages are code) · F5 · File ▾ → Experiments → `audition-petals` · a purple brick → **render all planned** (forty renders of up to 16 s, two at a time — minutes, not seconds; the window goes quiet) · play from 0. Then his ear; the knobs from what he says.
  - *Decided by the AI, his to reverse:* both rows stay in the catalogue after the audition (offline — no cost to him) · the original's `doneAction` dropped (it would end the whole chain), its fade kept · the cleaned path draws a random start phase for each wobble too · every render peak-matched to its source, as all are.
- **10.4 The cascade — DROPPED 2026-10-05 (DEC-21: single effects, no chains in the piece).** *(as it was:)* a stage re-rendered re-renders the stages after it ("Render from here").
- **10.5 The catalogue grows by audition — `built 2026-10-05`, his DEC-17 (RUNNING_LOG §106; the engine's §28):** his side project, in parallel with his work in the workshop — nine stages added to `process.scd` and the catalogue, each a mix at 0 like the rest, the dials PROVISIONAL: `override` (a clone of Destroy FX's Buffer Override, written from how it works — a forced buffer's first mini-buffer repeated; a pitch when short), and after `drive` the pedals `overdrive` · `fuzz` · `octave` with a speaker `cab`, then `crush` (a true bit depth) · `cheby` · `squiz` · `waveloss`. His method: build → hear on a brick → the knobs shaped → admitted to the library. *Later, at his word: Buffer Override's LFOs and MIDI pitch; the knobs after his ear.* **His verdict (§108): the nine kept, none of them it.**
- **10.6 The feedback — `built 2026-10-05`, his DEC-18 · DEC-19 (RUNNING_LOG §110; the engine's §31):** a Hendrix feedback from an impulse — the stage `feedback`: six strings (the open guitar by default; a box each; all 0 = the material's own spectrum) in a loop with the amp's clipping, a speaker's colour and the path to the amp; the BLOOM as a time (the loop gain derived from it), a HOLD, the strings ringing down; climb · wobble. The first stage with a life of its own. Proven once; NOT heard. *Later: the strings as note names; the sustained level as a dial; the knobs after his ear.*
- **10.7 Presets · the endings · the randomizer — `built 2026-10-05`, his DEC-20 (RUNNING_LOG §111; the engine's §32):** a catalogue row may carry PRESETS (the feedback's six, the AI's — his own to come: *"I'll build a preset menu in a moment"*) · `Ends by` grows to eight — `shape` · `tail` · `perc` (Env.perc) · Roads's `gauss` · `quasi` · `tri` · `expodec` · `rexpodec`, each with a STANDARD length set at the pick and the box to change it · a dial may be a RANGE `[lo, hi]`, drawn fresh at every Render (⚄ / = in the panel; `[80, 400]` in the box). Proven once; NOT seen. *Later: Roads's sinc; his presets.*
- **The shelf — `docs/CANDIDATES.md` (§109):** the settings he says keep to, as paste-able JSON; his to arrange into the chain. Five rows by §111.
- **10.8 THE PROCESSED RETURN — every return a transformation — `built 2026-10-05`, DEALT the same day (§117 … §119, then seed 3: `piece-sec01-a` on the time class, ring versions), done but for his ear (RUNNING_LOG §116; the engine's §35); laid out the same day (DEC-21 · 21b · 22; RUNNING_LOG §114). AS BUILT, where it differs from the block below:** a re-capture renders its variants AGAIN, not only the missing ones (in concert the backup's would have played instead of the night's) · a late variant plays its EARLIER render before it falls back to raw · the plan's parts share a STAMP and take effect when the last is in (their order of arrival is not promised) · the button is in the return brick's panel and sends the plan with `render 1` — no line of the page, no SEAMS row 5 · a variant's row carries `planned: 1` and is left out of the pickers · no plan send at attach (the score is not loaded then): a pass's first frame, a second after a change, the button. **Result when done:** in `piece-sec01-a`, groups 2 … 4, every return plays a PROCESSED version of its sample — an enveloped preset of its own, none reused — rendered by the engine RIGHT AFTER THE CAPTURE, soonest-needed first, in concert and in simulation alike (D10); a raw sample plays when a variant is late, said in the window; one button renders every planned variant from the captured bank. Built as ONE, then his ear; the chain idea (10.1's workshop) stays as the place to TRY an effect; **10.4 the cascade is DROPPED** (single effects, DEC-21).
  - **(a) THE PRESETS — `bank/presets.json` (the piece's):** 21 entries `{ key, name, effect, args, class }` — the shelf's seven (by their numbers; the shelf stays the record of what he kept) and fourteen of the AI's spread over the catalogue (override · overdrive · fuzz · octave into cab · crush · cheby · squiz · waveloss · tape · comb · string · shift · resonator · filter · smear/gate · freeze · two feedback presets …). **The class sets the length as a MULTIPLE of the source's own length (DEC-22):** `colour` (the effect is in the attack: crush · ring · diode · fuzz · overdrive · octave · cab · cheby · squiz · waveloss · override · tape · comb · filter · string · shift) → **durX 1.0**; `time` (needs room: reverb · jpverb · greyhole · diffusion · feedback · freeze · resonator) → **durX 1.75**; an entry may override. **THE ENVELOPES:** `perc` (atkMs 3) · `expodec` · `gauss` · `tri`; the mix through group 4: perc 40 % · expodec 40 % · gauss 10 % · tri 10 %; group 5 (an acceleration): perc · expodec only. A VARIANT = preset key + envelope → the processed NAME `<sample>~<key>-<env>` (`bfl-impulse-1~crush4-perc`; `[A-Za-z0-9_~-]`, ≤ 64). The ring version (`tail`) exists in the list; only enveloped ones are dealt now (DEC-21b).
  - **(b) THE ENGINE (`electronics/sc/process.scd` · `bank.scd`):** `/le/process` takes **`durX`** (a multiple of the source's length) as an alternative to `durMs` — durMs = the source's frames / sr × 1000 × durX, clipped to `lim` · **`/le/plan`**: the page's plan — rows `base · suffix · effect · args · end · atkMs · durX · match · t` (first use), sent in chunks (`part i of n`; the first chunk resets), kept as `self[\plan]` keyed by base, ordered by t · **render after capture:** at the end of `captureDone(name)` (the row indexed, the buffer loaded) → `planRender(name)`: every planned variant of that base whose buffer is missing, in t order, into a RENDER QUEUE (at most two at once; `processDone` starts the next) · **the fallback** in `samplePlay` and the chain names: a name with `~` whose buffer is missing plays its BASE (before the first `~`) and says `LE_INFO late · <variant> not rendered yet — <base> played raw` · **`/le/planrender`**: every planned variant whose source is in the bank and whose buffer is missing (the simulation's button). THE ONE PROOF: `process_test.scd` — a plan of two variants for `t-src` (durX 1.0 perc · 1.75 expodec), `planRender('t-src')`, both rows appear (350 ms · 612 ms, the names with `~`), the fallback resolves a missing variant to its base; PASS, headless.
  - **(c) THE PAGE (`electronics/score/le_objects.js`):** a return brick's **`elec.variants`** `{ '<sample>': '<key>-<env>' }` — one per sample it plays (`ar` one; `chain` · `arChain` each); the panel: a line per sample (the preset's name · the envelope · a ✕; a menu from `bank/presets.json`, loaded as the index is — `opts.presetsUrl`); the label marks a processed return (`~`) · **`fire`:** the names sent carry the suffix (chain lists likewise) — the engine falls back when late · **the plan send:** at attach/load and after any change to the bricks (debounced 1 s), and at play start: `LE.send('plan', …)` for every brick's variants with its start time and the preset's effect · args · env · durX · match, chunked · **the button** "render all planned" in Panels ▾ (its id in the menu's list — SEAMS row 5, one line in `composer.html`) → `LE.send('planrender')`. The same messages in concert and simulation (D10).
  - **(d) THE DEALING — `tools/deal_variants.js --score piece-sec01-a --to 22.5 [--dry] [--seed N]`:** the return bricks before 22.5 s (groups 2 … 4 — 20 bricks, 30 sample plays in score order); a preset to each play, ROUND ROBIN through the 21 (shuffled once by the seed), none reused until all are used, then a second pass under a different envelope; the envelope by the mix (seeded); writes `elec.variants`; REFUSES a working copy that differs from the save (§85); he is told before the file is written: his CTRL+S → the tool → Reload. `--dry` prints the deal as a table (time · lane · sample → preset · envelope · length).
  - **(e) THE RECORD** (RUNNING_LOG; the engine's log; SEAMS row 5; `docs/PERFORMANCE_NOTES.md`: the processed return, late = raw) · the subtree push · the mirror. **HIS, after:** restart the engine · F5 · CTRL+S → `node tools/deal_variants.js --score piece-sec01-a` → Reload · play from 0 with the engine up (the captures → the renders → the processed returns), or Panels ▾ → render all planned, then play from group 2. Then his ear; group 5's rhythm (his); group 5's effects (all enveloped) and group 6 after.
  - **Left to the build:** the fourteen presets' dials (the AI's taste, provisional) · the queue's width (two) · whether a late variant is said once per name · the plan's chunk size.
- **10.9 PITCH DIVERSITY in the pitched presets — `built 2026-10-05` (RUNNING_LOG §125: the four bank pitches as controls; ranges on every pitched dial; thirty presets, eight of them `icy`; the audition score `audition-30`; NOT heard), DECIDED 2026-10-05 (DEC-23; his word "a": RANDOM, not chosen sets; RUNNING_LOG §123). Result when done:** no two processed returns ring the same notes: every pitched dial of every pitched preset is a RANGE, drawn fresh for each variant at each plan send (the machinery of §111 · §116 — nothing new to build for the draw). The notes are luck within the ranges; the ranges are his to tune in `bank/presets.json`.
  - **(a) THE ENGINE — one small change:** the resonator bank's four frequencies (110 · 440 · 1600 · 5200 Hz) are fixed inside the chain — they become controls (`resF1 … resF4`, defaults as now) so `bands` can be drawn like the rest. Proven by `process_test.scd`'s chain-is-whole check and a render of `resonator` with the four set.
  - **(b) THE PRESETS — `bank/presets.json`:** ranges on the pitched dials — `bloom` · `squeal`: each string `fbS1 … fbS6` within about a fifth around its open-string pitch (E2 82 → [60, 110] … E4 330 → [250, 450]) · `bands`: `resF1 … resF4` in four registers ([80, 200] · [300, 700] · [1000, 2500] · [3500, 7000]) · `comb`: `combTime` [0.003, 0.012] (83 … 333 Hz) · `string`: `stresTime` [0.002, 0.008] (125 … 500 Hz) · `diode` as it is ([80, 400]) · a `ring` preset if he wants one (`rmFreq` [60, 900]) · `stutter`: `ovrDiv` [12, 48] at `ovrBuf` 120 (100 … 400 Hz) · the stretches: `icPitch` · `gfPitch` left at 0 (a stretch keeps its pitch — his call). The row says `changed`.
  - **(c) THE PAGE'S ROW** in the catalogue for `resonator`: the four frequency dials added (`resF1 … resF4`), hints.
  - **(d)** nothing in the deal tool or the plan send: both already draw a `[lo, hi]` at the send (§116 · §118). **HIS, after:** restart the engine (for (a)) · "reseed" or Panels → a return brick → render all planned · play from 6 s.
  - **Left to the build:** the ranges' widths (the AI's first numbers above) · whether a variant's drawn pitches should be WRITTEN into its index row (they are, as `args`) · a later "chosen" mode (DEC-23 b) if luck is not enough.
- **10.10 THE GENERATION AND THE AUDITION — `built 2026-10-05` (RUNNING_LOG §125 … §127), at his ear:** the presets by hand to thirty (`bank/presets_hand_30.json`), then GENERATED — `tools/gen_presets.js --seed N --n 100`: presets drawn at random, seeded, from the effects he names (thirteen: override · fuzz · octave · feedback · crush · diode · squiz · comb · icy · greyhole · jpverb · cres · string), each dial within its usual range, the pitched dials kept as ranges (10.9), no pitch shift on a stretch; `bank/presets.json` is the generation of seed 1. `tools/build_audition.js`: a score of every preset in a row, each on a different impulse (`audition-30` · `audition-100-s1`). The hundred rendered by him at checkpoint #7; his verdict not yet said. *Then: his keepers; the main score re-dealt from them.* **His keepers 2026-10-05 (RUNNING_LOG §130): 49 of the hundred — `bank/presets.json`; the hundred whole in `bank/presets_gen_s1_100.json`. The main score RE-DEALT from them the same day (§131: seed 3 · the 25 time presets · ring versions), unheard.** **THEN, AT HIS EAR IN THE MUSIC (§133 … §147, DEC-31): the set trimmed to 40 (the squiz · comb2 · comb6 · override7 out — `kept.dropped`); the whole score, six groups, thrown twelve times (seeds 4 … 15, `--env tail`, all presets); FIVE DEALS KEPT on the shelf — 7 · 10 · 11 · 14 · 15 (`tools/keep_deal.js`: a frozen score each + a `deals` row). A kept deal is a casting, not a take (the ranges are drawn fresh at every render). *Then: his choice among them.***
- **10.11 THE PATTERN'S EFFECTS — a preset per impact — `built 2026-10-05` (RUNNING_LOG §131; the engine's §38; DEC-28). Result when done:** on a pattern brick (group 5's run) the Players · Impulses boxes offer the RAW impulses only; its new **Effects** dial (`elec.fx`: `none` · `a preset for every impact` · envelope · class · seed · redeal) gives EVERY ONSET its own preset at Generate — round robin through `bank/presets.json`, seeded, none twice until all are used — so the impulses come round robin and each impact is processed differently; the plan renders each variant by its onset's time. Proven headless; his ear and his group 5 rhythm to come.
- **10.12 THE FEEDBACK ON HIS CHORD SHAPES — `built 2026-10-06`, done but for his ear (RUNNING_LOG §151; the engine's §40); laid out the same day (RUNNING_LOG §150; DEC-32). AS BUILT, where it differs from the block below — THE FEEDBACK STAGE WAS NOT LEFT UNTOUCHED:** the 54 chords were first rendered through the stage as it was and NONE BLOOMED (1.3 … 3.4 s of ring-down; a string alone has a loop gain of 0.5 — the loop takes off only where two strings share a harmonic, the open guitar's two E's). So the feedback has a switch, **`the strings` (`fbOwn`): `one loop` (0, the default — every existing preset and kept deal as before) · `each string sings — a chord` (1)**: each string a comb that barely decays, the bloom a gain of 60 dB in `fbBloom` s from the level the sound gave it, up to an amp of its own, the hold, a ring-down; `path` unused. The 54 presets carry it; measured on five of them: 7.5 s long, rising at 1 s, at the peak at 3 and 5 s, every string present · NO envelope `ring`: each preset's own `capMs` 12000 under `tail` · the shelf's row 7 was heard cut at 1.7 s and unmatched — here its dials run whole, peak-matched (`--cap 1700 --gap 3.5 --replace` makes the short one) · a brick's tag may be 48 characters · 54 files of the FIRST kind are in his bank under the bricks' names until his first "render all planned" after an engine restart. **Result when done:** a score **`audition-feedback-chords`**: the **54 chord shapes** of `bank/harmonies.json` (`banks.chordShapes` — the two-pianos piece's, his voicings), ALL OF THEM, in the bank's order, one brick each — the feedback's six strings tuned to the shape's pitches as he voiced them (a shape over six notes: its lowest six, said in the sheet), every other dial his kept candidate 7 "slow bloom"; each brick on a different captured impulse, round robin; every brick labelled with the shape (`cs-002 m2 P5 [0,1,7]`), its pitches and its impulse in the sheet **`docs/auditions/audition-feedback-chords.md`**. The feedback stage itself untouched.
  - 54 presets `cs001` … `cs054` of effect `feedback` in `bank/presets.json`, `deal: false`, under the envelope `ring` (bloom 3 s + hold 6 s + the ring-down ≈ 11 s; the cap of 16 s holds it).
  - **`tools/build_chord_feedback.js`** — reads the harmonies bank, writes the presets (its own keys only), builds the score as a NEW file on the audition builder's frame (none overlapping), writes the sheet, sends the plan with render 1.
  - **HIS, after:** F5 · File ▾ → Experiments → `audition-feedback-chords` · a purple brick → **render all planned** · play from 0. Then his ear.
  - *Later, at his word:* another base setting than candidate 7 (one flag of the tool) · the strikes and the blasts banks the same way · the strings as note names (10.6's later line).

## 2. Notate — `todo`

*To be laid out when we discuss it.*

## 3. The performance score — `todo`

*To be laid out when we discuss it.*

## 4. Submission — `todo`

*His. To be laid out when we discuss it.* **The piece AND a paper, the same deadline** (his word 2026-10-04, RUNNING_LOG §4): the paper
written during or directly after the piece — the lab journal is its source, kept to that standard from §1.
**CORRECTED 2026-10-04 (RUNNING_LOG §17): ONE paper for the TENOR call, about this piece AND his improvisation with live
electronics** — its sources are this lab journal, the engine's, and the improviser piece's own once it exists.
