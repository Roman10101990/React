import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { CreateEmployeetSchema } from "../../../services/EmployeeValidationSchema";
import { useEffect } from "react";
import { AddEmployeeInitialValues } from "../../../services/InitialValuesEmployees";
import { addNewEmployee } from "../../../store/Employees/EmployeesThunks";
import MyField from "./Field";

function AddEmployee() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const success = useSelector((state) => state.employees.success);

  useEffect(() => {
    if (success) {
      navigateTo(`/departments/${id}/employees`, { replace: true });
    }
  }, [success]);

  return (
    <div>
      <Formik
        initialValues={{
          idDepartment: +id,
          ...AddEmployeeInitialValues,
        }}
        validationSchema={CreateEmployeetSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addNewEmployee(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyField
              type="text"
              name="firstName"
              placeholder="First Name" />
            <MyField
              type="text"
              name="lastName"
              placeholder="Last Name" />
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
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddEmployee;