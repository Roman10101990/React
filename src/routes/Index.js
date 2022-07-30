import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Departments from "../components/DepartmentsDirectory/Departments/Departments";
import AddDepartment from "../components/DepartmentsDirectory/AddDepartment/AddDepartment";
import AddEmployee from "../components/EmployeesDirectory/AddEmployee/AddEmployee";
import DepartmentDetails from "../components/DepartmentsDirectory/DepartmentDetails/DepartmentDetails";
import EditDepartment from "../components/DepartmentsDirectory/EditDepartment/EditDepartment";
import Employees from "../components/EmployeesDirectory/Employees/Employees";
import EditEmployee from "../components/EmployeesDirectory/EditEmployee/EditEmployee";

function IndexRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/departments"
          element={<Departments />} />
        <Route
          path="/departments/add"
          element={<AddDepartment />} />
        <Route
          path="/departments/:id/details"
          element={<DepartmentDetails />}
        />
        <Route
          path="/departments/:id/edit"
          element={<EditDepartment />} />
        <Route
          path="/departments/:id/employees"
          element={<Employees />} />
        <Route
          path="/departments/:id/employees/add"
          element={<AddEmployee />}
        />
        <Route
          path="/departments/:id/employees/:employeeId/edit"
          element={<EditEmployee />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default IndexRoutes;