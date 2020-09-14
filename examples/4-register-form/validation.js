import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters "),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password & Confirm Password does not match"
  ),
});
