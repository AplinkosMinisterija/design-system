import type { Meta, StoryObj } from '@storybook/react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import DateField from '../src/components/DateField';
import { useState } from 'react';

const meta: Meta<typeof DateField> = {
  component: DateField,
  title: 'Design system/Fields/DateField',
};

export default meta;

type Story = StoryObj<typeof DateField>;

const Component = () => {
  const [value, setValue] = useState<Date | undefined>();

  return (
    <StoryWrapper>
      <DateField onChange={setValue} value={value} />
    </StoryWrapper>
  );
};

export const Field: Story = {
  name: 'DateField',
  render: () => {
    return <Component />;
  },
};
