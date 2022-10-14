import getErrorMessage from '../constant/err'
import { auth } from '../firebase.config'
import {
  signInWithEmailAndPassword as signIn,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

// Return [error, isProcessing]
// Sign in with Email & Password
const signInWithEmailAndPassword = async (email, password) => {
  try {
    // Show loading spinner
    // Dispatch action
    await signIn(auth, email, password)
  } catch (error) {
    const { code } = error
    const errMes = getErrorMessage(code)
    return Promise.reject(errMes)
  } finally {
    // Hide loading spinner
  }
}

// Sign in with Google
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()

  try {
    const userImple = await signInWithPopup(auth, provider)

    // Successfull login with google provider
    console.log(userImple)
  } catch (e) {
    // Fail to login with google provider
    const { code } = e
    // console.log(e)
    return Promise.reject(code)
  }
}

export { signInWithEmailAndPassword, signInWithGoogle }
export default signInWithEmailAndPassword
