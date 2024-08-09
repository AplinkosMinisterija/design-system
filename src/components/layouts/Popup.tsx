import styled, { css } from 'styled-components';
import Modal from './Modal';
import Icon from '../common/Icons';
import { device } from '../../utils';
// @ts-ignore
import React, { JSX, useEffect } from 'react';
import { PopupType } from '../../types';

export interface PopupProps {
  onClose: () => void;
  visible: boolean;
  children: React.ReactNode;
  type?: PopupType;
  left?: React.ReactNode;
}

const Popup = ({
  children,
  onClose,
  visible = true,
  type = PopupType.FULL_SCREEN,
  left,
}: PopupProps) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Container $type={type}>
        <InnerContainer $type={type}>
          <Header>
            <LeftContainer>{left}</LeftContainer>
            <IconContainer onClick={onClose}>
              <StyledIcon name="close" />
            </IconContainer>
          </Header>
          <Content>
            <div>{children}</div>
          </Content>
        </InnerContainer>
      </Container>
    </Modal>
  );
};

const getContainerCss = ($type) => {
  switch ($type) {
    case PopupType.BOTTOM:
      return {
        width: '100%',
        height: '100%',
        padding: '1rem',
        maxHeight: '100%',
      };

    case PopupType.CENTER:
      return {
        width: '100%',
        height: '100%',
        padding: '1rem',
        maxHeight: '100%',
      };
    default:
      return {
        borderRadius: '0',
        width: '100%',
        height: '100%',
        padding: '0',
        maxHeight: '100%',
      };
  }
};

const getInnerContainerCss = ($type) => {
  switch ($type) {
    case PopupType.BOTTOM:
      return {
        marginTop: 'auto',
        height: 'fit-content',
        maxHeight: '100%',
        overflow: 'auto',
      };

    case PopupType.CENTER:
      return {
        marginTop: 'auto',
        marginBottom: 'auto',
        height: 'fit-content',
        maxHeight: '100%',
        overflow: 'auto',
      };
    default:
      return {
        marginTop: 'auto',
        marginBottom: 'auto',
        flexGrow: 1,
        maxHeight: '100%',
        overflow: 'auto',
        borderRadius: 0,
      };
  }
};

const StyledIcon = styled(Icon)`
  cursor: pointer;
  font-size: 2rem;
`;

const Container = styled.div<{ width?: string; $type: PopupType }>`
  position: relative;
  height: fit-content;
  width: ${({ width }) => width};
  flex-basis: auto;
  margin: auto;
  display: flex;
  @media ${device.desktop} {
    max-width: 440px;
  }
  @media ${device.mobileL} {
    ${({ $type }) => css(getContainerCss($type))}
  }
`;

const InnerContainer = styled.div<{ $type: PopupType }>`
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: ${({ theme }) => theme.radius.popup || 0.2}rem;
  width: 100%;
  height: 100%;
  @media ${device.mobileL} {
    ${({ $type }) => css(getInnerContainerCss($type))}
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  padding: 24px 0 0 24px;
  height: fit-content;
`;

const IconContainer = styled.div`
  margin: 0 0 0 auto;
  padding: 24px;
  width: fit-content;
`;

const Content = styled.div`
  height: fit-content;
`;

export default Popup;
