import { doc, deleteDoc } from 'firebase/firestore'
import { USERS, ADDRESS } from '../constant/firestore'
import { db } from '../firebase.config'

const deleteOneAddress = async (uidUser, uidAddr) => {
  try {
    const path = `${USERS}/${uidUser}/${ADDRESS}`
    const addrRef = doc(db, path, uidAddr)

    await deleteDoc(addrRef)
    return Promise.resolve('delete address successfully')
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default deleteOneAddress
