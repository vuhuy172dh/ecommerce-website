import { doc, updateDoc } from 'firebase/firestore'
import { USERS, CART } from '../constant/firestore'
import { db } from '../firebase.config'

const updateFieldNumberCartItem = async (uidUser, uidCartItem, number) => {
  try {
    const cartItemRef = doc(db, `${USERS}/${uidUser}/${CART}`, uidCartItem)

    updateDoc(cartItemRef, {
      number
    })
    return Promise.resolve('successfully update number')
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default updateFieldNumberCartItem
