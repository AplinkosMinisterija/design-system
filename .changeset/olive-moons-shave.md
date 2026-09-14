---
'@aplinkosministerija/design-system': minor
---

fix(tables): name the mobile expand controls and make them visible

The header's "expand all" control was a bare chevron, pixel-identical to the
per-row chevrons under it, so nothing said it acted on the whole list. It is
now a labelled button above the table ("Išskleisti visus" / "Suskleisti
visus"), which is the only thing that reads on a layout with no hover.

Also on these controls:

- every toggle is a real `<button>` with an accessible name, where before six
  of them reported none at all (WCAG 4.1.2)
- chevrons move from `#cdd5df` to `#697586`: 1.5:1 on white to about 5:1,
  clearing the 3:1 WCAG 1.4.11 asks of a control (1.4.11)
- the row toggle fills its cell instead of just the glyph, and rows come out
  slightly shorter rather than taller
- hover, `:focus-visible` and pressed states, and a 150ms rotation that
  `prefers-reduced-motion` switches off

All four strings are overridable through `texts`, alongside
`filteredItemsNotFound`.
