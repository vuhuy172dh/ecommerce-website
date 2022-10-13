import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { USERS } from '../constant/firestore'

// Return [error, isProcessing]
// Sign up with email & password
const signUp = async (fullname, email, password) => {
  // Error from firebase
  let error
  let userOutput = {
    fullname,
    email,
    type: 1
  }

  // Authentication firebase service
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user.uid)
    .then((uid) => {
      // Create an user document to firestore
      const docRef = doc(db, USERS, uid)
      setDoc(docRef, userOutput)
    })
    .then((doc) => console.log(doc))
    .catch((error) => {
      console.log(error)
      //   return [error, 'DONE']
    })
}

export default signUp
