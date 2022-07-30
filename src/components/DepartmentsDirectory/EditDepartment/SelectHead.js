import { ErrorMessage, Field } from "formik";

function Select({ name, data }) {
  return (
    <>
      <Field type="select" name={name} as="select" className="m-4 my-select">
        <option value="">Select</option>
        {data.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </Field>

      <ErrorMessage name={name} component="div" />
    </>
  );
}

export default Select;