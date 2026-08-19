import { JSX, useId, useState } from 'react';

import styled from 'styled-components';
import { useOptionNavigation } from './common/hooks';
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
  label = 'Pasirinkti profilį',
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
  /** Names the control by its PURPOSE — the value alone never says what it picks. */
  label?: string;
  className?: string;
}) => {
  const [showSelect, setShowSelect] = useState(false);
  const selected = getSelectedOptionLabels(value);

  const listId = `${useId()}-listbox`;
  // `options` is optional at the call sites below (`options?.map`), so navigation
  // must see a list either way.
  const optionList = options || [];
  const { activeOptionId, handleKeyDown } = useOptionNavigation({
    options: optionList,
    disabled,
    showSelect,
    setShowSelect,
    onSelect: onChange,
    listId,
  });

  return (
    <Container
      className={className}
      // Was tabIndex={1}: a positive tab index jumps the whole page's tab order
      // to this control before anything else.
      tabIndex={disabled ? -1 : 0}
      role="combobox"
      aria-expanded={showSelect}
      aria-controls={showSelect ? listId : undefined}
      aria-haspopup="listbox"
      aria-activedescendant={activeOptionId}
      aria-disabled={disabled}
      aria-label={label}
      onKeyDown={handleKeyDown}
      onClick={() => setShowSelect(!showSelect)}
      onBlur={() => setShowSelect(false)}
      $variant={variant}
    >
      <RelativeContainer>
        <SelectorContainer onClick={() => setShowSelect(true)}>
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
          <OptionsContainer id={listId} role="listbox" $variant={variant}>
            {options?.map((option, index) => (
              <div
                key={`profile_select_option_${index}`}
                id={`${listId}-option-${index}`}
                role="option"
                aria-selected={option.id === value?.id}
                onClick={() => onChange(option)}
              >
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
  gap: 2px;
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
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.05) !important;
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
