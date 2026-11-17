import type { Address, AddressesSearchFilterRequest } from './boundaries';
import { addressesSearch } from './boundaries/services.gen';

const DEFAULT_SIZE = 10;
const DEFAULT_TIMEOUT_MS = 12000;
const TIMED_OUT = Symbol('timed-out');

export interface AddressQuery {
  /** Set when no street marker was found, and matched against either field. */
  text?: string;
  street?: string;
  locality?: string;
  number?: string;
}

// Bounded on purpose: an unbounded `\d+` before a literal scans quadratically,
// and this runs on every keystroke.
const NUMBER = String.raw`\d{1,5}[A-Za-z]?`;

/** `10 korp. 2`, and the `10 k. 2` people also write — but not the `k.` of
 *  `Kauniškio k. 1`, which is a village and whose number is the house. */
const BLOCK_TAIL = new RegExp(String.raw`(${NUMBER})\s{0,4}(?:korp\.?|k\.)\s{0,4}${NUMBER}`);
const FLAT = new RegExp(String.raw`^(${NUMBER})-${NUMBER}$`);
const HOUSE = new RegExp(String.raw`^(${NUMBER})(?:-${NUMBER})?$`);

/** How the registry abbreviates a street: `Tilžės g.`, `Gedimino pr.`. */
const STREET_TYPE = /^(?:g|pr|al|skg|kel|pl|gatv)\.$/i;

/**
 * The registry files a locality in the genitive — `Jurbarko m.`, `Vilniaus m.`
 * — so the nominative a person types matches nothing. Dropping the ending
 * leaves a stem that `contains` finds either way, and a shorter stem can only
 * widen the search, never lose a row.
 */
const NOMINATIVE_END = /(?:as|is|ys|us|iai|ai|ė|a)$/;
const localityStem = (word: string) => (word.length >= 5 ? word.replace(NOMINATIVE_END, '') : word);

/** Left alone when it already carries the registry's own `m.`/`k.` suffix. */
const localityOf = (named: string[]) => {
  if (!named.length) return {};
  const joined = named.join(' ');

  return { locality: /\.$/.test(joined) ? joined : named.map(localityStem).join(' ') };
};

export const parseAddressQuery = (input: string): AddressQuery => {
  let rest = input.trim();
  let number: string | undefined;

  const block = rest.match(BLOCK_TAIL);
  if (block) {
    number = block[1];
    rest = rest.replace(BLOCK_TAIL, ' ');
  }

  const words = (part: string) => part.trim().split(/\s+/).filter(Boolean);
  // A comma is the one reliable boundary between a street and a town, and it
  // is how the registry's own formatted address is written.
  const segments = rest.split(',').map(words).filter((part) => part.length);
  const streetAt = segments.findIndex((part) => part.some((token) => STREET_TYPE.test(token)));
  const tokens = segments.flat();
  const typeAt = tokens.findIndex((token) => STREET_TYPE.test(token));

  if (segments.length > 1 && streetAt >= 0) {
    const segment = segments[streetAt]!;
    const at = segment.findIndex((token) => STREET_TYPE.test(token));
    const street = segment.slice(0, at + 1).join(' ');
    const named: string[] = [];

    for (const token of [...segment.slice(at + 1), ...segments.filter((_, i) => i !== streetAt).flat()]) {
      const house = token.match(HOUSE);

      if (house) {
        number ??= house[1];
        continue;
      }

      named.push(token);
    }

    return street ? { street, ...localityOf(named), ...(number && { number }) } : { text: tokens.join(' ') };
  }

  if (typeAt <= 0) {
    const last = tokens[tokens.length - 1];

    if (!number && tokens.length > 1 && last && /^\d/.test(last)) {
      // The registry holds buildings, not flats, so a flat number would match
      // nothing — search the building and let the user keep the rest.
      const flat = last.match(FLAT);
      return { text: tokens.slice(0, -1).join(' '), number: flat ? flat[1] : last };
    }

    return number ? { text: tokens.join(' '), number } : { text: tokens.join(' ') };
  }

  // No comma to go by, so everything before the street type is the street's
  // own name — `A. Jakšto g.` is two words and a type, not a town and a street.
  const street = tokens.slice(0, typeAt + 1).join(' ');
  const named: string[] = [];

  for (const token of tokens.slice(typeAt + 1)) {
    const house = token.match(HOUSE);

    if (house) {
      number ??= house[1];
      continue;
    }

    named.push(token);
  }

  return { street, ...localityOf(named), ...(number && { number }) };
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

  if (query.street) {
    // One ANDed filter, not two OR'ed: a street name alone matches the same
    // street in every town in the country, and the one meant is rarely first.
    const street = { streets: { full_name: { contains: query.street } } };

    return [
      query.locality
        ? { ...street, residential_areas: { name: { contains: query.locality } }, ...number }
        : { ...street, ...number },
    ];
  }

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
  if (!query.text && !query.street) return [];

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
