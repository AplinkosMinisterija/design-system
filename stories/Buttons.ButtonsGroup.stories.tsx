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
        options={[
          'Button 1',
          'Button 2',
          'Button 3',
          'Button 4',
          'Button 5',
          'Button 6',
          'Button 7',
          'Button 8',
          'Button 9',
        ]}
        onChange={(value) => setSelected(value)}
        isSelected={(option) => option === selected}
        getOptionLabel={(option) => option}
        error="Showing button group error"
      />
    </StoryWrapper>
  );
};

export const ButtonsGroupStory: Story = {
  name: 'ButtonsGroup',
  render: StoryComponent,
};
