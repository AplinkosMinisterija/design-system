import type { Meta, StoryObj } from '@storybook/react';

import Button from '../src/components/Button';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { ButtonVariants } from '../src';
import styled from 'styled-components';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Design system/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  name: 'Button',
  render: () => {
    return (
      <StoryWrapper>
        <Button>Primary</Button>
        <Button variant={ButtonVariants.SECONDARY}>Secondary</Button>
        <Button variant={ButtonVariants.TERTIARY}>Tertiary</Button>
        <Button variant={ButtonVariants.TRANSPARENT}>Transparent</Button>
        <Button variant={ButtonVariants.DANGER}>Delete</Button>
        <Button variant={ButtonVariants.SUCCESS}>Submit</Button>
        <CustomizedButton>Button with custom css</CustomizedButton>
      </StoryWrapper>
    );
  },
};

const CustomizedButton = styled(Button)`
  font-size: 1.2rem;
  font-weight: 400;
  background-color: #ff9428;
  border-radius: 8px;
`;
