import { configureStore } from '@reduxjs/toolkit'
import user from '../features/userSlice'
import products from '../features/productsSlice'
import product from '../features/productSlice'
import cart from '../features/carts/cartSlice'

const store = configureStore({
  reducer: {
    user: user,
    products: products,
    product: product,
    cart: cart
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
