import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import AsyncSelectField from '../src/components/AsyncSelectField';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { SelectOption } from '../src';

const meta: Meta<typeof AsyncSelectField> = {
  component: AsyncSelectField,
  title: 'Design system/Fields/Async Select Field',
};

export default meta;
type Story = StoryObj<typeof AsyncSelectField>;

const testUrl = 'https://dev-uetk.biip.lt/api/objects/search';

function AsyncSelectFieldComponent() {
  const [value, setValue] = useState<SelectOption | undefined>();
  return (
    <StoryWrapper>
      <AsyncSelectField
        onChange={setValue}
        getOptionLabel={(option) =>
          option ? `${option?.name} (${option?.cadastralId}) - ${option?.municipality}` : '-'
        }
        getOptionComponent={(option) => (
          <span>
            {option.name}
            <OptionInfo>{` (${option.cadastralId}) - ${option.municipality}`}</OptionInfo>
          </span>
        )}
        value={value}
        loadOptions={async (input, page) => {
          const response = await fetch(`${testUrl}?search=${input}&page=${page}`);
          return await response.json();
        }}
        name="test"
        placeholder={'Placeholder'}
      />
    </StoryWrapper>
  );
}

export const AsyncSelectFieldStory: Story = {
  name: 'AsyncSelectField',
  render: () => <AsyncSelectFieldComponent />,
};

const OptionInfo = styled.span`
  color: darkgrey;
  font-size: 1.4rem;
`;

/**
 * A register-backed field that only answers from the second character on.
 *
 * With one character typed the list is empty because nothing was asked, not
 * because nothing matched — `texts.shortQuery` is what says so. Without it the
 * field claims "Nieko nerasta" over a register that is answering perfectly,
 * which is how a live water-body search was read as disconnected.
 */
function MinQueryLengthComponent() {
  const [value, setValue] = useState<SelectOption | undefined>();
  return (
    <StoryWrapper>
      <AsyncSelectField
        name="waterBody"
        label="Vandens telkinys"
        placeholder="Įveskite pavadinimą"
        value={value}
        onChange={setValue}
        getOptionLabel={(option) => option?.name ?? '-'}
        minQueryLength={2}
        texts={{
          noOptions: 'Nieko nerasta',
          shortQuery: 'Įveskite bent 2 simbolius',
          resultsCount: (count) => `Rasta pasirinkimų: ${count}`,
        }}
        loadOptions={async (input) => {
          const query = input.trim().toLowerCase();
          if (query.length < 2) return { rows: [], page: 1, totalPages: 1 };
          return {
            rows: WATER_BODIES.filter((row) => row.name.toLowerCase().includes(query)),
            page: 1,
            totalPages: 1,
          };
        }}
      />
    </StoryWrapper>
  );
}

export const MinQueryLengthStory: Story = {
  name: 'AsyncSelectField (minQueryLength)',
  render: () => <MinQueryLengthComponent />,
};

const WATER_BODIES: SelectOption[] = [
  { id: 1, name: 'Aisetas' },
  { id: 2, name: 'Aiseta' },
  { id: 3, name: 'Baltieji Lakajai' },
];
