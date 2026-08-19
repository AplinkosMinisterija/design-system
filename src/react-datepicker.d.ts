declare module 'react-datepicker' {
  import * as React from 'react';

  interface DatePickerProps {
    [key: string]: any;
  }

  class DatePicker extends React.Component<DatePickerProps> {}

  function registerLocale(locale: string, config: any): void;

  export default DatePicker;
  export { registerLocale };
}
