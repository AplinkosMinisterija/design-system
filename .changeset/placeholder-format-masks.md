---
'@aplinkosministerija/design-system': patch
---

The date and time fields hint at their format instead of showing a plausible value.

`DatePicker` and `DateField` defaulted their placeholder to `2001-01-01`, and `TimeField` to `12:00`. Both are well-formed values, not format hints — in a long form a greyed `2001-01-01` reads as a date the field already holds, and the applicant scrolls past a field they still have to fill. They are now `yyyy-mm-dd` and `hh:mm`, which cannot be mistaken for an entry.

Only two consumers pass `placeHolder` today — `biip-alis-web` and `biip-alis-admin-web`, both passing exactly this mask through a wrapper written to work around the default. Anything that passes its own placeholder is unaffected.

`PhoneField`'s `060000000` is deliberately left alone: a sample number genuinely shows the expected shape, and there is no equally readable mask for it.
