import { createSlice } from '@reduxjs/toolkit'
import {
  createNewAddr,
  getListAddress,
  deleteOneAddress,
  updateOneAddress
} from '../../../services/address'
import { toast } from 'react-toastify'

const initialState = {
  status: 'idle',
  addressList: [],
  addressDefault: null,
  error: null
}

const addressSlice = createSlice({
  name: 'address',
  initialState: initialState,
  reducers: {
    setRequest: (state) => {
      state.status = 'loading'
    },
    setAddress: (state, action) => {
      state.status = 'idle'
      state.addressList = action.payload
    },
    setAddressDefault: (state, action) => {
      state.addressDefault = action.payload
    },
    delAddress: (state, action) => {
      const newAddressList = state.addressList.filter(
        (item) => item.uid !== action.payload
      )
      state.addressList = newAddressList
    },
    updateAddress: (state, action) => {
      const index = state.addressList.findIndex(
        (item) => item.uid === action.payload.uid
      )
      state.addressList[index] = action.payload.address
    },
    setError: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    },
    setAddNewAddress: (state, action) => {
      state.addressList.push(action.payload)
    }
  }
})

//get address list
export const getAddressList = (userUid) => (dispatch) => {
  const get = async () => {
    setRequest()
    await getListAddress(userUid)
      .then((res) => dispatch(setAddress(res)))
      .catch((e) => dispatch(e))
  }

  get()
}

//get address default when signed in
export const getAddressDefault =
  (userAddrDefaultUid) => (dispatch, getState) => {
    const addressDefault = selectAddressList(getState()).find(
      (a) => a.uid === userAddrDefaultUid
    )
    dispatch(setAddressDefault(addressDefault))
  }

//delete address
export const deleteAddress = (userUid, addressUid) => (dispatch) => {
  const del = async () => {
    await deleteOneAddress(userUid, addressUid)
      .then((res) => {
        dispatch(delAddress(addressUid))
        toast.success(res)
      })
      .catch((e) => alert(e))
  }
  del()
}

//add new address to firebase and add id of this address then store to address list
export const addNewAddress = (userUid, newAddress) => (dispatch) => {
  const add = async () => {
    await createNewAddr(userUid, newAddress)
      .then((res) => {
        const address = {
          name: newAddress.Name,
          phone_num: newAddress.PhoneNumber,
          province: newAddress.Province,
          district: newAddress.District,
          ward: newAddress.Ward,
          detail: newAddress.Address,
          province_code: newAddress.ProvinceCode,
          district_code: newAddress.DistrictCode,
          wardCode: newAddress.WardCode,
          uid: res
        }
        dispatch(setAddNewAddress(address))
        toast.success('add new address successfully')
      })
      .catch((e) => alert(e))
  }

  add()
}

// update address on firebase and update on redux state
export const updateAddr = (userUid, addressUid, updateAddr) => (dispatch) => {
  const upd = async () => {
    await updateOneAddress(userUid, addressUid, updateAddr)
      .then((res) => {
        const address = {
          name: updateAddr.Name,
          phone_num: updateAddr.PhoneNumber,
          province: updateAddr.Province,
          district: updateAddr.District,
          ward: updateAddr.Ward,
          detail: updateAddr.Address,
          province_code: updateAddr.ProvinceCode,
          district_code: updateAddr.DistrictCode,
          wardCode: updateAddr.WardCode,
          uid: addressUid
        }
        dispatch(updateAddress({ uid: addressUid, address: address }))
        toast.success(res)
      })
      .catch((e) => alert(e))
  }

  upd()
}

export const {
  setRequest,
  setAddress,
  setAddressDefault,
  delAddress,
  updateAddress,
  setError,
  setAddNewAddress
} = addressSlice.actions

export const selectStatus = (state) => state.address.status
export const selectAddressList = (state) => state.address.addressList
export const selectError = (state) => state.address.error
export const selectAddressDefault = (state) => state.address.addressDefault

export default addressSlice.reducer
