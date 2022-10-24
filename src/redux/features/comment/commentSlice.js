import { createSlice } from '@reduxjs/toolkit'
import createOneComment from '../../../services/comment/create'
import showListComments from '../../../services/comment/show'

const inititalState = {
  status: 'idle',
  createStatus: 'idle',
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
    setCreateRequest: (state) => {
      state.createStatus = 'loading'
    },
    setActiveContent: (state, action) => {
      state.comments.push(action.payload)
      state.createStatus = 'success'
    },
    setInitialComment: (state, action) => {
      state.comments = action.payload
      state.status = 'success'
    },
    setComments: (state, action) => {
      state.status = 'loading'
      state.comments = action.payload
      state.status = 'success'
    }
  }
})

//get comment (ok)
export const getCommentByProductId = (productId) => (dispatch) => {
  const get = async () => {
    dispatch(setRequest())
    await showListComments(productId)
      .then((res) => dispatch(setInitialComment(res)))
      .catch((e) => console.log(e))
  }

  get()
}

export const createComment = (productId, data) => (dispatch) => {
  const create = async () => {
    dispatch(setCreateRequest())
    await createOneComment({ idProduct: productId, data: data })
      .then((res) => dispatch(setActiveContent(res)))
      .catch((e) => console.log(e))
  }

  create()
}

export const {
  setRequest,
  setCreateRequest,
  setActiveContent,
  setInitialComment,
  setComments
} = commentSlice.actions

export const selectCommentStatus = (state) => state.comment.status
export const selectCommentError = (state) => state.comment.error
export const selectComment = (state) => state.comment.comments
export const selectCreateStatus = (state) => state.comment.createStatus

export default commentSlice.reducer
