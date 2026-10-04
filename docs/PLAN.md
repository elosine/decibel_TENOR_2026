# PLAN — live-electronics-system

> **Rules:** IDs are stable — never renumber, only append. Status: `todo` / `doing` / `done` / `deferred` / `dropped`.
> Every part keeps a one-line ***why***.
>
> **THE RULE OF THIS PLAN (his word 2026-10-03, `#6 §811 · §812`):** the parts are CONTAINERS with stable numbers. A sub-part is
> added under its part THE MOMENT IT IS NEEDED, with its own stable ID (`4.1`, `11.2` …), through `docs/PLANNING_METHOD.md`
> — a notation by a DEVICE SHEET, a build with THE SHIELD run in the piece that takes it. **Nothing is detailed before it is
> needed** — his own rule for a port: *"leaving everything we can for when the time comes."* A part he has not yet discussed
> carries one line: *to be laid out when we discuss it.*
>
> **The order and the timing of the parts are HIS** (`#6 §806`). The numbers are for reference only. The structural
> dependencies below are not an order.
>
> **Where this plan was made:** piece #6's lab journal, `septet_LGMF_2026/docs/RUNNING_LOG.md` §805 … §814, with his words in
> that repo's `docs/COMPOSITION_NOTES.md` LG-348 … LG-351. The brief for the engine's contents: LG-340 … LG-346 there.

## The objectives (agreed 2026-10-03, `#6 §808 · §809`)

1. **Three pieces**, each a repo set up by the new-piece protocol — the universal layer and a NORMAL PORT of the scrolling-score
   stack: the Decibel piece · the Switch~ piece · the improviser piece.
2. **One engine**, in its own repo (this one), ported from the sandbox's basic machinery, dropping into each piece ADDITIVELY
   at three seams: the composer score · the sound path · the notation.
3. **The composer-score side first:** a trigger object in the regular composer score routes a live instrument's MIDI note into
   an effect, so he hears the sampled note processed as it would be live.
4. **The effects, his brief:** the momentary-input class — the gate that opens the mic for an instant, then delay · loop +
   granular · freeze · Greyhole (LG-340) — and the saved impulses replayed by piece #2's cells (LG-341); with them, the
   mechanism of coordinating split-second input.
5. **The notation side, when notating comes:** new graphics in the regular notation score linked to the triggers — the GC
   carrying a capture glyph, the glyph vocabulary (shape or colour × the window's length), the collection on screen
   (LG-342 … LG-345).
6. **The piece's save stays the ground truth:** the engine holds the generic machinery, the piece holds the uses — which note,
   which effect, which glyph, when.
7. **The Decibel piece** built around the full ensemble as announced; re-orchestration his if it is scaled back.
8. **The improviser piece** may take only some of the objects.

**Not objectives, set aside** (`#6 §808`): the different score paradigm (LG-339, "something else") · the whole stack moved into
one shared repo · his flags 4.9 · 5.10 of the protocol (the instrument knowledge base).

## The structural dependencies (not an order)

1 before anything lands · the first run of 9 before 5 (the engine is built inside the first piece, where he hears it) ·
3 and 4 before 5 · 8 before the second and third runs of 9 · 7 when notating comes.

---

## 1. The engine repo — `done` 2026-10-03 (Fable, `#6 §814`)

***Why:*** the plan needs a file and the engine a home; one source for three pieces.

**Result when done:** `C:\Users\jwloy\GitHub\live-electronics-system` = `github.com/elosine/live-electronics-system`, public,
pushing after every commit, its kit in place and this plan written into its PLAN — so `/session-start` runs here and finds the
state line, the twelve parts and the rule. No code yet.

- **1.1 The repo made** ☑ — MIT LICENSE and `.gitattributes` carried from piece #6 · a `.gitignore` for a public repo · the first
  commit looked at before the first push (the home's lesson, `#6 §804`) · `gh repo create --public` · the push rule in CLAUDE.md § Git.
- **1.2 The kit** ☑ — the method docs carried whole from piece #6 @ `06ce0ac` with one provenance line each (AI_METHODOLOGY ·
  SESSION_HYGIENE · PLANNING_METHOD · HOW_WE_WORK · SESSION_PROTOCOL · the checkpoint and postclear commands — the protocol's 2.4);
  the record docs from the home's skeletons, filled for an ENGINE: CLAUDE.md (checked heading by heading against piece #6's) ·
  README · PROJECT_JOURNAL · PLAN · PLANNER · RUNNING_LOG · NITS. **Not for an engine, by design (his to reverse):**
  PERFORMANCE_NOTES · SWEEP_LIST · COMPOSITION_NOTES (a musical idea about the electronics is an LG note in the piece that has it) ·
  PROTOCOL_DEVIATIONS (the protocol's runs are the pieces'; a deviation of the ENGINE's start is a RUNNING_LOG line here) ·
  MORPH_NOTES (the morph tool is the pieces').
- **1.3 The plan written** ☑ — this file: the objectives, the rule, the dependencies, the twelve parts, part 1 laid out, 2 … 12 top line only.
- **1.4 The home** ☑ — one entry in `composition-system/INDEX.md` (the engine, the module manifest's first member, 9.11) · one line
  in its `LOG.md`. The planning repo's lists: only at his word — not touched.
- **1.5 Two files that parts 3 and 8 fill** ☑ — `docs/SEAMS.md` · `docs/TAKE.md`, each saying what it will hold.

## 2. The port from the sandbox — `todo`

***Why:*** the engine's first contents are the experimental work that already exists.
`live-electronics-engine` surveyed; the BASIC MACHINERY taken into the engine (the signal chain · the mastering chain with its
limiters and master bus · the analysis · whatever else is machinery, not experiment); what stays an experiment stays there.
*To be laid out when we discuss it.*

## 3. The seams — `todo`

***Why:*** additive or it is a patch (CLAUDE.md).
The three plug points in a piece's stack named and, where missing, made: the composer score's script tag and hook · the
message route to the sound (OSC or MIDI from the composer score) · the registry rows for a notation kind. Written in
`docs/SEAMS.md`; applied once per piece at the take. *To be laid out when we discuss it.*

## 4. The sound path — `todo`

***Why:*** he must hear the sampled note processed as it would be live.
How a sampled note is processed — an effect in Reaper switched by the score, or the sandbox's own process fed the audio; the
trigger's message; the playback route (new Reaper tracks or items as needed); the mastering chain (from 2); heard in a piece's
composer score. *To be laid out when we discuss it.*

## 5. The first sound — `todo`

***Why:*** the lineage's "first sound" step — one thing heard end to end before anything else is built.
The trigger object in the composer score (the first member of 11) and the first effect — a filter, his example — heard on a
live instrument's note, in the first piece's composer score. *To be laid out when we discuss it.*
**RE-READ by his brief for the Decibel piece, 2026-10-04 (RUNNING_LOG §4; `#6 §819`):** the first sound is a note CAPTURED at a
MIC OPENING and RETURNED beside the live note (11's first two members: the mic opening · the return); the filter — the pedals of
resonance, 6's first — comes third. Laid out in the Decibel piece's running order, steps 8 … 10.

## 6. The effects of his brief — `todo`, open-ended

***Why:*** the engine is his whole live-electronics setup, growing (LG-351).
The momentary gate that opens the mic for an instant; delay · loop + granular · freeze · Greyhole (LG-340); the saved impulses
replayed by piece #2's cells (LG-341); the mechanism of coordinating split-second input. New effects, shapes and analysis are
added here as sub-parts by compositional need. *To be laid out when we discuss it.*

## 7. The notation kinds — `todo`

***Why:*** a trigger a performer cannot read is not a notation.
The GC carrying a capture glyph · the glyph vocabulary (shape or colour × the window's length; Braxton's Language Music a
candidate, LG-343) · the collection on screen (LG-345) — each by a DEVICE SHEET; the piece's extractor emitting the trigger
events; the film and the print carrying them. 12's kinds are drawn here. *To be laid out when notating comes.*

**His staff system, 2026-10-04 (the Decibel sketch pad DEC-4; its D8):** NO electronics lane or staff — every electronic sound
derives from a player's own input and is drawn on THAT player's staff with a SIGN OF ORIGIN: a sign just before the note with its GC
(section 1) · a STACK of signs across the staves read as an electronic chord, the real notes placed after it (section 3) · a held
electronic chord of freezes as a duration-line kind on each contributing player's staff (section 2). Whether section 3's stacks show
in the parts or only in the conductor's and the presentation score: his, open. The data for 7's device sheets. For 11: an electronics
object lives on the player's lane but is routed to the electronics, not the instrument's port.

## 8. The take — `todo`

***Why:*** three pieces take one engine; the recipe must run cold.
How a piece pulls the engine: the submodule checkout inside the piece · the commit recorded · the seams applied (3) · the
batteries and THE SHIELD run in the piece · a piece's lock pins the commit. Written in `docs/TAKE.md` so a cold model runs it.
*To be laid out when we discuss it.*

**REFINED 2026-10-04 (RUNNING_LOG §4; the Decibel journal's D7):** the take is a git SUBTREE, not a submodule — the engine's code
sits in each piece as ordinary files in `electronics/`; `git subtree add` / `pull` to take, `git subtree push --prefix=electronics`
at every wrap to land here; the AI's steps, never his. Proven at the first push.

## 9. The three set-ups — `doing`

***Why:*** the pieces are where the engine is heard and used.
The new-piece protocol's runs — the Decibel piece · the Switch~ piece · the improviser piece — each a NORMAL PORT of the
scrolling-score stack, each taking the engine by 8. The protocol is `composition-system/protocol/NEW_PIECE_PROTOCOL.md`; its
record and deviations live in each piece's repo, not here. *Each run laid out there, at his word.*

- **9.1 The Decibel piece** — `doing`. `decibel_TENOR_2026` (`C:\Users\jwloy\GitHub\decibel_TENOR_2026` ·
  `github.com/elosine/decibel_TENOR_2026`, public) made 2026-10-04: the protocol's container 2 done — a normal port (copy-forward
  from piece #6 · both layers · the scrolling score), the kit in, no code yet. Next THERE: container 3, the copy-forward. The engine
  is taken there at parts 5 · 8 — its CLAUDE.md, journal D4 and PLAN § 0 say so. (`#6 §816 … §818`)

## 10. The engine's record — `todo`, continuous

***Why:*** the lab journal's rule, for the engine.
This repo's RUNNING_LOG and device sheets; what the engine teaches goes to the protocol's v2 (the home's 10.3) and to the home's
INDEX (the module manifest, 9.11 — the engine its first member). *Kept as the work happens; no laying out needed.*

## 11. The composer-score objects for the electronics — `todo`

***Why:*** the live instruments have bricks, meta shapes and curves; the electronics need their own family (LG-351).
Objects that live on a lane, interact with the MIDI, are saved in the score and read by the extractor. The trigger of 5 is the
first member; the rest by compositional need, one at a time, each through the planning method. *To be laid out when we discuss it.*

## 12. The live graphics — `todo`

***Why:*** the animations go with the sounds, and live analysis may feed the score at performance time (LG-351).
New in kind: the scrolling score has animated objects (the GC · the pie · the meter · the ball) but no RUNTIME INPUT; 12 gives
the performance score one. 7's kinds are its drawn form; a device sheet for each. *To be laid out when we discuss it.*
