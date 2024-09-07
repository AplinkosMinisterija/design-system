import { useState } from 'react';
import styled from 'styled-components';
import { Columns, NotFoundInfoProps, TableItemWidth, TableRow } from '../../../types';
import Icon, { IconName } from '../../common/Icons';
import NotFoundInfo from '../../tables/components/NotFoundInfo';

export interface DesktopTableProps {
  data?: TableRow[];
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  tableRowStyle?: any;
  customPageName?: string;
  isFilterApplied?: boolean;
  onColumnSort?: ({ key, direction }: { key: string; direction?: 'asc' | 'desc' }) => void;
  onClick?: (item:any) => void;
  texts?: {
    notFound: string;
  };
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
}: DesktopTableProps) => {
  const keys = Object.keys(columns);
  const isFirstSmallColumn = columns[keys[0]].width === TableItemWidth.SMALL;
  const mainLabelsLength = isFirstSmallColumn ? 3 : 2;
  const mainLabels = Object.keys(columns).slice(0, mainLabelsLength);
  const restLabels = Object.keys(columns).slice(mainLabelsLength);
  const [sortedColumn, setSortedColumn] = useState<{
    key?: string;
    direction?: 'asc' | 'desc';
  }>({});

  const handleRowClick = (row: TableRow) => {
    if (onClick && row?.id) {
      onClick(row);
    }
  };

  const canSort = !!onColumnSort && !!data?.length;

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

  const RenderRow = (row: TableRow, index: number) => {
    const [expand, setExpand] = useState(false);

    return (
      <MainTR
        $hasSmallColumnLabel={isFirstSmallColumn}
        $expandable={true}
        $pointer={!!onClick}
        key={`tr-${index}`}
        $index={index}
        onClick={() => handleRowClick(row)}
        style={tableRowStyle}
      >
        <RowTD>
          {restLabels?.length ? (
            <StyledIconContainer
              onClick={(e) => {
                e.stopPropagation();
                setExpand(!expand);
              }}
            >
              <StyledIcon expanded={expand} name={IconName.dropdownArrow} />
            </StyledIconContainer>
          ) : null}
        </RowTD>
        {mainLabels.map((label: any, i: number) => {
          return <TD key={`tr-td-${i}`}>{row[label] || '-'}</TD>;
        })}

        {expand &&
          restLabels?.map((column: any, i: number) => {
            const expandedItem = (
              <ExpandedColumnContainer key={`tr-td-${i}`}>
                <ExpandedColumnName>{columns[column].label || ' '}</ExpandedColumnName>
                <ExpandedColumnValue>{row[column] || '-'}</ExpandedColumnValue>
              </ExpandedColumnContainer>
            );

            if (i % 2 == 0 && isFirstSmallColumn) {
              return (
                <>
                  <RowTD />
                  <RowTD />
                  {expandedItem}
                </>
              );
            }

            if (i % 2 == 0) {
              return (
                <>
                  <RowTD />
                  {expandedItem}
                </>
              );
            }
            return expandedItem;
          })}
      </MainTR>
    );
  };

  const generateTableContent = () => {
    if (data?.length) {
      return data.map((row: TableRow, index: number) => RenderRow(row, index));
    }

    if (isFilterApplied) {
      return (
        <TR $expandable={false} $pointer={false} $hide_border={true} $index={0}>
          <TdSecond colSpan={mainLabels.length}>{texts?.notFound || ''}</TdSecond>
        </TR>
      );
    }

    return (
      <TR $expandable={false} $pointer={false} $hide_border={true} $index={0}>
        <TdSecond colSpan={mainLabels.length}>
          <NotFoundInfo {...notFoundInfo} />
        </TdSecond>
      </TR>
    );
  };

  return (
    <TableContainer>
      <CustomTable>
        <THEAD>
          <MainTR
            $hasSmallColumnLabel={isFirstSmallColumn}
            $expandable={true}
            $pointer={false}
            $index={0}
          >
            <ArrowTh />
            {mainLabels.map((key: any, i: number) => {
              const column = columns[key];
              const label = column?.label;
              const isSelectedKey = key === sortedColumn.key;
              const isSelectedUp = isSelectedKey && sortedColumn?.direction === 'asc';
              const isSelectedDown = isSelectedKey && sortedColumn?.direction === 'desc';

              return (
                <TH
                  onClick={() => {
                    handleColumnClick(key);
                  }}
                  key={`tr-th-${i}`}
                >
                  <LabelContainer>
                    {label}
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
          </MainTR>
        </THEAD>

        <tbody>{generateTableContent()}</tbody>
      </CustomTable>
    </TableContainer>
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

const TableContainer = styled.div`
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

const MainTR = styled.tr<{
  $index: number;
  $hide_border?: boolean;
  $hasSmallColumnLabel?: boolean;
  $pointer: boolean;
  $expandable: boolean;
}>`
  width: 100%;
  border: none !important;
  display: grid;
  grid-template-columns: 32px 40px 1fr 1fr;
  align-items: center;

  ${({ $expandable, $hasSmallColumnLabel }) =>
    $expandable &&
    `
    display: grid;
    grid-template-columns: 32px ${$hasSmallColumnLabel ? '40px' : ''}  1fr 1fr;
    align-items: center;
  `}

  border-bottom: ${({ $hide_border }) => ($hide_border ? 'none' : '1px solid #cdd5df')} !important;
  cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'default')};

  ${({ $index }) =>
    $index % 2 !== 0 &&
    `
    background-color: #F8FAFC;
  `}
`;

const TR = styled.tr<{
  $index: number;
  $hide_border?: boolean;
  $pointer: boolean;
  $expandable: boolean;
}>`
  width: 100%;
  border: none !important;
  display: grid;
  grid-template-columns: 32px 40px 1fr 1fr;
  align-items: center;

  ${({ $expandable }) =>
    $expandable &&
    `
    display: grid;
    grid-template-columns: 32px 1fr 1fr;
    align-items: center;
  `}

  border-bottom: ${({ $hide_border }) => ($hide_border ? 'none' : '1px solid #cdd5df')} !important;
  cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'default')};

  ${({ $index }) =>
    $index % 2 !== 0 &&
    `
    background-color: #F8FAFC;
  `}
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
`;

export default MobileTable;
