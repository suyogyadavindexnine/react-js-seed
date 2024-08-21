import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { CurrencyInput } from '../../../../shared/components/index';

test('renders CurrencyInput component', () => {
  render(
    <BrowserRouter>
      <CurrencyInput label="samplelabel" />
    </BrowserRouter>
  );
  expect(screen.getByLabelText('samplelabel')).toBeInTheDocument();
});

test('renders CurrencyInput component with type select ', () => {
  const options = [
    { value: 'option1' },
    { value: 'option2' },
    { value: 'option3' }
  ];
  render(
    <BrowserRouter>
      <CurrencyInput select label="samplelabel">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </CurrencyInput>
    </BrowserRouter>
  );
  expect(screen.getByLabelText('samplelabel')).toBeInTheDocument();
});
