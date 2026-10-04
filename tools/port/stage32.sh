#!/usr/bin/env bash
# 3.2 — stage the data the batteries read, from each source's HEAD (never a working tree), by a list written FIRST.
# Order: piece #4's tuba pages and scores, piece #5's septet pages and scores, then piece #6's data (its files win a same-name path).
# Refuses any path that already exists in this repo before staging — so deleting by the list can never delete an engine file.
set -euo pipefail
SP="$(cd "$(dirname "$0")" && pwd)"
D=/c/Users/jwloy/GitHub/decibel_TENOR_2026
S4=/c/Users/jwloy/GitHub/for_seven_tubas
S5=/c/Users/jwloy/GitHub/septet_2026
S6=/c/Users/jwloy/GitHub/septet_LGMF_2026
L="$SP/staged_list.txt"; SRC="$SP/staged_sources.txt"
: > "$SRC"

# piece #4: every tracked notation/ir file + the nine scores its README names
git -C "$S4" ls-files notation/ir | sed "s#^#S4\t#" >> "$SRC"
for n in tranceA002f piece-final-draft-001 piece-s25-finished01 piece-s23 piece-s27 piece-s28 cloud02-10track cloud02i-b cloud02i-b2; do printf 'S4\tscores/%s.json\n' "$n" >> "$SRC"; done
# piece #5: its four pages + index; the scores they name are added after the pages are staged (second pass below)
for n in piece-septet strike1 trill1 0i-test-b; do printf 'S5\tnotation/ir/%s.ir.json\n' "$n" >> "$SRC"; done
# piece #6: everything on the leave list under bank/ scores/ notation/ir/ notation/video/ probes/
grep -E '^(bank|scores|probes)/|^notation/(ir|video)/' "$SP/leave_list.txt" | sed "s#^#S6\t#" >> "$SRC"

# the list of paths (unique), written before any copy; collisions with what is already here are refused
cut -f2 "$SRC" | sort -u > "$L"
n=0; while IFS= read -r p; do [ -e "$D/$p" ] && { echo "REFUSED: exists here already: $p"; n=$((n+1)); }; done < "$L"
[ "$n" = 0 ] || exit 1
echo "staged list written: $(wc -l < "$L") paths (from $(wc -l < "$SRC") source rows)"

stage() { # $1 = tag, $2 = path
  local repo; case "$1" in S4) repo="$S4";; S5) repo="$S5";; S6) repo="$S6";; esac
  mkdir -p "$D/$(dirname "$2")"
  git -C "$repo" show "HEAD:$2" > "$D/$2" 2>/dev/null || { echo "MISSING at $1 HEAD: $2"; rm -f "$D/$2"; }
}
while IFS=$'\t' read -r tag p; do stage "$tag" "$p"; done < "$SRC"

# second pass: the scores piece #5's pages name (source.score), from piece #5's HEAD unless piece #6 already staged that name
node -e "
const fs=require('fs');const D=process.argv[1];
for(const n of ['piece-septet','strike1','trill1','0i-test-b']){try{const j=JSON.parse(fs.readFileSync(D+'/notation/ir/'+n+'.ir.json','utf8'));const s=(j.source&&j.source.score)||(j.provenance&&j.provenance.score)||'';console.log(n+'\t'+s);}catch(e){console.log(n+'\tERR '+e.message);}}
" "$D" > "$SP/s5_scores.txt"
cat "$SP/s5_scores.txt"
while IFS=$'\t' read -r page sc; do
  [ -n "$sc" ] || continue
  f="scores/${sc%.json}.json"; f="${f#scores/scores/}"; case "$f" in scores/*) ;; *) f="scores/$f";; esac
  if grep -Fxq "$f" "$L"; then continue; fi
  [ -e "$D/$f" ] && { echo "REFUSED second pass: exists: $f"; continue; }
  echo "$f" >> "$L"; stage S5 "$f"
done < "$SP/s5_scores.txt"
sort -u "$L" -o "$L"
echo "staged: $(wc -l < "$L") paths; on disk: $(while IFS= read -r p; do [ -e "$D/$p" ] && echo x; done < "$L" | wc -l)"
