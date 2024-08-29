import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Button } from '../../../../shared/components/index';

test('renders button component', () => {
  render(
    <BrowserRouter>
      <Button btnText="Secondary" color="secondary" variant="contained" />
    </BrowserRouter>
  );
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders button component with text', () => {
  render(
    <BrowserRouter>
      <Button btnText="Secondary" color="secondary" variant="contained" />
    </BrowserRouter>
  );
  //expect(screen.getByRole('button')).toBeInTheDocument();
  const buttonComponent = screen.getByRole('button', { name: /Secondary/i });
  expect(buttonComponent).toHaveTextContent('Secondary');
});
