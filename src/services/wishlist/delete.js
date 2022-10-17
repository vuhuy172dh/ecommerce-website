import { doc, deleteDoc } from 'firebase/firestore'
import { USERS, WISHLIST } from '../constant/firestore'
import { db } from '../firebase.config'

const deleteOneProductFromWishlist = async (uidUser, uidWishlist) => {
  try {
    const wishlistItemRef = doc(
      db,
      `${USERS}/${uidUser}/${WISHLIST}`,
      uidWishlist
    )
    await deleteDoc(wishlistItemRef)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default deleteOneProductFromWishlist
