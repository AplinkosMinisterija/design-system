---
'@aplinkosministerija/design-system': patch
---

`AddressPicker` answers in well under a second, and finds addresses it used to miss.

The registry indexes addresses by street and residential-area **code**, not by the joined
name, so every search so far was a scan of 1.1M rows: measured against the live service,
a street-and-town query took 1.3–2.9s. The picker now resolves the typed name to codes
first (cursor-paginated, capped at 500, cached for a day) and filters the addresses by
those — the same rows in 0.37–0.88s. A name that resolves to too many codes falls back to
the old name filter, so nothing becomes unfindable; a name that resolves to none drops its
branch instead of widening to another entity's rows.

A query with no street marker is now sent as two requests rather than one OR'ed filter —
the registry sorts a union of two filters without an index and pays 3.4s for it, where
each branch alone answers in 0.4s — and it asks for the locality in the genitive, so a
bare `Jurbarkas` finally lists addresses in Jurbarkas.

Also from measuring the live registry:

- The house number matches by prefix, so the list is useful while the number is still
  being typed. Results are sorted by house number instead of internal code order.
- Street markers now cover the forms people actually type: spelled out (`prospektas`),
  without the full stop (`Dubysos g 6`), and `a.`, `tak.`, `pl.`, `kel.`, `skg.`. The
  marker is normalised to the registry's abbreviation, and the `A.` of `A. Jakšto g.`
  still stays part of the street name.
- `%` and `_` reach the registry's matcher as wildcards, where they match every row. A
  name is stripped of them and must still carry three characters to be searched.
- Results are ordered town before village, and one address per place before a second from
  the same place, so a name shared by many places shows where it exists.

Every async select — not only the address one — now keeps its rows on screen while the
next keystroke is searched, instead of emptying the list between them.

`addressSearchFilters` takes an optional second argument of resolved codes and returns one
entry per request to send. `rankAddresses` and `clearAddressCodeCache` are exported.
