import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ProductCartList } from '../../components/products'
import { Button } from '../../components/buttons'
import { selectCartItems } from '../../redux/features/carts/cartSlice'
import { selectCurrentStep } from '../../redux/features/stepper/stepperSlice'

function ProductCartPage() {
  //call cart state
  const cartItems = useSelector(selectCartItems)
  const currentStep = useSelector(selectCurrentStep)

  const cartTotalPrice = cartItems
    .reduce((a, b) => a + Number(b.cartItem.price) * b.number, 0)
    .toFixed(2)

  return (
    <div className="w-[100%] mb-12 p-6 laptop:px-[180px] laptop:py-16">
      {/*Helmet async*/}
      <Helmet>
        <title>Cart</title>
      </Helmet>

      {/*Product Cart*/}
      {Array.isArray(cartItems) && cartItems.length !== 0 ? (
        <div>
          <div className="border-b-2 border-primary-300">
            <p className="text-[24px] laptop:text-[36px]">Your shopping cart</p>
            <div className="hidden laptop:flex py-3 justify-between border-b-2 border-primary-300">
              <p className="w-[45%]">Product</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {/*Product Cart List*/}
            <ProductCartList cartItems={cartItems} />
          </div>
          <div className="flex flex-row-reverse my-4">
            <p className="text-[20px] text-primary dark:text-light_grey">
              Subtotal &emsp;{' '}
              <span className="text-[24px]">${cartTotalPrice}</span>
            </p>
          </div>
          <div className="flex flex-row-reverse">
            <p className="text-primary text-[14px] dark:text-light_grey">
              Taxes and shipping are calculated at checkout
            </p>
          </div>
          <Link
            to={`${
              currentStep === 1
                ? '/user/checkout/information'
                : currentStep === 2
                ? '/user/checkout/shipping'
                : '/user/checkout/payment'
            }`}
          >
            <div className="w-[100%] flex mt-5 laptop:w-[172px] laptop:float-right">
              <Button Color="primary" children="Go to checkout" />
            </div>
          </Link>
        </div>
      ) : (
        <div>No Item</div>
      )}
    </div>
  )
}

export default ProductCartPage
