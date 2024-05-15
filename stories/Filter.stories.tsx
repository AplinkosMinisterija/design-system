import type { Meta, StoryObj } from '@storybook/react';

import { withRouter } from 'storybook-addon-react-router-v6';
import StoryWrapper from '../src/components/common/StoryWrapper';
import DynamicFilter from '../src/components/tables/DynamicFilter';
import { FilterInputTypes } from '../src/utils';

const meta: Meta<typeof DynamicFilter> = {
  component: DynamicFilter,
  title: 'Design system/Filters/Filter',
};

const filterConfig = {
  firstName: {
    label: 'firstName',
    key: 'firstName',
    inputType: FilterInputTypes.text,
  },
  lastName: {
    label: 'lastName',
    key: 'lastName',
    inputType: FilterInputTypes.text,
  },
};

const rowConfig = [['firstName', 'lastName']];

export default meta;
type Story = StoryObj<typeof DynamicFilter>;

export const TabsStory: Story = {
  name: 'Filters',
  render: () => {
    return (
      <StoryWrapper>
        <DynamicFilter
          loading={false}
          filterConfig={filterConfig as any}
          rowConfig={rowConfig}
          onSetFilters={(filters) => console.log(filters)}
          filters={{}}
          texts={{
            clearAll: 'clear all',
            filter: 'filter',
          }}
        />
      </StoryWrapper>
    );
  },
  decorators: [withRouter],
};
