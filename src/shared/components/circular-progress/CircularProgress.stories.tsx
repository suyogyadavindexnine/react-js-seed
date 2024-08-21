import { StoryObj, Meta } from '@storybook/react';
import { CircularProgress } from './CircularProgress';

export default {
  title: 'Seed/CircularProgress',
  component: CircularProgress,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

type Story = StoryObj<typeof CircularProgress>;

export const BasicCircularProgress: Story = {};

export const BasicCircularProgressWithColors: Story = {
  args: {
    color: 'warning'
  }
};

export const CircularProgressWithSizes: Story = {
  args: {
    size: 80
  }
};

export const CircularProgressWithThickness: Story = {
  args: {
    thickness: 8
  }
};

export const CircularProgressWithValue: Story = {
  args: {
    value: 80,
    variant: 'determinate'
  }
};
