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
