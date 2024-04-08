import type { Meta, StoryObj } from '@storybook/react';
import NumericTextField from '../src/components/NumericTextField';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof NumericTextField> = {
  component: NumericTextField,
  title: 'Design system/Fields/Numeric Text Field',
};

export default meta;
type Story = StoryObj<typeof NumericTextField>;

export const Field: Story = {
  name: 'NumericTextField',
  render: () => {
    return (
      <StoryWrapper>
        <NumericTextField onChange={(e) => {}} value={'65.99'} />
      </StoryWrapper>
    );
  },
};
