import { useCallback, useId, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ErrorMessage } from './ErrorMessage';
import { FieldControlContext } from './FieldControlContext';
import { useKeyAction } from './hooks';

export interface FieldWrapperProps {
  error?: string;
  showError?: boolean;
  label?: string;
  /** Renders the required mark (" *") after the label. Visual only — validation stays with the consumer. */
  required?: boolean;
  /**
   * Id of the control this labels. Omit and one is generated: the label, the
   * control and the error message are wired together either way.
   */
  htmlFor?: string;
  className?: string;
  padding?: string;
  onClick?: () => void;
  handleBlur?: (event: any) => void;
  bottomLabel?: string;
  subLabel?: string;
  secondLabel?: JSX.Element;
  children: any;
  labelButton?: JSX.Element;
}

const FieldWrapper = ({
  error,
  showError = true,
  label = '',
  required = false,
  className,
  padding = '0',
  onClick,
  handleBlur,
  subLabel,
  bottomLabel,
  secondLabel,
  children,
  labelButton,
  htmlFor,
}: FieldWrapperProps) => {
  const handleKeyDown = useKeyAction(() => !!onClick && onClick(), false);

  // Generated rather than derived from the label text: labels repeat across a
  // page (two "Vardas" fields in one form) and carry spaces and diacritics.
  const generatedId = useId();
  const controlId = htmlFor || generatedId;
  const labelAriaValue = `${controlId}-label`;
  const showErrorMessage = showError && !!error;
  const errorAriaValue = showErrorMessage ? `${controlId}-error` : undefined;
  const subLabelAriaValue = subLabel ? `${controlId}-sublabel` : undefined;

  const [hasLabelledControl, setHasLabelledControl] = useState(false);
  const registerControl = useCallback(() => setHasLabelledControl(true), []);
  const fieldControl = useMemo(
    () => ({ controlId, errorId: errorAriaValue, invalid: showErrorMessage, registerControl }),
    [controlId, errorAriaValue, showErrorMessage, registerControl],
  );

  return (
    <Container
      tabIndex={-1}
      onBlur={handleBlur}
      className={`${className} fieldWrapper`}
      $padding={padding}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <LabelRow>
        {!!label && (
          <LabelContainer>
            <Label id={labelAriaValue} htmlFor={hasLabelledControl ? controlId : undefined}>
              {label}
              {required && <RequiredMark aria-hidden="true"> *</RequiredMark>}
            </Label>
            {!!subLabel && (
              <SubLabel id={subLabelAriaValue} aria-labelledby={subLabelAriaValue}>
                {subLabel}
              </SubLabel>
            )}
          </LabelContainer>
        )}
        {secondLabel}
        {labelButton}
      </LabelRow>
      <div className="fieldWrapperChildren">
        <FieldControlContext.Provider value={fieldControl}>{children}</FieldControlContext.Provider>
      </div>
      {showErrorMessage && <ErrorMessage errorAriaValue={errorAriaValue} error={error} />}
      {bottomLabel && <BottomLabel>{bottomLabel}</BottomLabel>}
    </Container>
  );
};

const Container = styled.div<{ $padding: string }>`
  display: block;
  position: relative;
  padding: ${({ $padding }) => $padding};
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomLabel = styled.div`
  margin-top: 0.6rem;
  font-size: 1.2rem;
  color: #697586;
`;

const Label = styled.label`
  text-align: left;
  font-size: ${({ theme }) => theme.fonts?.fieldLabels || 1.4}rem;
  font-weight: ${({ theme }) => theme.fontWeight?.fieldLabels || 400};
  color: ${({ theme }) => theme.colors.fields?.label || '#101010'};
`;

const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors?.danger || '#fe5b78'};
  white-space: pre;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  margin-bottom: 0.4rem;
`;

const SubLabel = styled.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 13rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`;

export default FieldWrapper;
