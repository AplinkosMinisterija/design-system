import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ButtonsGroup from '../src/components/ButtonsGroup';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof ButtonsGroup> = {
  component: ButtonsGroup,
  title: 'Design system/Buttons/ButtonsGroup',
};

export default meta;
type Story = StoryObj<typeof ButtonsGroup>;

const StoryComponent = () => {
  const [selected, setSelected] = useState();

  return (
    <StoryWrapper>
      <ButtonsGroup
        options={['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9']}
        onChange={(value) => setSelected(value)}
        isSelected={(option) => option === selected}
        getOptionLabel={(option) => option}
        error="test"
      />
    </StoryWrapper>
  );
};

export const ButtonsGroupStory: Story = {
  name: 'ButtonsGroup',
  render: StoryComponent,
};
