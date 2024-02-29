import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Loader from "./Loader";
var ButtonColors;
(function (ButtonColors) {
    ButtonColors["PRIMARY"] = "primary";
    ButtonColors["SECONDARY"] = "secondary";
    ButtonColors["TERTIARY"] = "tertiary";
    ButtonColors["DANGER"] = "danger";
    ButtonColors["SUCCESS"] = "success";
    ButtonColors["TRANSPARENT"] = "transparent";
})(ButtonColors || (ButtonColors = {}));
const Button = ({ variant = ButtonColors.PRIMARY, route, children, height = 56, padding = '11px 20px', leftIcon, radius = '28px', buttonPadding, rightIcon, color, type, loading = false, className, disabled = false, fontWeight = '600', ...rest }) => {
    return (_jsxs(StyledButton, { className: className, "$padding": padding, "$fontWeight": fontWeight, "$variant": variant, "$height": height || 40, type: type, disabled: disabled, "$radius": radius, ...rest, children: [leftIcon, loading ? _jsx(Loader, { color: "white" }) : children, rightIcon] }));
};
const StyledButton = styled.button `
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: ${({ $height }) => `${$height}px`};
  border-radius: ${({ $radius }) => $radius};
  padding: ${({ $padding }) => $padding};
  background-color: ${({ $variant, theme }) => theme.colors.buttonBackground[$variant]};
  color: ${({ $variant, theme }) => theme.colors.buttonText[$variant]};
  border: ${({ $variant }) => ($variant === ButtonColors.TRANSPARENT ? '0' : '1px')} solid
    ${({ $variant }) => $variant !== ButtonColors.TRANSPARENT ? 'transparent' : ' rgb(35, 31, 32)'};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  font-size: 1.8rem;
  :hover {
    background-color: ${({ $variant, theme }) => theme.colors.hover[$variant]};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: 100%;
`;
Button.colors = ButtonColors;
export default Button;
