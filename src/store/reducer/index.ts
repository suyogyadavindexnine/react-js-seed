import { combineReducers } from "@reduxjs/toolkit";
import transactionReducer from "src/modules/Transactions/services/transaction.service";
import userReducer from "./userReducer";

const combinedReducer = combineReducers({
  transactionData: transactionReducer,
  userData: userReducer,
});
const rootReducer = (state: any, action: any) => {
  if (action.type === "user/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
