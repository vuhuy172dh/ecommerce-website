import * as yup from 'yup'

export const signinScheme = yup.object().shape({
  email: yup.string().required('Email is required.'),
  password: yup.string().min(8).max(16).required()
})
