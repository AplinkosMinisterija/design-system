import { useMediaQuery } from 'react-responsive';
import { map } from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filter, { FilterInputTypes } from './Filter';
import { device, formatDate } from '../../../utils';
import Icon, { IconName } from '../../common/Icons';
import Popup from '../../layouts/Popup';
import { FilterConfig, RowConfig } from '../../../types';
import Button from '../../Button';

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
  variant?: string;
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
    label: string;
  };
  showCount?: boolean;
  showIcon?: boolean;
}

const DynamicFilter = ({
  loading = false,
  filterConfig,
  rowConfig,
  onSetFilters,
  filters,
  texts = {
    clearAll: 'Išvalyti filtrus',
    filter: 'Filtruoti',
    label: 'Filtrai',
  },
  variant = 'columns',
  showCount = true,
  showIcon = false,
}: DynamicFilterProps) => {
  const isMobile = useMediaQuery({ query: device.mobileL });

  const [showFilters, setShowFilters] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<any>([]);

  useEffect(() => {
    setAppliedFilters(mapFilters(filterConfig, filters));
  }, [filters, filterConfig]);

  return (
    <>
      <Container>
        {!isMobile &&
          map(appliedFilters, (appliedFilter, index) => (
            <Tag key={`${appliedFilter}_${index}`}>
              <TextContainer>{appliedFilter?.label}</TextContainer>
              <CloseIconContainer
                onClick={() => {
                  const { [appliedFilter.key]: key, ...rest } = filters;
                  if (appliedFilter.id) {
                    onSetFilters({
                      ...rest,
                      [appliedFilter.key]: key.filter((filter) => filter.id !== appliedFilter.id),
                    });

                    return;
                  }
                  onSetFilters(rest);
                }}
              >
                <CloseIcon name={IconName.close} />{' '}
              </CloseIconContainer>
            </Tag>
          ))}
        <ButtonWrapper>
          <Button
            variant={variant}
            leftIcon={
              showIcon ? <StyledIcon $variant={variant} name={IconName.filter} /> : undefined
            }
            rightIcon={
              showCount ? <Count $variant={variant}>{appliedFilters.length}</Count> : undefined
            }
            onClick={() => setShowFilters(true)}
            loading={loading}
          >
            Filtrai
          </Button>
        </ButtonWrapper>
      </Container>
      <Popup visible={showFilters} onClose={() => setShowFilters(false)}>
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

const StyledIcon = styled(Icon)<{ $variant: string }>`
  color: ${({ theme, $variant }) =>
    theme.colors.buttons[$variant]?.icon || theme.colors.buttons[$variant]?.text || '#9aa4b2'};
`;

const Count = styled.div<{ $variant: string }>`
  background-color: ${({ theme, $variant }) =>
    theme.colors.buttons[$variant]?.count?.background || 'white'};
  border-radius: 9px;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({ theme, $variant }) => theme.colors.buttons[$variant]?.count?.text || '#53B1FD'};
  font-size: 1rem;
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

const ButtonWrapper = styled.div`
  width: fit-content;
`;

DynamicFilter.map = mapFilters;

export default DynamicFilter;
