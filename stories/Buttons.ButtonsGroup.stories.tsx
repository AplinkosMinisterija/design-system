import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ButtonsGroup from '../src/components/ButtonsGroup';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof ButtonsGroup> = {
  component: ButtonsGroup,
  title: 'Design system/Buttons/ButtonsGroup',
};

export default meta;
type Story = StoryObj<typeof ButtonsGroup>;

export const ButtonsGroupStory: Story = {
  name: 'ButtonsGroup',
  render: () => {
    const [selected, setSelected] = useState();

    return (
      <StoryWrapper>
        <ButtonsGroup
          options={[
            'test1',
            'test1',
            'test1',
            'test1',
            'test1',
            'test1',
            'test1',
            'test1',
            'test3',
          ]}
          onChange={(value) => setSelected(value)}
          isSelected={(option) => option === selected}
          getOptionLabel={(option) => option}
        />
      </StoryWrapper>
    );
  },
};
