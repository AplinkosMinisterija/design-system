import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from 'styled-components';
const Switch = ({ value, name, onChange }) => {
    return (_jsx(_Fragment, { children: _jsxs(SwitchContainer, { children: [_jsx(InputCheckbox, { type: "checkbox", name: name, checked: value, onChange: onChange }), _jsx(Slider, {})] }) }));
};
const SwitchContainer = styled.label `
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`;
const Slider = styled.span `
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const InputCheckbox = styled.input `
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.primary};
  }

  &:checked + ${Slider}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`;
export default Switch;
