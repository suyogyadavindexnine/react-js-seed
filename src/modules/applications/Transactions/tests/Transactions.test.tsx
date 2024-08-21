import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';

import RecentOrders from '../components/RecentOrders';
import RecentOrdersTable from '../components/RecentOrdersTable';
import { themeCreator } from 'src/core/theme/base';
import { ThemeProvider } from '@mui/material';

const initialState = {
  cryptoOrders: [
    {
      id: '1',
      orderDetails: 'Fiat Deposit',
      orderDate: 'jan 27 2023',
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: '$'
    }
  ]
};
const mockStore = configureMockStore();
let store;
let theme = {};
beforeEach(() => {
  theme = themeCreator('PureLightTheme');
});
describe('test RecentOrders', () => {
  store = mockStore(initialState);
  const handleButtonClick = jest.fn();

  const element = (
    <ThemeProvider theme={theme}>
      <RecentOrders
        cryptoOrders={store.getState().cryptoOrders}
        handleButtonClick={handleButtonClick}
      />
    </ThemeProvider>
  );

  it('should call the mock function when Edit button is clicked', () => {
    render(element);
    fireEvent.click(screen.getByRole('button', { name: 'Edit Order' }));
    expect(handleButtonClick).toHaveBeenCalledWith('clicked!');
  });

  it('should populate the correct order details', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecentOrdersTable
          cryptoOrders={store.getState().cryptoOrders}
          handleButtonClick={handleButtonClick}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('jan 27 2023')).toBeInTheDocument();
    expect(screen.getByText('VUVX709ET7BY')).toBeInTheDocument();
    expect(screen.getByText('*** 1111')).toBeInTheDocument();
    expect(screen.getByText('$56,787.00')).toBeInTheDocument();
  });
});
