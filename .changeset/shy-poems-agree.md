---
'@aplinkosministerija/design-system': minor
---

Buttons and required fields now describe themselves correctly to screen readers.

- `Button` uses its `label` prop as the accessible name when one is given. Passing `label` together with an element child announced `[object Object]`; a string child silently won over `label`. Without `label` the name is unchanged.
- A caller's own `aria-label` / `aria-labelledby` on a `Button` is now used instead of being overwritten. The redundant `role="button"` and `tabIndex` are no longer forced onto the native button, so callers can set their own.
- `RadioOptions` no longer forwards its layout flags to the DOM, which removes the React attribute warnings (`first`, `column`, `oneLine`) logged on every page that renders one. Its `oneLine` and `column` props are unchanged.
- Every field that draws the `*` required mark — `TextField`, `TextAreaField`, `SelectField`, `MultiSelectField`, `NumericField`, `PasswordField`, `PhoneField`, the date/time fields, `RadioOptions` and anything else built on `FieldWrapper` — now sets `aria-required` on its control, so a screen reader announces the field as required.
