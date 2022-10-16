import { createSlice } from '@reduxjs/toolkit'

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

//get action
export const { setActiveUser, setLogOutUser } = userSlice.actions

// get state
export const selectUserName = (state) => state.user.fullname
export const selectUserEmail = (state) => state.user.email

export default userSlice.reducer
