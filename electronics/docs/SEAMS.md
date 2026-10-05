# SEAMS — where the engine plugs into a piece's stack

> **Filled at part 3** (`docs/PLAN.md`). Until then this file says what it will hold.
>
> **The rule (CLAUDE.md, `#6 §806`):** the engine's code is ADDITIVE — new files, registry rows, one hook line each. **Every line a
> stack file must change is listed HERE**, so a piece applies the list once at the take (`docs/TAKE.md`). A change not on this
> list is a fault.

## The three seams

| Seam | What the engine adds | What the piece's stack must provide | Where it was proven |
|---|---|---|---|
| **The composer score** | a mixin file per object family (part 11) | one `<script>` tag in `composer.html`; the hook the mixin attaches to | ‹part 3› |
| **The sound path** | the trigger's message; the effects (parts 4 · 6) | the message route (OSC or MIDI) out of the composer score; the Reaper tracks or the process that receives it | ‹part 4› |
| **The notation** | a rules row + a drawn or animated kind + its edge class per glyph (parts 7 · 12) | `notation/registry/rules.json` · `page_rules.json` · the render's kind table · the extractor's event emit | ‹part 7› |

## The lines a stack file must change, per piece

*(empty — filled at part 3; one table per stack file, each line with the commit that proved it)*
