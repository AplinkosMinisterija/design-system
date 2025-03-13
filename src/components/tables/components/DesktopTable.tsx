import { useState } from 'react';
import styled from 'styled-components';
import Icon, { IconName } from '../../../components/common/Icons';
import {
  Columns,
  NotFoundInfoProps,
  SortedColumnsProps,
  TableItemWidth,
  TableRow,
} from '../../../types';
import CheckBox from '../../Checkbox';
import { useKeyAction } from '../../common/hooks';
import NotFoundInfo from '../../tables/components/NotFoundInfo';
import TableLoader from './TableLoader';

export interface DesktopTableProps {
  data?: TableRow[];
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  tableRowStyle?: any;
  customPageName?: string;
  isFilterApplied?: boolean;
  onColumnSort?: ({ key, direction, sortBy }: SortedColumnsProps) => void;
  onClick?: (item: any) => void;
  texts?: {
    filteredItemsNotFound: string;
  };
  selectedItemIdsSet: Set<string | number | undefined>;
  handleToggleItem: (id: string | number | undefined) => void;
  checkable: boolean;
  loading?: boolean;
}

const DesktopTable = ({
  data,
  columns,
  notFoundInfo,
  tableRowStyle,
  isFilterApplied = false,
  onClick,
  texts,
  onColumnSort,
  selectedItemIdsSet,
  handleToggleItem,
  checkable,
  loading = false,
}: DesktopTableProps) => {
  const keys = Object.keys(columns);

  const [sortedColumn, setSortedColumn] = useState<SortedColumnsProps>({});

  const handleRowClick = (row: TableRow) => {
    if (onClick && row?.id) {
      onClick(row);
    }
  };
  const handleKeyDown = useKeyAction(handleRowClick);

  const canSort = !!onColumnSort && !!data?.length;

  const handleColumnClick = (key) => {
    if (!canSort) return;

    const direction =
      sortedColumn.key === key ? (sortedColumn?.direction === 'asc' ? 'desc' : 'asc') : 'asc';

    onColumnSort({ key, direction, sortBy: columns[key]?.sortBy || [key] });

    setSortedColumn({
      key,
      direction,
    });
  };
  const handleKeyDownOnColumn = useKeyAction(handleColumnClick);

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
                onKeyDown={handleKeyDown(row)}
                tabIndex={onClick ? 0 : undefined}
                style={tableRowStyle}
                aria-label={`Row with ID ${row?.id}`}
                role="row"
              >
                {checkable && (
                  <TD width={TableItemWidth.SMALL}>
                    <CheckBox
                      value={selectedItemIdsSet.has(row.id)}
                      onChange={() => handleToggleItem(row.id)}
                      aria-label={`Select row with id ${row.id}`}
                    />
                  </TD>
                )}
                {keys.map((label, i: number) => {
                  const item = row[label] || '-';
                  const width = columns[label]?.width || TableItemWidth.LARGE;

                  return (
                    <TD
                      width={width}
                      key={`tr-td-${i}`}
                      role="cell"
                      aria-label={`${columns[label]?.label}: ${item}`}
                    >
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
        <TR role="row" $pointer={false} $hide_border={true}>
          <TdSecond colSpan={keys.length} role="cell" aria-live="polite" aria-relevant="text">
            {texts?.filteredItemsNotFound || 'Atsiprašome nieko neradome pagal pasirinktus filtrus'}
          </TdSecond>
        </TR>
      );
    } else {
      return (
        <TR role="row" $pointer={false} $hide_border={true}>
          <TdSecond colSpan={keys.length} role="cell" aria-live="polite" aria-relevant="text">
            <NotFoundInfo {...notFoundInfo} />
          </TdSecond>
        </TR>
      );
    }
  };

  return (
    <Wrapper>
      <TableContainer $disabled={loading}>
        <Table role="table">
          <THEAD>
            <TR role="row" $pointer={false}>
              {checkable && <TH width={TableItemWidth.SMALL} role="columnheader" />}

              {keys.map((key: any, i: number) => {
                const column = columns[key];
                const label = column?.label;
                const width = column?.width || TableItemWidth.LARGE;
                const isSelectedKey = key === sortedColumn.key;
                const isSelectedUp = isSelectedKey && sortedColumn?.direction === 'asc';
                const isSelectedDown = isSelectedKey && sortedColumn?.direction === 'desc';

                return (
                  <TH
                    role="columnheader"
                    aria-sort={
                      isSelectedKey
                        ? sortedColumn.direction === 'asc'
                          ? 'ascending'
                          : 'descending'
                        : 'none'
                    }
                    $pointer={!!onColumnSort}
                    onClick={() => {
                      handleColumnClick(key);
                    }}
                    onKeyDown={handleKeyDownOnColumn(key)}
                    tabIndex={onColumnSort ? 0 : undefined}
                    width={width}
                    key={`large-th-${i}`}
                  >
                    <LabelContainer>
                      {label}
                      {canSort && (
                        <IconContainer>
                          <ArrowIconUp $isActive={isSelectedUp} name={IconName.tableArrowUp} />
                          <ArrowIconDown
                            $isActive={isSelectedDown}
                            name={IconName.tableArrowDown}
                          />
                        </IconContainer>
                      )}
                    </LabelContainer>
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
      {loading && <TableLoader />}
    </Wrapper>
  );
};

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

const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StyledTbody = styled.tbody``;

const TableContainer = styled.div<{ $disabled: boolean }>`
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Wrapper = styled.table`
  width: 100%;
  position: relative;
`;

const TD = styled.td`
  padding: 6px 22px;
  height: 44px;
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
`;

const TH = styled.th<{
  $pointer: boolean;
}>`
  padding: 18px 22px;
  height: 44px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.29px;
  color: #9aa4b2;
  cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'default')};
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
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default DesktopTable;
