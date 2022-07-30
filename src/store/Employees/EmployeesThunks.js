import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstanse} from "../../services/AxiosInstanse";

export const getEmployees = createAsyncThunk(
  "Employees/getEmployees",
  async function (id, thunkApi) {
    try {
      const employees = await axiosInstanse.get(
        `/employees?idDepartment=${+id}`
      );
      return employees.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const getEmployeeById = createAsyncThunk(
  "Employees/getEmployeeById",
  async function (idEmployee, thunkApi) {
    try {
      const employee = await axiosInstanse.get(
        `/employees?id=${+idEmployee}`
      );
      return employee.data[0];
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const addNewEmployee = createAsyncThunk(
  "Employees/addNewEmployee",
  async function (newEmployee, thunkApi) {
    try {
      await axiosInstanse.post("/employees", newEmployee);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const updateEmployee = createAsyncThunk(
  "Employees/updateEmployee",
  async function (obj, thunkApi) {
    try {
      await axiosInstanse.patch(`/employees/${obj.id}`, obj.val);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const deleteEmployee = createAsyncThunk(
  "Employees/deleteEmployee",
  async function (id, thunkApi) {
    try {
      await axiosInstanse.delete(`/employees/${id}`);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);