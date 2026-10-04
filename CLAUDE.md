# decibel TENOR 2026 — the Decibel piece

**Title: ‹the working title — it may come later›**

Composition #7 in the custom-composition-system lineage
(#1 `string_quartet_no1-composer` → #2 `composition_for_two_pianos_and_two_percussion`
→ #3 `for_bass_clarinet_harp_and_accordion` → #4 `for_seven_tubas` → #5 `septet_2026`
→ #6 `septet_LGMF_2026` → this).

Written for **the Decibel ensemble** (Decibel New Music), as a submission to **the TENOR conference's call** — in his words
(`#6` COMPOSITION_NOTES LG-334, 2026-10-03): due November 14, the instrumentation "not final". **The AI has not read the
call or the ensemble's site**; nothing was looked up. **He keeps his own time** (journal D5; his words, `#6 §806`: *"I don't
need AI to do any schedule keeping for me or deadline watching … I'll worry about the order in which things are meant to be
done in"*): the AI gives the parts, the dependencies and what is efficient — never a route framed around a date.

Instrumentation — **NOT FINAL** (journal D2; his words, `#6` LG-334 · LG-348): **bass flute · bass clarinet · viola · cello ·
percussion · electronics** — the Decibel ensemble as announced. The piece is built around the full ensemble; if the call
scales it back, the re-orchestration is his.

**THE PROFILE** (the new-piece protocol's 2.1 — it decides which of containers 3 … 8 this piece runs):

- the kind of start: **copy-forward** — from piece #6, `septet_LGMF_2026` (journal D1; his word 2026-10-04, *"yes … normal port"*)
- the layers taken: **both** — the instrument and the score
- the score type(s): **the animated scrolling score**
- the protocol version run: **v1** — `composition-system/protocol/NEW_PIECE_PROTOCOL.md`; this piece is its FIRST RUN

This piece inherits piece #6's stack — composer score app, sandbox, notation IR + engine, print, video — by
**copy-forward with the instrument palette rewritten** (journal D1; the protocol's container 3). **NOT DONE YET: this repo
holds the kit only, no code.** The delivery format is the lineage's: an animated scrolling score with the animated
devices; a presentation score (video + print); the performance score later.
**The IR contract (inherited, #5's D9):** the composer save is the ground truth; the IR is derived from it by the
extractor and is the single source for every downstream score.
**The live electronics (journal D4):** this is one of the THREE electronics pieces (the Decibel piece · the Switch~ piece ·
the improviser piece) that share ONE engine — `live-electronics-system` (`C:\Users\jwloy\GitHub\live-electronics-system`,
public). The engine is a MODULE SET with named SEAMS that drops into this stack ADDITIVELY; this repo takes it as a **git
submodule**, by that repo's `docs/TAKE.md`, at the engine plan's parts 5 · 8 — **not at set-up**. The generic machinery
lives in the engine; the USES (which note · which effect · which glyph · when) live in this piece's save.
Libraries: not chosen — the protocol's container 4.

**State of the piece (keep this line current):** **► 2026-10-04 (Opus, RUNNING_LOG §1): THE REPO AND ITS KIT ARE MADE — the
new-piece protocol's container 2, its first run: the method docs carried from piece #6, the record docs from the home's
skeletons, the names fixed. NO CODE YET. ► NEXT: `/session-start` in a NEW chat opened in THIS folder, then ASK to begin
container 3, the engine copied forward — raising first the seven small fixes the protocol makes in piece #6 BEFORE the copy
(3.8) and his uncommitted files there. Journal §2's block SESSION 1 OPENS ON THIS is the cold-start block.**

## READ FIRST — how to work here

**`docs/AI_METHODOLOGY.md`** is the composer's standing instruction on scoping, decisions,
and confidence (inherited unchanged from piece #4 by way of #5). It governs everything below
and outranks the working-preference docs where they conflict. In short: fix what blocks the
piece and flag the rest to `docs/NITS.md` · don't make the composer decide minutiae ·
prefer one robust build over a fragile one · **a confidence claim must be verified in the
running app** · no clear evidence means no diagnosis.

The composer's own rule for a port (said of the last one, 2026-09-03; it holds here):
*"I don't want to get too bogged down in technical details of porting and code and such,
but I want to do a good, solid job and not leave out things now that might bite later ...
leaving everything we can for when the time comes."* Keep the conversation at the
conceptual level; consult the code yourself.

**How he reads (his user-level CLAUDE.md, 2026-08-24):** succinct
language, clear spatial division between chunks, short lines, one idea per chunk, bullets
first. A one-line TL;DR leads any reply over two paragraphs. One step at a time.

**A NEW NOTATION BEGINS WITH A DEVICE SHEET** (`docs/PLANNING_METHOD.md` § THE DEVICE SHEET): the rules are
`notation/registry/rules.json`, read through the generated `docs/ENGRAVING_RULES.md`; change a ROW, never a code number.
*(Both files arrive with the copy-forward, container 3; the rule stands from the first commit.)*

**How to put things to him** (his user-level CLAUDE.md, 2026-10-03): plain words · what it IS, what he is meant to
understand, THE ONE DECISION · no vocabulary the AI coined · a one-line answer must be possible · one topic at a time ·
IDs always with their names.

## Orient from docs, not from scanning

- **What the pieces share — the index, read at every session start:** `composition-system/INDEX.md`
- **ANY WORK ON THE SOUND PATH — READ THIS FIRST:** `docs/DYNAMICS_LAW.md` *(arrives with the copy-forward, container 3;
  until then `septet_LGMF_2026/docs/DYNAMICS_LAW.md`)* — the two kinds of note (a STRUCK note: the velocity IS the dynamic ·
  a SHAPED note: struck at mf, the fader normalized 0 → 127), moving CC7 on the curve channels only
- **The shared live-electronics engine:** `live-electronics-system` — its `docs/PLAN.md` (twelve parts) · `docs/SEAMS.md` ·
  `docs/TAKE.md`; ITS journal §2 is the cold-start block for engine work
- **How to verify without touching his work:** `docs/VERIFICATION_RECIPE.md` (the harvest's H-1 — the throwaway server,
  the stubs, the shield's before / after; the names in it are piece #6's until the code is here)
- **What now / what next:** `docs/PLANNER.md` — the **NOW ►** line, then the outline
- **Living plan:** `docs/PLAN.md` — stable IDs; rules in its header; its § 0 is the protocol, for this piece's profile
- **Session state, decisions:** `docs/PROJECT_JOURNAL.md` — §2 Resume Here first
- **The lab journal:** `docs/RUNNING_LOG.md` — append-only, written as the work happens
- **The sketch pad:** `docs/COMPOSITION_NOTES.md` — the composer's musical ideas, verbatim
- **Building a plan item / analyzing an issue for the plan:** `docs/PLANNING_METHOD.md` — three phases, fixed formats
- **Where this start left the protocol:** `docs/PROTOCOL_DEVIATIONS.md` — one line at the moment of each deviation
- **Faults met while composing:** `docs/SWEEP_LIST.md` · **Deferred, real but not now:** `docs/NITS.md`
- **The performance notes — what they must cover, collected as decided:** `docs/PERFORMANCE_NOTES.md`
- **Working preferences & routines:** `docs/HOW_WE_WORK.md` · `docs/SESSION_PROTOCOL.md`
  · `docs/SESSION_HYGIENE.md` (clear between chunks; the docs are the handoff)
- **The start, where it stands:** `docs/PLAN.md` § 0 — the protocol's containers for this profile, each with its status
- ‹this piece's own pointers, added as the docs appear: the settings that live only in his plugins · the notation standards · the tool docs›

Do NOT scan or analyze the codebase unprompted. Name the question first, then read only
what answers it. High bar for subagents / background processes.

**After `/clear` + `/postclear` (his standing rule, 2026-09-11):** play back, then **STOP
and ask**. No edits, no builds, no tool calls beyond the resume reads. Start only on his
word. At `/session-start`: orient, agree the agenda, then work.

## Standing practice: the lab journal (composer, 2026-09-03 — not optional, never asked for)

> *"I'd like to keep a running journal like lab notes, so I can look back on decisions or
> comments, theory, philosophy, etcetera, or how we actually made something, if I wanted
> to write a paper later about this — and I would expect the AI agent to do this
> automatically as a habit."*

The rules, adopted from `live-electronics-engine` (its CLAUDE.md and `docs/journal/README.md`):

- **When:** at the end of any exchange that produced a decision, a result, a rejection, a
  measurement, a theoretical or philosophical point, or a question worth remembering.
  Not at session end — by then the reasoning has blurred.
- **What each entry carries:** what prompted it, in the composer's words, quoted not
  paraphrased · what was tried, in order · the numbers · what was rejected and why (dead
  ends at the same weight as successes) · what was decided, and why that rather than the
  alternative · corrections as NEW entries, never edits.
**EXTENDED TO THE COMPOSING ITSELF (composer, 2026-09-18, at the start of phase 1):** *"could you remember to take
journal notes during the comp process and remind somehow future agents to do the same, lab notes so if I want to come back
and write a paper on how I wrote this piece."* The lab journal does not pause when the building stops and the WRITING
starts. Every compositional exchange that settles something goes into `RUNNING_LOG.md` as it happens — the material chosen
and why, what was tried and rejected, what he heard, the numbers behind a harmonic or rhythmic decision, the theory or the
reference behind a move. His musical ideas still go to `COMPOSITION_NOTES.md` verbatim; the RUNNING_LOG is where the
REASONING and the process live. **The test: could someone write the paper "how this piece was written" from the log alone?**
Future agents: this is not optional and he will not ask for it.

- **Append-only.** The journal is the record of how the thinking went; it is never tidied.
  Current state lives in the plan, the journal §2 and the READMEs, which are rewritten freely.
- **The sketch pad is the same habit for musical ideas:** every compositional idea the
  composer voices goes into `docs/COMPOSITION_NOTES.md` verbatim, dated, the moment it is
  said — with the AI's reading kept separate and marked as such.

## Standing practice: the morph notes (composer, 2026-09-06 — #5's CN-29)

> *"I want to institute a process where we're taking notes in a central document that will inform the eventual revision."*

Every remark about the morph tool — an awkwardness, a wish, a piece-specific adjustment made, what an all-purpose tool would
need — goes into **`docs/MORPH_NOTES.md`** §3 the moment it is said, dated, verbatim, the AI's reading marked. The tool is
adjusted for the current use now; the file is the memory for its revision into *"an easier to use all purpose tool"* after the
last piece or this one. Not optional, never asked for — the lab journal's rule, for one tool. The file was carried WHOLE from
piece #6 at this piece's start (2026-10-04), as #6 carried it from #5; its §3 stays append-only and continues here. The
morph tool itself arrives with the copy-forward (container 3); whether this piece uses it is his, later.

## THE RHYTHM — next steps · model · clear (standing, composer 2026-08-23; carried whole 2026-09-17)

*(It was in piece #4's CLAUDE.md and the copy-forward to piece #5 dropped it, so it loaded
in no septet session for a week and the advice came only sometimes — his own verdict,
2026-09-10: "This was happening for a while, but then is inconsistent." It is carried here
from the first commit, deliberately.)*

**REFINED by him, 2026-09-18 (guidelines, not hard rules — his user-level CLAUDE.md, "The shape of a working reply"):**
*"the next model clear dialog is good, but lets keep that more focused and local, only when we are moving on to something
that needs a model change or clear"* — and *"no more things left to do, or left pending or even whats next unless I
specifically ask."* So **in the CHAT:** model / clear advice only at a real switch point, one or two lines; no next-steps
list unless he asks; replies are a goal heading, a short ✓ trail, the one thing in hand with a brief why per step, and ONE
compact notes section at the bottom for the honest side-matter. **And (2026-09-18, after the key-mapping sweeps):**
*"avoid unnessary extra work unless asked for, so like verifications and such unless we write these into a plan as necessary
verifications and qc"* — no probe, no cross-check, no QC pass that he did not ask for or that the plan does not name as a
required step; if something looks worth checking, ONE line offering it, and he decides. This does not relax
`AI_METHODOLOGY`'s rule that a confidence CLAIM must be verified in the running app — unverified simply means unclaimed.
**In the DOCS nothing changes:** journal §2's NEXT STEPS ·
MODEL · CLEAR table is still kept current — it is the handoff, and it is what makes the chat free to stay on one thing.
The paragraph below is the 2026-08-23 original; read it through this.

At every juncture — a chunk wrap, a milestone, a mode change (execution ↔ conversation),
or when asked "where are we" — the AI **states the next 2–4 logical steps, each with a
recommended model and whether to clear before it**, and **says out loud when a good clear
or switch point has arrived** ("this is a good time to clear", "switch to Opus for this").
Not when asked — as a habit, like the lab journal. The rule for the recommendation is in
`docs/SESSION_HYGIENE.md` § Model strategy (Fable = judgment / verdicts / design;
Opus = executing a written plan; clear at milestones and mode changes; the cold-execution
test before any clear).

**The running thread lives in `docs/PROJECT_JOURNAL.md` §2 → "NEXT STEPS · MODEL · CLEAR".**
Keep it current as steps complete — it is the first thing a model reads after a clear, and
it must say what is next, with what model, right now.

**Fable's allotment is separate and is the one he watches** (composer, 2026-09-10). So the
routing advice is also credit advice, and these bind every Fable turn:
- **Fewest round trips.** Batch independent reads and tool calls into one response; no
  exploratory reads; name the question before opening anything.
- **No screenshots unless the screenshot IS the proof he asked for.** `read_page` otherwise.
- **Never spawn a subagent on Fable.** If one is ever justified, pass `model: "sonnet"`.
- **Wrap on Opus.** `/checkpoint` and `/session-end` are mechanical work at the long,
  expensive end of a session: switch to Opus, wrap, `/clear`, switch to Fable, `/postclear`.
- **A `Resume reads:` list names what the NEXT STEP needs, not what the last session wrote.**
  Every line on it is re-read in every turn of the session that follows.

## Apps

- **Not here yet — the apps arrive with the copy-forward (the protocol's container 3).** The names fixed at 2.3
  (2026-10-04; journal §1 has the table): the composer score on **5500**, the sandbox on **5000** — the next pair in the
  lineage (#3 5100/4600 · #4 5200/4700 · #5 5300/4800 · #6 5400/4900).
- ‹**Each app:** how it is started · what it is — written when it runs here.›
- ‹**`.claude/launch.json`:** the names · a throwaway server for verification · a `<prev>-<port>` entry that runs the
  previous piece's server side by side while it is unfinished, removed when it is.›
- ‹**The MIDI ports** — their prefix, and why: loopMIDI ports are machine-global and the last piece's rack may still be live.›
- ‹**The notation app · print · video** — if the piece takes THE SCORE layer.›

⚠ **Standing warnings:** never bind **5400 / 4900** (piece #6's) or **5300 / 4800** (piece #5's) · the AI never holds his
port and never saves from its own browser pane · the in-app browser has no Web MIDI, so every MIDI path is verified on his
Chrome · ‹the rest arrive with the code›

**Checks this piece owns:** none yet — every battery arrives with the copy-forward and is classified ONCE there (3.2); among
them **THE SHIELD** (`tools/layout_shield.js` — run before and after ANY layout change).

## Reference repos (read-only context)

- **#6** `C:\Users\jwloy\GitHub\septet_LGMF_2026` — **the source of the port** (_Recombination_, submitted 2026-10-03).
  Its docs are the richest and the most recent: `RUNNING_LOG.md` §1–§36 is the record of the LAST port; §786 … §818 is how
  THIS start was planned and begun; `docs/HARVEST.md` is what it hands to this piece; its journal §3 Principles · §4
  D1–D62 · §5 Playbooks; the tool docs. **It has uncommitted files that are the composer's own — never stage, move or edit
  anything there; a copy-forward takes the piece's files from GIT or asks him** (`#6` journal §2).
- **The home** `C:\Users\jwloy\GitHub\composition-system` — what the pieces share: `INDEX.md` first, then
  `protocol/NEW_PIECE_PROTOCOL.md` (the LIVING protocol; this piece is its first run).
- **The engine** `C:\Users\jwloy\GitHub\live-electronics-system` — the shared live-electronics engine (above).
- **The sandbox** `C:\Users\jwloy\GitHub\live-electronics-engine` — his experimental live-electronics work; the engine's
  first contents are ported from it (the engine plan's part 2).
- **The earlier pieces, each the source named:** **#5** `C:\Users\jwloy\GitHub\septet_2026` · **#4**
  `C:\Users\jwloy\GitHub\for_seven_tubas` · **#2** `C:\Users\jwloy\GitHub\composition_for_two_pianos_and_two_percussion`
  (the percussion; the ensemble algorithms of `#6` LG-341) · **#1** `C:\Users\jwloy\GitHub\string_quartet_no1-composer`
  (the Xsample strings) · **#3** `C:\Users\jwloy\GitHub\for_bass_clarinet_harp_and_accordion` (the extracted sampler
  manuals; the bass clarinet).

Consult only when a specific named question requires it. Never edit them.
**The home and the engine are the two exceptions:** each is written to by its own rules (both push after every commit),
in a session opened there or at his word.

## Git

- Commit at the natural wrap of an approved chunk; reference plan IDs in messages.
- Stage **explicit paths only, never `git add -A`**.
- **Push automatically after every commit** (journal D3 — ASKED at the protocol's 2.2, never inherited: his word
  2026-10-04, *"all a"*, to the name `decibel_TENOR_2026` · public · push after every commit). Do not ask. The user-level
  skills' "ask push now?" is superseded in this repo.
- **This repo is PUBLIC** (`github.com/elosine/decibel_TENOR_2026`): nothing personal lands here — no call screenshots,
  no account details, no licensed fonts (`.gitignore`).
- **Never a history rewrite or a force-push** (`#6 §804`). If ordinary git is refused somewhere, tell him — do not work
  around it.
