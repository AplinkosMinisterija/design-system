import type { Meta, StoryObj } from '@storybook/react';

import SimpleSelect from '../src/components/SimpleSelect';
import StoryWrapper from '../src/components/common/StoryWrapper';
import styled from 'styled-components';

const meta: Meta<typeof SimpleSelect> = {
  component: SimpleSelect,
  title: 'Design system/Fields/Simple Select',
};

export default meta;
type Story = StoryObj<typeof SimpleSelect>;

export const SelectFieldStory: Story = {
  name: 'SimpleSelect',
  render: () => {
    return (
      <StoryWrapper>
        <SimpleSelect
          options={[
            { id: 1, label: 'Vilkas', age: 'Dvimetis', gender: 'Patinas' },
            { id: 2, label: 'Bebras', age: 'Jauniklis', gender: 'Patele' },
            { id: 3, label: 'Šernas', age: 'Vienmetis', gender: 'Patinas' },
            { id: 4, label: 'Briedis', age: 'Jauniklis', gender: 'Patinas' },
            { id: 5, label: 'Stirna', age: 'Suauges', gender: 'Patele' },
            { id: 6, label: 'Kiškis', age: 'Suages', gender: 'Patinas' },
          ]}
          value={{ id: 2, label: 'Bebras', age: 'Jauniklis', gender: 'Patele' }}
          onChange={() => {}}
          getOptionLabel={(option) => option.label}
          disabled={false}
        />
      </StoryWrapper>
    );
  },
};

const OptionInfo = styled.span`
  color: darkgrey;
  font-size: 1.4rem;
`;
