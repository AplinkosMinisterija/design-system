---
'@aplinkosministerija/design-system': minor
---

DynamicFilter: fields can depend on each other.

- New `FilterConfig.hidden(values)` — the field is not rendered while it returns `true` for the form's current (not yet applied) values, and a hidden field is submitted as `null`, so it can never be applied or show up as a chip. A row whose fields are all hidden disappears.
- `customSetValue` now applies to every input type, not only `singleSelect` — e.g. a multiselect can clear a dependent field when it changes.

See the "DynamicFilter with dependent fields" story.
