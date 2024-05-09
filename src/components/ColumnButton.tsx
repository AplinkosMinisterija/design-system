import { useState } from 'react';
import { CheckBox, FieldWrapper } from 'src';
import styled from 'styled-components';
import Icon, { IconName } from './common/Icons';

export type Columns = {
  [key: string]: Column;
};

export type Column = {
  label: string | JSX.Element;
  mobileOrder?: number;
  desktopOrder?: number;
  show: boolean;
  width?: string;
};

export interface ColumnButtonTexts {
  atLeastOneColumn: string;
  columns: string;
}

export interface ColumnButtonProps {
  columns: Columns;
  onToggle: (columns: any) => void;
  texts: ColumnButtonTexts;
}

const ColumnButton = ({ columns, onToggle, texts }: ColumnButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');

  // Filter out only the visible columns that have a label
  const visibleColumnsKeys = Object.keys(columns).filter((key) => {
    return columns[key].label;
  });

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleToggle = (key) => {
    // Check if the column being toggled is the last visible column
    const isLastVisibleColumn =
      columns[key].show && visibleColumnsKeys.filter((key) => columns[key].show).length === 1;

    // Prevent un-toggling all columns
    if (isLastVisibleColumn) {
      return setError(texts.atLeastOneColumn);
    }

    setError('');

    const updatedColumns = {
      ...columns,
      [key]: {
        ...columns[key],
        show: !columns[key].show,
      },
    };

    onToggle(updatedColumns);
  };

  return (
    <Container tabIndex={1} onBlur={handleBlur}>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        <StyledIcon name={IconName.settings} />
        {texts.columns}
      </StyledButton>
      {isOpen && (
        <OptionContainer>
          <FieldWrapper error={error}>
            {visibleColumnsKeys.map((key) => (
              <div key={`column-${key}`}>
                <StyledSingleCheckbox
                  value={columns[key].show}
                  label={columns[key].label}
                  onChange={() => {
                    handleToggle(key);
                  }}
                />
              </div>
            ))}
          </FieldWrapper>
        </OptionContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const StyledSingleCheckbox = styled(CheckBox)`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: 42px;
  background-color: white;
  box-shadow: 0px 4px 15px #12192614;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-x: auto;
  min-width: 130px;
  z-index: 9999;
`;

const StyledIcon = styled(Icon)`
  color: #9aa4b2;
  font-size: 1.4rem;
  cursor: pointer;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  background-color: white;
  color: #121926;
  border: 1px solid #cdd5df;
  font-weight: normal;
  font-size: 1.4rem;
  :hover {
    opacity: 0.6;
  }
  cursor: pointer;
  width: fit-content;
  padding: 12px;
`;

export default ColumnButton;
