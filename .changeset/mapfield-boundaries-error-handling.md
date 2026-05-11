---
'@aplinkosministerija/design-system': patch
---

fix: MapField no longer silently drops geometry when the boundaries
municipality lookup fails (e.g. PostGIS rejects an invalid polygon, 5xx,
network error). The user's geometry is still applied and the form can
submit; the error is logged so it remains diagnosable.
