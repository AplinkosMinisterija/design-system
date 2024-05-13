import styled from 'styled-components';
import { NotFoundInfoProps } from './types';

const NotFoundInfo = ({ text, urlText, onClick }: NotFoundInfoProps) => {
  return (
    <Container>
      {text?.trim()} {urlText && <Url onClick={onClick}>{urlText?.trim()}</Url>}
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.4rem;
  color: #4b5565;
`;
const Url = styled.span`
  cursor: pointer;
  text-decoration: underline;
  font-size: 1.4rem;
  color: #0862ab;
`;

export default NotFoundInfo;
