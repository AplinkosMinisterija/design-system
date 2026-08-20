---
'@aplinkosministerija/design-system': patch
---

Fix the render and refetch loops caused by unstable effect dependencies

`useSelectData` mirrored `options` into state and re-synced it from an effect
that listed `options` itself as a dependency. `SelectField` handed it
`options || []` — a new array on every one of its own renders whenever the
caller omits the prop or builds it inline — so the effect re-ran, set state, and
re-rendered. Measured on a bare `<SelectField onChange={…} />`: quiet on mount,
then **1807 renders in 1.5 s** with 183 × "Maximum update depth exceeded" as
soon as anything renders it a second time (a keystroke, a parent update). The
list is now derived during render, so there is no state to feed back.

The same hook re-armed `refreshOptions` on every render: `handleSetOptions`
depended on it, callers write it inline (`refreshOptions={(id) => load(id)}`),
and the refresh itself writes the fetched options into the caller's state, which
renders again. With `dependantId` set that fetched forever — 51 requests before
the repro's own guard stopped it; now one. `refreshOptions` and `onChange` are
read through refs, as `useStorage` already does.

The clear-value branch in that hook read `value?.id`, which is always undefined
for the multi-selects — they pass their whole value array. So with `dependantId`
it fired on every render, and `MultiSelectField`'s `onChange` appended the
resulting `null` to the value list until the component crashed on
`Cannot read properties of null (reading 'id')`. It now skips array values, and
skips an empty value entirely instead of calling `onChange(null)` when there was
never anything to clear.

Also derived rather than synced through an effect, each of which cost a render
per prop change: the applied-filter tags in `DynamicFilter` (which were also
missing from the first render), the selected-id set in `Table`, and the disabled
flags in `TreeSelectField` (which reached antd one render late, after the tree
had already been handed over). `MobileTable` keeps its reset but bails out when
no row is expanded. `Map` memoises its styles — `getMapStyles` returned a new
array on every render, and as a dependency that re-ran `fitBounds` on every
render, so with `zoomOnChange` the map snapped back whenever anything above it
re-rendered — and registers the pmtiles protocol once per module instead of once
per render.

Two behaviour changes fall out of dropping the mirrored list: after picking an
option the dropdown shows all options again instead of staying filtered by the
text that was typed before, and when options arrive asynchronously the typed
filter is now applied to them instead of being dropped.
