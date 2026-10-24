#!/usr/bin/env node
// beat_edit.js — BEATING PAIRS, EDITED IN PLACE: one pair's end cut, the pair moved, or taken out — or a whole stretch of pairs pulled
// in by a factor (2026-10-24, the cut of Approaching under 10 minutes; his words: "I'm going to make cuts to individual bricks … I'll
// dictate changes per part, chord grouping by chord grouping" — then "let's do 35% … just across the board, just pull everything in
// 35%"). A pair (tools/beat_pair.js) is a SINE BRICK (zone elecSine, properties.beat) and the notes under it that name it
// (properties.sine.brick):
//   · a lane whose PLAYER bends: one note (or a re-keyed chain), its bend in morphBend [[seconds from the note's start, cents], …];
//   · a lane whose SINE moves (the bowed crotales): the brick's gliss, a line of [fraction of the brick, cents], and the bar re-bowed
//     as several notes under it.
//
//   node tools/beat_edit.js --score <name> --at <s> [--lane bfl|bcl|mal|va|vc] --end <s> [--dry]   one pair's end cut at <s>
//   node tools/beat_edit.js --score <name> --at <s> [--lane …] --move <±s> [--dry]                   one pair moved, notes and all
//   node tools/beat_edit.js --score <name> --at <s> [--lane …] --delete [--dry]                     one pair taken out
//   node tools/beat_edit.js --score <name> --scale <f> --from <a> --to <b> [--close] [--dry]
//     every pair whose brick begins in [a, b): its start pulled toward a (a + (start − a) × f) and its length × f (its END CUT, the
//     shape kept up to the cut) — gaps and pairs shrink together. --close: everything that begins at or after b moves earlier by what
//     the stretch shrank (its last end), keeping the gap that followed it — with the absolute times its records hold (a petal hit's
//     properties.petalHit.at, a section's properties.section.at, a beating note's properties.sine.was.endSeconds — tools/shift_after.js's
//     list). Objects in [a, b) that are not part of a pair are refused (the tool does not guess how to scale them).
//   --at   the pair whose brick BEGINS nearest that time (within 1.5 s); --lane narrows it when two lanes begin together
// One pair's edits move nothing else. An end cut keeps the pair's shape up to the cut: the bend (or the gliss) is cut there, its value
// at the cut interpolated; notes or bowings that begin after the cut are taken out, the one across it shortened; the brick records it
// (properties.beat.cut { wasEnd, at }). A backup of the score before every write: scores/backups/<name>.<time>.json.
// THE PAGE: the base is the NEWER of the save and the page's working copy (his unsaved edits kept); the result is written as the save
// — File ▾ → Reload.
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i >= 0 && process.argv[i + 1] != null ? process.argv[i + 1] : d; };
const has = (k) => process.argv.includes('--' + k);
const die = (m) => { console.error(m); process.exit(2); };
const r3 = (x) => Math.round(x * 1000) / 1000, r2 = (x) => Math.round(x * 100) / 100;
const LANE = { bfl: 0, bcl: 1, perc: 2, mal: 3, va: 4, vc: 5 };
const NAME = arg('score'); if (!NAME) die('--score <name>');
const LN = arg('lane') != null ? LANE[arg('lane')] : null; if (arg('lane') != null && LN == null) die('--lane is one of ' + Object.keys(LANE).join(' '));
const END = arg('end') != null ? +arg('end') : null, MOVE = arg('move') != null ? +arg('move') : null, DEL = has('delete'), DRY = has('dry');
const SCALE = arg('scale') != null ? +arg('scale') : null, FROM = +arg('from', NaN), TO = +arg('to', NaN), CLOSE = has('close');
if ([END != null, MOVE != null, DEL, SCALE != null].filter(Boolean).length !== 1) die('one of --end <s> · --move <±s> · --delete · --scale <f> --from <a> --to <b>');
const file = path.join(ROOT, 'scores', NAME + '.json'), work = path.join(ROOT, 'scores', NAME + '-work.json');
if (!fs.existsSync(file)) die('no such score: scores/' + NAME + '.json');
const useWork = fs.existsSync(work) && fs.statSync(work).mtimeMs > fs.statSync(file).mtimeMs;
const raw = fs.readFileSync(useWork ? work : file, 'utf8'), s = JSON.parse(raw);
const NN = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'], nm = (m) => NN[Math.round(m) % 12] + (Math.floor(Math.round(m) / 12) - 1);
const isPair = (o) => o.type === 'zone' && o.midiModel === 'elecSine' && o.properties && o.properties.beat;
const notesOf = (z) => s.objects.filter((o) => o.type === 'waveCurve' && o.properties && o.properties.sine && o.properties.sine.brick === z.id);
const who = (z) => Object.keys(LANE).find((k) => LANE[k] === z.layer) + ' ' + nm(z.properties.beat.pitch) + ' (' + (z.properties.beat.take || '?') + ')';
const st = (o) => (o.startTime != null ? o.startTime : o.startSeconds), en = (o) => (o.endTime != null ? o.endTime : o.endSeconds);
const at = (pts, x) => {                     // a line [[x, y] …] read at x, straight between its points
    if (!pts.length) return 0; if (x <= pts[0][0]) return pts[0][1];
    for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) { const [a, ya] = pts[i - 1], [b, yb] = pts[i]; return b === a ? yb : ya + (yb - ya) * (x - a) / (b - a); }
    return pts[pts.length - 1][1];
};
const cutLine = (pts, x) => pts.filter((p) => p[0] < x - 1e-6).concat([[x, r2(at(pts, x))]]);
const gone = new Set();

function movePair(z, d) {
    z.startTime = r3(z.startTime + d); z.endTime = r3(z.endTime + d);
    for (const n of notesOf(z)) {
        n.startSeconds = r3(n.startSeconds + d); n.endSeconds = r3(n.endSeconds + d);
        if (n.properties.sine.was && n.properties.sine.was.endSeconds != null) n.properties.sine.was.endSeconds = r3(n.properties.sine.was.endSeconds + d);
    }
}
function cutPair(z, E) {                      // the pair's end cut at E; returns [shortened, taken out]
    const oldLen = z.endTime - z.startTime, newLen = E - z.startTime, b = z.properties.beat, wasEnd = z.endTime;
    z.endTime = r3(E);
    b.cut = { wasEnd: r3((b.cut && b.cut.wasEnd) || wasEnd), at: r3(E) };
    if (Array.isArray(b.line)) b.line = cutLine(b.line, newLen);
    b.lengthS = r2(newLen);
    const g = z.elec && z.elec.gliss;         // a gliding sine: its line is in FRACTIONS of the brick
    if (g && Array.isArray(g.points) && g.points.length) {
        const cut = cutLine(g.points.map(([f, c]) => [f * oldLen, c]), newLen);
        g.points = cut.map(([t, c]) => [r3(t / newLen), c]); g.to = g.points[g.points.length - 1][1];
    }
    let short = 0, out = 0;
    const notes = notesOf(z), ids = new Set();
    for (const n of notes) {
        if (n.startSeconds >= E - 0.05) { ids.add(n.id); out++; continue; }
        if (n.endSeconds > E) {
            const len = E - n.startSeconds;
            n.endSeconds = r3(E); short++;
            if (Array.isArray(n.morphBend) && n.morphBend.length) n.morphBend = cutLine(n.morphBend, len);
        }
    }
    for (const n of notes) if (Array.isArray(n.properties.sine.chain)) n.properties.sine.chain = n.properties.sine.chain.filter((id) => !ids.has(id));
    ids.forEach((id) => gone.add(id));
    return [short, out];
}

const say = [];
if (SCALE != null) {
    if (!(SCALE > 0 && SCALE < 1)) die('--scale is a factor between 0 and 1 (0.65 = 35% shorter)');
    if (!(Number.isFinite(FROM) && Number.isFinite(TO) && TO > FROM)) die('--scale wants --from <a> --to <b>');
    const inside = s.objects.filter((o) => Number.isFinite(st(o)) && st(o) >= FROM && st(o) < TO);
    const pairs = inside.filter(isPair), pairIds = new Set(pairs.map((z) => z.id));
    const loose = inside.filter((o) => !pairIds.has(o.id) && !(o.properties && o.properties.sine && pairIds.has(o.properties.sine.brick)));
    if (loose.length) die(loose.length + ' objects in the stretch are not part of a pair (' + loose.slice(0, 5).map((o) => o.id).join(' ') + ') — NOTHING WRITTEN');
    const before = s.objects.filter((o) => Number.isFinite(st(o)) && st(o) < FROM && en(o) > FROM);
    if (before.length) die(before.length + ' objects begin before ' + FROM + ' and run into the stretch — NOTHING WRITTEN');
    const oldEnd = Math.max(...pairs.map((z) => z.endTime));
    let short = 0, out = 0;
    for (const z of pairs) {
        const s0 = z.startTime, L = z.endTime - z.startTime, s1 = FROM + (s0 - FROM) * SCALE;
        movePair(z, s1 - s0);
        const [a, b] = cutPair(z, s1 + L * SCALE); short += a; out += b;
    }
    s.objects = s.objects.filter((o) => !gone.has(o.id));
    const newEnd = Math.max(...pairs.map((z) => z.endTime));
    say.push('PULLED IN ×' + SCALE + ': ' + pairs.length + ' pairs from ' + FROM + ' s · the stretch ' + FROM + ' → ' + r2(oldEnd) + ' now ' + FROM + ' → ' + r2(newEnd)
        + ' (' + r2(oldEnd - newEnd) + ' s shorter) · ' + short + ' notes shortened, ' + out + ' bowings or chain notes taken out');
    if (CLOSE) {
        const by = r3(newEnd - oldEnd), later = s.objects.filter((o) => Number.isFinite(st(o)) && st(o) >= TO), n = { petalHit: 0, section: 0, was: 0 };
        for (const o of later) {
            for (const k of ['startSeconds', 'endSeconds', 'startTime', 'endTime']) if (Number.isFinite(o[k])) o[k] = r3(o[k] + by);
            const p = o.properties || {};
            if (p.petalHit && Number.isFinite(p.petalHit.at)) { p.petalHit.at = r3(p.petalHit.at + by); n.petalHit++; }
            if (p.section && Number.isFinite(p.section.at)) { p.section = Object.assign({}, p.section, { at: r3(p.section.at + by) }); n.section++; }
            if (p.sine && p.sine.was && Number.isFinite(p.sine.was.endSeconds)) { p.sine.was.endSeconds = r3(p.sine.was.endSeconds + by); n.was++; }
        }
        say.push('CLOSED UP: ' + later.length + ' objects from ' + TO + ' s on moved ' + by + ' s (the gap after the stretch kept) · records moved: ' + n.section + ' section tags, ' + n.petalHit + ' petal hits, ' + n.was + ' kept ends');
    }
} else {
    const AT = +arg('at', NaN); if (!Number.isFinite(AT)) die('--at <seconds>: where the pair begins');
    const near = s.objects.filter((o) => isPair(o) && (LN == null || o.layer === LN) && Math.abs(o.startTime - AT) <= 1.5).sort((a, b) => Math.abs(a.startTime - AT) - Math.abs(b.startTime - AT));
    if (!near.length) die('no beating pair begins within 1.5 s of ' + AT + (LN != null ? ' on that lane' : ''));
    if (near.length > 1 && Math.abs(near[0].startTime - near[1].startTime) < 0.05) die('two pairs begin there (lanes ' + near[0].layer + ' and ' + near[1].layer + ') — say --lane');
    const z = near[0];
    if (DEL) {
        const ids = new Set([z.id, ...notesOf(z).map((n) => n.id)]), k = ids.size - 1;
        s.objects = s.objects.filter((o) => !ids.has(o.id));
        say.push('TAKEN OUT: ' + who(z) + ' ' + z.startTime.toFixed(2) + ' → ' + z.endTime.toFixed(2) + ' · the brick and ' + k + ' note(s)');
    } else if (MOVE != null) {
        movePair(z, MOVE);
        say.push('MOVED ' + (MOVE > 0 ? '+' : '') + MOVE + ' s: ' + who(z) + ' now ' + z.startTime.toFixed(2) + ' → ' + z.endTime.toFixed(2));
    } else {
        if (!(END > z.startTime + 1 && END < z.endTime)) die('--end ' + END + ' is not inside the pair (' + z.startTime.toFixed(2) + ' → ' + z.endTime.toFixed(2) + ', and at least 1 s long)');
        const wasEnd = z.endTime, [a, b] = cutPair(z, END);
        s.objects = s.objects.filter((o) => !gone.has(o.id));
        say.push('END CUT: ' + who(z) + ' ' + z.startTime.toFixed(2) + ' → ' + wasEnd.toFixed(2) + ' now ends ' + END.toFixed(2) + ' · ' + a + ' note(s) shortened, ' + b + ' taken out');
    }
}
const head = (useWork ? '(base: his working copy) ' : '(base: the save) ');
if (DRY) { console.log(head + say.join('\n') + '\n(dry: nothing written)'); process.exit(0); }
const bdir = path.join(ROOT, 'scores', 'backups'); fs.mkdirSync(bdir, { recursive: true });
const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 15);
fs.writeFileSync(path.join(bdir, NAME + '.' + stamp + '.json'), raw);
s.metadata = s.metadata || {}; s.metadata.modified = new Date().toISOString();
fs.writeFileSync(file, JSON.stringify(s));
const last = Math.max(...s.objects.filter((o) => Number.isFinite(en(o))).map(en));
console.log(head + say.join('\n') + '\nwritten: scores/' + NAME + '.json (backup: scores/backups/' + NAME + '.' + stamp + '.json) · the score now ends at '
    + r2(last) + ' s (' + Math.floor(last / 60) + ':' + (last % 60).toFixed(1).padStart(4, '0') + ') — File ▾ → Reload in the page');
