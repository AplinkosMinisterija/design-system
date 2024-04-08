import type { Meta, StoryObj } from '@storybook/react';

import Table from '../src/components/Table';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Design system/Tables/Table',
};

export default meta;
type Story = StoryObj<typeof Table>;

export const TabsStory: Story = {
  name: 'Table',
  render: () => {
    return (
      <StoryWrapper>
        <Table
          columns={[
            {
              label: 'Column 1',
              mobileOrder: 1,
              desktopOrder: 1,
              show: true,
              visible: true,
              width: 'auto',
            },
            {
              label: 'Column 2',
              mobileOrder: 1,
              desktopOrder: 1,
              show: true,
              visible: true,
              width: 'auto',
            },
          ]}
          notFoundInfo={{
            text: 'Not found',
            url: '',
            urlText: 'not found',
          }}
        />
      </StoryWrapper>
    );
  },
};
