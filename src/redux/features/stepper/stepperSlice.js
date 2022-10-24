import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentStep: 1
}

const stepperSlice = createSlice({
  name: 'stepper',
  initialState: initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload
    }
  }
})

export const { setStep } = stepperSlice.actions

export const selectCurrentStep = (state) => state.stepper.currentStep

export default stepperSlice.reducer
