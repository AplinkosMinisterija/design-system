import type { Meta, StoryObj } from '@storybook/react';

import Button from '../src/components/Button';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { theme } from '../.storybook/preview';
import { IconName } from '../src/components/common/Icons';
import Icons from '../src/components/common/Icons';
import styled from 'styled-components';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Design system/Buttons/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

const themeVariants = Object.keys(theme.colors.buttons);

export const ButtonStory: Story = {
  name: 'Button',
  render: () => {
    return (
      <StoryWrapper>
        <Container>
          {themeVariants?.map((key) => {
            return (
              <ButtonWrapper>
                <Button variant={key}>{key.toUpperCase()}</Button>
              </ButtonWrapper>
            );
          })}
          <ButtonWrapper>
            <Button variant={'primary'} leftIcon={<Icons name={IconName.logout} />}>
              Log in
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button variant={'outline'} rightIcon={<Icons name={IconName.logout} />}>
              Log out
            </Button>
          </ButtonWrapper>
        </Container>
        <CustomButton variant={'primary'}>Custom button</CustomButton>
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

const ButtonWrapper = styled.div`
  width: fit-content;
`;

const CustomButton = styled(Button)`
  height: 5.6rem;
`;
