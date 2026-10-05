# decibel TENOR 2026 — the Decibel piece

**Title: none yet** (his word 2026-10-04; the protocol's 2.3 — it may come later).

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
**copy-forward with the instrument palette rewritten** (journal D1; the protocol's container 3). **DONE 2026-10-04 (container 3): the
engine is here on six Decibel lanes; its recipes are provisional until containers 4 · 5.** The delivery format is the lineage's: an animated scrolling score with the animated
devices; a presentation score (video + print); the performance score later.
**The IR contract (inherited, #5's D9):** the composer save is the ground truth; the IR is derived from it by the
extractor and is the single source for every downstream score.
**The live electronics (journal D4 · D7):** this is one of the THREE electronics pieces (the Decibel piece · the Switch~ piece ·
the improviser piece) that share ONE engine — `live-electronics-system` (`C:\Users\jwloy\GitHub\live-electronics-system`,
public). The engine is a MODULE SET with named SEAMS that drops into this stack ADDITIVELY. **HOW IT SITS HERE (D7 — the AI's
call at his word, 2026-10-04):** the engine's code lives in THIS repo, in the folder **`electronics/`**, as ordinary files — he
works in one place, a cold session commits as always; the engine's repo is kept in step by the AI at every wrap (`git subtree
push --prefix=electronics`, proven at its first use), and the other two pieces take it the same way (`git subtree`). Built here
first, where he hears it (his words, `#6` LG-350). The generic machinery lives in `electronics/`; the USES (which note · which
effect · which glyph · when · the samples themselves) live in this piece's save and its own folders. § THE SORTING below says
how the AI decides, every time, without asking him.
Libraries: not chosen — the protocol's container 4.

**State of the piece (keep this line current):** **► 2026-10-04 (Fable, RUNNING_LOG §2): HIS BRIEF IS THE RUNNING ORDER in journal
§2 — I. the start finished (containers 3 → 7) · II. the opening composed with the electronics built as the music reaches them (the
seams · the mic opening · the return · the processing); the piece in three sections in PLANNER; the engine's code to be built HERE in
`electronics/` (D7); THE SORTING a standing practice below. **► 2026-10-04 (Opus, RUNNING_LOG §6 … §16): STEP 1, CONTAINER 3, IS
DONE — piece #6's engine is here and is THIS piece's: copied byte-exact, proven whole, the small fixes made, turned to SIX LANES
(D9: bass flute · bass clarinet · percussion · vibraphone · viola · cello), the composer score on 5500 and the sandbox on 5000,
provisional recipes, verified in the running app. **► 2026-10-04 (Opus, RUNNING_LOG §18 … §45): CONTAINERS 4 · 5 DONE, 6 SET UP — the rack built by the AI and measured (sixteen instruments sounding from the composer score, on one loudness scale, four dynamics curves), every lane's recipe written, the notation registry this piece's (a save extracts, validates, draws, exports). OPEN: his ear · his three notation calls. ► NEXT: running order step 6, the electronics' seams.** **► 2026-10-04 (Fable, RUNNING_LOG §47 … §49): STEP 6 OPENED — the sound seam decided (SuperCollider REAL-TIME, fed by the Reaper rack over ReaRoute; SC's master IS the output; in simulation Reaper is only the players and ONE FLAT RETURN TRACK); the six sub-steps 6.1 … 6.6 approved; 6.1 the audio route LAID OUT (PLAN.md 1.1). ► NEXT: THE BUILD OF 6.1 — Opus, after a clear.** **► 2026-10-04 (Opus, RUNNING_LOG §50 · §51): 6.1 BUILT AS FAR AS THE MACHINE ALLOWS — the engine is SEATED at `electronics/` (a git subtree, D7 — its docs are edited THERE now); the SuperCollider code and its self-test pass; this rack's route job and tool are written and refuse safely. THE CROSSING IS UNPROVEN: ReaRoute is not installed and his Reaper is on WASAPI — TWO HAND STEPS OF HIS (journal §2). ► NEXT: his two steps, then `node tools/elec.js probe → route → check → latency`.** **► 2026-10-04 (Opus, RUNNING_LOG §53 · §54): 6.1 DONE — THE CROSSING PROVEN. His two steps done (Reaper 7.82 · ASIO · ReaRoute); the route is in the rack (the bass clarinet's send · the flat track `ELEC RETURN`) — UNSAVED until his CTRL+S; a note is heard by the engine and comes back at unity, 23.22 ms later (two of Reaper's blocks). NOT CLAIMED: his ear. ► NEXT: 6.2, the message route — a talk, Fable.** **► 2026-10-04 (Opus, RUNNING_LOG §55 · §56): HE HEARS IT — a note, and the same note one second later out of SuperCollider (the one-second return is a listening aid, `bank/elec_route.json`). The runner's fault that killed his engine is fixed. Checkpoint #3. ► NEXT: 6.2, the message route — a talk on Fable (journal §2 has the AI's notes toward it).** **► 2026-10-04 (Fable, RUNNING_LOG §57 … §59): 6.2 THE MESSAGE ROUTE LAID OUT AND WRITTEN — OSC through the score server, concert and simulation on ONE road (D10 THE CORRESPONDENCE RULE: every electronics object said twice, as the engine does it in concert and as the stack simulates it); the loopMIDI trigger rejected; the crop added to the running order as 6.3b (DEC-8). ► NEXT: THE BUILD OF 6.2 — Opus, after a clear; PLAN.md 1.1 (a) … (f).** **► 2026-10-04 (Opus, RUNNING_LOG §60): 6.2 BUILT — the composer page speaks to the engine (page → `POST /api/elec` → OSC → SuperCollider's language on UDP 57211); its own playback was seen there with its data; PROVEN TO THE EDGE OF WEB MIDI. OPEN: the score's lead over its own sound — HIS Chrome, two hand steps (restart the score server · `start_electronics.bat`; journal §2). ► NEXT: 6.3 + 6.3b, the opening brick, the capture and the crop — a talk (Fable).** **► 2026-10-04 (Opus, RUNNING_LOG §61): 6.2 DONE — the lead measured on his Chrome (the message is at the engine 114.2 ms before the note's own sound). THE PLUMBING IS WHOLE; NO OBJECT IS BUILT YET. ► NEXT: THE FIRST OBJECT END TO END (the opening brick · the capture · the crop · the index · the playback brick), proposed to him as ONE build — his go awaited. HIS WORD: no check that needs his hands unless he asks.** **► 2026-10-04 (Fable, RUNNING_LOG §62): THE FIRST OBJECT LAID OUT AND WRITTEN — PLAN.md 1.1, 6.3 … 6.6: both bricks are ZONES with a new `midiModel` (`elecOpen` · `elecPlay`); the capture, the crop, the index and the playback the engine's; the samples `bank/samples/`. ► NEXT: THE BUILD — Opus, as one; a checkpoint and a clear recommended.** **► 2026-10-04 (Opus, RUNNING_LOG §64): THE FIRST OBJECT IS BUILT — STEP 6 DONE BUT FOR HIS EAR. In the composer score `M` = a MIC OPENING over the selected note, `R` = a RETURN at the playhead (zones `elecOpen` · `elecPlay`, the engine's `electronics/score/le_objects.js`); played through with the engine up, the window is recorded, cropped to its attack, banked in `bank/samples/` and returned where the brick is, at unity (a bass clarinet note: −41.2 dB captured, −41.22 dB back). The demo: the score `decibel-first-object`. The engine returns ONLY what it makes now. Only the bass clarinet has a microphone. HIS, to make it live: `start_electronics.bat` · reload the composer page — NO score-server restart. ► NEXT: running order step 7, the rhythm layer — his composing.** **► 2026-10-04 (Fable, RUNNING_LOG §67): THE ONE BAR — the composer score's two bars and four tabs are ONE 24 px bar with three menus (File ▾ · Insert ▾ · Panels ▾); SWEEP_LIST #1, fixed and closed the same day; live at his F5. ► NEXT: still step 7, his composing.** *(the line as it stood mid-build:)* **2026-10-04 (RUNNING_LOG §18 · §19): CONTAINER 4 IN HAND — the talk answered (Xsample ×4 · Ricotti Mallets, a Kontakt library, the
pitched lane · the unpitched percussion open); nine `DEC` ports and the rack `reaper/decibel_rack.rpp` made by the AI, three tracks cloned and
sounding IN REAPER. NOTHING SOUNDS FROM THE COMPOSER SCORE YET; NOTHING NOTATES THIS ENSEMBLE YET. ► NEXT: his three hand steps (journal §2),
then the recipes and the first sound.
Journal §2's RUNNING ORDER, then its block SESSION 1 — STEP 1 IS DONE, are the cold-start block.**

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
- **THE ENGINE IS HERE, at `electronics/`** (a git subtree since 2026-10-04, RUNNING_LOG §51): its code `electronics/sc/` ·
  `electronics/tools/sc.js` AND its docs `electronics/docs/` (PLAN · SEAMS · TAKE · its own journal and lab journal). **Edit the
  engine's docs THERE, never in the stand-alone clone** — that clone is a mirror the AI pulls after each `git subtree push`. Where this
  file or the journal says `live-electronics-system/docs/…`, read `electronics/docs/…`.
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
- **TODAY'S WORK — the running order:** `docs/PROJECT_JOURNAL.md` §2, the block RUNNING ORDER — THE BRIEF OF 2026-10-04 (► the
  active step; the position announced at every wrap)
- **The piece as an outline (his three sections):** `docs/PLANNER.md`
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

**THE PAPER — a standing reminder for THIS piece (composer, 2026-10-04, RUNNING_LOG §4):** *"Oh, and just a reminder, and if you can keep
this as a standing reminder throughout this piece, I'll need to create a paper directly after finishing the piece or during it
somehow, same deadline. So let's keep good journal notes. Like lab notes along the way."* So here the lab journal's test is the
paper's, literally: every entry carries what a reader of the paper would need — his words, what was tried and rejected, the numbers,
the reasoning, the references — and a compositional or technical move that is not in the log is lost to the paper. The paper is HIS;
the deadline is his to keep (he keeps his own time, D5); the AI's part is the record, as the work happens, never asked for.

**CORRECTED by him, 2026-10-04 (RUNNING_LOG §17):** *"a correction for the tenor call. I'll write one paper talking about both the
decibel piece and my um, improvisation with live electronics."* — **ONE paper, TWO subjects.** So the record is kept for a paper
that also covers his improvisation with live electronics (the AI reads this as the improviser piece, one of the three that share
the engine — his to confirm): what is the ENGINE's — the machinery both share — is logged in the engine's lab journal
(`live-electronics-system/docs/`), what is this piece's USE of it here; each entry says which. The improviser piece's repo, when
it is made, carries this same reminder.

## Standing practice: the morph notes (composer, 2026-09-06 — #5's CN-29)

> *"I want to institute a process where we're taking notes in a central document that will inform the eventual revision."*

Every remark about the morph tool — an awkwardness, a wish, a piece-specific adjustment made, what an all-purpose tool would
need — goes into **`docs/MORPH_NOTES.md`** §3 the moment it is said, dated, verbatim, the AI's reading marked. The tool is
adjusted for the current use now; the file is the memory for its revision into *"an easier to use all purpose tool"* after the
last piece or this one. Not optional, never asked for — the lab journal's rule, for one tool. The file was carried WHOLE from
piece #6 at this piece's start (2026-10-04), as #6 carried it from #5; its §3 stays append-only and continues here. The
morph tool itself arrives with the copy-forward (container 3); whether this piece uses it is his, later.

## Standing practice: THE SORTING — where each thing goes is the AI's to decide (composer, 2026-10-04)

> *"my hope is that AI can organize which things belong where. So for the live electronics is mostly what I'm talking about.
> We'll design the live electronics or the triggering systems, etc., and then you'll sort out which belongs in its own repo
> and how to put it there. And then what belongs here, or maybe it's a copy, but I would like AI to sort that out so I can
> just work uh, seamlessly without having to make too many decisions about what code goes where."* — and: *"I would expect
> AI to try to organize where everything goes as we're building it and how it sits in the system to try to organize that
> architecture as we go along. Or if we, you know, we need to have a conversation at any point about that. But I kind of
> want that to be done in the back end as much as possible. So I know we took a decision to keep the live electronics in a
> separate repo, but I don't want to have to fuss with that too much. I don't want that to become an extra administrative
> burden."* (RUNNING_LOG §2)

The rule, for every session:

- **He designs the music and the devices; the AI places the code.** He is never asked where a file goes, and never runs a
  git step for the engine. He is told in ONE line what went where, his to reverse.
- **The boundary test** (the engine plan's objective 6): does this code know THIS piece — its instruments, its lanes, its
  save, its names? → the piece (`score/`, `bank/`, `notation/`, as always). Does it work for any piece — a capture window,
  a bank, a placement algorithm, an effect, a message route, a drawn kind's machinery? → the engine's folder, `electronics/`.
  The piece's USES of the engine (which note · which effect · which glyph · when · the samples themselves) are the piece's.
- **A conversation only when the boundary is genuinely unclear** — one question, plain words, his one-line answer; never
  before each build.
- **The engine's repo is kept in step by the AI at every wrap** (`git subtree push`, journal D7) — never a step of his.
  A wrap that misses it costs nothing: the piece is complete in itself; the next wrap carries everything.

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
**AND AGAIN, STRONGER (2026-10-04, journal D13 — RUNNING_LOG §61 · §65):** *"no more testing unless absolutely necessary. I'll test
and troubleshoot when I'm writing, when I'm composing."* **A build is proven ONCE, by the one thing that proves it, and stops** — no
second proof of the same claim (the first electronics object was proven three ways; one too many), no check that needs his hands
unless he asks. A fault shows when he composes: it goes to `docs/SWEEP_LIST.md` and is fixed there.
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

- **The composer score — `http://localhost:5500/composer.html`** (`score/server.js`; launch name `score`; he starts his own with
  `start_score_server.bat`). Six lanes: bass flute · bass clarinet · percussion · mallets · viola · cello (D9; the mallets lane = Ricotti, four instruments); META 6, the curve
  windows 7 / 8 / 9; `layoutVersion` 8; the day-one empty score `scores/decibel.json`. **THE BAR (2026-10-04, §67): ONE 24 px bar — File ▾ · Insert ▾ · Panels ▾ (plain `<select>`s; an option presses the old button, kept hidden in `#barHidden`) and the direct controls; the modules' panel buttons land in `#barHidden` by anchoring to `#blastsBtn`, so a NEW panel button needs no change to reach Panels ▾ but its id in the menu's list (the `<script>` after the bar); the bottom bar and the four tabs are gone.** **Nothing sounds yet** (containers 4 · 5).
- **The sandbox — `http://localhost:5000`** (`sandbox/serve.js`; launch name `sandbox`) — one instrument, one technique at a time.
- **`.claude/launch.json`:** `score` 5500 · `sandbox` 5000 · **`score-5501`** — the THROWAWAY for verification, on the same scores
  folder (`docs/VERIFICATION_RECIPE.md`). There is no entry for piece #6's server; add `lgmf-5400` only at his word.
- **The MIDI ports:** the prefix `DEC` (D6) — NINE, MADE BY THE AI 2026-10-04 (RUNNING_LOG §19): `DECBassFlute` · `DECBassClar` · `DECPerc` ·
  `DECCrotales` · `DECGlock` · `DECMarimba` · `DECXylo` · `DECViola` · `DECCello`. A port is a value in loopMIDI's registry key + a restart of
  loopMIDI (Reaper closed); a NEW name takes ~2 minutes to show, and Reaper must be told to enable it (Preferences → MIDI Inputs). loopMIDI
  ports are machine-global: piece #5's (bare names) and piece #6's (`LG…`) are live beside them, and `palette_check` refuses both sets.
- **The rack — `reaper/decibel_rack.rpp`** — HIS (saved 2026-10-04). Built as text by `tools/build_rack.js`; the bass clarinet, viola and cello
  CLONED from pieces #5 · #6's racks ON DISK (his word "disk", RUNNING_LOG §20); the four Ricotti mallet tracks (`… RM`) one Kontakt each, a slot
  per patch on its own channel (`bank/ricotti_catalog.json` · `tools/ricotti_loaders.js`). A track is added or re-cloned through the bridge, `reaper/bridge/jobs/make_tracks.lua`, never by rebuilding). The bridge:
  `node tools/reaper_job.js heartbeat`; one note to a port: `tools/note_to_port.ps1`; a track sounded without its port: `sound_check_vkb.lua`.
- **THE LIVE ELECTRONICS — `node tools/elec.js`** (RUNNING_LOG §51): `probe` (look only — what is missing, in order) · `route` /
  `unroute` (the player's send and the flat track `ELEC RETURN`, through the bridge; he saves) · `check` (one note in, four levels,
  a verdict) · `latency` · `start` (= `start_electronics.bat`: the engine up and listening, with this piece's bank `bank/samples/` — it returns ONLY what it makes, a sample played back; `listenEchoSeconds` above 0 is a route check. Closing its window ends its sound server too, and a leftover one is cleared at the next start — §64) · `meters` (one note, the rack's meters; starts nothing) · `selftest` (no hardware, no sound) · **`ping`** (is the engine there? one hello — starts nothing; `--via 5500` asks THROUGH the score server) · **`message`** (6.2's proof: the engine up 20 s, a message, the note after it, and whatever the composer score sends) · **`object`** (6.3 … 6.5's proof WITH REAL SOUND on a SCRATCH bank — the piece's is not touched: an opening, the test note into the rack, the crop, the index, the sample returned and seen on `ELEC RETURN`; `--listen` skips the tool's own part and shows what the composer score sends; it boots a server and it SOUNDS).
  **THE ELECTRONICS' BRICKS (6.3 … 6.5, RUNNING_LOG §64):** in the composer score **`M`** = a MIC OPENING over the selected note (100 ms before it, 500 ms; else at the playhead on the active lane) · **`R`** = a RETURN at the playhead (the selected opening's sample, else the nearest opening's before it). Both are ZONES — `midiModel` `elecOpen` · `elecPlay`, `zoneFunction` `'elec'`, the data in `zone.elec` — so they move, resize, duplicate, undo and save as zones do. The machinery is the ENGINE's (`electronics/score/le_objects.js`: the label, the panel section, the keys' gestures, its OWN tick — no MIDI in it); this page gives it one tag and two lines (`LEObjects.attach` before `Composer.init()` · `LEObjects.tick` in `applyScroll`). **THE BANK:** `bank/samples/<name>.wav` (cropped, COMMITTED) · `bank/samples/raw/` (the whole recordings, gitignored) · `bank/samples/index.json` (a row per sample; the engine writes it, the page reads it). The crop's numbers: the engine's defaults, overridden in `bank/elec_route.json` `bank.crop`, used from the engine's next start. **A lane is a player by the MIDI port of its instrument** (`bank/elec_route.json` `players`) — only the bass clarinet so far. **`tools/notate_section.js` writes its page into `notation/ir/` and the picker whatever `--out` says** — a check through it is taken out again. The demo: `scores/decibel-first-object.json` (`tools/build_first_object.js`).
  **THE MESSAGE ROUTE (6.2, RUNNING_LOG §60):** the composer page → `POST /api/elec` (`score/server.js`: three lines) → OSC → the engine's LANGUAGE on **UDP 57211**; a message is `/le/<kind>` + NAME, VALUE pairs. The page's code is the ENGINE's (`electronics/score/le_msg.js`, served at `/electronics/`); the address and the test switch are `bank/elec_route.json` `message` (the first proof's test hook — a note's `/le/onset` — is OUT since 6.3: the mic opening is the message; `testOnsets` is false). **A score server started before a `server.js` change does not have it — restart.** The SEVEN lines this stack changed (three in the server, four in the composer page) are listed in `electronics/docs/SEAMS.md`.
  The engine is SuperCollider on **UDP 57210** (never 57110), fed by the rack over **ReaRoute**; which track is which player:
  `bank/elec_route.json`. **ReaRoute must be installed and Reaper on ASIO — both are since 2026-10-04 (§54).** Reaper lists ReaRoute's channels at hardware index **512 … 527**, not among the device's own. The round trip is **two of Reaper's blocks** (23.22 ms at 512). **WHEN HIS ENGINE IS UP (his own window): only `probe`, `meters` and `ping` — they leave it alone; `check` · `latency` · `selftest` · `message` · `object` boot a server and now refuse (RUNNING_LOG §55: a probe once killed his engine).** **ASIO is the STUDIO setting; WASAPI is for listening over Chrome Remote Desktop only** (RUNNING_LOG §53; piece #4's `docs/REMOTE_AUDITION.md`) — on WASAPI the rack and MIDI work as ever and the electronics do not. MIDI never needs the switch.
- **The notation app · print · video:** THIS PIECE'S since 2026-10-04 (container 6, RUNNING_LOG §45) — `notation/registry/ensemble.json` is the six Decibel parts (BFl +12 · BCl +14 · the eight-line unpitched staff · Mal · Va alto · Vc bass); 233 technique keys (`tools/register_techniques.js` after any new recipe key — the extractor THROWS on an unregistered one); the first page `notation/ir/decibel-first-sound.ir.json`. A lane NUMBER can hide in a REGISTRY too (`rules.json` `staffLines`).
- **The names** — `docs/NAMING.md` § 1. **The recipes (2026-10-04, RUNNING_LOG §25 · §34):** every lane has its own — bass flute (Xsample, 32 presets, ordinary #15) · bass clarinet (piece #5's 34) · percussion (eight Abbey Road instruments, `bank/perc_selection.json` → `tools/apply_perc.js`) · MALLETS (39 Ricotti patches, `bank/ricotti_catalog.json` → `tools/apply_ricotti.js`; the lane's internal key is still `bowed_vibraphone`) · viola · cello (piece #5's · #6's). Loudness and round robins are not done (journal §2's list).

⚠ **Standing warnings:** never bind **5400 / 4900** (piece #6's — his server may be running) or **5300 / 4800** (piece #5's) · the AI
never holds his port and never saves from its own browser pane (the day-one score was the port's one save) · the in-app browser
has no Web MIDI, so every MIDI path is verified on his Chrome · print and video share the frame math — a change to one is a
change to both · the curve-channel map is CACHED: a tool that writes a curve event calls `Composer.curveDirty()` · a server route
keeps the engine it started with — restart after a `notation/lib` change · **a lane added to `TRACKS` needs its `<div>` and its
CSS rule** (`palette_check` § 7) · **a track's own meter (`Track_GetPeakInfo`) reads BEFORE the fader on this rack** — the master is the reference for what he hears (RUNNING_LOG §54) · **a lane NUMBER written into a module is invisible to a grep for names** — two were found only
by opening the panels (RUNNING_LOG §16). · **a key outside a preset's range is a FUNCTION KEY on Xsample** (A0–B0 hard · A#7: modes, phrase mode, trill & slide) — the live keyboard path drops it since §70; a slot that stops holding notes is put back into Preset Mode with `tools/note_to_port.ps1 -Port <port> -Channel <slot> -Cc0 126` (then its preset again), measured with `reaper/bridge/jobs/sustain_watch.lua`

**Checks this piece owns:** `node tools/palette_check.js` (**151** — after any change to `TRACKS`, `sandbox/instruments.js` or a
per-instrument table) · `node tools/roster_check.js` (**310** voices) · `node tools/model_bank.js --validate` · `node
tools/unsaved_check.js` · **THE SHIELD** (`tools/layout_shield.js` — before and after ANY layout change; it needs pages, container
6). The engine's forty batteries read other pieces' data, staged: `tools/port/stage32.sh` · `run_batteries.sh` (`docs/NITS.md`).

## Reference repos (read-only context)

- **#6** `C:\Users\jwloy\GitHub\septet_LGMF_2026` — **the source of the port** (_Recombination_, submitted 2026-10-03).
  Its docs are the richest and the most recent: `RUNNING_LOG.md` §1–§36 is the record of the LAST port; §786 … §818 is how
  THIS start was planned and begun; `docs/HARVEST.md` is what it hands to this piece; its journal §3 Principles · §4
  D1–D62 · §5 Playbooks; the tool docs. **It has uncommitted files that are the composer's own — never stage, move or edit
  anything there; a copy-forward takes the piece's files from GIT or asks him** (`#6` journal §2).
- **The home** `C:\Users\jwloy\GitHub\composition-system` — what the pieces share: `INDEX.md` first, then
  `protocol/NEW_PIECE_PROTOCOL.md` (the LIVING protocol; this piece is its first run).
- **The engine** `C:\Users\jwloy\GitHub\live-electronics-system` — the shared live-electronics engine (above). **Since 2026-10-04 a MIRROR of `electronics/` here:** never edit it while this piece is at work; `git -C` it `pull --ff-only` after each subtree push.
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
