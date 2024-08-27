import { TextFieldProps } from '@mui/material';
import { DatePickerProps } from '@mui/x-date-pickers';

export type CombinedProps<TInputDate = unknown, TDate = unknown> = TextFieldProps & DatePickerProps<TInputDate, TDate>;
