---
'@aplinkosministerija/design-system': minor
---

Persist table `pageSize` in `localStorage` instead of the URL. `TableContainer` no longer writes `pageSize` to search params and reads the current value from `localStorage` (key: `tablePageSize_<pageName>`, default `10`). Adds a new `useTablePageSize(pageName?)` hook so consumers can read the current page size for data fetching and stay in sync across instances (same-tab via custom event, cross-tab via `storage`).

Migration: replace any `searchParams.get('pageSize')` reads with the new hook.
