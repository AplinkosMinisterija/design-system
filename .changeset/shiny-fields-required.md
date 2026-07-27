---
'@aplinkosministerija/design-system': minor
---

Form fields: add `required` prop (renders a danger-colored " \*" mark after the label, visual only — validation stays with the consumer) to FieldWrapper and all label-carrying fields (TextField, TextAreaField, NumericField, PasswordField, PhoneField, SelectField, SimpleSelect, MultiSelectField, AsyncSelectField, AsyncMultiSelectField, CreatableMultiSelect, RadioOptions, DatePicker, DateField, TimePicker, TimeField).

SelectField: add `getOptionValue` — when provided, `value` may be the option's primitive value (e.g. its id) and the selected option is resolved internally, so consumers no longer need to keep the whole option object in state.
