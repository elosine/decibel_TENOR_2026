# CANDIDATES — settings he has heard and wants kept, for the impulse processing chain

*Opened 2026-10-05 at his word (RUNNING_LOG §109): "could you keep these as a list of candidates for this impulse processing chain?"
A candidate is a process brick's SETTING as he had it when he said keep — pasted back into any brick's JSON box → Apply → Render, it is
the same sound again. The AI adds a row whenever he says "keep this" / "candidate" (a screenshot or the box's JSON is enough); his
remark is quoted, the AI's reading marked. Which of these go into the piece, and in what order, is his — this is the shelf.*

**How to use one:** click a brick → paste the JSON into its box → [Apply] → [Render] → [▶ hear it]. The `source` is not in the JSON:
a candidate is a treatment, applied to whatever the brick's source is. The row says what it was heard on.

| # | kept | heard on | effect | the setting (paste into the box) | the render he heard | his remark |
|---|---|---|---|---|---|---|
| 1 | 2026-10-05 15:53 | `bfl-impulse-1` (the slap, 385 ms) → `bfl-impulse-1~1`, label "a pitch" | **crush** — bit depth and sample rate | `{"effect":"crush","args":{"crMix":0.4,"crBits":4,"crRate":10400},"end":"tail","floorDb":-60,"capMs":8000,"gainDb":0,"match":1}` | 403 ms · peak −19 dB | *(the panel shown, no words; the first kept)* |
| 5 | 2026-10-05 16:11 | `bfl-impulse-5` (388 ms) → `bfl-impulse-5~1`, label "a pitch" | **freeze** — the spectrum, held | `{"effect":"freeze","args":{"freeze":1,"freezeAtMs":130,"smear":1},"end":"tail","floorDb":-60,"capMs":1200,"gainDb":0,"match":1}` — *a freeze never falls: the cap IS its length — here 1.2 s past the source, cut and faded there* | 1561 ms · peak −15.3 dB | *(the panel shown, no words)* |
| 4 | 2026-10-05 16:07 | `bfl-impulse-5` (388 ms) → `bfl-impulse-5~1`, label "a pitch" | **diode** ring modulation — with a RANDOMIZER on the carrier | `{"effect":"diode","args":{"drmMix":1,"drmFreq":[80,400]},"end":"tail","floorDb":-60,"capMs":8000,"gainDb":0,"match":1}` — *the carrier is a RANGE: drawn fresh between 80 and 400 Hz at every Render (§111); he heard it at 218 Hz* | 406 ms · peak −15.3 dB (at 218 Hz) | *"this one would have a randomizer for the carrier between 80 and 400 hertz"* |
| 3 | 2026-10-05 16:02 | `bfl-impulse-5` (the slap of group 5, 388 ms) → `bfl-impulse-5~1`, label "a pitch" | **greyhole** — a delay and a reverb at once | `{"effect":"greyhole","args":{"ghMix":0.8,"ghTime":0.08,"ghSize":0.7,"ghFb":0.8,"ghDiff":0.8,"ghDamp":0.2},"end":"tail","floorDb":-60,"capMs":8000,"gainDb":0,"match":1}` | 8390 ms · peak −15.3 dB — *the source + the whole 8 s cap: it was STILL SOUNDING at the cap and was faded there; a longer cap lets it ring out* | *(the panel shown, no words)* |
| 2 | 2026-10-05 15:59 | `perc-impulse-1` (the percussion's impulse, 399 ms) → `perc-impulse-1~1`, label "a pitch" | **diffusion** — smears the attack | `{"effect":"diffusion","args":{"diffMix":1,"diffTime":0.0245,"diffGain":0.55},"end":"tail","floorDb":-60,"capMs":8000,"gainDb":0,"match":1}` | 1926 ms · peak −9.1 dB — *the "no tail" stage rings five times the source's length at amount 0.55* | *(the panel shown, no words)* |
