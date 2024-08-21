import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDashboardUserDetailsAPI } from '../apis/DashboardApi';

const initialState = {
  userDetails: {},
  loadingUserData: false
};

export const getDashboardUserDetails = createAsyncThunk(
  'dashboard/getDashboardUserDetails',
  async () => {
    const response = await getDashboardUserDetailsAPI();
    console.log('current response action', response);
    return response.userData;
  }
);

export const groupSlice = createSlice({
  name: 'dashboard',
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
      .addCase(getDashboardUserDetails.pending, (state) => {
        state.loadingUserData = true;
      })
      .addCase(getDashboardUserDetails.fulfilled, (state: any, action) => {
        state.loadingUserData = false;

        if (action.payload) {
          console.log('action.payload', action.payload);

          state.userDetails = action.payload;
        }
      })
      .addCase(getDashboardUserDetails.rejected, (state) => {
        state.loadingUserData = false;
      });
  }
});

// export const { increment, decrement, incrementByAmount } = groupSlice.actions;
export default groupSlice.reducer;
