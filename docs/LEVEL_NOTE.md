*Kept for him at the build's wrap, 2026-10-06 (running order step 11; RUNNING_LOG §161 … §166). At `/postclear` it is presented to him first, whole — as `WORKSHOP_NOTE.md` was. Everything under this line is the note.*

# The level — the electronics scored like players

✓ **Every sample knows how loud it is.** A loudness figure on each one, on the players' own scale.
✓ **A ladder of marks.** ppp … fff, 4 dB a step, as the players have.
✓ **A Dynamic on every return brick.** As played, a mark, or relative — with a hairpin, a subito step, or a line.
✓ **A Drive into every effect.** A quiet impulse now excites its effect as hard as a loud one.
✓ **Your impulses can have their own dynamics.** No longer all at full velocity.
✓ **A real master bus** in SuperCollider: high-pass, low-pass, compressor, limiter, and a meter.
✓ **The hall.** A trim and filter per microphone, a sound-check calibration, a bleed guard, a line-up tone.
✓ **Committed and pushed,** the piece and the engine's repo.

## To hear it

1. **Composer page in Chrome,** http://localhost:5500/composer.html.
   Press CTRL+S if the score shows unsaved edits. Then F5.

2. **The engine's window.** Close it.
   Then double-click `C:\Users\jwloy\GitHub\decibel_TENOR_2026\start_electronics.bat`.
   You should see, in this order:
   - `the bus · high-pass 30 Hz · low-pass off · the glue ON …`
   - `the engine is listening … The bank holds … samples`
   - `measuring · … samples have no loudness figure yet — in the background`

3. **Wait about two minutes** for `measured · … every sample has its loudness now`.
   Until then a mark plays as captured. Then press F5 in the page once more.

No restart of the score server.

## What to listen for, in order

**A. The main score as it is.** Open 'piece-sec01-a', play from 0.
- No brick carries a dynamic yet, so every return is still "as played".
- Two things DO differ from yesterday, and they are meant to:
  - **the drive** — each processed return is re-made with its impulse brought to one level first. The quiet players' effects should speak like the loud ones'.
  - **the bus** — a gentle compressor and a 30 Hz high-pass on everything.
- To hear the bus alone, in a terminal:

```bash
node tools/elec.js bus glue=off hpf=0
```

```bash
node tools/elec.js bus glue=on hpf=30
```

**B. One brick written ff.** Click a purple return brick.
In its panel: Dynamic → Level → 'written — a mark' → 'ff'.
- The brick's label now ends in `· ff`.
- Play from before it. It should come back at one loudness, whatever was captured.
- The engine's window says `play · … · ff +… dB`.

**C. A hairpin.** Same panel: Level 'mp', then Shape → 'hairpin to' → 'ff'.
- The label reads `mp→ff`. The sample swells over its own length.

**D. A subito.** Shape → 'step, at' → '400' ms, to 'p'.

**E. The low-pass.** While something plays:

```bash
node tools/elec.js bus lpf=6000
```

```bash
node tools/elec.js bus lpf=0
```

**F. The drive on one brick.** A brick with a feedback preset.
In 'Processed as', the new menu beside the envelope: 'as played' instead of the default.
Press [render all planned], then play. Compare with 'normalized'.

## What I need from your ear

- **Is the electronics' ff as loud as a player's ff?** One number moves the whole ladder: `reference` in `bank/elec_route.json` → `level`. It is −29.54 now, my starting guess.
- **The compressor: on or off?** It is on. `glue` → `on` in the same file, under `master`.
- **Does "normalized" suit the effects,** or do you want the players' own loudness to drive them?

---
*Notes:*
- **Not run, and you should know it.** Your engine was up through the whole build, so nothing that starts an engine could be tried. Step 2 is the first real start of the new code. If the window stops with an error, send me a screenshot of it.
- **Proven offline instead,** with no sound and your engine untouched: the loudness figure (it agrees with a second method to 0.05 dB), the ladder, the envelope, the drive, and the bus — exact at unity, and a tone 6 dB too loud leaves at −1.0 dB with no overshoot.
- **Calls I made, yours to reverse:**
  - the compressor is ON as it starts;
  - a workshop stage (the orange bricks) is driven "as played", not normalized — your workshop is unchanged;
  - `--redo` on the impulse tool leaves your six groups at full velocity unless you name a dynamic;
  - the `▲` for "as played" shows only on a brick that carries a dynamic, so none of your labels changed;
  - the limiter is my own, not SuperCollider's — theirs cannot treat the two channels as one.
- **One finding for the score.** The feedback hardly follows the impulse's loudness: a source 20 dB quieter came out only 3 dB quieter. Its level is its own.
- **The hall's part cannot be proven here.** The calibration and the bleed guard need real microphones — a rehearsal.
- **The six groups still play at full velocity.** To give a group a dynamic: `"dyn": "mf"` on its row in `bank/impulses.json`, then the tool with `--redo` — at your word.
- **The record:** RUNNING_LOG §161 … §166, the engine's §42 … §45, PLAN.md § 1.4 with an "as built" line on each item.
