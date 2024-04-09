import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styled from 'styled-components';
import { Columns, NotFoundInfoProps, TableItemWidth, TableRow } from '../../types';
import NotFoundInfo from '@/common/table/NotFoundInfo';

export interface DesktopTableProps {
  data?: TableRow[];
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  tableRowStyle?: any;
  customPageName?: string;
  isFilterApplied?: boolean;
  onClick?: (id: string) => void;
  texts?: {
    notFound: string;
  };
}

const DesktopTable = ({
  data,
  columns,
  notFoundInfo,
  tableRowStyle,
  isFilterApplied = false,
  onClick,
  texts,
}: DesktopTableProps) => {
  const keys = Object.keys(columns);

  const handleRowClick = (row: TableRow) => {
    if (onClick && row.id) {
      onClick(`${row.id}`);
    }
  };

  const GenerateTableContent = ({ data }: { data: TableRow[] }) => {
    if (data?.length) {
      return (
        <>
          {data?.map((row: TableRow, index: number) => {
            return (
              <TR
                $pointer={!!onClick}
                key={`tr-${index}`}
                onClick={() => handleRowClick(row)}
                style={tableRowStyle}
              >
                {keys.map((label, i: number) => {
                  const item = row[label] || '-';
                  const width = columns[label]?.width || TableItemWidth.LARGE;
                  return (
                    <TD width={width} key={`tr-td-${i}`}>
                      {item}
                    </TD>
                  );
                })}
              </TR>
            );
          })}
        </>
      );
    } else if (isFilterApplied) {
      return (
        <TR $pointer={false} $hide_border={true}>
          <TdSecond colSpan={keys.length}>{texts?.notFound || ''}</TdSecond>
        </TR>
      );
    } else {
      return (
        <TR $pointer={false} $hide_border={true}>
          <TdSecond colSpan={keys.length}>
            <NotFoundInfo {...notFoundInfo} />
          </TdSecond>
        </TR>
      );
    }
  };

  return (
    <TableContainer>
      <Table>
        <THEAD>
          <TR $pointer={false}>
            {keys.map((key: any, i: number) => {
              const item = columns[key]?.label;
              const width = columns[key]?.width || TableItemWidth.LARGE;

              return (
                <TH width={width} key={`large-th-${i}`}>
                  {item}
                </TH>
              );
            })}
          </TR>
        </THEAD>

        <StyledTbody>
          <GenerateTableContent data={data || []} />
        </StyledTbody>
      </Table>
    </TableContainer>
  );
};

const StyledTbody = styled.tbody``;

const TableContainer = styled.div`
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TD = styled.td`
  padding: 6px 22px;
  height: 44px;
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
`;

const TH = styled.th`
  padding: 18px 22px;
  height: 44px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.29px;
  color: #9aa4b2;
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

const TR = styled.tr<{
  $hide_border?: boolean;
  $pointer: boolean;
}>`
  border: none;
  border-bottom: ${({ $hide_border }) => ($hide_border ? 'none' : '1px solid #cdd5df')};
  cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'default')};
  white-space: nowrap;
  &:nth-child(even) {
    background-color: #f8fafc;
  }
`;

export default DesktopTable;
