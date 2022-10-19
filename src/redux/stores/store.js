import { configureStore } from '@reduxjs/toolkit'
import user from '../features/userSlice'
import products from '../features/productsSlice'
import product from '../features/productSlice'
import cart from '../features/carts/cartSlice'
import bill from '../features/bills/billSlice'
import address from '../features/address/addressSlice'
import category from '../features/category/categorySlice'
import stepper from '../features/stepper/stepperSlice'

const store = configureStore({
  reducer: {
    user: user,
    products: products,
    product: product,
    cart: cart,
    bill: bill,
    address: address,
    category: category,
    stepper: stepper
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
