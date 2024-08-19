import { combineReducers } from '@reduxjs/toolkit';
import transactionReducer from 'src/modules/Transactions/services/transaction.service';
// import loginReducer from './loginReducer';
// import sidebarReducer from './sidebarReducer';
// import userGoalsReducer from './userGoalsReducer';

const combinedReducer = combineReducers({
  // login: loginReducer,
  // sidebar: sidebarReducer,
  // userGoals: userGoalsReducer,
  transactionData: transactionReducer,
  userData: transactionReducer
});
const rootReducer = (state: any, action: any) => {
  if (action.type === 'user/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
