import React from 'react';
import {
  Select as MuiSelect,
  SelectProps,
  InputLabelProps,
  OutlinedInputProps
} from '@mui/material';

interface CustomSelectProps {
  options: object[];
  label: string;
  isMultiple?: boolean;
  defaultValue?: string | number;
  isObject?: boolean;
  itemValue: string;
  itemText: string;
  helperText?: string;
}

export type CombinedProps = CustomSelectProps &
  SelectProps &
  InputLabelProps &
  OutlinedInputProps;
