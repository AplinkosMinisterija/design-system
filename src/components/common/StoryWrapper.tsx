import styled from 'styled-components';
import ReactQueryProvider from './ReactQueryProvider';

const StoryWrapper = ({ children }: any) => {
  return (
    <ReactQueryProvider>
      <InnerContainer>{children}</InnerContainer>;
    </ReactQueryProvider>
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
