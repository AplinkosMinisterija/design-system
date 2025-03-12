import type { Meta, StoryObj } from '@storybook/react';

import RecursiveTable from '../src/components/tables/RecursiveTable';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { useState } from 'react';

const meta: Meta<typeof RecursiveTable> = {
  component: RecursiveTable,
  title: 'Design system/Tables/Recursive Table',
};

export default meta;

type Story = StoryObj<typeof RecursiveTable>;

export const RecursiveTableStory: Story = {
  name: 'Recursive Table',
  render: () => {
    const initData = {
      data: [
        {
          id: 1,
          column1: 'test1',
          column2: 'test',
          children: [
            {
              id: 6,
              column1: 'test1.1',
              column2: 'test',
              children: [{ id: 7, column1: 'test1.1.1', column2: 'test' }],
            },
          ],
        },
        { id: 2, column1: 'test2', column2: 'test' },
        { id: 3, column1: 'item7', column2: 'data3' },
        { id: 4, column1: 'test4', column2: 'test' },
        { id: 5, column1: 'data3', column2: 'item4' },
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
        <RecursiveTable
          onColumnSort={handleColumnSort}
          columns={{
            column1: {
              label: 'Column 1',
              mobileOrder: 1,
              desktopOrder: 1,
              show: true,
              visible: true,
            },
            column2: {
              label: 'Column 2',
              mobileOrder: 1,
              desktopOrder: 1,
              show: true,
              visible: true,
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
};
