import type { Meta, StoryObj } from '@storybook/react';

import Tabs from '../src/components/Tabs';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const TabsStory: Story = {
  name: 'Tabs',
  render: () => {
    return (
      <StoryWrapper>
        <Tabs
          options={[
            { label: 'Įvykę įvykiai', value: 'HAPPENED' },
            { label: 'Suplanuoti įvykiai', value: 'PLANNED' },
          ]}
          onChange={() => {}}
          value={'HAPPENED'}
        />
      </StoryWrapper>
    );
  },
};
