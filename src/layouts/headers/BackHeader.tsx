import { useState } from 'react';
import styled from 'styled-components';
import Icon, { IconName } from '../../common/Icons';
import MobileMenu from '../MobileMenu';
import { device } from '../../utils';
import { DefaultLayoutProps } from '../../types';

const BackHeader = (props: DefaultLayoutProps) => {
  const { onGoBack } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Container>
        <BackButton onClick={onGoBack}>
          <BackIcon name={IconName.back} />
        </BackButton>
        <Menu onClick={() => setShowMenu(true)}>
          <MenuIcon name={IconName.burger} />
          Meniu
        </Menu>
      </Container>
      <MobileMenu visible={showMenu} onClose={() => setShowMenu(false)} {...props} />
    </>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${device.desktop} {
    display: none;
  }
`;

const Menu = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`;

const MenuIcon = styled(Icon)`
  margin-right: 4px;
  font-size: 2.4rem;
`;

const BackIcon = styled(Icon)`
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  gap: 4px;
  text-decoration: none;
`;

const BackButton = styled.div`
  padding: 16px 16px 16px 0;
`;
export default BackHeader;
