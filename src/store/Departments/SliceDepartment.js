import { createSlice } from "@reduxjs/toolkit";
import {
  addNewDepartment,
  deleteDepartment,
  editDepartment,
  getDepartmentById,
  getDepartments
} from "./DepartmentsThunks";

export const sliceDepartment = createSlice({
  name: "departments",
  initialState: {
    departments: [],
    department: null,
    loading: false,
    error: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.departments = action.payload;
      })
      .addCase(getDepartmentById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.department = action.payload;
      })
      .addCase(addNewDepartment.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.department = action.payload;
      })
      .addCase(deleteDepartment.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(editDepartment.fulfilled, (state) => {
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

export default sliceDepartment.reducer;