#!/usr/bin/env node
// elec.js — the live electronics in THIS rack: the route, its proof, the engine's start (PLAN 1.1 · 6.1; RUNNING_LOG §51).
//
//   node tools/elec.js probe      # LOOK, change nothing: is ReaRoute there, is Reaper on ASIO, what is routed — and what is missing
//   node tools/elec.js route      # make the sends and the ELEC RETURN track, through the bridge (then he re-saves the rack)
//   node tools/elec.js unroute    # take them out again
//   node tools/elec.js check      # 6.1's PROOF: one note into the rack -> heard by the engine -> heard back on ELEC RETURN
//   node tools/elec.js check --rack-only   # the rack's half alone, no engine: the note reaches the player's track
//   node tools/elec.js latency    # the round trip rack -> engine -> rack, measured (eight clicks, audible, quiet)
//   node tools/elec.js meters     # one note, and what the meters showed: the player, ELEC RETURN, the master — nothing started or stopped
//   node tools/elec.js start      # the engine up and listening — what start_electronics.bat runs
//   node tools/elec.js selftest   # the engine's own test, no hardware, no sound
//
// WHAT IS THE PIECE'S AND WHAT IS THE ENGINE'S (CLAUDE.md § THE SORTING): this file, bank/elec_route.json and the bridge job
// reaper/bridge/jobs/elec_route.lua know THIS rack — its track names, its port. The SuperCollider code and its runner
// (electronics/sc/ · electronics/tools/sc.js) know no piece.
// THE SIGNAL: the composer score -> MIDI -> the player's track in Reaper -> a hardware send -> ReaRoute -> the engine
// (SuperCollider) -> its master -> ReaRoute -> the track ELEC RETURN -> the master he hears. Live, the first three become
// a microphone and the last two a PA; the engine between them is the same.
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const sc = require(path.join(ROOT, 'electronics', 'tools', 'sc.js'));
const CFG = JSON.parse(fs.readFileSync(path.join(ROOT, 'bank', 'elec_route.json'), 'utf8'));
const BRIDGE = process.env.REAPER_BRIDGE || path.join(process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming'), 'REAPER', 'bridge');
const SCD = (name) => path.join(sc.SC_DIR, name);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// a JS value as a Lua literal
function lua(v) {
    if (v == null) return 'nil';
    if (typeof v === 'number' || typeof v === 'boolean') return String(v);
    if (typeof v === 'string') return '"' + v.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
    if (Array.isArray(v)) return '{ ' + v.map(lua).join(', ') + ' }';
    return '{ ' + Object.entries(v).map(([k, x]) => k + ' = ' + lua(x)).join(', ') + ' }';
}

// the bridge job in one of its modes; returns what the job returned
function job(mode, extra = {}) {
    const cfg = { mode, players: CFG.players.map((p) => ({ name: p.name, track: p.track, engineIn: p.engineIn })),
        returnTrack: CFG.return.track, engineOut: CFG.return.engineOut, loopIn: CFG.latencyLoop.engineIn, ...extra };
    const body = 'CFG = ' + lua(cfg) + '\n' + fs.readFileSync(path.join(ROOT, 'reaper', 'bridge', 'jobs', 'elec_route.lua'), 'utf8');
    const tmp = path.join(os.tmpdir(), 'elec_route_' + process.pid + '_' + mode + '.lua');
    fs.writeFileSync(tmp, body);
    const r = cp.spawnSync(process.execPath, [path.join(ROOT, 'tools', 'reaper_job.js'), 'run', tmp], { encoding: 'utf8' });
    try { fs.unlinkSync(tmp); } catch (e) {}
    if (r.status !== 0 && !r.stdout) throw new Error('the bridge did not answer — is Reaper running with decibel_rack open? ' + (r.stderr || '').trim());
    const out = JSON.parse(r.stdout);
    if (!out.ok) throw new Error('the job failed: ' + out.error);
    return out.result;
}

// (never asked while an engine is up: listing the ASIO devices loads each driver, ReaRoute among them, beside a live client)
async function engineSeesReaRoute() {
    if (sc.engineUp()) return { asio: ['not asked — the engine is running'], reaRoute: true, engineUp: true };
    const r = await sc.start(SCD('devices.scd'), { timeoutS: 60, boots: false }).done;
    return r.results[0] || { asio: [], reaRoute: false };
}

function routed(d) {
    return d.ret.found && d.players.every((p) => p.found && p.hardwareSends.some((s) => /rearoute/i.test(s.to)));
}

// what stands between here and a sounding route, in his words, in order
function missing(d, dev) {
    const m = [];
    if (!dev.reaRoute) m.push('ReaRoute is not installed. Close Reaper, run Reaper\'s installer again (the same version, ' +
        'reaper.com/download), tick "ReaRoute ASIO driver" in its list of components, finish, start Reaper.');
    if (d.audio.system !== 'ASIO') m.push('Reaper\'s audio system is ' + d.audio.system + '. ReaRoute needs ASIO: Options > Preferences > ' +
        'Audio > Device > Audio system: ASIO, ASIO driver: UMC ASIO Driver (this machine has used it before).');
    if (dev.reaRoute && d.audio.system === 'ASIO' && !d.reaRoute) m.push('ReaRoute is installed but Reaper shows none of its channels — ' +
        'restart Reaper; if they are still missing, tell the AI what Preferences > Audio > Device shows.');
    if (d.reaRoute && !routed(d)) m.push('The route is not in the rack yet:  node tools/elec.js route  (then CTRL+S in Reaper).');
    return m;
}

function show(d, dev) {
    console.log('Reaper     audio system ' + d.audio.system + ' · ' + d.audio.srate + ' Hz · block ' + d.audio.block + ' · ' + d.audio.out);
    console.log('ReaRoute   in Reaper: ' + (d.reaRoute ? 'yes' : 'NO') + (dev ? ' · seen by SuperCollider: ' + (dev.reaRoute ? 'yes' : 'NO') + '  (it sees: ' + (dev.asio.join(' | ') || 'no ASIO device') + ')' : ''));
    for (const p of d.players) {
        const s = p.hardwareSends.map((x) => x.to + ' (' + (x.mono ? 'mono' : 'stereo') + ', ' + x.dB + ' dB' + (x.sendmode === 0 ? ', post-fader' : ', sendmode ' + x.sendmode) + ')').join(' · ');
        console.log('player     ' + p.name + ' = ' + p.track + (p.found ? ' · fader ' + p.faderDb + ' dB · sends to hardware: ' + (s || 'none') : ' · NO SUCH TRACK'));
    }
    const r = d.ret;
    console.log('return     ' + r.track + (r.found ? ' · track ' + r.index + ' · input ' + r.input + (r.stereo ? ' (stereo)' : '') + ' · monitor ' + r.monitor +
        ' · recmode ' + r.recmode + ' · ' + r.faderDb + ' dB · ' + r.fx + ' effects' : ' · not in the rack'));
    if (d.did) for (const x of d.did) console.log('did        ' + x);
    if (d.error) console.log('REFUSED    ' + d.error);
}

function note(p) {
    const r = cp.spawnSync('powershell', ['-NoProfile', '-File', path.join(ROOT, 'tools', 'note_to_port.ps1'), '-Port', p.port, '-Note', String(p.testNote), '-Vel', '90', '-Ms', '1500'], { encoding: 'utf8' });
    return (r.stdout || '').trim();
}

async function readPeaks(waitMs) {
    const f = path.join(BRIDGE, 'outbox', 'elec_peaks.json');
    for (let t = 0; t < waitMs; t += 200) { if (fs.existsSync(f)) { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) {} } await sleep(200); }
    throw new Error('the meter watch wrote nothing');
}

(async () => {
    const cmd = process.argv[2], flags = process.argv.slice(3);
    if (!cmd || cmd === '-h') { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 12).join('\n')); return; }

    if (cmd === 'selftest') { const r = await sc.start(SCD('selftest.scd'), { timeoutS: 90, onLine: (l) => { if (/^LE_/.test(l)) console.log(l); } }).done; process.exit(r.code); }

    if (cmd === 'start') {
        const players = CFG.players.map((p) => p.name + ':' + (p.engineIn - 1)).join(',');
        const p = sc.start(SCD('session.scd'), { timeoutS: 86400, env: { LE_PLAYERS: players, LE_ECHO: String(CFG.listenEchoSeconds || 0) }, onLine: (l) => { if (/^LE_/.test(l)) console.log(l.replace(/^LE_(INFO|READY|RESULT)\s*/, '').replace(/^LE_ERROR\s*/, 'STOPPED: ')); } });
        process.on('SIGINT', () => { p.kill(); });
        const r = await p.done; process.exit(r.code == null ? 1 : r.code);
    }

    if (cmd === 'probe') {
        const d = job('probe'), dev = await engineSeesReaRoute();
        show(d, dev);
        if (dev.engineUp) console.log('engine     RUNNING (a scsynth on UDP ' + sc.PORT + ') — left alone');
        const m = missing(d, dev);
        console.log(m.length ? '\nMISSING, in order:\n' + m.map((x, i) => '  ' + (i + 1) + '. ' + x).join('\n') : '\nNothing is missing: the route is in the rack.  node tools/elec.js check');
        process.exit(m.length ? 2 : 0);
    }

    if (cmd === 'route' || cmd === 'unroute') {
        const d = job(cmd === 'route' ? 'apply' : 'remove');
        show(d);
        if (!d.error) console.log('\nThe rack is changed and NOT saved — CTRL+S in Reaper is his. (One undo point: "Electronics route".)');
        process.exit(d.error ? 2 : 0);
    }

    // one note, and what the rack's meters showed — with whatever is running left as it is (the engine up or not)
    if (cmd === 'meters') {
        const p0 = CFG.players[0];
        job('watch', { seconds: 7 });
        console.log('note       ' + note(p0));
        const pk = (await readPeaks(12000)).peakDb;
        for (const k of Object.keys(pk)) console.log('  ' + k.padEnd(20) + 'L ' + pk[k].L + '  R ' + pk[k].R + ' dB');
        process.exit(0);
    }

    if (cmd === 'check') {
        const rackOnly = flags.includes('--rack-only');
        const d = job('probe'), p0 = CFG.players[0];
        if (!rackOnly) {
            const dev = await engineSeesReaRoute(), m = missing(d, dev);
            if (m.length) { show(d, dev); console.log('\nMISSING, in order:\n' + m.map((x, i) => '  ' + (i + 1) + '. ' + x).join('\n')); process.exit(2); }
        }
        // TWO PASSES, the same note twice. Pass 1, the engine NOT running: the master holds the player alone — what he
        // hears of the note. Pass 2, the engine running: what it heard, what it sent, what came back.
        // (The track's own meter is NOT that reference: on this rack it reads BEFORE the fader — found 2026-10-04, when a
        // -26 dB track sat at -39 dB on the master, its fader at -13. The master and the engine's own meters are the truth.)
        const lr = (x) => 'L ' + x.L + '  R ' + x.R + ' dB';
        const mono = (x) => Math.round(200 * Math.log10((Math.pow(10, x.L / 20) + Math.pow(10, x.R / 20)) / 2)) / 10;   // what a mono fold of L and R peaks at, at most
        job('watch', { seconds: 7 });
        console.log('note       ' + note(p0) + '   (pass 1 — the player alone)');
        const alone = (await readPeaks(12000)).peakDb;
        const trackMeter = Math.max(alone[p0.track].L, alone[p0.track].R);
        console.log('\n  PASS 1 — the player alone\n    the track\'s own meter      ' + lr(alone[p0.track]) + '   (' + p0.track + ', before its fader)\n    at the master              ' + lr(alone.MASTER) + '   <- what he hears of the note');
        if (rackOnly) {
            const ok = trackMeter > -80;
            console.log('\n' + (ok ? 'THE RACK\'S HALF HOLDS: the note reaches the track.' : 'NOTHING on the track — is the port live, is the track armed?'));
            process.exit(ok ? 0 : 1);
        }
        const run = sc.start(SCD('check_route.scd'), { timeoutS: 90, env: { LE_SECONDS: '10', LE_IN: String(p0.engineIn - 1) } });
        try { console.log('\nengine     ' + (await run.waitFor(/^LE_READY/, 60000)).replace(/^LE_READY\s*/, '')); }
        catch (e) { const r = await run.done; console.log('STOPPED    ' + (r.errors.join(' · ') || e.message)); process.exit(r.code || 3); }
        job('watch', { seconds: 7 });
        console.log('note       ' + note(p0) + '   (pass 2 — with the engine)');
        const both = (await readPeaks(12000)).peakDb;
        const r2 = await run.done, eng = r2.results.find((x) => x.check === 'route');
        if (!eng) { console.log('STOPPED    ' + (r2.errors.join(' · ') || 'the engine gave no result')); process.exit(3); }
        const ret = both[CFG.return.track];
        console.log('\n  PASS 2 — the same note, the engine running\n    heard by the engine        ' + eng.inPeakDb + ' dB\n    sent by the engine         ' + eng.outPeakDb + ' dB' +
            '\n    back on ' + CFG.return.track + '        ' + (ret ? lr(ret) : 'no such track') + '\n    at the master              ' + lr(both.MASTER) + '   (the player and the return together)');
        const pass = trackMeter > -80 && eng.inPeakDb > -80 && !!ret && Math.max(ret.L, ret.R) > -80;
        const direct = mono(alone.MASTER), back = ret ? Math.max(ret.L, ret.R) : null;
        const gain = pass ? Math.round((back - direct) * 10) / 10 : null;
        console.log('\n' + (pass ? 'THE ROUTE HOLDS: the note is heard direct and again through the engine.\nIt comes back at ' + back + ' dB; direct, folded to mono, it is ' + direct + ' dB — ' + gain + ' dB apart.'
            : 'THE ROUTE IS BROKEN at the first line above that reads -150.'));
        fs.writeFileSync(path.join(ROOT, 'probes', 'elec_route_check.json'), JSON.stringify({ when: new Date().toISOString(), player: p0, reaper: d.audio,
            pass1: { trackMeter: alone[p0.track], master: alone.MASTER }, pass2: { engineInDb: eng.inPeakDb, engineOutDb: eng.outPeakDb, ret, master: both.MASTER },
            directMonoDb: direct, returnDb: back, returnMinusDirectDb: gain, engine: eng, pass }, null, 1) + '\n');
        process.exit(pass ? 0 : 1);
    }

    if (cmd === 'latency') {
        const d = job('probe'), dev = await engineSeesReaRoute(), m = missing(d, dev);
        if (m.length) { show(d, dev); console.log('\nMISSING, in order:\n' + m.map((x, i) => '  ' + (i + 1) + '. ' + x).join('\n')); process.exit(2); }
        let r;
        try {
            for (const x of job('loop_on').did) console.log('did        ' + x);
            r = await sc.start(SCD('latency.scd'), { timeoutS: 90, env: { LE_OUT: String(CFG.return.engineOut - 1), LE_IN: String(CFG.latencyLoop.engineIn - 1) } }).done;
        } finally { for (const x of job('loop_off').did) console.log('did        ' + x); }
        const res = r.results.find((x) => x.check === 'latency');
        if (!res || res.roundTripMs == null) { console.log('NO CLICK CAME BACK' + (r.errors.length ? ' — ' + r.errors.join(' · ') : '')); process.exit(1); }
        console.log('\n  the round trip engine -> Reaper -> engine: ' + res.roundTripMs + ' ms  (' + res.roundTripSamples + ' samples at ' + res.sr + ' Hz; ' + res.clicks + ' clicks, the median)');
        console.log('  Reaper\'s block is ' + d.audio.block + ' samples; the engine\'s is ' + res.block + '.');
        fs.writeFileSync(path.join(ROOT, 'probes', 'elec_latency.json'), JSON.stringify({ when: new Date().toISOString(), reaper: d.audio, ...res }, null, 1) + '\n');
        process.exit(0);
    }

    console.error('unknown command ' + cmd); process.exit(2);
})().catch((e) => { console.error(e.message); process.exit(1); });
