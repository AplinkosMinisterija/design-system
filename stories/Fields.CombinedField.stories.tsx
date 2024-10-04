import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CombinedField from '../src/components/CombinedField';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof CombinedField> = {
  component: CombinedField,
  title: 'Design system/Fields/Combined Field',
};

export default meta;
type Story = StoryObj<typeof CombinedField>;

export const Field: Story = {
  name: 'CombinedField',
  render: () => {
    const [value, setValue] = useState({ input: '', option: 'kg' });
    return (
      <StoryWrapper>
        <CombinedField
          onChange={setValue}
          value={value}
          options={['kg', 'l', 'ml']}
          placeholder="4"
          numeric={true}
        />
      </StoryWrapper>
    );
  },
};
