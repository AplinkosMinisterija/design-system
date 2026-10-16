---
'@aplinkosministerija/design-system': patch
---

A searchable `SelectField` now exposes its chosen value to assistive
technology, and its dropdown button names the field it belongs to.

The selected option's label is rendered as the input's placeholder, because
`value` holds what the user is typing. A placeholder is not a value, so the
combobox reported itself as empty however much was selected: a screen-reader
user could apply a filter, watch the result count change, and still be told the
control was empty (WCAG 2.1 SC 4.1.2, Level A). The input now carries an
`aria-describedby` pointing at the selected label, leaving the typing and
search behaviour untouched.

The dropdown arrow's default label was `Išskleidimo ikonėlė`, which names the
icon rather than the action and is identical for every select on a page. It is
now `Išskleisti` plus the field's own label, matching what the clear button
already did. Pass `ariaLabelDropDownIcon` to override.
