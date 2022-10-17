import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import { USERS, WISHLIST } from '../constant/firestore'

// Listing product in Wishlist
const listingProductInWishlist = async (uidUser) => {
  try {
    const wishlistCollectionRef = collection(
      db,
      `${USERS}/${uidUser}/${WISHLIST}`
    )
    const querySnapshot = await getDocs(wishlistCollectionRef)
    const listProductInWishlist = []
    querySnapshot.forEach((doc) => {
      // Get original data
      const data = doc.data()
      // Add uid field to object
      data.uid = doc.id
      listProductInWishlist.push(data)
    })

    return Promise.resolve(listProductInWishlist)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default listingProductInWishlist
