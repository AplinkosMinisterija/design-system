import type { Meta, StoryObj } from '@storybook/react';

import DynamicFilter from '../src/components/tables/DynamicFilter';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { withRouter } from 'storybook-addon-react-router-v6';
import { FilterConfig, FilterInputTypes } from '../src';

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
    return (
      <StoryWrapper>
        <DynamicFilter
          loading={false}
          disabled={false}
          filterConfig={filterConfig()}
          rowConfig={rowConfig}
          onSetFilters={() => {}}
          filters={{}}
          texts={{
            clearAll: 'Išvalyti filtrus',
            filter: 'Filtruoti',
          }}
        />
      </StoryWrapper>
    );
  },
  decorators: [withRouter],
};
