import { updatePassword } from 'firebase/auth'

import { auth } from '../firebase.config'
import { PASSWORD_CHANGE } from '../constant/success'
import getErrorMessage from '../constant/err'

const updatePasswordByEmail = async (newPassword) => {
  try {
    await updatePassword(auth.currentUser, newPassword)
    return Promise.resolve(PASSWORD_CHANGE)
  } catch (e) {
    const { code } = e
    const errMes = getErrorMessage(code)
    return Promise.reject(errMes)
  }
}

export default updatePasswordByEmail
