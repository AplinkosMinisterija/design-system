import styled from 'styled-components';
import Icon from '../../common/Icons';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const TableContainer = styled.div<{ $disabled: boolean }>`
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  width: 100%;
`;

export const CustomTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const THEAD = styled.thead`
  width: 100%;
`;

export const TR = styled.tr<{
  $index: number;
  $hide_border?: boolean;
  $pointer: boolean;
  $expandable: boolean;
  $checkable?: boolean;
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

export const TH = styled.th`
  padding: 18px 0px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.29px;
  color: #4b5565;
`;

export const TD = styled.td`
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
  padding: 12px 0;
`;

export const TdSecond = styled.td`
  padding: 13px 12px;
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
`;

export const RowTD = styled.td`
  /* No padding of its own — the toggle inside fills the cell so the whole
     32px track is tappable instead of just the glyph. */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 32px;
`;

export const ArrowTh = styled.th`
  padding: 18px 0px;
  text-align: left;
  letter-spacing: 0.29px;
  color: #9aa4b2;
  width: 32px;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowIconUp = styled(Icon)<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.4')};
`;

export const ArrowIconDown = styled(Icon)<{ $isActive: boolean }>`
  margin-top: -6px;
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.4')};
`;

export const ExpandedColumnContainer = styled.td`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-bottom: 6px;
`;

export const ExpandedColumnName = styled.div`
  font-size: 1.2rem;
  color: #697586;
`;

export const ExpandedColumnValue = styled.div`
  text-align: left;
  font-size: 1.4rem;
  color: #121926;
`;

export const StyledIcon = styled(Icon)<{ $expanded: boolean }>`
  /* #cdd5df sat at 1.5:1 on white — under the 3:1 WCAG 1.4.11 asks of a
     control the user is meant to find. */
  color: #697586;
  font-size: 2.4rem;
  transition: transform 0.15s ease-out;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0)')};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Fills the 32px arrow track and stretches to the row, so the tap target is
     the whole cell rather than the glyph — without padding the rows taller
     and cutting how many records fit on screen. */
  width: 100%;
  align-self: stretch;
  min-height: 44px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover ${StyledIcon} {
    color: #364152;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
    border-radius: 4px;
  }
`;

export const ExpandAllBar = styled.div`
  display: flex;
  padding: 4px 4px 0;
`;

export const ExpandAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  background: transparent;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.29px;
  color: #4b5565;
  cursor: pointer;

  &:hover {
    background-color: #f8fafc;
    color: #121926;
  }

  &:active {
    background-color: #eef2f6;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const ExpandAllIcon = styled(Icon)<{ $expanded: boolean }>`
  font-size: 2rem;
  transition: transform 0.15s ease-out;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0)')};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
