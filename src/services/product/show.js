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
  return listProducts
}

//show one product by id
export const showOneProduct = async (id) => {
  try {
    const docRef = await doc(db, PRODUCTS, id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  } catch (error) {
    console.log(error)
  }
}

export default getListProducts
