import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  contact: null,
  shipTo: null,
  shippingMethod: null,
  payment: null
}

const billSlice = createSlice({
  name: 'bill',
  initialState: initialState,
  reducers: {
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
    }
  }
})

export const { addContact, addShipTo, addShippingMethod, addPaymen } =
  billSlice.actions

export const selectUser = (state) => state.bill.user
export const selectContact = (state) => state.bill.contact
export const selectShipTo = (state) => state.bill.shipTo
export const selectShippingMethod = (state) => state.bill.shippingMethod
export const selectPayment = (state) => state.bill.payment

export default billSlice.reducer
