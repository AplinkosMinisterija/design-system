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
