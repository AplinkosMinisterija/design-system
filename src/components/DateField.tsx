import { format, addMonths, subMonths } from 'date-fns';
import { lt } from 'date-fns/locale';
import { useEffect, useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import TextField from './TextField';
import Icon, { IconName } from './common/Icons';
import IconButton from './common/IconButton';
import { device, useWindowSize } from '../utils';
import { useKeyAction } from './common/hooks';

registerLocale('lt', lt);

export interface DateFieldProps {
  startDate?: Date;
  setStartDate?: React.Dispatch<React.SetStateAction<Date>>;
  disabled?: boolean;
  value?: Date | string;
  padding?: string;
  error?: string;
  onChange: (date?: Date) => void;
  label?: string;
  name?: string;
  className?: string;
  maxDate?: Date | string;
  minDate?: Date | string;
  bottom?: boolean;
  placeHolder?: string;
  showError?: boolean;
}

enum Mode {
  DATE = 'DATE',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

const DateField = ({
  value,
  placeHolder = '2001-01-01',
  error,
  onChange,
  label,
  disabled = false,
  padding,
  className,
  showError = true,
  maxDate,
  minDate,
}: DateFieldProps) => {
  const daterRegex = /^\d{4}-\d{2}-\d{2}$/;
  const isMobile = useWindowSize(device.mobileL);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isBottomVisible, setIsBottomVisible] = useState(true);
  const invisibleDivRef = useRef(null);
  const handleOnKeyDown = useKeyAction(() => onChange(undefined), disabled);
  const handleToggleOnKeyDown = useKeyAction(() => setOpen(!open), disabled);
  const [mode, setMode] = useState<Mode>(Mode.DATE);
  const headerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const checkVisibility = (entries: { isIntersecting: any }[]) => {
      const isDivBottomVisible = entries[0].isIntersecting;

      setIsBottomVisible(isDivBottomVisible);
    };

    const observer = new IntersectionObserver(checkVisibility, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });

    if (invisibleDivRef.current) {
      observer.observe(invisibleDivRef.current);
    }

    return () => {
      if (invisibleDivRef.current) {
        observer.unobserve(invisibleDivRef.current);
      }
    };
  }, [open]);

  const handleBlurInput = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (!validDate(inputValue)) {
        setInputValue('');
        onChange(undefined);
      }
    }
  };

  useEffect(() => {
    if (!value) {
      setInputValue('');
    } else {
      setInputValue(format(new Date(value), 'yyyy-MM-dd'));
    }
  }, [value]);

  const isLessThanMaxDate = (value: string) => {
    if (maxDate) {
      return new Date(value) <= new Date(maxDate);
    }
    return true;
  };

  const isMoreThanMinDate = (value: string) => {
    if (minDate) {
      return new Date(value) >= new Date(minDate);
    }
    return true;
  };

  const validDate = (date: string) =>
    daterRegex.test(date) &&
    new Date(date).toString() !== 'Invalid Date' &&
    isMoreThanMinDate(date) &&
    isLessThanMaxDate(date);

  const handleChange = (date?: string) => {
    if (!date) return;
    setInputValue(date);
    if (validDate(date)) {
      onChange(new Date(date));
    }
  };

  const textValue = validDate(inputValue) ? format(new Date(inputValue), 'yyyy-MM-dd') : inputValue;

  const handleChangeDate = (date: Date) => {
    const changedDate = value ? new Date(value as any) : new Date();
    if (mode === Mode.DATE) {
      changedDate.setFullYear(date.getFullYear());
      changedDate.setMonth(date.getMonth());
      changedDate.setDate(date.getDate());
    } else if (mode === Mode.MONTH) {
      changedDate.setFullYear(date.getFullYear());
      changedDate.setMonth(date.getMonth());
    } else if (mode === Mode.YEAR) {
      changedDate.setFullYear(date.getFullYear());
    }
    if (maxDate && changedDate > new Date(maxDate)) {
      return onChange(new Date(maxDate));
    }
    if (minDate && changedDate < new Date(minDate)) {
      return onChange(new Date(minDate));
    }
    onChange(changedDate);
  };

  return (
    <Container
      className={className}
      $bottom={!isBottomVisible}
      aria-haspopup="dialog"
      $disabled={disabled}
    >
      <TextFieldWrapper
        tabIndex={0}
        onBlur={handleBlurInput}
        onClick={() => setOpen(!open)}
        onKeyDown={handleToggleOnKeyDown()}
      >
        <TextField
          placeholder={placeHolder}
          className={className}
          onChange={handleChange}
          label={label}
          padding={padding}
          value={textValue}
          showError={showError}
          error={error}
          right={
            <>
              {value && !disabled && (
                <IconContainer
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(undefined);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Remove ${textValue}`}
                  onKeyDown={handleOnKeyDown()}
                  $disabled={disabled}
                >
                  <ClearIcon name={IconName.close} $disabled={disabled} />
                </IconContainer>
              )}
              <IconContainer $disabled={disabled}>
                <CalendarIcon name={IconName.calendar} />
              </IconContainer>
            </>
          }
          disabled={disabled}
        />
      </TextFieldWrapper>

      {open && !disabled ? (
        <DateContainer ref={calendarRef}>
          {isMobile && (
            <div onClick={() => setOpen(false)}>
              <CloseIcon name={IconName.close} />
            </div>
          )}
          <DatePicker
            locale="lt"
            open={open}
            selected={value ? new Date(value as any) : null}
            onChange={handleChangeDate}
            inline
            maxDate={maxDate ? new Date(maxDate) : undefined}
            minDate={minDate ? new Date(minDate) : undefined}
            //@ts-ignore
            showMonthYearPicker={mode === Mode.MONTH}
            showYearPicker={mode === Mode.YEAR}
            onClickOutside={() => setOpen(false)}
            renderCustomHeader={({
              decreaseYear,
              increaseYear,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => {
              const date = value ? new Date(value as any) : new Date();
              const month = date.toLocaleString('lt', { month: 'long' });
              const year = date.getFullYear();
              return (
                <Header ref={headerRef}>
                  <IconButton
                    iconName={IconName.leftArrow}
                    onClick={() => {
                      if (mode === Mode.MONTH || mode === Mode.DATE) {
                        const prevMonth = subMonths(date, 1);
                        handleChangeDate(prevMonth);
                      } else {
                        decreaseYear();
                      }
                    }}
                    disabled={prevMonthButtonDisabled}
                  />
                  <MonthYearWrapper>
                    <ToggleButton
                      $isOn={mode === Mode.MONTH}
                      onClick={() => {
                        setMode(mode === Mode.MONTH ? Mode.DATE : Mode.MONTH);
                      }}
                    >
                      {month}
                    </ToggleButton>
                    <ToggleButton
                      $isOn={mode === Mode.YEAR}
                      onClick={() => setMode(mode === Mode.YEAR ? Mode.DATE : Mode.YEAR)}
                    >
                      {year}
                    </ToggleButton>
                  </MonthYearWrapper>
                  <IconButton
                    iconName={IconName.rightArrow}
                    onClick={() => {
                      if (mode === Mode.MONTH || mode === Mode.DATE) {
                        const nextMonth = addMonths(date, 1);
                        handleChangeDate(nextMonth);
                      } else {
                        increaseYear();
                      }
                    }}
                    disabled={nextMonthButtonDisabled}
                  />
                </Header>
              );
            }}
          />
        </DateContainer>
      ) : null}
      <InvisibleContainer ref={invisibleDivRef} />
    </Container>
  );
};

const DateContainer = styled.div`
  position: relative;
  &:focus {
    outline: none;
  }
  @media ${device.mobileL} {
    position: fixed;
    z-index: 9;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const CalendarIcon = styled(Icon)`
  color: rgb(122, 126, 159);
  vertical-align: middle;
  margin-right: 8px;
  font-size: 2rem;
  align-self: center;
`;

const CloseIcon = styled(Icon)`
  color: white;
  font-size: 2.8rem;
  align-self: center;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const IconContainer = styled.div<{ $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const InvisibleContainer = styled.div`
  height: 0px;
  top: 400px;
  position: absolute;
  width: 10px;
  z-index: 9999999;
`;

const Container = styled.div<{ $disabled: boolean; $bottom: boolean }>`
  position: relative;
  align-content: flex-end;
  &:focus {
    outline: none;
  }
  .react-datepicker__header {
    color: #121a55;
    background-color: #ffffff !important;
    border: none;
  }
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__day--outside-month:before {
    color: #151229;
    opacity: 0.6;
  }
  .react-datepicker__input-time-container {
    text-align: center;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__day {
    &:focus {
      outline: none;
    }
    margin: 26px 32px 0px 0px;
    position: relative;
    font-size: 1.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      &::before {
        content: '';
        position: absolute;
        background-color: ${({ theme }) => theme.colors.primary};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 50px;
        height: 50px;
        border-radius: 25px;
      }
    }

    @media ${device.mobileS} {
      margin: 26px 16px 0px 0px;
      &:hover {
        &::before {
          content: '';
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .react-datepicker__input-time-container {
    margin: 0;
  }
  .react-datepicker {
    width: 364px;
    position: absolute;
    // top: ${({ $bottom }) => ($bottom ? '-370px' : '5px')};
    z-index: 8;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px #121a5529;
    border-radius: 10px;
    padding: 0px 26px 20px 26px;
    border: none;
    @media ${device.mobileL} {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    @media ${device.mobileS} {
      width: 95%;
    }
  }
  .react-datepicker-time__caption {
    font-size: 1.6rem;
    display: block !important;
    margin: 15px 0px 10px 0px;
    text-align: center;
    color: #0b1f51;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .react-datepicker__day--selected {
    background-color: white;
    position: relative;
    z-index: 1;
    font-size: 1.5rem;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: white;
    font-size: 1.5rem;
    color: #121a55;
  }
  .react-datepicker__day--selected::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    background-color: ${({ theme }) => theme.colors.primary};
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }

  @media ${device.mobileS} {
    .react-datepicker__day--selected::before {
      content: '';
      width: 30px;
      height: 30px;
    }
  }
  .react-datepicker__day-name {
    font-size: 1.4rem;
    font-weight: bold;

    letter-spacing: 0px;
    color: #151229;
    margin: 26px 32px 0px 0px;
    border: none;
  }

  @media ${device.mobileS} {
    .react-datepicker__day-name {
      margin: 26px 16px 0px 0px;
    }
  }
  .react-datepicker__navigation {
    top: 20px;
  }
  .react-datepicker__current-month {
    text-align: center;
    font-size: 1.6rem;
    letter-spacing: 0px;
    color: #121a55;
    margin-top: 13px;
    text-transform: capitalize;
  }
  .react-datepicker__navigation--previous {
    left: 17px;
  }
  .react-datepicker__navigation--next {
    right: 17px;
  }
  .react-datepicker__month-container {
    float: none;
  }

  .react-datepicker__year-select option {
    padding: 8px;
    background-color: white;
  }

  .react-datepicker__year-wrapper {
    max-width: 100%;
  }

  .react-datepicker__month-wrapper,
  .react-datepicker__year-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .react-datepicker__month-wrapper div,
  .react-datepicker__year-wrapper div {
    width: 100%;
    font-size: 1.6rem;
    height: ${({ theme }) => theme.height?.buttons || 4}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus {
      background-color: ${({ theme }) => theme.colors.lightYellow || '#a9d8fd'};
      color: ${({ theme }) => theme.colors.primary || '#53B1FD'};
      border: 1px solid ${({ theme }) => theme.colors.yellow || '#53B1FD'};
      border-radius: ${({ theme }) => theme.borderRadius?.buttons || 4}rem;
    }
  }

  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: ${({ theme }) => theme.colors.lightYellow};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    border-radius: ${({ theme }) => theme.borderRadius?.buttons}rem;
  }
  .react-datepicker__month-text--keyboard-selected:not([aria-disabled='true']):hover {
    background-color: ${({ theme }) => theme.colors.lightYellow};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }
  .react-datepicker__year-text--keyboard-selected:not([aria-disabled='true']):hover {
    background-color: ${({ theme }) => theme.colors.lightYellow};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }
  .react-datepicker__month-text:not([aria-disabled='true']):hover {
    background-color: white;
    border: none;
  }
  .react-datepicker__year-text:not([aria-disabled='true']):hover {
    background-color: white;
    border: none;
  }
  .react-datepicker__month-text--keyboard-selected:not([aria-disabled='true']):hover {
    background-color: ${({ theme }) => theme.colors.lightYellow};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }
  .react-datepicker__year-text--selected:not([aria-disabled='true']):hover {
    background-color: ${({ theme }) => theme.colors.lightYellow};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }
  .react-datepicker__month-text--selected,
  .react-datepicker__year-text--selected {
    background-color: ${({ theme }) => theme.colors.lightYellow};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ClearIcon = styled(Icon)<{ $disabled: boolean }>`
  color: #cdd5df;
  font-size: 2.4rem;
  margin-right: 12px;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: ${({ theme }) => theme.height?.buttons}rem;
  gap: 8px;
  padding-top: 16px;
`;
const MonthYearWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ToggleButton = styled.button<{ $isOn: boolean }>`
  background-color: ${({ $isOn, theme }) => ($isOn ? theme.colors.primary : 'transparent')};
  color: ${({ $isOn, theme }) => ($isOn ? 'white' : theme.colors.texts?.primary)};
  border: none;
  cursor: pointer;
  padding: ${({ $isOn }) => ($isOn ? '4px 8px' : '4px 0')};
  margin: 0;
  font-size: 1.6rem;
  text-transform: capitalize;
  &:focus {
    outline: none;
  }
`;

const TextFieldWrapper = styled.div`
  min-width: 180px;
`;

export default DateField;
