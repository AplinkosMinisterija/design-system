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
    const [checked3, setChecked3] = useState(false);

    return (
      <StoryWrapper>
        
        <Switch
          label="Switch Small"
          value={checked3}
          size="sm"
          onChange={(value) => {
            setChecked3(value);
          }}
        />

        <Switch
          label="Switch medium"
          value={checked3}
          size="md"
          onChange={(value) => {
            setChecked3(value);
          }}
        />

        <Switch
          label="Switch Large"
          value={checked3}
          size="lg"
          onChange={(value) => {
            setChecked3(value);
          }}
        />

        <Switch
          label="Switch Extra Large"
          value={checked3}
          size="xl"
          onChange={(value) => {
            setChecked3(value);
          }}
        />

        <Switch
          label="Switch"
          value={checked}
          onChange={(value) => {
            setChecked(value);
          }}
        />

        <Switch
          label="Custom colors"
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
