import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import AsyncSelectField from '../src/components/AsyncSelectField';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof AsyncSelectField> = {
  component: AsyncSelectField,
  title: 'Design system/Fields/Async Select Field',
};

export default meta;
type Story = StoryObj<typeof AsyncSelectField>;

const testUrl = 'https://dev-uetk.biip.lt/api/objects/search';

export const AsyncSelectFieldStory: Story = {
  name: 'AsyncSelectField',
  render: () => {
    const [value, setValue] = useState();
    return (
      <StoryWrapper>
        <AsyncSelectField
          onChange={(value) => {
            setValue(value);
          }}
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
  },
};

const OptionInfo = styled.span`
  color: darkgrey;
  font-size: 1.4rem;
`;
