import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { InputAdornment } from '@mui/material';

export default {
  title: 'Seed/TextField',
  component: TextField,
  argTypes: {
    onChange: { action: 'Some Action' }
  }
} as Meta;

type Story = StoryObj<typeof TextField>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined'
  }
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled'
  }
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    label: 'Standard'
  }
};

export const Textarea: Story = {
  args: {
    variant: 'outlined',
    label: 'Textarea',
    minRows: 8
  }
};

export const Disabled: Story = {
  args: {
    variant: 'outlined',
    label: 'Disabled',
    disabled: true,
    defaultValue: 'Disabled Button'
  }
};

export const Error: Story = {
  args: {
    variant: 'outlined',
    label: 'Required Field',
    required: true,
    defaultValue: 'This Field is required'
  }
};

export const Password: Story = {
  args: {
    variant: 'outlined',
    label: 'Password Field',
    type: 'password'
  }
};

export const ReadOnly: Story = {
  args: {
    variant: 'outlined',
    label: 'ReadOnly',
    InputProps: {
      readOnly: true
    },
    defaultValue: 'ReadOnly Field'
  }
};

export const NumberOnly: Story = {
  args: {
    variant: 'outlined',
    label: 'Enter a Number',
    type: 'number'
  }
};

export const SearchField: Story = {
  args: {
    variant: 'outlined',
    label: 'Search',
    type: 'search'
  }
};

export const PrependIcon: Story = {
  args: {
    variant: 'outlined',
    label: 'Dollars',
    InputProps: {
      startAdornment: <InputAdornment position="start">$</InputAdornment>
    }
  }
};

export const AppendIcon: Story = {
  args: {
    variant: 'outlined',
    label: 'Weight',
    InputProps: {
      endAdornment: <InputAdornment position="end">kg</InputAdornment>
    }
  }
};

export const FullWidth: Story = {
  args: {
    variant: 'outlined',
    label: 'Full Width Field',
    fullWidth: true
  }
};
