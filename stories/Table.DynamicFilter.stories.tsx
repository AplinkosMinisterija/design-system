/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { FilterConfig, FilterInputTypes } from '../src';
import StoryWrapper from '../src/components/common/StoryWrapper';
import DynamicFilter from '../src/components/tables/DynamicFilter';

const meta: Meta<typeof DynamicFilter> = {
  component: DynamicFilter,
  title: 'Design system/Tables/Dynamic Filter',
};

export default meta;
type Story = StoryObj<typeof DynamicFilter>;

const filterConfig = (): Record<string, FilterConfig> => ({
  firstName: {
    label: 'First Name',
    key: 'firstName',
    inputType: FilterInputTypes.text,
  },
  lastName: {
    label: 'Last Name',
    key: 'lastName',
    inputType: FilterInputTypes.text,
  },
  email: {
    label: 'Email',
    key: 'email',
    inputType: FilterInputTypes.text,
  },
  municipality: {
    label: 'Municipality',
    key: 'municipality',
    inputType: FilterInputTypes.multiselect,
    options: [
      { name: 'Vilnius', id: 1 },
      { name: 'Kaunas', id: 2 },
      { name: 'Klaipėda', id: 3 },
    ],
    optionLabel: (item) => item?.name,
  },
});

const rowConfig = [['firstName', 'lastName'], ['email'], ['municipality']];

export const TabsStory: Story = {
  name: 'DynamicFilter',
  render: () => {
    const [filter, setFilter] = useState({});
    return (
      <StoryWrapper>
        <DynamicFilter
          loading={false}
          disabled={false}
          filterConfig={filterConfig()}
          rowConfig={rowConfig}
          onSetFilters={(filters) => {
            setFilter(filters);
          }}
          filters={filter}
          texts={{
            clearAll: 'Išvalyti filtrus',
            filter: 'Filtruoti',
          }}
        />
      </StoryWrapper>
    );
  },
};

const zones = [
  { id: 'LAGOON', label: 'Kuršių marios' },
  { id: 'POLDERS', label: 'Polderiai' },
  { id: 'RIVERS', label: 'Nemuno žemupys' },
];

const onlyZone = (values: Record<string, any>, zone: string) =>
  values.zones?.length === 1 && values.zones[0].id === zone;

const dependentFilterConfig = (): Record<string, FilterConfig> => ({
  zones: {
    label: 'Žvejybos vieta',
    key: 'zones',
    inputType: FilterInputTypes.multiselect,
    options: zones,
    customSetValue: (setFieldValue, value) => {
      setFieldValue('zones', value);
      setFieldValue('bar', null);
      setFieldValue('polder', null);
    },
  },
  bar: {
    label: 'Kuršių marių kvadratas',
    key: 'bar',
    inputType: FilterInputTypes.singleSelect,
    options: [
      { id: 11, label: '11' },
      { id: 12, label: '12' },
    ],
    hidden: (values) => !onlyZone(values, 'LAGOON'),
  },
  polder: {
    label: 'Polderis',
    key: 'polder',
    inputType: FilterInputTypes.singleSelect,
    options: [{ id: 1, label: 'Polderis A' }],
    hidden: (values) => !onlyZone(values, 'POLDERS'),
  },
});

export const DependentFieldsStory: Story = {
  name: 'DynamicFilter with dependent fields',
  render: () => {
    const [filter, setFilter] = useState({});
    return (
      <StoryWrapper>
        <DynamicFilter
          filterConfig={dependentFilterConfig()}
          rowConfig={[['zones'], ['bar'], ['polder']]}
          onSetFilters={setFilter}
          filters={filter}
          texts={{
            clearAll: 'Išvalyti filtrus',
            filter: 'Filtruoti',
          }}
        />
      </StoryWrapper>
    );
  },
};
