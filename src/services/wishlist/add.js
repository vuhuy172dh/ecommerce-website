import {
  serverTimestamp,
  writeBatch,
  addDoc,
  collection,
  doc
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { WISHLIST, PRODUCTS, USERS } from '../constant/firestore'

// Truyền vào hàm này là uid của user
const addProductToWishlist = async (uidUser, product) => {
  try {
    // Product ref
    //const productRef = doc(db, `${PRODUCTS}`, uidProduct)

    // Collection wishlist ref
    const wishlistRef = collection(db, `${USERS}/${uidUser}/${WISHLIST}`)

    // Add data to firestore
    const doc = await addDoc(wishlistRef, {
      product: product,
      created_date: serverTimestamp(),
      updated_date: serverTimestamp()
    })

    const doc_uid = doc.id
    const newWishlistItem = {
      product: product,
      uid: doc_uid
    }
    return Promise.resolve(newWishlistItem)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

// Anonymous user => Auth user
// Chuyển danh sách sp trong wishlist lên firebase
// Mục đích hàm này là như vậy
const addListProductToWishlist = async (uidUser, listUidProduct) => {
  // listUidProduct: [uid1, uid2, ...]
  // map [uid1, uid2, ...]
  // => [{product_ref: a, quantity: 1, created_date: b, updated_date}, ...]

  const listCartItem = listUidProduct.map((value) => {
    const productRef = doc(db, `${PRODUCTS}`, value)
    return {
      product_ref: productRef,
      created_date: serverTimestamp(),
      updated_date: serverTimestamp()
    }
  })

  try {
    // Get a new write batch
    // Batch script to write multiple documents to a collection in once
    const batch = writeBatch(db)

    // Collection wishlist ref
    const wishlistRef = collection(db, `${USERS}/${uidUser}/${WISHLIST}`)
    listCartItem.forEach((wishlistItem) => {
      // Create doc ref with a generated ids
      const docRef = doc(wishlistRef)
      batch.set(docRef, wishlistItem)
    })

    // Commit the batch
    await batch.commit()

    // Do sth, may be with redux
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export { addProductToWishlist, addListProductToWishlist }
export default addProductToWishlist
