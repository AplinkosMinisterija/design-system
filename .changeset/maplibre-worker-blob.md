---
'@aplinkosministerija/design-system': patch
---

Fix maps never loading in apps since 3.4.0. MapLibre 6 loads its web worker from
`maplibre-gl-worker.mjs` next to the module that imported it; bundled into this
library and then into an app, that resolves to a file that does not exist
(`/assets/maplibre-gl-worker.mjs`, 404), and the map waits forever. The worker is now
bundled into the library and started from a Blob URL, as MapLibre 4 did. Apps need no
change.
