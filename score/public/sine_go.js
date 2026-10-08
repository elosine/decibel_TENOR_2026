// sine_go.js — THE GO: selected played notes become SINE TONES and a simulated player beating against them (PLAN.md 1.5 · 12.5;
// DEC-35 · 35b; RUNNING_LOG §180). His words: *"I play. bricks appear in composer score, I make a take for this ensemble, I select
// played notes in composer, select a take, press go, played in bricks are replaced with sine tone generation and a rough performer
// simulation via midi"* — and of the takes: *"I would select bricks in composer score, different sections, different takes."*
//
// IN THE PAGE the three steps are on THE HARMONY STRIP (harmony_sel.js — the strip at the top right whenever notes are selected):
//     1 · select the played notes          2 · take ▾ — the take's pitch for each note's player (the strip's own, as it was)
//     3 · ∿ sines — THE GO (this file's button, with its seed; ∿ off takes it back; the strip's `back` takes it back too)
// Another selection, another take, GO again: several takes across a section. GO again on the same notes with another seed draws
// other behaviours and keeps each brick's own level (a curve he attached stays).
//
// WHAT THE GO DOES TO ONE NOTE (convert, below — the same in the page and in tools/sine_go.js):
//   · its lane's VOICE — the technique the simulated player holds a long tone on (bank/sine_behaviours.json `lanes`);
//     its pitch stays what it is (the take's), brought into that voice's range by octaves where it must
//   · a SINE BRICK (`elecSine`, electronics/score/le_sine.js) on the same lane over the note's span, at the note's SOUNDING pitch
//   · WHO MOVES, by the lane: a `player` lane — the note gets a BEND, a line of cents drawn by score/public/sine_sim.js, written as the
//     note's own `morphBend` (the field the stack's note player already streams as pitch bend); the note becomes a DRAWN note so
//     the bend is on its own curve channel and bends nothing else (harmony_sel.js's rule, §318 of piece #6: its struck sound kept by
//     velAbs · cc7Abs) · a `sine` lane (the bowed crotales) — the note holds and the BRICK gets a gliss
//   · what the note was is kept ON THE NOTE (`properties.sine.was`), with the brick's id, the kind drawn and the seed
// A lane the file does not name is left alone (the unpitched percussion: no pitch to beat against).
//
// NO GROUP: in this stack a group moves by its META shape; a shape per note would bury the META lane. A note and its brick lie on
// one lane over one span — a box selection takes both.
//
// The first half is PURE (no DOM): takeChord · applyChord · convert · unconvert — `node tools/sine_check.js` checks it,
// tools/sine_go.js and tools/build_sine_demo.js use it. The second half (install) is the page's: the strip's three controls.
(function (root, factory) {
    const node = typeof module === 'object' && module.exports;
    const api = factory(node ? require('./sine_sim.js') : root.SineSim);
    if (node) module.exports = api;
    else { root.SineGo = api; api.install(root); }
}(typeof self !== 'undefined' ? self : this, function (SineSim) {
'use strict';

const NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const pn = (m) => { const n = Math.round(+m), c = Math.round((+m - n) * 100); return NAMES[((n % 12) + 12) % 12] + (Math.floor(n / 12) - 1) + (c ? (c > 0 ? ' +' : ' −') + Math.abs(c) + 'c' : ''); };
const r3 = (x) => Math.round(x * 1000) / 1000;
const copy = (x) => (x == null ? null : JSON.parse(JSON.stringify(x)));
const SEATS = ['bowed_vibraphone'];   // the strikes drawer's second seats (strike_drawer.js EXTRA_SEATS): a row past the lanes plays on that instrument's lane
const SINE = { color: '#1E88E5', yOffset: 0.75 };   // the brick's look (le_sine.js MODELS.elecSine) — a builder has no page to ask

const isNote = (o, lanes) => !!(o && o.type === 'waveCurve' && o.sonifyNote != null && o.layer >= 0 && o.layer < lanes);
const shortOf = (tracks, l) => { const t = tracks[l]; return t ? (t.short || t.label || t.id) : 'lane ' + l; };
// a pitch brought into [lo, hi] by octaves — or null
const fit = (p, lo, hi) => { let x = +p, n = 0; while (x < lo && n < 9) { x += 12; n++; } while (x > hi && n > -9) { x -= 12; n--; } return x >= lo && x <= hi ? x : null; };

// ---- a take, read as it is stored (bank/panel_snapshots.json, panels.strikes[name].state — the strikes drawer's own state()) ----
// -> the chord as it sounds: [{ lane, midi }] in the take's voice order — each voice on its player (its pitch folded as the take
// says, or its stand-in) and on every doubling; a drawer row past the lanes is a second seat, on its instrument's lane
function takeChord(state, tracks) {
    const laneOf = (row) => { if (!Number.isInteger(row) || row < 0) return -1; if (row < tracks.length) return row; const k = SEATS[row - tracks.length]; return k ? tracks.findIndex((t) => t.instKey === k) : -1; };
    const out = [];
    ((state && state.voices) || []).slice().sort((a, b) => (a.i || 0) - (b.i || 0)).forEach((v) => {
        const one = (r) => { const l = laneOf(r.lane); if (l < 0 || r.skip) return; const m = r.standIn != null ? +r.standIn : +v.pitch + 12 * (+r.fold || 0); if (Number.isFinite(m)) out.push({ lane: l, midi: Math.round(m) }); };
        one(v); (v.also || []).forEach(one);
    });
    return out;
}

// what a note was before its first take, kept ON the note — harmony_sel.js's `remember`, the same shape, so its `back` restores it
function remember(o) {
    if (o.hq && o.hq.was) return;
    o.hq = Object.assign(o.hq || {}, { was: { sonifyNote: o.sonifyNote, morphBend: copy(o.morphBend), sonifyMode: o.sonifyMode != null ? o.sonifyMode : null,
        velAbs: o.velAbs != null ? o.velAbs : null, cc7Abs: copy(o.cc7Abs), performanceNotes: o.performanceNotes != null ? o.performanceNotes : null } });
}
// a take's chord onto notes — the harmony strip's rule (harmony_sel.js apply): in time order, each note the next of ITS lane's pitches,
// round robin; a lane the take does not hold is left as it is
function applyChord(notes, chord, name) {
    const by = {}, next = {}, done = [], left = new Set();
    chord.forEach((n) => { (by[n.lane] = by[n.lane] || []).push(n); });
    notes.slice().sort((a, b) => a.startSeconds - b.startSeconds || a.layer - b.layer).forEach((o) => {
        const cand = by[o.layer];
        if (!cand || !cand.length) { left.add(o.layer); return; }
        const k = next[o.layer] || 0, n = cand[k % cand.length]; next[o.layer] = k + 1;
        remember(o);
        o.sonifyNote = Math.round(n.midi);
        Object.assign(o.hq, { take: name, midi: o.sonifyNote, cents: 0, dealt: { midi: o.sonifyNote, partial: null } });
        o.performanceNotes = (String(o.performanceNotes || '').replace(/ · ← take "[^"]*"/g, '') + ' · ← take "' + name + '"').replace(/^ · /, '');
        done.push(o);
    });
    return { done, left: Array.from(left) };
}

// a zone as the composer's createZone makes one (tools/build_first_object.js lists the same fields)
function sineZone(id, layer, start, end, elec, noteId) {
    return { id, type: 'zone', layer, startTime: r3(start), endTime: r3(end), player: '', instrument: '', zoneFunction: 'elec', midiModel: 'elecSine',
        ostinatoParams: { smooth: 0.7, speed: 1.0, stretch: 1.5 }, chordMarkers: [], ratioMarkers: [], ratioSourceZoneId: '', ratioGroup: '',
        responseDelayMs: 0, jitterMs: 8, driftFactor: 0.02, midiSnippet: null, color: SINE.color, opacity: 0.35, yOffset: SINE.yOffset, zoneHeight: 0.2,
        performanceNotes: '', properties: { sine: { note: noteId } }, elec };
}

// ---- THE GO, on notes that already hold their pitches ----
// ctx: { objects, instruments, tracks, cfg, seed, newId }      cfg = SineSim.config(the piece's file) · newId() -> a fresh zone id
// -> { done: [{ note, zone, draw, isNew }], skipped: [{ note, why }], lines: [what happened, a line a note] }
function convert(notes, ctx) {
    const T = ctx.tracks, I = ctx.instruments, cfg = ctx.cfg, seed = Math.max(1, Math.round(+ctx.seed || 1));
    const done = [], skipped = [], lines = [], seen = new Set();   // seen: the phrase bricks already re-pitched in this GO
    notes.filter((o) => isNote(o, T.length)).sort((a, b) => a.startSeconds - b.startSeconds || a.layer - b.layer).forEach((o, i) => {
        const instKey = (T[o.layer] || {}).instKey, inst = I[instKey], L = cfg.lanes[instKey];
        const skip = (why) => { skipped.push({ note: o, why }); lines.push(shortOf(T, o.layer) + ' ' + o.startSeconds.toFixed(2) + ' s — left alone: ' + why); };
        if (!inst || !L) return skip('this lane has no part in the sines (bank/sine_behaviours.json)');
        const tech = (inst.techniques || []).find((t) => t.key === L.voice);
        if (!tech) return skip('its voice "' + L.voice + '" is not one of this instrument\'s');
        const lo = tech.rangeLow != null ? tech.rangeLow : inst.rangeLow, hi = tech.rangeHigh != null ? tech.rangeHigh : inst.rangeHigh;
        const was = (o.properties && o.properties.sine && o.properties.sine.was) || { technique: o.technique != null ? o.technique : null, morphBend: copy(o.morphBend),
            sonifyMode: o.sonifyMode != null ? o.sonifyMode : null, velAbs: o.velAbs != null ? o.velAbs : null, cc7Abs: copy(o.cc7Abs) };
        const pitch = fit(Math.round(+o.sonifyNote), lo != null ? lo : 0, hi != null ? hi : 127);
        if (pitch == null) return skip(pn(o.sonifyNote) + ' has no octave inside ' + L.voice + ' (' + pn(lo) + ' … ' + pn(hi) + ')');
        const len = Math.max(0.05, o.endSeconds - o.startSeconds);
        const limit = 100 * Math.min(inst.playerBendSt != null ? inst.playerBendSt : 1, inst.bendRangeSt != null && inst.bendRangeSt > 0 ? inst.bendRangeSt : 1);
        const rnd = SineSim.mulberry32((Math.imul(seed, 2654435761) + Math.imul(o.layer + 1, 40503) + Math.imul(i + 1, 7919)) >>> 0);
        const d = SineSim.draw(cfg, instKey, pitch, len, rnd, { limitCents: limit });
        remember(o);
        // the note
        o.sonifyNote = pitch; o.technique = L.voice;
        if (d.who === 'player') {
            o.morphBend = d.bend.map((p) => [Math.min(p[0], r3(len)), p[1]]);
            if (was.sonifyMode === 'plain' || o.sonifyMode === 'plain') {   // a bent note is DRAWN — its own curve channel; a struck note keeps its sound (velAbs · cc7Abs)
                delete o.sonifyMode;
                if (o.velAbs == null && o.cc7Abs == null) { o.velAbs = o.recVel != null ? Math.round(+o.recVel) : 100; o.cc7Abs = { lo: 127, hi: 127 }; }
            }
        }   // else the player HOLDS (the bowed crotales): the note's sound is left exactly as it is — the brick below carries the gliss
        // its brick: the one it has, or a new one
        const have = o.properties && o.properties.sine && ctx.objects.find((z) => z.type === 'zone' && z.midiModel === 'elecSine' && z.id === o.properties.sine.brick);
        const gliss = d.gliss ? { kind: d.gliss.kind, from: d.gliss.from, to: d.gliss.to } : { kind: 'none', from: 0, to: 0 };
        let zone = have, isNew = false;
        // PLAN 1.8 · 16.2 c: A PHRASE'S BRICK — one sine over several notes (the brick names them: properties.sine.notes). The GO on one of
        // its notes RE-PITCHES that brick and leaves its span alone; the gliss is the first of its notes' in this GO (the engine begins it
        // again at each entry), and how long one glide lasts (gliss.overS) is kept
        const shared = !!(zone && zone.properties && zone.properties.sine && Array.isArray(zone.properties.sine.notes) && zone.properties.sine.notes.length > 1);
        if (zone && zone.elec && zone.elec.gliss && zone.elec.gliss.overS != null && gliss.kind !== 'none') gliss.overS = zone.elec.gliss.overS;
        if (shared) { if (!seen.has(zone.id)) { seen.add(zone.id); zone.elec = Object.assign({}, zone.elec, { midi: d.sineMidi, gliss }); } }
        else if (zone) { zone.layer = o.layer; zone.startTime = r3(o.startSeconds); zone.endTime = r3(o.endSeconds); zone.elec = Object.assign({}, zone.elec, { midi: d.sineMidi, gliss }); }
        else {
            const elec = { midi: d.sineMidi, gliss, level: { mode: 'flat', mark: cfg.level || 'mf' }, label: '' };
            if (cfg.track && cfg.track.on) elec.track = { on: true };   // PLAN 1.8 · 16.1: a new brick is a WINDOW where the piece says so (bank/sine_behaviours.json `track`)
            zone = sineZone(ctx.newId(), o.layer, o.startSeconds, o.endSeconds, elec, o.id); ctx.objects.push(zone); isNew = true;
        }
        o.properties = Object.assign({}, o.properties, { sine: { brick: zone.id, who: d.who, kind: d.kind, cents: d.cents, seed, take: (o.hq && o.hq.take) || ctx.take || '', was } });
        done.push({ note: o, zone, draw: d, isNew });
        lines.push(shortOf(T, o.layer) + ' ' + pn(pitch) + (d.sineMidi !== pitch ? ' (the sine ' + pn(d.sineMidi) + ')' : '') + ' · ' + d.say + ' · beats ' + d.beatsFrom + ' → ' + d.beatsTo + ' /s');
    });
    return { done, skipped, lines };
}

// ---- and back: the note's voice, bend and sound as before the GO, its brick gone (the pitch stays — the take's) ----
// ctx: { objects, removeZone? }
function unconvert(notes, ctx) {
    const undone = [];
    notes.forEach((o) => {
        const s = o && o.properties && o.properties.sine; if (!s) return;
        const w = s.was || {};
        if (w.technique != null) o.technique = w.technique; else delete o.technique;
        if (w.morphBend) o.morphBend = copy(w.morphBend); else delete o.morphBend;
        if (w.sonifyMode != null) o.sonifyMode = w.sonifyMode; else delete o.sonifyMode;
        if (w.velAbs != null) o.velAbs = w.velAbs; else delete o.velAbs;
        if (w.cc7Abs) o.cc7Abs = copy(w.cc7Abs); else delete o.cc7Abs;
        const z = ctx.objects.find((x) => x.type === 'zone' && x.midiModel === 'elecSine' && x.id === s.brick);
        if (z) { if (ctx.removeZone) ctx.removeZone(z); else ctx.objects.splice(ctx.objects.indexOf(z), 1); }
        const p = Object.assign({}, o.properties); delete p.sine; o.properties = p;
        undone.push(o);
    });
    return undone;
}

// =====================================================================================================================
// THE PAGE — the harmony strip's three controls. Composer, TRACKS, META_LAYER, INSTRUMENTS are script-level consts of
// composer.html, read as free identifiers.
function install(root) {
    if (typeof document === 'undefined') return;
    const C_ = () => (typeof Composer !== 'undefined' ? Composer : (root.Composer || null));
    const T_ = () => (typeof TRACKS !== 'undefined' ? TRACKS : (root.TRACKS || []));
    const I_ = () => (typeof INSTRUMENTS !== 'undefined' ? INSTRUMENTS : (root.INSTRUMENTS || {}));
    const LANES = () => (typeof META_LAYER !== 'undefined' ? META_LAYER : T_().length);
    const BTN = 'font:inherit;padding:1px 7px;border:1px solid #b9b4a6;border-radius:3px;background:#fbfaf6;color:#333;cursor:pointer';
    let cfg = null;
    const loadCfg = () => (cfg ? Promise.resolve(cfg) : fetch('/bank/sine_behaviours.json', { cache: 'no-store' }).then((r) => (r.ok ? r.json() : null)).catch(() => null)
        .then((f) => { cfg = SineSim.config(f); if (!f) say('bank/sine_behaviours.json was not read — no lane has a part in the sines', true); return cfg; }));
    const say = (msg, bad) => { const H = root.HarmonySel; if (H && H.say) H.say(msg, !!bad); else { const C = C_(); if (C && C.saveStatus) C.saveStatus.textContent = msg; } };
    const selected = () => { const C = C_(); return C ? (C.selectedObjects || []).filter((o) => isNote(o, LANES()) && C.objects.includes(o)) : []; };
    const redraw = (o) => { const C = C_(); try { if (o.type === 'waveCurve') C.renderWaveCurve(o); else C.renderZone(o); } catch (e) { console.warn('[sine_go] render:', e); } };
    const wrap = () => { const C = C_(); if (typeof C.curveDirty === 'function') C.curveDirty(); C.markDirty(); const H = root.HarmonySel; if (H && H.refresh) H.refresh(); };

    const api = this;
    api.go = async function (seedArg) {
        const C = C_(); if (!C) return null;
        const notes = selected();
        if (!notes.length) { say('∿ sines: select the played notes first — then take ▾ for their pitches, then ∿ sines', true); return null; }
        const c = await loadCfg(), box = document.getElementById('sgSeed'), seed = Math.max(1, Math.round(+seedArg || (box && +box.value) || 1));
        C.pushUndoState();
        const r = api.convert(notes, { objects: C.objects, instruments: I_(), tracks: T_(), cfg: c, seed, newId: () => C.generateId('zn') });
        r.done.forEach((d) => { redraw(d.note); redraw(d.zone); });
        wrap();
        const players = new Set(r.done.map((d) => d.note.layer)).size;
        say(r.done.length ? '∿ ' + r.done.length + (r.done.length === 1 ? ' note' : ' notes') + ' → ' + r.done.length + (r.done.length === 1 ? ' sine' : ' sines') + ' on ' + players + (players === 1 ? ' player' : ' players') + ' · seed ' + seed
            + (r.skipped.length ? ' · ' + r.skipped.length + ' left alone' : '') + ' · ' + r.lines.slice(0, 6).join(' | ') + (r.lines.length > 6 ? ' | …' : '')
            : '∿ sines: nothing made — ' + (r.lines[0] || 'no note of a lane that has a part'), !r.done.length);
        console.log('[sine_go] seed ' + seed + '\n  ' + r.lines.join('\n  '));
        return r;
    };
    api.off = function (quiet) {
        const C = C_(); if (!C) return [];
        const notes = selected().filter((o) => o.properties && o.properties.sine);
        if (!notes.length) { if (!quiet) say('∿ off: none of the selected notes has a sine', true); return []; }
        C.pushUndoState();
        const u = api.unconvert(notes, { objects: C.objects, removeZone: (z) => {
            if (z._els) { if (z._els.group) z._els.group.remove(); if (z._els.groups) z._els.groups.forEach((g) => g.remove()); }
            if (C.elementCache && C.elementCache.delete) C.elementCache.delete(z.id);
            const i = C.objects.indexOf(z); if (i >= 0) C.objects.splice(i, 1);
        } });
        u.forEach(redraw);
        wrap();
        if (!quiet) say('∿ off: ' + u.length + (u.length === 1 ? ' note' : ' notes') + ' back to the voice and the sound before the sines — the bricks gone, the pitches kept');
        return u;
    };

    const controls = (el) => {
        if (!el || el.querySelector('#sgBox')) return;
        const box = document.createElement('span'); box.id = 'sgBox';
        box.style.cssText = 'display:inline-flex;gap:5px;align-items:center;border-left:1px solid #cfcabc;padding-left:8px';
        box.title = 'PLAN 1.5: the selected notes become SINE TONES with a simulated player beating against them — each note its lane\'s senza-vibrato voice, a sine brick over it, a bend drawn for the player (the bowed crotales hold: their sine glisses). First take ▾ for the pitches, then ∿ sines.';
        box.innerHTML = '<button type="button" id="sgGo" style="' + BTN + ';border-color:#1E88E5;color:#0d5ea8" title="THE GO: a sine brick and a drawn bend for every selected note — again with another seed draws other behaviours and keeps each brick\'s level">∿ sines</button>'
            + '<label style="color:#6a6a60">seed <input id="sgSeed" type="number" min="1" step="1" value="1" style="width:44px;font:inherit;padding:0 3px;border:1px solid #b9b4a6;border-radius:3px;background:#fff;color:#333" title="the seed of the behaviours — the same seed on the same notes draws the same; ENTER is the GO"></label>'
            + '<button type="button" id="sgOff" style="' + BTN + '" title="take the sines off the selected notes: the bricks gone, the voice and the sound as before — the pitches stay">∿ off</button>';
        const status = el.querySelector('#hqStatus');
        if (status) el.insertBefore(box, status); else el.appendChild(box);
        box.querySelector('#sgGo').addEventListener('click', () => { api.go(); });
        box.querySelector('#sgSeed').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); api.go(); } });
        box.querySelector('#sgOff').addEventListener('click', () => { api.off(false); });
    };
    const hook = () => {
        const H = root.HarmonySel;
        if (!H || H._sgHooked) return !!H;
        H._sgHooked = true;
        const ensure = H.ensure;
        H.ensure = function () { const el = ensure.apply(this, arguments); controls(el); return el; };
        if (H.el) controls(H.el);
        const back = H.back;   // the strip's `back` takes the sines off too, then restores the pitches as it always did
        H.back = function () { try { api.off(true); } catch (e) { console.warn('[sine_go] off:', e); } return back.apply(this, arguments); };
        return true;
    };
    if (!hook()) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(hook, 0)); else setTimeout(hook, 0); }
}

return { isNote, fit, takeChord, applyChord, remember, sineZone, convert, unconvert, install, pn };
}));
