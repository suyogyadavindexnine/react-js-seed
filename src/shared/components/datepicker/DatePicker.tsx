import * as React from 'react';
// import { DatePicker as MuiDatePicker, DatePickerProps } from '@mui/lab';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'
// import { CombinedProps } from 'src/shared/components/datepicker/services/datepickerInterface';
import { CombinedProps } from './services/datepickerInterface';
import TextField from '@mui/material/TextField';

export const DatePicker = ({ ...props }: CombinedProps) => {
  return (
    <MuiDatePicker
      {...props}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};
