import type { Meta, StoryObj } from '@storybook/react';
import NumericField from '../src/components/NumericField';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { useState } from 'react';

const meta: Meta<typeof NumericField> = {
  component: NumericField,
  title: 'Design system/Fields/Numeric Field',
};

export default meta;
type Story = StoryObj<typeof NumericField>;

const StoryComponent = () => {
  const [value, setValue] = useState<number | undefined>(65.99);

  return (
    <StoryWrapper>
      <NumericField
        onChange={setValue}
        value={value}
        wholeNumber={false}
        negativeNumber={true}
        bottomLabel={`${value?.toString() || ''}`}
      />
    </StoryWrapper>
  );
};
export const Field: Story = {
  name: 'NumericField',
  render: StoryComponent,
};
