import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { DatePicker } from './DatePicker';
import { CombinedProps } from './services/datepickerInterface';

export default {
  title: 'Seed/DatePicker',
  component: DatePicker
} as Meta;

type StoryProps = CombinedProps & { fullWidth?: boolean };

export const Default: StoryObj<StoryProps> = {
  args: {
    label: 'Select Date'
  },
  render: (args) => (
    <LocalizationProvider dateAdapter={ AdapterDateFns}>
      <DatePicker {...args} />
    </LocalizationProvider>
  ),
};

export const WithInitialValue: StoryObj<StoryProps> = {
  args: {
    label: 'Select Date',
    value: new Date()
  },
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker {...args} />
    </LocalizationProvider>
  ),
};

export const Disabled: StoryObj<StoryProps> = {
  args: {
    label: 'Select Date',
    disabled: true
  },
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker {...args} />
    </LocalizationProvider>
  ),
};

export const ErrorState: StoryObj<StoryProps> = {
  args: {
    label: 'Select Date',
    error: true,
    helperText: 'Please select a valid date'
  },
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker {...args} />
    </LocalizationProvider>
  ),
};

export const FullWidth: StoryObj<StoryProps> = {
  args: {
    label: 'Select Date',
    fullWidth: true
  },
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker {...args} />
    </LocalizationProvider>
  ),
};
