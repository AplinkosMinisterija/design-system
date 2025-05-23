import { useState } from 'react';
import Icon, { IconName } from '../../common/Icons';
import styled from 'styled-components';
import { device } from '../../../utils';

const pageSizeOptions = [10, 20, 50, 100];

export interface PageSizeDropdownProps {
  value: number;
  onChange: (val: number) => void;
}

const PageSizeDropdown = ({ value, onChange }: PageSizeDropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <Container tabIndex={0} onBlur={handleBlur}>
      <PageSizeDropdownContainer>
        <Label>Įrašų skaičius puslapyje</Label>
        <FilterButton $selected={open} onClick={() => setOpen(!open)}>
          <SelectedValueLabel>{value.toString()}</SelectedValueLabel>
          <StyledIcon name={open ? IconName.tableArrowUp : IconName.tableArrowDown} />
        </FilterButton>
      </PageSizeDropdownContainer>
      {open ? (
        <FilterContainer>
          {pageSizeOptions?.map((item) => {
            return (
              <ValueLabel
                key={item}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
              >
                {item.toString()}
              </ValueLabel>
            );
          })}
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
  &:focus {
    outline: none;
  }
`;

const FilterButton = styled.div<{ $selected: boolean }>`
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
  cursor: pointer;
  box-shadow: 0 0 0 4px
    ${({ theme, $selected }) => ($selected ? `${theme.colors.primary}33` : 'transparent')};
`;

const ValueLabel = styled.div`
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