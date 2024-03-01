import Div100vh from "react-div-100vh";
import styled from "styled-components";
import { device } from "../../utils.ts";
import MenuButton from "./MenuButton";
import Icon, { IconName } from "../../common/Icons";
import Modal from "../Modal";
import { DefaultLayoutProps } from "../../types";

interface Props extends DefaultLayoutProps {
  visible: boolean;
}
const MobileMenu = ({
  onClose,
  visible = true,
  loggedIn,
  currentRoute,
  routes,
  onLogin,
  onLogout,
  onRouteSelected,
}: Props) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Container>
        <InnerContainer>
          <Header>
            <IconContainer onClick={onClose}>
              <StyledIcon name="close" />
              Uždaryti
            </IconContainer>
          </Header>
          <Headings>
            <Title>Meniu</Title>
            <Subtitle>Pasirinkite dominančią sritį</Subtitle>
          </Headings>
          {routes?.map((route, index: number) => {
            return (
              <MenuButton
                key={`menu_button_${index}`}
                isActive={route.slug === currentRoute?.slug}
                label={route.title || ""}
                icon={route.iconName}
                onClick={() => {
                  onRouteSelected(route.slug);
                  onClose();
                }}
              />
            );
          })}
          <MenuButton
            label={loggedIn ? "Atsijungti" : "Prisijungti"}
            icon={IconName.logout}
            onClick={() => {
              if (loggedIn) {
                onLogout();
              } else {
                onLogin();
                onClose();
              }
            }}
          />
        </InnerContainer>
      </Container>
    </Modal>
  );
};

const StyledIcon = styled(Icon)`
  cursor: pointer;
  font-size: 2.4rem;
`;

const Container = styled(Div100vh)`
  width: 100%;
`;

const InnerContainer = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 0 16px 24px 16px;
  @media ${device.desktop} {
    max-width: 700px;
    padding: 40px;
    flex-basis: auto;
    border-radius: 16px;
    min-height: fit-content;
  }
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 4px;
  text-decoration: none;
  margin: 0 0 0 auto;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  padding: 16px 0;
`;

const Headings = styled.div`
  margin: 16px 0 32px 0;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
`;

const Subtitle = styled.div`
  line-height: 26px;
  margin-top: 4px;
  text-align: center;
`;

export default MobileMenu;
