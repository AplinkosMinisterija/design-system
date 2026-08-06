import { useState } from 'react';
import { useKeyAction } from '../../common/hooks';
import {
  Columns,
  NotFoundInfoProps,
  SortedColumnsProps,
  TableItemWidth,
  TableRow,
} from '../../../types';
import CheckBox from '../../Checkbox';
import { IconName } from '../../common/Icons';
import NotFoundInfo from '../../tables/components/NotFoundInfo';
import TableLoader from './TableLoader';
import {
  Wrapper,
  TableContainer,
  CustomTable,
  THEAD,
  TR,
  TH,
  TD,
  TdSecond,
  RowTD,
  ArrowTh,
  LabelContainer,
  IconContainer,
  ArrowIconUp,
  ArrowIconDown,
  ExpandedColumnContainer,
  ExpandedColumnName,
  ExpandedColumnValue,
  StyledIcon,
  StyledIconContainer,
} from './MobileTable.styles';

export interface MobileTableProps {
  data?: TableRow[];
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  tableRowStyle?: any;
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

// Mobile layout displays first 2 columns as primary, remainder in expandable rows
const MAIN_LABELS_COUNT = 2;

interface ExpandButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpandButton = ({ isExpanded, onToggle }: ExpandButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <StyledIconContainer
      onClick={handleClick}
      aria-expanded={isExpanded}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <StyledIcon $expanded={isExpanded} name={IconName.dropdownArrow} />
    </StyledIconContainer>
  );
};

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
}: MobileTableProps) => {
  const mainLabels = Object.keys(columns).slice(0, MAIN_LABELS_COUNT);
  const restLabels = Object.keys(columns).slice(MAIN_LABELS_COUNT);
  const [sortedColumn, setSortedColumn] = useState<SortedColumnsProps>({});
  const [expandedRowIds, setExpandedRowIds] = useState<Set<string | number | undefined>>(new Set());

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

  const handleKeyDownOnColumn = useKeyAction(
    (key: string | undefined) => key && handleColumnClick(key),
  );

  const toggleRowExpansion = (rowId: string | number | undefined) => {
    setExpandedRowIds((prev) => {
      const next = new Set(prev);
      if (next.has(rowId)) {
        next.delete(rowId);
      } else {
        next.add(rowId);
      }
      return next;
    });
  };

  const allRowsExpanded =
    !!data?.length && data.length === expandedRowIds.size && data.length > 0;

  const toggleAllRows = () => {
    if (allRowsExpanded) {
      setExpandedRowIds(new Set());
    } else if (data?.length) {
      setExpandedRowIds(new Set(data.map((row) => row.id)));
    }
  };

  const handleKeyDown = useKeyAction((row: TableRow | undefined) =>
    row ? handleRowClick(row) : undefined,
  );
  const RenderRow = (row: TableRow, index: number) => {
    const isRowExpanded = expandedRowIds.has(row.id);

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
        onKeyDown={handleKeyDown}
        aria-label={`Row ${index + 1}`}
        role="row"
      >
        <RowTD>
          {restLabels?.length ? (
            <ExpandButton
              isExpanded={isRowExpanded}
              onToggle={() => toggleRowExpansion(row.id)}
            />
          ) : null}
        </RowTD>
        {checkable && (
          <TD width={TableItemWidth.SMALL}>
            <CheckBox
              value={selectedItemIdsSet.has(row.id)}
              onChange={() => handleToggleItem(row.id)}
              aria-label={`Select row with id ${row.id}`}
              disabled={row.disabled}
            />
          </TD>
        )}
        {mainLabels.map((label: any, i: number) => (
          <TD key={`tr-td-${i}`} role="cell">
            {row[label] || '-'}
          </TD>
        ))}

        {isRowExpanded &&
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
              <ArrowTh>
                {restLabels?.length ? (
                  <ExpandButton
                    isExpanded={allRowsExpanded}
                    onToggle={toggleAllRows}
                  />
                ) : null}
              </ArrowTh>
              {checkable && <ArrowTh />}
              {mainLabels.map((key: any, i: number) => {
                const column = columns?.[key];
                const label = column?.label;
                const isSelectedKey = key === sortedColumn?.key;
                const isSelectedUp = isSelectedKey && sortedColumn?.direction === 'asc';
                const isSelectedDown = isSelectedKey && sortedColumn?.direction === 'desc';
                const enableColumnSort = canSort && !column?.disableSort;

                const handleHeaderClick = () => {
                  if (enableColumnSort) {
                    handleColumnClick(key);
                  }
                };

                const ariaSort = isSelectedKey
                  ? isSelectedUp
                    ? 'ascending'
                    : 'descending'
                  : 'none';

                return (
                  <TH
                    onClick={handleHeaderClick}
                    key={`tr-th-${i}`}
                    aria-sort={ariaSort}
                    role="columnheader"
                    tabIndex={0}
                    onKeyDown={handleKeyDownOnColumn(key)}
                  >
                    <LabelContainer>
                      {label}
                      {enableColumnSort && (
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

export default MobileTable;
