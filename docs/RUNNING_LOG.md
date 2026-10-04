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

## §2. His three answers · HIS BRIEF for the piece and for the day · THE SORTING, and how the engine sits here (2026-10-04, Fable — still in piece #6's chat)

**What prompted it:** the three open slots of §1, answered *"a, none yet, a ;"* — the prefix `DEC` · no title yet · the five musical
ideas carried into the sketch pad (D6). Then, in the same message, his brief — its three musical sections quoted whole in the sketch
pad (DEC-1 · DEC-2 · DEC-3); the way of working he asked for, here:

> *"I'd like to interrupt this process and discuss today's work brief, a brief for today's work, but I'd like to be able to rejoin this process and continue through the work we planned in the brief. And I'd like the brief to be not just a, a sketch, an overview of the work we need to do, just organized and named each component or each piece in order, more or less. So what I'd like to do is narrate the things I want to work on, how I think they should go. I'd like you to briefly help me organize them and then just lay them out into to-dos in their proper order. And perhaps you can add or name things that components that make up some of the things I want to do. So first thing I'd like to complete the port as much as possible of the whole system to the decibel piece. And I think that's what we're doing now. And we'll get back to it after we finish the brief. And then my idea is to work through the piece itself, the composition, and build the new things as I work through the piece, as I've been doing all along. And my hope is that AI can organize which things belong where. So for the live electronics is mostly what I'm talking about. We'll design the live electronics or the triggering systems, etc., and then you'll sort out which belongs in its own repo and how to put it there. And then what belongs here, or maybe it's a copy, but I would like AI to sort that out so I can just work uh, seamlessly without having to make too many decisions about what code goes where."*

> *"Okay, let's organize this brief. You can just take the composition notes. Now we probably won't work on section two or section three today, but let's work through that first section. Help me organize what needs to happen in entirety today. And then try to help me organize or order just sort of the top line of things. And then when necessary, break out some of the things I dictated and mention the type of things we need to do. So, you know, uh, connect live electronics to the Reaper playback, um, that sort of thing. Just list those in items and in order of what we have to do. And then again, just as I said at the top of this prompt, um, you could either put in notes to yourself or just list them briefly in the, in the rundown. But I would expect AI to try to organize where everything goes as we're building it and how it sits in the system to try to organize that architecture as we go along. Or if we, you know, we need to have a conversation at any point about that. But I kind of want that to be done in the back end as much as possible. So I know we took a decision to keep the live electronics in a separate repo, but I don't want to have to fuss with that too much. I don't want that to become an extra administrative burden. So if we need to rethink that decision, I'm open to that."*

**What he asked for:** (1) a brief that is not a sketch — the components named, in order, as to-dos he can rejoin after a clear;
(2) the port finished first, then the piece composed and the new things built as the music reaches them; (3) THE AI SORTS THE
ARCHITECTURE — what goes in the engine's repo, what here — in the back end, so he makes no decisions about where code goes; the
separate-repo decision open if it is a burden.

**Decided:**
- **The brief is a RUNNING ORDER in journal §2** (piece #6's device — one active step, the position announced at every wrap,
  reorganized only on his approval, survives clears). Eleven steps in two halves: I the start (containers 3 → 7) · II the electronics
  and the opening (the seams · the rhythm layer · the mic opening · the return · the processing · the record). Sections 2 · 3 are notes
  and the PLANNER's outline only. The breakouts are the AI's — what each step must contain to be done, and which part of the engine's
  plan it is.
- **THE SORTING — a standing practice in CLAUDE.md:** he designs; the AI places the code by the boundary test (knows this piece → the
  piece; works for any piece → `electronics/`); one line tells him; a conversation only when the boundary is genuinely unclear.
- **How the engine sits here — D7:** a git SUBTREE at `electronics/`, not the submodule of `#6 §807`. Why, in three: a cold session
  commits as always — no pointer to keep in step, no second repo to push first · a clone of the piece is whole · a wrap that misses the
  `subtree push` costs nothing. The engine's repo gets the history as it happens. Proven at its first push (part 8).
- **The engine plan re-read by the brief:** part 5's "first sound" is a note CAPTURED at a mic opening and RETURNED — the filter is
  third; part 11's first two members are the mic opening and the return; part 6's first effect the pedals of resonance. Written into
  the engine's PLAN under 5 · 8 and its RUNNING_LOG §4.
- **Two things the AI adds to his list** (the breakouts' new items): a LANE FOR THE ELECTRONICS in the composer score and a STAFF
  TYPE for it in the notation (3.3 · 6.2) — the openings, the returns and the processing are events that need a place; and the sandbox
  read BEFORE the first object (parts 2 · 3 · 4 — the sound seam's shape).
- **Not his to settle now, flagged:** the effect's spelling — `SynthDef_petalsOfResonance` under GitHub says "petals", his dictation
  "pedals" · the ensemble is FIVE players as announced (his *"if it's six"*).

**Written:** the sketch pad (the five carried notes · DEC-1 … DEC-3) · PLANNER (the piece as an outline) · journal §1 (the names) ·
§2 (the running order; D6 · D7) · CLAUDE.md (the title · the engine's seat · § THE SORTING · the state line) · PLAN (the one line · the
engine's seat) · PERFORMANCE_NOTES #1 · #2 · piece #6's §819 · the engine's §4 and PLAN. The planning repo untouched (at his word only).

**Nothing of code.** Next: a NEW chat opened in this folder — `/session-start` reads the running order; step 1 is container 3.

## §3. THE STAFF SYSTEM — no electronics lane (his word, D8) · five players · the percussion open · his question: can the lanes be re-spaced midway? (2026-10-04, Fable — still in piece #6's chat)

**What prompted it:** the running order's step 1 carried the AI's addition — a lane for the electronics. He talked the staff system
through (DEC-4, verbatim) and reversed it: *"I don't think there needs to be an electronics lane. We can just incorporate the
electronics per instrument lane because they'll always be based in some way or shape or form on the performer's own input."*

**Decided — D8:** NO electronics lane in the composer score, NO electronics staff in the notation. Every electronic sound is drawn on
the staff of the player whose input it comes from, with a sign that says so (the sign of origin). Three drawn kinds, by device sheet
when notating comes — a sign before the note with its GC (section 1) · a stack across the staves read as an electronic chord (section
3) · a held chord of freezes as a duration-line kind (section 2). Five players, confirmed. **Open, his:** section 3's electronics in the
parts, or only in the conductor's and the presentation score · the percussion — which instruments, one lane or two.

**His question — "confirm that we can readjust the lanes midway" — answered from the record, not re-checked in an app (there is
none here yet):**
- **The composer score.** The lanes are laid out by CSS rules in `composer.html`, one per entry of `TRACKS`, as percentages of the
  height (`#6 §183`); a note is keyed to its INSTRUMENT, not to a lane's position. **The precedent:** piece #6 went from seven lanes to
  eight on 2026-09-21, with section 1 already composed — CSS only, a tab reload, nothing in the save changed (`#6 §183`). So RE-SPACING
  the lanes, or ADDING one (the percussionist's second), is easy at any time.
- **The notation.** The staves and their gaps are the ensemble registry (`notation/registry/ensemble.json`) and the rules; a change
  re-lays out the page from the same IR. The ONE cost is a change of ORDER: the IR addresses a part by its index in the ensemble's order
  (`#6`: EH 0 · Bsn 1 …), and the hand notations name a part by that index (`--plainNotes P:…`, `--hand`). Re-ordering BEFORE the hand
  notation costs a re-extract; AFTER it, a renumbering of those arguments — a script's work, the AI's. Re-spacing never touches that.
- **In one line:** re-space any time · add a lane any time · re-order freely until the hand notation begins, at a small cost after.

**Written:** the sketch pad DEC-4 · journal §2 (the running order's steps 1 · 4 corrected; D8; Q3) · PLANNER (the staff system; the open
items) · PERFORMANCE_NOTES #3 · #4 · the engine's PLAN part 7 (one paragraph: the data for its device sheets). §2's "two things the AI
adds" is corrected by this entry, not edited: the lane is withdrawn; the sandbox read stands.

## §4. THE PAPER — his standing reminder for this piece: good lab notes along the way (2026-10-04, Fable)

**His words, whole:** *"Oh, and just a reminder, and if you can keep this as a standing reminder throughout this piece, I'll need to
create a paper directly after finishing the piece or during it somehow, same deadline. So let's keep good journal notes. Like lab
notes along the way."*

**Taken as:** the lab journal's rule (CLAUDE.md), sharpened for this piece — every entry written so the paper can be written from the
log alone: his words · what was tried and rejected · the numbers · the reasoning · the references. Written into CLAUDE.md as a
standing reminder (under the lab journal's practice), journal §7 (his own reminders), PLAN § 4 (the submission is the piece AND a
paper). The deadline is his to keep (D5); "the same deadline" recorded as his word, not managed.

## §5. THE RUNNING ORDER APPROVED — "yes, the order is good — let's rejoin the port" (2026-10-04, Fable, the last entry from piece #6's chat)

**His word** on the running order of journal §2 as it stands after §3: *"yes, the order is good — let's rejoin the port"*. The order is
his from here; a reorganization lands only on his approval. ► Step 1 — container 3, the engine copied forward — is ACTIVE. It runs in
a NEW chat opened in this folder, on Opus (a copy is executing, not judgment), from `/session-start`: its two asks first (3.8's seven
fixes in piece #6 · his uncommitted files there), then 3.0 … 3.5. **Piece #6's chat "Decibel piece — repo set-up" is done with.**

## §6. SESSION 1 OPENS — the agenda agreed · THE FIRST ASK: the seven small fixes are made HERE, after the copy is proven — his "b" (2026-10-04, Opus — the first chat opened in this repo)

**What prompted it:** `/session-start` in a new chat opened in this folder. His first line: *"Decibel - TENOR 2026 (chat name)"* — read as
the chat's name; the chat renamed to it, his to reverse. The orientation came from journal §2 · PLAN § 0 · the home's `INDEX.md`; no
code was read. The agenda put to him: 1 the two asks · 2 container 3's 3.0 → 3.2 (the survey · the copy byte-exact · proven whole) ·
3 container 3's 3.3 → 3.5 (the Decibel lanes · the app on 5500 / 5000). **His word: *"yes, this agenda — first ask"*.**

**The first ask — the protocol's 3.8 (+ 5.11): WHERE are the seven small engine fixes made?** The seven, as piece #6's journal §2,
item (a), lists them: the bare-load `TypeError` at `sequence_ui.js:1652` · `model_bank --validate`'s `provenance.palette` warn ·
`test_animobj.js`'s case · `palette_check` reads the composer's lane CSS (`nth-child`, count = `TRACKS`) · the BEGIN marker in
`apply_ranges.js` / `apply_bend_ranges.js` · `trimAtMeasurementDb` written by `analyze_card.py` · the probes' `$Port` a parameter
(the harvest's H-9 · H-10 · H-11 · H-12 · H-16 · H-17 · H-19). None in the music, none in the layout.

**Put to him as three options, the reasoning beside each:**

- **(a) in piece #6, before the copy** — the protocol as written: both pieces fixed, the copy arrives clean. Against it: it edits a
  piece submitted the day before, in a repo that holds 30 uncommitted paths of his.
- **(b) here, right after the copy is proven** — the AI's recommendation: piece #6 stays exactly as submitted · the copy is proven
  whole FIRST (Principle 20), so a red after the fixes has one cause · the next piece copies from THIS one, so the lineage gets the
  fixes either way. The cost: piece #6 keeps the seven faults; one line in the deviations register.
- **(c) copy as it is, carry them as nits** — the least work now; and how they were carried red three times (H-7).

**His word: *"b"*.**

**So:** the seven fixes are a step of THIS repo's container 3 — one commit, after 3.2 (the copy proven whole on the old palette) and
before 3.3 (the re-palette, which needs `palette_check` reading the lane CSS in any case). Each fault's note (piece #6's
`docs/HARVEST.md` H-9 … H-19 and the NITS § each cites) is read before a file is touched. At 3.2 the faults that show are classified
"known — fixed at the next step", not retired. Piece #6: nothing touched. `docs/PROTOCOL_DEVIATIONS.md` has the line (3.8).
**What this entry does NOT rest on:** nothing was run; when the AI recommended (b) it had read the LIST of the seven, not each
fault's note — said to him in the same turn.

## §7. THE SECOND ASK: none of his libraries come across — his "a"; the copy is from git, every library starts empty (2026-10-04, Opus)

**The data, taken read-only just before the ask:** piece #6 at HEAD `0d70fda` (2026-10-04); `git status --short` there — 5 modified +
25 untracked = 30 paths, the same 30 its journal §2 lists. Nothing there was touched.

**Put to him as two groups and one decision:**

- **24 stay behind in any case — piece #6's own material:** his sixteen saves in `scores/` (`piece-Recombination-Draft01-done.json`
  modified · fifteen untracked) · five actuals (`bank/actuals/ACT-BLOOM-07` · `-08` · `ACT-TAKES-01` · `-02` · `-03`) ·
  `bank/passages/lgmf-sec2.json` · the rack `reaper/LGMF_rack.rpp` · `notation/video/renders/`.
- **6 are libraries — the only ones that could travel:** the rhythm library, untracked, git has none of the three —
  `bank/patterns.json` (3.4 MB) · `bank/rhythm_sequences.json` (74 KB) · `bank/rhythm_takes.json` (16 KB) · and three modified, git
  holding an older copy — `bank/sequences.json` (298 KB) · `bank/morph_models.json` (66 KB) · `bank/panel_snapshots.json` (3.8 MB).
- **The decision — which libraries come across, as they are on disk today?** (a) none — the AI's recommendation: a new ensemble, new
  material; every library starts empty, as the protocol's 3.4 writes it; nothing lost, piece #6's files stay where they are and any
  one can be fetched later at his word · (b) the rhythm library only — if he wants piece #6's rhythms at hand for the rhythm layer
  (running order step 7) · (c) he names which.

**His word: *"a"*.**

**So:** the copy (3.1) takes every file from GIT at piece #6's named HEAD — no file from its working tree. The three tracked libraries
come from HEAD for the proof (3.2) and are skeletoned at 3.4; the three untracked rhythm files are not in the copy at all — whether
the app needs them to open is 3.2's and 3.4's question (a skeleton written by the app, never by hand). **Not looked at:** the six
library files were known to the AI by name and size only when it recommended — said to him in the same turn.
**Agenda item 1 (the two asks) is done.** Next: 3.0, the survey.

## §8. 3.0 THE SURVEY — 573 files at piece #6's `0d70fda`: 369 copied, 204 left; the lane count changes; the harvest's H-8 wrong by one (2026-10-04, Opus)

**How it was done** (every read from piece #6 was read-only; nothing there was written):

1. `git ls-tree -r -l HEAD` in piece #6 → 573 tracked files, 64.7 MB, by folder: `tools` 151 · `score` 74 · `bank` 73 · `notation` 71 ·
   `docs` 54 · `probes` 53 · `midi` 30 · `reaper` 28 · `scores` 17 · the root 8 · `print` 7 · `sandbox` 4 · `.claude` 3.
2. The template read: the last port's plan (`septet_LGMF_2026/docs/plans/PORT_FROM_TEMPUS.md`, its step 1's two lists) and the harvest
   (`docs/HARVEST.md` H-7 … H-14).
3. Every file classified COPY or LEAVE by ONE script of rules (the scratchpad's `classify.js`; it refuses nothing silently — an
   unmatched path is printed as `?`; it printed none). **369 copy (9.7 MB) · 204 leave (55.0 MB).** The lists by rule: PLAN § 0.3.
4. The coupling: `git grep` at HEAD for the eight instrument keys and `'piano'` over the engine's folders → **910 lines in 105 files**;
   the app's modules read line by line, the rest by file. Ports, the guard and the names by the same route.
5. For each thing the harvest takes OFF the copy, a grep for who still names it — the step that "a missing dependency is invisible to
   `cmp`" (the protocol's 3.2) asks for BEFORE the copy.

**What the survey found that the template did not say:**

- **The harvest's H-8 was wrong by one.** It drops `docs/instrument_map.json` ("loads 0"). But `score/public/composer.html` l. 647
  fetches it on every load: without the file the page logs `[InstrumentRegistry] Failed to load instrument_map.json` and the registry's
  ready-callbacks never fire. It is 573 bytes; it STAYS on the copy list. Taking it out means taking the loader out — a code change, a
  line for NITS. The two dead viewers (`clusterview.html` · `chordview.html`) are named in comments only — they leave, as H-8 says.
- **The eight retired batteries (H-7) take four fixtures with them** — `cloud02d-collapse` · `cloud02i-preamend` (only
  `test_playability` reads them) · `coords_snapshot` (only `test_coords`) · `extract_played_snapshot` (only `test_extract_played`).
  Nothing else requires the eight: they are named in comments and in `notation/ir/README.md` only.
- **THE LANE COUNT CHANGES.** The last port kept seven lanes. Piece #6 ended on EIGHT (`META_LAYER` 8, the curve windows 9 / 10 / 11);
  this piece has five, or six if the percussionist takes two (Q4, his). The re-palette is not a renaming: the META and curve layers, the
  lane CSS, `layoutVersion` and the ensemble registry's layer numbers all move. The precedent is piece #5's port from #4 (ten → seven).
- **Two ROLES grew in piece #6 beside the piano's** (kind C): the PERCUSSION (live here) and the BOWED VIBRAPHONE with its SECOND SEAT
  (live only if the percussionist's second lane is a vibraphone). And kind B grew by nine tables that `palette_check` does not read
  (`EXTRA_SEATS` · `SPAN` · `ART_DEFAULT` · `PERC` / `VIB` in three modules · `VIB_TECH` · `pairOf` · `STILL_INST`).
- **Stale in the source, found in passing:** the composer's track `<select>` (l. 481–488) lists seven instruments and META = 7 — the
  vibraphone was added to `TRACKS` and to the lane `<div>`s and never there. It is rewritten at 3.3 in any case.
- **A piece-bound rule in the standards:** `notation/registry/rules.json` l. 145 names part 4 and piece #6's seconds (a staff's
  visibility) — container 6's, by Principle 22.

**Decided by the AI, his to reverse:** the tool docs (19) come byte-exact at 3.1 and get their provenance line at 3.6 — the last port
brought them at its last step; here `check_rules` needs `ENGRAVING_RULES.md` at 3.2, and one list is simpler to prove than two ·
`bank/aro_percussion_catalog.json` is copied (what the library holds — not a measurement, not a rack state), `bank/aro_states/` is left
(the rack as text; container 4) · the three libraries modified in the source and his come from the COMMIT and are emptied at 3.4 (§7).
**Rejected:** `git archive` for the copy — it would write every text file with this machine's line endings, and the proof against the
source's working tree would fail for a reason that is not a difference. The copy is a tar pipe from the working tree for the 366
unmodified files and `git show HEAD:` for the three; the proof is `cmp` for the 366 and the BLOB HASHES for all 369, staged here against
the source's commit.

**Not verified by this entry:** nothing was run. The line numbers are the commit's; the 910-line list is regenerated at 3.3.

## §9. 3.1 THE COPY, BYTE-EXACT — 369 / 369 identical to piece #6 @ `0d70fda`; commit `c90b768` (2026-10-04, Opus)

**The guards, at the moment of the copy:** the source's HEAD still `0d70fda` · of its 30 uncommitted paths exactly three are on the copy
list (`bank/morph_models.json` · `panel_snapshots.json` · `sequences.json`) — the known three, his, taken from the commit · none of the
369 paths existed in this repo before the copy (checked path by path; nothing overwritten).

**The copy** (the scratchpad's `copy31.sh`): 366 files by ONE tar pipe from the source's working tree · 3 by `git show HEAD:<path>`.

**The proof, two ways:**

| Proof | Result |
|---|---|
| `cmp` of each copied file against the source's working-tree file | **366 / 366 identical** |
| the blob hash of each file STAGED here against the source commit's (`git ls-files -s` here · `git ls-tree -r HEAD` there) | **369 / 369 identical** |

The second is the stronger: it compares what git holds, independent of this machine's line endings, and it covers the three files that
were not `cmp`'d (their working-tree source is his newer copy, by design not the one taken).

**The commit holds the 369 files and nothing else** (`c90b768`, 182 192 lines added) — so the commit is itself the list. Pushed.

**`npm install`** — 3 packages (`@resvg/resvg-js` · `pngjs` · one dependency), `node_modules/` ignored. **One thing it showed:** npm
rewrote `package-lock.json`'s `name` from `septet-2026` to `septet-lgmf-2026` — the lock file in piece #6 still carries piece #5's
name (never touched since that port). The copied file was restored to its byte-exact state (`git checkout --`); the lock's name joins
the re-palette's kind A list (3.3), beside `package.json`.

**After the copy:** this repo's tree clean · piece #6 still shows its same 30 uncommitted paths, nothing there touched.
**Not done by this step, by the protocol:** nothing is changed, nothing is run — the app has not been opened here yet (3.2).

## §10. 3.2 THE COPY PROVEN WHOLE — 52 checks run on the unchanged copy: 34 green, 18 red, every red accounted for, none a copy defect; the app boots on 5500 (2026-10-04, Opus)

**Staged, by a list written before the first copy** (the scratchpad's `stage32.sh`; every file by `git show HEAD:` from its own repo's
commit, never a working tree; a path that already existed here was refused): **137 paths** — piece #4's tuba pages and nine scores
(`for_seven_tubas`) · piece #5's four pages and the two scores they name (`septet_2026`) · piece #6's data from the leave list (its
banks · actuals · the ARO states · scores · IR pages · the film's cut lists · the probe schedules) · and two added when a check named
them: piece #6's printed cover `print/cover/cover-a3-landscape.svg` and piece #5's score `scores/piano-harmonics-test.json`.

**Run:** the scratchpad's `run_batteries.sh` — 53 commands, default arguments only (never `--update` · `--save` · `--write` ·
`--freeze`), exit code and last line of each kept. One of the 53, `v0_proofs.js`, is a generator and not a check (it wrote 27 proof
pages into `notation/app/proofs_v0/`; removed) — so **52 checks**.

**THE TABLE — every battery classified once (the protocol's 3.2; NITS has it as the standing list):**

| Class | n | The checks |
|---|---|---|
| **GREEN** | 34 | `test_graphic` · `test_layout` · `test_pattern_fit` (85) · `test_render` · `test_snapshots` (30) · `test_splice` · `test_stamps` · `test_step_dynamics` (13) · `test_surge_run` (30) · `test_written_pitch` (10) · `accel_calc_check` · `dyn_table_check` (68) · `eh_figure_check` (106) · `palette_check` (198) · `roster_check` (3 · 339 voices · 21 pending) · `sequence_check` (180) · `sequence_notation_check` (79) · `spectrum_check` (35) · `unsaved_check` · `vib_marks_check` (34) · `vibes_pitch_check` (65) · `check_ceilings --all` · `check_rules` (34) · `check_screen_edges` · `check_print_edges` · `check_print_frame` · `check_print_front` · `check_print_pages` (86 pages) · `score/tools/check_containers` · `check_cresc_deck` · `check_cresc_panel` · `ir_validate_battery` (36) · `model_bank --validate` (VALID, 74 warnings — H-10) · `decisions_needed` (a report) |
| **RED — known, one of the seven fixes** | 1 | `test_animobj` — `FAIL morph bend -> curveFollower`, then a `TypeError` (H-11) |
| **RED — a stale harness, red at the source commit** | 1 | `test_identity` — the page's `restoreData` calls `this.curveDirty()`; the harness's stand-in has none. One line in the harness |
| **RED — bound to piece #5's cast or data (two pieces back), red in piece #6 since its own re-palette (H-7)** | 12 | `test_septet_notation` (bass clarinet, piano) · `test_trills` · `test_morph_notation` · `test_cross_staff` · `beating_calc_check` (#5's six players by name) · `strike_chords_check` (#5's seven) · `piano_harmonics_check` · `piano_cues_check` (2 FAILED even with #5's score staged) · `harm_source_check` (#5's recorded strikes #24 · #26) · `morph_septet_check` (Vc Va · Vn1 Vn2 · Fl BCl) · `score/tools/check_fill` (Fl · BCl · Pno · Vn1 · Vn2 · Va) · `fade_check` (3 FAILED — the morph's fade as piece #5 had it; its only inputs are `morph.js` and `bank/morph_models.json`) |
| **RED — needs a schedule git never held** | 4 | `probes/selftest_bend.py` · `selftest_bend_analyzer.py` · `selftest_ranges.py` · `selftest_sweep.py` — `bend_schedule.json` · `ranges_schedule.json` · `sweep_schedule.json` are generated by a probe's dry run and are not tracked in piece #6. Container 5's |
| **NEW red, unexplained** | 0 | — |

**How "red in the source too" was established WITHOUT running anything in piece #6's folder** (the protocol's 3.2 says "a red re-run in
the source, read-only"; not done — a deviation, in the register): the engine here is blob-identical to piece #6's commit (§9), and every
input of these checks was staged from the same commit or from the older pieces' commits. So a red here IS the red of that commit, unless
the staging differs from that repo's own folder — which was tested where it could matter:

- **`check_rules` was RED on the first run (2 of 34) and that red was the staging's, not the source's.** It scans every page in
  `notation/ir/`; with piece #4's and #5's pages co-staged it read 26 pages and failed on the tuba pages (`db1-all-x01` · `cloud02i-b`).
  With piece #6's five pages alone, as in its own folder: **RULES GREEN: 34**. The lesson for the protocol: the page-scanning checks
  are run on the source's own pages ALONE; the older goldens are staged for the batteries that read them by name.
- **`check_print_front` · `check_print_pages` were red for a missing file** — the printed cover is on the leave list (it is piece
  #6's) and the check reads it. Staged → both green. At this piece's own print the cover is drawn first (`make_cover.ps1`).
- **`piano_cues_check` · `check_fill` died on `scores/piano-harmonics-test.json`** — piece #5's score, not in piece #6's git. Staged
  from piece #5 → both still red, on #5's cast. So they are bound to that cast, not to a missing file.

**THE APP BOOTS** — the copied server started by environment on **5500** (`PORT=5500 node score/server.js`; piece #6's own server was
listening on 5400 the whole time, PID 6380, never touched), the page loaded in the AI's pane, the stubs of the verification recipe put
in at once (autosave · every non-GET `fetch` · `sendBeacon` · `confirm`):

| Read | Result |
|---|---|
| the console | `Composer initialized` · **zero errors** · `[InstrumentRegistry] Loaded 0 instruments` (so the map IS fetched — §8's correction of H-8 holds) · Web MIDI refused (the pane's policy) |
| the page's resources | 81 fetched, none 4xx / 5xx · 63 `<script src>` |
| `TRACKS` · `META_LAYER` · the lanes | piece #6's eight · 8 · 12 `.lane` (8 + META + the three curve windows) · `layoutVersion` 7 |
| the ensemble warn | **fired** — the page opened the staged piece #5 save and warned `THIS SAVE WAS WRITTEN FOR A DIFFERENT ENSEMBLE — its tracks are [flute, bass_clarinet, piano, violin1, …]` |
| writes | none: no non-GET request left the page; nothing new on disk, tracked or ignored |

**Not seen, and said:** the harvest's H-9 (`TypeError` on every BARE load, `sequence_ui.js:1652`) did not fire — this load was not bare,
it opened a staged save. It is looked for at the fixes step, on a bare load. The sandbox was not started (its port is hard-coded 4900,
piece #6's, until 3.3). No panel was opened (3.5's).

**After:** the pane's storage for that origin cleared (4 keys) · the server stopped · the 137 staged paths deleted BY THE LIST, and two
empty folders the server made (`scores/versions/`) · the tree as §9 left it, checked with ignored files included · piece #6 untouched.

**THE AI'S CALLS ON THE REDS, his to reverse** (H-7: classified at the copy, not carried red a fourth time): `test_animobj` — fixed
with the seven · `test_identity` — fixed with them (one line) or retired if it does not come back green · the four self-tests — kept,
they are container 5's and go green when its schedules exist · **the twelve bound to piece #5's cast — RETIRED: taken out of this repo
in the fixes commit**, with `tools/fixtures/morph_notation_baseline.json` and `tools/morph_tuba_baseline.json` (read by two of them
only), each with its reason in NITS; any of them is fetched back from piece #6 @ `0d70fda` the day its tool is used here and re-pointed
at this piece's cast. Rejected: keeping them red (the thing H-7 forbids) · re-pointing them now (their subjects — the recipes, the
cast, this piece's pages — do not exist yet).

**The port's four scripts are kept in the repo, `tools/port/`** (`classify.js` · `copy31.sh` · `stage32.sh` · `run_batteries.sh`, with
the copy list and the leave list) — as they ran, for 3.5's second run and for the record; they write their outputs beside themselves,
so they are run from a copy in the scratchpad.

## §11. THE WRAP OF AGENDA ITEMS 1 · 2 — the tool docs' shared copy: NOT NOW, his "a"; and the question had to be asked twice (2026-10-04, Opus)

**The report put to him:** the two asks, the survey, the copy (369 / 369), the proof (52 checks: 34 green, 18 red, none the copy's), the
app on 5500 · the AI's call on the twelve checks of piece #5's cast (they leave at the next commit, his to reverse — no objection
raised) · and ONE decision, the home's 9.12, asked "at the copy" as journal §2 said: the tool docs' one piece-neutral copy in
`composition-system` — (a) not now, the AI's recommendation: a rewrite, best done when a tool is next used · (b) now, before the lanes.

**His reply was the question pasted back, and: *"simplify pls"*.** The first wording carried the protocol's words ("9.12", "shared
copies", "piece-neutral", "before the lanes are turned"). Asked again in his terms — *the tool manuals: tidy them now or later?* — two
lines each. **His word: *"a"*.** (The planning method's rule held: shortened, not re-explained. For the protocol's v2: a step's ask is
written in plain words IN the protocol, as 2.1's deviation already says.)

**So:** the 19 tool docs stay as copied; a provenance line each at 3.6; one is tidied the day its tool is next used. 9.12 is not raised
again in this start. A clear was advised at this point — everything is in the journal and pushed.
