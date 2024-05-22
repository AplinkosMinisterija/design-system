import type { Meta, StoryObj } from '@storybook/react';

import SelectField from '../src/components/SelectField';
import StoryWrapper from '../src/components/common/StoryWrapper';
import styled from 'styled-components';

const meta: Meta<typeof SelectField> = {
  component: SelectField,
  title: 'Design system/Fields/Select Field',
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const SelectFieldStory: Story = {
  name: 'SelectField',
  render: () => {
    return (
      <StoryWrapper>
        <SelectField
          options={[
            { id: 1, label: 'Vilkas', age: 'Dvimetis', gender: 'Patinas' },
            { id: 2, label: 'Bebras', age: 'Jauniklis', gender: 'Patele' },
            { id: 3, label: 'Šernas', age: 'Vienmetis', gender: 'Patinas' },
            { id: 4, label: 'Briedis', age: 'Jauniklis', gender: 'Patinas' },
            { id: 5, label: 'Stirna', age: 'Suauges', gender: 'Patele' },
            { id: 6, label: 'Kiškis', age: 'Suages', gender: 'Patinas' },
          ]}
          value={{ id: 1, label: 'Vilkas', age: 'Dvimetis', gender: 'Patinas' }}
          onChange={() => {}}
          getInputValue={(option) => option.label}
          getOptionLabel={(option) => (
            <span>
              {option.label}
              <OptionInfo>{` (${option.gender}) - ${option.age}`}</OptionInfo>
            </span>
          )}
        />
      </StoryWrapper>
    );
  },
};

const OptionInfo = styled.span`
  color: darkgrey;
  font-size: 1.4rem;
`;
