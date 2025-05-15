import type { Meta, StoryObj } from '@storybook/react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import TimeField from '../src/components/TimeField';
import { useState } from 'react';

const meta: Meta<typeof TimeField> = {
  component: TimeField,
  title: 'Design system/Fields/TimeField',
};

export default meta;

type Story = StoryObj<typeof TimeField>;

const Component = () => {
  const [value, setValue] = useState<string>();

  return (
    <StoryWrapper>
      <TimeField onChange={setValue} value={value} minTime={'06:20'} maxTime={'07:20'} />
    </StoryWrapper>
  );
};

export const Field: Story = {
  name: 'TimeField',
  render: () => {
    return <Component />;
  },
};
