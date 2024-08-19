import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonToggle } from './ButtonToggle';

export default {
  title: 'Seed/ButtonToggle',
  component: ButtonToggle,
} as Meta;

type Story = StoryObj<typeof ButtonToggle>;

export const Default: Story = {
  args: {
    buttons: [
      { value: 'option1', content: 'Option 1' },
      { value: 'option2', content: 'Option 2' },
    ],
  },
};

export const Custom: Story = {
  args: {
    buttons: [
      { value: 'custom1', content: 'Custom 1' },
      { value: 'custom2', content: 'Custom 2' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    buttons: [
      { value: 'disabled1', content: 'Disabled 1' },
      { value: 'disabled2', content: 'Disabled 2' },
    ],
    disabled: true,
  },
};
