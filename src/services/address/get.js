import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import { ADDRESS, USERS } from '../constant/firestore'

// GetListAddress function
// Cung cấp cho hàm này uid của người dùng
const getListAddress = async (uid) => {
  let listAddress = []

  try {
    // Trỏ vào sub-collection ADDRESS với path: users/:uid/addr.
    const path = `${USERS}/${uid}/${ADDRESS}`
    // Lấy được collection ref
    const collectionRef = collection(db, path)
    const querySnapshot = await getDocs(collectionRef)
    querySnapshot.forEach((doc) => {
      // Original raw
      const data = doc.data()
      // Add uid field to data
      data.uid = doc.id
      listAddress.push(data)
    })
    return Promise.resolve(listAddress)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default getListAddress
