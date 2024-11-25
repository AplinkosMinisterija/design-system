import type { Meta, StoryObj } from '@storybook/react';
import NumericTextField from '../src/components/NumericTextField';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { useState } from 'react';

const meta: Meta<typeof NumericTextField> = {
  component: NumericTextField,
  title: 'Design system/Fields/Numeric Text Field',
};

export default meta;
type Story = StoryObj<typeof NumericTextField>;
const component = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(65.99);
  return (
    <StoryWrapper>
      <NumericTextField
        onChange={setValue}
        value={value}
        wholeNumber={true}
        negativeNumber={true}
      />
    </StoryWrapper>
  );
};
export const Field: Story = {
  name: 'NumericTextField',
  render: component,
};
