import type { Meta, StoryObj } from '@storybook/react';

import MultiSelectField from '../src/components/MultiSelectField';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof MultiSelectField> = {
  component: MultiSelectField,
  title: 'Design system/Fields/Multi Select Field',
};

export default meta;
type Story = StoryObj<typeof MultiSelectField>;

export const MultiSelectFieldStory: Story = {
  name: 'MultiSelectField',
  render: () => {
    return (
      <StoryWrapper>
        <MultiSelectField onChange={() => {}} options={[]} values={null} />
      </StoryWrapper>
    );
  },
};
