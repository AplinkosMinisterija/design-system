import styled, { css } from 'styled-components';
import { PopupType } from '../../types';
import { device } from '../../utils';
import { useKeyAction } from '../common/hooks';
import Icon from '../common/Icons';
import Modal from './Modal';

export interface PopupProps {
  onClose: () => void;
  visible: boolean;
  children: React.ReactNode;
  type?: PopupType;
  left?: React.ReactNode;
  ariaLabel?: string;
}

const Popup = ({
  children,
  onClose,
  visible = true,
  type = PopupType.FULL_SCREEN,
  left,
  ariaLabel = 'popup',
}: PopupProps) => {
  const handleKeyDownOnClose = useKeyAction(() => onClose());

  return (
    <Modal visible={visible} onClose={onClose}>
      <Container $type={type} aria-label={ariaLabel} role="dialog" aria-modal="true">
        <InnerContainer $type={type}>
          <Header>
            <LeftContainer>{left}</LeftContainer>
            <IconContainer
              onClick={onClose}
              onKeyDown={handleKeyDownOnClose()}
              aria-label={`Close ${ariaLabel}`}
              role="button"
              tabIndex={0}
            >
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

const getContainerCss = ($type, theme) => {
  switch ($type) {
    case PopupType.BOTTOM:
      return {
        width: '100%',
        height: '100%',
        padding: theme.padding?.mobilePopup || '1rem',
        maxHeight: '100%',
      };

    case PopupType.CENTER:
      return {
        width: '100%',
        height: '100%',
        padding: theme.padding?.mobilePopup || '1rem',
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
    ${({ $type, theme }) => css(getContainerCss($type, theme))}
  }
`;

const InnerContainer = styled.div<{ $type: PopupType }>`
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: ${({ theme }) => theme.radius?.popup || 0.2}rem;
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
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Content = styled.div`
  height: fit-content;
`;

export default Popup;
