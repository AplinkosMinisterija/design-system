import { useEffect, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import TextField from './TextField';
import Icon, { IconName } from './common/Icons';
import { device, useWindowSize } from '../utils';
import { useKeyAction } from './common/hooks';
import { format } from 'date-fns/format';

const isValidTime = (time?: string) => {
  if (!time) return false;
  const regex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
  return regex.test(time);
};

const stringToObject = (value?: string) => {
  if (!value || !isValidTime(value)) return undefined;
  const [h, m] = value.split(':');
  return {
    hour: parseInt(h),
    minute: parseInt(m),
  };
};

const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 60 }, (_, i) => i);

export interface CustomTimePickerProps {
  startDate?: Date;
  disabled?: boolean;
  value?: string;
  padding?: string;
  error?: string;
  onChange: (time?: string) => void;
  label?: string;
  name?: string;
  className?: string;
  maxTime?: string;
  minTime?: string;
  bottom?: boolean;
  placeHolder?: string;
  showError?: boolean;
}

const TimeField = ({
  value,
  placeHolder = '12:00',
  error,
  onChange,
  label,
  disabled = false,
  padding,
  className,
  showError = true,
  maxTime,
  minTime,
}: CustomTimePickerProps) => {
  const isMobile = useWindowSize(device.mobileL);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(stringToObject(value));
  const [inputValue, setInputValue] = useState(isValidTime(value) ? value : '');
  const [isBottomVisible, setIsBottomVisible] = useState(true);
  const invisibleDivRef = useRef(null);
  const handleToggleOnKeyDown = useKeyAction(() => setOpen(!open), disabled);
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef?.current?.contains(event.target as Node)) return;
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
    if (
      !event.currentTarget.contains(event.relatedTarget) &&
      !calendarRef?.current?.contains(event.relatedTarget)
    ) {
      setInputValue('');
      setTime(undefined);
      onChange(undefined);
    }
  };

  const minTimeObject = stringToObject(minTime);
  const maxTimeObject = stringToObject(maxTime);

  const currentHour = time?.hour || minTimeObject?.hour || 0;
  const currentMinute = time?.minute || maxTimeObject?.minute || 0;

  const isTimeDisabled = (hour: number, minute: number) => {
    if (!minTimeObject && !maxTimeObject) return false;

    const minDate = minTimeObject
      ? new Date().setHours(minTimeObject.hour, minTimeObject.minute, 0, 0)
      : undefined;

    const maxDate = maxTimeObject
      ? new Date().setHours(maxTimeObject.hour, maxTimeObject.minute, 0, 0)
      : undefined;

    const dateToCheck = new Date().setHours(hour, minute, 0, 0);
    if (minDate && dateToCheck < minDate) return true;
    if (maxDate && dateToCheck > maxDate) return true;
    return false;
  };

  const handleTimeChange = (hour: any, minute: any) => {
    if (!isTimeDisabled(hour, minute)) {
      setTime({ hour, minute });
      const inputValue = format(new Date().setHours(hour, minute, 0, 0), 'HH:mm');
      onChange(inputValue);
      setInputValue(inputValue);
    }
  };

  const handleChange = (date?: string) => {
    if (
      (date || '').match(
        /^(|[0-1]|2|[01]\d|2[0-3]|([01]\d|2[0-3]):?|([01]\d|2[0-3]):[0-5]?|([01]\d|2[0-3]):[0-5]\d)$/,
      )
    ) {
      setInputValue(date || '');
    }
    if (!!date && date.length === 5) {
      const [hour, minute] = date.split(':');
      const newVal = { hour: parseInt(hour), minute: parseInt(minute) };
      setTime(newVal);
      onChange(date);
    } else {
      onChange(undefined);
    }
  };

  return (
    <Container
      className={className}
      $bottom={!isBottomVisible}
      aria-haspopup="dialog"
      $disabled={disabled}
    >
      <div
        tabIndex={0}
        id={'input_wrapper'}
        onBlur={handleBlurInput}
        onKeyDown={handleToggleOnKeyDown()}
        onClick={() => setOpen(!open)}
        ref={inputRef}
      >
        <TextField
          placeholder={placeHolder}
          className={className}
          onChange={handleChange}
          label={label}
          padding={padding}
          value={inputValue}
          showError={showError}
          error={error}
          right={
            <>
              <IconContainer $disabled={disabled}>
                <CalendarIcon name={IconName.time} />
              </IconContainer>
            </>
          }
          disabled={disabled}
        />
      </div>

      {open ? (
        <DateContainer ref={calendarRef} tabIndex={1}>
          {isMobile && (
            <div onClick={() => setOpen(false)}>
              <CloseIcon name={IconName.close} />
            </div>
          )}
          <DropdownContainer>
            <TimeColumns>
              <Column>
                {hours.map((h) => (
                  <TimeOption
                    key={h}
                    selected={h === currentHour}
                    disabled={isTimeDisabled(h, currentMinute)}
                    onClick={() => handleTimeChange(h, currentMinute)}
                  >
                    {h.toString().padStart(2, '0')}
                  </TimeOption>
                ))}
              </Column>
              <Column>
                {minutes.map((m) => (
                  <TimeOption
                    key={m}
                    selected={m === currentMinute}
                    disabled={isTimeDisabled(currentHour, m)}
                    onClick={() => handleTimeChange(currentHour, m)}
                  >
                    {m.toString().padStart(2, '0')}
                  </TimeOption>
                ))}
              </Column>
            </TimeColumns>
          </DropdownContainer>
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
`;

const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dropDown?.background || '#ffffff'};
  box-shadow: 0px 2px 16px #121a5529;
  border-radius: 4px;
  z-index: 8;
`;

const TimeColumns = styled.div`
  display: flex;
  padding: 18px 0;
`;

const Column = styled.div`
  flex: 1;
  max-height: 200px;
  overflow-y: auto;

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.grey || '#e0e0e0'};
  }
`;

const TimeOption = styled.div<{ selected?: boolean; disabled?: boolean }>`
  padding: 8px 16px;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 22px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.dropDown?.label || '#101010'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.dropDown?.hover || '#f3f3f7' : 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? 'transparent' : theme.colors.dropDown?.hover || '#f3f3f7'};
  }
`;

export default TimeField;
