import { combineReducers } from '@reduxjs/toolkit';
import transactionReducer from 'src/modules/applications/Transactions/services/transaction.service';
import cryptoReducer from '../../modules/dashboards/services/dashboards.service';
import profileReducer from 'src/modules/applications/users/services/profile.service';
import dashboardProfileReducer from 'src/modules/dashboardComponent/services/dashboard.service';
import flowchartReducer from 'src/modules/flow-charts/services/flowChart.service';
import employeeReducer from 'src/modules/Employees/services/employee.service';
// import loginReducer from './loginReducer';
// import sidebarReducer from './sidebarReducer';
// import userGoalsReducer from './userGoalsReducer';

const combinedReducer = combineReducers({
  // login: loginReducer,
  // sidebar: sidebarReducer,
  // userGoals: userGoalsReducer,
  dashboardData: cryptoReducer,
  transactionData: transactionReducer,
  profileData: profileReducer,
  dashboardProfileData: dashboardProfileReducer,
  userData: transactionReducer,
  flowchartData: flowchartReducer,
  employeeData: employeeReducer
});
const rootReducer = (state: any, action: any) => {
  if (action.type === 'user/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
