import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ButtonMultiSelect from '../src/components/ButtonMultiSelect';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { ButtonVariants } from '../.storybook/preview';

const meta: Meta<typeof ButtonMultiSelect> = {
  component: ButtonMultiSelect,
  title: 'Design system/Buttons/ButtonMultiSelect',
};

export default meta;
type Story = StoryObj<typeof ButtonMultiSelect>;

const StoryComponent = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <StoryWrapper>
      <ButtonMultiSelect
        options={['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']}
        values={selected}
        onChange={setSelected}
        labels={{
          test1: 'Pirmadienis',
          test2: 'Antradienis',
          test3: 'Treciadienis',
          test4: 'Ketvirtadienis',
          test5: 'Penktadienis',
          test6: 'Sestadienis',
          test7: 'Sekmadienis',
        }}
        variant={ButtonVariants.OUTLINE}
      />
    </StoryWrapper>
  );
};

export const ButtonsGroupStory: Story = {
  name: 'ButtonMultiSelect',
  render: StoryComponent,
};
