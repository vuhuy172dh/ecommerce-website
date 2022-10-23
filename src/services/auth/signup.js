import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

import { auth } from '../firebase.config'
import { db } from '../firebase.config'
import { USERS } from '../constant/firestore'
import getErrorMessage from '../constant/err'

// Sign up with email & password
const signUp = async (fullname, email, password) => {
  let user = {
    fullname,
    email,
    created_date: serverTimestamp(),
    type: 1
  }

  // Authentication firebase service
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    // Add uid property
    user.uid = userCredential.user.uid

    // Create an user document to firestore
    const docRef = doc(db, USERS, userCredential.user.uid)
    setDoc(docRef, user)
    return Promise.resolve(user)
  } catch (error) {
    console.log(error)
    const { code } = error
    const errMes = getErrorMessage(code)
    return Promise.reject(errMes)
  }
}

export default signUp
