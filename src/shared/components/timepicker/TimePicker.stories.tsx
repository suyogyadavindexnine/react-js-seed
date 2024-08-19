import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';
import { TextFieldProps } from './services/timepickerInterface';

export default {
  title: 'Seed/TimePicker',
  component: TimePicker,
} as Meta;

type StoryProps = TextFieldProps & { fullWidth?: boolean };

export const Default: StoryObj<StoryProps> = {
  args: {
    label: 'Select Time',
  },
};

export const WithInitialValue: StoryObj<StoryProps> = {
  args: {
    label: 'Select Time',
    defaultValue: '12:00',
  },
};

export const Disabled: StoryObj<StoryProps> = {
  args: {
    label: 'Select Time',
    disabled: true,
  },
};

export const ErrorState: StoryObj<StoryProps> = {
  args: {
    label: 'Select Time',
    error: true,
    helperText: 'Please select a valid time',
  },
};

export const FullWidth: StoryObj<StoryProps> = {
  args: {
    label: 'Select Time',
    fullWidth: true,
  },
};
