---
'@aplinkosministerija/design-system': patch
---

useStorage: guard JSON.parse against corrupt storage values ("undefined", empty or malformed JSON) — they now fall back to initialValue instead of throwing inside render. setValue(undefined) removes the key instead of persisting the literal string "undefined".
