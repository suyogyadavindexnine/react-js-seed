import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Typography } from '../../../../shared/components/index';

test('renders Typography component', () => {
  render(
    <BrowserRouter>
      <Typography>some text</Typography>
    </BrowserRouter>
  );
  expect(screen.getByTestId('typography')).toBeInTheDocument();
});

test('renders Typography component', () => {
  render(
    <BrowserRouter>
      <Typography>some text</Typography>
    </BrowserRouter>
  );
  const typography = screen.getByTestId('typography');
  expect(typography).toHaveTextContent('some text');
});

test('renders Typography component', () => {
  render(
    <BrowserRouter>
      <Typography variant="h1">some text</Typography>
    </BrowserRouter>
  );
  const typography = screen.getByTestId('typography');
  expect(typography).toHaveStyle(` font-weight: 300;
    font-size: 6rem;
    line-height: 1.167;`);
});
