import * as Yup from 'yup';
const primaryValidator = 'Characters too long';

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('')
    .min(8, 'Email must be 8 or greater characters long')
    .max(20, primaryValidator)
    .required(''),
  password: Yup.string()
    .min(8, 'Password must be 8 or greater characters long')
    .max(30, primaryValidator),
});

export default signUpSchema;
