import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Theme } from '../types';
import { searchAddresses } from '../utils/address';
import AddressPicker from './AddressPicker';

vi.mock('../utils/address', () => ({ searchAddresses: vi.fn() }));

const theme: Theme = {
  colors: { primary: '#003D7A', danger: '#FE5B78', success: '#12B76A' },
};

const KAUNAS = 'Laisvės al. 10, Kauno m., Kauno m. sav., LT-44215';
const PLUNGE = 'Laisvės al. 10, Plungės m., Plungės r. sav., LT-90122';

const renderPicker = (ui: ReactElement) =>
  render(
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </QueryClientProvider>,
  );

describe('AddressPicker', () => {
  beforeEach(() => {
    vi.mocked(searchAddresses).mockReset();
  });

  it('shows a saved address as text, not as an empty control', () => {
    renderPicker(
      <AddressPicker name="address" label="Adresas" value="Sena gatvė 1, Vilnius" onChange={vi.fn()} />,
    );

    expect(screen.getByText('Sena gatvė 1, Vilnius')).toBeInTheDocument();
  });

  it('does not query the registry below three characters', async () => {
    renderPicker(<AddressPicker name="address" label="Adresas" onChange={vi.fn()} />);

    await userEvent.type(screen.getByRole('combobox'), 'Ge');

    expect(
      await screen.findByRole('option', { name: 'Įveskite bent 3 simbolius' }),
    ).toBeInTheDocument();
    expect(searchAddresses).not.toHaveBeenCalled();
  });

  it('offers registry matches and emits the picked text', async () => {
    vi.mocked(searchAddresses).mockResolvedValue([KAUNAS, PLUNGE]);
    const onChange = vi.fn();
    renderPicker(<AddressPicker name="address" label="Adresas" onChange={onChange} />);

    await userEvent.type(screen.getByRole('combobox'), 'Laisvės al. 10');
    await userEvent.click(await screen.findByRole('option', { name: KAUNAS }));

    expect(onChange).toHaveBeenCalledWith(KAUNAS);
  });

  it('asks the registry once for a word typed one character at a time', async () => {
    vi.mocked(searchAddresses).mockResolvedValue([KAUNAS]);
    renderPicker(<AddressPicker name="address" label="Adresas" onChange={vi.fn()} />);

    await userEvent.setup({ delay: null }).type(screen.getByRole('combobox'), 'Laisves');

    expect(await screen.findByRole('option', { name: KAUNAS })).toBeInTheDocument();
    expect(searchAddresses).toHaveBeenCalledTimes(1);
    expect(searchAddresses).toHaveBeenCalledWith('Laisves');
  });

  it('offers the typed text last and emits it verbatim', async () => {
    vi.mocked(searchAddresses).mockResolvedValue([]);
    const onChange = vi.fn();
    renderPicker(<AddressPicker name="address" label="Adresas" onChange={onChange} />);

    await userEvent.type(screen.getByRole('combobox'), 'Pamario sodyba, Nida');

    const freeText = await screen.findByRole('option', {
      name: 'Naudoti įvestą adresą: „Pamario sodyba, Nida“',
    });
    expect(screen.getAllByRole('option').at(-1)).toBe(freeText);

    await userEvent.click(freeText);
    expect(onChange).toHaveBeenCalledWith('Pamario sodyba, Nida');
  });

  it('keeps an address the user typed and then tabbed away from', async () => {
    vi.mocked(searchAddresses).mockResolvedValue([]);
    const onChange = vi.fn();
    renderPicker(
      <>
        <AddressPicker name="address" label="Adresas" onChange={onChange} />
        <button type="button">Kitas</button>
      </>,
    );

    await userEvent.type(screen.getByRole('combobox'), 'Pamario sodyba, Nida');
    await userEvent.click(screen.getByRole('button', { name: 'Kitas' }));

    await waitFor(() => expect(onChange).toHaveBeenCalledWith('Pamario sodyba, Nida'));
  });

  it('offers the typed text without waiting for the registry to answer', async () => {
    vi.mocked(searchAddresses).mockReturnValue(new Promise<string[]>(() => {}));
    renderPicker(<AddressPicker name="address" label="Adresas" onChange={vi.fn()} />);

    await userEvent.type(screen.getByRole('combobox'), 'Gedimino pr. 11');

    expect(
      await screen.findByRole('option', { name: 'Naudoti įvestą adresą: „Gedimino pr. 11“' }),
    ).toBeInTheDocument();
  });

  it('does not report an unfinished search as an empty one', async () => {
    vi.mocked(searchAddresses).mockReturnValue(new Promise<string[]>(() => {}));
    renderPicker(<AddressPicker name="address" label="Adresas" onChange={vi.fn()} />);

    await userEvent.type(screen.getByRole('combobox'), 'Gedimino');
    await screen.findByRole('option', { name: /Naudoti įvestą adresą/ });

    expect(screen.queryByText('Adresas nerastas')).not.toBeInTheDocument();
    expect(screen.getByText('Rasta adresų: 1')).toBeInTheDocument();
  });

  it('offers no free-text option when allowFreeText is false', async () => {
    vi.mocked(searchAddresses).mockResolvedValue([]);
    renderPicker(
      <AddressPicker name="address" label="Adresas" allowFreeText={false} onChange={vi.fn()} />,
    );

    await userEvent.type(screen.getByRole('combobox'), 'Pamario sodyba, Nida');

    expect(await screen.findByRole('option', { name: 'Adresas nerastas' })).toBeInTheDocument();
    expect(screen.queryByRole('option', { name: /Naudoti įvestą adresą/ })).not.toBeInTheDocument();
  });

  it('keeps the free-text option reachable when the registry search throws', async () => {
    vi.mocked(searchAddresses).mockRejectedValue(new Error('503'));
    const onChange = vi.fn();
    renderPicker(<AddressPicker name="address" label="Adresas" onChange={onChange} />);

    await userEvent.type(screen.getByRole('combobox'), 'Gedimino pr. 11');

    await userEvent.click(
      await screen.findByRole('option', { name: 'Naudoti įvestą adresą: „Gedimino pr. 11“' }),
    );
    await waitFor(() => expect(onChange).toHaveBeenCalledWith('Gedimino pr. 11'));
  });
});
