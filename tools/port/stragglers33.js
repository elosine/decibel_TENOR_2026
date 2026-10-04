#!/usr/bin/env node
// 3.3 THE STRAGGLER AUDIT — what the re-palette's first pass (tools/port/repalette33.js) left of piece #6's names.
//
//   node tools/port/stragglers33.js [--dry]
//
// The rule (the protocol's 3.3): a DEFAULT ARGUMENT or a WRITE GUARD is a parameter and becomes this piece's name; a test
// FIXTURE stays and goes to NITS; a coincidence is left. Every count is asserted per file before a byte is written.
//
//   1. A REPO PATH written into a script is the worst kind: five bridge / Kontakt jobs and one test still named piece
//      #6's folder — the jobs would have WRITTEN there, the test READ there (its green at 3.2 was piece #6's, not the copy's).
//   2. `piece-lgmf` as a default --ir / --score, and as the guard "refusing to write the piece file" → `piece-decibel`.
//      Left: the two checks that are piece #6's own locks (eh_figure_check · vib_marks_check — fixtures, NITS) and the
//      comments in notation/lib and the rules that cite its pages.
//   3. `piece: 'lgmf'` stamped by the calibration's writers into what they generate → 'decibel'.
//   4. The percussion's default port in tools/apply_perc.js.
// Not here: the `LG…` port names inside the bridge's jobs (the rack's tracks are made at container 4, behind the project
// guard, which is `decibel_rack` since the first pass) · the notation registry (container 6).
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const DRY = process.argv.includes('--dry');
const files = {};
function load(p) {
  if (files[p]) return files[p];
  const b = fs.readFileSync(path.join(ROOT, p));
  return (files[p] = { text: b.toString('utf8'), edits: 0 });
}
function swap(p, a, b, n) {   // single-line strings only — no line ending is ever inside a or b
  if (/[\r\n]/.test(a + b)) throw new Error('a multi-line swap does not belong in this script');
  const f = load(p), c = f.text.split(a).length - 1;
  if (c !== n) throw new Error(p + ': expected ' + n + ' × ' + JSON.stringify(a) + ', found ' + c);
  f.text = f.text.split(a).join(b); f.edits += n;
}

// 1. the repo path
const OLD = 'C:/Users/jwloy/GitHub/septet_LGMF_2026', NEW = 'C:/Users/jwloy/GitHub/decibel_TENOR_2026';
for (const p of ['reaper/bridge/jobs/clip_watch.lua', 'reaper/bridge/jobs/rec_mode_restore.lua', 'reaper/bridge/jobs/rec_mode_solo.lua',
                 'reaper/bridge/jobs/ref_track.lua', 'reaper/kontakt/curve_slots.lua']) swap(p, OLD, NEW, 1);
swap('tools/test_written_pitch.js', "const ROOT = 'C:/Users/jwloy/GitHub/septet_LGMF_2026';", "const ROOT = require('path').join(__dirname, '..');   // was piece #6's folder, written in full — the test read THAT repo (found at the port, 2026-10-04)", 1);

// 2. piece-lgmf → piece-decibel: the defaults and the write guards
const PL = { 'tools/capture_composer_midi.js': 3, 'tools/capture_lane.js': 2, 'tools/cc7_ramp_test.js': 1, 'tools/cresc_test.js': 1,
  'tools/piano_cues.js': 1, 'tools/piano_harmonics.js': 1, 'tools/export_midi.js': 2, 'tools/gen_m2_chart.js': 3, 'tools/gen_morph_chart.js': 2,
  'tools/render_reaper.js': 2, 'tools/tempo_fit.js': 2, 'tools/trill_conflicts.js': 2, 'tools/test_identity.js': 2, 'tools/print_look.js': 2,
  'tools/range_check.js': 1, 'tools/reextract.js': 3, 'print/score/build.sh': 2, 'tools/check_print_edges.js': 2, 'tools/check_print_frame.js': 2,
  'tools/check_print_front.js': 2, 'tools/check_print_pages.js': 2, 'tools/check_screen_edges.js': 2 };
for (const [p, n] of Object.entries(PL)) swap(p, 'piece-lgmf', 'piece-decibel', n);
swap('tools/reextract.js', "process.env.SCORE || 'piece-Recombination-Draft01-done'", "process.env.SCORE || 'piece-decibel'", 1);

// 3. the piece stamped into generated files
for (const p of ['tools/balance_schedule.js', 'tools/build_fine_schedule.js', 'tools/build_register_schedule.js', 'tools/build_remap.js',
                 'tools/build_remap_card.js', 'tools/card2_schedule.js', 'tools/card_schedule.js', 'tools/compute_trims.js']) swap(p, "piece: 'lgmf'", "piece: 'decibel'", 1);
for (const p of ['probes/analyze_1b5.py', 'probes/analyze_card.py', 'probes/analyze_reference.py']) swap(p, "'piece': 'lgmf'", "'piece': 'decibel'", 1);
swap('probes/analyze_lgmf_balance.py', "piece='lgmf'", "piece='decibel'", 1);

// 4. the percussion's default port
swap('tools/apply_perc.js', "SEL.port || 'LGPerc'", "SEL.port || 'DECPerc'", 1);

let n = 0, e = 0;
for (const [p, f] of Object.entries(files)) { if (!f.edits) continue; n++; e += f.edits; if (!DRY) fs.writeFileSync(path.join(ROOT, p), f.text); }
console.log((DRY ? 'DRY — nothing written: ' : 'STRAGGLERS WRITTEN: ') + n + ' files, ' + e + ' edits, every count asserted');
