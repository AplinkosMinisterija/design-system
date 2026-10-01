---
'@aplinkosministerija/design-system': minor
---

fix(a11y): fields show focus, wrappers leave the tab order, dialogs get names, pagination becomes a real list

Found by an axe pass over the ALIS portals, which use the default theme:

- **Every field shows keyboard focus.** `TextFieldInput`, `TextAreaField`,
  `MultiTextFieldInput` and `TreeSelectField` only drew a focus border and ring when
  the theme set `colors.fields.borderFocus`; without it the focused field looked
  exactly like the others. The fallback is now `colors.primary`.
- **`TextAreaField`'s label points at its textarea.** `FieldWrapper` only wrote
  `<label for>` for a control that claimed the id through `FieldControlContext`,
  and the textarea never did. An explicit `htmlFor` now counts as the claim.
- **No positive `tabIndex` left.** The calendar/time popovers (`DateField`,
  `TimeField`), the `TimePicker` wrapper and the table's page-size dropdown carried
  `tabIndex={1}`, which put them FIRST in the whole page's tab order. Popover and
  wrapper containers are `-1` (focusable for their blur logic, not tab stops);
  the page-size control is a real `<button>` with `aria-expanded`, and its options
  are buttons with `aria-pressed`.
- **Dialogs are named.** `Modal` took `role="dialog" aria-label="Modal"` on the
  backdrop even when `Popup` rendered its own named dialog inside — two dialogs,
  one called "Modal". `Modal` is a dialog only when given `ariaLabel` /
  `ariaLabelledby` (MobileMenu passes "Meniu"); otherwise it is the backdrop
  (`role="presentation"`). `Popup`'s close control is labelled by a new
  `closeLabel` prop (default "Užverti") instead of "Close popup".
- **Pagination is `nav > ul > li > button`.** `react-paginate` hard-codes
  `<ul role="navigation">`, so the list had no list semantics and its `<li>`
  children sat outside any list. A small `Pagination` component replaces it and
  the dependency is gone. The class names (`pagination`, `page-item`, `page-link`,
  `active`, `disabled`) are the same, so style overrides keep matching; the page
  controls are `<button>`s (were `<a role="button">`), labelled in Lithuanian.

**Consumers' tests that queried the old English names change with this:**
`getByRole('button', { name: 'Page 2' })` → `'2 puslapis'`; `'Previous page'` /
`'Next page'` → `'Ankstesnis puslapis'` / `'Kitas puslapis'`; the popup's
`/Close/i` → `'Užverti'` (or whatever `closeLabel` the app passes).
