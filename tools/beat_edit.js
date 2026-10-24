#!/usr/bin/env node
// beat_edit.js — ONE BEATING PAIR, EDITED IN PLACE: its end cut, the pair moved, or the pair taken out (2026-10-24, the cut of
// Approaching under 10 minutes; his words: "I'm going to make cuts to individual bricks … I'll dictate changes per part, chord
// grouping by chord grouping"). A pair (tools/beat_pair.js) is a SINE BRICK (zone elecSine, properties.beat) and the notes under it
// that name it (properties.sine.brick):
//   · a lane whose PLAYER bends: one note (or a re-keyed chain), its bend in morphBend [[seconds from the note's start, cents], …];
//   · a lane whose SINE moves (the bowed crotales): the brick's gliss, a line of [fraction of the brick, cents], and the bar re-bowed
//     as several notes under it.
// Unlike beat_pair.js --dropat, NOTHING ELSE MOVES: later pairs keep their places.
//
//   node tools/beat_edit.js --score <name> --at <s> [--lane bfl|bcl|mal|va|vc] --end <s> [--dry]   the pair's end cut at <s>
//   node tools/beat_edit.js --score <name> --at <s> [--lane …] --move <±s> [--dry]                   the pair moved, notes and all
//   node tools/beat_edit.js --score <name> --at <s> [--lane …] --delete [--dry]                     the pair taken out
//     --at   the pair whose brick BEGINS nearest that time (within 1.5 s); --lane narrows it when two lanes begin together
// An end cut keeps the pair's shape up to the cut: the bend (or the gliss) is cut there, its value at the cut interpolated; the
// notes or bowings that begin after the cut are taken out, the one across it shortened. The brick records it: properties.beat.cut
// { wasEnd, at }. A backup of the score before every write: scores/backups/<name>.<time>.json.
// THE PAGE: the base is the NEWER of the save and the page's working copy; the result is written as the save — File ▾ → Reload.
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i >= 0 && process.argv[i + 1] != null ? process.argv[i + 1] : d; };
const has = (k) => process.argv.includes('--' + k);
const die = (m) => { console.error(m); process.exit(2); };
const r3 = (x) => Math.round(x * 1000) / 1000, r2 = (x) => Math.round(x * 100) / 100;
const LANE = { bfl: 0, bcl: 1, perc: 2, mal: 3, va: 4, vc: 5 };
const NAME = arg('score'); if (!NAME) die('--score <name>');
const AT = +arg('at', NaN); if (!Number.isFinite(AT)) die('--at <seconds>: where the pair begins');
const LN = arg('lane') != null ? LANE[arg('lane')] : null; if (arg('lane') != null && LN == null) die('--lane is one of ' + Object.keys(LANE).join(' '));
const END = arg('end') != null ? +arg('end') : null, MOVE = arg('move') != null ? +arg('move') : null, DEL = has('delete'), DRY = has('dry');
if ([END != null, MOVE != null, DEL].filter(Boolean).length !== 1) die('one of --end <s> · --move <±s> · --delete');
const file = path.join(ROOT, 'scores', NAME + '.json'), work = path.join(ROOT, 'scores', NAME + '-work.json');
if (!fs.existsSync(file)) die('no such score: scores/' + NAME + '.json');
const useWork = fs.existsSync(work) && fs.statSync(work).mtimeMs > fs.statSync(file).mtimeMs;
const raw = fs.readFileSync(useWork ? work : file, 'utf8'), s = JSON.parse(raw);

const bricks = s.objects.filter((o) => o.type === 'zone' && o.midiModel === 'elecSine' && o.properties && o.properties.beat && (LN == null || o.layer === LN));
const near = bricks.filter((z) => Math.abs(z.startTime - AT) <= 1.5).sort((a, b) => Math.abs(a.startTime - AT) - Math.abs(b.startTime - AT));
if (!near.length) die('no beating pair begins within 1.5 s of ' + AT + (LN != null ? ' on that lane' : ''));
if (near.length > 1 && Math.abs(near[0].startTime - near[1].startTime) < 0.05) die('two pairs begin there (lanes ' + near[0].layer + ' and ' + near[1].layer + ') — say --lane');
const z = near[0], notes = s.objects.filter((o) => o.type === 'waveCurve' && o.properties && o.properties.sine && o.properties.sine.brick === z.id);
const NN = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'], nm = (m) => NN[Math.round(m) % 12] + (Math.floor(Math.round(m) / 12) - 1);
const who = Object.keys(LANE).find((k) => LANE[k] === z.layer) + ' ' + nm(z.properties.beat.pitch) + ' (' + (z.properties.beat.take || '?') + ')';
const say = [];
const at = (pts, x) => {                     // a line [[x, y] …] read at x, straight between its points
    if (!pts.length) return 0; if (x <= pts[0][0]) return pts[0][1];
    for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) { const [a, ya] = pts[i - 1], [b, yb] = pts[i]; return b === a ? yb : ya + (yb - ya) * (x - a) / (b - a); }
    return pts[pts.length - 1][1];
};
const cutLine = (pts, x) => pts.filter((p) => p[0] < x - 1e-6).concat([[x, r2(at(pts, x))]]);

if (DEL) {
    const ids = new Set([z.id, ...notes.map((n) => n.id)]);
    s.objects = s.objects.filter((o) => !ids.has(o.id));
    say.push('TAKEN OUT: ' + who + ' ' + z.startTime.toFixed(2) + ' → ' + z.endTime.toFixed(2) + ' · the brick and ' + notes.length + ' note(s)');
} else if (MOVE != null) {
    z.startTime = r3(z.startTime + MOVE); z.endTime = r3(z.endTime + MOVE);
    for (const n of notes) {
        n.startSeconds = r3(n.startSeconds + MOVE); n.endSeconds = r3(n.endSeconds + MOVE);
        if (n.properties.sine.was && n.properties.sine.was.endSeconds != null) n.properties.sine.was.endSeconds = r3(n.properties.sine.was.endSeconds + MOVE);
    }
    say.push('MOVED ' + (MOVE > 0 ? '+' : '') + MOVE + ' s: ' + who + ' now ' + z.startTime.toFixed(2) + ' → ' + z.endTime.toFixed(2) + ' · with ' + notes.length + ' note(s)');
} else {
    if (!(END > z.startTime + 1 && END < z.endTime)) die('--end ' + END + ' is not inside the pair (' + z.startTime.toFixed(2) + ' → ' + z.endTime.toFixed(2) + ', and at least 1 s long)');
    const oldLen = z.endTime - z.startTime, newLen = END - z.startTime, b = z.properties.beat;
    const wasEnd = z.endTime;
    z.endTime = r3(END);
    b.cut = { wasEnd: r3(wasEnd), at: r3(END) };
    if (Array.isArray(b.line)) b.line = cutLine(b.line, newLen);
    b.lengthS = r2(newLen);
    const g = z.elec && z.elec.gliss;               // a gliding sine: its line is in FRACTIONS of the brick
    if (g && Array.isArray(g.points) && g.points.length) {
        const abs = g.points.map(([f, c]) => [f * oldLen, c]), cut = cutLine(abs, newLen);
        g.points = cut.map(([t, c]) => [r3(t / newLen), c]); g.to = g.points[g.points.length - 1][1];
    }
    let gone = 0, cutn = 0;
    const ids = new Set();
    for (const n of notes) {
        if (n.startSeconds >= END - 0.05) { ids.add(n.id); gone++; continue; }
        if (n.endSeconds > END) {
            const len = END - n.startSeconds;
            n.endSeconds = r3(END); cutn++;
            if (Array.isArray(n.morphBend) && n.morphBend.length) n.morphBend = cutLine(n.morphBend, len);
        }
    }
    if (ids.size) {
        s.objects = s.objects.filter((o) => !ids.has(o.id));
        for (const n of notes) if (n.properties.sine.chain && Array.isArray(n.properties.sine.chain)) n.properties.sine.chain = n.properties.sine.chain.filter((id) => !ids.has(id));
    }
    say.push('END CUT: ' + who + ' ' + z.startTime.toFixed(2) + ' → ' + wasEnd.toFixed(2) + ' now ends ' + END.toFixed(2) + ' · ' + cutn + ' note(s) shortened, ' + gone + ' taken out'
        + (g && g.points && g.points.length ? ' · the sine\'s glide cut there (' + g.to + ' cents)' : ''));
}
if (DRY) { console.log((useWork ? '(base: his working copy) ' : '(base: the save) ') + say.join('\n') + '\n(dry: nothing written)'); process.exit(0); }
const bdir = path.join(ROOT, 'scores', 'backups'); fs.mkdirSync(bdir, { recursive: true });
const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 15);
fs.writeFileSync(path.join(bdir, NAME + '.' + stamp + '.json'), raw);
s.metadata = s.metadata || {}; s.metadata.modified = new Date().toISOString();
fs.writeFileSync(file, JSON.stringify(s));
console.log((useWork ? '(base: his working copy) ' : '(base: the save) ') + say.join('\n') + '\nwritten: scores/' + NAME + '.json (backup: scores/backups/' + NAME + '.' + stamp + '.json) — File ▾ → Reload in the page');
