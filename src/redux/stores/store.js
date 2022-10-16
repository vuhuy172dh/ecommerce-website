import { configureStore } from '@reduxjs/toolkit'
import user from '../features/userSlice'
import products from '../features/productsSlice'
import product from '../features/productSlice'

const store = configureStore({
  reducer: {
    user: user,
    products: products,
    product: product
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
