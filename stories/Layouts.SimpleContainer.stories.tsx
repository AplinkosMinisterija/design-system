import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, DatePicker, SimpleContainer } from '../src';
import StoryWrapper from '../src/components/common/StoryWrapper';
import DefaultLayout from '../src/components/layouts/DefaultLayout';

const meta: Meta<typeof DefaultLayout> = {
  component: DefaultLayout,
  title: 'Design system/Layouts/SimpleContainer',
};

export default meta;
type Story = StoryObj<typeof DefaultLayout>;

export const ButtonStory: Story = {
  name: 'SimpleContainer',
  render: () => {
    return (
      <StoryWrapper>
        <SimpleContainer title="SimpleContainer">
          <DatePicker onChange={() => {}} />
          <Button>Primary</Button>
        </SimpleContainer>
      </StoryWrapper>
    );
  },
};
