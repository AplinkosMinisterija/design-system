import type { Address, AddressesSearchFilterRequest } from './boundaries';
import {
  addressesSearch,
  residentialAreasSearch,
  streetsSearch,
} from './boundaries/services.gen';

const DEFAULT_SIZE = 10;
const DEFAULT_TIMEOUT_MS = 12000;
const TIMED_OUT = Symbol('timed-out');

const CODE_PAGE_SIZE = 100;
const MAX_CODES = 500;
const MAX_CODE_PAGES = Math.ceil(MAX_CODES / CODE_PAGE_SIZE) + 1;
const CODE_CACHE_TTL_MS = 86_400_000;
const UNRESOLVED_TTL_MS = 60_000;
const CODE_CACHE_MAX_ENTRIES = 200;
const NAME_MIN_LENGTH = 3;

export interface AddressQuery {
  /** Set when no street marker was found, and matched against either field. */
  text?: string;
  street?: string;
  locality?: string;
  number?: string;
}

/** Codes the registry indexes by; absent means "not resolved, filter by name". */
export interface ResolvedCodes {
  street?: number[];
  area?: number[];
}

// Bounded on purpose: an unbounded `\d+` before a literal scans quadratically,
// and this runs on every keystroke.
const NUMBER = String.raw`\d{1,5}[A-Za-z]?`;

/** `10 korp. 2`, and the `10 k. 2` people also write — but not the `k.` of
 *  `Kauniškio k. 1`, which is a village and whose number is the house. */
const BLOCK_TAIL = new RegExp(String.raw`(${NUMBER})\s{0,4}(?:korp\.?|k\.)\s{0,4}${NUMBER}`);
const FLAT = new RegExp(String.raw`^(${NUMBER})-${NUMBER}$`);
const HOUSE = new RegExp(String.raw`^(${NUMBER})(?:-${NUMBER})?$`);

/** Spelled out or abbreviated, mapped to the form the registry files. A Map, not
 *  an object: `constructor` and `toString` are not street types. */
const STREET_TYPES = new Map<string, string>([
  ['g', 'g.'],
  ['gatve', 'g.'],
  ['gatvė', 'g.'],
  ['pr', 'pr.'],
  ['prospektas', 'pr.'],
  ['al', 'al.'],
  ['aleja', 'al.'],
  ['alėja', 'al.'],
  ['pl', 'pl.'],
  ['plentas', 'pl.'],
  ['kel', 'kel.'],
  ['kelias', 'kel.'],
  ['skg', 'skg.'],
  ['skersgatvis', 'skg.'],
  ['tak', 'tak.'],
  ['takas', 'tak.'],
  ['a', 'a.'],
  ['aikste', 'a.'],
  ['aikštė', 'a.'],
]);

const streetTypeOf = (token: string): string | undefined =>
  STREET_TYPES.get(token.toLowerCase().replace(/\.$/, ''));

/** The last one, so the `A.` of `A. Jakšto g.` stays part of the name. */
const lastStreetTypeAt = (tokens: string[]): number => {
  for (let at = tokens.length - 1; at >= 0; at -= 1) {
    if (streetTypeOf(tokens[at]!)) return at;
  }

  return -1;
};

const streetFrom = (tokens: string[], at: number) =>
  [...tokens.slice(0, at), streetTypeOf(tokens[at]!) ?? tokens[at]].join(' ');

/**
 * The registry files a locality in the genitive — `Jurbarko m.`, `Vilniaus m.`
 * — so the nominative a person types matches nothing. Dropping the ending
 * leaves a stem that `contains` finds either way, and a shorter stem can only
 * widen the search, never lose a row.
 */
// Bounded: an unbounded `+$` retries from every position and scans quadratically.
const TRAILING_VOWELS = /[aąeęėiįyouų]{1,4}$/i;

const localityStem = (word: string) => {
  const base = word.replace(/s$/i, '');
  const stem = base.replace(TRAILING_VOWELS, '');

  if (stem.length >= NAME_MIN_LENGTH) return stem;

  return base.length >= NAME_MIN_LENGTH ? base : word;
};

/** Left alone when it already carries the registry's own `m.`/`k.` suffix. */
const localityQuery = (name: string) =>
  /\.$/.test(name) ? name : name.split(/\s+/).filter(Boolean).map(localityStem).join(' ');

const localityOf = (named: string[]) => {
  if (!named.length) return {};

  return { locality: localityQuery(named.join(' ')) };
};

const splitHouseNumber = (tokens: string[], known?: string) => {
  let number = known;
  const named: string[] = [];

  for (const token of tokens) {
    const house = token.match(HOUSE);

    if (house) {
      number ??= house[1];
      continue;
    }

    named.push(token);
  }

  return { number, named };
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
  const streetAt = segments.findIndex((part) => lastStreetTypeAt(part) > 0);
  const tokens = segments.flat();
  const typeAt = lastStreetTypeAt(tokens);

  if (segments.length > 1 && streetAt >= 0) {
    const segment = segments[streetAt]!;
    const at = lastStreetTypeAt(segment);
    const street = streetFrom(segment, at);
    const { number: house, named } = splitHouseNumber(
      [...segment.slice(at + 1), ...segments.filter((_, i) => i !== streetAt).flat()],
      number,
    );

    return { street, ...localityOf(named), ...(house && { number: house }) };
  }

  if (typeAt <= 0) {
    const last = tokens[tokens.length - 1];

    // The registry holds buildings, not flats, so a flat number would match
    // nothing — search the building and let the user keep the rest.
    const trailing = last && (last.match(FLAT) ?? last.match(HOUSE));

    if (!number && tokens.length > 1 && trailing) {
      return { text: tokens.slice(0, -1).join(' '), number: trailing[1] };
    }

    return number ? { text: tokens.join(' '), number } : { text: tokens.join(' ') };
  }

  const { number: house, named } = splitHouseNumber(tokens.slice(typeAt + 1), number);

  return { street: streetFrom(tokens, typeAt), ...localityOf(named), ...(house && { number: house }) };
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

/** `%` and `_` reach the registry's matcher, where they match every row. */
const searchableName = (value?: string): string | undefined => {
  const cleaned = value?.replace(/[%_]/g, '').trim();

  return cleaned && cleaned.length >= NAME_MIN_LENGTH ? cleaned : undefined;
};

/** `undefined` codes mean "unresolved, match by name"; an empty list is the
 *  registry's "no filter", so that branch is dropped rather than widened. */
const streetPart = (
  name?: string,
  codes?: number[],
): AddressesSearchFilterRequest | undefined => {
  if (codes?.length === 0) return undefined;
  if (codes) return { streets: { codes } };

  return name ? { streets: { full_name: { contains: name } } } : undefined;
};

const areaPart = (name?: string, codes?: number[]): AddressesSearchFilterRequest | undefined => {
  if (codes?.length === 0) return undefined;
  if (codes) return { residential_areas: { codes } };

  return name ? { residential_areas: { name: { contains: name } } } : undefined;
};

export const addressSearchFilters = (
  query: AddressQuery,
  resolved: ResolvedCodes = {},
): AddressesSearchFilterRequest[] => {
  const number = query.number
    ? { addresses: { plot_or_building_number: { starts: query.number } } }
    : {};

  const street = streetPart(query.street ?? query.text, resolved.street);
  const area = areaPart(query.locality ?? query.text, resolved.area);

  if (query.street) {
    if (!street || (query.locality && !area)) return [];

    return [{ ...street, ...(query.locality ? area : {}), ...number }];
  }

  // Each entry is sent as its own request: the registry sorts a union of two
  // filters without an index, and pays seconds for it.
  return [street, area]
    .filter((branch): branch is AddressesSearchFilterRequest => Boolean(branch))
    .map((branch) => ({ ...branch, ...number }));
};

interface CodeCacheEntry {
  /** `null` once a name proved unresolvable — too many matches, or the registry refused. */
  codes: number[] | null;
  at: number;
  ttl: number;
}

const codeCache = new Map<string, CodeCacheEntry>();

export const clearAddressCodeCache = () => codeCache.clear();

const cachedCodes = (key: string) => {
  const hit = codeCache.get(key);
  if (!hit) return undefined;

  if (Date.now() - hit.at > hit.ttl) {
    codeCache.delete(key);
    return undefined;
  }

  return hit;
};

const cacheCodes = (key: string, codes: number[] | null) => {
  // An empty answer costs one indexed query to recompute and would otherwise
  // pin "no such street" for a day after a single bad reply.
  if (codes?.length === 0) return;

  if (codeCache.size >= CODE_CACHE_MAX_ENTRIES) {
    const oldest = codeCache.keys().next().value;
    if (oldest !== undefined) codeCache.delete(oldest);
  }

  codeCache.set(key, {
    codes,
    at: Date.now(),
    ttl: codes === null ? UNRESOLVED_TTL_MS : CODE_CACHE_TTL_MS,
  });
};

const searchCodes = (
  kind: 'street' | 'area',
  name: string,
  cursor?: string,
  within?: number[],
) =>
  kind === 'street'
    ? streetsSearch({
        size: CODE_PAGE_SIZE,
        cursor,
        requestBody: {
          filters: [
            {
              streets: { full_name: { contains: name } },
              ...(within?.length ? { residential_areas: { codes: within } } : {}),
            },
          ],
        },
      })
    : residentialAreasSearch({
        size: CODE_PAGE_SIZE,
        cursor,
        requestBody: { filters: [{ residential_areas: { name: { contains: name } } }] },
      });

/** The registry indexes addresses by code, not by the joined name, so filtering
 *  1.1M rows by name is a scan. `undefined` means the caller falls back to it. */
const collectCodes = async (
  kind: 'street' | 'area',
  name: string,
  within?: number[],
): Promise<number[] | undefined> => {
  const key = `${kind}:${name.toLowerCase()}${within?.length ? `@${within.join(',')}` : ''}`;
  const cached = cachedCodes(key);
  if (cached) return cached.codes ?? undefined;

  const codes: number[] = [];
  let cursor: string | undefined;

  try {
    for (let page = 0; page < MAX_CODE_PAGES; page += 1) {
      const found = await searchCodes(kind, name, cursor, within);

      for (const item of found.items) {
        if (typeof item.code === 'number') codes.push(item.code);
      }

      if (codes.length > MAX_CODES) break;

      if (!found.next_page) {
        cacheCodes(key, codes);
        return codes;
      }

      cursor = found.next_page;
    }
  } catch {
    cacheCodes(key, null);
    return undefined;
  }

  cacheCodes(key, null);
  return undefined;
};

/** A town before a village, and every place once before any place twice. */
const PLACE_KINDS = [/\sm\.$/, /\smstl\.$/, /\ssen\.$/, /\sk\.$/];

const placeRank = (address: Address) => {
  const name = address.residential_area?.name ?? '';
  const kind = PLACE_KINDS.findIndex((suffix) => suffix.test(name));

  return kind < 0 ? PLACE_KINDS.length : kind;
};

export const rankAddresses = (items: Address[]): Address[] => {
  const seen = new Set<number>();
  const first: Address[] = [];
  const repeated: Address[] = [];

  for (const address of [...items].sort((a, b) => placeRank(a) - placeRank(b))) {
    const place = address.residential_area?.code;

    if (place !== undefined && seen.has(place)) {
      repeated.push(address);
      continue;
    }

    if (place !== undefined) seen.add(place);
    first.push(address);
  }

  return [...first, ...repeated];
};

const runSearch = async (
  filter: AddressesSearchFilterRequest,
  size: number,
  timeoutMs: number,
): Promise<Address[]> => {
  const pending = addressesSearch({
    size,
    sortBy: 'plot_or_building_number',
    requestBody: { filters: [filter] },
  });

  let timer: ReturnType<typeof setTimeout> | undefined;

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

  return outcome?.items ?? [];
};

export const searchAddresses = async (
  input: string,
  size = DEFAULT_SIZE,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<string[]> => {
  const parsed = parseAddressQuery(input);
  const query: AddressQuery = {
    ...(searchableName(parsed.text) && { text: searchableName(parsed.text) }),
    ...(searchableName(parsed.street) && { street: searchableName(parsed.street) }),
    ...(searchableName(parsed.locality) && { locality: searchableName(parsed.locality) }),
    ...(parsed.number && { number: parsed.number }),
  };

  const streetName = query.street ?? query.text;
  if (!streetName) return [];

  // A bare name is as likely to be a town as a street, and the town side has
  // to be asked for in the genitive the registry files it under.
  if (!query.street && query.text) query.locality = searchableName(localityQuery(query.text));

  let street: number[] | undefined;
  let area: number[] | undefined;

  if (query.street && query.locality) {
    // Resolving the town first collapses the street lookup from every street of
    // that name in the country to the two or three in that town.
    area = await collectCodes('area', query.locality);
    if (area?.length === 0) return [];

    street = await collectCodes('street', query.street, area);
  } else {
    [street, area] = await Promise.all([
      collectCodes('street', streetName),
      query.locality ? collectCodes('area', query.locality) : Promise.resolve(undefined),
    ]);
  }

  const filters = addressSearchFilters(query, { street, area });
  if (!filters.length) return [];

  const found = await Promise.all(filters.map((filter) => runSearch(filter, size, timeoutMs)));

  return [...new Set(rankAddresses(found.flat()).map(formatBoundariesAddress))].slice(0, size);
};
