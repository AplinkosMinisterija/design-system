import styled from 'styled-components';
import QueryProvider from './ReactQueryProvider';

const StoryWrapper = ({ children }: any) => {
  return (
    <QueryProvider>
      <InnerContainer>{children}</InnerContainer>;
    </QueryProvider>
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
