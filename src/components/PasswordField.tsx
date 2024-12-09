import { useState } from 'react';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import { useKeyAction } from './common/hooks';
import Icon from './common/Icons';
import TextFieldInput from './common/TextFieldInput';
export interface TextFieldProps {
  value?: string | number;
  name?: string;
  error?: string;
  showError?: boolean;
  label?: string;
  className?: string;
  padding?: string;
  onChange?: (option?: any) => void;
  bottomLabel?: string;
  disabled?: boolean;
  height?: number;
  onInputClick?: () => void;
  secondLabel?: JSX.Element;
  placeholder?: string;
}

const PasswordField = ({
  value,
  secondLabel,
  name,
  error,
  showError = true,
  label,
  className,
  padding,
  onChange,
  placeholder,
  disabled,
  height,
  onInputClick,
}: TextFieldProps) => {
  const [show, setShow] = useState(false);
  const handleOnKeyDown = useKeyAction(() => setShow(!show));

  return (
    <FieldWrapper
      padding={padding}
      secondLabel={secondLabel}
      className={className}
      label={label}
      error={error}
      showError={showError}
    >
      <TextFieldInput
        label={label}
        value={value}
        type={show ? 'text' : 'password'}
        name={name}
        error={error}
        right={
          <IconContainer
            onClick={() => setShow(!show)}
            aria-label={show ? 'Hide password' : 'Show password'}
            aria-pressed={show}
            role="button"
            tabIndex={0}
            onKeyDown={handleOnKeyDown()}
          >
            <StyledIcon name={show ? 'visibleOn' : 'visibleOff'} />
          </IconContainer>
        }
        onChange={onChange}
        disabled={disabled}
        height={height}
        onInputClick={onInputClick}
        placeholder={placeholder}
      />
    </FieldWrapper>
  );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  color: #9aa4b2;
  font-size: 2rem;
`;

export default PasswordField;
