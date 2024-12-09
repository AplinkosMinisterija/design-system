import { JSX } from 'react';
import styled from 'styled-components';
import LoaderComponent from '../common/LoaderComponent';
import { useKeyAction } from './hooks';

export interface SelectOption {
  id?: string;
  label?: string;
  [key: string]: any;
}
export interface OptionContainerTexts {
  noOptions: string;
}

export interface OptionsContainerProps {
  options?: any[];
  disabled?: boolean;
  getOptionLabel: (option: any) => string | JSX.Element;
  handleScroll?: (option: any) => any;
  loading?: boolean;
  showSelect: boolean;
  handleClick: (option: any) => any;
  texts?: OptionContainerTexts;
  observerRef?: any;
  className?: string;
}

const OptionsContainer = ({
  options = [],
  disabled = false,
  getOptionLabel,
  handleClick,
  showSelect,
  observerRef,
  loading,
  texts = { noOptions: '' },
  className,
}: OptionsContainerProps) => {
  const display = showSelect && !disabled;
  const optionsLength = options.length;
  const handleOnKeyDown = useKeyAction(handleClick);

  const renderOptions = () => {
    if (!options.length) {
      return loading ? (
        <LoaderComponent aria-live="polite" />
      ) : (
        <Option key="no-options" role="option" aria-disabled="true">
          {texts.noOptions}
        </Option>
      );
    }

    return (
      <>
        {options.map((option, index) => (
          <Option
            key={JSON.stringify(option) + index}
            role="option"
            tabIndex={0}
            onClick={() => {
              handleClick(option);
            }}
            onKeyDown={handleOnKeyDown(option)}
          >
            {getOptionLabel && getOptionLabel(option)}
          </Option>
        ))}
        {loading && <LoaderComponent aria-live="polite" />}
      </>
    );
  };

  return (
    <>
      <OptionContainer
        $display={display}
        className={className}
        role="listbox"
        aria-hidden={!display}
      >
        {renderOptions()}
        {observerRef && <ObserverRef $display={display} ref={observerRef} aria-hidden={!display} />}
      </OptionContainer>
      <OptionsLength aria-live="polite" aria-atomic="true">
        {optionsLength}
      </OptionsLength>
    </>
  );
};

const OptionsLength = styled.div`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

const OptionContainer = styled.div<{ $display: boolean }>`
  display: ${({ $display }) => ($display ? 'block' : 'none')};
  position: absolute;
  z-index: 29;
  width: 100%;
  padding: 10px 0px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  border: none;
  background: ${({ theme }) => theme.colors.dropDown?.background || '#ffffff'} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 2px 16px #121a5529;

  > * {
    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  > * {
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;

const Option = styled.div`
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 20px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.dropDown?.label || '#101010'};
  &:hover {
    background: ${({ theme }) => theme.colors.dropDown?.hover || '#f3f3f7'} 0% 0% no-repeat
      padding-box;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary || '#000'};
  }
`;

const ObserverRef = styled.div<{ $display: boolean }>`
  display: ${({ $display }) => ($display ? 'block' : 'none')};
`;

export default OptionsContainer;
