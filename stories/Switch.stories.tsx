import type { Meta, StoryObj } from '@storybook/react';

import Switch from '../src/components/Switch';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const SwitchStory: Story = {
  name: 'Switch',
  render: () => {
    return (
      <StoryWrapper>
        <Switch />
      </StoryWrapper>
    );
  },
};
