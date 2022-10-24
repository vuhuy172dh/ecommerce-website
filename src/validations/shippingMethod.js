import * as yup from 'yup'

const ShippingMethodSchema = yup.object().shape({
  shipping: yup.string().required()
})

export default ShippingMethodSchema
