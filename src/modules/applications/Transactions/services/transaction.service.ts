// import { ConsoleLogger } from '@aws-amplify/core';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import { apiRequestWithAxiosInterceptor } from 'src/commonfunctions/apiRequest';
// import axiosCustom from '../../axiosInstance';
import { getTransactionDataAPI } from '../apis/TransactionsApi';

const initialState = {
  transactionData: [],
  loadingTransactionData: false
};

export const getTransactionData = createAsyncThunk(
  'transactionData/getTransactionData',
  async () => {
    const response = await getTransactionDataAPI();
    return response;
  }
);

const getTransactionListInsert = (transactionList) => {
  return [
    ...transactionList.map((entry) => {
      return {
        id: entry.id,
        orderDetails: entry.orderDetails,
        orderDate: entry.orderDate,
        status: entry.status,
        orderID: entry.orderID,
        sourceName: entry.sourceName,
        sourceDesc: entry.sourceDesc,
        amountCrypto: entry.amountCrypto,
        amount: entry.amount,
        cryptoCurrency: entry.cryptoCurrency,
        currency: entry.currency
      };
    })
  ];
};

export const groupSlice = createSlice({
  name: 'transactionData',
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
      .addCase(getTransactionData.pending, (state) => {
        state.loadingTransactionData = true;
      })
      .addCase(getTransactionData.fulfilled, (state: any, action) => {
        state.loadingTransactionData = false;
        if (action.payload) {
          let transactionData = action.payload.cryptoOrders;
          state.transactionData = [...transactionData];
          state.transactionData = getTransactionListInsert(transactionData);
        }
      })
      .addCase(getTransactionData.rejected, (state) => {
        state.loadingTransactionData = false;
      });
  }
});

// export const { increment, decrement, incrementByAmount } = groupSlice.actions;
export default groupSlice.reducer;
