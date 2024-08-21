import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TextField, DatePicker } from '../../../../shared/components/index';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'

test('renders Datepicker component', () => {
  const selectedDate = new Date();
  const handleFileUpload = jest.fn();
  render(
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          renderInput={() => <TextField />}
          value={selectedDate}
          onChange={handleFileUpload}
          variant="filled"
          label="date"
        />
      </LocalizationProvider>
    </BrowserRouter>
  );
  expect(screen.getByLabelText('date')).toBeInTheDocument();
});
