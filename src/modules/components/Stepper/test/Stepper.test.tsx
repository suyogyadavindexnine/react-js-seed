import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Stepper } from '../../../../shared/components/index';

test('renders stepper component', () => {
  const steps = [
    { value: 'Select campaign settings', key: 1 },
    { value: 'Create an ad group', key: 2 },
    { value: 'Create an ad', key: 3 }
  ];
  render(
    <BrowserRouter>
      <Stepper stepsList={steps} />
    </BrowserRouter>
  );
  expect(screen.getByTestId('muistepper')).toBeInTheDocument();
});

test('renders stepper component with vertical orientation', () => {
  const steps = [
    { value: 'Select campaign settings', key: 1 },
    { value: 'Create an ad group', key: 2 },
    { value: 'Create an ad', key: 3 }
  ];
  render(
    <BrowserRouter>
      <Stepper orientation="vertical" stepsList={steps} />
    </BrowserRouter>
  );
  expect(screen.getByTestId('muistepper')).toHaveClass('MuiStepper-vertical');
});
