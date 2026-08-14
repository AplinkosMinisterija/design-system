---
'@aplinkosministerija/design-system': minor
---

Accessibility: name every field by its own label, tie its error to it, and make `SelectField` keyboard-navigable.

`FieldWrapper` now generates an id (`useId`) and hands it to whichever control renders inside it through a context, so the wiring cannot be forgotten per field:

- `<label for>` ↔ `<input id>` — the visible label now names the control and clicking it focuses the field. It previously rendered `<label>` with no `for`, and put `aria-labelledby` on a wrapper `<div>`, where it does nothing.
- `aria-describedby` points at the error message, so a screen reader announces the error together with the field, not only at the moment it appears.
- `aria-invalid` moves onto the control itself (it was on a wrapper `<div>`).
- Ids come from `useId` instead of the label text, which repeats across a page and carries spaces and diacritics.

`TextFieldInput`: fixed `isCustomPlaceholder`, which treated *every* field without a placeholder as having a custom one — it rendered an empty placeholder div and pointed the input's `aria-labelledby` at it, leaving plain fields with no accessible name at all.

`SelectField` **and `AsyncSelectField`** follow the ARIA combobox pattern (the keyboard state machine is now one shared `useOptionNavigation` hook, so the two cannot drift again — the async one had no navigation at all, and only highlighted the already-selected value): `role="combobox"` with `aria-expanded` / `aria-controls` / `aria-activedescendant`, and the input handles ArrowDown / ArrowUp / Home / End / Enter / Escape. Options are no longer tab stops (`tabIndex={-1}`) — reaching the next field used to mean tabbing through every option one at a time — and the highlighted option scrolls into view. `aria-selected` now marks the chosen option rather than the highlighted one.

New `autoComplete` prop on `TextField`, `PasswordField` and `TextFieldInput` (default `"off"`, as before). It was hardcoded off, so password managers could not offer to fill or save credentials on any form built with these fields.

Fixed the stylesheet export: `exports` published `./styles.css` → `./dist/styles.css`, but the build emits `dist/style.css`, and that same `exports` map blocked the deep `./dist/style.css` path that worked before 2.0.0 — leaving the stylesheet unreachable by any specifier.
