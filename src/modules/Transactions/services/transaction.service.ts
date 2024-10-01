import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTransactionDataAPI } from '../apis/TransactionsApi';
import { UserData } from '../models';

interface TransactionState {
  transactionData: string[];
  userData: UserData;
  loadingTransactionData: boolean;
}
const initialState: TransactionState = {
  transactionData: [],
  userData: null,
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

export const transactionSlice = createSlice({
  name: 'transactionData',
  initialState,
  reducers: {
    /*To do - Modify below action as per requirnment */
    addTransaction: (state: any) => {
      state.value += 1;
    },
    deleteTransaction: (state: any) => {
      state.value -= 1;
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
          const transactionData = action.payload.cryptoOrders;
          const userData = action.payload.user;
          state.transactionData = [...transactionData];
          state.transactionData = getTransactionListInsert(transactionData);
          state.userData = userData;
        }
      })
      .addCase(getTransactionData.rejected, (state) => {
        state.loadingTransactionData = false;
      });
  }
});

export default transactionSlice.reducer;
