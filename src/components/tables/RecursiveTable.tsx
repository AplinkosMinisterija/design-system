import styled from 'styled-components';
import LoaderComponent from '../common/LoaderComponent';
import NotFoundInfo from '../tables/components/NotFoundInfo';
import TableContainer from '../tables/components/TableContainer';
import { getActiveColumns } from './components/functions';
import { RecursiveRow } from './components/RecursiveRow';
import Icon, { IconName } from '../../components/common/Icons';
import {
  Columns,
  NotFoundInfoProps,
  TableData,
  TableItemWidth,
  TableRow,
} from './components/types';
import { useState } from 'react';
import { useKeyAction } from '../common/hooks';

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
  onColumnSort?: ({ key, direction }: { key: string; direction?: 'asc' | 'desc' }) => void;
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
  onColumnSort,
}: RecursiveTableProps) => {
  const [sortedColumn, setSortedColumn] = useState<{
    key?: string;
    direction?: 'asc' | 'desc';
  }>({});

  const activeColumns = getActiveColumns(columns);
  const keys = Object.keys(activeColumns);

  const handleRowClick = (row: TableRow) => {
    if (onClick && row.id) {
      onClick(`${row.id}`);
    }
  };

  const canSort = !!onColumnSort && !!data?.data?.length;

  const handleColumnClick = (key) => {
    if (!canSort) return;

    const direction =
      sortedColumn.key === key ? (sortedColumn?.direction === 'asc' ? 'desc' : 'asc') : 'asc';

    onColumnSort({ key, direction });

    setSortedColumn({
      key,
      direction,
    });
  };
  const handleKeyDownOnColumn = useKeyAction(handleColumnClick);

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
              const isSelectedKey = key === sortedColumn.key;
              const isSelectedUp = isSelectedKey && sortedColumn?.direction === 'asc';
              const isSelectedDown = isSelectedKey && sortedColumn?.direction === 'desc';

              return (
                <TH
                  width={width}
                  key={`th-${i}`}
                  onClick={() => {
                    handleColumnClick(key);
                  }}
                  onKeyDown={handleKeyDownOnColumn(key)}
                  tabIndex={onColumnSort ? 0 : undefined}
                >
                  <LabelContainer>
                    {item}
                    {canSort && (
                      <IconContainer>
                        <ArrowIconUp $isActive={isSelectedUp} name={IconName.tableArrowUp} />
                        <ArrowIconDown $isActive={isSelectedDown} name={IconName.tableArrowDown} />
                      </IconContainer>
                    )}
                  </LabelContainer>
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

const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrowIconUp = styled(Icon)<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.4')};
`;

const ArrowIconDown = styled(Icon)<{ $isActive: boolean }>`
  margin-top: -6px;
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.4')};
`;

export default RecursiveTable;