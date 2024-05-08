import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface EmptyStateTextProps {
  url?: string;
  urlText?: string;
  text?: string;
}

const NotFoundInfo = ({ text, urlText, url }: EmptyStateTextProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      {text?.trim()} {url && <Url onClick={() => navigate(url)}>{urlText?.trim()}</Url>}
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
