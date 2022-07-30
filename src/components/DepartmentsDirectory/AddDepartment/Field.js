import { ErrorMessage, Field } from "formik";

function MyField({ name }) {
    return (
        <>
            <Field type="text" name={name} placeholder={name} className="m-4" />
            <ErrorMessage name={name} component="div" />
        </>
    )
}

export default MyField