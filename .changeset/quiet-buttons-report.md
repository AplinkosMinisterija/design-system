---
'@aplinkosministerija/design-system': minor
---

feat(tables): report the mobile expand/collapse-all choice

`Table` takes `onDefaultExpandedChange`, called with the new value when the
user hits expand/collapse-all on the narrow layout. Supply it together with
`defaultExpanded` and the caller owns that baseline, so the choice can be
stored and survive a reload; leave it out and the table keeps the choice
itself, exactly as before.

Reaching for the bulk control clears the per-row exceptions, which is what
the user is asking for by using it.
