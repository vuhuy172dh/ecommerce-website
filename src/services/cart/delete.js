import { doc, deleteDoc } from 'firebase/firestore'
import { USERS, CART } from '../constant/firestore'
import { db } from '../firebase.config'

const deleteOneProductFromCart = async (uidUser, uidCart) => {
  try {
    const cartItemRef = doc(db, `${USERS}/${uidUser}/${CART}`, uidCart)
    await deleteDoc(cartItemRef)
    return Promise.reject('ok')
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default deleteOneProductFromCart
