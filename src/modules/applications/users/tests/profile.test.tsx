import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';

import ProfileCover from '../components/ProfileCover';
import Feed from '../components/Feed';
import MyCards from '../components/MyCards';
import Addresses from '../components/Addresses';
import { themeCreator } from 'src/core/theme/base';
import { ThemeProvider } from '@mui/material';

const initialState = {
  userDetails: {
    id: 'hjdghfj0',
    savedCards: 7,
    name: 'Catherine Pike',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'Web Developer',
    location: 'Barcelona, Spain',
    followers: '465'
  },
  recentActivity: {
    orders: {
      total: '485',
      failed: '8'
    }
  },
  followersFeed: [
    {
      name: 'Munroe Dacks',
      jobtitle: 'Senior Accountant',
      company: 'Trudoo',
      avatar: '/static/images/avatars/1.jpg'
    }
  ],
  popularTags: ['#HTML', '#software_development', '#TrendingInfuencers'],
  groups: [
    {
      logo: 'WD',
      title: 'Web Designers Lounge'
    }
  ],
  deliveryAddresses: {
    saved: '12',
    addressLine1: 'Kadin Westervelt',
    addressNumber: '714-650-6297',
    street: '348 W. Goldfield Street Bethel Park, PA 15102'
  },
  shippingAddress: {
    saved: '8',
    addressLine1: 'Kadin Westervelt',
    addressNumber: '714-650-6297',
    street: '10 E. Wrangler Avenue Sioux Falls, SD 57103'
  },
  cards: [
    {
      lastDigits: '6879',
      expires: '12/24',
      logo: '/static/images/placeholders/logo/visa.png',
      alt: 'Visa'
    }
  ]
};
const mockStore = configureMockStore();
let store;

describe('Test ProfileCover', () => {
  let theme = {};
  beforeEach(() => {
    theme = themeCreator('PureLightTheme');
  });

  it('should call the mock function when the Follow button is clicked', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ProfileCover
          user={store.getState().userDetails}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', { name: 'Follow' });
    fireEvent.click(buttonElement);

    expect(handleFollowBtn).toHaveBeenCalledWith('clicked!');
  });

  it('should call the mock function when the View Website button is clicked', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ProfileCover
          user={store.getState().userDetails}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', { name: 'View website' });
    fireEvent.click(buttonElement);

    expect(handleFollowBtn).toHaveBeenCalledWith('clicked!');
  });

  it('should call the mock function when the View  button is clicked', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ProfileCover
          user={store.getState().userDetails}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', {
      name: 'See all 465 connections'
    });
    fireEvent.click(buttonElement);

    expect(handleFollowBtn).toHaveBeenCalledWith('clicked!');
  });

  it('should call the mock function when the CHnage Cover button is clicked', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ProfileCover
          user={store.getState().userDetails}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );
    const buttonElement = screen.getByTestId('change-cover');
    fireEvent.click(buttonElement);

    expect(handleFollowBtn).toHaveBeenCalledWith('clicked!');
  });

  it('should call the mock function when the upload button is clicked', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ProfileCover
          user={store.getState().userDetails}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );
    const buttonElement = screen.getByTestId('upload-btn');
    fireEvent.click(buttonElement);

    expect(handleFollowBtn).toHaveBeenCalledWith('clicked!');
  });

  it('should populate the correct user name', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ProfileCover
          user={store.getState().userDetails}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Profile for Catherine Pike')).toBeInTheDocument();
    expect(
      screen.getByText('Web Developer | Barcelona, Spain | 465 followers')
    ).toBeInTheDocument();
    expect(screen.getByText('See all 465 connections')).toBeInTheDocument();
  });
});

describe('Test Feed Component', () => {
  let theme = {};
  beforeEach(() => {
    theme = themeCreator('PureLightTheme');
  });
  it('should call the mock function when the Follow button is clicked', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Feed
          feeds={store.getState().followersFeed}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', { name: 'Follow' });
    fireEvent.click(buttonElement);

    expect(handleFollowBtn).toHaveBeenCalledWith('clicked!');
  });

  it('Should populate the correct user name & designation', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Feed
          feeds={store.getState().followersFeed}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Trudoo')).toBeInTheDocument();
    expect(screen.getByText('Munroe Dacks')).toBeInTheDocument();
    expect(screen.getByText('Senior Accountant')).toBeInTheDocument();
  });

  // test('displays an avtar', () => {
  //   store = mockStore(initialState);
  //   const handleFollowBtn = jest.fn();
  //   render(
  //     <Feed feeds={store.getState().followersFeed} handleFollowBtn={handleFollowBtn}/>)
  //   const avtar = screen.getByAltText(/my avtar/i);

  //   expect(avtar).toHaveAttribute('src', '/path/to/my-image.jpg');
  // });
});

describe('Test MyCards Component', () => {
  let theme = {};
  beforeEach(() => {
    theme = themeCreator('PureLightTheme');
  });
  it('should call the mock function when the Follow button is clicked', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <MyCards
          cards={store.getState().cards}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', {
      name: 'Remove this card'
    });
    fireEvent.click(buttonElement);

    expect(handleFollowBtn).toHaveBeenCalledWith('clicked!');
  });

  it('Should populate the correct card details', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <MyCards
          cards={store.getState().cards}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('•••• 6879')).toBeInTheDocument();
    expect(screen.getByText('12/24')).toBeInTheDocument();
  });

  it('Should have correct value for primary radio button', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <MyCards
          cards={store.getState().cards}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    const primaryRadio = screen.getByLabelText('Primary');
  });
});

describe('Test Address Component', () => {
  let theme = {};
  beforeEach(() => {
    theme = themeCreator('PureLightTheme');
  });
  it('should call the mock function when the Manage button is clicked', () => {
    store = mockStore(initialState);
    const handleFollowBtn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Addresses
          deliveryAddresses={store.getState().deliveryAddresses}
          shippingAddress={store.getState().shippingAddress}
          handleFollowBtn={handleFollowBtn}
        />
      </ThemeProvider>
    );

    const buttonElement = screen.getAllByRole('button', { name: 'Manage' });
    fireEvent.click(buttonElement[0]);

    expect(handleFollowBtn).toHaveBeenCalledWith('clicked!');
  });
});
