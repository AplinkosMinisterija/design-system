import styled from 'styled-components';
import LoaderComponent from '../common/LoaderComponent';

export interface SelectOption {
  id?: string;
  label?: string;
  [key: string]: any;
}
export interface OptionContainerTexts {
  noOptions: string;
}

export interface OptionsContainerProps {
  values?: any[];
  disabled?: boolean;
  getOptionLabel: (option: any) => string;
  handleScroll?: (option: any) => any;
  loading?: boolean;
  showSelect: boolean;
  handleClick: (option: any) => any;
  texts?: OptionContainerTexts;
  observerRef?: any;
}

const OptionsContainer = ({
  values = [],
  disabled = false,
  getOptionLabel,
  handleClick,
  showSelect,
  observerRef,
  loading,
  texts = { noOptions: '' },
}: OptionsContainerProps) => {
  const display = showSelect && !disabled;

  const renderOptions = () => {
    if (!values.length)
      return loading ? (
        <LoaderComponent />
      ) : (
        <Option key={texts.noOptions}>{texts.noOptions}</Option>
      );

    return (
      <>
        {values.map((option, index) => {
          return (
            <Option
              key={JSON.stringify(option) + index}
              onClick={() => {
                handleClick(option);
              }}
            >
              {getOptionLabel && getOptionLabel(option)}
            </Option>
          );
        })}
        {loading && <LoaderComponent />}
      </>
    );
  };
  return (
    <OptionContainer display={display}>
      {renderOptions()}
      {observerRef && <ObserverRef display={display} ref={observerRef} />}
    </OptionContainer>
  );
};

const OptionContainer = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  position: absolute;
  z-index: 29;
  width: 100%;
  padding: 10px 0px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  border: none;
  background: #ffffff 0% 0% no-repeat padding-box;
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
  &:hover {
    background: #f3f3f7 0% 0% no-repeat padding-box;
  }
`;

const ObserverRef = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

export default OptionsContainer;
