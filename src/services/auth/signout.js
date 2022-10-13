import { signOut as signOutFromFirebase } from 'firebase/auth'
import { auth } from '../firebase.config'

const signOut = async () => {
  await signOutFromFirebase(auth)
    .then(() => {
      // Sign-out successfull
      // Direct homepage
    })
    .catch((e) => {
      // An error happened
      // Log error
    })
}

export default signOut
