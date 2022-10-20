import {
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  limit,
  startAfter,
  where
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { PRODUCTS } from '../constant/firestore'

// Listing array object category
const getListProducts = async (startPoint) => {
  try {
    let start
    if (startPoint !== null) {
      start = query(collection(db, PRODUCTS), startAfter(startPoint), limit(2))
    } else {
      start = query(collection(db, PRODUCTS), limit(2))
    }

    const querySnapshot = await getDocs(start)

    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]

    const listProducts = []
    querySnapshot.forEach((doc) => {
      listProducts.push(doc.data())
      listProducts[listProducts.length - 1].uuid = doc.id
    })
    return Promise.resolve([listProducts, lastVisible])
  } catch (error) {
    return Promise.reject(error)
  }
}

// Listing array object category
export const getListProductsByCategory = async (startPoint, category) => {
  try {
    let start
    if (startPoint !== null) {
      start = query(
        collection(db, PRODUCTS),
        startAfter(startPoint),
        where('category', '==', category),
        limit(2)
      )
    } else {
      start = query(
        collection(db, PRODUCTS),
        limit(2),
        where('category', '==', category)
      )
    }

    const querySnapshot = await getDocs(start)

    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]

    const listProducts = []
    querySnapshot.forEach((doc) => {
      listProducts.push(doc.data())
      listProducts[listProducts.length - 1].uuid = doc.id
    })
    return Promise.resolve([listProducts, lastVisible])
  } catch (error) {
    return Promise.reject(error)
  }
}

//show one product by id
export const getProduct = async (id) => {
  try {
    const docRef = doc(db, PRODUCTS, id)
    const docSnap = await getDoc(docRef)
    const product = structuredClone(docSnap.data())
    product.uuid = docSnap.id
    return Promise.resolve(product)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default getListProducts
