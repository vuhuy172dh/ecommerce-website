import { writeBatch, addDoc, collection, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { CART, USERS } from '../constant/firestore'

// Truyền vào hàm này là uid của user
const addProductToCart = async (uidUser, product, number) => {
  try {
    const cartRef = collection(db, `${USERS}/${uidUser}/${CART}`)

    const cart = {
      cartItem: product,
      number: number
    }
    // Add data to firestore
    const doc = await addDoc(cartRef, cart)
    cart.uid = doc.id
    return Promise.resolve(cart)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

// Anonymous user => Auth user
// Chuyển danh sách sp trong giỏ hàng lên firebase
// Mục đích hàm này là như vậy
const addListProductToCart = async (uidUser, listItem) => {
  const listCartItem = listItem.map((item) => {
    return {
      cartItem: item.cartItem,
      number: item.number // default value
      //created_date: serverTimestamp(),
      //updated_date: serverTimestamp()
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
    return Promise.resolve('Successfully add item to cart')
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export { addProductToCart, addListProductToCart }
export default addProductToCart
