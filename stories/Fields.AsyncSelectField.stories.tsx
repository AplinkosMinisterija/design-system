import type { Meta, StoryObj } from '@storybook/react';

import AsyncSelectField from '../src/components/AsyncSelectField';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof AsyncSelectField> = {
  component: AsyncSelectField,
  title: 'Design system/Fields/Async Select Field',
};

export default meta;
type Story = StoryObj<typeof AsyncSelectField>;

export const AsyncSelectFieldStory: Story = {
  name: 'AsyncSelectField',
  render: () => {
    return (
      <StoryWrapper>
        <AsyncSelectField
          onChange={() => {}}
          getOptionLabel={() => 'option label'}
          loadOptions={() => {}}
        />
      </StoryWrapper>
    );
  },
};
