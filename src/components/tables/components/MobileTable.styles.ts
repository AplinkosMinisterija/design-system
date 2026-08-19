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
  padding: 12px;
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
  color: #cdd5df;
  font-size: 2.4rem;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
