import * as yup from 'yup'

export const signupScheme = yup.object().shape({
  fullname: yup.string().required('Fullname should be required please.'),
  email: yup.string().required('Email is required.'),
  password: yup.string().min(8).max(16).required()
})
