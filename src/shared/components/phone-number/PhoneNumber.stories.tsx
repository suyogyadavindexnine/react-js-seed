import { StoryObj, Meta } from '@storybook/react';
import { PhoneNumber } from './PhoneNumber';

export default {
  title: 'seed/PhoneNumber',
  component: PhoneNumber,
  argTypes: {
    onChange: { action: 'Some Action' }
  }
} as Meta;

type Story = StoryObj<typeof PhoneNumber>;

export const Default: Story = {
  args: {
    label: 'Phone Number',
    variant: 'outlined'
  }
};
