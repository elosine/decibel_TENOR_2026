# RUNNING LOG — the lab journal

> **Why this exists** (composer, 2026-09-03, said at the opening of piece #5 and standing
> since): *"I'd like to keep a running journal like lab notes, so I can look back on
> decisions or comments, theory, philosophy, etcetera, or how we actually made something —
> if I wanted to write a paper later about this. And I would expect the AI agent to do this
> automatically as a habit."*
>
> Rules (from `live-electronics-engine`, piece #5's D4, carried here): written **as the work
> happens**, at the end of any exchange that produced a decision, a result, a rejection, a
> measurement, or a theoretical point — never at session end. Each entry: what prompted
> it, in the composer's words; what was tried, in order; the numbers; what was rejected
> and why; what was decided and why that rather than the alternative. **Append-only;
> corrections are new entries.** Entries are numbered §N and never renumbered.
> Current state lives in `PROJECT_JOURNAL.md` §2 and `PLAN.md`; this is the trail.
>
> **It does not pause when the building stops and the WRITING starts** (composer, 2026-09-18):
> every compositional exchange that settles something goes here as it happens. The test:
> could someone write the paper "how this piece was written" from this log alone?
>
> **A `§N` in this file is THIS piece's.** Another piece's lab journal is cited as `#N §M`
> (`#6 §800` = `septet_LGMF_2026/docs/RUNNING_LOG.md` §800).

---

# 2026-10-04 — session 1 (Claude Code desktop, Opus — written from piece #6's chat)

## §1. The project opens

- **What prompted it — his words, said in piece #6's chat.** There was no first message in this repo: it was made from
  there (a line in `docs/PROTOCOL_DEVIATIONS.md`). On 2026-10-03: *"checkpoint here, then start the Decibel repo after
  clear"* (`#6 §815`). On 2026-10-04, to the profile's three lines: *"clarify?"*, then *"yes And then can we organize the
  Claude chat as well? Will we just keep working since I've been clearing? Will we just rename and keep working here? Or
  move to another chat? But yes, normal port."* To the home's three unwritten items: *"none now"*. To the repo's three
  questions: *"all a"*.
- **What this piece is:** the first of THREE electronics pieces (the Decibel piece · the Switch~ piece · the improviser
  piece) that share one live-electronics engine — and the FIRST RUN of the new-piece protocol, v1
  (`composition-system/protocol/NEW_PIECE_PROTOCOL.md`). The thinking behind both is in piece #6's lab journal: `#6 §786 …
  §799` the protocol · `§800 … §804` the home · `§805 … §815` the pre-conversation and the engine's plan · `§816 … §818`
  this piece's first answers and this build. His words whole: `#6` COMPOSITION_NOTES LG-334 · LG-337 … LG-351.
- **Decided — the journal's D1 … D5:** the profile, a normal port (copy-forward from piece #6 · both layers · the animated
  scrolling score) · the ensemble, not final, built around the full Decibel ensemble as announced · the repo
  `decibel_TENOR_2026`, public, pushing after every commit · the live electronics from the shared engine, a git submodule,
  taken at the engine plan's parts 5 · 8 · he keeps his own time.
- **What container 2 made, step by step:**
  - **2.1 the profile** — confirmed in one line, after a plain-words explanation of its three terms.
  - **2.2 the repo** — his three answers; the name checked free on GitHub and the folder absent before anything was
    written.
  - **2.3 the names** — the table in journal §1: the stub `decibel` · the chain `piece-decibel` · the package
    `decibel-tenor-2026` · the Reaper guard `decibel_rack` · the ports 5500 / 5000. They are the AI's by piece #6's
    pattern and take effect at container 3, where the code that reads them is.
  - **2.4 the method docs carried whole from piece #6 @ `2e5ac56`,** one provenance line each: AI_METHODOLOGY ·
    SESSION_HYGIENE · PLANNING_METHOD · HOW_WE_WORK · SESSION_PROTOCOL · MORPH_NOTES · the checkpoint and postclear
    commands · `.gitignore` (a header for a public repo) · `.gitattributes` · LICENSE. The harvest's lines: H-2 · H-3 ·
    H-6 and the MACHINE LESSONS in a section added to HOW_WE_WORK; THE VERIFICATION RECIPE as a doc of its own,
    `docs/VERIFICATION_RECIPE.md` — both carried verbatim from piece #6's journal §2, with piece #6's names in them until
    the code is here.
  - **2.5 the record docs from the home's skeletons @ `1ca2d06`:** CLAUDE.md · README · PROJECT_JOURNAL · PLAN ·
    PLANNER · this log · COMPOSITION_NOTES · NITS · SWEEP_LIST · PERFORMANCE_NOTES · PROTOCOL_DEVIATIONS. The standing
    text of each is the skeleton's, byte for byte; only the `‹…›` slots were filled, by a script that refuses a slot it
    cannot find exactly once. CLAUDE.md checked HEADING BY HEADING against piece #6's: READ FIRST · Orient from docs ·
    the lab journal · the morph notes · THE RHYTHM · Apps · Reference repos · Git — all eight present; THE SHIELD named
    under the checks; the device-sheet rule carried. PLAN § 0 is the protocol's table for this profile, and names the
    engine.
  - **2.6 outside the repo** — nothing: `.claude/launch.json` travels with the code (container 3; whether piece #6's
    server gets a side-by-side entry is asked there) · the planning repo's lines at his word only, not touched.
- **Added beyond the skeleton, and why:** two standing rules that lived only in the AI's memory for piece #6's folder —
  he keeps his own time · never a history rewrite — and "how to put things to him" are written into CLAUDE.md: the AI's
  memory is per folder, and this repo starts with none.
- **Nothing of code.** The next step is container 3, the engine copied forward — asked first.
