import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../src/components/Checkbox';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { useState } from 'react';
import { ButtonVariants } from '../.storybook/preview';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Design system/Fields/Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const StoryComponent = () => {
  const [selected, setSelected] = useState<boolean>();
  return (
    <StoryWrapper>
      <Checkbox
        label={'label'}
        value={selected}
        name={'checkbox'}
        // description={
        //   'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        // }
        displayAsButton={true}
        width={'100px'}
        variant={ButtonVariants.OUTLINE}
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
