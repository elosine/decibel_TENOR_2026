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

## §12. 3.8 THE SMALL FIXES, HERE — six made, one not reproduced; twelve checks retired; 36 green, 4 waiting for container 5 (2026-10-04, Opus)

**His word on the clear advised in §11: *"keep going here pls"*.** So 3.8 ran in the same chat.

**Read first** (piece #6, read-only): the harvest's H-9 · H-10 · H-11 · H-12 · H-16 · H-17 · H-19 and the NITS bullet each cites.

| # | The fault (the harvest) | What was done | How it was checked |
|---|---|---|---|
| 1 | H-9 — a `TypeError` on every bare load, `sequence_ui.js:1652`, the drawer's `stop()` before its DOM | **NOTHING — not reproduced.** Line 1652 is no longer `stop()` (it is inside `hear()`); `stop()` and `stopLine()` are guarded by `this.el &&` today | the app on 5500 (by environment), two BARE loads — one with no stored drawer state, one with — zero uncaught errors; `SequenceDrawer.stop()` and `RhythmSequence.stop()` called by hand: no throw |
| 2 | H-10 — `model_bank --validate` warns on `provenance.palette` | `'palette'` added to `PROV_KEYS` (`tools/model_bank.js`) | on piece #6's staged bank: warnings **74 → 41**, the 33 `palette` ones gone; VALID |
| 3 | H-11 — `test_animobj` red since #6 §454 (the curve follower off by rule) | the test's own pattern for a device switched off (its `lineWedge` · `motivePie` cases): the registry value asserted OFF, no follower collected, then the coverage and the motion checks run with the switch forced on | **ANIMOBJ GREEN** |
| 4 | H-12 — `palette_check` does not look at the composer's lane CSS | a § 7: one `.lane:nth-child(N)` rule per track, numbered 1 … N in order, tiling 0 → 100 %; one lane `<div>` per track | **PALETTE GREEN: 202** (198 + the four new) on piece #6's eight lanes |
| 5 | H-16 — `apply_ranges.js` would insert a second `MEASURED_RANGES` (its BEGIN marker no longer matches the carried block's header) | the block found by its header's PREFIX (`// ---- MEASURED RANGES`), and a refusal if the recipe declares the constant and the markers are not found; the same two lines in `apply_bend_ranges.js` | `node --check`; NOT RUN — it writes the recipe; first run at container 5 |
| 6 | H-17 — a card row carries no record of the trim in force when it was measured, so a re-run applies a correction twice | `tools/current_trims.js` (NEW — the recipe's `balanceDb` and `bank/perc_rack.json`, as JSON) · `probes/analyze_card.py` stamps `trimAtMeasurementDb` on every row it measures and on each velocity's summary (None when the rows disagree, with a warning) · `tools/compute_trims.js` starts the sum from that trim when the row carries it; a row without it falls back to the current trim under the old guard | on piece #6's staged card (no row stamped): the tool's whole output **byte-identical** before and after · the cello's fff row stamped −3.87 (its trim): proposed −3.40, as before, and its "applied twice" warning gone · stamped 0: proposed +0.47 = 0 + (target − measured) · `analyze_card.py` COMPILES and was NOT RUN (it needs a recording) |
| 7 | H-19 — the probes' default `$Port` is an older piece's | `-Port` made mandatory, no default, in the two probes that had one (`ceiling_probe.ps1` 'tuba1' · `port_note_probe.ps1` 'Vc') | both files parse (PowerShell's parser); not run (they send MIDI) |
| + | `test_identity` — its stand-in fell behind the page's `restoreData` | two lines: `curveDirty` on the stand-in, `TRACKS: []` in its context | **ALL PASS** on `lgmf-ref` (349 objects). Its DEFAULT score `piece-lgmf` is an EMPTY save in piece #6's git (0 objects) and fails one degenerate case — the default is re-pointed with the names at 3.3; the runner passes `--score` meanwhile |

**Retired, as §10 called it** (`git rm`, fourteen paths; nothing else requires them — they are named in comments only, checked by grep): the twelve
checks of piece #5's cast and the two fixtures only they read. NITS has the list.

**THE WHOLE BATTERY AGAIN, after the fixes** (40 commands; piece #6's data staged again by its list, 136 paths, deleted by the list
after): **36 green · 4 red** — the four self-tests that wait for container 5's schedules. `check_rules` green on piece #6's pages alone
(34), as at §10. Nothing that was green at §10 turned red.

**One thing running showed that reading had not:** a BARE load (no scores, no measurement banks — this repo's real state) logs four
`404` — `bank/scattered_strikes.json` · `velocity_remap.json` (twice) · `sample_lengths.json` — and `[velocity] remap not loaded`.
They are the leave-list banks; 3.4's skeletons end them. Not a fault of the copy, and not "zero console errors" until 3.4.

**A mistake of the AI's, caught at once, nothing lost:** a `node` one-liner edited `tools/port/stage32.sh` with `String.replace`, and
the new text contained `$'` — which JavaScript reads as "everything after the match", so the script was written with half of itself
doubled. Bash stopped on the syntax error before it staged a file; the script was restored from git and edited with the Edit tool.
The lesson joins the machine lessons: **a replacement string that may contain `$` goes through a function or a slice, never
`String.replace(a, b)`.**

**Not verified, and said:** `analyze_card.py`'s stamping, `apply_ranges.js` / `apply_bend_ranges.js` and the two probes were not RUN —
each needs a recording, a rack or a port. They are checked at container 5's first card (a line in NITS).

## §13. Q4 ANSWERED — THE PERCUSSIONIST ON TWO LANES, SIX IN ALL: his "b" (D9) (2026-10-04, Opus)

**Put to him at the wrap of 3.8, as the one decision the re-palette needs:** a lane is one row of the composer score; piece #6 gave its
percussionist two (the unpitched instruments · the vibraphone). (a) ONE lane — the AI's pick "for now": five lanes, the percussion
instruments not chosen yet, a second lane can be added later (§3) · (b) TWO lanes — one unpitched, one pitched: six lanes; right if he
already knows the percussionist plays a pitched instrument as a voice of its own.

**His word: *"b"*.** Against the AI's pick — so he does know it: the percussionist has a pitched voice of its own in this piece. He did
not say which instrument; that is the instruments talk's (4.0), and it is not asked now.

**What follows, and the AI's two calls inside it (D9, his to reverse):**

- **Six lanes, in the lineage's score order** (winds · percussion · strings — #5's D10): bass flute · bass clarinet · percussion ·
  the pitched percussion lane · viola · cello. `META_LAYER` 6; the curve windows A / B / C on layers 7 / 8 / 9, over the last three
  lanes (the pitched lane · viola · cello). `layoutVersion` 8.
- **The pitched lane is piece #6's VIBRAPHONE lane, carried whole, as the stand-in** — lane id `vibraphone`, recipe key
  `bowed_vibraphone`, its measured recipe, its second seat, its notation marks. Why this and not a neutral name: the engine has a
  whole ROLE built on that key (the second seat, the bow's marks, the strip's pitch tool, the still voice in a morph — §8, kind C), and
  carried as it is the role stays alive and tested; a neutral key would switch all of it off and prove nothing. If the pitched
  instrument is not a vibraphone, the lane is renamed at 4.0 — before any real save exists, so at no cost.
- **Three of the six lanes exist in piece #6 with measured recipes and are carried:** the percussion (Spitfire ARO) · the bowed
  vibraphone · the cello. **Two exist in piece #5** (`septet_2026`): the bass clarinet and the viola (Xsample, measured in the Tempus
  rack) — their recipes are taken from there. **One is new:** the bass flute — a placeholder until container 4.

## §14. 3.3 THE RE-PALETTE — eight lanes turned to six by one asserted script; the straggler audit found piece #6's FOLDER written into six files (2026-10-04, Opus)

**A CORRECTION OF §13 FIRST** (a new entry, not an edit): §13 said the bass clarinet's and the viola's recipes "are taken from" piece
#5. They were NOT. No library is chosen for this piece until container 4's first talk (journal §2, step 2), and carrying piece #5's
bass-clarinet recipe would have chosen one. So: the two winds are one-voice PLACEHOLDERS; the viola borrows the strings' ROSTER by
the cello's mechanism and none of its measurements (§15). Piece #5's two entries are container 4's sources.

**The reads before the script** (PLAN § 0.3's map, then the lines themselves): the composer page holds its lane count in eleven
places — the lane CSS (eight rules) · the curve windows' CSS (three `top` / `height`) · the lane `<div>`s · the track `<select>` ·
`TRACKS` · `META_LAYER` · `META_LAYERS` · `META_NAMES` · `META_COLORS` · `CURVE_LAYERS` · `CURVE_NAMES` · `CURVE_COLORS` ·
`CURVE_OVER` · `layoutVersion`. Everything else in the page reads those constants. The modules read `META_LAYER` through a
fallback (`typeof META_LAYER !== 'undefined' ? META_LAYER : 7`), so they follow.

**THE SCRIPT — `tools/port/repalette33.js`** (its text is in the repo; that is the record the protocol asks for). Every edit is
applied to an in-memory copy and its match count asserted; nothing is written unless every edit of every file held; each search
and replacement is translated to its file's own line ending; a file with mixed endings is refused. **It passed its dry run at the
first try: 25 files, 76 edits.**

| Kind | What it turned |
|---|---|
| A — the page | the title · six lane rules of 16.6667 % · the curve windows at 50 % / 66.6667 % / 83.3333 % · six lane `<div>`s · the `<select>` (six + META 6) · `TRACKS` — `bass_flute` · `bass_clarinet` · `percussion` · `vibraphone` (recipe `bowed_vibraphone`) · `viola` · `cello` · META 6, curves 7 / 8 / 9, `CURVE_OVER` lanes 3 / 4 / 5 · `layoutVersion` 8 · the session default `decibel` (six sites) · the abbreviation map |
| A — ports, names, guard | `score/server.js` 5500 · `sandbox/serve.js` 5000 · the `.bat` · `.claude/launch.json` (`score` · `sandbox` · `score-5501`; piece #6's `tempus-5300` entry dropped, no `lgmf-5400` entry — not asked for) · `package.json` + the lock `decibel-tenor-2026` · the guard `decibel_rack` in three tools · the page's four storage keys `decibel.*` |
| B — the tables | `beating_calc` `ORDER` · `CEILINGS` (bass flute 8 s, bass clarinet 12 s, viola 12 s — PROVISIONAL) · the three colour tables (the winds gold, the strings green, the percussion neutral) · `STRIKE_DEFAULT` ×2 · `ART_SETS` ×3 · `ART_DEFAULT` · `OPEN_STRINGS` (viola 48 55 62 69) · `STAND_IN` · the alias table · `pairOf` |

**THE STRAGGLER AUDIT — `tools/port/stragglers33.js`, 41 files, 62 edits.** After the first pass, a grep for every name of piece
#6's over the engine. By the protocol's rule (a default argument or a write guard is a parameter; a fixture stays; a coincidence is left):

- **THE ONE THAT MATTERED: piece #6's FOLDER, written in full, in six files** — `reaper/bridge/jobs/clip_watch.lua` ·
  `rec_mode_restore.lua` · `rec_mode_solo.lua` · `ref_track.lua` · `reaper/kontakt/curve_slots.lua` (each
  `'C:/Users/jwloy/GitHub/septet_LGMF_2026/'`) and `tools/test_written_pitch.js`. The five jobs would have WRITTEN into piece #6's
  folder from this piece's rack. The test READ there — so its green at §10 and §12 was a test of piece #6's folder, not of the copy.
  It now reads its own repo (`path.join(__dirname, '..')`) and is green here: 10 cases + the control.
- `piece-lgmf` → `piece-decibel`, 42 times in 22 files: the default `--ir` / `--score` of the tools, and the write guard "refusing
  to write the piece file" in four generators. LEFT as fixtures: `eh_figure_check` · `vib_marks_check` (piece #6's own locks) and
  three comments that cite its pages.
- `piece: 'lgmf'` in the calibration's eleven writers → `'decibel'` · the percussion's default port in `apply_perc.js`.
- LEFT, behind the project guard: the `LG…` port names inside the bridge's jobs — the rack's tracks are made at container 4.

**What went wrong, twice, and what it taught:**

- **The audit script was stopped by Windows halfway** (`UNKNOWN: unknown error, open …capture_composer_midi.js` — a file lock, not
  the script): six files written, thirty-five not. Nothing was lost — the six were restored from git and the script run again whole.
  But a script that asserts before it writes still writes file by file; a second run on a half-written tree fails its own counts.
  The lesson: restore, then re-run — never patch the remainder by hand.
- **Two one-line edits attempted through `node -e "…"` failed on the shell's quoting** (nothing written either time) — the Edit
  tool is the tool for a one-line edit; a script is for many.

## §15. 3.4 RECIPES AND SKELETON BANKS — three instruments carried, three placeholders; the libraries emptied; palette 158, roster 223 voices (2026-10-04, Opus)

**The recipe file — `tools/port/recipes34.js`** rebuilds `sandbox/instruments.js` (859 → 545 lines); it refuses to write unless the
rebuilt file EVALUATES to exactly the six instruments.

| Lane | Recipe | What it is |
|---|---|---|
| Bass Flute | `bass_flute` → `DECBassFlute` | a PLACEHOLDER: one voice `ord`, range 48–84 (the sounding compass, not measured) |
| Bass Clar. | `bass_clarinet` → `DECBassClar` | a PLACEHOLDER: one voice `ord`, range 34–77 (not measured) |
| Percussion | `percussion` → `DECPerc` | CARRIED from piece #6, verbatim: 32 voices (Spitfire ARO; the selection of fourteen is piece #6's — which instruments this piece uses is his) |
| Vibraphone | `bowed_vibraphone` → `DECVibes` | CARRIED, verbatim: 13 voices (Xsample Mallets Extended) — the stand-in for the pitched lane (D9) |
| Viola | `viola` → `DECViola` | a PLACEHOLDER by the cello's mechanism: the strings' 88-voice roster (`xsStringTechs`), range 48–93 (piece #5's figure); no `balanceDb`, no measured range, no measured bend |
| Cello | `cello` → `DECCello` | CARRIED, verbatim: 88 voices, its measured ranges and bend |

The schema text and every helper block are kept. `UVI_PARTS` · `SI2_KINDS` · `BY_KEY_MAPS` are emptied (their rows were the bassoon's,
the horn's, the trumpet's, the English horn's, the double bass's — and `applyKeyMaps` THROWS on an instrument that is not in the
table, so those rows could not stay). `MEASURED_BEND` keeps the cello's and the vibraphone's rows.

**The bank files the app and the checks read**, from piece #6's commit, each with a `_provenance`: `scattered_strikes.json` (empty
there too) · `velocity_remap.json` (the vibraphone's and the cello's rows only; five instruments dropped) · `sample_lengths.json`
(keyed by technique — the cello's rows, as it stood) · `perc_selection.json` (piece #6's fourteen, on `DECPerc`).

**The libraries — `tools/port/libraries34.js`** (his "a", §7: none come across): `morph_models.json` keeps the engine's seven
models (BALANCE · COLOUR · BLOOM · CONVERGE · SPACING · SPECTRAL · TAKES); piece #6's four own models (LG…) and 9 ids of actuals
that stayed in piece #6 are gone · `panel_snapshots.json` is empty and valid (8 panels of takes stayed there) · `sequences.json`
was already empty. After it: `model_bank --validate` VALID.

**The checks:** `palette_check` **158** (its § 7 on six lanes; no port is one of piece #5's or piece #6's) · `roster_check` **3
checks, 223 voices, 16 pending** (the viola's by-key voices, their keys read from his rack at container 4).
**One thing the palette check caught at once:** a comment the AI put at the END of the `spiccato` row — the check reads a row with a
pattern that allows nothing after the brace. The comment moved to the line above. A table a checker parses is edited to its shape.

## §16. 3.5 · 3.6 VERIFIED IN THE RUNNING APP, AND THE RECORD — container 3 is done; two defects only running found (2026-10-04, Opus)

**The servers, from `.claude/launch.json` for the first time:** `score` on **5500**, `sandbox` on **5000**. Piece #6's server was
listening on 5400 throughout (PID 6380) and was never touched. The verification recipe's stubs went in with the navigation.

| What was read | Result |
|---|---|
| a bare load | `Composer initialized` · **zero console errors** · no request 4xx (79 fetched, 63 scripts) — the four `404` of §12 are gone with the skeleton banks |
| the page | title `Composer Score — decibel TENOR 2026` · `TRACKS` the six · `META_LAYER` 6 · curves 7 / 8 / 9 · 10 `.lane` (6 + META + 3) · the six lanes tile the stage evenly (117 px each at 1280 × 860) · the `<select>` six + META · session `decibel` · `layoutVersion` 8 |
| each lane's range | `laneCanPlay` one below: false · lowest: true · highest: true · one above: false — all six |
| sixteen panels and windows, opened and closed | Insertion · Morph · Texture · Pulse · MT · Strikes · Sequence · Rhythm · Crescendo · Beating · META · curve A · B · C · Points · Fill — after the two fixes below, no error |
| the quiet role, CLICKED | the strikes drawer's Hear piano → a plain status, no throw (this piece has no piano) |
| the ensemble warn, with a control | this piece's own save: 0 warns · a piece #6 save: 1 — `THIS SAVE WAS WRITTEN FOR A DIFFERENT ENSEMBLE` |
| the save API | save · save versioned · list · load (layoutVersion 8, the six tracks) · discard — on a throwaway name; the one file left (a version) seen and deleted |
| the sandbox | the instrument menu = the six · `/motives` 200 · no error |

**DEFECTS THAT ONLY RUNNING FOUND — two, the same kind: a lane NUMBER from piece #5, carried unread through piece #6.**

- **The Beating panel threw on opening** (`beating_panel.js:540`, `Cannot read properties of undefined (reading 'label')`). The panel
  held the literal lanes `0, 1, 3, 4, 5, 6` four times and `layer === 2` twice — piece #5's seven lanes less its piano. In piece #6
  that list silently offered the wrong six of eight (no horn, no double bass). Here lane 6 is not a part. Now `BEAT_LANES()`: the
  tracks whose recipe is not `beating: false`. Its player menu reads Bass Flute · Bass Clar. · Vibraphone · Viola · Cello.
- **Curve button C threw** (`composer.html:1779`). The three buttons were wired to layers 8 / 9 / 10 — piece #5's — and `curveBtnFor`
  the same; in piece #6 (curves 9 / 10 / 11) button A toggled the META layer. Now by `CURVE_LAYERS`; A · B · C open and close
  layers 7 · 8 · 9 and their buttons light.
- With them: `cresc_run.js`'s default players named lane 6 (PROVISIONAL now: every lane but the percussion) · `openCurveWin(8)`
  had the same root and was turned in §14's script.

**The lesson, for the protocol:** the survey greps instrument NAMES; a lane NUMBER is invisible to it. At a port that changes the
lane COUNT, grep the literal lane lists and layer numbers too — and open every panel, which is what found these.

**The day-one score** `scores/decibel.json` (694 bytes: `layoutVersion` 8, the six tracks, no objects) was written by the app's own
Save from the AI's pane — the one save the port makes. The pane's storage cleared, the viewport reset, both servers stopped.

**3.6 the record:** `docs/NAMING.md` § 1 opens with this piece's names (confirmed against the code) · a provenance line on each of
the eighteen carried tool docs (not on the generated `ENGRAVING_RULES.md`) · `docs/VERIFICATION_RECIPE.md` re-pointed (`score-5501`,
`decibel.*`) · CLAUDE.md § Apps written · NITS · PLAN § 0 · journal §2 and §6.

**THE BATTERY AFTER THE RE-PALETTE** (40 commands, piece #6's data staged a third time): **30 green, 10 red** — the four self-tests
(container 5) · `check_rules` red by co-staging and green (34) on piece #6's pages alone · and **five that were green before and are
red now, each bound to piece #6's cast or data, which is what a re-palette does:** `dyn_table_check` (asserts the English horn's,
the bassoon's, the horn's measured curves) · `sequence_check` (piece #6's six reference chords and their baseline) ·
`vibes_pitch_check` (55 / 65 — its fixtures name the double bass, the horn, the English horn, the trumpet) · `check_ceilings --all`
(piece #6's `lgmf-*` scores read on this piece's lanes) · `model_bank --validate` (piece #6's actuals against a store that no longer
lists them). NITS has each with its re-point.
**In the BARE state — this repo as it is, nothing staged — eleven of the twelve checks that need no other piece's data are green**
(`palette_check` · `roster_check` · `model_bank --validate` · `unsaved_check` · `test_snapshots` · `test_written_pitch` ·
`spectrum_check` · `accel_calc_check` · `check_containers` · `check_cresc_deck` · `check_cresc_panel`); the twelfth,
`check_ceilings --all`, says there are no `decibel-*` scores yet.

**NOT DONE, and said:** nothing SOUNDS (container 4 · 5) · nothing notates this ensemble — `notation/registry/ensemble.json` is still
piece #6's eight parts (container 6) · the roles helper (the protocol's 3.10) and the bundled font (3.9) were not built: the piano
role is quiet and tested by a click, the percussion and the vibraphone roles are alive because their keys were carried — one lookup
is not needed yet; the font changes the look of the notation and belongs with container 6 · the gestures were clicked by script,
not with real input, so a claim here is "opens and closes without error", not "works under his hand".

## §17. THE PAPER, CORRECTED — ONE paper, about the Decibel piece AND his improvisation with live electronics (2026-10-04, Opus; then `/checkpoint`)

**His words, whole, at the wrap of container 3:** *"a correction for the tenor call. I'll write one paper talking about both the
decibel piece and my um, improvisation with live electronics."* Then `/checkpoint`.

**What it corrects:** §4's standing reminder (*"I'll need to create a paper directly after finishing the piece or during it
somehow, same deadline"*) read as a paper about THIS piece. It is ONE paper for the TENOR call with TWO subjects: this piece, and
his improvisation with live electronics.

**The AI's reading, marked as such** (not asked — he went straight to the checkpoint):

- "My improvisation with live electronics" is taken to be the IMPROVISER piece — one of the three electronics pieces that share the
  engine (CLAUDE.md; `#6` LG-348 … LG-351). If he means a practice or an existing set rather than that piece, the record below still
  holds; one line of his settles it when it matters.
- So the paper's sources are more than this log: this RUNNING_LOG · the ENGINE's lab journal (`live-electronics-system/docs/`,
  where what both pieces share is built and reasoned) · the improviser piece's own log, once that repo exists.
- What the two subjects SHARE is the engine — the mic openings, the bank, the return, the processing (the running order's steps
  6 … 10). The record of those steps is therefore written so it reads for either piece: what is the machinery (the engine's log)
  kept apart from what is this piece's USE of it (this log) — which THE SORTING already asks of the code.

**Done with it:** CLAUDE.md § THE PAPER carries the correction · journal §7 · PLAN § 4. **Not done, his word needed:** nothing was
written into the engine's repo or the planning repo (each is written in a session of its own or at his word); when the improviser
piece's repo is made, its kit carries this same reminder — a line in journal §2 says so.

## §18. CONTAINER 4 OPENS — THE TALK (4.0): Xsample for the four, Ricotti Mallets for the pitched lane, the unpitched percussion open; and "can AI build the rack?" (2026-10-04, Fable, after `/clear` + `/postclear`)

**What prompted it — his words at the postclear, verbatim:** *"I have a new X sample library installed for the bass flute. And
then I'm currently installing a library that's a Spitfire library called Ricotti Mallets … So let's see if we can't get the
documentation for that. If not, I'll find them and download them into the repo. And then whenever is the appropriate time,
let's set these instruments up. The X sample will be like all the other ones. We'll just have to get the articulation map. And
then we can investigate the Ricotti mallets when it's finished downloading. Maybe another 15, 20 minutes. And it is... Crotales,
Glockenspiel, Marimba, and Xylophone. but write these things in when it's the appropriate timing. I'm not 100% sure where we are
in the plan."* — then, on the play-back: *"manual here [`docs/RICOTTI_USER_MANUAL_PP006-007.pdf`]. And then where are we with
the uh, Reaper rack? Has that been made yet, or do we need to make it? And then yes, bass clarinet, viola, cello, [Xsample], and
bass flute. And as soon as the rack is ready, I'll send you screenshots of the articulations for bass flute. And then let's go
through all the proper settings. Like the, um, round robin, etc. Now, can we devise a way for AI to build the rack if it hasn't
been already built? Like maybe copy previous racks and then just copy the. The um, instrument lanes back and forth. I don't
know. Let's discuss this."* (the percussion lane in COMPOSITION_NOTES DEC-5.)

**The talk's answers so far (the protocol's 4.0):**
- **Bass flute** — Xsample, a NEW library installed today (the lineage's candidates were "Xsample or IRCAM SI2, whichever has
  one"; Xsample has one and he owns it). Kontakt family. *"like all the other ones. We'll just have to get the articulation
  map"* — his Preset Menu screenshots once the rack stands, as piece #6 did (its 39 · 88 entries).
- **Bass clarinet · viola · cello** — Xsample (piece #3's deep map · piece #5's bass clarinet recipe, 34 presets · piece #5's
  viola · piece #6's cello). Kontakt family. Nothing new to acquire.
- **The pitched percussion lane** — **Spitfire Ricotti Mallets** (product PP006-007), installing at the time of the talk:
  crotales · glockenspiel · marimba · xylophone, ALL FOUR ON ONE LANE (DEC-5). Spitfire family, as ARO — "a new library of a
  known family costs a load and a read-back" (the protocol's 4.0). The manual he put in `docs/`; the AI moved it to
  `docs/manuals/` (piece #3's place for vendor manuals), his to reverse. **The patch list, from his four screenshots of the
  product page (data for 4.5; not yet seen in the plugin):**
  - Marimba: FX - Bows · Hotrod (Flams) · Hotrod · Main - Full (Hard) · Main - Full (Soft) · Main - Rubber · Main - Trems · Main
  - Glockenspiel: Glisses · Main (Extra Soft) · Main (Hard) · Main (Medium Soft) · Main (Medium) · Main (Soft) · Rolls (Hard) ·
    Rolls (Soft) · Shorts (Hard) · Shorts (Medium Soft) · Tremolo (Hard) · Tremolo (Soft)
  - Crotales: Bowed · Main (Felt) · Main (Metal damped) · Main (Metal) · Main (Plastic damped) · Main (Plastic) · Rolls (Metal)
    · Rolls (Plastic) · Rolls (Rubber)
  - Xylophone: Glisses · Main - (Hot Rods) · Main (Extra Soft) · Main (Hard) · Main (Medium) · Main (Soft) · Main · Rolls
    (Hard) · Rolls (Hot Rods) · Rolls (Soft)
  - Microphones: Ca Cardioid · V Valve · Co Condenser · Ri Ribbon · Ro Room
  The vibraphone stand-in (D9) goes when the Ricotti track stands.
- **The unpitched percussion** — UNDECIDED; he is gathering candidates. The start runs on the five known and takes it as it
  arrives (the protocol's 4.0, last sentence).

**The rack — where it stands (his question):** NOT MADE. `reaper/` holds the bridge only (`bridge.lua` · `jobs/make_tracks.lua`
· `jobs/make_perc_tracks.lua`, carried from piece #6); no `.rpp`; no `DEC…` port exists in loopMIDI. Making it IS container 4's
4.1 (the ports) and 4.2 (the tracks). How the last rack was made (the protocol's data paragraph): ten ports made BY HIM in
loopMIDI · the tracks by the bridge's idempotent scripts in score order · every preset loaded BY HIM in each plugin's own
browser — "the one step no script can do" (`#6 §36`) · the AI read each load back and set the rest as text.

**His idea, read back — "copy previous racks … copy the instrument lanes back and forth":** a Reaper track chunk carries its
plugin WITH the preset loaded (the state blob; REAPER_CONTROL's mechanism 9 says never EDIT it — copying it whole is what Reaper
itself does when a track is pasted between projects). The lineage has in git: piece #5's `reaper/septet_rack.rpp` (the Xsample
bass clarinet with its 34 presets · the Xsample viola) and piece #6's `reaper/LGMF_rack.rpp` (the Xsample cello · the Mallets
Extended bowed vibraphone · ARO). So three of the five known instruments are ALREADY LOADED in a rack this machine has; the AI
can clone those tracks into the new rack as text — input re-pointed to the `DEC` port, fader to 0 dB (the old pieces' trims come
along and container 5 re-measures), name and order this piece's — and his loads shrink to the two NEW libraries. Precedent:
`#6 §35` "cloning yes, a new family no". **UNPROVEN here** — a claim only when the first clone sounds (4.6). Put to him as the
one decision: clone the three, or all fresh as last time. **What stays his either way:** the loads of the bass flute (Kontakt —
the Kontakt Lua loader of REAPER_CONTROL 8c is the scripted alternative, one drag of the script per instance) and of Ricotti
(Spitfire's own browser) · the loopMIDI ports — unless H-15, the protocol's ONE look at whether loopMIDI can be driven, finds a
way; it is taken at 4.1, as the protocol says · the unpitched percussion when chosen. **"The proper settings — round robin etc."**
is 4.4 (the state as text) and container 5's 5.2 pre-flight (the round robins); noted, in order.

**His second message, mid-turn, verbatim:** *"And I don't know if a sub protocol was written for the port protocol about the
wrap [the rack], but maybe we should fill in a few details. I don't want to spend too much time on it, but fill in a few details
like the CC7 multi tracks per library, the way to deal with changing articulations for the different libraries, et cetera, et
cetera. Like I said, I don't want to spend too much time on it, especially on my end, but if we could just, if you could just
list a few things about how to do it to make it slightly easier next time, and we'll revise the whole system when we have a
little bit more time. But right now, I want to get the rack built. And see if AI can do as much as possible in, you know,
duplicating the additional tracks or making the multis, etc., or putting the lanes in with different uh, channel values, etc.,
etc."*

**Decided (the AI's reading of his word, his to reverse):** (1) THE CLONE ROUTE — "duplicating the additional tracks … making
the multis … the lanes with different channel values" is the clone of the three Xsample tracks from pieces #5 · #6's racks in
git, taken as his (a); the build plan is in journal §2. (2) THE HOW-TOS: the protocol's 4.4 names "one how-to per plugin
family" and 4.10 says write them from the record — NOT YET WRITTEN (`todo` in the protocol). They are written at 4.7 of this
build, one short page per family (Kontakt-Xsample · Spitfire · UVI SI2) in the home repo under `protocol/howto/`, a few
bullets each — the port · the track · the instance and the channel map · the curve copies and CC7 · the articulation switch ·
the read-back · the round-robin pre-flight — from `#6` RUNNING_LOG §20 … §42 and what this build proves; nothing on his end;
the full revision later, his words. (3) The pitched lane's port RENAMED `DECVibes` → `DECMallets` at 4.1 (the AI's naming
call). (4) The build is Opus's — the switch point; no clear needed, the chat is short.

## §19. CONTAINER 4 — 4.1 THE PORTS MADE BY THE AI (H-15 answered: YES) · 4.2 THE RACK BUILT AS TEXT, three tracks CLONED from pieces #5 · #6 and PROVEN to sound · Ricotti is a KONTAKT library, a correction (2026-10-04, Opus)

**What prompted it — his words:** on the step list, *"go"*; mid-build, *"mallets not yet installing now"* — read by the AI as: the
mallets are not installed yet, still installing. So Ricotti was left alone; the build ran on the four Xsample instruments.

**A CORRECTION OF §18.** §18 called Ricotti Mallets "Spitfire family, as ARO". It is not. His manual (`docs/manuals/`, p. 4):
the library *"requires the full version of Kontakt to run, it will not work in the Kontakt 'Player'"* — a KONTAKT library of the
Kontakt 4 / 5 years (product PP006-007), opened as `.nki` files. So its family is **Kontakt**, the same as Xsample: its loads are
scriptable by the Kontakt Lua API, its patches sit in the slots of a Kontakt instance on MIDI channels. From the manual, for 4.4 ·
4.5 and container 5: 8 round robins and 4 dynamic layers · an instrument's articulations are chosen by KEYSWITCH or by a CC
("KEYSWITCH TO CC SELECTOR") · the round-robin count is a dial, 1 … 8 · "RESET FROM F7" resets the round-robin cycle from a key
(default F0), "RESET ON TRANSPORT" on play · "CC1 MAPPED VEL" puts the shorts' dynamics on CC1 as the longs' are · the "Punch Cog"
patches can SKIP one round robin · five microphones (Ca · V · Co · Ri · Ro) · an ARTICULATION LOCK. The marimba's eight
articulations, in the manual's order: Main · Rubber · Full Soft · Full Hard · Hot Rod · Hot Rod Flam · Tremolo · Bow. The library
folder: `C:\Users\jwloy\Spitfire\Spitfire Ricotti Mallets library` (still arriving at 13:38).

**4.1 — H-15, THE ONE LOOK: CAN loopMIDI BE DRIVEN? YES.** (Piece #6's harvest item; his ask of 2026-09-17, *"figure out how you
can automate the loop MIDI ports, because each of the percussion instruments will need its own port"*.)
- loopMIDI 1.0.16.27 keeps its ports as VALUES of the registry key `HKCU\Software\Tobias Erichsen\loopMIDI\Ports` — one value per
  port, the name the port's, the type DWORD, the data 1 — and creates them when it starts. 50 values, 50 live ports, before.
- The method: Reaper closed (it was) → the key exported as a backup → loopMIDI stopped → nine DWORD values added → loopMIDI
  started. Its own window listed all 59 at once.
- **THE WAIT — the thing to know next time:** Windows did not show the new ports to other programs at once. loopMIDI started
  13:41:03; at 13:41:10 and 13:42:24: 52 outs, 51 ins, no `DEC`; at 13:43:47: **61 outs, 60 ins, all nine `DEC` ports, in and out,
  case-exact.** About two minutes for nine NEW names (the fifty old ones were back in seconds). Tried on the way, kept: UI
  Automation cannot read loopMIDI's list (a Delphi grid); a capture of its own window, scrolled, can.
- To revert: delete the nine `DEC…` values, restart loopMIDI.
- **THE PORTS — nine, the AI's naming call, his to reverse:** `DECBassFlute` · `DECBassClar` · `DECPerc` · `DECCrotales` ·
  `DECGlock` · `DECMarimba` · `DECXylo` · `DECViola` · `DECCello`. The four mallet instruments get A PORT EACH, not the one
  `DECMallets` announced in §18: the product page lists 39 patches against one instance's 16 channels, his standing ask is a port
  per percussion instrument, and a port now costs nothing. `DECVibes` (the stand-in's) was never made.
- **WHAT REAPER DID NOT DO:** it did not switch the new ports on as inputs. `reaper.ini`: `midiins_h=8388607` = devices 32 … 54
  enabled; the `DEC` ports are devices 55 … 61 · 64 · 65 (`reaper-midihw.ini`). Piece #6 §23 found new ports enabled by themselves;
  here they were not. The masks are not reachable as config variables (SWS is installed; `SNM_GetIntConfigVar('midiins_h')` returns
  the default) — so the tick in Preferences → MIDI Inputs is HIS, one step.

**4.2 — THE RACK AS TEXT (`tools/build_rack.js` → `reaper/decibel_rack.rpp`).** His idea (§18): *"copy previous racks and then
just copy the instrument lanes back and forth"*.
- The old racks, read from git: piece #5 `septet_rack.rpp` @ `aa33d3f` (13 tracks) · piece #6 `LGMF_rack.rpp` @ `755df22` (30).
  A track chunk carries its Kontakt WITH the multi; the recipes of both pieces say D11 — channel 1 MAIN, 2 … 4 CURVE A / B / C.
- Built: piece #6's project header (120 BPM, master 0 dB, no master FX) + four tracks in score order — **Bass Flute XS** (bare) ·
  **Bass Clarinet XS** ← piece #5 (11 762 lines) · **Viola XS** ← piece #5 "Va XS" (16 634) · **Cello XS** ← piece #6 (17 625).
  46 140 lines, 6.0 MB. On a cloned track three lines are rewritten — NAME · VOLPAN to 0 dB · REC to no input — and the tool
  checks the plugin state's hash before and after: `8ee06c07d9f3` · `9658dc6cd9ec` · `c52717786002`, carried byte-exact.
- The input is NOT in the text: a MIDI device number is Reaper's own. `reaper/bridge/jobs/make_tracks.lua` (its SPEC rewritten
  to this piece's four rows) sets each input by PORT NAME, arms, monitors, and inserts Kontakt into the bare track.
- Reaper was opened ON the file by the AI; the bridge answered after 52 s with `decibel_rack.rpp`, 4 tracks. The job's read-back:
  Bass Flute XS ← `DECBassFlute` (device 55; Kontakt 8 inserted) · Bass Clarinet XS ← `DECBassClar` (56) · Viola XS ← `DECViola`
  (64) · Cello XS ← `DECCello` (65); every track armed, monitoring, 0 dB, its Kontakt enabled and online.
- **THE PROOF, and a dead end first.** A note sent to `DECCello` (`tools/note_to_port.ps1`, winmm) twice showed NO level
  (−150 dB on every meter). Not diagnosed by guess: `MIDI_GetRecentInputEvent` showed Reaper had received nothing from
  `DECCello` (only old CC64s from `reaper1`) — the note never arrived, because the input is not enabled (above). So the clones
  were proven APART from the ports: `reaper/bridge/jobs/sound_check_vkb.lua` switches a track's input to Reaper's Virtual MIDI
  Keyboard, stuffs one note, watches the meter, puts the input back. **Cello XS, A3: −26.3 / −24.8 dB · Viola XS, E4: −19.6 /
  −18.2 dB · Bass Clarinet XS, D3: −28.0 / −26.2 dB; every input restored.** THE CLONE ROUTE WORKS: three instruments arrived
  loaded, with no load by him. (He heard the three notes twice — the first run's answer was read too early.)

**Left out, and why — his to reverse:**
- **Git, not the working files.** Both old racks are NEWER on disk than in git — piece #6's saved 2026-10-01, piece #5's
  2026-09-17 — and the plugin states differ (cello `c527…` in git, `ef78…` on disk; bass clarinet `8ee0…` / `84fc…`; viola
  `9658…` / `6aaf…`). The build took git's: CLAUDE.md's rule ("from GIT or asks him") and his answer at §7 ("none go across").
  The disk racks are the ones the pieces were finished on, and the carried cello measurements were made on piece #6's; `--source
  disk` reads them without touching them. PUT TO HIM, one word.
- **Piece #5's SECOND "Bass Clarinet XS" track** (a single-slot Kontakt, 229 216 bytes of state against the first's 1 125 189, on
  the same port) and its **"BassCl strikes" bus** are not carried: what the second instance was for is not in the record the AI
  read, and this engine's recipes have no strike lane (`lane:` occurs nowhere in `sandbox/instruments.js`). The strike slot on
  channel 5 came along inside the clone, idle. Looked at again when the bass clarinet's recipe is derived (4.5). NITS.

**Written for 4.3, not run:** `reaper/kontakt/load_bass_flute.lua` — in the empty Kontakt of "Bass Flute XS" it loads
`Bass Flute.nki` (in the AIL installer's copy of the collection, as the English Horn's was) on channel 1 and the three curve
copies on 2 … 4, and writes its read-back. Parse-checked through the bridge (Reaper's Lua 5.4). His part is one menu item.

**The division of labour, as it came out** (for the how-to pages, 4.10): the AI made the ports, built the rack file, opened
Reaper, set every input, proved the sound. His: enabling the new inputs in Reaper's Preferences (once) · running a Kontakt script
from Kontakt's own menu (once per new instance) · CTRL+S.

## §20. CONTAINER 4 — THE PORTS PROVEN END TO END · THE THREE CLONES SWAPPED TO THE RACKS ON DISK (his word) · RICOTTI: installed, cataloged, four tracks, four loaders (2026-10-04, Opus)

**What prompted it — his words:** *"The mallets should be installed now. Could you see if you can get it into a [Kontakt]
instrument? If not, can you see what directory it landed in? and I'm working on the rest now."* — then, mid-turn: *"disk, midi
inputs done; I'll give you tentative non-pitched in a moment"*.

**The ports, end to end (his Preferences step done).** One note through each port, the meters read by `peakwatch.lua`:
Cello XS −27.3 / −25.9 dB · Viola XS −22.3 / −18.9 dB · Bass Clarinet XS −27.1 / −30.1 dB. The path loopMIDI → Reaper → the
cloned Kontakt is whole. He had SAVED the rack (14:14) — from then the file is his, and every change goes through the bridge.

**"disk" — the three clones re-taken from the old racks' working files.** `tools/build_rack.js --source disk --emit "<track>"`
writes one cloned chunk; the bridge sets it on the existing track (`reaper.SetTrackStateChunk`), then `make_tracks.lua` gives
the track its input back. Read, never written: piece #6 `LGMF_rack.rpp` as saved 2026-10-01 18:48 · piece #5
`septet_rack.rpp` as saved 2026-09-17 15:04.
- Cello XS: state `ef78072c7073`, 2 416 010 bytes, set in 2.6 s · Viola XS: `6aaf0033227b`, 2 274 260 bytes, 2.6 s · Bass
  Clarinet XS (the first of piece #5's two): `84fc68314a30`, 1 606 303 bytes, 1.7 s.
- After the swap, through the ports: **Cello XS −28.3 / −26.6 dB · Viola XS −22.6 / −23.5 dB · Bass Clarinet XS −17.9 / −16.7 dB**
  (the bass clarinet 10 dB above git's state at the same note and velocity — the states do differ; which setting, not looked at).
- This is a deviation from "the copy is from git" (§7), at his word, for the rack's three tracks only.

**Ricotti Mallets — where it landed and what it is.** `C:\Users\jwloy\Spitfire\Spitfire Ricotti Mallets library` — `Instruments`
· `Samples` (.nkx / .nkc containers) · `Scripts`; 16 GB; 43 `.nki`: one per instrument (`Crotales` · `Glockenspiel` ·
`Marimba` · `Xylophone` — the articulations by keyswitch) and 39 in `_Individual patches_`, one beater or technique each —
the 39 of his product-page screenshots (§18), name for name.
- **The layout — the AI's call, his to reverse:** ONE Kontakt per instrument, on its own track and port; inside it ONE SLOT PER
  INDIVIDUAL PATCH, each on its own MIDI channel. Why the individual patches and not the four keyswitched instruments: a
  technique is then a CHANNEL, as every percussion voice of the lineage is (piece #6's D7) — two beaters can sound at once,
  nothing is latched, and the manual says the keyswitched instrument leaves some articulations unloaded until a chip is clicked.
  Rejected: one `DECMallets` port (39 patches against 16 channels).
- **The catalog — `bank/ricotti_catalog.json`** (`tools/ricotti_loaders.js --scan`, from the folder; a channel is never
  re-dealt): Crotales 9 — 1 Main (Felt) · 2 Main (Metal damped) · 3 Main (Metal) · 4 Main (Plastic damped) · 5 Main (Plastic) ·
  6 Bowed · 7 Rolls (Metal) · 8 Rolls (Plastic) · 9 Rolls (Rubber) | Glockenspiel 12 — 1 Main (Extra Soft) · 2 Main (Hard) · 3 Main
  (Medium Soft) · 4 Main (Medium) · 5 Main (Soft) · 6 Glisses · 7 Rolls (Hard) · 8 Rolls (Soft) · 9 Shorts (Hard) · 10 Shorts
  (Medium Soft) · 11 Tremolo (Hard) · 12 Tremolo (Soft) | Xylophone 10 — 1 Main · 2 Main - (Hot Rods) · 3 Main (Extra Soft) ·
  4 Main (Hard) · 5 Main (Medium) · 6 Main (Soft) · 7 Glisses · 8 Rolls (Hard) · 9 Rolls (Hot Rods) · 10 Rolls (Soft) | Marimba 8 —
  1 Main · 2 Main - Full (Hard) · 3 Main - Full (Soft) · 4 Main - Rubber · 5 Main - Trems · 6 FX - Bows · 7 Hotrod · 8 Hotrod (Flams).
- **The tracks** (`make_tracks.lua`, four rows, score order high to low, after the bass clarinet): Crotales RM ← `DECCrotales`
  (device 58) · Glockenspiel RM ← `DECGlock` (59) · Xylophone RM ← `DECXylo` (61) · Marimba RM ← `DECMarimba` (60); each
  with an EMPTY Kontakt 8, armed, monitoring.
- **The loaders** — `reaper/kontakt/load_rm_crotales.lua` · `…_glockenspiel.lua` · `…_xylophone.lua` · `…_marimba.lua`,
  generated from the catalog, parse-checked through the bridge. NOT RUN: a Kontakt Lua script runs only from inside that
  Kontakt (its menu, or the file dragged onto it) — the one thing in this build the AI cannot reach. The AI did not take his
  mouse to do it: he was working in Reaper. Machine: 31.8 GB of memory, 17.3 free, Reaper at 3.5 before the mallets.

**His own track.** While this ran he added a ninth track with Spitfire Abbey Road Orchestra — the unpitched percussion,
tentative, his to tell. `make_tracks.lua` does not touch a track that is not in its SPEC; it now sits below the cello. (Its
audition is why the master read −4.9 dB during the first port test — not the three notes.)

**For the how-to pages (4.10):** a track re-cloned in a saved rack = emit the chunk, set it through the bridge, re-run
`make_tracks.lua` · a Kontakt library with many patches = a catalog, one slot per patch on its own channel, a generated loader.

## §21. CONTAINER 4 — THE UNPITCHED PERCUSSION (his tentative list): eight tracks on `DECPerc`, three cloned from piece #6 and sounding · HIS LOADS RUN: the bass flute, crotales, glockenspiel, xylophone loaded by script and read back (2026-10-04, Opus)

**What prompted it — his words** (the list is in COMPOSITION_NOTES DEC-6, verbatim): bongos · shime daiko, *"alternate be the
regular snare for the notation performance notes. But let's use the Shime Daiko samples"* · bass drum, *"the alt version"* · wood
blocks · anvils, then *"let's skip the anvils"* · China cymbal · *"spring coil that's in small metals"* · suspended cymbals · toms.
And, mid-turn: *"Do I need to run anything for the bass clarinet, or is that done?"* — answered: done, it arrived loaded.

**Against the catalog** (`bank/aro_percussion_catalog.json`, piece #2's, 78 instruments): bongos `bongos` · shime daiko
`shime_daiko` · bass drum alt `bass_drum_alt` · wood blocks `wood_blocks` · spring coil `small_metals_spring_coil` — all
`verified`. Three left open by the list, settled by what he loads: China cymbal — `china_cymbals` (verified) or
`china_cymbal` (a skeleton) · suspended cymbals — `susp_cymbals_dark` · `_mellow` · `_bright` (verified) · toms — `toms_high`
· `toms_low` (verified; `epic_toms` · `roto_toms` exist).

**What an Abbey Road instance can and cannot take as text** (piece #6 §33 … §36, re-read, not re-derived): a state restores
only what the plugin has itself loaded once; it never loads a preset because a state names it. So an instrument an earlier
rack holds can be cloned; a new one costs ONE load in the plugin's own browser, his.

**Built:**
- `reaper/bridge/jobs/make_perc_tracks.lua`, its SPEC this piece's eight rows, port `DECPerc`, after the bass clarinet. Run:
  eight tracks, each an EMPTY Abbey Road Orchestra instance, armed, monitoring, on ITS channel — Bongos ARO 1 · Shime Daiko ARO
  2 · Bass Drum Alt ARO 3 · Wood Blocks ARO 4 · China Cymbal ARO 5 · Spring Coil ARO 6 · Suspended Cymbals ARO 7 · Toms ARO 8.
  The rack: 16 tracks — Bass Flute XS · Bass Clarinet XS · the eight · Crotales RM · Glockenspiel RM · Xylophone RM · Marimba
  RM · Viola XS · Cello XS. (His own scratch Abbey Road track of §20 was gone before this ran.)
- **Three cloned from piece #6's rack on disk** (`tools/build_rack.js --source disk --emit-src p6 …`, a new switch: any
  track of an old rack), set through the bridge, the channel put back: Bass Drum Alt ARO ← "Bass Drum Alt ARO" (state
  `15caedfa1294`) · Wood Blocks ARO ← "Wood Blocks ARO" (`634f9e7fb88c`, with its JS volume) · Spring Coil ARO ← "Finger
  Cymbals ARO" (`f1bc642ebedc`) — a Small Metals (C) preset, 14 instruments as articulations; the active one switched from
  Finger Cymbals to **Coil** (articulation 10) by `tools/aro_state.js edit --artic "Coil" --push`, read back.
- **A dead end, kept:** the first test notes showed nothing. Reaper HAD received them (`93 3C 5A DECPerc` …) — the keys were
  wrong: these instruments are mapped from C2 = 36 upward, in blocks with gaps (the catalog), and 60 · 60 · 40 fell outside or
  in a gap. On key 36: **Bass Drum Alt −24.6 / −24.9 dB · Wood Blocks −26.7 / −25.1 dB · Spring Coil −28.9 / −32.6 dB;** the
  empty Bongos track on channel 1 stayed silent — each track answers only its channel. One bridge job failed once with
  `EBUSY` on the inbox rename and passed on the retry.
- NOT done: the selection (`bank/perc_selection.json`, still piece #6's fourteen) and the recipe (`tools/apply_perc.js`) —
  written when his five loads are read, as piece #6 did (its §38), since three slugs depend on what he loads.

**HIS LOADS, THE KONTAKT SCRIPTS — they work.** He ran four of the five while this was built; each wrote its read-back:
- `load_bass_flute` 14:26:28 — 0 → 4 slots: "Bass Flute" on channel 1, "Bass Flute curve A / B / C" on 2 / 3 / 4, output 0,
  −6.0 dB each (the library's own default). The script loaded slot 1 itself — the Xsample load is no longer his.
- `load_rm_crotales` 14:28:02 — 9 slots, channels 1 … 9 · `load_rm_glockenspiel` 14:28:23 — 12 slots, 1 … 12 ·
  `load_rm_xylophone` 14:28:42 — 10 slots. Every `ok: true`; every slot renamed from the library's "c - Crotales - Main
  (Felt)" form to the catalog's.
- **Sounded through their ports, channel 1:** Bass Flute XS, C4: −22.4 / −24.6 dB — THE FIRST SOUND OF THE NEW LIBRARY ·
  Crotales RM, key 84: −36.2 / −32.4 dB · Xylophone RM, key 72: −32.3 / −29.3 dB · Glockenspiel RM, key 84: −88 dB, which is
  no note — the key is probably outside that patch's range; NOT diagnosed, the ranges are read at 4.5 · Marimba RM: not yet
  loaded when this was written.
- The rack was saved by him again after these (not dirty, 16 tracks).

## §22. CONTAINER 4 — "done with scripts saved": all five Kontakt loads in, every Xsample and Ricotti track sounds (2026-10-04, Opus)

**His words:** *"done with scripts saved"*.

- `load_rm_marimba` (started 14:29:10; its read-back appears when the eight patches have loaded): 8 slots, channels 1 … 8 —
  Main · Main - Full (Hard) · Main - Full (Soft) · Main - Rubber · Main - Trems · FX - Bows · Hotrod · Hotrod (Flams). `ok: true`.
  §21's "Marimba RM −150 dB" was a note sent while it was still loading.
- Through the ports, channel 1: **Marimba RM, key 60: −44.1 / −33.7 dB** · **Glockenspiel RM, key 72: −55.4 / −56.3 dB** — it
  sounds, weakly (channel 1 is "Main (Extra Soft)"); key 96 gave nothing, key 84 (§21) −88 dB. The ranges and the levels of the
  39 patches are 4.5's and container 5's.
- The rack: `reaper/decibel_rack.rpp`, 16 tracks, saved by him 14:29, 17.0 MB, not dirty. Not committed — at his word.
- **Where container 4 stands:** sounding through their ports — Bass Flute XS · Bass Clarinet XS · Viola XS · Cello XS ·
  Crotales RM · Glockenspiel RM · Xylophone RM · Marimba RM · Bass Drum Alt ARO · Wood Blocks ARO · Spring Coil ARO. Empty,
  waiting for his load in the Abbey Road browser: Bongos ARO · Shime Daiko ARO · China Cymbal ARO · Suspended Cymbals ARO ·
  Toms ARO. **His hands in this whole build:** one Preferences step · five script picks · saves. No preset loaded by hand yet.

## §23. THE KEY MAPS — "is that still need to be done manually?" No: the catalog has them, and the plugin's own state confirms which map is which (2026-10-04, Opus)

**What prompted it — his words**, with a screenshot of the loaded Bongos' keyboard: *"Where are we with the key maps? Is that
still need to be done manually?"* — then two more keyboards, no words: CHINA CYMBAL (All in One) and SHIME DAIKO.

**The answer:** no. `bank/aro_percussion_catalog.json` (piece #2's key-by-key map of the All-in-One presets, carried) has 78
instruments — 38 `verified`, 36 `skeleton`, 2 `predicted`, 2 `partial` — and every instrument he loaded is among the verified.

**A check that needs no hands and no sound — found here, for the how-to pages (4.10):** `tools/aro_state.js info "<track>"`
prints each articulation of the loaded preset with its `top` key. The All-in-One's `top` against the catalog's last mapped key:

| His load (the preset, the active articulation) | `top` | the catalog entry | its last key | |
|---|---|---|---|---|
| Bongos (C) · "Bongos B - AIO" | 79 | `bongos`, 26 keys | 79 | ✓ |
| Shime Daiko (C) · "Shime Daiko - AIO" | 57 | `shime_daiko`, 11 keys | 57 | ✓ |
| China Cymbal (C) · "China Cymbal - AIO" | 75 | `china_cymbals`, 29 keys | 75 | ✓ |
| Suspended Cymbals (C) · "Cymbal Mellow - AIO" | 93 | `susp_cymbals_mellow`, 37 keys | 93 | ✓ |

- **The China cymbal, settled:** the catalog has TWO entries — `china_cymbals` (verified) and `china_cymbal` (a skeleton, no
  keys). His preset is named "China Cymbal (C)"; its All-in-One ends on key 75 and its keyboard shows seven blocks — 4 · 4 | 4 · 5
  | 4 · 4 | 4 keys, soft · bows · scrapes · sticks — which is `china_cymbals`' map block for block. So the mapped entry IS this
  preset; the skeleton is a duplicate name. (Not yet swept key by key; the calibration touches every key.)
- **The bongos and the shime daiko** against his screenshots: the catalog's blocks are the keyboard's — bongos C2 … A2 · C3 … A3
  · C4 … G4 · C5 … G5, the hovered key "Low - Hand Hit (Left)" = the catalog's C2 "Low Hand Hit L"; shime daiko the white keys
  C2 · D2 · F2 · G2 · A2 · C3 … A3, eleven.
- **The suspended cymbals, settled by his load:** the preset "Suspended Cymbals (C)" holds eight articulations — five beaters and
  three All-in-Ones, Dark · Mellow · Bright; the active one is **Cymbal Mellow - AIO** → `susp_cymbals_mellow`.
- **Toms ARO:** not loaded yet (the plugin's default, "Piatti (C)").
- **Where a hand step could return:** a `skeleton` instrument. Even then: which keys sound is a meter sweep (the AI's), the
  names one hover screenshot (piece #6 §41).
- The Ricotti mallets need no key map — a range per patch, read by sweep at 4.5. The Xsample bass flute needs its articulation
  list: his screenshot of the Preset Menu.

## §24. THE SUSPENDED CYMBALS ARE THE BRIGHT ONES — a correction of §23 by his own switch; the plugin's round-robin settings seen (2026-10-04, Opus)

**What prompted it:** his screenshot, no words — SUSPENDED CYMBALS with **ALL IN ONE (BRIGHT)** lit, the hovered key reading
*"16" BRIGHT - FELT MALLET - SINGLE HIT"*.

- §23 read "Cymbal Mellow - AIO" as active. He has switched: `aro_state.js info` now reads **"Cymbal Bright - AIO" active**
  (articulation 7, top key 93) → the slug is **`susp_cymbals_bright`**, not `_mellow`.
- Against the catalog: `susp_cymbals_bright`, 37 keys, last key 93 ✓; its C2 is "Felt Mallet · 16\" Bright Single Hit" — his
  hovered key, word for word; its nine blocks (felt 4 · 4 | brush 4 · 4 | stick 4 | scrape 4 · 4 | bow 4 · 5) are the nine on
  his keyboard. Mapped; nothing to make.
- **The plugin's settings, as his screenshot shows them — for 4.4 (`docs/RACK_SETTINGS.md`) and container 5's round-robin
  pre-flight:** ROUND ROBINS **6** · RESET ON TRANSPORT **on** · RESET FROM KEY **none** · TRANSPOSE 0 · TWO-HANDED LAYOUT off ·
  RIGHT/LEFT MAPPING off. Not changed, not yet decided: his word *"let's go through all the proper settings. Like the round
  robin"* (§18) is still to be taken up, instrument by instrument.
- Toms ARO: still the plugin's default ("Piatti (C)").

## §25. CONTAINER 4 — THE PERCUSSION IS IN THE RECIPE: his five loads read, the selection written, eight instruments sounding · and his question, "which maps are left key by key … any automations to be gained?" (2026-10-04, Opus)

**What prompted it:** two more screenshots, no words — TOMS with **ALL IN ONE (HIGH)** lit; SMALL METALS with **SPRING COIL**
lit. Then: *"And which maps are left to be done key by key? Were there, did you do an analysis? Are there any automations to be
gained here? Just some quick ones. I don't necessarily need to spend too much time on this. But if we can give it a quick thought."*

**The last load, read:** Toms ARO = "Toms (C)", family Low Percussion, 8 articulations, active "Toms High - All-in-one", top key
82 = the catalog's `toms_high`, 36 keys, last key 82 ✓. **The spring coil's screenshot** shows the clone's switch took (§21):
SPRING COIL lit inside Small Metals, its keyboard four blocks at octave 2 and again at octave 4 — the catalog's 16 keys
(36 … 39 · 41 … 44 · 60 … 63 · 65 … 68: open / muted hit L · R, open / muted rake fast · slow, repeated +24). TWO-HANDED LAYOUT is ON
in that instance — carried inside the clone from piece #6, and it is what the catalog's map assumes (piece #6 §41). Its other
settings as shown: trigger KEYSWITCH A#-1 · activate normal · ROUND ROBINS 5 · RESET ON TRANSPORT on · RESET FROM KEY none.
The Toms' panel: RESET ON TRANSPORT on · RESET FROM KEY none · two-handed layout off.

**4.5 for the percussion — done, as text:**
- `bank/perc_selection.json`: **1 bongos · 2 shime_daiko · 3 bass_drum_alt · 4 wood_blocks · 5 china_cymbals · 6
  small_metals_spring_coil · 7 susp_cymbals_bright · 8 toms_high** on `DECPerc` — piece #6's fourteen replaced.
  `tools/apply_perc.js` regenerated the recipe's `ARO_PERC` block: one technique per instrument × beater (bongos hands ·
  fingers · sticks; … toms high sticks · felt · rods · brushes).
- `palette_check` GREEN, **152** checks (158 with piece #6's fourteen) — 38 recipe keys are new to
  `notation/registry/techniques.json`, to be registered before material uses them (container 6) · `roster_check` GREEN,
  **221** voices, 16 pending · `model_bank --validate` valid.
- The eight states BANKED from the running rack, `bank/aro_states/`: `bongos_C` · `shime_daiko_C` · `bass_drum_alt_C` ·
  `wood_blocks_C` · `china_cymbal_C` · `small_metals_C` · `suspended_cymbals_C` · `toms_C` (.aro.xml, 32 … 120 KB; no
  machine path in any). From now each is text: clonable into any rack with no load.
- `make_perc_tracks.lua`: the three open slugs settled (`china_cymbals` · `susp_cymbals_bright` · `toms_high`).
- **Sounded through `DECPerc`, key 36, each on its own channel:** Bongos −27.2 / −29.8 dB · Shime Daiko −38.5 / −39.0 · China
  Cymbal −35.1 / −36.2 · Suspended Cymbals −42.2 / −44.4 · Toms −23.8 / −25.5 (with §21's Bass Drum Alt −24.6 · Wood Blocks
  −26.7 · Spring Coil −28.9). ALL EIGHT SOUND.
- **In the running app** (the throwaway server, 5501; nothing saved): the composer page loads with NO console error; the
  percussion carries the eight on channels 1 … 8, 30 techniques.
- **Found there, not fixed (NITS):** two hand-written percussion voices are piece #6's — `main` (the placeholder, labelled
  "the rack's Finger Cymbals track"; channel 1 is now the BONGOS) and `toys_claves` on channel 7 (piece #6's Claves track; channel
  7 is now the SUSPENDED CYMBALS). The Texture panel's audition click is `toys_claves` key 41 (`texture_panel.js` · `texture_row.js`
  · `texture_cols.js`): here it would play a cymbal roll. A tool's default, fixed when the tool is first used (container 7);
  the AI's proposal: the wood blocks, hard mallets.

**His question — which maps are left key by key, and what can be automated.** The analysis, as given to him:
- **Key by key, by hand: NONE for this rack.** The percussion's eight are the catalog's (38 of its 78 are complete).
- **What is open is three lists, none of them hand work:** (1) the RICOTTI ranges — a low and a high key for each of 39 patches;
  the two "Glisses" patches are by-key. (2) the BASS FLUTE — its articulation list is in the manual that shipped with the library
  (`…/Xsample_Collection/Documentation/Xsample_Woodwinds_Bass_Flute.pdf`): a **Factory bank preset list of 30** — 1 Vibrato MW ·
  2 Molto Vibrato MW · 3 Staccato Velocity 1 MW Shape · 4 Staccato Velocity 2 MW Shape · 5 Flutter Tongue MW · 6 Jet Whistle + Slap
  Tongue · 7 Slap Tongue Velocity · 8 Airy Secco Velocity · 9 Key Noises Velocity · 10 Harmonics Velocity · 11 Multiphonics
  Velocity · 12 Air Noises Velocity · 13 Voice Breathing octave · 14 Voice Breathing fourth · 15 Vibrato Velocity · 16 Molto
  Vibrato Velocity · 17 Flutter Tongue Velocity · 18 Vibrato Velocity + MW inverted · 19 Staccato + Key Noises X Air Velocity MW ·
  20 Vibrato + Flutter Tongue Velocity X MW · 21 Triple Tongue 16T · 22 Staccato Velocity · 23 Multiphonics MW · 24 Air Noises MW
  · 25 Voice Breathing MW · 26 With Accent Velocity · 27 Crescendo · 28 Portato Velocity · 29 Vibrato - Molto Vibrato Velocity X
  MW · 30 Flutter Tongue Velocity + MW inverted. So his screenshots of the Preset Menu are probably not needed (the lineage's
  rule: CC0 = the preset number − 1; to be confirmed at the first sound). (3) 16 by-key voices of the STRINGS still "pending" in
  the roster — viola 8, cello 8 (tailpiece · behind the bridge · peg box · finger · body · undef).
- **The automations, quick ones:** (a) THE TOP-KEY CHECK (§23) — in use; no sound. (b) THE MANUAL AS THE SOURCE — above. (c) A KEY
  SWEEP AS ONE COMMAND — every key of a channel played, the meter read, the sounding keys and their levels listed: the Ricotti
  ranges, the by-key voices, and a first level per patch for container 5; piece #6 did it by hand-run steps (its §41 · §42).
  (d) A ZONE READ-OUT FROM KONTAKT — whether Kontakt's script interface can list a slot's key range and group names with no
  sound is NOT KNOWN; one test script would tell. The AI's recommendation: (c), because 4.5 needs it anyway.

## §26. THE BASS FLUTE'S PRESET MENU, FROM HIS KONTAKT — 32 presets: the manual's 30 confirmed, and two the manual does not list (2026-10-04, Opus)

**What prompted it:** two screenshots of the Preset Menu in the Bass Flute's Kontakt, no words — sent as §25's analysis was
being written (he had said, §18: *"as soon as the rack is ready, I'll send you screenshots of the articulations for bass flute"*).

- **1 … 30: the manual's Factory bank preset list, name for name** (§25 has it whole).
- **Two more, NOT in the manual:** **31 Pseudo Contrabass Velocity + MW inverted** · **32 Pseudo Contrabass Staccato Velocity**.
  Then **33 … Free Preset** (33 · 34 · 35 · 36 · 37 visible; the list scrolls on).
- **A CORRECTION OF §25, minutes old:** "his screenshots are probably not needed" was wrong by two presets. The manual is a good
  first source and the MENU IS THE TRUTH — the lineage's rule (piece #6: "the roster is the full Preset Menu as HIS Kontakt shows
  it"). For the how-to pages (4.10): read the manual first, then ONE screenshot of the menu to close it.
- The recipe's roster for the bass flute is therefore 32 factory presets, CC0 = the number − 1 (0 … 31), to be confirmed at the
  first sound. By the names: `mw` presets 1 · 2 · 5 · 23 · 24 · 25 · and the shaped ones 3 · 4 · 18 · 19 · 20 · 29 · 30 · 31; by-key
  candidates 9 Key Noises · 11 · 23 Multiphonics · 12 · 24 Air Noises · 6 Jet Whistle + Slap Tongue — their keys by the sweep.
  WHICH is the ordinary voice is his: the list has no plain non-vibrato sustain (15 Vibrato Velocity · 28 Portato Velocity · 26
  With Accent Velocity are the nearest).

## §27. "A nice, organized, clear list in order" — what is left to make the rack fully operational; the probe explained; and his word on the replies (2026-10-04, Opus)

**His words:** *"Can we organize and then list all that's left to be done in the rack? So is there any sort of round robin reset
or any volume um, probes that need to be done? I noticed in the Spitfire, there is a round robin setting in one of the
screenshots. So do we need to address those? Again, I don't want to spend too much time doing this, but I just want a better
picture of what's left to be done. And other things in addition to volume, like the maps and whatnot. And then what is this
probe? Can you explain it to me a little bit more clearly? And when you're making your list, please be organized and clear.
**I'm finding the responses a bit too much text and too much to analyze to get the information out.** So explain to me what
needs to be done in your [Ricotti], bass flute, and strings. And then how we're doing this and to what extent probe versus
manual readings … So I'm expecting a nice, organized, clear list in order of what we need to do to get the rack fully
operational, and then an explanation of how you want to achieve some of these things, including the probe and any other sort
of automated mapping."*

**ON THE REPLIES — a correction to the AI, kept:** too much text. From here: a table or a short numbered list first, one line
per item, the notes cut to what changes what he does.

**The list, as given (three stages, in order):**
- **A · PLAYABLE from the composer score (the rest of container 4).** 1 the key sweep built (AI) · 2 the ranges and by-key maps
  read by it — Ricotti's 39 patches, the bass flute's by-key presets, the strings' 16 pending voices (AI) · 3 the recipes written
  — the Ricotti lane, bass flute, bass clarinet, viola (AI; his one choice: the bass flute's ordinary preset) · 4 the first
  sound from the composer score (his Chrome).
- **B · THE SETTINGS — round robins.** 5 a round-robin check per instrument (AI probe: one note repeated, the repeats compared) ·
  6 the verdict per library and the switch (the lineage's rule for Xsample: OFF — piece #6 measured its members up to 13.8 dB
  apart, `docs/RACK_SETTINGS.md` §2 · §3; Ricotti and Abbey Road undecided — the probe says) · 7 every hand-set value recorded.
- **C · THE VOLUME (container 5).** 8 the reference tone and his system volume, once · 9 the clipping pre-flight (AI probe) ·
  10 the instrument card — every instrument measured (AI probe), the trims applied by script · 11 the dynamics curves · 12 his
  ear, then the QC battery.

**"The probe", as explained to him:** the AI plays notes into an instrument through its port and reads what comes out — no
hands. Three sizes: THE SWEEP (every key once, the meter read: which keys sound, roughly how loud — for maps and ranges) · THE
ROUND-ROBIN CHECK (one note repeated: do the repeats differ) · THE CARD (chosen notes at set dynamics, RECORDED and measured:
the loudness numbers the trims are computed from). By hand, his: a choice (the ordinary preset), a switch only a plugin's panel
has, a verdict by ear.

**What the record does NOT say, stated to him as unknown:** whether the viola's and the bass clarinet's states (piece #5's)
have round robin off — the cello's (piece #6's) should, the bass flute's is the factory setting · what piece #6 did with the
Abbey Road round robins (its settings file has no entry: untouched, as far as the record shows).

## §28. "This is not what I was asking for" — the list again, bare; the decision he wants to make: probe, or dictate the key maps (2026-10-04, Opus)

**His words:** *"Sorry, this is not what I was asking for. I just need a simple list, not in a table, and not with all the
details of what needs to be done. Just a statement, no explanation or details. So for example, it'll be something like figure
out key maps for bass flute and marimba … And the next will be sort out round robin for volume. And then maybe the next one
would be do a volume probe on the glockenspiel. I just need a simple list, but in order, simply stated, so I don't have to read
and analyze. So I can get a bird's eye view of what remains to be done. And then after that list, I would like a simple
explanation of how you would like to achieve some of these things. One of the decisions I want to make right now is if it's
worth doing a probe or it's better if I just dictate some of the key maps. That might be more efficient."*

§27's answer was three tables; rejected. Given instead: ten bare statements in order, then one sentence each on how. The AI's
proposal on his decision: the probe for the mallets' ranges (39 patches — dictating is slower); the by-key noise presets of
the bass flute and the strings left unmapped until the music asks for one, then dictated by him or swept, whichever he prefers.

## §29. WHAT REALLY REMAINS — the research he asked for: what pieces #3 · #5 · #6 already settled, and what came along inside the cloned tracks (2026-10-04, Opus)

**His words:** *"why 8 I thought we sorted this with last piece for bcl, cello and some perc? also I thought 7 was done last
piece same with 9. … number six, I would like to know which round robins are left to be done. I know we've at least done the
bass clarinet. Those should be off. … Do the research and then give me back the what remains in order. The format is good, just
simple like this. But I want the list to be … more specific. … Eight, I'm skeptical. How is it that we need to volume probe
everything still? Because that's a lot of work. So let's try to make sure we understand really what needs to be done and not
repeat work or work inefficiently."* (Before it: *"what is 4 what is a recipe?"* — answered: the composer score's instruction
sheet for one instrument — its port, its range, its techniques and what to send for each.)

**He was right on three counts; §27 · §28's list repeated work.** The findings, each with its source:

**ROUND ROBINS**
- **Xsample switches round robin BY MIDI: CC#82 = 21 … 41 is OFF** (0 … 20 on repetition, the factory value · 42 … 62 on repetition
  random · 63 … on always) — `Xsample_Library_en`, the Round Robin Menu page and the controller table; piece #3 used it
  ("CC#82=21–41 freeze (deterministic default)", its `XSAMPLE_BASSCL_map.md`). **This app sends no CC82 today** (searched).
  The setting is per preset, and a preset re-selected by CC0 takes its stored value back (piece #6, `RACK_SETTINGS` §2) — so a
  CC82 sent AFTER the CC0, with every note, would hold it off for every preset with no hand edit. UNPROVEN here; one test.
- **Cello: DONE and carried.** Piece #6, 2026-09-19: preset 6 "Senza Vibrato Velocity" edited in place, round robin off, in all
  four slots (`RACK_SETTINGS` §3: four strikes of one note had read −27.9 · −31.3 · −22.7 · −27.9, a cycle 8.6 dB wide). The
  edit lives in the Kontakt instance, and the cello track here is the clone of that rack as saved 2026-10-01. Only preset 6.
- **Bass clarinet: NOT done in this rack — a correction of his memory, with its source.** What he remembers is piece #3: a
  custom preset #34 "Flutter LOCK", a copy of preset 5 with round robin off, in piece #3's rack. This rack's bass clarinet is
  piece #5's, and piece #5 measured it WITH round robin on: "the violins ±1 dB round-robin scatter, the viola and the bass
  clarinet ±1–2, the cello ±3.5" (its RUNNING_LOG, the samplers measured). So: bass clarinet and VIOLA still on, ±1–2 dB.
- **Bass flute:** loaded today; the factory setting, on.
- **Ricotti:** 8 round robins a note, a dial per patch (its manual); how far apart they are is not known. One check on one patch.
- **Abbey Road percussion:** piece #6 left them on and measured each instrument by its loudest 400 ms; no setting was changed
  (`RACK_SETTINGS` has no entry). Nothing to do, unless a check shows otherwise.

**VOLUME**
- **The reference tone and his system volume: DONE** — piece #6, 2026-09-19 (`bank/reference.json` there: −20 dBFS pink noise
  and a 1 kHz tone, K-20). His monitor level is a setting of the room, not of a rack. A measuring run here makes its own
  reference track by script; nothing of his.
- **Carried, known numbers — only to be put back on the faders** (the rack build set every fader to 0 dB): piece #6's
  `bank/trims.json`, the absolute method (each voice at −29.54 LUFS): **cello −3.87 dB · wood blocks +7.05 dB · bass drum alt
  −4.29 dB**. These three tracks are clones of the very instances that were measured.
- **Bass clarinet and viola: balanced in piece #5, but RELATIVELY** (−9 and −3.5 dB, against that ensemble); piece #6 retired
  that method — "the rack was 7–21 dB hot because 0d balanced it relatively" (`apply_trims.lua`'s header). They need ONE short
  measurement each to land on the absolute scale; their balance against each other is known.
- **Never measured:** the bass flute · the four mallets · six of the percussion (bongos · shime daiko · China cymbal · spring
  coil · suspended cymbals · toms).
- **So the volume probe is 13 instruments, not all 16, and it is one automated run** — three notes or a few hits each. The
  AI's work before it: piece #6's measuring tools re-pointed at this rack (`tools/probe_run.sh` still changes into piece #5's
  folder; NITS has the others).

**DYNAMICS CURVES**
- **Cello: carried** (`bank/velocity_remap.json` here holds `cello` and the stand-in vibraphone). **Bass clarinet and viola:**
  piece #5 has curves for both (its `bank/velocity_remap.json`: flute · bass_clarinet · piano · violin1 · violin2 · viola ·
  cello) — by its older method, anchored on its violins; reusable as a start. **Bass flute: none** — the one new curve.
  **Mallets and percussion: none needed** — a struck note's velocity IS its dynamic (the dynamics law).

**The list as re-given to him (ten lines):** 1 key ranges for the four mallets · 2 recipes: mallets, bass flute, bass clarinet,
viola · 3 the first sound from the composer score · 4 round robin off: bass flute, bass clarinet, viola · 5 a round-robin check
on one mallet patch · 6 the known volumes put back: cello, wood blocks, bass drum alt · 7 the volume probe, new instruments
only: bass flute, four mallets, six percussion · 8 bass clarinet and viola re-levelled · 9 the dynamics curve for the bass flute
· 10 listen. **Off the list:** the reference and his system volume · the cello (round robin, volume, curve) · the Abbey Road
round robins · the percussion's key maps · the noise presets' maps (when the music asks).
