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
          <div>{children}</div>
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
        padding: '0 16px',
      };

    case PopupType.CENTER:
      return {
        width: '100%',
        padding: '0 16px',
        height: 'fit-content',
      };
    default:
      return {
        'border-radius': '0px',
        width: '100%',
        height: '100%',
        padding: 0,
      };
  }
};

const getInnerContainerCss = ($type) => {
  switch ($type) {
    case PopupType.BOTTOM:
      return {
        marginTop: 'auto',
        marginBottom: '1.6rem',
        height: 'fit-content',
      };

    case PopupType.CENTER:
      return {
        height: 'fit-content',
        marginTop: 'auto',
        marginBottom: 'auto',
      };
    default:
      return {
        height: '100%',
        width: '100%',
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
    min-width: 440px;
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

export default Popup;
