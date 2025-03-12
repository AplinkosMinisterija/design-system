import { useEffect, useState } from 'react';
import { Columns, NotFoundInfoProps, SortedColumnsProps, TableData } from '../../types';
import { device, useWindowSize } from '../../utils';
import LoaderComponent from '../common/LoaderComponent';
import DesktopTable from '../tables/components/DesktopTable';
import MobileTable from '../tables/components/MobileTable';
import TableContainer from '../tables/components/TableContainer';
import { getActiveColumns } from './components/functions';

export interface TableProps {
  data?: TableData;
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  onClick?: (item: any) => void;
  tableRowStyle?: any;
  pageName?: string;
  isFilterApplied?: boolean;
  loading?: boolean;
  onColumnSort?: ({ key, direction, sortBy }: SortedColumnsProps) => void;
  selectedItemIds?: (string | number | undefined)[];
  onSetSelectedItemIds?: (ids: (string | number | undefined)[]) => void;
  texts?: {
    filteredItemsNotFound: string;
  };
  showPageSizeDropdown?: boolean;
}

const Table = ({
  data,
  columns,
  notFoundInfo,
  onClick,
  tableRowStyle,
  pageName,
  loading,
  isFilterApplied = false,
  onColumnSort,
  selectedItemIds,
  onSetSelectedItemIds,
  texts,
  showPageSizeDropdown,
}: TableProps) => {
  const isMobile = useWindowSize(device.mobileL);
  const [selectedItemIdsSet, setSelectedItemIdsSet] = useState<Set<string | number | undefined>>(
    new Set(selectedItemIds),
  );

  useEffect(() => {
    setSelectedItemIdsSet(new Set(selectedItemIds));
  }, [selectedItemIds]);

  if (loading) return <LoaderComponent />;

  const activeColumns = getActiveColumns(columns);

  const handleToggleItem = (id: string | number | undefined) => {
    if (!onSetSelectedItemIds) return;

    if (selectedItemIdsSet.has(id)) {
      selectedItemIdsSet.delete(id);
    } else {
      selectedItemIdsSet.add(id);
    }

    onSetSelectedItemIds(Array.from(selectedItemIdsSet));
  };

  return (
    <TableContainer
      showPageSizeDropdown={showPageSizeDropdown}
      data={data}
      pageName={pageName}
      loading={loading}
    >
      {isMobile ? (
        <MobileTable
          data={data?.data}
          columns={activeColumns}
          onClick={onClick}
          tableRowStyle={tableRowStyle}
          notFoundInfo={notFoundInfo}
          isFilterApplied={isFilterApplied}
          onColumnSort={onColumnSort}
          handleToggleItem={handleToggleItem}
          selectedItemIdsSet={selectedItemIdsSet}
          checkable={!!onSetSelectedItemIds}
          texts={texts}
        />
      ) : (
        <DesktopTable
          data={data?.data}
          columns={activeColumns}
          onClick={onClick}
          tableRowStyle={tableRowStyle}
          notFoundInfo={notFoundInfo}
          isFilterApplied={isFilterApplied}
          onColumnSort={onColumnSort}
          handleToggleItem={handleToggleItem}
          selectedItemIdsSet={selectedItemIdsSet}
          checkable={!!onSetSelectedItemIds}
          texts={texts}
        />
      )}
    </TableContainer>
  );
};

export default Table;
