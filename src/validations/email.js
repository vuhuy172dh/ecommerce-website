import * as yup from 'yup'

const EmailSchema = yup.object().shape({
  email: yup.string().required('Email is required.')
})

export default EmailSchema
