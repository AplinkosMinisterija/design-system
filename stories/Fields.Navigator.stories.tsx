import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import StoryWrapper from '../src/components/common/StoryWrapper';
import Navigator from '../src/components/Navigator';

const meta: Meta<typeof Navigator> = {
  component: Navigator,
  title: 'Design system/Fields/Navigator',
};

export default meta;
type Story = StoryObj<typeof Navigator>;

export const Field: Story = {
  name: 'Navigator',
  render: () => {
    const data = ['test', 'test2', 'test3'];
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
      <StoryWrapper>
        <Navigator
          label={data[currentIndex]}
          onPrevClick={() => setCurrentIndex(currentIndex - 1)}
          onNextClick={() => setCurrentIndex(currentIndex + 1)}
          hasPrevious={!!data[currentIndex - 1]}
          hasNext={!!data[currentIndex + 1]}
        />
      </StoryWrapper>
    );
  },
};
