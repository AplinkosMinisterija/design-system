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
  className,
}: {
  value: Option;
  options: Option[];
  onChange: (value: Option) => void;
  getOptionLabel?: (option: Option) => string | JSX.Element;
  getSelectedOptionLabels: (option: Option) => { label: string; description?: string };
  variant?: string;
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
          <Column>
            <ModuleContainer>
              <TenantLabel>{selected.label}</TenantLabel>
            </ModuleContainer>
            <SubText $variant={variant}>{selected.description}</SubText>
          </Column>
          <StyledIcon name={IconName.showMore} $variant={variant} />
        </SelectorContainer>
        {showSelect && (
          <OptionsContainer>
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
  height: 56px;
  background-color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.selector?.background || 'white'};
  position: relative;
  cursor: pointer;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius?.profileSelector || 0.4}rem;
  margin-bottom: 20px;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const SelectorContainer = styled.div<{ $variant: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0px 16px 0 10px;
  margin-bottom: 4px;
  color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.selector?.label || '#f8fafc'};
  background: #ffffff1f 0% 0% no-repeat padding-box;
  border-radius: ${({ theme }) => theme.radius?.profileSelector || 0.4}rem;
  cursor: pointer;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const TenantLabel = styled.div`
  font-size: ${({ theme }) => theme.colors.fontSize?.profileSelector || 1.6}rem;
`;

const StyledIcon = styled(Icon)<{ $variant: string }>`
  font-size: 2.4rem;
  color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.selector?.icon || '#101010'};
`;

const OptionsContainer = styled.div`
  display: block;
  position: absolute;
  z-index: 9;
  width: 100%;
  padding: 9px 6px 11px 6px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: ${({ theme }) => theme.radius?.profileSelector || 0.4}rem;
  opacity: 1;
`;

const Option = styled.div<{ $variant: string }>`
  padding: 0 12px;
  font-size: ${({ theme }) => theme.colors.fontSize?.profileSelector || 1.6}rem;
  border-radius: ${({ theme }) => (theme.radius?.profileSelector || 0.4) / 2}rem;
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

const SubText = styled.div<{ $variant: string }>`
  font-family: 'Manrope', sans-serif;
  font-size: 1.2rem;
  color: ${({ theme, $variant }) =>
    theme.colors.profileSelector?.[$variant]?.selector?.description || '#a5b9c0'}
  letter-spacing: 0.1px;
`;

export default ProfileSelector;
