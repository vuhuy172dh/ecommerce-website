import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import {
  signInWithEmailAndPassword as signIn,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { setWaiting, setActiveUser } from '../../redux/features/userSlice'

import getErrorMessage from '../constant/err'
import { db } from '../firebase.config'
import { USERS } from '../constant/firestore'
import { auth } from '../firebase.config'

// Sign in with Email & Password
const signInWithEmailAndPassword = async (email, password, dispatch) => {
  dispatch(setWaiting())
  try {
    // Show loading spinner
    // Dispatch action
    const userCredential = await signIn(auth, email, password)
    dispatch(
      setActiveUser({
        name: userCredential.user.displayName,
        email: userCredential.user.email
      })
    )
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
    const userCredential = await signInWithPopup(auth, provider)

    // Successfull login with google provider
    const isNewUser = userCredential['_tokenResponse'].isNewUser
    if (!isNewUser) return

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
  } catch (e) {
    // Fail to login with google provider
    const { code } = e
    // console.log(e)
    return Promise.reject(code)
  }
}

export { signInWithEmailAndPassword, signInWithGoogle }
//export default SignInWithEmailAndPassword
