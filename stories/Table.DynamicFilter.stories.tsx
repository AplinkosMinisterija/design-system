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
});

const rowConfig = [['firstName', 'lastName'], ['email']];

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
