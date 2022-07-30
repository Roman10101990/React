import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { CreateDepartmentSchema } from "../../../services/DepartmentValidationSchema";
import { getEmployees } from "../../../store/Employees/EmployeesThunks";
import { deleteDepartment, editDepartment, getDepartmentById } from "../../../store/Departments/DepartmentsThunks";
import Select from "./SelectHead";
import MyField from "../AddDepartment/Field";

function EditDepartments() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const department = useSelector((state) => state.departments.department);
  const loading = useSelector((state) => state.departments.loading);
  const employees = useSelector((state) => state.employees.employees);
  const success = useSelector((state) => state.departments.success);
  const arrayNamesEmployee = [];

  if (employees.length) {
    for (let i = 0; i < employees.length; i++) {
      const text = employees[i].firstName + " " + employees[i].lastName;
      arrayNamesEmployee.push(text);
    }
  }

  useEffect(() => {
    dispatch(getEmployees(id));
    dispatch(getDepartmentById(id));
  }, []);

  useEffect(() => {
    if (success) {
      navigate(`/departments`, { replace: true });
    }
  }, [success]);

  return !loading && department ? (
    <>
      <Formik
        initialValues={{
          name: department.name,
          description: department.description,
          headOfDepartment: department.headOfDepartment,
        }}
        validationSchema={CreateDepartmentSchema}
        onSubmit={(values, { setSubmitting }) => {
          const objEdit = {
            id: id,
            val: values,
          };
          dispatch(editDepartment(objEdit));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyField name="name" />
            <MyField name="description" />
            <Select
              name="headOfDepartment"
              data={arrayNamesEmployee}/>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary m-4"
            >
              Edit
            </button>
          </Form>
        )}
      </Formik>

      <button
        className="btn btn-primary m-4"
        onClick={() => {
          dispatch(deleteDepartment(id))
        }}
      >
        Delete
      </button>
    </>
  ) : null;
}

export default EditDepartments;