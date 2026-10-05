#!/usr/bin/env node
// impulse.js — THE IMPULSES (running order step 8; RUNNING_LOG §71; his dictation 2026-10-05): the NEXT FIVE notes of his recorded
// rhythm, one per player, each given its technique, a pitch in the middle of that technique's range, and a MIC OPENING over it
// named <player>-impulse-<N>, category `impulse` — the name is the sample's identity through the piece (and its buffer's, in the
// engine). The rhythm is his: he played it into the Rec lane (lane 0, the bass flute); the notes are MOVED to the players' lanes,
// the rest of the rhythm stays where it is. The dictation lives in bank/impulses.json — a row per impulse number, five slots.
//   node tools/impulse.js --score piece-sec01-a --n 1 [--dry]
// The score file is written in place (he has saved: a working copy of it refuses the tool). Reload it in the page after.
// THE SORTING: this tool knows the piece (its lanes, its save, its route table) — it is the piece's, not the engine's.
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const DRY = process.argv.includes('--dry');
const N = String(arg('n', '1')), NAME = arg('score', '');
if (!NAME) { console.error('which score?  --score piece-sec01-a'); process.exit(2); }
const FILE = path.join(ROOT, 'scores', NAME + '.json');
if (!fs.existsSync(FILE)) { console.error('no such score: ' + path.relative(ROOT, FILE)); process.exit(2); }
if (fs.existsSync(path.join(ROOT, 'scores', NAME + '-work.json'))) { console.error('the page holds a working copy of ' + NAME + ' — Save (CTRL+S) or Reload there first'); process.exit(3); }

const INSTRUMENTS = vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'sandbox', 'instruments.js'), 'utf8') + '\n;INSTRUMENTS;', {});
const html = fs.readFileSync(path.join(ROOT, 'score', 'public', 'composer.html'), 'utf8');
const TRACKS = vm.runInNewContext(html.match(/const TRACKS = (\[[\s\S]*?\]);/)[1], {});
const ROUTE = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'elec_route.json'), 'utf8'));
const PLAN = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'impulses.json'), 'utf8'));
const ROW = PLAN[N], slots = Array.isArray(ROW) ? ROW : (ROW && ROW.slots), RETURN = Array.isArray(ROW) ? null : (ROW && ROW.return);   // §78: a row may name notes he placed himself, and a return around each
if (!Array.isArray(slots) || !slots.length) { console.error('bank/impulses.json has no row "' + N + '" — his dictation goes there first'); process.exit(2); }

const REC_LANE = 0;                 // the Rec lane: his rhythm lands on the bass flute's lane
const STD_VEL = 127, STD_LEN_S = 0.150;   // THE STANDARD (his word 2026-10-05, RUNNING_LOG §74): an impulse is 10 of 10 and 150 ms long whatever he played — the rhythm is his, the dynamic and the length are the kind's
const BEFORE_S = 0.1, WINDOW_S = 0.5;   // the opening: 100 ms before the onset, 500 ms long (the M key's default, RUNNING_LOG §64)

const save = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const objects = save.objects || [];
const pool = objects.filter((o) => o.type === 'waveCurve' && o.layer === REC_LANE && !o.impulse).sort((a, b) => a.startSeconds - b.startSeconds);
const placed = slots.every((q) => q.noteId);   // §78: his own placement — the notes are on their lanes already; the tool tags, opens, returns
if (!placed && pool.length < slots.length) { console.error('the Rec lane holds ' + pool.length + ' unassigned note(s); impulse ' + N + ' needs ' + slots.length); process.exit(4); }
if (objects.some((o) => o.impulse && String(o.impulse.n) === N)) { console.error('impulse ' + N + ' is already in ' + NAME); process.exit(4); }

let nextId = +save.nextId || (objects.length + 1);
const zone = (layer, start, end, elec, model) => ({
  id: 'zn-' + (nextId++), type: 'zone', layer, startTime: start, endTime: end, player: '', instrument: '', zoneFunction: 'elec', midiModel: model || 'elecOpen',
  ostinatoParams: { smooth: 0.7, speed: 1.0, stretch: 1.5 }, chordMarkers: [], ratioMarkers: [], ratioSourceZoneId: '', ratioGroup: '',
  responseDelayMs: 0, jitterMs: 8, driftFactor: 0.02, midiSnippet: null, color: model === 'elecPlay' ? '#8E24AA' : '#00897B', opacity: 0.35, yOffset: model === 'elecPlay' ? 1 : 0, zoneHeight: 0.2,
  performanceNotes: '', properties: {}, elec,
});

const rows = [];
slots.forEach((slot, i) => {
  const lane = TRACKS.findIndex((t) => t.instKey === slot.lane);
  const inst = INSTRUMENTS[slot.lane];
  if (lane < 0 || !inst) throw new Error('slot ' + (i + 1) + ': no lane plays ' + slot.lane);
  const own = slot.noteId ? objects.find((o) => o.id === slot.noteId && o.type === 'waveCurve') : null;
  if (slot.noteId && !own) throw new Error('slot ' + (i + 1) + ': no note ' + slot.noteId + ' in ' + NAME);
  if (own && own.layer !== lane) throw new Error('slot ' + (i + 1) + ': ' + slot.noteId + ' is on lane ' + own.layer + ', not ' + slot.lane);
  const tech = (inst.techniques || []).find((q) => q.key === (slot.tech || (own && own.technique)));
  if (!tech) throw new Error('slot ' + (i + 1) + ': ' + slot.lane + ' has no technique "' + slot.tech + '"');
  const lo = tech.rangeLow != null ? tech.rangeLow : inst.rangeLow, hi = tech.rangeHigh != null ? tech.rangeHigh : inst.rangeHigh;
  let note = slot.note != null && slot.note !== 'mid' ? +slot.note : (own ? +own.sonifyNote : Math.round((lo + hi) / 2));   // his own note keeps its pitch (§79)
  if (Array.isArray(tech.keys) && tech.keys.length && !tech.keys.some((k) => k.midi === note)) note = tech.keys[Math.floor(tech.keys.length / 2)].midi;   // a by-key voice: the middle KEY
  const player = (ROUTE.players.find((p) => (p.ports || [p.port]).includes(inst.port)) || {}).name || '';   // a player may own several ports (the percussionist's two lanes)
  const wc = own || pool[i];
  const name = (player || slot.lane) + '-impulse-' + N;
  const open = zone(lane, Math.max(0, wc.startSeconds - BEFORE_S), wc.startSeconds - BEFORE_S + WINDOW_S, { name, category: 'impulse', player });
  // the return around the note (§78): a region ±regionMs about the note's onset, the engine rolls inside it (behaviour 'ar')
  const ret = RETURN ? zone(lane, Math.max(0, wc.startSeconds - (RETURN.regionMs || 400) / 1000), wc.startSeconds + (RETURN.regionMs || 400) / 1000,
    { name: (player || slot.lane) + '-' + RETURN.sample, behaviour: RETURN.behaviour || 'ar' }, 'elecPlay') : null;
  if (note < lo || note > hi) { if (own) console.warn('slot ' + (i + 1) + ': HIS key ' + note + ' is outside ' + tech.label + ' (' + lo + '–' + hi + ') — kept, it may be silent'); else throw new Error('slot ' + (i + 1) + ': key ' + note + ' is outside ' + tech.label + ' (' + lo + '–' + hi + ')'); }   // the preset's own range, never the instrument's
  rows.push({ slot: i + 1, at: wc.startSeconds, lane: TRACKS[lane].label, tech: tech.label, note, player: player || '(no microphone)', name, noteId: wc.id, openId: open.id, ret: ret ? ret.elec.name : '' });
  if (!DRY) {
    wc.layer = lane; wc.sonifyNote = note; wc.technique = tech.key; wc.sonifyMode = 'plain';
    wc.endSeconds = Math.round((wc.startSeconds + STD_LEN_S) * 1000) / 1000; wc.recVel = STD_VEL;   // the standard
    wc.nodes = [{ pos: 0, y: 10, smooth: 0.25 }, { pos: 1, y: 10, smooth: 0.25 }];
    wc.impulse = { n: +N, slot: i + 1, name };
    objects.push(open);
    if (ret) objects.push(ret);
  }
});
rows.forEach((r) => console.log('impulse ' + N + '.' + r.slot + '  ' + r.at.toFixed(3) + ' s  ' + r.lane.padEnd(11) + r.tech.padEnd(34) + 'key ' + String(r.note).padEnd(4) + r.name.padEnd(18) + (r.player === '(no microphone)' ? '  NO MICROPHONE' : '') + (r.ret ? '  return ' + r.ret + ' ~ ar' : '')));
if (DRY) { console.log('(dry — nothing written)'); process.exit(0); }
save.nextId = nextId;
save.metadata = Object.assign({}, save.metadata, { modified: new Date().toISOString() });
fs.writeFileSync(FILE, JSON.stringify(save, null, 1) + '\n');
console.log(path.relative(ROOT, FILE) + ' written — ' + rows.length + ' notes ' + (placed ? 'tagged' : 'moved') + ', ' + rows.length + ' openings placed' + (RETURN ? ', ' + rows.length + ' returns placed' : '') + '. Reload it in the composer page.');
