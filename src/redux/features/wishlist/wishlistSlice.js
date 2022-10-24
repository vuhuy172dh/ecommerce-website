import { createSlice } from '@reduxjs/toolkit'
import {
  listingProductInWishlist,
  addProductToWishlist,
  deleteOneProductFromWishlist
} from '../../../services/wishlist'

const initialState = {
  status: 'idle',
  wishlistList: [],
  error: null
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initialState,
  reducers: {
    setWishlistRequest: (state) => {
      state.status = 'loading'
    },
    setWishlistList: (state, action) => {
      state.wishlistList = action.payload
      state.status = 'success'
    },
    addWishlist: (state, action) => {
      state.wishlistList.push(action.payload)
      state.status = 'success'
    },
    removeWishlist: (state, action) => {
      state.wishlistList = state.wishlistList.filter(
        (item) => item.uid !== action.payload
      )
    },
    setWishlistError: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    },
    setEmptyWishlist: (state) => {
      state.status = 'idle'
      state.wishlistList = []
    }
  }
})

//get user wishlist(ok)
export const getWishlist = (userUid) => (dispatch) => {
  const get = async () => {
    dispatch(setWishlistRequest())
    await listingProductInWishlist(userUid)
      .then((res) => dispatch(setWishlistList(res)))
      .catch((e) => dispatch(setWishlistError(e)))
  }

  get()
}

//add new wishlist (ok)
export const addNewItemToWishlist =
  (userUid, product) => (dispatch, getState) => {
    const add = async () => {
      const currentWishlist = selectWishlistList(getState())
      const existItem = currentWishlist.find(
        (i) => i.product.uuid === product.uuid
      )
      if (existItem) return
      dispatch(setWishlistRequest())
      await addProductToWishlist(userUid, product)
        .then((res) => {
          dispatch(addWishlist(res))
        })
        .catch((e) => dispatch(setWishlistError(e)))
    }

    add()
  }

export const removeItemFromWishlist = (wishlistUid) => (dispatch) => {
  const remove = async () => {
    await deleteOneProductFromWishlist(wishlistUid)
      .then((res) => {
        dispatch(removeWishlist(wishlistUid))
        console.log(res)
      })
      .catch((e) => console.log(e))
  }

  remove()
}

export const {
  setWishlistRequest,
  setWishlistList,
  setWishlistError,
  addWishlist,
  setEmptyWishlist,
  removeWishlist
} = wishlistSlice.actions

export const selectWishlistStatus = (state) => state.wishlist.status
export const selectWishlistError = (state) => state.wishlist.error
export const selectWishlistList = (state) => state.wishlist.wishlistList

export default wishlistSlice.reducer
