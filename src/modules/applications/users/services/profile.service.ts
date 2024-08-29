import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserDetailsAPI } from '../apis/ProfileApi';

const initialState = {
  userDetails: {},
  recentActivity: {},
  followersFeed: [],
  popularTags: [],
  groups: [],
  deliveryAddresses: {},
  shippingAddress: {},
  cards: [],
  loadingUserData: false
};

export const getUserDetails = createAsyncThunk(
  'userData/getUserDetails',
  async () => {
    const response = await getUserDetailsAPI();
    return response;
  }
);

export const groupSlice = createSlice({
  name: 'userDatails',
  initialState,
  reducers: {
    increment: (state: any) => {
      state.value += 1;
    },
    decrement: (state: any) => {
      state.value -= 1;
    },
    incrementByAmount: (state: any, action: any) => {
      state.value += action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.loadingUserData = true;
      })
      .addCase(getUserDetails.fulfilled, (state: any, action) => {
        state.loadingUserData = false;

        if (action.payload) {
          state.userDetails = action.payload.userDetails;
          state.recentActivity = action.payload.recentActivity;
          state.followersFeed = action.payload.followersFeed;
          state.popularTags = action.payload.popularTags;
          state.groups = action.payload.groups;
          state.deliveryAddresses = action.payload.deliveryAddresses;
          state.shippingAddress = action.payload.shippingAddress;
          state.cards = action.payload.cards
        }
      })
      .addCase(getUserDetails.rejected, (state) => {
        state.loadingUserData = false;
      });
  }
});

// export const { increment, decrement, incrementByAmount } = groupSlice.actions;
export default groupSlice.reducer;
