---
'@aplinkosministerija/design-system': minor
---

Add `AddressPicker`: an address field whose options come from the national boundaries
registry, with an explicit free-text fallback for addresses the registry does not hold.
It stores the formatted text and nothing else, so a consumer needs no API, database or
PDF change to adopt it. `parseAddressQuery`, `formatBoundariesAddress` and
`addressSearchFilters` are exported alongside it for callers that need the query itself.

`AsyncSelectField` gains three options, all additive and off by default:

- `debounceMs` — wait this long after the last keystroke before querying. The query key
  is the input, so `0` (the default, and what every existing select keeps) sends one
  request per character.
- `inputOption` — an option built from the live input, offered without waiting for the
  query and committed if the user leaves the field. A select whose typed text is itself
  a valid answer no longer discards it on blur.
- `autoComplete` — passed through to the input, so browser autofill works on a field
  that has a matching autofill token.

Two fixes for every async select: a search that fails or times out is no longer served
from cache as "nothing found" for the consumer's `staleTime`, and clearing a value keeps
focus on the field instead of dropping it on `<body>`. `OptionContainerTexts` gains
`searching`, announced while a query is in flight so an unfinished search is not
reported as an empty one.
