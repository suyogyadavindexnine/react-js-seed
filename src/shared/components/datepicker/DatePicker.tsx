import * as React from 'react';
import { DatePicker as MuiDatePicker, DatePickerProps } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { TextFieldProps } from '@mui/material';

export const DatePicker = ({
  ...props
}: DatePickerProps<Dayjs, boolean> & { renderInput?: (params: TextFieldProps) => JSX.Element }) => {
  return (
    <MuiDatePicker
      {...props}
      slots={{
        textField: (props: TextFieldProps) => <TextField {...props} />,
      }}
    />
  );
};
