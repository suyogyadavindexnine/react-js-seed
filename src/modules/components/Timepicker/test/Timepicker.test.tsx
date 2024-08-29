import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { TimePicker } from '../../../../shared/components/index';

test('renders TimePicker component', () => {
  render(
    <BrowserRouter>
      <TimePicker label="Simple Timepicker" />
    </BrowserRouter>
  );
  expect(screen.getByLabelText('Simple Timepicker')).toBeInTheDocument();
});
