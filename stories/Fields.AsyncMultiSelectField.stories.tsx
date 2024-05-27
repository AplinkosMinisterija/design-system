import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import AsyncMultiSelectField from '../src/components/AsyncMultiSelectField';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof AsyncMultiSelectField> = {
  component: AsyncMultiSelectField,
  title: 'Design system/Fields/Async Multi Select Field',
};

export default meta;
type Story = StoryObj<typeof AsyncMultiSelectField>;

const testUrl = 'https://dev-uetk.biip.lt/api/objects/search';

export const AsyncMultiSelectFieldStory: Story = {
  name: 'AsyncMultiSelectField',
  render: () => {
    const [values, setValues] = useState([]);

    return (
      <StoryWrapper>
        <AsyncMultiSelectField
          onChange={(values) => {
            setValues(values);
          }}
          values={values}
          getOptionLabel={(item) => item?.name}
          loadOptions={async (input, page) => {
            const response = await fetch(`${testUrl}?search=${input}&page=${page}`);
            return await response.json();
          }}
          name={'test'}
        />
      </StoryWrapper>
    );
  },
};
