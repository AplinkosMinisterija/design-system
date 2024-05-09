import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styled from 'styled-components';
import { RecursiveRow } from './components/RecursiveRow';
import LoaderComponent from '../common/LoaderComponent';
import NotFoundInfo from '../tables/components/NotFoundInfo';
import {
  Columns,
  NotFoundInfoProps,
  TableData,
  TableItemWidth,
  TableRow,
} from './components/types';
import { getActiveColumns } from './components/functions';
import TableContainer from '../tables/components/TableContainer';

export interface RecursiveTableProps {
  data?: TableData;
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  onClick?: (id: string) => void;
  tableRowStyle?: any;
  pageName?: string;
  isFilterApplied?: boolean;
  loading?: boolean;
  texts?: {
    notFound: string;
  };
}

const RecursiveTable = ({
  data,
  columns,
  notFoundInfo,
  onClick,
  tableRowStyle,
  pageName = 'page',
  loading,
  isFilterApplied = false,
  texts,
}: RecursiveTableProps) => {
  const activeColumns = getActiveColumns(columns);
  const keys = Object.keys(activeColumns);

  const handleRowClick = (row: TableRow) => {
    if (onClick && row.id) {
      onClick(`${row.id}`);
    }
  };

  const GenerateTableContent = ({ data }) => {
    if (data?.length) {
      return (
        <>
          {data?.map((row: TableRow, index: number) => {
            return (
              <RecursiveRow
                columns={columns}
                padding={0}
                row={row}
                index={index}
                onClick={onClick}
                key={`tableRow-${index}`}
                keys={keys}
                handleRowClick={handleRowClick}
                tableRowStyle={tableRowStyle}
              />
            );
          })}
        </>
      );
    }

    if (isFilterApplied) {
      return (
        <TR $pointer={false} $hide_border={true}>
          <TdSecond colSpan={keys.length}>{texts?.notFound || ''}</TdSecond>
        </TR>
      );
    }

    return (
      <TR $pointer={false} $hide_border={true}>
        <TdSecond colSpan={keys.length}>
          <NotFoundInfo {...notFoundInfo} />
        </TdSecond>
      </TR>
    );
  };

  if (loading) return <LoaderComponent />;

  return (
    <TableContainer data={data} pageName={pageName} loading={loading}>
      <Table>
        <THEAD>
          <TR $pointer={false}>
            {keys.map((key: any, i: number) => {
              const item = columns[key]?.label;
              const width = columns[key]?.width || TableItemWidth.LARGE;

              return (
                <TH width={width} key={`th-${i}`}>
                  {item}
                </TH>
              );
            })}
          </TR>
        </THEAD>

        <StyledTbody>
          <GenerateTableContent data={data?.data} />
        </StyledTbody>
      </Table>
    </TableContainer>
  );
};

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTbody = styled.tbody``;

const TH = styled.th<{ width: string }>`
  padding: 18px 22px;
  height: 44px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.29px;
  color: #9aa4b2;
`;

const TR = styled.tr<{
  $hide_border?: boolean;
  $pointer: boolean;
}>`
  border: none !important;
  border-bottom: ${({ $hide_border }) => ($hide_border ? 'none' : '1px solid #cdd5df')} !important;
  cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'default')};
  white-space: nowrap;
  &:nth-child(even) {
    background-color: #f8fafc;
  }
`;

const TdSecond = styled.td`
  padding: 13px 12px;
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
`;

const THEAD = styled.thead`
  width: 100%;
`;

export default RecursiveTable;
