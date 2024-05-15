import { Columns, NotFoundInfoProps, TableData } from '../../types';
import TableContainer from '../tables/components/TableContainer';
import DesktopTable from '../tables/components/DesktopTable';
import MobileTable from '../tables/components/MobileTable';
import LoaderComponent from '../common/LoaderComponent';
import { getActiveColumns } from './components/functions';
import { device, useWindowSize } from '../../utils';

export interface LoginLayoutProps {
  data?: TableData;
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  onClick?: (id: string) => void;
  tableRowStyle?: any;
  pageName?: string;
  isFilterApplied?: boolean;
  loading?: boolean;
  onPageChane: (page: number) => void;
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
  onPageChane = () => {},
}: LoginLayoutProps) => {
  const isMobile = useWindowSize(device.mobileL);
  const activeColumns = getActiveColumns(columns);

  if (loading) return <LoaderComponent />;

  return (
    <TableContainer data={data} pageName={pageName} loading={loading} onPageChane={onPageChane}>
      {isMobile ? (
        <MobileTable
          data={data?.data}
          columns={activeColumns}
          onClick={onClick}
          tableRowStyle={tableRowStyle}
          notFoundInfo={notFoundInfo}
          isFilterApplied={isFilterApplied}
        />
      ) : (
        <DesktopTable
          data={data?.data}
          columns={activeColumns}
          onClick={onClick}
          tableRowStyle={tableRowStyle}
          notFoundInfo={notFoundInfo}
          isFilterApplied={isFilterApplied}
        />
      )}
    </TableContainer>
  );
};

export default Table;
