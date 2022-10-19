import { createSlice } from '@reduxjs/toolkit'
import { getListCategories } from '../../../services/category'

const ininitalState = {
  status: 'idle',
  categories: []
}

const categorySlice = createSlice({
  name: 'category',
  initialState: ininitalState,
  reducers: {
    setRequest: (state) => {
      state.status = 'loading'
    },
    setCategory: (state, action) => {
      state.status = 'idle'
      state.categories = action.payload
    }
  }
})

export const getCategories = () => (dispatch) => {
  const getCate = async () => {
    dispatch(setRequest())
    await getListCategories()
      .then((res) => dispatch(setCategory(res)))
      .catch((e) => alert(e))
  }

  getCate()
}

export const { setRequest, setCategory } = categorySlice.actions

export const selectCategoryStatus = (state) => state.category.status
export const selectCategories = (state) => state.category.categories

export default categorySlice.reducer
