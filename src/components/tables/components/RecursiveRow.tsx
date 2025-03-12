import { useState } from 'react';
import styled from 'styled-components';
import { TableItemWidth, TableRow } from '../../tables/components/types';
import Icon from '../../common/Icons';

interface RecursiveRowProps {
  row: TableRow;
  index: number;
  onClick: any;
  keys: string[];
  handleRowClick: any;
  tableRowStyle: any;
  padding: any;
  columns;
}

export const RecursiveRow = ({
  row,
  index,
  onClick,
  keys,
  handleRowClick,
  tableRowStyle,
  padding,
  columns,
}: RecursiveRowProps) => {
  const [show, setShow] = useState(false);
  const hasChildren = !!row.children && row.children.length > 0;
  const renderTd = (i: number, label) => {
    const item = row[label] || '-';

    if (hasChildren && i == 0) {
      return (
        <Line padding={padding}>
          <IconContainer
            onClick={(e) => {
              e.stopPropagation();
              setShow(!show);
            }}
          >
            <Arrow expanded={show} name="dropdownArrow" />
          </IconContainer>
          {item}
        </Line>
      );
    }

    if (i == 0) {
      return (
        <Line padding={padding}>
          <IconContainer />
          {item}
        </Line>
      );
    }

    return item;
  };

  return (
    <>
      <TR
        $pointer={!!onClick}
        key={`tr-${index}`}
        onClick={() => handleRowClick(row)}
        style={tableRowStyle}
      >
        {keys.map((key: any, i: number) => {
          const width = columns[key]?.width || TableItemWidth.LARGE;

          return (
            <TD width={width} key={`tr-td-${i}`}>
              {renderTd(i, key)}
            </TD>
          );
        })}
      </TR>
      {show &&
        hasChildren &&
        row.children.map((row: TableRow, index: number) => (
          <RecursiveRow
            padding={padding + 15}
            row={row}
            index={index}
            onClick={onClick}
            keys={keys}
            handleRowClick={handleRowClick}
            tableRowStyle={tableRowStyle}
            columns={columns}
          />
        ))}
    </>
  );
};

const IconContainer = styled.div<{ padding?: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  margin-left: -15px;
  padding-right: 3px;
`;

const Line = styled.div<{ padding?: number }>`
  display: flex;
  align-items: center;
  padding-left: ${({ padding }) => padding}px;
`;

const Arrow = styled(Icon)<{ disabled?: boolean; expanded?: boolean }>`
  font-size: 2rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transform: ${({ expanded }) => !expanded && `rotate(-90deg)`};
`;

const TD = styled.td<{ width: string }>`
  padding: 6px 22px;
  height: 44px;
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
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
