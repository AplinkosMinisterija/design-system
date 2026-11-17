import { describe, expect, it } from 'vitest';
import { clearAddressCodeCache, searchAddresses } from './address';

/** Hits the real registry; skipped unless LIVE_REGISTRY is set to 1. */
const enabled = globalThis.process?.env?.['LIVE_REGISTRY'] === '1';
const live = enabled ? describe : describe.skip;

live('against the real boundaries registry', () => {
  it.each([
    ['Tilžės g. 2 Jurbarkas', 'Tilžės g. 2, Jurbarko m.'],
    ['Jurbarkas, Tilžės g. 2', 'Tilžės g. 2, Jurbarko m.'],
    ['Gedimino pr. 11 Vilnius', 'Gedimino pr. 11, Vilniaus m.'],
    ['A. Jakšto g. 4 Vilnius', 'A. Jakšto g. 4, Vilniaus m.'],
    ['Vytauto g. 10 Kaunas', 'Vytauto g. 10, Kauno m.'],
    ['Vytauto prospektas 6 Kaunas', 'Vytauto pr. 6, Kauno m.'],
    ['Mituvos g 1 Jurbarkas', 'Mituvos g. 1, Jurbarko m.'],
  ])(
    'finds %s',
    async (input, expected) => {
      clearAddressCodeCache();
      const started = Date.now();
      const found = await searchAddresses(input);
      const elapsed = Date.now() - started;
      console.log(`${input} -> ${elapsed}ms, ${found.length} rows: ${found[0] ?? '—'}`);

      expect(found[0]).toContain(expected);
      expect(elapsed).toBeLessThan(2500);
    },
    30_000,
  );

  it(
    'finds a street name that exists in more places than it will collect codes for',
    async () => {
      clearAddressCodeCache();
      // `Sodų g.` exists in 565 places, past the 500 cap; scoping the lookup to
      // the town it already resolved brings that down to two.
      const found = await searchAddresses('Sodų g. 1 Kaunas');

      expect(found[0]).toContain('Sodų g.');
      expect(found[0]).toContain('Kauno m.');
    },
    30_000,
  );

  it(
    'lists addresses in the town itself when only the town is typed',
    async () => {
      clearAddressCodeCache();
      const found = await searchAddresses('Jurbarkas');

      expect(found.some((row) => row.includes('Jurbarko m.'))).toBe(true);
    },
    30_000,
  );

  it(
    'answers a repeated street from the cache, without re-resolving',
    async () => {
      clearAddressCodeCache();
      await searchAddresses('Tilžės g. 2 Jurbarkas');

      const started = Date.now();
      await searchAddresses('Tilžės g. 20 Jurbarkas');

      expect(Date.now() - started).toBeLessThan(1200);
    },
    30_000,
  );
});
