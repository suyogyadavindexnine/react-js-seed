import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Select } from '../../../../shared/components/index';
import { FormControl } from '@mui/material';

test('renders select component', () => {
  const singleSelectOptionList = [
    {
      label: 'Item 1',
      value: '1'
    },
    {
      label: 'Item 2',
      value: '2'
    },
    {
      label: 'Item 3',
      value: '3'
    }
  ];
  render(
    <BrowserRouter>
      <Select
        label="select dropdown"
        itemText="label"
        itemValue="value"
        defaultValue={singleSelectOptionList[0].label}
        options={singleSelectOptionList}
      />
    </BrowserRouter>
  );
  expect(screen.getByTestId('selectinput')).toBeInTheDocument();
});
