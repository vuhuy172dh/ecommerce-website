import { doc, deleteDoc, runTransaction } from 'firebase/firestore'
import { db } from '../firebase.config'
import { PRODUCTS } from '../constant/firestore'

const deleteOneComment = async ({ idProduct, idComment, userUid }) => {
  const commentRef = doc(db, PRODUCTS, idProduct, 'comments', idComment)

  try {
    const result = await runTransaction(db, async (comment) => {
      //read comment
      const commentDoc = await comment.get(commentRef)

      if (!commentDoc.exists()) {
        return {
          status: 'error',
          mes: 'Doc does not exists!'
        }
      }

      //get comment user uid
      const commentUserUid = commentDoc.data().user.uid
      if (commentUserUid !== userUid) {
        return {
          status: 'error',
          mes: 'not your comment'
        }
      }

      //delete your comment
      comment.delete(commentRef)

      return {
        status: 'success',
        mes: 'delete your comment successfully'
      }
    })

    if (result.status === 'success') return Promise.resolve(result.mes)
    return Promise.reject(result.mes)
    //deleteDoc(doc(db, PRODUCTS, idProduct, 'comments', idComment))
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default deleteOneComment
