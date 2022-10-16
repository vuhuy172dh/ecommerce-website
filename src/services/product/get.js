import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import { PRODUCTS } from '../constant/firestore'

// Listing array object category
const getListProducts = async () => {
  const querySnapshot = await getDocs(collection(db, PRODUCTS))
  const listProducts = []
  querySnapshot.forEach((doc) => {
    listProducts.push(doc.data())
    listProducts[listProducts.length - 1].uuid = doc.id
  })
  return Promise.resolve(listProducts)
}

//show one product by id
export const getProduct = async (id) => {
  try {
    const docRef = await doc(db, PRODUCTS, id)
    const docSnap = await getDocs(docRef)
    return Promise.resolve(docSnap.data())
  } catch (error) {
    return Promise.reject(error)
  }
}

export default getListProducts
