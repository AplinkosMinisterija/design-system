import styled from 'styled-components';
import Icon, { IconName } from './common/Icons';

const Navigator = ({
  label,
  onPrevClick,
  onNextClick,
  hasPrevious,
  hasNext,
}: {
  label: string;
  onPrevClick: () => void;
  onNextClick: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}) => {
  return (
    <Container>
      {hasPrevious && (
        <div onClick={onPrevClick}>
          <StyledIcon name={IconName.backward} />
        </div>
      )}
      <SwitchText>{label}</SwitchText>
      {hasNext && (
        <div onClick={onNextClick}>
          <StyledIcon name={IconName.forward} />
        </div>
      )}
    </Container>
  );
};

export default Navigator;

const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SwitchText = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 20.08px;
  color: #4b5565;
`;

const StyledIcon = styled(Icon)`
  color: #4b5565;
  font-size: 1.2rem;
  cursor: pointer;
`;
