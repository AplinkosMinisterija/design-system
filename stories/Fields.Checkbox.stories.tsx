import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../src/components/Checkbox';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Design system/Fields/Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxStory: Story = {
  name: 'Checkbox',
  render: () => {
    return (
      <StoryWrapper>
        <Checkbox
          label={'label'}
          description={
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          }
          onChange={() => {}}
        />
      </StoryWrapper>
    );
  },
};
