# CANDIDATES — settings he has heard and wants kept, for the impulse processing chain

*Opened 2026-10-05 at his word (RUNNING_LOG §109): "could you keep these as a list of candidates for this impulse processing chain?"
A candidate is a process brick's SETTING as he had it when he said keep — pasted back into any brick's JSON box → Apply → Render, or
picked from the brick panel's **Shelf** menu, it is the same sound again. A row is added by the AI whenever he says "keep this" /
"candidate" (a screenshot or the box's JSON is enough), or by the brick's **keep → shelf** button (§113). His remark is quoted; the
AI's note is in italics. Which of these go into the piece, and in what order, is his — this is the shelf.*

**THIS FILE IS RENDERED from `bank/candidates.json` by `node tools/candidates.js` — edit the JSON, not this.** The `source` is not
in a setting on purpose: a candidate is a TREATMENT, applied to whatever the brick's source is. The row says what it was heard on.

| # | kept | heard on | effect | the setting (paste into the box) | the render he heard | his remark |
|---|---|---|---|---|---|---|
| 1 | 2026-10-05 15:53 | `bfl-impulse-1` → `bfl-impulse-1~1`, label "a pitch" | **crush** | `{"effect":"crush","args":{"crMix":0.4,"crBits":4,"crRate":10400},"end":"tail","floorDb":-60,"capMs":8000,"gainDb":0,"match":1}` — *the panel shown, no words; the first kept* | 403 ms · peak −19 dB | *(no words)* |
| 2 | 2026-10-05 15:59 | `perc-impulse-1` → `perc-impulse-1~1`, label "a pitch" | **diffusion** | `{"effect":"diffusion","args":{"diffMix":1,"diffTime":0.0245,"diffGain":0.55},"end":"tail","floorDb":-60,"capMs":8000,"gainDb":0,"match":1}` — *the "no tail" stage rings five times the source's length at amount 0.55* | 1926 ms · peak −9.1 dB | *(no words)* |
| 3 | 2026-10-05 16:02 | `bfl-impulse-5` → `bfl-impulse-5~1`, label "a pitch" | **greyhole** | `{"effect":"greyhole","args":{"ghMix":0.8,"ghTime":0.08,"ghSize":0.7,"ghFb":0.8,"ghDiff":0.8,"ghDamp":0.2},"end":"tail","floorDb":-60,"capMs":8000,"gainDb":0,"match":1}` — *the source + the whole 8 s cap: STILL SOUNDING at the cap, faded there; a longer cap lets it ring out* | 8390 ms · peak −15.3 dB | *(no words)* |
| 4 | 2026-10-05 16:07 | `bfl-impulse-5` → `bfl-impulse-5~1`, label "a pitch" | **diode** | `{"effect":"diode","args":{"drmMix":1,"drmFreq":[80,400]},"end":"tail","floorDb":-60,"capMs":8000,"gainDb":0,"match":1}` — *the carrier is a RANGE: drawn fresh between 80 and 400 Hz at every Render (§111)* | 406 ms · peak −15.3 dB (heard at 218 Hz) | *"this one would have a randomizer for the carrier between 80 and 400 hertz"* |
| 5 | 2026-10-05 16:11 | `bfl-impulse-5` → `bfl-impulse-5~1`, label "a pitch" | **freeze** | `{"effect":"freeze","args":{"freeze":1,"freezeAtMs":130,"smear":1},"end":"tail","floorDb":-60,"capMs":1200,"gainDb":0,"match":1}` — *a freeze never falls: the cap IS its length — 1.2 s past the source, cut and faded there* | 1561 ms · peak −15.3 dB | *(no words)* |
| 6 | 2026-10-05 16:20 | `perc-impulse-5` → `perc-impulse-5~1`, label "a pitch" | **jpverb** | `{"effect":"jpverb","args":{"jpMix":0.6,"jpT60":2,"jpSize":2,"jpDamp":0.15,"jpLow":0.9,"jpMid":1.3,"jpHigh":0.65},"end":"tail","floorDb":-60,"capMs":1100,"gainDb":0,"match":1}` — *a 2 s reverb cut and faded 1.1 s past the source: the cap shapes it* | 1495 ms · peak −12 dB | *(no words)* |
| 7 | 2026-10-05 16:21 | `va-impulse-3` → `va-impulse-3~1`, label "a pitch" | **feedback** | `{"effect":"feedback","args":{"fbMix":1,"fbBloom":3,"fbHold":6,"fbDrive":4,"fbTone":1800,"fbPath":10,"fbClimb":0,"fbWobble":0.1,"fbS1":82.41,"fbS2":110,"fbS3":146.83,"fbS4":196,"fbS5":246.94,"fbS6":329.63},"end":"tail","floorDb":-60,"capMs":1700,"gainDb":0,"match":0}` — *the preset slow bloom on the viola's impulse 3; the peak NOT matched (his box unticked); the cap 1.7 s — the panel said its settings had changed since that render: kept as shown* | 2377 ms · peak −15 dB | *"this is slow bloom"* |
