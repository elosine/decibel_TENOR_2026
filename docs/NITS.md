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

- **RESOLVED 2026-10-04 (RUNNING_LOG §20): the three clones are now from the racks ON DISK** — his word "disk". The nit above ("taken from GIT") is closed.
- **`make_tracks.lua` resets every SPEC track's fader to 0 dB on each run** (inherited from piece #6). Harmless before container 5; after the trims, run `apply_trims.lua` after it. The caution is in the job's header.

- **The Glockenspiel RM gave no note on key 84, channel 1** (2026-10-04, RUNNING_LOG §21: −88 dB). Not diagnosed. The key ranges of all 39 Ricotti patches are read at 4.5 (the recipe needs them): from Kontakt's keyboard, or a meter sweep.
- **The percussion selection and recipe are still piece #6's fourteen** (`bank/perc_selection.json` · the `ARO_PERC` block). Replaced at 4.5 by the eight of DEC-6, once his five loads are read.
- **A bridge job can fail once with `EBUSY` on the inbox rename** (2026-10-04, once in ~60 jobs); a retry passes. If it recurs, `tools/reaper_job.js` gets a retry around the rename.

- **Two hand-written percussion voices in `sandbox/instruments.js` are still piece #6's** (2026-10-04, RUNNING_LOG §25): `main` (the placeholder — its label names the Finger Cymbals; channel 1 is now the bongos) and `toys_claves` on channel 7 (now the suspended cymbals). The Texture panel's audition click is `toys_claves` key 41 (`score/public/texture_panel.js:57` · `texture_row.js` · `texture_cols.js`) — here it would play a cymbal roll. Fix when the Texture panel is first used (container 7): a voice of THIS rack — proposed, the wood blocks, hard mallets — his word.
- **RESOLVED 2026-10-04: the percussion selection and recipe are this piece's eight** (§25) — the nit "still piece #6's fourteen" is closed. 38 new technique keys wait to be registered in `notation/registry/techniques.json` (container 6; `palette_check` § 5 lists them).

- **The pitched percussion lane's INTERNAL key is still `bowed_vibraphone` and its track id `vibraphone`** (2026-10-04, RUNNING_LOG §34) — the lane is the Ricotti mallets and reads "Mallets". A rename is cosmetic: 13 sites in 9 app modules (`beating_calc` · `morph_panel` STILL_INST · `rhythm_seq_ui` · `strike_drawer` · `texture_dyn` · `texture_panel` · `vibes_pitch` · `composer.html`), 15 tools, the registry, and every saved score's track ids. Do it with the notation set-up (container 6) if at all.
- **The Ricotti rolls, tremolos and bowed patches take their dynamic from CC1** (the library's manual: "CC1 mapped vel … as it is with the longs"). Not wired: the recipe marks every patch loud by velocity, so those sound at the wheel's resting value. Settle at the volume probe (container 5): either the plugin's "CC1 mapped velocity" switch, or `loud: "mw"` for them.
- **The mallets lane's vibraphone-era tools are not re-thought** (`vibes_pitch.js` · the morph panel's STILL_INST · the texture panel's VIB): they still act on the pitched lane, now with mallets in it. Looked at when one is first used (container 7).
- **The bass clarinet's strike slot (channel 5, a second Kontakt output) is idle** inside the cloned instance; the slap plays on channel 1. Remove the slot, or build a strike lane, only if the music asks.

- **THE BASS FLUTE HAS NO TRIM AND NO DYNAMICS CURVE** (2026-10-04, RUNNING_LOG §42): its preset 33 takes its loudness from the mod wheel, and its four Kontakt slots are not in one state (slot 2 follows the wheel on #15 too). Waiting on his word: reset to the factory instrument and #15, or a preset remade from #15. Then `node tools/card_schedule.js --only bass_flute` · `probes/card_run.ps1` · `analyze_card.py --merge bank/instrument_card.json` · `compute_trims.js --only bass_flute` (then the three carried rows again — `trims_merge` in the log) · `build_remap_card.js --only bass_flute` · `remap_merge.js --only bass_flute --cc7-from cello` · add it to `dyn_table_check.js`.
- **`tools/dyn_table_check.js` fails ONE assertion by design** — "mp → ff on a UVI instrument (bassoon)": piece #6's, this rack has no UVI instrument. The rows of this rack's three curves all pass. Guard the assertion on a UVI instrument existing.
- **The mallets' trims rest on ONE main patch each** (crotales main metal · glockenspiel main hard · xylophone main · marimba main); the other 35 patches share the track's fader and are unmeasured — the xylophone's patches differ by up to ~29 dB at one velocity (§32). Measure a patch when the music uses it.
- **The per-voice target is piece #6's (−31.84 dB, "nine voices")**, kept so the carried trims stay exact. Six players would be +1.76 dB on every fader. His to ask.
- **The REC track stays in the rack** (track 17, 16 receives, master send off). `make_tracks.lua` · `make_perc_tracks.lua` add tracks before it only by name — check its receives after adding a track (`make_rec_track.lua` is idempotent).

- **RESOLVED 2026-10-04 (RUNNING_LOG §43): the bass flute has its trim (−7.52 dB) and its curve** — after a reset to the factory instrument, ordinary #15.
- **The bass flute's dynamics curve is heavily clamped** (47 low / 49 high of 62 anchor steps, RUNNING_LOG §43): its register spread at fff is 15 dB against an own span of 17.6, on three pitches, with the round robin on. If its dynamics sound flat or lopsided: a fine register run (`regfine`, ~15 pitches at 127) and a rebuild; or a round-robin-off preset made FROM #15.
