import { createSlice } from '@reduxjs/toolkit'
import { getListProducts } from '../../services/product'

const initialState = {
  status: 'loading',
  products: [],
  error: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProductsResquest: (state) => {
      state.status = 'loading'
      state.products.length = 0
    },
    setProducts: (state, action) => {
      state.status = 'idle'
      state.products = action.payload
    },
    setProductsError: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    }
  }
})

//get all products
export const getProducts = () => (dispatch) => {
  dispatch(setProductsResquest())
  // call API
  getListProducts()
    .then((products) => dispatch(setProducts(products)))
    .catch((e) => dispatch(setProductsError(e)))
}

//get products by category
export const getCategoryProducts = (category) => (dispatch) => {
  console.log('hello world')
  dispatch(setProductsResquest())
  //call API
  getListProducts()
    .then((products) => {
      const categoryProducts = products.filter(
        (item) => item.category.toLowerCase() === category
      )
      console.log(category)
      console.log(categoryProducts)
      dispatch(setProducts(categoryProducts))
    })
    .catch((e) => dispatch(setProductsError(e)))
}

//get action
export const { setProducts, setProductsResquest, setProductsError } =
  productsSlice.actions

//get state
export const selectProducts = (state) => state.products.products
export const selectStatus = (state) => state.products.status
export const selectError = (state) => state.products.error

export default productsSlice.reducer
