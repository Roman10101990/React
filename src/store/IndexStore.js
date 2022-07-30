import { configureStore } from "@reduxjs/toolkit";
import sliceDepartment from "./Departments/SliceDepartment";
import sliceEmployees from "./Employees/SliceEmployees";

export const store = configureStore({
  reducer: {
    departments: sliceDepartment,
    employees: sliceEmployees,
  },
});