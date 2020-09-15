import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .required("Please enter a password")
    .min(6, "Password must have at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Please confirm password")
    .oneOf([Yup.ref("password")], "Password & Confirm Password does not match"),
});
