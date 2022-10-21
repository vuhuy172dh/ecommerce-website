import * as yup from 'yup'

const phoneRegex = RegExp(/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/)

const UserInformationSchema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().required(),
  phone: yup
    .string()
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Phone should be required please'),
  gender: yup.string().required(),
  birth: yup.string().required()
})

export default UserInformationSchema
