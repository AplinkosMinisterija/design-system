---
'@aplinkosministerija/design-system': patch
---

Fix `useStorage` re-rendering forever when its fallback is an object or an array

Both effects listed `initialValue` as a dependency and set state unconditionally.
Callers write that fallback inline — `useStorage(key, {}, true)` is the shape in
every consuming app — which is a new reference on every render, so the effects
re-ran on every render, set state, and re-rendered: an infinite loop.

It presents as a frozen page rather than an error. There is no console message,
no network activity and no URL change; the screen simply rebuilds itself
hundreds of times a second, so a click released on a row lands on a node that is
already gone. Measured on a consuming app: ~30 000 DOM mutations in 1.5 s.

The fallback now goes through a ref, so it stays current without being a
dependency. A primitive fallback was always immune (it compares by value), which
is why only object and array fallbacks ever showed the symptom.

Introduced in 2.0.0 — 1.x kept these effects on `[]` and `[key]`. Apps still on
1.x are unaffected today, but every `useStorage(key, {}, …)` call site in them
would have hit this on upgrade.

Note the one behaviour change: with `persistent: false`, state no longer re-syncs
when the fallback's identity changes, only when `persistent` itself flips. No
consumer passes `persistent: false`, and the previous "behaviour" in that path
was the loop.
