# HARVEST — what *Approaching* (piece 6) hands to the Switch~ piece (piece 7)

> The protocol's step 1 (`composition-system/protocol/NEW_PIECE_PROTOCOL.md` § 1), run 2026-10-20 (Fable, in this repo at his word
> "do it here"; RUNNING_LOG §488). The second harvest ever; the first was *Recombination*'s (`septet_LGMF_2026/docs/HARVEST.md`, H-1 … H-47).
> **The IDs here are `H6-N`** (piece 6's harvest) so they never collide with that file's `H-N`, which the protocol cites everywhere.
>
> **Sources read (1.1):** `NITS.md` whole (its § HELD and every open bullet) · journal §2 (WHERE THE PIECE STANDS · OPEN AT SESSION END ·
> the NEXT STEPS table · the open questions) · `PLAN.md`'s item statuses · `PROTOCOL_DEVIATIONS.md` whole (the ~25 "for v2" lines) ·
> `SWEEP_LIST.md`'s open rows · `electronics/docs/NITS.md` (the engine's) · `NOTATION_SCHEME.md` · `PERFORMANCE_NOTES.md`'s rows ·
> `tools/port/`. `MORPH_NOTES.md` §4: the morph tool was never used in this piece (0 `DEC-` entries) — nothing to harvest.
> **The piece's state at the harvest:** Draft 01 stands (six sections, 12:59); the film and the print approved; the performance
> instructions' page in hand; his word 2026-10-20: *"approaching is done and will submit when call opens."*
>
> **One line per item:** the item — kind · its source → the container it goes to. The verdicts are the AI's proposals (1.2) until
> **HIS READ (1.3):** ‹his words, the date, the RUNNING_LOG §›.
> A "take now" becomes a step in its container at the Switch~ piece's start. A "later" goes to the home's `BACKLOG.md` (9.6).
>
> Kinds: **fix** a tool or code fix · **rule** an engraving / layout rule · **method** a way of working · **lesson** a thing learned about
> the stack · **doc** a document's state · **arch** an architecture item · **feature** a wish · **pointer** where a thing lives.

## TAKE NOW — becomes a step in its container at the next start (43)

### → 2 the repo and its kit

- **H6-1** THE DEVIATIONS REGISTER IS THE PROTOCOL'S v2 — its ~25 "for v2" lines (where each container is run · the profile in plain
  words · the blob-hash proof · two staging passes · the fixes commit between prove and re-palette · the lane-count greps · the
  source's folder name in the straggler audit · the rack built by the AI …) were never written back (10.0 not run). The Switch~ start
  runs BY those lines, and 10.0 there writes v2 for both runs — method · `PROTOCOL_DEVIATIONS.md`
- **H6-2** At every start, read the last piece's memory index for notes newer than the user-level move (two were missed at this start,
  carried by hand) — method · deviations 2.8
- **H6-3** The names table lives in journal §1 until `NAMING.md` arrives with the code (3); the kit does not carry that file — method ·
  deviations 2.3
- **H6-4** CLAUDE.md's "State of the piece" grew to a page and is loaded in every session; a rewrite to a page was offered, not done.
  For the new piece: the state line is ONE line, the history in the logs, from the first commit — doc · journal OPEN AT SESSION END
- **H6-5** `VERIFICATION_RECIPE.md` and HOW_WE_WORK's MACHINE LESSONS carry the source piece's names (`score-5401`, `lgmf.*`) — re-point
  at 3.3, a line in NITS until then — doc · NITS "Open work"
- **H6-6** THE PIECES' NUMBERS ARE HIS, SINCE 2026-10-11 (1 quartet · 2 two pianos · 3 tubas · 4 *Scattered Substance* · 5 *Recombination*
  · 6 *Approaching* · 7 the Switch~ piece): the new kit says them the new way, the number WITH its name; `composition-system`'s INDEX and
  BACKLOG still carry the old — changed only at his word — doc · CLAUDE.md (DEC-196)

### → 3 the engine copied forward

- **H6-7** `tools/port/` IS THE TEMPLATE — the last port's own scripts (`copy31.sh` · `stage32.sh` · `repalette33.js` · `stragglers33.js`
  · `libraries34.js` · `recipes34.js` · `classify.js` · `run_batteries.sh` · `copy_list.txt` 369 · `leave_list.txt` 204 · `src_ls.txt`):
  the protocol's 3.7 "template lists" exist as files; re-point them at this source and run — method · `tools/port/`
- **H6-8** Grep the leave list before the copy for every path the engine could read (`docs/instrument_map.json` is fetched on every load;
  dropping it needs the loader at `composer.html` l. 647 dropped with it) — method · deviations 3.7 · NITS
- **H6-9** `electronics/` goes ON THE LEAVE LIST: the engine is taken by `git subtree add` from `live-electronics-system` main (in step with
  this repo at `a11b387`), never by the byte copy — or the subtree push breaks — arch · `electronics/docs/TAKE.md`
- **H6-10** The copy's proof is the staged BLOB HASH against the source commit (three of his files were newer in the working tree); the
  "red in the source too" proof is against the source's COMMIT, staged, never a run in his folder — method · deviations 3.1 · 3.2
- **H6-11** Two staging passes: the by-name batteries on the staged goldens; the page-scanning checks (`check_rules` · `decisions_needed`
  · `check_screen_edges`) on the source's own pages alone (co-staged older pages made `check_rules` red) · the staging script leaves a
  TRACKED path alone and off the deletion list — method · deviations 3.2 · 3.5
- **H6-12** The fixes commit sits in the NEW repo between prove (3.2) and re-palette (3.3); a fix step REPRODUCES before it edits (H-9's
  `TypeError` did not reproduce; `test_identity`'s stale harness did and was not on the list) — method · deviations 3.8
- **H6-13** WHEN THE LANE COUNT CHANGES (here 6 → 7), grep literal lane lists and layer numbers too (the Beating panel's lane list and
  the curve buttons' layer numbers threw at 3.5); and the lane-number FALLBACKS of the quiet piano role (`cue_picker.js` · `piano_cues.js`
  · `piano_harmonics.js`: `pianoLane: 2, metaLayer: 7`; `composer.html`'s default lane 3, two sites) — harmless with the piano quiet,
  WRONG with a piano in the piece — lesson · deviations 3.0 · NITS
- **H6-14** THE ROLES HELPER (the protocol's 3.10, H-14) — not built here because the piano was quiet; THE SWITCH~ PIECE HAS A PIANO, so
  the twelve `instKey === 'piano'` modules wake up: build it at the copy, from the profile's "roles" line — fix · NITS "Not built"
- **H6-15** The straggler audit greps the SOURCE REPO'S NAME first (five bridge / Kontakt jobs and one test had `decibel_TENOR_2026`'s
  predecessor written in full; a check that names another repo's path is not yet proven) — method · deviations 3.3
- **H6-16** 3.4 carries measured rows only from the SOURCE piece; an older piece's recipe is container 4's source (the cello comes from
  here; the flute · piano · violin from *Scattered Substance* at 4, not at 3) — method · deviations 3.4
- **H6-17** The battery classes carry as this repo's NITS has them (retired twelve · left behind eight · kept red until 5 four · green on
  staged tuba fixtures); FOUR OF THE RETIRED TWELVE ARE THE PIANO'S (`piano_harmonics_check` · `piano_cues_check` · `strike_chords_check`
  · `harm_source_check`): fetch them back from `septet_LGMF_2026` @ `0d70fda` the day a piano tool is used — lesson · NITS
- **H6-18** Small stragglers to take at 3.3: `package-lock.json`'s name · two tooltips naming the source's instruments (`morph_panel.js`
  l. 764 · `sequence_ui.js` l. 1217) · `cresc_run.js`'s defaults and its `septet.crescRun.*` keys · `probes/panic.ps1`'s default ports →
  this piece's at 4.1 · `print/cover/cover.json` and `build.sh` carry the previous title — fix · NITS
- **H6-19** The bundled font for ♭ ♯ ♮ (3.9, H-13) — still not built; this piece's film was approved without it. Build at the copy, with
  container 6 — fix · NITS "Not built"
- **H6-20** `rules.json`'s `staffLines.ensemble.ranges` are ABSOLUTE SECONDS of one score (423.3 s here) — a section moved moves the
  number by hand; a page cut from a section's own file reads it differently. A rule's range must be re-pointed per piece; the fix
  (ranges by a marker, not seconds) is LATER (H6-48) — rule · NITS §302

### → 4 the instruments

- **H6-21** THE RACK IS BUILT BY THE AI: the ports through loopMIDI's registry key (H-15 answered yes) · the tracks CLONED as text from the
  racks ON DISK, which are newer than git (`tools/build_rack.js --source disk`, his word) · his hands only for the libraries no earlier
  piece loaded, and ONE Preferences step — enabling the new ports as inputs (the masks in `reaper.ini` are not reachable by the API) —
  method · deviations 4.1 … 4.3 · NITS HELD
- **H6-22** "WHAT GOT BROUGHT OVER AND WHERE TO LOOK" — the hole, his word: at 4.0, BEFORE any plan, one read-out per instrument — carried
  from piece N: its round robin · its volume · its curve · its ranges — each done / not done, with the file. For the Switch~ piece: the
  flute · piano · violin from *Scattered Substance* · the cello from here · the percussion from piece 2's catalog by this repo's
  `bank/ricotti_catalog.json` + `perc_selection.json` route · the clarinet and the alto sax NEW, on SI2 (UVI) — method · deviations §37
- **H6-23** A PATCH WHOSE DYNAMIC IS THE MOD WHEEL GETS A FLAG OF ITS OWN (`cc1: "vel"`, D24 — the Ricotti bowed and rolled patches; the
  Xsample bass flute's #33 cured by a reset to the factory instrument); the general gap stays: a PLAIN note on a wheel-loud preset —
  rule · D24 · NITS §273
- **H6-24** THE UVI HOW-TO IS NOT WRITTEN (`protocol/howto/README.md` names the record only) and this piece needs it — the flute, the
  clarinet and the sax on SI2: write `howto/uvi.md` at 4.4 from the tubas' and *Scattered Substance*'s record (velocity IS the dynamic,
  piece 4's D13 · the curve copies · the `b` ports · the −6 dB masters) — doc · protocol 4.10
- **H6-25** The Ricotti percussion's key ranges are read at 4.5 (the glockenspiel's key 84 gave no note) · the mallets' trims rest on ONE
  patch each (the xylophone's differ by ~29 dB) · the mallets lane's internal key is still `bowed_vibraphone` / track id `vibraphone`
  (13 sites in 9 modules) — the Switch~ piece has a real VIBRAPHONE and a glockenspiel on the call's list: name the lane at the
  re-palette, not after — lesson · NITS
- **H6-26** A lane is one engine player by ONE MIDI port (`portOf`); the percussionist's two lanes play on five ports — a `lanes` list per
  player in `bank/elec_route.json`; and the percussion's microphone is ONE track (the others need a send to ReaRoute as used) — arch ·
  NITS §64 · §71
- **H6-27** `make_tracks.lua` resets every SPEC track's fader to 0 dB on each run — `apply_trims.lua` after it; the REC track's receives
  checked after any track is added — lesson · NITS HELD
- **H6-28** The sounding-pitch lane: the Ricotti library is keyed at WRITTEN pitch (crotales and glockenspiel sound +24, xylophone +12) —
  a tool that deals sounding pitches to the lane needs a per-instrument octave — fix at first use · NITS

### → 5 the calibration

- **H6-29** Three fixes of 3.8 were made and NEVER RUN — check at the first card: `analyze_card.py` stamps `trimAtMeasurementDb` ·
  `apply_ranges.js` / `apply_bend_ranges.js` refuse a second insert · `ceiling_probe.ps1` / `port_note_probe.ps1` require `-Port` — fix · NITS
- **H6-30** `dyn_table_check` fails one assertion by design when the rack has no UVI instrument — guard it; here UVI returns, so it runs
  whole — fix · NITS
- **H6-31** The per-voice target was piece 5's (−31.84 dB, "nine voices"), kept so carried trims stay exact — seven players here:
  recompute, his to ask — lesson · NITS
- **H6-32** No measured sample length for any struck voice — feed `bank/sample_lengths.json` from the card's `soundingS` when a struck
  note's printed length matters — fix · NITS
- **H6-33** The QC battery (5.7 / 5.9) is STILL not built, and the round robin was skipped at his word here — todo stands — fix · PLAN § 0
- **H6-34** "p" IS TWO NUMBERS — the page's velocity for p (37) against the calibrated ladder's p (57 for the cello); one law wanted —
  lesson · NITS §268 → 5 and 7

### → 6 the notation set-up

- **H6-35** The three "stop and ask" calls (the pitch form · the percussion staff's line order · the short names) go BEFORE 6.0, with the
  lineage's answer as the default (here they were carried, then put to him after) — method · deviations 6.0
- **H6-36** The first test page came from a TOOL-written save; the app-written page with the first section's real kinds is owed at his
  first material — method · deviations 6.4
- **H6-37** THE NOTATION DECISIONS OF THIS PIECE THAT ARE DATA, AND TRAVEL WITH THE COPY: `rules.json`'s `objects.micOpening` ·
  `objects.badge` · the lane line · the staff only where it plays, the clef with it · the SOL colours · the six badges · THE SIGN OF ORIGIN
  (D8: every electronic sound on the staff of the player it came from; no electronics lane) · the purple brick · the sine's `∿` · the
  trills' go-line device · the mic opening's device sheet. `docs/NOTATION_SCHEME.md` — "the organised version" of the decisions — is the
  pattern for an electronics piece's notation doc; the Switch~ piece opens one — rule · doc · NOTATION_SCHEME · PERFORMANCE_NOTES rows 1 … 18
- **H6-38** 38 technique keys were registered at 4.5 and `palette_check` § 5 lists the unregistered — registered as material uses them
  (H-25 stands) — method · NITS

### → 7 the composing tools

- **H6-39** The mallets lane's vibraphone-era tools (`vibes_pitch.js` · the morph panel's STILL_INST · the texture panel's VIB) act on the
  pitched percussion lane — this piece has a vibraphone AND a piano: look at each at first use — lesson · NITS
- **H6-40** Section tools that are generic and travel: `insert_section.js --replace` (a built section into the piece at a tag) ·
  `shift_after.js` · `unsaved_check.js` (working copies vs files, before a commit of scores) · `take.js` (the audio take with the live
  electronics) · `beat_pair.js` (dictation pair by pair) · `strike_take.js` · `strike_windows.js` — method · CLAUDE.md § Apps
- **H6-41** The crescendo tool under the law (7.6, H-28) — not settled here (`cresc_check` was left behind red); the first-use rule
  stands — fix · NITS

### → 8 the deliverables pipeline

- **H6-42** THE AUDIO ROUTE OF AN ELECTRONICS PIECE IS THE TAKE: his ▶ captured → the engine's pass → `tools/take.js` → the WAV under the
  film (PLAN 2.8, the first full take 2026-10-10); 8.1's render through a copy of the rack is the sampled half only. And the film is
  the WIDE SHOT ALONE (DEC-194) — a profile call, not a default — method · PLAN 2.8 · 2.14
- **H6-43** The print's instruction pages read the notes page's title block and badge rows by class (done 2026-10-11) — carries with the
  code; and THIS CALL IS ANONYMOUS: the cover, the title block, the file names carry no name — a line in the profile — doc · NITS §433

### → 9 the collation

- **H6-44** Piece 2's piano record (`HARMONICS_PIANO_PLAN.md` · `harmonics_partial_rules.json` · the Spitfire Plucked Piano · IRCAM Prepared
  Piano 2 · `PIANO_TREMOLO_MOTIVE.md` · the CC120 secco cutoff) → the INDEX's maps section, pinned when container 4 fetches it (9.7) —
  pointer · `composition_for_two_pianos_and_two_percussion/docs/`
- **H6-45** The engine's own NITS travel with the subtree and are the THREE pieces' shared list — not harvested here; its "for a concert"
  items (an attack detector for the `mic` ear · the hold that looks only backward · the room rules of the live petals · the tracker never run
  on a server · a cascade rolled by the engine · a stop that cancels answers) are the live-electronics discussion's — pointer ·
  `electronics/docs/NITS.md`

## LATER — kept, dated 2026-10-20 (8)

- **H6-46** THE GAIN STRUCTURE OF THE WHOLE PIECE as a pass of its own after the notation (DEC-52) · the sound-check MIXER (per class of
  object and the whole, live on the running engine) · the engine's long start measured · the sines' level in general · the tracker in a
  hall — the live-electronics discussion's list, which the three pieces share — method · NITS "THE LIVE ELECTRONICS DISCUSSION"
- **H6-47** A NEW ROLL EVERY PERFORMANCE (DEC-46 · DEC-120: the returns' timings and processing, the strikes' answers) — the engine draws
  from a seed of the day; and THE PERFORMANCE ARCHITECTURE (one clock on the laptop broadcast to the iPads; the Node server the bridge) —
  parked until the Tempus septet's performance scores, which he is working out now (his word 2026-10-20) — arch · DEC-46
- **H6-48** The staff rule's range by a MARKER, not absolute seconds (H6-20's fix) — rule · NITS §302
- **H6-49** The bank's housekeeping: no re-crop tool over a kept raw · no tool removes an orphan variant or a stale render · `M` makes ONE
  opening over a selection · a duplicated opening keeps its name — fix · NITS §64 · §103 · §116
- **H6-50** THE CONCERT SAFETY NET'S ANALYSIS MUST BE FOOLPROOF (his word): a per-player floor measured in the hall · a minimum length · a
  spectral sanity check · the verdict per opening on the engine's screen — feature · NITS §71
- **H6-51** The planning repo is written by other sessions: fetch before a push there — method · journal checkpoint #10
- **H6-52** A session's page tools belong to the repo it was opened in; another repo's running pages are a session opened there — method ·
  journal checkpoint #10
- **H6-53** The staging/battery runner as ONE command for a start (`tools/port/run_batteries.sh` + `stage32.sh` + `classify.js` → a table)
  — the protocol's 3.2 in one script — feature · `tools/port/`

## LEAVE — struck, with the reason (9)

- **H6-54** Piece 5's second "Bass Clarinet XS" track and its "BassCl strikes" bus · the bass clarinet's idle strike slot — no bass clarinet
  in the Switch~ piece — NITS HELD
- **H6-55** The bass flute's clamped dynamics curve · no sustain without vibrato · its two multiphonic presets' range — no bass flute
  there — NITS §43 · §170 · §179
- **H6-56** `SWEEP_LIST` rows 3 · 6 · 7 · 9 · 11 · 16 … 21 — this piece's own passes and takes (a slap outside its zone · an index write ·
  renders under hits · overlapping mic openings · a silent key); the engine-side causes are already in `electronics/docs/NITS.md` —
  SWEEP_LIST
- **H6-57** The three body problem's new take, the long fades, the bowed crotales' dynamic, section 5's ear — his ear on THIS piece —
  journal §2 WAITING ON HIS EAR
- **H6-58** The paper (paper A, this piece's) — its own repo — journal checkpoint #11
- **H6-59** `probes/elec_message_log.jsonl` — the record of 6.2's measure, this piece's — NITS §64
- **H6-60** `check_rules` rule 8 needs a page with a sequence overlay (31 of 32 here) — green by itself when a piece has one — NITS §45
- **H6-61** The print exporter's two layouts and the title strip — DONE 2026-10-11 — NITS §433
- **H6-62** The improviser piece's a · b (which design) — asked in the workshop's chat, not this piece's to hand on — journal checkpoint #10
