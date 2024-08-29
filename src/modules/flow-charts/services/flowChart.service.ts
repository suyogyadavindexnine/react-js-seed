import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getEmployeeFlowchartDataAPI,
  getFlowchartDataAPI,
  getDepartments
} from '../apis/flowchartApis';

const initialState = {
  node: [],
  edges: [],
  nodeData: {},
  departmentNodes: [],
  departmentEdges: [],
  employeeNodes: [],
  employeeData: [],
  loadingFlowchartData: false
};

export const getFlowchartDetails = createAsyncThunk(
  'getFlowchartDetails/flowchartDatails',
  async () => {
    const response = await getFlowchartDataAPI();
    return response;
  }
);

export const getDepartmentsList = createAsyncThunk(
  'getDepartmentsList/flowchartDatails',
  async () => {
    const response = await getDepartments();
    return response;
  }
);

export const getEmployeeFlowchartDetails = createAsyncThunk(
  'getEmployeeFlowchartDetails/flowchartDatails',
  async (departmentKey: string) => {
    const response = await getEmployeeFlowchartDataAPI(departmentKey);
    return response;
  }
);

export const groupSlice = createSlice({
  name: 'flowchartData',
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
    },
    setNodeData: (state, action: any) => {
      state.nodeData = action.payload;
    },
    setEmployeeData: (state, action: any) => {
      state.employeeData = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFlowchartDetails.pending, (state) => {
        state.loadingFlowchartData = true;
      })
      .addCase(getFlowchartDetails.fulfilled, (state: any, action) => {
        state.loadingFlowchartData = false;
        if (action.payload) {
          state.node = action.payload.node;
          state.edges = action.payload.edges;
        }
      })
      .addCase(getFlowchartDetails.rejected, (state) => {
        state.loadingFlowchartData = false;
      })
      .addCase(getDepartmentsList.pending, (state) => {
        state.loadingFlowchartData = true;
      })
      .addCase(getDepartmentsList.fulfilled, (state: any, action) => {
        state.loadingFlowchartData = false;
        if (action.payload) {
          state.departmentNodes = action.payload.nodes;
          state.departmentEdges = action.payload.edges;
        }
      })
      .addCase(getDepartmentsList.rejected, (state) => {
        state.loadingFlowchartData = false;
      })
      .addCase(getEmployeeFlowchartDetails.pending, (state) => {
        state.loadingFlowchartData = true;
      })
      .addCase(getEmployeeFlowchartDetails.fulfilled, (state: any, action) => {
        state.loadingFlowchartData = false;
        if (action.payload) {
          state.employeeNodes = action.payload.nodes;
        }
      })
      .addCase(getEmployeeFlowchartDetails.rejected, (state) => {
        state.loadingFlowchartData = false;
      });
  }
});

export const { setNodeData, setEmployeeData } = groupSlice.actions;
export default groupSlice.reducer;
