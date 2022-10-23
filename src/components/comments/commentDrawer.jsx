import CeilingLamp from '../../assets/images/CeilingLamp.png'
import CommentItem from './commentItem'
import BlueChair from '../../assets/images/BlueChair.png'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectComment,
  selectCommentStatus,
  setActiveContent,
  setComments
} from '../../redux/features/comment/commentSlice'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const comments = [
  {
    name: 'Huy Vu',
    avatar: CeilingLamp,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit tortor id lectus auctor condimentum. Nam pretium lectus eu turpis.'
  },
  {
    name: 'Hoang Phuc',
    avatar: CeilingLamp,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor.'
  },
  {
    name: 'Le Nghia',
    avatar: BlueChair,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sollicitudin dolor. Phasellus commodo tincidunt.'
  }
]

function CommentDrawer({ commentOpen, handleOpen }) {
  const dispatch = useDispatch()
  const commentsList = useSelector(selectComment)
  const commentStatus = useSelector(selectCommentStatus)

  useEffect(() => {
    dispatch(setComments(comments))
  }, [])

  const handleSend = (data) => {
    data.preventDefault()

    console.log(data.target[0].value)
    dispatch(setActiveContent(data.target[0].value))
  }

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 flex-col ${
        commentOpen ? 'z-[300] visible' : 'invisible z-[-300]'
      }`}
    >
      {/*backdrop*/}
      <div
        className="w-full h-screen fixed top-0 left-0 bg-white/20 dark:bg-black/20 backdrop-blur-sm z-20"
        onClick={handleOpen}
      ></div>

      {/*container*/}
      <div className="w-full h-[90vh] pt-4 fixed bottom-0 right-0 bg-border_grey border-t border-t-primary/30 rounded-t-3xl z-50 laptop:w-1/3 laptop:h-screen laptop:rounded-t-none laptop:rounded-l-3xl laptop:border-l laptop:border-l-primary/30">
        {/*comment title*/}
        <div className="w-full h-full flex flex-col relative px-3">
          <p className="text-h4">Comment</p>

          <hr className="w-full my-2 border-t border-t-primary/40" />

          {/*others comment*/}
          <div className="w-full flex pb-28 no-scrollbar flex-col gap-2 overflow-auto relative">
            {commentStatus === 'success' ? (
              <AnimatePresence>
                {commentOpen &&
                  commentsList.map((item, index) => (
                    <motion.div
                      key={index}
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
            className="w-full h-full px-5 flex gap-2 items-center justify-center bg-border_dark rounded-t-2xl border-t border-t-primary/30"
            onSubmit={handleSend}
          >
            <textarea
              type="text"
              rows={50}
              name="comment"
              id="comment"
              className="w-full px-5 h-10 no-scrollbar rounded-2xl outline-none resize-none"
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
