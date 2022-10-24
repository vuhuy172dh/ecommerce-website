import { doc, updateDoc } from 'firebase/firestore'
import { USERS } from '../constant/firestore'
import { db } from '../firebase.config'

const setAddressDefault = async (uidUser, uidAddr) => {
  try {
    const userPath = `${USERS}/${uidUser}`
    const userRef = doc(db, userPath)
    await updateDoc(userRef, {
      addr_default: uidAddr
    })

    return Promise.resolve('set default successfully')
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default setAddressDefault
