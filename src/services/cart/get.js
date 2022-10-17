import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import { USERS, CART } from '../constant/firestore'

// Listing product in cart
const listingProductInCart = async (uidUser) => {
  try {
    const cartCollectionRef = collection(db, `${USERS}/${uidUser}/${CART}`)
    const querySnapshot = await getDocs(cartCollectionRef)
    const listProductInCart = []
    querySnapshot.forEach((doc) => {
      // Get original data
      const data = doc.data()
      // Add uid field to object
      data.uid = doc.id
      listProductInCart.push(data)
    })

    return Promise.resolve(listProductInCart)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default listingProductInCart
