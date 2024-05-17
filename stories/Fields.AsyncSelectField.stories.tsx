import type { Meta, StoryObj } from '@storybook/react';

import AsyncSelectField from '../src/components/AsyncSelectField';
import StoryWrapper from '../src/components/common/StoryWrapper';
import styled from 'styled-components';

const meta: Meta<typeof AsyncSelectField> = {
  component: AsyncSelectField,
  title: 'Design system/Fields/Async Select Field',
};

export default meta;
type Story = StoryObj<typeof AsyncSelectField>;

export const AsyncSelectFieldStory: Story = {
  name: 'AsyncSelectField',
  render: () => {
    return (
      <StoryWrapper>
        <AsyncSelectField
          onChange={() => {}}
          getOptionLabel={(option) => (
            <span>
              {option.name}
              <OptionInfo>{` (${option.cadastral_id}) - ${option.municipality.name}`}</OptionInfo>
            </span>
          )}
          getInputValue={(option) =>
            `${option.name} (${option.cadastral_id}) - ${option.municipality.name}`
          }
          optionsEqual={(option1: any, option2: any) =>
            option1.cadastral_id === option2.cadastral_id
          }
          value={{
            name: 'Nemunas',
            cadastral_id: '10010001',
            municipality: {
              id: 52,
              name: 'Kauno r. sav.',
            },
          }}
          loadOptions={() => []}
          placeholder={'Placeholder'}
          defaultOptions={[
            {
              name: 'Nemunas',
              cadastral_id: '10010001',
              municipality: {
                id: 52,
                name: 'Kauno r. sav.',
              },
            },
            {
              name: 'Baluošas',
              cadastral_id: '10010002',
              municipality: {
                id: 7,
                name: 'Švenčionių r. sav.',
              },
            },
            {
              name: 'Dubrius',
              cadastral_id: '10011443',
              municipality: {
                id: 52,
                name: 'Kauno r. sav.',
              },
            },
            {
              area: '5.89',
              name: 'Paežeris',
              cadastral_id: '10031211',
              municipality: {
                id: 49,
                name: 'Kaišiadorių r. sav.',
              },
            },
            {
              area: '6532.74',
              name: 'Kauno HE tvenkinys',
              cadastral_id: '10050001',
              municipality: {
                id: 52,
                name: 'Kauno r. sav.',
              },
            },
          ]}
        />
      </StoryWrapper>
    );
  },
};

const OptionInfo = styled.span`
  color: darkgrey;
  font-size: 1.4rem;
`;
