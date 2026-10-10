# THE NOTATION SCHEME — what a player sees, section by section

*(Opened 2026-10-09 at his word — "keep these notes pls, more organized version" (DEC-102). This is the ORGANISED version of the notation
decisions: what is decided, what is open, in the order they will be settled. It is rewritten freely as decisions land. The record of
how each was reached is `RUNNING_LOG.md` §299 … and `COMPOSITION_NOTES.md` DEC-87 … — his words are quoted there, not here.
The plan items are `PLAN.md` § 2. Marked **(AI)** = the AI's reading or suggestion, not yet his.)*

**THE OFFICIAL SCORE (since 2026-10-10, DEC-166, RUNNING_LOG §398): http://localhost:5500/notation/app/notation.html → `ir`: *Approaching — THE SCORE (so far: 0 … 209 s)* (first in the picker) → `view`: video.** One file, cut from the piece in hand: section 1 · the three body problem · section 2 (the trills and the accented long tones). **It is THE PRESENTATION SCORE (DEC-168, RUNNING_LOG §400): it carries the electronics of all three sections — a courtesy display, drawn BEHIND everything, not in the players' parts: section 1's return bricks, the three computer players, and for section 2 a purple brick of about ten seconds from each hit (the resonant filters' ring, approximated) with the accented long tones' badge in its grey pane.** The section pages are working pages, under *experiments*. Its command is PLAN.md § 2.10.

**To see a section's working page:** http://localhost:5500/notation/app/notation.html → `ir`: *Approaching — the opening (0 … 37 s)* → `view`: video. Laid out so far: section 1 (RUNNING_LOG §325). **The presentation view:** `ir`: *Approaching — the opening, with the electronics (0 … 37 s)* — the same page plus the electronics' layer (§335).
The places are rows of `notation/registry/rules.json`: `objects.micOpening` (`place`: laneTop · laneMiddle · laneBottom; `gapSs`) and `objects.badge` — change a row, reload the app. *(The earlier working drawing: http://localhost:5500/signs/layout.html.)*

---

## 1 · What holds everywhere

| | | status |
|---|---|---|
| the page | five lanes — BFl · BCl · Perc · Va · Vc — white, a thin grey line between them | decided, built |
| the staff | 0.25 s of lines at the very start; back for the beating section's pages; the clef only with it | decided, built |
| pitches | on a staff only in the beating section | decided |
| the electronics' returns | NOT shown to the players | decided |
| the electronics' hint | in the PRESENTATION VIEW only — a layer on the players' page, at the lane's BOTTOM (the mic at the top: into the microphone above, out of the speakers below). THE WINDOW says "electronics": a plain see-through slate-grey rectangle, its outline stronger than its fill, a very subtle grain, LOCAL — one round each return brick and the badge before it (DEC-112 · DEC-114). The return brick PURPLE (DEC-111). The flocking badge of piece #1 in the quartet's own colours (slate ground, light-blue birds), 36 px, before EVERY brick | decided for section 1 (DEC-111 · DEC-112), built; the rule for the rest **(AI)** |
| dynamics | none in the lanes | decided |
| words | none in the lanes — a badge says what to play, the performance notes say how | decided |
| which pitch · which percussion instrument | the player's choice, within the type **(AI — to confirm)** | open |
| the mic opening | a yellow brick: WHEN to play into the microphone, and for how long. Always at ONE height: **the TOP of the lane, for now** | decided (DEC-103) — drawn, his eye |
| a badge | says what KIND of sound. SECTIONAL: it announces a section once | decided |
| a badge on a mic opening | where the openings stand alone — the drones: yes, each one · the opening: yes, each one (DEC-117; it was "none" until then) | decided for those two |
| two badges together | a METHOD large, its MATERIAL small beside it (the three body problem) · two materials side by side, equal (section 2) | decided for the three body; the rule **(AI)** |
| the conductor's arc (GC) | only where an event is one exact moment: the accented long tones. NOT in the opening. **Its shape is piece #2's** (DEC-160, RUNNING_LOG §392: a 0.6 s fall, a 0.5 s rebound to 80 %; magenta) | decided |

---

## 2 · The signs chosen

**The six badges** — a rounded square, dark slate, the sign in its colour; 42 px in the score — the mic opening's own height, a fifth of the lane (DEC-123; 36 px at DEC-117, 54 px at DEC-105) (`bank/language/language.json`; http://localhost:5500/language/index.html)

| type | sign | colour |
|---|---|---|
| short attacks | three small open triangles (Braxton's) | SOL_red |
| trills | `tr` with its wavy line (the notation's font) | the format's blue |
| accented long tones | a narrow wedge running on as a line (Braxton's) | white |
| multiphonics | three open noteheads in a rectangle | SOL_yellow |
| audible beats | the added wave inside its two-pinch outline | SOL_orange |
| scattered strikes | nine solid triangles diving at a ground line | SOL_green |

**The mic opening** — as the composer score draws it: a rectangle, corners 3 px, plain yellow #FFFF00 at 18 % (the composer score's is 35 %; 42 px tall — a fifth of the lane, the composer score's own height again since DEC-122 (29 px from DEC-105 until then) — from the top, DEC-106 … DEC-109), the yellow lying OVER the two circles, a solid outline in the same
yellow, the sign ◉ (`bank/signs/mic_opening.json`; http://localhost:5500/signs/index.html). No name on it.

**The electronics' signs (the presentation view only)** — the WINDOW: a plain slate-grey rectangle (#708090), fill 10 %, outline 55 %, a grain at 6 %, 4 px round the electronics' row, one round each brick and its badge (DEC-114) · the RETURN BRICK: the mic opening's recipe in purple (#5F4296), its length the region, its height the count (5.8 px a sound, five = the mic opening's height) · the FLOCKING BADGE: piece #1's, slate #2d3748 with the birds in its light blue #5b9bf5, 36 px, 12 px before each brick (`rules.json` `objects.elecWindow` · `objects.elecReturn` · `objects.elecBadge` · the table `electronics`).

**Still to draw:** *(the three body problem's badge and the line wedge: drawn, DEC-126)* ·
the pie dial on a drone's opening (the stack has one: piece #6's breath's clock).

---

## 3 · Section by section — what a player sees

### 1 · The opening (0 … 37 s) — short attacks — IN THE NOTATION SCORE
- **Announced by:** nothing apart — every mic opening carries the badge (DEC-117; until then: once in each lane, before that player's first opening).
- **Each event:** the short attacks' badge, 42 px — as tall as its mic opening (DEC-123) — then the mic opening 12 px after it. No conductor's arc. No note.
- **On the page:** 30 openings on four pages, each 0.5 s = 77 px.
- **Open:** nothing, but for his eye on the new sizes.
- **Presentation view (DEC-111 · DEC-112 · DEC-114):** at the lane's bottom, for each of the player's five return bricks a see-through slate-grey WINDOW round the pair: the flocking badge (the quartet's colours), then the purple brick — its length the region (0.8 … 2.5 s), its thickness the number of returning sounds (one → five). Nothing on the brick. *(Built, RUNNING_LOG §335 — the page `approaching-opening-elec`; the numbers the AI's first, his to move, one word each: `rules.json` `objects.elecReturn` (the brick: its place, its height a sound) · `objects.elecBadge` (the badge's size) · `colours.elecPurple` (the purple).)*

### 2 · The three body problem (39 … 123 s) — a method, on short attacks
- **Announced by:** the three body badge — piece #2's own, ported — 30 % larger than a language badge (54 px), then the short attacks' badge (42 px), side by side, ending 12 px before the section's start, on every lane (DEC-126). **BUILT, RUNNING_LOG §355.**
- **The whole section:** ONE CONTINUOUS LINE WEDGE a player — the composer score's own line wedge, about the lane's middle — its colour and thickness by the player's state (DEC-126): **far apart** blue, thin · **approaching** yellow, growing · **close pass** red, thick · **break and rejoin** purple, a hairline. Across a change it ramps from the one to the other, the colour with it. A break and rejoin and the change after it are one stretch (DEC-47). The colours and thicknesses are the AI's first, his to move: `rules.json` `objects.stateWedge`. **BUILT — the page *Approaching — the three body problem*.**
- **No mics** in this section.
- **Open, in his order (DEC-126):** (1) how each state is DENOTED — a number, an abbreviation, something else; (2) whether and how the electronics — the three computer players — are shown to the conductor. **The wedge and the badges: KEPT — 'What you've done looks good. Let's keep that' (DEC-130).** **HIS LETTERS '1b; 2b' (DEC-132) — BUILT, RUNNING_LOG §360:** A STATE SIGN — a small picture of three bodies in the state's colour on the badge's ground, 27 px, at the lane's top where the ramp into the state begins (far apart: a wide triangle of dots · approaching: closer, with trails · close pass: clustered · break and rejoin: two together, one flung out); the electronics on the presentation page — ONE grey window a computer player along the bottom of the bass clarinet's, the percussionist's and the cello's lanes, its own small wedge inside, the short attacks' badge (36 px) before it. **THE STATE SIGNS ARE DECIDED AND BUILT (DEC-137, RUNNING_LOG §365):** the four three-body pictures with the dots 50 % bigger · on a square of THE STATE'S OWN COLOUR AT 22 % (his letter i, first at 15 %; then his "try 22", DEC-138) · 34 px · the sign's bottom 8 px above THE HIGHEST POINT OF THE LINE WEDGE (the top of its thickest state: every sign of a lane at one height), its left edge where the ramp into its state begins. Rows: `rules.json` `objects.stateSign` (sizeSs · gapSs · place · ground) and the table `stateSigns` (written from `bank/signs/state_signs.json`). *(Before it:)* **THE DRAWINGS ARE KEPT, THE DOTS 50 % BIGGER (DEC-136, RUNNING_LOG §364); THE GROUND IS THE OPEN CHOICE — eleven on http://localhost:5500/signs/state_signs.html (a the dark slate · b at 30 % · c blueGrey · d at 30 % · e … k suggestions); HIS LETTER AWAITED. Then the bigger dots, the ground and the place go into the notation together.** *(Before it:)* **HIS EYE ON THE SIGNS (DEC-134, RUNNING_LOG §362) — TWO THINGS TO BUILD TOGETHER, WHEN HE HAS CHOSEN THE DRAWING:** (1) THE DRAWINGS WILL CHANGE — he is looking again at the earlier dot candidates (short attacks e, staccato dots; scattered strikes d, landings: http://localhost:5500/language/index.html); the four three-dot pictures stand meanwhile. (2) THE PLACE IS DECIDED: the size 27 px is good; the sign stands with its BOTTOM a vertical gap ABOVE THE HIGHEST POINT OF THE LINE WEDGE — NOT at the lane’s top, where it is drawn today. To ask at the build: the highest point of the whole wedge on the lane, or of the wedge where the sign stands; the gap (the standard 8 px proposed). *(What follows on this line is the trail of the proposals.)* Proposals put to him for both (RUNNING_LOG §358): the change — nothing more · a small picture-sign of the state where its ramp begins (the AI's lean) · a number · a thin line; the electronics — a grey window a container with a small badge · ONE grey window a computer player with its own small state wedge (the AI's lean) · nothing.

### 3 · Trills and accented long tones (125 … 210 s)
- **Announced by:** the trills' badge and the accented long tones' badge, side by side.
- **A trill:** its curve, the whole height of the lane, `tr` in the curve's upper left corner (as the composer score labels it). **BUILT 2026-10-10 (DEC-157, RUNNING_LOG §389) — piece #5's trill with the pitch taken out:** a go line at the onset · the level curve over the exact span (lime green, 30 % fill, a 2 px outline; 100 samples a second; **it starts at 0, on the lane's bottom edge — no drawn floor, DEC-158**) · `tr` just right of the go line, its top on the mic openings' own top edge, **twice piece #5's size (DEC-158: about 22 × 20 px)** · NO pitch, no `sfz`. The page: `approaching-trills` (125 … 211 s). His eye: the size and the start GIVEN (§390). **SINCE DEC-162 (RUNNING_LOG §394): THE TRILLS' BADGE stands in the `tr`'s place on every trill** — the opening's badge size (a fifth of the lane), the mic openings' own top edge, and **as far right of its go line as its top is under the lane divider (DEC-163, RUNNING_LOG §395: one gap, two sides)**. (The bare `tr` is one key away.)
- **An accented long tone:** a conductor's arc, with a mic opening over its impact. *(What the score has called a petal hit: the player's one short note, which the electronics ring on.)* **BUILT 2026-10-10 (DEC-159, RUNNING_LOG §391) — THE ARC ALONE, FOR NOW:** each of the 34 is a GC in its own player's lane (the lineage's GC: the arc, the impact dot on the lane's bottom edge, the ball in the video view), its impact at the moment ANOTHER player's trill ends — the peak of that curve. His word: "nothing else right now, just the GC in addition to the trill curves" — NO mic opening on the page yet. The last five (the tutti, 197.9 s) stand 0.55 s after their trills end, as composed. **THE MIC OPENINGS BACK (DEC-161, RUNNING_LOG §393):** each hit's opening in the mic's row at the lane's top, its length the engine's own window (the save's zone: 500 ms, from 100 ms before the note). A player's microphone is never open twice and never into that player's own trill — where the score had it so (two places) the opening now ends 100 ms before (`tools/mic_gaps.js`). **THE ACCENTED LONG TONES BADGE BEFORE EVERY MIC OPENING (DEC-164, RUNNING_LOG §396)** — as the short attacks' badge before the opening's mic openings: the same size, the same gap. **AT A PAGE'S EDGE (DEC-165, RUNNING_LOG §397):** a badge beside its go line that would leave the frame stands BEFORE the line instead, the same gap — a rule (`page_rules.json` `edge.badge.screenEnd`). A badge that would land on its own mic opening is placed AFTER the opening, the same gap — by hand, case by case, no rule ("when the rule breaks next time, we'll come up with a new rule").
- **No badge on each:** every instance is its own sign.
- **Open:** how the arc meets the mic, now that the mic is at the top.

### 4 · The drones (211 … 415 s) — multiphonics
- **Announced by:** the multiphonics' badge.
- **Each recording:** a mic opening, 6 … 9 s long — its LENGTH is the duration — carrying its own multiphonics badge.
- **BUILT 2026-10-10 (DEC-167, RUNNING_LOG §399), on two working pages — `approaching-drones` · `approaching-drones-elec`:** the 15 mic openings, the multiphonics badge before each · at the section's start, on every lane, ONE multiphonics badge the size of the three body problem's, centred in the lane, the badge's gap before the wedge · **a LINE WEDGE on every lane, at the three body problem's place, SOL_green: 4 until 316 s · to 10 by 331 · 10 until 351 · to 2 by 374 · 2 to the end** · THE ELECTRONICS (the presentation page): each drone a purple line in its own grey pane at the lane's bottom with the multiphonics badge before it — no brackets. **SINCE §401 · §402:** the big badge stands CLEAR TO THE LEFT — big badge · a gap · the green line begins · a gap · the first opening's own small badge · a gap · the opening · ONE drones page, with the electronics · no meter at the cursor in this section (the meter rides a curve that is drawn: the trills'). *Open: the line's colour · seven drones that follow the one before with no gap have no badge of their own.*
- **A pie dial** on each opening shows its duration running out (his note, DEC-103).
- **Between recordings:** the player plays multiphonics freely; nothing is drawn.
- **Open:** where the badge and the pie sit on the opening.

### 5 · The beating section (423 … 668 s) — audible beats
- **Announced by:** the audible beats' badge.
- **The staff shows** here, with its clef.
- **Each pair — a first thought, not fixed:** a pitch in a header, then a swatch or curve the full height of the lane over the stretch the sine sounds; the player's pitch and its duration line on the staff.
- **Open — to decide at its turn:** all of the above.

### 6 · The scattered strikes (not yet in the piece)
- **Announced by:** the scattered strikes' badge.
- **Each strike:** a mic opening says when.
- **Open:** a badge on each opening, by the same rule as the drones **(AI)** · strikes written out against strikes left free.

---

## 4 · The lane's vertical map

*A lane is 209.6 px tall. Measured from its top, as drawn on the layout page:*

| | px |
|---|---|
| the gap under the dividing line — the size a first number **(AI)** | 0 … 8 |
| **the mic's row** — the mic opening (42 px tall, at 8 … 50, DEC-122) and the badge (42 px too, DEC-123) both hang from its top, equal | 8 … 50 |
| free | 50 … 89 |
| the staff, where it shows | 89 … 121 |
| free | 121 … 202 |
| the gap above the next dividing line | 202 … 210 |

**Take the whole lane**
- the trill's curve
- the sine's swatch
- the conductor's arc (as the stack draws it: from the lane's top to a landing at its bottom)

**Placed**
1. the mic's height — the TOP, for now (DEC-103).

**To place, in this order**
2. ✓ the badge and its mic — in the opening a badge before EVERY mic opening (DEC-117); the drones the same way at their turn.
3. the three body problem's line wedge, and its state signs.
4. the standard gap — its size (8 px drawn).
5. ✓ the badges' size — 42 px, the mic opening's height (DEC-123; 36 px at DEC-117, 54 px at DEC-105), 12 px before the mic opening.

---

## 5 · The conductor's / presentation view — OPENED 2026-10-09 (DEC-110); section 1 DECIDED (DEC-111)

A generic hint of what the electronics do, for a conductor, a jury, an audience — a LAYER on the players' page (one file, a switch), section by section.

**The principle (AI, unopposed):** draw as fact only what is true at every performance — the REGION, the COUNT, the KIND; an onset is true only of one realisation.

**The electronics' "italics" — how their signs are told from the players' (DEC-111 · DEC-112):** THE WINDOW — a plain see-through slate-grey rectangle with a subtle grain round each brick and its badge (his "something to identify that these are electronics"; "just local", DEC-114) · the place, the lane's BOTTOM · the brick PURPLE · their badge the quartet's flocking badge, 36 px — the language badges' size too since DEC-117 — before every brick.

| section | the hint | status |
|---|---|---|
| 1 the opening | for each return brick a grey window round the flocking badge and the purple brick, the brick's thickness the count one → five | decided (DEC-111 · DEC-112 · DEC-114); **BUILT (§335 … §338)** — the page *Approaching — the opening, with the electronics*; his eye |
| 2 the three body problem | ONE grey window a computer player (three: under the bass clarinet, the percussion, the cello) over its whole orbit, its own small state wedge inside, the short attacks' badge before it · **in the gutter of every page, beside each window: a small system bracket as tall as the window and the name Elec1 · Elec2 · Elec3** (DEC-141 — 'like if it was another staff'; title case, DEC-150; `rules.json` `objects.elecBracket` · `electronics.players`; the name 0.8 of a part label, the AI's number) | decided (DEC-132, his '2b'; DEC-141); **BUILT (§360 · §370)** — the page *Approaching — the three body problem, with the electronics*; his eye |
| 3 trills and accented long tones | the petals' ring (about ten seconds after the mic) — open | to discuss |
| 4 the drones | the drones, up to five at once — open | to discuss |
| 5 the beating section | the sine — the pitch header and swatch are already in the players' scheme; what else is the view's — open | to discuss |
| 6 the strikes | the answer after the strike — open | to discuss |

- **Who the three computer players are (his question, DEC-141; read from the save):** three FAMILIES, all five instruments in — Elec1 (drawn under the bass clarinet) plays the WINDS' samples, bass flute and bass clarinet · Elec2 (under the percussion) the percussion's · Elec3 (under the cello) the STRINGS', viola and cello. The lane a window is drawn on is only where its brick stands in the composer score.
- The five options drawn before his idea: http://localhost:5500/signs/conductor.html (a side page for choosing; the build goes in the notation app).
- What the electronics do in each section: `bank/signs/conductor.json`.

---

## 6 · Open, in the order to settle

1. ► His eye on section 1 as re-cut at DEC-117 (a badge before EVERY mic opening, 12 px before it · the mic opening 42 px tall again (DEC-122) and the badge 42 px with it (DEC-123, his "c") — equal · hung from the top, the mic's fill 18 %, its outline solid).
2. Then by section: the three body problem (the wedge · a sign per state · its badge) → section 2 (the arc and the mic) → the drones (the badge and the pie on each opening) → the beating section → the strikes.
3. The standard gap · the badges' size.
4. The conductor's / presentation view — section 1 BUILT (§335): his eye; then its sections 2 … 6, each at its turn with the players' signs.
5. To confirm: pitch and percussion instrument are the player's choice.
