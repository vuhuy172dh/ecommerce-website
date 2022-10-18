import { configureStore } from '@reduxjs/toolkit'
import user from '../features/userSlice'
import products from '../features/productsSlice'
import product from '../features/productSlice'
import cart from '../features/carts/cartSlice'
import bill from '../features/bills/billSlice'

const store = configureStore({
  reducer: {
    user: user,
    products: products,
    product: product,
    cart: cart,
    bill: bill
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
