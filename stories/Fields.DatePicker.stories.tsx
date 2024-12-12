import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import DatePicker from '../src/components/DatePicker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Design system/Fields/Date Picker',
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const SelectFieldStory: Story = {
  name: 'DatePicker',
  render: () => {
    const [value, setValue] = useState();
    return (
      <StoryWrapper>
        <DatePicker label={'Date'} onChange={setValue} value={value} />
      </StoryWrapper>
    );
  },
};
