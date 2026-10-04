#!/usr/bin/env node
// 3.3 THE RE-PALETTE — piece #6's eight lanes turned to the Decibel piece's six (journal D9, 2026-10-04).
//
//   node tools/port/repalette33.js            → checks every edit, then writes
//   node tools/port/repalette33.js --dry      → checks only
//
// ONE script. Every edit is applied to an in-memory copy and its match count ASSERTED; nothing is written unless every
// edit of every file held. Each search and each replacement is translated to its file's OWN line ending (never the file to
// the script's); a file with mixed endings is refused. Replacement goes through split / join and slices — never
// String.replace(a, b), whose `b` reads `$'` as a pattern (RUNNING_LOG §12).
//
// What it turns (PLAN § 0.3, THE COUPLING):
//   kind A — the composer page (title · lane CSS · lane <div>s · the track <select> · TRACKS · the META and curve layers ·
//            layoutVersion 8 · the session default · the abbreviation map), the ports (5500 / 5000), the names, the guard
//   kind B — the per-instrument tables in the app's modules
// Not here: the recipes and the skeleton banks (3.4 — tools/port/recipes34.js) · the notation registry (container 6).
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const DRY = process.argv.includes('--dry');

const files = {};
function load(p) {
  if (files[p]) return files[p];
  const b = fs.readFileSync(path.join(ROOT, p));
  let crlf = 0, lf = 0;
  for (let i = 0; i < b.length; i++) if (b[i] === 10) { if (b[i - 1] === 13) crlf++; else lf++; }
  if (crlf && lf) throw new Error(p + ': MIXED line endings (' + crlf + ' CRLF, ' + lf + ' LF) — refused');
  return (files[p] = { text: b.toString('utf8'), crlf: crlf > 0, edits: 0 });
}
const eol = (f, s) => f.crlf ? s.split('\r\n').join('\n').split('\n').join('\r\n') : s;
const count = (t, a) => t.split(a).length - 1;
// swap: `a` occurs exactly n times → every one becomes `b`
function swap(p, a, b, n) {
  n = n || 1; const f = load(p), A = eol(f, a), B = eol(f, b), c = count(f.text, A);
  if (c !== n) throw new Error(p + ': expected ' + n + ' × ' + JSON.stringify(a.slice(0, 70)) + ', found ' + c);
  f.text = f.text.split(A).join(B); f.edits += n;
}
// range: from the start of `a` (once) to the END of `z` (once, after `a`) — or to its START when `upTo` — becomes `b`
function range(p, a, z, b, upTo) {
  const f = load(p), A = eol(f, a), Z = eol(f, z), B = eol(f, b);
  if (count(f.text, A) !== 1) throw new Error(p + ': range start not found once: ' + JSON.stringify(a.slice(0, 70)));
  const i = f.text.indexOf(A), j = f.text.indexOf(Z, i + A.length);
  if (j < 0 || count(f.text.slice(i), Z) !== 1) throw new Error(p + ': range end not found once after its start: ' + JSON.stringify(z.slice(0, 70)));
  f.text = f.text.slice(0, i) + B + f.text.slice(upTo ? j : j + Z.length); f.edits++;
}
function whole(p, mustContain, b) {
  const f = load(p); if (count(f.text, mustContain) < 1) throw new Error(p + ': not the file expected (no ' + mustContain + ')');
  f.text = eol(f, b); f.edits++;
}

// ====================================================================== KIND A — the composer page
const CH = 'score/public/composer.html';
swap(CH, '<title>Composer Score — septet LGMF 2026</title>', '<title>Composer Score — decibel TENOR 2026</title>');
swap(CH, '(here Vibraphone, Cello, D. Bass;', '(here the pitched lane, Viola, Cello — in piece #6 Vibraphone, Cello, D. Bass;');
swap(CH, '#laneCurveA { top: 62.5%; height: 12.5%;', '#laneCurveA { top: 50%; height: 16.6667%;');
swap(CH, '#laneCurveB { top: 75%;   height: 12.5%;', '#laneCurveB { top: 66.6667%; height: 16.6667%;');
swap(CH, '#laneCurveC { top: 87.5%; height: 12.5%;', '#laneCurveC { top: 83.3333%; height: 16.6667%;');
range(CH, '    /* EIGHT instrument lanes', '.lane:nth-child(8) { top: 87.5%; height: 12.5%; }',
`    /* SIX instrument lanes — five players, the percussionist on two (Percussion + the pitched lane, D9); score order.
       The META draw window has its own rule. ONE RULE PER LANE: tools/palette_check.js § 7 holds the count against TRACKS
       (in piece #6 a lane without its rule fell on top of lane 1). */
    .lane:nth-child(1) { top: 0%      ; height: 16.6667%; }
    .lane:nth-child(2) { top: 16.6667%; height: 16.6667%; }
    .lane:nth-child(3) { top: 33.3333%; height: 16.6667%; }
    .lane:nth-child(4) { top: 50%     ; height: 16.6667%; }
    .lane:nth-child(5) { top: 66.6667%; height: 16.6667%; }
    .lane:nth-child(6) { top: 83.3333%; height: 16.6667%; }`);
const laneDiv = (n, title, label) =>
`    <div class="lane" id="lane${n}">
        <span class="laneLabel" title="${title}">${label}</span>
        <svg xmlns="http://www.w3.org/2000/svg"><g class="tickGroup"></g><g class="contentGroup"></g></svg>
    </div>
`;
range(CH, '    <!-- 8 composing tracks:', '    <div class="lane metaLane" id="laneMeta">',
`    <!-- 6 composing tracks: the Decibel ensemble in score order, top -> bottom (TRACKS below) — five players, the
         percussionist on two lanes (D9, 2026-10-04).
         THIS BLOCK AND \`TRACKS\` MUST STAY THE SAME LENGTH — init() maps lane1..laneN off TRACKS, and a missing element
         stops the whole app booting; the lane CSS needs ONE RULE PER LANE too (tools/palette_check.js § 7 holds both). -->
` + laneDiv(1, 'Bass flute', 'Bass Flute') + laneDiv(2, 'Bass clarinet', 'Bass Clar.')
  + laneDiv(3, 'Percussion — the unpitched instruments; the SAME player as the lane below (D9)', 'Percussion')
  + laneDiv(4, 'The pitched percussion lane — piece #6\'s bowed vibraphone, carried as the stand-in until the instruments are chosen (D9); the SAME player as Percussion', 'Vibraphone')
  + laneDiv(5, 'Viola', 'Viola') + laneDiv(6, 'Cello', 'Cello'), true);
range(CH, '        <option value="0" selected>Eng. Horn</option>', '        <option value="7">META</option>',
`        <option value="0" selected>Bass Flute</option>
        <option value="1">Bass Clar.</option>
        <option value="2">Percussion</option>
        <option value="3">Vibraphone</option>
        <option value="4">Viola</option>
        <option value="5">Cello</option>
        <option value="6">META</option>`);
swap(CH, 'title="Show/hide curve window A (over Percussion)"', 'title="Show/hide curve window A (over Vibraphone)"');
swap(CH, 'title="Show/hide curve window B (over Cello)"', 'title="Show/hide curve window B (over Viola)"');
swap(CH, 'title="Show/hide curve window C (over D. Bass)"', 'title="Show/hide curve window C (over Cello)"');
range(CH, '// Track identity: by instrument, not position', 'const CURVE_LAYERS = [9, 10, 11];',
`// Track identity: by instrument, not position (see docs/PROJECT_JOURNAL.md saving protocol)
// DECIBEL (2026-10-04, journal D2 · D9): five players on SIX lanes, score order top -> bottom — winds · percussion ·
// strings (#5's D10). \`instKey\` names the recipe in sandbox/instruments.js; \`short\` is the stage-picture label.
// The percussionist has TWO lanes (his word, D9): the unpitched instruments, and a pitched voice of its own.
// NO LANE FOR THE ELECTRONICS (D8): every electronic sound is drawn on the lane of the player it comes from.
const TRACKS = [
    { id: 'bass_flute',    label: 'Bass Flute', short: 'BFl',  instKey: 'bass_flute' },
    { id: 'bass_clarinet', label: 'Bass Clar.', short: 'BCl',  instKey: 'bass_clarinet' },
    { id: 'percussion',    label: 'Percussion', short: 'Perc', instKey: 'percussion' },
    // THE PITCHED PERCUSSION LANE — which instrument is his, at the instruments talk (container 4). Until then it is
    // piece #6's bowed vibraphone, carried whole (the lane id, the recipe key, the second seat), so that everything the
    // engine built on that key stays alive and tested. Same PLAYER as Percussion: two lanes, joined by a BRACE in the score.
    { id: 'vibraphone',    label: 'Vibraphone', short: 'Vib',  instKey: 'bowed_vibraphone' },
    { id: 'viola',         label: 'Viola',      short: 'Va',   instKey: 'viola' },
    { id: 'cello',         label: 'Cello',      short: 'Vc',   instKey: 'cello' },
];

// META drawing layer index (the floating draw window = lanes[META_LAYER]).
// DECIBEL layout (layoutVersion 8, 2026-10-04): SIX instrument lanes, so META = 6 and the curve windows are 7 / 8 / 9.
// Piece #6 (v7) had eight lanes, META = 8, curves 9 / 10 / 11; its v6 seven and META 7; piece #4 META = 10 (v2), its v1 7.
const META_LAYER = 6;
// The META window (6) is the gestures' shapes and the stamps — not the curve path (CN-23). The three CURVE windows
// A / B / C are layers 7 / 8 / 9 and float exactly over the last three lanes — the pitched lane, Viola and Cello
// (CN-24, TRILLS_TOOL §3b). Contract (NAMING §2.2): layers >= tracks.length are the META side — 6 META, 7–9 the
// reference curves (waveCurve with curveName) and their pending dots (curveDot).
const META_LAYERS = [6];
const META_NAMES = { 6: 'META' };
const META_COLORS = { 6: '#2E8B57' };
const CURVE_LAYERS = [7, 8, 9];`);
swap(CH, "const CURVE_NAMES = { 9: 'A', 10: 'B', 11: 'C' };", "const CURVE_NAMES = { 7: 'A', 8: 'B', 9: 'C' };");
swap(CH, "const CURVE_COLORS = { 9: '#C2410C', 10: '#1D6FA5', 11: '#6D3B9E' };", "const CURVE_COLORS = { 7: '#C2410C', 8: '#1D6FA5', 9: '#6D3B9E' };");
swap(CH, 'const CURVE_OVER = { 9: 5, 10: 6, 11: 7 };   // the lane each window sits on: Vibraphone, Cello, D. Bass',
         'const CURVE_OVER = { 7: 3, 8: 4, 9: 5 };   // the lane each window sits on: the pitched lane (Vibraphone), Viola, Cello');
swap(CH, 'layoutVersion: 7,   // LGMF: 8 instrument lanes',
         'layoutVersion: 8,   // DECIBEL (2026-10-04, D9): 6 instrument lanes (BFl · BCl · Perc · Vib · Va · Vc), META = 6, the curve windows A / B / C = 7 / 8 / 9. v7 was piece #6 — LGMF: 8 instrument lanes');
swap(CH, "'lgmf'", "'decibel'", 5);
swap(CH, 'id="sessionName" value="lgmf"', 'id="sessionName" value="decibel"');
swap(CH, "const ab = { english_horn: 'eh', bassoon: 'bsn', horn: 'hn', trumpet: 'tpt', percussion: 'perc', cello: 'vc', double_bass: 'db' };",
         "const ab = { bass_flute: 'bfl', bass_clarinet: 'bcl', percussion: 'perc', viola: 'va', cello: 'vc' };");
// a layer NUMBER left from when curve A was layer 8 (piece #5): in piece #6 it named the META layer and did nothing; with
// the curves on 7 / 8 / 9 it would open curve B. The intent — "Points on and no curve window open → open the first".
swap(CH, 'this.openCurveWin(8);', 'this.openCurveWin(CURVE_LAYERS[0]);');

// ====================================================================== KIND B — the per-instrument tables
const P = 'score/public/';
swap(P + 'beating_calc.js', "const ORDER = ['english_horn', 'bassoon', 'horn', 'trumpet', 'percussion', 'bowed_vibraphone', 'cello', 'double_bass'];   // score order (P3); the vibraphone took lane 5 on 2026-09-18 (D12)",
     "const ORDER = ['bass_flute', 'bass_clarinet', 'percussion', 'bowed_vibraphone', 'viola', 'cello'];   // score order (#5's D10); Decibel's six lanes (D9, 2026-10-04)");
swap(P + 'beating_calc.js',
`    english_horn: { breathS: 18, gapS: 0.75 }, bassoon: { breathS: 18, gapS: 0.75 },
    horn: { breathS: 15, gapS: 0.75 }, trumpet: { breathS: 12, gapS: 0.75 },
    cello: { bowS: 15, gapS: 0 }, double_bass: { bowS: 10, gapS: 0 },`,
`    // PROVISIONAL for the Decibel winds and the viola (the port, 2026-10-04) — not measured: piece #5's bass clarinet was
    // 10 s and its viola 12 s; the bass flute is the shortest breath of the five. Container 5 measures them.
    bass_flute: { breathS: 8, gapS: 0.75 }, bass_clarinet: { breathS: 12, gapS: 0.75 },
    viola: { bowS: 12, gapS: 0 }, cello: { bowS: 15, gapS: 0 },`);
const OLD_COL = "{ english_horn: '#ffd479', bassoon: '#e0a86a', horn: '#8ea9c9', trumpet: '#69b7c9', percussion: '#b0b0b8', cello: '#7ec9a8', double_bass: '#5fae8c' }";
const NEW_COL = "{ bass_flute: '#ffd479', bass_clarinet: '#e0a86a', percussion: '#b0b0b8', viola: '#7ec9a8', cello: '#5fae8c' }";
swap(P + 'beating_panel.js', 'const INST_COL = ' + OLD_COL + ';   // one hue-family per PAIR: double reeds gold · brass blue · strings green · percussion neutral',
     'const INST_COL = ' + NEW_COL + ';   // one hue-family per PAIR: the winds gold · the strings green · percussion neutral');
swap(P + 'strike_chords_ui.js', 'const INST_COL = ' + OLD_COL + ';', 'const INST_COL = ' + NEW_COL + ';');
swap(P + 'fill_ui.js', 'const COL = ' + OLD_COL + ';', 'const COL = ' + NEW_COL + ';');
const OLD_SD = "const STRIKE_DEFAULT = { english_horn: 'secco', bassoon: 'ord', horn: 'ord', trumpet: 'ord', percussion: 'main', cello: 'gettato_vel', double_bass: 'bartok_vel' };";
const NEW_SD = "const STRIKE_DEFAULT = { bass_flute: 'ord', bass_clarinet: 'ord', percussion: 'main', viola: 'gettato_vel', cello: 'gettato_vel' };";
swap(P + 'cresc_card.js', OLD_SD, NEW_SD);
swap(P + 'strike_drawer.js', OLD_SD, NEW_SD);
swap(P + 'strike_drawer.js', "const OPEN_STRINGS = { cello: [36, 43, 50, 57], double_bass: [28, 33, 38, 43] };   // SOUNDING pitch; the bass sounds an octave below its written part",
     "const OPEN_STRINGS = { viola: [48, 55, 62, 69], cello: [36, 43, 50, 57] };   // SOUNDING pitch");
swap(P + 'strike_drawer.js', "    spiccato: { english_horn: 'stac_vel', bassoon: 'staccato', horn: 'staccato', trumpet: 'staccato', percussion: 'main', cello: 'spicc_vel', double_bass: 'spicc_vel' },",
     "    spiccato: { bass_flute: 'ord', bass_clarinet: 'ord', percussion: 'main', viola: 'spicc_vel', cello: 'spicc_vel' },   // the winds' short voices come with their recipes (container 4)");
swap(P + 'strike_drawer.js', "    staccato: { english_horn: 'stac_vel', bassoon: 'staccato', horn: 'staccato', trumpet: 'staccato', percussion: 'main', cello: 'stac_vel', double_bass: 'stac_vel' },",
     "    staccato: { bass_flute: 'ord', bass_clarinet: 'ord', percussion: 'main', viola: 'stac_vel', cello: 'stac_vel' },");
swap(P + 'strike_drawer.js', "    ordinario: { english_horn: 'senza_vel', bassoon: 'ord', horn: 'ord', trumpet: 'ord', percussion: 'main', bowed_vibraphone: 'bowed_vel', cello: 'senza_vel', double_bass: 'senza_vel' },",
     "    ordinario: { bass_flute: 'ord', bass_clarinet: 'ord', percussion: 'main', bowed_vibraphone: 'bowed_vel', viola: 'senza_vel', cello: 'senza_vel' },");
swap(P + 'trill_engine.js', "const STAND_IN = { english_horn: 'cello', bassoon: 'cello', horn: 'cello', trumpet: 'cello', percussion: 'cello', double_bass: 'cello' };",
     "const STAND_IN = { bass_flute: 'cello', bass_clarinet: 'cello', percussion: 'cello' };   // the viola has its own rows in the bank (piece #5's)");
swap(P + 'chord_run.js', "const alias = { eh: 'english_horn', enghorn: 'english_horn', cor: 'english_horn', bsn: 'bassoon', fag: 'bassoon', hn: 'horn', tpt: 'trumpet', tr: 'trumpet', perc: 'percussion', vc: 'cello', db: 'double_bass', bass: 'double_bass', cb: 'double_bass' }[w];",
     "const alias = { bfl: 'bass_flute', fl: 'bass_flute', flute: 'bass_flute', bcl: 'bass_clarinet', cl: 'bass_clarinet', clar: 'bass_clarinet', perc: 'percussion', va: 'viola', vla: 'viola', vc: 'cello' }[w];");
swap(P + 'texture_panel.js', "const ART_DEFAULT = { english_horn: 'stac_vel', bassoon: 'staccato', horn: 'staccato', trumpet: 'staccato', cello: 'spicc_vel', double_bass: 'spicc_vel' };",
     "const ART_DEFAULT = { bass_flute: 'ord', bass_clarinet: 'ord', viola: 'spicc_vel', cello: 'spicc_vel' };");
swap(P + 'rhythm_seq_ui.js', '{ english_horn: 0, bassoon: 0, horn: 1, trumpet: 1, percussion: 2, bowed_vibraphone: 2, cello: 3, double_bass: 3 }',
     '{ bass_flute: 0, bass_clarinet: 0, percussion: 1, bowed_vibraphone: 1, viola: 2, cello: 2 }', 2);

// ====================================================================== the ports, the names, the guard
swap('score/server.js', '5400', '5500', 6);
swap('score/server.js', 'Composer score (septet LGMF 2026)', 'Composer score (decibel TENOR 2026)');
swap('score/server.js', "'lgmf-refresh-'", "'decibel-refresh-'");
swap('sandbox/serve.js', '4900', '5000', 2);
swap('start_score_server.bat', 'http://localhost:5400', 'http://localhost:5500', 2);
swap('start_score_server.bat', 'cd /d C:\\Users\\jwloy\\GitHub\\septet_LGMF_2026', 'cd /d C:\\Users\\jwloy\\GitHub\\decibel_TENOR_2026');
whole('.claude/launch.json', '"tempus-5300"',
`{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "score",
      "runtimeExecutable": "node",
      "runtimeArgs": ["score/server.js"],
      "port": 5500
    },
    {
      "name": "sandbox",
      "runtimeExecutable": "node",
      "runtimeArgs": ["sandbox/serve.js"],
      "port": 5000
    },
    {
      "name": "score-5501",
      "runtimeExecutable": "powershell",
      "runtimeArgs": ["-NoProfile", "-Command", "$env:PORT=5501; node score/server.js"],
      "port": 5501
    }
  ]
}
`);
swap('package.json', '"name": "septet-lgmf-2026"', '"name": "decibel-tenor-2026"');
swap('package.json', '"description": "The Lake George septet (2026). Composer score app, sandbox, notation engine, print and video exporters."',
     '"description": "The Decibel piece (TENOR 2026). Composer score app, sandbox, notation engine, print and video exporters."');
swap('package-lock.json', '"name": "septet-2026"', '"name": "decibel-tenor-2026"', 2);
swap('tools/reaper_job.js', 'lgmf_rack', 'decibel_rack', 2);
swap('tools/render_reaper.js', 'lgmf_rack', 'decibel_rack', 4);
swap('tools/export_midi.js', "arg('rack', 'reaper/LGMF_rack.rpp')", "arg('rack', 'reaper/decibel_rack.rpp')");
swap('tools/export_midi.js', '[--rack reaper/lgmf_rack.rpp]', '[--rack reaper/decibel_rack.rpp]');
swap('tools/export_midi.js', 'http://localhost:5400', 'http://localhost:5500', 2);
swap('tools/capture_composer_midi.js', 'http://localhost:5400', 'http://localhost:5500', 3);
swap(P + 'morph_emit.js', 'localhost:5400', 'localhost:5500');
swap(P + 'rhythm_seq_ui.js', "'lgmf.rhythmSequence.v1'", "'decibel.rhythmSequence.v1'");
swap(P + 'sequence_ui.js', "'lgmf.sequenceDrawer.v1'", "'decibel.sequenceDrawer.v1'");
swap(P + 'texture_row.js', "'lgmf.textureRow.v1'", "'decibel.textureRow.v1'");
swap(P + 'vibes_pitch.js', "'lgmf.vibesPitch.v1'", "'decibel.vibesPitch.v1'");

// ====================================================================== every count held — write
let n = 0, e = 0;
for (const [p, f] of Object.entries(files)) { n++; e += f.edits; if (!DRY) fs.writeFileSync(path.join(ROOT, p), f.text); console.log((DRY ? '  would write ' : '  wrote ') + p.padEnd(40) + String(f.edits).padStart(3) + ' edit(s)' + (f.crlf ? '  CRLF' : '  LF')); }
console.log((DRY ? 'DRY — nothing written: ' : 'RE-PALETTE WRITTEN: ') + n + ' files, ' + e + ' edits, every match count asserted');
