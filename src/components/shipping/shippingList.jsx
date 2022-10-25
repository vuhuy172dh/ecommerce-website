import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import ShippingItem from './shippingItem'
import ShippingMethodSchema from '../../validations/shippingMethod'

function ShippingList({ shippingList, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(ShippingMethodSchema) })

  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={handleSubmit((data) => onSubmit(data))}
      id="shipping-radio-form"
    >
      {shippingList.map((item, index) => (
        <ShippingItem key={index} shippingMethod={item} register={register} />
      ))}
      <p className="text-red-500">{errors.shipping?.message}</p>
    </form>
  )
}

export default ShippingList
