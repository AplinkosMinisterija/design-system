import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  addressSearchFilters,
  formatBoundariesAddress,
  parseAddressQuery,
  searchAddresses,
} from './address';
import { addressesSearch } from './boundaries/services.gen';
import { CancelablePromise } from './boundaries';
import type { Address } from './boundaries';

vi.mock('./boundaries/services.gen', () => ({ addressesSearch: vi.fn() }));

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
    expect(parseAddressQuery('Gedimino pr. 11')).toEqual({ text: 'Gedimino pr.', number: '11' });
    expect(parseAddressQuery('Laisvės al. 10A')).toEqual({ text: 'Laisvės al.', number: '10A' });
    expect(parseAddressQuery('Kauniškio k. 1')).toEqual({ text: 'Kauniškio k.', number: '1' });
  });

  it('treats a query with no trailing number as a name only', () => {
    expect(parseAddressQuery('Vilniaus')).toEqual({ text: 'Vilniaus' });
    expect(parseAddressQuery('  Gedimino   pr.  ')).toEqual({ text: 'Gedimino pr.' });
  });

  it('keeps a lone number as the name, not as a house number', () => {
    expect(parseAddressQuery('11')).toEqual({ text: '11' });
  });

  it('searches the building when the number carries a flat or a block', () => {
    expect(parseAddressQuery('A. Jakšto g. 4-12')).toEqual({ text: 'A. Jakšto g.', number: '4' });
    expect(parseAddressQuery('Laisvės al. 10 korp. 2')).toEqual({
      text: 'Laisvės al.',
      number: '10',
    });
    expect(parseAddressQuery('Laisvės al. 10 k. 2')).toEqual({ text: 'Laisvės al.', number: '10' });
  });

  it('does not mistake a village for a building block', () => {
    expect(parseAddressQuery('Kauniškio k. 1')).toEqual({ text: 'Kauniškio k.', number: '1' });
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
  it('ORs a street filter with a residential-area filter', () => {
    expect(addressSearchFilters({ text: 'Kauniškio', number: '1' })).toEqual([
      {
        streets: { full_name: { contains: 'Kauniškio' } },
        addresses: { plot_or_building_number: { exact: '1' } },
      },
      {
        residential_areas: { name: { contains: 'Kauniškio' } },
        addresses: { plot_or_building_number: { exact: '1' } },
      },
    ]);
  });

  it('omits the number filter when the query has no number', () => {
    expect(addressSearchFilters({ text: 'Gedimino' })).toEqual([
      { streets: { full_name: { contains: 'Gedimino' } } },
      { residential_areas: { name: { contains: 'Gedimino' } } },
    ]);
  });
});

describe('searchAddresses', () => {
  beforeEach(() => {
    vi.mocked(addressesSearch).mockReset();
  });

  it('sends the OR filters and returns formatted texts', async () => {
    vi.mocked(addressesSearch).mockResolvedValue({
      items: [KAUNAS_LAISVES_10, PLUNGE_LAISVES_10],
    });

    await expect(searchAddresses('Laisvės al. 10')).resolves.toEqual([
      'Laisvės al. 10, Kauno m., Kauno m. sav., LT-44215',
      'Laisvės al. 10, Plungės m., Plungės r. sav., LT-90122',
    ]);
    expect(addressesSearch).toHaveBeenCalledWith({
      size: 10,
      requestBody: { filters: addressSearchFilters({ text: 'Laisvės al.', number: '10' }) },
    });
  });

  it('returns an empty list when the registry fails, without throwing', async () => {
    vi.mocked(addressesSearch).mockRejectedValue(new Error('503'));

    await expect(searchAddresses('Gedimino 11')).resolves.toEqual([]);
  });

  it('gives up on a registry that never answers, and cancels the request', async () => {
    let cancelled = false;
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
    vi.mocked(addressesSearch).mockResolvedValue({
      items: [KAUNAS_LAISVES_10, KAUNAS_LAISVES_10],
    });

    await expect(searchAddresses('Laisvės al. 10')).resolves.toHaveLength(1);
  });
});
