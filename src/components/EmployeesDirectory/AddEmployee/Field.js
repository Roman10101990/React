import { ErrorMessage, Field } from "formik";

function MyField({ type, name, placeholder }) {
  return (
    <>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="m-4"
      />
      <ErrorMessage name={name} component="div" />
    </>
  );
}

export default MyField;