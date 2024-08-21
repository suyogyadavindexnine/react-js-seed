import React from 'react';
import { Radio as MuiRadio } from '@mui/material';
// import { RadioProps } from 'src/shared/components/radio/services/radioInterface';
import { RadioProps } from './services/radioInterface';

export const Radio = ({ ...props }: RadioProps) => {
  return <MuiRadio color="primary" {...props} />;
};
