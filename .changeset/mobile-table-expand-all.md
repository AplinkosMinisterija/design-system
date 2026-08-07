---
"@aplinkosministerija/design-system": minor
---

Add expand/collapse-all button to MobileTable header, consolidate expand button components, improve event handling

- Add header expand-all/collapse-all button in MobileTable (new user-facing feature)
- Extract expand button logic into reusable ExpandButton component with Enter+Space keyboard support
- Move styled-components to separate MobileTable.styles.ts file
- Fix expandedRowIds state to reset when table data changes (prevents stale expanded state across pagination)
- Fix allRowsExpanded logic to check membership instead of size (correct behavior with pagination)
- Remove customPageName prop from MobileTableProps
