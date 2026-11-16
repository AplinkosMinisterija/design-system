import type { Address, AddressesSearchFilterRequest } from './boundaries';

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
