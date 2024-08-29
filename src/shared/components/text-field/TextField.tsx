import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from './services/textFieldInterface';

export const TextField = ({ ...props }: TextFieldProps) => {
  return <MuiTextField {...props} />;
};
export default TextField;
