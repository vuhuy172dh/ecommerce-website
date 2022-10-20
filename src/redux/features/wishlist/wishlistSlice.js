import { createSlice } from '@reduxjs/toolkit'
import {
  listingProductInWishlist,
  addProductToWishlist
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
      state.status = 'idle'
      state.wishlistList = action.payload
    },
    addWishlist: (state, action) => {
      state.status = 'idle'
      state.wishlistList.push(action.payload)
    },
    setWishlistError: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    }
  }
})

export const getWishlist = (userUid) => (dispatch) => {
  const get = async () => {
    dispatch(setWishlistRequest())
    await listingProductInWishlist(userUid)
      .then((res) => dispatch(setWishlistList(res)))
      .catch((e) => dispatch(setWishlistError(e)))
  }

  get()
}

export const addNewItemToWishlist = (userUid, product) => (dispatch) => {
  const add = async () => {
    dispatch(setWishlistRequest())
    await addProductToWishlist(userUid, product)
      .then((res) => dispatch(addWishlist(res)))
      .catch((e) => dispatch(setWishlistError(e)))
  }

  add()
}

export const {
  setWishlistRequest,
  setWishlistList,
  setWishlistError,
  addWishlist
} = wishlistSlice.actions

export const selectWishlistStatus = (state) => state.wishlist.status
export const selectWishlistError = (state) => state.wishlist.error
export const selectWishlistList = (state) => state.wishlist.wishlistList

export default wishlistSlice.reducer
