import { createSlice } from "@reduxjs/toolkit";
import {
  addNewEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee } from "./EmployeesThunks";

export const sliceEmployees = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    employee: null,
    loading: false,
    error: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.employees = action.payload;
      })
      .addCase(getEmployeeById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.employee = action.payload;
      })
      .addCase(addNewEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addDefaultCase((state) => state);
  },
});

export default sliceEmployees.reducer;