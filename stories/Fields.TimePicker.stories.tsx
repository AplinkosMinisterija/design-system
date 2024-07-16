import type { Meta, StoryObj } from '@storybook/react';
import TimePicker from '../src/components/TimePicker';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
  title: 'Design system/Fields/ Time Picker',
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Field: Story = {
  name: 'TimePicker',
  render: () => {
    return (
      <StoryWrapper>
        <TimePicker onChange={(e) => {}} value={new Date()} />
      </StoryWrapper>
    );
  },
};
