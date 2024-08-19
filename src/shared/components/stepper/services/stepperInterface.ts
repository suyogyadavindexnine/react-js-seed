import * as React from 'react';
import {
  Stepper as MuiStepper,
  StepperProps,
  StepProps,
  StepLabelProps
} from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface CustomProps {
  stepsList: {
    value: string;
    key?: number;
  }[];
  activestep?: number;
}

export type CombinedProps = CustomProps &
  StepperProps &
  StepProps &
  StepLabelProps;
