#!/usr/bin/env node
// 3.4, the libraries — "none of his libraries come across; every library starts empty here" (his "a", RUNNING_LOG §7).
//
//   node tools/port/libraries34.js [--dry]
//
// The three files came from piece #6's COMMIT for the proof (3.2); here they are emptied to valid skeletons:
//   bank/morph_models.json     the engine's own models stay (BALANCE · COLOUR · BLOOM · CONVERGE · SPACING · SPECTRAL · TAKES —
//                              carried through pieces #4 · #5 · #6), their `actuals` lists emptied (the files are piece #6's and
//                              were left behind); piece #6's four own models (LG…, built on its reference chords) go.
//   bank/panel_snapshots.json  his takes, per panel — emptied. They stay in piece #6's repo; any one is fetched at his word.
//   bank/sequences.json        already empty at that commit — asserted, not touched.
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..'), DRY = process.argv.includes('--dry');
const rd = p => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const PROV = 'Skeleton written at the port from piece #6 (septet_LGMF_2026 @ 0d70fda), 2026-10-04 — the new-piece protocol\'s 3.4; the composer\'s word: none of his libraries come across. ';

const M = rd('bank/morph_models.json');
const KEEP = ['BALANCE', 'COLOUR', 'BLOOM', 'CONVERGE', 'SPACING', 'SPECTRAL', 'TAKES'], GONE = ['LGSPECTRAL', 'LGBALANCE', 'LGBLOOM', 'LGCONVERGE'];
const ids = Object.keys(M.models);
if (ids.slice().sort().join() !== KEEP.concat(GONE).sort().join()) throw new Error('morph_models: the models are not the eleven expected: ' + ids.join(' '));
let dropped = 0;
for (const id of GONE) delete M.models[id];
for (const id of KEEP) { dropped += (M.models[id].actuals || []).length; M.models[id].actuals = []; }
M._provenance = PROV + 'Kept: the engine\'s seven models (' + KEEP.join(' · ') + '). Dropped: piece #6\'s own four (' + GONE.join(' · ') + ') and ' + dropped +
  ' actual ids the kept models listed — the actuals are piece #6\'s files and stayed there. `rev` is piece #6\'s, kept.';

const P = rd('bank/panel_snapshots.json');
const panels = Object.keys(P.panels || {});
const P2 = { _version: P._version, _contract: P._contract, _provenance: PROV + 'EMPTY: piece #6\'s takes (' + panels.length + ' panels: ' + panels.join(' · ') + ') stayed in its repo.', panels: {} };
if (P2._version == null || !P2._contract) throw new Error('panel_snapshots: no _version / _contract to keep');

const S = rd('bank/sequences.json');
if (Object.keys(S.panels || {}).length) throw new Error('sequences.json is not empty at the copy');

if (!DRY) {
  fs.writeFileSync(path.join(ROOT, 'bank/morph_models.json'), JSON.stringify(M, null, 1) + '\n');
  fs.writeFileSync(path.join(ROOT, 'bank/panel_snapshots.json'), JSON.stringify(P2, null, 1) + '\n');
}
console.log((DRY ? 'DRY: ' : 'WRITTEN: ') + 'morph_models — ' + KEEP.length + ' models kept, ' + GONE.length + ' dropped, ' + dropped + ' actual ids cleared · panel_snapshots — ' + panels.length + ' panels emptied · sequences — already empty');
