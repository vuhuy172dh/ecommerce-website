import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { USERS, CART } from '../constant/firestore'
import { db } from '../firebase.config'

const updateFieldQuantiyCartItem = async (uidUser, uidCartItem, quantity) => {
  try {
    const cartItemRef = doc(db, `${USERS}/${uidUser}/${CART}`, uidCartItem)

    updateDoc(cartItemRef, {
      quantity,
      updated_date: serverTimestamp()
    })
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default updateFieldQuantiyCartItem
