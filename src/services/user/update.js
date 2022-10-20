import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { USERS } from '../constant/firestore'

// Function update user information for firestore
// item: Data user need to update
const updateOneUser = async (item) => {
  try {
    const productItem = doc(db, USERS, item.uuid)
    await updateDoc(productItem, {
      uuid: item.uuid,
      addr_default: item.addr_default,
      email: item.email,
      fullname: item.fullname,
      type: 1,
      phone: item.phone,
      dob: item.dob,
      gender: item.gender,
      img: item.img,
      created_date: item.created_date,
      updated_date: serverTimestamp()
    })
  } catch (error) {
    console.log(error)
    return false
  }
  return true
}

export default updateOneUser
