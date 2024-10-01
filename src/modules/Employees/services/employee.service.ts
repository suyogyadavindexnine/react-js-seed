import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEmployeeDataAPI } from '../apis/EmployeesApi';

interface EmployeeState {
  employeeData: string[];
  loadingEmployeeData: boolean;
}
const initialState: EmployeeState = {
  employeeData: [],
  loadingEmployeeData: false
};

export const getEmployeeData = createAsyncThunk(
  'employeeData/getEmployeeData',
  async () => {
    const response = await getEmployeeDataAPI();
    return response;
  }
);

const getEmployeeListInsert = (employeeList) => {
  return [
    ...employeeList.map((entry) => {
      return {
        id: entry.id,
        name: entry.name,
        designation: entry.designation,
        date_of_join: entry.date_of_join,
        date_of_birt: entry.date_of_birt,
        address: entry.address
      };
    })
  ];
};

export const employeeSlice = createSlice({
  name: 'employeeData',
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
      .addCase(getEmployeeData.pending, (state) => {
        state.loadingEmployeeData = true;
      })
      .addCase(getEmployeeData.fulfilled, (state: any, action) => {
        state.loadingEmployeeData = false;
        if (action.payload) {
          const employeeData = action.payload.employeeDetails;
          state.employeeData = [...employeeData];
          state.employeeData = getEmployeeListInsert(employeeData);
        }
      })
      .addCase(getEmployeeData.rejected, (state) => {
        state.loadingEmployeeData = false;
      });
  }
});

export default employeeSlice.reducer;
