# SWEEP LIST — faults met while composing, logged not fixed

*(Per piece, started empty. The device is piece #5's — `septet_2026/docs/SWEEP_LIST.md`, opened 2026-09-10, `#5 §352–353`.
The rule: when a tool blocks, write one line here and route around it — a console line, a different card, a re-insert.
Do not stop to fix. The sweep, in its own session and on a copy, takes this list and returns ONE report; the composer
gives verdicts once; ONE global fix follows. A line is closed here only when the fix is verified in the running app.
`docs/NITS.md` stays what it is — deferred and not now; this list is real and batched soon.)*

**Format:** date · where (which card / drawer / mode) · what I did · what happened · what I expected · blocking? (Y/N)

| # | Date | Where | What I did | What happened | Expected | Blocking |
|---|---|---|---|---|---|---|
| 1 | 2026-10-04 | the composer score, its bars | opened the page to compose (session 2) | the bottom bar ran off the right edge (buttons unreachable), its two-word buttons stuck up into the last lane, four panel tabs stood over the score, the top bar wrapped to two rows with the status text across it | every control reachable; nothing over the score; as little vertical space as possible | Y — **CLOSED the same day:** one 24 px bar with three menus, verified on the throwaway 5501 (RUNNING_LOG §67) |
| 2 | 2026-10-04 | the composer score, the Rec lane, bass flute | played my keyboard into the bass flute | all short notes — on every preset; the other instruments held | held notes | Y — **CLOSED (RUNNING_LOG §70):** measured through the bridge — the flute's Kontakt SLOT 1 (channel 1, the live and plain-note slot) cut every note while slots 2 … 4 and the clarinet held; a stray key from his keyboard had switched the slot out of Preset Mode (Xsample's low keys and A#7 are function keys; the live path had no floor). Restored by CC#0 126 from the AI; the live path now refuses a key outside the preset's range. His ear not claimed |
| 3 | 2026-10-05 | the electronics, impulse 1, the bass flute's mic opening | played `piece-sec01-a` from 0 with the engine up (he) | four of five impulses captured; `bfl-impulse-1` did not — no row, no sample; its raw window `bank/samples/raw/zn-47.wav` is 598 ms of exact zeros | five samples | N (four are in) — **OPEN, not diagnosed:** the measuring order is journal §2's checkpoint block (RUNNING_LOG §72) |
