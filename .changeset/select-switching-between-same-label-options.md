---
'@aplinkosministerija/design-system': patch
---

Picking a select option that shares its label with the current one now fires
`onChange` instead of being silently ignored.

`useSelectData`'s `handleClick` short-circuited whenever
`getOptionLabel(value)` equalled `getOptionLabel(option)`, using the rendered
text as a stand-in for the option's identity. Labels are not identities: a
vocabulary that has been superseded keeps entries whose text matches the new
ones — in BĮIP Rūšys the deactivated `MATURE` and the current
`SUAUGES_INDIVIDAS` are both "Suaugęs individas" — and clicking the live entry
did nothing at all. The field kept showing the same text, so nothing told the
user the pick had not registered, and the form went on submitting the old
value.

The guard now compares the options themselves. `useSelectData` takes a
`getOptionValue` accessor, which `SelectField` and `MultiSelectField` already
accept and now pass through, so an option keyed by something other than `id`
compares correctly. It defaults to `option?.id ?? option`, which keeps objects
keyed by `id` working and makes primitive options compare by value.

Re-picking the option that is already selected is still a no-op, as the guard
was written for.
