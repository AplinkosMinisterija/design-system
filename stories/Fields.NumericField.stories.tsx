import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import NumericField from '../src/components/NumericField';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { useState } from 'react';

const meta: Meta<typeof NumericField> = {
  component: NumericField,
  title: 'Design system/Fields/Numeric Field',
};

export default meta;
type Story = StoryObj<typeof NumericField>;

const StoryComponent = () => {
  const [value, setValue] = useState<number | undefined>(65.99);

  return (
    <StoryWrapper>
      <NumericField
        onChange={setValue}
        value={value}
        wholeNumber={false}
        negativeNumber={true}
        bottomLabel={`${value?.toString() || ''}`}
      />
    </StoryWrapper>
  );
};
export const Field: Story = {
  name: 'NumericField',
  render: StoryComponent,
};

/**
 * A value that arrives from somewhere other than the keyboard — a register
 * lookup, a draft loading after mount, a reset.
 *
 * "Užpildyti iš registro" is the case that was broken: the field read `value`
 * once at mount, so a number the code filled in stayed invisible while the form
 * held it. Type into the box first and then press it: the box follows.
 */
const PrefilledComponent = () => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <StoryWrapper>
      <NumericField
        label="Plotas (ha)"
        onChange={setValue}
        value={value}
        bottomLabel={`Forma turi: ${value ?? '—'}`}
      />
      <Row>
        <button type="button" onClick={() => setValue(574.67)}>
          Užpildyti iš registro
        </button>
        <button type="button" onClick={() => setValue(3628.94)}>
          Kitas telkinys
        </button>
        <button type="button" onClick={() => setValue(undefined)}>
          Išvalyti
        </button>
      </Row>
    </StoryWrapper>
  );
};

export const Prefilled: Story = {
  name: 'NumericField (filled from outside)',
  render: PrefilledComponent,
};

const Row = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
