import type { Meta, StoryObj } from '@storybook/react';

import PasswordField from '../src/components/PasswordField';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof PasswordField> = {
  component: PasswordField,
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const PasswordFieldStory: Story = {
  name: 'PasswordField',
  render: () => {
    return (
      <StoryWrapper>
        <PasswordField />
      </StoryWrapper>
    );
  },
};
