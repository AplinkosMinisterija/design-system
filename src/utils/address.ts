import type { Address, AddressesSearchFilterRequest } from './boundaries';
import { addressesSearch } from './boundaries/services.gen';

const DEFAULT_SIZE = 10;
const DEFAULT_TIMEOUT_MS = 12000;
const TIMED_OUT = Symbol('timed-out');

export interface AddressQuery {
  text: string;
  number?: string;
}

// Bounded on purpose: an unbounded `\d+` before a literal scans quadratically,
// and this runs on every keystroke.
const NUMBER = String.raw`\d{1,5}[A-Za-z]?`;

/** `10 korp. 2`, and the `10 k. 2` people also write — but not the `k.` of
 *  `Kauniškio k. 1`, which is a village and whose number is the house. */
const BLOCK_TAIL = new RegExp(String.raw`(${NUMBER})\s{0,4}(?:korp\.?|k\.)\s{0,4}${NUMBER}$`);
const FLAT = new RegExp(String.raw`^(${NUMBER})-${NUMBER}$`);

export const parseAddressQuery = (input: string): AddressQuery => {
  const trimmed = input.trim();
  const block = trimmed.match(BLOCK_TAIL);
  const base = block ? trimmed.slice(0, block.index) : trimmed;
  const tokens = base.trim().split(/\s+/).filter(Boolean);

  if (block) return { text: tokens.join(' '), number: block[1] };

  const last = tokens[tokens.length - 1];

  if (tokens.length > 1 && last && /^\d/.test(last)) {
    // The registry holds buildings, not flats, so a flat number would match
    // nothing — search the building and let the user keep the rest.
    const flat = last.match(FLAT);
    return { text: tokens.slice(0, -1).join(' '), number: flat ? flat[1] : last };
  }

  return { text: tokens.join(' ') };
};

export const formatBoundariesAddress = (address: Address): string => {
  const locality = address.residential_area?.name;
  const head = address.street?.full_name ?? locality;
  const block = address.building_block_number ? ` korp. ${address.building_block_number}` : '';

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

  // Generous, because the registry takes seconds for a `contains` query and
  // cutting it off would turn an address it does hold into free text.
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
