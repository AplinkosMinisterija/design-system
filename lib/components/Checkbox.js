import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from 'styled-components';
const Checkbox = ({ value, name, onChange, disabled = false, label, error, className, intermediate, }) => {
    return (_jsx(_Fragment, { children: _jsxs(Container, { disabled: disabled, className: className, onClick: () => {
                !disabled && onChange(!value);
            }, children: [_jsxs(InnerContainer, { intermediate: intermediate, disabled: disabled, error: error, checked: value, children: [_jsx(CheckBox, { type: "checkbox", name: name, checked: value || false, disabled: disabled, onChange: () => { } }), _jsx(Label, { checked: value || false, intermediate: intermediate, disabled: disabled })] }), _jsx(TextLabel, { children: label })] }) }));
};
const Container = styled.div `
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
const TextLabel = styled.div `
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`;
const InnerContainer = styled.div `
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({ theme, checked, error, intermediate }) => checked || intermediate
    ? theme.colors.primary
    : error
        ? theme.colors.danger
        : theme.colors.border};
  opacity: ${({ disabled }) => (disabled ? 0.48 : 1)};
`;
const Label = styled.label `
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  cursor: pointer;
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  left: 2px;
  top: 2px;

  background-color: ${({ intermediate, checked }) => intermediate || checked ? 'transparent' : 'white'};

  &::after {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    filter: alpha(opacity=0);
    opacity: 0;
    content: '';
    position: absolute;
    width: 11px;
    height: 4px;
    background: transparent;
    top: ${({ intermediate }) => `${intermediate ? 2 : 3}px`};
    left: ${({ intermediate }) => `${intermediate ? 0.8 : 1}px`};
    border: 2px solid #fcfff4;
    border-top: none;
    border-right: none;

    ${({ intermediate }) => intermediate &&
    `border-left: none;
   
  `}

    ${({ checked, intermediate }) => intermediate || checked
    ? `
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
      opacity: 1;
  `
    : ''}

    -webkit-transform: rotate(
      ${({ intermediate }) => `${intermediate ? 0 : -45}deg`}
    );
    -moz-transform: rotate(${({ intermediate }) => `${intermediate ? 0 : -45}deg`});
    -o-transform: rotate(${({ intermediate }) => `${intermediate ? 0 : -45}deg`});
    -ms-transform: rotate(${({ intermediate }) => `${intermediate ? 0 : -45}deg`});
    transform: rotate(${({ intermediate }) => `${intermediate ? 0 : -45}deg`});
  }
`;
const CheckBox = styled.input `
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
export default Checkbox;
