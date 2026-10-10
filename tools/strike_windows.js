#!/usr/bin/env node
// strike_windows.js — SECTION 5B's WINDOWS (PLAN.md 1.9 · 17.3a · 17.3b; DEC-119 · DEC-120; RUNNING_LOG §346, 2026-10-09): over each
// strike of a score that has electronics, a STRIKE WINDOW brick (electronics/score/le_strike.js) — marked NOTATED or OPEN from his
// letters, spanned by his rules, told how many times the electronics answers it and with what.
//
//   node tools/strike_windows.js --score sec05b [--seed 1] [--replace] [--dry]
//
// THE STRIKES are his: the notes he inserted from the Strikes drawer, a strike a group (`grp-strike-…`), taken in time order. His
// notes are never touched. Every number is HIS, in bank/strike_section.json (a `_doc` a number):
//   THE LETTERS   `sequence` — N notated · O open, one a strike in time order; the last `noElectronicsLast` strikes get no window;
//                 letters past the last strike with electronics fall off the end (said).
//   THE SPAN      a NOTATED window hugs its strike (notated.leadMs before the first hit, trailMs after the last — the electronics'
//                 ear only). An OPEN window is open.factor × its strike's length: the extra AFTER the strike; where the next strike
//                 is close, BEFORE it instead; only where neither side has room is it shorter (said, with by how much). No two
//                 windows closer than minGapMs; none nearer a neighbouring strike's hit than guardMs.
//   THE EAR       each brick's gapMs (the silence that ends its strike) is longer than the strike's own widest gap; its graceMs (how
//                 long after its end a hit still belongs to it) stops short of the next strike — so no hit is heard by two windows.
//   THE FORM      `stretches` — the time from the first strike to the first bare one cut into stretches, each shorter than the one
//                 before (the shortest ≥ minRatio of the longest): in them a strike is answered 1 · 2 · 3 · 1 times. Rolled by --seed.
//   THE ANSWERS   `roll` — each answer draws a rhythm and a timing from a shuffled deck of each (none again until all are used).
//                 Answer 1 changes the strike's rhythm; answer 2 changes ANSWER 1's; answer 3 answer 2's (the brick's `chain`). The
//                 samples and their effects are dealt afresh by the engine at every answer. With keepEndingClear, a timing that would
//                 carry an answer into the bare last strikes is swapped for one that fits (said).
// It WRITES the score (his): the base is the NEWER of the save and the page's working copy, written to the save — then File ▾ →
// Reload in the page. --dry prints the list and writes nothing. Windows it laid before are taken out only with --replace (a change
// made to one of them in the page is lost by it); a window made by hand (no `properties.strikeSection`) is left alone and said.
// The sheet: docs/STRIKE_SECTION.md.
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SC = require(path.join(ROOT, 'electronics', 'score', 'le_strike.js'));
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 && process.argv[i + 1] != null && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; };
const flag = (k) => process.argv.includes('--' + k);
const die = (m) => { console.error(m); process.exit(1); };
const r3 = (x) => Math.round(x * 1000) / 1000, ms = (x) => Math.round(x * 1000);

// ---- the pure part (the check reads it too) -------------------------------------------------------------------------------------
const MARKS = SC.MARKS;
const noteMark = (o) => { const y = o && o.nodes && o.nodes[0] ? +o.nodes[0].y : 5, anchor = o && Number.isFinite(+o.recVel) ? +o.recVel : 65 + 62 * Math.max(0, Math.min(10, y)) / 10; return MARKS[Math.max(0, Math.min(7, Math.round((anchor - 65) / 62 * 7)))]; };   // the brick's own rule (le_strike.js noteMark)
// the strikes of a score: a group of notes each, in time order — f the first hit, l the last, widest its widest inner gap
const strikesOf = (s) => {
    const lanes = (s.tracks || []).length, g = new Map();
    for (const o of s.objects) { if (o.type !== 'waveCurve' || o.sonifyNote == null || !(o.layer < lanes) || !/^grp-strike-/.test(String(o.groupId || ''))) continue; if (!g.has(o.groupId)) g.set(o.groupId, []); g.get(o.groupId).push(o); }
    return [...g.entries()].map(([group, notes]) => {
        notes.sort((a, b) => a.startSeconds - b.startSeconds || String(a.id).localeCompare(String(b.id)));
        const f = notes[0].startSeconds, l = notes[notes.length - 1].startSeconds;
        return { group, strike: +String(group).split('-')[2], notes, f, l, lane: notes[0].layer, widest: notes.slice(1).reduce((m, o, i) => Math.max(m, o.startSeconds - notes[i].startSeconds), 0),
            ons: notes.map((o) => ({ atMs: Math.round((o.startSeconds - f) * 10000) / 10, mark: noteMark(o) })) };
    }).sort((a, b) => a.f - b.f);
};
// the spans: left to right, each window given what its neighbours leave it
const spans = (strikes, letters, C) => {
    const G = (+C.guardMs || 100) / 1000, mg = (+C.minGapMs || 50) / 1000, N = C.notated || {}, O = C.open || {};
    const out = []; let prevTrail = 0;
    for (let k = 0; k < letters.length; k++) {
        const x = strikes[k], prev = strikes[k - 1], next = strikes[k + 1], L = x.l - x.f;
        const maxLead = Math.max(0, prev ? (x.f - prev.l) - Math.max(G, prevTrail + mg) : x.f), maxTrail = Math.max(0, next ? (next.f - x.l) - G : Infinity);
        let lead, trail, want = null, short = 0, early = 0;
        if (letters[k] === 'O') {
            want = Math.max((+O.factor || 2) * L, (+O.minMs || 50) / 1000);
            const extra = want - L;
            trail = Math.min(extra, maxTrail); lead = Math.min(extra - trail, maxLead); early = lead; short = Math.max(0, extra - trail - lead);
        } else { lead = Math.min((+N.leadMs || 0) / 1000, maxLead); trail = Math.min((+N.trailMs || 0) / 1000, maxTrail); }
        const start = r3(x.f - lead), end = r3(x.l + trail);
        out.push({ k, mode: letters[k] === 'O' ? 'open' : 'notated', start, end, lead, trail, want, short: short > 0.0005 ? short : 0, early: early > 0.0005 ? early : 0, tight: !!(next && next.f - x.l < G + mg) });
        prevTrail = end - x.l;
    }
    return out;
};
// the brick's ear: the silence that ends its strike (longer than the strike's own widest gap) · the grace after its end (short of the next strike)
const earOf = (x, w, next, catGap) => {
    const gapMs = Math.min(Math.max(+catGap || 500, 150), Math.max(150, ms(x.widest) + 80));
    const graceMs = next ? Math.max(0, Math.min(gapMs, ms(next.f - w.end) - 40)) : gapMs;
    return { gapMs, graceMs };
};
// THE LARGE FORM: the time [t0, t1) in stretches, each shorter than the one before, the shortest ≥ minRatio of the longest
const stretchesOf = (t0, t1, S, rnd) => {
    const answers = (S.answers || [1]).map((n) => Math.max(1, Math.min(SC.MAXLINKS + 1, Math.round(+n) || 1))), m = answers.length;
    const hi = Math.min(0.999, +S.stepMax || 0.97), lo = Math.min(hi, m > 1 ? Math.pow(Math.max(0.01, Math.min(1, +S.minRatio || 0.6)), 1 / (m - 1)) : 1);
    const rel = [1]; for (let i = 1; i < m; i++) rel.push(rel[i - 1] * SC.draw(lo, hi, rnd));
    const unit = (t1 - t0) / rel.reduce((a, b) => a + b, 0); let t = t0;
    return rel.map((r, i) => { const from = t; t += r * unit; return { i, answers: answers[i], from: r3(from), to: r3(i === m - 1 ? t1 : t), lengthS: r3(r * unit) }; });
};
const deck = (pool, rnd) => { let d = []; return () => { if (!d.length) d = SC.shuffle(pool.slice(), rnd); return d.shift(); }; };
// the whole lay, pure: the score's strikes + his file + the catalogue + a seed → the windows (nothing written)
const lay = (s, C, CAT, seed) => {
    const strikes = strikesOf(s), bare = Math.max(0, Math.round(+C.noElectronicsLast || 0)), n = Math.max(0, strikes.length - bare);
    const seq = String(C.sequence || '').toUpperCase().replace(/[^NO]/g, '');
    if (seq.length < n) throw new Error('the sequence in bank/strike_section.json has ' + seq.length + ' letters; the score has ' + n + ' strikes with electronics (' + strikes.length + ' − the last ' + bare + ')');
    const letters = seq.slice(0, n).split(''), sp = spans(strikes, letters, C), firstBare = strikes[n];
    const t0 = n ? strikes[0].f : 0, t1 = firstBare ? firstBare.f : (n ? strikes[n - 1].l + 0.001 : 0);
    const st = stretchesOf(t0, t1, C.stretches || {}, SC.rng(seed * 7919 + 17));
    const R = C.roll || {}, types = (R.transformations || SC.TYPES).filter((t) => SC.TYPES.includes(t)), timings = (R.timings || SC.TIMINGS).filter((t) => SC.TIMINGS.includes(t));
    if (!types.length || !timings.length) throw new Error('bank/strike_section.json roll: no transformation or no timing the module knows');
    const rnd = SC.rng(seed * 101 + 7), nextType = deck(types, rnd), nextTiming = deck(timings, rnd);
    const limit = C.keepEndingClear && firstBare ? firstBare.f - 0.1 : Infinity;
    const wins = sp.map((w, k) => {
        const x = strikes[k], stretch = st.find((q) => x.f >= q.from - 1e-9 && x.f < q.to) || st[st.length - 1], ear = earOf(x, w, strikes[k + 1], CAT.gapMs);
        const links = [], swapped = [];
        const endOf = (ls) => { const c = SC.cascade(x.ons, { type: ls[0].type, timing: ls[0].timing, seed: ls[0].seed, chain: ls.slice(1) }, CAT), a = c[c.length - 1]; return x.l + (a.fromMs + SC.spanMs(a.onsets)) / 1000; };
        for (let j = 1; j <= stretch.answers; j++) {
            const l = { type: nextType(), timing: nextTiming(), seed: seed * 10000 + (k + 1) * 10 + j };
            if (endOf(links.concat([l])) > limit) {   // it would still sound over the bare strikes: the first other timing that fits, else the one that ends soonest
                const was = l.timing, tries = timings.filter((t) => t !== was).map((t) => ({ t, end: endOf(links.concat([Object.assign({}, l, { timing: t })])) }));
                const fit = tries.find((q) => q.end <= limit) || tries.concat([{ t: was, end: endOf(links.concat([l])) }]).sort((a, b) => a.end - b.end)[0];
                if (fit && fit.t !== was) { l.timing = fit.t; swapped.push('answer ' + j + ': ' + SC.TIMING_NAME[was] + ' → ' + SC.TIMING_NAME[fit.t]); }
            }
            links.push(l);
        }
        const elec = Object.assign({ id: 'W' + (k + 1), mode: w.mode, type: links[0].type, timing: links[0].timing, seed: links[0].seed, gapMs: ear.gapMs, graceMs: ear.graceMs,
            level: CAT.level || 'mimic', deal: CAT.deal || 'robin', players: [], samples: 'bank', processed: !!((CAT.samples || SC.DEFAULTS.samples).processed) }, links.length > 1 ? { chain: links.slice(1) } : {});
        const cas = SC.cascade(x.ons, elec, CAT).map((a) => Object.assign(a, { startS: r3(x.l + a.fromMs / 1000), endS: r3(x.l + (a.fromMs + SC.spanMs(a.onsets)) / 1000) }));
        return Object.assign({}, w, { n: k + 1, x, stretch: stretch.i, answers: links.length, elec, cas, swapped });
    });
    return { strikes, wins, stretches: st, bare: strikes.slice(n), letters, surplus: seq.length - n };
};
module.exports = { strikesOf, spans, earOf, stretchesOf, lay, noteMark };
if (require.main !== module) return;

// ---- the tool -------------------------------------------------------------------------------------------------------------------
const NAME = arg('score'); if (!NAME) die('--score <name>   (node tools/strike_windows.js --score sec05b [--seed 1] [--replace] [--dry])');
const FILE = path.join(ROOT, 'scores', NAME + '.json'), WORK = path.join(ROOT, 'scores', NAME + '-work.json');
if (!fs.existsSync(FILE)) die('no such score: scores/' + NAME + '.json');
const SEED = Math.max(1, Math.round(+arg('seed', 1)) || 1), DRY = flag('dry'), REPLACE = flag('replace');
const C = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'strike_section.json'), 'utf8')), CAT = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'strike_responses.json'), 'utf8'));
const useWork = fs.existsSync(WORK) && fs.statSync(WORK).mtimeMs > fs.statSync(FILE).mtimeMs;
const s = JSON.parse(fs.readFileSync(useWork ? WORK : FILE, 'utf8'));
const mine = (o) => o.type === 'zone' && o.midiModel === 'elecStrike' && o.properties && o.properties.strikeSection;
const had = s.objects.filter(mine).length, byHand = s.objects.filter((o) => o.type === 'zone' && o.midiModel === 'elecStrike' && !mine(o)).length;
if (had && !REPLACE && !DRY) die(had + ' windows of this tool are in ' + NAME + ' already — --replace lays them again (a change made to one of them in the page is lost)');
let L; try { L = lay(s, C, CAT, SEED); } catch (e) { die(e.message); }
const TR = s.tracks || [], short = (l) => (TR[l] && (TR[l].short || TR[l].label || TR[l].id)) || 'L' + l;
const nm = (a) => SC.TYPE_NAME[a.type] + ' (' + SC.TIMING_NAME[a.timing] + ')';
const out = [NAME + (useWork ? ' (the page\'s working copy — newer than the save)' : '') + ': ' + L.strikes.length + ' strikes · ' + L.wins.length + ' with electronics · the last ' + L.bare.length + ' bare · seed ' + SEED,
    'his letters: ' + L.letters.join('') + (L.surplus ? '   (' + L.surplus + ' more in the file fall off the end)' : ''),
    'the form: ' + L.stretches.map((q) => q.from.toFixed(1) + ' → ' + q.to.toFixed(1) + ' s (' + q.lengthS.toFixed(1) + ' s): ×' + q.answers + ', ' + L.wins.filter((w) => w.stretch === q.i).length + ' strikes').join(' · ')
        + ' — the shortest ' + Math.round(100 * Math.min(...L.stretches.map((q) => q.lengthS)) / Math.max(...L.stretches.map((q) => q.lengthS))) + ' % of the longest', '',
    ' n   strike  at (s)   word      the window (s)        long    of its strike           answers'];
for (const w of L.wins) {
    const len = w.end - w.start, Ls = w.x.l - w.x.f;
    const how = w.mode === 'open' ? ('×' + (Ls > 0 ? (len / Ls).toFixed(2) : '—') + (w.early ? ', ' + ms(w.early) + ' ms before it' : '') + (w.short ? ', SHORT by ' + ms(w.short) + ' ms' : '')) : ('hugs: −' + ms(w.lead) + ' +' + ms(w.trail) + ' ms');
    out.push(String(w.n).padStart(2) + '   ' + ('#' + w.x.strike).padEnd(6) + '  ' + w.x.f.toFixed(2).padStart(6) + '   ' + w.mode.padEnd(8) + '  ' + (w.start.toFixed(2) + ' → ' + w.end.toFixed(2)).padEnd(20) + '  ' + (ms(len) + ' ms').padEnd(7) + ' ' + how.padEnd(23) + ' ×' + w.answers + '  ' + w.cas.map(nm).join(' → ')
        + '  · to ' + w.cas[w.cas.length - 1].endS.toFixed(1) + ' s' + (w.swapped.length ? '  [kept clear of the ending — ' + w.swapped.join('; ') + ']' : ''));
}
L.bare.forEach((x, i) => out.push(String(L.wins.length + i + 1).padStart(2) + '   ' + ('#' + x.strike).padEnd(6) + '  ' + x.f.toFixed(2).padStart(6) + '   —         no electronics'));
const shortN = L.wins.filter((w) => w.short).length, earlyN = L.wins.filter((w) => w.early).length, lastEnd = Math.max(0, ...L.wins.map((w) => w.cas[w.cas.length - 1].endS));
out.push('', L.wins.filter((w) => w.mode === 'open').length + ' open · ' + L.wins.filter((w) => w.mode === 'notated').length + ' notated · ' + earlyN + ' open windows begin before their strike · ' + shortN + ' shortened · the last answer ends at ' + lastEnd.toFixed(1) + ' s'
    + (L.bare.length ? ' (the first bare strike: ' + L.bare[0].f.toFixed(1) + ' s)' : '') + (byHand ? ' · ' + byHand + ' window(s) made by hand left as they are' : ''));
if (DRY) { out.push('(dry — nothing written)'); console.log(out.join('\n')); process.exit(0); }

// the bricks into the score — the windows this tool laid before are taken out first; his notes are not touched
s.objects = s.objects.filter((o) => !mine(o));
s.nextId = Math.max(+s.nextId || 1, 1 + Math.max(0, ...s.objects.map((o) => +(String(o.id).match(/(\d+)$/) || [0, 0])[1])));
for (const w of L.wins) {
    s.objects.push({ id: 'zn-' + (s.nextId++), type: 'zone', layer: w.x.lane, startTime: w.start, endTime: w.end, player: '', instrument: '', zoneFunction: 'elec', midiModel: 'elecStrike',
        ostinatoParams: { smooth: 0.7, speed: 1, stretch: 1.5 }, chordMarkers: [], ratioMarkers: [], ratioSourceZoneId: '', ratioGroup: '', responseDelayMs: 0, jitterMs: 8, driftFactor: 0.02, midiSnippet: null,
        color: '#9E9D24', opacity: 0.35, yOffset: 0, zoneHeight: 0.2,
        performanceNotes: 'SECTION 5B — strike ' + w.n + ' (#' + w.x.strike + '), ' + (w.mode === 'open' ? 'OPEN: the ensemble strikes freely inside this window' : 'NOTATED: played as written') + '; the electronics answers ' + (w.answers === 1 ? 'once' : w.answers + ' times, each answer a changed version of the one before') + ': ' + w.cas.map(nm).join(' → '),
        properties: { strikeSection: { n: w.n, strike: w.x.strike, group: w.x.group, mode: w.mode, answers: w.answers, stretch: w.stretch + 1, seed: SEED } }, elec: w.elec });
}
s.metadata = s.metadata || {};
s.metadata.strikeSection = { command: 'node tools/strike_windows.js --score ' + NAME + ' --seed ' + SEED, seed: SEED, built: new Date().toISOString(), stretches: L.stretches };
fs.writeFileSync(FILE, JSON.stringify(s));
// the sheet
const sheet = ['# SECTION 5B, THE STRIKES — `scores/' + NAME + '.json`', '',
    '*Laid ' + new Date().toISOString().slice(0, 16).replace('T', ' ') + ' by `node tools/strike_windows.js --score ' + NAME + ' --seed ' + SEED + ' --replace` (PLAN.md 1.9 · 17.3). Regenerated at every lay — do not edit. His numbers: `bank/strike_section.json`.*', '',
    L.strikes.length + ' strikes of his, ' + L.wins.length + ' with electronics, the last ' + L.bare.length + ' bare. **NOTATED** = played as written; **OPEN** = the ensemble strikes freely inside the window (what he played stands in for them). The electronics hears each strike through its window and answers after it — once, twice or three times by where the strike falls in the form; in a cascade each answer changes the rhythm of the answer before it.', '',
    '**The form (seed ' + SEED + '):** ' + L.stretches.map((q) => q.from.toFixed(1) + ' → ' + q.to.toFixed(1) + ' s — ' + q.lengthS.toFixed(1) + ' s, **' + q.answers + '** answer' + (q.answers > 1 ? 's' : '') + ' a strike, ' + L.wins.filter((w) => w.stretch === q.i).length + ' strikes').join(' · ') + '.', '',
    '| n | strike # | at (s) | word | the window (s) | long (ms) | answers | the answers: rhythm (timing) | the last answer ends (s) |', '|---|---|---|---|---|---|---|---|---|']
    .concat(L.wins.map((w) => '| ' + w.n + ' | ' + w.x.strike + ' | ' + w.x.f.toFixed(2) + ' | **' + w.mode + '** | ' + w.start.toFixed(2) + ' → ' + w.end.toFixed(2) + (w.early ? ' (begins ' + ms(w.early) + ' ms before the strike)' : '') + (w.short ? ' (SHORT by ' + ms(w.short) + ' ms)' : '') + ' | ' + ms(w.end - w.start) + ' | ' + w.answers + ' | ' + w.cas.map(nm).join(' → ') + (w.swapped.length ? ' *(kept clear of the ending)*' : '') + ' | ' + w.cas[w.cas.length - 1].endS.toFixed(1) + ' |'))
    .concat(L.bare.map((x, i) => '| ' + (L.wins.length + i + 1) + ' | ' + x.strike + ' | ' + x.f.toFixed(2) + ' | — | no electronics | | | | |'))
    .concat(['', 'A letter moved, a number changed: `bank/strike_section.json`, then the tool with `--replace`, then File ▾ → Reload — no engine restart. Another roll of the form and the answers: `--seed N`. One window by hand: its panel (Mode · Answers · a row an answer).']);
fs.writeFileSync(path.join(ROOT, 'docs', 'STRIKE_SECTION.md'), sheet.join('\n') + '\n');
out.push('written: scores/' + NAME + '.json (' + (had ? had + ' earlier windows replaced by ' : '') + L.wins.length + ' windows) · docs/STRIKE_SECTION.md — in the page: File ▾ → Reload');
console.log(out.join('\n'));
