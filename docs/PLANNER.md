# PROJECT PLANNER — decibel_TENOR_2026

> **What this is** (the tuba piece's device, kept): the working view of the PIECE as a
> collapsible outline — SECTION → container → gesture → decisions. Raw ideas land in
> `COMPOSITION_NOTES.md` verbatim first and get folded into a tier here. Engineering
> detail stays in `PLAN.md`. Rewritten freely; the sketch pad is the append-only record.

**NOW ►** 2026-10-10 12:59 (Fable, RUNNING_LOG §382 · §383; DEC-152) — THE CLARINET'S FIRST DRONE RECORDING HOLDS at his pass (the note shaped as the builder's in `piece-Draft01c`; 5,990 of 6,570 ms; SWEEP_LIST #18 closed, remedied not diagnosed). The THIRD recording measured: short by its KEY (34 — the sample dies at 2.3 s; 38 holds; 46 is 1.5 s; 39 unmeasured) — put to him: a · leave it · b · the keys that last in `bank/drone_section.json`. Then his ear on the rest of the handover · his next word on the notation of the electronics. *(Before it:)* 2026-10-10 12:45 (CHECKPOINT #5 OF SESSION 3, RUNNING_LOG §380 · §381) — THE PIECE IS `piece-Draft01c`, the opening's returns written ff. THE HANDOVER: journal §2's first block lists what is outstanding — the bass clarinet's first drone recording still short (not diagnosed, a remedy ready) · the last petal hit cured by the bank's record, his ear unsaid · the trills and the opening in `piece-Draft01c` unheard · the notation: his next word on the electronics. *(Before it:)* 2026-10-10 (RUNNING_LOG §376) — THE PIECE IN HAND IS `piece-Draft01c`: the opening on rolled pitches (seed 1), its distortions 25 → 10, every return written fff; the distortions one card of every deal to come. His ear on all of it is next (the engine restarted · F5 · Reload · the opening twice). *(Before it, the same day:)* 2026-10-10 (RUNNING_LOG §369 … §371) — HE WORKS IN `piece-Draft01b`. Three faults of the playback fixed, unheard: the trills' voice (his F5) · the last petal hit (his engine restart) · the bass clarinet's first drone recording (File ▾ → Reload). The three body's computer players named in the gutter: ELEC1 · ELEC2 · ELEC3, a small bracket each. The FX audition: his copy `audition-sec01-fx-updates`, every brick written fff — he goes through them. SINCE (§372 · §373): the diode ring presets at mix 1 · a preset's settings in the card · the opening's impulses rolled onto other pitches, seed 1 (`tools/impulse_pitches.js`; what he played kept). NEXT, at his word: his ear on the fixes and on the rolled opening (twice) · his eye on the ELEC heads · what he changes in the audition · the diode's length (a · b). *(Before it:)* 2026-10-10 (checkpoint #4 of session 3, RUNNING_LOG §368) — THE PIECE IS `piece-Draft01`: SIX sections, 12:59, the strikes (section 5) in it with the first strike at 677 s. THE NOTATION: the opening and the three body problem laid out. IN HAND: his ear on `audition-sec01-fx` (the opening's 74 processed versions, a brick each). NEXT, at his word: what he found there · his eye on the three body pages · section 2 of the notation, a talk. *(Before it, the trail:)* 2026-10-09 (checkpoint #3 of session 3, RUNNING_LOG §333 … §339) — THE PIECE IS ASSEMBLED, five sections, 11:08 (`piece-3BodyRedo`; his copy for section 5: `piece-sec05-a`). THE NOTATION: section 1 laid out in the notation score, and its PRESENTATION VIEW built — each return of the electronics a purple brick with the flocking badge in a small grey window at the lane's bottom (the page `approaching-opening-elec`). THE STRIKES (section 5): the rig HEARD AND GOOD on the two short endings. **SINCE 2026-10-10 (§365, DEC-137): THE PIECE IS `piece-Draft01` — SIX SECTIONS, 12:59; section 5 (the strikes, `sec05-finalDraft`) inserted with its first strike at 677 s. THE NOTATION: the opening and the three body problem laid out (the line wedge, the state signs as he chose them, the computer players on the presentation page); next in his order: section 2.** SINCE (§342 … §346, DEC-119 · 120): SECTION 5B, THE STRIKES, BUILT — his 54 strikes in `sec05b`, 50 under windows (notated · open), answered 1 · 2 · 3 · 1 times in four shortening stretches, the cascade in the engine; his restart and his ear next. SINCE (§340, DEC-117): section 1 has the short attacks' badge before EVERY mic opening, 36 px — both pages re-cut. NEXT, at his word: his eye on section 1 as re-cut · his eye on the presentation page · which page looks cropped · then the three body problem's signs (a talk) or the strikes' catalogue (17.2, a talk).

*Before it —* 2026-10-04 — his brief taken: the piece in three sections (below, from DEC-1 … DEC-3); the day's work a running order in journal §2.
*Before it —* 2026-10-04 — the repo and its kit made (the protocol's container 2); no code.

---

## The piece, as an outline

*(From his brief of 2026-10-04, DEC-1 … DEC-3. For the Decibel ensemble — bass flute · bass clarinet · viola · cello · percussion —
with live electronics; the ensemble not final (journal D2). The words are his; the AI's readings are marked in the notes.)*

**THE STAFF SYSTEM (DEC-4, D8):** five players' staves, no electronics lane. Every electronic sound is drawn on the staff of the
player whose input it comes from, with a SIGN OF ORIGIN — section 1: a sign (a triangle, say) just before the note, with its GC ·
section 3: a stack of signs across the staves, read as an electronic chord, the real notes after it · section 2: a held chord of
freezes as a duration-line kind. The percussion probably as piece #6 — a non-pitched staff and a pitched one; undecided.

### SECTION 1 — THE OPENING: mic openings, and the players with versions of themselves (DEC-1)

- **The rhythm layer** — a series of notes he plays into the composer score; the rhythms kept, the pitches not; the bricks moved to
  the instruments (as piece #5's _Scattered Substance_ opened)
  - each onset becomes a MIC OPENING
- **The mic openings** — a "portal": the mic opens for the player, who chooses what to play within a CATEGORY (Braxton-like: "short
  attacks", "accented long tone", "short")
  - the sound is banked as a SAMPLE, named by a shape or colour (LG-342 · LG-345)
  - the simulation: he picks an instrument and an articulation from a library; it sounds as played; the window's audio is banked
  - one opening per player, one after the other
- **The returns** — a second series of openings; each player's first sample placed nearby — directly before or after — by an algorithm
  - two versions of themselves · three · … for several iterations
- **The processing begins** — "when we accumulated enough samples", or earlier: a window's audio excites an effect
  - the pedals of resonance (a resonant filter bank, much feedback): a tiny opening → a long sustained chord; a series of these
  - a freeze (LG-340)
  - a set per language type — trills · multiphonics, recorded as samples first
- **The category glyph** — a symbol on the opening telling the player what type of sound, their choice ("the strong attack is a
  triangle. Just for example, we'll design it later" — DEC-4: just before the note, with its GC; the notation's, when notating comes)

### SECTION 2 — THE MIDDLE: the after-effect alone (DEC-2)

- **The sustain without the strike** — the resonance tails of section 1's effects ("a pianist played a strike with the pedal down, but
  you cut out the pedal strike")
- **Electronic textures** — freezes of banked samples (multiphonics · impulses) stretched far into long tones; made in the background
  before section 2
- **Pitch** — the electronic tones' pitches extracted, or the tones gently pushed toward pitch; the ensemble makes chords with them
- **The ensemble** plays various things around these

### SECTION 3 — THE LAST: a hocket / antiphony of strikes (DEC-3)

- **Staccato strikes in a close counterpoint** — impulses, attacked notes (piece #5's scattered strikes)
- **Call and response** — the ensemble answering electronic attacks (several electronic voices striking together), the electronics
  answering the ensemble; tightly woven
- **The machine's part is invisible in the players' score** — an anticipation of their chord, or an answer at once or seconds later;
  an algorithm that changes it every time
- **Groupings** — the ensemble in two groups → four sets with the electronics; or all as individuals ("if it's six, then we'll have
  12 voices" — five players + electronics as announced)

---

## Open, musical, his

- The category vocabulary — Braxton's Language Music a candidate (LG-343): which types, how many
- Whether the processing begins inside section 1 or after it ("it may have started before")
- The percussion: which instruments, and one lane or two (a non-pitched staff and a pitched one, as piece #6)
- Section 3's electronic stacks — in the parts, or in the conductor's and the presentation score only? ("I'm not sure")
- The ensemble's final instrumentation (the call's)
- The effect's spelling: "petals" (the SynthDef folder's name) or "pedals" (his words)
