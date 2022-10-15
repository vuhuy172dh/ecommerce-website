import { signOut as signOutFromFirebase } from 'firebase/auth'
import { auth } from '../firebase.config'
import { setLogOutUser, setWaiting } from '../../redux/features/userSlice'

const signOut = (dispatch) => {
  dispatch(setWaiting())
  signOutFromFirebase(auth)
    .then(() => {
      dispatch(setLogOutUser())
      // Sign-out successfull
      // Direct homepage
    })
    .catch((e) => {
      alert(e)
      // An error happened
      // Log error
    })
}

export default signOut
