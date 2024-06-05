import { Columns, NotFoundInfoProps, TableData } from '../../types';
import { device, useWindowSize } from '../../utils';
import LoaderComponent from '../common/LoaderComponent';
import DesktopTable from '../tables/components/DesktopTable';
import MobileTable from '../tables/components/MobileTable';
import TableContainer from '../tables/components/TableContainer';
import { getActiveColumns } from './components/functions';

export interface LoginLayoutProps {
  data?: TableData;
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  onClick?: (id: string) => void;
  tableRowStyle?: any;
  pageName?: string;
  isFilterApplied?: boolean;
  loading?: boolean;
  onPageChange: (page: number) => void;
  onColumnToggle?: ({ key, direction }: { key: string; direction?: 'asc' | 'desc' }) => void;
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
  onPageChange = () => {},
  onColumnToggle,
}: LoginLayoutProps) => {
  const isMobile = useWindowSize(device.mobileL);
  const activeColumns = getActiveColumns(columns);

  if (loading) return <LoaderComponent />;

  return (
    <TableContainer data={data} pageName={pageName} loading={loading} onPageChange={onPageChange}>
      {isMobile ? (
        <MobileTable
          data={data?.data}
          columns={activeColumns}
          onClick={onClick}
          tableRowStyle={tableRowStyle}
          notFoundInfo={notFoundInfo}
          isFilterApplied={isFilterApplied}
          onColumnToggle={onColumnToggle}
        />
      ) : (
        <DesktopTable
          data={data?.data}
          columns={activeColumns}
          onClick={onClick}
          tableRowStyle={tableRowStyle}
          notFoundInfo={notFoundInfo}
          isFilterApplied={isFilterApplied}
          onColumnToggle={onColumnToggle}
        />
      )}
    </TableContainer>
  );
};

export default Table;
