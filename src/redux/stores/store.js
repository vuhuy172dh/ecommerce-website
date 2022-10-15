import { configureStore } from '@reduxjs/toolkit'
import user from '../features/userSlice'
import procedure from '../features/procedureSlice'

const store = configureStore({
  reducer: {
    user: user,
    procedure: procedure
  }
})

export default store
