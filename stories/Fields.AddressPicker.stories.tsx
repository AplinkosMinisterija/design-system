import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import AddressPicker from '../src/components/AddressPicker';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof AddressPicker> = {
  component: AddressPicker,
  title: 'Design system/Fields/Address Picker',
};

export default meta;
type Story = StoryObj<typeof AddressPicker>;

function AddressPickerComponent() {
  const [value, setValue] = useState('');

  return (
    <StoryWrapper>
      <AddressPicker
        name="address"
        label="Adresas"
        value={value}
        onChange={setValue}
        autoComplete="street-address"
      />
      <Stored>Išsaugoma: {value ? `„${value}“` : '—'}</Stored>
      <Hint>
        Užklausiama tikrojo adresų registro po 3 simbolių. Namo numeris keliauja atskiru
        filtru, todėl „Gedimino pr. 11“ veikia, o „Gedimino pr.“ grąžina visą gatvę.
      </Hint>
    </StoryWrapper>
  );
}

export const AddressPickerStory: Story = {
  name: 'AddressPicker',
  render: () => <AddressPickerComponent />,
};

/** The field has to stay usable when the registry does not answer at all. */
function UnreachableRegistryComponent() {
  const [value, setValue] = useState('');

  return (
    <StoryWrapper>
      <AddressPicker
        name="foreignAddress"
        label="Adresas (registras neatsako)"
        value={value}
        onChange={setValue}
        placeholder="Hauptstraße 5, Berlin"
      />
      <Stored>Išsaugoma: {value ? `„${value}“` : '—'}</Stored>
      <Hint>
        Užsienio adreso registras neturi. Įvestas tekstas pasiūlomas iš karto — nepalaukus
        atsakymo — ir priimamas tiek pasirinkus, tiek tiesiog išėjus iš laukelio.
      </Hint>
    </StoryWrapper>
  );
}

export const UnreachableRegistryStory: Story = {
  name: 'AddressPicker (free text)',
  render: () => <UnreachableRegistryComponent />,
};

const Stored = styled.div`
  font-size: 1.4rem;
  margin-top: 8px;
`;

const Hint = styled.div`
  color: darkgrey;
  font-size: 1.4rem;
  margin-top: 4px;
  max-width: 46rem;
`;
