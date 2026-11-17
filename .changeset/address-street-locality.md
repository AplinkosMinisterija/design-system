---
'@aplinkosministerija/design-system': patch
---

`AddressPicker` now finds an address when the town is typed with it.

The registry has no whole-address search, so the picker put the entire typed string into
one field and OR'ed it across street names and locality names. Typing a street and a town
together therefore matched nothing, and a street alone returned that street in every town
in the country — the one meant was rarely in the first page.

`parseAddressQuery` now separates the street from the locality (either order, comma
optional) and `addressSearchFilters` ANDs them into one filter. Two details the registry
forces: a locality is stored in the genitive (`Jurbarko m.`, `Vilniaus m.`), so a typed
nominative is reduced to its stem before matching; and a multi-word street name such as
`A. Jakšto g.` is kept whole.

`AddressQuery` gains `street` and `locality`, and `text` is now optional — it is still what
a query carrying no street marker produces.
