import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import {
  cancelOrder,
  createOneTransaction,
  reOrder,
  showListTransactions,
  showOneTransaction
} from '../../../services/transaction'

const initialState = {
  status: 'idle',
  createStatus: 'idle',
  cancelStatus: 'idle',
  reorderStatus: 'idle',
  createErrors: null,
  bills: [],
  bill: null,
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
    setCreateRequest: (state) => {
      state.createStatus = 'loading'
    },
    setCreateIdle: (state) => {
      state.createStatus = 'idle'
    },
    setCancelRequest: (state) => {
      state.cancelStatus = 'loading'
    },
    setReorderRequest: (state) => {
      state.reorderStatus = 'loading'
    },
    setCreateErrors: (state, action) => {
      state.createStatus = 'error'
      state.createErrors = action.payload
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
    updateBillStatus: (state, action) => {
      state.cancelStatus = 'success'
      //const bill = state.bills.find((item) => item.uid === action.payload)
      //bill.status = 'Canceled'
    },
    updateBillReorder: (state, action) => {
      state.reorderStatus = 'success'
      //const bill = state.bills.find((item) => item.uid === action.payload)
      //bill.status = 'Waiting'
    },
    addBills: (state, action) => {
      state.bills = action.payload
      state.status = 'success'
    },
    addOneBillToBills: (state, action) => {
      state.bills.push(action.payload)
      state.createStatus = 'success'
    },
    addBillDetail: (state, action) => {
      state.bill = action.payload
      state.status = 'idle'
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

//get bill detail
export const getBillDetail = (billUid) => (dispatch) => {
  const detail = async () => {
    dispatch(setRequest())
    await showOneTransaction(billUid)
      .then((res) => dispatch(addBillDetail(res)))
      .catch((e) => console.log(e))
  }

  detail()
}

//cancel bill
export const cancelBill = (uidTransaction) => (dispatch) => {
  const cancel = async () => {
    dispatch(setCancelRequest())
    await cancelOrder(uidTransaction)
      .then((res) => {
        dispatch(updateBillStatus(uidTransaction))
        toast.success(res)
      })
      .catch((e) => console.log(e))
  }

  cancel()
}

//reorder canceled bill
export const reorderBill = (uidTransaction) => (dispatch) => {
  const reorder = async () => {
    dispatch(setReorderRequest())
    await reOrder(uidTransaction)
      .then((res) => {
        dispatch(updateBillReorder(uidTransaction))
        toast.success(res)
      })
      .catch((e) => console.log(e))
  }

  reorder()
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
      })
      .catch((e) => dispatch(setCreateErrors(e)))
  }

  create()
}

export const {
  setRequest,
  setCreateRequest,
  setCancelRequest,
  setReorderRequest,
  setCreateErrors,
  setCreateIdle,
  addUser,
  addContact,
  addShipTo,
  addShippingMethod,
  addPaymen,
  addTotolPrice,
  addProducts,
  clearBill,
  updateBillStatus,
  updateBillReorder,
  addBills,
  addOneBillToBills,
  addBillDetail
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
export const selectBillDetail = (state) => state.bill.bill
export const selectCreateStatus = (state) => state.bill.createStatus
export const selectCreateErrors = (state) => state.bill.createErrors
export const selectCancelStatus = (state) => state.bill.cancelStatus
export const selectReorderStatus = (state) => state.bill.reorderStatus

export default billSlice.reducer
