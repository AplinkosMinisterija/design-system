import type { Meta, StoryObj } from '@storybook/react';

import SelectField from '../src/components/SelectField';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof SelectField> = {
  component: SelectField,
  title: 'Design system/Fields/Select Field',
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const SelectFieldStory: Story = {
  name: 'SelectField',
  render: () => {
    return (
      <StoryWrapper>
        <SelectField onChange={() => {}} getOptionLabel={() => 'option label'} />
      </StoryWrapper>
    );
  },
};
