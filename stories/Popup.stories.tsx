import type { Meta, StoryObj } from '@storybook/react';
// @ts-ignore
import React, { useState } from 'react';
import ButtonsGroup from '../src/components/ButtonsGroup';
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

const labels = {
  [PopupType.FULL_SCREEN]: 'Per visą ekraną',
  [PopupType.CENTER]: 'Centre',
  [PopupType.BOTTOM]: 'Apačioje',
};

export const ButtonsGroupStory: Story = {
  name: 'Popup',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState();

    return (
      <StoryWrapper>
        Pranešimo vieta
        <ButtonsGroup
          options={Object.values(PopupType)}
          onChange={(value) => setSelected(value)}
          isSelected={(option) => option === selected}
          getOptionLabel={(option) => labels[option]}
        />
        <Popup
          type={PopupType.FULL_SCREEN}
          visible={selected === PopupType.FULL_SCREEN}
          onClose={() => setSelected(undefined)}
          left={<LeftComponent />}
        >
          {' '}
          <PopupContent text={'Pranešimas mobiliam telefone atvaizduojams per visą ekraną'} />
        </Popup>
        <Popup
          type={PopupType.CENTER}
          visible={selected === PopupType.CENTER}
          onClose={() => setSelected(undefined)}
          left={<LeftComponent />}
        >
          <PopupContent text={'Pranešimas mobiliam telefone atvaizduojamas per centrą'} />
        </Popup>
        <Popup
          type={PopupType.BOTTOM}
          visible={selected === PopupType.BOTTOM}
          onClose={() => setSelected(undefined)}
          left={<LeftComponent />}
        >
          <PopupContent text={'Pranešimas mobiliam telefone atvaizduojamas apačioje'} />
        </Popup>
      </StoryWrapper>
    );
  },
};
