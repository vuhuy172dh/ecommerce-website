import { createSlice } from '@reduxjs/toolkit'
import { getProduct } from '../../services/product'

const initialState = {
  status: 'idle',
  product: {},
  error: null
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setRequest: (state) => {
      state.status = 'loading'
    },
    setProduct: (state, action) => {
      state.status = 'idle'
      state.product = action.payload
    },
    setError: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    }
  }
})

export const getProductDetail = (id) => (dispatch) => {
  const get = async () => {
    dispatch(setRequest())

    await getProduct(id)
      .then((productDetail) => dispatch(setProduct(productDetail)))
      .catch((e) => dispatch(setError(e)))
  }

  get()
}

//export action
export const { setProduct, setRequest, setError } = productSlice.actions

//export selector
export const selectProduct = (state) => state.product.product
export const selectStatus = (state) => state.product.status
export const selectError = (state) => state.product.error

export default productSlice.reducer
