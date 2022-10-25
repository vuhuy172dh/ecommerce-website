import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'react-toastify'

import { deleteComment } from '../../redux/features/comment/commentSlice'
import { selectProduct } from '../../redux/features/productSlice'
import { selectUserUid } from '../../redux/features/userSlice'
import Avatar from '../../assets/images/avatar.png'

function CommentItem({ comment }) {
  const dispatch = useDispatch()
  const product = useSelector(selectProduct)
  const userUid = useSelector(selectUserUid)
  const commentUid = comment.uid
  const [hover, setHover] = useState(false)

  const handleDelComment = () => {
    if (userUid === null) {
      toast.error('Please Sign In')
      return
    }
    dispatch(deleteComment(userUid, product.uuid, commentUid))
  }

  return (
    <div
      className="w-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/**/}
      <div className="w-full h-full flex gap-2 pt-4">
        <div className="h-12 w-12 shrink-0 rounded-full border-[3px] border-border_dark dark:border-dark_secondary overflow-hidden">
          <img
            src={comment.user.avatar || Avatar}
            alt={comment.user.fullname}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-fit h-fit bg-border_dark dark:bg-dark_secondary p-2 rounded-2xl relative">
          <p className="text-h6 font-bold">{comment.user.fullname}</p>
          <p className="text-body-sm">{comment.content}</p>
          <AnimatePresence>
            {hover && (
              <motion.div
                className="cursor-pointer w-fit h-fit px-3 rounded-full text-light_grey text-h6 bg-red-500 absolute -top-3 right-2"
                onClick={handleDelComment}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
              >
                delete
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
