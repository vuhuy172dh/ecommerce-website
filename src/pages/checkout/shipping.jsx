import ShippingList from '../../components/shipping/shippingList'
import Button from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setStep } from '../../redux/features/stepper/stepperSlice'

const shipping = [
  {
    name: 'Fast',
    price: 5
  },
  {
    name: 'Standard Shipping',
    price: 'free'
  }
]

function CheckoutShipping() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const backTo = () => {
    dispatch(setStep(1))
    navigate('/user/checkout/information')
  }
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="text-h4 text-light_grey">Shipping method</p>
      <ShippingList shippingList={shipping} />

      {/*button to set current step and check email validation*/}
      <div className="flex flex-col-reverse gap-3 tablet:flex-row">
        <div>
          <Button Color="opaque" onClick={backTo}>
            Back to Cart
          </Button>
        </div>
        <Button Color="primary">Continue to Shipping</Button>
      </div>
    </div>
  )
}

export default CheckoutShipping
