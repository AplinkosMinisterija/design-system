import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import DesignSystemProvider from './DesignSystemProvider';

const StoryWrapper = ({ children }: any) => {
  return (
    <DesignSystemProvider>
      <BrowserRouter>
        <InnerContainer>{children}</InnerContainer>
      </BrowserRouter>
    </DesignSystemProvider>
  );
};

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 40px auto;
  gap: 16px;
`;

export default StoryWrapper;
