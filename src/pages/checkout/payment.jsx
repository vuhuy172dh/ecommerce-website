import PaymentForm from '../../components/payment/paymentForm'
import Button from '../../components/button'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../redux/features/stepper/stepperSlice'
import { useNavigate } from 'react-router-dom'
import {
  addPaymen,
  addProducts,
  addShipTo,
  addTotolPrice,
  addUser,
  createBill
} from '../../redux/features/bills/billSlice'
import { selectUserUid } from '../../redux/features/userSlice'
import { selectCartItems } from '../../redux/features/carts/cartSlice'
import { selectAddressDefault } from '../../redux/features/address/addressSlice'

function CheckoutPayment() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //call state
  const userUid = useSelector(selectUserUid)
  const addressDefault = useSelector(selectAddressDefault)
  const cartItems = useSelector(selectCartItems)
  const cartTotalPrice = +cartItems
    .reduce((a, b) => a + Number(b.cartItem.price) * b.number, 0)
    .toFixed(2)

  const onSubmit = (data) => {
    const payment = {
      name: data.payment,
      cartNumber: data.cartNumber,
      cartName: data.cartName,
      expirationDate: data.expirationDate,
      securityCode: data.securityCode
    }
    dispatch(addPaymen(payment))
    dispatch(addUser(userUid))
    dispatch(addShipTo(addressDefault))
    dispatch(addProducts(cartItems))
    dispatch(addTotolPrice(cartTotalPrice))

    dispatch(createBill())
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
