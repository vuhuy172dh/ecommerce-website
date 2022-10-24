import * as yup from 'yup'

export const changePasswordScheme = yup.object().shape({
  newPassword: yup.string().required('New password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null])
})
