import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import RecentOrdersTable from '../components/RecentOrdersTable';
import { themeCreator } from 'src/core/theme/base';
import { ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/i18n/i18n';

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

  const renderWithTransaction = (component) => {
    return render(
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </ThemeProvider>
    );
  };

  it('should populate the correct order details', () => {
    renderWithTransaction(
      <RecentOrdersTable
        cryptoOrders={store.getState().cryptoOrders}
        handleButtonClick={handleButtonClick}
      />
    );

    expect(screen.getByText('jan 27 2023')).toBeInTheDocument();
    expect(screen.getByText('VUVX709ET7BY')).toBeInTheDocument();
  });
});
