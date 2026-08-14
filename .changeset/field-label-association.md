---
'@aplinkosministerija/design-system': major
---

**Breaking (DOM contract).** Accessibility: name every field by its own label, tie its error to it, and make `SelectField` keyboard-navigable.

`FieldWrapper` now generates an id (`useId`) and hands it to whichever control renders inside it through a context, so the wiring cannot be forgotten per field:

- `<label for>` ↔ `<input id>` — the visible label now names the control and clicking it focuses the field. It previously rendered `<label>` with no `for`, and put `aria-labelledby` on a wrapper `<div>`, where it does nothing.
- `aria-describedby` points at the error message, so a screen reader announces the error together with the field, not only at the moment it appears.
- `aria-invalid` moves onto the control itself (it was on a wrapper `<div>`).
- Ids come from `useId` instead of the label text, which repeats across a page and carries spaces and diacritics.

`TextFieldInput`: fixed `isCustomPlaceholder`, which treated *every* field without a placeholder as having a custom one — it rendered an empty placeholder div and pointed the input's `aria-labelledby` at it, leaving plain fields with no accessible name at all.

**Every** select follows the ARIA combobox pattern — `SelectField`, `SimpleSelect`, `MultiSelectField`, `AsyncSelectField`, `AsyncMultiSelectField`, `CombinedField`'s unit picker and `ProfileSelector` (one shared `useOptionNavigation` hook, so they cannot drift apart again — only the plain select had any navigation, the async one merely highlighted the already-selected value, and `CombinedField`'s unit picker and `ProfileSelector` were plain `div`s that could not be focused at all): `role="combobox"` with `aria-expanded` / `aria-controls` / `aria-activedescendant`, and the input handles ArrowDown / ArrowUp / Enter / Escape. (Not Home/End — these inputs are editable, and moving the caret to the start of what you typed has to keep working.) Options are no longer tab stops (`tabIndex={-1}`) — reaching the next field used to mean tabbing through every option one at a time — and the highlighted option scrolls into view. `aria-selected` now marks the chosen option rather than the highlighted one.

New `autoComplete` prop on `TextField`, `PasswordField` and `TextFieldInput` (default `"off"`, as before). It was hardcoded off, so password managers could not offer to fill or save credentials on any form built with these fields.

Fixed the stylesheet export: `exports` published `./styles.css` → `./dist/styles.css`, but the build emits `dist/style.css`, and that same `exports` map blocked the deep `./dist/style.css` path that worked before 2.0.0 — leaving the stylesheet unreachable by any specifier.

`ProfileSelector` also loses its `tabIndex={1}`: a positive tab index pulls the whole page's tab order to it before anything else.

`MultiTextFieldInput` takes its id from `FieldWrapper` like the single-value input does, so multi-selects are named by their label too. Its wrapper no longer defaults to `role="combobox"` — that nested a second combobox around the real one, and assistive tech landed on the wrapper.

### Breaking changes

The rendered DOM changed for every field. Nothing in the public props was removed, but selectors and queries that depended on the old markup need updating:

- **Input and option ids are no longer derived from the label text.** `<input id="Vardas">` becomes a `useId()` value. Anything selecting `[id="<label>"]` breaks — notably `biip-zuvinimas-web/tests/e2e/helpers/fields.ts` and its two inline call sites. Query by label or role instead; the label association this release adds is what makes that possible.
- **Select inputs are `role="combobox"`, not `textbox`.** Negative assertions such as `getByRole('textbox')).toHaveCount(0)` will now match differently.
- **`MultiTextFieldInput`'s wrapper no longer defaults to `role="combobox"`** — the real combobox is the input inside it, and two nested comboboxes meant assistive tech landed on the wrapper. It is exported as `MultiTextField`.
- **The accessible name no longer comes from the placeholder.** Tests reading a select's chosen value out of `placeholder` still work, but the name is now the label.
- **`aria-selected` marks the chosen option**, not the highlighted one; the highlighted one is `aria-activedescendant`.
- **Options are no longer tab stops.**
- `CheckBox` no longer renders a second `role="checkbox"` element around the native input — it was an unnamed duplicate tab stop.

- **`AsyncSelectField`'s `getOptionId` prop is removed.** Option ids now come from the list's own id and the option's position, which is unique on a page without help, so the prop had nothing left to do. Passing it is a type error rather than a silent no-op — `biip-rusys-web/src/pages/ObservationForm/index.tsx` is the one consumer that does; deleting the line is the whole migration.
