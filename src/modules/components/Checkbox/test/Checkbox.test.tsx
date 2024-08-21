import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CheckBox } from '../../../../shared/components/index';

test('renders checkbox component', () => {
  render(
    <BrowserRouter>
      <CheckBox />
    </BrowserRouter>
  );
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
});
test('renders checkbox component with checked value true', () => {
  render(
    <BrowserRouter>
      <CheckBox checked />
    </BrowserRouter>
  );
  const checkboxcomponent = screen.getByRole('checkbox');
  expect(checkboxcomponent).toBeChecked();
});

test('renders checkbox component with checked value false', () => {
  render(
    <BrowserRouter>
      <CheckBox checked={false} />
    </BrowserRouter>
  );
  const checkboxcomponent = screen.getByRole('checkbox');
  expect(checkboxcomponent).not.toBeChecked();
});

test('renders checkbox component with onclick checked and unchecked', () => {
  render(
    <BrowserRouter>
      <CheckBox />
    </BrowserRouter>
  );
  const checkboxcomponent = screen.getByRole('checkbox');
  expect(checkboxcomponent).not.toBeChecked();
  fireEvent.click(checkboxcomponent);
  expect(checkboxcomponent).toBeChecked();
  fireEvent.click(checkboxcomponent);
  expect(checkboxcomponent).not.toBeChecked();
});
