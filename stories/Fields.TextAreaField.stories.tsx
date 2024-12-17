import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import TextAreaField from '../src/components/TextAreaField';

const meta: Meta<typeof TextAreaField> = {
  component: TextAreaField,
  title: 'Design system/Fields/Text Area Field',
};

export default meta;
type Story = StoryObj<typeof TextAreaField>;

export const TextAreaFieldStory: Story = {
  name: 'TextAreaField',
  render: () => {
    const [value, setValue] = useState('');
    return (
      <StoryWrapper>
        <TextAreaField onChange={(e) => setValue(e)} value={value} />
      </StoryWrapper>
    );
  },
};
