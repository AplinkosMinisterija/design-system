---
'@aplinkosministerija/design-system': minor
---

Rework `Checkbox` visuals and accessibility

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
