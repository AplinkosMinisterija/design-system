import { useState } from 'react';
import Icon, { IconName } from '../../common/Icons';
import styled from 'styled-components';
import { device } from '../../../utils';

const pageSizeOptions = [10, 20, 50, 100];
const LABEL = 'Įrašų skaičius puslapyje';

export interface PageSizeDropdownProps {
  value: number;
  onChange: (val: number) => void;
}

const PageSizeDropdown = ({ value, onChange }: PageSizeDropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleBlur = (event: React.FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      open && setOpen(false);
    }
  };

  return (
    // Blur bubbles up from the button and the options; the wrapper is not a tab stop.
    <Container onBlur={handleBlur}>
      <PageSizeDropdownContainer>
        <Label>{LABEL}</Label>
        <FilterButton
          type="button"
          $selected={open}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={`${LABEL}: ${value}`}
          onClick={() => setOpen(!open)}
        >
          <SelectedValueLabel>{value.toString()}</SelectedValueLabel>
          <StyledIcon name={open ? IconName.tableArrowUp : IconName.tableArrowDown} />
        </FilterButton>
      </PageSizeDropdownContainer>
      {open ? (
        <FilterContainer role="group" aria-label={LABEL}>
          {pageSizeOptions.map((item) => (
            <ValueLabel
              key={item}
              type="button"
              aria-pressed={item === value}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
            >
              {item.toString()}
            </ValueLabel>
          ))}
        </FilterContainer>
      ) : null}
    </Container>
  );
};

const PageSizeDropdownContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 17px 0 17px 22px;
  @media ${device.mobileL} {
    margin-left: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const FilterButton = styled.button<{ $selected: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 4px;
  min-width: 74px;
  max-width: fit-content;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme, $selected }) => ($selected ? theme.colors.primary : '#cdd5df')};
  padding: 4px 8px 4px 10px;
  gap: 8px;
  font: inherit;
  cursor: pointer;
  box-shadow: 0 0 0 4px
    ${({ theme, $selected }) => ($selected ? `${theme.colors.primary}33` : 'transparent')};
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ValueLabel = styled.button`
  border: none;
  background: none;
  width: 100%;
  font: inherit;
  color: ${({ theme }) => theme.colors.text?.secondary};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 22px;
  white-space: pre;
  padding: 8px 8px 8px 20px;
  text-align: start;
  cursor: pointer;
  &:hover {
    background: #f3f3f7 0% 0% no-repeat padding-box;
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
  }
`;

const FilterContainer = styled.div`
  position: absolute;
  z-index: 8888888;
  padding: 8px 0px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 18px 41px #121a5529;
  display: flex;
  width: 72px;
  flex-direction: column;
  margin-left: 183px;
  margin-top: -14px;
  @media ${device.mobileL} {
    margin-left: 169px;
  }
`;

const SelectedValueLabel = styled.div`
  color: ${({ theme }) => theme.colors.text?.secondary};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 22px;
  white-space: pre;
  text-align: start;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text?.labels};
  font-size: 1.4rem;
  margin-right: 12px;
`;

const StyledIcon = styled(Icon)`
  color: #9aa4b2;
  font-size: 2.1rem;
`;

export default PageSizeDropdown;
