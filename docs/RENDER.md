> **Provenance (decibel TENOR 2026, 2026-10-04):** copied from piece #6 `septet_LGMF_2026/docs/RENDER.md` @ `0d70fda` (the new-piece protocol's 3.1 · 3.6). The text below is unchanged: it describes the tool as built for the EARLIER pieces — the instrument names, the lanes, the measurements and every `§N` are theirs (`#6 §N`, or `#5` where it says so). It is tidied when the tool is next used here (his word 2026-10-04, RUNNING_LOG §11).

> **Provenance (septet LGMF 2026, 2026-09-17):** copied unchanged from piece #5 `septet_2026/docs/RENDER.md` with the port of the code it describes (PLAN 0b / 0g). **It describes the tool as it was built for the TEMPUS septet: its instrument names, its `§N` references into that piece's `RUNNING_LOG`, and its measurements are piece #5's.** The mechanism is what carries. Where this piece changes the tool, the change is recorded here and dated. **Nothing in it runs yet:** it describes capturing the composer's playback through the Reaper bridge, and this piece has no rack (0e).

> **THIS PIECE (decibel TENOR 2026, 2026-10-10 — PLAN 2.8; RUNNING_LOG §384 … §386): THE AUDIO IS A TAKE, NOT A RENDER.** § 0 below is this piece's route. Everything from "# The audio render" on is the OFFLINE render of pieces #4 … #6, unchanged — it has no electronics in it; here it is only the fallback for the players' part (not built: `take.js mix --players offline`). Its measure-and-gain step is shared with the take: `tools/lib/gain_step.js`.

# § 0 The take — the piece played once with the live electronics, recorded, aligned, mixed

**Why:** the electronics are a LIVE process (the engine hears the players over ReaRoute, is told by the page at play time, rolls at the moment; its sound returns on the track `ELEC RETURN`). An offline render has no engine in it. So the piece is PLAYED in real time and recorded.

```
node tools/take.js start --score <name> [--from 0] [--to S]     # a COPY of the rack opens in its own tab and RECORDS
        ▶ on the composer page, from --from — HIS (his Chrome has the MIDI)
node tools/take.js stop                                         # stops, gathers, closes the tab, ALIGNS
node tools/take.js mix [--out <name>] [--elec-db 0] [--up --maxUp 6]   # the stems summed → the gain step → notation/audio/<name>.wav
node tools/take.js list
```

Needs: Reaper open on the rack, SAVED, the bridge alive · his engine up (`start_electronics.bat`) — asked one hello, never started or stopped · the composer page on the score, in his Chrome.

| # | Rule | Why |
|---|---|---|
| 1 | **The rack is never written** — the take is a copy (`reaper/<score>_take.rpp`) in its own tab; a rack with unsaved changes refuses | the rack is his; the copy would miss the changes |
| 2 | **Three things on one timeline:** `REC`'s output (the players' sum, post-fader) · `ELEC RETURN`'s output (the engine) · the sixteen instrument tracks' MIDI | two stems for the mix; the MIDI is the alignment's reference |
| 3 | **Both stems are recorded as OUTPUTS** | an input recording is moved by Reaper's latency compensation, an output recording is not; recorded alike, the files hold the relation he hears |
| 4 | **Only `ELEC RETURN`'s record mode moves** ("do not record" → "output"); no arm, no monitoring changes | the sound path of the copy is the rack's |
| 5 | **32-bit float** | piece #4's clip lesson: a peak over 0 dBFS is measured, not clipped |
| 6 | **Aligned by the recorded MIDI, by time alone** — the offset AND the drift | the page runs on the system clock, the recording on the audio clock; the recorded notes are the one written on the other |
| 7 | **A drift past 16 ms at the take's end is resampled; under it, shared between the two ends** | half a frame of the film; under it the correction is not worth a resampling |
| 8 | **The mix is what he heard** — REC's own fader undone, the master's applied, the electronics at unity (`--elec-db` moves the MIX only) | the take is a recording of the room, not a re-balance |
| 9 | **The gain step is the render's** — the true peak measured on the float file, ONE plain gain to −1 dBTP, 24-bit; no limiter, no normalize | the loudness range is the composition |
| 10 | **A take of a part says `--out`** — it may not write the piece's WAV | a dry run must not replace the piece's audio |
| 11 | **Each take is another roll of the electronics** — by design; the players' part is the same every time | the engine decides at the moment |

A take's folder: `notation/audio/takes/<score>/<NN>/` — the two recorded files (Reaper's names; `take.json` says which), `midi.json`, `take.json`, `align.json`, `aligned/players.wav` · `aligned/elec.wav` (score time, sample 0 = `--from`). Gitignored.

## § 0.1 Register — the takes *(append-only)*

- **2026-10-10 — the DRY RUN, take 01 of `piece-Draft01c`, 0 … 37 s** (RUNNING_LOG §387; the save of 12:41; his engine of 12:30:41, mode `compose`). 82.8 s recorded · 49 notes on 12 tracks. Aligned: score 0 at 17.9471 s · notes 30/30 (±0.34 ms) · drift 0.13 ms over 37 s (3.4 ppm), left. Players: first sound 1.527 s (first note 1.525) · −20.8 LUFS · −1.3 dBTP. Electronics: first sound 6.516 s (the first return, an `ar` roll 123 ms before its centre) · −20.4 LUFS · −0.9 dBTP. Mix (as heard): 43.000 s · float −0.9 dBTP · −19.0 LUFS · LRA 15.5 · gain **−0.1 dB** → **−1.0 dBTP · −19.1 LUFS** → `notation/audio/piece-Draft01c-dry.wav` (a part: not the piece's WAV). His ear: unsaid — he went on to the full take.
- **2026-10-10 — THE FIRST FULL TAKE, take 02 of `piece-Draft01c`, 0 … 778.732 s** (RUNNING_LOG §388; the save of 12:41; the rack as saved 2026-10-09 03:54 UTC; his engine of 12:30:41, mode `compose`). 817 s recorded · 1,386 notes on 16 tracks. Aligned: score 0 at 13.9195 s · notes **673/673** (±0.45 ms) · drift **−9.65 ms over 778.7 s (−12.4 ppm)**, left, shared between the ends. Players: first sound 1.533 s (first note 1.525) · −20.7 LUFS · +0.1 dBTP. Electronics: first sound 6.479 s · −19.9 LUFS · −1.0 dBTP. Mix (as heard, 0 dB / 0 dB): **784.732 s** · float **+0.4 dBTP** · −17.8 LUFS · LRA 11.6 · gain **−1.4 dB** → **−1.0 dBTP · −19.2 LUFS** → `notation/audio/piece-Draft01c.wav`. Not linked to a notation page yet (the pages name `piece-3BodyRedo`). His ear: pending.

---

# The audio render — the composer's playback, recorded in Reaper, linked to the notation score

*RUNNING_LOG §453 (2026-09-13). The composer: "Let's prep the recording and sort out the trill midi and then generate the midi file and
do a record and then link it to the notation score … can you look at … the specs for the tuba piece? because there was clipping, and we
had to redo it a couple times and reduce the volume."*

## §1 The route — three commands

```
node tools/capture_composer_midi.js          # ~13 min · the composer's own playback, message by message → midi/piece-septet.capture.json
node tools/export_midi.js --capture midi/piece-septet.capture.json   # seconds · checked, laid out as the rack → midi/
node tools/render_reaper.js                  # minutes · Reaper renders through the bridge → notation/audio/piece-septet.wav
```

Needs: the score server on :5300 (`node score/server.js`), Reaper open with the bridge alive, the rack SAVED (the render copies the file).
Then: the notation page (CTRL+SHIFT+R) → the MAIN file → **♪ render** → the page's clock follows the WAV.

**Re-render whenever the score is saved again** — the WAV is the playback of `scores/piece-septet.json` at the moment of the capture
(`notation/audio/raw/piece-septet-render.json` records when). The export warns if the file was saved after the capture.

## §2 The rules, and where each one lives

| # | Rule | Why | Where |
|---|---|---|---|
| 1 | **The events are the composer's own playback** — composer.html run headless under a virtual clock, its MIDI sends recorded | the shared computation (`sonify_core`) never learned the septet's rules: trills, eaten notes, the measured velocity and CC7, the secco cut, the late switch beside a trill (§441–§443). A second copy drifts; the composer IS the engine | `tools/capture_composer_midi.js` |
| 2 | **The capture cannot write** — every non-GET request refused; the score is loaded from its FILE, never the working copy | a second composer tab clobbers the working copy (PLAN 2d.5.8) | same |
| 3 | **Checked against the score before a file is written** — every trill note at its time (±3 ms), every sounding note once, the eaten notes silent, nothing unexplained, nothing left hanging, the file read back | a render of a wrong stream costs a render | `tools/export_midi.js` |
| 4 | **Each track gets what its live input gets** — the whole port, all channels (four piano tracks = the Piano port each; two bass clarinet tracks = the BassCl port each); a track with no MIDI input gets one inert message | the rack is calibrated on live input; the file must reproduce it, not reinterpret it | same (`RACK_PORT`, read from the .rpp) |
| 5 | **60 BPM / 960 PPQ; the project set to 60** — one beat = one second | piece #4: the rack sat at 120 and would have halved every duration | the files · `render_reaper.js` |
| 6 | **Placed BY TRACK NAME, never by position** (the n-th file of a name on the n-th track of that name) | piece #4: a duplicated Tuba8 pair shifted a positional drop one pair low | `render_reaper.js` · `reaper/place_piece-septet_midi.lua` (by hand) |
| 7 | **The REC folder is NOT muted** | in this rack REC is the folder every part sums through; piece #4's REC was a second send (+6 dB on two tubas) and had to be muted | `render_reaper.js` |
| 8 | **The render is 32-bit FLOAT; the peak is measured on the FILE** (ebur128 true peak), then ONE plain gain brings it to −1 dBTP (never up), written as 24-bit | piece #4's first render clipped at +4.2 dBFS because the pre-flight measured a SUSTAINED loud passage while the peaks were SIMULTANEOUS ATTACKS, 11.6 dB higher; the fix was the master −6 → −13.5 and a second render. Float cannot clip, so there is no second render | `render_reaper.js` |
| 9 | **No limiter, no normalize** | the loudness range is the composition (piece #4: LRA 19.8) | same |
| 10 | **Proved off the file** — the length from the sample count, the first sound against the first onset | piece #4: 762.000 s exactly; the first sound 32 ms after the first onset (the sampler's attack, constant, not drift) | same |
| 11 | **The WAV's name = the IR's `source.score`** (`notation/audio/piece-septet.wav`) | the page's `detectRender` matches `<source.score>.*` | same |
| 12 | **The rack is never written** — the render is a COPY in its own tab (`reaper/piece-septet_render.rpp`), closed afterwards | the rack is the composer's | same |

## §3 By hand, if the bridge is not running

1. In Reaper: File → Save project as… `reaper/piece-septet_render.rpp` (a copy of the rack). Project settings → tempo **60**.
2. Actions → Show action list → New action → Load ReaScript → `reaper/place_piece-septet_midi.lua` → Run. It sets 60 BPM and places every
   part by name, building each item directly (no import prompt); its message lists each track with its note count. (Or drag
   `midi/piece-septet.mid` onto **Flute SI2** at 0:00 — its 14 tracks are the rack's order — answer Reaper's "Import 16-channel MIDI as…"
   with **Multichannel item on a single track**, and check each item landed on the track of its name.)
3. File → Render: master mix · bounds custom 0 → the last note + 6 s · WAV **32-bit float** · 48 kHz · stereo · no normalize.
4. Then the measure-and-gain step: `node tools/render_reaper.js --skip-render`.

## §4 Register

*(append-only)*

- **2026-09-13 — the first septet render** (RUNNING_LOG §453). `piece-septet.json` as saved 02:12. Capture: 37 627 frames, 20 565 messages,
  0 writes. Checks: trill notes 2066/2066, notes 1739/1739, 11 eaten silent, 0 unexplained, 0 hanging. Reaper: 14 items by name, counts
  equal. Render: 150 s · 630.100 s · float true peak **+2.0 dBTP** (would have clipped at 24-bit) · −22.7 LUFS · LRA 14.1 · gain **−3.0 dB** →
  **−1.0 dBTP** · first sound 3.7 ms after the first onset. The first attempt stopped on Reaper's MIDI-import prompt → items now built
  directly (`tools/reaper_midi_place.js`). Linked: ♪ render ✓ on the MAIN file. His ear on the sync: pending.
- **2026-09-16 — the re-render, PLAN 2i.9** (RUNNING_LOG §553–§554). `piece-septet.json` as saved 16:03. Capture: 37 627 frames, 20 789
  messages, 0 writes. Checks: trill notes 2066/2066, notes 1737/1737, 11 eaten silent, 0 hanging, **bend (e): 183 bent notes, every bend in
  place, none on a bent channel** (the check now reads each instrument's measured range — the Xsample parts bend ~1 st). Reaper: 14 items by
  name, counts equal. Render: 141 s · 630.100 s · float true peak **+1.9 dBTP** · −21.8 LUFS · LRA 13.8 · gain **−2.9 dB** → **−1.0 dBTP** ·
  first sound 3.7 ms after the first onset. The first attempt refused on the bridge guard's heartbeat race → the tool now waits for the
  heartbeat to name the render tab. His ear: pending.
- **2026-09-17 — the Bloom practice videos' renders, PLAN 2h.7** (RUNNING_LOG §599–§600; not the piece's WAV — `render_reaper.js --dir/--only/--out/
  --end/--gainWindow`, refused without an `--out` of another name). Pair recordings, 0 → 312 s, gain read in the used window and allowed UP (demo files
  only): `demo-bloom-bclvc.wav` +13.3 dB · `demo-bloom-vn1va.wav` +13.4 · `demo-bloom-flvn2.wav` +16.2. Held dyads `demo-bloom-heldmax` (six takes a
  pair, 0 → 660 s, 69 s). **Found:** every Xsample note-on lands ±1–2 c from its bend (the SI2 flute is exact) — one strike is a draw; the takes
  are picked by `tools/pick_bloom_takes.js`. `piece-septet.wav` sha unchanged throughout.
- **2026-09-26 — THIS PIECE'S FIRST RENDER: Draft 01** (RUNNING_LOG §405 · §406; `scores/piece-Recombination-Draft01-done.json` as saved
  00:28 UTC, its notes = `e9f340a`). The tool re-pointed at this rack (`export_midi.js` `RACK_PORT`: 29 tracks → 11 `LG` ports) and the
  capture's frame 0 stepped (a note at 0.000 s was one frame late). Capture: 1076/1076 notes, 436 bends in place, 0 hanging. Reaper: 29 items
  by name, counts equal; 276 s. Render: 886.664 s · float true peak **−11.0 dBTP** · **−28.8 LUFS** · LRA 20.1 · gain **0 dB** · first sound
  1.700 s (the EH opens from niente — CC7 0 rising; the sync is right). `notation/audio/piece-Recombination-Draft01-done.wav`. Not yet linked:
  the MAIN IR's `source.score` is still `piece-LGMF-Sec01-Sec02-sec03a`. His ear: pending.
- **2026-09-26 — Draft 01, the level at his word "b"** (RUNNING_LOG §407): `render_reaper.js --skip-render --up` — gain **+10.0 dB** (plain) →
  **−1.0 dBTP**, ≈ −18.8 LUFS, LRA 20.1 untouched. `--up` is new: the piece's gain may go up to `--peak`; **a future render of the piece passes
  it.** Linked: `piece-lgmf` re-extracted from Draft 01 (`source.score` = `piece-Recombination-Draft01-done`). His ear: pending.
- **2026-10-01 — Draft 01 re-rendered after session 18's changes** (RUNNING_LOG §671; `scores/piece-Recombination-Draft01-done.json`
  as saved 12:46 UTC — §669's chord unison (82 onsets), the EH's 343.12 lengthened · 389.8 D6 → D5, the DB's 329.26 A5 → A4 · 309.96 C♯5 → C♯4).
  Capture: 24 800 messages · 53 020 frames · 0 writes. Checks: notes 1076/1076, 436 bends in place, 0 hanging, read-back ok. Reaper: 29 items
  by name; 273 s. Render: 886.664 s · float true peak **−10.9 dBTP** · −28.8 LUFS · LRA 20.1 · `--up --maxUp 6` (§670, its first use): the
  gain to −1 dBTP would be +9.9 dB, **capped at +6.0 dB** → **−4.9 dBTP · −22.8 LUFS**, the LRA untouched · first sound 1.700 s (as before).
  Linked: `source.score` unchanged, the server lists the WAV — no re-extraction. His ear: pending.
- **2026-10-01 — Draft 01 re-rendered at the notation's lock** (RUNNING_LOG §689; the save as of §675 — the vibraphone's `wc-4819` deleted,
  `wc-4820` on 765.0). Capture: 24 788 messages · 53 020 frames in 280 s · 0 writes. Checks: notes 1075/1075, 435 bends in place, 0 hanging,
  read-back ok; moved against the committed MIDI: the vibraphone, the whole-piece file, and 7 bytes of `28 Bass XS` (same length — not
  traced). Reaper: the rack as saved 18:48 UTC, 29 items by name; 288 s. Render: 886.664 s · float true peak **−11.0 dBTP** · −28.8 LUFS ·
  LRA 20 · `--up --maxUp 6`: +10 to −1 dBTP, **capped at +6.0 dB** → **−5.0 dBTP · −22.8 LUFS** · first sound 1.686 s. Linked: unchanged.
- **2026-10-01 — Draft 01 re-rendered with the trumpet at 367.80 in unison** (RUNNING_LOG §697 · §698; the save as edited at his word —
  `wc-3599` 367.975 → 367.804). Capture: 24 788 messages · 53 020 frames in 305 s · 0 writes. Checks: notes 1075/1075, 435 bends in place,
  0 hanging, read-back ok; moved against the committed MIDI: `08 Trumpet SI2` and the whole-piece file only (the trumpet's note-on at
  367.804 read off the track). Reaper: 29 items by name; 285 s. Render: 886.664 s · float **−11.0 dBTP** · −28.8 LUFS · LRA 20 ·
  `--up --maxUp 6`: **capped at +6.0 dB** → **−5.0 dBTP · −22.8 LUFS** · first sound 1.686 s. Linked: unchanged. The film re-made from it.
