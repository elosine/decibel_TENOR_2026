# APPROVED 2026-10-24 — _Approaching_ (title tentative), Draft 02: the print score

**Composer, 2026-10-24:** *"print score good"*

Draft 02 — the cut under ten minutes for the TENOR 2027 submission (running order step 3c; RUNNING_LOG §495). TWO VERSIONS, the
same 59 A3 landscape pages (3 front matter + 56 of music, 10.32 s a page), every gate PASS (frame · front · PDF · pages · edges):

| file | what | sha256 |
|---|---|---|
| `Approaching-Draft02-score-JYang.pdf` | REGULAR — the cover with his name, the instructions page as it is | `dc99aeab9902a6bfbf1fde0f92db7266ebfdeb1b5becdeaf8a417fce3f0fc687` |
| `Approaching-Draft02-score-review.pdf` | REVIEW (double-blind) — the cover without the name (`cover-review.json`), the instructions' review copy (`docs/notation_instructions/review.html`: no name line, no YouTube demo line) | `43d6757ae0c15cd56d57804a98bd0e67d38bdcc3fe1ee3d31cf03a2708b9878b` |

The PDFs' properties: the title `approaching-d02 — print score`, no author. **Not in git here** (`print/score/**/*.pdf` is ignored) —
the copies for the submission are: `submission/tenor-2027/regular/Approaching-score-JYang.pdf` · `submission/tenor-2027/review/Approaching-score.pdf`.

**Commands (5 min each):**
- regular: `IR=approaching-d02 OUT=print/score/Approaching-Draft02-score-JYang.pdf AT=20,80,150,260,380,500 bash print/score/build.sh`
- review: the same with `OUT=print/score/Approaching-Draft02-score-review.pdf` and `--coverFile print/cover/cover-a3-landscape-review.svg --insFile docs/notation_instructions/review.html`
  (the cover first: `powershell -ExecutionPolicy Bypass -File print/cover/make_cover.ps1 -Words print/cover/cover-review.json -Out print/cover/cover-a3-landscape-review.svg`; the instructions' copy: `node tools/review_copy.js`)

**Tag:** `Approaching-Draft02-print_1.0`.
