import { Fragment, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../utils';

interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal = ({ visible, children, onClose }: ModalProps) => {
  const handleCloseOnEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose && onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (visible) {
      window.addEventListener('keydown', handleCloseOnEscape);
      return () => window.removeEventListener('keydown', handleCloseOnEscape);
    }
  }, [visible, handleCloseOnEscape]);

  if (!visible) {
    return <Fragment />;
  }

  return (
    <ModalContainer
      role="dialog"
      aria-modal="true"
      aria-label={'Modal'}
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose && onClose();
        }
      }}
    >
      {children}
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: rgba(11, 27, 96, 0.48);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 16px;

  @media ${device.mobileL} {
    padding: 0px;
  }
`;

export default Modal;
