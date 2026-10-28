---
'@aplinkosministerija/design-system': patch
---

Hints and errors are now announced with the control they belong to.

- `bottomLabel` on `TextField`, `NumericField` and `NumericTextField` is rendered with an `id` and referenced from the input's `aria-describedby`, next to the error message when both are present. Screen reader users now hear the hint, for example why a derived value is read-only.
- `RadioOptions` now points `aria-describedby` on its `radiogroup` at the error message, so a group announced as invalid also announces why.

No props changed and nothing looks different.
