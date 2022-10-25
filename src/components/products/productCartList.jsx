/*
Name: ProductCartList
Discription: A list of product cart items
Properties: 
  - cartItems: array of product item objects
*/

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Counter } from '../others'
import { ButtonIcon } from '../buttons'
import {
  removeFromCart,
  removeFromUserFirebase
} from '../../redux/features/carts/cartSlice'
import { selectUserUid } from '../../redux/features/userSlice'

const ProductCartList = ({ cartItems, handleCartFloatClick = () => {} }) => {
  const dispatch = useDispatch()
  const userUid = useSelector(selectUserUid)
  const navigate = useNavigate()

  //handle remove from cart
  const handleRemoveFromCart = (product) => {
    if (userUid) {
      dispatch(removeFromUserFirebase(userUid, product))
    } else {
      dispatch(removeFromCart(product.cartItem.uuid))
    }
  }

  return (
    <div className="w-full">
      <AnimatePresence>
        {cartItems.map((cart) => (
          <motion.div
            key={cart.cartItem.uuid}
            className="flex py-4 laptop:w-[100%] laptop:justify-between cursor-pointer"
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/*Product Cart Item */}
            <div className="laptop:w-[45%] flex">
              <div
                className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] "
                onClick={() => {
                  navigate(`/product/${cart.cartItem.uuid}`)
                  handleCartFloatClick()
                }}
              >
                {/*Image product */}
                <img
                  src={cart.cartItem.arrImg[0]}
                  alt={cart.cartItem.name}
                  className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] max-w-none"
                />
              </div>
              {/*Name , detail, price product */}
              <div className="ml-5 laptop:ml-3 p-1 flex flex-col laptop:w-[100%] laptop:flex-row">
                <div className="flex-1">
                  <p className="text-[16px] laptop:text-[20px]">
                    {cart.cartItem.name}
                  </p>
                  <p className="text-[14px] line-clamp-3">
                    {cart.cartItem.description}
                  </p>
                  <p className="text-[16px]">${cart.cartItem.price}</p>
                </div>
                {/* counter */}
                <div className="w-fit laptop:hidden flex gap-2">
                  <Counter
                    maxNumber={cart.cartItem.remain}
                    currentNumber={cart.number}
                    userUid={userUid ? userUid : null}
                    cart={cart}
                  />
                  <ButtonIcon
                    Icon="trash"
                    Color="red"
                    onClick={() => handleRemoveFromCart(cart)}
                  />
                </div>
              </div>
            </div>
            <div className="hidden laptop:flex gap-2 items-center">
              {/* counter */}
              <Counter
                maxNumber={cart.cartItem.remain}
                currentNumber={cart.number}
                userUid={userUid ? userUid : null}
                cart={cart}
              />
              <div className="w-fit h-fit flex">
                <ButtonIcon
                  Icon="trash"
                  Color="red"
                  onClick={() => handleRemoveFromCart(cart)}
                />
              </div>
            </div>
            <div className="hidden laptop:flex items-center">
              <p>${(Number(cart.cartItem.price) * cart.number).toFixed(2)}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ProductCartList
