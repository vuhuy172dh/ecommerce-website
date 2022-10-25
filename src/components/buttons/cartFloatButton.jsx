import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import useScrollPosition from '../../hooks/useScrollPosition'
import { ProductCartList } from '../products'
import Button from './button'
import { selectCartItems } from '../../redux/features/carts/cartSlice'
import { selectCurrentStep } from '../../redux/features/stepper/stepperSlice'

function CartFloatButton() {
  const scrollY = useScrollPosition()
  const [click, setClick] = useState(false)

  const cartItems = useSelector(selectCartItems)
  const currentStep = useSelector(selectCurrentStep)
  const navigate = useNavigate()

  const totalPrice = cartItems
    ?.reduce((a, b) => a + Number(b.cartItem.price) * b.number, 0)
    .toFixed(2)

  const cartItemFloatNumber = cartItems.length

  const handleClick = () => {
    setClick(!click)
  }

  const handleCartCheckout = () => {
    if (currentStep === 1) {
      navigate('/user/checkout/information')
    } else if (currentStep === 2) {
      navigate('/user/checkout/shipping')
    } else if (currentStep === 3) {
      navigate('/user/checkout/payment')
    }
  }

  return (
    <div>
      {/*this is cart float button*/}
      <div
        className={`fixed top-2 right-[calc(5%-20px)] w-10 h-10 bg-primary dark:bg-border_dark shadow-lg shadow-gray-600/40 justify-center items-center rounded-xl hidden tablet:flex ${
          scrollY === 0 ? '-translate-y-[calc(100%+1rem)]' : 'translate-y-0'
        } transition-all duration-300 cursor-pointer z-40`}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-white text-h5 dark:text-secondary"
        />
        <div className="text-light_grey bg-red-500 w-fit h-fit min-w-[20px] min-h-[20px] flex justify-center items-center text-body-sm font-bold rounded-full absolute top-0 right-0 -translate-y-1/4 translate-x-1/2">
          {cartItemFloatNumber}
        </div>
      </div>

      {/*this is a component that showed when the cart button is clicked*/}
      <AnimatePresence>
        {click && (
          <motion.div
            className="w-screen h-screen fixed top-0 z-[100] flex flex-col justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/*this is backdrop*/}
            <div
              className="w-full h-full absolute top-0 bg-white/20 dark:bg-black/20 backdrop-blur-md cursor-pointer"
              onClick={handleClick}
            ></div>

            {/*this is cart item*/}
            <motion.div
              className="w-full h-[85vh] pb-52 flex flex-col items-stretch bg-light_grey dark:bg-secondary rounded-xl border-t border-t-black dark:border-t-light_grey overflow-auto no-scrollbar relative"
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              exit={{ y: 400 }}
            >
              {/*this is product cart item list*/}
              <div className="w-full px-3">
                <ProductCartList
                  cartItems={cartItems}
                  handleCartFloatClick={handleClick}
                />
              </div>

              {/*this is total price and buttons*/}
              <div className="w-full p-6 fixed bottom-0 bg-light_grey dark:bg-secondary rounded-3xl border-t border-t-black dark:border-t-white flex flex-col tablet:items-center gap-2">
                <p className="text-h5 font-[600] text-primary dark:text-white text-start tablet:text-center w-full ">
                  TOTAL: {totalPrice}$ | {cartItems.length} items
                </p>
                <div className="w-full tablet:w-1/4 flex flex-col gap-2">
                  <Link to="/productCart">
                    <Button Color="primary" onClick={handleClick}>
                      YOUR BAG
                    </Button>
                  </Link>
                  {cartItemFloatNumber === 0 ? (
                    <Button Color="red" State="disable">
                      NO PRODUCTS
                    </Button>
                  ) : (
                    <Button Color="primary" onClick={handleCartCheckout}>
                      CHECK OUT
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CartFloatButton
