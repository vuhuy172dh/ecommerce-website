const err = {
  // Sign in
  'auth/invalid-email': 'Email or password is incorrect',
  'auth/wrong-password': 'Email or password is incorrect',

  // Sign up
  'auth/email-already-in-use': 'Email address is already registered'

  // Forget password
}

const getErrorMessage = (errorCode) => {
  return err[errorCode] || 'Maybe there was something wrong'
}

export default getErrorMessage
