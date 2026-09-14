---
'@aplinkosministerija/design-system': minor
---

feat(tables): `defaultExpanded` opens every mobile row on load

`Table` takes a `defaultExpanded` prop. On the narrow layout the secondary
columns are shown straight away instead of sitting behind a per-row toggle,
for lists that are read a whole row at a time in the field.

Off by default, so every existing table keeps loading collapsed. The
expand/collapse controls still work either way, and a table opted in remembers
the rows the user collapsed across page, filter and sort changes.
