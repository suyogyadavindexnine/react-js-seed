import { StoryObj, Meta } from '@storybook/react';
import { Radio } from './Radio';

export default {
  title: 'Seed/Radio',
  component: Radio,
  argTypes: {
    onChange: { action: 'Item checked' },
    backgroundColor: { control: 'color' }
  }
} as Meta;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = {};

export const RadioWithChecked: Story = {
  args: {
    checked: true
  }
};
export const RadioWithSize: Story = {
  args: {
    checked: true,
    size: 'medium'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
