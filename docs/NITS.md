# NITS — deferred small stuff

> Things worth fixing that are **not** blocking the piece (`AI_METHODOLOGY.md` rule 1: fix
> what blocks the work or what will break; record the rest here). One bullet each: what it
> is, what was observed, why it is deferred. Enough context to act on cold. Delete when
> fixed. **Never ask the composer to triage this file.**

## From the start of this piece (2026-10-04, RUNNING_LOG §1)

### The batteries, classified once at the copy (3.2, 2026-10-04 — RUNNING_LOG §10)

*52 checks run on the unchanged copy: 34 green, 18 red, none a copy defect. The green ones and the full table are in RUNNING_LOG §10.
A check that reads another piece's pages needs them STAGED — the recipe is `tools/port/stage32.sh`; the page-scanning checks
(`check_rules` · `decisions_needed` · `check_screen_edges`) are run on ONE piece's pages alone.*

- **FIXED at 3.8 (RUNNING_LOG §12):** `test_animobj` (H-11) — green · `test_identity` — green on a save with objects
  (`--score lgmf-ref`, staged). **Its default score is still `piece-lgmf`, an EMPTY save in piece #6's git** — re-point the default
  with the names at 3.3, to this piece's chain; until this piece has a save with objects it is run with `--score`.
- **After 3.8 the battery is 40 commands: 36 green, 4 red (the self-tests below)** — `tools/port/run_batteries.sh` is the list.
- **RETIRED at 3.8 — bound to piece #5's cast or data, red in piece #6 since its own re-palette** (twelve; fetch one back
  from `septet_LGMF_2026` @ `0d70fda` the day its tool is used here, and re-point it at this piece's cast): `test_septet_notation` ·
  `test_trills` · `test_morph_notation` (+ `tools/fixtures/morph_notation_baseline.json`) · `test_cross_staff` · `beating_calc_check` ·
  `strike_chords_check` · `piano_harmonics_check` · `piano_cues_check` · `harm_source_check` · `morph_septet_check`
  (+ `tools/morph_tuba_baseline.json`) · `score/tools/check_fill` · `fade_check`.
- **Left behind at the copy — red in the source too (H-7):** `test_coords` · `cresc_check` · `test_extract_played` ·
  `ir_extract_golden` · `test_notate_block` · `test_playability` · `test_midiplayer` · `test_sonify_core`, and four fixtures only
  they read.
- **Kept, red until container 5:** `probes/selftest_bend.py` · `selftest_bend_analyzer.py` · `selftest_ranges.py` ·
  `selftest_sweep.py` — each needs a schedule a probe's dry run writes (`bend_schedule.json` · `ranges_schedule.json` ·
  `sweep_schedule.json`); none was ever in git.
- **Green on STAGED fixtures of other pieces — they say the engine is whole, nothing about this piece yet:** the tuba-page batteries
  (`test_render` · `test_layout` · `test_splice` · `test_pattern_fit` · `test_graphic` · `test_stamps` · `ir_validate_battery`; their
  `tools/fixtures/*_snapshot.json` are hashes of piece #4's pages — regenerate with `--update` only when this piece has pages) ·
  `test_step_dynamics` · `test_surge_run` (piece #5's score) · every check that reads `piece-lgmf` (`eh_figure_check` ·
  `sequence_notation_check` · `vib_marks_check` · `check_screen_edges` · the four `check_print_*`) — re-pointed or retired at
  container 6, when this piece has pages of its own.
- **Not checks, not run:** `v0_proofs.js` (a generator: writes `notation/app/proofs_v0/`) · `range_check.js` · `check_print_pdf.js` ·
  `cresc_test.js` · `cresc_secco_test.js` · `cc7_ramp_test.js` (each needs a file or writes a score).

### From the re-palette and the running app (3.3 … 3.5, RUNNING_LOG §14 … §16)

- **Five checks went red WITH the re-palette — each is bound to piece #6's cast or data; re-point each where named:**
  `dyn_table_check` (asserts piece #6's measured curves — container 5, on this piece's remap) · `check_ceilings --all` (now reads
  `decibel-*` scores; there are none — container 5's reference scores) · `sequence_check` (piece #6's six reference chords and
  `tools/sequence_baseline.json` — a new baseline with `--freeze` when the sequence tool is first used here) · `vibes_pitch_check`
  (its fixtures name the double bass, the horn, the English horn, the trumpet — when the strip's pitch tool is first used) ·
  `model_bank --validate` (red ONLY with piece #6's actuals staged; VALID on this repo's own store).
- **Checks that read piece #6's PAGES by name, kept as the engine's proof until this piece has pages (container 6):**
  `check_screen_edges` · `check_print_edges` · `check_print_frame` · `check_print_front` · `check_print_pages` (their default is
  `piece-decibel` now; the runner passes `--ir piece-lgmf`) · `eh_figure_check` · `vib_marks_check` (piece #6's own LOCKS, hard-wired
  to its page — replaced by this piece's locks as its figures are approved, H-23) · `sequence_notation_check` · `check_rules` ·
  `decisions_needed` (they crash with no `notation/ir/` at all).
- **`notation/registry/ensemble.json` is STILL PIECE #6's eight parts** — container 6's 6.0. Until then `tools/notate_section.js`
  refuses a Decibel save (the registry and the score's tracks disagree), which is right.
- **The `LG…` port names inside the bridge's jobs** (`reaper/bridge/jobs/make_tracks.lua` · `make_perc_tracks.lua` ·
  `make_rec_track.lua` · `horn_high_path.lua` · `clip_watch.lua` …, `reaper/kontakt/curve_slots.lua`, `tools/apply_uvi_parts.js` ·
  `uvi_state.js` · `export_midi.js`'s track table) — they build PIECE #6's rack. Rewritten at container 4 (4.1 · 4.2) from the
  standard name set; meanwhile the project guard (`decibel_rack`) keeps every job off piece #6's open project.
- **Piece #6's generators, carried and not this piece's:** `tools/build_lgmf_ref.js` · `build_lgmf_transitions.js` ·
  `build_transition_models.js` · `build_1b5_score.js` · `build_reference_chords.js` · `probes/analyze_lgmf_balance.py` — its
  reference chords and its cast. Container 5 rewrites or retires each.
- **Lane NUMBERS still written into modules — the quiet piano role's fallbacks, harmless:** `cue_picker.js` · `piano_cues.js` ·
  `piano_harmonics.js` (`pianoLane: 2, metaLayer: 7` when the page gives none) · `composer.html`'s default lane `3` when none is
  active (two sites — lane 3 is the vibraphone here). The two that THREW are fixed (the Beating panel · the curve buttons).
- **`score/public/cresc_run.js`'s default players and pitches are PROVISIONAL** (every lane but the percussion; one pitch inside
  each range) — the crescendo run's defaults are a musical choice, his when the tool is used. Its storage keys are still
  `septet.crescRun.*` (piece #5's name; per-origin, harmless).
- **Two tooltips still name piece #6's instruments** (`morph_panel.js` l. 764 · `sequence_ui.js` l. 1217 — "english horn and bassoon
  about 12 s …"): the numbers are piece #6's ceilings. Rewrite when the ceilings here are measured (container 5).
- **The ceilings of the bass flute (8 s), the bass clarinet (12 s) and the viola (12 s) are GUESSES** (`beating_calc.js`) —
  container 5 measures them; the placeholder recipes' ranges and bend ranges likewise.
- **Not built at this port:** the roles helper (the protocol's 3.10 — the piano role is quiet and clicked; the percussion's and
  the vibraphone's roles are alive because their keys were carried) · the bundled font for ♭ ♯ ♮ (3.9 — it changes the notation's
  look; with container 6) · a `lgmf-5400` launch entry (H-4 — at his word).
- **`print/cover/cover.json` · `print/score/build.sh` carry piece #6's title** (`Recombination`) — container 8.

### From the small fixes (3.8, RUNNING_LOG §12)

- **Three of the fixes were made and NOT RUN — check each at container 5's first card:** `probes/analyze_card.py` stamps
  `trimAtMeasurementDb` (it compiles; it needs a recording) · `tools/apply_ranges.js` / `apply_bend_ranges.js` find their block by its
  header's prefix and refuse a second insert (they write the recipe) · `probes/ceiling_probe.ps1` · `port_note_probe.ps1` now REQUIRE
  `-Port` (they parse; they send MIDI).
- **The harvest's H-9 (a `TypeError` on a bare load, `sequence_ui.js`) did not reproduce** — two bare loads, no error; `stop()` is
  guarded today. Nothing was changed. If a "sequence panel came up wrong after a reload" is ever reported, this is still the first read.
- **`probes/panic.ps1` defaults to piece #5's ports** (`Flute` · `Fluteb` · `BassCl` · `Piano` · `Vn1` …) — a panic that needs
  arguments is no panic, so the default stays until container 4 names this piece's ports (4.1), then becomes them.
- **A bare load logs four `404`** (`bank/scattered_strikes.json` · `velocity_remap.json` ×2 · `sample_lengths.json`) and
  `[velocity] remap not loaded` — the leave-list banks; 3.4's skeleton banks end them.

### From the copy itself (3.0 · 3.1, RUNNING_LOG §8 · §9)

- **`docs/instrument_map.json` is a 573-byte stub that loads 0 instruments, and the page still fetches it** (`composer.html` l. 647,
  the INSTRUMENT REGISTRY of piece #2's day). Dropping the file needs the loader dropped with it — the harvest's H-8 named the file
  only. Not blocking: it loads clean.
- **`package-lock.json` names the package `septet-2026`** (piece #5's — never updated in piece #6); `npm install` rewrites it. Renamed
  with `package.json` at the re-palette (3.3).
- **The composer's track `<select>` was stale in piece #6** (seven options, META = 7; the vibraphone never added) — rewritten at 3.3.
- **`notation/registry/rules.json` l. 145 names part 4 and piece #6's seconds** (a staff's visibility) — container 6 (Principle 22).

### Open work this start created or uncovered

- **The names of 2.3 are the AI's, by pattern** (`decibel` · `piece-decibel` · `decibel-tenor-2026` · `decibel_rack`) —
  confirm each against the code that reads it when the code arrives (container 3), then write `docs/NAMING.md` §1.
- **`docs/VERIFICATION_RECIPE.md` and the MACHINE LESSONS in `docs/HOW_WE_WORK.md` carry piece #6's names** (`score-5401`,
  the `lgmf.*` keys, its `§N`) — re-point them at the re-palette (3.3).

## ‹a later heading, by topic or by date›

- ‹…›

## HELD FOR THE NEXT PIECE OR THE POSTMORTEM

*(Offers he held — not to be raised again in this piece. The harvest reads this section whole.)*

- ‹…›

- **Piece #5's SECOND "Bass Clarinet XS" track and its "BassCl strikes" bus were not carried into this rack** (2026-10-04, RUNNING_LOG §19). The
  first track (the four D11 slots + the strike slot on channel 5) was cloned; the second — a single-slot Kontakt on the same port — was not, its
  purpose not found in the record read. This engine's recipes have no strike lane. Decide at 4.5, when the bass clarinet's recipe is derived:
  the slap on channel 1 by CC0, or a lane.
- **The three cloned tracks were taken from GIT; the old racks on disk are newer** (piece #6's 2026-10-01, piece #5's 2026-09-17; the plugin
  states differ). His one word decides (`tools/build_rack.js --source disk`). Until then a hand-set value of the finished pieces may be missing.
- **Reaper did not enable the new loopMIDI ports as inputs by itself** (2026-10-04; piece #6 §23 found it did). One Preferences step, his; the
  masks (`midiins_h` · `midiins_x` in `reaper.ini`) are not reachable through the API. For the how-to pages (4.10).
