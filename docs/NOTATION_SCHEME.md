# THE NOTATION SCHEME — what a player sees, section by section

*(Opened 2026-10-09 at his word — "keep these notes pls, more organized version" (DEC-102). This is the ORGANISED version of the notation
decisions: what is decided, what is open, in the order they will be settled. It is rewritten freely as decisions land. The record of
how each was reached is `RUNNING_LOG.md` §299 … and `COMPOSITION_NOTES.md` DEC-87 … — his words are quoted there, not here.
The plan items are `PLAN.md` § 2. Marked **(AI)** = the AI's reading or suggestion, not yet his.)*

---

## 1 · What holds everywhere

| | | status |
|---|---|---|
| the page | five lanes — BFl · BCl · Perc · Va · Vc — white, a thin grey line between them | decided, built |
| the staff | 0.25 s of lines at the very start; back for the beating section's pages; the clef only with it | decided, built |
| pitches | on a staff only in the beating section | decided |
| the electronics' returns | NOT shown to the players | decided |
| dynamics | none in the lanes | decided |
| words | none in the lanes — a badge says what to play, the performance notes say how | decided |
| which pitch · which percussion instrument | the player's choice, within the type **(AI — to confirm)** | open |
| the mic opening | a yellow brick: WHEN to play into the microphone, and for how long. Always at ONE height | decided — which height: **IN HAND** |
| a badge | says what KIND of sound. SECTIONAL: it announces a section once | decided |
| a badge on a mic opening | where the openings stand alone — the drones: yes, each one · the opening: none | decided for those two |
| two badges together | a METHOD large, its MATERIAL small beside it (the three body problem) · two materials side by side, equal (section 2) | decided for the three body; the rule **(AI)** |
| the conductor's arc (GC) | only where an event is one exact moment: the accented long tones. NOT in the opening | decided |

---

## 2 · The signs chosen

**The six badges** — a 36 px rounded square, dark slate, the sign in its colour (`bank/language/language.json`; http://localhost:5500/language/index.html)

| type | sign | colour |
|---|---|---|
| short attacks | three small open triangles (Braxton's) | SOL_red |
| trills | `tr` with its wavy line (the notation's font) | the format's blue |
| accented long tones | a narrow wedge running on as a line (Braxton's) | white |
| multiphonics | three open noteheads in a rectangle | SOL_yellow |
| audible beats | the added wave inside its two-pinch outline | SOL_orange |
| scattered strikes | nine solid triangles diving at a ground line | SOL_green |

**The mic opening** — as the composer score draws it: a rectangle, corners 3 px, plain yellow #FFFF00 at 35 %, an outline in the same
yellow, the sign ◉ (`bank/signs/mic_opening.json`; http://localhost:5500/signs/index.html).

**Still to draw:** the three body problem's own badge (piece #2 has one — three discs on orbits, no square) · the line wedge.

---

## 3 · Section by section — what a player sees

### 1 · The opening (0 … 37 s) — short attacks
- **Announced by:** the short attacks' badge, once, before the first mic opening **(AI's reading of "opening no badge": none on the openings; the one announcement stays — to confirm)**.
- **Each event:** a mic opening, ALONE. No conductor's arc. No badge on it.
- **Open:** nothing but the mic's height.

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
- **Open:** how the arc meets the mic, once the mic's height is set.

### 4 · The drones (211 … 415 s) — multiphonics
- **Announced by:** the multiphonics' badge.
- **Each recording:** a mic opening, 6 … 9 s long — its LENGTH is the duration — carrying its own multiphonics badge.
- **Between recordings:** the player plays multiphonics freely; nothing is drawn.
- **Open:** where the badge sits on its opening (see § 4).

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

*A lane is 210 px tall. The staff, when it shows, is 32 px in the middle. A badge is 36 px, the mic brick 42 px.*

**Place themselves**
- the trill's curve — the whole lane
- the sine's swatch — the whole lane
- the conductor's arc — the whole lane (as the stack draws it: from the lane's top to a landing at its bottom)
- the staff — the middle

**To place, in this order**
1. **► the mic's height** — top, middle or bottom. One height, always.
2. **the badge beside the mic** — in a row of its own, or to the left of its mic in the same row.
3. the three body problem's line wedge, and its state signs — with section 2.
4. the standard gap under the dividing line and above the next — its size.
5. the badges' size.

---

## 5 · The conductor's / presentation view — HELD

A generic hint of what the electronics do, for a conductor, a jury, an audience. Section by section, later.
- **Section 1, his idea:** the flocking badge, and a duration line or line wedge over the stretch — told apart as ELECTRONICS behaviour by one constant difference: its place in the lane, its size, a transparency or a colour, "an italics equivalent".
- Five earlier options are drawn at http://localhost:5500/signs/conductor.html (before he gave his idea).
- What the electronics do in each section: `bank/signs/conductor.json`.

---

## 6 · Open, in the order to settle

1. ► The mic's height.
2. The badge: its own row, or left of its mic.
3. Then by section: the three body problem (the wedge · a sign per state · its badge) → section 2 (the arc and the mic) → the drones → the beating section → the strikes.
4. The standard gap · the badges' size.
5. The conductor's view.
6. To confirm: pitch and percussion instrument are the player's choice · the opening keeps one announcing badge.
