import * as yup from 'yup'

const phoneRegex = RegExp(/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/)

export const PopupAddressSchema = yup.object().shape({
  fullname: yup.string().required('Name should be required please'),
  phone: yup
    .string()
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Phone should be required please'),
  province: yup.string().required('Province is required'),
  district: yup.string().required('District is required'),
  ward: yup.string().required('Ward  is required'),
  address: yup.string().required('Address should be required please.')
})
