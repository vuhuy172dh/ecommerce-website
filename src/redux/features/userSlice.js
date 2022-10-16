import { createSlice } from '@reduxjs/toolkit'
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
  signUp
} from '../../services/auth'
import { request, success, fail } from './procedureSlice'

const initialState = {
  fullname: null,
  email: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.fullname = action.payload.fullname
      state.email = action.payload.email
    },
    setLogOutUser: (state) => {
      state.fullname = null
      state.email = null
    }
  }
})

//sign in with email and password
export const signInWithEmailAndPass = (email, password) => (dispatch) => {
  dispatch(request())
  //call signInWithEmailAndPassword API from services/auth
  signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(setActiveUser({ fullname: user.displayName, email: user.email }))
      dispatch(success())
    })
    .catch((e) => {
      dispatch(fail({ error: e }))
    })
}

//sign in with google
export const signInGoogle = () => (dispatch) => {
  dispatch(request())
  //call signInWithGoogle API from services/auth
  signInWithGoogle()
    .then((user) => {
      dispatch(setActiveUser({ fullname: user.displayName, email: user.email }))
      dispatch(success())
    })
    .catch((e) => {
      dispatch(fail({ error: e }))
    })
}

//sign up
export const signUpUser = (fullname, email, password) => (dispatch) => {
  dispatch(request())
  //call signUp API from services/auth
  signUp(fullname, email, password)
    .then((user) => {
      dispatch(setActiveUser({ fullname: user.displayName, email: user.email }))
      dispatch(success())
    })
    .catch((e) => {
      dispatch(fail({ error: e }))
    })
}

//get action
export const { setActiveUser, setLogOutUser } = userSlice.actions

// get state
export const selectUserName = (state) => state.user.fullname
export const selectUserEmail = (state) => state.user.email

export default userSlice.reducer
