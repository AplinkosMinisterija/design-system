import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
export const ErrorMessage = ({ error }) => {
    if (!error)
        return _jsx(_Fragment, {});
    return _jsx(Container, { children: error });
};
const Container = styled.label `
  display: inline-block;
  width: 100%;
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`;
