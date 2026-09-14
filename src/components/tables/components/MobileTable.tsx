import { Fragment, useEffect, useState } from 'react';
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
  ExpandAllBar,
  ExpandAllButton,
  ExpandAllIcon,
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
    expandAll?: string;
    collapseAll?: string;
    expandRow?: string;
    collapseRow?: string;
  };
  selectedItemIdsSet: Set<string | number | undefined>;
  handleToggleItem: (id: string | number | undefined) => void;
  checkable: boolean;
  loading?: boolean;
  defaultExpanded?: boolean;
}

// Mobile layout displays first 2 columns as primary, remainder in expandable rows
const MAIN_LABELS_COUNT = 2;

const DEFAULT_TEXTS = {
  expandAll: 'Išskleisti visus',
  collapseAll: 'Suskleisti visus',
  expandRow: 'Išskleisti eilutę',
  collapseRow: 'Suskleisti eilutę',
};

interface ExpandButtonProps {
  isExpanded: boolean;
  label: string;
  onToggle: () => void;
}

const ExpandButton = ({ isExpanded, label, onToggle }: ExpandButtonProps) => {
  // The row around it opens the record; the toggle must not.
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <StyledIconContainer
      type="button"
      onClick={handleClick}
      aria-expanded={isExpanded}
      aria-label={label}
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
  defaultExpanded = false,
}: MobileTableProps) => {
  const mainLabels = Object.keys(columns).slice(0, MAIN_LABELS_COUNT);
  const restLabels = Object.keys(columns).slice(MAIN_LABELS_COUNT);
  const isExpandable = !!restLabels.length;
  const expandAllText = texts?.expandAll || DEFAULT_TEXTS.expandAll;
  const collapseAllText = texts?.collapseAll || DEFAULT_TEXTS.collapseAll;
  const expandRowText = texts?.expandRow || DEFAULT_TEXTS.expandRow;
  const collapseRowText = texts?.collapseRow || DEFAULT_TEXTS.collapseRow;
  const [sortedColumn, setSortedColumn] = useState<SortedColumnsProps>({});
  // The rows toggled AWAY from `defaultExpanded`, not the open ones — so a row
  // nobody has touched follows the default however the data changes under it.
  const [overriddenRowIds, setOverriddenRowIds] = useState<Set<string | number | undefined>>(
    new Set(),
  );

  const isRowExpanded = (rowId: string | number | undefined) =>
    overriddenRowIds.has(rowId) !== defaultExpanded;

  useEffect(() => {
    // An opted-in table keeps the user's own collapses across refetches.
    if (defaultExpanded) return;

    // Bail out when nothing is expanded: an unconditional `new Set()` is always
    // a new reference, so it re-rendered the table on every data change.
    setOverriddenRowIds((overridden) => (overridden.size ? new Set() : overridden));
  }, [data, defaultExpanded]);

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
    setOverriddenRowIds((prev) => {
      const next = new Set(prev);
      if (next.has(rowId)) {
        next.delete(rowId);
      } else {
        next.add(rowId);
      }
      return next;
    });
  };

  const allRowsExpanded = !!data?.length && data.every((row) => isRowExpanded(row.id));

  const toggleAllRows = () => {
    if (!data?.length) return;

    const shouldExpand = !allRowsExpanded;

    setOverriddenRowIds((prev) => {
      const next = new Set(prev);
      data.forEach((row) =>
        shouldExpand === defaultExpanded ? next.delete(row.id) : next.add(row.id),
      );
      return next;
    });
  };

  const handleKeyDown = useKeyAction((row: TableRow | undefined) =>
    row ? handleRowClick(row) : undefined,
  );
  const RenderRow = (row: TableRow, index: number) => {
    const expanded = isRowExpanded(row.id);

    return (
      <TR
        $expandable={true}
        $pointer={!!onClick}
        key={`tr-${index}`}
        $index={index}
        onClick={() => handleRowClick(row)}
        style={tableRowStyle}
        $checkable={checkable}
        // Focusable only when there is something to activate — a focus stop that
        // does nothing is worse than no focus stop (this is what `DesktopTable`
        // has always done).
        tabIndex={onClick ? 0 : undefined}
        // `handleKeyDown(row)`, not `handleKeyDown`: the hook is curried for the
        // "action needs the item" form. Handed the raw handler, React called it
        // WITH THE EVENT, the hook read the event as the item and invoked the
        // action with nothing — so Enter on a focused row did nothing at all,
        // while `tabIndex` advertised the row as interactive (WCAG 2.1.1).
        onKeyDown={handleKeyDown(row)}
        aria-label={`Row ${index + 1}`}
        role="row"
      >
        <RowTD>
          {isExpandable ? (
            <ExpandButton
              isExpanded={expanded}
              label={expanded ? collapseRowText : expandRowText}
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

        {expanded &&
          restLabels?.map((column: any, i: number) => {
            const isEven = i % 2 === 0;

            // The key belongs on the element this `map` RETURNS. It used to sit
            // on the inner container while the returned fragment had none, so
            // expanding a row logged "Each child in a list should have a unique
            // key" in every consuming app.
            return (
              <Fragment key={`tr-td-${i}`}>
                {isEven && <RowTD />}
                {isEven && checkable && <RowTD />}
                <ExpandedColumnContainer>
                  <ExpandedColumnName>{columns?.[column]?.label || ' '}</ExpandedColumnName>
                  <ExpandedColumnValue>{row?.[column] || '-'}</ExpandedColumnValue>
                </ExpandedColumnContainer>
              </Fragment>
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
      {isExpandable && !!data?.length && (
        <ExpandAllBar>
          <ExpandAllButton type="button" onClick={toggleAllRows} aria-expanded={allRowsExpanded}>
            <ExpandAllIcon $expanded={allRowsExpanded} name={IconName.dropdownArrow} />
            {allRowsExpanded ? collapseAllText : expandAllText}
          </ExpandAllButton>
        </ExpandAllBar>
      )}
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
