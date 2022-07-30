import * as Yup from "yup";

export const CreateDepartmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
});