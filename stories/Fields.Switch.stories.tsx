import type { Meta, StoryObj } from '@storybook/react';

import Switch from '../src/components/Switch';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Design system/Fields/Switch',
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const SwitchStory: Story = {
  name: 'Switch',
  render: () => {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
      <StoryWrapper>
        <Switch
          label="Switch"
          value={checked}
          onChange={(value) => {
            setChecked(value);
          }}
        />

        <Switch
          label="Custon colors"
          value={checked2}
          labelStyle={{ fontSize: '1.6rem', color: 'red' }}
          trackColorActive={'red'}
          trackColorInactive={'grey'}
          thumbColor="orange"
          onChange={(value) => {
            setChecked2(value);
          }}
        />

        <Switch labelPosition="left" label="Disabled" value={false} disabled />
      </StoryWrapper>
    );
  },
};
