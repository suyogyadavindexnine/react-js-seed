import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { CircularProgress } from '../../../../shared/components/index';

test('renders CircularProgress component', () => {
  render(
    <BrowserRouter>
      <CircularProgress />
    </BrowserRouter>
  );
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});

test('renders CircularProgress component', () => {
  const size = 20;
  render(
    <BrowserRouter>
      <CircularProgress size={size} />
    </BrowserRouter>
  );

  const circualrpcomponent = screen.getByRole('progressbar');

  expect(circualrpcomponent).toHaveStyle('width: 20px');
  expect(circualrpcomponent).toHaveStyle('height: 20px');
});
