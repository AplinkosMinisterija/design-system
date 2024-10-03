import type { Meta, StoryObj } from '@storybook/react';
import DragAndDropUploadField from '../src/components/DragAndDropUploadField';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof DragAndDropUploadField> = {
  component: DragAndDropUploadField,
  title: 'Design system/Fields/DragAndDropUploadField',
};

export default meta;
type Story = StoryObj<typeof DragAndDropUploadField>;

export const Field: Story = {
  name: 'DragAndDropUploadField',
  render: () => {
    return (
      <StoryWrapper>
        <DragAndDropUploadField backgroundColor="white" />
      </StoryWrapper>
    );
  },
};
