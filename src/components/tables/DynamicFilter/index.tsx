import { map } from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useKeyAction } from '../../../components/common/hooks';
import { DynamicFilterProps, FilterConfig } from '../../../types';
import { device, FilterInputTypes, formatDate, useWindowSize } from '../../../utils';
import Icon, { IconName } from '../../common/Icons';
import Loader from '../../common/Loader';
import Popup from '../../layouts/Popup';
import Filter from './Filter';

const mapFilters = (
  filterConfig: { [key: string]: FilterConfig },
  filters?: { [key: string]: any },
): any[] => {
  const applied: any[] = [];
  if (filters) {
    map(filterConfig, (config) => {
      const optionLabel = config?.optionLabel;
      const hasOptionLabelFunction = !!optionLabel;

      const filter: any = filters?.[config.key];
      if (filter) {
        const multiSelects = [FilterInputTypes.multiselect, FilterInputTypes.asyncMultiSelect];
        const selects = [FilterInputTypes.singleSelect, FilterInputTypes.asyncSingleSelect];

        const label = `${config.label}:`;

        if (config.inputType === FilterInputTypes.date) {
          applied.push({
            key: config.key,
            label: `${label} ${formatDate(filter)}`,
          });
        } else if (multiSelects.includes(config.inputType)) {
          if (filter.length === 1) {
            applied.push(
              ...map(filter, (item: any) => ({
                key: config.key,
                id: item.id,
                label: `${label} ${hasOptionLabelFunction ? optionLabel(item) : item.label}`,
              })),
            );
          } else if (filter.length > 1) {
            applied.push({ key: config.key, label: label, count: filter.length });
          }
        } else if (selects.includes(config.inputType)) {
          applied.push({
            key: config.key,
            label: `${label} ${hasOptionLabelFunction ? optionLabel(filter) : filter.label}`,
          });
        } else if (config.inputType === FilterInputTypes.checkbox) {
          applied.push({
            key: config.key,
            label: `${label}`,
          });
        } else {
          applied.push({
            key: config.key,
            label: `${label} ${filter}`,
          });
        }
      }
    });
  }
  return applied.flat();
};

const DynamicFilter = ({
  loading = false,
  disabled = false,
  className,
  filterConfig,
  rowConfig,
  onSetFilters,
  filters,
  texts = {
    clearAll: 'Išvalyti filtrus',
    filter: 'Filtruoti',
  },
}: DynamicFilterProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<any[]>([]);

  useEffect(() => {
    setAppliedFilters(mapFilters(filterConfig, filters));
  }, [filters, filterConfig]);

  const handleClearFilter = (appliedFilter: any) => {
    const { [appliedFilter.key]: key, ...rest } = filters;
    if (appliedFilter.id) {
      onSetFilters({
        ...rest,
        [appliedFilter.key]: key.filter((filter: any) => filter.id !== appliedFilter.id),
      });
      return;
    }
    onSetFilters(rest);
  };

  const handleKeyDownOnFilter = useKeyAction(() => setShowFilters(true), disabled);
  const handleKeyDownOnRemoveFilter = useKeyAction((appliedFilter) => {
    handleClearFilter(appliedFilter);
  }, disabled);

  const isMobile = useWindowSize(device.mobileL);
  const title = texts?.filter || 'Filtrai';

  return (
    <>
      <Container>
        {!isMobile &&
          map(appliedFilters, (appliedFilter, index) => (
            <Tag
              key={`${appliedFilter.key}_${appliedFilter.id || index}`}
              aria-label={`Applied filter: ${appliedFilter?.label}`}
            >
              {appliedFilter?.count > 1 ? (
                <>
                  <TextContainer>{appliedFilter?.label}</TextContainer>
                  <TagCount>{appliedFilter?.count}</TagCount>
                </>
              ) : (
                <TextContainer>{appliedFilter?.label}</TextContainer>
              )}

              <CloseIconContainer
                role="button"
                tabIndex={0}
                aria-label={`Remove filter: ${appliedFilter?.label}`}
                onClick={() => handleClearFilter(appliedFilter)}
                onKeyDown={handleKeyDownOnRemoveFilter(appliedFilter)}
              >
                <CloseIcon name={IconName.close} />
              </CloseIconContainer>
            </Tag>
          ))}
        <Wrapper
          className={className}
          disabled={disabled}
          onClick={() => setShowFilters(true)}
          role="button"
          tabIndex={0}
          aria-label="Open filter menu"
          onKeyDown={handleKeyDownOnFilter}
        >
          <StyledButton disabled={disabled} aria-disabled={disabled}>
            <StyledIcon name={IconName.filter} />
            {loading ? <Loader size={'22'} /> : 'Filtrai'}
            <Count aria-label={`${appliedFilters.length} filters applied`}>
              {appliedFilters.length}
            </Count>
          </StyledButton>
        </Wrapper>
      </Container>

      <Popup
        visible={showFilters}
        onClose={() => setShowFilters(false)}
        ariaLabelledby="filtro-modalo-pavadinimas"
      >
        <FilterWraper>
          <VisuallyHidden id="filtro-modalo-pavadinimas">{title}</VisuallyHidden>
          <Filter
            values={filters}
            filters={filterConfig}
            rowConfig={rowConfig}
            onSubmit={(values) => {
              const copy = { ...values };
              Object.keys(copy).forEach((key) => {
                if (copy?.[key] && typeof copy[key] === 'string') {
                  copy[key] = copy?.[key]?.trim();
                }
              });
              onSetFilters(copy);
              setShowFilters(false);
            }}
            texts={texts}
          />
        </FilterWraper>
      </Popup>
    </>
  );
};

const VisuallyHidden = styled.h2`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 8px;
`;
const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors?.filterText || theme.colors.primary};
  font-size: 2rem;
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  cursor: pointer;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const TextContainer = styled.div`
  text-align: center;
  vertical-align: middle;
`;

const Wrapper = styled.div<{ disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.48 : 1)};
  min-width: 100px;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
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
  padding: ${({ theme }) => theme.padding?.buttons || '1.1rem 2rem'};
`;

const StyledIcon = styled(Icon)`
  color: #9aa4b2;
  margin-right: 14px;
`;

const Count = styled.div`
  background-color: ${({ theme }) => theme.colors?.filterBackground || theme.colors.primary};
  border-radius: 9px;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.colors?.filterText || 'white'};
  font-size: 1rem;
  margin-left: 14px;
`;

const TagCount = styled(Count)`
  background-color: ${({ theme }) => theme.colors?.filterText || 'white'};
  color: ${({ theme }) => theme.colors?.filterBackground || theme.colors.primary};
  margin-left: 10px;
  margin-right: 4px;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors?.filterBackground || `${theme.colors.primary}33`};
  height: auto;
  padding: ${({ theme }) => theme.padding?.buttons || '1.1rem 2rem'};
  color: ${({ theme }) => theme.colors?.filterText || theme.colors.primary};
  border-radius: 4px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FilterWraper = styled.div`
  padding: 0 24px 24px 24px;
`;

DynamicFilter.map = mapFilters;

export default DynamicFilter;
