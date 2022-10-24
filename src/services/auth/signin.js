import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import {
  signInWithEmailAndPassword as signIn,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import getErrorMessage from '../constant/err'
import { db } from '../firebase.config'
import { USERS } from '../constant/firestore'
import { auth } from '../firebase.config'

// Sign in with Email & Password
const signInWithEmailAndPassword = async (email, password) => {
  try {
    // Show loading spinner
    // Dispatch action
    const userCredential = await signIn(auth, email, password)
    return Promise.resolve(userCredential.user)
  } catch (error) {
    const { code } = error
    const errMes = getErrorMessage(code)
    return Promise.reject(errMes)
  }
}

// Sign in with Google
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()

  try {
    const userCredential = await signInWithPopup(auth, provider)

    // Successfull login with google provider
    const isNewUser = userCredential['_tokenResponse'].isNewUser
    if (!isNewUser) {
      return Promise.resolve(userCredential.user)
    }

    // If first login, create an user doc & save to firestore
    const user = {
      fullname: userCredential.user.displayName,
      email: userCredential.user.email,
      date_created: serverTimestamp(),
      type: 1,
      uid: userCredential.user.uid
    }

    const docRef = doc(db, USERS, user.uid)
    setDoc(docRef, user)
    return Promise.resolve(userCredential.user)
  } catch (e) {
    // Fail to login with google provider
    const { code } = e
    // console.log(e)
    return Promise.reject(code)
  }
}

export { signInWithEmailAndPassword, signInWithGoogle }
//export default SignInWithEmailAndPassword
