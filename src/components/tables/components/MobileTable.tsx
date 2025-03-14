import { useState } from 'react';
import styled from 'styled-components';
import { useKeyAction } from '../../../components/common/hooks';
import {
  Columns,
  NotFoundInfoProps,
  SortedColumnsProps,
  TableItemWidth,
  TableRow,
} from '../../../types';
import CheckBox from '../../Checkbox';
import Icon, { IconName } from '../../common/Icons';
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

const MobileTable = ({
  data,
  columns,
  notFoundInfo,
  tableRowStyle,
  isFilterApplied = false,
  onClick,
  onColumnSort,
  texts,
  selectedItemIdsSet,
  handleToggleItem,
  checkable,
  loading = false,
}: DesktopTableProps) => {
  const mainLabelsLength = 2;
  const mainLabels = Object.keys(columns).slice(0, mainLabelsLength);
  const restLabels = Object.keys(columns).slice(mainLabelsLength);
  const [sortedColumn, setSortedColumn] = useState<SortedColumnsProps>({});

  const handleRowClick = (row: TableRow) => {
    if (onClick && row?.id) {
      onClick(row);
    }
  };

  const canSort = !!onColumnSort && !!data?.length;

  const handleColumnClick = (key: string) => {
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

  const handleKeyDown = useKeyAction(handleRowClick);
  const RenderRow = (row: TableRow, index: number) => {
    const [expand, setExpand] = useState(false);
    const handleKeyDownOnExpand = useKeyAction(() => setExpand(!expand));

    return (
      <TR
        $expandable={true}
        $pointer={!!onClick}
        key={`tr-${index}`}
        $index={index}
        onClick={() => handleRowClick(row)}
        style={tableRowStyle}
        $checkable={checkable}
        tabIndex={0}
        onKeyDown={handleKeyDown(row)}
        aria-label={`Row ${index + 1}`}
        role="row"
      >
        <RowTD>
          {restLabels?.length ? (
            <StyledIconContainer
              onClick={(e) => {
                e.stopPropagation();
                setExpand(!expand);
              }}
              aria-expanded={expand}
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyDownOnExpand()}
            >
              <StyledIcon expanded={expand} name={IconName.dropdownArrow} />
            </StyledIconContainer>
          ) : null}
        </RowTD>
        {checkable && (
          <TD width={TableItemWidth.SMALL}>
            <CheckBox
              value={selectedItemIdsSet.has(row.id)}
              onChange={() => handleToggleItem(row.id)}
              aria-label={`Select row with id ${row.id}`}
            />
          </TD>
        )}
        {mainLabels.map((label: any, i: number) => (
          <TD key={`tr-td-${i}`} role="cell">
            {row[label] || '-'}
          </TD>
        ))}

        {expand &&
          restLabels?.map((column: any, i: number) => {
            const isEven = i % 2 === 0;

            const expandedItem = (
              <ExpandedColumnContainer key={`tr-td-${i}`}>
                <ExpandedColumnName>{columns?.[column]?.label || ' '}</ExpandedColumnName>
                <ExpandedColumnValue>{row?.[column] || '-'}</ExpandedColumnValue>
              </ExpandedColumnContainer>
            );

            return (
              <>
                {isEven && <RowTD />}
                {isEven && checkable && <RowTD />}
                {expandedItem}
              </>
            );
          })}
      </TR>
    );
  };

  const generateTableContent = () => {
    if (data?.length) {
      return data.map((row: TableRow, index: number) => RenderRow(row, index));
    }

    if (isFilterApplied) {
      return (
        <TR $expandable={false} $pointer={false} $hide_border={true} $index={0}>
          <TdSecond colSpan={mainLabels.length} role="cell" aria-live="polite" aria-relevant="text">
            {texts?.filteredItemsNotFound || 'Atsiprašome nieko neradome pagal pasirinktus filtrus'}
          </TdSecond>
        </TR>
      );
    }

    return (
      <TR $expandable={false} $pointer={false} $hide_border={true} $index={0}>
        <TdSecond colSpan={mainLabels.length} role="cell" aria-live="polite" aria-relevant="text">
          <NotFoundInfo {...notFoundInfo} />
        </TdSecond>
      </TR>
    );
  };

  return (
    <Wrapper>
      <TableContainer $disabled={loading}>
        <CustomTable role="table">
          <THEAD>
            <TR $checkable={checkable} $expandable={true} $pointer={false} $index={0} role="row">
              <ArrowTh />
              {checkable && <ArrowTh />}
              {mainLabels.map((key: any, i: number) => {
                const column = columns?.[key];
                const label = column?.label;
                const isSelectedKey = key === sortedColumn?.key;
                const isSelectedUp = isSelectedKey && sortedColumn?.direction === 'asc';
                const isSelectedDown = isSelectedKey && sortedColumn?.direction === 'desc';

                return (
                  <TH
                    onClick={() => handleColumnClick(key)}
                    key={`tr-th-${i}`}
                    aria-sort={isSelectedKey ? (isSelectedUp ? 'ascending' : 'descending') : 'none'}
                    role="columnheader"
                    tabIndex={0}
                    onKeyDown={handleKeyDownOnColumn(key)}
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

          <tbody>{generateTableContent()}</tbody>
        </CustomTable>
      </TableContainer>
      {loading && <TableLoader />}
    </Wrapper>
  );
};

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const ArrowIconUp = styled(Icon)<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.4')};
`;

const ArrowIconDown = styled(Icon)<{ $isActive: boolean }>`
  margin-top: -6px;
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.4')};
`;

const ExpandedColumnName = styled.div`
  font-size: 1.2rem;
  color: #697586;
`;

const ExpandedColumnValue = styled.div`
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
`;

const ExpandedColumnContainer = styled.td`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-bottom: 6px;
`;

const RowTD = styled.td`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 32px;
`;

const ArrowTh = styled.th`
  padding: 18px 0px;
  text-align: left;
  letter-spacing: 0.29px;
  color: #9aa4b2;
  width: 32px;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const TableContainer = styled.div<{ $disabled: boolean }>`
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  width: 100%;
`;

const CustomTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TH = styled.th`
  padding: 18px 0px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.29px;
  color: #9aa4b2;
`;

const TD = styled.td`
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
  padding: 12px 0;
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
  $index: number;
  $hide_border?: boolean;
  $pointer: boolean;
  $expandable: boolean;
  $checkable: boolean;
}>`
  width: 100%;
  border: none !important;
  display: grid;
  grid-template-columns: 32px ${({ $checkable }) => ($checkable ? '40px' : '')} 1fr 1fr;
  align-items: center;

  border-bottom: ${({ $hide_border }) => ($hide_border ? 'none' : '1px solid #cdd5df')} !important;
  cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'default')};

  ${({ $index }) =>
    $index % 2 !== 0 &&
    `
    background-color: #F8FAFC;
  `}

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const StyledIcon = styled(Icon)<{ $expanded: boolean }>`
  color: #cdd5df;
  font-size: 2.4rem;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0)')};
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default MobileTable;
