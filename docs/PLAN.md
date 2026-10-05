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

### 1.1 The electronics' plumbing — the running order's step 6, the first object simulated end to end — `doing` (laid out 2026-10-04, RUNNING_LOG §47 · §48 · §49)

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
- **6.3 · 6.3b · 6.4 · 6.5 ARE BUILT AS ONE — THE FIRST OBJECT END TO END** (his word 2026-10-04, *"a, write it"* — RUNNING_LOG §61 · §62;
  DEC-7 · DEC-8). The order below is the build's order, each step proven before the next; the labels are kept. **THE SHAPE, decided here
  (the AI's, his to reverse):** both bricks are ZONES WITH A NEW MODEL (`type: 'zone'`, `midiModel: 'elecOpen'` · `'elecPlay'`), not a new
  object type — the composer tests an object's TYPE by name in some 250 places and has no registry, while a zone already draws on a lane,
  selects, moves, resizes, saves and has a panel, and its MODEL is tested in a few places only (trill 22 · beating 10 · the rest 2 … 4); the
  extractor reads trill zones alone, so a save with these in it still extracts. The machinery for the models is the ENGINE's
  (`electronics/score/le_objects.js` — label · panel section · gesture · tick); the hook lines in `composer.html` are the piece's, listed in
  `SEAMS.md`. The engine's side (`electronics/sc/`): the capture, the crop, the index writer, the sample player — all generic. The bank's
  FOLDER and the engine's ADDRESS come from `bank/elec_route.json` at the engine's start, never from a message.
- **6.3 The opening brick + the capture — `todo` (LAID OUT AND WRITTEN 2026-10-04, RUNNING_LOG §62).** *Result when done:* a brick he
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
- **6.3b The crop — `todo` (LAID OUT AND WRITTEN 2026-10-04, RUNNING_LOG §62).** *Result when done:* the raw recording is trimmed to the
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
- **6.4 The sample index — `todo` (LAID OUT AND WRITTEN 2026-10-04, RUNNING_LOG §62).** *Result when done:* one file the piece owns lists
  every sample taken; the score reads it; a sample is found by name. **Sub-steps:**
  - (a) `bank/samples/index.json` — a row per sample: `id · name · player · lane · category · scoreTime · lengthMs · peakDb · file · raw ·
    openingId · captured`. The schema the engine's (its `docs/`); the file the piece's.
  - (b) Written by the engine after each crop (read, add the row, write). A name taken twice replaces its row and its file — the latest take
    wins, and the log line says so.
  - (c) Read by the page — `fetch('/bank/samples/index.json')`: the server serves `/bank/` already, no new route.
  - (d) Verified: the row appears after a capture; the page lists it.
  - *His part:* nothing.
- **6.5 The playback brick — `todo` (LAID OUT AND WRITTEN 2026-10-04, RUNNING_LOG §62).** *Result when done:* a second brick, placed on a
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
- **6.6 The demo end to end, and the record — `todo` (LAID OUT AND WRITTEN 2026-10-04, RUNNING_LOG §62).** *Result when done:* one score
  he can open — a bass clarinet note, an opening over it, a playback brick three seconds later — played with the engine up, the note
  sounds and the sample comes back; and the record is whole. **Sub-steps:**
  - (a) the demo score `scores/decibel-first-object.json`, built by a tool as `build_first_sound.js` was — his to play.
  - (b) the record: RUNNING_LOG · the engine's log · `SEAMS.md` (the composer-score seam's hook lines, the `bank` block, the kinds `open` ·
    `play` · `captured`) · `TAKE.md` · the engine plan 4.3 … 4.4 and part 11 marked · `git subtree push`.
  - (c) the checks: the engine's self-test with the crop case · `palette_check` after a key is added · the extractor run on the demo score
    (zones of other models are skipped; if it throws, one filter, and a NITS line otherwise) · `node tools/unsaved_check.js`.
  - *His part:* his ear, and his word that this is the first object he meant (DEC-7).

## 2. Notate — `todo`

*To be laid out when we discuss it.*

## 3. The performance score — `todo`

*To be laid out when we discuss it.*

## 4. Submission — `todo`

*His. To be laid out when we discuss it.* **The piece AND a paper, the same deadline** (his word 2026-10-04, RUNNING_LOG §4): the paper
written during or directly after the piece — the lab journal is its source, kept to that standard from §1.
**CORRECTED 2026-10-04 (RUNNING_LOG §17): ONE paper for the TENOR call, about this piece AND his improvisation with live
electronics** — its sources are this lab journal, the engine's, and the improviser piece's own once it exists.
