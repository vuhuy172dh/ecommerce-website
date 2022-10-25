import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

import CommentItem from './commentItem'
import {
  createComment,
  selectComment,
  selectCommentStatus
} from '../../redux/features/comment/commentSlice'
import {
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
  selectUserUid
} from '../../redux/features/userSlice'
import { Controller, Textarea } from '../fields'

function CommentDrawer({ commentOpen, handleOpen, productUid }) {
  const dispatch = useDispatch()
  const commentsList = useSelector(selectComment)
  const commentStatus = useSelector(selectCommentStatus)
  const userUid = useSelector(selectUserUid)
  const userEmail = useSelector(selectUserEmail)
  const userName = useSelector(selectUserName)
  const userAvatar = useSelector(selectUserAvatar)

  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      comment: ''
    }
  })

  const handleSend = (data) => {
    const commentData = {
      content: data.comment,
      user: {
        fullname: userName,
        email: userEmail,
        uid: userUid,
        avatar: userAvatar
      }
    }

    if (userUid === null) {
      toast.error('please signin before comment')
    } else {
      dispatch(createComment(productUid, commentData))
      setValue('comment', '')
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 flex-col ${
        commentOpen ? 'z-[300] visible' : 'invisible z-[-300]'
      } transition-all duration-100`}
    >
      {/*backdrop*/}
      <div
        className="w-full h-screen fixed top-0 left-0 bg-white/20 dark:bg-black/20 backdrop-blur-sm z-20 transition-all duration-100 cursor-pointer"
        onClick={() => handleOpen(() => setValue('comment', ''))}
      ></div>

      {/*container*/}
      <div
        className={`w-full h-[90vh] pt-4 fixed bottom-0 right-0 bg-border_grey dark:bg-secondary border-t border-t-primary/30 dark:border-t-light_grey/30 rounded-t-3xl z-50 laptop:w-1/3 laptop:h-screen laptop:rounded-t-none laptop:rounded-l-3xl laptop:border-l laptop:border-l-primary/30 dark:laptop:border-l-light_grey/30 ${
          commentOpen
            ? 'laptop:translate-x-0 laptop:translate-y-0 opacity-1 translate-y-0'
            : 'laptop:translate-x-full laptop:translate-y-0 opacity-100 translate-y-full'
        } transition-all duration-100`}
      >
        {/*comment title*/}
        <div className="w-full h-full flex flex-col relative px-3">
          <p className="text-h4">Comment</p>

          <hr className="w-full my-2 border-t border-t-primary/40 dark:border-t-light_grey/40" />

          {/*others comment*/}
          <div className="w-full flex pb-28 no-scrollbar flex-col gap-2 overflow-auto relative">
            {commentStatus === 'success' ? (
              <AnimatePresence>
                {commentOpen &&
                  commentsList.map((item, index) => (
                    <motion.div
                      key={item.uid}
                      initial={{ x: -40, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          type: 'spring',
                          duration: 0.2,
                          delay: 0.1 * index
                        }
                      }}
                      exit={{ x: -40, opacity: 0 }}
                    >
                      <CommentItem comment={item} />
                    </motion.div>
                  ))}
              </AnimatePresence>
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>

        <div className="w-full h-20 absolute bottom-0 left-0">
          <form
            className="w-full h-full px-5 flex gap-2 items-center justify-center bg-border_dark dark:bg-dark_secondary rounded-t-2xl border-t border-t-primary/30 dark:border-t-light_grey/30"
            onSubmit={handleSubmit(handleSend)}
          >
            <Controller
              {...{
                control,
                register,
                name: 'comment',
                type: 'text',
                placeholder: 'Your comment....',
                className:
                  'w-full px-5 h-10 no-scrollbar dark:bg-secondary rounded-2xl outline-none resize-none',
                handleChange: () => {},
                render: (props) => <Textarea {...props} />
              }}
            />
            <button type="submit" className="cursor-pointer">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CommentDrawer
