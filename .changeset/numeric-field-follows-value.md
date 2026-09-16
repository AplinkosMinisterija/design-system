---
'@aplinkosministerija/design-system': patch
---

fix(fields): a numeric field now shows a value set from outside

`NumericField` and `NumericTextField` read `value` once, at mount, and never
again — the box was an uncontrolled input wearing a controlled input's props.
Anything the code put in the form after that stayed invisible: a value prefilled
from a register, a draft that loads after the field mounts, a form reset.

Both now follow `value` when it changes, derived during render rather than
synced through an effect, so the box never paints a stale value first.

Typing is untouched. `574.` and `1.50` are mid-typing spellings of numbers the
parent already holds as `574` and `1.5`, so the comparison is numeric and the
field is not rewritten under the cursor.

A value the box could not have been typed as — `NaN`, `Infinity` — is shown as
empty rather than as the literal word, which the input's own regex would then
have refused to type over.
