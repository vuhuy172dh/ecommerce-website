import { createSlice } from '@reduxjs/toolkit'
import {
  listingProductInCart,
  deleteOneProductFromCart,
  updateFieldNumberCartItem,
  addProductToCart
} from '../../../services/cart'
import { toast } from 'react-toastify'

const initialState = {
  cartStatus: 'idle',
  addToCartStatus: 'idle',
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartError: null,
  cartNotify: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setRequest: (state) => {
      state.cartStatus = 'loading'
    },
    setAddToCartRequest: (state) => {
      state.addToCartStatus = 'loading'
    },
    setAddToCartSuccess: (state) => {
      state.addToCartStatus = 'success'
    },
    setIdle: (state) => {
      state.cartStatus = 'idle'
    },
    addToCart: (state, action) => {
      //new cart item
      const newCartItem = action.payload.cartItem
      //new number
      const newNumber = action.payload.number

      //exist cart item
      const existCart = state.cartItems.find(
        (item) => item.cartItem.uuid === newCartItem.uuid
      )

      //add new number to current number if existing
      if (existCart) {
        existCart.number += newNumber
      } else {
        state.cartItems.push(action.payload)
      }

      //save to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      state.addToCartStatus = 'success'
      toast.success('Add to cart successfully')
    },
    addToCartForMerge: (state, action) => {
      state.cartStatus = 'idle'
      state.cartItems = action.payload
    },
    replaceCartItem: (state, action) => {
      //remove cartItem input exist in current cart
      const newCartItems = state.cartItems.filter(
        (item) => item.cartItem.uuid !== action.payload.cartItem.uuid
      )

      //replace by new cartItem
      newCartItems.push(action.payload)
      state.cartItems = newCartItems
      state.cartStatus = 'idle'
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.cartItem.uuid !== action.payload
      )
      state.cartItems = newCartItems
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      state.addToCartStatus = 'success'
      toast.success('Remove from cart successfully')
    },
    updateNumber: (state, action) => {
      const existItem = state.cartItems.find(
        (i) => i.cartItem.uuid === action.payload.cartItem.cartItem.uuid
      )
      existItem.number = action.payload.number
      state.cartStatus = 'success'
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    setEmptyCart: (state) => {
      state.cartItems.length = 0
      localStorage.removeItem('cartItems')
      state.cartStatus = 'success'
    }
  }
})

//when first login and getUserCart. This is merge userCart to anonymous cart and update firestore (ok)
export const getUserCart = (userUid) => (dispatch, getState) => {
  const getData = async () => {
    //request API
    dispatch(setRequest())

    await listingProductInCart(userUid)
      .then((cart) => {
        const cartItems = selectCartItems(getState())
        dispatch(addToCartForMerge(cart))
        //const resultCartItems = cart
        for (let item of cartItems) {
          const existCart = cart.find(
            (i) => i.cartItem.uuid === item.cartItem.uuid
          )
          if (!existCart) {
            //add new item to firebase and update uid for local cart
            addProductToCart(userUid, item.cartItem, item.number)
              .then((res) => {
                dispatch(addToCart(res))
              })
              .catch((e) => console.log(e))
          }
        }
      })
      .catch((e) => alert(e))
  }

  //get user cart item and merge with local
  getData()
}

//handle add to cart and add to firebase (ok)
export const addItemToUserCart =
  (userUid, product, number) => (dispatch, getState) => {
    const add = async () => {
      dispatch(setAddToCartRequest())
      //check exist item
      const existItem = selectCartItems(getState()).find(
        (i) => i.cartItem.uuid === product.uuid
      )

      if (existItem) {
        //update number of user cart
        const newNumber = existItem.number + number
        if (newNumber <= product.remain) {
          await updateFieldNumberCartItem(userUid, existItem.uid, newNumber)
            .then((res) => {
              dispatch(updateNumber({ cartItem: existItem, number: newNumber }))
              toast.success('Added more item to Cart!')
            })
            .catch((e) => console.log(e))
        } else {
          dispatch(setAddToCartSuccess())
          toast.error('No remain item to add!.')
        }
      } else {
        //add new item to cart on firebase and add to local cart
        await addProductToCart(userUid, product, number)
          .then((res) => dispatch(addToCart(res)))
          .catch((e) => console.log(e))
      }
    }

    add()
  }

//remove cart item when user is logging in (ok)
export const removeFromUserFirebase = (userUid, cartItem) => (dispatch) => {
  const remove = async () => {
    //remove from firebase
    await deleteOneProductFromCart(userUid, cartItem.uid)
      .then((res) => console.log(res))
      .catch((e) => alert(e))

    //remove from local
    dispatch(removeFromCart(cartItem.cartItem.uuid))
  }

  remove()
}

export const removeAllProductCart = (userUid) => (dispatch, getState) => {
  const remove = async () => {
    for (let item of selectCartItems(getState())) {
      await deleteOneProductFromCart(userUid, item.uid)
        .then((res) => {
          console.log(res)
        })
        .catch((e) => console.log(e))
    }
    dispatch(setEmptyCart())
  }

  remove()
}

//update number of product when user is singing in (ok)
export const updateUserCartFirebase =
  (userUid, cartItem, number) => (dispatch) => {
    const update = async () => {
      await updateFieldNumberCartItem(userUid, cartItem.uid, number)
        .then((res) => console.log(res))
        .catch((e) => alert(e))

      dispatch(updateNumber({ number: number, cartItem: cartItem }))
    }

    update()
  }

//export action
export const {
  setRequest,
  setAddToCartRequest,
  setAddToCartSuccess,
  setIdle,
  addToCart,
  addToCartForMerge,
  replaceCartItem,
  removeFromCart,
  updateNumber,
  setEmptyCart
} = cartSlice.actions

//export selection
export const selectCartItems = (state) => state.cart.cartItems
export const selectCartStatus = (state) => state.cart.cartStatus
export const selectCartErrors = (state) => state.cart.cartError
export const selectAddToCartStatus = (state) => state.cart.addToCartStatus

export default cartSlice.reducer
