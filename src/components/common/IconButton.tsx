import styled from "styled-components";
import Icon, {IconName} from "./Icons";

const IconButton = ({iconName, onClick, disabled}: {iconName: IconName, disabled?: boolean; onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void}) => {
    return (
        <Container onClick={(e)=> onClick && !disabled && onClick(e)}>
            <StyledIcon name={iconName} />
        </Container>
    )
};

export default IconButton;

const Container = styled.div<{$disabled?: boolean}>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
  border-radius: 4px;
  padding: 10px;
  height: ${({ theme }) => theme.height.buttons}rem;width: ${({ theme }) => theme.height.buttons}rem;;
  display: flex;
  cursor: pointer;
    opacity: ${({$disabled}) => $disabled ? 0.6 : 1};
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
  flex-shrink: 0;
  display: block;
  margin-top: auto;
`;

