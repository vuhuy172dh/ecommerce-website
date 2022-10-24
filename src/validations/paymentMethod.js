import * as yup from 'yup'

const PaymentMethodSchema = yup.object().shape({
  payment: yup.string().required(),
  cartNumber: yup.string().when('payment', {
    is: 'credit cart',
    then: yup.string().required()
  }),
  cartName: yup.string().when('payment', {
    is: 'credit cart',
    then: yup.string().required()
  }),
  expirationDate: yup.string().when('payment', {
    is: 'credit cart',
    then: yup.string().required()
  }),
  securityCode: yup.string().when('payment', {
    is: 'credit cart',
    then: yup.string().required()
  })
})

export default PaymentMethodSchema
