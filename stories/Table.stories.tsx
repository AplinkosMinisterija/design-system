import type { Meta, StoryObj } from '@storybook/react';

import Table from '../src/components/tables/Table';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { withRouter } from 'storybook-addon-react-router-v6';

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
          columns={{
            column1: {
              label: 'Column 1',
              mobileOrder: 1,
              desktopOrder: 1,
              show: true,
              visible: true,
              width: 'auto',
            },
            column2: {
              label: 'Column 2',
              mobileOrder: 1,
              desktopOrder: 1,
              show: true,
              visible: true,
              width: 'auto',
            },
          }}
          data={{
            data: [
              {
                id: 1,
                column1: 'test1',
                column2: 'test',
              },
              { id: 2, column1: 'test2', column2: 'test' },
              { id: 3, column1: 'test3', column2: 'test' },
              { id: 4, column1: 'test4', column2: 'test' },
              { id: 5, column1: 'test5', column2: 'test' },
            ],
            total: 10,
            page: 1,
            pageSize: 5,
            totalPages: 2,
          }}
          notFoundInfo={{
            text: 'Not found',
            url: '',
            urlText: 'not found',
          }}
        />
      </StoryWrapper>
    );
  },
  decorators: [withRouter],
};
