export default function login_validate(values) {
  console.log(values);

  const errors = {};

  // validation for email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater than 8 and less than 20 characters';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password';
  }
  return errors;
}

export function register_validate(values) {
  console.log(values);

  const errors = {};

  // validation for username
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.includes(' ')) {
    errors.username = 'Invalid Username, no space';
  }

  // validation for email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater than 8 and less than 20 characters';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password';
  }

  // validation for cpassword
  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.password !== values.cpassword) {
    errors.cpassword = 'Password not match';
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = 'Invalid password';
  }

  return errors;
}
