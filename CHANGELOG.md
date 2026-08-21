# @aplinkosministerija/design-system

## 3.1.2

### Patch Changes

- e51fe41: Fix a mobile table row that is focusable but cannot be activated from the keyboard

  `MobileTable` gave every row `tabIndex={0}` and `onKeyDown={handleKeyDown}` — the
  curried handler itself, not the handler for that row. React therefore called it
  with the EVENT, `useKeyAction` read the event as the item, and the action ran with
  no argument at all: Enter on a focused row did nothing, on any table, in every
  consuming app, while `tabIndex` advertised the row as interactive (WCAG 2.1.1 —
  these are government apps, so AA is a legal requirement). `DesktopTable` has
  always passed `handleKeyDown(row)`; the mobile twin now does the same.

  The reason it went unnoticed for so long is the hook's own heuristic: it decided
  "is this the event, or the item?" by asking whether the argument is an object with
  a `key` property. A KeyboardEvent has one — and so does any data row with a `key`
  column, which would have silently killed keyboard activation in `DesktopTable`
  too. `useKeyAction` now identifies a real event (a `key` AND a callable
  `preventDefault`), so passing the handler the wrong way can no longer read as the
  right way.

  Two more in the same rows:

  - A row is focusable only when the table actually has an `onClick`. A focus stop
    that does nothing is worse than no focus stop, and `DesktopTable` already
    gated it.
  - Expanding a row logged `Each child in a list should have a unique "key" prop`
    in every consumer: the `key` sat on the inner container while the fragment the
    `map` returned had none.

  `RecursiveRow` has the same missing key on its nested-children `map`; left alone
  here because it is a different component with its own render path — worth a
  follow-up.

## 3.1.1

### Patch Changes

- 2d47b38: Fix `useStorage` re-rendering forever when its fallback is an object or an array

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

- ebf1fde: Fix the render and refetch loops caused by unstable effect dependencies

  `useSelectData` mirrored `options` into state and re-synced it from an effect
  that listed `options` itself as a dependency. `SelectField` handed it
  `options || []` — a new array on every one of its own renders whenever the
  caller omits the prop or builds it inline — so the effect re-ran, set state, and
  re-rendered. Measured on a bare `<SelectField onChange={…} />`: quiet on mount,
  then **1807 renders in 1.5 s** with 183 × "Maximum update depth exceeded" as
  soon as anything renders it a second time (a keystroke, a parent update). The
  list is now derived during render, so there is no state to feed back.

  The same hook re-armed `refreshOptions` on every render: `handleSetOptions`
  depended on it, callers write it inline (`refreshOptions={(id) => load(id)}`),
  and the refresh itself writes the fetched options into the caller's state, which
  renders again. With `dependantId` set that fetched forever — 51 requests before
  the repro's own guard stopped it; now one. `refreshOptions` and `onChange` are
  read through refs, as `useStorage` already does.

  The clear-value branch in that hook read `value?.id`, which is always undefined
  for the multi-selects — they pass their whole value array. So with `dependantId`
  it fired on every render, and `MultiSelectField`'s `onChange` appended the
  resulting `null` to the value list until the component crashed on
  `Cannot read properties of null (reading 'id')`. It now skips array values, and
  skips an empty value entirely instead of calling `onChange(null)` when there was
  never anything to clear.

  Also derived rather than synced through an effect, each of which cost a render
  per prop change: the applied-filter tags in `DynamicFilter` (which were also
  missing from the first render), the selected-id set in `Table`, and the disabled
  flags in `TreeSelectField` (which reached antd one render late, after the tree
  had already been handed over). `MobileTable` keeps its reset but bails out when
  no row is expanded. `Map` memoises its styles — `getMapStyles` returned a new
  array on every render, and as a dependency that re-ran `fitBounds` on every
  render, so with `zoomOnChange` the map snapped back whenever anything above it
  re-rendered — and registers the pmtiles protocol once per module instead of once
  per render.

  Two behaviour changes fall out of dropping the mirrored list: after picking an
  option the dropdown shows all options again instead of staying filtered by the
  text that was typed before, and when options arrive asynchronously the typed
  filter is now applied to them instead of being dropped.

## 3.1.0

### Minor Changes

- f0f4cf2: Rework `Checkbox` visuals and accessibility

  - The box is now a single bordered element (1.5px border + white fill) instead of a
    filled grey square with a white square on top, so corner radii match and the
    unchecked state reads as an outline. Radius follows `theme.radius.checkbox`,
    falling back to `theme.radius.fields`.
  - Checkmark and intermediate dash are drawn as a centred SVG with rounded caps,
    replacing the rotated CSS box that rendered off-centre in `#fcfff4`.
  - Added hover, `:focus-visible` ring and colour transitions. `error` now paints a
    danger border (and a danger fill when checked) instead of a solid red square.
  - Disabled state is dimmed once (0.48) instead of twice (0.23).
  - `displayAsButton` shows its checked state again — `ButtonContainer` styles it from
    `$checked`, which was never passed after the component was split in two.
  - `variant` is back on `CheckboxProps` and forwarded by `ButtonMultiSelect`. Splitting
    the component dropped it without a changeset, which pinned every button-style
    checkbox to the `primary` variant — and `primary` defines `checked` as its own
    `background`, so a selected `ButtonMultiSelect` option looked unselected.
  - Accessibility: the mixed state is exposed through the native `indeterminate`
    property, `aria-describedby` points at the description element, and the input stays
    focusable in `displayAsButton` mode (it was `visibility: hidden`, so keyboard users
    could not reach it).
  - The label picks up `theme.colors.fields.label` and the description is set apart
    with the same treatment as other field helper text.

## 3.0.1

### Patch Changes

- b842ec1: The date and time fields hint at their format instead of showing a plausible value.

  `DatePicker` and `DateField` defaulted their placeholder to `2001-01-01`, and `TimeField` to `12:00`. Both are well-formed values, not format hints — in a long form a greyed `2001-01-01` reads as a date the field already holds, and the applicant scrolls past a field they still have to fill. They are now `yyyy-mm-dd` and `hh:mm`, which cannot be mistaken for an entry.

  Only two consumers pass `placeHolder` today — `biip-alis-web` and `biip-alis-admin-web`, both passing exactly this mask through a wrapper written to work around the default. Anything that passes its own placeholder is unaffected.

  `PhoneField`'s `060000000` is deliberately left alone: a sample number genuinely shows the expected shape, and there is no equally readable mask for it.

## 3.0.0

### Major Changes

- 8c48979: **Breaking (DOM contract).** Accessibility: name every field by its own label, tie its error to it, and make `SelectField` keyboard-navigable.

  `FieldWrapper` now generates an id (`useId`) and hands it to whichever control renders inside it through a context, so the wiring cannot be forgotten per field:

  - `<label for>` ↔ `<input id>` — the visible label now names the control and clicking it focuses the field. It previously rendered `<label>` with no `for`, and put `aria-labelledby` on a wrapper `<div>`, where it does nothing.
  - `aria-describedby` points at the error message, so a screen reader announces the error together with the field, not only at the moment it appears.
  - `aria-invalid` moves onto the control itself (it was on a wrapper `<div>`).
  - Ids come from `useId` instead of the label text, which repeats across a page and carries spaces and diacritics.

  `TextFieldInput`: fixed `isCustomPlaceholder`, which treated _every_ field without a placeholder as having a custom one — it rendered an empty placeholder div and pointed the input's `aria-labelledby` at it, leaving plain fields with no accessible name at all.

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

## 2.1.0

### Minor Changes

- 49d99db: Add expand/collapse-all button to MobileTable header, consolidate expand button components, improve event handling

  - Add header expand-all/collapse-all button in MobileTable (new user-facing feature)
  - Extract expand button logic into reusable ExpandButton component with Enter+Space keyboard support
  - Move styled-components to separate MobileTable.styles.ts file
  - Fix expandedRowIds state to reset when table data changes (prevents stale expanded state across pagination)
  - Fix allRowsExpanded logic to check membership instead of size (correct behavior with pagination)
  - Remove customPageName prop from MobileTableProps

## 2.0.0

### Major Changes

- 9828c3f: Update react and react dom to 19 and react-router to 8.3

## 1.6.0

### Minor Changes

- 9b87ffd: Form fields: add `required` prop (renders a danger-colored " \*" mark after the label, visual only — validation stays with the consumer) to FieldWrapper and all label-carrying fields (TextField, TextAreaField, NumericField, PasswordField, PhoneField, SelectField, SimpleSelect, MultiSelectField, AsyncSelectField, AsyncMultiSelectField, CreatableMultiSelect, RadioOptions, DatePicker, DateField, TimePicker, TimeField).

  SelectField: add `getOptionValue` — when provided, `value` may be the option's primitive value (e.g. its id) and the selected option is resolved internally, so consumers no longer need to keep the whole option object in state.

## 1.5.0

### Minor Changes

- 12c7f95: Add `useDebouncedValue` and `useDebouncedCallback` hooks

  - `useDebouncedValue(value, delayMs)` — debounce a rapidly-changing value so
    downstream query keys and requests only react once typing settles.
  - `useDebouncedCallback(callback, delayMs)` — debounce an async callback so
    only the last call in the window runs. Superseded and post-unmount calls
    resolve to `undefined` instead of rejecting, and the returned function
    exposes `.cancel()`.

## 1.4.9

### Patch Changes

- 0ed8f44: useStorage: guard JSON.parse against corrupt storage values ("undefined", empty or malformed JSON) — they now fall back to initialValue instead of throwing inside render. setValue(undefined) removes the key instead of persisting the literal string "undefined".

## 1.4.8

### Patch Changes

- 3b13f47: Persist table `pageSize` selection in `localStorage` per page + table. The storage key is `tablePageSize_<pathname>_<pageName>`, so each route (and each table on it, by `pageName`) keeps its own remembered choice across sessions. URL behavior is unchanged — `pageSize` is still mirrored to search params, so existing data-fetching code keeps working without any changes.

  No migration needed — bump the lib version and existing tables automatically gain persistence.

## 1.4.7

### Patch Changes

- 9c8e899: fix: MapField no longer silently drops geometry when the boundaries
  municipality lookup fails (e.g. PostGIS rejects an invalid polygon, 5xx,
  network error). The user's geometry is still applied and the form can
  submit; the error is logged so it remains diagnosable.

## 1.4.6

### Patch Changes

- 940d56b: undo workflow

## 1.4.5

### Patch Changes

- 17c5629: update workflow

## 1.4.4

### Patch Changes

- ba7a41d: update

## 1.4.3

### Patch Changes

- 376d282: update workflow

## 1.4.2

### Patch Changes

- d33854f: update publish workflow

## 1.4.1

### Patch Changes

- f261a5b: update package json

## 1.4.0

### Minor Changes

- dddcbf7: submit filter form on enter

## 1.3.16

### Patch Changes

- 4ca01bf: undo accessibility changes

## 1.3.15

### Patch Changes

- 73e619b: map geometry must be in the territory of lithuania

## 1.3.14

### Patch Changes

- 0a5e0d6: update interface type

## 1.3.13

### Patch Changes

- c389fd6: update interface type

## 1.3.12

### Patch Changes

- 8aceb58: mapfield descritpions

## 1.3.11

### Patch Changes

- 1f54a9f: fix async field

## 1.3.10

### Patch Changes

- e0a6c5b: refactor fields

## 1.3.9

### Patch Changes

- ba73f6b: fix minor accessibility bugs

## 1.3.8

### Patch Changes

- ad04c66: mapfield undefined dix

## 1.3.7

### Patch Changes

- 6d2c712: update accesibility
- 5045e70: update accesibility

## 1.3.6

### Patch Changes

- 1f32194: improve filter and table accessibility

## 1.3.5

### Patch Changes

- 203c589: result count default value

## 1.3.4

### Patch Changes

- 1ad76b4: update tab indexes

## 1.3.3

### Patch Changes

- 6b640b3: update default values

## 1.3.2

### Patch Changes

- 2705a7c: update datepicker accessibility

## 1.3.1

### Patch Changes

- 3b24e52: return back options container default value

## 1.3.0

### Minor Changes

- 03d479e: accesibility updates

## 1.2.43

### Patch Changes

- 51fec28: add onBlur event handler to layerToggleControl

## 1.2.42

### Patch Changes

- 0b3b3c8: fixed mobile table hooks and page size dropdown

## 1.2.41

### Patch Changes

- 79bd8a9: Applied on Map component onLayerToggle controlled + callback pattern

## 1.2.40

### Patch Changes

- 75d8d20: updated page size dropdown style

## 1.2.39

### Patch Changes

- 76832c9: Fixed on fullscreen layers toggle panel visibility and position when opened

## 1.2.38

### Patch Changes

- d2a2d9d: Added Map layer toggle control and switch size control

## 1.2.37

### Patch Changes

- 312a912: added date and time fields

## 1.2.36

### Patch Changes

- 0db8cf5: wrap field label to the next line

## 1.2.35

### Patch Changes

- 3c97edd: allow re-selection of recently removed file, added style on dragging

## 1.2.34

### Patch Changes

- 21b50af: group multiselect filter options in one tag

## 1.2.33

### Patch Changes

- 7c43936: showPages prop added to table

## 1.2.32

### Patch Changes

- 57fb4c7: added option label function on multiselect filter

## 1.2.31

### Patch Changes

- 8941328: disable specific checkbox in table

## 1.2.30

### Patch Changes

- 9bf2262: disable sort specific column

## 1.2.29

### Patch Changes

- 591a97f: added loader on table

## 1.2.28

### Patch Changes

- d510007: added table sortBy key

## 1.2.27

### Patch Changes

- 8c40b2e: added recursive table sort

## 1.2.26

### Patch Changes

- cf1c4d5: fix ButtonsGroup height and padding

## 1.2.25

### Patch Changes

- 36d091a: update numeric text field to return string default

## 1.2.24

### Patch Changes

- b70ea8e: Preview page build

## 1.2.23

### Patch Changes

- a40d6a5: Prepare script added

## 1.2.22

### Patch Changes

- 7ac7be6: Changeset deploy
