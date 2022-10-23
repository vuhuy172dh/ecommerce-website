import { createSlice } from '@reduxjs/toolkit'
import BlueChair from '../../../assets/images/BlueChair.png'

const inititalState = {
  status: 'idle',
  comments: [],
  error: null
}

const commentSlice = createSlice({
  name: 'comment',
  initialState: inititalState,
  reducers: {
    setRequest: (state) => {
      state.status = 'loading'
    },
    setActiveContent: (state, action) => {
      state.status = 'loading'
      state.comments.push({
        name: 'Huy Vu',
        content: action.payload,
        avatar: BlueChair
      })
      state.status = 'success'
    },
    setComments: (state, action) => {
      state.status = 'loading'
      state.comments = action.payload
      state.status = 'success'
    }
  }
})

export const { setRequest, setActiveContent, setComments } =
  commentSlice.actions

export const selectCommentStatus = (state) => state.comment.status
export const selectCommentError = (state) => state.comment.error
export const selectComment = (state) => state.comment.comments

export default commentSlice.reducer
