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
    const productItem = doc(db, USERS, item.uid)
    await updateDoc(productItem, {
      uid: item?.uid,
      addr_default: item?.addr_default,
      email: item?.email,
      fullname: item?.fullname,
      type: 1,
      phone: item?.phone,
      dob: item?.birth,
      gender: item?.gender,
      avatar: item?.avatar,
      //created_date: item.created_date,
      updated_date: serverTimestamp()
    })
    return Promise.resolve('update successfully')
  } catch (error) {
    return Promise.resolve(error)
  }
}

//function update userImage in storage
//return is new link avatar image
//don't use
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
