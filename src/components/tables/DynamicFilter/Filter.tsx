import { Formik } from 'formik';
import { map } from 'lodash';
import styled from 'styled-components';
import {
  AsyncMultiSelectField,
  AsyncSelectField,
  Button,
  device,
  FilterConfig,
  FilterInputTypes,
  handleDateRestriction,
  MultiSelectField,
  RowConfig,
  SelectField,
  TextField,
} from '../../../index';
import Checkbox from '../../Checkbox';
import Datepicker from '../../DatePicker';

export interface LabelsProps {
  [key: string]: string;
}

export interface DynamicFilterProps {
  texts: {
    clearAll: string;
    filter: string;
  };
  filters: Record<string, FilterConfig>;
  rowConfig: RowConfig;
  onSubmit: (values: any) => void;
  values?: any;
}

const Filter = ({ values, filters, rowConfig, onSubmit, texts }: DynamicFilterProps) => {
  const generateDefaultValues = () => {
    const defaultValues = {};
    map(filters, (filter) => {
      defaultValues[filter.key] =
        filter.default || (filter.inputType === FilterInputTypes.text ? '' : null);
    });
    return defaultValues;
  };

  const renderRow = (row: string[], values, setFieldValue, index) => (
    <Content key={`row_${index}`}>
      {map(row, (rowKey: string, index: number) => {
        const filter = filters[rowKey];
        const singleItem = row.length === 1;
        const optionLabel = filter?.optionLabel;
        const optionValue = filter?.getOptionValue;
        const hasOptionValue = !!optionValue;
        const hasOptionLabelFunction = !!optionLabel;
        const customSetValue = filter?.customSetValue;

        if (filter) {
          if (filter.inputType === FilterInputTypes.date) {
            return (
              <InputWrapper single={singleItem} key={filter.key} isLast={index === row.length - 1}>
                <Datepicker
                  name={filter.key}
                  value={values[filter.key]}
                  {...(!!handleDateRestriction(filter, values) &&
                    handleDateRestriction(filter, values))}
                  onChange={(value) => setFieldValue(filter.key, value)}
                  label={filter.label}
                />
              </InputWrapper>
            );
          } else if (filter.inputType === FilterInputTypes.singleSelect) {
            return (
              <InputWrapper single={singleItem} key={filter.key} isLast={index === row.length - 1}>
                <SelectField
                  name={filter.key}
                  label={filter.label}
                  value={values[filter.key]}
                  dependantId={filter.getDependId && filter.getDependId(values)}
                  options={filter.options || []}
                  onChange={(value) =>
                    customSetValue
                      ? customSetValue(setFieldValue, value)
                      : setFieldValue(filter.key, value)
                  }
                  getOptionLabel={(option) =>
                    hasOptionLabelFunction ? optionLabel(option) : option.label
                  }
                  refreshOptions={filter.refreshOptions}
                />
              </InputWrapper>
            );
          } else if (filter.inputType === FilterInputTypes.multiselect) {
            return (
              <InputWrapper single={singleItem} key={filter.key} isLast={index === row.length - 1}>
                <MultiSelectField
                  label={filter.label}
                  values={values[filter.key] || []}
                  options={filter.options || []}
                  onChange={(value) => setFieldValue(filter.key, value)}
                  getOptionLabel={(option) => option.label}
                  refreshOptions={filter.refreshOptions}
                />
              </InputWrapper>
            );
          } else if (filter.inputType === FilterInputTypes.asyncSingleSelect) {
            return (
              <InputWrapper single={singleItem} key={filter.key} isLast={index === row.length - 1}>
                <AsyncSelectField
                  name={filter.key}
                  label={filter.label}
                  value={values[filter.key]}
                  onChange={(value) => setFieldValue(filter.key, value)}
                  getOptionLabel={(option) =>
                    hasOptionLabelFunction ? optionLabel(option) : option.name
                  }
                  loadOptions={(input, page) => filter.optionsApi && filter.optionsApi(input, page)}
                />
              </InputWrapper>
            );
          } else if (filter.inputType === FilterInputTypes.asyncMultiSelect) {
            return (
              <InputWrapper single={singleItem} key={filter.key} isLast={index === row.length - 1}>
                <AsyncMultiSelectField
                  label={filter.label}
                  values={values[filter.key] || []}
                  onChange={(value) => setFieldValue(filter.key, value)}
                  getOptionLabel={(option) =>
                    hasOptionLabelFunction ? optionLabel(option) : option.name
                  }
                  loadOptions={(input, page) => filter.optionsApi && filter.optionsApi(input, page)}
                  getOptionValue={(option) => (hasOptionValue ? optionValue(option) : option.id)}
                />
              </InputWrapper>
            );
          } else if (filter.inputType === FilterInputTypes.checkbox) {
            return (
              <InputWrapper single={singleItem} key={filter.key} isLast={index === row.length - 1}>
                <StyledSingleCheckbox
                  name={filter.key}
                  label={filter.label}
                  value={values[filter.key]}
                  onChange={(value) => setFieldValue(filter.key, value)}
                />
              </InputWrapper>
            );
          }
          return (
            <InputWrapper single={singleItem} key={filter.key} isLast={index === row.length - 1}>
              <TextField
                name={filter.key}
                key={filter.key}
                onChange={(value) => setFieldValue(filter.key, value)}
                value={values[filter.key]}
                label={filter.label}
              />
            </InputWrapper>
          );
        }
      })}
    </Content>
  );

  return (
    <Container>
      <Formik
        enableReinitialize={true}
        initialValues={values || generateDefaultValues()}
        onSubmit={onSubmit}
        validateOnChange={false}
      >
        {({ values, setFieldValue, handleSubmit, handleReset }: any) => (
          <>
            {map(rowConfig, (row, index) => {
              return renderRow(row, values, setFieldValue, index);
            })}
            <Row key="form_actions">
              <ClearButton
                onClick={(e) => {
                  handleReset(e);
                  onSubmit(null);
                }}
              >
                {texts.clearAll}
              </ClearButton>
              <StyledButton type="submit" onClick={handleSubmit}>
                {texts.filter}
              </StyledButton>
            </Row>
          </>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  @media ${device.mobileL} {
    max-width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div<{ isLast: boolean; single: boolean }>`
  padding: 0 ${({ isLast }) => (isLast ? 0 : '12px')} 0 0;
  min-width: ${({ single }) => (single ? '400px' : 'auto')};
  flex: 2;
  margin-top: 8px;
  @media ${device.mobileL} {
    min-width: 100%;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
  align-self: flex-end;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin-left: auto;
`;

const StyledSingleCheckbox = styled(Checkbox)`
  margin-top: 8px;
`;

const ClearButton = styled.button`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.link || '#175cd3'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.height?.buttons || 4}rem;
  padding: 1.1rem 2rem;
  color: ${({ theme }) => theme.colors.link || '#101010'};
  font-size: ${({ theme }) => theme.fontSize.link || 1.6}rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  text-decoration: underline;
  white-space: nowrap;
  overflow: hidden;
  :hover {
    opacity: 0.6;
  }
  width: 100%;
`;

export default Filter;
