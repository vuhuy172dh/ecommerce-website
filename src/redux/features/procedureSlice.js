import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null
}

const procedureSlice = createSlice({
  name: 'procedure',
  initialState: initialState,
  reducers: {
    request: (state) => {
      state.loading = true
      state.error = null
    },
    success: (state) => {
      state.loading = false
    },
    fail: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    }
  }
})

//export action
export const { request, success, fail } = procedureSlice.actions

//export selector
export const selectLoading = (state) => state.procedure.loading
export const selectError = (state) => state.procedure.error

export default procedureSlice.reducer
