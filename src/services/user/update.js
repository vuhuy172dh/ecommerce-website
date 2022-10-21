import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { USERS } from '../constant/firestore'

// Function update user information for firestore
// item: Data user need to update
const updateOneUser = async (item) => {
  try {
    const productItem = doc(db, USERS, item.uuid)
    await updateDoc(productItem, {
      uuid: item?.uuid,
      addr_default: item?.addr_default,
      email: item?.email,
      fullname: item?.fullname,
      type: 1,
      phone: item?.phone,
      dob: item?.birth,
      gender: item?.gender,
      //img: item?.img,
      //created_date: item?.created_date,
      updated_date: serverTimestamp()
    })
    return Promise.resolve('update successfully')
  } catch (error) {
    return Promise.reject(error)
  }
}

export default updateOneUser
