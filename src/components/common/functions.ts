import { toast } from 'react-toastify';
import { JSX } from 'react';
import { ServerErrors, ValidationMessages } from '../../types';

export const getFilteredOptions = <T>(
  options: T[],
  input: string,
  getOptionLabel: (option: T) => string | JSX.Element,
): T[] =>
  options?.filter((option) => {
    const label = getOptionLabel(option)?.toString().toLowerCase();
    return label?.includes(input.toLowerCase());
  });

export const filterSelectedOptions = <T>(
  suggestions: T[],
  values: T[],
  getOptionValue: (value: T) => string,
): T[] =>
  suggestions.filter(
    (opt) => !values?.some((value) => getOptionValue(value) === getOptionValue(opt)),
  );

export const handleRemove = (index: number, onChange: (values: any[]) => void, values: any[]) => {
  if (!values?.length) return;

  onChange([...values.slice(0, index), ...values.slice(index + 1)]);
};

export const handleError = (
  serverErrors: ServerErrors,
  validationMessages: ValidationMessages,
  responseError?: string,
) => {
  const error = responseError
    ? serverErrors[responseError] || validationMessages.error
    : validationMessages.error;
  toast.error(error, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
  });
};

/** A number still being typed: `-`, `0.`, `1,` — no digits after the separator yet. */
const HALF_TYPED = /^-?\d*[.,]?$/;

/**
 * The text a numeric field may hold for `value`. Empty for anything that could
 * not have been typed into it — without this, `NaN` and `Infinity` are written
 * in as literal words, and the field's own input regex then rejects every
 * keystroke that follows, leaving it effectively read-only.
 */
export const numericFieldText = (value?: string | number): string => {
  if (value === '' || value === undefined || value === null) return '';
  return Number.isFinite(Number(value)) ? String(value) : '';
};

/**
 * Is the text in a numeric field already a spelling of the number the parent
 * holds? `'574.'` and `'1.50'` mean 574 and 1.5, so comparing numerically is
 * what keeps the field from rewriting them under the cursor.
 */
export const isSameNumber = (input: string, value?: string | number): boolean => {
  const given = value === '' || value === undefined || value === null ? null : Number(value);
  if (input === '') return given === null;

  const typed = Number(input);
  // `-`, `0.`, `1,`: a number being typed, which `Number` cannot compare. Keep
  // it only while the parent holds nothing — that is our own `onChange(undefined)`
  // coming back. A parent holding a real number is a prefill, and it wins.
  if (Number.isNaN(typed)) return given === null && HALF_TYPED.test(input);
  return typed === given;
};
