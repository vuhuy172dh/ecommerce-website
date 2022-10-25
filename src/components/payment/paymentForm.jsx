import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import PaymentMethodSchema from '../../validations/paymentMethod'
import { Controller, RadioInput, Input } from '../fields'

function PaymentForm({ onSubmit }) {
  const [click, setClick] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    defaultValues: {
      payment: '',
      cartNumber: '',
      cartName: '',
      expirationDate: '',
      securityCode: ''
    },
    resolver: yupResolver(PaymentMethodSchema)
  })

  const handleChange = (e) => {
    if (e.currentTarget.value === 'credit cart') {
      setClick(true)
      return
    }
    setClick(false)
  }
  return (
    <form
      id="payment-form"
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <label className="flex w-full py-3 px-2 items-center justify-between border border-light_grey/20 text-light_grey rounded-xl">
        <div className="flex items-center gap-2">
          <Controller
            {...{
              control,
              register,
              name: 'payment',
              type: 'radio',
              radioValue: 'Payment on delivery',
              handleChange: (e) => handleChange(e),
              render: (props) => <RadioInput {...props} />
            }}
          />
          <p>Payment on delivery</p>
        </div>
      </label>

      <label className="flex w-full py-3 px-2 items-center justify-between border border-light_grey/20 text-light_grey rounded-xl">
        <div className="flex items-center gap-2">
          <Controller
            {...{
              control,
              register,
              name: 'payment',
              type: 'radio',
              radioValue: 'credit cart',
              handleChange: (e) => handleChange(e),
              render: (props) => <RadioInput {...props} />
            }}
          />
          <p>Credit card</p>
        </div>
      </label>

      {/*credit cart information*/}
      <div className={`w-full ${click ? 'flex' : 'hidden'} flex-col gap-6`}>
        {/*cart number*/}
        <div>
          <Controller
            {...{
              control,
              register,
              name: 'cartNumber',
              type: 'text',
              placeholder: 'Cart number',
              handleChange: () => {},
              className:
                'w-full h-9 bg-light_grey/30 px-2 border border-light_grey/20 text-light_grey rounded-lg outline-none',
              render: (props) => <Input {...props} />
            }}
          />
          <p className="text-red-500">{errors.cartNumber?.message}</p>
        </div>

        {/*cart name*/}
        <div>
          <Controller
            {...{
              control,
              register,
              name: 'cartName',
              type: 'text',
              placeholder: 'Name on cart',
              handleChange: () => {},
              className:
                'w-full h-9 bg-light_grey/30 px-2 border border-light_grey/20 text-light_grey rounded-lg outline-none',
              render: (props) => <Input {...props} />
            }}
          />
          <p className="text-red-500">{errors.cartName?.message}</p>
        </div>

        {/*expiration day and security*/}
        <div className="flex w-full gap-5">
          <div className="flex-1">
            <Controller
              {...{
                control,
                register,
                name: 'expirationDate',
                type: 'text',
                placeholder: 'Expiration date (MM / YY)',
                handleChange: () => {},
                className:
                  'w-full h-9 bg-light_grey/30 px-2 border border-light_grey/20 text-light_grey rounded-lg outline-none',
                render: (props) => <Input {...props} />
              }}
            />
            <p className="text-red-500">{errors.expirationDate?.message}</p>
          </div>

          <div className="flex-1">
            <Controller
              {...{
                control,
                register,
                name: 'securityCode',
                type: 'text',
                placeholder: 'Security code',
                handleChange: () => {},
                className:
                  'w-full h-9 bg-light_grey/30 px-2 border border-light_grey/20 text-light_grey rounded-lg outline-none',
                render: (props) => <Input {...props} />
              }}
            />
            <p className="text-red-500">{errors.securityCode?.message}</p>
          </div>
        </div>
      </div>
      <p className="text-red-500">{errors.payment?.message}</p>
    </form>
  )
}

export default PaymentForm
