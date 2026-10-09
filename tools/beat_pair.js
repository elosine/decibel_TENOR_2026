#!/usr/bin/env node
// beat_pair.js — ONE BEATING PAIR INTO A SCORE, FROM HIS DICTATION (RUNNING_LOG §265 … §268; DEC-60 · 61): a player's long note
// and a STATIC SINE BRICK over it at the same pitch, the note BENT so that the pair beats as he says — in BEATS A SECOND (Hz),
// turned into cents at the note's own pitch. His words: *"Let's start over … just give me one note"* — the beating section built
// up by hand, one pair at a time, the data points kept ON the objects (properties.beat) until the algorithm is worked out.
//
//   node tools/beat_pair.js --score sec04-a-beating --pitch D2 --from 12 --to 2
//        [--lane cello] [--start s | --gap 4,7] [--dur 16,25] [--at 0.667] [--side over|under] [--sine fff] [--note p] [--dry]
//     --pitch   a note name (D2 · D#2 · Eb2) or a MIDI key
//     --from · --to   the beating at the note's START and at its DESTINATION, beats a second (0 = the unison)
//     --at      the fraction of the note at which the destination is reached; held from there to the end (his two thirds)
//     --start   where the note begins, seconds — or --gap lo,hi: ROLLED after the end of the last object on that lane
//     --dur     lo,hi: the length ROLLED in that range (or one number)
//     --side    the player over (sharp of) the sine, or under — over by default (under a low cello note is below its C string)
//     --sine · --note   the written dynamics: the sine brick's mark, the player's note
//     --vel     the note's velocity outright; without it the note is AS LOUD AS HIS LAST NOTE ON THE LANE (the sound he judged),
//               and only on an empty lane the ladder's velocity for --note
// The note is the lane's long-tone voice (bank/sine_behaviours.json), DRAWN (its own curve channel), its struck sound kept
// (velAbs · cc7Abs — the GO's rule). A bend past the sampler's measured range is RE-KEYED — the string quartet's rule,
// score/public/sine_go.js rekeyChain: a chain of notes, the key moved, the bend re-based, 5 ms overlaps. The note and its segments
// carry properties.sine as the GO writes it (∿ off makes one plain note again); the brick carries properties.beat — what was
// dictated and what was rolled. The sine brick: flat, no gliss, Follow off (it sounds for its whole span).
// THE PAGE: the base is the NEWER of the save and the page's working copy (his unsaved edits kept); the result is written as the
// save — File ▾ → Reload shows it. THE SORTING: the piece's (his score, his dictation).
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const SineSim = require(path.join(ROOT, 'score', 'public', 'sine_sim.js')), SineGo = require(path.join(ROOT, 'score', 'public', 'sine_go.js'));
const TextureDyn = require(path.join(ROOT, 'score', 'public', 'texture_dyn.js'));
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i >= 0 && process.argv[i + 1] != null ? process.argv[i + 1] : d; };
const has = (k) => process.argv.includes('--' + k);
const die = (m, c) => { console.error(m); process.exit(c || 2); };
const r1 = (x) => Math.round(x * 10) / 10, r3 = (x) => Math.round(x * 1000) / 1000;
const MARKS = ['ppp', 'pp', 'p', 'mp', 'mf', 'f', 'ff', 'fff'];
const range = (t, what) => { const a = String(t).split(',').map(Number); if (a.some((x) => !Number.isFinite(x)) || a.length > 2) die('--' + what + ' wants a number or lo,hi'); return a.length === 1 ? [a[0], a[0]] : a; };
const roll = (r) => r1(r[0] + Math.random() * (r[1] - r[0]));
const keyOf = (t) => { if (Number.isFinite(+t)) return Math.round(+t); const m = /^([A-Ga-g])([#b]?)(-?\d)$/.exec(String(t).trim()); if (!m) die('--pitch: a note name (D2 · D#2 · Eb2) or a MIDI key'); return { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1].toUpperCase()] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0) + 12 * (+m[3] + 1); };

const name = arg('score'); if (!name) die('--score <name>');
const file = path.join(ROOT, 'scores', name + '.json'), work = path.join(ROOT, 'scores', name + '-work.json');
if (!fs.existsSync(file)) die('no such score: scores/' + name + '.json');
const INSTRUMENTS = vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'sandbox', 'instruments.js'), 'utf8') + '\n;INSTRUMENTS;', {});
const TRACKS = vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'score', 'public', 'composer.html'), 'utf8').match(/const TRACKS = (\[[\s\S]*?\]);/)[1], {});
const REMAP = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'velocity_remap.json'), 'utf8'));
const LANES = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'sine_behaviours.json'), 'utf8')).lanes;

const laneArg = String(arg('lane', 'cello')).toLowerCase();
const lane = TRACKS.findIndex((t, k) => [String(k), t.id, t.short, t.label, t.instKey].some((x) => String(x || '').toLowerCase() === laneArg));
if (lane < 0) die('--lane: none of ' + TRACKS.map((t) => t.short || t.id).join(', '));
const instKey = TRACKS[lane].instKey, inst = INSTRUMENTS[instKey], L = LANES[instKey];
if (!inst || !L) die('the lane ' + laneArg + ' has no part in the sines (bank/sine_behaviours.json)');
const tech = inst.techniques.find((t) => t.key === L.voice), lo = tech.rangeLow != null ? tech.rangeLow : inst.rangeLow, hi = tech.rangeHigh != null ? tech.rangeHigh : inst.rangeHigh;
const midi = keyOf(arg('pitch') != null ? arg('pitch') : die('--pitch'));
if (midi < lo || midi > hi) die(SineGo.pn(midi) + ' is outside ' + L.voice + ' (' + SineGo.pn(lo) + ' … ' + SineGo.pn(hi) + ')');
const fromHz = +arg('from', 0), toHz = +arg('to', 0), at = Math.max(0.05, Math.min(1, +arg('at', 2 / 3)));
if (!(fromHz >= 0) || !(toHz >= 0)) die('--from and --to: beats a second, 0 or more');
const sign = arg('side', 'over') === 'under' ? -1 : 1;
const sineMark = arg('sine', 'fff'), noteMark = arg('note', 'p');
if (!MARKS.includes(sineMark) || !MARKS.includes(noteMark)) die('--sine and --note: one of ' + MARKS.join(' '));

// the base: the newer of the save and the page's working copy — his unsaved edits are kept
const useWork = fs.existsSync(work) && fs.statSync(work).mtimeMs > fs.statSync(file).mtimeMs;
const s = JSON.parse(fs.readFileSync(useWork ? work : file, 'utf8'));
const endOf = (o) => (o.endTime != null ? o.endTime : o.endSeconds);
const lastEnd = Math.max(0, ...s.objects.filter((o) => o.layer === lane).map(endOf));
const gap = arg('start') != null ? null : roll(range(arg('gap', '4,7'), 'gap'));
const start = r3(arg('start') != null ? +arg('start') : lastEnd + gap), len = roll(range(arg('dur', '16,25'), 'dur')), end = r3(start + len);

// the bend: from → to in beats a second, as cents at this pitch; there at `at`, held
const c0 = fromHz ? r1(SineSim.centsFor(midi, fromHz, sign)) : 0, c1 = toHz ? r1(SineSim.centsFor(midi, toHz, sign)) : 0, tAt = r3(len * at);
const bend = at >= 1 ? [[0, c0], [len, c1]] : [[0, c0], [tAt, c1], [len, c1]];
const far = Math.max(Math.abs(c0), Math.abs(c1));
if (far > 100 * (inst.playerBendSt != null ? inst.playerBendSt : 1)) die(far + ' c is past the player\'s reach (' + inst.playerBendSt + ' st, sandbox/instruments.js)');
const rangeC = 100 * (inst.bendRangeSt > 0 ? inst.bendRangeSt : 1), segs = SineGo.rekeyChain(bend, len, rangeC);
const off = segs.find((sg) => midi + sg.keyOffset < lo || midi + sg.keyOffset > hi);
if (off) die('the re-key would need ' + SineGo.pn(midi + off.keyOffset) + ', outside ' + L.voice + ' (' + SineGo.pn(lo) + ' … ' + SineGo.pn(hi) + ')');

// the note's loudness: --vel says the velocity outright; else AS HIS LAST NOTE ON THIS LANE (the sound he judged — §268: the page's own
// "p" on his first note is velocity 37, the calibrated ladder's p for the cello is 57; his ear set the first); else the ladder's for the mark
const m = MARKS.indexOf(noteMark);
const prev = s.objects.filter((o) => o.type === 'waveCurve' && o.layer === lane && o.sonifyNote != null && (o.velAbs != null || o.recVel != null)).sort((a, b) => endOf(b) - endOf(a))[0];
const vel = arg('vel') != null ? Math.max(1, Math.min(127, Math.round(+arg('vel')))) : prev ? Math.round(prev.velAbs != null ? prev.velAbs : prev.recVel)
    : Math.max(1, Math.min(127, Math.round(TextureDyn.ladderVel(REMAP, instKey, midi, m / 7))));
const y = arg('vel') == null && prev && prev.nodes && prev.nodes[0] ? prev.nodes[0].y : Math.round(m / 7 * 1000) / 100;
let nextId = +s.nextId || 1;
const firstId = 'wc-' + (nextId++), ids = segs.slice(1).map(() => 'wc-' + (nextId++)), zid = 'zn-' + (nextId++);
const beat = { pitch: midi, hz: Math.round(SineSim.hz(midi) * 100) / 100, fromHz, toHz, fromCents: c0, toCents: c1, at: r3(at), side: sign > 0 ? 'over' : 'under', lengthS: len, gapS: gap, sine: sineMark, note: noteMark };
const say = SineGo.pn(midi) + ' · ' + fromHz + ' → ' + toHz + ' beats/s (' + c0 + ' → ' + c1 + ' c), there at ' + Math.round(at * 100) + ' %, held · ' + noteMark;
const was = { technique: L.voice, morphBend: null, sonifyMode: 'plain', velAbs: null, cc7Abs: null, endSeconds: end };
const notes = segs.map((sg, k) => ({ id: k === 0 ? firstId : ids[k - 1], type: 'waveCurve', layer: lane,
    startSeconds: r3(start + sg.startS), endSeconds: r3(start + sg.endS + (k < segs.length - 1 ? SineGo.REKEY_OVERLAP_S : 0)),
    nodes: [{ pos: 0, y, smooth: 0.25 }, { pos: 1, y, smooth: 0.25 }], segments: [{ model: 'power', slope: 0 }], color: '#607D8B', fillMode: 'bottom', opacity: 0.55,
    performanceNotes: say + (segs.length > 1 ? ' · key ' + (k + 1) + ' of ' + segs.length : ''),
    properties: { sine: Object.assign({ brick: zid, who: 'player', kind: 'dictated', cents: Math.abs(c0) >= Math.abs(c1) ? c0 : c1, seed: null, take: '', was, keyOffset: sg.keyOffset },
        segs.length > 1 ? { segment: { of: firstId, k: k + 1, n: segs.length } } : {}, k === 0 && segs.length > 1 ? { chain: ids } : {}) },
    sonifyNote: midi + sg.keyOffset, technique: L.voice, recVel: vel, velAbs: vel, cc7Abs: { lo: 127, hi: 127 }, morphBend: sg.bend }));
const zone = SineGo.sineZone(zid, lane, start, end, { midi, gliss: { kind: 'none', from: 0, to: 0 }, level: { mode: 'flat', mark: sineMark }, label: '' }, firstId);
zone.properties.beat = beat;

console.log((useWork ? '(the base: HIS working copy — unsaved edits kept)' : '(the base: the save)') + '\n'
    + TRACKS[lane].label + ' ' + SineGo.pn(midi) + ' (' + beat.hz + ' Hz) · ' + start + ' → ' + end + ' s (' + len + ' s rolled' + (gap != null ? ', after a gap of ' + gap + ' s rolled' : '') + ')\n'
    + '  the note ' + noteMark + ' (velocity ' + vel + ') · the bend ' + c0 + ' → ' + c1 + ' c = ' + fromHz + ' → ' + toHz + ' beats/s, there at ' + r3(start + tAt) + ' s, held to the end\n'
    + '  ' + (segs.length > 1 ? 'RE-KEYED ×' + segs.length + ' (the sampler ±' + r3(rangeC / 100) + ' st): ' + notes.map((n) => SineGo.pn(n.sonifyNote) + ' ' + n.startSeconds + '…' + n.endSeconds).join(' · ')
        : segs[0].keyOffset ? 'one note, RE-KEYED: played on ' + SineGo.pn(midi + segs[0].keyOffset) + ', the wheel ' + segs[0].bend[0][1] + ' → ' + segs[0].bend[segs[0].bend.length - 1][1] + ' c'
        : 'one note, inside the sampler\'s ±' + r3(rangeC / 100) + ' st') + '\n'
    + '  the sine brick ' + zid + ': ' + SineGo.pn(midi) + ' static · ' + sineMark + ' · Follow off');
if (has('dry')) { console.log('(dry: nothing written)'); process.exit(0); }
s.objects.push(...notes, zone); s.nextId = nextId; s.metadata = s.metadata || {}; s.metadata.modified = new Date().toISOString();
fs.writeFileSync(file, JSON.stringify(s));
console.log('written: scores/' + name + '.json — ' + s.objects.length + ' objects · File ▾ → Reload in the page');
