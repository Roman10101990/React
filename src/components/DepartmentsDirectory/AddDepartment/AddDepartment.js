import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { CreateDepartmentSchema } from "../../../services/DepartmentValidationSchema";
import { AddDepartmentInitialValues } from "../../../services/InitialValuesDepartments";
import {addNewDepartment} from "../../../store/Departments/DepartmentsThunks";
import MyField from "./Field";

function AddDepartment() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const success = useSelector((state) => state.departments.success);

  useEffect(() => {
    if (success) {
      navigateTo("/departments", { replace: true });
    }
  }, [success]);

  return (
    <div>
      <Formik
        initialValues={AddDepartmentInitialValues}
        validationSchema={CreateDepartmentSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addNewDepartment(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyField name="name" />
            <MyField name="description" />
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

export default AddDepartment;