import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import { PRODUCTS } from '../constant/firestore'

const showListComments = async (idProduct) => {
  try {
    const commentSnap = await getDocs(
      collection(db, PRODUCTS, idProduct, 'comments')
    )

    const listComments = []
    commentSnap.forEach((doc) => {
      listComments.push(doc.data())
      listComments[listComments.length - 1].uid = doc.id
    })
    console.log(listComments)
    return Promise.resolve(listComments)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default showListComments