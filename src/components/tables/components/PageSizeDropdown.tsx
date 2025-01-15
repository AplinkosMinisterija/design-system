import { useState } from 'react';
import Icon, { IconName } from 'src/components/common/Icons';
import styled from 'styled-components';

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
        <Label>Rodyti</Label>
        <FilterButton $selected={open} onClick={() => setOpen(!open)}>
          <SelectedValueLabel>{value.toString()}</SelectedValueLabel>
          <StyledIcon name={open ? IconName.tableArrowUp : IconName.tableArrowDown} />
        </FilterButton>
      </PageSizeDropdownContainer>
      {open ? (
        <FilterWrapper>
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
        </FilterWrapper>
      ) : null}
    </Container>
  );
};

const PageSizeDropdownContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
`;

const FilterWrapper = styled.div`
  position: relative;
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const FilterButton = styled.div<{ $selected: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 12px;
  min-width: 92px;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme, $selected }) => ($selected ? theme.colors.primary : '#cdd5df')};
  padding: 8px 8px 8px 8px;
  gap: 16px;
  cursor: pointer;
  box-shadow: 0 0 0 4px
    ${({ theme, $selected }) => ($selected ? `${theme.colors.primary}33` : 'transparent')};
`;

const ValueLabel = styled.div`
  color: ${({ theme }) => theme.colors.text?.secondary};
  font-size: 1.6rem;
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
  top: 0px;
  border-radius: 12px;
  box-shadow: 0px 18px 41px #121a5529;
  display: flex;
  flex-direction: column;
  right: 0px;
  width: 92px;
  top: 2px;
`;

const SelectedValueLabel = styled.div`
  color: ${({ theme }) => theme.colors.text?.secondary};
  font-size: 1.6rem;
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