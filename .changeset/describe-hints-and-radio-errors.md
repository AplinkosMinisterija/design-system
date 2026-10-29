---
'@aplinkosministerija/design-system': patch
---

Hints and errors are now announced with the control they belong to, and a table row reads as its own content.

- `bottomLabel` on `TextField`, `NumericField` and `NumericTextField` is rendered with an `id` and referenced from the input's `aria-describedby`, next to the error message when both are present. Screen reader users now hear the hint, for example why a derived value is read-only.
- `RadioOptions` now points `aria-describedby` on its `radiogroup` at the error message, so a group announced as invalid also announces why.
- `Table` no longer puts a synthesized `aria-label` on each cell. It was built as `` `${header}: ${value}` ``, so any cell rendering a React node was announced as `[object Object]` — and because the label overrides the cell's own text, that garbage was all a screen reader could read. The row's English `"Row with ID n"` label is gone with it; rows are named by their cells.

No props changed and nothing looks different.
