/*
Name: ProductCartList
Discription: A list of product cart items
Properties: 
  - cartItems: array of product item objects
*/

import React from 'react'
import Counter from './counter'
import ButtonIcon from './buttonIcon'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeFromCart,
  removeFromUserFirebase
} from '../redux/features/carts/cartSlice'
import { selectUserUid } from '../redux/features/userSlice'

const ProductCartList = ({ cartItems }) => {
  const dispatch = useDispatch()
  const userUid = useSelector(selectUserUid)

  //handle remove from cart
  const handleRemoveFromCart = (product) => {
    if (userUid) {
      dispatch(removeFromUserFirebase(userUid, product.uid))
      return
    }
    dispatch(removeFromCart(product.cartItem))
  }

  return cartItems.map((cart) => (
    <div
      key={cart.cartItem.uuid}
      className="flex py-4 laptop:w-[100%] laptop:justify-between"
    >
      {/*Product Cart Item */}
      <div className="laptop:w-[45%] flex">
        <div className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] ">
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
            <p className="text-[14px] py-2">{cart.cartItem.description}</p>
            <p className="text-[16px]">${cart.cartItem.price}</p>
          </div>
          {/* counter */}
          <div className="w-fit laptop:hidden flex gap-2">
            <Counter
              maxNumber={cart.cartItem.remain}
              currentNumber={cart.number}
              userUid={userUid ? userUid : null}
              cartUid={userUid ? cart.uid : cart.cartItem.uuid}
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
          cartUid={userUid ? cart.uid : cart.cartItem.uuid}
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
        <p>${Number(cart.cartItem.price) * cart.number}</p>
      </div>
    </div>
  ))
}

export default ProductCartList
