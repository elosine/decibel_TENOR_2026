# THE NOTATION SCHEME — what a player sees, section by section

*(Opened 2026-10-09 at his word — "keep these notes pls, more organized version" (DEC-102). This is the ORGANISED version of the notation
decisions: what is decided, what is open, in the order they will be settled. It is rewritten freely as decisions land. The record of
how each was reached is `RUNNING_LOG.md` §299 … and `COMPOSITION_NOTES.md` DEC-87 … — his words are quoted there, not here.
The plan items are `PLAN.md` § 2. Marked **(AI)** = the AI's reading or suggestion, not yet his.)*

**To see it — IN THE NOTATION SCORE:** http://localhost:5500/notation/app/notation.html → `ir`: *Approaching — the opening (0 … 37 s)* → `view`: video. Laid out so far: section 1 (RUNNING_LOG §325). **The presentation view:** `ir`: *Approaching — the opening, with the electronics (0 … 37 s)* — the same page plus the electronics' layer (§335).
The places are rows of `notation/registry/rules.json`: `objects.micOpening` (`place`: laneTop · laneMiddle · laneBottom; `gapSs`) and `objects.badge` — change a row, reload the app. *(The earlier working drawing: http://localhost:5500/signs/layout.html.)*

---

## 1 · What holds everywhere

| | | status |
|---|---|---|
| the page | five lanes — BFl · BCl · Perc · Va · Vc — white, a thin grey line between them | decided, built |
| the staff | 0.25 s of lines at the very start; back for the beating section's pages; the clef only with it | decided, built |
| pitches | on a staff only in the beating section | decided |
| the electronics' returns | NOT shown to the players | decided |
| the electronics' hint | in the PRESENTATION VIEW only — a layer on the players' page; the electronics' colour is PURPLE, their place the lane's BOTTOM (the mic at the top: into the microphone above, out of the speakers below); their badge piece #1's flocking badge, smaller than the language badges | decided for section 1 (DEC-111); the rule for the rest **(AI)** |
| dynamics | none in the lanes | decided |
| words | none in the lanes — a badge says what to play, the performance notes say how | decided |
| which pitch · which percussion instrument | the player's choice, within the type **(AI — to confirm)** | open |
| the mic opening | a yellow brick: WHEN to play into the microphone, and for how long. Always at ONE height: **the TOP of the lane, for now** | decided (DEC-103) — drawn, his eye |
| a badge | says what KIND of sound. SECTIONAL: it announces a section once | decided |
| a badge on a mic opening | where the openings stand alone — the drones: yes, each one · the opening: none | decided for those two |
| two badges together | a METHOD large, its MATERIAL small beside it (the three body problem) · two materials side by side, equal (section 2) | decided for the three body; the rule **(AI)** |
| the conductor's arc (GC) | only where an event is one exact moment: the accented long tones. NOT in the opening | decided |

---

## 2 · The signs chosen

**The six badges** — a rounded square, dark slate, the sign in its colour; 54 px in the score (DEC-105) (`bank/language/language.json`; http://localhost:5500/language/index.html)

| type | sign | colour |
|---|---|---|
| short attacks | three small open triangles (Braxton's) | SOL_red |
| trills | `tr` with its wavy line (the notation's font) | the format's blue |
| accented long tones | a narrow wedge running on as a line (Braxton's) | white |
| multiphonics | three open noteheads in a rectangle | SOL_yellow |
| audible beats | the added wave inside its two-pinch outline | SOL_orange |
| scattered strikes | nine solid triangles diving at a ground line | SOL_green |

**The mic opening** — as the composer score draws it: a rectangle, corners 3 px, plain yellow #FFFF00 at 18 % (the composer score's is 35 %; 29 px tall, from the top — DEC-105 … DEC-109), the yellow lying OVER the two circles, a solid outline in the same
yellow, the sign ◉ (`bank/signs/mic_opening.json`; http://localhost:5500/signs/index.html). No name on it.

**Still to draw:** the three body problem's own badge (piece #2 has one — three discs on orbits, no square) · the line wedge ·
the pie dial on a drone's opening (the stack has one: piece #6's breath's clock).

---

## 3 · Section by section — what a player sees

### 1 · The opening (0 … 37 s) — short attacks — IN THE NOTATION SCORE
- **Announced by:** the short attacks' badge, once in each lane, before that player's first mic opening (kept and resized by him, DEC-105).
- **Each event:** a mic opening, ALONE. No conductor's arc. No note. No badge on it.
- **On the page:** 30 openings on four pages, each 0.5 s = 77 px.
- **Open:** nothing, but for his eye on the new sizes.
- **Presentation view (DEC-111):** the flocking badge, small and purple, once a lane at the lane's bottom; then a purple brick at the bottom over each stretch the electronics answer in — its length the region (0.8 … 2.5 s), its thickness the number of returning sounds (one → five). Nothing on the brick. *(Built, RUNNING_LOG §335 — the page `approaching-opening-elec`; the numbers the AI's first, his to move, one word each: `rules.json` `objects.elecReturn` (the brick: its place, its height a sound) · `objects.elecBadge` (the badge's size) · `colours.elecPurple` (the purple).)*

### 2 · The three body problem (39 … 123 s) — a method, on short attacks
- **Announced by:** the three body badge, large, with the short attacks' badge small beside it.
- **Each stretch:** a LINE WEDGE, whose colour and thickness change with the player's state (far apart · approaching · close pass · break and rejoin).
- **No mics** in this section.
- **Open — to decide at its turn:** a simple sign per state as well (an abbreviation? a number?) · the wedge's look · its place in the lane · the three body badge itself.

### 3 · Trills and accented long tones (125 … 210 s)
- **Announced by:** the trills' badge and the accented long tones' badge, side by side.
- **A trill:** its curve, the whole height of the lane, `tr` in the curve's upper left corner (as the composer score labels it).
- **An accented long tone:** a conductor's arc, with a mic opening over its impact. *(What the score has called a petal hit: the player's one short note, which the electronics ring on.)*
- **No badge on each:** every instance is its own sign.
- **Open:** how the arc meets the mic, now that the mic is at the top.

### 4 · The drones (211 … 415 s) — multiphonics
- **Announced by:** the multiphonics' badge.
- **Each recording:** a mic opening, 6 … 9 s long — its LENGTH is the duration — carrying its own multiphonics badge.
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
| **the mic's row** — the mic opening (29 px tall, at 8 … 37) and the badge (54 px) both hang from its top | 8 … 62 |
| free | 62 … 89 |
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
2. **► the badge and its mic** — the announcing badge is drawn two ways; a badge ON an opening comes with the drones.
3. the three body problem's line wedge, and its state signs.
4. the standard gap — its size (8 px drawn).
5. ✓ the badges' size — 54 px, 12 px before the mic opening: his numbers (DEC-105).

---

## 5 · The conductor's / presentation view — OPENED 2026-10-09 (DEC-110); section 1 DECIDED (DEC-111)

A generic hint of what the electronics do, for a conductor, a jury, an audience — a LAYER on the players' page (one file, a switch), section by section.

**The principle (AI, unopposed):** draw as fact only what is true at every performance — the REGION, the COUNT, the KIND; an onset is true only of one realisation.

**The electronics' "italics" — how their signs are told from the players' (DEC-111):** the colour PURPLE (SOL_purple; the composer score's return brick is a purple too) · the place, the lane's BOTTOM · their badge smaller than the language badges.

| section | the hint | status |
|---|---|---|
| 1 the opening | the flocking badge once a lane at the bottom, small; a purple brick at the bottom over each stretch of returns, its thickness the count one → five | decided (DEC-111); **BUILT (§335)** — the page *Approaching — the opening, with the electronics*; his eye |
| 2 the three body problem | the three computer players — open | to discuss at its turn |
| 3 trills and accented long tones | the petals' ring (about ten seconds after the mic) — open | to discuss |
| 4 the drones | the drones, up to five at once — open | to discuss |
| 5 the beating section | the sine — the pitch header and swatch are already in the players' scheme; what else is the view's — open | to discuss |
| 6 the strikes | the answer after the strike — open | to discuss |

- The five options drawn before his idea: http://localhost:5500/signs/conductor.html (a side page for choosing; the build goes in the notation app).
- What the electronics do in each section: `bank/signs/conductor.json`.

---

## 6 · Open, in the order to settle

1. ► His eye on section 1 with his numbers of DEC-105 and DEC-106 (the badge 54 px, 12 px before its mic · the mic opening 29 px tall, hung from the top) and DEC-107 · DEC-108 (its fill 18 %, its outline solid).
2. Then by section: the three body problem (the wedge · a sign per state · its badge) → section 2 (the arc and the mic) → the drones (the badge and the pie on each opening) → the beating section → the strikes.
3. The standard gap · the badges' size.
4. The conductor's / presentation view — section 1 BUILT (§335): his eye; then its sections 2 … 6, each at its turn with the players' signs.
5. To confirm: pitch and percussion instrument are the player's choice.
