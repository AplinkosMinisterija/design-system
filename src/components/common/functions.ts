import { toast } from 'react-toastify';
import { ServerErrors, ValidationMessages } from '../../types';

export const getFilteredOptions = (
  options: any[],
  input: string,
  getOptionLabel: (option: any) => string,
) =>
  options?.filter((option) => {
    const label = getOptionLabel(option)?.toString().toLowerCase();
    return label?.includes(input.toLowerCase());
  });

export const filterSelectedOptions = (
  suggestions: any[],
  values: any[],
  getOptionValue: (value: string) => string,
) =>
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
