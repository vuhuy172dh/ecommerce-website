import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db, storage } from '../firebase.config'
import { USERS } from '../constant/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes
} from 'firebase/storage'

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

export const updateUserPassword = async (item) => {
  try {
    const userItem = doc(db, USERS, item.uuid)
    await updateDoc(userItem, {
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

//function update userImage in storage
//return is new link avatar image
export const updateUserImg = async (newFile) => {
  const userId = auth.currentUser.providerData[0].uid

  const imgRef = ref(storage, `users/${userId}/avatar`)
  await deleteObject(imgRef)
    .then(async () => {
      const functionUpdateImg = async () => {
        //add new image to storage
        const snap = await uploadBytes(imgRef, newFile)
        const imgUrl = await getDownloadURL(ref(storage, snap.ref.fullPath))
        return imgUrl
      }
      const getUrl = async () => {
        functionUpdateImg().then((result) => result)
      }
      return getUrl()
    })
    .catch((error) => {
      console.log(error)
      return false
    })
}

export default updateOneUser
