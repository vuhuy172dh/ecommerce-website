import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { ShippingList } from '../../components/shipping'
import { Button } from '../../components/buttons'
import { setStep } from '../../redux/features/stepper/stepperSlice'
import { addShippingMethod } from '../../redux/features/bills/billSlice'

const shipping = [
  {
    name: 'Fast',
    price: 5
  },
  {
    name: 'Standard Shipping',
    price: 0
  }
]

function CheckoutShipping() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const backTo = () => {
    dispatch(setStep(1))
    navigate('/user/checkout/information')
  }

  const onSubmit = (data) => {
    //add shipping method to bill information
    dispatch(addShippingMethod(JSON.parse(data.shipping)))
    dispatch(setStep(3))
    navigate('/user/checkout/payment')
  }
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="text-h4 text-light_grey">Shipping method</p>
      <ShippingList shippingList={shipping} onSubmit={onSubmit} />

      {/*button to set current step and check email validation*/}
      <div className="flex flex-col-reverse gap-3 tablet:flex-row">
        <div>
          <Button Color="opaque" onClick={backTo}>
            Back to Cart
          </Button>
        </div>
        <Button Color="primary" Form="shipping-radio-form">
          Continue to Shipping
        </Button>
      </div>
    </div>
  )
}

export default CheckoutShipping
