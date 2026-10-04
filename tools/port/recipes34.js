#!/usr/bin/env node
// 3.4 RECIPES AND SKELETON BANKS — the recipe file rebuilt for the Decibel piece's six lanes, and the four bank files the
// app and the checks read written empty-but-valid (journal D9; the protocol's 3.4; 2026-10-04).
//
//   node tools/port/recipes34.js [--dry]
//
// sandbox/instruments.js is REBUILT, not edited: the schema text and every helper block are kept; the table keeps the
// CARRIED instruments' sections verbatim (percussion · bowed_vibraphone · cello — piece #6's, measured in ITS rack) and
// gets three PLACEHOLDERS (bass_flute · bass_clarinet · viola — no library chosen until container 4); the generated
// blocks lose the rows of instruments this piece does not have. Every anchor is asserted; nothing is written unless all
// held and the rebuilt file EVALUATES to exactly the six instruments.
// The banks are read from piece #6's COMMIT (never its working tree) and skeletoned: shape and metadata kept, only the
// carried instruments' rows, a `_provenance` line naming what was dropped.
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
const ROOT = path.join(__dirname, '..', '..');
const SRC_REPO = 'C:/Users/jwloy/GitHub/septet_LGMF_2026', SRC_COMMIT = '0d70fda';
const DRY = process.argv.includes('--dry');
const die = m => { throw new Error(m); };

// ---------------------------------------------------------------------------------------------- the recipe file
const RP = path.join(ROOT, 'sandbox', 'instruments.js');
const raw = fs.readFileSync(RP, 'utf8');
if (raw.includes('\r\n')) die('sandbox/instruments.js is not LF — refused');
const L = raw.split('\n');
const at = (pred, what, from) => { const hits = []; for (let i = from || 0; i < L.length; i++) if (pred(L[i])) hits.push(i); if (hits.length !== 1) die('anchor "' + what + '" found ' + hits.length + ' times'); return hits[0]; };
const iStatus = at(s => s.startsWith('// ============================ STATUS'), 'STATUS');
const iTable = at(s => s === 'const INSTRUMENTS = {', 'const INSTRUMENTS');
const iPerc = at(s => s.startsWith('  // ---- PERCUSSION'), 'PERCUSSION section');
const iVib = at(s => s.startsWith('  // ---- BOWED VIBRAPHONE'), 'BOWED VIBRAPHONE section');
const iCello = at(s => s.startsWith('  // ---- CELLO'), 'CELLO section');
const iDB = at(s => s.startsWith('  // ---- DOUBLE BASS'), 'DOUBLE BASS section');
const iEnd = L.findIndex((s, i) => i > iTable && s === '};');
if (!(iStatus < iTable && iTable < iPerc && iPerc < iVib && iVib < iCello && iCello < iDB && iDB < iEnd)) die('the table\'s sections are not in the order expected');
if (!L[iEnd - 1].startsWith('  double_bass: {')) die('the line before the table\'s end is not the double bass entry');

const HEAD = [
'// Rendering-recipe config — decibel TENOR 2026 (the port from piece #6, the new-piece protocol\'s 3.4, 2026-10-04;',
'// container 4 fills it in). One entry per TRACK (score/public/composer.html TRACKS[].instKey).',
];
const STATUS = [
'// ============================ STATUS: PROVISIONAL ============================',
'// **Nothing here has been heard in this piece.** Written during the port so that the six lanes exist, material can be',
'// assigned to them, the placement engines can route around them and the notation can lay them out. Container 4 (the',
'// instruments) and container 5 (the calibration) replace every value, with the composer at the machine.',
'//',
'//   CARRIED from piece #6, verbatim — its measurements are ITS rack\'s, re-measured at container 5:',
'//     percussion        Spitfire Abbey Road Orchestra Percussion. The selection (bank/perc_selection.json) is piece',
'//                       #6\'s fourteen; WHICH instruments this piece uses is the composer\'s, at container 4.',
'//     bowed_vibraphone  Xsample Mallets Extended — the STAND-IN for the pitched percussion lane (journal D9).',
'//     cello             Xsample Contemporary Solo Strings.',
'//   PLACEHOLDERS — no library chosen (container 4 opens with that talk):',
'//     bass_flute · bass_clarinet   one ordinary voice each, so the lane is real.',
'//     viola                        the strings\' roster by the cello\'s mechanism; none of the cello\'s measurements.',
'//',
'// PORT NAMES carry a `DEC` prefix (journal D6): loopMIDI ports are machine-global, and piece #6\'s rack (`LG…`) and piece',
'// #5\'s (bare names) may still be live on this machine. These names are the SHAPE; container 4 (4.1) fixes them.',
'//',
'// TECHNIQUE KEYS are the notation registry\'s names (notation/registry/techniques.json) wherever one exists, so a key that',
'// reaches the IR is already drawable; tools/palette_check.js lists the recipe keys the registry does not know yet.',
];
const WINDS = [
'  // ---- BASS FLUTE — LIBRARY NOT CHOSEN (the instruments talk, container 4) ----',
'  // A placeholder so the lane is real: one ordinary voice. The lineage\'s candidates are Xsample and IRCAM Solo Instruments',
'  // 2, whichever has a bass flute; nothing here was read from a library or heard. Range 48–84 (C3–C6) is the instrument\'s',
'  // SOUNDING compass (an octave below the flute\'s written pitch), NOT measured. The bend range is MIDI\'s default, unread.',
'  bass_flute: { ordinary: "ord", playerBendSt: 1, bendRangeSt: 2, label: "Bass Flute", port: "DECBassFlute", rangeLow: 48, rangeHigh: 84, channels: { main: 1, curve: [2, 3, 4] },',
'    techniques: [{ key: "ord", label: "Ordinario", channel: 1, kind: "pitched", loud: "vel" }] },',
'',
'  // ---- BASS CLARINET — LIBRARY NOT CHOSEN (container 4) ----',
'  // A placeholder, as above. The lineage has this instrument twice — piece #3\'s deep map and piece #5\'s recipe (Xsample,',
'  // 34 presets, measured in the Tempus rack): container 4\'s sources, not carried here before the library is his word.',
'  // Range 34–77 (B♭1–F5 sounding), NOT measured.',
'  bass_clarinet: { ordinary: "ord", playerBendSt: 1, bendRangeSt: 2, label: "Bass Clarinet", port: "DECBassClar", rangeLow: 34, rangeHigh: 77, channels: { main: 1, curve: [2, 3, 4] },',
'    techniques: [{ key: "ord", label: "Ordinario", channel: 1, kind: "pitched", loud: "vel" }] },',
'',
];
const VIOLA = [
'  // ---- VIOLA — by the CELLO\'s mechanism, PROVISIONAL (container 4) ----',
'  // The roster is generated by the strings\' helper, so the key set is the cello\'s (Xsample Contemporary Solo Strings: 88',
'  // presets, CC#0 = preset − 1; Sul C / G / D / A) — piece #5\'s viola was this library and this helper. NOTHING of the',
'  // cello\'s MEASUREMENTS is shared: no balanceDb, no measured ranges, no measured bend — a shared mechanism never shares a',
'  // measurement. Range 48–93 (C3–A6 sounding) is piece #5\'s figure, not re-measured. The preset numbers are VERIFY at 4.',
'  viola: { ordinary: "senza_vel", playerBendSt: 1, bendRangeSt: 1, label: "Viola", port: "DECViola", rangeLow: 48, rangeHigh: 93, mechanism: "cc0", channels: { main: 1, curve: [2, 3, 4] }, techniques: xsStringTechs(["C", "G", "D", "A"], 48, 93) },',
'',
];
const strip = a => { const b = a.slice(); while (b.length && b[b.length - 1] === '') b.pop(); return b; };
let out = [].concat(HEAD, L.slice(2, iStatus), STATUS, [''], ['const INSTRUMENTS = {', ''], WINDS,
  strip(L.slice(iPerc, iCello)), [''], VIOLA, strip(L.slice(iCello, iDB)), ['};'], L.slice(iEnd + 1));

// the generated blocks: rows of instruments this piece does not have go
function emptyBlock(name, why) {
  const a = out.findIndex(s => s.startsWith('const ' + name + ' = {')); if (a < 0) die(name + ': block not found');
  const z = out.findIndex((s, i) => i > a && s === '};'); if (z < 0) die(name + ': block end not found');
  out = out.slice(0, a).concat(['const ' + name + ' = {};   // EMPTY at the port (2026-10-04) — ' + why], out.slice(z + 1));
}
emptyBlock('UVI_PARTS', 'piece #6\'s rows (bassoon · horn · trumpet, IRCAM SI2) left with it; tools/apply_uvi_parts.js writes this block from the running rack if a UVI instrument joins (container 4)');
emptyBlock('SI2_KINDS', 'piece #6\'s rows (bassoon · horn · trumpet) left with it');
emptyBlock('BY_KEY_MAPS', 'piece #6\'s rows (english_horn · bassoon · double_bass) left with it; a by-key voice\'s keys are read from his rack (container 4)');
{
  const a = out.findIndex(s => s.startsWith('const MEASURED_BEND = {')), z = out.findIndex((s, i) => i > a && s === '};');
  if (a < 0 || z < 0) die('MEASURED_BEND: block not found');
  const gone = ['english_horn', 'bassoon', 'horn', 'trumpet', 'double_bass'];
  const kept = out.slice(a + 1, z).filter(s => !gone.some(g => s.startsWith('  ' + g + ':')));
  if (z - a - 1 - kept.length !== gone.length) die('MEASURED_BEND: expected to drop ' + gone.length + ' rows, dropped ' + (z - a - 1 - kept.length));
  out = out.slice(0, a + 1).concat(kept, out.slice(z));
}
let text = out.join('\n');
const ren = (a, b, n) => { const c = text.split(a).length - 1; if (c !== n) die('port ' + a + ': expected ' + n + ', found ' + c); text = text.split(a).join(b); };
ren('"LGPerc"', '"DECPerc"', 16); ren('"LGVibes"', '"DECVibes"', 1); ren('"LGCello"', '"DECCello"', 1);
if (/"LG[A-Z]/.test(text)) die('a piece #6 port name is still in the recipe file');

// it must EVALUATE, to exactly the six
const I = vm.runInNewContext(text + '\n;INSTRUMENTS;', {});
const WANT = ['bass_flute', 'bass_clarinet', 'percussion', 'bowed_vibraphone', 'viola', 'cello'];
if (Object.keys(I).join() !== WANT.join()) die('the rebuilt recipe evaluates to [' + Object.keys(I) + ']');
for (const k of WANT) if (!I[k].techniques || !I[k].techniques.length || !I[k].port) die(k + ': no techniques or no port');
console.log('recipe: ' + WANT.map(k => k + ' ' + I[k].techniques.length + ' voices → ' + I[k].port).join(' · '));
console.log('recipe: ' + L.length + ' lines → ' + text.split('\n').length);

// ---------------------------------------------------------------------------------------------- the skeleton banks
const fromSrc = p => JSON.parse(cp.execFileSync('git', ['-C', SRC_REPO, 'show', SRC_COMMIT + ':' + p], { maxBuffer: 1 << 27 }).toString());
const PROV = 'Skeleton written by the port from piece #6 (septet_LGMF_2026 @ ' + SRC_COMMIT + '), 2026-10-04 — the new-piece protocol\'s 3.4. ';
const banks = {};
{ // the strike bank: empty in piece #6 too
  const j = fromSrc('bank/scattered_strikes.json');
  if (Object.keys(j.strikes || {}).length || (j.ingestions || []).length) die('scattered_strikes: the source is not empty');
  j.created = '2026-10-04';
  j._provenance = PROV + 'The strike bank is EMPTY, as it was there; the shape is piece #5\'s. Recorded strikes are a piece\'s own.';
  banks['bank/scattered_strikes.json'] = j;
}
{ // the remap: keyed by instrument — only the carried pitched instruments' rows
  const j = fromSrc('bank/velocity_remap.json');
  const keep = ['bowed_vibraphone', 'cello'], had = Object.keys(j.instruments);
  for (const k of keep) if (!j.instruments[k]) die('velocity_remap: no row for ' + k);
  const rows = {}; for (const k of keep) { rows[k] = j.instruments[k]; if (rows[k].port) rows[k].port = rows[k].port.replace(/^LG/, 'DEC'); }
  j.instruments = rows;
  j._provenance = PROV + 'Shape and metadata are piece #6\'s (its `piece`, `source` and dates are kept as the record of where the rows were measured). ' +
    'Of the instruments ONLY the carried ones are kept — ' + keep.join(', ') + ' — measured in PIECE #6\'s rack, to be re-measured at container 5. ' +
    'Dropped: ' + had.filter(k => !keep.includes(k)).join(', ') + '. The bass flute, the bass clarinet and the viola are unmeasured: an instrument with no row here passes its anchor velocity through, as the app does for any missing row.';
  banks['bank/velocity_remap.json'] = j;
}
{ // the sample lengths: keyed by TECHNIQUE — piece #6's file already holds the cello's rows only
  const j = fromSrc('bank/sample_lengths.json');
  j._provenance = PROV + 'Carried as it stood there: keyed by TECHNIQUE, the rows are the CELLO\'s (measured in piece #5\'s rack). No wind of this piece inherits a length. | ' + j._provenance;
  banks['bank/sample_lengths.json'] = j;
}
{ // the percussion selection: piece #6's fourteen, on this piece's port — provisional
  const j = fromSrc('bank/perc_selection.json');
  if (j.port !== 'LGPerc') die('perc_selection: port is ' + j.port);
  j.port = 'DECPerc';
  j._provenance = PROV + 'The selection is PIECE #6\'s (' + j.instruments.length + ' instruments) on this piece\'s port, kept so the recipe\'s ARO_PERC block and the selection agree (tools/palette_check.js § 6). WHICH percussion instruments this piece uses is the composer\'s, at container 4; then tools/apply_perc.js rewrites the block.';
  banks['bank/perc_selection.json'] = j;
}
for (const p of Object.keys(banks)) if (fs.existsSync(path.join(ROOT, p))) die(p + ' exists already — refused');
// the recipe's ARO_PERC must still match the selection
const sel = banks['bank/perc_selection.json'].instruments.map(x => typeof x === 'string' ? { slug: x } : x), have = I.percussion.aroInstruments || [];
if (have.length !== sel.length) die('ARO_PERC carries ' + have.length + ' instruments, the selection ' + sel.length);

if (!DRY) {
  fs.writeFileSync(RP, text);
  for (const [p, j] of Object.entries(banks)) fs.writeFileSync(path.join(ROOT, p), JSON.stringify(j, null, 1) + '\n');
}
console.log((DRY ? 'DRY — nothing written. Would write ' : 'WRITTEN: ') + 'sandbox/instruments.js + ' + Object.keys(banks).join(' · '));
