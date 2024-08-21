import { StoryObj, Meta } from '@storybook/react';
import { CheckBox } from './CheckBox';

export default {
  title: 'Seed/CheckBox',
  component: CheckBox,
  argTypes: {
    onChange: { action: 'Item checked' },
    backgroundColor: { control: 'color' }
  }
} as Meta;

type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {};

export const CheckBoxWithChecked: Story = {
  args: {
    checked: true
  }
};
export const CheckBoxWithSize: Story = {
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
