import type { Meta, StoryObj } from '@storybook/react';
// @ts-ignore
import React, { useState } from 'react';
import Popup from '../src/components/layouts/Popup';
import StoryWrapper from '../src/components/common/StoryWrapper';
import styled from 'styled-components';
import { Button, PopupType } from '../src';
import { ButtonVariants } from '../.storybook/preview';

const meta: Meta<typeof Popup> = {
  component: Popup,
  title: 'Design system/Layouts/Popup',
};

export default meta;
type Story = StoryObj<typeof Popup>;

const PopupContent = ({ text }) => {
  const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    text-align: center;
  `;

  return (
    <Container>
      {text}
      <Button variant={ButtonVariants.PRIMARY} width={'100%'}>
        Patvirtinti
      </Button>
      <Button variant={ButtonVariants.OUTLINE} width={'100%'}>
        Atšaukti
      </Button>
    </Container>
  );
};

const LeftComponent = () => {
  const Initials = styled.div<{ $selected }>`
    background-color: ${({ $selected }) => ($selected ? 'white' : '#437783')};
    color: ${({ $selected }) => ($selected ? '#437783' : 'white')};
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 4px;
  `;

  return <Initials>M</Initials>;
};

const largeText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const PopupStory1: Story = {
  name: 'Popup',
  argTypes: {
    visible: {
      control: 'boolean',
    },
    type: {
      control: 'radio',
      options: Object.values(PopupType),
      defaultValue: PopupType.BOTTOM,
    },
  },
  args: {
    visible: true,
    type: PopupType.BOTTOM,
    onClose: () => {},
  },
  render: (args) => {
    return (
      <StoryWrapper>
        <Popup {...args} left={<LeftComponent />}>
          <PopupContent text={'Pranešimas mobiliam telefone atvaizduojams per visą ekraną'} />,
        </Popup>
      </StoryWrapper>
    );
  },
};

export const PopupStory2: Story = {
  name: 'Popup (Large content)',
  argTypes: {
    visible: {
      control: 'boolean',
    },
    type: {
      control: 'radio',
      options: Object.values(PopupType),
      defaultValue: PopupType.FULL_SCREEN,
    },
  },
  args: {
    visible: true,
    type: PopupType.FULL_SCREEN,
    onClose: () => {},
  },
  render: (args) => {
    return (
      <StoryWrapper>
        <Popup {...args} left={<LeftComponent />}>
          <PopupContent text={largeText} />
        </Popup>
      </StoryWrapper>
    );
  },
};
