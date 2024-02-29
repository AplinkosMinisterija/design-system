import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
import FieldWrapper from '../common/FieldWrapper';
import TextFieldInput from '../common/TextFieldInput';
import Icon from "../common/Icons";
const PasswordField = ({ value, secondLabel, name, error, showError = true, label, className, padding, onChange, placeholder, disabled, height, onInputClick, }) => {
    const [show, setShow] = useState(false);
    return (_jsx(FieldWrapper, { padding: padding, secondLabel: secondLabel, className: className, label: label, error: error, showError: showError, children: _jsx(TextFieldInput, { value: value, type: show ? 'text' : 'password', name: name, error: error, rightIcon: _jsx(IconContainer, { onClick: () => setShow(!show), children: _jsx(StyledIcon, { name: show ? 'visibleOn' : 'visibleOff' }) }), onChange: onChange, disabled: disabled, height: height, onInputClick: onInputClick, placeholder: placeholder }) }));
};
const IconContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`;
const StyledIcon = styled(Icon) `
  color: #9aa4b2;
  font-size: 2rem;
`;
export default PasswordField;
