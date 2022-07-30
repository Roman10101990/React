import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstanse } from "../../services/AxiosInstanse";

export const getDepartments = createAsyncThunk(
  "Departments/getDepartments",
  async function (_, thunkApi) {
    try {
      const response = await axiosInstanse.get("/departments");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const getDepartmentById = createAsyncThunk(
  "Departments/getDepartmentById",
  async function (id, thunkApi) {
    try {
      const response = await axiosInstanse.get(`/departments/${id}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const addNewDepartment = createAsyncThunk(
  "Departments/addNewDepartment",
  async function (newDepartment, thunkApi) {
    try {
      await axiosInstanse.post("/departments", newDepartment);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const deleteDepartment = createAsyncThunk(
  "Departments/deleteDepartment",
  async function (id, thunkApi) {
    try {
      await axiosInstanse.delete(`/departments/${id}`);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const editDepartment = createAsyncThunk(
  "Departments/EditDepartment",
  async function (obj, thunkApi) {
    try {
      await axiosInstanse.patch(`/departments/${obj.id}`, obj.val);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);