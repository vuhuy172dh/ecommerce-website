import { createSlice } from '@reduxjs/toolkit'
import {
  listingProductInCart,
  addListProductToCart,
  deleteOneProductFromCart,
  updateFieldNumberCartItem
} from '../../../services/cart'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  userCartItems: [],
  userCartStatus: 'idle',
  userCartError: null,
  userCartNotify: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = []
        localStorage.removeItem('cartItems')
      }

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
        for (let item of state.cartItems) {
          if (item.cartItem.uuid === existCart.cartItem.uuid) {
            item.number += newNumber
          }
        }
      } else {
        state.cartItems.push({ cartItem: newCartItem, number: newNumber })
      }

      //save to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    //to use when sign in and get user cart from firebase
    addToUserCart: (state, action) => {
      state.userCartItems = action.payload
    },
    //to add item to user cart when signing in
    addNewItemToUserCart: (state, action) => {
      //new cart item
      const newCartItem = action.payload.cartItem
      //new number
      const newNumber = action.payload.number

      //exist cart item
      const existCart = state.userCartItems.find(
        (item) => item.cartItem.uuid === newCartItem.uuid
      )

      //add new number to current number if existing
      if (existCart) {
        for (let item of state.userCartItems) {
          if (item.cartItem.uuid === existCart.cartItem.uuid) {
            item.number += newNumber
          }
        }
      } else {
        state.userCartItems.push({ cartItem: newCartItem, number: newNumber })
      }
      state.cartItems = state.userCartItems
    },
    removeItemFromUserCart: (state, action) => {
      const cartItems = state.userCartItems.filter(
        (item) => item.uid !== action.payload.uid
      )
      state.userCartItems = cartItems
      state.cartItems = cartItems
      localStorage.setItem('cartItems', JSON.stringify(state.userCartItems))
    },
    mergeCart: (state) => {
      //merge userCart to localCart.
      for (let item of state.userCartItems) {
        const existItem = state.cartItems.find(
          (userItem) => userItem.cartItem.uuid === item.cartItem.uuid
        )

        if (!existItem) {
          state.cartItems.push(item)
        }
      }
      state.userCartItems = state.cartItems
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart: (state, action) => {
      const cartItems = state.cartItems.filter(
        (item) => item.cartItem.uuid !== action.payload.uuid
      )
      state.cartItems = cartItems
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    //for local
    updateNumberCartItem: (state, action) => {
      const newNumber = action.payload.number

      for (let item of state.cartItems) {
        if (item.cartItem.uuid === action.payload.uuid) {
          item.number = newNumber
        }
      }
      //save to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    //for user
    updateNumberUserCartItem: (state, action) => {
      const newNumber = action.payload.number

      for (let item of state.userCartItems) {
        if (item.uid === action.payload.cartUid) {
          item.number = newNumber
        }
      }

      //merge with local
      state.cartItems = state.userCartItems
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    setUserCartRequest: (state) => {
      state.userCartStatus = 'loading'
    },
    setUserCartSuccess: (state) => {
      state.userCartStatus = 'idle'
      state.userCartNotify = null
      state.userCartError = null
    },
    setUserCartError: (state, action) => {
      state.userCartStatus = 'error'
      state.userCartError = action.payload
    },
    setUserCartNotify: (state, action) => {
      state.userCartStatus = 'idle'
      state.userCartNotify = action.payload
    }
  }
})

//when first login and getUserCart. This is merge userCart to anonymous cart and update firestore
export const getUserCart = (userUid) => (dispatch, getState) => {
  const getData = async () => {
    //request API
    dispatch(setUserCartRequest())

    await listingProductInCart(userUid)
      .then((cart) => dispatch(addToUserCart(cart)))
      .catch((e) => dispatch(setUserCartError(e)))

    for (let item of selectUserCartItems(getState())) {
      await deleteOneProductFromCart(userUid, item.uid)
        .then((res) => console.log(res))
        .catch((e) => dispatch(setUserCartError(e)))
    }

    dispatch(mergeCart())

    const userCartItem = selectUserCartItems(getState())

    await addListProductToCart(userUid, userCartItem)
      .then((res) => console.log(res))
      .catch((e) => dispatch(setUserCartError(e)))

    //get again data to get uid of CartItem
    await listingProductInCart(userUid)
      .then((cart) => dispatch(addToUserCart(cart)))
      .catch((e) => dispatch(setUserCartError(e)))

    //success
    dispatch(setUserCartSuccess())
  }

  //get Data and merge user cart and local cart
  getData()
}

export const addItemToUserCart =
  (userUid, cartItem, number) => (dispatch, getState) => {
    const addItem = async () => {
      //delete old data on firebase
      for (let item of selectUserCartItems(getState())) {
        await deleteOneProductFromCart(userUid, item.uid)
          .then()
          .catch((e) => console.log(e))
      }

      //add new item or update number on userCartItems local
      dispatch(addNewItemToUserCart({ cartItem: cartItem, number: number }))

      //add new userCartItems to firebase
      await addListProductToCart(userUid, selectUserCartItems(getState()))
        .then((res) => alert(res))
        .catch((e) => alert(e))

      //get data from firebase again to get uid of cartItem
      await listingProductInCart(userUid)
        .then((cart) => dispatch(addToUserCart(cart)))
        .catch((e) => alert(e))

      localStorage.setItem(
        'cartItems',
        JSON.stringify(selectUserCartItems(getState()))
      )
    }

    addItem()
  }

//remove cart item when user is logging in
export const removeFromUserFirebase = (userUid, cartItemUid) => (dispatch) => {
  const remove = async () => {
    await deleteOneProductFromCart(userUid, cartItemUid)
      .then((res) => alert(res))
      .catch((e) => alert(e))

    dispatch(removeItemFromUserCart({ uid: cartItemUid }))
  }

  remove()
}

//update number of product when user is singing in
export const updateUserCartFirebase =
  (userUid, cartItemUid, number) => (dispatch) => {
    const update = async () => {
      await updateFieldNumberCartItem(userUid, cartItemUid, number)
        .then((res) => console.log(res))
        .catch((e) => alert(e))

      dispatch(
        updateNumberUserCartItem({ number: number, cartUid: cartItemUid })
      )
    }

    update()
  }

//export action
export const {
  addToCart,
  addToUserCart,
  addNewItemToUserCart,
  removeItemFromUserCart,
  mergeCart,
  removeFromCart,
  updateNumberCartItem,
  updateNumberUserCartItem,
  setUserCartRequest,
  setUserCartSuccess,
  setUserCartNotify,
  setUserCartError
} = cartSlice.actions

//export selection
export const selectCartItems = (state) => state.cart.cartItems
export const selectUserCartItems = (state) => state.cart.userCartItems
export const selectUserCartStatus = (state) => state.cart.userCartStatus
export const selectUserCartError = (state) => state.cart.userCartError
export const selectUserCartNotify = (state) => state.cart.userCartNotify

export default cartSlice.reducer
