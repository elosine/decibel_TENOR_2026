#!/usr/bin/env bash
# 3.1 the copy, byte-exact. Source piece #6 at its HEAD; nothing is written there.
#   366 files: one tar pipe from the source's working tree (unmodified there, so = HEAD after normalization)
#     3 files: `git show HEAD:` (modified in the source's working tree and his)
# Proof 1: cmp each of the 366 against the source file.
# Proof 2 (run after `git add`): the staged blob hash of all 369 = the source commit's blob hash.
set -euo pipefail
SP="$(cd "$(dirname "$0")" && pwd)"
S=/c/Users/jwloy/GitHub/septet_LGMF_2026
D=/c/Users/jwloy/GitHub/decibel_TENOR_2026
HEADS=$(git -C "$S" rev-parse HEAD)
[ "${HEADS:0:7}" = "0d70fda" ] || { echo "STOP: the source HEAD moved: $HEADS"; exit 1; }

printf '%s\n' bank/morph_models.json bank/panel_snapshots.json bank/sequences.json > "$SP/from_head.txt"
grep -Fxv -f "$SP/from_head.txt" "$SP/copy_list.txt" > "$SP/from_tree.txt"
echo "from the tree: $(wc -l < "$SP/from_tree.txt")   from HEAD: $(wc -l < "$SP/from_head.txt")"

# the guard, again, at the moment of the copy: none of the tree files may be modified or untracked in the source
if git -C "$S" status --short -- $(tr '\n' ' ' < /dev/null) | awk '{print $2}' | grep -Fxq -f "$SP/from_tree.txt"; then
  echo "STOP: a path to copy is modified in the source"; exit 1
fi

tar -C "$S" -cf - -T "$SP/from_tree.txt" | tar -C "$D" -xf -
while IFS= read -r p; do
  mkdir -p "$D/$(dirname "$p")"
  git -C "$S" show "HEAD:$p" > "$D/$p"
done < "$SP/from_head.txt"

ok=0; bad=0
while IFS= read -r p; do
  if cmp -s "$S/$p" "$D/$p"; then ok=$((ok+1)); else bad=$((bad+1)); echo "DIFFERS $p"; fi
done < "$SP/from_tree.txt"
echo "cmp against the source's working tree: $ok / $(wc -l < "$SP/from_tree.txt") identical, $bad differ"
[ "$bad" = 0 ]
