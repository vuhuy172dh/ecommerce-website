import { doc, deleteDoc } from 'firebase/firestore'
import { USERS, WISHLIST } from '../constant/firestore'
import { auth, db } from '../firebase.config'

const deleteOneProductFromWishlist = async (uidWishlist) => {
  try {
    const userUid = auth.currentUser.uid
    const wishlistItemRef = doc(
      db,
      `${USERS}/${userUid}/${WISHLIST}`,
      uidWishlist
    )
    await deleteDoc(wishlistItemRef)
    return Promise.resolve('remove wishlist item successfully')
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default deleteOneProductFromWishlist
