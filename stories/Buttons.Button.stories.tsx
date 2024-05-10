import type { Meta, StoryObj } from '@storybook/react';

import Button from '../src/components/Button';
import StoryWrapper from '../src/components/common/StoryWrapper';
import Icons, { IconName } from '../src/components/common/Icons';
import styled from 'styled-components';
import { ButtonVariants } from '../src';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Design system/Buttons/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

const themeVariants = [
  ButtonVariants.PRIMARY,
  ButtonVariants.SECONDARY,
  ButtonVariants.OUTLINE,
  ButtonVariants.TRANSPARENT,
];

export const ButtonStory: Story = {
  name: 'Button',
  render: () => {
    return (
      <StoryWrapper>
        <Container>
          {themeVariants?.map((key) => {
            return <Button variant={key}>{key.toUpperCase()}</Button>;
          })}
          <Button variant={'primary'} leftIcon={<Icons name={IconName.logout} />}>
            Log in
          </Button>
          <Button variant={'outline'} rightIcon={<Icons name={IconName.logout} />}>
            Log out
          </Button>
        </Container>
        <CustomButton variant={'primary'} width={'100%'}>
          Custom button
        </CustomButton>
      </StoryWrapper>
    );
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

const CustomButton = styled(Button)`
  height: 5.6rem;
`;
