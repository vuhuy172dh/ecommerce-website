import {
  serverTimestamp,
  writeBatch,
  addDoc,
  collection,
  doc
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { CART, PRODUCTS, USERS } from '../constant/firestore'

// Truyền vào hàm này là uid của user
const addProductToCart = async (uidUser, uidProduct) => {
  try {
    // Product ref
    const productRef = doc(db, `${PRODUCTS}`, uidProduct)

    // Collection cart ref
    const cartRef = collection(db, `${USERS}/${uidUser}/${CART}`)

    // Add data to firestore
    await addDoc(cartRef, {
      product_ref: productRef,
      quantity: 1, // default value
      created_date: serverTimestamp(),
      updated_date: serverTimestamp()
    })
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

// Anonymous user => Auth user
// Chuyển danh sách sp trong giỏ hàng lên firebase
// Mục đích hàm này là như vậy
const addListProductToCart = async (uidUser, listUidProduct) => {
  // listUidProduct: [uid1, uid2, ...]
  // map [uid1, uid2, ...]
  // => [{product_ref: a, quantity: 1, created_date: b, updated_date}, ...]

  const listCartItem = listUidProduct.map((value) => {
    const productRef = doc(db, `${PRODUCTS}`, value)
    return {
      product_ref: productRef,
      quantity: 1, // default value
      created_date: serverTimestamp(),
      updated_date: serverTimestamp()
    }
  })

  try {
    // Get a new write batch
    // Batch script to write multiple documents to a collection in once
    const batch = writeBatch(db)

    // Collection cart ref
    const cartRef = collection(db, `${USERS}/${uidUser}/${CART}`)
    listCartItem.forEach((cartItem) => {
      // Create doc ref with a generated ids
      const docRef = doc(cartRef)
      batch.set(docRef, cartItem)
    })

    // Commit the batch
    await batch.commit()

    // Do sth, may be with redux
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export { addProductToCart, addListProductToCart }
export default addProductToCart
