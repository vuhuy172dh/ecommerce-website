import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  address: null,
  contact: null,
  shipTo: null,
  method: null,
  payment: null
}

const billSlice = createSlice({
  name: 'bill',
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.contact = action.payload
    },
    addAddress: (state, action) => {
      state.address = action.payload
    },
    addShipTo: (state, action) => {
      state.shipTo = action.payload
    },
    addMethod: (state, action) => {
      state.method = action.payload
    },
    addPaymen: (state, action) => {
      state.payment = action.payload
    }
  }
})

export const { addContact, addShipTo, addMethod, addPaymen } = billSlice.actions

export const selectUser = (state) => state.bill.user
export const selectAddress = (state) => state.bill.address
export const selectContact = (state) => state.bill.contact
export const selectShipTo = (state) => state.bill.shipTo
export const selectMethod = (state) => state.bill.method
export const selectPayment = (state) => state.bill.payment

export default billSlice.reducer
