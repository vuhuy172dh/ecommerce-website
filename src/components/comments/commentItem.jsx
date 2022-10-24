import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '../../redux/features/comment/commentSlice'
import { selectProduct } from '../../redux/features/productSlice'
import { selectUserUid } from '../../redux/features/userSlice'
import { toast } from 'react-toastify'

function CommentItem({ comment }) {
  const dispatch = useDispatch()
  const product = useSelector(selectProduct)
  const userUid = useSelector(selectUserUid)
  const commentUid = comment.uid

  const handleDelComment = () => {
    if (userUid === null) {
      toast.error('Please Sign In')
      return
    }
    console.log('hello 1')
    console.log(product.uuid, userUid, commentUid)
    dispatch(deleteComment(userUid, product.uuid, commentUid))
  }

  return (
    <div className="w-full">
      {/**/}
      <div className="w-full h-full flex gap-2">
        <div className="h-12 w-12 shrink-0 rounded-full overflow-hidden">
          <img
            src={comment.user.avatar}
            alt={comment.user.fullname}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-fit h-fit bg-border_dark p-2 rounded-2xl">
          <p className="text-h6 font-bold">{comment.user.fullname}</p>
          <p className="text-body-sm">{comment.content}</p>
        </div>
      </div>
      <div className="text-red-500 cursor-pointer" onClick={handleDelComment}>
        Del
      </div>
    </div>
  )
}

export default CommentItem
