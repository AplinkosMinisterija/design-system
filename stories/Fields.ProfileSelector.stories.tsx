import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import StoryWrapper from '../src/components/common/StoryWrapper';
import ProfileSelector from '../src/components/ProfileSelector';

const meta: Meta<typeof ProfileSelector> = {
  component: ProfileSelector,
  title: 'Design system/Fields/ Profile Selector',
};

export default meta;

type Story = StoryObj<typeof ProfileSelector>;

const Option = ({ option, selected }: any) => {
  const Container = styled.div<{ $selected }>`
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    background-color: ${({ $selected }) => ($selected ? '#437783' : 'white')};
    color: ${({ $selected }) => ($selected ? 'white' : '#437783')};
  `;
  const Initials = styled.div<{ $selected }>`
    padding: 8px;
    background-color: ${({ $selected }) => ($selected ? 'white' : '#437783')};
    color: ${({ $selected }) => ($selected ? '#437783' : 'white')};
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 4px;
  `;

  return (
    <Container $selected={selected}>
      <Initials $selected={selected}>
        {(Array.from(option.name)[0] as string).toUpperCase()}
      </Initials>
      {option.name}
    </Container>
  );
};
const options = [
  {
    id: 1,
    name: 'Didelis Būrelis',
  },
  {
    id: 2,
    name: 'Gausus Būrelis',
  },
  {
    id: 3,
    name: 'Mažas Būrelis',
  },
];

export const Field: Story = {
  name: 'ProfileSelector',
  render: () => {
    return (
      <StoryWrapper>
        <ProfileSelector
          options={options}
          onChange={(e) => alert(e)}
          value={options[1]}
          getSelectedOptionLabels={(option) => ({
            label: option.name,
            description: 'Medžiotojų būrelis',
          })}
        />
        <CustomProfile
          options={options}
          onChange={(e) => alert(e)}
          value={options[2]}
          getOptionLabel={(option) => <Option option={option} selected={option.id === 2} />}
          getSelectedOptionLabels={(option) => ({
            label: option.name,
            description: 'Medžiotojų būrelis',
          })}
          variant={'secondary'}
        />
      </StoryWrapper>
    );
  },
};

const CustomProfile = styled(ProfileSelector)`
  height: 100px;
`;
