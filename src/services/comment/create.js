import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { PRODUCTS } from '../constant/firestore'

// Function create new Comment
const createOneComment = async ({ idProduct, data }) => {
  try {
    const commentRef = await addDoc(
      collection(db, PRODUCTS, idProduct, 'comments'),
      {
        content: data.content,
        user: data.user,
        create_date: serverTimestamp()
      }
    )
    const new_data = data
    new_data.uid = commentRef.id
    console.log('new data', new_data)
    return Promise.resolve(new_data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default createOneComment
