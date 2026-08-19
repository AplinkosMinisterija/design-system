import type { Meta, StoryObj } from '@storybook/react';
import  { useState } from 'react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import PhoneField from '../src/components/PhoneField';
import { phoneNumberRegexPattern } from '../src';

const meta: Meta<typeof PhoneField> = {
  component: PhoneField,
  title: 'Design system/Fields/ Phone Field',
};

export default meta;
type Story = StoryObj<typeof PhoneField>;

function PhoneFieldComponent() {
  const [value, setValue] = useState('');

  console.log('is a valid number', phoneNumberRegexPattern.test(value));
  return (
    <StoryWrapper>
      <PhoneField onChange={setValue} value={value} />
    </StoryWrapper>
  );
}

export const Field: Story = {
  name: 'PhoneField',
  render: () => <PhoneFieldComponent />,
};
