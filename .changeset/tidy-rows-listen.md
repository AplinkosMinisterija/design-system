---
'@aplinkosministerija/design-system': patch
---

Fix a mobile table row that is focusable but cannot be activated from the keyboard

`MobileTable` gave every row `tabIndex={0}` and `onKeyDown={handleKeyDown}` — the
curried handler itself, not the handler for that row. React therefore called it
with the EVENT, `useKeyAction` read the event as the item, and the action ran with
no argument at all: Enter on a focused row did nothing, on any table, in every
consuming app, while `tabIndex` advertised the row as interactive (WCAG 2.1.1 —
these are government apps, so AA is a legal requirement). `DesktopTable` has
always passed `handleKeyDown(row)`; the mobile twin now does the same.

The reason it went unnoticed for so long is the hook's own heuristic: it decided
"is this the event, or the item?" by asking whether the argument is an object with
a `key` property. A KeyboardEvent has one — and so does any data row with a `key`
column, which would have silently killed keyboard activation in `DesktopTable`
too. `useKeyAction` now identifies a real event (a `key` AND a callable
`preventDefault`), so passing the handler the wrong way can no longer read as the
right way.

Two more in the same rows:

- A row is focusable only when the table actually has an `onClick`. A focus stop
  that does nothing is worse than no focus stop, and `DesktopTable` already
  gated it.
- Expanding a row logged `Each child in a list should have a unique "key" prop`
  in every consumer: the `key` sat on the inner container while the fragment the
  `map` returned had none.

`RecursiveRow` has the same missing key on its nested-children `map`; left alone
here because it is a different component with its own render path — worth a
follow-up.
