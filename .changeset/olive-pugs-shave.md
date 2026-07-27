---
'@aplinkosministerija/design-system': minor
---

Add `useDebouncedValue` and `useDebouncedCallback` hooks

- `useDebouncedValue(value, delayMs)` — debounce a rapidly-changing value so
  downstream query keys and requests only react once typing settles.
- `useDebouncedCallback(callback, delayMs)` — debounce an async callback so
  only the last call in the window runs. Superseded and post-unmount calls
  resolve to `undefined` instead of rejecting, and the returned function
  exposes `.cancel()`.
