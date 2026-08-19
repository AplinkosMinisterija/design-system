import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../src/components/Checkbox';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Design system/Fields/Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const StoryComponent = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <StoryWrapper>
      <Checkbox
        label={'label'}
        value={selected}
        name={'checkbox'}
        onChange={(val) => {
          setSelected(val);
        }}
      />
    </StoryWrapper>
  );
};

export const CheckboxStory: Story = {
  name: 'Checkbox',
  render: StoryComponent,
};

const StatesComponent = () => {
  const [values, setValues] = useState<{ [key: string]: boolean }>({
    checked: true,
    description: true,
    buttonChecked: true,
  });
  const setValue = (key: string) => (value: boolean) =>
    setValues((current) => ({ ...current, [key]: value }));

  return (
    <StoryWrapper>
      <Group>
        <GroupTitle>States</GroupTitle>
        <Checkbox
          name="unchecked"
          label="Unchecked"
          value={values.unchecked}
          onChange={setValue('unchecked')}
        />
        <Checkbox
          name="checked"
          label="Checked"
          value={values.checked}
          onChange={setValue('checked')}
        />
        <Checkbox
          name="intermediate"
          label="Intermediate"
          intermediate={true}
          value={values.intermediate}
          onChange={setValue('intermediate')}
        />
        <Checkbox
          name="error"
          label="Error"
          error={true}
          value={values.error}
          onChange={setValue('error')}
        />
        <Checkbox
          name="disabled"
          label="Disabled"
          disabled={true}
          value={values.disabled}
          onChange={setValue('disabled')}
        />
        <Checkbox
          name="disabledChecked"
          label="Disabled checked"
          disabled={true}
          value={true}
          onChange={setValue('disabledChecked')}
        />
      </Group>
      <Group>
        <GroupTitle>With description</GroupTitle>
        <Checkbox
          name="description"
          label="Send me notifications"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          value={values.description}
          onChange={setValue('description')}
        />
      </Group>
      <Group>
        <GroupTitle>Displayed as button</GroupTitle>
        <Row>
          <Checkbox
            name="buttonUnchecked"
            label="Unchecked"
            displayAsButton={true}
            width={'120px'}
            value={values.buttonUnchecked}
            onChange={setValue('buttonUnchecked')}
          />
          <Checkbox
            name="buttonChecked"
            label="Checked"
            displayAsButton={true}
            width={'120px'}
            value={values.buttonChecked}
            onChange={setValue('buttonChecked')}
          />
        </Row>
      </Group>
    </StoryWrapper>
  );
};

export const CheckboxStatesStory: Story = {
  name: 'Checkbox states',
  render: StatesComponent,
};

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: white;
  border-radius: 4px;
`;

const GroupTitle = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #7a7e9f;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
