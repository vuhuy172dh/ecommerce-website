import { createSlice } from '@reduxjs/toolkit'
import {
  getListProducts,
  getListProductsByCategory
} from '../../services/product'

const initialState = {
  status: 'loading',
  products: [],
  lastVisible: null,
  statusCategory: 'loading',
  productsCategory: [],
  lastVisibleCatergory: null,
  error: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProductsResquest: (state) => {
      state.status = 'loading'
    },
    setProductsCategoryResquest: (state) => {
      state.statusCategory = 'loading'
    },
    setProducts: (state, action) => {
      state.status = 'idle'
      state.products = state.products.concat(action.payload)
    },
    setProductsCategory: (state, action) => {
      state.statusCategory = 'idle'
      state.productsCategory = state.productsCategory.concat(action.payload)
    },
    setLastVisibleCategory: (state, action) => {
      state.lastVisibleCatergory = action.payload
    },
    setClearCategory: (state) => {
      state.productsCategory.length = 0
      state.lastVisibleCatergory = null
    },
    setClearProducts: (state) => {
      state.products = []
      state.lastVisible = null
    },
    setLastVisible: (state, action) => {
      state.lastVisible = action.payload
    },
    setProductsError: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    }
  }
})

//get all products
export const getProducts = (startPoint, order, sort) => (dispatch) => {
  //dispatch(setProductsResquest())
  // call API
  getListProducts(startPoint, order, sort)
    .then(([products, lastVisible]) => {
      dispatch(setProducts(products))
      dispatch(setLastVisible(lastVisible))
    })
    .catch((e) => dispatch(setProductsError(e)))
}

//get products by category
export const getCategoryProducts = (startPoint, category) => (dispatch) => {
  //dispatch(setProductsCategoryResquest())
  //call API
  getListProductsByCategory(startPoint, category)
    .then(([products, lastVisible]) => {
      dispatch(setProductsCategory(products))
      dispatch(setLastVisibleCategory(lastVisible))
    })
    .catch((e) => dispatch(setProductsError(e)))
}

//get action
export const {
  setProducts,
  setProductsResquest,
  setProductsCategoryResquest,
  setLastVisible,
  setProductsError,
  setProductsCategory,
  setLastVisibleCategory,
  setClearCategory,
  setClearProducts
} = productsSlice.actions

//get state
export const selectProducts = (state) => state.products.products
export const selectStatus = (state) => state.products.status
export const selectError = (state) => state.products.error
export const selectLastVisible = (state) => state.products.lastVisible
export const selectProductsCategory = (state) => state.products.productsCategory
export const selectLastVisibleCategory = (state) =>
  state.products.lastVisibleCatergory
export const selectStatusCategory = (state) => state.products.statusCategory

export default productsSlice.reducer
