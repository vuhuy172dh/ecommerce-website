import { auth } from '../firebase.config'
import { storage } from '../firebase.config'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage'
// function create userImage save in store
//return a link of avatar image
const createUserImg = async (File) => {
  try {
    const userId = auth.currentUser.providerData[0].uid
    const imgRef = ref(storage, `users/${userId}/avatar`)
    const snap = await uploadBytes(imgRef, File)
    const imgUrl = await getDownloadURL(ref(storage, snap.ref.fullPath))
    return Promise.resolve(imgUrl)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default createUserImg
