import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import DragAndDropUploadField from '../src/components/DragAndDropUploadField';

const meta: Meta<typeof DragAndDropUploadField> = {
  component: DragAndDropUploadField,
  title: 'Design system/Fields/DragAndDropUploadField',
};

export default meta;
type Story = StoryObj<typeof DragAndDropUploadField>;

export const Field: Story = {
  name: 'DragAndDropUploadField',
  render: () => {
    const [files, setFiles] = useState<any>([]);

    return (
      <StoryWrapper>
        <DragAndDropUploadField
          multiple
          onDelete={(files) => setFiles(files)}
          onUpload={async (files) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                const updatedFiles = files.map((file) => ({
                  url: URL.createObjectURL(file),
                  name: file.name,
                  size: file.size,
                }));

                setFiles(updatedFiles);
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
