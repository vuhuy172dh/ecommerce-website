import { auth } from '../firebase.config'
import { signInWithEmailAndPassword as signIn } from 'firebase/auth'

// Return [error, isProcessing]
const signInWithEmailAndPassword = async (email, password) => {
  await signIn(auth, email, password)
    .then((userCredential) => userCredential.user.uid)
    .then((uid) => console.log(uid))
    .catch((e) => console.log(e))
}

export default signInWithEmailAndPassword
