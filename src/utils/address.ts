import type { Address, AddressesSearchFilterRequest } from './boundaries';
import { addressesSearch } from './boundaries/services.gen';

const DEFAULT_SIZE = 10;
const DEFAULT_TIMEOUT_MS = 12000;
const TIMED_OUT = Symbol('timed-out');

export interface AddressQuery {
  text: string;
  number?: string;
}

export const parseAddressQuery = (input: string): AddressQuery => {
  const tokens = input.trim().split(/\s+/).filter(Boolean);
  const last = tokens[tokens.length - 1];

  if (tokens.length > 1 && last && /^\d/.test(last)) {
    return { text: tokens.slice(0, -1).join(' '), number: last };
  }

  return { text: tokens.join(' ') };
};

export const formatBoundariesAddress = (address: Address): string => {
  const locality = address.residential_area?.name;
  const head = address.street?.full_name ?? locality;
  const block = address.building_block_number ? ` k. ${address.building_block_number}` : '';

  return [
    [head, `${address.plot_or_building_number}${block}`].filter(Boolean).join(' '),
    address.street ? locality : undefined,
    address.municipality?.name,
    address.postal_code,
  ]
    .filter(Boolean)
    .join(', ');
};

export const addressSearchFilters = (query: AddressQuery): AddressesSearchFilterRequest[] => {
  const number = query.number
    ? { addresses: { plot_or_building_number: { exact: query.number } } }
    : {};

  return [
    { streets: { full_name: { contains: query.text } }, ...number },
    { residential_areas: { name: { contains: query.text } }, ...number },
  ];
};

export const searchAddresses = async (
  input: string,
  size = DEFAULT_SIZE,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<string[]> => {
  const query = parseAddressQuery(input);
  if (!query.text) return [];

  const pending = addressesSearch({
    size,
    requestBody: { filters: addressSearchFilters(query) },
  });

  let timer: ReturnType<typeof setTimeout> | undefined;

  // A registry that never answers must not hold the field hostage: the caller's
  // own fallback can only appear once this resolves. The cap is generous because
  // the registry measurably takes 4-8s for a `contains` query, and cutting that
  // off would turn an address it does hold into free text.
  const outcome = await Promise.race([
    pending.then(
      (result) => result,
      () => undefined,
    ),
    new Promise<typeof TIMED_OUT>((resolve) => {
      timer = setTimeout(() => resolve(TIMED_OUT), timeoutMs);
    }),
  ]);
  clearTimeout(timer);

  if (outcome === TIMED_OUT) {
    pending.cancel();
    return [];
  }

  if (!outcome) return [];

  return [...new Set(outcome.items.map(formatBoundariesAddress))];
};
