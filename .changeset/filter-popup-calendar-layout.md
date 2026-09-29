---
'@aplinkosministerija/design-system': minor
---

DynamicFilter / DatePicker layout fixes:

- `DatePicker` sets its own calendar cell size (1.7rem). The day margins were sized for react-datepicker 6's cells; an app that also loads a newer react-datepicker stylesheet (v9 cells are 2.125em) had Saturday and Sunday spill out of the calendar.
- `Popup` takes an optional `maxWidth` (default `440px`, unchanged). `DynamicFilter` uses `640px`, with single fields 560px wide, so multiselect chips fit on one line on desktop.
- Stacked filter rows on mobile no longer keep the first field's right padding, so both date fields are equally wide.
