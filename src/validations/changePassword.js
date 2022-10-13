import * as yup from 'yup'

export const changePasswordScheme = yup.object().shape({
  currentPassword: yup.string().required('Current password is required.'),
  newPassword: yup.string().required('New password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null])
})
