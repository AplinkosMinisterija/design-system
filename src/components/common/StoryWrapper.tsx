import styled from 'styled-components';

const StoryWrapper = ({ children }: any) => {
  return (
      <InnerContainer>{children}</InnerContainer>
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
