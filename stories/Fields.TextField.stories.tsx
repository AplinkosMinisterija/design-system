import type { Meta, StoryObj } from '@storybook/react';
import TextField from '../src/components/TextField';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Design system/Fields/ Text Field',
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Field: Story = {
  name: 'TextField',
  render: () => {
    return (
      <StoryWrapper>
        <TextField onChange={(e) => {}} value={''} placeholder={'testing'} />
      </StoryWrapper>
    );
  },
};
