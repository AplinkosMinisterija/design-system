import type { Meta, StoryObj } from '@storybook/react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import CombinedField from '../src/components/CombinedField';

const meta: Meta<typeof CombinedField> = {
  component: CombinedField,
  title: 'Design system/Fields/Combined Field',
};

export default meta;
type Story = StoryObj<typeof CombinedField>;

export const Field: Story = {
  name: 'CombinedField',
  render: () => {
    return (
      <StoryWrapper>
        <CombinedField
          onChange={(e) => alert(JSON.stringify(e))}
          value={{ input: '', option: 'kg' }}
          options={['kg', 'l', 'ml']}
          placeholder="4"
          numeric={true}
        />
      </StoryWrapper>
    );
  },
};
