import Div100vh from 'react-div-100vh';
import styled from 'styled-components';
import { useWindowSize, device } from '../utils';
import BackHeader from './headers/BackHeader';
import LogoHeader from './headers/LogoHeader';
import SideBar from './SideBar';

const DefaultLayout = ({ children, onScroll = () => {}, loggedIn, currentRoute, routes, logo }: any) => {
  const isMobile = useWindowSize(device.mobileL);

  return (
    <Container>
      {!isMobile && <SideBar loggedIn={loggedIn} routes={routes} logo={logo} currentRoute={currentRoute} />}
      <ScrollableContainer onScroll={onScroll}>
        <InnerContainer>
          {currentRoute?.back ? <BackHeader /> : <LogoHeader logo={logo}/>}
          {children}
        </InnerContainer>
      </ScrollableContainer>
    </Container>
  );
};
export default DefaultLayout;

const Container = styled(Div100vh)`
  width: 100vw;
  display: flex;
`;

const ScrollableContainer = styled.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: white;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  @media ${device.desktop} {
    padding: 40px 16px;
    height: fit-content;
    background-color: #f7f7f7;
  }
`;
