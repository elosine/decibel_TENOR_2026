#!/usr/bin/env node
// strike_take.js — A TAKE OF THE STRIKES DRAWER INTO A SCORE, without the page (RUNNING_LOG §292, 2026-10-09).
//
//   node tools/strike_take.js --score sec05-strikes-a --take strikes01[,strikes02,…] [--art staccato] [--dyn f]
//                             [--at 2] [--every 4] [--new] [--dry]
//
// His words: "insert the take Strikes 1 … can you use the staccato? I forgot to choose the staccato orchestration for some of
// those … let's have them all go in as F."
//
// WHAT IT DOES — the drawer's own four gestures, in its own code: load the take · press an articulation set (--art: percussive ·
// spiccato · staccato · ordinario) · choose the dynamic (--dyn ppp … fff) · Insert @ playhead (--at seconds; several takes land
// --every seconds apart, start to start). Nothing of the drawer is re-written here: score/public/strike_drawer.js and its mixins
// are LOADED, in the page's order, into a window that has no screen (the DOM calls fall on a stub), and `loadTake` · `applyArtSet` ·
// `insert` are the page's. So a note this tool writes is the note Insert @ playhead writes — the same lanes, voices, folds,
// stand-ins, the second mallet seat as a drawn note, the group bar on META, the height that means the dynamic.
//
// WITHOUT --art the take's own voices stand; without --dyn the take's own dynamic (mf when it names none).
//
// --new   the score must NOT exist: it is made from scores/decibel.json (the day-one empty score) with the page's lanes.
// THE BASE of an existing score is the NEWER of the save and the page's working copy (his unsaved edits kept), as every tool
// here; the result is written as the save — then File ▾ → Reload in the page.
// --dry   prints what would be written, writes nothing.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const PUB = path.join(ROOT, 'score', 'public');

const arg = (name, def) => { const i = process.argv.indexOf('--' + name); return i >= 0 && process.argv[i + 1] != null && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : def; };
const flag = name => process.argv.includes('--' + name);
const die = msg => { console.error(msg); process.exit(1); };

const name = arg('score', null), takes = String(arg('take', '')).split(',').map(s => s.trim()).filter(Boolean);
if (!name || !takes.length) die('usage: node tools/strike_take.js --score <name> --take <take>[,<take>…] [--art staccato] [--dyn f] [--at 2] [--every 4] [--new] [--dry]');
const art = arg('art', null), dyn = arg('dyn', null), at = +arg('at', 2), every = +arg('every', 4), dry = flag('dry'), isNew = flag('new');
const file = path.join(ROOT, 'scores', name + '.json'), work = path.join(ROOT, 'scores', name + '-work.json');
if (isNew && fs.existsSync(file)) die('--new: scores/' + name + '.json exists already');
if (!isNew && !fs.existsSync(file)) die('no such score: scores/' + name + '.json (a new one: --new)');

// ---- the page's lanes, read from the page
const html = fs.readFileSync(path.join(PUB, 'composer.html'), 'utf8');
const tracksSrc = (html.match(/const TRACKS = (\[[\s\S]*?\]);/) || [])[1], metaSrc = (html.match(/const META_LAYER = (\d+);/) || [])[1];
if (!tracksSrc || metaSrc == null) die('composer.html: TRACKS or META_LAYER not found');

// ---- the score
let score, base;
if (isNew) {
    score = JSON.parse(fs.readFileSync(path.join(ROOT, 'scores', 'decibel.json'), 'utf8'));
    score.tracks = vm.runInNewContext(tracksSrc, {}).map(t => ({ id: t.id, label: t.label, short: t.short, instKey: t.instKey }));
    score.objects = []; score.markers = []; score.nextId = 1;
    score.metadata = { created: new Date().toISOString(), modified: new Date().toISOString() };
    base = '(a NEW score, from scores/decibel.json)';
} else {
    const useWork = fs.existsSync(work) && fs.statSync(work).mtimeMs > fs.statSync(file).mtimeMs;
    score = JSON.parse(fs.readFileSync(useWork ? work : file, 'utf8'));
    base = useWork ? '(the base: HIS working copy — unsaved edits kept)' : '(the base: the save)';
}

// ---- a window with no screen: every DOM call falls on a stub
const stubEl = () => ({ style: {}, dataset: {}, classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } }, children: [], innerHTML: '', textContent: '', value: '',
    querySelector() { return null; }, querySelectorAll() { return []; }, addEventListener() {}, removeEventListener() {}, appendChild() {}, insertBefore() {}, remove() {}, closest() { return null; }, setAttribute() {}, getAttribute() { return null; }, getBoundingClientRect() { return { left: 0, top: 0, width: 0, height: 0 }; } });
const said = [];
const Composer = { objects: score.objects, nextId: score.nextId || 1, isPlaying: false, pixelsPerSecond: 50, scrollOffset: 0, _t: 0,
    getTimeAtPlayhead() { return this._t; }, pushUndoState() {}, renderAll() {}, markDirty() {}, loadVelocityRemap() {} };
const box = { console: { log() {}, warn(...a) { said.push('warn: ' + a.join(' ')); }, error(...a) { said.push('error: ' + a.join(' ')); } },
    document: Object.assign(stubEl(), { readyState: 'complete', body: stubEl(), getElementById() { return null; }, createElement() { return stubEl(); } }),
    localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    setTimeout() { return 0; }, clearTimeout() {}, setInterval() { return 0; }, clearInterval() {}, requestAnimationFrame() { return 0; },
    performance: { now: () => Date.now() }, navigator: {}, Composer,
    fetch: (url, opt) => {   // the page's own reads of the bank, served from disk — GET only; nothing is ever posted
        const u = String(url).split('?')[0], rel = u === '/api/snapshots' ? 'bank/panel_snapshots.json' : /^\/bank\/[A-Za-z0-9_.-]+\.json$/.test(u) ? u.slice(1) : null;
        if ((opt && opt.method && opt.method !== 'GET') || !rel || !fs.existsSync(path.join(ROOT, rel))) return Promise.reject(new Error('strike_take.js reads the bank only: ' + u));
        const text = fs.readFileSync(path.join(ROOT, rel), 'utf8');
        return Promise.resolve({ ok: true, status: 200, json: async () => JSON.parse(text), text: async () => text });
    } };
box.self = box; box.window = box; box.addEventListener = () => {}; box.removeEventListener = () => {};
vm.createContext(box);
const run = (src, label) => { try { vm.runInContext(src, box, { filename: label }); } catch (e) { die('could not load ' + label + ': ' + e.message); } };
run('const TRACKS = ' + tracksSrc + '; const META_LAYER = ' + metaSrc + ';', 'the lanes (composer.html)');
run(fs.readFileSync(path.join(ROOT, 'sandbox', 'instruments.js'), 'utf8'), 'sandbox/instruments.js');
// the drawer and its mixins, in the page's own order (composer.html's <script> tags from strike_chords.js to spectrum_ui.js), with
// the pure modules they read loaded before them
const order = html.split('\n').map(l => (l.match(/<script src="\/([a-z_]+\.js)"/) || [])[1]).filter(Boolean);
const from = order.indexOf('strike_chords.js'), to = order.indexOf('spectrum_ui.js');
if (from < 0 || to < 0) die('composer.html: the drawer\'s scripts not found');
['velocity_remap.js', 'accel_calc.js', 'beating_calc.js', 'cresc.js', 'spacing.js'].concat(order.slice(from, to + 1))
    .forEach(f => run(fs.readFileSync(path.join(PUB, f), 'utf8'), f));
const D = box.StrikeDrawer;
if (!D) die('the strikes drawer did not load');

// ---- the drawer, given its bank and its takes; its screen calls silenced
D.el = stubEl(); D.render = () => {}; D.writeFields = () => {}; D.save = () => {};   // painting only — the state is in cfg · voices · rowKeys
D.setStatus = (msg, bad) => { said.push((bad ? 'REFUSED: ' : '') + msg); };
D.db = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'scattered_strikes.json'), 'utf8'));
D.takeList = ((JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'panel_snapshots.json'), 'utf8')).panels || {}).strikes) || {};

const T = D.tracks(), nm = m => ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'][((m % 12) + 12) % 12] + (Math.floor(m / 12) - 1);
const out = [base];
(async () => {
for (let k = 0; k < takes.length; k++) {
    const take = takes[k];
    if (!D.takeList[take]) die('no take named "' + take + '" in bank/panel_snapshots.json (the strikes panel has: ' + Object.keys(D.takeList).join(' · ') + ')');
    said.length = 0;
    D.strike = null;                                   // a take is loaded from nothing, as after an F5
    await D.loadTake(take);                            // async since the harmony sources (harm_source_ui.js)
    if (!D.strike) die('take "' + take + '": its strike ' + D.takeList[take].state.strikeId + ' is not in bank/scattered_strikes.json');
    if (art) { D.applyArtSet(art); if (D.cfg.artSet !== art) die('--art: no articulation set named "' + art + '"'); }
    if (dyn) { D.cfg.dyn = dyn; if (D.dynName() !== dyn) die('--dyn: one of ppp pp p mp mf f ff fff'); }
    const t = +(at + k * every).toFixed(3), before = Composer.objects.length;
    Composer._t = t;
    D.insert();
    const made = Composer.objects.slice(before), notes = made.filter(o => o.sonifyNote != null);
    if (!notes.length) die('take "' + take + '": nothing inserted — ' + said.join(' | '));
    const silent = D.voices.filter(v => !D.sounds(v)).map(v => nm(v.pitch));
    out.push(take + ' — strike #' + D.strike.index + ' · ' + (D.artSetNow() || 'a mixed set') + ' · ' + D.dynName() + ' · at ' + t.toFixed(3) + ' s · ' + notes.length + ' notes, ' + (made.length - notes.length) + ' group bar' +
        (silent.length ? ' · ' + silent.length + ' pitches of the chord have no player in the take (' + silent.join(' ') + ')' : ''));
    notes.slice().sort((a, b) => a.startSeconds - b.startSeconds).forEach(o => out.push('    ' + (o.startSeconds.toFixed(3) + ' → ' + o.endSeconds.toFixed(3)).padEnd(18) + ((T[o.layer] || {}).short || ('L' + o.layer)).padEnd(5) + nm(o.sonifyNote).padEnd(5) + o.technique + (o.sonifyMode === 'plain' ? '' : '  (drawn — the second mallet seat)')));
    said.filter(s => /^(REFUSED|warn|error)/.test(s)).forEach(s => out.push('    ' + s));
}

score.objects = Composer.objects; score.nextId = Composer.nextId;
score.metadata = score.metadata || {}; score.metadata.modified = new Date().toISOString();
if (dry) out.push('(dry — nothing written)');
else { fs.writeFileSync(file, JSON.stringify(score)); out.push('written: scores/' + name + '.json — ' + score.objects.length + ' objects' + (isNew ? '' : ' · in the page: File ▾ → Reload')); }
console.log(out.join('\n'));
})().catch(e => die(e.stack || String(e)));
