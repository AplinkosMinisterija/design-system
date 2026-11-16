import { searchAddresses } from '../utils/address';
import AsyncSelectField from './AsyncSelectField';

const FREE_TEXT_ID = '__free-text__';

interface AddressOption {
  id: string;
  label: string;
}

export interface AddressPickerTexts {
  noOptions?: string;
  shortQuery?: string;
  freeText?: (input: string) => string;
}

export interface AddressPickerProps {
  name: string;
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  showError?: boolean;
  disabled?: boolean;
  placeholder?: string;
  allowFreeText?: boolean;
  className?: string;
  texts?: AddressPickerTexts;
}

const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_MS = 300;

const AddressPicker = ({
  name,
  label,
  value,
  onChange,
  required,
  error,
  showError,
  disabled,
  placeholder,
  allowFreeText = true,
  className,
  texts,
}: AddressPickerProps) => {
  const freeTextLabel = texts?.freeText ?? ((input: string) => `Naudoti įvestą adresą: „${input}“`);

  const loadOptions = async (input: string): Promise<{ rows: AddressOption[] }> => {
    const query = input.trim();
    // The registry is a third-party call: if it throws, the free-text option is
    // the user's only way out of the field, so it must survive the failure.
    const found = await searchAddresses(query).catch(() => [] as string[]);
    const rows = found.map((text) => ({ id: text, label: text }));

    if (allowFreeText && query && !found.includes(query)) {
      rows.push({ id: FREE_TEXT_ID, label: query });
    }

    return { rows };
  };

  return (
    <AsyncSelectField<AddressOption>
      name={name}
      label={label}
      className={className}
      required={required}
      error={error}
      showError={showError}
      disabled={disabled}
      placeholder={placeholder}
      value={value ? { id: value, label: value } : undefined}
      onChange={(option) => onChange(option?.label ?? '')}
      loadOptions={loadOptions}
      getOptionLabel={(option) => option.label}
      getOptionComponent={(option) =>
        option.id === FREE_TEXT_ID ? freeTextLabel(option.label) : option.label
      }
      minQueryLength={MIN_QUERY_LENGTH}
      debounceMs={DEBOUNCE_MS}
      handleGetNextPageParam={() => undefined}
      optionsKey="rows"
      texts={{
        noOptions: texts?.noOptions ?? 'Adresas nerastas',
        shortQuery: texts?.shortQuery ?? `Įveskite bent ${MIN_QUERY_LENGTH} simbolius`,
      }}
    />
  );
};

export default AddressPicker;
