import { map } from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useKeyAction } from '../../../components/common/hooks';
import { FilterConfig, RowConfig } from '../../../types';
import { device, FilterInputTypes, formatDate, useWindowSize } from '../../../utils';
import Icon, { IconName } from '../../common/Icons';
import Loader from '../../common/Loader';
import Popup from '../../layouts/Popup';
import Filter from './Filter';

const mapFilters = (
  filterConfig: { [key: string]: FilterConfig },
  filters?: { [key: string]: any },
): string[] => {
  const applied: { key: string; label: string }[] | any = [];
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
          applied.push(
            map(filter, (item: any) => {
              return {
                key: config.key,
                id: item.id,
                label: `${label} ${hasOptionLabelFunction ? optionLabel(item) : item.label}`,
              };
            }),
          );
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

export interface DynamicFilterProps {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  filterConfig: Record<string, FilterConfig>;
  rowConfig: RowConfig;
  onSetFilters: (filters: Record<string, any>) => void;
  filters: Record<string, any>;
  texts: {
    clearAll: string;
    filter: string;
  };
}

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
  const handleFilterOnKeyDown = useKeyAction(() => setShowFilters(true), disabled);
  const handleRemoveFilterOnKeyDown = useKeyAction((appliedFilter) => {
    handleClearFilter(appliedFilter);
  }, disabled);
  const isMobile = useWindowSize(device.mobileL);

  const [showFilters, setShowFilters] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<any>([]);

  useEffect(() => {
    setAppliedFilters(mapFilters(filterConfig, filters));
  }, [filters, filterConfig]);

  const handleClearFilter = (appliedFilter) => {
    const { [appliedFilter.key]: key, ...rest } = filters;
    if (appliedFilter.id) {
      onSetFilters({
        ...rest,
        [appliedFilter.key]: key.filter((filter) => filter.id !== appliedFilter.id),
      });

      return;
    }
    onSetFilters(rest);
  };

  return (
    <>
      <Container>
        {!isMobile &&
          map(appliedFilters, (appliedFilter, index) => (
            <Tag
              key={`${appliedFilter}_${index}`}
              aria-label={`Applied filter: ${appliedFilter?.label}`}
            >
              <TextContainer>{appliedFilter?.label}</TextContainer>
              <CloseIconContainer
                role="button"
                tabIndex={0}
                aria-label={`Remove filter: ${appliedFilter?.label}`}
                onClick={() => handleClearFilter(appliedFilter)}
                onKeyDown={handleRemoveFilterOnKeyDown(appliedFilter)}
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
          onKeyDown={handleFilterOnKeyDown()}
        >
          <StyledButton disabled={disabled} aria-disabled={disabled}>
            <StyledIcon name={IconName.filter} />
            {loading ? <Loader color="white" /> : 'Filtrai'}
            <Count aria-label={`${appliedFilters.length} filters applied`}>
              {appliedFilters.length}
            </Count>
          </StyledButton>
        </Wrapper>
      </Container>
      <Popup ariaLabel="Filter" visible={showFilters} onClose={() => setShowFilters(false)}>
        <FilterWraper>
          <Filter
            values={filters}
            filters={filterConfig}
            rowConfig={rowConfig}
            onSubmit={(values) => {
              const copy = { ...values };
              Object.keys(copy).forEach((key) => {
                if (copy?.[key] && typeof copy[key] == 'string') {
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

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`;
const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  text-align: center;
  vertical-align: middle;
`;

const Wrapper = styled.div<{
  disabled: boolean;
}>`
  opacity: ${({ disabled }) => (disabled ? 0.48 : 1)};
  min-width: 100px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
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

const StyledIcon = styled(Icon)`
  color: #9aa4b2;
  margin-right: 14px;
`;

const Count = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9px;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  font-size: 1rem;
  margin-left: 14px;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => `${theme.colors.primary}33`};
  height: 40px;
  padding: 12px 8px;
  color: ${({ theme }) => `${theme.colors.primary}`};
  margin-right: 8px;
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
