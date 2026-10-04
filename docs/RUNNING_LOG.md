# RUNNING LOG — the lab journal of live-electronics-system

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
> **The engine is built while a piece is composed, so two logs run together:** what settles the ENGINE goes here; what settles
> the PIECE goes in the piece's log; each cites the other. The test: could someone write the paper "how this engine was made"
> from this log alone?
>
> **A `§N` in this file is THIS repo's.** Another repo's lab journal is cited as `#N §M`
> (`#6 §805` = `septet_LGMF_2026/docs/RUNNING_LOG.md` §805).

---

# 2026-10-03 — session 1 (Fable, in piece #6's session; the repo made from there)

## §1. The project opens — part 1 of the plan built: the repo, the kit, the plan

**Where it was planned:** not here — in piece #6's lab journal, at the `/postclear` after that repo's checkpoint #4, in place of
the go for the Decibel piece's set-up. The composer's opening words (`#6` LG-348, verbatim there):

> *"Okay, let's have a pre-conversation first. I want to develop a clear set of objectives and a clear plan or route to getting
> to the object objectives. So there are three pieces on the slate right now. The decibel piece, the switch, ensemble switch
> piece, and the live electronics with improviser piece. All three will share a live electronics engine. And that'll be it in
> itself a sort of port from the experimental work I was doing in the live electronics. So that needs to be developed. …"*

**The talk, in order (`#6 §805 … §813`):** his brief → the ONE decision put to him, where the engine lives (A its own repo · B inside
the first piece) → his probe: the components slot INTO the composer score and the notation, "does it still make sense to have
a standalone part?" → the picture corrected: a MODULE SET with named SEAMS, additive, the piece's save the ground truth → his
statement of the process (built in the first piece, landing in the engine as built, the others take it, parallel work) →
the one precision: the files live ONCE on disk (a submodule; a junction and a copy-back rejected) → **A decided** → the eight
objectives agreed → his orientation question (the protocol written, not yet run; two plans live) → the route's ten parts agreed →
his scenarios checked (the growing collection · the graphics and live analysis · the composer-score paradigms · the mastering
chain · the playback route · OSC) → parts 11 and 12 added, the flexibility a RULE → his three words for the repo:
*"live-electronics-system (if available), public, push after every commit"* → part 1 laid out → his *"go here"*.

**What was built (part 1, this commit):**
- `LICENSE` (MIT) · `.gitattributes` carried byte-exact from piece #6 @ `06ce0ac`; a `.gitignore` written for a public repo.
- The method docs carried whole with one provenance line each (the protocol's 2.4): `AI_METHODOLOGY` · `SESSION_HYGIENE` ·
  `PLANNING_METHOD` · `HOW_WE_WORK` · `SESSION_PROTOCOL` · the `checkpoint` and `postclear` commands.
- The record docs from the home's skeletons (`composition-system/skeletons/`), filled for an ENGINE: `CLAUDE.md` · `README.md` ·
  `docs/PROJECT_JOURNAL.md` · `docs/PLAN.md` · `docs/PLANNER.md` · this file · `docs/NITS.md`.
- `docs/SEAMS.md` · `docs/TAKE.md` — each saying what it will hold (parts 3 and 8).
- **CLAUDE.md checked heading by heading against piece #6's** (principle 19): READ FIRST ✓ (+ his "he keeps his own time" of
  `#6 §806`) · Orient from docs ✓ (the sketch pad's line replaced by where the brief lives) · the lab journal ✓ (the composing
  extension kept, re-read for an engine built during composing) · **the morph notes — NOT carried** (the pieces' tool) · THE RHYTHM ✓
  whole · Apps ✓ (none of its own) · Reference repos ✓ · Git ✓ (his push rule) · Checks ✓ (none yet).
- **Not carried, by design, his to reverse:** `COMPOSITION_NOTES` (a musical idea about the electronics is an LG note in the piece
  that has it — the brief is `#6` LG-340 … LG-351) · `PERFORMANCE_NOTES` · `SWEEP_LIST` · `PROTOCOL_DEVIATIONS` (the protocol's
  runs are the pieces'; a deviation of THIS start is a line here) · `MORPH_NOTES`.
- **The home:** one entry in `composition-system/INDEX.md` under the module manifest (the engine its first member) and one line
  in its `LOG.md`. **The planning repo's lists: not touched** — only at his word.
- **Deviations of this start from the protocol's § 2, noted here (no register):** 2.1 the profile does not apply (an engine has no
  score type; its kind of start is "a port from a sandbox into a module set") · 2.3 the names: no ports, no Reaper guard, no piece
  chain — the repo's name alone · 2.5 the record docs cut to seven (above) · 2.6 the planning repo untouched.

**Nothing of code.** The pieces untouched. Next: the part he names.

## §2. His pick after part 1: part 9's first run — the Decibel piece's repo

**What prompted it:** after part 1, his *"What are next steps then?"* — then, on Opus, *"checkpoint here, then start the Decibel repo after clear"* (`#6 §815`).

**The structural shape he was given** (six steps, NOT an order in time — the order is his, `#6 §806`): a checkpoint of piece #6's repo · part 9's first run, the Decibel piece's repo by the new-piece protocol (a normal port: copy-forward · both layers · the scrolling score — his words, `#6` LG-348) · one read of the sandbox `live-electronics-engine`, independent of the port (what it is built on decides the sound seam) · parts 3 and 4 laid out, needing that read · part 5 the first sound — the trigger in the Decibel composer score and one filter heard on a live note; the FIRST TAKE, so part 8's recipe is written and proven there; needing the Decibel repo and parts 3 · 4 · then composing: parts 6 and 11 grow by need, 7 and 12 when notating comes, the other two set-ups whenever he wants them.

**Decided:** his pick — the checkpoint, then the Decibel repo. That run's record and its deviations register live in the Decibel piece's repo. **Here nothing is in hand** until the first take.

**Why the engine waits on a piece:** it has no app of its own; it is built where he hears it. The first code lands here from inside the first piece's folder (the submodule), at part 5.
