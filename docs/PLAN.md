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
| 3 The engine copied forward | yes — from piece #6 | `doing` — 3.0 ☑ the survey · 3.1 ☑ the copy, 369 / 369 identical (`c90b768`) · 3.2 ☑ proven whole (52 checks: 34 green, 18 red, all accounted for; the app boots on 5500). · 3.8 ☑ the small fixes (six made, one not reproduced), twelve checks retired — the battery 36 green, 4 waiting for container 5. **NEXT: 3.3 the re-palette** (needs Q4, the percussion's lanes) | RUNNING_LOG §6 … §12 · § 0.3 below |
| 4 The instruments | yes | `todo` | |
| 5 The calibration | yes | `todo` | |
| 7 The composing tools made the piece's | yes — one at a time, at compositional need | `todo` | |
| 6 The notation set-up — the animated scrolling score | yes | `todo` | |
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

## 1. Compose — `todo`

*To be laid out when we discuss it.*

## 2. Notate — `todo`

*To be laid out when we discuss it.*

## 3. The performance score — `todo`

*To be laid out when we discuss it.*

## 4. Submission — `todo`

*His. To be laid out when we discuss it.* **The piece AND a paper, the same deadline** (his word 2026-10-04, RUNNING_LOG §4): the paper
written during or directly after the piece — the lab journal is its source, kept to that standard from §1.
