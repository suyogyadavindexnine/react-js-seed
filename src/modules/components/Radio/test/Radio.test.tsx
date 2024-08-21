import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Radio } from '../../../../shared/components/index';

test('renders Radio component', () => {
  render(
    <BrowserRouter>
      <Radio />
    </BrowserRouter>
  );
  expect(screen.getByRole('radio')).toBeInTheDocument();
});

test('renders Radio component when onclick ', () => {
  render(
    <BrowserRouter>
      <Radio />
    </BrowserRouter>
  );
  const Radiocomponent = screen.getByRole('radio');
  fireEvent.click(Radiocomponent);
  expect(Radiocomponent).toBeChecked();
});
