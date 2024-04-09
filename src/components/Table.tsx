import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Columns, NotFoundInfoProps, TableData } from '../types';
import TableLayout from '../common/table/TableLayout';
import DesktopTable from '../common/table/DesktopTable';
import MobileTable from '../common/table/MobileTable';
import LoaderComponent from '@/common/LoaderComponent';
import { getActiveColumns } from '@/common/table/functions';
import { device } from '@/utils';
import { useMediaQuery } from 'react-responsive';

export interface LoginLayoutProps {
  data?: TableData;
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  onClick?: (id: string) => void;
  tableRowStyle?: any;
  pageName?: string;
  isFilterApplied?: boolean;
  loading?: boolean;
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
}: LoginLayoutProps) => {
  const isMobile = useMediaQuery({ query: device.mobileL });
  const activeColumns = getActiveColumns(columns);

  if (loading) return <LoaderComponent />;

  return (
    <TableLayout data={data} pageName={pageName} loading={loading}>
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
    </TableLayout>
  );
};

export default Table;
