import { sendPasswordResetEmail } from 'firebase/auth'

import { auth } from '../firebase.config'
import { EMAIL_SENDED } from '../constant/success'
import getErrorMessage from '../constant/err'

const resetPasswordByEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    return Promise.resolve(EMAIL_SENDED)
  } catch (e) {
    const { code } = e
    const errMes = getErrorMessage(code)
    return Promise.reject(errMes)
  }
}

export default resetPasswordByEmail
