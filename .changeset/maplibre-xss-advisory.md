---
'@aplinkosministerija/design-system': minor
---

Bump maplibre-gl to ^6.4.1, which patches GHSA-jrc7-96c5-q579 (critical XSS: a
sanitizer bypass in `DOM.sanitize()`).

MapLibre is bundled into `dist/`, not imported from it, so a consumer could not
work around this with a `resolutions` override — the vulnerable copy shipped
inside the library either way. Every app that depends on the design system fails
`yarn audit` on critical until this is released.

MapLibre 6 types `map.on()` against a closed set of event names, so the
`draw.*` events that `@mapbox/mapbox-gl-draw` fires on the map go through one
narrow helper now instead of four untyped calls.
