---
'@aplinkosministerija/design-system': minor
---

feat(select): `minQueryLength` — don't search, and don't say "nothing found"

`AsyncSelectField` and `AsyncMultiSelectField` take `minQueryLength`, and `texts`
takes a matching `shortQuery` string. Below that many characters `loadOptions`
is not called at all, and the dropdown — with its screen-reader live region —
shows `texts.shortQuery` instead of `texts.noOptions`.

"Nothing found" is a claim about an answer, and a search that has not run has no
answer; saying it anyway reads as a source that is empty or broken. It was read
exactly that way on a register-backed water-body field that was answering fine.

`minQueryLength` defaults to 0 and `shortQuery` is optional, so no existing
field changes.
