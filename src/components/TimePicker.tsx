import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Icon, { IconName } from './common/Icons';
import TextField from './TextField';

export interface TimepickerProps {
  label?: string;
  value?: Date;
  error?: string;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  className?: string;
  maxDate?: Date;
  minDate?: Date;
  showError?: boolean;
}

const TimePicker = ({
  value,
  error,
  onChange,
  label,
  disabled,
  padding,
  className,
  showError = true,
  minDate,
  maxDate,
}: TimepickerProps) => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState<Date | null>(null);

  const getTimeInterval = (time?: Date) => {
    if (!time) {
      return null;
    }
    const minutes = Math.ceil(time.getMinutes() / 30) * 30; //result = 30 | 60 min
    const hours = time.getHours();
    if (minutes === 60 && hours === 23) {
      return null; //if almost midnight, return null as there is no available time option today.
    }
    return new Date(time.setMinutes(minutes, 0, 0)); //adds 1 hour if minutes = 60;
  };

  useEffect(() => {
    if (!value) {
      setTime(null);
    } else {
      setTime(getTimeInterval(value));
    }
  }, [value]);

  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  const filterTime = (time: Date) => {
    if (minDate && time < new Date(minDate)) {
      return false;
    }

    if (maxDate && time > new Date(maxDate)) {
      return false;
    }

    return true;
  };

  return (
    <TimeContainer
      onClick={() => setOpen(!open)}
      className={className}
      tabIndex={1}
      onBlur={handleBlur}
    >
      <StyledTextInput
        readOnly={true}
        label={label}
        padding={padding}
        value={time ? format(new Date(time), 'HH:mm') : ''}
        error={error}
        right={<TimeIcon name={IconName.time} />}
        disabled={disabled}
        showError={showError}
      />
      {open && !disabled ? (
        <DatePicker
          locale="lt"
          filterTime={filterTime}
          open={open}
          showTimeSelect
          {...(maxDate ? { maxDate: new Date(maxDate) } : {})}
          {...(minDate ? { minDate: new Date(minDate) } : {})}
          showTimeSelectOnly
          timeIntervals={30}
          selected={time}
          onChange={(date: Date) => {
            if (maxDate && date > new Date(maxDate)) {
              return onChange(maxDate);
            }
            if (minDate && date < new Date(minDate)) {
              return onChange(minDate);
            }
            onChange(date);
            setOpen(false);
          }}
          inline
        />
      ) : null}
    </TimeContainer>
  );
};

const TimeContainer = styled.div`
  cursor: pointer;
  &:focus {
    outline: none;
  }
  width: 100%;

  position: relative;
  .react-datepicker {
    top: 60px;
    position: absolute;
    z-index: 8;
    background-color: ${({ theme }) => theme.colors.dropDown?.background || '#ffffff'};
    box-shadow: 0px 2px 16px #121a5529;
    border-radius: 4px;
    border: none;
  }
  .react-datepicker--time-only {
    width: 100%;
  }
  .react-datepicker__time-container {
    width: 100% !important;
    padding: 18px 0px;
  }
  .react-datepicker__time-box {
    width: 100% !important;
    text-align: start !important;
  }
  .react-datepicker__time-list-item {
    font-weight: 600 !important;
    font-size: 1.6rem !important;
    line-height: 22px !important;
    color: ${({ theme }) => theme.colors.dropDown?.label || '#101010'} !important;
  }
  .react-datepicker__time-list-item--disabled {
    color: ${({ theme }) => theme.colors.grey} !important;
  }
  .react-datepicker__time-list-item--selected {
    background-color: ${({ theme }) => theme.colors.dropDown?.hover || '#f3f3f7'} !important;
  }
  .react-datepicker__header--time {
    display: none;
  }
`;

const TimeIcon = styled(Icon)`
  color: ${({ theme }) => theme.fields?.icon || '#cdd5df'};
  vertical-align: middle;
  margin-right: 8px;
  font-size: 2.8rem;
  align-self: center;
`;

const StyledTextInput = styled(TextField)`
  cursor: pointer !important;
`;

export default TimePicker;
