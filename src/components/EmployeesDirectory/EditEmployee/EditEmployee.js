import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CreateEmployeetSchema } from "../../../services/EmployeeValidationSchema";
import { deleteEmployee, getEmployeeById, updateEmployee } from "../../../store/Employees/EmployeesThunks";
import MyField from "./Field";

function EditEmployee() {
  const { id, employeeId } = useParams();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const employee = useSelector((state) => state.employees.employee);
  const loading = useSelector((state) => state.employees.loading);
  const success = useSelector((state) => state.employees.success);

  useEffect(() => {
    dispatch(getEmployeeById(employeeId));
  }, []);

  useEffect(() => {
    if (success) {
      navigateTo(`/departments/${id}/employees`, { replace: true });
    }
  }, [success]);

  return (
    !loading &&
     employee &&
    (
      <div>
        <Formik
          initialValues={{
            firstName: employee.firstName,
            lastName: employee.lastName,
            dateOfBirth: employee.dateOfBirth,
            email: employee.email,
            salary: employee.salary,
          }}
          validationSchema={CreateEmployeetSchema}
          onSubmit={(values, { setSubmitting }) => {
            const objEdit = {
              id: employeeId,
              val: values,
            };
            dispatch(updateEmployee(objEdit));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <MyField
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <MyField
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <MyField
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
              />
              <MyField
                type="email"
                name="email"
                placeholder="Email" />
              <MyField
                type="text"
                name="salary"
                placeholder="Salary" />
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
          onClick={() => {
            dispatch(deleteEmployee(employeeId));
          }}
          className="btn btn-primary m-4"
        >
          Delete
        </button>
      </div>
    )
  );
}

export default EditEmployee