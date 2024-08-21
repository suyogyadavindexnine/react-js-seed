import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { FileButton } from '../../../../shared/components/index';

test('renders FileButton component', () => {
  const handleFileUpload = jest.fn();
  render(
    <BrowserRouter>
      <FileButton isMultipleFile={false} onChange={handleFileUpload} />
    </BrowserRouter>
  );
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders FileButton component with label', () => {
  const handleFileUpload = jest.fn();
  render(
    <BrowserRouter>
      <FileButton
        label="samplelabel"
        isMultipleFile={false}
        onChange={handleFileUpload}
      />
    </BrowserRouter>
  );
  expect(screen.getByRole('button')).toHaveTextContent('samplelabel');
});
