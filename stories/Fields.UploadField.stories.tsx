import type { Meta, StoryObj } from '@storybook/react';
import DragAndDropUploadField from '../src/components/DragAndDropUploadField';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { useState } from 'react';

const meta: Meta<typeof DragAndDropUploadField> = {
  component: DragAndDropUploadField,
  title: 'Design system/Fields/DragAndDropUploadField',
};

export default meta;
type Story = StoryObj<typeof DragAndDropUploadField>;

export const Field: Story = {
  name: 'DragAndDropUploadField',
  render: () => {
    const [files, setFiles] = useState([]);

    return (
      <StoryWrapper>
        <DragAndDropUploadField
          multiple
          onDelete={() => setFiles([])}
          onUpload={async (files) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                setFiles(files);
                resolve();
              }, 2000);
            });
          }}
          files={files}
        />
      </StoryWrapper>
    );
  },
};
