import type { Meta, StoryObj } from '@storybook/react';

import DatePicker from '../src/components/DatePicker';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Design system/Fields/Date Picker',
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const SelectFieldStory: Story = {
  name: 'DatePicker',
  render: () => {
    return (
      <StoryWrapper>
        <DatePicker onChange={() => {}} />
      </StoryWrapper>
    );
  },
};
