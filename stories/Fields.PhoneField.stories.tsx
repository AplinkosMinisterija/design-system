import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import PhoneField from '../src/components/PhoneField';
import { phoneRegexPattern } from '../src/utils';
const meta: Meta<typeof PhoneField> = {
  component: PhoneField,
  title: 'Design system/Fields/ Phone Field',
};

export default meta;
type Story = StoryObj<typeof PhoneField>;

export const Field: Story = {
  name: 'PhoneField',
  render: () => {
    const [value, setValue] = useState('');

    console.log('is a valid number', phoneRegexPattern.test(value));
    return (
      <StoryWrapper>
        <PhoneField onChange={setValue} value={value} />
      </StoryWrapper>
    );
  },
};
