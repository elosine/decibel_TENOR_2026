#!/usr/bin/env node
// deal_variants.js — THE DEALING (PLAN 10.8 d; DEC-21 · 21b · 22; RUNNING_LOG §116): every return of a score gets a TRANSFORMATION —
// a preset of bank/presets.json under an envelope — so that no sample comes back as itself. To each sample a return brick plays, in
// score order: a preset, ROUND ROBIN through the list (shuffled once by the seed), none used twice until all are used; a second
// pass gives a preset ANOTHER envelope than its first. The envelopes by the file's `mix` (perc 40 · expodec 40 · gauss 10 · tri 10),
// as exact shares of the plays, shuffled by the seed. Written as  elec.variants = { '<sample>': '<key>-<env>' }  on each brick; the
// page sends the plan and the engine renders (electronics/score/le_objects.js · electronics/sc/process.scd).
//   node tools/deal_variants.js --score piece-sec01-a --to 22.5 [--from 0] [--seed 1] [--dry] [--clear]
// Dealt: the return bricks (midiModel elecPlay) that start in [from, to) and play NAMED samples — plain · ar · chain · arChain.
// NOT dealt: a pattern brick and a brick of '*' (group 5: its rhythm is his first; its effects after — perc · expodec only).
// --dry prints the deal and writes nothing. --clear takes the variants off the bricks in the range instead.
// The score file is written in place: he has SAVED first — a working copy that differs from the save refuses the tool (§85). Reload after.
// THE SORTING: this tool knows the piece (its save, its bank, its presets) — it is the piece's, not the engine's.
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const DRY = process.argv.includes('--dry'), CLEAR = process.argv.includes('--clear');
const NAME = arg('score', ''), FROM = +arg('from', 0), TO = arg('to', null) == null ? Infinity : +arg('to'), SEED = +arg('seed', 1);
if (!NAME) { console.error('which score?  --score piece-sec01-a'); process.exit(2); }
const FILE = path.join(ROOT, 'scores', NAME + '.json');
if (!fs.existsSync(FILE)) { console.error('no such score: ' + path.relative(ROOT, FILE)); process.exit(2); }
{   // the page's working copy: a refusal only when it holds something the save does not (tools/impulse.js, §85)
  const WORK = path.join(ROOT, 'scores', NAME + '-work.json');
  if (fs.existsSync(WORK)) {
    let same = false; try { same = JSON.stringify(JSON.parse(fs.readFileSync(WORK, 'utf8')).objects) === JSON.stringify(JSON.parse(fs.readFileSync(FILE, 'utf8')).objects); } catch (e) { same = false; }
    if (!same && !DRY) { console.error('the page holds a working copy of ' + NAME + ' with UNSAVED changes — Save (CTRL+S) or Reload there first'); process.exit(3); }
    console.log(same ? '(the working copy is identical to the save: nothing unsaved; Reload in the page after this)' : '(THE PAGE HOLDS UNSAVED CHANGES — this dry run is of the SAVE, not of what the page shows)');
  }
}

const P = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'presets.json'), 'utf8'));
const INDEX = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'samples', 'index.json'), 'utf8')).samples || []; } catch (e) { return []; } })();
const TRACKS = (() => { try { return new Function('return ' + fs.readFileSync(path.join(ROOT, 'score', 'public', 'composer.html'), 'utf8').match(/const TRACKS = (\[[\s\S]*?\]);/)[1])(); } catch (e) { return []; } })();
const mulberry32 = (a) => () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const shuffled = (arr, rnd) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

const save = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const bricks = (save.objects || []).filter((o) => o.type === 'zone' && o.midiModel === 'elecPlay' && o.elec && o.startTime >= FROM && o.startTime < TO)
  .sort((a, b) => a.startTime - b.startTime);
const namesOf = (e) => ((e.behaviour === 'chain' || e.behaviour === 'arChain') && Array.isArray(e.names) && e.names.length ? e.names : [e.name]).filter(Boolean);
const dealt = bricks.filter((z) => z.elec.behaviour !== 'pattern' && !namesOf(z.elec).includes('*') && namesOf(z.elec).length);
const skipped = bricks.length - dealt.length;

if (CLEAR) {
  const n = dealt.filter((z) => z.elec.variants).length;
  console.log(n + ' brick(s) carry variants in ' + NAME + ' [' + FROM + ', ' + (TO === Infinity ? 'end' : TO) + ')');
  if (DRY) { console.log('(dry — nothing written)'); process.exit(0); }
  dealt.forEach((z) => { delete z.elec.variants; });
} else {
  const plays = [];
  dealt.forEach((z) => namesOf(z.elec).forEach((name) => plays.push({ z, name })));
  if (!plays.length) { console.error('no return brick with a named sample starts in [' + FROM + ', ' + (TO === Infinity ? 'end' : TO) + ') of ' + NAME); process.exit(4); }
  // THE PRESETS, round robin: one shuffle; a lap uses every preset once
  const order = shuffled(P.presets, mulberry32(SEED * 7919 + 3));
  // THE ENVELOPES, by the mix: exact shares of the plays (the largest remainders round it), shuffled
  const mix = Object.entries(P.mix || { perc: 1 }).filter(([k, w]) => P.envelopes[k] && w > 0), wSum = mix.reduce((s, [, w]) => s + w, 0);
  const share = mix.map(([k, w]) => ({ k, exact: plays.length * w / wSum })); share.forEach((s) => { s.n = Math.floor(s.exact); });
  for (let left = plays.length - share.reduce((s, x) => s + x.n, 0); left > 0; left--) share.slice().sort((a, b) => (b.exact - b.n) - (a.exact - a.n))[0].n++;
  const envs = shuffled(share.flatMap((s) => Array(s.n).fill(s.k)), mulberry32(SEED * 104729 + 17));
  // a later lap: a preset never under the envelope it had before — the envelope is traded with a later play's
  const had = new Map();
  plays.forEach((p, i) => {
    p.preset = order[i % order.length];
    const used = had.get(p.preset.key) || [];
    if (used.includes(envs[i])) {
      let j = -1;
      for (let q = i + 1; q < envs.length; q++) if (!used.includes(envs[q])) { j = q; break; }
      if (j >= 0) [envs[i], envs[j]] = [envs[j], envs[i]];
      else envs[i] = (mix.map(([k]) => k).find((k) => !used.includes(k))) || envs[i];
    }
    p.env = envs[i];
    had.set(p.preset.key, used.concat(p.env));
  });
  // the table
  const lane = (l) => ((TRACKS[l] && TRACKS[l].label) || 'lane ' + l);
  const lengthOf = (p) => {
    const row = INDEX.find((r) => r.name === p.name), cls = (P.classes || {})[p.preset.class] || {}, rate = Math.min(8, Math.max(0.05, Math.abs(+(p.preset.args || {}).rate || 1)));
    return row ? Math.round(row.lengthMs / rate * (+p.preset.durX || +cls.durX || 1)) + ' ms' : 'not captured';
  };
  console.log('THE DEAL — ' + NAME + ' [' + FROM + ', ' + (TO === Infinity ? 'end' : TO) + ') · seed ' + SEED + ' · ' + plays.length + ' plays on ' + dealt.length + ' bricks · ' + order.length + ' presets'
    + (skipped ? ' · ' + skipped + ' brick(s) left alone (a pattern, or *)' : ''));
  plays.forEach((p, i) => console.log(String(i + 1).padStart(3) + '  ' + p.z.startTime.toFixed(2).padStart(6) + ' s  ' + lane(p.z.layer).padEnd(13) + (p.z.elec.behaviour || 'plain').padEnd(8) + p.name.padEnd(16)
    + '→ ' + (p.preset.key + '-' + p.env).padEnd(17) + lengthOf(p).padEnd(8) + ' ' + p.preset.name));
  const count = (f) => { const m = {}; plays.forEach((p) => { const k = f(p); m[k] = (m[k] || 0) + 1; }); return Object.entries(m).map(([k, n]) => k + ' ' + n).join(' · '); };
  console.log('envelopes: ' + count((p) => p.env) + '   ·   classes: ' + count((p) => p.preset.class));
  if (DRY) { console.log('(dry — nothing written)'); process.exit(0); }
  dealt.forEach((z) => { z.elec.variants = {}; });
  plays.forEach((p) => { p.z.elec.variants[p.name] = p.preset.key + '-' + p.env; });
}
save.metadata = Object.assign({}, save.metadata, { modified: new Date().toISOString() });
fs.writeFileSync(FILE, JSON.stringify(save, null, 1) + '\n');
console.log(path.relative(ROOT, FILE) + ' written — ' + (CLEAR ? 'the variants taken off ' : 'a variant on every sample of ') + dealt.length + ' return bricks. Reload it in the composer page (File ▾ → Reload).');
