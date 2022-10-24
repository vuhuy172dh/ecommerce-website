import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import { CATEGORIES } from '../constant/firestore'

// Listing array object category
const getListCategories = async () => {
  const querySnapshot = await getDocs(collection(db, CATEGORIES))
  const listCategories = []
  querySnapshot.forEach((doc) => {
    listCategories.push(doc.data())
    listCategories[listCategories.length - 1].uuid = doc.id
  })
  return Promise.resolve(listCategories)
}

export default getListCategories
