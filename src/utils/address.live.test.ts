import { describe, expect, it } from 'vitest';
import { addressSearchFilters, parseAddressQuery } from './address';

/** Hits the real registry; skipped unless LIVE_REGISTRY is set to 1. */
const enabled = globalThis.process?.env?.['LIVE_REGISTRY'] === '1';
const live = enabled ? describe : describe.skip;

live('against the real boundaries registry', () => {
  it.each([
    ['Tilžės g. 2 Jurbarkas', 'Jurbarko m.'],
    ['Jurbarkas, Tilžės g. 2', 'Jurbarko m.'],
    ['Gedimino pr. 11 Vilnius', 'Vilniaus m.'],
    ['A. Jakšto g. 4 Vilnius', 'Vilniaus m.'],
    ['Vytauto g. 10 korp. 2 Kaunas', 'Kauno m.'],
  ])(
    'finds %s in %s',
    async (input, area) => {
      const started = Date.now();
      const res = await fetch('https://boundaries.biip.lt/v1/addresses/search?size=3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filters: addressSearchFilters(parseAddressQuery(input)) }),
      });
      const body = (await res.json()) as {
        total: number;
        items: { residential_area?: { name?: string } }[];
      };
      console.log(`${input} -> total=${body.total} in ${Date.now() - started}ms`);

      expect(body.items.length).toBeGreaterThan(0);
      expect(body.items[0]?.residential_area?.name).toBe(area);
    },
    30_000,
  );
});
