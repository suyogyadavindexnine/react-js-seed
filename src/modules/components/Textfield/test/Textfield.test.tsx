import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { TextField } from '../../../../shared/components/index';

test('renders TextField component', () => {
  render(
    <BrowserRouter>
      <TextField label="sample" />
    </BrowserRouter>
  );
  expect(screen.getByLabelText('sample')).toBeInTheDocument();
});

test('renders TextField component with default value and onchange value', () => {
  render(
    <BrowserRouter>
      <TextField label="sample" defaultValue="" />
    </BrowserRouter>
  );
  const textfield = screen.getByLabelText('sample');
  expect(textfield).toHaveValue('');
  fireEvent.change(textfield, { target: { value: 'Hello, world!' } });
  expect(textfield).toHaveValue('Hello, world!');
});
