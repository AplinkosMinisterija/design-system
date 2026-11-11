---
'@aplinkosministerija/design-system': patch
---

`AsyncMultiSelectField` no longer offers a value it already holds.

The component asks `useAsyncSelectData` to drop the chosen values
(`filterSelectedOptions`), and the hook computes that list — but it returned the
unfiltered one, so the dropdown kept offering people who were already chips and
a second click added a duplicate. The filtered list was reaching the keyboard
navigation alone, which also meant the arrow-key highlight and the rendered list
could point at different rows. The sync `MultiSelectField` was unaffected.

Nothing changes for a caller: `getOptionValue` (default `option.id`) decides
what counts as the same option, as it already did for the sync variant.
