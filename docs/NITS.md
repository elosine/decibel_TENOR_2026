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

- **`check_rules` is 31 of 32** (2026-10-04, RUNNING_LOG §45): "(8) the cents and the partial read the same in C and in the transposed parts" has no page with a sequence overlay to compare. Green by itself once the piece has one.
- **The mallets lane's pitch is the WRITTEN one** (the Ricotti library is keyed at written pitch; crotales and glockenspiel sound +24, xylophone +12). The notation is right as it is. A tool that deals SOUNDING pitches to the lane (a harmony take, a reference chord) would be octaves off — give the lane a per-instrument octave when such a tool is first used on it.
- **No measured sample length for any struck voice of this rack** — the extractor uses the drawn length (12 warnings on the first page). `bank/instrument_card.json` holds a `soundingS` for every instrument measured; feed `bank/sample_lengths.json` from it when a struck note's printed length matters.
- **Container 6, open:** his three calls (the pitch form · the percussion staff's line order · the short names) · the first print page not looked at (no PDF rasteriser here; `pdftoppm`) · `notation/ir/README.md` (6.8) · the main file's discipline (6.6) · the shield needs approved pages.
- **RESOLVED 2026-10-04 (§45): the Texture panel's click** is the wood blocks' (hard mallets, block 2); the hand-typed claves voice is gone.

## From the first electronics object (2026-10-04, RUNNING_LOG §64)

- **No re-crop tool.** The raw recording of every opening is kept (`bank/samples/raw/<opening id>.wav`) so a crop can be redone with
  other numbers, but nothing does it yet: to hear a changed `bank.crop` he plays through the opening again. Deferred: one object,
  one note — the need is not here. (The engine's: a `cropFind` + `cropTake` over a kept raw, by name.)
- **`M` makes ONE opening, over the primary selected note.** A selection of many notes → one opening. Deferred to step 8, when a
  series of notes wants a series of openings.
- **A duplicated opening (CTRL+drag) keeps its name** — two openings of one name, the later take replaces the earlier sample. Right
  for a return (the same sample again), wrong for an opening. Deferred: rename in the panel.
- **A lane is one of the engine's players by ONE MIDI port** (`portOf` in `composer.html`'s `LEObjects.attach`). The percussionist's
  two lanes play on five ports and the mallets' techniques carry their own — the rule needs a second look when the percussion gets
  a microphone (a `lanes` list per player in `bank/elec_route.json` would do).
- **A very short return is hard to grab** — a 143 ms sample is a 14-pixel brick at the default zoom, and the zone's edge handles
  take 12 of them. By the numbers only — not tried, by the AI or by him; zooming in is the way round it.
- **`tools/notate_section.js` ignores `--out`** — it always writes `notation/ir/<id>.ir.json` and adds the page to the picker. Not
  this build's; a check through it must be taken out again (`docs/VERIFICATION_RECIPE.md`).
- **`probes/elec_message_log.jsonl`** (committed) no longer grows: it kept the route check's pairings while `testOnsets` was on.
  Left as the record of 6.2's measure.

## From step 8 (2026-10-05, RUNNING_LOG §71)

- **THE CONCERT SAFETY NET'S ANALYSIS MUST BE FOOLPROOF (his word):** today a capture replaces the buffer when the crop finds an attack above
  the floor (−50 dB) at −30 dB of the window's peak; a loud room, a neighbour's sound or feedback would count as "a sound was captured", and a
  quiet true attack would not. Before the concert: a per-player floor measured in the hall, a minimum length, a spectral sanity check, and the
  verdict shown per opening on the engine's screen. Deferred: no concert yet.
- **The percussion's microphone is one track** (the shime daiko's): the other seven Abbey Road tracks need a send to ReaRoute 4 as the music
  uses them — `elec_route.lua` takes one track per player row; a `tracks` list is the small change.
- **A swelling sound's "attack":** the crop finds where the level first reaches −30 dB of the peak — for a multiphonic that is the swell, 1.3 s
  in; the device sheet for such kinds decides what "the attack" means (`attackDb` per category, or the onset of sound).
- **The crop test needs his engine down and a healthy ReaRoute;** after a wedge only a Reaper restart helps (§71). The test tool now leaves its
  engine gracefully; `sustain_watch.lua`'s track name is still hard-coded (a scratch copy is used).
- **The process brick (RUNNING_LOG §103), deferred:** a stage renamed or re-pointed after a render leaves its old sample in the bank (no tool
  removes an orphan) · a stage re-rendered does not re-render those made from it — the label says which are stale (PLAN 1.3 · 10.4, the
  cascade) · the bank is mono: the chain's `space` stage is out until a stereo sample is wanted · a duplicated stage keeps its `out` name —
  two bricks, one sample, until one is renamed · the default dials are the sandbox's or the AI's guess, unheard (the spectral gate's
  threshold, the freeze's moment) · `process_test.scd`'s scratch bank is made in sclang's temp folder and removed on a pass.
- **The processed return (RUNNING_LOG §116), deferred:** a variant no brick asks for any more (a new deal, a preset renamed) stays in the bank and
  the index — no tool removes an orphan · the bank is re-made at every pass: thirty `~<key>-<env>` files change in git each time he plays
  through (the bank at work; committed at a wrap) · how many renders his machine carries beside Reaper and a playing score is unmeasured
  (`~le[\planWidth]`, two) · a pattern brick's samples take a variant in the message but its panel has no rows for them (group 5's talk) ·
  an opening renamed does not carry a return's variant (keyed by the sample's name); the impulses are named by the tool · the fourteen
  presets of the AI's and the three shelf settings changed for a return are unheard (`bank/presets.json`).
- **The generations and the deals (RUNNING_LOG §117 … §127), deferred:** every deal and every generation leaves its variants in the bank and the
  index (a hundred `~` files a generation) — no tool removes those no brick asks for · a score dealt from one preset set names keys another set
  does not have: the page says "not in the presets: raw" and the engine plays the EARLIER render — nothing warns at the deal that the set
  changed under a score · `audition-30` matches `bank/presets_hand_30.json`, not the generated file · `gen_presets.js`'s bounds are the hints'
  usual ranges copied by hand (a third place the dial ranges live) · the three `icy` presets' speeds on the catalogue row are the AI's reading
  of his `rate` maps (`Freezer.scd`'s is inverted and scaled) · a brick whose name moved (`~6` → `~7`) keeps no pointer to its old render.
- **2026-10-06 (RUNNING_LOG §170) — the bass flute's two multiphonic presets carry the instrument's whole range in the recipe** (`mp_short` #11 · `mp_loop` #23: 48 … 86; `xsBassFluteTechs` has no range argument) while the sweep found preset #23 sounding on 48 … 60 only — the measured range is in `bank/drone_sources.json`; the recipe row (and `tools/register_techniques.js` if a key changes) when the music asks for the multiphonics beyond the drones · the Ricotti bowed patches' CC1 dynamic is still unwired (the §34 nit) — a bowed crotales note sounds at the wheel's resting value, as the drone source does.
- **2026-10-06 (RUNNING_LOG §179 … §181) — the sine tones, real but not now:** **the bass flute has no sustain without vibrato** (its 32 Xsample presets; the sines' simulated flute plays `vib_vel` — `bank/sine_behaviours.json` `lanes.bass_flute.voice`; a free preset with the vibrato taken out in Kontakt would be the cure, his) · **the crotales' tuning was measured on ONE key** (key 67: + 17 cents; the sine's `sineCents` is that one number for all 25 — a sweep through his rack would give a table) · **the bowed crotales take their dynamic from CC1, unwired** (as §170 found) · a low player beats slowly for the same cents (40 c: 15 a second on the flute's E5, 1.6 on the cello's D2) — a `beatHz` range on a player lane would even it out, one more reading in `sine_sim.js` `draw` · **a GO'd note carries `morphBend`: the notation classes it a morph note** (`notation/lib/classify.js`) — the sine's own sign and the player's bend are a device sheet when notating comes (D8) · the strip's take menu and a GO over several lanes at once were not driven by hand in the page (one note was) · `tools/sine_go.js` records a GO in the save's `metadata.sineGo`; the page's button records it on each note only (`properties.sine`) · the engine's `sinePlay` · `sineLetGo` have never run on a server.
- **2026-10-06 (RUNNING_LOG §188 … §191) — the three body problem, real but not now:** **the simulated five do not hear the computer players** (their notes are written before the engine plays — a real ensemble will; a two-way simulation would need the engine's decisions fed back, or the eight simulated together and the engine told what to play) · **the five's bets are blind** (a real player anticipates by sight; the simulation predicts from the last two onsets only, so most bets on a close-passing player miss — `rules.closePass.beforeShare` is the one number) · **a "type of sound" as a target is not modelled** (a target is a player or the cluster) · **the five's containers are plain zones with `zoneFunction: 'tb'`** — the notation's extractor has never seen one: before a page is notated from this section it needs a row, or the zones a drawn kind (14.3's device sheet) · **`tools/three_body_roll.js` was not written** — the builder is the one road; placing the section INTO the piece's score (at a time, beside other material) is a tool to write then · **the computer players' palettes are whatever renders the bank holds today** (18 names of the 571 `tail` variants): a re-deal of the opening does not change them, but a bank cleared of old renders would leave a brick saying `NO such sample` in the engine's window — the builder again then · **a performer brick has no key** (the builder makes them; the panel edits one) · **the simulated notes' dynamic is one mark for all (`sim.dyn`, f)** — no shape over the arch.

**2026-10-07 (RUNNING_LOG §216; DEC-44) — A PROCESSED RETURN OF A LIVE CAPTURE CANNOT SOUND AT THE HIT ITSELF.** The petal hit's return sits AT the note; its petals are an OFFLINE render made right after the capture (the window + the crop + a 16 s ring's render, unmeasured — of the order of a second). In the composing simulation the second pass has it; a CONCERT has one pass and would hear the raw capture (`late`). Two ways, his to choose when the pattern is notated: a GAP before the return (`petal_hit.js --gap`, the render's time, measured first) · a REAL-TIME petals path in the engine (his SynthDef is real-time by nature; the piece's stage renders offline) fed from the microphone's capture buffer — a build on the engine.
