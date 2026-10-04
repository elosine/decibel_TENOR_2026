// 3.0 the survey — classify every file tracked at piece #6's HEAD into COPY or LEAVE, with a reason.
// Reads src_ls.txt ("<size> <path>" per line, from `git ls-tree -r -l HEAD`); writes copy_list.txt, leave_list.txt.
'use strict';
const fs = require('fs'), path = require('path');
const SP = __dirname;
const rows = fs.readFileSync(path.join(SP, 'src_ls.txt'), 'utf8').split(/\r?\n/).filter(Boolean)
  .map(l => { const m = l.match(/^\s*(\d+) (.+)$/); return { size: +m[1], p: m[2] }; });

const RETIRED = ['test_coords', 'cresc_check', 'test_extract_played', 'ir_extract_golden', 'test_notate_block', 'test_playability', 'test_midiplayer', 'test_sonify_core'];
const RETIRED_FIX = ['cloud02d-collapse.json', 'cloud02i-preamend.json', 'coords_snapshot.json', 'extract_played_snapshot.json'];
const BANK_MODELS = ['morph_models', 'morph_params', 'morph_pitches', 'morph_recipes', 'shape_presets', 'texture_models', 'texture_params',
  'pulse_palette', 'blast_taxonomy', 'cluster_bank', 'harmonies', 'ostinato_timing_db_2p2p', 'trill_timing_db', 'panel_snapshots', 'sequences',
  'aro_percussion_catalog'];
const TOOL_DOCS = ['BEATING_TOOL', 'CRESCENDO', 'CURVE_LOOK', 'DYNAMICS_LAW', 'ENGRAVING_RULES', 'GLYPH_SIZING', 'NAMING', 'NOTATION_IDENTITY',
  'NOTATION_STANDARDS', 'NOTATION_WORKFLOW', 'PANEL_CAPTURES', 'RACK_SETTINGS', 'REAPER_CONTROL', 'RENDER', 'SAMPLER_QUIRKS', 'SEQUENCE_TOOL',
  'STRIKES_TOOL', 'TRILLS_TOOL', 'TRILL_NOTATION_SPEC'];
const KIT_DOCS = ['AI_METHODOLOGY', 'HOW_WE_WORK', 'MORPH_NOTES', 'PLANNING_METHOD', 'SESSION_HYGIENE', 'SESSION_PROTOCOL'];

function verdict(p) {
  const top = p.includes('/') ? p.split('/')[0] : '(root)';
  const base = p.split('/').pop();
  if (top === '(root)') {
    if (['package.json', 'package-lock.json', 'start_score_server.bat'].includes(p)) return ['COPY', 'root: the app\'s package and launcher'];
    return ['LEAVE', 'root: this repo has its own (the kit)'];
  }
  if (top === '.claude') return p === '.claude/launch.json' ? ['COPY', 'launch.json (inert until 3.3)'] : ['LEAVE', 'the project commands are in the kit'];
  if (top === 'bank') {
    if (p.startsWith('bank/actuals/')) return ['LEAVE', 'piece data: the actuals'];
    if (p.startsWith('bank/aro_states/')) return ['LEAVE', 'the rack as text (container 4)'];
    if (p === 'bank/passages/README.md') return ['COPY', 'bank: models, presets, libraries (HEAD)'];
    if (BANK_MODELS.includes(base.replace(/\.json$/, ''))) return ['COPY', 'bank: models, presets, libraries (HEAD)'];
    return ['LEAVE', 'measurement / calibration banks (staged 3.2, skeleton 3.4)'];
  }
  if (top === 'docs') {
    const stem = base.replace(/\.md$/, '');
    if (p === 'docs/instrument_map.json') return ['COPY', 'docs: the app fetches it on load (H-8 corrected)'];
    if (!p.slice(5).includes('/') && TOOL_DOCS.includes(stem)) return ['COPY', 'docs: the tool docs that travel with the code'];
    if (!p.slice(5).includes('/') && KIT_DOCS.includes(stem)) return ['LEAVE', 'docs: in the kit already'];
    if (p.startsWith('docs/notation_instructions/')) return ['LEAVE', 'docs: the instructions page (container 8)'];
    return ['LEAVE', 'docs: piece #6\'s own records'];
  }
  if (top === 'midi') return ['LEAVE', 'piece data: exported MIDI'];
  if (top === 'scores') return ['LEAVE', 'piece data: the scores'];
  if (top === 'notation') {
    if (p.startsWith('notation/ir/')) return ['LEAVE', 'piece data: the IR pages (README rewritten at 6)'];
    if (p.startsWith('notation/research/')) return ['LEAVE', 'piece data: research pages'];
    if (p.startsWith('notation/video/')) return ['LEAVE', 'piece data: the film\'s cut lists'];
    return ['COPY', 'notation: the engine'];
  }
  if (top === 'print') {
    if (p === 'print/cover/cover-a3-landscape.svg' || p.startsWith('print/score/approved/')) return ['LEAVE', 'piece data: the printed cover and the approved print'];
    return ['COPY', 'print: the pipeline and its templates'];
  }
  if (top === 'probes') {
    if (/\.(ps1|py)$/.test(base) || base === 'cc7_map.json') return ['COPY', 'probes: senders, analyzers, self-tests'];
    return ['LEAVE', 'probes: generated schedules and run outputs'];
  }
  if (top === 'reaper') {
    if (p.startsWith('reaper/bridge/') || p.startsWith('reaper/kontakt/')) return ['COPY', 'reaper: the bridge and the Kontakt scripts'];
    return ['LEAVE', 'piece data: the rack and its placed MIDI'];
  }
  if (top === 'sandbox') return ['COPY', 'sandbox'];
  if (top === 'score') {
    if (/^score\/public\/(clusterview|chordview)\.html$/.test(p)) return ['LEAVE', 'H-8: dead viewers'];
    return ['COPY', 'score: the composer app'];
  }
  if (top === 'tools') {
    if (RETIRED.includes(base.replace(/\.js$/, '')) && !p.includes('/fixtures/')) return ['LEAVE', 'H-7: batteries red in the source too'];
    if (p.startsWith('tools/fixtures/') && RETIRED_FIX.includes(base)) return ['LEAVE', 'H-7: fixtures of the retired batteries'];
    return ['COPY', 'tools'];
  }
  return ['?', 'UNCLASSIFIED'];
}

const out = { COPY: [], LEAVE: [], '?': [] };
const by = {};
for (const r of rows) {
  const [v, why] = verdict(r.p);
  out[v].push(r.p);
  const k = v + ' | ' + why;
  (by[k] = by[k] || { n: 0, s: 0 }).n++; by[k].s += r.size;
}
fs.writeFileSync(path.join(SP, 'copy_list.txt'), out.COPY.join('\n') + '\n');
fs.writeFileSync(path.join(SP, 'leave_list.txt'), out.LEAVE.join('\n') + '\n');
const tot = v => Object.keys(by).filter(k => k.startsWith(v + ' ')).reduce((a, k) => ({ n: a.n + by[k].n, s: a.s + by[k].s }), { n: 0, s: 0 });
for (const k of Object.keys(by).sort()) console.log(k.padEnd(78) + String(by[k].n).padStart(4) + ' files ' + (by[k].s / 1024).toFixed(0).padStart(7) + ' KB');
for (const v of ['COPY', 'LEAVE', '?']) { const t = tot(v); console.log(('TOTAL ' + v).padEnd(78) + String(t.n).padStart(4) + ' files ' + (t.s / 1024).toFixed(0).padStart(7) + ' KB'); }
console.log('rows ' + rows.length);
