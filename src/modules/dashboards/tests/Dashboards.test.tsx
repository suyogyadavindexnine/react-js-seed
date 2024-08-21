import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';

import AccountBalance from '../components/AccountBalance';
import Wallets from '../components/Wallets';
import WatchList from '../components/WatchList';
import { ThemeProvider } from '@mui/material';

import { themeCreator } from 'src/core/theme/base';
import { I18nextProvider } from 'react-i18next';
import i18n from './../../../i18n/i18n';
import Chart from 'react-apexcharts';
import WatchListColumn from './../components/WatchListColumn';

// const theme = useTheme();

const initialState = {
  accountDetails: {
    acBalance: '54,584.23',
    currencyValue: '1.0045983485234',
    currencyUnit: 'BTC',
    currentValue: '3,594.00',
    chartSeries: [20, 10, 40, 30],
    currency: [
      {
        unit: 'BTC',
        currency: 'Bitcoin',
        currencyLogo: '/static/images/placeholders/logo/bitcoin.png',
        marketShare: 20,
        valueRate: '+2.54'
      }
    ]
  },
  walletDetails: [
    {
      currency: 'Bitcoin',
      currencyLogo: '/static/images/placeholders/logo/bitcoin.png',
      unit: 'BTC',
      usdBalance: '3,586.22',
      currencyBalance: '1.25843'
    }
  ],
  accountSecurity: {
    authStatus: 'Disabled',
    phoneStatus: 'Active',
    emailStatus: 'Not completed'
  },
  watchList: [
    {
      currencyLogo: '/static/images/placeholders/logo/bitcoin.png',
      currency: 'Bitcoin',
      unit: 'BTC',
      toUsd: '56,475.99',
      valueRate: '+12.5',
      dailyRate: '500',
      chartData: [
        {
          name: 'Bitcoin',
          data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]
        }
      ]
    }
  ]
};

const mockStore = configureMockStore();
let store;

describe('Test Wallets Component', () => {
  store = mockStore(initialState);
  const handleButtonClick = jest.fn();
  let theme = {};
  beforeEach(() => {
    theme = themeCreator('PureLightTheme');
  });

  it('Should populate the correct wallet details', () => {
    render(
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <Wallets
            walletDetails={store.getState().walletDetails}
            handleButtonClick={handleButtonClick}
          />
        </I18nextProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('$3,586.22')).toBeInTheDocument();
    expect(screen.getByText('1.25843 BTC')).toBeInTheDocument();

    // it('should call the mock function when Edit button is clicked', () => {
    //   render(
    //     <ThemeProvider theme={theme}>
    //       <I18nextProvider i18n={i18n}>
    //         <Wallets
    //           walletDetails={store.getState().walletDetails}
    //           handleButtonClick={handleButtonClick}
    //         />
    //       </I18nextProvider>
    //     </ThemeProvider>
    //   );

    //   fireEvent.click(
    //     screen.getByRole('button', { name: 'dashboard.wallets.add_new_wallet' })
    //   );
    //   expect(handleButtonClick).toHaveBeenCalledWith('clicked!');
    // });
  });
});

// describe('Test Watch list Component', () => {
//   store = mockStore(initialState);
//   let theme = {};
//   beforeEach(() => {
//     theme = themeCreator('PureLightTheme');
//   });

//   it('Should populate the correct wallet details', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <I18nextProvider i18n={i18n}>
//           <WatchListColumn watchListDetails={''} />
//         </I18nextProvider>
//       </ThemeProvider>
//     );

//     // expect(screen.getByText('Bitcoin')).toBeInTheDocument();
//     // expect(screen.getByText('BTC')).toBeInTheDocument();
//     // expect(screen.getByText('$56,475.99')).toBeInTheDocument();
//     // expect(screen.getByText('+$500')).toBeInTheDocument();
//     // expect(screen.getByText('+12.5')).toBeInTheDocument();
//   });
// });
