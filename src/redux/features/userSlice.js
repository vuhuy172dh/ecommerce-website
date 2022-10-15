import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: null,
  fullname: null,
  email: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setWaiting: (state) => {
      state.isLoading = true
    },
    setActiveUser: (state, action) => {
      state.isLoading = false
      state.fullname = action.payload.fullname
      state.email = action.payload.email
    },
    setLogOutUser: (state) => {
      state.isLoading = false
      state.fullname = null
      state.email = null
    }
  }
})

//get action
export const { setWaiting, setActiveUser, setLogOutUser } = userSlice.actions

// get state
export const selectUserName = (state) => state.user.fullname
export const selectUserEmail = (state) => state.user.email
export const selectIsLoading = (state) => state.user.isLoading

export default userSlice.reducer
