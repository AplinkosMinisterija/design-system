---
'@aplinkosministerija/design-system': minor
---

feat(select): say the query is too short instead of "nothing found"

`AsyncSelectField` and `AsyncMultiSelectField` take `minQueryLength`, and
`texts` takes a matching `shortQuery` string. While the typed query is shorter
than that, the dropdown — and its screen-reader live region — shows
`texts.shortQuery` in place of `texts.noOptions`.

The two are different statements. "Nothing found" is a claim about an answer,
and a search that has not run has no answer; saying it anyway reads as a source
that is empty or broken. It was read exactly that way on a live water-body
field backed by a register that was answering fine.

Both default to the old wording (`minQueryLength` is 0, `shortQuery` optional),
so no existing field changes.
