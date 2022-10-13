import { auth } from '../firebase.config'
import {
  signInWithEmailAndPassword as signIn,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

// Return [error, isProcessing]
// Sign in with Email & Password
const signInWithEmailAndPassword = async (email, password) => {
  await signIn(auth, email, password)
    .then((userCredential) => userCredential.user.uid)
    .then((uid) => console.log(uid))
    .catch((e) => console.log(e))
}

// Sign in with Google
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
    .then((res) => {
      // Successfull login with google provider
      console.log(res)
    })
    .catch((e) => {
      // Fail to login with google provider
      console.log(e)
    })
}

export { signInWithEmailAndPassword, signInWithGoogle }
export default signInWithEmailAndPassword
