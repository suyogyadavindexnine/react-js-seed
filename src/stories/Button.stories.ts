import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonProps } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: StoryObj<ButtonProps> = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
