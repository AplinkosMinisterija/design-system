import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SortedColumnsProps } from '../src';
import StoryWrapper from '../src/components/common/StoryWrapper';
import Table from '../src/components/tables/Table';
import React from 'react';

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
        { id: 1, column1: 'test1', column2: 'test', column3: 'data' },
        { id: 2, column1: 'test2', column2: 'test', column3: 'testdata' },
        { id: 3, column1: 'item7', column2: 'data3', column3: 'data3' },
        { id: 4, column1: 'test4', column2: 'test', column3: 'testdata1' },
        { id: 5, column1: 'data3', column2: 'item4', column3: 'data4' },
      ],
      total: 10,
      page: 1,
      pageSize: 5,
      totalPages: 2,
    };

    const [data, setData] = useState(initData);
    const [selectedItemsIds, setSelectedRowsIds] = useState<(string | number | undefined)[]>([]);

    const handleColumnSort = ({ key, direction, sortBy }: SortedColumnsProps) => {
      const sortedData = data.data.sort((a, b) => {
        if (key && a[key].localeCompare(b[key]) === 1) {
          return direction === 'asc' ? -1 : 1;
        }

        if (key && b[key].localeCompare(a[key]) === 1) {
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
          selectedItemIds={selectedItemsIds}
          onClick={() => {}}
          loading={false}
          onSetSelectedItemIds={(ids) => {
            setSelectedRowsIds(ids);
          }}
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
              mobileOrder: 2,
              desktopOrder: 2,
              show: true,
              visible: true,
            },
            column3: {
              label: 'Column 3',
              mobileOrder: 3,
              desktopOrder: 3,
              show: true,
              visible: true,
            },
          }}
          data={data}
          notFoundInfo={{
            text: 'Not found',
            url: '',
            urlText: 'not found',
            onClick: () => {},
          }}
        />
      </StoryWrapper>
    );
  },
};
