import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { USERS } from '../constant/firestore'

// Listing array object user get from firestore of firebase
const showOneUser = async (uuid) => {
  try {
    const querySnapshot = await getDoc(doc(db, USERS, uuid))
    return Promise.resolve(querySnapshot.data())
  } catch (error) {
    return Promise.reject(error)
  }
}

export default showOneUser
