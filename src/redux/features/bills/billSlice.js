import { createSlice } from '@reduxjs/toolkit'
import {
  createOneTransaction,
  showListTransactions
} from '../../../services/transaction'

const initialState = {
  status: 'idle',
  bills: [],
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
    setRequest: (state) => {
      state.status = 'loading'
    },
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
    },
    clearBill: (state) => {
      state.user = null
      state.contact = null
      state.shipTo = null
      state.shippingMethod = null
      state.payment = null
      state.totalPrice = null
      state.products = []
    },
    addBills: (state, action) => {
      state.status = 'idle'
      state.bills = action.payload
    },
    addOneBillToBills: (state, action) => {
      state.bills.push(action.payload)
    }
  }
})
//get bills
export const getBills = (status) => (dispatch) => {
  const get = async () => {
    dispatch(setRequest())
    await showListTransactions(status)
      .then((res) => dispatch(addBills(res)))
      .catch((e) => console.log(e))
  }

  get()
}

//create a bill and update state
export const createBill = () => (dispatch, getState) => {
  const create = async () => {
    const userUid = selectUser(getState())
    const contact = selectContact(getState())
    const shipto = selectShipTo(getState())
    const shipMethod = selectShippingMethod(getState())
    const payment = selectPayment(getState())
    const totalPrice = selectTotalPrice(getState())
    const products = selectBillProducts(getState())
    await createOneTransaction(
      userUid,
      contact,
      shipto,
      shipMethod,
      payment,
      totalPrice,
      products
    )
      .then((res) => {
        //add bill to bills
        dispatch(addOneBillToBills(res))
        //clear all information in bill that created
        dispatch(clearBill())
      })
      .catch((e) => console.log(e))
  }

  create()
}

export const {
  setRequest,
  addUser,
  addContact,
  addShipTo,
  addShippingMethod,
  addPaymen,
  addTotolPrice,
  addProducts,
  clearBill,
  addBills,
  addOneBillToBills
} = billSlice.actions

export const selectUser = (state) => state.bill.user
export const selectContact = (state) => state.bill.contact
export const selectShipTo = (state) => state.bill.shipTo
export const selectShippingMethod = (state) => state.bill.shippingMethod
export const selectPayment = (state) => state.bill.payment
export const selectTotalPrice = (state) => state.bill.totalPrice
export const selectBillProducts = (state) => state.bill.products
export const selectBills = (state) => state.bill.bills
export const selectStatus = (state) => state.bill.status

export default billSlice.reducer
