import type { Meta, StoryObj } from '@storybook/react';

import AsyncMultiSelectField from '../src/components/AsyncMultiSelectField';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof AsyncMultiSelectField> = {
  component: AsyncMultiSelectField,
  title: 'Design system/Fields/Async Multi Select Field',
};

export default meta;
type Story = StoryObj<typeof AsyncMultiSelectField>;

export const AsyncMultiSelectFieldStory: Story = {
  name: 'AsyncMultiSelectField',
  render: () => {
    return (
      <StoryWrapper>
        <AsyncMultiSelectField onChange={() => {}} values={null} loadOptions={() => []} />
      </StoryWrapper>
    );
  },
};
