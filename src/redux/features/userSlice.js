import { createSlice } from '@reduxjs/toolkit'
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
  signUp
} from '../../services/auth'
import { showOneUser } from '../../services/user'

const initialState = {
  status: 'idle',
  fullname: null,
  email: null,
  phone: null,
  gender: null,
  uid: null,
  addr_default: null,
  birth: null,
  avatar: null,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserRequest: (state) => {
      state.status = 'loading'
      state.error = null
    },
    setActiveUser: (state, action) => {
      if (action.payload.fullname) state.fullname = action.payload.fullname
      if (action.payload.phone) state.phone = action.payload.phone
      if (action.payload.gender) state.gender = action.payload.gender
      if (action.payload.email) state.email = action.payload.email
      if (action.payload.uid) state.uid = action.payload.uid
      if (action.payload.addr_default)
        state.addr_default = action.payload.addr_default
      if (action.payload.birth) state.birth = action.payload.birth
      if (action.payload.avatar) state.avatar = action.payload.avatar
      state.status = 'idle'
      state.error = null
    },
    setLogOutUser: (state) => {
      state.status = 'idle'
      state.fullname = null
      state.uid = null
      state.email = null
      state.phone = null
      state.gender = null
      state.birth = null
      state.addr_default = null
      state.avatar = null
    },
    setUserError: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    }
  }
})

//sign in with email and password
export const signInWithEmailAndPass = (email, password) => (dispatch) => {
  dispatch(setUserRequest())
  //call signInWithEmailAndPassword API from services/auth
  signInWithEmailAndPassword(email, password)
    .then((user) => console.log('sign in successfully'))
    .catch((e) => {
      dispatch(setUserError(e))
    })
}

//sign in with google
export const signInGoogle = () => (dispatch) => {
  dispatch(setUserRequest())
  //call signInWithGoogle API from services/auth
  signInWithGoogle()
    .then((user) => {
      dispatch(
        setActiveUser({
          fullname: user.displayName,
          email: user.email,
          uid: user.uid,
          addr_default: user.addr_default
        })
      )
    })
    .catch((e) => {
      dispatch(setUserError(e))
    })
}

//sign up
export const signUpUser = (fullname, email, password) => (dispatch) => {
  dispatch(setUserRequest())
  //call signUp API from services/auth
  signUp(fullname, email, password)
    .then((user) => {
      dispatch(
        setActiveUser({
          fullname: user.fullname,
          email: user.email,
          uid: user.uid
        })
      )
    })
    .catch((e) => {
      dispatch(setUserError(e))
    })
}

//get user information
export const getInformation = (userUid) => (dispatch) => {
  const get = async () => {
    dispatch(setUserRequest())
    //call api
    await showOneUser(userUid)
      .then((user) => {
        dispatch(
          setActiveUser({
            fullname: user.fullname,
            gender: user.gender,
            phone: user.phone,
            email: user.email,
            birth: user.dob,
            addr_default: user.addr_default,
            avatar: user.avatar,
            uid: userUid
          })
        )
      })
      .catch((e) => dispatch(setUserError(e)))
  }

  get()
}

//get action
export const { setActiveUser, setLogOutUser, setUserRequest, setUserError } =
  userSlice.actions

// get state
export const selectUserName = (state) => state.user.fullname
export const selectUserEmail = (state) => state.user.email
export const selectError = (state) => state.user.error
export const selectStatus = (state) => state.user.status
export const selectUserUid = (state) => state.user.uid
export const selectUserAddressDefault = (state) => state.user.addr_default
export const selectUserPhone = (state) => state.user.phone
export const selectUserGender = (state) => state.user.gender
export const selectUserBirth = (state) => state.user.birth
export const selectUserAvatar = (state) => state.user.avatar

export default userSlice.reducer
