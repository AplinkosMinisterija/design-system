import styled from 'styled-components';
import { ErrorMessage } from './ErrorMessage';
import { useKeyAction } from './hooks';

export interface FieldWrapperProps {
  error?: string;
  showError?: boolean;
  label?: string;
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
  className,
  padding = '0',
  onClick,
  handleBlur,
  subLabel,
  bottomLabel,
  secondLabel,
  children,
  labelButton,
}: FieldWrapperProps) => {
  const handleOnKeyDown = useKeyAction(() => !!onClick && onClick());

  const fieldId = label ? `field-${label}` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const subLabelId = subLabel ? `${subLabel}-sublabel` : undefined;

  return (
    <Container
      tabIndex={-1}
      onBlur={handleBlur}
      className={`${className} fieldWrapper`}
      $padding={padding}
      onClick={onClick}
      onKeyDown={handleOnKeyDown()}
    >
      <LabelRow>
        {!!label && (
          <LabelContainer>
            <Label id={fieldId} htmlFor={fieldId}>
              {label}
            </Label>
            {!!subLabel && (
              <SubLabel id={subLabelId} aria-labelledby={subLabelId}>
                {subLabel}
              </SubLabel>
            )}
          </LabelContainer>
        )}
        {secondLabel}
        {labelButton}
      </LabelRow>
      <div className="fieldWrapperChildren" aria-labelledby={fieldId}>
        {children}
      </div>
      {showError && error && <ErrorMessage errorId={errorId} error={error} />}
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
