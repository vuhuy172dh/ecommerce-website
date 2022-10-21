import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  contact: null,
  shipTo: null,
  shippingMethod: null,
  payment: null,
  totalPrice: null,
  products: []
}

const billSlice = createSlice({
  name: 'bill',
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
    addContact: (state, action) => {
      state.contact = action.payload
    },
    addShipTo: (state, action) => {
      state.shipTo = action.payload
    },
    addShippingMethod: (state, action) => {
      state.shippingMethod = action.payload
    },
    addPaymen: (state, action) => {
      state.payment = action.payload
    },
    addTotolPrice: (state, action) => {
      state.totalPrice = action.payload
    },
    addProducts: (state, action) => {
      state.products = action.payload
    }
  }
})

export const {
  addUser,
  addContact,
  addShipTo,
  addShippingMethod,
  addPaymen,
  addTotolPrice,
  addProducts
} = billSlice.actions

export const selectUser = (state) => state.bill.user
export const selectContact = (state) => state.bill.contact
export const selectShipTo = (state) => state.bill.shipTo
export const selectShippingMethod = (state) => state.bill.shippingMethod
export const selectPayment = (state) => state.bill.payment
export const selectTotalPrice = (state) => state.bill.totalPrice
export const selectBillProducts = (state) => state.bill.products

export default billSlice.reducer
