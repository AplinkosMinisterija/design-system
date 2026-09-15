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

/**
 * Is the text in a numeric field already a spelling of the number the parent
 * holds?
 *
 * `'574.'` and `'1.50'` are what a half-typed number looks like while the
 * parent holds 574 and 1.5 — comparing numerically is what keeps the field
 * from rewriting itself under the cursor. `NaN` (a lone `-` or `.`) counts as
 * still-typing for the same reason.
 */
export const isSameNumber = (input: string, value?: string | number): boolean => {
  const typed = input === '' ? null : Number(input);
  if (typed !== null && Number.isNaN(typed)) return true;
  const given = value === '' || value === undefined || value === null ? null : Number(value);
  return typed === given;
};
