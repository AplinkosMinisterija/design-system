import styled from 'styled-components';

import { device } from '../../utils';
import { AppRoute } from '../../types';
import { JSX } from 'react';
interface Props {
  children: any;
  title?: string;
  customSubTitle?: any;
  customTitle?: any;
  currentRoute?: AppRoute;
  pageActions?: JSX.Element;
}
const ContentLayout = (props: Props) => {
  const { children, currentRoute, pageActions } = props;
  return (
    <Container>
      {pageActions}
      <InnerContainer>
        {currentRoute?.title && <Title>{currentRoute?.title}</Title>}
        {currentRoute?.title && <Subtitle>{currentRoute?.title}</Subtitle>}
        {children}
      </InnerContainer>
    </Container>
  );
};
export default ContentLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media ${device.desktop} {
    max-width: 800px;
    padding: 40px 16px;
    margin: 0 auto;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-self: center;
  align-items: center;
  padding: 0 12px;
  background-color: white;
  overflow: hidden;
  @media ${device.desktop} {
    border-radius: 16px;
    margin: 0 auto;
    padding: 40px;
    overflow-y: hidden;
    height: fit-content;
  }
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 26px;
  margin-top: 4px;
  font-size: 1.6rem;
  margin-bottom: 32px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 3.2rem;
  font-weight: 800;
  text-align: center;
`;
