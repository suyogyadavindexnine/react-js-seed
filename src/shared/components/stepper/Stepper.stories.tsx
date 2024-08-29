import { StoryObj, Meta } from '@storybook/react';
import { Stepper } from './Stepper';
import { Typography } from '@mui/material';

export default {
  title: 'Seed/Stepper',
  component: Stepper,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

type Story = StoryObj<typeof Stepper>;
const steps = [
  { value: 'Select campaign settings', key: 1 },
  { value: 'Create an ad group', key: 2 },
  { value: 'Create an ad', key: 3 }
];

export const StepperDefault: Story = {
  args: {
    stepsList: steps
  }
};

export const StepperWithVertical: Story = {
  args: {
    stepsList: steps,
    activestep: 2,
    orientation: 'vertical'
  }
};
