import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import useScrollPosition from '../hooks/useScrollPosition'
import ProductCartList from './productCartList'
import Button from './button'

import img1 from '../assets/images/BlueChair.png'
import { Link } from 'react-router-dom'

const cartItems = [
  {
    id: 1,
    name: 'Graystone vase',
    detail: 'A time less ceramic vase with a tru color grey glaze.',
    price: 85,
    imgUrl: img1
  },
  {
    id: 2,
    name: 'Basic white vase',
    detail: 'Beautiful and simple this is one for the classics.',
    price: 125,
    imgUrl: img1
  },
  {
    id: 3,
    name: 'Graystone vase',
    detail: 'A time less ceramic vase with a tru color grey glaze.',
    price: 85,
    imgUrl: img1
  },
  {
    id: 4,
    name: 'Basic white vase',
    detail: 'Beautiful and simple this is one for the classics.',
    price: 125,
    imgUrl: img1
  }
]

function CartFloatButton() {
  const scrollY = useScrollPosition()
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  console.log(click)
  return (
    <div>
      {/*this is cart float button*/}
      <div
        className={`fixed top-2 right-[calc(5%-20px)] w-10 h-10 bg-primary dark:bg-border_dark shadow-lg shadow-gray-600/40 justify-center items-center rounded-full hidden tablet:flex ${
          scrollY === 0 ? '-translate-y-[calc(100%+1rem)]' : 'translate-y-0'
        } transition-all duration-300 cursor-pointer z-40`}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-white text-h5 dark:text-secondary"
        />
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
              className="w-full h-[85vh] pb-52 flex flex-col items-stretch bg-light_grey rounded-xl border-t border-t-black overflow-auto no-scrollbar relative"
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              exit={{ y: 400 }}
            >
              {/*this is product cart item list*/}
              <div className="w-full px-3">
                <ProductCartList cartItems={cartItems} />
              </div>

              {/*this is total price and buttons*/}
              <div className="w-full p-6 fixed bottom-0 bg-light_grey rounded-3xl border-t border-t-black flex flex-col tablet:items-center gap-2">
                <p className="text-h5 font-[600] text-primary text-start tablet:text-center w-full ">
                  TOTAL: 444$ | 4 items
                </p>
                <div className="w-full tablet:w-1/4 flex flex-col gap-2">
                  <Link to="/productCart">
                    <Button Color="primary" onClick={handleClick}>
                      YOUR BAG
                    </Button>
                  </Link>
                  <Link to="/checkout">
                    <Button Color="primary">CHECK OUT</Button>
                  </Link>
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
