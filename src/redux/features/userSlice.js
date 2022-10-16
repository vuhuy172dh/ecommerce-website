import { createSlice } from '@reduxjs/toolkit'
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
  signUp
} from '../../services/auth'

const initialState = {
  status: 'idle',
  fullname: null,
  email: null,
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
      state.status = 'idle'
      state.fullname = action.payload.fullname
      state.email = action.payload.email
      state.error = null
    },
    setLogOutUser: (state) => {
      state.status = 'idle'
      state.fullname = null
      state.email = null
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
    .then((user) => {
      dispatch(setActiveUser({ fullname: user.displayName, email: user.email }))
    })
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
      dispatch(setActiveUser({ fullname: user.displayName, email: user.email }))
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
      dispatch(setActiveUser({ fullname: user.displayName, email: user.email }))
    })
    .catch((e) => {
      dispatch(setUserError(e))
    })
}

//get action
export const { setActiveUser, setLogOutUser, setUserRequest, setUserError } =
  userSlice.actions

// get state
export const selectUserName = (state) => state.user.fullname
export const selectUserEmail = (state) => state.user.email
export const selectError = (state) => state.user.error
export const selectStatus = (state) => state.user.status

export default userSlice.reducer
