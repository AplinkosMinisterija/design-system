import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { ErrorMessage } from "./ErrorMessage";
const FieldWrapper = ({ error, showError = true, label, className, padding = '0', onClick, handleBlur, subLabel, bottomLabel, secondLabel, children, }) => {
    return (_jsxs(Container, { tabIndex: -1, onBlur: handleBlur, className: className, padding: padding, onClick: onClick, children: [_jsxs(LabelRow, { children: [!!label && (_jsxs(LabelContainer, { children: [_jsx(Label, { htmlFor: label, children: label }), !!subLabel && _jsx(SubLabel, { children: subLabel })] })), secondLabel] }), children, showError && _jsx(ErrorMessage, { error: error }), bottomLabel && _jsx(BottomLabel, { children: bottomLabel })] }));
};
const Container = styled.div `
  display: block;
  position: relative;
  padding: ${({ padding }) => padding};
`;
const LabelRow = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BottomLabel = styled.div `
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`;
const Label = styled.label `
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const LabelContainer = styled.div `
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;
const SubLabel = styled.div `
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`;
export default FieldWrapper;
