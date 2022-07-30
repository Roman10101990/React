import { ErrorMessage, Field } from "formik";

function MyField({ type, name }) {
  return (
    <>
      <Field type={type} name={name} className="m-4" />
      <ErrorMessage name={name} component="div" />
    </>
  );
}

export default MyField;