import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import CreatableMultiSelect from '../src/components/CreatableMultiSelect';

const meta: Meta<typeof CreatableMultiSelect> = {
  component: CreatableMultiSelect,
  title: 'Design system/Fields/CreatableMultiSelect',
};

export default meta;
type Story = StoryObj<typeof CreatableMultiSelect>;

export const SelectFieldStory: Story = {
  name: 'CreatableMultiSelect',
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <StoryWrapper>
        <CreatableMultiSelect values={value} onChange={(values) => setValue(values)} />
      </StoryWrapper>
    );
  },
};
