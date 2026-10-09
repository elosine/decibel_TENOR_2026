// tools/language/build_page.js — THE LANGUAGE'S WORKING PAGE (decibel PLAN 2.3; RUNNING_LOG §307).
//
//   node tools/language/build_page.js
//
// Reads bank/language/language.json (his six sound types, the badge format, the candidate signs) and bank/palette/sol.json · clr.json
// (the colours) and writes score/public/language/index.html — served at http://localhost:5500/language/index.html. For each type that
// has candidates: every candidate sign as a BADGE in the format of pieces #1 and #2, large and at its true 36 px, in each colour — for
// his eye. Regenerated at will; a candidate, a colour or a type is a row of the JSON.
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const rd = p => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const L = rd('bank/language/language.json'), SOL = rd('bank/palette/sol.json'), CLR = rd('bank/palette/clr.json');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const B = L.badge;

// a badge: the rounded square, the sign in it in `colour`, at `px` across
const badge = (svg, colour, px) => '<svg class="bdg" width="' + px + '" height="' + px + '" viewBox="0 0 36 36" style="color:' + colour + '"><rect width="36" height="36" rx="' + B.cornerPx + '" ry="' + B.cornerPx + '" fill="' + B.ground + '"/>' + svg.replace(/'/g, '"') + '</svg>';
const sol = n => SOL.colours.find(c => c.name === n).value;
// the colours a sign is tried in: the format's own blue, white, and the SOL colours that stand out on the dark ground
const TRY = [['the format’s blue', B.icon], ['white', '#FFFFFF'], ['SOL_yellow', sol('SOL_yellow')], ['SOL_orange', sol('SOL_orange')], ['SOL_red', sol('SOL_red')], ['SOL_green', sol('SOL_green')], ['SOL_blue', sol('SOL_blue')], ['SOL_purple', sol('SOL_purple')]];

let types = '';
for (const t of L.types) {
  types += '<tr><td class="tn">' + esc(t.name) + (t.nameOptions ? '<div class="opt">' + t.nameOptions.map(esc).join(' · ') + '</div>' : '') + '</td>' +
    '<td>' + (t.braxton ? 'Braxton ' + t.braxton.n + ', ' + esc(t.braxton.name.toLowerCase()) + '<div class="opt">his sign: ' + esc(t.braxton.sign) + '</div>' : '<span class="opt">not one of Braxton’s twelve — the piece’s own</span>') + '</td>' +
    '<td>' + esc(t.inThePiece) + '</td><td>' + (t.symbol ? esc(t.symbol) : '<span class="opt">—</span>') + '</td></tr>';
}

let sections = '';
for (const t of L.types) {
  const cands = (L.candidates || {})[t.id]; if (!cands) continue;
  let rows = '';
  cands.forEach((c, i) => {
    rows += '<div class="cand"><div class="chead"><span class="letter">' + String.fromCharCode(97 + i) + '</span><span class="cname">' + esc(c.name) + '</span></div>' +
      '<div class="cwhy"><div>' + esc(c.from) + '</div><div class="for">' + esc(c.for) + '</div></div>' +
      '<div class="tries">' + TRY.map(([label, col]) => '<div class="try">' + badge(c.svg, col, 96) + badge(c.svg, col, B.sizePx) + '<div class="tl">' + esc(label) + '</div></div>').join('') + '</div></div>';
  });
  sections += '<h2>' + esc(t.name) + ' — the candidates</h2>' +
    (t.braxton ? '<p>Braxton’s Language Type ' + t.braxton.n + '. His sign: ' + esc(t.braxton.sign) + '.</p>' : '') +
    '<p class="note">Each sign twice: large, and at its true size in the score, 36 px. The row of colours is the same for every sign.</p>' + rows;
}

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>The language — working page</title>
<style>
 body { margin: 0; background: #fff; color: #111; font: 15px/1.45 -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; }
 main { max-width: 1180px; margin: 0 auto; padding: 28px 28px 90px; }
 h1 { font-size: 26px; margin: 0 0 4px; } h2 { font-size: 20px; margin: 46px 0 6px; padding-top: 18px; border-top: 2px solid #111; }
 p { margin: 4px 0 10px; max-width: 780px; } .note { color: #555; font-size: 13.5px; }
 table { border-collapse: collapse; margin: 10px 0 0; } td, th { text-align: left; vertical-align: top; padding: 9px 22px 9px 0; border-bottom: 1px solid #ddd; font-size: 14.5px; }
 th { font-size: 12.5px; text-transform: uppercase; letter-spacing: .07em; color: #555; } .tn { font-weight: 600; white-space: nowrap; } .opt { color: #666; font-size: 13px; font-weight: 400; white-space: normal; max-width: 340px; }
 .cand { padding: 20px 0 22px; border-bottom: 1px solid #ddd; }
 .chead { display: flex; align-items: baseline; gap: 12px; } .letter { font: 700 20px Consolas, monospace; } .cname { font-size: 18px; font-weight: 600; }
 .cwhy { margin: 2px 0 12px 32px; max-width: 760px; color: #333; } .for { color: #555; font-size: 14px; }
 .tries { display: flex; flex-wrap: wrap; gap: 14px 20px; margin-left: 32px; } .try { display: flex; flex-direction: column; align-items: flex-start; }
 .try .bdg:first-child { margin-bottom: 8px; } .tl { font-size: 12px; color: #555; margin-top: 4px; }
 .fmt { display: flex; align-items: center; gap: 18px; margin: 10px 0; }
 ol { margin: 6px 0 0 20px; padding: 0; columns: 2; max-width: 900px; } li { margin: 0 0 3px; font-size: 14px; }
</style></head><body><main>
<h1>The language — working page</h1>
<p>The piece's sound types, after Anthony Braxton's Language Music. Each type gets a badge: a sign and a colour. One type at a time; the short attacks first.</p>

<h2>The badge</h2>
<div class="fmt">${badge(B.exampleSvg, B.icon, 96)}${badge(B.exampleSvg, B.icon, 36)}<div><b>The format of pieces 1 and 2.</b><br>${esc(B.from)}<br><span class="note">Shown: the string quartet's flocking badge as drawn there, large and at 36 px.</span></div></div>

<h2>The six types</h2>
<table><tr><th>the type</th><th>after</th><th>in the piece</th><th>its sign</th></tr>${types}</table>

${sections}

<h2>For reference — Braxton's twelve</h2>
<p class="note">From his own handout, in the Anthony Braxton Papers at the Library of Congress. The signs are described here in words; the handout is on the Library's site.</p>
<ol>${L.braxtonTwelve.map(x => '<li>' + esc(x.replace(/^\d+\s/, '')) + '</li>').join('')}</ol>

<p class="note" style="margin-top:48px">Generated ${new Date().toISOString().slice(0, 16).replace('T', ' ')} by node tools/language/build_page.js from bank/language/language.json and bank/palette/sol.json. ${CLR.colours.length} named colours of his own are on the palette page.</p>
</main></body></html>
`;
const out = path.join(ROOT, 'score', 'public', 'language', 'index.html');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log('wrote score/public/language/index.html —', L.types.length, 'types,', Object.values(L.candidates || {}).reduce((a, c) => a + c.length, 0), 'candidate signs,', TRY.length, 'colours each');
