import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Slider } from '../../../../shared/components/index';

test('renders Slider component', () => {
  render(
    <BrowserRouter>
      <Slider />
    </BrowserRouter>
  );
  expect(screen.getByRole('slider')).toBeInTheDocument();
});

test('renders Slider component', () => {
  render(
    <BrowserRouter>
      <Slider defaultValue={30} />
    </BrowserRouter>
  );
  const slider = screen.getByRole('slider');
  expect(slider).toHaveValue('30');
});
