import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Background from '../../assets/images/background.jpg'
import { Stepper } from '../../components/others'
import {
  ProductCheckoutList,
  ProductCheckoutListButton
} from '../../components/products'
import { selectCartItems } from '../../redux/features/carts/cartSlice'
import { selectShippingMethod } from '../../redux/features/bills/billSlice'

function Checkout() {
  const cartItems = useSelector(selectCartItems)
  const shippingMethod = useSelector(selectShippingMethod)

  const cartSubtotalPrice = +cartItems
    .reduce((a, b) => a + Number(b.cartItem.price) * b.number, 0)
    .toFixed(2)

  const cartTotalPrice = cartSubtotalPrice + (shippingMethod?.price || 0)

  return (
    <div className="w-screen h-screen relative">
      {/*helmet async*/}
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      {/*background and backdrop*/}
      <section className="w-full h-full fixed top-0 z-10">
        {/*background*/}
        <img
          src={Background}
          alt="background"
          className="w-full h-full object-cover"
        />

        {/*backdrop*/}
        <div className="w-full h-full bg-black/70 backdrop-blur-lg absolute top-0 left-0 z-20"></div>
      </section>

      {/*content*/}
      <section className="w-full flex relative z-30 justify-center items-start laptop:pt-8 pb-16">
        {/*check out*/}
        <section className="flex-[1.3] w-full flex justify-center laptop:pr-8 laptop:justify-end">
          <div className="flex-1 max-w-[600px] px-4">
            {/*logo*/}
            <Link to="/">
              <div className="w-full py-4 border-b border-b-border_dark/20">
                <p className="text-h2 text-light_grey font-[600]">AVION</p>
              </div>
            </Link>

            {/*total price and products listing*/}
            <div className="w-full py-4 border-b border-b-border_dark/20 flex justify-between items-start">
              {/*products list button for mobile*/}
              <div className="laptop:hidden flex-1 w-full">
                <ProductCheckoutListButton products={cartItems} />
              </div>

              {/*total price*/}
              <p className="text-h4 flex-1 font-[500] text-light_grey text-end">
                ${cartTotalPrice}
              </p>
            </div>

            {/*stepper*/}
            <div className="w-full py-4">
              <Stepper />
            </div>
          </div>
        </section>

        {/*product info*/}
        <section className="flex-1 w-full hidden laptop:flex pl-10 border-l border-l-light_grey/30">
          <div className="max-w-[450px] w-full">
            {/*product list*/}
            <ProductCheckoutList productList={cartItems} />

            {/*divider*/}
            <hr className="w-full border-t border-t-light_grey/40 my-4" />

            {/*price*/}
            <div className="w-full flex flex-col gap-4">
              {/*subtotal*/}
              <div className="w-full flex justify-between text-light_grey">
                <p className="text-h4">Subtotal</p>
                <p className="font-[500]">${cartSubtotalPrice}</p>
              </div>

              {/*shipping*/}
              <div className="w-full flex justify-between text-light_grey">
                <p className="text-h6">Shipping</p>
                <p className="text-h6">${shippingMethod?.price}</p>
              </div>

              {/*divider*/}
              <hr className="w-full border-t border-t-light_grey/30" />

              {/*total*/}
              <div className="w-full flex justify-between text-light_grey">
                <p className="text-h3 font-[600]">Total</p>
                <p className="text-h3 font-[600]">${cartTotalPrice}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Checkout
