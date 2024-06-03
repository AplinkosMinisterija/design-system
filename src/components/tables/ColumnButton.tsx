import { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../Checkbox';
import { ErrorMessage } from '../common/ErrorMessage';
import Icon, { IconName } from '../common/Icons';
import Button from '../Button';
import { Columns } from './components/types';

export interface ColumnButtonTexts {
  atLeastOneColumn: string;
  columns: string;
}

export interface ColumnButtonProps {
  columns: Columns;
  onToggle: (columns: Columns) => void;
  texts: ColumnButtonTexts;
  variant?: string;
}

const ColumnButton = ({ columns, onToggle, texts, variant }: ColumnButtonProps) => {
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
      <Button
        variant={variant}
        left={<StyledIcon $variant={variant} name={IconName.settings} />}
        onClick={() => setIsOpen(!isOpen)}
      >
        {texts.columns}
      </Button>
      {isOpen && (
        <OptionContainer>
          {visibleColumnsKeys.map((key) => (
            <div key={`column-${key}`}>
              <StyledCheckbox
                value={columns[key].show}
                label={columns[key].label}
                onChange={() => {
                  handleToggle(key);
                }}
              />
            </div>
          ))}
          <ErrorMessage error={error} />
        </OptionContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const StyledCheckbox = styled(CheckBox)`
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
  gap: 8px;
  overflow-x: auto;
  min-width: 150px;
  z-index: 9999;
`;

const StyledIcon = styled(Icon)<{ $variant: string }>`
  color: ${({ theme, $variant }) =>
    theme.colors.buttons[$variant]?.icon ||
    theme.colors.buttons[$variant || 'primary']?.text ||
    '#9aa4b2'};
  font-size: ${({ theme }) => theme.fontSize.buttons || 1.6}rem;
  cursor: pointer;
`;

export default ColumnButton;
