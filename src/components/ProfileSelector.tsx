import { JSX, useState } from 'react';

import styled from 'styled-components';
import Icon, { IconName } from './common/Icons';

interface Option {
  id: number | string;
  [key: string]: any;
}

const ProfileSelector = ({
  value,
  options,
  onChange,
  getOptionLabel,
  getSelectedOptionLabels,
  variant = 'primary',
  alignRight = false,
  showIcon = true,
  disabled = false,
  className,
}: {
  value: Option;
  options: Option[];
  onChange: (value: Option) => void;
  getOptionLabel?: (option: Option) => string | JSX.Element;
  getSelectedOptionLabels: (option: Option) => { label: string; description?: string };
  variant?: string;
  alignRight?: boolean;
  showIcon?: boolean;
  disabled?: boolean;
  className?: string;
}) => {
  const [showSelect, setShowSelect] = useState(false);
  const selected = getSelectedOptionLabels(value);

  return (
    <Container
      className={className}
      tabIndex={1}
      onClick={() => setShowSelect(!showSelect)}
      onBlur={() => setShowSelect(false)}
      $variant={variant}
    >
      <RelativeContainer>
        <SelectorContainer onClick={() => setShowSelect(true)} $variant={variant}>
          <Column $alignRight={alignRight}>
            <ModuleContainer>
              <TenantLabel $variant={variant} $alignRight={alignRight}>
                {selected.label}
              </TenantLabel>
            </ModuleContainer>
            <SubText $variant={variant} $alignRight={alignRight}>
              {selected.description}
            </SubText>
          </Column>
          {showIcon && <StyledIcon name={IconName.showMore} $variant={variant} />}
        </SelectorContainer>
        {!disabled && showSelect && (
          <OptionsContainer $variant={variant}>
            {options?.map((option, index) => (
              <div key={`profile_select_option_${index}`} onClick={() => onChange(option)}>
                {getOptionLabel ? (
                  getOptionLabel(option)
                ) : (
                  <Option $variant={variant}>{getSelectedOptionLabels(option).label}</Option>
                )}
              </div>
            ))}
          </OptionsContainer>
        )}
      </RelativeContainer>
    </Container>
  );
};

const Container = styled.div<{ $variant: string }>`
  background-color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.selector?.background || 'white'};
  position: relative;
  cursor: pointer;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius?.profileSelector || 0.4}rem;
  height: fit-content !important;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius?.profileSelector || 0.4}rem;
  cursor: pointer;
`;

const Column = styled.div<{ $alignRight: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: ${({ $alignRight }) => ($alignRight ? 'flex-end' : 'flex-start')};
  padding: 8px;
`;

const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const TenantLabel = styled.div<{ $variant: string; $alignRight: boolean }>`
  color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.selector?.label || 'red'};
  text-align: ${({ $alignRight }) => ($alignRight ? 'end' : 'start')};
  font-size: ${({ theme }) => theme.colors.fontSize?.profileSelector || 1.6}rem;
`;

const StyledIcon = styled(Icon)<{ $variant: string }>`
  font-size: 2.4rem;
  color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.selector?.icon || '#101010'};
`;

const OptionsContainer = styled.div<{ $variant: string }>`
  display: block;
  position: absolute;
  z-index: 9999999;
  width: 100%;
  padding: 8px;
  background: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.options?.container || 'white'};
  border-radius: ${({ theme }) => theme.radius?.profileSelector || 0.4}rem;
  opacity: 1;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.02);
  margin-top: 4px;
`;

const Option = styled.div<{ $variant: string }>`
  padding: 0 12px;
  font-size: ${({ theme }) => theme.colors.fontSize?.profileSelector || 1.6}rem;
  border-radius: ${({ theme }) => theme.radius?.profileSelector || 0.4}rem;
  line-height: 36px;
  cursor: pointer;
  color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.options?.text || '#101010'};
  &:hover {
    background: ${({ theme, $variant }) =>
        theme.colors.profileSelector?.[$variant]?.options?.hover || '#f8fafc'}
      0% 0% no-repeat padding-box;
    color: ${({ theme, $variant }) =>
      theme.colors.profileSelector?.[$variant]?.options?.hoverText || '#101010'};
  }
`;

const SubText = styled.div<{ $variant: string; $alignRight: boolean }>`
  font-family: 'Manrope', sans-serif;
  font-size: 1.4rem;
  color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.selector?.description || '#a5b9c0'};
  letter-spacing: 0.1px;
  text-align: ${({ $alignRight }) => ($alignRight ? 'end' : 'start')};
`;

export default ProfileSelector;
