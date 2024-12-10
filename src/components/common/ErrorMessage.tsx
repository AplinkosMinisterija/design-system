import styled from 'styled-components';

export const ErrorMessage = ({ error, errorId = '' }: { error?: string; errorId?: string }) => {
  if (!error) return null;

  return (
    <Container role="alert" id={errorId}>
      {error}
    </Container>
  );
};

const Container = styled.label`
  display: inline-block;
  width: 100%;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  line-height: 2.4rem;
  margin-bottom: 8px;
`;
