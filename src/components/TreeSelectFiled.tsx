import { useEffect } from 'react';
import styled from 'styled-components';
import { TreeSelect } from 'antd';
import { cloneDeep } from 'lodash';
import { device } from '../utils';
import Icon, { IconName } from './common/Icons';
import { FieldWrapper } from '../index';

interface Group {
  id: string;
  children: Group[];
  parent: Group;
  [key: string]: any;
}

export interface SelectFieldProps {
  id?: string;
  name?: string;
  label?: string;
  value?: any;
  error?: string;
  showError?: boolean;
  editable?: boolean;
  groupOptions: any[];
  left?: JSX.Element;
  right?: JSX.Element;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  backgroundColor?: string;
  hasBorder?: boolean;
  groups?: Group[];
}

const TreeSelectField = ({
  label,
  value,
  error,
  showError = true,
  groupOptions,
  className,
  padding,
  onChange,
  groups,
}: SelectFieldProps) => {
  const clonedGroupOptions = cloneDeep(groupOptions);

  const filterTreeOptions = () => {
    const groupsIds = groups?.map((group) => group.id);

    const findChildren = (options: Group[], path: boolean): boolean => {
      for (let i = 0; i < options?.length; i++) {
        const option = options[i];
        const children = option.children;
        const hasChildren = !!children && children.length > 0;
        const id = option.id;
        if (id) {
          Object.assign(option, { disabled: path });
        }
        if (hasChildren) {
          findChildren(children, path);
        }
      }
      return path;
    };

    groupsIds?.map((groupId) => {
      const findParents = (options: Group[]): boolean | undefined => {
        for (let i = 0; i < options?.length; i++) {
          const option = options[i];
          const children = option.children;
          const hasChildren = !!children && children.length > 0;
          const isCurrentValue = option.id === value;
          const isGroupId = option.id === groupId;

          if (isGroupId && !isCurrentValue) {
            Object.assign(option, { disabled: true });
            hasChildren && findChildren(children, true);
            return true;
          }
          if (isCurrentValue) {
            Object.assign(option, { disabled: false });
            hasChildren && findChildren(children, false);
          }

          if (hasChildren) {
            const result = findParents(children);
            if (result) {
              Object.assign(option, { disabled: true });
              return result;
            }
          }
        }
      };
      return findParents(clonedGroupOptions);
    });
  };

  useEffect(() => {
    filterTreeOptions();
  }, [value, groups, groupOptions]);

  return (
    <Container className={className} padding={padding || '0'}>
      <RealativeFieldWrapper error={error} showError={showError} label={label}>
        <StyledTreeSelect
          error={!!error}
          treeDefaultExpandedKeys={[value]}
          suffixIcon={<StyledIcons name={IconName.dropdownArrow} />}
          style={{ width: '100%', height: '40px' }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          value={value}
          treeData={clonedGroupOptions}
          fieldNames={{ label: 'name', children: 'children', value: 'id' }}
          onChange={(value) => {
            onChange({
              id: value,
            });
          }}
        />
      </RealativeFieldWrapper>
    </Container>
  );
};

const Container = styled.div<{ padding: string }>`
  display: block;
  padding: ${({ padding }) => padding};
  @media ${device.mobileL} {
    border: none;
  }
`;

const StyledIcons = styled(Icon)`
  color: #cdd5df;
  font-size: 2.4rem;
`;

const RealativeFieldWrapper = styled(FieldWrapper)`
  position: relative;
`;

const StyledTreeSelect = styled(TreeSelect)<{ $error: boolean }>`
  .ant-select-selector,
  .ant-select-selection-search-input {
    height: ${({ theme }) => `${theme.height?.fields || 5.6}rem`} !important;
    padding: 0 12px !important;
    font-size: ${({ theme }) => theme.fontSize?.fields || 1.6}rem;
    display: flex;
    align-items: center;
  }
  .ant-select {
    transition: none !important;
  }

  .ant-select-selector {
    border: 1px solid ${({ theme, $error }) =>
      $error ? theme.colors.error : theme.colors.border} !important;
    border-radius: ${({ theme }) => theme.radius?.fields || 0.4}rem; !important;
    background-color: ${({ theme }) => theme.colors.fields?.background || 'white'};
    color: ${({ theme }) => theme.colors.fields?.text || '#101010'};
  }

  .ant-select-selector:focus-within {
    border-color: ${({ theme }) =>
      theme.colors.fields?.borderFocus || theme.colors.fields?.border || '#d4d5de'} !important;
    box-shadow: ${({ theme }) =>
      theme.colors.fields?.borderFocus
        ? `0 0 0 4px ${theme.colors.fields.borderFocus}33`
        : 'none'} !important;
    outline: none !important;
    animation-duration: 0s !important;
    transition: none !important;
  }
`;

export default TreeSelectField;
