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
