import { TextFieldProps } from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

export type CombinedProps<
  TInputDate extends Dayjs = any,
  TDate extends boolean = any
> = TextFieldProps & DatePickerProps<TInputDate, TDate>;
