import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';

const StoryWrapper = ({ children }: any) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <InnerContainer>{children}</InnerContainer>;
    </QueryClientProvider>
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
