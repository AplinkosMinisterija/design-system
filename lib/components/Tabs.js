import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Tabs = ({ options, onChange, value, className = '' }) => {
    return (_jsx(Container, { className: className, children: _jsx(Content, { "$numberOfColumns": options.length, children: options.map((option, index) => (_jsx(Button, { onClick: () => onChange(option.value), "$selected": option.value === value, children: option.label }, `switch_btn_${index}`))) }) }));
};
const Container = styled.div `
  width: 100%;
  padding: 32px 0;
`;
const Content = styled.div `
  display: grid;

  grid-template-columns: repeat(${({ $numberOfColumns }) => $numberOfColumns}, 1fr);

  background-color: ${({ theme }) => theme.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`;
const Button = styled.div `
  display: flex;
  background-color: ${({ $selected }) => ($selected ? 'rgb(20, 83, 45)' : 'transparent')};
  color: ${({ $selected, theme }) => ($selected ? 'white' : theme.colors.text.primary)};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
`;
export default Tabs;
