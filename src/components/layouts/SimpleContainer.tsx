import styled from 'styled-components';
import { ChildrenType } from '../../types';

export interface SimpleContainerProps {
  children: ChildrenType;
  title?: string;
  className?: string;
  margin?: string;
  additionalComponent?: JSX.Element;
}

const SimpleContainer = ({
  margin = '0px',
  title,
  children,
  className,
  additionalComponent,
}: SimpleContainerProps) => {
  return (
    <Container margin={margin} className={className}>
      {title && (
        <TitleRow>
          <Title>{title}</Title>
          {additionalComponent}
        </TitleRow>
      )}
      <div>{children}</div>
    </Container>
  );
};

const Container = styled.div<{ margin: string }>`
  background-color: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 16px;
  margin: ${({ margin }) => margin};
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #231f20;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
`;

export default SimpleContainer;
