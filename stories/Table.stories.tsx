import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { withRouter } from 'storybook-addon-react-router-v6';
import StoryWrapper from '../src/components/common/StoryWrapper';
import Table from '../src/components/tables/Table';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Design system/Tables/Table',
};

export default meta;
type Story = StoryObj<typeof Table>;

export const TabsStory: Story = {
  name: 'Table',
  render: () => {
    const initData = {
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
    };

    const [data, setData] = useState(initData);

    const handleColumnSort = ({ key, direction }) => {
      const sortedData = data.data.sort((a, b) => {
        if (a[key].localeCompare(b[key]) === 1) {
          return direction === 'asc' ? -1 : 1;
        }

        if (b[key].localeCompare(a[key]) === 1) {
          return direction === 'asc' ? 1 : -1;
        }
        return 0;
      });

      setData({ ...data, data: sortedData });
    };

    return (
      <StoryWrapper>
        <Table
          onColumnSort={handleColumnSort}
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
          data={data}
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
