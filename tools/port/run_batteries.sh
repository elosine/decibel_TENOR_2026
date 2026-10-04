#!/usr/bin/env bash
# 3.2 / 3.5 — run every battery once, default arguments only (never --update / --save / --write / --freeze).
# The list after 3.8 (2026-10-04): the twelve checks of piece #5's cast are retired, v0_proofs is a generator and is not run.
# After 3.3: a check whose default page became this piece's is given piece #6's staged page by name (--ir piece-lgmf).
# usage: run_batteries.sh <tag>      → logs in scratchpad/batt-<tag>/, the table in scratchpad/batt-<tag>.tsv
set -u
SP="$(cd "$(dirname "$0")" && pwd)"
D=/c/Users/jwloy/GitHub/decibel_TENOR_2026
TAG="${1:-run}"; OUT="$SP/batt-$TAG"; mkdir -p "$OUT"; TSV="$SP/batt-$TAG.tsv"; : > "$TSV"
cd "$D"
CMDS=(
"node tools/test_animobj.js" "node tools/test_graphic.js" "node tools/test_identity.js --score lgmf-ref"
"node tools/test_layout.js" "node tools/test_pattern_fit.js" "node tools/test_render.js"
"node tools/test_snapshots.js" "node tools/test_splice.js" "node tools/test_stamps.js"
"node tools/test_step_dynamics.js" "node tools/test_surge_run.js" "node tools/test_written_pitch.js"
"node tools/accel_calc_check.js" "node tools/dyn_table_check.js" "node tools/eh_figure_check.js"
"node tools/palette_check.js --quiet"
"node tools/roster_check.js --quiet" "node tools/sequence_check.js"
"node tools/sequence_notation_check.js" "node tools/spectrum_check.js" "node tools/unsaved_check.js"
"node tools/vib_marks_check.js" "node tools/vibes_pitch_check.js"
"node tools/check_ceilings.js --all" "node tools/check_rules.js" "node tools/check_screen_edges.js --ir piece-lgmf"
"node tools/check_print_edges.js --ir piece-lgmf" "node tools/check_print_frame.js --ir piece-lgmf" "node tools/check_print_front.js --ir piece-lgmf" "node tools/check_print_pages.js --ir piece-lgmf"
"node score/tools/check_containers.js" "node score/tools/check_cresc_deck.js" "node score/tools/check_cresc_panel.js"
"node tools/ir_validate_battery.js" "node tools/model_bank.js --validate" "node tools/decisions_needed.js"
"python probes/selftest_bend.py" "python probes/selftest_bend_analyzer.py" "python probes/selftest_ranges.py" "python probes/selftest_sweep.py"
)
i=0
for c in "${CMDS[@]}"; do
  i=$((i+1)); name=$(echo "$c" | sed -E 's#^(node|python) ##; s#[ /]#_#g'); log="$OUT/$name.log"
  t0=$(date +%s)
  timeout 420 $c > "$log" 2>&1; rc=$?
  t1=$(date +%s)
  last=$(grep -v '^[[:space:]]*$' "$log" | tail -1 | tr '\t' ' ' | cut -c1-150)
  printf '%s\t%s\t%ss\t%s\n' "$rc" "$c" "$((t1-t0))" "$last" >> "$TSV"
done
awk -F'\t' '{printf "%-3s %-46s %5s  %s\n", $1, $2, $3, $4}' "$TSV"
echo "exit 0: $(awk -F'\t' '$1==0' "$TSV" | wc -l)   non-zero: $(awk -F'\t' '$1!=0' "$TSV" | wc -l)   of $i"
