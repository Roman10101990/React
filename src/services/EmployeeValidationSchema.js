import * as Yup from "yup";

export const CreateEmployeetSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  dateOfBirth: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  salary: Yup.string()
    .min(2, "Too Short!")
    .max(7, "Too Long!")
    .required("Required"),
});