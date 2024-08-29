import * as React from 'react';
import { DatePicker as MuiDatePicker, DatePickerProps } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material';

// Define the DatePicker component with both type arguments
export const DatePicker = ({
  ...props
}: TextFieldProps & DatePickerProps<Date, Date>) => {
  return (
    <MuiDatePicker
      {...props}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};
