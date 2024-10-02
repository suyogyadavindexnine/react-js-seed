import { TextFieldProps } from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

export type CombinedProps<
  TInputDate extends Dayjs,
  TDate extends boolean
> = TextFieldProps & DatePickerProps<TInputDate, TDate>;
