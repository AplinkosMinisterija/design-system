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
        <MultiSelectField
          onChange={(e) => {
            console.log(e);
          }}
          options={[
            { id: 1, label: 'Vilkas' },
            { id: 2, label: 'Bebras' },
            { id: 3, label: 'Šernas' },
            { id: 4, label: 'Briedis' },
            { id: 5, label: 'Stirna' },
            { id: 6, label: 'Kiškis' },
          ]}
          values={[
            { id: 1, label: 'Vilkas' },
            { id: 2, label: 'Bebras' },
          ]}
        />
      </StoryWrapper>
    );
  },
};
