import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  addressSearchFilters,
  clearAddressCodeCache,
  formatBoundariesAddress,
  parseAddressQuery,
  rankAddresses,
  searchAddresses,
} from './address';
import {
  addressesSearch,
  residentialAreasSearch,
  streetsSearch,
} from './boundaries/services.gen';
import { CancelablePromise } from './boundaries';
import type { Address } from './boundaries';

vi.mock('./boundaries/services.gen', () => ({
  addressesSearch: vi.fn(),
  streetsSearch: vi.fn(),
  residentialAreasSearch: vi.fn(),
}));

const KAUNAS_LAISVES_10: Address = {
  code: 188035677,
  feature_id: 1,
  plot_or_building_number: '10',
  building_block_number: null,
  postal_code: 'LT-44215',
  street: { code: 1304032, feature_id: 2, name: 'Laisvės al.', full_name: 'Laisvės al.' },
  residential_area: { code: 10184, feature_id: 3, name: 'Kauno m.' },
  municipality: {
    code: 19,
    feature_id: 4,
    name: 'Kauno m. sav.',
    county: { code: 2, feature_id: 5, name: 'Kauno apskr.' },
  },
  geometry: { srid: 3346, data: 'SRID=3346;POINT(493000 6085000)' },
};

const PLUNGE_LAISVES_10: Address = {
  ...KAUNAS_LAISVES_10,
  code: 188035678,
  postal_code: 'LT-90122',
  residential_area: { code: 24208, feature_id: 6, name: 'Plungės m.' },
  municipality: {
    code: 68,
    feature_id: 7,
    name: 'Plungės r. sav.',
    county: { code: 7, feature_id: 8, name: 'Telšių apskr.' },
  },
};

const KAUNISKIO_1: Address = {
  code: 175117063,
  feature_id: 551795,
  plot_or_building_number: '1',
  building_block_number: null,
  postal_code: 'LT-40101',
  street: null,
  residential_area: { code: 17511, feature_id: 15116, name: 'Kauniškio k.' },
  municipality: {
    code: 57,
    feature_id: 26,
    name: 'Kupiškio r. sav.',
    county: { code: 5, feature_id: 5, name: 'Panevėžio apskr.' },
  },
  geometry: { srid: 3346, data: 'SRID=3346;POINT(564966 6197833)' },
};

describe('parseAddressQuery', () => {
  it('splits a trailing house number off the street part', () => {
    expect(parseAddressQuery('Gedimino pr. 11')).toEqual({ street: 'Gedimino pr.', number: '11' });
    expect(parseAddressQuery('Laisvės al. 10A')).toEqual({ street: 'Laisvės al.', number: '10A' });
    expect(parseAddressQuery('Kauniškio k. 1')).toEqual({ text: 'Kauniškio k.', number: '1' });
  });

  it('treats a query with no trailing number as a name only', () => {
    expect(parseAddressQuery('Vilniaus')).toEqual({ text: 'Vilniaus' });
    expect(parseAddressQuery('  Gedimino   pr.  ')).toEqual({ street: 'Gedimino pr.' });
  });

  it('keeps a lone number as the name, not as a house number', () => {
    expect(parseAddressQuery('11')).toEqual({ text: '11' });
  });

  it('searches the building when the number carries a flat or a block', () => {
    expect(parseAddressQuery('A. Jakšto g. 4-12')).toEqual({ street: 'A. Jakšto g.', number: '4' });
    expect(parseAddressQuery('Laisvės al. 10 korp. 2')).toEqual({
      street: 'Laisvės al.',
      number: '10',
    });
    expect(parseAddressQuery('Laisvės al. 10 k. 2')).toEqual({ street: 'Laisvės al.', number: '10' });
  });

  it('does not mistake a village for a building block', () => {
    expect(parseAddressQuery('Kauniškio k. 1')).toEqual({ text: 'Kauniškio k.', number: '1' });
  });

  it('separates the street from the town, in either order', () => {
    expect(parseAddressQuery('Tilžės g. 2 Jurbarkas')).toEqual({
      street: 'Tilžės g.',
      locality: 'Jurbark',
      number: '2',
    });
    expect(parseAddressQuery('Jurbarkas, Tilžės g. 2')).toEqual({
      street: 'Tilžės g.',
      locality: 'Jurbark',
      number: '2',
    });
  });

  it('reduces a town to the stem the registry files it under', () => {
    // The registry writes localities in the genitive: `Jurbarko m.`, `Vilniaus
    // m.`, `Kauno m.` — so the nominative a person types matches nothing.
    expect(parseAddressQuery('Gedimino pr. 11 Vilnius').locality).toBe('Viln');
    expect(parseAddressQuery('Laisvės al. 10 Kaunas').locality).toBe('Kaun');
    expect(parseAddressQuery('Vilties g. 1 Klaipėda').locality).toBe('Klaipėd');
  });

  it('keeps a town already written the way the registry writes it', () => {
    expect(parseAddressQuery('Tilžės g. 2, Jurbarko m.').locality).toBe('Jurbarko m.');
  });

  it('takes the building number out of a block tail before the town', () => {
    expect(parseAddressQuery('Vytauto g. 10 korp. 2 Kaunas')).toEqual({
      street: 'Vytauto g.',
      locality: 'Kaun',
      number: '10',
    });
  });

  it('leaves a query with no street marker as plain text', () => {
    expect(parseAddressQuery('Jurbark')).toEqual({ text: 'Jurbark' });
  });

  it('parses a pasted wall of digits without stalling the keystroke', () => {
    const started = performance.now();
    parseAddressQuery('9'.repeat(40_000));

    expect(performance.now() - started).toBeLessThan(100);
  });
});

describe('parseAddressQuery street markers', () => {
  it('recognises a street type written without its full stop', () => {
    expect(parseAddressQuery('Dubysos g 6 Noreikiškės')).toEqual({
      street: 'Dubysos g.',
      locality: 'Noreikišk',
      number: '6',
    });
  });

  it('abbreviates a street type spelled out in full, as the registry files it', () => {
    expect(parseAddressQuery('Vytauto prospektas 10')).toEqual({
      street: 'Vytauto pr.',
      number: '10',
    });
  });

  it('reads the square, the lane and the road people also write', () => {
    expect(parseAddressQuery('Rotušės a. 1')).toMatchObject({ street: 'Rotušės a.' });
    expect(parseAddressQuery('Vilniaus tak. 3')).toMatchObject({ street: 'Vilniaus tak.' });
    expect(parseAddressQuery('Klaipėdos pl. 5')).toMatchObject({ street: 'Klaipėdos pl.' });
  });

  it('keeps an initial that looks like a street type inside the street name', () => {
    expect(parseAddressQuery('A. Jakšto g. 4')).toEqual({ street: 'A. Jakšto g.', number: '4' });
  });
});

describe('parseAddressQuery under a hostile paste', () => {
  it('stems a wall of vowels without stalling the keystroke', () => {
    const started = Date.now();
    parseAddressQuery(`Tilžės g. 2 ${'a'.repeat(40000)}b`);

    expect(Date.now() - started).toBeLessThan(100);
  });
});

describe('parseAddressQuery against hostile keys and wildcards', () => {
  it('does not answer a street type out of the object prototype', () => {
    expect(parseAddressQuery('Vilniaus constructor 5')).toEqual({
      text: 'Vilniaus constructor',
      number: '5',
    });
    expect(parseAddressQuery('Vilniaus toString 5')).toEqual({
      text: 'Vilniaus toString',
      number: '5',
    });
  });

  it('does not read a wildcard-bearing token as a house number', () => {
    expect(parseAddressQuery('Jurbarkas 1%')).toEqual({ text: 'Jurbarkas 1%' });
  });
});

describe('formatBoundariesAddress', () => {
  it('names the street, locality and municipality so two matches differ', () => {
    expect(formatBoundariesAddress(KAUNAS_LAISVES_10)).toBe(
      'Laisvės al. 10, Kauno m., Kauno m. sav., LT-44215',
    );
    expect(formatBoundariesAddress(PLUNGE_LAISVES_10)).toBe(
      'Laisvės al. 10, Plungės m., Plungės r. sav., LT-90122',
    );
  });

  it('falls back to the residential area when there is no street', () => {
    expect(formatBoundariesAddress(KAUNISKIO_1)).toBe('Kauniškio k. 1, Kupiškio r. sav., LT-40101');
  });

  it('names a building block so it cannot read as the village abbreviation', () => {
    expect(formatBoundariesAddress({ ...KAUNAS_LAISVES_10, building_block_number: '2' })).toBe(
      'Laisvės al. 10 korp. 2, Kauno m., Kauno m. sav., LT-44215',
    );
  });
});

describe('addressSearchFilters', () => {
  it('searches streets and areas as separate requests, not one OR-ed filter', () => {
    expect(addressSearchFilters({ text: 'Jurbark' })).toEqual([
      { streets: { full_name: { contains: 'Jurbark' } } },
      { residential_areas: { name: { contains: 'Jurbark' } } },
    ]);
  });

  it('matches a house number by prefix so a part-typed number still lists', () => {
    expect(addressSearchFilters({ street: 'Tilžės g.', number: '1' })).toEqual([
      {
        streets: { full_name: { contains: 'Tilžės g.' } },
        addresses: { plot_or_building_number: { starts: '1' } },
      },
    ]);
  });

  it('filters by resolved codes instead of names when they are known', () => {
    expect(
      addressSearchFilters({ street: 'Tilžės g.', locality: 'Jurbark', number: '2' }, {
        street: [11, 12],
        area: [16586],
      }),
    ).toEqual([
      {
        streets: { codes: [11, 12] },
        residential_areas: { codes: [16586] },
        addresses: { plot_or_building_number: { starts: '2' } },
      },
    ]);
  });

  it('keeps the name filter for the half that did not resolve', () => {
    expect(
      addressSearchFilters({ street: 'Kauno g.', locality: 'Jurbark' }, { area: [16586] }),
    ).toEqual([
      {
        streets: { full_name: { contains: 'Kauno g.' } },
        residential_areas: { codes: [16586] },
      },
    ]);
  });
});

describe('addressSearchFilters with nothing to search', () => {
  it('asks for nothing rather than for every row', () => {
    expect(addressSearchFilters({})).toEqual([]);
  });
});

describe('rankAddresses', () => {
  it('puts a town ahead of a village', () => {
    expect(rankAddresses([KAUNISKIO_1, KAUNAS_LAISVES_10])).toEqual([
      KAUNAS_LAISVES_10,
      KAUNISKIO_1,
    ]);
  });

  it('shows one address per place before a second from the same place', () => {
    const kaunasSecond: Address = { ...KAUNAS_LAISVES_10, code: 999, plot_or_building_number: '12' };

    expect(rankAddresses([KAUNAS_LAISVES_10, kaunasSecond, PLUNGE_LAISVES_10])).toEqual([
      KAUNAS_LAISVES_10,
      PLUNGE_LAISVES_10,
      kaunasSecond,
    ]);
  });
});

const page = <T>(items: { code: number }[], next?: string) =>
  ({ items, next_page: next ?? null }) as unknown as T;

const sentFilter = (call: number) =>
  vi.mocked(addressesSearch).mock.calls[call]?.[0]?.requestBody.filters?.[0];

describe('searchAddresses', () => {
  beforeEach(() => {
    vi.mocked(addressesSearch).mockReset();
    vi.mocked(streetsSearch).mockReset();
    vi.mocked(residentialAreasSearch).mockReset();
    clearAddressCodeCache();
  });

  it('resolves the street name to codes and filters the addresses by them', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(page([{ code: 1147604 }, { code: 1234242 }]));
    vi.mocked(addressesSearch).mockResolvedValue({ items: [KAUNAS_LAISVES_10] });

    await expect(searchAddresses('Laisvės al. 10')).resolves.toEqual([
      'Laisvės al. 10, Kauno m., Kauno m. sav., LT-44215',
    ]);
    expect(addressesSearch).toHaveBeenCalledWith({
      size: 10,
      sortBy: 'plot_or_building_number',
      requestBody: {
        filters: [
          {
            streets: { codes: [1147604, 1234242] },
            addresses: { plot_or_building_number: { starts: '10' } },
          },
        ],
      },
    });
  });

  it('follows the cursor until every code is collected', async () => {
    vi.mocked(streetsSearch)
      .mockResolvedValueOnce(page([{ code: 1 }], 'cursor-2'))
      .mockResolvedValueOnce(page([{ code: 2 }]));
    vi.mocked(addressesSearch).mockResolvedValue({ items: [KAUNAS_LAISVES_10] });

    await searchAddresses('Laisvės al. 10');

    expect(vi.mocked(streetsSearch).mock.calls[1]?.[0]).toMatchObject({ cursor: 'cursor-2' });
    expect(sentFilter(0)).toMatchObject({
      streets: { codes: [1, 2] },
    });
  });

  it('falls back to the name filter when the street matches too many codes', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(
      page(
        Array.from({ length: 100 }, (_, i) => ({ code: i })),
        'more',
      ),
    );
    vi.mocked(addressesSearch).mockResolvedValue({ items: [KAUNAS_LAISVES_10] });

    await searchAddresses('Laisvės al. 10');

    expect(sentFilter(0)).toEqual({
      streets: { full_name: { contains: 'Laisvės al.' } },
      addresses: { plot_or_building_number: { starts: '10' } },
    });
  });

  it('reuses the resolved codes while the house number is still being typed', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(page([{ code: 7 }]));
    vi.mocked(addressesSearch).mockResolvedValue({ items: [KAUNAS_LAISVES_10] });

    await searchAddresses('Laisvės al. 1');
    await searchAddresses('Laisvės al. 10');

    expect(streetsSearch).toHaveBeenCalledTimes(1);
  });

  it('looks the street up inside the town it already resolved', async () => {
    vi.mocked(residentialAreasSearch).mockResolvedValue(page([{ code: 17507 }]));
    vi.mocked(streetsSearch).mockResolvedValue(page([{ code: 7 }]));
    vi.mocked(addressesSearch).mockResolvedValue({ items: [KAUNAS_LAISVES_10] });

    await searchAddresses('Sodų g. 1 Kaunas');

    expect(vi.mocked(streetsSearch).mock.calls[0]?.[0]?.requestBody.filters?.[0]).toEqual({
      streets: { full_name: { contains: 'Sodų g.' } },
      residential_areas: { codes: [17507] },
    });
  });

  it('does not re-walk six pages for a street name that matches too many', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(
      page(
        Array.from({ length: 100 }, (_, i) => ({ code: i })),
        'more',
      ),
    );
    vi.mocked(addressesSearch).mockResolvedValue({ items: [KAUNAS_LAISVES_10] });

    await searchAddresses('Sodų g. 1');
    const afterFirst = vi.mocked(streetsSearch).mock.calls.length;
    await searchAddresses('Sodų g. 12');

    expect(vi.mocked(streetsSearch).mock.calls.length).toBe(afterFirst);
  });

  it('does not remember an empty answer as a lasting "no such street"', async () => {
    vi.mocked(streetsSearch).mockResolvedValueOnce(page([]));
    await searchAddresses('Tilžės g. 2');

    vi.mocked(streetsSearch).mockResolvedValue(page([{ code: 7 }]));
    vi.mocked(addressesSearch).mockResolvedValue({ items: [KAUNAS_LAISVES_10] });

    await expect(searchAddresses('Tilžės g. 2')).resolves.toHaveLength(1);
  });

  it('refuses a wildcard-only query instead of matching every street', async () => {
    await expect(searchAddresses('%%%')).resolves.toEqual([]);
    expect(streetsSearch).not.toHaveBeenCalled();
    expect(addressesSearch).not.toHaveBeenCalled();
  });

  it('strips wildcards out of a name it does search', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(page([{ code: 7 }]));
    vi.mocked(residentialAreasSearch).mockResolvedValue(page([]));
    vi.mocked(addressesSearch).mockResolvedValue({ items: [] });

    await searchAddresses('Jurb%ark');

    expect(vi.mocked(streetsSearch).mock.calls[0]?.[0]?.requestBody.filters?.[0]).toEqual({
      streets: { full_name: { contains: 'Jurbark' } },
    });
  });

  it('asks for a bare town in the genitive the registry files it under', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(page([]));
    vi.mocked(residentialAreasSearch).mockResolvedValue(page([{ code: 16586 }]));
    vi.mocked(addressesSearch).mockResolvedValue({ items: [KAUNAS_LAISVES_10] });

    await searchAddresses('Jurbarkas');

    expect(vi.mocked(residentialAreasSearch).mock.calls[0]?.[0]?.requestBody.filters?.[0]).toEqual({
      residential_areas: { name: { contains: 'Jurbark' } },
    });
  });

  it('searches a bare town name on both branches and merges the rows', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(page([{ code: 7 }]));
    vi.mocked(residentialAreasSearch).mockResolvedValue(page([{ code: 16586 }]));
    vi.mocked(addressesSearch)
      .mockResolvedValueOnce({ items: [PLUNGE_LAISVES_10] })
      .mockResolvedValueOnce({ items: [KAUNAS_LAISVES_10] });

    const found = await searchAddresses('Jurbarkas');

    expect(addressesSearch).toHaveBeenCalledTimes(2);
    expect(found).toHaveLength(2);
  });

  it('returns nothing when the street name matches no street, rather than widening', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(page([]));
    vi.mocked(residentialAreasSearch).mockResolvedValue(page([{ code: 16586 }]));

    await expect(searchAddresses('Nesamos g. 1 Jurbarkas')).resolves.toEqual([]);
    expect(addressesSearch).not.toHaveBeenCalled();
  });

  it('returns an empty list when the registry fails, without throwing', async () => {
    vi.mocked(streetsSearch).mockRejectedValue(new Error('503'));
    vi.mocked(residentialAreasSearch).mockRejectedValue(new Error('503'));
    vi.mocked(addressesSearch).mockRejectedValue(new Error('503'));

    await expect(searchAddresses('Gedimino 11')).resolves.toEqual([]);
  });

  it('gives up on a registry that never answers, and cancels the request', async () => {
    let cancelled = false;
    vi.mocked(streetsSearch).mockResolvedValue(page([{ code: 7 }]));
    vi.mocked(addressesSearch).mockReturnValue(
      new CancelablePromise((_resolve, _reject, onCancel) => {
        onCancel(() => {
          cancelled = true;
        });
      }),
    );

    await expect(searchAddresses('Hauptstraße 5, Berlin', 10, 20)).resolves.toEqual([]);
    expect(cancelled).toBe(true);
  });

  it('de-duplicates identical formatted addresses', async () => {
    vi.mocked(streetsSearch).mockResolvedValue(page([{ code: 7 }]));
    vi.mocked(addressesSearch).mockResolvedValue({
      items: [KAUNAS_LAISVES_10, KAUNAS_LAISVES_10],
    });

    await expect(searchAddresses('Laisvės al. 10')).resolves.toHaveLength(1);
  });
});
