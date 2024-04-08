import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../src/components/Checkbox';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Design system/Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxStory: Story = {
  name: 'Checkbox',
  render: () => {
    return (
      <StoryWrapper>
        <Checkbox label={'label'} onChange={() => {}} />
      </StoryWrapper>
    );
  },
};
