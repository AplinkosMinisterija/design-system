---
'@aplinkosministerija/design-system': patch
---

Persist table `pageSize` selection in `localStorage` per page + table. The storage key is `tablePageSize_<pathname>_<pageName>`, so each route (and each table on it, by `pageName`) keeps its own remembered choice across sessions. URL behavior is unchanged — `pageSize` is still mirrored to search params, so existing data-fetching code keeps working without any changes.

No migration needed — bump the lib version and existing tables automatically gain persistence.
