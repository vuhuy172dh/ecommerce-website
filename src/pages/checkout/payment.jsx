import PaymentForm from '../../components/payment/paymentForm'
import Button from '../../components/button'
import { useDispatch } from 'react-redux'
import { setStep } from '../../redux/features/stepper/stepperSlice'
import { useNavigate } from 'react-router-dom'
import { addPaymen } from '../../redux/features/bills/billSlice'

function CheckoutPayment() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const payment = {
      name: data.payment,
      cartNumber: data.cartNumber,
      cartName: data.cartName,
      expirationDate: data.expirationDate,
      securityCode: data.securityCode
    }
    dispatch(addPaymen(payment))
  }

  const backTo = () => {
    dispatch(setStep(2))
    navigate('/user/checkout/shipping')
  }
  return (
    <div className="w-full flex flex-col gap-7">
      {/*title*/}
      <div className="w-full flex flex-col text-light_grey">
        <p className="text-h4">Payment</p>
        <p className="text-body-md text-light_grey/50">
          All transactions are secure and encrypted
        </p>
      </div>

      {/*payment method radio form*/}
      <PaymentForm onSubmit={onSubmit} />

      {/*button*/}
      <div className="flex flex-col gap-3 tablet:flex-row">
        <Button Color="opaque" onClick={backTo}>
          Back to Shipping
        </Button>
        <Button Color="primary" Form="payment-form">
          Payment now
        </Button>
      </div>
    </div>
  )
}

export default CheckoutPayment
