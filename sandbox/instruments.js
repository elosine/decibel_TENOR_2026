// Rendering-recipe config — decibel TENOR 2026 (the port from piece #6, the new-piece protocol's 3.4, 2026-10-04;
// container 4 fills it in). One entry per TRACK (score/public/composer.html TRACKS[].instKey).
//
// Schema, inherited from pieces #3/#4/#5: { label, port, rangeLow, rangeHigh, mechanism?,
// techniques: [{ key, label, channel, port?, cc0?, ks?, rangeLow?, rangeHigh? }] }.
//   - `port` is the loopMIDI port (case-exact); a technique's own `port` overrides it.
//   - `channel` is 1-based. `cc0` = Xsample articulation select, sent as a prelude before the
//     note. `ks` = keyswitch notes. `oneShot: true` marks presets that revert after one note.
//   - Ranges are MIDI numbers, middle C = 60, SOUNDING pitch. Written pitch is the notation
//     layer's business (notation/registry/ensemble.json), never this file's.
//   - EVERY VOICE KNOWS ITSELF (LGMF PLAN 1m.4.1, 2026-09-22; RUNNING_LOG §243 · §244): every technique entry carries
//     `kind` — `pitched` (the harmony note sounds) · `key` (the key chooses one of N named sounds: the percussion,
//     multiphonics, key clicks, noises — dealt NO pitch, its note IS the key) · `fixed` (open strings, natural harmonics:
//     the nearest to the harmony note) — and `loud`, where its loudness comes from: `vel` (velocity — the dynamics law's
//     struck note) or `mw` (the mod wheel, Xsample's `MW` presets). A `Velocity … MW` preset is `vel` with `shape: "mw"`:
//     the wheel shapes it, the velocity is its loudness. A `key` entry carries `keys: [{ midi, label }]` — the percussion's
//     from the catalog; the SI2 and Xsample by-key voices `keys: "pending"` until 1m.4.2 reads them from his rack. The
//     drawer's name rule (strike_drawer.js kindOf) is the FALLBACK for an entry without `kind`; tools/roster_check.js
//     names any such entry.
//
// ============================ STATUS: PROVISIONAL ============================
// **Nothing here has been heard in this piece.** Written during the port so that the six lanes exist, material can be
// assigned to them, the placement engines can route around them and the notation can lay them out. Container 4 (the
// instruments) and container 5 (the calibration) replace every value, with the composer at the machine.
//
//   CARRIED from piece #6, verbatim — its measurements are ITS rack's, re-measured at container 5:
//     percussion        Spitfire Abbey Road Orchestra Percussion. The selection (bank/perc_selection.json) is piece
//                       #6's fourteen; WHICH instruments this piece uses is the composer's, at container 4.
//     bowed_vibraphone  Xsample Mallets Extended — the STAND-IN for the pitched percussion lane (journal D9).
//     cello             Xsample Contemporary Solo Strings.
//   PLACEHOLDERS — no library chosen (container 4 opens with that talk):
//     bass_flute · bass_clarinet   one ordinary voice each, so the lane is real.
//     viola                        the strings' roster by the cello's mechanism; none of the cello's measurements.
//
// PORT NAMES carry a `DEC` prefix (journal D6): loopMIDI ports are machine-global, and piece #6's rack (`LG…`) and piece
// #5's (bare names) may still be live on this machine. These names are the SHAPE; container 4 (4.1) fixes them.
//
// TECHNIQUE KEYS are the notation registry's names (notation/registry/techniques.json) wherever one exists, so a key that
// reaches the IR is already drawable; tools/palette_check.js lists the recipe keys the registry does not know yet.

const INSTRUMENTS = {

  // ---- BASS FLUTE — LIBRARY NOT CHOSEN (the instruments talk, container 4) ----
  // A placeholder so the lane is real: one ordinary voice. The lineage's candidates are Xsample and IRCAM Solo Instruments
  // 2, whichever has a bass flute; nothing here was read from a library or heard. Range 48–84 (C3–C6) is the instrument's
  // SOUNDING compass (an octave below the flute's written pitch), NOT measured. The bend range is MIDI's default, unread.
  bass_flute: { ordinary: "ord", playerBendSt: 1, bendRangeSt: 2, label: "Bass Flute", port: "DECBassFlute", rangeLow: 48, rangeHigh: 84, channels: { main: 1, curve: [2, 3, 4] },
    techniques: [{ key: "ord", label: "Ordinario", channel: 1, kind: "pitched", loud: "vel" }] },

  // ---- BASS CLARINET — LIBRARY NOT CHOSEN (container 4) ----
  // A placeholder, as above. The lineage has this instrument twice — piece #3's deep map and piece #5's recipe (Xsample,
  // 34 presets, measured in the Tempus rack): container 4's sources, not carried here before the library is his word.
  // Range 34–77 (B♭1–F5 sounding), NOT measured.
  bass_clarinet: { ordinary: "ord", playerBendSt: 1, bendRangeSt: 2, label: "Bass Clarinet", port: "DECBassClar", rangeLow: 34, rangeHigh: 77, channels: { main: 1, curve: [2, 3, 4] },
    techniques: [{ key: "ord", label: "Ordinario", channel: 1, kind: "pitched", loud: "vel" }] },

  // ---- PERCUSSION — ONE PLAYER, ONE LANE (P4) ----
  // Spitfire Abbey Road Orchestra Percussion (D6 — piece #2's library, its journal decision 4:
  // Metal 58 instruments · High 62 · Low 20, in Spitfire's own plugin, NOT Kontakt and NOT UVI —
  // a mechanism this stack has never driven; that is real work at 0c). ARO has no tuned mallets,
  // which is why he needs a bowed vibraphone (LG-9) and has still to acquire one.
  //
  // The instrument in hand is a TECHNIQUE on this lane, exactly as #5's D6 made the flute's
  // doubling a technique. THE INSTRUMENTS ARE NOT CHOSEN — he has named one (the bowed vibraphone,
  // LG-9) and it is the one library that is missing. Until they are, `main` is a placeholder voice
  // (the registry's own key, as #5's piano used it) so the lane can hold material and be laid out;
  // its range 21–108 is so `laneCanPlay` never routes material away from the percussionist, NOT a
  // claim about any instrument's compass.
  //
  // THE SCAFFOLDING (0c, 2026-09-17): the ARO instruments are CATALOGUED, never typed here —
  //   bank/aro_percussion_catalog.json  what the library offers: 78 instruments, the MIDI key →
  //                                     beater/articulation map of each All-in-One preset as piece #2
  //                                     measured it key by key (35 verified · 39 skeleton, no keys yet)
  //   bank/perc_selection.json          which of them THIS PIECE uses, on which channel — empty now
  //   tools/apply_perc.js               writes the selection into the ARO_PERC block below: one
  //                                     technique per instrument × beater, applied at load
  // Choosing an instrument = one line in the selection + one Reaper track filtering on its channel +
  // the tool + palette_check — and its technique keys registered (principle 3) before material uses them.
  percussion: {
    label: "Percussion", port: "DECPerc", rangeLow: 21, rangeHigh: 108,
    ordinary: "main", beating: false, playerBendSt: 0, bendRangeSt: 0,
    channels: { main: 1, curve: [2, 3, 4] },
    techniques: [
      // 1m.4.1: `main` is PITCHED on purpose — the placeholder takes any note it is dealt (his harmony takes carry 241 percussion
      // notes on it, RUNNING_LOG §212); a real instrument is chosen by NAME from the by-key voices below it.
      { key: "main", label: "struck, plain (the placeholder — ch 1, the rack's Finger Cymbals track)", channel: 1, kind: "pitched", loud: "vel" },
      // LGMF PLAN 1l.1 (2026-09-21; LG-59, RUNNING_LOG §199) — the ONE exception to "catalogued, never typed here": the
      // Texture panel's percussion fallback, his `claves pair 2 high`, on the rack's own Claves ARO track (ch 7, bank/perc_rack.json).
      // Keyed EXACTLY as tools/apply_perc.js keys the catalog's toys_claves, so a later selection takes it over unchanged; `main`
      // stays the ordinary voice, so no written note changes. Pair 2 High = key 41 (the catalog repeats the six at 60–69).
      { key: "toys_claves", label: "Claves", channel: 7, rangeLow: 36, rangeHigh: 69, kind: "key", loud: "vel",
        keys: [{ midi: 36, label: "Pair 3 Low" }, { midi: 38, label: "Pair 3 High" }, { midi: 40, label: "Pair 2 Low" }, { midi: 41, label: "Pair 2 High" },
               { midi: 43, label: "Pair 1 Low" }, { midi: 45, label: "Pair 1 High" }, { midi: 60, label: "Pair 3 Low" }, { midi: 62, label: "Pair 3 High" },
               { midi: 64, label: "Pair 2 Low" }, { midi: 65, label: "Pair 2 High" }, { midi: 67, label: "Pair 1 Low" }, { midi: 69, label: "Pair 1 High" }] },
    ],
  },

  // ---- BOWED VIBRAPHONE — Xsample Mallets Extended (Kontakt), CC#0 selects the preset ----
  // Acquired 2026-09-18 (LG-9 closed). It has its OWN LANE at his word (D12): the opening sustains it
  // continuously — two overlapping pitches with individual instruments beating against each one
  // (COMPOSITION_NOTES LG-15) — so it is a voice, not a technique on the percussion track. Same player as
  // Percussion (one percussionist); the score joins the two staves with a brace.
  // The roster is the full Preset Menu as HIS Kontakt shows it (screenshot, 2026-09-18): 12 factory presets
  // + Free Preset 13. CC#0 = preset number − 1, as the english horn and the strings (§32).
  // RANGE read from his plugin's own low/high fields: F2–F5 in Xsample's octave naming = MIDI 53–89, the
  // standard three-octave vibraphone F3–F6 sounding. NON-TRANSPOSING, single treble staff (his confirmation,
  // 2026-09-18 — notation/registry/ensemble.json part 5).
  // `ordinary` = bowed_vel (#12 Bowed Velocity), HIS CHOICE 2026-09-18, because the opening is bowed and a
  // bowed tone is the steady partner a beating needs. #7 is the same bow with vibrato on CC4.
  bowed_vibraphone: { balanceDb: 2.81,
    ordinary: "bowed_vel", beating: true, playerBendSt: 0, bendRangeSt: 2,
    label: "Vibraphone", port: "DECVibes", rangeLow: 53, rangeHigh: 89, mechanism: "cc0",
    channels: { main: 1, curve: [2, 3, 4] },
    techniques: xsVibraphoneTechs(53, 89),
  },

  // ---- VIOLA — by the CELLO's mechanism, PROVISIONAL (container 4) ----
  // The roster is generated by the strings' helper, so the key set is the cello's (Xsample Contemporary Solo Strings: 88
  // presets, CC#0 = preset − 1; Sul C / G / D / A) — piece #5's viola was this library and this helper. NOTHING of the
  // cello's MEASUREMENTS is shared: no balanceDb, no measured ranges, no measured bend — a shared mechanism never shares a
  // measurement. Range 48–93 (C3–A6 sounding) is piece #5's figure, not re-measured. The preset numbers are VERIFY at 4.
  viola: { ordinary: "senza_vel", playerBendSt: 1, bendRangeSt: 1, label: "Viola", port: "DECViola", rangeLow: 48, rangeHigh: 93, mechanism: "cc0", channels: { main: 1, curve: [2, 3, 4] }, techniques: xsStringTechs(["C", "G", "D", "A"], 48, 93) },

  // ---- CELLO — Xsample Contemporary Solo Strings (Kontakt), CC#0 selects the preset ----
  // PIECE #5'S ENTRY, CARRIED VERBATIM (D6) — the one recipe in this file that has been heard,
  // and its measured ranges and bend range come across with it (the tables below). Only the PORT
  // name changes, and only because loopMIDI ports are machine-global (see the header).
  // The full Xsample roster is 88 presets, identical across the instruments except the string
  // names; CC#0 = preset − 1. Channels per D11: 1 main · 2–4 curve A/B/C.
  cello: { balanceDb: -3.87, ordinary: "senza_vel", playerBendSt: 1, bendRangeSt: 2, label: "Cello", port: "DECCello", rangeLow: 36, rangeHigh: 83, mechanism: "cc0", channels: { main: 1, curve: [2, 3, 4] }, techniques: xsStringTechs(["C", "G", "D", "A"], 36, 83) },
};

// The composer's practice (R8): the VELOCITY presets by default — the MW ones "sound different" and are
// chosen deliberately; under D11 that keeps most string material on the main channel.
// The one Xsample string roster, instantiated per instrument (fresh arrays, so per-instrument
// range exceptions at 0c never bleed across). `s` = the four open strings low→high; lo/hi = the
// instrument's standard zone. Hoisted function declaration, so the table above may use it.
// 1m.4.1 (2026-09-22): what an Xsample preset IS (`kind`) and where its loudness comes from (`loud`), read from the preset NAME —
// `Velocity` in the name = the velocity; a bare `MW` = the wheel; both = the velocity, shaped by the wheel (`shape: "mw"`). The
// by-key and the fixed voices are named per roster; everything else is pitched. Hoisted, like the rosters.
function xsLoud(label) { const v = /Velocity/.test(label), m = /\bMW\b/.test(label); return v ? (m ? { loud: "vel", shape: "mw" } : { loud: "vel" }) : (m ? { loud: "mw" } : { loud: "vel" }); }
function xsKind(key, fixed, byKey) { return byKey.has(key) ? { kind: "key", keys: "pending" } : fixed.has(key) ? { kind: "fixed" } : { kind: "pitched" }; }
function xsStringTechs(s, lo, hi, ranges) {
  const r = ranges || {};   // per-preset zone exceptions, registered as the composer uses them: { key: [lo, hi] }
  // 1m.4.1: the strings' FIXED voices — the open strings and the natural harmonics (the nearest string to the harmony note) — and
  // their BY-KEY voices — tailpiece · behind the bridge · peg box · finger · body · undefined — whose keys 1m.4.2 reads from his rack
  const FIXED = new Set(["arco_open_vel", "arco_open_mw", "marcato_stac_open_vel", "spicc_open_vel", "stac_open_vel", "trem_open_vel", "trem_open_mw",
    "nh_gliss_slow_vel", "nh_gliss_slow_mw", "nh_gliss_fast_vel", "nh_gliss_fast_mw", "nh_sul1_vel", "nh_sul1_mw", "nh_sul2_vel", "nh_sul2_mw", "nh_sul3_vel", "nh_sul3_mw", "nh_sul4_vel", "nh_sul4_mw",
    "sord_open_vel", "sord_open_mw", "sord_spicc_open_vel", "pizz_open_vel", "pizz_h_sul1_vel", "pizz_h_sul2_vel", "pizz_h_sul3_vel", "pizz_h_sul4_vel", "pizz_sp_open_vel"]);
  const KEY = new Set(["tailpiece_vel", "tailpiece_mw", "pizz_behind_bridge_vel", "pizz_peg_box_vel", "finger_vel", "body_vel", "undef_vel", "undef_mw"]);
  const P = (n, key, label, mw) => ({ key, label: label + " (#" + n + ")", channel: 1, cc0: n - 1, rangeLow: (r[key] || [lo, hi])[0], rangeHigh: (r[key] || [lo, hi])[1], ...(mw ? { mw: true } : {}), ...xsKind(key, FIXED, KEY), ...xsLoud(label) });
  return [
    P(1, "vib_vel_mwinv", "Vibrato Velocity + MW inverted", true),
    P(2, "vib_vel", "Vibrato Velocity"),
    P(3, "vib_mw", "Vibrato MW", true),
    P(4, "accent_vib_vel", "Accent Vibrato Velocity"),
    P(5, "senza_vel_mwinv", "Senza Vibrato Velocity + MW inverted", true),
    P(6, "senza_vel", "Senza Vibrato Velocity"),
    P(7, "arco_open_vel", "Arco Open Strings Velocity"),
    P(8, "senza_mw", "Senza Vibrato MW", true),
    P(9, "arco_open_mw", "Arco Open Strings MW", true),
    P(10, "accent_senza_vel", "Accent Senza Vibrato Velocity"),
    P(11, "light_accent_hi_vel", "Light Accent Velocity - high position"),
    P(12, "marcato_sfz_vel", "Marcato sfz Velocity"),
    P(13, "marcato_stac_vel", "Marcato Staccato Velocity"),
    P(14, "marcato_stac_open_vel", "Marcato Staccato Open Strings Velocity"),
    P(15, "marcato_spicc_vel", "Marcato + Spiccato Velocity"),
    P(16, "spicc_vel", "Spiccato Velocity"),
    P(17, "spicc_open_vel", "Spiccato Open Strings Velocity"),
    P(18, "spicc_vel_soft_x_bright_mw", "Spiccato Velocity - Soft X Bright MW", true),
    P(19, "stac_vel", "Staccato Velocity"),
    P(20, "stac_open_vel", "Staccato Open Strings Velocity"),
    P(21, "gettato_vel", "Gettato Velocity"),
    P(22, "trem_vel_mwinv", "Tremolo Velocity + MW inverted", true),
    P(23, "trem_vel", "Tremolo Velocity"),
    P(24, "trem_open_vel", "Tremolo Open Strings Velocity"),
    P(25, "trem_mw", "Tremolo MW", true),
    P(26, "trem_open_mw", "Tremolo Open Strings MW", true),
    P(27, "nh_gliss_slow_vel", "Natural Harmonics Glissando Slow Velocity"),
    P(28, "nh_gliss_slow_mw", "Natural Harmonics Glissando Slow MW", true),
    P(29, "nh_gliss_fast_vel", "Natural Harmonics Glissando Fast Velocity"),
    P(30, "nh_gliss_fast_mw", "Natural Harmonics Glissando Fast MW", true),
    P(31, "nh_sul1_vel", "Natural Harmonics Sul " + s[0] + " Velocity"),
    P(32, "nh_sul1_mw", "Natural Harmonics Sul " + s[0] + " MW", true),
    P(33, "nh_sul2_vel", "Natural Harmonics Sul " + s[1] + " Velocity"),
    P(34, "nh_sul2_mw", "Natural Harmonics Sul " + s[1] + " MW", true),
    P(35, "nh_sul3_vel", "Natural Harmonics Sul " + s[2] + " Velocity"),
    P(36, "nh_sul3_mw", "Natural Harmonics Sul " + s[2] + " MW", true),
    P(37, "nh_sul4_vel", "Natural Harmonics Sul " + s[3] + " Velocity"),
    P(38, "nh_sul4_mw", "Natural Harmonics Sul " + s[3] + " MW", true),
    P(39, "ah_vel", "Artificial Harmonics Velocity"),
    P(40, "ah_mw", "Artificial Harmonics MW", true),
    P(41, "ah_spicc_vel", "Artificial Harmonics Spiccato Velocity"),
    P(42, "ah_trem_mw", "Artificial Harmonics Tremolo MW", true),
    P(43, "flaut_vel", "Flautando Fragile Velocity"),
    P(44, "flaut_mw", "Flautando Fragile MW", true),
    P(45, "flaut_x_sp_mw_vel", "Flautando Fragile X Sul Ponticello MW - Velocity", true),
    P(46, "sp_vel", "Sul Ponticello Velocity"),
    P(47, "sp_mw", "Sul Ponticello MW", true),
    P(48, "sp_spicc_vel", "Sul Ponticello Spiccato Velocity"),
    P(49, "sp_trem_vel", "Sul Ponticello Tremolo Velocity"),
    P(50, "sp_trem_mw", "Sul Ponticello Tremolo MW", true),
    P(51, "sp_trem_x_sp_mw_vel", "Sul Ponticello Tremolo X Sul Ponticello MW - Velocity", true),
    P(52, "circ_bow_vel", "Circular Bowing Velocity"),
    P(53, "circ_bow_mw", "Circular Bowing MW", true),
    P(54, "bow_op_vel", "Bow Overpressure Velocity"),
    P(55, "bow_op_mw", "Bow Overpressure MW", true),
    P(56, "bow_op_x_marcato_sfz_mw_vel", "Bow Overpressure X Marcato sfz MW - Velocity", true),
    P(57, "bow_op_stac_vel", "Bow Overpressure Staccato Velocity"),
    P(58, "tailpiece_vel", "Tailpiece Bowed Velocity"),
    P(59, "tailpiece_mw", "Tailpiece Bowed MW", true),
    P(60, "sord_vib_vel_mwinv", "Sordino Vibrato Velocity + MW inverted", true),
    P(61, "sord_vib_vel", "Sordino Vibrato Velocity"),
    P(62, "sord_vib_mw", "Sordino Vibrato MW", true),
    P(63, "sord_senza_vel_mwinv", "Sordino Senza Vibrato Velocity + MW inverted", true),
    P(64, "sord_senza_vel", "Sordino Senza Vibrato Velocity"),
    P(65, "sord_open_vel", "Sordino Open Strings Velocity"),
    P(66, "sord_senza_mw", "Sordino Senza Vibrato MW", true),
    P(67, "sord_open_mw", "Sordino Open Strings MW", true),
    P(68, "sord_spicc_vel", "Sordino Spiccato Velocity"),
    P(69, "sord_spicc_open_vel", "Sordino Spiccato Open Strings Velocity"),
    P(70, "pizz_vel", "Pizzicato Velocity"),
    P(71, "pizz_vib_vel", "Pizzicato Vibrato Velocity"),
    P(72, "pizz_open_vel", "Pizzicato Open Strings Velocity"),
    P(73, "pizz_h_sul1_vel", "Pizzicato Harmonics Sul " + s[0] + " Velocity"),
    P(74, "pizz_h_sul2_vel", "Pizzicato Harmonics Sul " + s[1] + " Velocity"),
    P(75, "pizz_h_sul3_vel", "Pizzicato Harmonics Sul " + s[2] + " Velocity"),
    P(76, "pizz_h_sul4_vel", "Pizzicato Harmonics Sul " + s[3] + " Velocity"),
    P(77, "pizz_sp_vel", "Pizzicato Sul Ponticello Velocity"),
    P(78, "pizz_sp_open_vel", "Pizzicato Sul Ponticello Open Strings Velocity"),
    P(79, "pizz_x_sp_mw_vel", "Pizzicato X Sul Ponticello MW - Velocity", true),
    P(80, "bartok_vel", "Bartok Pizzicato Velocity"),
    P(81, "pizz_behind_bridge_vel", "Pizzicato Behind Bridge Velocity"),
    P(82, "pizz_peg_box_vel", "Pizzicato In Peg Box Velocity"),
    P(83, "col_legno_vel", "Col Legno Velocity"),
    P(84, "col_legno_gett_vel", "Col Legno Gettato Velocity"),
    P(85, "finger_vel", "Finger Velocity"),
    P(86, "body_vel", "Body Strokes Velocity"),
    P(87, "undef_vel", "Undefined Sounds Velocity"),
    P(88, "undef_mw", "Undefined Sounds MW", true),
  ];
}



// The Xsample English Horn roster — his Preset Menu, 2026-09-17 (RUNNING_LOG §32). Hoisted, like xsStringTechs.
// lo/hi = the assumed zone until 0d measures each preset. `mw` = the wheel shapes the dynamic (curve-channel material, D11).
// The bowed vibraphone's Preset Menu, from his Kontakt (2026-09-18): 12 factory presets + Free Preset 13,
// CC#0 = preset number − 1. `mw: true` marks a preset whose shape or damping is on the modwheel, as the
// english horn's does; CC4 presets take their vibrato depth there (the menu names say so) and are measured
// at 0d, not assumed. Every preset is given the instrument's whole compass: an Xsample mallet instrument is
// one sample set per preset, so unlike the winds there is no narrower zone to find.
function xsVibraphoneTechs(lo, hi) {
  const P = (n, key, label, mw) => ({ key, label: label + " (#" + n + ")", channel: 1, cc0: n - 1, rangeLow: lo, rangeHigh: hi, ...(mw ? { mw: true } : {}), kind: "pitched", ...xsLoud(label) });   // 1m.4.1: every mallet preset is pitched
  return [
    P(1,  "std_mallets_vel",     "Standard Mallets Velocity CC4 Vibrato MW Speed", true),
    P(2,  "damped_vel",          "Damped Velocity"),
    P(3,  "xylo_mallets_vel",    "Xylophone Mallets Velocity CC4 Vibrato MW Speed", true),
    P(4,  "tri_mallets_vel",     "Triangle Mallets Velocity CC4 Vibrato MW Speed", true),
    P(5,  "hand_vibrato_vel",    "Hand Vibrato Velocity"),
    P(6,  "harmonics_vel",       "Harmonics Velocity"),
    P(7,  "bowed_vel_vib",       "Bowed Velocity CC4 Vibrato MW Speed", true),
    P(8,  "std_mallets_mwdamp",  "Standard Mallets Velocity MW Damped", true),
    P(9,  "xylo_mallets_mwshape", "Xylophone Mallets Velocity MW Shape", true),
    P(10, "tri_mallets_mwshape", "Triangle Mallets Velocity MW Shape", true),
    P(11, "hand_vibrato_mwshape", "Hand Vibrato Velocity MW Shape", true),
    // THE ORDINARY VOICE IS PRESET 13, NOT 12 (2026-09-19, PLAN 1b.3a; RUNNING_LOG §79–§82).
    // Preset 12 is the library's own "Bowed Velocity", and its Round Robin menu ships on **"Repetition"** —
    // round robin active whenever a sound is REPEATED, which is this piece's vibraphone texture exactly: a
    // bar is HELD by re-bowing the same pitch, about eleven times a minute (§69's measured 7.4 s sustain).
    // Its three members measured **up to 13.8 dB apart at F#5**, so the instrument lurched between re-bows.
    // The menu is a per-preset "global parameter", which is why setting it by hand never survived: every
    // note sends CC#0 to select the preset, and that reloads the preset's STORED value. So preset 12 was
    // copied to the free slot 13 with Round Robin off and Slot rr off, saved in all four instances.
    // `bowed_vel` KEEPS ITS KEY and simply points at 13 — every score already written (641 vibraphone notes
    // in lgmf-all alone) picks the fix up with no edit.
    P(12, "bowed_vel_rr",        "Bowed Velocity — library default, round robin ON (superseded by #13)"),
    P(13, "bowed_vel",           "Bowed Velocity RRoff"),
  ];
}

function xsEnglishHornTechs(lo, hi) {
  // 1m.4.1: the by-key voices — multiphonics (2) · key noises · various noises · air noises (2) · undefined tones; their keys at 1m.4.2
  const KEY = new Set(["mp_short", "mp_loop", "key_noises", "various_noises", "air_noises", "air_noises_mw", "undef_tones"]);
  const P = (n, key, label, mw) => ({ key, label: label + " (#" + n + ")", channel: 1, cc0: n - 1, rangeLow: lo, rangeHigh: hi, ...(mw ? { mw: true } : {}), ...xsKind(key, new Set(), KEY), ...xsLoud(label) });
  return [
    P(1,  "vib_mw",               "Vibrato MW", true),
    P(2,  "senza_mw",             "Senza Vibrato MW", true),
    P(3,  "stac_vel_mwshape",     "Staccato Velocity 1 MW Shape", true),
    P(4,  "stac2_mwshape",        "Staccato Velocity 2 MW Shape", true),
    P(5,  "flutter_mw",           "Flutter Tongue MW", true),
    P(6,  "mp_short",             "Multiphonics Velocity"),
    P(7,  "crow_vel_mwshape",     "Crow On Reed Velocity MW Shape", true),   // NEW
    P(8,  "key_noises",           "Key Noises Velocity"),
    P(9,  "various_noises",       "Various Noises Velocity"),   // NEW
    P(10, "air_noises",           "Air Noises Velocity CC4"),   // CC4 = the air amount, per the menu name; measured at 0d
    P(11, "vib_vel",              "Vibrato Velocity"),
    P(12, "senza_vel",            "Senza Vibrato Velocity"),
    P(13, "flutter_vel",          "Flutter Tongue Velocity"),
    P(14, "vib_x_senza_vxmw",     "Vibrato - Senza Vibrato Velocity X MW", true),   // NEW
    P(15, "vib_senza_mw2d_cc2",   "Vibrato + Senza Vibrato MW 2 dimensional X CC2", true),   // NEW
    P(16, "triple16",             "Triple Tongue 16T"),
    P(17, "morph_vxmw",           "Senza Vibrato + Flutter Tongue Velocity X MW", true),
    P(18, "vib_flutter_vxmw",     "Vibrato + Flutter Tongue Velocity X MW", true),   // NEW
    P(19, "stac_vel",             "Staccato Velocity"),
    P(20, "accent_vel",           "With Accent Velocity"),
    P(21, "mp_loop",              "Multiphonics MW", true),
    P(22, "crow_vel",             "Crow On Reed Velocity"),   // NEW
    P(23, "air_noises_mw",        "Air Noises MW", true),
    P(24, "undef_tones",          "Undefined Tones Velocity"),
    P(25, "cresc_espr",           "Crescendo Espressivo"),   // NEW
    P(26, "cresc",                "Crescendo"),
    P(27, "portato",              "Portato Velocity"),
    P(28, "secco",                "Secco Velocity"),
    P(29, "vib_to_senza",         "Vibrato to Senza Vibrato Velocity"),   // NEW
    P(30, "senza_to_vib",         "Senza Vibrato to Vibrato Velocity"),   // NEW
    P(31, "vib_vel_mwinv",        "Vibrato Velocity + MW inverted", true),
    P(32, "senza_vel_mwinv",      "Senza Vibrato Velocity + MW inverted", true),
    P(33, "pseudo_bsn_vel_mwinv", "Pseudo Bassoon Velocity + MW inverted", true),   // NEW
    P(34, "pseudo_bsn_stac",      "Pseudo Bassoon Staccato Velocity"),   // NEW
    P(35, "pseudo_ob_vel_mwinv",  "Pseudo Oboe Velocity + MW inverted", true),   // NEW
    P(36, "pseudo_ob_stac",       "Pseudo Oboe Staccato Velocity"),   // NEW
    // 37–39 Free Preset — empty slots, not techniques
  ];
}

// ---- UVI PARTS (generated by tools/apply_uvi_parts.js from the running rack — do not edit by hand) ----
const UVI_PARTS = {};   // EMPTY at the port (2026-10-04) — piece #6's rows (bassoon · horn · trumpet, IRCAM SI2) left with it; tools/apply_uvi_parts.js writes this block from the running rack if a UVI instrument joins (container 4)
function applyUviParts(all, gen) {   // the rack decides the channel and the port of every SI2 technique; the recipe keeps the preset and the keyswitch
  for (const [inst, g] of Object.entries(gen || {})) {
    const R = all[inst]; if (!R || !R.techniques) continue;
    for (const q of R.techniques) { const v = g.techniques[q.key]; if (!v) { if (q.channel == null && g.main) q.channel = g.main.channel; continue; } q.channel = v.channel; if (v.port !== R.port) q.port = v.port; else delete q.port; q.placed = true; }
    if (g.main) R.channels = { main: g.main.channel, mainPort: g.main.port !== R.port ? g.main.port : undefined, curve: g.curve.map(c => ({ port: c.port, ch: c.ch })), curveTechniques: g.curveTechniques.slice() };
    R.uviParts = g.parts.slice();
  }
}
applyUviParts(INSTRUMENTS, UVI_PARTS);
// ---- end of the UVI parts ----

// ---- ARO PERCUSSION (generated by tools/apply_perc.js from bank/perc_selection.json — do not edit by hand) ----
const ARO_PERC = {   // 14 instrument(s) selected 2026-09-22: small_metals_finger_cymbals ch1 · small_metals_bell_tree ch2 · small_metals_sleigh_bells ch3 · small_metals_triangles ch4 · small_metals_tambourines ch5 · toys_castanets ch6 · toys_claves ch7 · toys_shakers ch8 · brake_drums ch9 · crashes_and_stack ch10 · wood_blocks ch11 · bass_drum_alt ch12 · temple_bowls ch13 · tam_tams_a ch14
  port: "DECPerc",
  instruments: [
    { slug: "small_metals_finger_cymbals", name: "Finger Cymbals", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 1, techniques: [
      { key: "small_metals_finger_cymbals", label: "Finger Cymbals", channel: 1, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 62,
        keys: [{"midi":36,"label":"Low"},{"midi":38,"label":"High"},{"midi":60,"label":"Low · 36"},{"midi":62,"label":"High · 38"}] },
    ] },
    { slug: "small_metals_bell_tree", name: "Bell Tree", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 2, techniques: [
      { key: "small_metals_bell_tree", label: "Bell Tree", channel: 2, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 69,
        keys: [{"midi":36,"label":"Half Gliss. - Low"},{"midi":38,"label":"Half Gliss. - High"},{"midi":40,"label":"Continuous Gliss"},{"midi":41,"label":"Full Gliss Short"},{"midi":43,"label":"Full Gliss Medium"},{"midi":45,"label":"Full Gliss Long"},{"midi":60,"label":"Half Gliss. - Low · 36"},{"midi":62,"label":"Half Gliss. - High · 38"},{"midi":64,"label":"Continuous Gliss · 40"},{"midi":65,"label":"Full Gliss Short · 41"},{"midi":67,"label":"Full Gliss Medium · 43"},{"midi":69,"label":"Full Gliss Long · 45"}] },
    ] },
    { slug: "small_metals_sleigh_bells", name: "Sleigh Bells & Indian Bells", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 3, techniques: [
      { key: "small_metals_sleigh_bells_sleigh_bells", label: "Sleigh Bells & Indian Bells — Sleigh Bells", channel: 3, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 64,
        keys: [{"midi":36,"label":"Single Shake L"},{"midi":38,"label":"Single Shake R"},{"midi":40,"label":"Long Shake / Roll"},{"midi":60,"label":"Single Shake L"},{"midi":62,"label":"Single Shake R"},{"midi":64,"label":"Long Shake / Roll"}] },
      { key: "small_metals_sleigh_bells_indian_rope_bells", label: "Sleigh Bells & Indian Bells — Indian Rope Bells", channel: 3, kind: "key", loud: "vel", rangeLow: 48, rangeHigh: 76,
        keys: [{"midi":48,"label":"Single Shake L"},{"midi":50,"label":"Single Shake R"},{"midi":52,"label":"Long Shake / Roll"},{"midi":72,"label":"Single Shake L"},{"midi":74,"label":"Single Shake R"},{"midi":76,"label":"Long Shake / Roll"}] },
    ] },
    { slug: "small_metals_triangles", name: "Small Metals Triangles", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 4, techniques: [
      { key: "small_metals_triangles_triangle_beater", label: "Small Metals Triangles — Triangle Beater", channel: 4, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 105,
        keys: [{"midi":36,"label":"Low · Hit"},{"midi":37,"label":"Low · Choked Hit"},{"midi":38,"label":"Low · Hit"},{"midi":39,"label":"Low · Choked Hit"},{"midi":40,"label":"Low · Roll"},{"midi":41,"label":"Low · Damped Short"},{"midi":43,"label":"Low · Damped Medium"},{"midi":45,"label":"Low · Damped Long"},{"midi":48,"label":"Middle · Hit"},{"midi":49,"label":"Middle · Choked Hit"},{"midi":50,"label":"Middle · Hit"},{"midi":51,"label":"Middle · Choked Hit"},{"midi":52,"label":"Middle · Roll"},{"midi":53,"label":"Middle · Damped Short"},{"midi":55,"label":"Middle · Damped Medium"},{"midi":57,"label":"Middle · Damped Long"},{"midi":60,"label":"High · Hit"},{"midi":61,"label":"High · Choked Hit"},{"midi":62,"label":"High · Hit"},{"midi":63,"label":"High · Choked Hit"},{"midi":64,"label":"High · Roll"},{"midi":65,"label":"High · Damped Short"},{"midi":67,"label":"High · Damped Medium"},{"midi":69,"label":"High · Damped Long"},{"midi":72,"label":"Low · Hit"},{"midi":73,"label":"Low · Choked Hit"},{"midi":74,"label":"Low · Hit"},{"midi":75,"label":"Low · Choked Hit"},{"midi":76,"label":"Low · Roll"},{"midi":77,"label":"Low · Damped Short"},{"midi":79,"label":"Low · Damped Medium"},{"midi":81,"label":"Low · Damped Long"},{"midi":84,"label":"Low · Hit"},{"midi":85,"label":"Low · Choked Hit"},{"midi":86,"label":"Low · Hit"},{"midi":87,"label":"Low · Choked Hit"},{"midi":88,"label":"Low · Roll"},{"midi":89,"label":"Low · Damped Short"},{"midi":91,"label":"Low · Damped Medium"},{"midi":93,"label":"Low · Damped Long"},{"midi":96,"label":"Low · Hit"},{"midi":97,"label":"Low · Choked Hit"},{"midi":98,"label":"Low · Hit"},{"midi":99,"label":"Low · Choked Hit"},{"midi":100,"label":"Low · Roll"},{"midi":101,"label":"Low · Damped Short"},{"midi":103,"label":"Low · Damped Medium"},{"midi":105,"label":"Low · Damped Long"}] },
    ] },
    { slug: "small_metals_tambourines", name: "Tambourines", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 5, techniques: [
      { key: "small_metals_tambourines_pop_tambourine", label: "Tambourines — Pop Tambourine", channel: 5, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 81,
        keys: [{"midi":36,"label":"Short Shake L"},{"midi":37,"label":"Accent L"},{"midi":38,"label":"Short Shake R"},{"midi":39,"label":"Accent R"},{"midi":40,"label":"Shake Roll"},{"midi":41,"label":"Hand Hit L"},{"midi":43,"label":"Hand Hit R"},{"midi":45,"label":"Hand Roll"},{"midi":72,"label":"Short Shake L · 2"},{"midi":73,"label":"Accent L · 2"},{"midi":74,"label":"Short Shake R · 2"},{"midi":75,"label":"Accent R · 2"},{"midi":76,"label":"Shake Roll · 2"},{"midi":77,"label":"Hand Hit L · 2"},{"midi":79,"label":"Hand Hit R · 2"},{"midi":81,"label":"Hand Roll · 2"}] },
      { key: "small_metals_tambourines_alt_tambourine", label: "Tambourines — Alt Tambourine", channel: 5, kind: "key", loud: "vel", rangeLow: 48, rangeHigh: 93,
        keys: [{"midi":48,"label":"Hand Hit Open L"},{"midi":50,"label":"Hand Hit Open R"},{"midi":52,"label":"Hand Roll Open"},{"midi":53,"label":"Hand Hit Closed L"},{"midi":55,"label":"Hand Hit Closed R"},{"midi":57,"label":"Hand Roll Closed"},{"midi":84,"label":"Hand Hit Open L · 2"},{"midi":86,"label":"Hand Hit Open R · 2"},{"midi":88,"label":"Hand Roll Open · 2"},{"midi":89,"label":"Hand Hit Closed L · 2"},{"midi":91,"label":"Hand Hit Closed R · 2"},{"midi":93,"label":"Hand Roll Closed · 2"}] },
      { key: "small_metals_tambourines_orchestral_tambourine", label: "Tambourines — Orchestral Tambourine", channel: 5, kind: "key", loud: "vel", rangeLow: 60, rangeHigh: 103,
        keys: [{"midi":60,"label":"Short Shake L"},{"midi":61,"label":"Accent L"},{"midi":62,"label":"Short Shake R"},{"midi":63,"label":"Accent R"},{"midi":64,"label":"Shake Roll"},{"midi":65,"label":"Hand Hit L"},{"midi":67,"label":"Hand Hit R"},{"midi":96,"label":"Short Shake L · 2"},{"midi":97,"label":"Accent L · 2"},{"midi":98,"label":"Short Shake R · 2"},{"midi":99,"label":"Accent R · 2"},{"midi":100,"label":"Shake Roll · 2"},{"midi":101,"label":"Hand Hit L · 2"},{"midi":103,"label":"Hand Hit R · 2"}] },
    ] },
    { slug: "toys_castanets", name: "Castanets", library: "ARO High Percussion", status: "verified", port: "DECPerc", channel: 6, techniques: [
      { key: "toys_castanets_handle", label: "Castanets — Handle", channel: 6, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 65,
        keys: [{"midi":36,"label":"1 · Single L"},{"midi":38,"label":"1 · Single R"},{"midi":40,"label":"1 · Roll"},{"midi":41,"label":"1 · Flam"},{"midi":60,"label":"2 · Single L"},{"midi":62,"label":"2 · Single R"},{"midi":64,"label":"2 · Roll"},{"midi":65,"label":"2 · Flam"}] },
      { key: "toys_castanets_machine", label: "Castanets — Machine", channel: 6, kind: "key", loud: "vel", rangeLow: 48, rangeHigh: 77,
        keys: [{"midi":48,"label":"1 · Single L"},{"midi":50,"label":"1 · Single R"},{"midi":52,"label":"1 · Roll"},{"midi":53,"label":"1 · Flam"},{"midi":72,"label":"2 · Single L"},{"midi":74,"label":"2 · Single R"},{"midi":76,"label":"2 · Roll"},{"midi":77,"label":"2 · Flam"}] },
    ] },
    { slug: "toys_claves", name: "Claves", library: "ARO High Percussion", status: "verified", port: "DECPerc", channel: 7, techniques: [
      { key: "toys_claves", label: "Claves", channel: 7, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 69,
        keys: [{"midi":36,"label":"Pair 3 Low"},{"midi":38,"label":"Pair 3 High"},{"midi":40,"label":"Pair 2 Low"},{"midi":41,"label":"Pair 2 High"},{"midi":43,"label":"Pair 1 Low"},{"midi":45,"label":"Pair 1 High"},{"midi":60,"label":"Pair 3 Low"},{"midi":62,"label":"Pair 3 High"},{"midi":64,"label":"Pair 2 Low"},{"midi":65,"label":"Pair 2 High"},{"midi":67,"label":"Pair 1 Low"},{"midi":69,"label":"Pair 1 High"}] },
    ] },
    { slug: "toys_shakers", name: "Shakers", library: "ARO High Percussion", status: "verified", port: "DECPerc", channel: 8, techniques: [
      { key: "toys_shakers_pair_a", label: "Shakers — Pair A", channel: 8, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 63,
        keys: [{"midi":36,"label":"Low"},{"midi":37,"label":"High"},{"midi":38,"label":"Low · 36"},{"midi":39,"label":"High · 37"},{"midi":60,"label":"Low · 36"},{"midi":61,"label":"High · 37"},{"midi":62,"label":"Low · 38"},{"midi":63,"label":"High · 39"}] },
      { key: "toys_shakers_pair_b", label: "Shakers — Pair B", channel: 8, kind: "key", loud: "vel", rangeLow: 48, rangeHigh: 75,
        keys: [{"midi":48,"label":"Low"},{"midi":49,"label":"High"},{"midi":50,"label":"Low · 48"},{"midi":51,"label":"High · 49"},{"midi":72,"label":"Low · 48"},{"midi":73,"label":"High · 49"},{"midi":74,"label":"Low · 50"},{"midi":75,"label":"High · 51"}] },
    ] },
    { slug: "brake_drums", name: "Brake Drums", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 9, techniques: [
      { key: "brake_drums_poly_beater", label: "Brake Drums — Poly Beater", channel: 9, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 43,
        keys: [{"midi":36,"label":"Low · Hit L"},{"midi":37,"label":"Middle · Hit L"},{"midi":38,"label":"Low · Hit R"},{"midi":39,"label":"Middle · Hit R"},{"midi":41,"label":"High · Hit L"},{"midi":43,"label":"High · Hit R"}] },
      { key: "brake_drums_rubber_mallets", label: "Brake Drums — Rubber Mallets", channel: 9, kind: "key", loud: "vel", rangeLow: 60, rangeHigh: 67,
        keys: [{"midi":60,"label":"Low · Hit L"},{"midi":61,"label":"Middle · Hit L"},{"midi":62,"label":"Low · Hit R"},{"midi":63,"label":"Middle · Hit R"},{"midi":65,"label":"High · Hit L"},{"midi":67,"label":"High · Hit R"}] },
    ] },
    { slug: "crashes_and_stack", name: "Crashes and Stack", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 10, techniques: [
      { key: "crashes_and_stack_sticks", label: "Crashes and Stack — Sticks", channel: 10, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 50,
        keys: [{"midi":36,"label":"12\" Crasher · Hit L"},{"midi":38,"label":"12\" Crasher · Hit R"},{"midi":41,"label":"Cymbal Stack · Hit L"},{"midi":43,"label":"Cymbal Stack · Hit R"},{"midi":48,"label":"14\" Crasher · Hit L"},{"midi":50,"label":"14\" Crasher · Hit R"}] },
      { key: "crashes_and_stack_rods", label: "Crashes and Stack — Rods", channel: 10, kind: "key", loud: "vel", rangeLow: 60, rangeHigh: 74,
        keys: [{"midi":60,"label":"12\" Crasher · Hit L"},{"midi":62,"label":"12\" Crasher · Hit R"},{"midi":72,"label":"14\" Crasher · Hit L"},{"midi":74,"label":"14\" Crasher · Hit R"}] },
      { key: "crashes_and_stack_dreads", label: "Crashes and Stack — Dreads", channel: 10, kind: "key", loud: "vel", rangeLow: 65, rangeHigh: 67,
        keys: [{"midi":65,"label":"Cymbal Stack · Hit L"},{"midi":67,"label":"Cymbal Stack · Hit R"}] },
    ] },
    { slug: "wood_blocks", name: "Wood Blocks", library: "ARO High Percussion", status: "verified", port: "DECPerc", channel: 11, techniques: [
      { key: "wood_blocks_hard_mallets", label: "Wood Blocks — Hard Mallets", channel: 11, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 44,
        keys: [{"midi":36,"label":"Block 4 · Hit L"},{"midi":37,"label":"Block 3 · Hit L"},{"midi":38,"label":"Block 4 · Hit R"},{"midi":39,"label":"Block 3 · Hit R"},{"midi":41,"label":"Block 2 · Hit L"},{"midi":42,"label":"Block 1 · Hit L"},{"midi":43,"label":"Block 2 · Hit R"},{"midi":44,"label":"Block 1 · Hit R"}] },
      { key: "wood_blocks_soft_mallets", label: "Wood Blocks — Soft Mallets", channel: 11, kind: "key", loud: "vel", rangeLow: 48, rangeHigh: 56,
        keys: [{"midi":48,"label":"Block 4 · Hit L"},{"midi":49,"label":"Block 3 · Hit L"},{"midi":50,"label":"Block 4 · Hit R"},{"midi":51,"label":"Block 3 · Hit R"},{"midi":53,"label":"Block 2 · Hit L"},{"midi":54,"label":"Block 1 · Hit L"},{"midi":55,"label":"Block 2 · Hit R"},{"midi":56,"label":"Block 1 · Hit R"}] },
    ] },
    { slug: "bass_drum_alt", name: "Bass Drum (Alt)", library: "ARO Low Percussion", status: "verified", port: "DECPerc", channel: 12, techniques: [
      { key: "bass_drum_alt_sticks", label: "Bass Drum (Alt) — Sticks", channel: 12, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 45,
        keys: [{"midi":36,"label":"Single Hit L"},{"midi":37,"label":"Hand Damped Hit L"},{"midi":38,"label":"Single Hit R"},{"midi":39,"label":"Hand Damped Hit R"},{"midi":40,"label":"Roll"},{"midi":41,"label":"Rim Hit L"},{"midi":43,"label":"Rim Hit R"},{"midi":45,"label":"Rim Roll"}] },
      { key: "bass_drum_alt_hard_felt", label: "Bass Drum (Alt) — Hard Felt", channel: 12, kind: "key", loud: "vel", rangeLow: 48, rangeHigh: 52,
        keys: [{"midi":48,"label":"Single Hit L"},{"midi":50,"label":"Single Hit R"},{"midi":52,"label":"Roll"}] },
      { key: "bass_drum_alt_hard_felt_cloth_damped", label: "Bass Drum (Alt) — Hard Felt (Cloth Damped)", channel: 12, kind: "key", loud: "vel", rangeLow: 53, rangeHigh: 57,
        keys: [{"midi":53,"label":"Single Hit L"},{"midi":55,"label":"Single Hit R"},{"midi":57,"label":"Roll"}] },
      { key: "bass_drum_alt_medium_felt", label: "Bass Drum (Alt) — Medium Felt", channel: 12, kind: "key", loud: "vel", rangeLow: 60, rangeHigh: 64,
        keys: [{"midi":60,"label":"Single Hit L"},{"midi":61,"label":"Hand Damped Hit L"},{"midi":62,"label":"Single Hit R"},{"midi":63,"label":"Hand Damped Hit R"},{"midi":64,"label":"Roll"}] },
      { key: "bass_drum_alt_rods", label: "Bass Drum (Alt) — Rods", channel: 12, kind: "key", loud: "vel", rangeLow: 65, rangeHigh: 70,
        keys: [{"midi":65,"label":"Single Hit L"},{"midi":66,"label":"Rim Hit L"},{"midi":67,"label":"Single Hit R"},{"midi":68,"label":"Rim Hit R"},{"midi":69,"label":"Roll"},{"midi":70,"label":"Rim Roll"}] },
      { key: "bass_drum_alt_brushes", label: "Bass Drum (Alt) — Brushes", channel: 12, kind: "key", loud: "vel", rangeLow: 72, rangeHigh: 88,
        keys: [{"midi":72,"label":"Center Hit Open L"},{"midi":73,"label":"Center Hit Closed L"},{"midi":74,"label":"Center Hit Open R"},{"midi":75,"label":"Center Hit Closed R"},{"midi":76,"label":"Roll"},{"midi":77,"label":"Edge Hit Open L"},{"midi":78,"label":"Edge Hit Closed L"},{"midi":79,"label":"Edge Hit Open R"},{"midi":80,"label":"Edge Hit Closed R"},{"midi":84,"label":"Short Sweep L"},{"midi":85,"label":"Long Sweep L"},{"midi":86,"label":"Short Sweep R"},{"midi":87,"label":"Long Sweep R"},{"midi":88,"label":"Swirling"}] },
    ] },
    { slug: "temple_bowls", name: "Temple Bowls", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 13, techniques: [
      { key: "temple_bowls_rubber_mallet", label: "Temple Bowls — Rubber Mallet", channel: 13, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 44,
        keys: [{"midi":36,"label":"Bowl 4 Single Hit L"},{"midi":37,"label":"Bowl 3 Single Hit L"},{"midi":38,"label":"Bowl 4 Single Hit R"},{"midi":39,"label":"Bowl 3 Single Hit R"},{"midi":41,"label":"Bowl 2 Single Hit L"},{"midi":42,"label":"Bowl 1 Single Hit L"},{"midi":43,"label":"Bowl 2 Single Hit R"},{"midi":44,"label":"Bowl 1 Single Hit R"}] },
      { key: "temple_bowls_brush", label: "Temple Bowls — Brush", channel: 13, kind: "key", loud: "vel", rangeLow: 48, rangeHigh: 56,
        keys: [{"midi":48,"label":"Bowl 4 Single Hit L"},{"midi":49,"label":"Bowl 3 Single Hit L"},{"midi":50,"label":"Bowl 4 Single Hit R"},{"midi":51,"label":"Bowl 3 Single Hit R"},{"midi":53,"label":"Bowl 2 Single Hit L"},{"midi":54,"label":"Bowl 1 Single Hit L"},{"midi":55,"label":"Bowl 2 Single Hit R"},{"midi":56,"label":"Bowl 1 Single Hit R"}] },
    ] },
    { slug: "tam_tams_a", name: "Tam Tams A", library: "ARO Metal Percussion", status: "verified", port: "DECPerc", channel: 14, techniques: [
      { key: "tam_tams_a_tam_tam_mallet", label: "Tam Tams A — Tam Tam Mallet", channel: 14, kind: "key", loud: "vel", rangeLow: 36, rangeHigh: 44,
        keys: [{"midi":36,"label":"Tam Tam A 30\" Single Hit"},{"midi":37,"label":"Tam Tam A 30\" Single Hit Choked"},{"midi":38,"label":"Tam Tam A 30\" Single Hit"},{"midi":39,"label":"Tam Tam A 30\" Single Hit Choked"},{"midi":41,"label":"Tam Tam A 30\" Roll"},{"midi":42,"label":"Tam Tam A 30\" Swells"},{"midi":43,"label":"Tam Tam A 30\" Roll Choked"},{"midi":44,"label":"Tam Tam A 30\" Swells Choked"}] },
      { key: "tam_tams_a_scrape", label: "Tam Tams A — Scrape", channel: 14, kind: "key", loud: "vel", rangeLow: 48, rangeHigh: 56,
        keys: [{"midi":48,"label":"Tam Tam A 30\" Fast Scrape 1"},{"midi":49,"label":"Tam Tam A 30\" Fast Scrape 2"},{"midi":50,"label":"Tam Tam A 30\" Fast Scrape 3"},{"midi":51,"label":"Tam Tam A 30\" Fast Scrape 4"},{"midi":53,"label":"Tam Tam A 30\" Medium Scrape 1"},{"midi":54,"label":"Tam Tam A 30\" Medium Scrape 2"},{"midi":55,"label":"Tam Tam A 30\" Medium Scrape 3"},{"midi":56,"label":"Tam Tam A 30\" Medium Scrape 4"}] },
      { key: "tam_tams_a_superball", label: "Tam Tams A — Superball", channel: 14, kind: "key", loud: "vel", rangeLow: 60, rangeHigh: 69,
        keys: [{"midi":60,"label":"Tam Tam A 30\" Short Drag 1"},{"midi":61,"label":"Tam Tam A 30\" Short Drag 2"},{"midi":62,"label":"Tam Tam A 30\" Short Drag 3"},{"midi":63,"label":"Tam Tam A 30\" Short Drag 4"},{"midi":65,"label":"Tam Tam A 30\" Medium Drag 1"},{"midi":66,"label":"Tam Tam A 30\" Medium Drag 2"},{"midi":67,"label":"Tam Tam A 30\" Medium Drag 3"},{"midi":68,"label":"Tam Tam A 30\" Medium Drag 4"},{"midi":69,"label":"Tam Tam A 30\" Long Continuous Drag"}] },
    ] },
  ],
};
function applyAroPerc(all, sel) {   // the selection is ADDED beside the placeholder `main`, which stays the ordinary voice on its own channels; nothing selected → nothing changes
  const P = all.percussion; if (!P || !sel || !sel.instruments || !sel.instruments.length) return;
  const techs = [];
  for (const I of sel.instruments) for (const q of I.techniques) techs.push(Object.assign({}, q, { keys: q.keys.slice() }));
  const gen = new Set(techs.map(q => q.key));
  P.techniques = P.techniques.filter(q => !gen.has(q.key)).concat(techs);
  P.aroInstruments = sel.instruments.map(I => ({ slug: I.slug, name: I.name, port: I.port, channel: I.channel }));
}
applyAroPerc(INSTRUMENTS, ARO_PERC);
// ---- end of the ARO percussion ----


// ---- MEASURED RANGES — piece #5's, for the CELLO ONLY ----
// Measured 2026-09-06T14:50 in the Tempus rack (01-REC-260906_1415.wav): per technique [lo, hi]
// of the keys that actually sounded, silent keys listed. The cello is the same library and the
// same instrument, so the measurement carries; every other instrument's rows were left behind
// with piece #5 and are re-measured here at 0d.
const MEASURED_RANGES = {
  cello: {
    "bartok_vel": { lo: 36, hi: 71 },   // silent: 72 73 74 75 76 77 78 79 80 81 82 83
    "gettato_vel": { lo: 36, hi: 76 },   // silent: 77 78 79 80 81 82 83
    "senza_vel": { lo: 36, hi: 83 },
    "accent_senza_vel": { lo: 36, hi: 83 },
    "marcato_sfz_vel": { lo: 36, hi: 83 },
    "marcato_stac_vel": { lo: 36, hi: 83 },
    "spicc_vel": { lo: 36, hi: 83 },
    "stac_vel": { lo: 36, hi: 83 },
  },
};
function applyMeasuredRanges(all, measured) {   // the measured span replaces the keyboard zone where it is narrower
  for (const [inst, techs] of Object.entries(measured || {})) {
    const I = all[inst]; if (!I || !I.techniques) continue;
    for (const q of I.techniques) {
      const m = techs[q.key]; if (!m) continue;
      const lo = q.rangeLow != null ? q.rangeLow : I.rangeLow, hi = q.rangeHigh != null ? q.rangeHigh : I.rangeHigh;
      q.zoneLow = lo; q.zoneHigh = hi; q.measured = true;
      q.rangeLow = Math.max(lo, m.lo); q.rangeHigh = Math.min(hi, m.hi);
      if (m.gaps && m.gaps.length) q.silentKeys = m.gaps.slice();
    }
  }
}
applyMeasuredRanges(INSTRUMENTS, MEASURED_RANGES);
// ---- end of the measured ranges ----


// ---- MEASURED BEND RANGES (generated by tools/apply_bend_ranges.js — do not edit by hand) ----
const MEASURED_BEND = {   // measured 2026-09-19T12:20 (30-REC-260919_0803.wav): semitones per full bend on the ordinary voice; RPN 0 honoured = MIDI can change it
  cello: { rangeSt: 1.012, spreadSt: undefined, mutableByMidi: false, residueCents: null, pitch: 60 },   // OK (1b.2, one fraction)
  bowed_vibraphone: { rangeSt: 0.334, spreadSt: undefined, mutableByMidi: false, residueCents: null, pitch: 71 },   // OK (1b.2, one fraction)
};
function applyMeasuredBend(all, measured) {   // the measured range replaces the provisional bendRangeSt
  for (const [inst, m] of Object.entries(measured || {})) {
    const I = all[inst]; if (!I || !m) continue;
    I.bendRangeSt = m.rangeSt; I.bendMeasured = true; I.bendMutableByMidi = !!m.mutableByMidi; I.bendResidueCents = m.residueCents;
  }
}
applyMeasuredBend(INSTRUMENTS, MEASURED_BEND);
// ---- end of the measured bend ranges ----


// ---- 1m.4.1 (2026-09-22): THE SI2 THREE KNOW THEMSELVES ----
// The three IRCAM tables above are typed by hand, one line per preset, and stay readable: their `kind` and `loud` are stamped here
// from ONE table that names the by-key voices — everything else of these three is pitched, by velocity (on UVI the loudness is the
// velocity; no wheel). The horn and the trumpet have no by-key voice on the manual's list; 1m.4.2 checks at the rack (RUNNING_LOG
// §244: suspects, not facts). ONLY the instruments named here are stamped — an entry of any other instrument without `kind` is
// caught by tools/roster_check.js, never defaulted.
const SI2_KINDS = {};   // EMPTY at the port (2026-10-04) — piece #6's rows (bassoon · horn · trumpet) left with it
function applySi2Kinds(all, table) {
  for (const [inst, byKey] of Object.entries(table)) {
    const I = all[inst]; if (!I || !I.techniques) continue;
    for (const q of I.techniques) {
      if (q.kind == null) q.kind = byKey[q.key] || "pitched";
      if (q.loud == null) q.loud = "vel";
      if (q.kind === "key" && q.keys == null) q.keys = "pending";
    }
  }
}
applySi2Kinds(INSTRUMENTS, SI2_KINDS);
// ---- end of the SI2 kinds ----

// ---- THE BY-KEY MAPS (1m.4.2, 2026-09-22) — where each by-key voice's keys sit ----
// A voice's keys come from one of three sources, named per entry: his PICTURE of the sampler's keyboard (Kontakt names its keys
// C3 = 60, RUNNING_LOG §3820 · §287) · the SI2 MANUAL's own list (the bassoon's multiphonics: one line per key, the label the
// pitches it sounds in the manual's own naming, '+' a quarter-tone up; UVI names C1 = 36) · the instrument's RANGE assumed where
// nothing better is on file (marked assumed — a dead key is silent, his ear trims it). { lo, hi } = every key from lo to hi, named
// by its note (C4 = 60, the app's naming); keys: [...] = as listed. A voice not named here stays pending (tools/roster_check.js
// prints them). His word (2026-09-22): "just put them in there. We don't have to give them labels yet."
const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function noteName(midi) { return NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1); }
const BY_KEY_MAPS = {};   // EMPTY at the port (2026-10-04) — piece #6's rows (english_horn · bassoon · double_bass) left with it; a by-key voice's keys are read from his rack (container 4)
function applyKeyMaps(all, table) {
  for (const [inst, byKey] of Object.entries(table)) {
    const I = all[inst]; if (!I || !I.techniques) throw new Error("BY_KEY_MAPS: no instrument " + inst);
    for (const [key, m] of Object.entries(byKey)) {
      const q = I.techniques.find(t => t.key === key); if (!q) throw new Error("BY_KEY_MAPS: no voice " + inst + "/" + key);
      if (q.kind !== "key") throw new Error("BY_KEY_MAPS: " + inst + "/" + key + " is not a key voice");
      q.keys = m.keys ? m.keys.map(k => ({ midi: k.midi, label: k.label })) : Array.from({ length: m.hi - m.lo + 1 }, (_, i) => ({ midi: m.lo + i, label: noteName(m.lo + i) }));
      q.keySource = m.source;
    }
  }
}
applyKeyMaps(INSTRUMENTS, BY_KEY_MAPS);
// ---- end of the by-key maps ----


// Hardware capture input. Keystation 88 MK3 exposes "Keystation 88 MK3" (keys) and
// "MIDIIN2 (Keystation 88 MK3)" (DAW control - never bind). See piece #3's SAMPLER_QUIRKS.md.
const INPUT_MATCH = /keystation/i;
const INPUT_EXCLUDE = /^MIDIIN\d+/i;
