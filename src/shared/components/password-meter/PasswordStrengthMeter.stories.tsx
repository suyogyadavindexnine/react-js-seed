import { Meta, StoryObj } from '@storybook/react';
import { PasswordStrengthMeter } from '../../components/index';

export default {
  title: 'Seed/Password-Meter',
  component: PasswordStrengthMeter,
  argTypes: {}
} as Meta;

type Story = StoryObj<typeof PasswordStrengthMeter>;

export const Default: Story = {
  args: {
    password: '',
    isError: false
  }
};
